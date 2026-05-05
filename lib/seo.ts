import type { Metadata } from "next";
import { categories, type CategorySlug } from "@/lib/categories";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeMeta,
  localizedPath,
  type Locale,
} from "@/lib/i18n";

/**
 * Site-wide configuration. Single source of truth for SEO defaults,
 * canonical host, social handles, and brand strings.
 *
 * `url` is intentionally fixed to the production canonical host.
 * Preview deployments should not become canonical SEO targets.
 */
export const siteConfig = {
  name: "EcoScienceHub",
  shortName: "EcoScienceHub",
  description:
    "Peer-informed writing on ecology, biology, and applied physics — for researchers, educators, and curious minds.",
  url: "https://ecosciencehub.com",
  defaultLocale: DEFAULT_LOCALE,
  twitterHandle: "@ecosciencehub",
  defaultOgImage: "/og/default.png",
  /**
   * Editorial / publisher identity used in JSON-LD. Surfaced on every
   * page so search engines can attach the brand entity to the content
   * graph (Knowledge Panel, sitelinks search box).
   */
  publisher: {
    legalName: "EcoScienceHub",
    foundingYear: 2024,
    /** Topics the publisher covers — Wikipedia/Wikidata-backed entities. */
    knowsAbout: [
      "Ecology",
      "Biology",
      "Climate change",
      "Biodiversity",
      "Applied physics",
      "Thermodynamics",
      "Quantum mechanics",
    ],
    /** Public profiles. Empty until the corresponding accounts are live. */
    sameAs: [] as string[],
  },
} as const;

/**
 * Verification tokens for search engines. Optional — leave the env vars
 * unset and the corresponding `<meta>` tags simply won't be emitted.
 *
 * - GSC: `Search Console → URL Property → Verification → HTML tag`
 * - Bing: `Webmaster Tools → Settings → Site verification → Meta tag`
 * - Yandex: `Webmaster → Site rights → Add a meta tag`
 */
export const siteVerification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
} as const;

/**
 * Backwards-compatible category metadata view. Pure-EN labels — used
 * only by callers that haven't been threaded through with a locale.
 * New code should call `getLocalizedCategoryLabel()` from a route
 * with a known locale instead.
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
  /** Path WITHOUT the locale prefix, e.g. "/ecology/climate-change/foo". */
  path: string;
  /** Locale being rendered. Required for canonical and hreflang generation. */
  locale: Locale;
  /**
   * The locales for which this resource has a translation. Used to
   * emit hreflang only for translations that actually exist (we never
   * point hreflang at a fallback page — that would surface duplicate
   * content under another locale tag).
   *
   * For purely structural pages (homepage, category hubs) every locale
   * exists; pass `LOCALES` (or omit to default to that).
   */
  availableLocales?: readonly Locale[];
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
 * Centralizing this ensures every page emits a canonical URL with the
 * correct locale prefix, hreflang `alternates.languages` (plus the
 * `x-default` pointing to the EN URL), OG locale, Twitter card, and
 * (when applicable) article modified-time. Pages never construct
 * Metadata objects by hand.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    locale,
    availableLocales = LOCALES,
    updatedDate,
    publishedDate,
    ogImage,
    type = "website",
    authors,
    tags,
    noIndex = false,
  } = opts;

  const canonical = new URL(localizedPath(locale, path), siteConfig.url).toString();
  const image = ogImage ?? siteConfig.defaultOgImage;

  // hreflang — one entry per available locale, plus x-default → EN.
  const languages: Record<string, string> = {};
  for (const loc of availableLocales) {
    languages[localeMeta[loc].htmlLang] = new URL(
      localizedPath(loc, path),
      siteConfig.url,
    ).toString();
  }
  if (availableLocales.includes(DEFAULT_LOCALE)) {
    languages["x-default"] = new URL(
      localizedPath(DEFAULT_LOCALE, path),
      siteConfig.url,
    ).toString();
  }

  // Compose `verification` only with tokens that are actually defined,
  // so unset env vars don't emit empty <meta name="...-verification">.
  const verification: NonNullable<Metadata["verification"]> = {};
  if (siteVerification.google) verification.google = siteVerification.google;
  if (siteVerification.yandex) verification.yandex = siteVerification.yandex;
  // Bing isn't a top-level field on Next's Metadata.verification — emit
  // it via `other` (alongside any future Pinterest / Norton tokens).
  const otherVerification: Record<string, string> = {};
  if (siteVerification.bing) {
    otherVerification["msvalidate.01"] = siteVerification.bing;
  }

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: availableLocales
        .filter((l) => l !== locale)
        .map((l) => localeMeta[l].ogLocale),
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
    // `noindex,nofollow` blocks discovery; explicit Googlebot/Bingbot
    // directives also surface `max-image-preview:large` and snippet
    // sizing hints that improve SERP appearance for indexable pages.
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
    other: {
      ...(updatedDate
        ? {
            "article:modified_time": updatedDate,
            ...(publishedDate && { "article:published_time": publishedDate }),
          }
        : {}),
      ...otherVerification,
    },
  };
}

