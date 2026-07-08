# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this repo is

This repository holds **SoloKit** (production domain: **solokit.cloud**) — a
storefront that sells digital products (Notion templates, AI prompt packs, and
SOPs) to freelancers and solopreneurs in the UAE and wider GCC. Prices are in
**AED**, checkout is handled by **Lemon Squeezy**, and the site leans heavily on
SEO: hundreds of hand-authored blog guides plus profession- and country-specific
landing pages.

There are two top-level directories:

| Path        | What it is |
|-------------|------------|
| `shop/`     | The **Next.js application** — the actual website. Nearly all work happens here. |
| `products/` | The **source content of the digital products** being sold: one `.md` + rendered `.pdf` per product. Not part of the app build. |

> **Important:** the app lives in `shop/`, not the repo root. `cd shop` before
> running `npm` commands. There is no build tooling at the repo root.

## `products/` — the sellable content

Static source files for the products. Each product exists as a Markdown
master and a generated PDF:

- `ai-prompt-pack-pro.md` / `.pdf`
- `freelancer-client-crm.md` / `.pdf`
- `solopreneur-os.md` / `.pdf`
- `sop-starter-pack.md` / `.pdf`
- `freelance-contract-kit.md` (PDF to be generated)
- `client-proposal-pack.md` (PDF to be generated)

These are the deliverables customers receive (fulfilled via Lemon Squeezy, not
served by the app). Editing them does not affect the website. There is no
automated pipeline that regenerates the PDFs from the Markdown — treat them as
manually maintained assets.

---

# `shop/` — the Next.js app

## Tech stack

- **Next.js 16.2.9** with the **App Router** (`app/` directory)
- **React 19.2**
- **TypeScript 5**, `strict: true`, path alias `@/*` → `shop/*`
- **Tailwind CSS v4** via `@tailwindcss/postcss` (config is CSS-first in
  `app/globals.css` using `@import "tailwindcss"` and `@theme` — there is **no**
  `tailwind.config.js`)
- **Geist** font via `next/font/google`
- Deployed on **Vercel** (region `iad1`), with `@vercel/analytics` and
  `@vercel/speed-insights`
- **Lemon Squeezy** for payments/checkout (`@lemonsqueezy/lemonsqueezy.js`)
- **Brevo** (Sendinblue) HTTP API for transactional email + contact lists
- A **Vercel Cron** job that auto-posts to LinkedIn & Facebook

> **⚠️ Read `shop/AGENTS.md` first.** This is Next.js **16**, which has breaking
> changes vs. what's in most training data (async `params`/`searchParams`,
> conventions, file structure). When unsure, consult
> `shop/node_modules/next/dist/docs/` rather than guessing. `shop/CLAUDE.md`
> imports `AGENTS.md` to keep this warning in context.

## Commands

Run everything from inside `shop/`:

```bash
cd shop
npm install        # install dependencies
npm run dev        # local dev server → http://localhost:3000
npm run build      # production build (also what Vercel runs)
npm start          # serve the production build
npm run lint       # ESLint (eslint-config-next, core-web-vitals + typescript)
```

There is **no test suite** and no test runner configured. Validation before
committing = `npm run build` (catches type + build errors) and `npm run lint`.
Always run the build after non-trivial changes because most pages are statically
generated at build time.

## Directory map (`shop/`)

