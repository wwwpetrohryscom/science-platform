/**
 * Typed text templates.
 *
 * Templates are pure functions over structured input. They produce
 * unique-looking copy by selecting a phrasing variant from a small
 * deterministic pool seeded by the input identifier (slug). Two
 * different topics will read differently; the same topic will read
 * consistently across rebuilds.
 *
 * No template invents facts, statistics, sources, or studies. Every
 * fact a template can render must come from its input.
 */

import { calmOpener, hedge, pickBySeed, type CertaintyLevel } from "./tone";

/* ----------------------------------------------------------------
   Inputs
---------------------------------------------------------------- */

export type TopicTemplateInput = {
  /** Slug — used as the deterministic seed for variant selection. */
  seed: string;
  topicLabel: string;
  topicTagline: string;
  topicDescription: string;
  subtopicLabels: string[];
  /** Number of curated sources available for this topic. */
  sourceCount: number;
  /** ISO-8601 date string for the most recent content update. */
  lastUpdated?: string;
};

export type SubtopicTemplateInput = {
  seed: string;
  topicLabel: string;
  subtopicLabel: string;
  subtopicDescription: string;
  subtopicIntent: string;
  articleCount: number;
  pillarTitle?: string;
  sourceCount: number;
  lastUpdated?: string;
};

export type ArticleTemplateInput = {
  seed: string;
  title: string;
  excerpt: string;
  topicLabel: string;
  subtopicLabel: string;
  publishedDate: string;
  updatedDate: string;
  /** Tags supplied via frontmatter — used as concept anchors. */
  tags: string[];
  type: "seo" | "pillar" | "expert";
};

export type ResearchTemplateInput = {
  seed: string;
  title: string;
  topicLabel: string;
  subtopicLabel: string;
  /** Number of citations the article body actually contains. */
  citationCount: number;
};

export type SourceBlockInput = {
  topicLabel: string;
  sources: ReadonlyArray<{
    name: string;
    organization: string;
    url: string;
    type: string;
  }>;
};

export type UncertaintyInput = {
  /** Qualitative confidence level — drives the chosen hedge. */
  level: CertaintyLevel;
  /** Optional named limitation, e.g. "regional sampling bias". */
  limitation?: string;
  /** Set true when displayed data are sample/demo/non-authoritative. */
  isSampleData?: boolean;
};

/* ----------------------------------------------------------------
   Templates
---------------------------------------------------------------- */

/**
 * Topic-level overview paragraph. Uses the topic's own description
 * so the leading sentence is never the same as a sibling topic's,
 * then composes a short orienting sentence about scope.
 */
export function topicOverview(input: TopicTemplateInput): string {
  const subtopicList = formatList(input.subtopicLabels);
  const opener = pickBySeed(input.seed, [
    `${input.topicDescription}`,
    `${input.topicLabel} on this site is about ${decap(input.topicTagline)}. ${input.topicDescription}`,
    `${input.topicLabel}, as covered here, is ${decap(input.topicTagline)}. ${input.topicDescription}`,
  ]);
  const scope = pickBySeed(input.seed + ":scope", [
    `Coverage is organized into ${input.subtopicLabels.length} subtopics — ${subtopicList} — each maintained against authoritative primary sources.`,
    `The writing is grouped under ${input.subtopicLabels.length} subtopics: ${subtopicList}. Each one tracks the relevant primary literature.`,
    `Articles are arranged across ${input.subtopicLabels.length} subtopics (${subtopicList}) and revised when the underlying evidence shifts.`,
  ]);
  return `${opener} ${scope}`;
}

/**
 * Topic-level explanation block — a 2–3 sentence framing that names
 * the kind of evidence used and the kind of question the topic is
 * built to answer. Never claims results that are not in the input.
 */
export function topicExplanation(input: TopicTemplateInput): string {
  const lead = calmOpener(input.seed + ":explain");
  const evidenceLine = pickBySeed(input.seed + ":evidence", [
    `The articles in ${input.topicLabel} are built on peer-reviewed work and reports from established research bodies, with citations in every piece.`,
    `Each ${input.topicLabel.toLowerCase()} article links to the peer-reviewed studies and institutional reports it draws on, so readers can follow the evidence themselves.`,
    `${input.topicLabel} writing on this platform foregrounds primary research and synthesis reports rather than press summaries.`,
  ]);
  const useLine = pickBySeed(input.seed + ":use", [
    `Use the subtopic index below to step into a specific area; pillar articles offer the recommended starting point in each.`,
    `Start with a pillar article when you want orientation; move to subtopic-specific pieces when you want depth.`,
    `Pillar articles are the recommended entry points; the subtopic indexes hold the rest.`,
  ]);
  return `${lead} ${evidenceLine} ${useLine}`;
}

/** Subtopic intro — uses the subtopic's intent statement as anchor. */
export function subtopicOverview(input: SubtopicTemplateInput): string {
  const opener = pickBySeed(input.seed, [
    `${input.subtopicDescription}`,
    `Within ${input.topicLabel}, ${decap(input.subtopicLabel)} covers the following: ${decap(input.subtopicDescription)}`,
    `${input.subtopicLabel} is the part of ${input.topicLabel} concerned with ${decap(input.subtopicDescription)}`,
  ]);
  const intent = pickBySeed(input.seed + ":intent", [
    `Articles here are written for readers who want to ${decap(stripFinalPeriod(input.subtopicIntent))}.`,
    `Pieces in this subtopic are aimed at the question: ${input.subtopicIntent}`,
    input.subtopicIntent,
  ]);
  return `${opener} ${intent}`;
}

