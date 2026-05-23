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
  /**
   * Optional one-line note on what this source is good for in the
   * context of this category. Surfaced by the source-transparency UI;
   * not used by the host-validation logic.
   */
  topicRelevance?: string;
  /**
   * Optional ISO date the editorial team last verified the source URL
   * is live and the citation conventions are current. Used by source
   * transparency notes; not used by the host-validation logic.
   */
  lastReviewed?: string;
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
      name: "Climate Change Indicators",
      organization: "U.S. Environmental Protection Agency",
      url: "https://www.epa.gov/climate-indicators",
      type: "primary",
    },
    {
      name: "Ecosystems and Biodiversity",
      organization: "UNEP",
      url: "https://www.unep.org/explore-topics/ecosystems",
      type: "report",
    },
    {
      name: "Biodiversity: State of Habitats and Species",
      organization: "European Environment Agency",
      url: "https://www.eea.europa.eu/en/topics/in-depth/biodiversity",
      type: "report",
    },
    {
      name: "Forests and Forestry",
      organization: "European Environment Agency",
      url: "https://www.eea.europa.eu/en/topics/in-depth/forests-and-forestry",
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
      name: "PubMed",
      organization: "NIH / NLM",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
    },
    {
      name: "NASA Earth Observatory",
      organization: "NASA",
      url: "https://earthobservatory.nasa.gov/",
      type: "primary",
      topicRelevance:
        "Land cover, vegetation, and climate-system imagery and explainers",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NOAA",
      organization: "NOAA",
      url: "https://noaa.gov/",
      type: "primary",
      topicRelevance:
        "Atmospheric and ocean monitoring, climate observations; subdomains include coralreefwatch.noaa.gov",
      lastReviewed: "2026-05-08",
    },
    {
      name: "Global Monitoring Laboratory",
      organization: "NOAA",
      url: "https://gml.noaa.gov/",
      type: "dataset",
      topicRelevance:
        "Long-term greenhouse gas and aerosol measurement records",
      lastReviewed: "2026-05-08",
    },
    {
      name: "United States Geological Survey",
      organization: "USGS",
      url: "https://www.usgs.gov/",
      type: "primary",
      topicRelevance:
        "Hydrology, biology, and Earth-surface processes in the United States",
      lastReviewed: "2026-05-08",
    },
    {
      name: "Copernicus Climate Change Service",
      organization: "ECMWF / European Commission",
      url: "https://climate.copernicus.eu/",
      type: "primary",
      topicRelevance:
        "Global climate reanalyses and indicator products for Europe and the world",
      lastReviewed: "2026-05-08",
    },
    {
      name: "World Meteorological Organization",
      organization: "WMO",
      url: "https://wmo.int/",
      type: "report",
      topicRelevance:
        "State of the climate, greenhouse-gas bulletins, and weather-system standards",
      lastReviewed: "2026-05-08",
    },
    {
      name: "National Snow and Ice Data Center",
      organization: "NSIDC / University of Colorado Boulder",
      url: "https://nsidc.org/",
      type: "dataset",
      topicRelevance:
        "Reference cryosphere datasets — sea-ice extent, snow cover, ice-sheet mass balance",
      lastReviewed: "2026-05-23",
    },
    {
      name: "World Glacier Monitoring Service",
      organization: "WGMS",
      url: "https://wgms.ch/",
      type: "dataset",
      topicRelevance:
        "Long-term glacier mass-balance and length reference dataset (WMO/IUGG/UNEP partner)",
      lastReviewed: "2026-05-23",
    },
    {
      name: "World Climate Research Programme",
      organization: "WCRP",
      url: "https://www.wcrp-climate.org/",
      type: "report",
      topicRelevance:
        "Coordinates the Coupled Model Intercomparison Project (CMIP) used in IPCC assessments",
      lastReviewed: "2026-05-23",
    },
    {
      name: "International Energy Agency",
      organization: "IEA",
      url: "https://www.iea.org/",
      type: "report",
      topicRelevance:
        "Energy-system deployment indicators relevant to mitigation reporting",
      lastReviewed: "2026-05-23",
    },
  ],
  biology: [
    {
      name: "Talking Glossary of Genomic and Genetic Terms",
      organization: "National Human Genome Research Institute",
      url: "https://www.genome.gov/genetics-glossary",
      type: "primary",
    },
    {
      name: "NCBI Bookshelf",
      organization: "NIH / NLM",
      url: "https://www.ncbi.nlm.nih.gov/books/",
      type: "primary",
    },
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
      name: "Coral Reef Watch",
      organization: "NOAA",
      url: "https://coralreefwatch.noaa.gov/",
      type: "primary",
    },
    {
      name: "Ensembl",
      organization: "EMBL-EBI",
      url: "https://www.ensembl.org/",
      type: "dataset",
    },
    {
      name: "National Institutes of Health",
      organization: "NIH",
      url: "https://www.nih.gov/",
      type: "primary",
      topicRelevance:
        "U.S. biomedical research agency — programs, fact sheets, and explainers",
      lastReviewed: "2026-05-08",
    },
    {
      name: "World Health Organization",
      organization: "WHO",
      url: "https://www.who.int/",
      type: "primary",
      topicRelevance:
        "Global health authority on infectious disease, AMR, and health-system data",
      lastReviewed: "2026-05-08",
    },
    {
      name: "Centers for Disease Control and Prevention",
      organization: "CDC",
      url: "https://www.cdc.gov/",
      type: "primary",
      topicRelevance:
        "U.S. public-health surveillance, antimicrobial-resistance threats, vaccine science",
      lastReviewed: "2026-05-08",
    },
    {
      name: "National Center for Biotechnology Information",
      organization: "NIH / NLM",
      url: "https://www.ncbi.nlm.nih.gov/",
      type: "primary",
      topicRelevance:
        "Public sequence and literature databases — GenBank, Gene, Bookshelf, MeSH",
      lastReviewed: "2026-05-08",
    },
    {
      name: "MedlinePlus Genetics",
      organization: "NIH / NLM",
      url: "https://medlineplus.gov/genetics/",
      type: "primary",
      topicRelevance:
        "Plain-language reference on genes, conditions, and inheritance",
      lastReviewed: "2026-05-08",
    },
  ],
  physics: [
    {
      name: "Solar Energy Technologies Office",
      organization: "U.S. Department of Energy",
      url: "https://www.energy.gov/eere/solar",
      type: "primary",
    },
    {
      name: "Perovskite Solar Cells",
      organization: "U.S. National Renewable Energy Laboratory",
      url: "https://www.nrel.gov/pv/perovskite-solar-cells",
      type: "primary",
    },
    {
      name: "Quantum Sensing Explained",
      organization: "NIST",
      url: "https://www.nist.gov/quantum-information-science/quantum-sensing-explained",
      type: "primary",
    },
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
      name: "PubMed",
      organization: "NIH / NLM",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
    },
    {
      name: "NCBI Bookshelf",
      organization: "NIH / NLM",
      url: "https://www.ncbi.nlm.nih.gov/books/",
      type: "primary",
    },
    {
      name: "NASA",
      organization: "NASA",
      url: "https://www.nasa.gov/",
      type: "primary",
      topicRelevance:
        "Mission, instrument, and science-result reference for space and Earth observation",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NASA Science",
      organization: "NASA",
      url: "https://science.nasa.gov/",
      type: "primary",
      topicRelevance:
        "Curated explainers and topic pages across heliophysics, planetary, astrophysics",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NASA Earth Observatory",
      organization: "NASA",
      url: "https://earthobservatory.nasa.gov/",
      type: "primary",
      topicRelevance:
        "Earth energy balance, atmospheric, and remote-sensing topic pages",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NASA Climate",
      organization: "NASA",
      url: "https://climate.nasa.gov/",
      type: "primary",
      topicRelevance:
        "Earth energy balance, solar irradiance, and global-change indicators",
      lastReviewed: "2026-05-08",
    },
    {
      name: "ESA",
      organization: "European Space Agency",
      url: "https://www.esa.int/",
      type: "primary",
      topicRelevance:
        "Space-mission reference and physics-related ESA Science programs",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NOAA",
      organization: "NOAA",
      url: "https://www.noaa.gov/",
      type: "primary",
      topicRelevance:
        "Atmospheric, ocean, and space-weather monitoring relevant to applied physics",
      lastReviewed: "2026-05-08",
    },
    {
      name: "Climate.gov",
      organization: "NOAA",
      url: "https://www.climate.gov/",
      type: "primary",
      topicRelevance:
        "Earth energy budget, radiation, and climate-physics explainers",
      lastReviewed: "2026-05-08",
    },
    {
      name: "United States Geological Survey",
      organization: "USGS",
      url: "https://www.usgs.gov/",
      type: "primary",
      topicRelevance:
        "Geophysics, magnetism, hazards, and hydrologic measurement",
      lastReviewed: "2026-05-08",
    },
    {
      name: "AR6 Working Group I",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/",
      type: "report",
      topicRelevance:
        "Authoritative review of physical-climate evidence used in atmospheric and energy-balance physics",
      lastReviewed: "2026-05-08",
    },
    {
      name: "Copernicus Climate Change Service",
      organization: "ECMWF / European Commission",
      url: "https://climate.copernicus.eu/",
      type: "primary",
      topicRelevance:
        "Reanalyses and reference datasets used in atmospheric and energy-balance physics",
      lastReviewed: "2026-05-08",
    },
    {
      name: "World Health Organization",
      organization: "WHO",
      url: "https://www.who.int/",
      type: "primary",
      topicRelevance:
        "Reference for radiation-safety and exposure guidance relevant to applied physics",
      lastReviewed: "2026-05-08",
    },
    {
      name: "National Institutes of Health",
      organization: "NIH",
      url: "https://www.nih.gov/",
      type: "primary",
      topicRelevance:
        "Reference for biomedical aspects of measurement, imaging, and radiation",
      lastReviewed: "2026-05-08",
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
