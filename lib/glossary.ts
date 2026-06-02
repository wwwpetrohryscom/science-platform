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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
      { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
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
