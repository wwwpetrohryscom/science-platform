#!/usr/bin/env tsx
/**
 * Turn a provider's published file into an indicator series.
 *
 * Every series in `data/indicators/series/` is produced by this script,
 * from a URL, and carries the SHA-256 of the bytes it was produced from
 * plus the date they were read. That is the whole point: a number in
 * this repository can be traced to a file, and the file can be re-fetched
 * and re-hashed by anyone who doubts it.
 *
 * The parsers below are per-provider and deliberately dumb. Each one
 * knows the shape of one file and refuses anything else — a provider
 * that changes its column order should break the ingest, not silently
 * shift a column.
 *
 * This is not an update daemon. It is run by hand, it records when it
 * ran, and nothing on the site claims the values are live.
 *
 * Usage:
 *   npm run data:ingest                 # re-fetch every series
 *   npm run data:ingest -- atmospheric-co2
 *   npm run data:ingest -- --check      # re-fetch and report drift, write nothing
 */
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

import type { IndicatorSeries, Observation } from "../lib/scientific-data/types";

const OUT_DIR = path.join(process.cwd(), "data", "indicators", "series");
const UA = "EcoScienceHub indicator ingest (+https://ecosciencehub.com)";

type Spec = {
  indicatorId: string;
  datasetId: string;
  unit: string;
  sourceUrl: string;
  derivation: string;
  /** Provider's own stated last-update, if it is on the landing page. */
  providerLastUpdated?: string;
  parse: (text: string) => Observation[];
};

/** `  2025   425.62     0.09` — NOAA GML annual mean files. */
function noaaAnnualMean(text: string): Observation[] {
  const out: Observation[] = [];
  for (const line of text.split("\n")) {
    if (line.trim().startsWith("#") || !line.trim()) continue;
    const m = /^\s*(\d{4})\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*$/.exec(line);
    if (!m) continue;
    out.push({ period: m[1], value: Number(m[2]), uncertainty: Number(m[3]) });
  }
  if (out.length < 20) throw new Error(`NOAA annual-mean parse produced ${out.length} rows`);
  return out;
}

/** NOAA AGGI table: Year,CO2,CH4,N2O,CFC*,HCFCs,HFCs*,Total,Total,1990 = 1,change */
function noaaAggi(text: string): Observation[] {
  const out: Observation[] = [];
  for (const line of text.split("\n")) {
    const cols = line.split(",");
    if (cols.length < 10 || !/^\d{4}$/.test(cols[0].trim())) continue;
    // Column 10 (index 9) is the index itself, 1990 = 1.
    const v = Number(cols[9]);
    if (!Number.isFinite(v)) continue;
    out.push({ period: cols[0].trim(), value: v });
  }
  if (out.length < 20) throw new Error(`AGGI parse produced ${out.length} rows`);
  return out;
}

/** GISTEMP v4 GLB.Ts+dSST.csv — the J-D (January–December) column. */
function gistempAnnual(text: string): Observation[] {
  const lines = text.split("\n");
  const headerIdx = lines.findIndex((l) => l.startsWith("Year,"));
  if (headerIdx < 0) throw new Error("GISTEMP header row not found");
  const header = lines[headerIdx].split(",").map((s) => s.trim());
  const jd = header.indexOf("J-D");
  if (jd < 0) throw new Error("GISTEMP J-D column not found");
  const out: Observation[] = [];
  for (const line of lines.slice(headerIdx + 1)) {
    const cols = line.split(",").map((s) => s.trim());
    if (!/^\d{4}$/.test(cols[0] ?? "")) continue;
    const raw = cols[jd];
    if (!raw || raw.includes("*")) continue; // incomplete year
    const v = Number(raw);
    if (!Number.isFinite(v)) continue;
    out.push({ period: cols[0], value: v });
  }
  if (out.length < 100) throw new Error(`GISTEMP parse produced ${out.length} rows`);
  return out;
}

/** NCEI basin heat content: `year+0.5  OB  OBse  NH  NHse  SH  SHse`. */
function nceiHeatContent(text: string): Observation[] {
  const out: Observation[] = [];
  for (const line of text.split("\n")) {
    const m = /^\s*(\d{4})\.500\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s/.exec(line);
    if (!m) continue;
    out.push({ period: m[1], value: Number(m[2]), uncertainty: Number(m[3]) });
  }
  if (out.length < 10) throw new Error(`NCEI OHC parse produced ${out.length} rows`);
  return out;
}

