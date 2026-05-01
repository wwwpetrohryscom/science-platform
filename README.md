# Science Eco Platform

A modern, scalable scientific content platform focused on **ecology**, **biology**, and **applied physics**. Built as a real product foundation — not a demo.

## Stack

- **Next.js 14** (App Router, RSC, typed metadata)
- **TypeScript** (strict)
- **Tailwind CSS** (custom ecological design system)
- SEO-first architecture (canonical URLs, OpenGraph, JSON-LD, sitemap, robots, `updatedDate` everywhere)

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # strict TypeScript pass
npm run build        # production build
```

Set `NEXT_PUBLIC_SITE_URL` to override the canonical host (defaults to `https://science-eco-platform.org`).

## Structure

```
/app
  /(site)/page.tsx        # homepage
  /ecology/page.tsx       # category index
  /biology/page.tsx
  /physics/page.tsx
  /insights/page.tsx      # insights index
  /discussions/page.tsx   # moderated discussion threads
  /article/[slug]/page.tsx
  /insight/[slug]/page.tsx
  /sitemap.ts             # auto-generated sitemap
  /robots.ts              # robots policy
  /not-found.tsx
  /layout.tsx             # root metadata + fonts

/components
  Header, Footer, Layout
  ArticleCard, CategoryCard, InsightCard, DiscussionCard
  ArticleBody, AuthorBlock, FaqSection, TableOfContents
  RelatedArticles, CommentsThread, NewsletterBlock
  CategoryPage              # shared renderer for the three category routes

/lib
  content.ts                # CMS-shaped read API + types (CMS swap-in seam)
  seo.ts                    # metadata builder, JSON-LD helpers, site config

/content
  sample-articles.ts        # typed seed data (5 articles, 2 insights, 2 discussions)

/styles
  globals.css               # Tailwind layer + design tokens
```

## Content model

Every article carries:

```ts
{
  title, slug, category,            // routing + classification
  excerpt, content, author,         // body + attribution
  publishedDate, updatedDate,       // updatedDate is REQUIRED — drives re-indexing
  readingTime, tags,                // discovery
  type: "seo" | "expert" | "discussion",
  faq?, related?, heroImage?
}
```

`lib/content.ts` is the single seam between the UI and the eventual CMS. Components never import from `/content` directly — they go through the read API (`getArticles`, `getArticleBySlug`, `getRelatedArticles`, etc).

## SEO

Every page emits:

- `generateMetadata()` via `buildMetadata()` (canonical, OG, Twitter, robots)
- Article + FAQ JSON-LD on detail pages
- `article:modified_time` on every dated page
- Server-rendered, semantic HTML (single H1, ordered H2/H3)
- `app/sitemap.ts` and `app/robots.ts` are auto-generated from the content

When you create or modify content, **always set `updatedDate`** — Google, Bing, and Perplexity all weigh it as a freshness signal.

## Design system

| Token | Value |
|---|---|
| Primary | `#2E7D32` (forest green, full 50–900 scale) |
| Accent | `#4A90E2` (calm scientific blue, full 50–900 scale) |
| Background | White, `ink-surface #F7F9F7` |
| Text | `ink #1A2421`, `ink-muted #475A55` |
| Type | Source Serif 4 (display) + Inter (UI) |
| Shape | Rounded `md/lg`, soft shadows, generous spacing |

## Discussions

Discussions are **controlled threads**, not a forum:

- Each thread has a moderator (a verified expert)
- Comments are mock UI today; the form posts to a `/api/discussions/comment` endpoint that you wire to your moderation backend
- Verified-expert badges, status (open / closed / scheduled), and participant counts are first-class on the schema

## Next steps

1. **CMS integration** — replace the in-repo `/content/sample-articles.ts` seed with real reads in `lib/content.ts`. Recommended: Sanity, Payload, or Contentful for editorial workflows; the read API surface stays identical.
2. **Newsletter wiring** — point the form action in `NewsletterBlock` to your provider (Buttondown, ConvertKit, Substack API). Add server-side validation and double opt-in.
3. **Discussion backend** — auth, moderation queue, expert verification, optional federation/import. The schema in `lib/content.ts` is already moderation-ready.
4. **SEO scaling** — add per-category RSS feeds (`/ecology/rss.xml`), a `BreadcrumbList` JSON-LD helper, an `Author` page with `Person` JSON-LD, and an OG image generator at `/og/[slug].png`.
5. **Deployment (Vercel)** — `vercel link` and deploy. Set `NEXT_PUBLIC_SITE_URL` and any CMS env vars in Project Settings → Environment Variables.

## Conventions

- All shared types are exported from `lib/content.ts`. Pages and components import from there, never from `/content`.
- Components are server components by default. Mark `"use client"` only when interactivity demands it.
- All dates are ISO 8601 strings; rendering goes through `formatDate()` in `lib/content.ts`.
