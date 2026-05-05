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
  /** Whether the participant has been verified as a real domain expert. */
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
    moderatorId: "energy-systems-desk",
    publishedDate: "2026-03-10",
    updatedDate: "2026-04-24",
    status: "open",
    participantCount: 14,
    tags: ["geoengineering", "policy", "ethics"],
    relatedArticleSlug: "thermodynamic-limits-of-photovoltaics",
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
    category: "ecology",
    topic:
      "Rapid attribution studies now publish within days of an extreme event. The methods are sound; the communication is uneven. What does responsible framing of probabilistic attribution look like for non-specialist audiences?",
    moderatorId: "climate-research-desk",
    publishedDate: "2026-02-28",
    updatedDate: "2026-04-20",
    status: "open",
    participantCount: 9,
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
    participantCount: 7,
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
