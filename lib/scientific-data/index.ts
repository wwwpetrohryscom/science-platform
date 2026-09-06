/**
 * Scientific data layer — loaders.
 *
 * Server-side: reads `data/datasets`, `data/indicators` and the series
 * files from disk at module load, the same shape the rest of this
 * repository uses for its content layers.
 *
 * The one rule that is not obvious from the types: an indicator without
 * a series is a definition of a quantity nobody has ingested yet, and
 * the page for it must say so rather than show an empty chart. Callers
 * get `undefined` from `seriesFor`, not an empty array, so that
 * distinction cannot be lost by accident.
 */
import fs from "node:fs";
import path from "node:path";

import type {
  Dataset,
  Indicator,
  IndicatorSeries,
  Observation,
} from "@/lib/scientific-data/types";

export type {
  Dataset,
  Indicator,
  IndicatorSeries,
  Observation,
  MeasurementBasis,
  ProviderType,
} from "@/lib/scientific-data/types";

const DATA = path.join(process.cwd(), "data");

function readJson<T>(rel: string): T {
  return JSON.parse(fs.readFileSync(path.join(DATA, rel), "utf8")) as T;
}

export const DATASETS: Dataset[] = readJson<{ datasets: Dataset[] }>(
  "datasets/registry.json",
).datasets;

export const INDICATORS: Indicator[] = readJson<{ indicators: Indicator[] }>(
  "indicators/definitions.json",
).indicators;

const SERIES: Map<string, IndicatorSeries> = (() => {
  const dir = path.join(DATA, "indicators", "series");
  const map = new Map<string, IndicatorSeries>();
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    const s = JSON.parse(
      fs.readFileSync(path.join(dir, file), "utf8"),
    ) as IndicatorSeries;
    map.set(s.indicatorId, s);
  }
  return map;
})();

const DATASET_BY_ID = new Map(DATASETS.map((d) => [d.datasetId, d]));
const INDICATOR_BY_ID = new Map(INDICATORS.map((i) => [i.indicatorId, i]));

export function getDataset(id: string): Dataset | undefined {
  return DATASET_BY_ID.get(id);
}

export function getIndicator(id: string): Indicator | undefined {
  return INDICATOR_BY_ID.get(id);
}

/** Undefined — not an empty array — when nothing has been ingested. */
export function seriesFor(indicatorId: string): IndicatorSeries | undefined {
  return SERIES.get(indicatorId);
}

export function listIndicatorIds(): string[] {
  return INDICATORS.map((i) => i.indicatorId);
}

export function listDatasetIds(): string[] {
  return DATASETS.map((d) => d.datasetId);
}

/** Indicators that draw on a given dataset. */
export function indicatorsForDataset(datasetId: string): Indicator[] {
  return INDICATORS.filter((i) => i.datasetId === datasetId);
}

/** The most recent observation, or undefined when there is no series. */
export function latestObservation(indicatorId: string): Observation | undefined {
  const s = SERIES.get(indicatorId);
  if (!s || s.observations.length === 0) return undefined;
  return s.observations[s.observations.length - 1];
}

/**
 * Change between the first and last observation, and the least-squares
 * trend per year.
 *
 * The trend is computed over the whole series and is reported with the
 * span it covers, because a trend without a period is not a number a
 * reader can check. Nothing here decides whether the trend is
 * meaningful; that is what the indicator's `limitations` are for.
 */
export function seriesStatistics(indicatorId: string):
  | {
      first: Observation;
      last: Observation;
      change: number;
      spanYears: number;
      trendPerYear: number;
      count: number;
    }
  | undefined {
  const s = SERIES.get(indicatorId);
  if (!s || s.observations.length < 2) return undefined;
  const obs = s.observations;
  const first = obs[0];
  const last = obs[obs.length - 1];

  const xs = obs.map((o) => Number(o.period.slice(0, 4)));
  const ys = obs.map((o) => o.value);
  const n = xs.length;
  const meanX = xs.reduce((a, b) => a + b, 0) / n;
  const meanY = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - meanX) * (ys[i] - meanY);
    den += (xs[i] - meanX) ** 2;
  }
  const slope = den === 0 ? 0 : num / den;

  return {
    first,
    last,
    change: last.value - first.value,
    spanYears: xs[n - 1] - xs[0],
    trendPerYear: slope,
    count: n,
  };
}

/**
 * Reverse edges: what data and tools name this article.
 *
 * The forward direction — an indicator naming its related articles —
 * is authored, checked by the validator, and visible on the data page.
 * The reverse is derived from it rather than authored a second time, so
 * the two cannot disagree, and it is what lets a reader who arrives at
 * the carbon-cycle article discover that the site holds the CO2 series
 * and a carbon-mass converter.
 *
 * Only articles an indicator or a tool actually names appear. Nothing
 * here infers a relationship from a shared tag or a shared word, which
 * would fill the graph with edges that mean nothing.
 */
export function indicatorsForArticle(slug: string): Indicator[] {
  return INDICATORS.filter((i) => i.relatedArticleSlugs.includes(slug));
}

export function datasetsForArticle(slug: string): Dataset[] {
  return DATASETS.filter((d) => d.relatedArticleSlugs.includes(slug));
}

/** Public path for an indicator page, without the locale prefix. */
export function indicatorPath(indicatorId: string): string {
  return `/data/indicators/${indicatorId}`;
}

export function datasetPath(datasetId: string): string {
  return `/data/datasets/${datasetId}`;
}
