# Project NOMAD Home Assistant apps

This repository packages Project NOMAD as three separate Home Assistant apps:

- **Project NOMAD Command Center** owns the web/API process and native ingress.
- **Project NOMAD Worker** owns queue consumption and never starts the web process.
- **Project NOMAD Redis** owns the private queue service.

MariaDB and Redis stay external to Command Center and Worker so Home Assistant can
supervise, restart, back up, and upgrade each stateful service independently. This
also prevents a web or worker restart from silently replacing database or queue
state. MariaDB is supplied by the existing `core_mariadb` app; Redis is supplied
by this repository.

Command Center and Worker must use identical database, Redis, app key, Kiwix, and
`storage_path` settings. Both receive the Home Assistant `/media` and `/share`
mounts, while each app retains its own isolated `/data`.

No package uses the Docker socket, host networking, `full_access`, or privileged
mode. Redis has no host port mapping. Command Center keeps direct host port 8088
for compatibility in addition to native ingress.

See each app's **Documentation** tab before installation or upgrade. Package
artwork and its source are documented in [ARTWORK.md](ARTWORK.md).
