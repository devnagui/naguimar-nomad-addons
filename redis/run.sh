#!/bin/sh
set -eu

options=/data/options.json
persistence="$(jq -r '.persistence | if type == "boolean" then . else error("not boolean") end' "$options")" ||
  { echo "Invalid option persistence: expected true or false" >&2; exit 1; }
maxmemory_mb="$(jq -er '.maxmemory_mb | if type == "number" and floor == . and . >= 32 and . <= 4096 then . else error("out of range") end' "$options")" ||
  { echo "Invalid option maxmemory_mb: expected an integer from 32 to 4096" >&2; exit 1; }

set -- /usr/local/bin/redis-server \
  --bind 0.0.0.0 \
  --protected-mode no \
  --dir /data \
  --maxmemory "${maxmemory_mb}mb" \
  --maxmemory-policy noeviction

if [ "$persistence" = "true" ]; then
  set -- "$@" --appendonly yes --appendfsync everysec
else
  set -- "$@" --appendonly no --save ""
fi

exec "$@"
