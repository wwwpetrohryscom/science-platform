import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";

import {
  getGlossaryEntry,
  listGlossarySlugs,
} from "@/lib/glossary";
import { getArticleBySlug } from "@/lib/content";
import { getCategory } from "@/lib/categories";
import {
  buildMetadata,
  breadcrumbJsonLd,
  definedTermJsonLd,
} from "@/lib/seo";
import {
  DEFAULT_LOCALE,
  getMessages,
  isLocale,
  localeMeta,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string; term: string } };

export function generateStaticParams() {
  return listGlossarySlugs().map((term) => ({
    locale: DEFAULT_LOCALE,
    term,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.locale !== DEFAULT_LOCALE) return { robots: { index: false, follow: false } };
  const entry = getGlossaryEntry(params.term);
  if (!entry) {
    return buildMetadata({
      title: "Glossary term not found",
      description: "The requested glossary term could not be found.",
      path: `/glossary/${params.term}`,
      locale: DEFAULT_LOCALE,
      availableLocales: [DEFAULT_LOCALE],
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${entry.term} — Glossary`,
    description: entry.shortDefinition,
    path: `/glossary/${entry.slug}`,
    locale: DEFAULT_LOCALE,
    availableLocales: [DEFAULT_LOCALE],
    updatedDate: entry.updatedDate,
  });
}

export default async function GlossaryTermPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  if (params.locale !== DEFAULT_LOCALE) notFound();
  const entry = getGlossaryEntry(params.term);
  if (!entry) notFound();

  const t = translator(getMessages(DEFAULT_LOCALE));
  const inLanguage = localeMeta[DEFAULT_LOCALE].htmlLang;
  const categoryDef = getCategory(entry.category);

  const relatedArticles = await Promise.all(
    entry.relatedArticles.map(async (ref) => {
      const a = await getArticleBySlug(DEFAULT_LOCALE, ref.slug);
      return a ?? null;
    }),
  );

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(DEFAULT_LOCALE, "/") },
    { name: "Glossary", path: localizedPath(DEFAULT_LOCALE, "/glossary") },
    { name: entry.term, path: localizedPath(DEFAULT_LOCALE, `/glossary/${entry.slug}`) },
  ]);

  const definedTermLd = definedTermJsonLd({
    term: entry.term,
    definition: entry.shortDefinition,
    path: localizedPath(DEFAULT_LOCALE, `/glossary/${entry.slug}`),
    inLanguage,
    termSetUrl: localizedPath(DEFAULT_LOCALE, "/glossary"),
  });

  return (
    <Layout locale={DEFAULT_LOCALE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermLd) }}
      />

      <PageHeading
        eyebrow="Glossary"
        title={entry.term}
        description={entry.shortDefinition}
        accent={categoryDef.accent}
        crumbs={[
          { label: t("nav.home"), href: localizedPath(DEFAULT_LOCALE, "/") },
          { label: "Glossary", href: localizedPath(DEFAULT_LOCALE, "/glossary") },
        ]}
      />

      <article className="container-page mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-ink">
          {entry.explanation}
        </p>

        {entry.uncertaintyNote && (
          <p className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-ink">
            <strong className="mr-1 font-semibold">Note.</strong>
            {entry.uncertaintyNote}
          </p>
        )}

        {relatedArticles.some(Boolean) && (
          <section className="mt-10">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
              Where this term appears
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.filter(isPresent).map((article) => (
                <li key={article.slug} className="rounded-md border border-ink-line p-4">
                  <Link
                    href={article.url}
                    className="font-serif text-lg font-semibold text-ink hover:text-primary-700"
                  >
                    {article.title}
                  </Link>
                  <p className="mt-1 text-sm text-ink-muted">{article.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
            Authoritative references
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
            {entry.relatedSources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  rel="noopener nofollow"
                  className="link-quiet"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-xs text-ink-subtle">
          Topic:{" "}
          <Link
            href={localizedPath(DEFAULT_LOCALE, `/${entry.category}`)}
            className="link-quiet"
          >
            {categoryDef.label}
          </Link>{" "}
          · Last reviewed {entry.updatedDate}
        </p>
      </article>
    </Layout>
  );
}

function isPresent<T>(v: T | null | undefined): v is T {
  return v !== null && v !== undefined;
}
