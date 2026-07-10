@AGENTS.md

# SoloKit app (`shop/`)

This is the Next.js 16 application for SoloKit (solokit.cloud). For the full
project guide — stack, commands, directory map, data modules, payment/email
flow, cron automation, SEO conventions, and environment variables — see the
repository-root **[`../CLAUDE.md`](../CLAUDE.md)**.

Quick reference:

```bash
npm run dev     # dev server → http://localhost:3000
npm run build   # production build (catches type + build errors)
npm run lint    # ESLint
npm test        # Vitest — lib/ + API route tests, incl. blog/sitemap consistency
```

- App Router in `app/`; server components by default, `"use client"` only when needed.
- `lib/products.ts` = product catalog (prices in fils, AED×100). `lib/blog-posts.ts` = hand-maintained blog index.
- Adding a blog article requires: the `app/blog/<slug>/page.tsx` route **and** an entry in `lib/blog-posts.ts` **and** a slug in `app/sitemap.ts`. `npm test` fails with the missing slug if the three fall out of sync.
- Tailwind v4 (CSS-first in `app/globals.css`, no `tailwind.config.js`); emerald accent on neutral grays.
