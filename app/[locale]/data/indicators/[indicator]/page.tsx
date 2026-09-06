import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { SeriesChart, SeriesTable } from "@/components/data/SeriesChart";
import { ProvenancePanel } from "@/components/data/ProvenancePanel";
import {
  INDICATORS,
  getIndicator,
  getDataset,
  seriesFor,
  seriesStatistics,
  latestObservation,
  indicatorPath,
} from "@/lib/scientific-data/index";
import { getGlossaryEntry, hasLocalizedGlossaryTerm } from "@/lib/glossary";
import { entityName } from "@/lib/entities/index";
import { allEntities } from "@/lib/entities/index";
import { getArticleBySlug } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, datasetJsonLd } from "@/lib/seo";
import {
  LOCALES,
  getMessages,
  isLocale,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type Props = { params: { locale: string; indicator: string } };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    INDICATORS.map((i) => ({ locale, indicator: i.indicatorId })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const ind = getIndicator(params.indicator);
  if (!ind || !isLocale(params.locale)) {
    return { robots: { index: false, follow: false } };
  }
  const latest = latestObservation(ind.indicatorId);
  const series = seriesFor(ind.indicatorId);
  const dataset = getDataset(ind.datasetId);
  // The description names the observation and its period, never a bare
  // number: a value with no date is not current data.
  const description = latest
    ? `${ind.definition} Latest available observation: ${latest.value} ${ind.unit} for ${latest.period}, from ${dataset?.providerShort ?? "the provider"}, read ${series?.accessedDate}.`
    : ind.definition;
  return buildMetadata({
    title: ind.name,
    description,
    path: indicatorPath(ind.indicatorId),
    locale: params.locale,
    availableLocales: [...LOCALES],
    updatedDate: series?.accessedDate,
  });
}

const BASIS_KEYS: Record<string, string> = {
  "in-situ-observation": "data.basis_in_situ",
  "satellite-observation": "data.basis_satellite",
  "blended-observation": "data.basis_blended",
  "derived-index": "data.basis_derived",
  "model-estimate": "data.basis_model",
  reanalysis: "data.basis_reanalysis",
};

export default async function IndicatorPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const ind = getIndicator(params.indicator);
  if (!ind) notFound();

  const t = translator(getMessages(locale));
  const dataset = getDataset(ind.datasetId);
  if (!dataset) notFound();
  const series = seriesFor(ind.indicatorId);
  const stats = seriesStatistics(ind.indicatorId);
  const latest = latestObservation(ind.indicatorId);

  const entities = allEntities().filter((e) => ind.relatedEntityIds.includes(e.id));
  const glossary = ind.relatedGlossaryIds
    .map((id) => ({ id, entry: getGlossaryEntry(id, locale) ?? getGlossaryEntry(id, "en") }))
    .filter((g) => g.entry);

  const articles = (
    await Promise.all(
      ind.relatedArticleSlugs.map(async (slug) => {
        const parts = slug.split("/");
        const article = await getArticleBySlug(locale, parts[parts.length - 1]);
        return article ? { slug, article } : null;
      }),
    )
  ).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("data.title"), path: localizedPath(locale, "/data") },
    { name: ind.name, path: localizedPath(locale, indicatorPath(ind.indicatorId)) },
  ]);

  // Dataset schema describes the dataset this page presents, which is a
  // thing that genuinely exists and is genuinely described here.
  const dataLd = datasetJsonLd({
    name: `${ind.name} — ${dataset.name}`,
    description: `${ind.definition} ${ind.methodology}`,
    url: `${localizedPath(locale, indicatorPath(ind.indicatorId))}`,
    creator: dataset.provider,
    license: dataset.licenseUrl,
    temporalCoverage: dataset.temporalCoverage,
    spatialCoverage: dataset.geographicCoverage,
    variableMeasured: ind.name,
    unitText: ind.unitLabel,
    distributionUrl: dataset.downloadUrl,
    isBasedOnUrl: dataset.landingPage,
    dateModified: series?.accessedDate,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataLd) }}
      />
      <Layout locale={locale}>
        <PageHeading
          eyebrow={t(`categories_data.${ind.category}`)}
          title={ind.name}
          description={ind.definition}
          accent="neutral"
          crumbs={[
            { label: t("nav.home"), href: localizedPath(locale, "/") },
            { label: t("data.title"), href: localizedPath(locale, "/data") },
            {
              label: ind.shortName,
              href: localizedPath(locale, indicatorPath(ind.indicatorId)),
            },
          ]}
        />

        <div className="container-page py-12">
          <div className="max-w-reader">
            {latest && series && (
              <div className="not-prose rounded-lg border border-ink-line bg-ink-surface/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("data.latest")}
                </p>
                <p className="mt-2 font-serif text-3xl font-semibold tabular-nums text-ink">
                  {latest.value}{" "}
                  <span className="text-xl font-normal text-ink-muted">{ind.unit}</span>
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {latest.period}
                  {latest.uncertainty !== undefined && ` · ± ${latest.uncertainty} ${ind.unit}`}
                  {ind.referencePeriod && ` · ${t("data.reference_period")}: ${ind.referencePeriod}`}
                </p>
                <p className="mt-3 text-sm text-ink-subtle">{t("data.latest_note")}</p>
                {stats && (
                  <p className="mt-3 border-t border-ink-line pt-3 text-sm text-ink-muted">
                    {t("data.change_since", { year: stats.first.period })}:{" "}
                    <strong className="tabular-nums text-ink">
                      {stats.change > 0 ? "+" : ""}
                      {Number(stats.change.toPrecision(4))} {ind.unit}
                    </strong>{" "}
                    · {t("data.trend")}:{" "}
                    <strong className="tabular-nums text-ink">
                      {stats.trendPerYear > 0 ? "+" : ""}
                      {Number(stats.trendPerYear.toPrecision(3))} {ind.unit} {t("data.per_year")}
                    </strong>{" "}
                    ({t("data.span", { years: stats.spanYears })},{" "}
                    {t("data.observations", { count: stats.count })})
                  </p>
                )}
              </div>
            )}
          </div>

          {series ? (
            <>
              <SeriesChart
                observations={series.observations}
                unit={ind.unit}
                label={`${ind.name}, ${series.observations[0].period}–${
                  series.observations[series.observations.length - 1].period
                }, ${ind.unitLabel}`}
                description={`${ind.name}, ${ind.unitLabel}, ${
                  series.observations[0].period
                } to ${series.observations[series.observations.length - 1].period}. ${
                  series.observations[0].period
                }: ${series.observations[0].value} ${ind.unit}. ${
                  series.observations[series.observations.length - 1].period
                }: ${series.observations[series.observations.length - 1].value} ${ind.unit}. Source: ${
                  dataset.provider
                }.`}
              />
              <SeriesTable
                observations={series.observations}
                unit={ind.unit}
                summary={t("data.table_summary")}
                caption={t("data.table_caption")}
                periodLabel={t("data.table_period")}
                valueLabel={t("data.table_value")}
                uncertaintyLabel={t("data.table_uncertainty")}
              />
            </>
          ) : (
            <p className="my-8 max-w-reader rounded-lg border border-ink-line bg-ink-surface/40 p-5 text-sm text-ink-muted">
              {t("data.no_series")}
            </p>
          )}

          <div className="prose-article max-w-reader">
            <h2>{t("data.what_is_measured")}</h2>
            <p>{ind.definition}</p>
            <p>
              {t("data.unit")}: {ind.unitLabel}.
              {ind.referencePeriod && ` ${t("data.reference_period")}: ${ind.referencePeriod}.`}
            </p>

            <h2>{t("data.how_measured")}</h2>
            <p>{ind.methodology}</p>

            <h2>{t("data.what_it_cannot")}</h2>
            <ul>
              {ind.limitations.map((l) => (
                <li key={l.slice(0, 40)}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="max-w-reader">
            <ProvenancePanel
              dataset={dataset}
              series={series}
              labels={{
                heading: t("data.provenance"),
                provider: t("data.provider"),
                dataset: t("data.dataset"),
                basis: t("data.basis"),
                coverage: t("data.coverage"),
                period: t("data.period"),
                updateFrequency: t("data.update_frequency"),
                providerUpdated: t("data.provider_updated"),
                accessed: t("data.accessed"),
                licence: t("data.licence"),
                citation: t("data.citation"),
                methodology: t("data.methodology"),
                checksum: t("data.checksum"),
                derivation: t("data.derivation"),
                notLive: t("data.not_live"),
                landingPage: t("data.landing_page"),
                downloadPage: t("data.download_page"),
                basisLabels: Object.fromEntries(
                  Object.entries(BASIS_KEYS).map(([k, v]) => [k, t(v)]),
                ),
              }}
            />
          </div>

          <div className="max-w-reader">
            {articles.length > 0 && (
              <section className="mt-10 border-t border-ink-line pt-8">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("data.related_reading")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {articles.map(({ slug, article }) => (
                    <li key={slug}>
                      <Link
                        href={article.url}
                        className="font-medium text-ink hover:text-primary-700"
                      >
                        {article.title}
                      </Link>
                      <p className="text-sm text-ink-muted">{article.excerpt}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {(entities.length > 0 || glossary.length > 0) && (
              <section className="mt-10 border-t border-ink-line pt-8">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("data.related_concepts")}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {glossary.map(({ id, entry }) => (
                    <li key={id}>
                      <Link
                        href={localizedPath(
                          hasLocalizedGlossaryTerm(id, locale) ? locale : "en",
                          `/glossary/${id}`,
                        )}
                        className="inline-block rounded-full border border-ink-line px-3 py-1 text-sm text-ink hover:border-primary-700 hover:text-primary-700"
                      >
                        {entry!.term}
                      </Link>
                    </li>
                  ))}
                  {entities
                    .filter((e) => !ind.relatedGlossaryIds.includes(e.glossaryId ?? ""))
                    .map((e) => (
                      <li
                        key={e.id}
                        className="inline-block rounded-full bg-ink-surface px-3 py-1 text-sm text-ink-muted"
                      >
                        {entityName(e, locale)}
                      </li>
                    ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
