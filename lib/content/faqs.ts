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
        "Roughly 90% of the energy added by greenhouse-gas forcing is taken up by the ocean — IPCC AR6 assesses 91% of the total change in the global energy inventory. ENSO-driven year-to-year variability redistributes heat between ocean layers and the atmosphere — it does not change the total ocean heat content much — so the OHC trend is closer to the underlying forcing trend.",
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
    {
      question: "How is biodiversity measured?",
      answer:
        "Across several dimensions rather than by one number: species counts and diversity indices from field surveys, population trends, extinction-risk assessments, and habitat extent and condition. The Essential Biodiversity Variables framework, coordinated by GEO BON, organises these into comparable classes, and IPBES and the Convention on Biological Diversity report several indicators side by side.",
    },
    {
      question: "What is a biodiversity indicator?",
      answer:
        "A measurement that distils one dimension of biodiversity change into a trackable signal, much like a climate indicator. The Convention on Biological Diversity's headline indicators include the IUCN Red List Index (extinction risk), the Living Planet Index (population abundance), and habitat-extent metrics. Because no single indicator captures biodiversity, they are read together rather than collapsed into one figure.",
    },
    {
      question: "What is species richness?",
      answer:
        "Species richness is the number of distinct species in a defined area. It is the easiest biodiversity measure to compute, but it rises with sampling effort and area and ignores how abundant each species is. Ecologists use rarefaction and estimators to compare samples and pair richness with evenness and diversity indices, as IPBES assessments emphasise.",
    },
    {
      question: "How do scientists assess ecosystem health?",
      answer:
        "There is no single test. Scientists combine ecological-integrity indices such as the Biodiversity Intactness Index, measures of habitat condition and fragmentation, and resilience proxies like functional and response diversity. These map onto the ecosystem-structure and ecosystem-function classes of the Essential Biodiversity Variables. Each needs a reference condition, and IPBES treats the choice of baseline as a key caveat.",
    },
    {
      question: "What is the Red List Index?",
      answer:
        "The Red List Index tracks the overall trend in extinction risk for a group of species using repeated IUCN Red List assessments. It is scaled so that 1 means all species are Least Concern and 0 means all are extinct, and counts only genuine status changes. It is a Convention on Biological Diversity headline indicator, available for comprehensively assessed groups such as birds, mammals, and amphibians.",
    },
    {
      question: "What is the Living Planet Index?",
      answer:
        "Compiled by the Zoological Society of London with WWF, it tracks the average relative change in monitored vertebrate populations since 1970. It is an index of abundance, not a count of animals or a percentage of species lost — a frequent misreading. Because it averages relative changes, a small number of steep declines can dominate the trend, which peer-reviewed analyses examine closely.",
    },
    {
      question: "Can satellites monitor biodiversity?",
      answer:
        "Satellites cannot identify most species, but they measure ecosystem structure — land cover, forest extent, vegetation state, and canopy structure — consistently and globally. Products from NASA, the European Space Agency, and the Copernicus Land Monitoring Service supply this layer, and GEO BON defines remote-sensing-enabled Essential Biodiversity Variables. Species-level conclusions still require ground data for calibration.",
    },
    {
      question: "How is habitat fragmentation measured?",
      answer:
        "Fragmentation — the breaking of continuous habitat into smaller, more isolated patches — is quantified with landscape metrics such as patch size, edge density, core area, and connectivity, usually computed from satellite land-cover maps. It is distinct from habitat loss, and whether fragmentation itself harms biodiversity independently of habitat amount remains an active debate in the peer-reviewed literature.",
    },
  ],
  [subtopicKey("ecology", "earth-systems")]: [
    {
      question: "What is Earth system science?",
      answer:
        "It studies the planet as a set of coupled components — atmosphere, hydrosphere, cryosphere, biosphere, and geosphere — exchanging energy and matter. Its defining move is to treat the exchanges between components as the object of study rather than as boundary conditions on a single discipline.",
    },
    {
      question: "What are the main components of the Earth system?",
      answer:
        "Conventionally five: the atmosphere, the hydrosphere, the cryosphere, the biosphere, and the lithosphere or geosphere. The division is a bookkeeping convention rather than a physical boundary — soil moisture, sea ice, and vegetation each belong to more than one at once. What makes it useful is that each has a characteristic response time, and those times differ by many orders of magnitude.",
    },
    {
      question: "What is a biogeochemical cycle?",
      answer:
        "The movement of a chemical element between reservoirs by biological, geological, and chemical processes. Three quantities define one: reservoir sizes, fluxes between them, and residence time, which is reservoir size divided by outgoing flux. The same grammar describes carbon, water, nitrogen, phosphorus, and sulphur, which is what makes cycles of very different speeds comparable.",
    },
    {
      question: "What is a climate feedback?",
      answer:
        "A process that changes Earth's energy budget in response to the temperature change a forcing produced, measured in watts per square metre per degree Celsius. IPCC AR6 assesses the net feedback parameter at −1.16 W m⁻² °C⁻¹, with a very likely range of −1.81 to −0.51 against a baseline Planck response of −3.22.",
    },
    {
      question: "What is the difference between a positive and a negative feedback?",
      answer:
        "A positive feedback amplifies the initial change; a negative one damps it. The sign convention on the feedback parameter is the reverse of intuition: negative parameter values are stabilising, because the parameter measures how strongly the planet increases its radiation to space per degree of warming. Earth's net parameter is negative, which is why warming settles at a finite level rather than running away.",
    },
    {
      question: "Which climate feedback is the strongest?",
      answer:
        "The combined water-vapour and lapse-rate feedback, which IPCC AR6 assesses at +1.30 W m⁻² °C⁻¹ (very likely 1.1 to 1.5). Surface albedo is +0.35 and clouds +0.42. Clouds contribute the most uncertainty, with a very likely range from −0.10 to +0.94, even though their central estimate is comparable to that of albedo.",
    },
    {
      question: "How does the carbon cycle affect climate?",
      answer:
        "It determines how much of each tonne emitted stays in the air. IPCC AR6 assesses that over 2010–2019, 46 per cent of anthropogenic CO₂ emissions accumulated in the atmosphere, 23 per cent went into the ocean, and 31 per cent into land vegetation. The airborne fraction has held near 44 per cent for six decades, but that reflects sinks growing alongside emissions rather than any fixed property.",
    },
    {
      question: "What is ENSO?",
      answer:
        "The El Niño–Southern Oscillation, a coupled ocean–atmosphere oscillation in the tropical Pacific that shifts irregularly every two to seven years. NOAA classifies events using the Oceanic Niño Index — a running three-month sea-surface temperature anomaly in the Niño 3.4 region (5°N–5°S, 120°W–170°W) — requiring ±0.5 °C sustained across five consecutive overlapping seasons.",
    },
    {
      question: "How does the cryosphere influence climate?",
      answer:
        "Through four separate channels: reflectivity, since NSIDC reports bare sea ice reflects 40–60 per cent of sunlight and snow up to 90 per cent; sea level, through land-ice mass loss; ocean density, since freezing rejects salt and melting adds fresh water, pushing the overturning circulation in opposite directions; and the carbon cycle, through permafrost thaw.",
    },
    {
      question: "What is an Earth system model?",
      answer:
        "A coupled climate model extended with interactive biogeochemistry. A physical climate model is given an atmospheric CO₂ concentration; an Earth system model is given emissions and computes the concentration itself. That makes carbon-cycle feedbacks emergent rather than assumed, and imports the larger uncertainty of the biological components.",
    },
    {
      question: "Why are Earth system predictions uncertain?",
      answer:
        "Because forecasts and projections are different problems. Detailed weather prediction is limited to roughly two weeks by sensitivity to initial conditions. Century-scale projection does not depend on initial conditions at all; its spread comes from which emissions pathway is followed, from disagreement between models about feedback strength, and from internal variability.",
    },
    {
      question: "How do scientists decide what to observe?",
      answer:
        "Through the Essential Climate Variables. GCOS currently specifies 55 of them across the atmosphere, ocean, and land domains, selected against three criteria: relevance to characterising the climate system, technical feasibility of sustained global observation, and cost effectiveness. The list is the intersection of what matters, what can be measured, and what can be afforded.",
    },
  ],
  [subtopicKey("ecology", "earth-observation")]: [
    {
      question: "What is remote sensing?",
      answer:
        "Remote sensing is measuring a surface from a distance by recording the electromagnetic radiation it reflects or emits. Passive sensors record reflected sunlight or emitted heat; active sensors such as radar and lidar supply their own energy. Satellites carrying these sensors, operated by agencies such as NASA, the USGS, and ESA, turn that radiation into maps of land cover, vegetation, temperature, and more.",
    },
    {
      question: "How do satellites monitor Earth?",
      answer:
        "They carry sensors that record radiation in defined wavelength bands as a grid of pixels, then process it into physical measurements such as surface reflectance or temperature. A fleet with complementary strengths — the NASA–USGS Landsat satellites, ESA's Copernicus Sentinels, and NASA's MODIS — trades spatial detail against how often each place is revisited. Results are calibrated and validated against ground data.",
    },
    {
      question: "What is NDVI?",
      answer:
        "NDVI, the Normalised Difference Vegetation Index, is (NIR − Red) / (NIR + Red), ranging from −1 to +1. It uses the fact that healthy vegetation absorbs red light and reflects near-infrared. Dense green vegetation gives high values (about 0.6–0.9), bare soil low values, and water near zero or negative. NASA and the USGS document its use for vegetation condition, drought, and crops.",
    },
    {
      question: "How does Landsat work?",
      answer:
        "Landsat is a joint NASA–USGS program that has imaged the land surface since 1972 — the longest continuous record. Its sensors record multispectral imagery at about 30-metre resolution, revisiting each location every 16 days. Since 2008 the USGS has made the full archive free, enabling long time-series studies of land cover, agriculture, forests, and water.",
    },
    {
      question: "What are Sentinel satellites?",
      answer:
        "The Sentinels are the satellite fleet of the European Union's Copernicus programme, built and operated by ESA. Each family specialises: Sentinel-1 (radar), Sentinel-2 (multispectral optical, about a 5-day revisit), Sentinel-3 (ocean and land), Sentinel-5P (atmosphere), and Sentinel-6 (sea level). Their data are free and open, underpinning the Copernicus monitoring services.",
    },
    {
      question: "How is deforestation detected from space?",
      answer:
        "By comparing satellite images of the same place over time and identifying where forest canopy is lost. Periodic assessments such as the FAO Global Forest Resources Assessment produce consistent statistics, while near-real-time alerts from frequent Landsat and Sentinel imagery flag recent clearing. The European Commission's Joint Research Centre and NASA provide global forest-change products, validated against finer imagery.",
    },
    {
      question: "How accurate are satellite observations?",
      answer:
        "It depends on the product, and reputable providers report the uncertainty. Accuracy is established by ground-truthing — comparing satellite estimates against field data or higher-resolution imagery — and classification products are published with accuracy assessments. Cloud cover, mixed pixels, atmospheric effects, and sensor drift all introduce error, so satellite data are treated as calibrated estimates, not exact values.",
    },
    {
      question: "What are the limitations of remote sensing?",
      answer:
        "Satellites measure physical and spectral properties, not the quantities themselves, so the link to vegetation, fire, or phytoplankton is a model that needs validation. A sensor cannot maximise spatial, spectral, and temporal resolution at once; clouds block optical sensors; pixels mix surface types; and instruments drift, so long records need cross-calibration. The archive also cannot describe conditions before the satellites existed.",
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
