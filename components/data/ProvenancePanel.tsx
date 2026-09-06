import Link from "next/link";

import type { Dataset, IndicatorSeries } from "@/lib/scientific-data/types";

/**
 * Where a number came from, stated on the page.
 *
 * Provenance that lives in a JSON file or a page comment is not
 * provenance a reader has. Everything a person needs to judge the
 * number — who measured it, from what, over what period, under what
 * licence, when this site last read it, and whether it is live — is
 * visible here, in the reader's language, next to the chart.
 *
 * The "not live" row is the one that is easy to leave out and most
 * important to keep. A static build displaying a value fetched by hand
 * is not live data, and the honest form of that is to say so rather
 * than to say nothing.
 */
export function ProvenancePanel({
  dataset,
  series,
  labels,
}: {
  dataset: Dataset;
  series?: IndicatorSeries;
  labels: {
    heading: string;
    provider: string;
    dataset: string;
    basis: string;
    coverage: string;
    period: string;
    updateFrequency: string;
    providerUpdated: string;
    accessed: string;
    licence: string;
    citation: string;
    methodology: string;
    checksum: string;
    derivation: string;
    notLive: string;
    basisLabels: Record<string, string>;
    landingPage: string;
    downloadPage: string;
  };
}) {
  const rows: Array<{ term: string; value: React.ReactNode }> = [
    { term: labels.provider, value: dataset.provider },
    {
      term: labels.dataset,
      value: (
        <>
          {dataset.name}{" "}
          <Link href={dataset.landingPage} className="link-quiet" rel="noopener">
            {labels.landingPage}
          </Link>
          {dataset.downloadUrl && (
            <>
              {" · "}
              <Link href={dataset.downloadUrl} className="link-quiet" rel="noopener">
                {labels.downloadPage}
              </Link>
            </>
          )}
        </>
      ),
    },
    {
      term: labels.basis,
      value: labels.basisLabels[dataset.basis] ?? dataset.basis,
    },
    { term: labels.coverage, value: dataset.geographicCoverage },
    { term: labels.period, value: dataset.temporalCoverage },
    { term: labels.updateFrequency, value: dataset.updateFrequency },
  ];

  if (dataset.latestKnownUpdate) {
    rows.push({ term: labels.providerUpdated, value: dataset.latestKnownUpdate });
  }
  rows.push({ term: labels.accessed, value: series?.accessedDate ?? dataset.accessedDate });
  rows.push({ term: labels.licence, value: dataset.license });
  if (dataset.methodologyUrl) {
    rows.push({
      term: labels.methodology,
      value: (
        <Link href={dataset.methodologyUrl} className="link-quiet" rel="noopener">
          {dataset.methodologyUrl.replace(/^https:\/\//, "")}
        </Link>
      ),
    });
  }
  if (series) {
    rows.push({ term: labels.derivation, value: series.derivation });
    rows.push({
      term: labels.checksum,
      value: <code className="break-all text-xs">{series.sourceSha256}</code>,
    });
  }
  rows.push({ term: labels.citation, value: dataset.citation });

  return (
    <section
      aria-labelledby="provenance"
      className="not-prose my-10 rounded-lg border border-ink-line bg-ink-surface/40 p-5"
    >
      <h2
        id="provenance"
        className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle"
      >
        {labels.heading}
      </h2>
      <p className="mt-3 text-sm font-medium text-ink">{labels.notLive}</p>
      <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-[minmax(9rem,auto)_1fr]">
        {rows.map((r) => (
          <div key={r.term} className="contents">
            <dt className="text-sm font-medium text-ink-subtle">{r.term}</dt>
            <dd className="text-sm leading-relaxed text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
