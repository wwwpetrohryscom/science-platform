/**
 * Scientific data layer — types.
 *
 * Three record kinds, deliberately separated:
 *
 *   Dataset    — a thing someone else measured and publishes. We record
 *                its provenance, never its full contents.
 *   Indicator  — a quantity this site presents, defined once, bound to
 *                exactly one dataset.
 *   Series     — the observations behind an indicator, each carrying the
 *                period it describes.
 *
 * The separation exists because they change on different clocks. A
 * dataset's licence and methodology URL change rarely; an indicator's
 * definition almost never; the series changes whenever the provider
 * publishes. Collapsing them into one record would mean re-reviewing the
 * definition every time a number moved.
 *
 * Nothing here is "live". A series records the date the file was read
 * and the date the provider last updated it, and the UI says both. A
 * static build showing a value fetched by hand last week is not live
 * data, and calling it live would be the most ordinary way for this
 * platform to start lying.
 */

/** How close the provider is to the measurement. */
export type ProviderType =
  | "government-agency"
  | "intergovernmental"
  | "research-institute"
  | "university"
  | "consortium";

/**
 * What the numbers are.
 *
 * The distinction is load-bearing: a reanalysis and an observation can
 * sit in the same units on the same axis and mean different things, and
 * presenting a modelled estimate as an official observation is the
 * failure this field exists to prevent.
 */
export type MeasurementBasis =
  | "in-situ-observation"
  | "satellite-observation"
  | "blended-observation"
  | "derived-index"
  | "model-estimate"
  | "reanalysis";

export type Dataset = {
  datasetId: string;
  name: string;
  provider: string;
  providerShort: string;
  providerType: ProviderType;
  /** Human landing page for the dataset. */
  landingPage: string;
  /** Stable machine-readable file, where the provider offers one. */
  downloadUrl?: string;
  /** Page describing how the numbers are produced. */
  methodologyUrl?: string;
  license: string;
  licenseUrl?: string;
  /** The citation the provider asks for, as they word it. */
  citation: string;
  description: string;
  basis: MeasurementBasis;
  variables: string[];
  units: string[];
  geographicCoverage: string;
  /** e.g. "1979–2025" — the span the provider publishes. */
  temporalCoverage: string;
  updateFrequency: string;
  /** What the provider states as its own last update, where stated. */
  latestKnownUpdate?: string;
  /** The date this repository last read the source. */
  accessedDate: string;
  /**
   * Whether values are fetched at request time. False for everything in
   * this repository today, and the field exists so that stays visible.
   */
  isLive: boolean;
  sourceEvidenceIds: string[];
  relatedEntityIds: string[];
  relatedArticleSlugs: string[];
  notes?: string;
};

export type Observation = {
  /** ISO-8601 date or year, describing the period observed. */
  period: string;
  value: number;
  /** Provider-published uncertainty, in the same unit. */
  uncertainty?: number;
  /** Provider marks the value provisional. */
  provisional?: boolean;
};

export type IndicatorSeries = {
  indicatorId: string;
  datasetId: string;
  unit: string;
  /** Exact file this series was derived from. */
  sourceUrl: string;
  /** SHA-256 of that file as read. Documents what was ingested. */
  sourceSha256: string;
  accessedDate: string;
  providerLastUpdated?: string;
  /** How the provider's file was turned into these observations. */
  derivation: string;
  observations: Observation[];
};

export type Indicator = {
  indicatorId: string;
  name: string;
  shortName: string;
  /** One sentence: what quantity this is. */
  definition: string;
  /** What is physically measured, and how. */
  methodology: string;
  unit: string;
  unitLabel: string;
  datasetId: string;
  category: "climate" | "ocean" | "cryosphere" | "atmosphere" | "biosphere";
  /** Higher is not better or worse; this says which way the number moves. */
  direction: "increasing" | "decreasing" | "variable";
  /** What this indicator cannot establish. Required. */
  limitations: string[];
  relatedEntityIds: string[];
  relatedArticleSlugs: string[];
  relatedGlossaryIds: string[];
  relatedToolSlugs?: string[];
  /** Baseline or reference period, where the quantity is an anomaly. */
  referencePeriod?: string;
};
