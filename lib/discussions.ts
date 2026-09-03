import fs from "node:fs";
import path from "node:path";

import { getAuthor, type Author } from "@/lib/authors";
import type { CategorySlug } from "@/lib/categories";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n-config";

/**
 * Discussions module.
 *
 * Discussions are kept as typed TS data rather than markdown because
 * their nested comment structure does not map cleanly to frontmatter,
 * and because the comments will eventually be backed by a moderation
 * service (database) — markdown was never the right end-state for them.
 *
 * The shape here is the same shape the moderation backend will return.
 * When a real moderation service is wired up, replace `discussions`
 * with a fetch from that service. The lookups (`getDiscussions`,
 * `getDiscussion`) stay identical.
 */

export type DiscussionStatus = "open" | "closed" | "scheduled";

export type DiscussionComment = {
  id: string;
  authorName: string;
  authorTitle: string;
  /**
   * Whether this entry was written by a verified, named external
   * contributor. Every entry currently on the site is an editorial-desk
   * framing note, so this is `false` everywhere — the field exists for
   * the moderation backend that will eventually accept real
   * contributions. It must never be set true for a desk.
   */
  isExpert: boolean;
  postedAt: string;
  body: string;
};

export type Discussion = {
  /** Used as the URL segment: /discussions/<slug>. */
  slug: string;
  title: string;
  category: CategorySlug;
  /** The framing topic — shown as a lede on the discussion page. */
  topic: string;
  /** Editorial desk framing the conversation. */
  moderator: Author;
  publishedDate: string;
  updatedDate: string;
  status: DiscussionStatus;
  comments: DiscussionComment[];
  tags: string[];
  /** Optional pointer to a related article — drives internal linking. */
  relatedArticleSlug?: string;

  /* Resolved at read time by `getDiscussion(s)` — see Localization. */
  /** Locale this record was requested for. */
  locale?: Locale;
  /**
   * Shorter title for the document head. A discussion's title is the
   * question being argued, and a question cut in half is no longer the
   * question — so the H1 keeps it and this names the subject instead.
   */
  metaTitle?: string;
  /** Locale the text actually came from. */
  sourceLocale?: Locale;
  /** True when the requested translation is missing and EN was served. */
  localeFallback?: boolean;
};

