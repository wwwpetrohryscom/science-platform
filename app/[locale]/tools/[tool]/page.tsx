import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { ToolPanel } from "@/components/tools/ToolPanel";
import { TOOLS, getTool, toolPath } from "@/lib/tools/registry";
import {
  CONSTANTS,
  CODATA_SOURCE,
  ATOMIC_WEIGHTS,
  ATOMIC_WEIGHTS_SOURCE,
} from "@/lib/scientific-data/constants";
import { getIndicator, indicatorPath } from "@/lib/scientific-data/index";
import { getGlossaryEntry, hasLocalizedGlossaryTerm } from "@/lib/glossary";
import { getArticleBySlug } from "@/lib/content";
import { buildMetadata, breadcrumbJsonLd, softwareApplicationJsonLd } from "@/lib/seo";
import {
  LOCALES,
  getMessages,
  isLocale,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type Props = { params: { locale: string; tool: string } };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => TOOLS.map((t) => ({ locale, tool: t.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getTool(params.tool);
  if (!tool || !isLocale(params.locale)) {
    return { robots: { index: false, follow: false } };
  }
  const t = translator(getMessages(params.locale));
  return buildMetadata({
    title: t(`tools.${tool.key}.name`),
    description: t(`tools.${tool.key}.summary`),
    path: toolPath(tool.slug),
    locale: params.locale,
    availableLocales: [...LOCALES],
  });
}

/** Labels the client panel needs. Passed in so the panel reads no files. */
const PANEL_KEYS = [
  "err", "err_number", "err_counts",
  "amount", "from", "to", "result", "in_joules",
  "mode", "from_wavelength", "from_frequency",
  "wavelength_nm", "frequency_hz", "wavelength", "frequency",
  "refractive_index", "refractive_hint", "region", "phase_speed",
  "region_gamma_ray", "region_X_ray", "region_ultraviolet",
  "region_visible", "region_infrared", "region_microwave", "region_radio",
  "energy_j", "energy_ev",
  "initial_amount", "half_life", "elapsed_time", "same_units", "time_unit",
  "remaining", "fraction_remaining", "half_lives_elapsed",
  "decay_constant", "mean_lifetime",
  "model", "exponential", "logistic", "initial_population", "growth_rate",
  "per_time_unit", "carrying_capacity", "time", "population_at_t",
  "doubling_time", "fraction_of_capacity", "not_applicable",
  "counts", "counts_hint", "richness", "total_individuals",
  "shannon", "shannon_bits", "nats", "bits", "evenness",
  "undefined_one_species", "simpson_d", "simpson_diversity", "inverse_simpson",
  "direction", "c_to_co2", "co2_to_c", "mass_c", "mass_co2",
  "any_mass_unit", "factor_used",
  "number", "number_hint", "figures", "significant_figures",
  "scientific_notation", "mantissa", "exponent", "note",
  "ambiguous_trailing_zeros",
] as const;

export default async function ToolPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const tool = getTool(params.tool);
  if (!tool) notFound();

  const t = translator(getMessages(locale));
  const name = t(`tools.${tool.key}.name`);

  const labels = Object.fromEntries(
    PANEL_KEYS.map((k) => [k, t(`tools.${k}`)]),
  ) as Record<string, string>;

  const constants = CONSTANTS.filter((c) => tool.usesConstants.includes(c.constantId));

  const articles = (
    await Promise.all(
      tool.relatedArticleSlugs.map(async (slug) => {
        const parts = slug.split("/");
        const article = await getArticleBySlug(locale, parts[parts.length - 1]);
        return article ? { slug, article } : null;
      }),
    )
  ).filter((a): a is NonNullable<typeof a> => Boolean(a));

  const glossary = tool.relatedGlossaryIds
    .map((id) => ({ id, entry: getGlossaryEntry(id, locale) ?? getGlossaryEntry(id, "en") }))
    .filter((g) => g.entry);

  const indicators = (tool.relatedIndicatorIds ?? [])
    .map((id) => getIndicator(id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("tools.title"), path: localizedPath(locale, "/tools") },
    { name, path: localizedPath(locale, toolPath(tool.slug)) },
  ]);

  // SoftwareApplication describes what the page actually is: a
  // browser-based calculator that costs nothing to use. Nothing here is
  // claimed that a visitor cannot see on the page.
  const appLd = softwareApplicationJsonLd({
    name,
    description: t(`tools.${tool.key}.summary`),
    url: localizedPath(locale, toolPath(tool.slug)),
    inLanguage: locale,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <Layout locale={locale}>
        <PageHeading
          eyebrow={t("tools.eyebrow")}
          title={name}
          description={t(`tools.${tool.key}.summary`)}
          accent="neutral"
          crumbs={[
            { label: t("nav.home"), href: localizedPath(locale, "/") },
            { label: t("tools.title"), href: localizedPath(locale, "/tools") },
            { label: name, href: localizedPath(locale, toolPath(tool.slug)) },
          ]}
        />

        <div className="container-page py-12">
          <div className="max-w-reader">
            <p className="not-prose rounded-lg border border-ink-line bg-ink-surface/40 px-4 py-3 font-mono text-sm text-ink">
              <span className="mr-2 font-sans text-xs uppercase tracking-[0.14em] text-ink-subtle">
                {t("tools.formula")}
              </span>
              {tool.formula}
            </p>

            <div className="mt-8">
              <ToolPanel slug={tool.slug} labels={labels} />
              <noscript>
                <p className="mt-4 rounded-lg border border-ink-line bg-ink-surface/40 p-4 text-sm text-ink-muted">
                  {t("tools.no_js")}
                </p>
              </noscript>
            </div>

            <div className="prose-article mt-12">
              <p>{t(`tools.${tool.key}.explanation`)}</p>

              <h2>{t("tools.assumptions")}</h2>
              <p>{t(`tools.${tool.key}.assumptions`)}</p>

              <h2>{t("tools.caveats")}</h2>
              <p>{t(`tools.${tool.key}.caveats`)}</p>
            </div>

            {(constants.length > 0 || tool.usesAtomicWeights) && (
              <section className="not-prose mt-10 rounded-lg border border-ink-line bg-ink-surface/40 p-5">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("tools.constants_used")}
                </h2>
                <dl className="mt-4 space-y-3">
                  {constants.map((c) => (
                    <div key={c.constantId}>
                      <dt className="text-sm font-medium text-ink">
                        {c.name} ({c.symbol})
                      </dt>
                      <dd className="text-sm tabular-nums text-ink-muted">
                        {c.valueDisplay} {c.unit} —{" "}
                        {c.exact
                          ? t("tools.exact")
                          : t("tools.measured", { u: c.standardUncertaintyDisplay })}
                      </dd>
                    </div>
                  ))}
                  {tool.usesAtomicWeights &&
                    ATOMIC_WEIGHTS.map((e) => (
                      <div key={e.symbol}>
                        <dt className="text-sm font-medium text-ink">
                          {e.name} ({e.symbol})
                        </dt>
                        <dd className="text-sm tabular-nums text-ink-muted">
                          {e.standardAtomicWeight} ± {e.uncertainty} — {e.unit}
                        </dd>
                      </div>
                    ))}
                </dl>
                {constants.length > 0 && (
                  <p className="mt-4 text-xs text-ink-subtle">
                    {t("tools.constants_source", {
                      adjustment: CODATA_SOURCE.adjustment,
                      provider: CODATA_SOURCE.provider,
                      accessed: CODATA_SOURCE.accessedDate,
                    })}{" "}
                    <Link href={CODATA_SOURCE.landingPage} className="link-quiet" rel="noopener">
                      {CODATA_SOURCE.landingPage.replace(/^https:\/\//, "")}
                    </Link>
                  </p>
                )}
                {tool.usesAtomicWeights && (
                  <p className="mt-2 text-xs text-ink-subtle">
                    {t("tools.atomic_weights_source", {
                      table: ATOMIC_WEIGHTS_SOURCE.table,
                      provider: ATOMIC_WEIGHTS_SOURCE.provider,
                    })}{" "}
                    <Link
                      href={ATOMIC_WEIGHTS_SOURCE.landingPage}
                      className="link-quiet"
                      rel="noopener"
                    >
                      {ATOMIC_WEIGHTS_SOURCE.landingPage.replace(/^https:\/\//, "")}
                    </Link>
                    {" — "}
                    {ATOMIC_WEIGHTS_SOURCE.note}
                  </p>
                )}
              </section>
            )}

            {articles.length > 0 && (
              <section className="mt-10 border-t border-ink-line pt-8">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("tools.related_reading")}
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

            {(indicators.length > 0 || glossary.length > 0) && (
              <section className="mt-10 border-t border-ink-line pt-8">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {indicators.length > 0 ? t("tools.related_data") : t("tools.related_concepts")}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {indicators.map((i) => (
                    <li key={i.indicatorId}>
                      <Link
                        href={localizedPath(locale, indicatorPath(i.indicatorId))}
                        className="inline-block rounded-full border border-ink-line px-3 py-1 text-sm text-ink hover:border-primary-700 hover:text-primary-700"
                      >
                        {i.shortName}
                      </Link>
                    </li>
                  ))}
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
                </ul>
              </section>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
