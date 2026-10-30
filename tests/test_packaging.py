import importlib.util
import struct
import tempfile
import unittest
from pathlib import Path

import yaml


ROOT = Path(__file__).parents[1]
APP_OPTIONS = {
    "app_key": "0123456789abcdef",
    "db_host": "core-mariadb.local.hass.io",
    "db_port": 3306,
    "db_user": "nomad_user",
    "db_password": "secret",
    "db_database": "nomad",
    "db_ssl": False,
    "redis_host": "local-naguimar-nomad-redis.local.hass.io",
    "redis_port": 6379,
    "redis_db": 0,
    "storage_path": "/media/torrent_disk/project-nomad/storage",
    "kiwix_internal_url": "http://local-naguimar-kiwix.local.hass.io:8111/wiki/",
    "log_level": "info",
}


def load_runner(name):
    spec = importlib.util.spec_from_file_location(f"{name}_runner", ROOT / name / "run.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class PackagingTests(unittest.TestCase):
    def test_packages_include_store_artwork(self):
        for name in ("admin", "worker", "redis"):
            for artwork, expected_size in (("icon.png", (128, 128)), ("logo.png", (250, 100))):
                data = (ROOT / name / artwork).read_bytes()
                self.assertEqual(data[:8], b"\x89PNG\r\n\x1a\n")
                self.assertEqual(struct.unpack(">II", data[16:24]), expected_size)

    def test_manifests_parse_and_keep_security_boundaries(self):
        manifests = {
            name: yaml.safe_load((ROOT / name / "config.yaml").read_text(encoding="utf-8"))
            for name in ("admin", "worker", "redis")
        }
        self.assertEqual(manifests["admin"]["name"], "Project NOMAD Command Center")
        self.assertEqual(manifests["worker"]["name"], "Project NOMAD Worker")
        self.assertEqual(manifests["redis"]["name"], "Project NOMAD Redis")
        self.assertEqual(manifests["admin"]["ports"]["8080/tcp"], 8088)
        self.assertTrue(manifests["admin"]["ingress"])
        self.assertEqual(manifests["admin"]["webui"], "http://[HOST]:[PORT:8080]/")
        self.assertNotIn("ports", manifests["redis"])
        for manifest in manifests.values():
            for forbidden in ("docker_api", "full_access", "host_network", "privileged"):
                self.assertNotIn(forbidden, manifest)

    def test_admin_and_worker_share_required_defaults(self):
        admin = yaml.safe_load((ROOT / "admin/config.yaml").read_text(encoding="utf-8"))
        worker = yaml.safe_load((ROOT / "worker/config.yaml").read_text(encoding="utf-8"))
        shared = set(APP_OPTIONS)
        for key in shared:
            self.assertEqual(admin["options"][key], worker["options"][key])
        self.assertEqual(admin["options"]["kiwix_public_url"], "")
        self.assertNotIn("kiwix_public_url", worker["options"])
        self.assertEqual(admin["map"], ["data:rw", "media:rw", "share:rw"])
        self.assertEqual(worker["map"], ["data:rw", "media:rw", "share:rw"])

    def test_runtime_options_become_environment(self):
        for name in ("admin", "worker"):
            options = APP_OPTIONS | (
                {"kiwix_public_url": ""}
                if name == "admin"
                else {}
            )
            environment, database, redis, kiwix = load_runner(name).build_environment(options)
            self.assertEqual(database, ("core-mariadb.local.hass.io", 3306))
            self.assertEqual(redis, ("local-naguimar-nomad-redis.local.hass.io", 6379))
            self.assertEqual(kiwix, ("local-naguimar-kiwix.local.hass.io", 8111))
            self.assertEqual(environment["NOMAD_STORAGE_PATH"], APP_OPTIONS["storage_path"])

    def test_non_empty_application_storage_is_never_replaced(self):
        runner = load_runner("admin")
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            storage = root / "media" / "shared"
            app_storage = root / "app-storage"
            storage.mkdir(parents=True)
            app_storage.mkdir()
            (app_storage / "keep").write_text("data", encoding="utf-8")
            with self.assertRaisesRegex(SystemExit, "non-empty"):
                runner.prepare_storage(storage, app_storage, (root / "media",))
            self.assertEqual((app_storage / "keep").read_text(encoding="utf-8"), "data")

    def test_storage_symlink_can_be_retargeted_without_modifying_either_directory(self):
        for name in ("admin", "worker"):
            runner = load_runner(name)
            with tempfile.TemporaryDirectory() as temporary:
                root = Path(temporary)
                media = root / "media"
                old_storage = media / "old"
                new_storage = media / "new"
                app_storage = root / "app-storage"
                old_storage.mkdir(parents=True)
                new_storage.mkdir()
                (old_storage / "old-data").write_text("old", encoding="utf-8")
                (new_storage / "new-data").write_text("new", encoding="utf-8")
                app_storage.symlink_to(old_storage, target_is_directory=True)

                runner.prepare_storage(new_storage, app_storage, (media,))

                self.assertEqual(app_storage.resolve(), new_storage.resolve())
                self.assertEqual((old_storage / "old-data").read_text(encoding="utf-8"), "old")
                self.assertEqual((new_storage / "new-data").read_text(encoding="utf-8"), "new")

    def test_storage_cannot_escape_shared_root(self):
        runner = load_runner("admin")
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            shared = root / "media"
            outside = root / "outside"
            shared.mkdir()
            outside.mkdir()
            with self.assertRaisesRegex(SystemExit, "/media or /share"):
                runner.prepare_storage(shared / ".." / "outside", root / "app", (shared,))

    def test_invalid_runtime_options_fail_explicitly(self):
        for name in ("admin", "worker"):
            options = APP_OPTIONS | (
                {"kiwix_public_url": ""}
                if name == "admin"
                else {}
            )
            options["db_port"] = 0
            with self.assertRaisesRegex(SystemExit, "db_port"):
                load_runner(name).build_environment(options)

    def test_web_and_worker_processes_are_separate(self):
        admin_source = (ROOT / "admin/run.py").read_text(encoding="utf-8")
        worker_source = (ROOT / "worker/run.py").read_text(encoding="utf-8")
        self.assertNotIn("queue:work", admin_source)
        self.assertIn('"bin/server.js"', admin_source)
        self.assertIn('"migration:run"', admin_source)
        self.assertIn('"queue:work"', worker_source)
        self.assertNotIn("/usr/local/bin/entrypoint.sh", worker_source)


if __name__ == "__main__":
    unittest.main()