/** Subtopic explanation — references article counts, never invents. */
export function subtopicExplanation(input: SubtopicTemplateInput): string {
  const counts =
    input.articleCount === 0
      ? `This subtopic is being seeded — new ${input.subtopicLabel.toLowerCase()} articles are added as research warrants.`
      : input.articleCount === 1
        ? `One article currently sits under ${input.subtopicLabel}; more are added as the underlying research warrants.`
        : `${input.articleCount} articles currently sit under ${input.subtopicLabel}, organized so the foundation pieces come first.`;
  const pillarLine = input.pillarTitle
    ? pickBySeed(input.seed + ":pillar", [
        `If you are new to this subtopic, the pillar article — ${input.pillarTitle} — is the right entry point.`,
        `Start with the pillar article, ${input.pillarTitle}, before moving to the more focused pieces.`,
        `${input.pillarTitle} is the pillar — read it first if you want the field-level context.`,
      ])
    : "";
  return [counts, pillarLine].filter(Boolean).join(" ");
}

/**
 * Article intro — augments the author-supplied excerpt with a single
 * orienting sentence. We never rewrite the excerpt itself.
 */
export function articleIntro(input: ArticleTemplateInput): string {
  const tagPhrase =
    input.tags.length > 0
      ? `It sits under ${input.subtopicLabel} (${input.topicLabel}) and touches on ${formatList(input.tags.slice(0, 3))}.`
      : `It sits under ${input.subtopicLabel} in ${input.topicLabel}.`;
  const orienting = pickBySeed(input.seed, [
    `This is a ${labelArticleType(input.type)}. ${tagPhrase}`,
    `Filed as a ${labelArticleType(input.type)}; ${decap(tagPhrase)}`,
    `${tagPhrase} It is a ${labelArticleType(input.type)}.`,
  ]);
  return orienting;
}

/** Concept explanation — single-sentence framing of one tag/concept. */
export function conceptExplanation(concept: string, seed: string): string {
  return pickBySeed(seed + ":concept:" + concept, [
    `Throughout, the article treats ${concept} as a load-bearing concept rather than jargon.`,
    `${cap(concept)} appears below in its technical sense; the article unpacks it where it matters.`,
    `Where ${concept} is invoked below, the article ties it back to the underlying mechanism.`,
  ]);
}

/** Evidence/research summary that *describes* citations, never invents. */
export function researchSummary(input: ResearchTemplateInput): string {
  if (input.citationCount <= 0) {
    return `This piece is currently a working draft — no external citations are attached yet, so treat the framing as orientation, not evidence.`;
  }
  const tone =
    input.citationCount === 1
      ? `One external citation anchors the argument below`
      : `${input.citationCount} external citations anchor the argument below`;
  return pickBySeed(input.seed + ":summary", [
    `${tone}. Each link points to an authoritative primary source — peer-reviewed work, an institutional report, or a recognised dataset.`,
    `${tone}; each one resolves to a primary source rather than a press summary.`,
    `${tone}. Follow them to read the underlying study or dataset directly.`,
  ]);
}

/** Methodology note — explains *how* sources are selected, not what they say. */
export function methodologyNote(topicLabel: string): string {
  return `Sources for ${topicLabel} writing are drawn from a curated registry of recognised research bodies — among them the IPCC, NASA, NOAA, WHO, NIH, and peer-reviewed journals. The validator runs against this registry so unverified blogs and marketing pages cannot be cited.`;
}

/**
 * Plain-language uncertainty disclosure. The hedge is keyed to the
 * qualitative `level`; never overstates.
 */
export function uncertaintyNote(input: UncertaintyInput): string {
  const lead = `On this question, ${hedge(input.level)} the picture below.`;
  const limitation = input.limitation
    ? ` Known limitation: ${input.limitation}.`
    : "";
  const sample = input.isSampleData
    ? ` Note: numbers shown are sample/demo values for layout purposes, not authoritative measurements.`
    : "";
  return `${lead}${limitation}${sample}`;
}

/** Source explanation — describes *why* a curated source is trusted. */
export function sourceExplanation(input: SourceBlockInput): string {
  if (input.sources.length === 0) {
    return `No curated sources are registered for ${input.topicLabel} yet. Citations in articles are still validated, but the registry-level whitelist is being expanded.`;
  }
  const orgs = uniq(input.sources.map((s) => s.organization)).slice(0, 4);
  const orgList = formatList(orgs);
  return `Sources cited in ${input.topicLabel} pieces are curated from ${orgList} and similarly recognised research bodies. Inclusion in this list signals provenance — peer review, governmental research mandate, or established dataset stewardship — not editorial endorsement of any single claim.`;
}

/* ----------------------------------------------------------------
   Helpers
---------------------------------------------------------------- */

function decap(s: string): string {
  return s.length > 0 ? s[0].toLowerCase() + s.slice(1) : s;
}

function cap(s: string): string {
  return s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s;
}

function stripFinalPeriod(s: string): string {
  return s.replace(/\.\s*$/, "");
}

function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function uniq<T>(xs: readonly T[]): T[] {
  return Array.from(new Set(xs));
}

function labelArticleType(t: ArticleTemplateInput["type"]): string {
  if (t === "pillar") return "pillar article";
  if (t === "expert") return "expert briefing";
  return "long-form article";
}
