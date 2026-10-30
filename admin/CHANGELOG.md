# Changelog

## 1.35.2-haos.5

- Add complete configurable database, Redis, storage, Kiwix, and logging options.
- Validate dependencies and protect non-empty storage at startup.
- Use native ingress/sidebar metadata while retaining direct port 8088.
- Keep queue consumption exclusively in the separately supervised Worker.
