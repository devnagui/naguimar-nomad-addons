#!/bin/sh
set -eu

exec /usr/local/bin/redis-server \
  --bind 0.0.0.0 \
  --protected-mode no \
  --appendonly yes \
  --dir /data \
  --maxmemory 128mb \
  --maxmemory-policy noeviction
