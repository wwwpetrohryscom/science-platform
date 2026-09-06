#!/usr/bin/env tsx
/**
 * Dataset, indicator and series validator.
 *
 * The rules here are shaped by what would actually go wrong. A dataset
 * record is a provenance claim; an indicator is a promise about what a
 * number means; a series is the number itself. Each can fail in its own
 * way, and most of the failures are silent — a plausible record with a
 * wrong unit renders exactly as well as a right one.
 *
 * What this refuses:
 *
 *   - a dataset with no landing page, no licence or no citation
 *   - an indicator bound to a dataset that does not exist
 *   - an indicator whose unit disagrees with its series' unit
 *   - an indicator with no stated limitations (the field is required
 *     because "what this cannot establish" is the part a data page is
 *     most tempted to omit)
 *   - a series with no source URL, no checksum or no accessed date
 *   - an observation with no period, a non-finite value, or a period
 *     outside a plausible range
 *   - observations out of chronological order or duplicated
 *   - any record claiming to be live, since nothing here is
 *   - an accessed date in the future, or before the site existed
 *   - a related article, entity or glossary id that does not resolve
 *
 * Usage: npm run data:validate
 */
import fs from "node:fs";
import path from "node:path";

import {
  DATASETS,
  INDICATORS,
  seriesFor,
  getDataset,
  indicatorLocalization,
  localizedIndicatorLocales,
} from "../lib/scientific-data/index";
import { LOCALES, DEFAULT_LOCALE } from "../lib/i18n-config";
import { GLOSSARY } from "../lib/glossary";
import { allEntities } from "../lib/entities/index";

type Issue = { severity: "error" | "warning"; rule: string; where: string; message: string };

const issues: Issue[] = [];
const err = (rule: string, where: string, message: string) =>
  issues.push({ severity: "error", rule, where, message });
const warn = (rule: string, where: string, message: string) =>
  issues.push({ severity: "warning", rule, where, message });

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
/** The repository did not exist before this; a date before it is a typo. */
const EARLIEST_PLAUSIBLE = "2025-01-01";
const TODAY = new Date().toISOString().slice(0, 10);

const VALID_BASIS = new Set([
  "in-situ-observation",
  "satellite-observation",
  "blended-observation",
  "derived-index",
  "model-estimate",
  "reanalysis",
]);
const VALID_PROVIDER_TYPE = new Set([
  "government-agency",
  "intergovernmental",
  "research-institute",
  "university",
  "consortium",
]);

function articleExists(slug: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "content", "en", `${slug}.md`));
}

function checkDate(where: string, field: string, v: string | undefined, required: boolean) {
  if (!v) {
    if (required) err("date-missing", where, `${field} is missing`);
    return;
  }
  if (!ISO_DATE.test(v)) {
    err("date-shape", where, `${field} "${v}" is not an ISO yyyy-mm-dd date`);
    return;
  }
  if (v > TODAY) {
    err("date-future", where, `${field} "${v}" is in the future`);
  }
  if (v < EARLIEST_PLAUSIBLE) {
    err("date-implausible", where, `${field} "${v}" predates this repository`);
  }
}

/* ---------------- datasets ---------------- */

