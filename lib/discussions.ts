import { getAuthor, type Author } from "@/lib/authors";
import type { CategorySlug } from "@/lib/categories";

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
  /** Whether the participant has been verified as a domain expert. */
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
  /** Lead expert framing the conversation. */
  moderator: Author;
  publishedDate: string;
  updatedDate: string;
  status: DiscussionStatus;
  participantCount: number;
  comments: DiscussionComment[];
  tags: string[];
  /** Optional pointer to a related article — drives internal linking. */
  relatedArticleSlug?: string;
};

const raw: Array<Omit<Discussion, "moderator"> & { moderatorId: string }> = [
  {
    slug: "geoengineering-field-trials",
    title:
      "Should geoengineering research move from modelling to small-scale field trials?",
    category: "physics",
    topic:
      "Stratospheric aerosol injection has moved from speculative to plausibly deployable within a decade. The question is no longer whether it works in models — it is whether constrained field experiments are scientifically necessary or politically reckless.",
    moderatorId: "daniel-okafor",
    publishedDate: "2026-03-10",
    updatedDate: "2026-04-24",
    status: "open",
    participantCount: 14,
    tags: ["geoengineering", "policy", "ethics"],
    relatedArticleSlug: "thermodynamic-limits-of-photovoltaics",
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
    slug: "communicating-attribution-uncertainty",
    title:
      "How should we communicate uncertainty in climate-attribution claims?",
    category: "ecology",
    topic:
      "Rapid attribution studies now publish within days of an extreme event. The methods are sound; the communication is uneven. What does responsible framing of probabilistic attribution look like for non-specialist audiences?",
    moderatorId: "lila-mendez",
    publishedDate: "2026-02-28",
    updatedDate: "2026-04-20",
    status: "open",
    participantCount: 9,
    tags: ["climate", "communication", "attribution"],
    relatedArticleSlug: "what-is-climate-change",
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
      {
        id: "c3",
        authorName: "Dr. Helena Vega",
        authorTitle: "Senior Ecologist",
        isExpert: true,
        postedAt: "2026-03-02T10:42:00Z",
        body: "The probability framing also lets us be honest about events where the attribution is weaker. Not every extreme is a clear signal — some are. Conflating them in public communication erodes credibility for the strong attribution claims later.",
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
    moderatorId: "mira-brandt",
    publishedDate: "2026-03-18",
    updatedDate: "2026-04-27",
    status: "open",
    participantCount: 7,
    tags: ["single-cell", "data", "standards", "open-science"],
    relatedArticleSlug: "single-cell-evo-devo",
    comments: [
      {
        id: "c1",
        authorName: "Dr. Mira Brandt",
        authorTitle: "Computational Biologist",
        isExpert: true,
        postedAt: "2026-03-19T07:45:00Z",
        body: "The standards exist on paper but enforcement is the missing piece. Most repositories accept depositions that omit the metadata fields needed for cross-study integration — and reviewers rarely flag it. The field needs venues willing to reject submissions that fail metadata completeness, not just technical-quality checks.",
      },
      {
        id: "c2",
        authorName: "Dr. Kai Rosenberg",
        authorTitle: "Quantum Sensor Group (observer)",
        isExpert: true,
        postedAt: "2026-03-20T13:20:00Z",
        body: "From an instrument-physics perspective: the absence of standardized capture metadata is the same failure mode we hit in metrology twenty years ago. Solving it required common platform calibration files. Whatever the biological equivalent of that is, the field's data standards body should produce it.",
      },
    ],
  },
];

const discussions: Discussion[] = raw.map((d) => ({
  ...d,
  moderator: getAuthor(d.moderatorId),
}));

export async function getDiscussions(): Promise<Discussion[]> {
  return [...discussions].sort((a, b) =>
    b.updatedDate.localeCompare(a.updatedDate),
  );
}

export async function getDiscussion(
  slug: string,
): Promise<Discussion | undefined> {
  return discussions.find((d) => d.slug === slug);
}

export function listDiscussionSlugs(): string[] {
  return discussions.map((d) => d.slug);
}
