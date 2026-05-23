/**
 * FAQ data for topic and subtopic hubs.
 *
 * Editorial rules:
 * - Every question/answer pair must be answerable from existing
 *   article content on the site or from a clearly named authority.
 * - Answers are short (<= ~80 words), calm, and non-clickbait.
 * - No medical advice. No unsupported "best X" claims.
 * - Visible on page wherever FAQPage JSON-LD is emitted.
 *
 * Keyed on `topic:<slug>` and `subtopic:<categorySlug>:<subtopicSlug>`
 * so hubs can request their own FAQ set without ambiguity.
 */
import type { CategorySlug } from "@/lib/categories";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqRegistry = Record<string, FaqItem[]>;

function topicKey(category: CategorySlug): string {
  return `topic:${category}`;
}

function subtopicKey(category: CategorySlug, subtopic: string): string {
  return `subtopic:${category}:${subtopic}`;
}

const REGISTRY: FaqRegistry = {
  // ---------- Topic-level FAQs ----------
  [topicKey("ecology")]: [
    {
      question: "What does this ecology section cover?",
      answer:
        "Ecosystems and ecosystem services, climate-change mechanisms and indicators, and biodiversity at the species, functional, and ecosystem-structure levels. Coverage is anchored to assessments from the IPCC, IPBES, UNEP, EEA, and FAO.",
    },
    {
      question: "How are scientific claims sourced?",
      answer:
        "Every article cites authoritative organizations or peer-reviewed venues. Citation hosts are validated against a curated registry at build time so unknown or low-authority links are flagged before publication.",
    },
    {
      question: "Is the content peer-reviewed?",
      answer:
        "Articles are editorial summaries grounded in peer-reviewed and authoritative sources, not original peer-reviewed research themselves. They cite the underlying literature so readers can verify each load-bearing claim.",
    },
  ],
  [topicKey("biology")]: [
    {
      question: "Which areas of biology does this section cover?",
      answer:
        "Cell biology, molecular genetics, and evolution — from cell signaling and gene-expression regulation through evolutionary mechanisms and microbiome biology. References use NIH/NCBI resources, peer-reviewed journals, and authoritative public-health bodies.",
    },
    {
      question: "Does any of this content offer medical advice?",
      answer:
        "No. Articles describe mechanisms and evidence; they do not recommend treatments. Where topics touch clinical decisions (for example antibiotic stewardship), an explicit notice points readers to clinicians and authoritative health guidance.",
    },
    {
      question: "How current are the references?",
      answer:
        "Citations point to current public landing pages of authoritative organizations and journals. Where an article relies on a specific report, the report's year is shown so a reader can verify revisions.",
    },
  ],
  [topicKey("physics")]: [
    {
      question: "What does the applied-physics section focus on?",
      answer:
        "Energy systems, thermodynamic limits, and quantum-basics topics with practical applications — photovoltaics, climate physics, electromagnetic-spectrum applications, and quantum sensing. References anchor to NASA, NIST, NREL, DOE, IPCC, and APS-published peer-reviewed literature.",
    },
    {
      question: "Why combine climate physics with applied physics here?",
      answer:
        "Earth's energy budget is the physical layer underneath every climate claim and many energy-technology claims. Reading them through the same accounting makes the connections explicit — e.g., the Shockley-Queisser limit and the planetary energy imbalance share a thermodynamic framework.",
    },
    {
      question: "Are the numerical claims independently verifiable?",
      answer:
        "Yes. Each load-bearing quantitative claim cites the authoritative organization that publishes the number — IPCC AR6, NASA Earth Observatory, NREL champion-cell tables, NIST reference data — so readers can check the source directly.",
    },
  ],

  // ---------- Subtopic-level FAQs ----------
  [subtopicKey("ecology", "climate-change")]: [
    {
      question: "What is a climate indicator?",
      answer:
        "A climate indicator is a measurement, sustained over time, with a known physical interpretation and enough signal-to-noise to resolve the long-term trend against natural variability. The IPCC AR6, WMO State of the Global Climate, NOAA, NASA, EPA, EEA, and Copernicus all organize their reporting around the same small set of indicator families: temperature, energy, greenhouse gases, sea level, cryosphere, and the carbon cycle.",
    },
    {
      question: "Is the warming definitely caused by human activity?",
      answer:
        "IPCC and NASA assessments describe human influence on recent warming as established by multiple independent lines of evidence — atmospheric composition, observed warming patterns, vertical temperature structure, and the energy budget closing within stated uncertainties.",
    },
    {
      question: "Why is ocean heat content a more stable indicator than surface temperature?",
      answer:
        "About 89% of the energy added by greenhouse-gas forcing is taken up by the ocean. ENSO-driven year-to-year variability redistributes heat between ocean layers and the atmosphere — it does not change the total ocean heat content much — so the OHC trend is closer to the underlying forcing trend.",
    },
    {
      question: "How do scientists compare different global temperature records?",
      answer:
        "NOAAGlobalTemp, NASA GISTEMP, HadCRUT5, Berkeley Earth, and the JRA-55/ERA5 reanalyses are produced from overlapping but not identical observations using different gridding, infilling, and bias-correction methods. They agree to within stated uncertainties on the long-term warming trend; the convergence is the empirical case the IPCC's AR6 assessment leans on.",
    },
    {
      question: "What does sea-level rise actually measure?",
      answer:
        "Three different indicators: global mean sea level from satellite altimetry (the planetary signal), local relative sea level from tide gauges (what coastal communities experience), and the rate of rise (the planning-horizon variable). The IPCC AR6 Chapter 9 explains how the global mean decomposes into thermal expansion, glacier and ice-sheet melt, and land-water storage changes.",
    },
    {
      question: "How do attribution studies connect extreme events to climate change?",
      answer:
        "Event attribution compares the frequency or intensity of an observed extreme in a large model ensemble of the current climate against a counterfactual ensemble without anthropogenic forcing. The risk ratio or intensity shift is the attribution. The methodology is strongest for heat extremes and weakens for events dominated by circulation dynamics or compound drivers like drought.",
    },
    {
      question: "What is the biggest remaining uncertainty in climate sensitivity?",
      answer:
        "Cloud feedback. How cloud height, coverage, and optical properties change with warming determines a substantial fraction of the spread in climate-sensitivity estimates. AR6 reports the net feedback as positive overall with quantifiable but irreducible spread across models.",
    },
  ],
  [subtopicKey("ecology", "biodiversity")]: [
    {
      question: "Why is species count not enough to measure biodiversity?",
      answer:
        "A region can lose substantial biomass while keeping its species count, or vice versa. Population abundance, genetic diversity, and ecosystem function are separately measurable dimensions; a single scalar collapses information that policy and ecology need to keep distinct.",
    },
    {
      question: "What are Essential Biodiversity Variables (EBVs)?",
      answer:
        "EBVs are six measurement classes — genetic composition, species populations, species traits, community composition, ecosystem function, and ecosystem structure — designed so different national monitoring programs can produce comparable inputs to global biodiversity assessments.",
    },
    {
      question: "How well-monitored is biodiversity globally?",
      answer:
        "Long-term ecological research sites are concentrated in Europe and North America; tropical biodiversity has thinner baselines despite holding the largest share of species. The IPBES Global Assessment treats this uneven sampling as a primary methodological caveat, not a footnote.",
    },
  ],
  [subtopicKey("ecology", "ecosystems")]: [
    {
      question: "What is an ecosystem service?",
      answer:
        "A benefit people obtain from ecosystems, organized in standard taxonomies into provisioning, regulating, cultural, and supporting categories. IPBES uses the broader \"nature's contributions to people\" framing for the same idea.",
    },
    {
      question: "Are ecosystem services a substitute for protecting ecosystems intrinsically?",
      answer:
        "No. The framework was developed to make hidden value visible in policy decisions, not to make unvalued ecosystems disposable. IPBES and the Convention on Biological Diversity maintain rights-based and intrinsic-value framings alongside the services framing.",
    },
    {
      question: "Why is the soil microbiome relevant to ecosystem function?",
      answer:
        "Soil microbes mediate nitrogen mineralization, phosphorus availability via mycorrhizal partnerships, and the rhizosphere chemistry that determines plant performance. They are one important mediator among several — not a hidden universal explanation for management outcomes.",
    },
  ],
  [subtopicKey("biology", "cells")]: [
    {
      question: "What does cell signaling do?",
      answer:
        "It is the set of mechanisms by which cells receive, process, and respond to chemical, mechanical, or environmental signals. Signaling pathways control proliferation, differentiation, immune response, and most of what cells do beyond basic metabolism.",
    },
    {
      question: "How does the same kinase produce different outcomes in different contexts?",
      answer:
        "Specificity emerges from spatial localization (scaffolded complexes), temporal pattern (sustained vs transient activation), and combinatorial input from other pathways. Pathway identity at the molecular level is not enough to predict outcome; cellular context is part of the signal.",
    },
  ],
  [subtopicKey("biology", "genetics")]: [
    {
      question: "Why don't two cells with the same DNA behave the same way?",
      answer:
        "Because gene expression — which genes are read, when, and how much — is regulated. Chromatin state, transcription-factor combinations, RNA processing, and translation efficiency together determine the protein complement of a cell. Cell identity lives in the regulatory state, not the sequence alone.",
    },
    {
      question: "Does \"epigenetics\" mean a separate inheritance system?",
      answer:
        "Not as the term is used in mainstream genetics. Chromatin marks are deposited and removed by enzymes whose activity is regulated by the cell's transcription state. Epigenetic marks are a layer of memory within the cell, not a parallel inheritance system independent of DNA sequence.",
    },
  ],
  [subtopicKey("biology", "evolution")]: [
    {
      question: "Why is antibiotic resistance a useful example of evolution?",
      answer:
        "Bacterial populations are large, generations are short, and horizontal gene transfer is routine. Selection plays out on timescales human surveillance can resolve, and the underlying mechanisms — mutation, target modification, drug efflux, bypass pathways — are confirmed in both laboratory experiments and clinical data.",
    },
    {
      question: "Does removing the drug make resistance go away?",
      answer:
        "Not reliably. Many resistance mechanisms acquire compensatory mutations that restore growth without removing resistance. CDC and WHO surveillance data document phenotypes that persist long after the corresponding drug has been deprioritized.",
    },
  ],
  [subtopicKey("physics", "energy")]: [
    {
      question: "What sets the upper limit on solar-cell efficiency?",
      answer:
        "For a single-junction cell under standard AM1.5 illumination, the Shockley-Queisser bound is about 33%. Tandem and multi-junction cells exceed this by recovering spectral-mismatch losses; the asymptotic infinite-junction limit is around 86%.",
    },
    {
      question: "Why does field performance differ from lab efficiency?",
      answer:
        "AM1.5 is a standardized reference spectrum, not what cells actually see outdoors. The real incident spectrum varies with location, time of day, and atmospheric conditions, and modules degrade due to temperature, soiling, and material instability.",
    },
  ],
  [subtopicKey("physics", "thermodynamics")]: [
    {
      question: "Is Earth's climate really a heat engine?",
      answer:
        "Yes, in the literal sense — the planet receives concentrated radiation from a hot source (the Sun at effective 5800 K) and emits it back to space at a colder effective temperature (~255 K). The temperature difference drives atmospheric and ocean circulation, much like any thermodynamic engine.",
    },
    {
      question: "Why is the Earth not in thermodynamic steady state?",
      answer:
        "Anthropogenic greenhouse-gas forcing produces a top-of-atmosphere energy imbalance of around +1 W/m². That imbalance accumulates as additional energy in the climate system, dominantly in the ocean, until the surface warms enough to re-balance outgoing longwave with absorbed shortwave.",
    },
  ],
  [subtopicKey("physics", "quantum-basics")]: [
    {
      question: "Are radio waves and gamma rays really the same phenomenon?",
      answer:
        "Yes. Both are electromagnetic radiation — the same physical field, differing only in wavelength and therefore photon energy. The differences in how each interacts with matter follow from the wavelength alone.",
    },
    {
      question: "What's a photon, simply?",
      answer:
        "The quantum of the electromagnetic field. A photon carries energy E = hf where f is frequency. Photon energy determines whether radiation can vibrate a molecule, knock out an electron, or ionize an atom.",
    },
  ],
};

export function getTopicFaqs(category: CategorySlug): FaqItem[] {
  return REGISTRY[topicKey(category)] ?? [];
}

export function getSubtopicFaqs(
  category: CategorySlug,
  subtopic: string,
): FaqItem[] {
  return REGISTRY[subtopicKey(category, subtopic)] ?? [];
}