const raw: Array<Omit<Discussion, "moderator"> & { moderatorId: string }> = [
  {
    slug: "geoengineering-field-trials",
    title:
      "Should geoengineering research move from modelling to small-scale field trials?",
    metaTitle: "Geoengineering: modelling or field trials?",
    category: "physics",
    topic:
      "Stratospheric aerosol injection has moved from speculative to plausibly deployable within a decade. The question is no longer whether it works in models — it is whether constrained field experiments are scientifically necessary or politically reckless.",
    moderatorId: "energy-systems-desk",
    publishedDate: "2026-03-10",
    updatedDate: "2026-04-24",
    status: "open",
    tags: ["geoengineering", "policy", "ethics"],
    relatedArticleSlug: "radiative-transfer-explained",
    comments: [
      {
        id: "c1",
        authorName: "Climate Research Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-11T09:14:00Z",
        body: "Moderator note: field experiments are sometimes proposed because models and laboratory studies cannot fully reproduce atmospheric aerosol behavior. Any such proposal needs transparent governance before it is treated as scientifically or politically acceptable.",
      },
      {
        id: "c2",
        authorName: "EcoScienceHub Editorial Team",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-11T15:32:00Z",
        body: "Discussion framing: the scientific case for more data does not remove the governance problem. A unilateral trial, even a small one, could create precedent before accountability rules exist.",
      },
      {
        id: "c3",
        authorName: "Environmental Science Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-12T11:05:00Z",
        body: "Open question: regional precipitation and ocean-system impacts remain central concerns in geoengineering assessment. Monitoring design should be part of any serious proposal, not an afterthought.",
      },
    ],
  },
  {
    slug: "communicating-attribution-uncertainty",
    title:
      "How should we communicate uncertainty in climate-attribution claims?",
    metaTitle: "Communicating uncertainty in climate attribution",
    category: "ecology",
    topic:
      "Rapid attribution studies now publish within days of an extreme event. The methods are sound; the communication is uneven. What does responsible framing of probabilistic attribution look like for non-specialist audiences?",
    moderatorId: "climate-research-desk",
    publishedDate: "2026-02-28",
    updatedDate: "2026-04-20",
    status: "open",
    tags: ["climate", "communication", "attribution"],
    relatedArticleSlug: "what-is-climate-change",
    comments: [
      {
        id: "c1",
        authorName: "Climate Research Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-01T08:21:00Z",
        body: "Moderator note: event attribution usually estimates how human-driven warming changes probability or intensity. Public explanations should avoid implying that one event has a single deterministic cause.",
      },
      {
        id: "c2",
        authorName: "EcoScienceHub Editorial Team",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-01T14:08:00Z",
        body: "Editorial question: probability framing can sound evasive to non-specialist audiences. The communication challenge is to preserve uncertainty without weakening the evidence for long-term climate influence.",
      },
      {
        id: "c3",
        authorName: "Environmental Science Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-02T10:42:00Z",
        body: "Moderator note: not every extreme event has the same attribution signal. Distinguishing stronger and weaker cases protects credibility instead of reducing it.",
      },
    ],
  },
  {
    slug: "single-cell-data-standards",
    title:
      "Are single-cell data standards keeping pace with the science?",
    category: "biology",
    topic:
      "Single-cell sequencing has produced a step-change in resolution for comparative biology. The data standards governing how those datasets are deposited, annotated, and made re-analyzable have lagged. Where is the friction binding now?",
    moderatorId: "biology-ecosystems-desk",
    publishedDate: "2026-03-18",
    updatedDate: "2026-04-27",
    status: "open",
    tags: ["single-cell", "data", "standards", "open-science"],
    relatedArticleSlug: "single-cell-evo-devo",
    comments: [
      {
        id: "c1",
        authorName: "Biology & Ecosystems Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-19T07:45:00Z",
        body: "Moderator note: standards without consistent metadata enforcement leave datasets difficult to compare across studies. Future repository and journal workflows should make reusable metadata part of acceptance, not optional cleanup.",
      },
      {
        id: "c2",
        authorName: "EcoScienceHub Editorial Team",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-03-20T13:20:00Z",
        body: "Cross-field note: measurement-heavy disciplines often need common calibration and capture metadata before datasets become reliably reusable. Single-cell biology faces the same kind of infrastructure problem.",
      },
    ],
  },
  {
    slug: "what-counts-as-successful-restoration",
    title: "What should count as a successful ecosystem restoration?",
    category: "ecology",
    topic:
      "Restoration targets are increasingly written into policy in units of area. The ecological literature measures success in units of recovered structure and function, against a reference state that has to be chosen. Those are not the same target, and a project can meet one while failing the other.",
    moderatorId: "biodiversity-conservation-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["restoration", "conservation", "indicators", "policy"],
    relatedArticleSlug: "ecological-restoration-evidence",
    comments: [
      {
        id: "c1",
        authorName: "Biodiversity & Conservation Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:00:00Z",
        body: "Framing note: the reference-state choice determines the verdict more than any measurement does. A site judged against its pre-disturbance condition, against an undisturbed analogue, and against a functional target can be a success under one and a failure under the others. The choice is usually made once, early, and rarely revisited.",
      },
      {
        id: "c2",
        authorName: "Biodiversity & Conservation Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:05:00Z",
        body: "Editorial note: synthesis studies consistently find structural recovery outpacing functional recovery, and monitoring typically ending well before either is complete. Any definition of success that can be evaluated within a normal funding cycle is measuring something other than recovery.",
      },
    ],
  },
  {
    slug: "how-should-biodiversity-be-measured",
    title: "Which biodiversity measure should drive policy decisions?",
    category: "ecology",
    topic:
      "Species richness, functional diversity, genetic diversity, the Living Planet Index and protected-area coverage are all called biodiversity. They rank places and interventions differently, and the choice of measure is often made by data availability rather than by the question being asked.",
    moderatorId: "biodiversity-conservation-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["biodiversity", "indicators", "measurement", "policy"],
    relatedArticleSlug: "biodiversity-indicators-explained",
    comments: [
      {
        id: "c1",
        authorName: "Biodiversity & Conservation Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:10:00Z",
        body: "Framing note: the measures disagree because they answer different questions. Richness asks how many kinds are present, functional diversity asks what range of roles is covered, and an abundance index asks whether populations are holding. A site can gain on one and lose on another without any contradiction.",
      },
      {
        id: "c2",
        authorName: "Biodiversity & Conservation Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:14:00Z",
        body: "Editorial note: every index inherits the taxonomic and geographic bias of the monitoring behind it. Vertebrates in Europe and North America are represented far beyond their share of described species, and that bias propagates into any global aggregate built from those records.",
      },
    ],
  },
  {
    slug: "where-climate-model-uncertainty-matters-most",
    title: "Which climate-model uncertainties are consequential for decisions?",
    metaTitle: "Which model uncertainties matter for decisions",
    category: "ecology",
    topic:
      "Projection uncertainty comes from scenario choice, model structure, and internal variability, and their relative weight changes with lead time and spatial scale. Treating all three as one quantity produces both false confidence and false paralysis, depending on which dominates the case at hand.",
    moderatorId: "climate-research-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["climate-models", "uncertainty", "projection", "adaptation"],
    relatedArticleSlug: "climate-models-projections-uncertainty",
    comments: [
      {
        id: "c1",
        authorName: "Climate Research Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:20:00Z",
        body: "Framing note: internal variability dominates near-term regional projections and cannot be reduced by better models, only bounded by larger ensembles. Scenario choice dominates late-century global projections and is not a scientific uncertainty at all. A decision-maker's exposure depends entirely on which regime their question sits in.",
      },
      {
        id: "c2",
        authorName: "Climate Research Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:24:00Z",
        body: "Editorial note: the CMIP6 generation contains models with higher sensitivity than the assessed range supports, which is why AR6 weighted multiple lines of evidence instead of taking the raw ensemble mean. Any downstream use of an unweighted ensemble inherits that problem.",
      },
    ],
  },
  {
    slug: "limits-of-renewable-energy-storage",
    title: "What are the realistic limits of storage for a high-renewable grid?",
    metaTitle: "The realistic limits of grid storage",
    category: "physics",
    topic:
      "Published estimates of the storage a high-renewable system needs vary by an order of magnitude. The spread comes less from battery chemistry than from assumptions about transmission, demand flexibility, and how much of the year the system must ride through without generation.",
    moderatorId: "energy-systems-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["energy-storage", "grid", "renewables", "systems"],
    relatedArticleSlug: "energy-storage-fundamentals",
    comments: [
      {
        id: "c1",
        authorName: "Energy Systems Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:30:00Z",
        body: "Framing note: diurnal and seasonal storage are separate engineering problems. A technology optimised for one daily cycle at high round-trip efficiency is a poor choice for a store that is filled once a year, and cost per unit of energy rather than per unit of power becomes the binding metric.",
      },
      {
        id: "c2",
        authorName: "Energy Systems Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:35:00Z",
        body: "Editorial note: storage requirement is not a property of the generation mix alone. Transmission reach, demand response, and overbuild all substitute for storage at some exchange rate, which is why two credible studies can disagree by an order of magnitude without either being wrong about physics.",
      },
    ],
  },
  {
    slug: "how-should-soil-carbon-be-credited",
    title: "Can soil-carbon change be measured well enough to be credited?",
    category: "ecology",
    topic:
      "Soil carbon markets issue credits for changes that sit close to, and sometimes below, the detection limit of practical sampling. The response has been to model rather than measure — which relocates the verification problem rather than resolving it.",
    moderatorId: "soil-land-systems-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["soil-carbon", "measurement", "carbon-markets", "uncertainty"],
    relatedArticleSlug: "soil-carbon-measurement-and-uncertainty",
    comments: [
      {
        id: "c1",
        authorName: "Soil & Land Systems Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:40:00Z",
        body: "Framing note: the detection problem is arithmetic before it is agronomic. Annual change under improved management is small relative to the stock and to the spatial variance within a field, and the sample size needed to detect it at useful confidence rises accordingly.",
      },
      {
        id: "c2",
        authorName: "Soil & Land Systems Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:44:00Z",
        body: "Editorial note: whether soil carbon management is worthwhile agronomically is a separate question from whether the change can be quantified to the standard a tradable credit requires. Conflating the two is the most common move in this debate, in both directions.",
      },
    ],
  },
  {
    slug: "what-should-count-as-a-species",
    title: "Does the species concept still do the work asked of it?",
    category: "biology",
    topic:
      "Species are the unit of biodiversity accounting, conservation law, and public communication. No single species concept covers sexual, asexual and freely hybridising lineages, and genomic data has made the boundaries harder to draw rather than easier.",
    moderatorId: "biology-life-sciences-desk",
    publishedDate: "2026-09-02",
    updatedDate: "2026-09-02",
    status: "open",
    tags: ["taxonomy", "species-concept", "conservation", "genomics"],
    relatedArticleSlug: "what-is-a-species",
    comments: [
      {
        id: "c1",
        authorName: "Biology & Life Sciences Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:50:00Z",
        body: "Framing note: the practical consequence is not philosophical. Splitting one recognised species into three changes the number of threatened taxa, the area triggering legal protection, and the apparent trend in biodiversity indices, without anything changing in the field.",
      },
      {
        id: "c2",
        authorName: "Biology & Life Sciences Desk",
        authorTitle: "Editorial desk",
        isExpert: false,
        postedAt: "2026-09-02T09:55:00Z",
        body: "Editorial note: genomic data revealed extensive introgression between lineages long treated as good species, which weakens reproductive isolation as an operational criterion exactly where it was assumed to be strongest.",
      },
    ],
  },
];

