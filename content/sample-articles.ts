import type {
  Article,
  Author,
  Discussion,
  Insight,
} from "@/lib/content";

/**
 * Sample content seed.
 *
 * Treat this file as a staging dataset that mimics the eventual CMS
 * payload shape. When the CMS is wired up (see `lib/content.ts`),
 * delete this file and remove the import — types stay the same.
 *
 * IMPORTANT: every entry MUST carry `updatedDate`. This is the signal
 * search engines and answer engines use to schedule re-indexing.
 */

const authors = {
  vega: {
    name: "Dr. Helena Vega",
    title: "Senior Ecologist, Institute for Climate Systems",
    bio: "Helena studies forest carbon dynamics across temperate and boreal biomes, with twelve years of field-station experience.",
    url: "https://example.org/people/helena-vega",
  },
  iwasaki: {
    name: "Dr. Ren Iwasaki",
    title: "Marine Biologist, Pacific Reef Lab",
    bio: "Ren leads long-term monitoring of coral microbiomes and their role in bleaching resistance.",
  },
  brandt: {
    name: "Dr. Mira Brandt",
    title: "Computational Biologist, EMBL Affiliate",
    bio: "Mira works at the intersection of single-cell sequencing and evolutionary developmental biology.",
  },
  okafor: {
    name: "Prof. Daniel Okafor",
    title: "Applied Physicist, Photovoltaics Group",
    bio: "Daniel develops next-generation perovskite stacks with a focus on long-term stability under field conditions.",
  },
  laurent: {
    name: "Dr. Sofia Laurent",
    title: "Soil Scientist, Agro-ecology Network",
    bio: "Sofia studies microbial nitrogen cycling in regenerative cropping systems.",
  },
} satisfies Record<string, Author>;

