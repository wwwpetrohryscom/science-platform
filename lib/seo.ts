import type { Metadata } from "next";
import { categories, type CategorySlug } from "@/lib/categories";

/**
 * Site-wide configuration. Single source of truth for SEO defaults,
 * canonical host, social handles, and brand strings.
 *
 * `url` is the only field expected to change between deployments.
 * Override via `NEXT_PUBLIC_SITE_URL`.
 */
export const siteConfig = {
  name: "EcoScienceHub",
  shortName: "EcoScienceHub",
  description:
    "Peer-informed writing on ecology, biology, and applied physics — for researchers, educators, and curious minds.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecosciencehub.com",
  locale: "en_US",
  twitterHandle: "@ecosciencehub",
  defaultOgImage: "/og/default.png",
} as const;

/**
 * Backwards-compatible category metadata view.
 *
 * The canonical taxonomy lives in `lib/categories.ts`. This object
 * is a thin projection that lets components read `label` /
 * `description` / `accent` for a category without importing the
 * full definition. New code should prefer `getCategory()` directly.
 */
export const categoryMeta: Record<
  CategorySlug,
  { label: string; description: string; accent: "primary" | "accent" }
> = Object.fromEntries(
  categories.map((c) => [
    c.slug,
    { label: c.label, description: c.description, accent: c.accent },
  ]),
) as Record<CategorySlug, { label: string; description: string; accent: "primary" | "accent" }>;

export type Category = CategorySlug;

type BuildMetadataOptions = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/ecology/climate-change/foo". */
  path: string;
  /** ISO date — required for content pages so search engines can re-index. */
  updatedDate?: string;
  publishedDate?: string;
  ogImage?: string;
  type?: "website" | "article";
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
};

/**
 * Builds a complete Next.js Metadata object for a page.
 *
 * Centralizing this ensures every page emits canonical URL, OG tags,
 * Twitter card, and (when applicable) article modified-time. Pages
 * never construct Metadata objects by hand.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    updatedDate,
    publishedDate,
    ogImage,
    type = "website",
    authors,
    tags,
    noIndex = false,
  } = opts;

  const url = new URL(path, siteConfig.url).toString();
  const image = ogImage ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === "article" && {
        publishedTime: publishedDate,
        modifiedTime: updatedDate,
        authors,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: updatedDate
      ? {
          "article:modified_time": updatedDate,
          ...(publishedDate && { "article:published_time": publishedDate }),
        }
      : undefined,
  };
}

/**
 * JSON-LD for an Article. Inject as a <script type="application/ld+json">.
 */
export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedDate: string;
  updatedDate: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedDate,
    dateModified: input.updatedDate,
    author: { "@type": "Person", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/logo.png", siteConfig.url).toString(),
      },
    },
    mainEntityOfPage: new URL(input.path, siteConfig.url).toString(),
    image: [input.image ?? siteConfig.defaultOgImage],
  };
}

/**
 * JSON-LD for a FAQ block. Surfaced as rich snippets in Google search.
 */
export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

/**
 * JSON-LD for a breadcrumb trail. Improves SERP appearance for
 * deeply-nested article URLs (Topic → Subtopic → Article).
 */
export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
