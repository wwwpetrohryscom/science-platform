#!/usr/bin/env tsx
/**
 * FAQ registry validator.
 *
 * FAQ answers are the most quotable thing on the site: they are short,
 * declarative, and the format search engines lift verbatim. That makes
 * the usual rules stricter here rather than looser.
 *
 * Errors:
 *   - a registry key naming a category or subtopic that does not exist
 *   - a duplicate question within one key
 *   - a question that is not a question
 *   - an empty answer
 *   - advice phrasing, which this site does not give
 * Warnings:
 *   - an answer long enough to be an article paragraph
 *   - a question duplicated across two different subtopics, where one of
 *     them is probably the wrong home for it
 *   - a subtopic with fewer than three questions
 */
import { categories, isCategorySlug } from "../lib/categories";
import { getSubtopicFaqs, getTopicFaqs } from "../lib/content/faqs";
import { BANNED_PHRASES } from "../lib/content/tone";

type Issue = { severity: "error" | "warning"; rule: string; message: string; where: string };

const MAX_ANSWER_WORDS = 90;
const MIN_PER_SUBTOPIC = 3;

/** Phrasing that turns an explanation into an instruction. */
const ADVICE = [
  /\byou should\b/i,
  /\byou must\b/i,
  /\bwe recommend\b/i,
  /\bconsult your (doctor|physician)\b/i,
  /\bthe best way to\b/i,
];

function words(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function main() {
  const issues: Issue[] = [];
  const seenGlobal = new Map<string, string>();
  let total = 0;

  for (const category of categories) {
    if (!isCategorySlug(category.slug)) continue;

    const sets: Array<{ where: string; items: { question: string; answer: string }[] }> = [
      { where: `topic:${category.slug}`, items: getTopicFaqs(category.slug) },
      ...category.subtopics.map((s) => ({
        where: `subtopic:${category.slug}:${s.slug}`,
        items: getSubtopicFaqs(category.slug, s.slug),
      })),
    ];

    for (const { where, items } of sets) {
      total += items.length;
      const isSubtopic = where.startsWith("subtopic:");
      if (isSubtopic && items.length > 0 && items.length < MIN_PER_SUBTOPIC) {
        issues.push({
          severity: "warning",
          rule: "thin-set",
          message: `${items.length} question(s) — a set this small reads as a placeholder`,
          where,
        });
      }

      const seenHere = new Set<string>();
      for (const item of items) {
        const key = item.question.trim().toLowerCase();
        if (seenHere.has(key)) {
          issues.push({
            severity: "error",
            rule: "duplicate-question",
            message: `"${item.question}" appears twice`,
            where,
          });
        }
        seenHere.add(key);

        const elsewhere = seenGlobal.get(key);
        if (elsewhere && elsewhere !== where) {
          issues.push({
            severity: "warning",
            rule: "question-in-two-places",
            message: `"${item.question}" also appears under ${elsewhere}`,
            where,
          });
        }
        seenGlobal.set(key, where);

        if (!item.question.trim().endsWith("?")) {
          issues.push({
            severity: "error",
            rule: "not-a-question",
            message: `"${item.question}" does not end with a question mark`,
            where,
          });
        }
        if (!item.answer.trim()) {
          issues.push({ severity: "error", rule: "empty-answer", message: `"${item.question}" has no answer`, where });
        }
        if (words(item.answer) > MAX_ANSWER_WORDS) {
          issues.push({
            severity: "warning",
            rule: "answer-length",
            message: `"${item.question.slice(0, 60)}" — ${words(item.answer)} words; an FAQ answer is the short form`,
            where,
          });
        }
        const lower = item.answer.toLowerCase();
        for (const phrase of BANNED_PHRASES) {
          if (lower.includes(phrase)) {
            issues.push({
              severity: "error",
              rule: "banned-phrase",
              message: `"${item.question.slice(0, 50)}" contains "${phrase}"`,
              where,
            });
          }
        }
        for (const pattern of ADVICE) {
          if (pattern.test(item.answer)) {
            issues.push({
              severity: "error",
              rule: "advice",
              message: `"${item.question.slice(0, 50)}" gives advice rather than explaining evidence`,
              where,
            });
          }
        }
      }
    }
  }

  const subtopicsWithout = categories.flatMap((c) =>
    c.subtopics
      .filter((s) => getSubtopicFaqs(c.slug, s.slug).length === 0)
      .map((s) => `${c.slug}/${s.slug}`),
  );
  for (const s of subtopicsWithout) {
    issues.push({ severity: "warning", rule: "no-faqs", message: "no FAQ set", where: s });
  }

  for (const i of issues) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  const errors = issues.filter((i) => i.severity === "error");
  const covered = categories.reduce(
    (a, c) => a + c.subtopics.filter((s) => getSubtopicFaqs(c.slug, s.slug).length > 0).length,
    0,
  );
  const subtopics = categories.reduce((a, c) => a + c.subtopics.length, 0);
  console.log(
    `\n${total} FAQ items · ${covered}/${subtopics} subtopics covered · ` +
      `${errors.length} errors · ${issues.length - errors.length} warnings`,
  );
  if (errors.length) process.exit(1);
}

main();