const discussions: Discussion[] = raw.map((d) => ({
  ...d,
  moderator: getAuthor(d.moderatorId),
}));

/* ----------------------------------------------------------------
   Localization
   ---------------------------------------------------------------
   Discussion text (title, framing topic, editorial notes) lived only
   in English while the pages were generated — and indexed — for all
   six locales with a full hreflang alternate set. That advertised a
   Russian translation of a page that served English.

   Translations live in `content/discussions/<locale>.json`, keyed by
   slug, so each locale is one file and a missing translation is a
   missing file rather than a half-populated record. A discussion with
   no translation for a locale falls back to English and is reported as
   a fallback, exactly as articles are — the route still renders, but
   it is excluded from the index and from hreflang.
---------------------------------------------------------------- */

export type DiscussionTranslation = {
  title: string;
  /** Shorter form for the document head; the title stays the question. */
  metaTitle?: string;
  topic: string;
  /** Note bodies keyed by comment id. Ids not present keep the English. */
  comments?: Record<string, string>;
};

const TRANSLATIONS_ROOT = path.join(process.cwd(), "content", "discussions");
const translationCache = new Map<Locale, Record<string, DiscussionTranslation>>();

function loadTranslations(locale: Locale): Record<string, DiscussionTranslation> {
  const cached = translationCache.get(locale);
  if (cached) return cached;
  const file = path.join(TRANSLATIONS_ROOT, `${locale}.json`);
  let parsed: Record<string, DiscussionTranslation> = {};
  if (fs.existsSync(file)) {
    try {
      parsed = JSON.parse(fs.readFileSync(file, "utf8")) as Record<
        string,
        DiscussionTranslation
      >;
    } catch {
      parsed = {};
    }
  }
  translationCache.set(locale, parsed);
  return parsed;
}