/** NSIDC Sea Ice Index monthly extent: `year, mo, source, region, extent, area`. */
function nsidcSeptemberExtent(text: string): Observation[] {
  const out: Observation[] = [];
  for (const line of text.split("\n")) {
    const cols = line.split(",").map((s) => s.trim());
    if (cols.length < 5 || !/^\d{4}$/.test(cols[0])) continue;
    if (cols[1] !== "9") continue;
    const v = Number(cols[4]);
    if (!Number.isFinite(v)) continue;
    out.push({ period: cols[0], value: v });
  }
  if (out.length < 20) throw new Error(`NSIDC parse produced ${out.length} rows`);
  return out;
}

/**
 * NOAA LSA sea level: decimal-year rows, one column per altimeter
 * mission, in mm. Reduced to calendar-year means.
 *
 * A year is only emitted when at least eight of its cycles are present,
 * so a partial final year is not published as if it were a full one.
 */
function noaaSeaLevelAnnual(text: string): Observation[] {
  const byYear = new Map<string, number[]>();
  for (const line of text.split("\n")) {
    if (line.startsWith("#") || line.startsWith("year")) continue;
    const cols = line.split(",");
    if (cols.length < 2) continue;
    const t = Number(cols[0]);
    if (!Number.isFinite(t)) continue;
    // Number("") is 0, not NaN. The missions that were not flying in a
    // given year leave their column empty, so converting before checking
    // for emptiness turned every gap into a reading of exactly 0 mm —
    // and the most recent year, covered by one mission with five empty
    // columns beside it, came out as 0.
    const vals = cols
      .slice(1)
      .map((c) => c.trim())
      .filter((c) => c !== "")
      .map(Number)
      .filter((v) => Number.isFinite(v));
    if (vals.length === 0) continue;
    const y = String(Math.floor(t));
    byYear.set(y, [...(byYear.get(y) ?? []), vals[0]]);
  }
  const out: Observation[] = [];
  for (const [year, vals] of [...byYear.entries()].sort()) {
    if (vals.length < 8) continue;
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    out.push({ period: year, value: Math.round(mean * 100) / 100 });
  }
  if (out.length < 20) throw new Error(`Sea-level parse produced ${out.length} rows`);
  return out;
}

const SPECS: Spec[] = [
  {
    indicatorId: "atmospheric-co2",
    datasetId: "noaa-gml-ccgg-co2-global",
    unit: "ppm",
    sourceUrl: "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_gl.txt",
    derivation:
      "Globally averaged marine surface annual mean, taken verbatim from NOAA GML's published annual-mean file. Column 2 is the mean, column 3 the published uncertainty.",
    parse: noaaAnnualMean,
  },
  {
    indicatorId: "co2-growth-rate",
    datasetId: "noaa-gml-ccgg-co2-global",
    unit: "ppm yr⁻¹",
    sourceUrl: "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_gr_gl.txt",
    derivation:
      "NOAA GML's published annual growth rate: the difference between the December and the preceding December globally averaged mole fraction, as the provider computes it. Not differenced here.",
    parse: noaaAnnualMean,
  },
  {
    indicatorId: "atmospheric-ch4",
    datasetId: "noaa-gml-ccgg-ch4-global",
    unit: "ppb",
    sourceUrl: "https://gml.noaa.gov/webdata/ccgg/trends/ch4/ch4_annmean_gl.txt",
    derivation: "Globally averaged marine surface annual mean, verbatim from NOAA GML.",
    parse: noaaAnnualMean,
  },
  {
    indicatorId: "atmospheric-n2o",
    datasetId: "noaa-gml-ccgg-n2o-global",
    unit: "ppb",
    sourceUrl: "https://gml.noaa.gov/webdata/ccgg/trends/n2o/n2o_annmean_gl.txt",
    derivation: "Globally averaged marine surface annual mean, verbatim from NOAA GML.",
    parse: noaaAnnualMean,
  },
  {
    indicatorId: "annual-greenhouse-gas-index",
    datasetId: "noaa-gml-aggi",
    unit: "index (1990 = 1)",
    sourceUrl: "https://gml.noaa.gov/aggi/AGGI_Table.csv",
    derivation:
      "The AGGI column of NOAA GML's published table — total radiative forcing from the long-lived greenhouse gases, expressed relative to 1990. Column 10 of the table.",
    parse: noaaAggi,
  },
  {
    indicatorId: "global-temperature-anomaly",
    datasetId: "nasa-giss-gistemp-v4",
    unit: "°C",
    sourceUrl: "https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",
    derivation:
      "The J-D (January–December) column of GISTEMP v4's global land–ocean table: the calendar-year mean anomaly against the 1951–1980 base period. Years the file marks incomplete are skipped.",
    parse: gistempAnnual,
  },
  {
    indicatorId: "ocean-heat-content-0-2000m",
    datasetId: "noaa-ncei-ocean-heat-content",
    unit: "10²² J",
    sourceUrl:
      "https://www.ncei.noaa.gov/data/oceans/woa/DATA_ANALYSIS/3M_HEAT_CONTENT/DATA/basin/yearly/h22-w0-2000m.dat",
    derivation:
      "World-ocean column of NCEI's yearly 0–2000 m heat-content file, with the provider's standard error. The file's first column is year+0.5; the year is taken from it.",
    parse: nceiHeatContent,
  },
  {
    indicatorId: "arctic-sea-ice-september-extent",
    datasetId: "nsidc-sea-ice-index-v4",
    unit: "million km²",
    sourceUrl:
      "https://noaadata.apps.nsidc.org/NOAA/G02135/north/monthly/data/N_09_extent_v4.0.csv",
    derivation:
      "September monthly mean extent for the Northern Hemisphere, verbatim from the NSIDC Sea Ice Index monthly file. September is the annual minimum month.",
    parse: nsidcSeptemberExtent,
  },
  {
    indicatorId: "global-mean-sea-level",
    datasetId: "noaa-lsa-sea-level",
    unit: "mm",
    sourceUrl:
      "https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/slr/slr_sla_gbl_keep_ref_90.csv",
    derivation:
      "Calendar-year means of NOAA LSA's global mean sea-level anomaly series (annual signals retained, no glacial isostatic adjustment). A year is emitted only when at least eight altimeter cycles are present, so a partial final year is not published as a full one.",
    parse: noaaSeaLevelAnnual,
  },
];

