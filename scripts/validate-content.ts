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
  // Attribution must fall inside the desk's declared coverage.
  //
  // Checked at category level, not subtopic: a desk that covers
  // ecology/soils writing an ecology/ecosystems piece on agroecosystems
  // is a sensible editorial call, and a rule that forbade it would push
  // attribution toward whichever desk the taxonomy happened to name
  // rather than whichever desk did the work. A physics desk on a biology
  // article is a different thing, and that is what this catches.
  //
  // Three whole subtopics were attributed to a desk that did not declare
  // them while the desk that did held none of them, which is how the
  // rule earned its place.
  for (const w of walked) {
    const authorId = String(w.frontmatter.author ?? "");
    const desk = authors[authorId as keyof typeof authors];
    if (!desk) continue;
    const categories = new Set(desk.coverage.map((c) => c.split("/")[0]));
    if (!categories.has(w.category)) {
      report.issues.push({
        severity: "error",
        rule: "attribution-coverage",
        message: `${desk.name} does not declare coverage of ${w.category} (declares: ${desk.coverage.join(", ")})`,
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