/**
 * Organization JSON-LD describing the publisher entity. Render once
 * per page in the root layout. Uses `@id` so other JSON-LD blocks on
 * the same page can reference the same publisher node.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": new URL("/#organization", siteConfig.url).toString(),
    name: siteConfig.name,
    legalName: siteConfig.publisher.legalName,
    url: siteConfig.url,
    foundingDate: String(siteConfig.publisher.foundingYear),
    description: siteConfig.description,
    knowsAbout: [...siteConfig.publisher.knowsAbout],
    logo: {
      "@type": "ImageObject",
      "@id": new URL("/#logo", siteConfig.url).toString(),
      url: new URL("/logo.png", siteConfig.url).toString(),
      contentUrl: new URL("/logo.png", siteConfig.url).toString(),
      caption: siteConfig.name,
    },
    ...(siteConfig.publisher.sameAs.length > 0
      ? { sameAs: [...siteConfig.publisher.sameAs] }
      : {}),
  };
}

/**
 * WebSite JSON-LD with a SearchAction declaration. Placing this on
 * every locale's root enables Google's sitelinks search box (when the
 * site qualifies) and gives Bing a clean entity anchor.
 */
export function websiteJsonLd(input: { locale: Locale }) {
  const homeUrl = new URL(localizedPath(input.locale, "/"), siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": new URL(`${homeUrl}#website`).toString(),
    url: homeUrl,
    name: siteConfig.name,
    inLanguage: localeMeta[input.locale].htmlLang,
    description: siteConfig.description,
    publisher: { "@id": new URL("/#organization", siteConfig.url).toString() },
  };
}

/**
 * JSON-LD for an Article. Inject as a <script type="application/ld+json">.
 * `path` should already include the locale prefix (use `article.url`).
 */
export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  inLanguage: string;
  publishedDate: string;
  updatedDate: string;
  authorName: string;
  image?: string;
}) {
  const image = input.image ?? siteConfig.defaultOgImage;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    inLanguage: input.inLanguage,
    datePublished: input.publishedDate,
    dateModified: input.updatedDate,
    // Authors are editorial desks (per upstream "remove unsupported
    // attribution" policy), not individual experts. Publisher is
    // referenced by `@id` to the Organization JSON-LD on the layout.
    author: { "@type": "Organization", name: input.authorName },
    publisher: { "@id": new URL("/#organization", siteConfig.url).toString() },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL(input.path, siteConfig.url).toString(),
    },
    image: [
      {
        "@type": "ImageObject",
        url: new URL(image, siteConfig.url).toString(),
        width: 1200,
        height: 630,
      },
    ],
    isAccessibleForFree: true,
  };
}

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
 * JSON-LD for a breadcrumb trail. `path` values are passed through
 * unchanged — callers that build crumbs for a localized page should
 * pass already-localized paths (use `localizedPath(locale, ...)`).
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
