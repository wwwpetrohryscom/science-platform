/**
 * Evidence registry accessors.
 *
 * The registry is generated from the corpus by scripts/evidence-build.ts
 * and read here at build time. Nothing in this module writes.
 */
import fs from "node:fs";
import path from "node:path";

import type { EvidenceRecord, EvidenceRegistry, SourceType } from "./types";

export type { EvidenceRecord, EvidenceRegistry, SourceType } from "./types";

const REGISTRY_PATH = path.join(process.cwd(), "data", "evidence", "registry.json");

let cache: EvidenceRegistry | null = null;

export function loadRegistry(): EvidenceRegistry {
  if (cache) return cache;
  if (!fs.existsSync(REGISTRY_PATH)) {
    return (cache = { generatedDate: "", records: [] });
  }
  return (cache = JSON.parse(
    fs.readFileSync(REGISTRY_PATH, "utf8"),
  ) as EvidenceRegistry);
}

export function allEvidence(): EvidenceRecord[] {
  return loadRegistry().records;
}

const byUrlCache = new Map<string, EvidenceRecord>();
function byUrl(): Map<string, EvidenceRecord> {
  if (byUrlCache.size === 0) {
    for (const r of allEvidence()) byUrlCache.set(r.url, r);
  }
  return byUrlCache;
}

export function evidenceForUrl(url: string): EvidenceRecord | undefined {
  return byUrl().get(url);
}

export function evidenceById(id: string): EvidenceRecord | undefined {
  return allEvidence().find((r) => r.evidenceId === id);
}

/** Every source an article cites, in registry order. */
export function evidenceForArticle(slug: string): EvidenceRecord[] {
  return allEvidence().filter((r) => r.usedBy.some((u) => u.slug === slug));
}

/**
 * Counts by source type for one article, for the trust panel. Reports
 * only what the registry knows; it is not a score and must not be
 * rendered as one.
 */
export function evidenceProfile(slug: string): {
  total: number;
  byType: Partial<Record<SourceType, number>>;
  liveDatasets: number;
  distinctOrganizations: number;
} {
  const records = evidenceForArticle(slug);
  const byType: Partial<Record<SourceType, number>> = {};
  const orgs = new Set<string>();
  let live = 0;
  for (const r of records) {
    byType[r.sourceType] = (byType[r.sourceType] ?? 0) + 1;
    if (r.organization) orgs.add(r.organization.toLowerCase());
    if (r.isLiveDataset) live += 1;
  }
  return {
    total: records.length,
    byType,
    liveDatasets: live,
    distinctOrganizations: orgs.size,
  };
}

/** Human-facing label for a source type. Plain description, never a rank. */
export const SOURCE_TYPE_LABEL: Record<SourceType, string> = {
  government: "Government agency",
  intergovernmental: "Intergovernmental body",
  "peer-reviewed": "Peer-reviewed",
  "systematic-review": "Systematic review",
  "meta-analysis": "Meta-analysis",
  university: "University",
  "scientific-dataset": "Scientific dataset",
  "standards-body": "Standards body",
  "research-institute": "Research institute",
  other: "Other",
};