export const articles: Article[] = [
  {
    title:
      "How temperate forests are quietly losing their carbon sink capacity",
    slug: "temperate-forest-carbon-sink-decline",
    category: "ecology",
    type: "seo",
    excerpt:
      "A multi-decade synthesis suggests temperate forests may absorb 15–30% less carbon by 2050 than current models assume — driven by drought stress, pest expansion, and shifting growth seasons.",
    publishedDate: "2026-02-12",
    updatedDate: "2026-04-20",
    readingTime: 9,
    tags: ["carbon", "forests", "climate", "modelling"],
    related: [
      "soil-microbiome-regenerative-agriculture",
      "coral-microbiome-bleaching-resistance",
    ],
    author: authors.vega,
    content: [
      {
        id: "what-the-data-shows",
        heading: "What the long-term plots show",
        body: "Forest inventory plots in Europe and North America have tracked aboveground carbon storage for decades. When the most recent measurement cycles are aligned and re-analyzed under a consistent allometric model, a striking pattern emerges: the rate of carbon accumulation is decelerating, and not uniformly. Stands that historically gained the most biomass per hectare per year are now the ones decelerating fastest.\n\nThis is not yet visible in coarse satellite indices because canopy greenness can persist even as net primary productivity declines. The signal lives in the wood, not in the leaves.",
      },
      {
        id: "drivers",
        heading: "Three reinforcing drivers",
        body: "First, drought frequency in continental interiors has increased the share of years where stomatal closure limits photosynthesis. Second, range expansion of bark beetles and defoliating insects has shortened the recovery window between disturbance events. Third, warming has lengthened the growing season at the leaf level — but soil moisture has not kept pace, so the marginal day adds little carbon.\n\nIndividually, each driver has been reported. The novel finding is that they reinforce each other: a drought-weakened tree is a more attractive host for beetles, and a defoliated stand transpires less, locally raising air temperature and worsening drought.",
      },
      {
        id: "why-models-miss",
        heading: "Why the standard models miss this",
        body: "Most coupled climate-vegetation models treat disturbance as a stochastic background process rather than a state variable that interacts with the climate. They also calibrate growth response curves on the same historical period in which the carbon sink was strengthening — so they project that strength forward.\n\nA new generation of models is starting to incorporate disturbance feedbacks explicitly, with promising early results.",
      },
      {
        id: "what-this-means",
        heading: "What this means for policy",
        body: "If the temperate sink is weaker than assumed, the implicit carbon budget compatible with 1.5°C narrows further. Land-use commitments that depend on forest sequestration as a hedge become more fragile, and the case for accelerating direct emissions reductions strengthens.",
      },
    ],
    faq: [
      {
        question: "Are tropical forests showing the same trend?",
        answer:
          "Tropical primary forests are a separate story — the dominant signal there is still deforestation rather than physiological decline. Where intact tropical forests have been measured, productivity changes are smaller and more heterogeneous than in temperate systems.",
      },
      {
        question: "Can replanting offset the decline?",
        answer:
          "Replanting helps locally but does not substitute for an intact mature stand on the timescale of climate policy. Young stands store carbon slowly and are more vulnerable to drought and fire during establishment.",
      },
      {
        question: "How confident is this finding?",
        answer:
          "The deceleration signal is robust across independent inventory networks, but the projection to 2050 depends on assumptions about the persistence of current drought patterns. The 15–30% range reflects that uncertainty.",
      },
    ],
  },

  {
    title: "Coral microbiomes and the second mechanism of bleaching resistance",
    slug: "coral-microbiome-bleaching-resistance",
    category: "biology",
    type: "expert",
    excerpt:
      "Beyond Symbiodinium shuffling, the bacterial community surrounding coral tissue appears to mediate heat tolerance — and it can be partially seeded.",
    publishedDate: "2026-01-30",
    updatedDate: "2026-04-12",
    readingTime: 11,
    tags: ["coral", "microbiome", "marine biology", "bleaching"],
    related: [
      "temperate-forest-carbon-sink-decline",
      "single-cell-evo-devo",
    ],
    author: authors.iwasaki,
    content: [
      {
        id: "background",
        heading: "Background: bleaching is not a single event",
        body: "Coral bleaching is commonly described as the expulsion of photosynthetic algal symbionts (Symbiodinium and related genera) under heat stress. That description is correct but incomplete. Reefs in the same thermal regime bleach at strikingly different rates, and the variation is not fully explained by symbiont type.",
      },
      {
        id: "the-bacterial-layer",
        heading: "The bacterial layer",
        body: "Coral surface mucus hosts a dense bacterial community that turns out to vary with thermal history. Colonies from sites that have experienced repeated mild heat stress carry distinctive consortia rich in genera implicated in oxidative-stress buffering.\n\nWhen those bacterial consortia are transplanted onto naive colonies in controlled aquaria, the recipients show measurable improvements in symbiont retention under heat challenge. The effect is partial — perhaps 20% of the variance — but reproducible.",
      },
      {
        id: "implications-for-restoration",
        heading: "Implications for restoration",
        body: "Reef restoration has historically focused on coral fragments and, more recently, on selectively-bred heat-tolerant lineages. Microbiome-assisted restoration would add a third lever: priming outplanted fragments with a curated bacterial community before deployment.\n\nThis is not without risk. Introducing non-native consortia into wild ecosystems is the kind of intervention that demands careful trial design and reversibility planning.",
      },
      {
        id: "open-questions",
        heading: "Open questions",
        body: "How long do introduced consortia persist? How do they interact with existing bacterial diversity at the recipient site? And critically, can the protective effect be obtained from native consortia already present at the recipient reef, sparing the need for translocation?",
      },
    ],
    faq: [
      {
        question: "Does this replace the need to address ocean warming?",
        answer:
          "No. Microbiome priming raises the thermal threshold modestly. It is a buffer, not a substitute for emissions reductions.",
      },
      {
        question: "Is this approach being trialed in the wild?",
        answer:
          "Small-scale field trials have begun in the Caribbean and on the Great Barrier Reef. Results are early; ecological impact assessments are still in progress.",
      },
    ],
  },

  {
    title: "Single-cell sequencing is rewriting evolutionary developmental biology",
    slug: "single-cell-evo-devo",
    category: "biology",
    type: "expert",
    excerpt:
      "Cell-type atlases across species are revealing that the conserved unit of evolution may be the cell type, not the gene network.",
    publishedDate: "2026-02-02",
    updatedDate: "2026-04-18",
    readingTime: 8,
    tags: ["evo-devo", "single-cell", "transcriptomics"],
    related: ["coral-microbiome-bleaching-resistance"],
    author: authors.brandt,
    content: [
      {
        id: "the-shift",
        heading: "The shift in unit of analysis",
        body: "For decades, evolutionary developmental biology asked how gene networks are conserved or modified across species to produce homologous structures. Single-cell transcriptomics changes the resolution of that question. Instead of comparing networks in tissues, we now compare entire transcriptional identities of individual cells.",
      },
      {
        id: "homology-at-cell-level",
        heading: "Homology at the cell level",
        body: "When cell-type atlases of distantly related animals are aligned by shared regulatory programs, clear correspondences emerge — even between cell populations that occupy non-homologous tissues. A class of secretory cell can persist as a coherent transcriptional identity across hundreds of millions of years, while the organ around it is reinvented.",
      },
      {
        id: "method-caveats",
        heading: "Method caveats",
        body: "Cross-species transcriptome alignment is hard. Differential gene expression depends sensitively on capture efficiency, normalization, and ortholog assignment. The strongest claims survive across multiple integration methods; the weakest are integration artefacts.",
      },
    ],
  },

  {
    title:
      "Field-stable perovskite stacks: closing the gap between lab efficiency and outdoor reality",
    slug: "perovskite-stack-field-stability",
    category: "physics",
    type: "expert",
    excerpt:
      "Encapsulation and ion-migration suppression have moved perovskite tandem cells from a 200-hour curiosity to thousands of hours of measured outdoor performance.",
    publishedDate: "2026-02-21",
    updatedDate: "2026-04-25",
    readingTime: 10,
    tags: ["photovoltaics", "perovskite", "energy", "materials"],
    related: ["temperate-forest-carbon-sink-decline"],
    author: authors.okafor,
    content: [
      {
        id: "why-stability-mattered",
        heading: "Why field stability was the bottleneck",
        body: "Perovskite single-junction cells achieved silicon-comparable lab efficiencies years ago, but any honest assessment of the technology had to confront the field-stability gap. Cells degraded under realistic combinations of moisture, UV, and thermal cycling far faster than they did in controlled chambers.",
      },
      {
        id: "what-changed",
        heading: "What changed",
        body: "Three shifts: better encapsulation chemistries that block both moisture and oxygen ingress, additive engineering that suppresses ion migration at grain boundaries, and tandem architectures that distribute thermal load across two absorber layers.\n\nMeasured outdoor performance now extends past several thousand hours with predictable degradation curves — close to commercial viability for specific deployment scenarios.",
      },
      {
        id: "remaining-work",
        heading: "What remains",
        body: "Lead handling at end-of-life remains the largest open issue. Recycling streams designed for silicon panels do not capture lead leachate from damaged perovskite layers. Several research groups are now working on lead-sequestering encapsulants and closed-loop recycling protocols.",
      },
    ],
    faq: [
      {
        question: "Are these cells ready for rooftop deployment?",
        answer:
          "Not at consumer scale. Pilot deployments in commercial and utility settings are under way, where instrumentation can verify the lab-to-field translation.",
      },
      {
        question: "What efficiency are field-deployed cells reaching?",
        answer:
          "Tandem perovskite-silicon prototypes are reporting field efficiencies in the high twenties percent range, compared to about twenty-two percent for premium silicon.",
      },
    ],
  },

  {
    title:
      "The soil microbiome is the missing variable in regenerative agriculture trials",
    slug: "soil-microbiome-regenerative-agriculture",
    category: "ecology",
    type: "seo",
    excerpt:
      "Why two farms with identical practices produce different yields — and what that tells us about the next generation of soil-health metrics.",
    publishedDate: "2026-03-04",
    updatedDate: "2026-04-22",
    readingTime: 7,
    tags: ["soil", "agriculture", "microbiome", "nitrogen"],
    related: ["temperate-forest-carbon-sink-decline"],
    author: authors.laurent,
    content: [
      {
        id: "the-puzzle",
        heading: "The puzzle of replication failure",
        body: "Regenerative agriculture trials often fail to replicate across sites, even when soil texture, climate, and management are matched. The variance is not noise — it tracks something real, and increasingly, the leading suspect is the resident microbial community.",
      },
      {
        id: "what-microbes-do",
        heading: "What soil microbes are doing",
        body: "Microbes mediate nitrogen mineralization rates, phosphorus availability, and the rhizosphere environment that determines how plants respond to cover-cropping or reduced tillage. A field with a depleted or fragmented microbial community responds differently to the same practice than a field with intact networks.",
      },
      {
        id: "toward-better-metrics",
        heading: "Toward better soil-health metrics",
        body: "Standard soil tests measure organic carbon and nutrient pools, not microbial function. New panels combine PLFA profiling, extracellular enzyme activity, and amplicon sequencing to give a functional snapshot. They are more expensive but they explain more of the trial-to-trial variance.",
      },
    ],
    faq: [
      {
        question: "Can microbial communities be restored intentionally?",
        answer:
          "Inoculation with curated consortia shows promise in greenhouses but inconsistent results in the field. Restoring habitat — reduced disturbance, diverse rotations, living roots year-round — appears more reliable than direct inoculation.",
      },
      {
        question: "Should farmers be testing for this now?",
        answer:
          "Functional soil tests are accessible through specialty labs but rarely through standard agronomy services. They are most useful when comparing the same field over time, not as one-shot measurements.",
      },
    ],
  },
];

