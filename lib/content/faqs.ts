/**
 * FAQ data for topic and subtopic hubs.
 *
 * Editorial rules:
 * - Every question/answer pair must be answerable from existing
 *   article content on the site or from a clearly named authority.
 * - Answers are short (<= ~80 words), calm, and non-clickbait.
 * - No medical advice. No unsupported "best X" claims.
 * - Visible on page wherever FAQPage JSON-LD is emitted.
 *
 * Keyed on `topic:<slug>` and `subtopic:<categorySlug>:<subtopicSlug>`
 * so hubs can request their own FAQ set without ambiguity.
 *
 * The items live in data/faqs/faqs.json. They were inline here while the
 * registry covered a handful of subtopics; a registry meant to cover all
 * twenty-four is data.
 */
import fs from "node:fs";
import path from "node:path";

import type { CategorySlug } from "@/lib/categories";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqRegistry = Record<string, FaqItem[]>;

function topicKey(category: CategorySlug): string {
  return `topic:${category}`;
}

function subtopicKey(category: CategorySlug, subtopic: string): string {
  return `subtopic:${category}:${subtopic}`;
}

const FAQ_PATH = path.join(process.cwd(), "data", "faqs", "faqs.json");

const REGISTRY: FaqRegistry = JSON.parse(
  fs.readFileSync(FAQ_PATH, "utf8"),
) as FaqRegistry;

export function getTopicFaqs(category: CategorySlug): FaqItem[] {
  return REGISTRY[topicKey(category)] ?? [];
}

export function getSubtopicFaqs(
  category: CategorySlug,
  subtopic: string,
): FaqItem[] {
  return REGISTRY[subtopicKey(category, subtopic)] ?? [];
}