/** Locales for which a translation of this discussion exists on disk. */
export function discussionLocales(slug: string): Locale[] {
  const out: Locale[] = [DEFAULT_LOCALE];
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    const t = loadTranslations(locale)[slug];
    if (t && t.title && t.topic) out.push(locale);
  }
  return out;
}

function localize(d: Discussion, locale: Locale): Discussion {
  if (locale === DEFAULT_LOCALE) {
    return { ...d, locale, sourceLocale: DEFAULT_LOCALE, localeFallback: false };
  }
  const t = loadTranslations(locale)[d.slug];
  if (!t || !t.title || !t.topic) {
    return { ...d, locale, sourceLocale: DEFAULT_LOCALE, localeFallback: true };
  }
  return {
    ...d,
    locale,
    sourceLocale: locale,
    localeFallback: false,
    title: t.title,
    metaTitle: t.metaTitle ?? undefined,
    topic: t.topic,
    comments: d.comments.map((c) => ({
      ...c,
      body: t.comments?.[c.id] ?? c.body,
    })),
  };
}

export async function getDiscussions(
  locale: Locale = DEFAULT_LOCALE,
): Promise<Discussion[]> {
  return [...discussions]
    .map((d) => localize(d, locale))
    .sort((a, b) => b.updatedDate.localeCompare(a.updatedDate));
}

export async function getDiscussion(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<Discussion | undefined> {
  const found = discussions.find((d) => d.slug === slug);
  return found ? localize(found, locale) : undefined;
}

export function listDiscussionSlugs(): string[] {
  return discussions.map((d) => d.slug);
}
