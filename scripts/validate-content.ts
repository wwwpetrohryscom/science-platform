#!/usr/bin/env tsx
/**
 * Validate every article on disk against the corpus rules in
 * `lib/content-validator.ts`.
 *
 * Exit codes:
 *   0 — clean (or warnings only)
 *   1 — at least one error
 *
 * Usage:
 *   npm run content:validate
 *   tsx scripts/validate-content.ts --json
 */
import path from "node:path";
import { walkAllContent } from "./_lib";
import { validateCorpus, type ValidatableArticle } from "../lib/content-validator";
import { authors } from "../lib/authors";

async function main() {
  const json = process.argv.includes("--json");
  const strict = process.argv.includes("--strict");
  const walked = await walkAllContent();

  const validatable: ValidatableArticle[] = walked.map((w) => ({
    filepath: w.filepath,
    category: w.category,
    subtopic: w.subtopic,
    slug: w.slug,
    frontmatter: w.frontmatter,
    body: w.body,
    locale: w.locale,
    kind: w.kind,
  }));

  const report = validateCorpus(validatable);

  // In strict mode, every warning becomes an error. Use this in CI
  // once the corpus has caught up to the conventions the validator
  // expects. The default mode emits warnings without blocking.
  if (strict) {
    for (const issue of report.issues) {
      if (issue.severity === "warning") issue.severity = "error";
    }
  }

  // Author membership check — done here because the validator stays
  // pure (no @/ aliases to author registry) so script-time we attach
  // it explicitly.
  const knownAuthors = new Set(Object.keys(authors));
  for (const w of walked) {
    const authorId = String(w.frontmatter.author ?? "");
    if (authorId && !knownAuthors.has(authorId)) {
      report.issues.push({
        severity: "error",
        rule: "author",
        message: `unknown author id "${authorId}" (add to lib/authors.ts)`,
        filepath: w.filepath,
      });
    }
  }
  // Recompute ok flag in case author errors were appended.
  report.ok = report.issues.every((i) => i.severity !== "error");

  if (json) {
    console.log(JSON.stringify(report, null, 2));
    process.exit(report.ok ? 0 : 1);
  }

  const errors = report.issues.filter((i) => i.severity === "error");
  const warnings = report.issues.filter((i) => i.severity === "warning");

  for (const issue of report.issues) {
    const sigil = issue.severity === "error" ? "✗" : "⚠";
    const rel = path.relative(process.cwd(), issue.filepath);
    console.log(`${sigil} [${issue.rule}] ${rel} — ${issue.message}`);
  }

  console.log(
    `\n${walked.length} articles · ${errors.length} errors · ${warnings.length} warnings`,
  );
  if (!report.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
