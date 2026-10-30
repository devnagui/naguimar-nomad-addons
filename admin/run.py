import json
import os


with open("/data/options.json", encoding="utf-8") as options_file:
    options = json.load(options_file)

app_key = options.get("app_key", "")
db_password = options.get("db_password", "")
if len(app_key) < 16 or not db_password:
    raise SystemExit("Configure app_key (16+ characters) and db_password before starting")

environment = os.environ.copy()
environment["APP_KEY"] = app_key
environment["DB_PASSWORD"] = db_password
os.execvpe(
    "/usr/local/bin/entrypoint.sh",
    ["/usr/local/bin/entrypoint.sh"],
    environment,
)
