/**
 * Content validator.
 *
 * Corpus-level rules that the existing per-article frontmatter parser
 * (in `lib/content.ts`) does not — and shouldn't — enforce. The parser
 * fails build on schema violations; this validator emits a graded
 * report of additional editorial rules.
 *
 * Each rule has a name so failures aggregate cleanly:
 *   "23 articles missing source citations"
 *   "5 articles have heading-level jumps"
 *
 * Designed to be invoked from `scripts/validate-content.ts` (CLI) and
 * also reusable from a CI step.
 *
 * Severity:
 *   - error   → blocks the build (used by validate-content.ts exit code)
 *   - warning → reported, does not block
 */
import { isAuthoritativeUrl, extractCitationUrls } from "@/lib/sources";
import type { CategorySlug } from "@/lib/categories";

export type ValidationSeverity = "error" | "warning";

export type ValidationIssue = {
  severity: ValidationSeverity;
  rule: string;
  message: string;
  /** Absolute path of the offending file. */
  filepath: string;
};

/** Minimal article shape this validator needs. Decoupled from the
 *  rendering pipeline so the script can validate raw files without
 *  pulling in `marked` and the React tree. */
export type ValidatableArticle = {
  filepath: string;
  /** Path-derived. */
  category: CategorySlug;
  subtopic: string;
  slug: string;
  /** Raw frontmatter as parsed by gray-matter. */
  frontmatter: Record<string, unknown>;
  /** Raw markdown body (after frontmatter has been stripped). */
  body: string;
  locale: string;
  /** Article vs Insight — Insights have a separate schema (no `type`,
   *  has `argument`); article-shaped rules are skipped for insights. */
  kind: "article" | "insight";
};

export type ValidationReport = {
  ok: boolean;
  issues: ValidationIssue[];
};

const REQUIRED_ARTICLE_KEYS = [
  "title",
  "excerpt",
  "type",
  "author",
  "publishedDate",
  "updatedDate",
] as const;

const REQUIRED_INSIGHT_KEYS = [
  "title",
  "excerpt",
  "argument",
  "category",
  "author",
  "publishedDate",
  "updatedDate",
] as const;

const ALLOWED_TYPES = new Set(["seo", "pillar", "expert"]);

