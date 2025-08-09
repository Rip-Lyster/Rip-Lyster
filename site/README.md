# Development with Bun + Nue

Commands

```bash
bun run start   # dev server
bun run render  # build static to www/
bun run serve   # serve www/
```

Debugging in Cursor/VS Code
- Use Run and Debug panel and select:
  - "Bun: Dev (nue start)" to run the dev server with inspector
  - "Bun: Serve static (nue serve)" to serve `www/`
  - "Bun: Render (nue render)" for one-off builds

Notes
- Vercel builds from source using Bun; `www/` is not committed.
- Root `vercel.json` points to `site/package.json` and sets `distDir: site/www`.
