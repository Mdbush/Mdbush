# SoloKit Growth Engine

An automated set of agents that keep SoloKit growing: writing SEO content,
watching competitors, drafting social campaigns, and proposing new products.
They run on a schedule via GitHub Actions and **open pull requests** — nothing
goes live without review by default.

## Autonomy model (hybrid)

| Agent | Output | Autonomy |
|-------|--------|----------|
| `seo-content` | A new blog article wired into the index + sitemap | **Review-gated** PR, validated with `lint` + `build` before the PR opens. Low-risk enough to auto-merge later if you choose. |
| `competitor-intel` | A markdown digest of market/competitor moves + recommended actions | Review-gated PR (informational). |
| `social-campaign` | A batch of on-brand posts as JSON | Review-gated PR. Candidate for **auto-publish** once you trust it (see roadmap). |
| `product-ideas` | Briefs for new products (name, price, deliverables) | **Always** review-gated — products change pricing and what customers pay for. |

## How it runs

- **`.github/workflows/growth-engine.yml`** runs an agent on a schedule (or on
  demand via *Run workflow*), then commits the result to a `growth/*` branch and
  opens a PR against the default branch.
- Content agents (`seo-content`) run `npx eslint .` + `npm run build` before the
  PR opens, so a broken article never reaches you.

### Run locally

```bash
cd shop
export ANTHROPIC_API_KEY=sk-ant-...        # required (except --dry-run)
node scripts/agents/seo-content.mjs --dry-run   # plan only, no API call
node scripts/agents/seo-content.mjs             # generate one article
node scripts/agents/competitor-intel.mjs
node scripts/agents/social-campaign.mjs --count=10
node scripts/agents/product-ideas.mjs --count=3
```

Digest/JSON outputs land in `scripts/agents/out/`.

## Setup — what you need to provide

Add these in **GitHub → Settings → Secrets and variables → Actions**:

| Name | Type | Purpose |
|------|------|---------|
| `ANTHROPIC_API_KEY` | **secret** (required) | Lets the agents call Claude. Create one at the Anthropic Console. |
| `AGENT_MODEL` | variable (optional) | Override the model (default `claude-opus-4-8`). |
| `COMPETITORS` | variable (optional) | Comma-separated competitor list for the intel agent. |

The workflow already has `GITHUB_TOKEN` (via `github.token`) to open PRs — no
extra setup for that.

## Recommended APIs & rough costs

You asked what to use — here's the honest shortlist:

- **Anthropic API (required)** — powers every agent. Pay-as-you-go by tokens.
  A single blog article is well under 1M tokens; at Opus 4.8 rates ($5 / $25 per
  1M input/output tokens) each article costs roughly a few US cents to ~$0.20.
  Twice-weekly articles + a weekly digest is a few dollars a month. To cut cost,
  set `AGENT_MODEL=claude-sonnet-5` (about 60% cheaper) — quality stays high for
  content.
- **Web search** — the `competitor-intel` agent uses Anthropic's built-in
  `web_search` server tool (no separate key, billed per search as part of the
  API call). If you'd rather use a dedicated SERP API (e.g. for structured
  keyword data), that's a separate paid service you can wire into
  `competitor-intel.mjs`; not required to start.
- **Social image generation** — the Anthropic API does not generate images.
  SoloKit already renders branded images server-side with Next.js
  `ImageResponse` (`app/api/og/*`, `app/api/social-card`). The cheapest, most
  on-brand path is to render post images through that existing pipeline rather
  than pay an external image API. (See roadmap.)

No other paid services are required to run the engine.

## Files

```
scripts/agents/
  lib/anthropic.mjs      # fetch-based Messages API client (no SDK dependency)
  lib/blog.mjs           # wire a new article into blog-posts.ts + sitemap.ts
  seo-content.mjs        # generate one blog article (flagship)
  competitor-intel.mjs   # weekly market/competitor digest
  social-campaign.mjs    # batch of on-brand social posts (JSON)
  product-ideas.mjs      # new-product briefs
  out/                   # generated digests / JSON (committed via PR)
.github/workflows/growth-engine.yml
```

## Roadmap

- **Branded social images**: render each generated post through the existing
  `ImageResponse` OG pipeline (a `/api/social-card?text=…` variant) so every
  post ships with a matching on-brand image — no external image API.
- **Auto-publish tier**: once the social output is trusted, flip
  `social-campaign` to feed `app/api/cron/social-post` directly instead of a PR.
- **Keyword-gap analysis**: add a SERP source to `competitor-intel` to target
  articles at real search demand.
