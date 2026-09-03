/**
 * Source-type classification.
 *
 * Two things can be inferred honestly and one cannot.
 *
 * The host tells you who published: a `.gov` domain is a government
 * source, `ipcc.ch` is intergovernmental, `nature.com` is a journal.
 * That inference is reliable and is marked `inferred-host`.
 *
 * The cited title tells you the study design when the authors named it:
 * a paper called "…: a systematic review" is one. That is marked
 * `inferred-title` and it is checked before the host, because study
 * design is the more specific fact.
 *
 * What cannot be inferred is whether a particular product is
 * continuously updated. `isLiveDataset` is curated, because getting it
 * wrong in the permissive direction means presenting a moving number as
 * a fixed one.
 */
import type { Provenance, SourceType } from "./types";

/** Intergovernmental bodies and treaty secretariats. */
const INTERGOVERNMENTAL = [
  "ipcc.ch", "wmo.int", "unep.org", "who.int", "fao.org", "ipbes.net",
  "unesco.org", "iaea.org", "unfccc.int", "unccd.int", "ramsar.org",
  "cbd.int", "icrp.org", "unscear.org", "oceandecade.org", "iter.org",
  "home.cern", "cern.ch", "euro-fusion.org", "icp-forests.net",
  "protectedplanet.net", "iucn.org", "iucnredlist.org", "iucngisd.org",
  "pops.int", "ipcc-nggip.iges.or.jp", "decadeonrestoration.org",
  "europa.eu", "eea.europa.eu", "copernicus.eu", "ecmwf.int", "esa.int",
  "ices.dk", "gcos.wmo.int", "wcrp-climate.org", "wcrp-cmip.org",
  "globalcarbonproject.org", "geobon.org", "bipindicators.net",
  "livingplanetindex.org", "gbif.org", "catalogueoflife.org",
  "worldfloraonline.org", "irena.org", "iea.org",
];

/** Journals, publishers and preprint or full-text archives. */
const PEER_REVIEWED = [
  "nature.com", "science.org", "pnas.org", "cell.com", "wiley.com",
  "onlinelibrary.wiley.com", "agupubs.onlinelibrary.wiley.com",
  "esajournals.onlinelibrary.wiley.com", "royalsocietypublishing.org",
  "annualreviews.org", "journals.plos.org", "plos.org", "elifesciences.org",
  "sciencedirect.com", "linkinghub.elsevier.com", "link.springer.com",
  "springer.com", "academic.oup.com", "tandfonline.com", "mdpi.com",
  "frontiersin.org", "iopscience.iop.org", "journals.aps.org",
  "journals.ametsoc.org", "copernicus.org", "biogeosciences.net",
  "acp.copernicus.org", "esd.copernicus.org", "gmd.copernicus.org",
  "hess.copernicus.org", "earth-system-science-data.net", "doi.org",
  "pubmed.ncbi.nlm.nih.gov", "pmc.ncbi.nlm.nih.gov", "cochranelibrary.com",
  "pdg.lbl.gov", "intechopen.com", "proceedings.ises.org",
  "journals.uchicago.edu", "conservationevidence.com",
];

/** Data archives and observing programmes. */
const DATASETS = [
  "earthdata.nasa.gov", "daac.ornl.gov", "gml.noaa.gov", "ncei.noaa.gov",
  "nsidc.org", "wgms.ch", "argo.ucsd.edu", "sealevel.nasa.gov",
  "waterdata.usgs.gov", "airnow.gov", "ensembl.org", "uniprot.org",
  "rcsb.org", "ebi.ac.uk", "kegg.jp", "geneontology.org",
  "gfr.wri.org", "forobs.jrc.ec.europa.eu",
  "climate.copernicus.eu", "marine.copernicus.eu", "land.copernicus.eu",
];

/**
 * National academies, national laboratories and named collaborations.
 * `nationalacademies.org` publishes consensus reports, not journal
 * articles and not government policy; calling it either would be wrong.
 */
const RESEARCH_INSTITUTE = [
  "nationalacademies.org", "worldweatherattribution.org", "bgs.ac.uk",
  "llnl.gov", "lasers.llnl.gov", "nlr.gov", "osti.gov", "par.nsf.gov",
];

const UNIVERSITY = [
  "ac.uk", "edu", "whiterose.ac.uk", "kar.kent.ac.uk", "ucsd.edu",
];

const STANDARDS = ["bipm.org", "nist.gov", "physics.nist.gov", "iso.org"];

const TITLE_SYSTEMATIC = /\bsystematic review\b|\bsystematic map\b|\bcochrane review\b/i;
const TITLE_META = /\bmeta-?analys[ei]s\b/i;

function matches(host: string, list: string[]): boolean {
  return list.some((h) => host === h || host.endsWith(`.${h}`));
}

export function classify(
  host: string,
  title: string,
): { sourceType: SourceType; provenance: Provenance } {
  // Study design named by the authors beats publisher identity.
  if (TITLE_META.test(title)) return { sourceType: "meta-analysis", provenance: "inferred-title" };
  if (TITLE_SYSTEMATIC.test(title)) {
    return { sourceType: "systematic-review", provenance: "inferred-title" };
  }
  if (matches(host, STANDARDS)) {
    return { sourceType: "standards-body", provenance: "inferred-host" };
  }
  if (matches(host, INTERGOVERNMENTAL)) {
    return { sourceType: "intergovernmental", provenance: "inferred-host" };
  }
  if (matches(host, DATASETS)) {
    return { sourceType: "scientific-dataset", provenance: "inferred-host" };
  }
  // Checked before the generic .gov rule: a national laboratory on a .gov
  // domain is a research institute, not a government department.
  if (matches(host, RESEARCH_INSTITUTE)) {
    return { sourceType: "research-institute", provenance: "inferred-host" };
  }
  if (matches(host, PEER_REVIEWED)) {
    return { sourceType: "peer-reviewed", provenance: "inferred-host" };
  }
  // .gov is checked after the specific lists so that, for example,
  // gml.noaa.gov classifies as a dataset rather than as generic government.
  // `.gov.uk` and `.gov.au` are the same kind of thing and were falling
  // through to "other" — the pattern anchored on a bare `.gov` suffix.
  if (/\.gov$/.test(host) || /\.mil$/.test(host) || /\.gov\.[a-z]{2}$/.test(host)) {
    return { sourceType: "government", provenance: "inferred-host" };
  }
  if (matches(host, UNIVERSITY)) {
    return { sourceType: "university", provenance: "inferred-host" };
  }
  return { sourceType: "other", provenance: "unclassified" };
}

/** Deterministic id from the normalised URL, so rebuilds are stable. */
export function evidenceIdFor(url: string): string {
  const normalised = url.trim().replace(/\/+$/, "").toLowerCase();
  let h = 0x811c9dc5;
  for (let i = 0; i < normalised.length; i++) {
    h ^= normalised.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  let host = "src";
  try {
    host = new URL(url).hostname.replace(/^www\./, "").replace(/[^a-z0-9]+/gi, "-");
  } catch {
    /* keep default */
  }
  return `ev-${host}-${(h >>> 0).toString(16).padStart(8, "0")}`;
}