const datasetIds = new Set<string>();
for (const d of DATASETS) {
  const where = `dataset ${d.datasetId}`;
  if (!d.datasetId || !/^[a-z0-9-]+$/.test(d.datasetId)) {
    err("dataset-id", where, "datasetId must be lowercase-hyphenated and non-empty");
  }
  if (datasetIds.has(d.datasetId)) err("dataset-duplicate", where, "datasetId is not unique");
  datasetIds.add(d.datasetId);

  for (const field of [
    "name",
    "provider",
    "providerShort",
    "landingPage",
    "license",
    "citation",
    "description",
    "geographicCoverage",
    "temporalCoverage",
    "updateFrequency",
  ] as const) {
    if (!d[field] || String(d[field]).trim() === "") {
      err("dataset-field", where, `${field} is empty — a provenance record with a hole in it is not provenance`);
    }
  }
  if (!/^https:\/\//.test(d.landingPage)) {
    err("dataset-url", where, `landingPage "${d.landingPage}" is not an https URL`);
  }
  if (d.downloadUrl && !/^https:\/\//.test(d.downloadUrl)) {
    err("dataset-url", where, `downloadUrl "${d.downloadUrl}" is not an https URL`);
  }
  if (d.methodologyUrl && !/^https:\/\//.test(d.methodologyUrl)) {
    err("dataset-url", where, `methodologyUrl "${d.methodologyUrl}" is not an https URL`);
  }
  if (!VALID_BASIS.has(d.basis)) {
    err("dataset-basis", where, `basis "${d.basis}" is not a known measurement basis`);
  }
  if (!VALID_PROVIDER_TYPE.has(d.providerType)) {
    err("dataset-provider-type", where, `providerType "${d.providerType}" is not known`);
  }
  if (d.variables.length === 0) err("dataset-field", where, "variables is empty");
  if (d.units.length === 0) err("dataset-field", where, "units is empty");
  checkDate(where, "accessedDate", d.accessedDate, true);
  if (d.latestKnownUpdate) checkDate(where, "latestKnownUpdate", d.latestKnownUpdate, false);
  if (d.isLive) {
    err(
      "dataset-live-claim",
      where,
      "isLive is true, but nothing in this repository fetches at request time — a static build is not live data",
    );
  }
  for (const slug of d.relatedArticleSlugs) {
    if (!articleExists(slug)) {
      err("dataset-article", where, `relatedArticleSlugs names "${slug}", which is not an English article`);
    }
  }
}

/* ---------------- indicators ---------------- */

const entityIds = new Set(allEntities().map((e) => e.id));
const glossaryIds = new Set(GLOSSARY.map((g) => g.slug));
const indicatorIds = new Set<string>();