export const insights: Insight[] = [
  {
    title:
      "Carbon offset markets are quietly outsourcing the work of climate science",
    slug: "carbon-offset-outsourcing-science",
    category: "ecology",
    excerpt:
      "Voluntary carbon markets have become the largest unregulated funder of forest-carbon measurement — and the methods are diverging from what the science actually says.",
    argument:
      "When commercial registries certify methodology, the result is rules optimized for issuance volume rather than measurement accuracy. The corrective is not better registries — it is independent, public-good measurement infrastructure.",
    publishedDate: "2026-03-15",
    updatedDate: "2026-04-26",
    readingTime: 6,
    tags: ["carbon markets", "policy", "forestry"],
    related: ["temperate-forest-carbon-sink-decline"],
    author: authors.vega,
    body: [
      {
        id: "the-incentive-mismatch",
        heading: "The incentive mismatch",
        body: "Registries that certify offset methodologies earn fees per credit issued. The result, predictably, is rule-making that favors high-volume, high-baseline scenarios. There is no countervailing entity whose budget grows when issuance is more conservative.",
      },
      {
        id: "what-the-science-says",
        heading: "What the underlying science says",
        body: "Independent remote-sensing studies repeatedly find that issued credits over-count avoided emissions by factors of two to ten in specific project types. This is not a fringe critique — it is the modal finding of peer-reviewed evaluation.",
      },
      {
        id: "what-to-do",
        heading: "What an honest correction looks like",
        body: "The fix is not to pick a better registry. It is to fund public-good measurement: open monitoring platforms, calibration sites, and independent verification that does not depend on the issuance pipeline. Until that exists, voluntary markets should be priced as discount credits, not equivalents to direct reductions.",
      },
    ],
  },
  {
    title:
      "Why \"AI for science\" is undervaluing the bottleneck it is best placed to fix",
    slug: "ai-for-science-bottleneck",
    category: "physics",
    excerpt:
      "Most AI-for-science investment chases discovery. The higher-leverage use is making the experimental record reproducible and machine-readable.",
    argument:
      "Discovery captures attention; infrastructure captures compounding returns. Funding agencies and platforms that systematize how experiments are recorded, indexed, and replicated will create more cumulative value than the next foundation model trained on papers.",
    publishedDate: "2026-03-22",
    updatedDate: "2026-04-28",
    readingTime: 5,
    tags: ["AI", "infrastructure", "open science"],
    related: ["perovskite-stack-field-stability"],
    author: authors.okafor,
    body: [
      {
        id: "the-current-frame",
        heading: "The current framing",
        body: "Most public conversation about AI in science is about discovery: AlphaFold, materials prediction, automated literature review. These are real wins. They are also the wins that compound least, because each model is built on a research record that remains fragmented and irreproducible.",
      },
      {
        id: "the-leverage",
        heading: "Where the leverage actually is",
        body: "Standardized experimental records — protocols, raw data, instrument metadata — are the substrate everything else runs on. AI is unusually good at the boring, structured work of extracting and normalizing those records from PDFs, lab notebooks, and supplementary materials.",
      },
      {
        id: "what-this-changes",
        heading: "What this would change",
        body: "Reproducibility becomes a routine check, not a heroic effort. Meta-analyses become live queries instead of multi-year projects. The next generation of discovery models trains on a clean substrate. The investment case is unglamorous, which is exactly why it is undervalued.",
      },
    ],
  },
];

