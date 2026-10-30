# Changelog

## 1.35.2-haos.6

- Let Supervisor generate the root ingress URL without an extra slash that
  routed the sidebar iframe to a nonexistent `//` path.

## 1.35.2-haos.5

- Add complete configurable database, Redis, storage, Kiwix, and logging options.
- Validate dependencies and protect non-empty storage at startup.
- Use native ingress/sidebar metadata while retaining direct port 8088.
- Keep queue consumption exclusively in the separately supervised Worker.