export function validateArticle(article: ValidatableArticle): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const fm = article.frontmatter;
  const fp = article.filepath;
  const isInsight = article.kind === "insight";

  // 1. Required frontmatter keys (different schema for insights).
  const requiredKeys = isInsight ? REQUIRED_INSIGHT_KEYS : REQUIRED_ARTICLE_KEYS;
  for (const key of requiredKeys) {
    if (!fm[key]) {
      issues.push({
        severity: "error",
        rule: "frontmatter",
        message: `missing required frontmatter key "${key}"`,
        filepath: fp,
      });
    }
  }

  // 2. Type must be one of the three article types (articles only —
  //    insights don't carry a `type` field).
  if (!isInsight && fm.type && !ALLOWED_TYPES.has(String(fm.type))) {
    issues.push({
      severity: "error",
      rule: "frontmatter",
      message: `type must be one of seo|pillar|expert (got "${fm.type}")`,
      filepath: fp,
    });
  }

  // 3. updatedDate ≥ publishedDate.
  const pub = isoDate(fm.publishedDate);
  const upd = isoDate(fm.updatedDate);
  if (pub && upd && upd < pub) {
    issues.push({
      severity: "error",
      rule: "updatedDate",
      message: `updatedDate (${upd}) is before publishedDate (${pub})`,
      filepath: fp,
    });
  }

  // 4. Slug consistency: file basename must match the path-derived slug.
  // (Only meaningful for content files. Path-derived slugs are passed in
  // from the walker, so this is a tautology unless the walker is buggy —
  // we keep the rule as a guard against future refactors.)
  const filenameSlug = fp.split("/").pop()?.replace(/\.md$/, "");
  if (filenameSlug && filenameSlug !== article.slug) {
    issues.push({
      severity: "error",
      rule: "slug",
      message: `filename slug (${filenameSlug}) does not match path slug (${article.slug})`,
      filepath: fp,
    });
  }

  // 5. Heading rules:
  //    - body should not contain a level-1 heading (title is in frontmatter)
  //    - levels should not skip
  const h1 = (article.body.match(/^#\s+/gm) ?? []).length;
  if (h1 > 0) {
    issues.push({
      severity: "warning",
      rule: "h1",
      message: `body contains ${h1} H1(s); H1 should come from frontmatter title`,
      filepath: fp,
    });
  }
  const headingLevels = [...article.body.matchAll(/^(#{2,6})\s+.+$/gm)].map(
    (m) => m[1].length,
  );
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] > headingLevels[i - 1] + 1) {
      issues.push({
        severity: "warning",
        rule: "heading-structure",
        message: `heading level jumps from H${headingLevels[i - 1]} to H${headingLevels[i]}`,
        filepath: fp,
      });
      break;
    }
  }

  // 6. No empty sections (heading immediately followed by another heading).
  const empty = article.body.match(/^#{2,6}.+\n+(?=#{1,6}\s)/gm);
  if (empty && empty.length > 0) {
    issues.push({
      severity: "warning",
      rule: "empty-section",
      message: `${empty.length} empty section(s)`,
      filepath: fp,
    });
  }

  // 7. Sources rule. Three acceptable forms:
  //      (a) `## Sources` block in body, OR
  //      (b) frontmatter `sources` array, OR
  //      (c) at least two inline citations in body markdown.
  //    Severity is `warning` so pre-existing content can migrate
  //    incrementally; CI can promote to error via the `--strict` flag.
  const fmSources = Array.isArray(fm.sources) ? (fm.sources as unknown[]) : [];
  const bodyUrls = extractCitationUrls(article.body);
  const hasBodySourcesBlock = /^##\s+Sources/im.test(article.body);
  const hasInlineCitations = bodyUrls.length >= 2;
  if (
    fmSources.length === 0 &&
    !hasBodySourcesBlock &&
    !hasInlineCitations
  ) {
    issues.push({
      severity: "warning",
      rule: "sources",
      message:
        "no sources found — add a `## Sources` block, a `sources:` frontmatter array, or inline citations",
      filepath: fp,
    });
  }
  // Authority check is a *warning* (an unknown citation isn't necessarily
  // wrong, but it's worth flagging for editorial review).
  for (const url of bodyUrls) {
    if (!isAuthoritativeUrl(url, article.category)) {
      issues.push({
        severity: "warning",
        rule: "source-authority",
        message: `citation ${url} is not in the authoritative registry for ${article.category}`,
        filepath: fp,
      });
    }
  }

  // 8. Internal links (only required for SEO + pillar; expert insights
  //    sometimes stand alone).
  const type = String(fm.type ?? "");
  if (type === "seo" || type === "pillar") {
    const hasInternal = /\]\(\/[a-z]{2}\//.test(article.body);
    if (!hasInternal) {
      issues.push({
        severity: "warning",
        rule: "internal-links",
        message: "no internal links found — run `npm run content:link`",
        filepath: fp,
      });
    }
  }

  return issues;
}

/**
 * Corpus-level rules that need cross-article context.
 */
export function validateCorpus(articles: ValidatableArticle[]): ValidationReport {
  const issues: ValidationIssue[] = articles.flatMap(validateArticle);

  // Pillar uniqueness per (locale, category, subtopic).
  const pillarKey = (a: ValidatableArticle) =>
    `${a.locale}/${a.category}/${a.subtopic}`;
  const pillars = new Map<string, ValidatableArticle[]>();
  for (const a of articles) {
    if (String(a.frontmatter.type) !== "pillar") continue;
    const key = pillarKey(a);
    const list = pillars.get(key) ?? [];
    list.push(a);
    pillars.set(key, list);
  }
  for (const [key, list] of pillars) {
    if (list.length > 1) {
      for (const a of list) {
        issues.push({
          severity: "error",
          rule: "pillar-unique",
          message: `multiple pillar articles for ${key}: ${list
            .map((x) => x.slug)
            .join(", ")}`,
          filepath: a.filepath,
        });
      }
    }
  }

  // Author references: every `author` must exist in lib/authors.ts.
  // We can't import authors.ts here without dragging the @/ alias into
  // a script-runtime context, so the script entrypoint passes the set
  // of valid author ids. To keep this function pure, we just check
  // shape here — the script does the membership check.

  return {
    ok: issues.every((i) => i.severity !== "error"),
    issues,
  };
}

function isoDate(v: unknown): string | null {
  if (typeof v === "string") return v.slice(0, 10);
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return null;
}
