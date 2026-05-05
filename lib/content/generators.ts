/**
 * Generators — the public surface page components import from.
 *
 * Each generator takes structured project data (from
 * `@/lib/categories`, `@/lib/sources`, the article store) and returns
 * a `GeneratedBlock`: the text to render plus any quality issues
 * detected at generation time.
 *
 * Pages render `block.text`. The build pipeline (or a future audit
 * script) can read `block.issues` to surface drift. When the input
 * is too thin to render meaningfully, the generator returns a
 * transparent fallback rather than fabricating detail.
 *
 * Generators are pure, deterministic, and free of side effects —
 * safe to call inside server components and inside `generateStaticParams`.
 */

import {
  getCategory,
  type CategoryDefinition,
  type CategorySlug,
  type Subtopic,
} from "@/lib/categories";
import {
  getSourcesForCategory,
  type SourceEntry,
} from "@/lib/sources";

import {
  articleIntro,
  conceptExplanation,
  methodologyNote,
  researchSummary,
  sourceExplanation,
  subtopicExplanation,
  subtopicOverview,
  topicExplanation,
  topicOverview,
  uncertaintyNote,
  type ArticleTemplateInput,
  type ResearchTemplateInput,
  type UncertaintyInput,
} from "./templates";
import {
  auditBlock,
  fallbackForMissing,
  hasEnoughSources,
  type AuditResult,
} from "./quality";
import { CONTENT_RULES } from "./rules";

/* ----------------------------------------------------------------
   Result shape
---------------------------------------------------------------- */

export type GeneratedBlock = {
  /** Plain text — render as-is into the DOM. No HTML, no markdown. */
  text: string;
  /** True when the block came from a fallback (input was too thin). */
  fallback: boolean;
  /** Quality audit — non-fatal; surface in build logs if non-empty. */
  audit: AuditResult;
};

/* ----------------------------------------------------------------
   Topic generators
---------------------------------------------------------------- */

export function generateTopicIntro(category: CategorySlug): GeneratedBlock {
  const def = getCategory(category);
  const sources = getSourcesForCategory(category);
  const text = topicOverview({
    seed: def.slug + ":intro",
    topicLabel: def.label,
    topicTagline: def.tagline,
    topicDescription: def.description,
    subtopicLabels: def.subtopics.map((s) => s.label),
    sourceCount: sources.length,
  });
  return finalize(text, "topic-intro");
}

export function generateTopicExplanation(category: CategorySlug): GeneratedBlock {
  const def = getCategory(category);
  const sources = getSourcesForCategory(category);
  const text = topicExplanation({
    seed: def.slug + ":explain",
    topicLabel: def.label,
    topicTagline: def.tagline,
    topicDescription: def.description,
    subtopicLabels: def.subtopics.map((s) => s.label),
    sourceCount: sources.length,
  });
  return finalize(text, "topic-explanation", {
    minWords: CONTENT_RULES.MIN_EXPLANATION_WORDS / 2,
  });
}

export function generateMethodologyNote(category: CategorySlug): GeneratedBlock {
  const def = getCategory(category);
  const sources = getSourcesForCategory(category);
  if (!hasEnoughSources(sources.length, "topic")) {
    return finalizeFallback(
      `the source registry for ${def.label} is still being populated`,
      "topic-methodology",
    );
  }
  return finalize(methodologyNote(def.label), "topic-methodology");
}

export function generateSourceBlock(category: CategorySlug): GeneratedBlock {
  const def = getCategory(category);
  const sources = getSourcesForCategory(category);
  return finalize(
    sourceExplanation({ topicLabel: def.label, sources }),
    "topic-sources",
  );
}

/* ----------------------------------------------------------------
   Subtopic generators
---------------------------------------------------------------- */

type SubtopicArgs = {
  category: CategorySlug;
  subtopicSlug: string;
  articleCount: number;
  pillarTitle?: string;
};

function resolveSubtopic(
  category: CategorySlug,
  slug: string,
): { def: CategoryDefinition; sub: Subtopic } | null {
  const def = getCategory(category);
  const sub = def.subtopics.find((s) => s.slug === slug);
  if (!sub) return null;
  return { def, sub };
}

export function generateSubtopicIntro(args: SubtopicArgs): GeneratedBlock {
  const r = resolveSubtopic(args.category, args.subtopicSlug);
  if (!r) {
    return finalizeFallback(
      `subtopic "${args.subtopicSlug}" is not registered under ${args.category}`,
      "subtopic-intro",
    );
  }
  const sources = getSourcesForCategory(args.category);
  const text = subtopicOverview({
    seed: `${args.category}/${args.subtopicSlug}:intro`,
    topicLabel: r.def.label,
    subtopicLabel: r.sub.label,
    subtopicDescription: r.sub.description,
    subtopicIntent: r.sub.intent,
    articleCount: args.articleCount,
    pillarTitle: args.pillarTitle,
    sourceCount: sources.length,
  });
  return finalize(text, "subtopic-intro");
}

