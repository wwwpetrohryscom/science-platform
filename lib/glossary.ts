/**
 * Scientific glossary — a data layer that powers /en/glossary and
 * /en/glossary/[term] pages and is referenced by topic/subtopic hubs.
 *
 * Editorial rules for entries:
 * - Definitions paraphrase widely-used reference treatments; no
 *   verbatim copy from any single source.
 * - `relatedSources` cite the authority each term is anchored to.
 * - Entries link back to the canonical articles where they appear.
 *
 * EN only in this pass; the schema is locale-shaped so a future
 * translation pass can populate other locales without refactoring.
 */
import type { CategorySlug } from "@/lib/categories";

export type GlossaryRelatedArticle = {
  /** Article slug (basename, no path). */
  slug: string;
  /** Category + subtopic so URLs can be resolved without DB lookup. */
  category: CategorySlug;
  subtopic: string;
};

export type GlossaryEntry = {
  slug: string;
  term: string;
  /** One-line definition (<= ~200 chars). Used in cards, list views, JSON-LD. */
  shortDefinition: string;
  /** Longer paragraph(s) of explanation. */
  explanation: string;
  /** Topic this term primarily belongs to. */
  category: CategorySlug;
  /** Optional subtopic for finer routing/clustering. */
  subtopic?: string;
  /** Related canonical articles on the platform. */
  relatedArticles: GlossaryRelatedArticle[];
  /** Authoritative external references the definition rests on. */
  relatedSources: Array<{ label: string; url: string }>;
  /** Editorial note on usage limits, contested meaning, or caveats. */
  uncertaintyNote?: string;
  /** ISO date when this entry was last reviewed. */
  updatedDate: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  // ---------- Ecology / Climate ----------
  {
    slug: "radiative-forcing",
    term: "Radiative forcing",
    shortDefinition:
      "The change in net radiative flux at the tropopause caused by a perturbation, measured in W/m².",
    explanation:
      "Radiative forcing is the bookkeeping unit climate scientists use to compare the climate effect of greenhouse gases, aerosols, solar variations, and land-use changes on a common scale. It quantifies how much an agent perturbs Earth's energy balance before the climate system adjusts. The IPCC AR6 Working Group I report reviews per-agent estimates and uncertainties; total anthropogenic effective radiative forcing since 1750 is reported at roughly +2.7 W/m².",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "greenhouse-gases-and-radiative-forcing",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "what-is-climate-change",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1",
        url: "https://www.ipcc.ch/report/ar6/wg1/",
      },
    ],
    uncertaintyNote:
      "Aerosol forcing carries a wider uncertainty range than gas forcing; the total is dominated by the aerosol term, not by CO₂.",
    updatedDate: "2026-05-14",
  },
  {
    slug: "greenhouse-gas",
    term: "Greenhouse gas",
    shortDefinition:
      "An atmospheric gas that absorbs and re-emits infrared radiation in bands relevant to Earth's outgoing longwave.",
    explanation:
      "Greenhouse gases — including water vapour, carbon dioxide, methane, nitrous oxide, ozone, and halocarbons — selectively absorb thermal infrared at wavelengths Earth radiates and re-emit a portion back toward the surface. The mechanism is unambiguous laboratory physics. Their per-molecule effectiveness depends on absorption strength in unsaturated bands and atmospheric residence time.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "greenhouse-gases-and-radiative-forcing",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NOAA Global Monitoring Laboratory", url: "https://gml.noaa.gov/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "ocean-heat-content",
    term: "Ocean heat content",
    shortDefinition:
      "The integral of ocean temperature anomalies over a defined volume, typically reported in zettajoules.",
    explanation:
      "Ocean heat content (OHC) measures total energy stored in the ocean relative to a reference period. Because the ocean takes up roughly 89% of the energy added to the climate system by greenhouse-gas forcing, OHC is the most stable single indicator of total climate-system warming. The post-2005 Argo network anchors the modern record.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "ocean-heat-content-indicators",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "NASA Climate", url: "https://climate.nasa.gov/" },
      {
        label: "NOAA NCEI",
        url: "https://www.ncei.noaa.gov/",
      },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "carbon-cycle",
    term: "Carbon cycle",
    shortDefinition:
      "The flow of carbon among the atmosphere, ocean, biosphere, and geological reservoirs.",
    explanation:
      "The carbon cycle moves carbon through Earth's reservoirs on timescales from seasonal (vegetation) to multi-million-year (rock weathering). Anthropogenic emissions add carbon faster than natural removal processes can absorb it, raising atmospheric CO₂. Land and ocean currently absorb about half of annual human emissions; whether these sinks persist is an active research question.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "temperate-forest-carbon-sink-decline",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.5", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "biodiversity-indicator",
    term: "Biodiversity indicator",
    shortDefinition:
      "A measurement used to track one dimension of biodiversity change over time.",
    explanation:
      "Biodiversity is a multi-dimensional quantity; no single number captures it. Indicators include the Living Planet Index (population abundance), the IUCN Red List Index (extinction risk), habitat-extent metrics (ecosystem structure), and the Essential Biodiversity Variables framework that organizes monitoring across genetic, species, and ecosystem levels.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      {
        slug: "essential-biodiversity-variables-monitoring",
        category: "ecology",
        subtopic: "biodiversity",
      },
      {
        slug: "why-species-counts-mislead-conservation",
        category: "ecology",
        subtopic: "biodiversity",
      },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/" },
      { label: "EEA", url: "https://www.eea.europa.eu/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "ecosystem-service",
    term: "Ecosystem service",
    shortDefinition:
      "A benefit that people obtain from ecosystems, such as provisioning, regulating, cultural, or supporting functions.",
    explanation:
      "Ecosystem services translate ecological functions into terms used by policy and finance. The four-category taxonomy (provisioning, regulating, cultural, supporting) and the IPBES \"nature's contributions to people\" framing are both in use. Valuation works best for local, near-term, substitutable services; long-horizon and non-substitutable services resist conventional monetization.",
    category: "ecology",
    subtopic: "ecosystems",
    relatedArticles: [
      {
        slug: "ecosystem-services-and-human-wellbeing",
        category: "ecology",
        subtopic: "ecosystems",
      },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/" },
      { label: "UNEP", url: "https://www.unep.org/explore-topics/ecosystems" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "climate-attribution",
    term: "Climate attribution",
    shortDefinition:
      "Scientific assessment of how much a specific climate change or event is due to a given cause.",
    explanation:
      "Attribution science quantifies the contribution of forcing agents (greenhouse gases, aerosols, solar, land use) to observed climate change, and the contribution of long-term warming to the probability and severity of specific extreme events. Methods include detection-and-attribution analysis of trends and probabilistic event-attribution using model ensembles.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "what-is-climate-change",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.3", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NASA Science: Evidence", url: "https://science.nasa.gov/climate-change/evidence/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "sea-level-rise",
    term: "Sea-level rise",
    shortDefinition:
      "The increase in global mean or local relative sea level, driven by thermal expansion and land-ice loss.",
    explanation:
      "Global mean sea level has risen roughly 200 mm since 1900, with the satellite altimeter record showing about 3.4 mm/year on average and accelerating in recent decades. Local relative sea level differs from the global mean because of vertical land motion and ocean dynamic effects. Future projections depend strongly on ice-sheet dynamics.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "sea-level-rise-indicators",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.9", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NASA Climate sea-level vital sign", url: "https://climate.nasa.gov/vital-signs/sea-level/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "climate-indicator",
    term: "Climate indicator",
    shortDefinition:
      "A measurement, sustained over time, that tracks one dimension of the Earth system with a known physical interpretation.",
    explanation:
      "A climate indicator is chosen because it has a physical interpretation tied to a known mechanism, a measurement programme that can produce it consistently over decades, and a signal-to-noise ratio that makes the long-term trend resolvable against natural variability. Major assessments (IPCC AR6, WMO State of the Global Climate, NOAA, NASA, EPA, EEA, Copernicus) organize the physical-science evidence around a small set of headline indicators rather than around any single dataset.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "climate-indicators-earth-system-monitoring",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "WMO State of the Global Climate", url: "https://wmo.int/" },
      { label: "EPA Climate Change Indicators", url: "https://www.epa.gov/climate-indicators" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "global-mean-surface-temperature",
    term: "Global mean surface temperature",
    shortDefinition:
      "Area-weighted average of near-surface air temperature over land and sea-surface temperature over ocean, reported as anomaly from a reference period.",
    explanation:
      "Global mean surface temperature (GMST) is produced by multiple independent groups — NOAAGlobalTemp, NASA GISTEMP, HadCRUT5, Berkeley Earth, and the JRA-55 and ERA5 reanalyses — from overlapping but not identical observational data using different gridding and bias-correction methods. The records agree to within stated uncertainties on the long-term trend, which is the empirical basis for the IPCC's assessment that recent warming is unequivocal.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "global-temperature-records-explained",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.2", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NOAA NCEI", url: "https://www.ncei.noaa.gov/" },
      { label: "NASA Climate", url: "https://climate.nasa.gov/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "cryosphere",
    term: "Cryosphere",
    shortDefinition:
      "The frozen components of the Earth system: sea ice, glaciers, ice sheets, snow cover, and permafrost.",
    explanation:
      "The cryosphere consists of physically distinct reservoirs with different formation mechanisms and response timescales: sea ice on seasonal-to-annual scales, mountain glaciers on decadal-to-centennial scales, the Greenland and Antarctic ice sheets on centennial-to-millennial scales, and permafrost on multi-decadal scales. Together the cryosphere indicators constrain the Earth energy balance and contribute to the sea-level budget. Reference datasets are maintained by NSIDC, WGMS, and NASA/ESA satellite missions.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "cryosphere-indicators-glaciers-sea-ice",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.9", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NSIDC", url: "https://nsidc.org/" },
      { label: "WGMS", url: "https://wgms.ch/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "carbon-cycle-feedback",
    term: "Carbon-cycle feedback",
    shortDefinition:
      "A change in the rate at which land or ocean absorbs anthropogenic CO₂ caused by the climate response to that CO₂.",
    explanation:
      "Land and ocean currently absorb roughly half of anthropogenic CO₂ emissions; the fraction can change as the climate warms. Mechanisms include reduced ocean uptake from stratification and the buffer effect, altered land uptake from CO₂ fertilization, lengthening growing seasons, changing disturbance regimes, and permafrost-carbon release. IPCC AR6 WG1 Chapter 5 treats carbon-cycle feedbacks as a load-bearing uncertainty in long-term projection alongside cloud feedback and ice-sheet dynamics.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "carbon-cycle-feedbacks",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "temperate-forest-carbon-sink-decline",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.5", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NOAA Global Monitoring Laboratory", url: "https://gml.noaa.gov/" },
    ],
    uncertaintyNote:
      "The long-term trajectory of both sinks under continued warming is not strongly constrained; CMIP-class earth-system models show a wide range of land-sink behaviors under high-emissions scenarios.",
    updatedDate: "2026-05-23",
  },
  {
    slug: "climate-projection",
    term: "Climate projection",
    shortDefinition:
      "A model-based estimate of future climate statistics conditional on a specified forcing scenario.",
    explanation:
      "A climate projection is not a weather forecast. It estimates the statistics of the climate system under specified emissions and forcing assumptions, not the actual state at a future time. Projection uncertainty has three sources: scenario (what forcing path), model-structural (which model), and internal variability (which realization). The shares change over lead time and by indicator; AR6 reports the decomposition explicitly.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "climate-models-projections-uncertainty",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.4", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "WCRP CMIP", url: "https://www.wcrp-climate.org/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "detection-and-attribution",
    term: "Detection and attribution",
    shortDefinition:
      "Statistical methodology that separates observed climate change into contributions from different forcing agents.",
    explanation:
      "Detection-and-attribution analysis compares observed climate-variable trends against model simulations under different combinations of forcing (greenhouse gases, aerosols, solar, land use, natural variability) and identifies the combination most consistent with the observations. The framework underpins the IPCC's quantitative attribution of recent warming to human influence and is the trend-level counterpart to event-attribution methods used for individual extreme events.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "extreme-weather-attribution-basics",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "what-is-climate-change",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.3", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "IPCC AR6 WG1 Ch.11", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "emissions-scenario",
    term: "Emissions scenario",
    shortDefinition:
      "A plausible trajectory of future greenhouse-gas emissions used as input to climate projections.",
    explanation:
      "Emissions scenarios are not forecasts. They are internally consistent narratives about how socioeconomic, technological, and policy choices could evolve, translated into emissions paths used to drive climate models. The current AR6 framework uses Shared Socioeconomic Pathways (SSPs) — SSP1-1.9 through SSP5-8.5 — that span rapid decarbonization to high-emissions trajectories. Reading a projection means specifying the scenario it was conditioned on.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "climate-models-projections-uncertainty",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "climate-adaptation-mitigation-indicators",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "IPCC AR6 WG3", url: "https://www.ipcc.ch/report/ar6/wg3/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "earth-energy-imbalance",
    term: "Earth energy imbalance",
    shortDefinition:
      "The net difference between incoming solar shortwave radiation absorbed and outgoing longwave radiation emitted at the top of the atmosphere.",
    explanation:
      "Earth's top-of-atmosphere energy imbalance is the upstream driver of every other climate indicator. A positive imbalance means the planet is gaining energy; that energy accumulates dominantly in the ocean (about 89%), with smaller shares warming land, melting ice, and warming the atmosphere. The current imbalance, measured by NASA's CERES instruments and corroborated by ocean heat content uptake, is approximately +1 W/m² and is the direct consequence of anthropogenic radiative forcing.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "ocean-heat-content-indicators",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "climate-indicators-earth-system-monitoring",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.7", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "greenhouse-gas-concentration",
    term: "Greenhouse-gas concentration",
    shortDefinition:
      "The atmospheric mole fraction of a greenhouse gas, typically reported in ppm (CO₂) or ppb (methane, nitrous oxide).",
    explanation:
      "Atmospheric greenhouse-gas concentrations are the cleanest indicator in the climate dataset. The Mauna Loa CO₂ record began in 1958 and the NOAA Cooperative Air Sampling Network covers about 60 background sites globally. Concentration trends are unambiguous at the measurement level; what concentration *means* for radiative forcing and temperature requires the additional translation handled by climate sensitivity and the carbon-cycle framework.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "greenhouse-gas-concentrations-monitoring",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "greenhouse-gases-and-radiative-forcing",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "NOAA Global Monitoring Laboratory", url: "https://gml.noaa.gov/" },
      { label: "NOAA Annual Greenhouse Gas Index", url: "https://gml.noaa.gov/aggi/" },
      { label: "WMO Greenhouse Gas Bulletin", url: "https://wmo.int/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "climate-model",
    term: "Climate model",
    shortDefinition:
      "A numerical simulation of the climate system integrating the governing physical equations forward in time on a discrete grid.",
    explanation:
      "Climate models combine atmosphere, ocean, sea-ice, land-surface, and (in earth-system configurations) carbon-cycle and vegetation components. The current generation, CMIP6, was the basis for IPCC AR6. Models are evaluated against the historical climate-indicator record before their projections of those same indicators are weighted in assessment. Model output is not a forecast — it is a conditional projection given specified forcing.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "climate-models-projections-uncertainty",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "WCRP CMIP", url: "https://www.wcrp-climate.org/" },
      { label: "IPCC AR6 WG1 Ch.4", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    ],
    updatedDate: "2026-05-23",
  },
  {
    slug: "glacier-mass-balance",
    term: "Glacier mass balance",
    shortDefinition:
      "The net gain or loss of ice mass on a glacier per year, typically reported in meters of water-equivalent.",
    explanation:
      "Glacier mass balance is the operational indicator for mountain-glacier health. The World Glacier Monitoring Service (WGMS) curates the long-term reference dataset combining direct field measurements at reference glaciers with satellite-derived geodetic mass-balance estimates. The reference glacier record shows continuous net mass loss since the 1980s with an accelerating loss rate, and glacier mass loss contributes a quantified share of observed sea-level rise.",
    category: "ecology",
    subtopic: "climate-change",
    relatedArticles: [
      {
        slug: "cryosphere-indicators-glaciers-sea-ice",
        category: "ecology",
        subtopic: "climate-change",
      },
      {
        slug: "sea-level-rise-indicators",
        category: "ecology",
        subtopic: "climate-change",
      },
    ],
    relatedSources: [
      { label: "WGMS", url: "https://wgms.ch/" },
      { label: "IPCC AR6 WG1 Ch.9", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    ],
    updatedDate: "2026-05-23",
  },

  // ---------- Biology ----------
  {
    slug: "gene-expression",
    term: "Gene expression",
    shortDefinition:
      "The process by which information encoded in DNA is converted into functional product, typically protein.",
    explanation:
      "Gene expression passes through transcription (DNA → mRNA), processing, translation (mRNA → protein), and post-translational modification. Regulation operates at each step. Two cells with identical genomes can have radically different expression profiles, which is what makes a liver cell different from a neuron.",
    category: "biology",
    subtopic: "genetics",
    relatedArticles: [
      {
        slug: "how-gene-expression-is-regulated",
        category: "biology",
        subtopic: "genetics",
      },
      {
        slug: "what-is-dna",
        category: "biology",
        subtopic: "genetics",
      },
    ],
    relatedSources: [
      { label: "NHGRI", url: "https://www.genome.gov/genetics-glossary" },
      { label: "NCBI Bookshelf", url: "https://www.ncbi.nlm.nih.gov/books/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "cell-signaling",
    term: "Cell signaling",
    shortDefinition:
      "The set of molecular mechanisms by which cells receive, process, and respond to signals from their environment.",
    explanation:
      "A cell signaling pathway typically involves a signal (hormone, growth factor, mechanical cue), a receptor at the cell membrane, an intracellular transduction cascade, and a downstream effector that changes cell behaviour. Pathway specificity emerges from spatial localization, temporal pattern, and combinatorial input rather than from single-molecule labels alone.",
    category: "biology",
    subtopic: "cells",
    relatedArticles: [
      {
        slug: "cell-signaling-pathways-basics",
        category: "biology",
        subtopic: "cells",
      },
    ],
    relatedSources: [
      { label: "NCBI Bookshelf", url: "https://www.ncbi.nlm.nih.gov/books/" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "antibiotic-resistance",
    term: "Antibiotic resistance",
    shortDefinition:
      "The evolved ability of a microorganism to survive an antibiotic that would otherwise inhibit or kill it.",
    explanation:
      "Antibiotic resistance arises through drug inactivation, target modification, reduced uptake or active efflux, and bypass pathways — often in combination. Resistance genes are typically older than human antibiotic use; clinical use selects for their spread rather than creating them de novo. Stewardship slows spread but cannot prevent evolution.",
    category: "biology",
    subtopic: "evolution",
    relatedArticles: [
      {
        slug: "antibiotic-resistance-evolution-mechanisms",
        category: "biology",
        subtopic: "evolution",
      },
    ],
    relatedSources: [
      { label: "WHO global action plan on AMR", url: "https://www.who.int/" },
      { label: "U.S. CDC", url: "https://www.cdc.gov/" },
    ],
    uncertaintyNote:
      "This entry does not provide medical advice. Clinical decisions belong with clinicians and authoritative public-health guidance.",
    updatedDate: "2026-05-14",
  },
  {
    slug: "microbiome",
    term: "Microbiome",
    shortDefinition:
      "The community of microorganisms inhabiting a defined environment, together with their genetic material.",
    explanation:
      "Microbiomes occur on every surface of an organism and within most environmental matrices (soil, water, marine sediments). They mediate nutrient cycling, host physiology, and disease ecology. The transition from compositional surveys (which species are present) to functional analysis (what they are doing) is an active research frontier.",
    category: "biology",
    subtopic: "cells",
    relatedArticles: [
      {
        slug: "coral-microbiome-bleaching-resistance",
        category: "biology",
        subtopic: "cells",
      },
      {
        slug: "soil-microbiome-regenerative-agriculture",
        category: "ecology",
        subtopic: "ecosystems",
      },
    ],
    relatedSources: [
      { label: "NIH", url: "https://www.nih.gov/" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "transcription",
    term: "Transcription",
    shortDefinition:
      "The synthesis of an RNA copy of a DNA template by RNA polymerase.",
    explanation:
      "Transcription is the first step in gene expression. RNA polymerase binds to a promoter, unwinds the DNA, and synthesizes a complementary RNA molecule. Whether transcription happens at a given gene depends on which transcription factors and chromatin states are present at its regulatory regions.",
    category: "biology",
    subtopic: "genetics",
    relatedArticles: [
      {
        slug: "how-gene-expression-is-regulated",
        category: "biology",
        subtopic: "genetics",
      },
    ],
    relatedSources: [
      { label: "NHGRI", url: "https://www.genome.gov/genetics-glossary" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "evolutionary-adaptation",
    term: "Evolutionary adaptation",
    shortDefinition:
      "A heritable trait that has been shaped by natural selection because it improves fitness in a given environment.",
    explanation:
      "Adaptation is the outcome of selection acting on heritable variation across generations. Identifying a trait as an adaptation requires evidence that selection has operated, not just that the trait appears useful. The term is also used loosely in everyday language to mean adjustment or acclimation, which is a different phenomenon.",
    category: "biology",
    subtopic: "evolution",
    relatedArticles: [
      {
        slug: "cell-types-as-units-of-evolution",
        category: "biology",
        subtopic: "evolution",
      },
    ],
    relatedSources: [
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" },
      { label: "Nature", url: "https://www.nature.com/" },
    ],
    updatedDate: "2026-05-14",
  },

  // ---------- Physics ----------
  {
    slug: "energy-balance",
    term: "Energy balance",
    shortDefinition:
      "The accounting of energy entering, stored within, and leaving a defined system — Earth, in climate physics.",
    explanation:
      "Earth absorbs about 240 W/m² of solar shortwave (averaged over the surface) and emits about the same as longwave infrared in the long-term mean. Any imbalance accumulates as additional energy in the system. The current top-of-atmosphere imbalance of around +1 W/m² is driven by anthropogenic greenhouse-gas forcing.",
    category: "physics",
    subtopic: "thermodynamics",
    relatedArticles: [
      {
        slug: "solar-radiation-and-earth-energy-balance",
        category: "physics",
        subtopic: "energy",
      },
      {
        slug: "earth-energy-budget-and-the-second-law",
        category: "physics",
        subtopic: "thermodynamics",
      },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
      { label: "IPCC AR6 WG1 Ch.7", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "albedo",
    term: "Albedo",
    shortDefinition:
      "The fraction of incident shortwave radiation reflected by a surface or planet, dimensionless (0–1).",
    explanation:
      "Earth's mean albedo is approximately 0.30, dominated by cloud reflection with contributions from snow, ice, and bright surfaces. Ice loss reduces albedo and increases absorbed shortwave (a positive feedback). Land-use changes that alter surface brightness modify regional albedo and are tracked in climate assessments.",
    category: "physics",
    subtopic: "thermodynamics",
    relatedArticles: [
      {
        slug: "solar-radiation-and-earth-energy-balance",
        category: "physics",
        subtopic: "energy",
      },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "electromagnetic-spectrum",
    term: "Electromagnetic spectrum",
    shortDefinition:
      "The full range of electromagnetic radiation, ordered by wavelength or equivalently photon energy.",
    explanation:
      "Radio, microwave, infrared, visible, ultraviolet, X-ray, and gamma-ray radiation are all the same phenomenon at different wavelengths. The wavelength determines what the radiation can do — penetrate matter, drive electronic transitions, dissociate bonds, ionize atoms — and which scientific and applied uses make sense at each band.",
    category: "physics",
    subtopic: "quantum-basics",
    relatedArticles: [
      {
        slug: "electromagnetic-spectrum-applications",
        category: "physics",
        subtopic: "quantum-basics",
      },
    ],
    relatedSources: [
      { label: "NASA Science", url: "https://science.nasa.gov/" },
      { label: "NIST", url: "https://www.nist.gov/" },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "photon",
    term: "Photon",
    shortDefinition:
      "The quantum of the electromagnetic field; the elementary excitation of light at a given frequency.",
    explanation:
      "A photon carries energy E = hf where f is frequency and h is Planck's constant. Photon energies determine whether radiation can be absorbed by molecular vibrations, electronic transitions, or ionization. Single-photon detection is routine at visible wavelengths and increasingly available across the radio-to-X-ray range.",
    category: "physics",
    subtopic: "quantum-basics",
    relatedArticles: [
      {
        slug: "quantum-sensors-leaving-the-lab",
        category: "physics",
        subtopic: "quantum-basics",
      },
      {
        slug: "electromagnetic-spectrum-applications",
        category: "physics",
        subtopic: "quantum-basics",
      },
    ],
    relatedSources: [
      { label: "NIST", url: "https://www.nist.gov/" },
      {
        label: "APS Reviews of Modern Physics",
        url: "https://journals.aps.org/rmp/",
      },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "shockley-queisser-limit",
    term: "Shockley–Queisser limit",
    shortDefinition:
      "The maximum theoretical efficiency of a single-junction solar cell under standard solar illumination — about 33%.",
    explanation:
      "The Shockley–Queisser bound follows from detailed-balance arguments: a single bandgap cannot absorb photons below the gap and wastes excess energy of photons above it. Tandem and multi-junction cells exceed this bound by stacking layers with different bandgaps; the asymptotic infinite-junction limit under AM1.5 is around 86%.",
    category: "physics",
    subtopic: "thermodynamics",
    relatedArticles: [
      {
        slug: "thermodynamic-limits-of-photovoltaics",
        category: "physics",
        subtopic: "thermodynamics",
      },
      {
        slug: "perovskite-stack-field-stability",
        category: "physics",
        subtopic: "energy",
      },
    ],
    relatedSources: [
      {
        label: "U.S. NREL — photovoltaic efficiency reference",
        url: "https://www.nrel.gov/",
      },
    ],
    updatedDate: "2026-05-14",
  },
  {
    slug: "perovskite",
    term: "Perovskite (solar materials)",
    shortDefinition:
      "A family of crystal structures (ABX₃) used in high-efficiency emerging photovoltaic devices.",
    explanation:
      "Halide-perovskite solar cells reach laboratory efficiencies above 25% on flexible processing routes. The principal commercialization barriers are long-term outdoor stability and lead-content concerns. Tandem perovskite-on-silicon cells are the route most likely to displace single-junction silicon at scale in the near term.",
    category: "physics",
    subtopic: "energy",
    relatedArticles: [
      {
        slug: "perovskite-stack-field-stability",
        category: "physics",
        subtopic: "energy",
      },
    ],
    relatedSources: [
      {
        label: "U.S. NREL — perovskite research",
        url: "https://www.nrel.gov/pv/perovskite-solar-cells",
      },
      {
        label: "U.S. DOE Solar Energy Technologies Office",
        url: "https://www.energy.gov/eere/solar",
      },
    ],
    updatedDate: "2026-05-14",
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return GLOSSARY.find((e) => e.slug === slug);
}

export function listGlossarySlugs(): string[] {
  return GLOSSARY.map((e) => e.slug);
}

export function listGlossaryByCategory(
  category: CategorySlug,
): GlossaryEntry[] {
  return GLOSSARY.filter((e) => e.category === category);
}

/**
 * Alphabetical sort, used by the index view.
 */
export function listGlossaryAlphabetical(): GlossaryEntry[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}