function sha256(s: string): string {
  return crypto.createHash("sha256").update(s, "utf8").digest("hex");
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const only = args.filter((a) => !a.startsWith("--"));
  const specs = only.length ? SPECS.filter((s) => only.includes(s.indicatorId)) : SPECS;
  if (specs.length === 0) {
    console.error(`No indicator matched ${only.join(", ")}`);
    process.exit(1);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  let drift = 0;
  let failed = 0;

  for (const spec of specs) {
    const target = path.join(OUT_DIR, `${spec.indicatorId}.json`);
    let text: string;
    try {
      text = await fetchText(spec.sourceUrl);
    } catch (e) {
      failed += 1;
      console.log(`✗ ${spec.indicatorId} — ${(e as Error).message}`);
      continue;
    }

    let observations: Observation[];
    try {
      observations = spec.parse(text);
    } catch (e) {
      failed += 1;
      console.log(`✗ ${spec.indicatorId} — parse refused: ${(e as Error).message}`);
      continue;
    }

    const hash = sha256(text);
    const existing = await fs
      .readFile(target, "utf8")
      .then((s) => JSON.parse(s) as IndicatorSeries)
      .catch(() => null);

    if (check) {
      if (!existing) {
        drift += 1;
        console.log(`✗ ${spec.indicatorId} — no series file on disk`);
      } else if (existing.sourceSha256 !== hash) {
        drift += 1;
        const last = observations[observations.length - 1];
        console.log(
          `⚠ ${spec.indicatorId} — provider file changed since ingest ` +
            `(latest now ${last.period} = ${last.value} ${spec.unit})`,
        );
      } else {
        console.log(`✓ ${spec.indicatorId} — provider file unchanged`);
      }
      continue;
    }

    const series: IndicatorSeries = {
      indicatorId: spec.indicatorId,
      datasetId: spec.datasetId,
      unit: spec.unit,
      sourceUrl: spec.sourceUrl,
      sourceSha256: hash,
      accessedDate: today(),
      providerLastUpdated: spec.providerLastUpdated,
      derivation: spec.derivation,
      observations,
    };
    await fs.writeFile(target, `${JSON.stringify(series, null, 2)}\n`, "utf8");
    const first = observations[0];
    const last = observations[observations.length - 1];
    console.log(
      `✓ ${spec.indicatorId} — ${observations.length} observations, ` +
        `${first.period}–${last.period}, latest ${last.value} ${spec.unit}`,
    );
  }

  if (failed) {
    console.log(`\n${failed} source(s) could not be ingested`);
    process.exit(1);
  }
  if (check && drift) {
    console.log(
      `\n${drift} series differ from the provider's current file — ` +
        `run \`npm run data:ingest\` and review the change`,
    );
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
