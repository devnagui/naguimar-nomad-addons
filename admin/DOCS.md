# Project NOMAD Command Center

## Ownership and dependencies

Command Center owns only the Project NOMAD web/API process and `/data`. The Worker
owns queue consumption. MariaDB owns relational state, Redis owns queue state,
Kiwix owns offline-content serving, and the configured `/media` or `/share`
directory owns downloaded content. Keeping these services separate gives Home
Assistant explicit supervision and backup boundaries.

Configure MariaDB first, then Redis and Kiwix. Use the same `app_key`, database,
Redis, Kiwix, and `storage_path` values in Command Center and Worker. Startup
fails with an explicit message when options, storage, MariaDB, Redis, or Kiwix
are invalid or unavailable. Existing non-empty `/app/storage` is never replaced.

## Configuration

- `app_key`: shared 16+ character application key; use the same value in Worker.
- `db_host`, `db_port`, `db_user`, `db_password`, `db_database`, `db_ssl`:
  MariaDB connection shared with Worker.
- `redis_host`, `redis_port`, `redis_db`: Redis connection shared with Worker.
- `storage_path`: existing writable `/media` or `/share` directory shared with
  Worker.
- `kiwix_internal_url`: Kiwix URL on the Home Assistant app network.
- `kiwix_public_url`: optional browser-facing Kiwix URL.
- `log_level`: Command Center logging threshold.

## Access and binding

The application binds inside its container on `0.0.0.0:8080`. Home Assistant
ingress is enabled natively; enable **Show in sidebar** on the app's Info page.
No custom panel is installed. Direct access remains available on Home Assistant
host port `8088` for compatibility. Restrict direct access at the network edge;
ingress is preferred. MariaDB is reached only as a client at the configured
`db_host:db_port`; this package does not bind or expose a database service.
Set `kiwix_public_url` to the browser-facing Kiwix address you want Command
Center to open. Prefer the full HTTPS Home Assistant ingress URL for remote use.
A plain HTTP direct-port URL works on a trusted LAN but browsers will block it
from an HTTPS Home Assistant iframe. The option is blank by default because the
package cannot safely infer your Home Assistant internal or external URL.
For this repository's compatibility slug, an ingress example is
`https://YOUR_HA_ORIGIN/app/local_naguimar_kiwix`.

## Backup, upgrade, and rollback

Back up the MariaDB database, Redis `/data`, this app's `/data`, the Worker's
`/data`, and the shared content directory together while writes are stopped.
Home Assistant app backups do not automatically include arbitrary `/media` or
`/share` content.

For an in-place upgrade: take a consistent backup, stop Worker, upgrade Redis,
upgrade Command Center, verify ingress/direct access and health, then upgrade and
start Worker. Do not change the shared `app_key` during an upgrade.

To migrate storage: stop Command Center and Worker; copy the source to the new
`/media` or `/share` path without deleting the source; verify file counts, sizes,
and hashes; change both apps to the new path; start and verify both; only then
retire the old copy.

To roll back: stop Worker and Command Center, restore matching database, Redis,
app `/data`, and content snapshots, install the previous app versions, start
Command Center, verify it, then start Worker. Never mix schema/state snapshots
from different upgrade points.