export function generateSubtopicExplanation(args: SubtopicArgs): GeneratedBlock {
  const r = resolveSubtopic(args.category, args.subtopicSlug);
  if (!r) {
    return finalizeFallback(
      `subtopic "${args.subtopicSlug}" is not registered under ${args.category}`,
      "subtopic-explanation",
    );
  }
  const sources = getSourcesForCategory(args.category);
  const text = subtopicExplanation({
    seed: `${args.category}/${args.subtopicSlug}:explain`,
    topicLabel: r.def.label,
    subtopicLabel: r.sub.label,
    subtopicDescription: r.sub.description,
    subtopicIntent: r.sub.intent,
    articleCount: args.articleCount,
    pillarTitle: args.pillarTitle,
    sourceCount: sources.length,
  });
  return finalize(text, "subtopic-explanation", { minWords: 25 });
}

/* ----------------------------------------------------------------
   Article-level generators
---------------------------------------------------------------- */

type ArticleGeneratorInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  subtopic: string;
  publishedDate: string;
  updatedDate: string;
  tags: readonly string[];
  type: "seo" | "pillar" | "expert";
  /** Citation count counted from the rendered body (URLs in markdown). */
  citationCount: number;
};

function buildArticleTemplateInput(
  input: ArticleGeneratorInput,
  topicLabel: string,
  subtopicLabel: string,
): ArticleTemplateInput {
  return {
    seed: `${input.category}/${input.subtopic}/${input.slug}`,
    title: input.title,
    excerpt: input.excerpt,
    topicLabel,
    subtopicLabel,
    publishedDate: input.publishedDate,
    updatedDate: input.updatedDate,
    tags: [...input.tags],
    type: input.type,
  };
}

export function generateArticleIntro(input: ArticleGeneratorInput): GeneratedBlock {
  const r = resolveSubtopic(input.category, input.subtopic);
  if (!r) {
    return finalizeFallback(
      `article references unknown subtopic "${input.subtopic}"`,
      "article-intro",
    );
  }
  const text = articleIntro(
    buildArticleTemplateInput(input, r.def.label, r.sub.label),
  );
  return finalize(text, "article-intro", { minWords: 18 });
}

export function generateConceptExplanation(
  concept: string,
  seed: string,
): GeneratedBlock {
  if (!concept || concept.trim().length === 0) {
    return finalizeFallback("no concept provided", "article-concept");
  }
  return finalize(
    conceptExplanation(concept, seed),
    "article-concept",
    { minWords: 8 },
  );
}

export function generateResearchSummary(
  input: ArticleGeneratorInput,
): GeneratedBlock {
  const r = resolveSubtopic(input.category, input.subtopic);
  if (!r) {
    return finalizeFallback(
      `article references unknown subtopic "${input.subtopic}"`,
      "article-research",
    );
  }
  const tplInput: ResearchTemplateInput = {
    seed: `${input.category}/${input.subtopic}/${input.slug}:research`,
    title: input.title,
    topicLabel: r.def.label,
    subtopicLabel: r.sub.label,
    citationCount: input.citationCount,
  };
  return finalize(researchSummary(tplInput), "article-research", {
    minWords: 20,
  });
}

export function generateUncertaintyNote(
  input: UncertaintyInput,
): GeneratedBlock {
  return finalize(uncertaintyNote(input), "article-uncertainty", {
    minWords: 12,
  });
}

export function generateArticleMethodologyNote(
  category: CategorySlug,
): GeneratedBlock {
  return generateMethodologyNote(category);
}

/* ----------------------------------------------------------------
   Sources
---------------------------------------------------------------- */

export type SourceListing = ReadonlyArray<SourceEntry>;

export function listSourcesForTopic(category: CategorySlug): SourceListing {
  return getSourcesForCategory(category);
}

/* ----------------------------------------------------------------
   Internals
---------------------------------------------------------------- */

function finalize(
  text: string,
  block: string,
  opts: { minWords?: number; allowGuarded?: boolean } = {},
): GeneratedBlock {
  const audit = auditBlock(text, { block, ...opts });
  return { text, fallback: false, audit };
}

function finalizeFallback(reason: string, block: string): GeneratedBlock {
  const text = fallbackForMissing(reason);
  const audit = auditBlock(text, { block, minWords: 12 });
  return { text, fallback: true, audit };
}
