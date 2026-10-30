import json
import os
import shutil
from pathlib import Path


with open("/data/options.json", encoding="utf-8") as options_file:
    options = json.load(options_file)

app_key = options.get("app_key", "")
db_password = options.get("db_password", "")
if len(app_key) < 16 or not db_password:
    raise SystemExit("Configure app_key (16+ characters) and db_password before starting")

usb_storage = Path("/media/torrent_disk/project-nomad/storage")
app_storage = Path("/app/storage")
if not usb_storage.is_dir() or not os.access(usb_storage, os.W_OK):
    raise SystemExit(f"USB storage is unavailable or read-only: {usb_storage}")

if app_storage.is_symlink():
    if app_storage.resolve() != usb_storage:
        raise SystemExit(f"Unexpected /app/storage target: {app_storage.resolve()}")
else:
    if app_storage.exists():
        shutil.rmtree(app_storage)
    app_storage.symlink_to(usb_storage, target_is_directory=True)

environment = os.environ.copy()
environment["APP_KEY"] = app_key
environment["DB_PASSWORD"] = db_password
worker_command = Path("/app/commands/queue/work.js")
for command_file in Path("/app/commands").rglob("*.js"):
    if command_file != worker_command:
        command_file.unlink()
ace_module = Path("/app/node_modules/@adonisjs/ace/build/index.js")
ace_source = ace_module.read_text(encoding="utf-8")
validation_call = "  validateCommandMetaData(commandConstructor.serialize(), exportPath);"
if validation_call not in ace_source:
    raise SystemExit("Unable to apply the Node 24 Ace metadata compatibility patch")
ace_module.write_text(
    ace_source.replace(validation_call, ""),
    encoding="utf-8",
)
os.chdir("/app")
os.execvpe(
    "node",
    ["node", "ace", "queue:work", "--all"],
    environment,
)
