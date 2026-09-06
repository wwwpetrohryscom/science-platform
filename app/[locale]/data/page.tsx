import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import {
  DATASETS,
  INDICATORS,
  indicatorFor,
  getDataset,
  indicatorPath,
  latestObservation,
  seriesFor,
} from "@/lib/scientific-data/index";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import {
  LOCALES,
  getMessages,
  isLocale,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string } };

/**
 * The data hub exists in every locale.
 *
 * Unlike an article, an indicator page is mostly numbers, units and
 * provenance, and all of those are locale-independent. What is
 * translated is the frame around them — the definition, the methodology
 * summary, the limitations and every label — and that frame exists in
 * all six languages, so the page is genuinely readable in all six.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return { robots: { index: false, follow: false } };
  const t = translator(getMessages(params.locale));
  return buildMetadata({
    title: t("data.title"),
    description: t("data.description"),
    path: "/data",
    locale: params.locale,
    availableLocales: [...LOCALES],
  });
}

export default function DataHubPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));

  const providers = new Set(DATASETS.map((d) => d.providerShort));
  // The hub lists the indicators this locale can actually serve, in
  // this locale's words. An entry pointing at a page that 404s in the
  // reader's language would be worse than no entry.
  const available = INDICATORS.map((i) => indicatorFor(i.indicatorId, locale)).filter(
    (i): i is NonNullable<typeof i> => Boolean(i),
  );
  const byCategory = new Map<string, typeof available>();
  for (const ind of available) {
    byCategory.set(ind.category, [...(byCategory.get(ind.category) ?? []), ind]);
  }

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("data.title"), path: localizedPath(locale, "/data") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Layout locale={locale}>
        <PageHeading
          eyebrow={t("data.eyebrow")}
          title={t("data.title")}
          description={t("data.description")}
          accent="neutral"
          crumbs={[
            { label: t("nav.home"), href: localizedPath(locale, "/") },
            { label: t("data.title"), href: localizedPath(locale, "/data") },
          ]}
        />

        <div className="container-page py-14">
          <p className="max-w-reader text-ink-muted">
            {t("data.indicator_count", {
              count: available.length,
              datasets: DATASETS.length,
              providers: providers.size,
            })}
          </p>
          <p className="mt-3 max-w-reader text-sm text-ink-subtle">
            {t("data.not_live")}
          </p>

          {[...byCategory.entries()].map(([category, list]) => (
            <section key={category} className="mt-12">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                {t(`categories_data.${category}`)}
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {list.map((ind) => {
                  const latest = latestObservation(ind.indicatorId);
                  const dataset = getDataset(ind.datasetId);
                  const series = seriesFor(ind.indicatorId);
                  return (
                    <li
                      key={ind.indicatorId}
                      className="rounded-lg border border-ink-line p-5"
                    >
                      <Link
                        href={localizedPath(locale, indicatorPath(ind.indicatorId))}
                        className="font-serif text-lg font-semibold text-ink hover:text-primary-700"
                      >
                        {ind.name}
                      </Link>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {ind.definition}
                      </p>
                      {latest && (
                        <p className="mt-3 text-sm text-ink">
                          <span className="text-ink-subtle">{t("data.latest")}: </span>
                          <strong className="tabular-nums">
                            {latest.value} {ind.unit}
                          </strong>{" "}
                          <span className="text-ink-subtle">({latest.period})</span>
                        </p>
                      )}
                      <p className="mt-1 text-xs text-ink-subtle">
                        {dataset?.providerShort}
                        {series && ` · ${t("data.accessed")} ${series.accessedDate}`}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section className="mt-14 border-t border-ink-line pt-8">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {t("data.datasets_heading")}
            </h2>
            <ul className="mt-4 space-y-4">
              {DATASETS.map((d) => (
                <li key={d.datasetId} className="max-w-reader">
                  <p className="font-medium text-ink">{d.name}</p>
                  <p className="text-sm text-ink-muted">
                    {d.provider} · {d.temporalCoverage} ·{" "}
                    <Link href={d.landingPage} className="link-quiet" rel="noopener">
                      {t("data.landing_page")}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
}
