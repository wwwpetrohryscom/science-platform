import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";

import {
  GLOSSARY,
  listGlossaryAlphabetical,
} from "@/lib/glossary";
import {
  buildMetadata,
  breadcrumbJsonLd,
  definedTermSetJsonLd,
} from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  getMessages,
  isLocale,
  localeMeta,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

const META_TITLE = "Scientific glossary";
const META_DESCRIPTION =
  "Source-backed definitions for terms used across EcoScienceHub articles — radiative forcing, ocean heat content, gene expression, energy balance, and more.";

/**
 * Glossary is EN-only in this pass. Other locales return 404 so we
 * don't ship untranslated definitions under a localized URL — and so
 * hreflang stays accurate.
 */
export function generateStaticParams() {
  return [{ locale: DEFAULT_LOCALE }];
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.locale !== DEFAULT_LOCALE) return { robots: { index: false, follow: false } };
  return buildMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: "/glossary",
    locale: DEFAULT_LOCALE,
    availableLocales: [DEFAULT_LOCALE],
  });
}

export default function GlossaryIndexPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (params.locale !== DEFAULT_LOCALE) notFound();

  const t = translator(getMessages(DEFAULT_LOCALE));
  const entries = listGlossaryAlphabetical();
  const inLanguage = localeMeta[DEFAULT_LOCALE].htmlLang;

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(DEFAULT_LOCALE, "/") },
    { name: META_TITLE, path: localizedPath(DEFAULT_LOCALE, "/glossary") },
  ]);

  const termSetLd = definedTermSetJsonLd({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: localizedPath(DEFAULT_LOCALE, "/glossary"),
    inLanguage,
    terms: entries.map((e) => ({
      name: e.term,
      description: e.shortDefinition,
      path: localizedPath(DEFAULT_LOCALE, `/glossary/${e.slug}`),
    })),
  });

  return (
    <Layout locale={DEFAULT_LOCALE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSetLd) }}
      />
      <PageHeading
        eyebrow="Reference"
        title={META_TITLE}
        description={META_DESCRIPTION}
        accent="primary"
        crumbs={[{ label: t("nav.home"), href: localizedPath(DEFAULT_LOCALE, "/") }]}
      />

      <section
        aria-labelledby="glossary-list-heading"
        className="container-page mt-10 max-w-3xl"
      >
        <h2 id="glossary-list-heading" className="sr-only">
          Glossary terms
        </h2>
        <dl className="divide-y divide-ink-line border-y border-ink-line">
          {entries.map((entry) => (
            <div
              key={entry.slug}
              className="grid gap-2 py-5 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <dt className="font-serif text-lg font-semibold tracking-tight text-ink">
                <Link
                  href={localizedPath(DEFAULT_LOCALE, `/glossary/${entry.slug}`)}
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
          {entries.length} terms · last reviewed by editorial desk{" "}
          {entries.reduce((latest, e) => (e.updatedDate > latest ? e.updatedDate : latest), GLOSSARY[0]?.updatedDate ?? "")}.
        </p>
      </section>
    </Layout>
  );
}
