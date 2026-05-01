import type { Metadata } from "next";

/**
 * Site-wide configuration. Single source of truth for SEO defaults,
 * canonical host, social handles, and brand strings.
 *
 * When connecting to a CMS, only `url` and provider-specific fields
 * should change here.
 */
export const siteConfig = {
  name: "Science Eco Platform",
  shortName: "ScienceEco",
  description:
    "Peer-reviewed insight on ecology, biology, and applied physics — for researchers, educators, and curious minds.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://science-eco-platform.org",
  locale: "en_US",
  twitterHandle: "@scienceeco",
  defaultOgImage: "/og/default.png",
} as const;

export type Category = "ecology" | "biology" | "physics";

export const categoryMeta: Record<
  Category,
  { label: string; description: string; accent: string }
> = {
  ecology: {
    label: "Ecology",
    description:
      "Ecosystems, biodiversity, climate, and the interconnected systems that sustain life.",
    accent: "primary",
  },
  biology: {
    label: "Biology",
    description:
      "Cellular, evolutionary, and organismal biology — from molecules to populations.",
    accent: "primary",
  },
  physics: {
    label: "Applied Physics",
    description:
      "Energy, materials, and physical systems applied to real-world scientific challenges.",
    accent: "accent",
  },
};

type BuildMetadataOptions = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/article/foo" */
  path: string;
  /** ISO date string for last update — required for re-indexing signals. */
  updatedDate?: string;
  /** ISO date string for first publication. */
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
 * Centralizing this ensures every page emits:
 *   - canonical URL
 *   - OpenGraph + Twitter cards
 *   - article:published_time / article:modified_time when applicable
 *
 * `updatedDate` is intentionally first-class: search engines and answer
 * engines (Google, Bing, Perplexity) prioritize freshness signals.
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
 * Generates JSON-LD structured data for an Article. Inject as a
 * <script type="application/ld+json"> in the page body.
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
 * Generates JSON-LD for a list of FAQ entries. Useful for surfacing
 * rich-result snippets in Google search.
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
