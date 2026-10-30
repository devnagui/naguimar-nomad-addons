# Project NOMAD Redis

Redis is the externally supervised Project NOMAD queue service. It binds
`0.0.0.0:6379` inside its container so other Home Assistant apps can reach it,
but has no host port mapping. Command Center and Worker connect with the
`local-naguimar-nomad-redis.local.hass.io` service name.

`persistence` enables append-only persistence with one-second fsync. Disabling it
makes queue state ephemeral. `maxmemory_mb` sets Redis's supported `maxmemory`
ceiling; `noeviction` prevents silent queue-key eviction and causes writes to
fail clearly at the limit.

Back up Redis `/data` together with MariaDB and Project NOMAD content while
Command Center and Worker are stopped. Upgrade Redis before Command Center and
Worker. For rollback, stop both clients and restore Redis from the same backup
point as MariaDB and application state.
