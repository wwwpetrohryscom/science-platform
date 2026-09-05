import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";

import {
  listGlossaryAlphabetical,
  listGlossarySlugs,
} from "@/lib/glossary";
import {
  buildMetadata,
  breadcrumbJsonLd,
  definedTermSetJsonLd,
} from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getMessages,
  isLocale,
  localeMeta,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

/**
 * The glossary exists in a locale once that locale has localized terms.
 * A locale with none returns 404 rather than an English list under a
 * localized URL, which keeps hreflang honest: a language is listed as
 * available only where there is something to read in it.
 */
function glossaryLocales(): Locale[] {
  return LOCALES.filter((l) => listGlossarySlugs(l).length > 0);
}

export function generateStaticParams() {
  return glossaryLocales().map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  if (!isLocale(locale) || listGlossarySlugs(locale).length === 0) {
    return { robots: { index: false, follow: false } };
  }
  const t = translator(getMessages(locale));
  return buildMetadata({
    title: t("glossary.title"),
    description: t("glossary.description"),
    path: "/glossary",
    locale,
    availableLocales: glossaryLocales(),
  });
}

export default function GlossaryIndexPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const entries = listGlossaryAlphabetical(locale);
  if (entries.length === 0) notFound();

  const t = translator(getMessages(locale));
  const inLanguage = localeMeta[locale].htmlLang;
  const title = t("glossary.title");
  const description = t("glossary.description");

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: title, path: localizedPath(locale, "/glossary") },
  ]);

  const termSetLd = definedTermSetJsonLd({
    title,
    description,
    path: localizedPath(locale, "/glossary"),
    inLanguage,
    terms: entries.map((e) => ({
      name: e.term,
      description: e.shortDefinition,
      path: localizedPath(locale, `/glossary/${e.slug}`),
    })),
  });

  const lastReviewed = entries.reduce(
    (latest, e) => (e.updatedDate > latest ? e.updatedDate : latest),
    entries[0].updatedDate,
  );

  return (
    <Layout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSetLd) }}
      />
      <PageHeading
        eyebrow={t("glossary.eyebrow")}
        title={title}
        description={description}
        accent="primary"
        crumbs={[{ label: t("nav.home"), href: localizedPath(locale, "/") }]}
      />

      <section
        aria-labelledby="glossary-list-heading"
        className="container-page mt-10 max-w-3xl"
      >
        <h2 id="glossary-list-heading" className="sr-only">
          {t("glossary.list_heading")}
        </h2>
        <dl className="divide-y divide-ink-line border-y border-ink-line">
          {entries.map((entry) => (
            <div
              key={entry.slug}
              className="grid gap-2 py-5 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <dt className="font-serif text-lg font-semibold tracking-tight text-ink">
                <Link
                  href={localizedPath(locale, `/glossary/${entry.slug}`)}
                  className="hover:text-primary-700"
                >
                  {entry.term}
                </Link>
              </dt>
              <dd className="text-sm leading-relaxed text-ink-muted">
                {entry.shortDefinition}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs text-ink-subtle">
          {t("glossary.count_line", {
            count: entries.length,
            date: lastReviewed,
          })}
        </p>
      </section>
    </Layout>
  );
}
