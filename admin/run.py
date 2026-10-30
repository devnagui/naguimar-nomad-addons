import json
import os
import socket
import subprocess
import time
from pathlib import Path
from urllib.parse import urlparse


def require_text(options, key):
    value = options.get(key)
    if not isinstance(value, str) or not value.strip():
        raise SystemExit(f"Invalid option {key}: a non-empty value is required")
    return value.strip()


def require_port(options, key):
    value = options.get(key)
    if isinstance(value, bool) or not isinstance(value, int) or not 1 <= value <= 65535:
        raise SystemExit(f"Invalid option {key}: expected an integer from 1 to 65535")
    return value


def validate_host(host, key):
    if "://" in host or "/" in host or any(character.isspace() for character in host):
        raise SystemExit(f"Invalid option {key}: use a hostname or IP address only")


def validate_url(value, key):
    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise SystemExit(f"Invalid option {key}: expected an http(s) URL")
    return parsed


def prepare_storage(storage, app_storage, allowed_roots=(Path("/media"), Path("/share"))):
    storage = storage.resolve(strict=False)
    roots = tuple(root.resolve(strict=False) for root in allowed_roots)
    if not storage.is_absolute() or not any(storage == root or root in storage.parents for root in roots):
        raise SystemExit("Invalid option storage_path: use an absolute /media or /share path")
    if not storage.is_dir() or not os.access(storage, os.R_OK | os.W_OK | os.X_OK):
        raise SystemExit(f"Storage is missing, inaccessible, or read-only: {storage}")
    if app_storage.is_symlink():
        if app_storage.resolve() == storage.resolve():
            return
        app_storage.unlink()
    if app_storage.exists():
        if not app_storage.is_dir() or any(app_storage.iterdir()):
            raise SystemExit(f"Refusing to replace non-empty application storage: {app_storage}")
        app_storage.rmdir()
    app_storage.symlink_to(storage, target_is_directory=True)


def wait_for_dependency(name, host, port, attempts=10, delay=3):
    last_error = "unknown error"
    for attempt in range(attempts):
        try:
            with socket.create_connection((host, port), timeout=3):
                return
        except OSError as error:
            last_error = str(error)
            if attempt + 1 < attempts:
                time.sleep(delay)
    raise SystemExit(f"Dependency {name} is unavailable at {host}:{port}: {last_error}")


def build_environment(options):
    app_key = require_text(options, "app_key")
    if len(app_key) < 16:
        raise SystemExit("Invalid option app_key: at least 16 characters are required")
    db_password = require_text(options, "db_password")
    db_host = require_text(options, "db_host")
    redis_host = require_text(options, "redis_host")
    validate_host(db_host, "db_host")
    validate_host(redis_host, "redis_host")
    db_port = require_port(options, "db_port")
    redis_port = require_port(options, "redis_port")
    redis_db = options.get("redis_db")
    if isinstance(redis_db, bool) or not isinstance(redis_db, int) or not 0 <= redis_db <= 63:
        raise SystemExit("Invalid option redis_db: expected an integer from 0 to 63")
    db_ssl = options.get("db_ssl")
    if not isinstance(db_ssl, bool):
        raise SystemExit("Invalid option db_ssl: expected true or false")
    log_level = options.get("log_level")
    if log_level not in {"trace", "debug", "info", "warn", "error", "fatal"}:
        raise SystemExit("Invalid option log_level")
    kiwix_url = require_text(options, "kiwix_internal_url")
    kiwix = validate_url(kiwix_url, "kiwix_internal_url")
    public_url = options.get("kiwix_public_url", "")
    if public_url:
        validate_url(public_url, "kiwix_public_url")
    environment = os.environ.copy()
    environment.update(
        APP_KEY=app_key,
        DB_HOST=db_host,
        DB_PORT=str(db_port),
        DB_USER=require_text(options, "db_user"),
        DB_PASSWORD=db_password,
        DB_DATABASE=require_text(options, "db_database"),
        DB_SSL=str(db_ssl).lower(),
        REDIS_HOST=redis_host,
        REDIS_PORT=str(redis_port),
        REDIS_DB=str(redis_db),
        NOMAD_STORAGE_PATH=require_text(options, "storage_path"),
        NOMAD_KIWIX_URL=kiwix_url,
        NOMAD_KIWIX_PUBLIC_URL=public_url,
        LOG_LEVEL=log_level,
    )
    return environment, (db_host, db_port), (redis_host, redis_port), (
        kiwix.hostname,
        kiwix.port or (443 if kiwix.scheme == "https" else 80),
    )


def main():
    with open("/data/options.json", encoding="utf-8") as options_file:
        options = json.load(options_file)
    environment, database, redis, kiwix = build_environment(options)
    prepare_storage(Path(environment["NOMAD_STORAGE_PATH"]), Path("/app/storage"))
    wait_for_dependency("MariaDB", *database)
    wait_for_dependency("Redis", *redis)
    wait_for_dependency("Kiwix", *kiwix)
    Path("/app/storage/logs").mkdir(parents=True, exist_ok=True)
    Path("/app/storage/kb_uploads").mkdir(parents=True, exist_ok=True)
    os.chdir("/app")
    subprocess.run(["node", "ace", "migration:run", "--force"], check=True, env=environment)
    subprocess.run(["node", "ace", "db:seed"], check=True, env=environment)
    os.execvpe("node", ["node", "bin/server.js"], environment)


if __name__ == "__main__":
    main()
