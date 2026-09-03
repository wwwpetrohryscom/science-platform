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
import {
  isAuthoritativeUrlAnyCategory,
  extractCitationUrls,
} from "@/lib/sources";
import type { CategorySlug } from "@/lib/categories";
import {
  detectFakeCitations,
  detectKeywordStuffing,
  detectLinkSpam,
  detectRepeatedPhrases,
  similarityRatio,
} from "@/lib/content/quality";
import { BANNED_PHRASES } from "@/lib/content/tone";
import { CONTENT_RULES } from "@/lib/content/rules";

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
  //
  // Checked against the whole registry rather than the article's own
  // category. The registry is organised by subject area for display, not
  // to fence citations: an ecology article on climate projections
  // legitimately cites an American Meteorological Society journal, and a
  // biology article on adaptation legitimately cites IPCC WG2. Flagging
  // those trained the reader of this report to skim past the rule, which
  // is the failure mode that matters — the rule exists to surface the
  // citation that comes from nowhere recognised at all.
  for (const url of bodyUrls) {
    if (!isAuthoritativeUrlAnyCategory(url)) {
      issues.push({
        severity: "warning",
        rule: "source-authority",
        message: `citation ${url} is not in the source registry for any subject area`,
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

  // 9. Spam-shape signals, measured over the PROSE only.
  //
  //    The `## Sources` block is by nature link-dense and repetitive: a
  //    page citing five chapters of the same reference work repeats the
  //    publisher name and URL stem five times, which is correct
  //    citation practice and looked like phrase-spam to a detector that
  //    read the whole file. Running these over the sources block was
  //    measuring the wrong region of the document, and the false
  //    positives it produced are exactly what trains an editor to stop
  //    reading the report.
  //
  //    Warnings only — the goal is visibility before a page is indexed.
  const prose = article.body.replace(/^##\s+Sources[\s\S]*/im, "");
  const stuffing = detectKeywordStuffing(prose);
  if (stuffing.length > 0) {
    const top = stuffing[0];
    issues.push({
      severity: "warning",
      rule: "keyword-stuffing",
      message: `term "${top.term}" appears ${top.count}× (${(top.ratio * 100).toFixed(1)}% of body)`,
      filepath: fp,
    });
  }
  const repeats = detectRepeatedPhrases(prose);
  if (repeats.length > 0) {
    issues.push({
      severity: "warning",
      rule: "repeated-phrase",
      message: `phrase "${repeats[0].phrase}" repeats ${repeats[0].count}×`,
      filepath: fp,
    });
  }
  const linkSpam = detectLinkSpam(prose);
  if (linkSpam) {
    issues.push({
      severity: "warning",
      rule: "link-density",
      message: `${(linkSpam.ratio * 100).toFixed(1)}% link words — body reads as a link list`,
      filepath: fp,
    });
  }

  // 10. Banned-phrase scan — sensationalism, fake-cure language, etc.
  //     A warning, not an error: substring matches can't tell apart
  //     "settled science" (banned) from "not a settled science" (a
  //     legitimate negation). The editor reviews each hit; CI promotes
  //     to error via `--strict` when the corpus is ready for it.
  const lower = article.body.toLowerCase();
  const banned = BANNED_PHRASES.filter((p) => lower.includes(p));
  if (banned.length > 0) {
    issues.push({
      severity: "warning",
      rule: "banned-phrase",
      message: `body contains banned phrase(s): ${banned.join(", ")} — verify usage is not endorsement`,
      filepath: fp,
    });
  }

  // 11. Fake-citation shape — "Smith et al., 2023" without an
  //     accompanying URL. We can't prove a citation is invented from
  //     shape alone, so this is a warning the editor must clear.
  const fakeShape = detectFakeCitations(article.body);
  if (fakeShape.length > 0) {
    issues.push({
      severity: "warning",
      rule: "fake-citation",
      message: `unlinked citation-shaped text: ${fakeShape.slice(0, 3).join("; ")}`,
      filepath: fp,
    });
  }

  // 12. Sources-block-link regression guard. The internal linker
  //     masks `## Sources` regions out of injection. A regex bug in
  //     2026-05 silently failed to mask the block, allowing wrong-sense
  //     links to land inside Sources lists. This rule fails the build
  //     if any internal link reappears inside a Sources block.
  const sourcesBlockMatch = article.body.match(/^##\s+Sources[\s\S]*/im);
  if (sourcesBlockMatch) {
    const block = sourcesBlockMatch[0];
    const internalInSources = [...block.matchAll(/\]\(\/[a-z]{2}\//g)];
    if (internalInSources.length > 0) {
      issues.push({
        severity: "error",
        rule: "sources-block-link",
        message: `${internalInSources.length} internal link(s) found inside the Sources block — the linker should never touch this section`,
        filepath: fp,
      });
    }
  }

  // 13. Tooling masks that escaped a script's restore pass. An error, not
  //     a warning: it is always a bug and it is always reader-visible.
  //     The glossary linker shipped "__G16__" into two published headings
  //     because its restore pass did not handle nested masks, and nothing
  //     would have caught it before a reader did.
  for (const pattern of CONTENT_RULES.TOOLING_PLACEHOLDERS) {
    const hit = article.body.match(pattern);
    if (hit) {
      issues.push({
        severity: "error",
        rule: "tooling-placeholder",
        message: `body contains an unrestored masking token "${hit[0].trim()}" — a content script masked a region and did not put it back`,
        filepath: fp,
      });
    }
  }

  // 13. Dates must not be in the future. A publishedDate ahead of today
  //     is either a typo or a deliberate freshness signal; both are wrong
  //     because the date is published as schema.org dateModified.
  const today = new Date().toISOString().slice(0, 10);
  for (const key of ["publishedDate", "updatedDate"] as const) {
    const value = isoDate(fm[key]);
    if (value && value > today) {
      issues.push({
        severity: "error",
        rule: "future-date",
        message: `${key} (${value}) is in the future`,
        filepath: fp,
      });
    }
  }

  // 14. Excerpt length. The excerpt is the meta description; too short
  //     carries no information, too long is truncated in the SERP.
  const excerpt = typeof fm.excerpt === "string" ? fm.excerpt : "";
  if (excerpt && (excerpt.length < 80 || excerpt.length > 320)) {
    issues.push({
      severity: "warning",
      rule: "excerpt-length",
      message: `excerpt is ${excerpt.length} characters (want 80-320)`,
      filepath: fp,
    });
  }

  // 15. No credential or named-reviewer claims. Attribution on this site
  //     is organizational; a page asserting a doctorate or a named
  //     reviewer is asserting something the site cannot support.
  //     Checked on the FORM of the claim, which is why the patterns are
  //     anchored to attribution phrasing rather than to the bare words —
  //     an article about a professor's published work is legitimate.
  for (const pattern of CREDENTIAL_CLAIM_PATTERNS) {
    const m = article.body.match(pattern);
    if (m) {
      issues.push({
        severity: "error",
        rule: "credential-claim",
        message: `body asserts personal credentials or review ("${m[0].trim()}") — attribution on this site is organizational`,
        filepath: fp,
      });
    }
  }

  // 16. Internal-link anchor quality. Mechanical injection produces two
  //     signatures: single-word anchors, and the same anchor pointing at
  //     the same URL more than once in a page. Both read as anchor
  //     stuffing rather than as a link placed where the idea is used.
  const internalLinks = [...article.body.matchAll(/\[([^\]]+)\]\((\/[a-z]{2}\/[^)]+)\)/g)]
    .map((m) => ({ anchor: m[1], url: m[2] }));

  // Word-count is only a meaningful proxy for "is this anchor a phrase"
  // in a language that writes phrases as separate words. German
  // compounds them: the English anchor "Earth observation" becomes
  // "Erdbeobachtung", and the rule reported 28 single-word anchors on a
  // German page whose English source had 7. Pressuring a translator to
  // pad those into multi-word phrases would make the German worse.
  //
  // Link placement is inherited from the English source anyway, so the
  // rule is enforced where it can be acted on and where fixing it fixes
  // every locale at once.
  const singleWord =
    article.locale === "en"
      ? internalLinks.filter((l) => l.anchor.trim().split(/\s+/).length === 1)
      : [];
  if (singleWord.length > 2) {
    issues.push({
      severity: "warning",
      rule: "anchor-quality",
      message: `${singleWord.length} single-word internal anchors (${singleWord
        .slice(0, 4)
        .map((l) => `"${l.anchor}"`)
        .join(", ")}) — anchor text should be a phrase that reads in the sentence`,
      filepath: fp,
    });
  }

  const anchorPairs = new Map<string, number>();
  for (const l of internalLinks) {
    const key = `${l.anchor.toLowerCase()}||${l.url}`;
    anchorPairs.set(key, (anchorPairs.get(key) ?? 0) + 1);
  }
  const repeatedPairs = [...anchorPairs.entries()].filter(([, n]) => n > 1);
  if (repeatedPairs.length > 0) {
    issues.push({
      severity: "warning",
      rule: "anchor-repeat",
      message: `${repeatedPairs.length} anchor/target pair(s) repeated in one page — link the idea once`,
      filepath: fp,
    });
  }

  const targetCounts = new Map<string, number>();
  for (const l of internalLinks) {
    targetCounts.set(l.url, (targetCounts.get(l.url) ?? 0) + 1);
  }
  const overLinked = [...targetCounts.entries()].filter(([, n]) => n > 2);
  if (overLinked.length > 0) {
    issues.push({
      severity: "warning",
      rule: "anchor-repeat",
      message: `links to ${overLinked[0][0]} ${overLinked[0][1]}× from one page`,
      filepath: fp,
    });
  }

  // 17. Source count and source diversity. A substantive page resting on
  //     a single organization is a single point of failure for its
  //     factual claims, which is a different problem from having too few
  //     links.
  if (!isInsight && bodyUrls.length > 0) {
    if (bodyUrls.length < 3) {
      issues.push({
        severity: "warning",
        rule: "source-count",
        message: `${bodyUrls.length} external citation(s) — a substantive article should rest on more than one or two`,
        filepath: fp,
      });
    }
    const hosts = new Set(
      bodyUrls.map((u) => {
        try {
          return new URL(u).hostname.replace(/^www\./, "");
        } catch {
          return u;
        }
      }),
    );
    if (bodyUrls.length >= 3 && hosts.size === 1) {
      issues.push({
        severity: "warning",
        rule: "source-diversity",
        message: `every citation is from ${[...hosts][0]} — no independent corroboration`,
        filepath: fp,
      });
    }
  }

  return issues;
}

/**
 * Attribution claims the site cannot support. Matched on the phrasing
 * that asserts a credential or a review, not on the bare word: an
 * article that discusses a named researcher's published work is
 * legitimate and must not trip this rule.
 */
const CREDENTIAL_CLAIM_PATTERNS: RegExp[] = [
  /\b(?:reviewed|verified|fact-?checked|approved)\s+by\s+(?:dr\.?|prof\.?|professor)\b/i,
  /\bmedically\s+reviewed\b/i,
  /\bour\s+(?:team\s+of\s+)?(?:phd|ph\.d|doctors|scientists|experts)\b/i,
  /\bwritten\s+by\s+(?:dr\.?|prof\.?|professor)\b/i,
  /\b(?:author|reviewer)\s*:\s*(?:dr\.?|prof\.?)/i,
];

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

  // Title and excerpt uniqueness, per locale. Duplicates are a direct
  // cause of the "duplicate title tag" / "duplicate meta description"
  // class of index problems, and they usually mean two pages are
  // competing for the same query rather than covering different ground.
  for (const [field, rule] of [
    ["title", "title-unique"],
    ["excerpt", "excerpt-unique"],
  ] as const) {
    const seen = new Map<string, ValidatableArticle[]>();
    for (const a of articles) {
      const value = String(a.frontmatter[field] ?? "").trim().toLowerCase();
      if (!value) continue;
      const key = `${a.locale}::${value}`;
      seen.set(key, [...(seen.get(key) ?? []), a]);
    }
    for (const [, list] of seen) {
      if (list.length < 2) continue;
      for (const a of list) {
        issues.push({
          severity: "error",
          rule,
          message: `duplicate ${field} shared with ${list
            .filter((x) => x !== a)
            .map((x) => x.slug)
            .join(", ")}`,
          filepath: a.filepath,
        });
      }
    }
  }

  // Pillar coverage. A subtopic with real depth and no pillar has no
  // entry point; readers and crawlers arrive at a flat list of siblings
  // with nothing declaring the shape of the topic.
  const bySubtopic = new Map<string, ValidatableArticle[]>();
  for (const a of articles) {
    if (a.kind !== "article") continue;
    bySubtopic.set(pillarKey(a), [...(bySubtopic.get(pillarKey(a)) ?? []), a]);
  }
  for (const [key, list] of bySubtopic) {
    if (!key.startsWith("en/")) continue; // EN is the source of truth
    const hasPillar = list.some((a) => String(a.frontmatter.type) === "pillar");
    if (!hasPillar && list.length >= 3) {
      for (const a of list) {
        issues.push({
          severity: "error",
          rule: "pillar-missing",
          message: `${key} has ${list.length} articles and no pillar`,
          filepath: a.filepath,
        });
      }
    }
  }

  // `pillar:` must name a real pillar in the same subtopic, and a pillar
  // must not point at itself.
  const pillarSlugBySubtopic = new Map<string, string>();
  for (const a of articles) {
    if (String(a.frontmatter.type) === "pillar") {
      pillarSlugBySubtopic.set(pillarKey(a), a.slug);
    }
  }
  for (const a of articles) {
    const ref = a.frontmatter.pillar;
    if (typeof ref !== "string" || ref === "") continue;
    const expected = pillarSlugBySubtopic.get(pillarKey(a));
    if (String(a.frontmatter.type) === "pillar") {
      issues.push({
        severity: "error",
        rule: "pillar-ref",
        message: `article is itself the pillar but declares pillar: ${ref}`,
        filepath: a.filepath,
      });
    } else if (expected && ref !== expected) {
      issues.push({
        severity: "error",
        rule: "pillar-ref",
        message: `pillar: ${ref} but the pillar for ${pillarKey(a)} is ${expected}`,
        filepath: a.filepath,
      });
    } else if (!expected) {
      issues.push({
        severity: "warning",
        rule: "pillar-ref",
        message: `pillar: ${ref} but no pillar exists for ${pillarKey(a)}`,
        filepath: a.filepath,
      });
    }
  }

  // Orphans: an EN page with no inbound internal link from any other EN
  // page is reachable only through a hub listing. That is a real
  // discoverability problem and it is invisible without the whole graph.
  const enArticles = articles.filter((a) => a.locale === "en");
  const urlOf = (a: ValidatableArticle) =>
    a.kind === "insight"
      ? `/en/insight/${a.slug}`
      : `/en/${a.category}/${a.subtopic}/${a.slug}`;
  const inbound = new Map<string, Set<string>>();
  for (const a of enArticles) inbound.set(urlOf(a), new Set());
  for (const a of enArticles) {
    const self = urlOf(a);
    for (const m of a.body.matchAll(/\]\((\/en\/[^)#?\s]*)/g)) {
      const target = m[1].replace(/\/$/, "");
      const set = inbound.get(target);
      if (set && target !== self) set.add(self);
    }
  }
  for (const a of enArticles) {
    if ((inbound.get(urlOf(a)) ?? new Set()).size === 0) {
      issues.push({
        severity: "warning",
        rule: "orphan",
        message: "no inbound internal links from any other page",
        filepath: a.filepath,
      });
    }
  }

  // Pillar/supporting link relationship. A pillar that does not point at
  // its cluster is a landing page, not a hub; a supporting article that
  // never points up leaves the cluster undeclared to a crawler.
  for (const [key, list] of bySubtopic) {
    if (!key.startsWith("en/")) continue;
    const pillar = list.find((a) => String(a.frontmatter.type) === "pillar");
    if (!pillar) continue;
    const supporting = list.filter((a) => a !== pillar);
    if (supporting.length === 0) continue;

    const linkedFromPillar = supporting.filter((a) =>
      pillar.body.includes(urlOf(a)),
    ).length;
    if (linkedFromPillar * 2 < supporting.length) {
      issues.push({
        severity: "warning",
        rule: "pillar-coverage",
        message: `pillar links to ${linkedFromPillar} of ${supporting.length} supporting articles`,
        filepath: pillar.filepath,
      });
    }
    for (const a of supporting) {
      if (!a.body.includes(urlOf(pillar))) {
        issues.push({
          severity: "warning",
          rule: "pillar-uplink",
          message: `does not link up to its pillar (${pillar.slug})`,
          filepath: a.filepath,
        });
      }
    }
  }

  // Near-duplicate bodies. Compared within a locale only; a translation
  // legitimately mirrors its source. The threshold is deliberately high
  // — scientific writing on adjacent subjects shares a lot of
  // vocabulary, and a rule that fires on that would be noise.
  for (let i = 0; i < enArticles.length; i++) {
    for (let j = i + 1; j < enArticles.length; j++) {
      const ratio = similarityRatio(enArticles[i].body, enArticles[j].body);
      if (ratio > 0.72) {
        issues.push({
          severity: "error",
          rule: "duplicate-body",
          message: `body is ${(ratio * 100).toFixed(0)}% token-identical to ${enArticles[j].slug}`,
          filepath: enArticles[i].filepath,
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
