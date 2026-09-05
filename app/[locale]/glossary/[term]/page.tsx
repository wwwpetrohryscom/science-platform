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
  LOCALES,
  getMessages,
  isLocale,
  localeMeta,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type Props = { params: { locale: string; term: string } };

/** Locales that define this term. Drives both routing and hreflang, so
 *  a language is advertised only where the term actually exists. */
function localesFor(term: string): Locale[] {
  return LOCALES.filter((l) => listGlossarySlugs(l).includes(term));
}

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    listGlossarySlugs(locale).map((term) => ({ locale, term })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  const entry = isLocale(locale)
    ? getGlossaryEntry(params.term, locale)
    : undefined;
  if (!entry) {
    return {
      title: "Glossary term not found",
      robots: { index: false, follow: false },
    };
  }
  const t = translator(getMessages(locale));
  return buildMetadata({
    title: `${entry.term} — ${t("glossary.label")}`,
    description: entry.shortDefinition,
    path: `/glossary/${entry.slug}`,
    locale,
    availableLocales: localesFor(entry.slug),
    updatedDate: entry.updatedDate,
  });
}

export default async function GlossaryTermPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const entry = getGlossaryEntry(params.term, locale);
  if (!entry) notFound();

  const t = translator(getMessages(locale));
  const inLanguage = localeMeta[locale].htmlLang;
  const categoryDef = getCategory(entry.category);
  const glossaryLabel = t("glossary.label");

  // Same-locale first: the reader is sent to the translated article
  // where one exists, and to the English original where it does not,
  // labelled so the switch of language is visible before the click.
  const relatedArticles = await Promise.all(
    entry.relatedArticles.map(async (ref) => {
      const local =
        locale === DEFAULT_LOCALE
          ? null
          : await getArticleBySlug(locale, ref.slug);
      if (local) return { article: local, inEnglish: false };
      const en = await getArticleBySlug(DEFAULT_LOCALE, ref.slug);
      return en ? { article: en, inEnglish: locale !== DEFAULT_LOCALE } : null;
    }),
  );

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: glossaryLabel, path: localizedPath(locale, "/glossary") },
    { name: entry.term, path: localizedPath(locale, `/glossary/${entry.slug}`) },
  ]);

  const definedTermLd = definedTermJsonLd({
    term: entry.term,
    definition: entry.shortDefinition,
    path: localizedPath(locale, `/glossary/${entry.slug}`),
    inLanguage,
    termSetUrl: localizedPath(locale, "/glossary"),
  });

  return (
    <Layout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermLd) }}
      />

      <PageHeading
        eyebrow={glossaryLabel}
        title={entry.term}
        description={entry.shortDefinition}
        accent={categoryDef.accent}
        crumbs={[
          { label: t("nav.home"), href: localizedPath(locale, "/") },
          { label: glossaryLabel, href: localizedPath(locale, "/glossary") },
        ]}
      />

      <article className="container-page mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-ink">
          {entry.explanation}
        </p>

        {entry.uncertaintyNote && (
          <p className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-ink">
            <strong className="mr-1 font-semibold">{t("glossary.note")}</strong>
            {entry.uncertaintyNote}
          </p>
        )}

        {relatedArticles.some(Boolean) && (
          <section className="mt-10">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
              {t("glossary.where_it_appears")}
            </h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.filter(isPresent).map(({ article, inEnglish }) => (
                <li key={article.slug} className="rounded-md border border-ink-line p-4">
                  <Link
                    href={article.url}
                    className="font-serif text-lg font-semibold text-ink hover:text-primary-700"
                  >
                    {article.title}
                  </Link>
                  {inEnglish && (
                    <span className="ml-2 align-middle text-xs text-ink-subtle">
                      ({t("glossary.english_article")})
                    </span>
                  )}
                  <p className="mt-1 text-sm text-ink-muted">{article.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
            {t("glossary.references")}
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
          {t("glossary.topic")}{" "}
          <Link
            href={localizedPath(locale, `/${entry.category}`)}
            className="link-quiet"
          >
            {t(`categories.${entry.category}.label`)}
          </Link>{" "}
          · {t("glossary.last_reviewed", { date: entry.updatedDate })}
        </p>
      </article>
    </Layout>
  );
}

function isPresent<T>(v: T | null | undefined): v is T {
  return v !== null && v !== undefined;
}