```
app/
  layout.tsx            # root layout: metadata, Geist font, announcement bar,
                        #   WhatsAppButton, Analytics, SpeedInsights
  page.tsx              # homepage
  globals.css           # Tailwind v4 entry + theme tokens
  error.tsx, not-found.tsx
  robots.ts, sitemap.ts # SEO route handlers
  opengraph-image.tsx   # site-level OG image

  products/[slug]/      # dynamic product detail page (+ opengraph-image.tsx)
  for/[profession]/     # dynamic profession landing pages
  for/{kuwait,qatar,saudi-arabia}/  # country landing pages (static)
  blog/                 # blog index + ~400 individual article routes
    page.tsx            #   listing, filtered by ?category=
    layout.tsx
    [slug]/opengraph-image.tsx   # per-article OG image
    <article-slug>/page.tsx      # each article is its own hand-authored route
  lp/{ai-prompts,freelancer-crm,solopreneur-os,sop-pack}/  # product landing pages
  start/                # funnel/quiz entry
  {about,faq,guides,resources,contact,privacy,terms,refund,
   testimonials,affiliates,free,bundle,success,brand,email-setup}/  # static pages
  {tiktok,instagram,linkedin,facebook}/  # social bio/link pages (noindex)

  api/
    checkout/route.ts        # POST form → creates LS checkout, 303 redirect
    webhook/route.ts         # POST LS webhook → verify HMAC, email + Brevo contact
    subscribe/route.ts       # POST email → free-prompts opt-in (Brevo), rate-limited
    cron/social-post/route.ts# GET (Bearer CRON_SECRET) → post to LinkedIn/Facebook
    og/{cover,profile}/route.tsx  # dynamic OG image generators
    social-card/route.tsx    # dynamic social card image

components/   # shared React components (see below)
lib/          # data + integration helpers (see below)
public/       # static SVGs
scripts/      # one-off Node maintenance scripts (.mjs), not part of the build
```

## Key modules

### `lib/products.ts` — the product catalog
The single source of truth for what's for sale. Exports the `Product` type, the
`products` array (4 items), `getProduct(slug)`, and `formatPrice(fils)`.

- **Prices are stored in fils** (AED × 100). `price: 17500` = AED 175.
  `formatPrice` divides by 100.
- Each product's `lemonSqueezyVariantId` is read from a `LS_VARIANT_*` env var at
  module load; empty string when unset (checkout then returns a 500).
- `products/[slug]`, `lp/*`, `sitemap.ts`, and the homepage all read from here.
  Adding a product = add an entry here, set its env var, and (usually) add a
  landing page under `lp/`.

### `lib/blog-posts.ts` — the blog index
Exports the `BlogPost` type and a `posts` array used to render the `/blog`
listing and to build blog URLs in `sitemap.ts`.

> **This index is maintained by hand and is _not_ derived from the article
> files.** Each blog article is its own `app/blog/<slug>/page.tsx` with inline
> `metadata` and content — there are more article routes on disk (~400) than
> entries in `posts` (~356). When you **add a blog article**, you must:
> 1. create `app/blog/<slug>/page.tsx` (copy an existing article for structure:
>    `import Header`/`Footer`, export `metadata`, define content as local data
>    arrays, render inside `<Header/> … <Footer/>`), **and**
> 2. add a matching entry to `posts` in `lib/blog-posts.ts` so it appears in the
>    listing, **and**
> 3. add its slug to the blog URL list in `app/sitemap.ts`.
> Missing step 2 or 3 means the article exists but is unlinked/unindexed.

### `lib/lemonsqueezy.ts` — checkout helper
`setupLemonSqueezy()` (configures the SDK with the API key) and
`createProductCheckout(variantId, successUrl)`, which returns a hosted checkout
whose URL the `/api/checkout` route redirects to.

### `components/`
- `Header.tsx`, `Footer.tsx` — site chrome (server components)
- `CheckoutButton.tsx` — `"use client"`; a real `<form>` POSTing to
  `/api/checkout` and letting the browser follow the 303 to Lemon Squeezy
- `ProductCard.tsx`, `EmailCapture.tsx`, `MidPageCapture.tsx`,
  `MobileStickyBuy.tsx`, `WhatsAppButton.tsx`

### `scripts/*.mjs`
One-off Node scripts used to bulk-edit the many blog article files
(`redesign-articles.mjs`, `upgrade-body.mjs`, `fix-div-balance.mjs`). They read
and rewrite files under `app/blog/`. Run with `node scripts/<name>.mjs` from
`shop/`. Not invoked by any build step — use with care and review the diff.

## Payments & email flow

1. `CheckoutButton` POSTs `productSlug` to **`/api/checkout`**, which looks up the
   product, creates a Lemon Squeezy checkout, and returns a **303 redirect** to
   the hosted checkout. Success redirects back to `/success?product=<slug>`.
2. Lemon Squeezy calls **`/api/webhook`** on `order_created`. The handler
   verifies the `x-signature` HMAC-SHA256 with `LEMONSQUEEZY_WEBHOOK_SECRET`
   (using `crypto.timingSafeEqual`), then via Brevo adds the buyer to contact
   **list 3** and sends a purchase-confirmation email.
