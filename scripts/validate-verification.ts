#!/usr/bin/env tsx
/**
 * Verification-coverage gate.
 *
 * Answers one question the link checker cannot: which English scientific
 * articles have had an independent reader check their claims against the
 * sources cited for them, and which have not.
 *
 * It deliberately reports coverage rather than asserting correctness. An
 * article with a ledger entry is one where someone did the work and
 * wrote down what they found, including the claims they had to correct.
 * An article without one is not wrong — it is unchecked, and the
 * difference should be visible rather than assumed away.
 *
 * Errors:
 *   - a ledger entry naming an article that does not exist
 *   - a ledger file that does not parse
 *   - a finding with a non-`verified` disposition and no note
 * Warnings:
 *   - articles with no verification record (the coverage gap itself)
 *   - articles flagged `needs-editor`
 *
 * Usage:
 *   npm run content:verification
 *   tsx scripts/validate-verification.ts --json
 *   tsx scripts/validate-verification.ts --require-full   # CI gate
 */
import fs from "node:fs";
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { loadLedger, reviewsBySlug, summarise } from "../lib/verification";

type Issue = {
  severity: "error" | "warning";
  rule: string;
  message: string;
  where: string;
};

async function main() {
  const asJson = process.argv.includes("--json");
  const requireFull = process.argv.includes("--require-full");

  const walked = await walkAllContent();
  // Scope: English scientific content. Translations inherit the review of
  // their source — checking a claim twice in two languages verifies the
  // translation, not the claim, and translation fidelity has its own gate.
  const en = walked.filter((w) => w.locale === "en");
  const bySlug = new Map(en.map((w) => [w.slug, w]));

  const reviews = reviewsBySlug();
  const issues: Issue[] = [];

  for (const batch of loadLedger()) {
    if (batch.method === "UNPARSEABLE") {
      issues.push({
        severity: "error",
        rule: "ledger-parse",
        message: "ledger file does not parse as JSON",
        where: `data/verification/batches/${batch.batchId}.json`,
      });
      continue;
    }
    // The arrangement under which a batch was checked.
    //
    // A batch written after this field existed must declare it, because
    // the difference between a self-check and an independent one is the
    // difference between two levels of assurance and the field is the
    // only place that distinction is recorded. Older batches predate the
    // field and are not retro-labelled: guessing at the arrangement of a
    // review that has already happened would be inventing the record.
    const METHODS = new Set(["independent", "same-pass", "manual"]);
    if (batch.verificationMethod !== undefined) {
      if (!METHODS.has(batch.verificationMethod)) {
        issues.push({
          severity: "error",
          rule: "ledger-method-unknown",
          message: `verificationMethod "${batch.verificationMethod}" is not one of ${[...METHODS].join(", ")}`,
          where: batch.batchId,
        });
      }
      // A batch that calls itself independent must say, in prose, what
      // made it independent, and must not simultaneously describe a
      // self-check.
      //
      // The first version of this rule searched the prose for the word
      // "independent" and was walked straight through by the existing
      // batches, whose method reads "...which is NOT the independent
      // arrangement the older batches used". A sentence denying
      // independence contains the word; the rule was testing for a token
      // when the question is what the sentence says. So the check is now
      // for the phrases that describe a self-check, which cannot appear
      // in an honest description of an independent one.
      const SELF_CHECK =
        /same pass|same-pass|author and checker were the same|checked their own|self-check/i;
      if (batch.verificationMethod === "independent") {
        if (SELF_CHECK.test(batch.method)) {
          issues.push({
            severity: "error",
            rule: "ledger-method-contradiction",
            message:
              'verificationMethod is "independent" but `method` describes a self-check',
            where: batch.batchId,
          });
        } else if (!/independent|separate (pass|process|agent|reviewer)/i.test(batch.method)) {
          issues.push({
            severity: "error",
            rule: "ledger-method-unexplained",
            message:
              'verificationMethod is "independent" but `method` does not describe what made it independent',
            where: batch.batchId,
          });
        }
      }
      if (batch.verificationMethod === "same-pass" && !SELF_CHECK.test(batch.method)) {
        issues.push({
          severity: "error",
          rule: "ledger-method-unexplained",
          message:
            'verificationMethod is "same-pass" but `method` does not say so — the prose and the label must agree',
          where: batch.batchId,
        });
      }
    } else if (batch.reviewedDate >= "2026-09-06") {
      issues.push({
        severity: "error",
        rule: "ledger-method-missing",
        message:
          "verificationMethod is required for batches reviewed on or after 2026-09-06",
        where: batch.batchId,
      });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(batch.reviewedDate)) {
      issues.push({
        severity: "error",
        rule: "ledger-date",
        message: `reviewedDate "${batch.reviewedDate}" is not an ISO date`,
        where: batch.batchId,
      });
    }
    for (const a of batch.articles) {
      if (!bySlug.has(a.slug)) {
        issues.push({
          severity: "error",
          rule: "ledger-orphan",
          message: `review names "${a.slug}", which is not an English article`,
          where: batch.batchId,
        });
      }
      const onDisk = a.path && fs.existsSync(path.join(PROJECT_ROOT, a.path));
      if (a.path && !onDisk) {
        issues.push({
          severity: "error",
          rule: "ledger-path",
          message: `review path "${a.path}" does not exist`,
          where: batch.batchId,
        });
      }
      for (const f of a.findings ?? []) {
        if (f.disposition !== "verified" && !f.note?.trim()) {
          issues.push({
            severity: "error",
            rule: "finding-note",
            message: `a "${f.disposition}" finding on ${a.slug} has no note — a claim that was changed must say why`,
            where: batch.batchId,
          });
        }
      }
      if (a.status === "needs-editor") {
        issues.push({
          severity: "warning",
          rule: "needs-editor",
          message: `${a.slug}: ${(a.openQuestions ?? ["flagged for editorial attention"]).join("; ")}`,
          where: batch.batchId,
        });
      }
    }
  }

  const unreviewed = en.filter((w) => !reviews.has(w.slug));
  for (const w of unreviewed) {
    issues.push({
      severity: requireFull ? "error" : "warning",
      rule: "unverified",
      message: "no independent verification record",
      where: path.relative(PROJECT_ROOT, w.filepath),
    });
  }

  const coverage = en.length === 0 ? 1 : (en.length - unreviewed.length) / en.length;
  const summary = summarise();

  if (asJson) {
    console.log(
      JSON.stringify(
        { coverage, englishArticles: en.length, unreviewed: unreviewed.length, summary, issues },
        null,
        2,
      ),
    );
    process.exit(issues.some((i) => i.severity === "error") ? 1 : 0);
  }

  for (const i of issues.filter((x) => x.rule !== "unverified")) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  if (unreviewed.length > 0 && unreviewed.length <= 40) {
    for (const w of unreviewed) {
      console.log(`⚠ [unverified] ${path.relative(PROJECT_ROOT, w.filepath)}`);
    }
  } else if (unreviewed.length > 40) {
    console.log(`⚠ [unverified] ${unreviewed.length} articles have no verification record`);
  }

  console.log(
    `\ncoverage ${(coverage * 100).toFixed(1)}% — ${en.length - unreviewed.length}/${en.length} English articles reviewed`,
  );
  console.log(
    `${summary.batches} batches · ${summary.claimsChecked} claims checked · ` +
      `clean ${summary.byStatus.clean} · amended ${summary.byStatus.amended} · needs-editor ${summary.byStatus["needs-editor"]}`,
  );
  const methods = loadLedger().reduce<Record<string, number>>((acc, b) => {
    const k = b.verificationMethod ?? "unlabelled (predates the field)";
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
  console.log(
    `verification method — ${Object.entries(methods)
      .sort((a, b) => b[1] - a[1])
      .map(([k, n]) => `${k} ${n}`)
      .join(" · ")}`,
  );
  console.log(
    `dispositions — verified ${summary.byDisposition.verified} · corrected ${summary.byDisposition.corrected} · ` +
      `qualified ${summary.byDisposition.qualified} · removed ${summary.byDisposition.removed} · resourced ${summary.byDisposition.resourced}`,
  );

  if (issues.some((i) => i.severity === "error")) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