export const discussions: Discussion[] = [
  {
    title:
      "Should geoengineering research move from modelling to small-scale field trials?",
    slug: "geoengineering-field-trials",
    category: "physics",
    topic:
      "Stratospheric aerosol injection has moved from speculative to plausibly deployable within a decade. The question is no longer whether it works in models — it is whether constrained field experiments are scientifically necessary or politically reckless.",
    moderator: authors.okafor,
    publishedDate: "2026-03-10",
    updatedDate: "2026-04-24",
    status: "open",
    participantCount: 14,
    tags: ["geoengineering", "policy", "ethics"],
    comments: [
      {
        id: "c1",
        authorName: "Dr. Anya Petrov",
        authorTitle: "Atmospheric Chemist",
        isExpert: true,
        postedAt: "2026-03-11T09:14:00Z",
        body: "Modelling alone cannot resolve the second-order chemistry questions — heterogeneous reactions on aerosol surfaces are sensitive to particle morphology in ways that lab-scale experiments cannot replicate. Constrained field experiments are not a slippery slope; they are how we close the parameter gap.",
      },
      {
        id: "c2",
        authorName: "Prof. Marcus Hale",
        authorTitle: "Science Policy Scholar",
        isExpert: true,
        postedAt: "2026-03-11T15:32:00Z",
        body: "I agree the science requires field data, but the governance vacuum is the binding constraint. A unilateral trial — even a small one — sets a precedent that will be used to justify much larger deployments. The order matters: governance first, then trials.",
      },
      {
        id: "c3",
        authorName: "Dr. Ren Iwasaki",
        authorTitle: "Marine Biologist",
        isExpert: true,
        postedAt: "2026-03-12T11:05:00Z",
        body: "From a marine perspective: we still cannot agree on the regional precipitation impacts of injection scenarios. Until we can, ocean ecosystems are being asked to absorb risk they cannot consent to. That argues for trials that include marine monitoring, not against trials in principle.",
      },
    ],
  },
  {
    title:
      "How should we communicate uncertainty in climate-attribution claims?",
    slug: "communicating-attribution-uncertainty",
    category: "ecology",
    topic:
      "Rapid attribution studies now publish within days of an extreme event. The methods are sound; the communication is uneven. What does responsible framing of probabilistic attribution look like for non-specialist audiences?",
    moderator: authors.vega,
    publishedDate: "2026-02-28",
    updatedDate: "2026-04-20",
    status: "open",
    participantCount: 9,
    tags: ["climate", "communication", "attribution"],
    comments: [
      {
        id: "c1",
        authorName: "Dr. Lila Mendez",
        authorTitle: "Climate Scientist",
        isExpert: true,
        postedAt: "2026-03-01T08:21:00Z",
        body: "The honest framing is that attribution shifts probabilities, not causes. A specific heatwave is rarely \"caused\" by climate change; it is made N times more likely. Most public-facing communication still elides this distinction, and the result is whiplash when an event happens that would have happened without warming.",
      },
      {
        id: "c2",
        authorName: "Sam Whitford",
        authorTitle: "Science Journalist",
        isExpert: false,
        postedAt: "2026-03-01T14:08:00Z",
        body: "From the editorial side: the probability framing reads as evasion to non-specialist audiences. We need a vocabulary that conveys \"strongly causal in expectation, uncertain in any single instance\" without sounding hedged. I do not think we have one yet.",
      },
    ],
  },
];