for (const ind of INDICATORS) {
  const where = `indicator ${ind.indicatorId}`;
  if (!/^[a-z0-9-]+$/.test(ind.indicatorId)) {
    err("indicator-id", where, "indicatorId must be lowercase-hyphenated");
  }
  if (indicatorIds.has(ind.indicatorId)) {
    err("indicator-duplicate", where, "indicatorId is not unique");
  }
  indicatorIds.add(ind.indicatorId);

  for (const field of [
    "name",
    "shortName",
    "definition",
    "methodology",
    "unit",
    "unitLabel",
  ] as const) {
    if (!ind[field] || String(ind[field]).trim() === "") {
      err("indicator-field", where, `${field} is empty`);
    }
  }
  if (!getDataset(ind.datasetId)) {
    err("indicator-dataset", where, `datasetId "${ind.datasetId}" is not in the dataset registry`);
  }
  if (!ind.limitations || ind.limitations.length === 0) {
    err(
      "indicator-limitations",
      where,
      "limitations is empty — what an indicator cannot establish is the part a data page is most tempted to leave out, so it is required",
    );
  }
  for (const id of ind.relatedEntityIds) {
    if (!entityIds.has(id)) {
      err("indicator-entity", where, `relatedEntityIds names "${id}", which is not in the entity graph`);
    }
  }
  for (const id of ind.relatedGlossaryIds) {
    if (!glossaryIds.has(id)) {
      err("indicator-glossary", where, `relatedGlossaryIds names "${id}", which is not a glossary term`);
    }
  }
  for (const slug of ind.relatedArticleSlugs) {
    if (!articleExists(slug)) {
      err("indicator-article", where, `relatedArticleSlugs names "${slug}", which is not an English article`);
    }
  }
  if (ind.relatedArticleSlugs.length === 0) {
    warn("indicator-orphan", where, "no related article — the indicator is not reachable from the prose corpus");
  }

  /* ---------------- series ---------------- */

  const s = seriesFor(ind.indicatorId);
  if (!s) {
    warn(
      "series-absent",
      where,
      "no ingested series — the page must say the indicator is defined but not yet ingested, and must not render an empty chart",
    );
    continue;
  }
  const sw = `series ${ind.indicatorId}`;
  if (s.datasetId !== ind.datasetId) {
    err("series-dataset", sw, `series names dataset "${s.datasetId}" but the indicator names "${ind.datasetId}"`);
  }
  if (s.unit !== ind.unit) {
    err(
      "series-unit",
      sw,
      `series unit "${s.unit}" disagrees with the indicator unit "${ind.unit}" — the same number in two units is two different claims`,
    );
  }
  if (!/^https:\/\//.test(s.sourceUrl)) {
    err("series-source", sw, `sourceUrl "${s.sourceUrl}" is not an https URL`);
  }
  if (!/^[0-9a-f]{64}$/.test(s.sourceSha256)) {
    err("series-checksum", sw, "sourceSha256 is not a 64-character hex digest");
  }
  if (!s.derivation || s.derivation.length < 20) {
    err("series-derivation", sw, "derivation is missing or too short to explain how the file became these numbers");
  }
  checkDate(sw, "accessedDate", s.accessedDate, true);
  if (s.providerLastUpdated) checkDate(sw, "providerLastUpdated", s.providerLastUpdated, false);

  if (s.observations.length === 0) {
    err("series-empty", sw, "series has no observations");
    continue;
  }
  const seen = new Set<string>();
  let previous = "";
  for (const [i, o] of s.observations.entries()) {
    const ow = `${sw}[${i}]`;
    if (!o.period || !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(o.period)) {
      err("observation-period", ow, `period "${o.period}" is not a year or ISO date`);
      continue;
    }
    const year = Number(o.period.slice(0, 4));
    if (year < 1700 || year > Number(TODAY.slice(0, 4))) {
      err("observation-period", ow, `period "${o.period}" is outside the plausible observing range`);
    }
    if (!Number.isFinite(o.value)) {
      err("observation-value", ow, `value ${o.value} is not a finite number`);
    }
    if (o.uncertainty !== undefined) {
      if (!Number.isFinite(o.uncertainty)) {
        err("observation-uncertainty", ow, "uncertainty is not a finite number");
      } else if (o.uncertainty < 0) {
        err("observation-uncertainty", ow, "uncertainty is negative");
      }
    }
    if (seen.has(o.period)) {
      err("observation-duplicate", ow, `period "${o.period}" appears more than once`);
    }
    seen.add(o.period);
    if (previous && o.period < previous) {
      err("observation-order", ow, `period "${o.period}" follows "${previous}" — observations must be in order`);
    }
    previous = o.period;
  }
}

/* ---------------- indicator localization ---------------- */

// All-or-nothing per locale, and structurally identical to the English.
// An indicator page in Russian chrome around an English definition is
// the half-in-your-language failure this rule exists to prevent, and it
// is the same rule the editorial policy pages follow.
const UNIT_SYMBOLS = ["ppm", "ppb", "10²² J", "mm", "°C", "million km²", "ppm yr⁻¹"];
const NUMERALS = /(?<![\p{L}])(?:\d+(?:[.,]\d+)?)/gu;

