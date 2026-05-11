import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import {
  siteConfig,
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import {
  LOCALES,
  isLocale,
  localeMeta,
  getMessages,
  translator,
  type Locale,
} from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E7D32",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

/**
 * `[locale]` is the *root* layout. There is no `app/layout.tsx` —
 * removing it lets `<html lang>` and `<html dir>` derive directly
 * from the URL's locale segment, which is the only correct place
 * to set them. (Next.js requires html/body on the root-most layout
 * in the segment tree; with no `app/layout.tsx`, this layout is
 * the root for every page.)
 *
 * Static-generates one HTML shell per supported locale.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isLocale(params.locale)) {
    return { title: siteConfig.name };
  }
  const locale: Locale = params.locale;
  const messages = getMessages(locale);
  const t = translator(messages);

  // Per-locale defaults: title template, OG locale, hreflang, canonical.
  // Child pages override `title` and `description` via their own
  // generateMetadata; this layout supplies the surrounding scaffolding.
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("site.name"),
      template: `%s — ${t("site.name")}`,
    },
    description: t("site.description"),
    ...buildMetadata({
      title: t("site.tagline"),
      description: t("site.description"),
      path: "/",
      locale,
    }),
  };
}

export default function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  if (!isLocale(params.locale)) notFound();
  const meta = localeMeta[params.locale];

  // Site-wide structured data — Organization is identical across
  // locales (it identifies the publisher); WebSite is per-locale so
  // its `inLanguage` and `url` reflect the current root.
  const orgLd = organizationJsonLd();
  const siteLd = websiteJsonLd({ locale: params.locale });

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${inter.variable} ${serif.variable}`}
    >
      <body className="min-h-screen bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          // Stable, derived from typed config — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        {children}
        <CookieBanner />
        {/*
          WebmasterID analytics tracker — anonymous, GDPR-friendly visitor
          analytics. siteId and endpoint are public client-side config.
          Loaded once per page after first paint so it never blocks render.
        */}
        <Script
          id="webmasterid-tracker"
          src="https://webmasterid.com/tracker.iife.min.js"
          strategy="afterInteractive"
          data-wmid="wm_2e43kf5u8ntbtlvn"
          data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
        />
      </body>
    </html>
  );
}
