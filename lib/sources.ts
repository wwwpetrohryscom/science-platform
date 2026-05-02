/**
 * Source policy.
 *
 * Articles cite sources inline in body markdown (see the `## Sources`
 * sections in /content). This module adds a *policy* layer on top of
 * that convention: a curated registry of high-authority organizations
 * per category, plus helpers for the validator and content scripts.
 *
 * It deliberately does not require a frontmatter migration. The
 * validator extracts source URLs from the body (and, optionally, from
 * a `sources:` frontmatter array) and checks them against the registry.
 *
 * Adding a new source = one entry below.
 */
import type { CategorySlug } from "@/lib/categories";

export type SourceType =
  | "primary"
  | "secondary"
  | "report"
  | "dataset"
  | "peer-reviewed";

export type SourceEntry = {
  /** Human-readable name of the publication / dataset / report. */
  name: string;
  /** Issuing organization. */
  organization: string;
  /** Canonical homepage or landing URL — used to validate citation domains. */
  url: string;
  type: SourceType;
};

export const SOURCE_REGISTRY: Record<CategorySlug, SourceEntry[]> = {
  ecology: [
    {
      name: "AR6 Synthesis Report",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/syr/",
      type: "report",
    },
    {
      name: "AR6 Working Group I",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/",
      type: "report",
    },
    {
      name: "Global Climate Change",
      organization: "NASA",
      url: "https://climate.nasa.gov/",
      type: "primary",
    },
    {
      name: "NASA Science: Climate Change Evidence",
      organization: "NASA",
      url: "https://science.nasa.gov/climate-change/",
      type: "primary",
    },
    {
      name: "European Environment Agency",
      organization: "EEA",
      url: "https://www.eea.europa.eu/",
      type: "primary",
    },
    {
      name: "Climate.gov",
      organization: "NOAA",
      url: "https://www.climate.gov/",
      type: "primary",
    },
    {
      name: "State of the Climate",
      organization: "NOAA",
      url: "https://www.ncei.noaa.gov/",
      type: "report",
    },
    {
      name: "State of the World's Forests",
      organization: "FAO",
      url: "https://www.fao.org/",
      type: "report",
    },
    {
      name: "Emissions Gap Report",
      organization: "UNEP",
      url: "https://www.unep.org/",
      type: "report",
    },
    {
      name: "Living Planet Report",
      organization: "WWF",
      url: "https://www.worldwildlife.org/",
      type: "report",
    },
    {
      name: "ICP Forests",
      organization: "ICP Forests",
      url: "http://icp-forests.net/",
      type: "primary",
    },
    {
      name: "Forest Inventory and Analysis",
      organization: "USDA Forest Service",
      url: "https://www.fia.fs.usda.gov/",
      type: "primary",
    },
    {
      name: "Climate change and health",
      organization: "WHO",
      url: "https://www.who.int/",
      type: "report",
    },
    {
      name: "Global Assessment Report on Biodiversity",
      organization: "IPBES",
      url: "https://www.ipbes.net/",
      type: "report",
    },
  ],
  biology: [
    {
      name: "PubMed",
      organization: "NIH / NLM",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
    },
    {
      name: "Nature",
      organization: "Springer Nature",
      url: "https://www.nature.com/",
      type: "peer-reviewed",
    },
    {
      name: "Science",
      organization: "AAAS",
      url: "https://www.science.org/",
      type: "peer-reviewed",
    },
    {
      name: "Cell",
      organization: "Cell Press",
      url: "https://www.cell.com/",
      type: "peer-reviewed",
    },
    {
      name: "eLife",
      organization: "eLife Sciences",
      url: "https://elifesciences.org/",
      type: "peer-reviewed",
    },
    {
      name: "PLOS Biology",
      organization: "PLOS",
      url: "https://journals.plos.org/plosbiology/",
      type: "peer-reviewed",
    },
    {
      name: "Ensembl",
      organization: "EMBL-EBI",
      url: "https://www.ensembl.org/",
      type: "dataset",
    },
  ],
  physics: [
    {
      name: "International Energy Agency",
      organization: "IEA",
      url: "https://www.iea.org/",
      type: "primary",
    },
    {
      name: "CERN",
      organization: "CERN",
      url: "https://home.cern/",
      type: "primary",
    },
    {
      name: "Physical Review Letters",
      organization: "American Physical Society",
      url: "https://journals.aps.org/prl/",
      type: "peer-reviewed",
    },
    {
      name: "Reviews of Modern Physics",
      organization: "American Physical Society",
      url: "https://journals.aps.org/rmp/",
      type: "peer-reviewed",
    },
    {
      name: "arXiv",
      organization: "Cornell University",
      url: "https://arxiv.org/",
      type: "secondary",
    },
    {
      name: "NREL",
      organization: "U.S. National Renewable Energy Laboratory",
      url: "https://www.nrel.gov/",
      type: "primary",
    },
    {
      name: "Joint Research Centre",
      organization: "European Commission",
      url: "https://joint-research-centre.ec.europa.eu/",
      type: "primary",
    },
  ],
};

export function getSourcesForCategory(category: CategorySlug): SourceEntry[] {
  return SOURCE_REGISTRY[category] ?? [];
}

/**
 * Top-N sources used by the article generator to pre-fill citation
 * scaffolding. Deterministic — picks the first N entries.
 */
export function suggestSources(category: CategorySlug, count = 3): SourceEntry[] {
  return getSourcesForCategory(category).slice(0, count);
}

/**
 * Test whether a citation URL is from an organization listed in the
 * registry for a given category. Matches by host AND any subdomain.
 *
 * Examples:
 *   isAuthoritativeUrl("https://www.ipcc.ch/report/ar6/wg1/", "ecology") → true
 *   isAuthoritativeUrl("https://medium.com/blog", "ecology") → false
 */
export function isAuthoritativeUrl(
  url: string,
  category: CategorySlug,
): boolean {
  const allowed = getSourcesForCategory(category).map(
    (s) => safeHost(s.url) ?? "",
  );
  const host = safeHost(url);
  if (!host) return false;
  return allowed.some(
    (allowedHost) =>
      Boolean(allowedHost) &&
      (host === allowedHost || host.endsWith(`.${allowedHost}`)),
  );
}

/**
 * Cross-category check — a paper indexed on PubMed is authoritative
 * for an ecology article that cites a biology mechanism, even though
 * PubMed lives in the biology registry. The validator uses this for
 * a softer warning rule.
 */
export function isAuthoritativeUrlAnyCategory(url: string): boolean {
  const host = safeHost(url);
  if (!host) return false;
  for (const cat of Object.keys(SOURCE_REGISTRY) as CategorySlug[]) {
    if (isAuthoritativeUrl(url, cat)) return true;
  }
  void host;
  return false;
}

function safeHost(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Pull every URL out of a markdown body. Used by the validator to
 * gather citations without requiring authors to also list them in
 * frontmatter.
 *
 * Matches `[text](url)` and bare `<https://...>` autolinks. Does not
 * match URLs inside code spans or fenced code blocks.
 */
export function extractCitationUrls(body: string): string[] {
  const stripped = stripCodeRegions(body);
  const urls = new Set<string>();
  for (const m of stripped.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)) {
    urls.add(m[1]);
  }
  for (const m of stripped.matchAll(/<(https?:\/\/[^>]+)>/g)) {
    urls.add(m[1]);
  }
  return [...urls];
}

function stripCodeRegions(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]+`/g, "");
}