3. **`/api/subscribe`** powers the free-prompts opt-in: validates the email,
   in-memory rate-limits (5/min/IP), adds the contact to Brevo **list 2**, and
   emails 10 sample prompts. Missing `BREVO_API_KEY` degrades gracefully
   (returns ok, logs, sends nothing).

## Cron / social automation

`vercel.json` schedules `GET /api/cron/social-post` at 03:00 UTC, Sun–Fri. The
route requires `Authorization: Bearer ${CRON_SECRET}`, picks a post from a
built-in rotation keyed off the day number, and publishes to LinkedIn
(`ugcPosts`) and a Facebook page when the respective tokens are set. It no-ops
cleanly when no social tokens are configured.

## Routing & SEO conventions

- **Dynamic routes use `generateStaticParams`** to pre-render at build time:
  `products/[slug]` (from `products`), `for/[profession]` (from the in-file
  `professions` map), and the blog OG image route. Params are **async** in Next
  16 — `const { slug } = await params`.
- Page `metadata` (title/description/canonical/openGraph) is exported per route.
  Product/blog pages set `alternates.canonical`.
- `metadataBase` in `app/layout.tsx` and every `siteUrl`/`base` fallback resolve
  to `https://solokit.cloud` when `NEXT_PUBLIC_SITE_URL` is unset or not
  absolute — keep that pattern when adding routes that emit absolute URLs.
- `robots.ts` disallows utility/social pages (`/success`, `/resources`,
  `/tiktok`, `/instagram`, `/linkedin`, `/facebook`, `/email-setup`, `/brand`,
  `/api/`). Add new noindex pages to that disallow list.
- `next.config.ts` 301-redirects the `mdbush.vercel.app` host to `solokit.cloud`.
- OG/social images are generated with `next/og` `ImageResponse` in the
  `api/og/*`, `api/social-card`, and `opengraph-image.tsx` routes.

## Environment variables

Copy `shop/.env.local.example` → `shop/.env.local` (never commit it —
`.env*` is gitignored except the `*.example` files). Used across the app:

| Variable | Purpose |
|----------|---------|
| `LEMONSQUEEZY_API_KEY` | Lemon Squeezy SDK auth |
| `LEMONSQUEEZY_STORE_ID` | Store the checkout is created in |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | HMAC secret for `/api/webhook` |
| `LS_VARIANT_FREELANCER_CRM` / `_SOLOPRENEUR_OS` / `_AI_PROMPTS` / `_SOP_PACK` | Per-product LS variant IDs consumed in `lib/products.ts` |
| `NEXT_PUBLIC_SITE_URL` | Canonical/base URL (must include `http(s)://`); falls back to `https://solokit.cloud` |
| `BREVO_API_KEY` | Brevo transactional email + contacts |
| `BREVO_SENDER_EMAIL` | From-address (default `hello@solokit.cloud`) |
| `CRON_SECRET` | Bearer token guarding the social-post cron route |
| `LINKEDIN_ACCESS_TOKEN` | LinkedIn posting (optional) |
| `FACEBOOK_PAGE_ACCESS_TOKEN` | Facebook page posting (optional) |

## Conventions & house style

- **Components are server components by default**; add `"use client"` only when
  a component needs state/effects/handlers (e.g. `CheckoutButton`).
- **Styling is Tailwind utility classes inline.** The palette is neutral grays
  with **emerald** (`emerald-500/400`) as the primary/CTA accent and a dark
  `gray-900` header/announcement bar. Match the surrounding design rather than
  introducing new colors or a component library.
- Page content (feature lists, pain points, FAQ items, article sections) is
  typically expressed as **local typed `const` data arrays** mapped into JSX —
  keep this pattern; it's what the bulk `scripts/` operate on.
- Copy is **UAE/GCC-specific** and prices are in **AED**. Keep that voice and
  currency when writing new pages.
- Transactional email is inline table-based HTML built in the route files
  (`/api/webhook`, `/api/subscribe`) — edit those templates in place.

## Git workflow

- Do not commit `.env.local` or anything matching `.env*` (except the
  `.example` files). `.claude/` is gitignored at the repo root.
- Run `npm run build` and `npm run lint` (from `shop/`) before committing
  substantive changes — the build is the primary correctness gate since there
  are no tests.
- Only open a pull request when explicitly asked.
