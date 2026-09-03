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
      "Ocean heat content (OHC) measures total energy stored in the ocean relative to a reference period. Because the ocean takes up roughly 90% of the energy added to the climate system by greenhouse-gas forcing — IPCC AR6 assesses ocean heat uptake at 91% of the total change in the global energy inventory — OHC is the most stable single indicator of total climate-system warming. The post-2005 Argo network anchors the modern record.",
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
    updatedDate: "2026-08-29",
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
      {
        slug: "carbon-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "biogeochemical-cycles-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.5", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
    ],
    uncertaintyNote:
      "The fast and slow carbon cycles differ in speed by roughly seven orders of magnitude; most confusion about carbon comes from applying a figure from one to the other.",
    updatedDate: "2026-08-29",
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
        slug: "biodiversity-indicators-explained",
        category: "ecology",
        subtopic: "biodiversity",
      },
      {
        slug: "biodiversity-monitoring-and-ecosystem-health",
        category: "ecology",
        subtopic: "biodiversity",
      },
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
      { label: "CBD Global Biodiversity Framework", url: "https://www.cbd.int/" },
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "EEA", url: "https://www.eea.europa.eu/en/topics/in-depth/biodiversity" },
    ],
    uncertaintyNote:
      "Indicators are correlated but not equivalent; each captures a different dimension, and most are biased toward well-studied vertebrate groups and well-monitored regions.",
    updatedDate: "2026-06-02",
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
      { label: "NASA Sea Level Change Portal — global mean sea level", url: "https://sealevel.nasa.gov/vital-signs/global-mean-sea-level/" },
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
      { label: "EPA Climate Change Science", url: "https://www.epa.gov/climatechange-science" },
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
      {
        slug: "cryosphere-in-the-earth-system",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "ice-albedo-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.9", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NSIDC", url: "https://nsidc.org/" },
      { label: "WGMS", url: "https://wgms.ch/" },
      {
        label: "NSIDC — what is the cryosphere?",
        url: "https://nsidc.org/learn/what-cryosphere",
      },
    ],
    uncertaintyNote:
      "IPCC AR6 assesses the cryosphere component by component rather than as a whole: Arctic summer sea ice is judged neither abrupt nor irreversible, while the Greenland ice sheet is judged irreversible for millennia but not abrupt.",
    updatedDate: "2026-08-29",
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
      {
        slug: "carbon-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "climate-feedback-mechanisms",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "IPCC AR6 WG1 Ch.5", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      { label: "NOAA Global Monitoring Laboratory", url: "https://gml.noaa.gov/" },
    ],
    uncertaintyNote:
      "The long-term trajectory of both sinks under continued warming is not strongly constrained; CMIP-class earth-system models show a wide range of land-sink behaviors under high-emissions scenarios.",
    updatedDate: "2026-08-29",
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
      "Earth's top-of-atmosphere energy imbalance is the upstream driver of every other climate indicator. A positive imbalance means the planet is gaining energy; that energy accumulates dominantly in the ocean (IPCC AR6 assesses 91% of the total change in the global energy inventory), with smaller shares warming land (about 5%), melting ice (about 3%), and warming the atmosphere (about 1%). The current imbalance, measured by NASA's CERES instruments and corroborated by ocean heat content uptake, is approximately +1 W/m² and is the direct consequence of anthropogenic radiative forcing.",
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
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
    ],
    updatedDate: "2026-08-29",
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
      {
        slug: "earth-system-models-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-predictability-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "WCRP CMIP", url: "https://www.wcrp-climate.org/" },
      { label: "IPCC AR6 WG1 Ch.4", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      {
        label: "WCRP — Coupled Model Intercomparison Project",
        url: "https://wcrp-cmip.org/",
      },
    ],
    uncertaintyNote:
      "A physical climate model is prescribed an atmospheric composition; an Earth system model computes it from emissions. The second answers different questions and carries larger biological uncertainty.",
    updatedDate: "2026-08-29",
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

  // ---------- Ecology / Biodiversity ----------
  {
    slug: "species-richness",
    term: "Species richness",
    shortDefinition:
      "The number of distinct species recorded in a defined area or sample — the simplest and most widely reported biodiversity measure.",
    explanation:
      "Species richness counts how many species are present, without regard to their abundance or identity. It rises with sampling effort and with area (the species-area relationship), so raw counts are only comparable at equal effort. Ecologists use rarefaction, extrapolation, and estimators such as Chao1 to compare samples and infer undetected species, and distinguish alpha (local), beta (turnover), and gamma (regional) components. Because richness ignores how individuals are distributed among species, it is a weak stand-alone conservation signal.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "species-richness-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "why-species-counts-mislead-conservation", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "GBIF", url: "https://www.gbif.org/" },
    ],
    uncertaintyNote:
      "Counts are effort- and scale-dependent and miss undescribed or undetected species; an absence of records is not proof of absence.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "species-evenness",
    term: "Species evenness",
    shortDefinition:
      "How equally individuals are distributed among the species in a community; combined with richness it determines diversity-index values.",
    explanation:
      "Evenness is high when no species dominates and low when a few species hold most individuals. Diversity indices combine richness and evenness: the Shannon index weights species by log abundance, the Simpson index emphasises common species, and Hill numbers express diversity as an effective number of species at a chosen order q (q=0 richness, q=1 Shannon, q=2 Simpson). A species-rich but uneven community can be less diverse than a poorer, even one, so a shift toward dominance is an early signal of disturbance.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "species-evenness-and-diversity", category: "ecology", subtopic: "biodiversity" },
      { slug: "species-richness-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "Nature", url: "https://www.nature.com/" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "red-list-index",
    term: "Red List Index",
    shortDefinition:
      "An indicator tracking the aggregate trend in extinction risk for a group of species, derived from repeated IUCN Red List assessments.",
    explanation:
      "The IUCN Red List places species in extinction-risk categories from Least Concern to Extinct using standard criteria. The Red List Index aggregates repeated assessments into a trend, scaled so that 1 means all species are Least Concern and 0 means all are extinct; a falling value signals rising risk. It counts only genuine status changes, correcting for category shifts caused by improved data or revised taxonomy, and is a Convention on Biological Diversity headline indicator computed for comprehensively assessed groups such as birds, mammals, amphibians, corals, and cycads.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "red-list-index-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-indicators-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IUCN Red List", url: "https://www.iucnredlist.org/" },
      { label: "IUCN", url: "https://www.iucn.org/" },
      { label: "CBD", url: "https://www.cbd.int/" },
    ],
    uncertaintyNote:
      "Most taxa are not assessed, Data Deficient species complicate trends, and reassessment occurs only at multi-year intervals.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "living-planet-index",
    term: "Living Planet Index",
    shortDefinition:
      "An index of the average relative change in monitored vertebrate population sizes since 1970 — a measure of abundance, not a count of animals.",
    explanation:
      "The Living Planet Index, compiled by the Zoological Society of London with WWF, converts thousands of vertebrate population time series into rates of change and averages them within a modelling framework. It is a relative abundance index and a Convention on Biological Diversity headline indicator. It is frequently misread as a percentage of animals or species lost, which it is not. Because it averages relative changes, a small number of steep declines can dominate the trend, and monitored populations over-represent well-studied taxa and regions.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "living-planet-index-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-indicators-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "Living Planet Index data portal", url: "https://www.livingplanetindex.org/" },
      { label: "CBD", url: "https://www.cbd.int/" },
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
    ],
    uncertaintyNote:
      "The headline figure is version-dependent and sensitive to weighting; representation gaps and a post-decline 1970 baseline limit interpretation.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "habitat-fragmentation",
    term: "Habitat fragmentation",
    shortDefinition:
      "The breaking of continuous habitat into smaller, more isolated patches; distinct from, though usually accompanying, habitat loss.",
    explanation:
      "Fragmentation is quantified with landscape metrics — mean patch size, edge density, core area, nearest-neighbour distance, and connectivity indices — usually computed from satellite land-cover maps. More fragmented landscapes have proportionally more edge habitat, where microclimate and species composition differ from the interior. Whether fragmentation 'per se' harms biodiversity independently of the total amount of habitat remaining is an active, unresolved debate; many studies find habitat amount the stronger driver.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "habitat-fragmentation-metrics", category: "ecology", subtopic: "biodiversity" },
      { slug: "remote-sensing-for-biodiversity-monitoring", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "Copernicus Land Monitoring Service", url: "https://land.copernicus.eu/" },
    ],
    uncertaintyNote:
      "Landscape metrics depend on the scale and grain of the input map and describe spatial pattern rather than its biological consequence.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "ecological-integrity",
    term: "Ecological integrity",
    shortDefinition:
      "The degree to which an ecosystem retains the species composition, structure, and function characteristic of its type, relative to a minimally disturbed reference.",
    explanation:
      "Ecological integrity is estimated with composite indicators such as the Biodiversity Intactness Index and Mean Species Abundance, which express how much of the originally present biota remains, and with indices of biotic integrity used in freshwater monitoring. It maps onto the ecosystem-structure and ecosystem-function classes of the Essential Biodiversity Variables and appears as a goal in the Kunming-Montreal Global Biodiversity Framework. Its central difficulty is defining the reference condition, which is partly a value judgement.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "ecological-integrity-indicators", category: "ecology", subtopic: "biodiversity" },
      { slug: "ecosystem-resilience-indicators", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "CBD", url: "https://www.cbd.int/" },
      { label: "GEO BON", url: "https://geobon.org/" },
    ],
    uncertaintyNote:
      "Composite indices average over species and processes, the modelled reference state carries error, and 'integrity' has several definitions in use.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "ecosystem-resilience",
    term: "Ecosystem resilience",
    shortDefinition:
      "The capacity of an ecosystem to absorb disturbance and retain its essential structure and function rather than shifting to a different state.",
    explanation:
      "Resilience is a capacity rather than an observable state, so it is approximated by proxies: functional redundancy and response diversity among species, and recovery rate after disturbance. Some systems can undergo regime shifts between alternative stable states; proposed statistical early-warning signals of an approaching shift include rising temporal autocorrelation, increasing variance, and slower recovery from perturbations ('critical slowing down'). Engineering resilience (return speed) and ecological resilience (disturbance absorbed before a shift) are distinguished.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "ecosystem-resilience-indicators", category: "ecology", subtopic: "biodiversity" },
      { slug: "ecological-integrity-indicators", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "Nature", url: "https://www.nature.com/" },
      { label: "Science", url: "https://www.science.org/" },
    ],
    uncertaintyNote:
      "Early-warning signals are not reliable in every system; resilience is specific to the disturbance and system, and thresholds are generally not predictable in advance.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "baseline-condition",
    term: "Baseline condition",
    shortDefinition:
      "The reference state against which biodiversity change is measured; the choice of baseline strongly shapes whether a system is judged degraded, stable, or recovering.",
    explanation:
      "Because loss, recovery, and intactness are all defined relative to a baseline, the reference period is a consequential choice. Shifting-baseline syndrome describes how each generation tends to treat the already-degraded state it inherits as normal, so perceived baselines ratchet downward and cumulative loss is underestimated. Deeper baselines are reconstructed from long-term monitoring records, museum specimens, historical surveys, paleoecological proxies, and aggregated occurrence data.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "biodiversity-baselines-and-shifting-baselines", category: "ecology", subtopic: "biodiversity" },
      { slug: "ecosystem-resilience-indicators", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "FAO Biodiversity", url: "https://www.fao.org/biodiversity/en/" },
      { label: "Science", url: "https://www.science.org/" },
    ],
    uncertaintyNote:
      "Deep historical baselines are sparse and uncertain, and different reference periods can reverse the apparent direction or magnitude of change.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "remote-sensing",
    term: "Remote sensing",
    shortDefinition:
      "Measuring a surface from a distance by recording the electromagnetic radiation it reflects or emits — the basis of satellite Earth observation.",
    explanation:
      "Remote sensing acquires information about the land, ocean, atmosphere, or ice without contact, using passive sensors (recording reflected sunlight or emitted thermal infrared) or active sensors (radar and lidar, which supply their own energy). Surfaces are identified from their spectral signatures across visible, infrared, and microwave bands. The same technique underpins climate indicators, biodiversity and ecosystem monitoring, and hazard response. It measures physical and spectral properties rather than the quantities of interest directly, so products require calibration and ground validation.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "remote-sensing-for-biodiversity-monitoring", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
      { label: "ESA Observing the Earth", url: "https://www.esa.int/Applications/Observing_the_Earth" },
    ],
    uncertaintyNote:
      "Remote sensing measures proxies, not the target quantity directly; resolution trade-offs, cloud cover, mixed pixels, and sensor drift all limit what can be resolved and require validation.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "citizen-science",
    term: "Citizen science (biodiversity)",
    shortDefinition:
      "Biodiversity observations contributed by volunteers; aggregated through facilities such as GBIF, they greatly expand coverage but carry sampling biases.",
    explanation:
      "Volunteer platforms generate large volumes of species records that are aggregated and openly shared through the Global Biodiversity Information Facility and used to estimate distributions and, for well-recorded groups such as birds, population trends that feed indicators. The data carry documented biases — spatial clustering near roads and cities, over-recording of charismatic groups, uneven effort, and variable observer skill — which are addressed with occupancy and species-distribution models, explicit effort covariates, and expert validation of records.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "citizen-science-biodiversity-data", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-indicators-explained", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "GBIF", url: "https://www.gbif.org/" },
      { label: "IPBES", url: "https://www.ipbes.net/global-assessment" },
      { label: "EEA", url: "https://www.eea.europa.eu/en/topics/in-depth/biodiversity" },
    ],
    uncertaintyNote:
      "Opportunistic records carry sampling and identification error; without effort information, raw counts can be mistaken for real abundance or range change.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "protected-area-effectiveness",
    term: "Protected-area effectiveness",
    shortDefinition:
      "Whether a protected area actually reduces the pressures and biodiversity loss it was created to address — distinct from how much area is designated.",
    explanation:
      "Protected-area coverage is recorded in the World Database on Protected Areas (Protected Planet), and the Kunming-Montreal Global Biodiversity Framework's Target 3 commits to effectively conserving at least 30% of land and sea by 2030. Designation alone does not guarantee results: a 'paper park' is designated but weakly managed. Effectiveness is assessed through management-effectiveness tools such as the Management Effectiveness Tracking Tool and through counterfactual impact evaluation that compares protected sites to matched unprotected ones to estimate avoided loss.",
    category: "ecology",
    subtopic: "biodiversity",
    relatedArticles: [
      { slug: "protected-area-effectiveness", category: "ecology", subtopic: "biodiversity" },
      { slug: "habitat-fragmentation-metrics", category: "ecology", subtopic: "biodiversity" },
      { slug: "biodiversity-monitoring-and-ecosystem-health", category: "ecology", subtopic: "biodiversity" },
    ],
    relatedSources: [
      { label: "Protected Planet (WDPA)", url: "https://www.protectedplanet.net/en" },
      { label: "CBD", url: "https://www.cbd.int/" },
      { label: "IUCN", url: "https://www.iucn.org/" },
    ],
    uncertaintyNote:
      "Attributing outcomes to protection is hard because the counterfactual is unobserved, and protected areas are often sited on land already under low pressure.",
    updatedDate: "2026-06-02",
  },

  // ---------- Ecology / Earth observation ----------
  {
    slug: "earth-observation",
    term: "Earth observation",
    shortDefinition:
      "Gathering information about the planet's land, ocean, atmosphere, and ice using sensors on satellites and aircraft.",
    explanation:
      "Earth observation is the broad practice of measuring environmental conditions and change from a distance, with remote sensing as its core technique. It supplies many of the records used in climate, biodiversity, and ecosystem science, from land-cover maps to sea level. Operational sources include NASA's Earth-observing missions, the joint NASA/USGS Landsat record, and the European Union's Copernicus programme with its Sentinel satellites. Earth observation extends fieldwork to global, repeatable measurement, but its products require calibration and validation.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-data-products", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "ESA Observing the Earth", url: "https://www.esa.int/Applications/Observing_the_Earth" },
      { label: "Copernicus", url: "https://www.copernicus.eu/en" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "landsat",
    term: "Landsat",
    shortDefinition:
      "A joint NASA–USGS satellite program that has imaged Earth's land surface continuously since 1972 — the longest such record.",
    explanation:
      "Landsat satellites observe the land at about 30-metre resolution on a 16-day repeat cycle, recording multispectral imagery used for land cover, agriculture, forests, and water. The program began in 1972; current satellites are Landsat 8 (2013) and Landsat 9 (2021). Since 2008 the USGS has distributed the full archive free of charge, which greatly expanded scientific use by making long time-series analysis possible.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "landsat-program-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "land-cover-change-detection", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "USGS Landsat Missions", url: "https://www.usgs.gov/landsat-missions" },
      { label: "NASA", url: "https://science.nasa.gov/" },
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
    ],
    uncertaintyNote:
      "The 16-day revisit and cloud cover leave gaps, Landsat 7 imagery after 2003 carries Scan Line Corrector striping, and a consistent multi-decade record requires cross-calibration across the series.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "sentinel-satellite",
    term: "Sentinel satellite",
    shortDefinition:
      "A satellite of the EU's Copernicus programme; the Sentinel families provide radar, optical, ocean, atmospheric, and altimetry data, free and open.",
    explanation:
      "Built and operated by the European Space Agency for the European Union, the Sentinels each specialise: Sentinel-1 (radar imaging through cloud and at night), Sentinel-2 (multispectral optical at 10–60 m with about a 5-day revisit), Sentinel-3 (ocean and land colour, surface temperature, and altimetry), Sentinel-5P (atmospheric composition), and Sentinel-6 (sea-level altimetry). Their free, frequent data underpin the operational Copernicus services.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "sentinel-satellites-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "copernicus-programme-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "Copernicus", url: "https://www.copernicus.eu/en" },
      { label: "ESA Observing the Earth", url: "https://www.esa.int/Applications/Observing_the_Earth" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "modis",
    term: "MODIS",
    shortDefinition:
      "The Moderate Resolution Imaging Spectroradiometer on NASA's Terra and Aqua satellites, imaging the whole planet almost daily.",
    explanation:
      "MODIS has 36 spectral bands at 250-metre, 500-metre, and 1-kilometre resolution and near-daily global coverage, trading spatial detail for frequency. It flies on Terra (launched 1999) and Aqua (launched 2002), and its standard products include vegetation indices, land cover, land-surface temperature, active fire, ocean colour, snow, and aerosols. The VIIRS instrument continues many of these measurements on newer satellites.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "modis-earth-observation-system", category: "ecology", subtopic: "earth-observation" },
      { slug: "ndvi-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "NOAA NESDIS", url: "https://www.nesdis.noaa.gov/" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "ndvi",
    term: "NDVI (Normalised Difference Vegetation Index)",
    shortDefinition:
      "A vegetation index, (NIR − Red)/(NIR + Red), ranging −1 to +1 — the most widely used satellite measure of vegetation greenness.",
    explanation:
      "NDVI exploits the contrast between red light that chlorophyll absorbs and near-infrared that leaf structure reflects. Dense healthy vegetation gives high values (roughly 0.6–0.9), bare soil low values, and water, snow, or cloud values near zero or negative. Developed in the 1970s with early Landsat data, NDVI is used for vegetation condition, phenology, drought, and crop monitoring, usually as a time series rather than a single image.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "ndvi-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "vegetation-indices-and-monitoring", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
    ],
    uncertaintyNote:
      "NDVI saturates where vegetation is very dense and is affected by soil background and atmospheric conditions, which is why complementary indices such as EVI exist.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "enhanced-vegetation-index",
    term: "Enhanced Vegetation Index (EVI)",
    shortDefinition:
      "A MODIS-standard vegetation index that improves on NDVI by reducing atmospheric and soil-background effects and resisting saturation at high biomass.",
    explanation:
      "The Enhanced Vegetation Index uses the blue band to help correct for atmospheric scattering and adjusts for the soil and canopy background, so it stays responsive where NDVI saturates — for example over dense tropical forest. EVI and NDVI are produced together as standard MODIS products, and the choice between them depends on the vegetation type and the question being asked.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "vegetation-indices-and-monitoring", category: "ecology", subtopic: "earth-observation" },
      { slug: "ndvi-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "satellite-altimetry",
    term: "Satellite altimetry",
    shortDefinition:
      "Measuring the height of a surface — usually the sea — by timing a radar pulse from a satellite and back; the basis of the satellite sea-level record.",
    explanation:
      "A radar altimeter measures the round-trip time of a pulse to the surface; combined with precise orbit knowledge it yields surface height to within centimetres. The continuous record from TOPEX/Poseidon (1992) through the Jason series to Sentinel-6 underpins satellite measurement of global mean sea level — rising roughly 3 to 4 millimetres per year over the satellite era — and also reveals ocean currents, wave height, and ice-surface elevation.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "satellite-altimetry-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "ocean-color-observations", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA", url: "https://science.nasa.gov/" },
      { label: "NOAA", url: "https://www.climate.gov/" },
      { label: "Copernicus Marine Service", url: "https://marine.copernicus.eu/" },
    ],
    uncertaintyNote:
      "Accuracy depends on orbit determination and atmospheric (water-vapour) corrections, degrades near coasts, and a reliable trend requires cross-calibration between successive missions.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "land-cover",
    term: "Land cover",
    shortDefinition:
      "The physical material covering the land surface — forest, water, cropland, built-up — as mapped from satellite imagery.",
    explanation:
      "Land cover describes what is physically present, distinct from land use, which is the human function of that land. Satellite land-cover maps are made by classifying multispectral imagery into categories and are produced globally by programmes such as the ESA Climate Change Initiative and the Copernicus Land Monitoring Service. Comparing maps over time is the basis of land-cover change detection.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "land-cover-change-detection", category: "ecology", subtopic: "earth-observation" },
      { slug: "landsat-program-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "Copernicus Land Monitoring Service", url: "https://land.copernicus.eu/" },
      { label: "ESA", url: "https://www.esa.int/Applications/Observing_the_Earth" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "land-use-change",
    term: "Land-use change",
    shortDefinition:
      "A change in how people use land — for example forest converted to cropland — often inferred from satellite-detected land-cover change.",
    explanation:
      "Land use refers to human function (agriculture, settlement, conservation), which satellites infer rather than observe directly. Land-use change such as deforestation, urban expansion, or agricultural conversion is a leading driver of biodiversity loss and a significant carbon flux. It is monitored by detecting land-cover change in image time series and interpreting it in context.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "satellite-deforestation-monitoring", category: "ecology", subtopic: "earth-observation" },
      { slug: "land-cover-change-detection", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "FAO", url: "https://www.fao.org/forestry/en/" },
      { label: "European Commission JRC", url: "https://joint-research-centre.ec.europa.eu/" },
      { label: "Copernicus Land Monitoring Service", url: "https://land.copernicus.eu/" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "ocean-color",
    term: "Ocean colour",
    shortDefinition:
      "The spectrum of light leaving the sea surface, used to estimate chlorophyll and phytoplankton from space.",
    explanation:
      "Ocean-colour sensors measure water-leaving radiance; a blue-to-green ratio indicates chlorophyll-a concentration and thus phytoplankton, the base of the marine food web and a major part of the ocean carbon cycle. The record runs from the Coastal Zone Color Scanner (launched 1978) and SeaWiFS (1997–2010) to MODIS, VIIRS, and the Sentinel-3 OLCI instrument. Atmospheric correction over water is the principal challenge.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "ocean-color-observations", category: "ecology", subtopic: "earth-observation" },
      { slug: "modis-earth-observation-system", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "Copernicus Marine Service", url: "https://marine.copernicus.eu/" },
      { label: "NOAA NESDIS", url: "https://www.nesdis.noaa.gov/" },
    ],
    uncertaintyNote:
      "The water signal is weak relative to the atmosphere, so atmospheric-correction errors dominate; coastal and turbid waters and cloud cover further limit retrievals.",
    updatedDate: "2026-06-02",
  },
  {
    slug: "spectral-signature",
    term: "Spectral signature",
    shortDefinition:
      "The characteristic way a material reflects or emits radiation across wavelengths, used to identify surfaces in remote sensing.",
    explanation:
      "Because different materials interact with light differently, each has a distinctive spectral signature. Healthy vegetation absorbs red and reflects near-infrared; open water absorbs strongly in the infrared; minerals and built surfaces have their own patterns. Multispectral and hyperspectral sensors record reflectance in several bands so that surfaces can be distinguished and classified from their signatures.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "ndvi-explained", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "reflectance",
    term: "Reflectance",
    shortDefinition:
      "The fraction of incoming radiation a surface reflects in a given wavelength band — the core quantity a calibrated optical sensor reports.",
    explanation:
      "Top-of-atmosphere reflectance is what a satellite measures directly; atmospheric correction converts it to surface reflectance, removing the distorting effect of the atmosphere so that images from different dates are comparable. Reflectance in multiple bands is the input to vegetation indices, classification, and change detection.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-data-products", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "raster-data",
    term: "Raster data",
    shortDefinition:
      "Spatial data stored as a grid of cells (pixels), each holding a value — the standard form of satellite imagery.",
    explanation:
      "Remote-sensing products are rasters: regular grids in which each pixel covers a fixed ground area and stores a measured value such as reflectance or temperature. Pixel size sets the spatial resolution and therefore the smallest feature that can be resolved. Rasters contrast with vector data (points, lines, polygons) and are the format on which indices, classification, and change detection operate.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "earth-observation-data-products", category: "ecology", subtopic: "earth-observation" },
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
    ],
    updatedDate: "2026-06-02",
  },
  {
    slug: "ground-truthing",
    term: "Ground-truthing",
    shortDefinition:
      "Comparing a satellite estimate against independent field or higher-resolution observations to calibrate and validate it.",
    explanation:
      "Ground-truthing — ground reference, or validation — links a spectral measurement to a real-world quantity and quantifies its error. Field plots, instrumented towers, ships, and finer imagery provide the reference. Remote sensing does not replace fieldwork; the two are designed to work together, and a satellite product is only trusted once it has been validated against independent data.",
    category: "ecology",
    subtopic: "earth-observation",
    relatedArticles: [
      { slug: "remote-sensing-limitations-and-uncertainty", category: "ecology", subtopic: "earth-observation" },
      { slug: "what-is-remote-sensing", category: "ecology", subtopic: "earth-observation" },
      { slug: "earth-observation-and-remote-sensing-explained", category: "ecology", subtopic: "earth-observation" },
    ],
    relatedSources: [
      { label: "NASA Earthdata", url: "https://www.earthdata.nasa.gov/" },
      { label: "USGS", url: "https://www.usgs.gov/landsat-missions" },
      { label: "Remote Sensing (journal)", url: "https://www.mdpi.com/journal/remotesensing" },
    ],
    updatedDate: "2026-06-02",
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
      {
        slug: "earth-system-science-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
      { label: "IPCC AR6 WG1 Ch.7", url: "https://www.ipcc.ch/report/ar6/wg1/" },
      {
        label: "IPCC AR6 WG1, Chapter 7",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      },
    ],
    uncertaintyNote:
      "IPCC AR6 assesses the Earth energy imbalance at 0.79 W m-2 for 2006-2018, up from 0.50 for 1971-2006, with about 91% of the accumulated energy taken up by the ocean.",
    updatedDate: "2026-08-29",
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
      {
        slug: "ice-albedo-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      { label: "NASA Earth Observatory", url: "https://science.nasa.gov/earth/earth-observatory/" },
    ],
    uncertaintyNote:
      "The global surface-albedo feedback is assessed by IPCC AR6 at +0.35 W m-2 per degree Celsius with high confidence in its sign but only medium confidence in its magnitude — smaller than the local ice-to-ocean contrast suggests.",
    updatedDate: "2026-08-29",
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
        url: "https://www.nlr.gov/pv/cell-efficiency",
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
        url: "https://www.nlr.gov/pv/perovskite-solar-cells",
      },
      {
        label: "U.S. DOE Solar Energy Technologies Office",
        url: "https://www.energy.gov/eere/solar",
      },
    ],
    updatedDate: "2026-05-14",
  },
  // ---------- Ecology / Earth system science ----------
  {
    slug: "earth-system",
    term: "Earth system",
    shortDefinition:
      "The coupled whole formed by the atmosphere, hydrosphere, cryosphere, biosphere, and geosphere and the exchanges between them.",
    explanation:
      "The Earth system is not a list of components but the set of couplings between them: energy and matter moving continuously between air, water, ice, rock and soil, and life. Treating the planet this way is what allows questions that cross disciplinary boundaries — how much of an emitted tonne of carbon stays airborne, why a Pacific temperature anomaly changes East African rainfall — to be posed at all. NASA frames its Earth-science programme in the same terms, measuring how changes in one component drive changes in others.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-science-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-components-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NASA — Earth science",
        url: "https://science.nasa.gov/earth/",
      },
      {
        label: "IPCC AR6 WG1, Chapter 7",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      },
    ],
    uncertaintyNote:
      "The five-component division is a bookkeeping convention rather than a physical boundary; soil moisture, sea ice, and vegetation each belong to more than one component at once.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "atmosphere",
    term: "Atmosphere",
    shortDefinition:
      "The gaseous envelope surrounding Earth — roughly 78% nitrogen and 21% oxygen by volume, with trace gases doing most of the radiative work.",
    explanation:
      "The atmosphere is the fastest-responding component of the Earth system, mixing globally within weeks to a couple of years and holding very little heat relative to the ocean. Its bulk constituents are radiatively almost inactive; the trace gases — water vapour, carbon dioxide, methane, nitrous oxide, ozone — account for the greenhouse effect. Because its thermal inertia is low, atmospheric measurements respond first to any perturbation and are correspondingly the noisiest indicators of long-term change.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-components-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "global-water-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NASA — Earth science",
        url: "https://science.nasa.gov/earth/",
      },
      {
        label: "WMO Greenhouse Gas Bulletin No. 21",
        url: "https://wmo.int/resources/publication-series/greenhouse-gas-bulletin/wmo-greenhouse-gas-bulletin-no-21",
      },
    ],
    uncertaintyNote:
      "Atmospheric composition is well measured for long-lived gases but far less so for aerosols and short-lived species, whose concentrations vary sharply in space and time.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "hydrosphere",
    term: "Hydrosphere",
    shortDefinition:
      "All the water at and near Earth's surface — ocean, ice, fresh surface water, groundwater, and atmospheric moisture.",
    explanation:
      "USGS puts the total volume of water on Earth at about 1,386 million cubic kilometres, of which roughly 96.5% is saline ocean water. Of the freshwater remainder, over 68% is locked in ice and glaciers and about 30% is groundwater. The hydrosphere spans an unusually wide range of response times: the atmospheric store turns over in days, the surface ocean in years, and the deep ocean in centuries to a millennium.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-components-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "global-water-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "USGS Water Science School",
        url: "https://www.usgs.gov/special-topics/water-science-school/science/how-much-water-there-earth",
      },
      {
        label: "NASA — the water cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-water-cycle/",
      },
    ],
    updatedDate: "2026-08-29",
  },
  {
    slug: "biosphere",
    term: "Biosphere",
    shortDefinition:
      "The totality of living organisms and the zone they occupy, treated as an active component of the Earth system.",
    explanation:
      "The biosphere is the only Earth-system component defined by a process rather than a material or a phase, and it is unusual in actively regulating fluxes rather than passively transmitting them. It influences climate through composition — carbon uptake and release, methane, nitrous oxide — and through the physical properties of the land and ocean surface, including reflectivity, evapotranspiration, and roughness. The IPCC assesses that land ecosystems absorbed 31% of anthropogenic carbon dioxide emissions over 2010–2019.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "biosphere-climate-interactions",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-components-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
      {
        label: "NASA Earth Observatory — the carbon cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-carbon-cycle",
      },
    ],
    uncertaintyNote:
      "Biosphere terms are among the least well constrained in Earth-system modelling, because vegetation responds to weather, nutrients, carbon dioxide, disturbance, and management simultaneously and these covary in the observational record.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "lithosphere",
    term: "Lithosphere",
    shortDefinition:
      "Earth's rigid outer rock shell — the crust and uppermost mantle — and, in Earth-system usage, the source of the slowest material cycles.",
    explanation:
      "In Earth-system science the lithosphere (often used interchangeably with 'geosphere' in this context, though the terms are not strictly synonymous) matters mainly as the reservoir and regulator of the slow cycles. Weathering of silicate rock consumes atmospheric carbon dioxide; volcanism returns it. NASA's Earth Observatory describes carbon taking 100 to 200 million years to complete a circuit through rock, which makes the lithosphere a thermostat on geological timescales and effectively a fixed boundary condition on human ones.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-components-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "carbon-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NASA Earth Observatory — the carbon cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-carbon-cycle",
      },
      {
        label: "NASA — Earth science",
        url: "https://science.nasa.gov/earth/",
      },
    ],
    uncertaintyNote:
      "'Lithosphere' and 'geosphere' are used loosely and sometimes interchangeably in Earth-system writing; the geosphere is the broader term, encompassing the whole solid Earth rather than only its rigid outer shell.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "biogeochemical-cycle",
    term: "Biogeochemical cycle",
    shortDefinition:
      "The movement of a chemical element between reservoirs by biological, geological, and chemical processes, described by reservoir sizes and fluxes.",
    explanation:
      "A biogeochemical cycle is specified by three quantities: reservoirs where an element accumulates, fluxes that transfer it between them, and the residence time that follows from dividing the two. The same grammar describes carbon, water, nitrogen, phosphorus, and sulphur, which is what makes cycles with wildly different speeds comparable. Cycles are coupled to one another through the fixed elemental ratios organisms require, through shared media such as seawater, and through radiatively active by-products.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "biogeochemical-cycles-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "carbon-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "nitrogen-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
      {
        label: "NASA Earth Observatory — the carbon cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-carbon-cycle",
      },
    ],
    uncertaintyNote:
      "Flux estimates are considerably less certain than reservoir estimates, and because gross fluxes are large and nearly balanced, small proportional errors in them produce large errors in the net.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "residence-time",
    term: "Residence time",
    shortDefinition:
      "The average time a unit of material stays in a reservoir — reservoir size divided by the total outgoing flux.",
    explanation:
      "Residence time is the single number that explains why perturbations to some cycles are felt immediately and others accumulate for centuries. Atmospheric water has a residence time of about nine days, derived from NASA's figures of roughly 12,900 cubic kilometres stored and around 495,000 cubic kilometres cycled through annually. The IPCC assesses the residence time of a nitrous oxide perturbation at 109 ± 10 years. Short residence prevents accumulation; long residence guarantees it.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "biogeochemical-cycles-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "nitrogen-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NASA — the water cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-water-cycle/",
      },
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
    ],
    uncertaintyNote:
      "A residence time is an average over a distribution, not a lifetime. Added carbon dioxide is removed by several processes with very different timescales, so the decay of a pulse is not exponential and no single lifetime describes it.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "water-cycle",
    term: "Water cycle",
    shortDefinition:
      "The continuous circulation of water between ocean, atmosphere, land, and ice through evaporation, condensation, precipitation, and runoff.",
    explanation:
      "The atmospheric limb of the water cycle is a very small reservoir with an enormous throughput: NASA estimates that about 495,000 cubic kilometres of water pass through the atmosphere each year, replacing its entire content close to forty times. Roughly 90% of the moisture entering the air comes from evaporation off water bodies. Because the store is small relative to the flux, water vapour cannot accumulate, and regional rainfall depends more on where moist air travels than on how much moisture exists.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "global-water-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "biogeochemical-cycles-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NASA — the water cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-water-cycle/",
      },
      {
        label: "USGS Water Science School",
        url: "https://www.usgs.gov/special-topics/water-science-school/science/how-much-water-there-earth",
      },
      {
        label: "IPCC AR6 WG1, Chapter 8",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/",
      },
    ],
    uncertaintyNote:
      "Most of the cycle's fluxes occur over the ocean where instruments are sparse, so global water budgets do not close exactly; residual imbalances are usually larger than the trends being sought.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "nitrogen-cycle",
    term: "Nitrogen cycle",
    shortDefinition:
      "The transformation of nitrogen between inert atmospheric N2 and biologically reactive forms through fixation, nitrification, assimilation, and denitrification.",
    explanation:
      "Nitrogen is about 78% of the air by volume and simultaneously a limiting nutrient in most ecosystems, because the triple bond in N2 makes it unavailable until fixed. Every step of the cycle after fixation is microbially mediated, which makes it unusually responsive to land management. Industrial fixation through the Haber-Bosch process, together with legume cultivation and fossil-fuel combustion, has substantially increased the flow of reactive nitrogen through terrestrial systems.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "nitrogen-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "biogeochemical-cycles-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
      {
        label: "WMO Greenhouse Gas Bulletin No. 21",
        url: "https://wmo.int/resources/publication-series/greenhouse-gas-bulletin/wmo-greenhouse-gas-bulletin-no-21",
      },
    ],
    uncertaintyNote:
      "Published multiples for how much human activity has increased reactive-nitrogen production vary widely depending on whether marine fixation and combustion sources are counted, so a single global ratio quoted without those qualifications should be treated cautiously.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "carbon-sink",
    term: "Carbon sink",
    shortDefinition:
      "A reservoir that absorbs more carbon than it releases over a defined period; a carbon source does the reverse.",
    explanation:
      "Sink and source are directional labels applied to a reservoir over a stated interval, not permanent properties. The IPCC assesses that over 2010–2019 the ocean took up 23% of anthropogenic carbon dioxide emissions and land vegetation 31%, leaving 46% in the atmosphere. Both sinks have grown over the past six decades as atmospheric concentration rose, but the assessment notes that ocean carbon chemistry is beginning to change in ways expected to weaken future uptake.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "carbon-cycle-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "biosphere-climate-interactions",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
      {
        label: "NASA Earth Observatory — the carbon cycle",
        url: "https://science.nasa.gov/earth/earth-observatory/the-carbon-cycle",
      },
    ],
    uncertaintyNote:
      "The same forest or ocean region can be a sink in one year and a source in another, driven by drought, fire, or ENSO phase; single-year values say little about the underlying trend.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "climate-feedback",
    term: "Climate feedback",
    shortDefinition:
      "A process that changes Earth's energy budget in response to temperature change, quantified in watts per square metre per degree Celsius.",
    explanation:
      "A forcing is an imposed change to the energy budget; a feedback is the system's response to the resulting temperature change. The sign convention is counter-intuitive: negative feedback parameters are stabilising, because the parameter measures how strongly the planet increases its radiation to space per degree of warming. IPCC AR6 assesses the net feedback parameter at -1.16 W m-2 per degree Celsius, with a very likely range of -1.81 to -0.51, against a baseline Planck response of -3.22.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "climate-feedback-mechanisms",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "water-vapor-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "ice-albedo-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 7",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      },
    ],
    uncertaintyNote:
      "Feedback strength is state-dependent and pattern-dependent: AR6 assesses that the net parameter becomes less negative as temperature rises, so feedbacks inferred from the historical record are not those that will operate at equilibrium.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "water-vapor-feedback",
    term: "Water-vapour feedback",
    shortDefinition:
      "The amplification of warming by the extra water vapour a warmer atmosphere holds, almost always assessed jointly with the lapse-rate feedback.",
    explanation:
      "Water vapour is the strongest greenhouse constituent but acts as a feedback rather than a forcing, because its concentration is set by temperature and its atmospheric residence time is about nine days. The Clausius-Clapeyron relation implies low-altitude specific humidity rises by roughly 7% per degree Celsius at constant relative humidity. IPCC AR6 assesses the combined water-vapour plus lapse-rate feedback at +1.30 W m-2 per degree Celsius, very likely range 1.1 to 1.5 — the largest single amplifier.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "water-vapor-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "climate-feedback-mechanisms",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 7",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      },
      {
        label: "IPCC AR6 WG1, Chapter 8",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/",
      },
    ],
    uncertaintyNote:
      "The two components are reported together because their errors are anti-correlated and their sum is far better constrained than either separately; a standalone 'water-vapour feedback' number depends on which decomposition produced it.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "ice-albedo-feedback",
    term: "Ice-albedo feedback",
    shortDefinition:
      "The amplification of warming that follows when retreating snow and ice expose darker, more absorptive surfaces.",
    explanation:
      "NSIDC reports that bare sea ice reflects 40 to 60% of incident sunlight and snow up to 90%, against a much darker ocean beneath. Replacing one with the other increases absorbed energy and promotes further melt. The global magnitude is smaller than the local contrast suggests: IPCC AR6 assesses the surface-albedo feedback at +0.35 W m-2 per degree Celsius, very likely range 0.10 to 0.60 — the smallest of the three main physical amplifiers, limited by area, low sun angle, and cloud cover.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "ice-albedo-feedback-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "cryosphere-in-the-earth-system",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 7",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      },
      {
        label: "NSIDC — what is the cryosphere?",
        url: "https://nsidc.org/learn/what-cryosphere",
      },
    ],
    uncertaintyNote:
      "AR6 attaches high confidence to the sign of this feedback; confidence in its magnitude is stated as medium in the summary table and high for the assessed range in the section text, and Southern Hemisphere estimates appear larger in models than in observations.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "ocean-circulation",
    term: "Ocean circulation",
    shortDefinition:
      "The organised movement of seawater — wind-driven at the surface, density-driven in the interior — that transports heat, salt, carbon, and nutrients.",
    explanation:
      "Two circulations are usually drawn on the same map. The wind-driven circulation organises surface water into basin-scale gyres and western boundary currents and responds on seasonal to interannual timescales. The density-driven interior circulation operates over centuries to a millennium. Distinguishing them matters because claims about the ocean and climate are only meaningful once the relevant timescale is fixed.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "ocean-circulation-and-climate",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-science-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA — the global conveyor belt",
        url: "https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor2.html",
      },
      {
        label: "NOAA — what is the AMOC?",
        url: "https://oceanservice.noaa.gov/facts/amoc.html",
      },
    ],
    updatedDate: "2026-08-29",
  },
  {
    slug: "thermohaline-circulation",
    term: "Thermohaline circulation",
    shortDefinition:
      "The deep, density-driven ocean overturning set by temperature and salinity, of which the Atlantic Meridional Overturning Circulation is the best-studied component.",
    explanation:
      "NOAA describes the driving process directly: in polar regions water cools and sea ice forms, and because freezing excludes salt the surrounding water becomes saltier, denser, and sinks. That water spreads through the deep basins and returns to the surface through mixing and upwelling, a circuit NOAA estimates takes on the order of a thousand years. The asymmetry of this overturning accounts for a large share of the ocean's poleward heat transport.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "ocean-circulation-and-climate",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "cryosphere-in-the-earth-system",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA — the global conveyor belt",
        url: "https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor2.html",
      },
      {
        label: "NOAA — what is the AMOC?",
        url: "https://oceanservice.noaa.gov/facts/amoc.html",
      },
      {
        label: "IPCC AR6 WG1, Chapter 4",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/",
      },
    ],
    uncertaintyNote:
      "IPCC AR6 assesses a very likely decline in the AMOC over the twenty-first century but only medium confidence that there will be no abrupt collapse before 2100 — a deliberately weaker statement than the language used for the decline itself.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "enso",
    term: "ENSO (El Nino-Southern Oscillation)",
    shortDefinition:
      "The coupled ocean-atmosphere oscillation of the tropical Pacific, shifting irregularly between warm, cool, and neutral phases every two to seven years.",
    explanation:
      "ENSO exists because tropical Pacific winds and sea-surface temperature reinforce each other: stronger trade winds drive upwelling that cools the eastern Pacific, which strengthens the winds further. Any weakening of that loop lets warm water spread eastward. NOAA monitors it with the Oceanic Nino Index, a running three-month mean of sea-surface temperature anomalies in the Nino 3.4 region, and classifies events using a +/-0.5 degrees Celsius threshold sustained for five consecutive overlapping seasons.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "el-nino-la-nina-enso-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "climate-variability-and-teleconnections",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA PMEL — what is El Nino?",
        url: "https://www.pmel.noaa.gov/elnino/what-is-el-nino",
      },
      {
        label: "NOAA Climate.gov — Oceanic Nino Index",
        url: "https://www.climate.gov/news-features/understanding-climate/climate-variability-oceanic-nino-index",
      },
      {
        label: "NOAA Climate.gov — El Nino and La Nina",
        url: "https://www.climate.gov/enso",
      },
    ],
    uncertaintyNote:
      "The index reduces a three-dimensional coupled state to one number over one rectangle of ocean; events with similar index values can have very different spatial patterns and impacts.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "el-nino",
    term: "El Nino",
    shortDefinition:
      "The warm phase of ENSO, in which trade winds relax, warm water spreads eastward, and eastern Pacific upwelling weakens.",
    explanation:
      "NOAA describes El Nino as beginning with a relaxation of the trade winds in the central and western Pacific. The thermocline deepens in the east and shoals in the west, upwelling becomes less effective at cooling the surface and at supplying nutrient-rich water to the sunlit layer, and the atmospheric convection normally centred over the western Pacific migrates eastward with the warm water. Because the phase moves heat from the ocean interior to the surface, El Nino years run warmer than the underlying trend.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "el-nino-la-nina-enso-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "climate-variability-and-teleconnections",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA PMEL — what is El Nino?",
        url: "https://www.pmel.noaa.gov/elnino/what-is-el-nino",
      },
      {
        label: "NOAA Climate.gov — Oceanic Nino Index",
        url: "https://www.climate.gov/news-features/understanding-climate/climate-variability-oceanic-nino-index",
      },
    ],
    uncertaintyNote:
      "Conditions are not an event: NOAA classifies a full El Nino only when the index stays at or above +0.5 degrees Celsius for five consecutive overlapping three-month seasons.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "la-nina",
    term: "La Nina",
    shortDefinition:
      "The cool phase of ENSO, in which trade winds strengthen, the thermocline steepens, and eastern Pacific upwelling intensifies.",
    explanation:
      "La Nina is the same coupled loop running in the opposite direction from El Nino: stronger easterly trades pile warm water further west, the thermocline tilts more steeply, and vigorous upwelling makes the eastern equatorial Pacific cooler than average. NOAA classifies it when the three-month-average Nino 3.4 index stays at least 0.5 degrees Celsius below average for five consecutive overlapping seasons. Because it moves surface heat into the ocean interior, La Nina years run cooler than the underlying trend.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "el-nino-la-nina-enso-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "climate-variability-and-teleconnections",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA Climate.gov — Oceanic Nino Index",
        url: "https://www.climate.gov/news-features/understanding-climate/climate-variability-oceanic-nino-index",
      },
      {
        label: "NOAA Climate.gov — El Nino and La Nina",
        url: "https://www.climate.gov/enso",
      },
    ],
    uncertaintyNote:
      "La Nina is not the absence of El Nino; both are excursions from a neutral state, and neutral conditions are themselves common.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "climate-variability",
    term: "Climate variability",
    shortDefinition:
      "Fluctuations arising from the internal dynamics of the coupled climate system rather than from an external change in forcing.",
    explanation:
      "Internal variability redistributes energy and moisture already present in the system; forced change alters the energy budget itself. Over a long enough record the two behave differently — internal modes oscillate around a stable mean, forced change does not. NOAA's Climate Prediction Center monitors ten Northern Hemisphere teleconnection patterns operationally, deriving monthly indices by rotated principal component analysis of height anomalies with values tabulated back to 1950.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "climate-variability-and-teleconnections",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "el-nino-la-nina-enso-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA CPC — teleconnection patterns",
        url: "https://www.cpc.ncep.noaa.gov/data/teledoc/telecontents.shtml",
      },
      {
        label: "NOAA Climate.gov — El Nino and La Nina",
        url: "https://www.climate.gov/enso",
      },
    ],
    uncertaintyNote:
      "For modes with multidecadal periods the observational record contains only two or three cycles, which is not enough to establish that the oscillation is real, stationary, or internally generated.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "teleconnection",
    term: "Teleconnection",
    shortDefinition:
      "A statistical linkage between climate anomalies in widely separated regions, produced by large-scale atmospheric wave propagation rather than local transport.",
    explanation:
      "Nothing physically travels between the linked regions. Anomalous tropical convection heats the atmosphere locally and generates large-scale waves that propagate poleward and eastward, shifting jet streams thousands of kilometres away. Because the waves are steered by the background flow, the same tropical anomaly produces different mid-latitude responses depending on season and jet state — which is why impact statements are shifts in probability rather than deterministic consequences.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "climate-variability-and-teleconnections",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "el-nino-la-nina-enso-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "NOAA CPC — teleconnection patterns",
        url: "https://www.cpc.ncep.noaa.gov/data/teledoc/telecontents.shtml",
      },
      {
        label: "NOAA Climate.gov — El Nino and La Nina",
        url: "https://www.climate.gov/enso",
      },
    ],
    uncertaintyNote:
      "Most named teleconnection patterns are the leading statistical modes of an atmospheric field rather than independently defined physical objects, so their exact definition depends on the analysis method and base period.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "earth-system-model",
    term: "Earth system model",
    shortDefinition:
      "A coupled climate model extended with interactive biogeochemistry, so that atmospheric composition is computed rather than prescribed.",
    explanation:
      "A physical climate model is given a carbon dioxide concentration; an Earth system model is given emissions and computes the concentration itself by simulating photosynthesis, respiration, soil decomposition, air-sea gas exchange, and ocean carbon chemistry. This makes carbon-cycle feedbacks emergent rather than assumed, and exposes the model to observational tests it was not tuned on. Models are compared under CMIP, whose sixth phase gathered output from 132 registered models across 48 institutions in 26 countries.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-models-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-predictability-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "WCRP — Coupled Model Intercomparison Project",
        url: "https://wcrp-cmip.org/",
      },
      {
        label: "IPCC AR6 WG1, Chapter 5",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      },
    ],
    uncertaintyNote:
      "Adding interactive biogeochemistry trades a prescribed quantity for a simulated one; the biological components carry substantially larger uncertainty than the physical ones.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "essential-climate-variable",
    term: "Essential Climate Variable",
    shortDefinition:
      "One of the 55 variables GCOS specifies as critical for characterising the climate system and feasible to observe globally on a sustained basis.",
    explanation:
      "GCOS selects Essential Climate Variables against three criteria: relevance to characterising the climate system, technical feasibility of global observation using proven methods, and cost effectiveness of generating and archiving the data. The 55 variables are organised across atmosphere, ocean, and land domains and ten subdomains. Standardising the list makes records comparable across agencies and decades, anchors model evaluation, and provides the justification for sustaining observing missions.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "essential-climate-variables-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "earth-system-models-explained",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "WMO GCOS — about Essential Climate Variables",
        url: "https://gcos.wmo.int/site/global-climate-observing-system-gcos/essential-climate-variables/about-essential-climate-variables",
      },
    ],
    uncertaintyNote:
      "The list is the intersection of what matters, what can currently be measured globally, and what can be afforded; variables of genuine importance are absent because they fail the feasibility or cost test, not because they are unimportant.",
    updatedDate: "2026-08-29",
  },
  {
    slug: "tipping-element",
    term: "Tipping element",
    shortDefinition:
      "A component of the Earth system susceptible to a critical threshold beyond which it reorganises, often abruptly or irreversibly.",
    explanation:
      "IPCC AR6 defines a tipping point as a critical threshold beyond which a system reorganises, and a tipping element as a component susceptible to one. It keeps three properties separate: abruptness (change over a few decades or less), irreversibility (recovery taking substantially longer than the timescale of interest), and the projected change itself. Its Table 4.10 assesses each proposed element individually, and the confidence levels range from high to low across them.",
    category: "ecology",
    subtopic: "earth-systems",
    relatedArticles: [
      {
        slug: "earth-system-tipping-points",
        category: "ecology",
        subtopic: "earth-systems",
      },
      {
        slug: "cryosphere-in-the-earth-system",
        category: "ecology",
        subtopic: "earth-systems",
      },
    ],
    relatedSources: [
      {
        label: "IPCC AR6 WG1, Chapter 4",
        url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/",
      },
    ],
    uncertaintyNote:
      "Abruptness and irreversibility are independent properties: AR6 assesses the Greenland ice sheet as irreversible for millennia but not abrupt, and Arctic summer sea ice as neither abrupt nor irreversible despite likely complete loss.",
    updatedDate: "2026-08-29",
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
