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
      url: "https://science.nasa.gov/climate-change/",
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
      // The site root now redirects to noaa.gov/climate, but every deep
      // path the corpus cites is still served here. Following the root
      // redirect would orphan those citations from the registry, so the
      // identity stays with climate.gov.
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
      name: "Climate Change Science",
      organization: "U.S. Environmental Protection Agency",
      url: "https://www.epa.gov/climatechange-science",
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
      url: "https://www.fao.org/home/en/",
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
      url: "https://research.fs.usda.gov/programs/fia",
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
      url: "https://science.nasa.gov/earth/earth-observatory/",
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
    // ---------- Biodiversity monitoring & ecosystem health ----------
    {
      name: "IUCN",
      organization: "International Union for Conservation of Nature",
      url: "https://www.iucn.org/",
      type: "primary",
      topicRelevance:
        "Authority on species extinction risk, protected-area governance, and ecosystem assessment (Red List, Green List, Red List of Ecosystems)",
      lastReviewed: "2026-06-02",
    },
    {
      name: "IUCN Red List of Threatened Species",
      organization: "International Union for Conservation of Nature",
      url: "https://www.iucnredlist.org/",
      type: "dataset",
      topicRelevance:
        "Global database of species extinction-risk assessments; the basis for the Red List Index",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Global Biodiversity Information Facility",
      organization: "GBIF",
      url: "https://www.gbif.org/",
      type: "dataset",
      topicRelevance:
        "Open aggregated species-occurrence records from museums, surveys, and citizen-science platforms",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Convention on Biological Diversity",
      organization: "CBD Secretariat (UN)",
      url: "https://www.cbd.int/",
      type: "primary",
      topicRelevance:
        "UN biodiversity treaty Secretariat; Kunming-Montreal Global Biodiversity Framework headline indicators and national reporting",
      lastReviewed: "2026-06-02",
    },
    {
      name: "FAO Biodiversity",
      organization: "Food and Agriculture Organization",
      url: "https://www.fao.org/biodiversity/en/",
      type: "report",
      topicRelevance:
        "Assessments of biodiversity for food and agriculture, forest genetic resources, soil biodiversity, and pollinators",
      lastReviewed: "2026-06-02",
    },
    {
      name: "GEO BON",
      organization:
        "Group on Earth Observations Biodiversity Observation Network",
      url: "https://geobon.org/",
      type: "primary",
      topicRelevance:
        "Coordinates the Essential Biodiversity Variables framework and national biodiversity monitoring under the Global Biodiversity Framework",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Living Planet Index",
      organization: "Zoological Society of London (ZSL)",
      url: "https://www.livingplanetindex.org/",
      type: "dataset",
      topicRelevance:
        "Vertebrate population-trend index database used as a CBD headline indicator of biodiversity abundance",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Protected Planet (World Database on Protected Areas)",
      organization: "UNEP-WCMC / IUCN",
      url: "https://www.protectedplanet.net/en",
      type: "dataset",
      topicRelevance:
        "Authoritative global dataset on protected areas and other effective area-based conservation measures (WDPA / WD-OECM)",
      lastReviewed: "2026-06-02",
    },
    {
      name: "ESA Observing the Earth",
      organization: "European Space Agency",
      url: "https://www.esa.int/Applications/Observing_the_Earth",
      type: "primary",
      topicRelevance:
        "Satellite Earth-observation missions (Sentinels, biomass and land-cover products) used for ecosystem-structure monitoring",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Copernicus Land Monitoring Service",
      organization: "European Commission / ECMWF",
      url: "https://land.copernicus.eu/",
      type: "dataset",
      topicRelevance:
        "Pan-European and global land-cover, vegetation-state, and habitat products used as ecosystem-structure indicators",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Proceedings of the National Academy of Sciences",
      organization: "PNAS / National Academy of Sciences",
      url: "https://www.pnas.org/",
      type: "peer-reviewed",
      topicRelevance:
        "Peer-reviewed literature on biodiversity, conservation biology, and ecosystem ecology",
      lastReviewed: "2026-06-02",
    },
    // ---------- Earth observation & remote sensing ----------
    {
      name: "NASA Earthdata",
      organization: "NASA",
      url: "https://www.earthdata.nasa.gov/",
      type: "dataset",
      topicRelevance:
        "Gateway to NASA Earth-science data archives, including land, atmosphere, ocean, and cryosphere products",
      lastReviewed: "2026-06-02",
    },
    {
      name: "NASA EOSDIS",
      organization: "NASA",
      url: "https://www.earthdata.nasa.gov/about/esdis/eosdis",
      type: "primary",
      topicRelevance:
        "Earth Observing System Data and Information System — distributed archives (DAACs) and data-product levels",
      lastReviewed: "2026-06-02",
    },
    {
      name: "USGS Landsat Missions",
      organization: "USGS",
      url: "https://www.usgs.gov/landsat-missions",
      type: "primary",
      topicRelevance:
        "Landsat program history, sensors, and the longest continuous satellite record of Earth's land surface (with NASA)",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Copernicus Programme",
      organization: "European Union / ESA",
      url: "https://www.copernicus.eu/en",
      type: "primary",
      topicRelevance:
        "EU Earth-observation programme coordinating the Sentinel satellites and the Copernicus services",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Copernicus Marine Service",
      organization: "Mercator Ocean International / European Commission",
      url: "https://marine.copernicus.eu/",
      type: "dataset",
      topicRelevance:
        "Operational ocean products — sea surface temperature, ocean colour, sea level, and sea ice",
      lastReviewed: "2026-06-02",
    },
    {
      name: "ECMWF",
      organization: "European Centre for Medium-Range Weather Forecasts",
      url: "https://www.ecmwf.int/",
      type: "primary",
      topicRelevance:
        "Operates the Copernicus Climate Change and Atmosphere Monitoring services; produces the ERA5 reanalysis",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Joint Research Centre",
      organization: "European Commission",
      url: "https://joint-research-centre.ec.europa.eu/",
      type: "primary",
      topicRelevance:
        "EC science service — forest, land-cover, fire (EFFIS), and drought (European Drought Observatory) monitoring",
      lastReviewed: "2026-06-02",
    },
    {
      name: "NOAA NESDIS",
      organization: "NOAA",
      url: "https://www.nesdis.noaa.gov/",
      type: "primary",
      topicRelevance:
        "Operates NOAA's environmental satellites (GOES, JPSS/VIIRS) and satellite data services",
      lastReviewed: "2026-06-02",
    },
    {
      name: "FAO GeoNetwork",
      organization: "Food and Agriculture Organization",
      url: "https://data.apps.fao.org/map/catalog/",
      type: "dataset",
      topicRelevance:
        "FAO geospatial data catalogue for land cover, forests, and agricultural land resources",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Remote Sensing (journal)",
      organization: "MDPI",
      url: "https://www.mdpi.com/journal/remotesensing",
      type: "peer-reviewed",
      topicRelevance:
        "Open-access peer-reviewed journal on remote-sensing methods, sensors, and applications",
      lastReviewed: "2026-06-02",
    },
    {
      name: "Earth System Science Data",
      organization: "Copernicus Publications / EGU",
      url: "https://earth-system-science-data.net/",
      type: "peer-reviewed",
      topicRelevance:
        "Peer-reviewed journal publishing original Earth-system reference datasets",
      lastReviewed: "2026-06-02",
    },
    {
      name: "AR6 Working Group I, Chapter 5: Global Carbon and Other Biogeochemical Cycles and Feedbacks",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
      type: "report",
      topicRelevance:
        "Assessed carbon and nitrogen cycle budgets, emissions partitioning, airborne fraction, and biogeochemical feedbacks",
      lastReviewed: "2026-08-29",
    },
    {
      name: "AR6 Working Group I, Chapter 7: The Earth's Energy Budget, Climate Feedbacks and Climate Sensitivity",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/",
      type: "report",
      topicRelevance:
        "Assessed energy inventory, Earth energy imbalance, and the individual and net climate feedback parameters",
      lastReviewed: "2026-08-29",
    },
    {
      name: "AR6 Working Group I, Chapter 8: Water Cycle Changes",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/",
      type: "report",
      topicRelevance:
        "Thermodynamic and energetic constraints on the global water cycle and its intensification",
      lastReviewed: "2026-08-29",
    },
    {
      name: "AR6 Working Group I, Chapter 4: Future Global Climate",
      organization: "IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/",
      type: "report",
      topicRelevance:
        "Cross-chapter assessment of proposed tipping elements, abrupt change, and irreversibility (Table 4.10)",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Global Climate Observing System",
      organization: "WMO / GCOS",
      url: "https://gcos.wmo.int/site/global-climate-observing-system-gcos",
      type: "primary",
      topicRelevance:
        "Definition and specification of the Essential Climate Variables and their observing requirements",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Coupled Model Intercomparison Project",
      organization: "World Climate Research Programme",
      url: "https://wcrp-cmip.org/",
      type: "primary",
      topicRelevance:
        "Coordination, experiment protocols, and data distribution for the international Earth-system model ensembles",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Water Science School",
      organization: "USGS",
      url: "https://www.usgs.gov/special-topics/water-science-school",
      type: "primary",
      topicRelevance:
        "Reference figures for global water storage, distribution between reservoirs, and water-cycle processes",
      lastReviewed: "2026-08-29",
    },
    {
      name: "National Ocean Service",
      organization: "NOAA",
      url: "https://oceanservice.noaa.gov/",
      type: "primary",
      topicRelevance:
        "Ocean circulation, the global conveyor belt, and the Atlantic Meridional Overturning Circulation",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Pacific Marine Environmental Laboratory",
      organization: "NOAA",
      url: "https://www.pmel.noaa.gov/",
      type: "primary",
      topicRelevance:
        "Tropical Pacific observing arrays and the physical mechanism of El Nino and La Nina",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Climate Prediction Center",
      organization: "NOAA",
      url: "https://www.cpc.ncep.noaa.gov/",
      type: "primary",
      topicRelevance:
        "Operational ENSO diagnostics, the Oceanic Nino Index, and monitoring of modes of variability",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Arctic Report Card",
      organization: "NOAA",
      url: "https://arctic.noaa.gov/report-card/",
      type: "report",
      topicRelevance:
        "Annual peer-reviewed synthesis of the state of the Arctic environment",
      lastReviewed: "2026-08-29",
    },
    {
      name: "Global Assessment and thematic assessments",
      organization: "IPBES",
      url: "https://www.ipbes.net/",
      type: "report",
      topicRelevance: "Biodiversity and ecosystem-service assessment; land degradation and pollinators",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UNESCO science and water programmes",
      organization: "UNESCO",
      url: "https://www.unesco.org/",
      type: "report",
      topicRelevance: "World Water Development Report, biosphere reserves, ocean science coordination",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Ocean Decade and IOC oceanography",
      organization: "IOC-UNESCO",
      url: "https://oceandecade.org/",
      type: "report",
      topicRelevance: "Coordinated ocean-observation and ocean-science programme documentation",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UN Convention to Combat Desertification",
      organization: "UNCCD",
      url: "https://www.unccd.int/",
      type: "report",
      topicRelevance: "Land degradation neutrality, drylands, and soil-condition reporting",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Ramsar Convention on Wetlands",
      organization: "Ramsar",
      url: "https://www.ramsar.org/",
      type: "report",
      topicRelevance: "Global Wetland Outlook and wetland extent and condition reporting",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Soil Partnership",
      organization: "FAO",
      url: "https://openknowledge.fao.org/",
      type: "report",
      topicRelevance: "Status of the World's Soil Resources and global soil data products",
      lastReviewed: "2026-09-02",
    },
    {
      name: "USDA Forest Service research",
      organization: "U.S. Department of Agriculture",
      url: "https://www.fs.usda.gov/",
      type: "primary",
      topicRelevance: "Forest inventory, disturbance, and forest-carbon methods",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Natural Resources Conservation Service soils",
      organization: "U.S. Department of Agriculture",
      url: "https://www.nrcs.usda.gov/",
      type: "primary",
      topicRelevance: "Soil taxonomy, soil survey, and soil-health measurement",
      lastReviewed: "2026-09-02",
    },
    {
      name: "USGS Water Resources",
      organization: "USGS",
      url: "https://waterdata.usgs.gov/",
      type: "dataset",
      topicRelevance: "Streamflow, groundwater, and water-quality observation records",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Water quality and drinking-water guidelines",
      organization: "WHO",
      url: "https://www.who.int/",
      type: "report",
      topicRelevance: "Air-quality and drinking-water guideline values and their evidence base",
      lastReviewed: "2026-09-02",
    },
    {
      name: "EPA water and air programmes",
      organization: "U.S. Environmental Protection Agency",
      url: "https://www.epa.gov/",
      type: "primary",
      topicRelevance: "National ambient air quality standards, water quality criteria, and monitoring networks",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Environment Outlook",
      organization: "UNEP",
      url: "https://www.unep.org/geo/",
      type: "report",
      topicRelevance: "Cross-cutting environmental state-and-trends assessment",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Forest Resources Assessment",
      organization: "FAO",
      url: "https://www.fao.org/forest-resources-assessment/",
      type: "report",
      topicRelevance: "National forest area, change, and definition conventions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "State of World Fisheries and Aquaculture",
      organization: "FAO",
      url: "https://www.fao.org/fishery/",
      type: "report",
      topicRelevance: "Stock status, catch statistics, and aquaculture production",
      lastReviewed: "2026-09-02",
    },
    {
      name: "International Council for the Exploration of the Sea",
      organization: "ICES",
      url: "https://www.ices.dk/Pages/default.aspx",
      type: "report",
      topicRelevance: "Fish stock assessments and marine ecosystem advice for the North Atlantic",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Ocean acidification and carbon observation",
      organization: "NOAA Ocean Acidification Program",
      url: "https://oceanacidification.noaa.gov/",
      type: "primary",
      topicRelevance: "Observed carbonate-chemistry change and its biological consequences",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Sea Level Change Portal",
      organization: "NASA",
      url: "https://sealevel.nasa.gov/",
      type: "dataset",
      topicRelevance: "Satellite altimeter global mean sea level record and its component budget",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Carbon Project budgets",
      organization: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      type: "dataset",
      topicRelevance: "Annual global carbon, methane, and nitrous-oxide budgets",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Ecological Society of America journals",
      organization: "Ecological Society of America",
      url: "https://esajournals.onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed ecology: Ecology, Ecological Applications, Frontiers in Ecology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "AGU journals",
      organization: "American Geophysical Union",
      url: "https://agupubs.onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed geophysics, hydrology, biogeosciences, and atmospheric science",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Royal Society journals",
      organization: "The Royal Society",
      url: "https://royalsocietypublishing.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed biological and physical sciences, including Philosophical Transactions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Annual Reviews",
      organization: "Annual Reviews",
      url: "https://www.annualreviews.org/",
      type: "peer-reviewed",
      topicRelevance: "Expert review articles synthesising evidence across ecology and environment",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Copernicus open-access journals",
      organization: "Copernicus Publications",
      url: "https://www.biogeosciences.net/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed biogeosciences, hydrology, and atmospheric chemistry",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Cochrane and systematic-review methodology",
      organization: "Cochrane",
      url: "https://www.cochranelibrary.com/",
      type: "peer-reviewed",
      topicRelevance: "Systematic-review methods used when weighing intervention evidence",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Met Office climate science",
      organization: "UK Met Office",
      url: "https://www.metoffice.gov.uk/",
      type: "primary",
      topicRelevance: "HadCRUT temperature record and UK climate assessment",
      lastReviewed: "2026-09-02",
    },
    {
      name: "British Geological Survey",
      organization: "BGS",
      url: "https://www.bgs.ac.uk/",
      type: "primary",
      topicRelevance: "Groundwater, geology, and land-surface process reference material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "European Commission environment policy science",
      organization: "European Commission",
      url: "https://environment.ec.europa.eu/",
      type: "primary",
      topicRelevance: "EU environmental legislation and its supporting scientific basis",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Protected areas and conservation evidence",
      organization: "Conservation Evidence",
      url: "https://www.conservationevidence.com/",
      type: "peer-reviewed",
      topicRelevance: "Systematic summaries of tested conservation interventions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Invasive Species Database",
      organization: "IUCN Invasive Species Specialist Group",
      url: "https://www.iucngisd.org/gisd/",
      type: "dataset",
      topicRelevance: "Documented invasive species records and impact summaries",
      lastReviewed: "2026-09-02",
    },
    {
      name: "PLOS journals",
      organization: "PLOS",
      url: "https://plos.org/our-journals/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed research across ecology and biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Nature Portfolio environment journals",
      organization: "Springer Nature",
      url: "https://www.nature.com/nclimate/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed climate, ecology, and sustainability research",
      lastReviewed: "2026-09-02",
    },
    {
      name: "DOI resolver",
      organization: "International DOI Foundation",
      url: "https://doi.org/",
      type: "peer-reviewed",
      topicRelevance: "Persistent identifier resolving to the publisher of record for a cited work",
      lastReviewed: "2026-09-02",
    },
    {
      name: "World Weather Attribution",
      organization: "World Weather Attribution",
      url: "https://www.worldweatherattribution.org/",
      type: "peer-reviewed",
      topicRelevance: "Rapid extreme-event attribution studies and their published methodology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ScienceDirect",
      organization: "Elsevier",
      url: "https://www.sciencedirect.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals across ecology, environmental science and physics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Oxford Academic",
      organization: "Oxford University Press",
      url: "https://academic.oup.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed society journals including BioScience and Conservation Physiology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "U.S. Fish and Wildlife Service",
      organization: "U.S. Department of the Interior",
      url: "https://www.fws.gov/",
      type: "primary",
      topicRelevance: "Endangered Species Act listings, recovery plans and species status assessments",
      lastReviewed: "2026-09-02",
    },
    {
      name: "National Academies of Sciences, Engineering, and Medicine",
      organization: "NASEM",
      url: "https://www.nationalacademies.org/",
      type: "report",
      topicRelevance: "Consensus study reports synthesising evidence for U.S. policy",
      lastReviewed: "2026-09-02",
    },
    {
      name: "JRC Publications Repository",
      organization: "European Commission Joint Research Centre",
      url: "https://publications.jrc.ec.europa.eu/",
      type: "report",
      topicRelevance: "EU technical and scientific reports underpinning environmental policy",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Protected Planet",
      organization: "UNEP-WCMC and IUCN",
      url: "https://protectedplanet.net/",
      type: "dataset",
      topicRelevance: "World Database on Protected Areas and its coverage reporting",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IUCN Library and portals",
      organization: "IUCN",
      url: "https://iucn.org/",
      type: "report",
      topicRelevance: "IUCN technical publications, guidelines and specialist-group outputs",
      lastReviewed: "2026-09-02",
    },
    {
      name: "NSF Public Access Repository",
      organization: "U.S. National Science Foundation",
      url: "https://par.nsf.gov/",
      type: "peer-reviewed",
      topicRelevance: "Accepted manuscripts of NSF-funded peer-reviewed research",
      lastReviewed: "2026-09-02",
    },
    {
      name: "White Rose Research Online",
      organization: "White Rose University Consortium",
      url: "https://eprints.whiterose.ac.uk/",
      type: "peer-reviewed",
      topicRelevance: "Institutional repository copies of peer-reviewed research; cite alongside the DOI where possible",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Kent Academic Repository",
      organization: "University of Kent",
      url: "https://kar.kent.ac.uk/",
      type: "peer-reviewed",
      topicRelevance: "Institutional repository copies of peer-reviewed research; cite alongside the DOI where possible",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Staatsbosbeheer",
      organization: "Netherlands State Forestry Service",
      url: "https://www.staatsbosbeheer.nl/",
      type: "primary",
      topicRelevance: "National land-management agency; primary record for Dutch reserve management case material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "PubMed Central",
      organization: "NCBI",
      url: "https://pmc.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
      topicRelevance: "Full-text archive of peer-reviewed literature, including ecology and environmental papers deposited under public-access mandates",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Copernicus Publications journals",
      organization: "Copernicus Publications",
      url: "https://copernicus.org/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed Earth-system journals: Biogeosciences, Earth System Dynamics, GMD, ACP, HESS",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Living Planet Report",
      organization: "WWF and Zoological Society of London",
      url: "https://www.wwf.org.uk/",
      type: "report",
      topicRelevance: "Publisher of record for the Living Planet Index; cited for the index's own method and figures, not as a general authority",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Biodiversity Indicators Partnership",
      organization: "UNEP-WCMC",
      url: "https://www.bipindicators.net/",
      type: "dataset",
      topicRelevance: "Indicator metadata and method statements for the CBD indicator suite",
      lastReviewed: "2026-09-02",
    },
    {
      name: "American Meteorological Society journals",
      organization: "AMS",
      url: "https://journals.ametsoc.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed atmospheric and climate science",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UN Framework Convention on Climate Change",
      organization: "UNFCCC",
      url: "https://unfccc.int/",
      type: "primary",
      topicRelevance: "National greenhouse-gas inventories, NDCs and the Paris Agreement reporting framework",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Stockholm Convention on Persistent Organic Pollutants",
      organization: "UNEP",
      url: "https://www.pops.int/",
      type: "report",
      topicRelevance: "Listing criteria, listed substances and national implementation reporting for POPs",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Stockholm Convention clearing house",
      organization: "UNEP",
      url: "https://chm.pops.int/",
      type: "dataset",
      topicRelevance: "Documents and decisions of the Conference of the Parties on POPs",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IPCC National Greenhouse Gas Inventories Programme",
      organization: "IPCC and IGES",
      url: "https://www.ipcc-nggip.iges.or.jp/",
      type: "report",
      topicRelevance: "The inventory guidelines national emissions accounting is built on",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UN Decade on Ecosystem Restoration",
      organization: "UNEP and FAO",
      url: "https://www.decadeonrestoration.org/",
      type: "report",
      topicRelevance: "Programme documentation and restoration monitoring guidance",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Forest Review",
      organization: "World Resources Institute",
      url: "https://gfr.wri.org/",
      type: "dataset",
      topicRelevance: "Satellite-derived forest cover, loss and gain analyses and their stated methods",
      lastReviewed: "2026-09-02",
    },
    {
      name: "EU Forest Observatory",
      organization: "European Commission Joint Research Centre",
      url: "https://forobs.jrc.ec.europa.eu/",
      type: "dataset",
      topicRelevance: "EU forest cover, disturbance and deforestation monitoring products",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ORNL Distributed Active Archive Center",
      organization: "NASA and Oak Ridge National Laboratory",
      url: "https://daac.ornl.gov/",
      type: "dataset",
      topicRelevance: "Archived biogeochemical and terrestrial ecology datasets with documented provenance. The root redirects into the NASA Earthdata centre listing; the DAAC's own dataset paths are still served here",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Argo programme",
      organization: "Argo International",
      url: "https://argo.ucsd.edu/",
      type: "dataset",
      topicRelevance: "Global profiling-float array for ocean temperature and salinity, and its documented coverage",
      lastReviewed: "2026-09-02",
    },
    {
      name: "AirNow",
      organization: "U.S. EPA and partners",
      url: "https://www.airnow.gov/",
      type: "dataset",
      topicRelevance: "Real-time U.S. air-quality index reporting and the concentration breakpoints behind it",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Frontiers journals",
      organization: "Frontiers Media",
      url: "https://www.frontiersin.org/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed ecology, environmental science and marine science",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IOPscience",
      organization: "IOP Publishing",
      url: "https://iopscience.iop.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed environmental and physical sciences, including Environmental Research Letters",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Wiley Online Library",
      organization: "Wiley",
      url: "https://onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals across ecology, geophysics and environmental science",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Verra registry and methodologies",
      organization: "Verra",
      url: "https://verra.org/",
      type: "primary",
      topicRelevance: "Primary document for what a voluntary carbon-crediting protocol requires. A commercial standards body, cited for its own rules and never as scientific authority",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Nature Watch (formerly Global Forest Watch)",
      organization: "World Resources Institute",
      url: "https://globalnaturewatch.org/",
      type: "dataset",
      topicRelevance: "Satellite tree-cover loss and gain analyses and the methodological notes that accompany them",
      lastReviewed: "2026-09-03",
    },
    {
      name: "Integrity Council for the Voluntary Carbon Market",
      organization: "ICVCM",
      url: "https://icvcm.org/",
      type: "report",
      topicRelevance: "Core Carbon Principles and methodology assessments. A governance body cited for the content of its own standard, never as scientific authority",
      lastReviewed: "2026-09-03",
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
    {
      name: "NCBI Taxonomy",
      organization: "NCBI",
      url: "https://www.ncbi.nlm.nih.gov/taxonomy",
      type: "dataset",
      topicRelevance: "Curated organism nomenclature and lineage used across sequence databases",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UniProt",
      organization: "UniProt Consortium",
      url: "https://www.uniprot.org/",
      type: "dataset",
      topicRelevance: "Curated protein sequence and functional annotation",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Protein Data Bank",
      organization: "RCSB PDB",
      url: "https://www.rcsb.org/",
      type: "dataset",
      topicRelevance: "Experimentally determined macromolecular structures",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Catalogue of Life",
      organization: "Catalogue of Life",
      url: "https://www.catalogueoflife.org/",
      type: "dataset",
      topicRelevance: "Consensus checklist of described species across kingdoms",
      lastReviewed: "2026-09-02",
    },
    {
      name: "World Flora Online",
      organization: "WFO",
      url: "https://www.worldfloraonline.org/",
      type: "dataset",
      topicRelevance: "Accepted plant names and synonymy",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Antimicrobial resistance surveillance",
      organization: "WHO",
      url: "https://www.who.int/health-topics/antimicrobial-resistance",
      type: "report",
      topicRelevance: "GLASS surveillance and the global AMR evidence base",
      lastReviewed: "2026-09-02",
    },
    {
      name: "National Human Genome Research Institute",
      organization: "NIH",
      url: "https://www.genome.gov/",
      type: "primary",
      topicRelevance: "Genomics reference material, glossary, and programme documentation",
      lastReviewed: "2026-09-02",
    },
    {
      name: "National Institute of Allergy and Infectious Diseases",
      organization: "NIH",
      url: "https://www.niaid.nih.gov/",
      type: "primary",
      topicRelevance: "Immunology and infectious-disease reference material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "BioRender-free structural and pathway references: KEGG",
      organization: "Kanehisa Laboratories",
      url: "https://www.kegg.jp/",
      type: "dataset",
      topicRelevance: "Curated metabolic and signalling pathway maps",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Gene Ontology",
      organization: "Gene Ontology Consortium",
      url: "https://geneontology.org/",
      type: "dataset",
      topicRelevance: "Controlled vocabulary for gene product function",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Royal Society biological sciences",
      organization: "The Royal Society",
      url: "https://royalsocietypublishing.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed organismal and evolutionary biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Annual Reviews life sciences",
      organization: "Annual Reviews",
      url: "https://www.annualreviews.org/",
      type: "peer-reviewed",
      topicRelevance: "Expert reviews in genetics, microbiology, and physiology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "PLOS Biology and PLOS Pathogens",
      organization: "PLOS",
      url: "https://plos.org/our-journals/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Nature Portfolio life-science journals",
      organization: "Springer Nature",
      url: "https://www.nature.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed genetics, microbiology, and cell biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Global Biodiversity Information Facility",
      organization: "GBIF",
      url: "https://www.gbif.org/",
      type: "dataset",
      topicRelevance: "Aggregated species occurrence records used in systematics and ecology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Cochrane Library",
      organization: "Cochrane",
      url: "https://www.cochranelibrary.com/",
      type: "peer-reviewed",
      topicRelevance: "Systematic reviews of biomedical interventions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "European Bioinformatics Institute",
      organization: "EMBL-EBI",
      url: "https://www.ebi.ac.uk/",
      type: "dataset",
      topicRelevance: "Sequence, structure, and expression archives plus training material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Centers for Disease Control and Prevention",
      organization: "CDC",
      url: "https://www.cdc.gov/",
      type: "primary",
      topicRelevance: "Public-health surveillance and infectious-disease reference material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "PubMed Central",
      organization: "NCBI",
      url: "https://pmc.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
      topicRelevance: "Full-text archive of peer-reviewed biomedical and life-science literature",
      lastReviewed: "2026-09-02",
    },
    {
      name: "DOI resolver",
      organization: "International DOI Foundation",
      url: "https://doi.org/",
      type: "peer-reviewed",
      topicRelevance: "Persistent identifier resolving to the publisher of record for a cited work",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ScienceDirect",
      organization: "Elsevier",
      url: "https://www.sciencedirect.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals across the life sciences",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Oxford Academic",
      organization: "Oxford University Press",
      url: "https://academic.oup.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals including Molecular Biology and Evolution and Systematic Biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Frontiers journals",
      organization: "Frontiers Media",
      url: "https://www.frontiersin.org/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed life-science journals",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Wiley Online Library",
      organization: "Wiley",
      url: "https://onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals across molecular, organismal and evolutionary biology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IOPscience",
      organization: "IOP Publishing",
      url: "https://iopscience.iop.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed biophysics and physical-biology journals",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Protein Structure Prediction Center (CASP)",
      organization: "University of California, Davis",
      url: "https://predictioncenter.org/",
      type: "dataset",
      topicRelevance: "Blind community assessment of protein structure prediction. Cited for independently assessed method performance, not for vendor claims",
      lastReviewed: "2026-09-03",
    },
  ],
  physics: [
    {
      name: "Solar Energy Technologies Office",
      organization: "U.S. Department of Energy",
      url: "https://www.energy.gov/cmei/systems/integrated-energy-systems-office",
      type: "primary",
    },
    {
      name: "Perovskite Solar Cells",
      organization: "U.S. National Renewable Energy Laboratory",
      url: "https://www.nlr.gov/pv/perovskite-solar-cells",
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
      name: "National Laboratory of the Rockies",
      organization: "U.S. National Renewable Energy Laboratory",
      url: "https://www.nlr.gov/",
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
      url: "https://science.nasa.gov/earth/earth-observatory/",
      type: "primary",
      topicRelevance:
        "Earth energy balance, atmospheric, and remote-sensing topic pages",
      lastReviewed: "2026-05-08",
    },
    {
      name: "NASA Climate",
      organization: "NASA",
      url: "https://science.nasa.gov/climate-change/",
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
      url: "https://www.noaa.gov/climate",
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
    {
      name: "NIST Reference on Constants, Units and Uncertainty",
      organization: "NIST",
      url: "https://www.nist.gov/pml",
      type: "primary",
      topicRelevance: "CODATA values, SI definitions, and uncertainty conventions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "SI Brochure",
      organization: "BIPM",
      url: "https://www.bipm.org/en/",
      type: "primary",
      topicRelevance: "Definitive definitions of the SI base and derived units",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Particle Data Group Review of Particle Physics",
      organization: "Particle Data Group",
      url: "https://pdg.lbl.gov/",
      type: "peer-reviewed",
      topicRelevance: "Evaluated particle properties and constants",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IAEA nuclear and radiation safety",
      organization: "IAEA",
      url: "https://www.iaea.org/",
      type: "report",
      topicRelevance: "Radiation protection standards, dosimetry, and nuclear technology reference",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ICRP radiological protection recommendations",
      organization: "ICRP",
      url: "https://www.icrp.org/",
      type: "report",
      topicRelevance: "Dose limits, weighting factors, and the radiation-protection framework",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UNSCEAR reports",
      organization: "UNSCEAR",
      url: "https://www.unscear.org/unscear/index.html",
      type: "report",
      topicRelevance: "Assessments of sources and effects of ionising radiation",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Energy Information Administration",
      organization: "U.S. EIA",
      url: "https://www.eia.gov/",
      type: "dataset",
      topicRelevance: "Energy production, consumption, and price statistics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "International Renewable Energy Agency",
      organization: "IRENA",
      url: "https://www.irena.org/",
      type: "report",
      topicRelevance: "Renewable capacity, cost, and deployment statistics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Office of Scientific and Technical Information",
      organization: "U.S. Department of Energy",
      url: "https://www.osti.gov/",
      type: "primary",
      topicRelevance: "DOE technical reports and national-laboratory research output",
      lastReviewed: "2026-09-02",
    },
    {
      name: "American Meteorological Society journals",
      organization: "AMS",
      url: "https://journals.ametsoc.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed atmospheric physics, radiative transfer, and dynamics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "AGU geophysics journals",
      organization: "American Geophysical Union",
      url: "https://agupubs.onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed geophysics, atmospheric, and space physics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Royal Society physical sciences",
      organization: "The Royal Society",
      url: "https://royalsocietypublishing.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed physics and applied mathematics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Annual Reviews physical sciences",
      organization: "Annual Reviews",
      url: "https://www.annualreviews.org/",
      type: "peer-reviewed",
      topicRelevance: "Expert reviews in condensed matter, nuclear, and fluid physics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Copernicus atmospheric-science journals",
      organization: "Copernicus Publications",
      url: "https://acp.copernicus.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed atmospheric chemistry and physics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ECMWF reanalysis and NWP documentation",
      organization: "ECMWF",
      url: "https://www.ecmwf.int/",
      type: "primary",
      topicRelevance: "Reanalysis products and numerical weather prediction methodology",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Met Office observations and physics",
      organization: "UK Met Office",
      url: "https://www.metoffice.gov.uk/",
      type: "primary",
      topicRelevance: "Atmospheric observation and modelling reference material",
      lastReviewed: "2026-09-02",
    },
    {
      name: "USGS geophysics and hazards",
      organization: "USGS",
      url: "https://www.usgs.gov/",
      type: "primary",
      topicRelevance: "Seismology, geomagnetism, and Earth-interior reference data",
      lastReviewed: "2026-09-02",
    },
    {
      name: "NASA Goddard Institute for Space Studies",
      organization: "NASA",
      url: "https://www.giss.nasa.gov/",
      type: "primary",
      topicRelevance: "Radiative transfer, climate modelling, and surface temperature analysis",
      lastReviewed: "2026-09-02",
    },
    {
      name: "DOI resolver",
      organization: "International DOI Foundation",
      url: "https://doi.org/",
      type: "peer-reviewed",
      topicRelevance: "Persistent identifier resolving to the publisher of record for a cited work",
      lastReviewed: "2026-09-02",
    },
    {
      name: "ScienceDirect",
      organization: "Elsevier",
      url: "https://www.sciencedirect.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed journals across physics, energy and materials",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Oxford Academic",
      organization: "Oxford University Press",
      url: "https://academic.oup.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed physics and geophysics journals",
      lastReviewed: "2026-09-02",
    },
    {
      name: "National Academies of Sciences, Engineering, and Medicine",
      organization: "NASEM",
      url: "https://www.nationalacademies.org/",
      type: "report",
      topicRelevance: "Consensus study reports on energy, nuclear and materials questions",
      lastReviewed: "2026-09-02",
    },
    {
      name: "NSF Public Access Repository",
      organization: "U.S. National Science Foundation",
      url: "https://par.nsf.gov/",
      type: "peer-reviewed",
      topicRelevance: "Accepted manuscripts of NSF-funded peer-reviewed research",
      lastReviewed: "2026-09-02",
    },
    {
      name: "PubMed Central",
      organization: "NCBI",
      url: "https://pmc.ncbi.nlm.nih.gov/",
      type: "peer-reviewed",
      topicRelevance: "Full-text archive of peer-reviewed literature, including ecology and environmental papers deposited under public-access mandates",
      lastReviewed: "2026-09-02",
    },
    {
      name: "IOPscience",
      organization: "IOP Publishing",
      url: "https://iopscience.iop.org/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed physics journals including Environmental Research Letters and Reports on Progress in Physics",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Wiley Online Library",
      organization: "Wiley",
      url: "https://onlinelibrary.wiley.com/",
      type: "peer-reviewed",
      topicRelevance: "Peer-reviewed geophysics, atmospheric physics and materials journals",
      lastReviewed: "2026-09-02",
    },
    {
      name: "Frontiers journals",
      organization: "Frontiers Media",
      url: "https://www.frontiersin.org/",
      type: "peer-reviewed",
      topicRelevance: "Open-access peer-reviewed physics and energy research",
      lastReviewed: "2026-09-02",
    },
    {
      name: "UN Framework Convention on Climate Change",
      organization: "UNFCCC",
      url: "https://unfccc.int/",
      type: "primary",
      topicRelevance: "Energy and emissions reporting framework referenced by transition analyses",
      lastReviewed: "2026-09-02",
    },
    {
      name: "EUROfusion",
      organization: "EUROfusion consortium",
      url: "https://euro-fusion.org/",
      type: "primary",
      topicRelevance: "European fusion research programme; plasma conditions, triple product and JET results",
      lastReviewed: "2026-09-03",
    },
    {
      name: "ITER Organization",
      organization: "ITER",
      url: "https://www.iter.org/",
      type: "primary",
      topicRelevance: "Design goals, machine parameters and tritium-breeding programme of the international fusion experiment",
      lastReviewed: "2026-09-03",
    },
    {
      name: "Lawrence Livermore National Laboratory",
      organization: "U.S. Department of Energy",
      url: "https://www.llnl.gov/",
      type: "primary",
      topicRelevance: "National Ignition Facility results and inertial-confinement fusion research",
      lastReviewed: "2026-09-03",
    },
    {
      name: "National Ignition Facility",
      organization: "Lawrence Livermore National Laboratory",
      url: "https://lasers.llnl.gov/",
      type: "primary",
      topicRelevance: "Inertial-confinement fusion facility description and experimental results",
      lastReviewed: "2026-09-03",
    },
    {
      name: "Nobel Prize in Physics",
      organization: "Nobel Foundation",
      url: "https://www.nobelprize.org/",
      type: "report",
      topicRelevance: "Citations for awarded discoveries, used as a dated record of what was established and when",
      lastReviewed: "2026-09-03",
    },
    {
      name: "Chandra X-ray Observatory",
      organization: "NASA / Smithsonian Astrophysical Observatory",
      url: "https://chandra.harvard.edu/",
      type: "dataset",
      topicRelevance: "X-ray astronomy mission documentation; cited for instrument and waveband facts, not for physics claims",
      lastReviewed: "2026-09-03",
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

/**
 * Hostname, lowercased, with a leading `www.` removed.
 *
 * The suffix match below asks "is this citation from a registered
 * organization", but it was comparing raw hostnames, so a registry entry
 * written as `www.iucn.org` failed to match a citation of `iucn.org` or
 * `portals.iucn.org`, and `www.ncbi.nlm.nih.gov` failed to match
 * `pmc.ncbi.nlm.nih.gov`. Those are the same organization by any reading;
 * the rule was checking the form of the string rather than the thing it
 * was supposed to identify. Normalising both sides fixes the whole class.
 */
function safeHost(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
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
