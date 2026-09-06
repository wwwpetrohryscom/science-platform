import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { SearchClient } from "@/components/SearchClient";
import { getMessages, isLocale, localizedPath, translator } from "@/lib/i18n";
import { LOCALES } from "@/lib/i18n-config";

type Props = { params: { locale: string } };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Search results are kept out of the index.
 *
 * A search page with no query is thin by construction, and a page whose
 * content depends on a query string is a different page for every
 * crawler that guesses one. `noindex` here is not a hedge — it is what
 * this page is. The audit's rule that a noindex page must declare no
 * canonical and no hreflang applies, and `buildMetadata` is deliberately
 * not used for that reason.
 */
export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) {
    return { robots: { index: false, follow: false } };
  }
  const t = translator(getMessages(params.locale));
  return {
    title: t("search.title"),
    description: t("search.description"),
    robots: { index: false, follow: true },
    alternates: null,
  };
}

/**
 * Note the absence of `searchParams`. Reading it here would make the
 * route dynamic — Next renders a page that touches searchParams on
 * demand rather than at build time — and the six locale pages would
 * stop being static HTML on a site that is otherwise entirely
 * prerendered. The `?q=` value is read in the client instead, where it
 * is needed anyway to keep the URL in step with the input.
 */
export default function SearchPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));

  return (
    <Layout locale={locale}>
      <PageHeading
        eyebrow={t("search.eyebrow")}
        title={t("search.title")}
        description={t("search.description")}
        accent="neutral"
        crumbs={[
          { label: t("nav.home"), href: localizedPath(locale, "/") },
          { label: t("search.title"), href: localizedPath(locale, "/search") },
        ]}
      />

      <div className="container-page py-14">
        <div className="max-w-reader">
          <SearchClient
            locale={locale}
            labels={{
              placeholder: t("search.placeholder"),
              label: t("search.label"),
              loading: t("search.loading"),
              empty: t("search.empty"),
              prompt: t("search.prompt"),
              count: t("search.count"),
              countOne: t("search.count_one"),
              kinds: {
                article: t("search.kind_article"),
                insight: t("search.kind_insight"),
                glossary: t("search.kind_glossary"),
                indicator: t("search.kind_indicator"),
                tool: t("search.kind_tool"),
              },
            }}
          />

          <p className="mt-10 border-t border-ink-line pt-6 text-sm text-ink-subtle">
            {t("search.scope")}
          </p>
        </div>
      </div>
    </Layout>
  );
}
