# EcoScienceHub

A scalable, SEO-first scientific content platform covering **ecology**, **biology**, and **applied physics**, built on a strict **Topic → Subtopic → Article** hierarchy.

Built as a real product foundation — not a demo.

## Stack

- **Next.js 14** (App Router, RSC, typed metadata)
- **TypeScript** (strict)
- **Tailwind CSS** (custom ecological design system)
- **gray-matter** + **marked** (file-based markdown content)
- SEO-first: canonical URLs, OG, JSON-LD (Article + FAQ + BreadcrumbList), sitemap, robots, `updatedDate` everywhere

## URL hierarchy

```
/                                        Homepage
/<category>                              Category hub
/<category>/<subtopic>                   Subtopic hub
/<category>/<subtopic>/<slug>            Article

/insights                                Insights index
/insight/<slug>                          Insight detail

/discussions                             Discussions index
/discussions/<topic>                     Discussion topic page
```

Every route — including all category/subtopic/article paths — is statically generated from `generateStaticParams`.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # strict TypeScript pass
npm run build        # production build
```

Set `NEXT_PUBLIC_SITE_URL` to override the canonical host (defaults to `https://ecosciencehub.com`).

## Project structure

```
/app
  /(site)/page.tsx                       # homepage
  /ecology/page.tsx                      # category hub
  /ecology/[subtopic]/page.tsx           # subtopic hub
  /ecology/[subtopic]/[slug]/page.tsx    # article (static-generated)
  /biology/...                           # same shape
  /physics/...                           # same shape
  /insights/page.tsx
  /insight/[slug]/page.tsx
  /discussions/page.tsx
  /discussions/[topic]/page.tsx
  /sitemap.ts                            # hierarchical sitemap
  /robots.ts
  /not-found.tsx
  /layout.tsx                            # root metadata + fonts

/components
  Header, Footer, Layout, PageHeading
  CategoryCard, SubtopicCard
  ArticleCard, InsightCard, DiscussionCard
  CategoryHub, SubtopicHub, ArticlePage  # shared hierarchical page components
  ArticleBody, AuthorBlock, FaqSection, TableOfContents
  RelatedArticles, CommentsThread, NewsletterBlock

/lib
  categories.ts                          # taxonomy: categories + subtopics
  authors.ts                             # author registry
  content.ts                             # file-based article + insight reader
  discussions.ts                         # discussions data
  seo.ts                                 # metadata + JSON-LD helpers + site config

/content
  /ecology/<subtopic>/<slug>.md          # article files mirror URL hierarchy
  /biology/<subtopic>/<slug>.md
  /physics/<subtopic>/<slug>.md
  /insights/<slug>.md

/styles
  globals.css                            # design tokens + prose styles
```

## Content model

Articles are markdown files with YAML frontmatter. The path encodes category + subtopic + slug; the frontmatter encodes everything else.

```markdown
---
title: "How temperate forests are quietly losing their carbon sink"
excerpt: "A multi-decade synthesis suggests..."
type: pillar          # seo | pillar | expert
author: helena-vega   # references lib/authors.ts
publishedDate: 2026-02-12
updatedDate: 2026-04-20    # REQUIRED — drives re-indexing signals
readingTime: 9
tags: [carbon, forests, climate, modelling]
related: [soil-microbiome-regenerative-agriculture, what-is-climate-change]
pillar: temperate-forest-carbon-sink-decline   # link to pillar (self if this IS the pillar)
faq:
  - question: "Are tropical forests showing the same trend?"
    answer: "Tropical primary forests are a separate story..."
---

## What the long-term plots show

Forest inventory plots in Europe and North America...
```

`lib/content.ts` validates the frontmatter at build time — missing `updatedDate`, unknown `author`, or invalid `type` fails the build.

## Internal linking

Each article links into a structured network:

| Link | Source |
|---|---|
| ↑ Parent category | Always from breadcrumb + sidebar |
| ↑ Subtopic hub | Always from breadcrumb + sidebar |
| → Pillar article | Pillar callout block (when reading a non-pillar) |
| → 2–3 related articles | `getRelatedArticles()` — explicit `related` list, then same-subtopic by tag overlap, then same-category fallback |
| ↔ Sibling subtopics | "Related subtopics" block on subtopic hubs |
| → Related discussion | Discussion sidebar links to its `relatedArticleSlug` |

This gives every article inbound links from at least: category hub, subtopic hub, pillar callout (if non-pillar), and related-articles surfaces on sibling articles.

## SEO

Every page emits:

- `generateMetadata()` via `buildMetadata()` (canonical, OG, Twitter, robots)
- Article + FAQ + BreadcrumbList JSON-LD on detail pages
- `article:modified_time` on every dated page
- Server-rendered, semantic HTML (single H1, ordered H2/H3 with stable anchor IDs)
- `app/sitemap.ts` covers all 5 levels (home, indices, category hubs, subtopic hubs, leaf pages)
- `app/robots.ts` references the sitemap

When you create or modify content, **always set `updatedDate`** — Google, Bing, and Perplexity all weigh it as a freshness signal. The build will fail without it.

## Design system

| Token | Value |
|---|---|
| Primary | `#2E7D32` (forest green, full 50–900 scale) |
| Accent | `#4A90E2` (calm scientific blue, full 50–900 scale) |
| Background | White, `ink-surface #F7F9F7` |
| Text | `ink #1A2421`, `ink-muted #475A55` |
| Type | Source Serif 4 (display) + Inter (UI) |
| Shape | Rounded `md/lg`, soft shadows, generous reading column (`max-w-reader: 72ch`) |

## Discussions

Discussions are **controlled threads**, not a forum:

- Each thread has a moderator (a verified expert)
- Comments are mock UI; the form posts to `/api/discussions/comment` (not implemented) which you wire to your moderation backend
- Verified-expert badges, status (open / closed / scheduled), and participant counts are first-class on the schema
- Each discussion can link to a `relatedArticleSlug` for cross-linking back to the SEO content

## Scaling to 1,000+ articles

The architecture is built to scale. Specific things to do as the catalog grows:

**Content storage.**
- 1–100 articles per subtopic: keep current file-based approach. Disk reads are fast, build is fast.
- 100–1,000 articles per subtopic: introduce per-subtopic index files generated at build time so the loader doesn't `readdir` the world; consider moving to a database-backed store via the existing `lib/content.ts` API surface (the read functions are CMS swap-in seams).
- Beyond that: move authoring to a CMS (Sanity, Payload, Contentful) and replace the body of `loadAllArticles()` with the API client. The downstream component contract stays identical.

**Routing.**
- The current per-category folder structure (`/app/ecology/[subtopic]/[slug]`) optimizes SEO clarity but duplicates route handlers. At >5 categories, consolidate into a single `/app/[category]/[subtopic]/[slug]` dynamic with a runtime category check — keep the explicit per-category folders for the 3 launch categories so Search Console parity is preserved.

**Pagination.**
- Subtopic hubs become unwieldy past ~50 articles. Add `?page=2` parameter handling (URL query, not path segment, to avoid SEO duplication) with `<link rel="next">` and pagination JSON-LD.

**Hub pages.**
- Above 100 articles per subtopic, introduce a third hierarchy level (Topic → Subtopic → Sub-subtopic → Article) for the largest subtopics — but only the ones that actually need it. The current taxonomy supports this without breaking the URL contract: just promote a tag to a sub-subtopic when warranted.

**Internal linking.**
- The current `getRelatedArticles` runs in O(n × tags). At 10K+ articles, replace the in-process tag scoring with a precomputed similarity index (built nightly). The interface stays the same.
- Add programmatic "topic clusters" — automatically generated cross-subtopic hubs based on shared tags ("articles about microbiome across all categories"). These are pure SEO surfaces, generated from existing content.

**Search.**
- Add a typed search endpoint (Algolia, Typesense, Meilisearch) keyed off `lib/content.ts` outputs. Build on top of the existing read API, not around it.

**Editorial workflow.**
- At ~50 articles, add a `/admin` workflow surface for editorial assignments and review status. Keep authoring in markdown — it survives any CMS migration.

**Performance.**
- The current static-generation strategy works to thousands of routes. Above that, switch the leaf article route to ISR (`revalidate: 3600`) so build times stay sub-5-minute. Category and subtopic hubs should remain static.

**Author hubs.**
- Add `/author/[id]` pages with `Person` JSON-LD. Trivial extension — `lib/authors.ts` already keys everything by id.

**OG images.**
- Add a programmatic OG generator at `/og/[slug].png` using `next/og`. Wire to `buildMetadata()` so every page gets a custom card.

**Per-category RSS.**
- Add `/[category]/rss.xml` routes. Reuses the same content reader; no schema change.

## Conventions

- All shared types are exported from `lib/content.ts`. Pages and components import from there, never from `/content`.
- Components are server components by default. Mark `"use client"` only when interactivity demands it.
- All dates are ISO 8601; rendering goes through `formatDate()` in `lib/content.ts`.
- Adding a new subtopic: one entry in `lib/categories.ts` + a new folder under `/content/<category>/<subtopic>/` + an article. No route file changes needed.
- Adding a new author: one entry in `lib/authors.ts`.
- Adding a new category: one entry in `lib/categories.ts` + a new `/app/<category>/...` directory tree (3 route files, copyable from existing categories).
