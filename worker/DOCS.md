# Project NOMAD Worker

Worker is a separate supervised queue consumer. It does not expose a UI or host
port, bind a network listener, or start Command Center. It only makes outbound
connections to the configured MariaDB, Redis, and Kiwix endpoints. Configure
exactly the same `app_key`, database, Redis, Kiwix, and `storage_path` values as
Command Center. The shared content path is under `/media` or `/share`; Worker
`/data` remains isolated from Command Center `/data`.

Configure `app_key`; all `db_*` and `redis_*` connection values;
`storage_path`; `kiwix_internal_url`; and `log_level`. Every shared value must
match Command Center. Worker intentionally has no browser-facing Kiwix URL,
ingress panel, Web UI, or host port.

Start MariaDB, Redis, Kiwix, and Command Center before Worker. Invalid options,
missing or read-only storage, and unavailable dependencies stop startup with an
explicit error. Existing non-empty `/app/storage` is never replaced.

Stopping or restarting Worker interrupts the current queue job. Redis retains
the queue when persistence is enabled; Project NOMAD/BullMQ retry semantics
determine whether an interrupted active job is retried or marked failed. Check
Worker and Command Center logs after every restart before re-enqueuing work, to
avoid duplicates. Restarting Command Center alone does not consume queue jobs.

Back up and upgrade Worker as part of the consistent procedure in Command Center
documentation. For rollback, restore state from the same backup point and start
Worker only after the rolled-back Command Center is healthy.