for (const locale of localizedIndicatorLocales()) {
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    err("indicator-locale-unknown", `localized.${locale}.json`, "not a supported locale");
    continue;
  }
  for (const ind of INDICATORS) {
    const where = `${locale}/${ind.indicatorId}`;
    const loc = indicatorLocalization(ind.indicatorId, locale);
    if (!loc) {
      err(
        "indicator-localization-partial",
        where,
        `the ${locale} file exists but does not contain this indicator — a locale is served whole or not at all`,
      );
      continue;
    }
    for (const field of ["name", "shortName", "definition", "methodology", "unitLabel"] as const) {
      if (!loc[field] || String(loc[field]).trim() === "") {
        err("indicator-localization-empty", where, `${field} is empty`);
      }
    }
    if (loc.limitations.length !== ind.limitations.length) {
      err(
        "indicator-localization-limitations",
        where,
        `${loc.limitations.length} limitations against ${ind.limitations.length} in English — a limitation that vanishes in translation is the worst thing on the page to lose`,
      );
    }
    if (Boolean(loc.referencePeriod) !== Boolean(ind.referencePeriod)) {
      err(
        "indicator-localization-reference",
        where,
        "referencePeriod is present in one language and absent in the other",
      );
    }
    // Numerals must survive. Compared as multisets over the whole body.
    const enNums = [ind.definition, ind.methodology, ...ind.limitations]
      .join(" ")
      .match(NUMERALS) ?? [];
    const locNums = [loc.definition, loc.methodology, ...loc.limitations]
      .join(" ")
      .match(NUMERALS) ?? [];
    const count = (a: string[]) =>
      a.reduce<Record<string, number>>((m, n) => ({ ...m, [n]: (m[n] ?? 0) + 1 }), {});
    const a = count(enNums);
    const b = count(locNums);
    const missing = Object.keys(a).filter((k) => (b[k] ?? 0) < a[k]);
    if (missing.length) {
      err(
        "indicator-localization-numbers",
        where,
        `numerals present in the English body and missing here: ${missing.slice(0, 5).join(", ")}`,
      );
    }
    // Unit symbols are the same in every language; translating one is a
    // defect, not a courtesy.
    for (const sym of UNIT_SYMBOLS) {
      const inEn = [ind.definition, ind.methodology, ...ind.limitations].join(" ").includes(sym);
      const inLoc = [loc.definition, loc.methodology, ...loc.limitations].join(" ").includes(sym);
      if (inEn && !inLoc) {
        err(
          "indicator-localization-unit",
          where,
          `the unit symbol "${sym}" appears in the English body and not here — unit symbols are not translated`,
        );
      }
    }
  }
}
for (const locale of LOCALES) {
  if (locale === DEFAULT_LOCALE) continue;
  if (!localizedIndicatorLocales().includes(locale)) {
    warn(
      "indicator-locale-absent",
      locale,
      `no localized indicator file, so /${locale}/data lists nothing and the indicator pages are English-only`,
    );
  }
}

/* ---------------- registry-level ---------------- */

for (const d of DATASETS) {
  const used = INDICATORS.some((i) => i.datasetId === d.datasetId);
  if (!used && d.datasetId !== "nist-codata-2022") {
    warn(
      "dataset-unused",
      `dataset ${d.datasetId}`,
      "no indicator draws on this dataset",
    );
  }
}

const seriesDir = path.join(process.cwd(), "data", "indicators", "series");
if (fs.existsSync(seriesDir)) {
  for (const file of fs.readdirSync(seriesDir)) {
    if (!file.endsWith(".json")) continue;
    const id = file.replace(/\.json$/, "");
    if (!indicatorIds.has(id)) {
      err(
        "series-orphan",
        `series ${id}`,
        "a series file exists for an indicator that is not defined",
      );
    }
  }
}

/* ---------------- report ---------------- */

const asJson = process.argv.includes("--json");
const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");

if (asJson) {
  console.log(JSON.stringify({ datasets: DATASETS.length, indicators: INDICATORS.length, issues }, null, 2));
} else {
  for (const i of issues) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  const withSeries = INDICATORS.filter((i) => seriesFor(i.indicatorId)).length;
  const observations = INDICATORS.reduce(
    (n, i) => n + (seriesFor(i.indicatorId)?.observations.length ?? 0),
    0,
  );
  const providers = new Set(DATASETS.map((d) => d.providerShort));
  console.log(
    `\n${DATASETS.length} datasets · ${providers.size} providers · ` +
      `${INDICATORS.length} indicators (${withSeries} with a series) · ` +
      `${observations} observations`,
  );
  console.log(`${errors.length} errors · ${warnings.length} warnings`);
}

if (errors.length > 0) process.exit(1);
