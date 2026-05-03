#!/usr/bin/env tsx
/**
 * Scaffold a new article from a template.
 *
 * Usage:
 *   tsx scripts/generate-article.ts \
 *     --keyword "What is ocean acidification" \
 *     --category ecology \
 *     --subtopic climate-change \
 *     --type seo \
 *     --locale en \
 *     --author climate-research-desk \
 *     [--pillar what-is-climate-change]
 *
 * The generator writes a file that already passes the validator on
 * everything except prose. It uses author IDs (matching the existing
 * `lib/authors.ts` registry) and the existing frontmatter shape:
 * `pillar` (not `pillarArticle`), `related` (not `relatedArticles`).
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import slugify from "slugify";
import { CONTENT_ROOT, LOCALES, CATEGORIES, todayISO, type Locale, type Category } from "./_lib";
import { authors } from "../lib/authors";
import { suggestSources } from "../lib/sources";

type Args = {
  keyword: string;
  category: Category;
  subtopic: string;
  type: "seo" | "pillar" | "expert";
  locale: Locale;
  author: string;
  pillar?: string;
};

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const get = (k: string) => {
    const i = argv.indexOf(`--${k}`);
    return i >= 0 ? argv[i + 1] : undefined;
  };

  const keyword = get("keyword");
  const category = get("category") as Category | undefined;
  const subtopic = get("subtopic");
  const type = (get("type") ?? "seo") as Args["type"];
  const locale = (get("locale") ?? "en") as Locale;
  const author = get("author");
  const pillar = get("pillar");

  if (!keyword || !category || !subtopic || !author) {
    console.error(
      "Usage: generate-article --keyword X --category Y --subtopic Z --author <id> [--type seo|pillar|expert] [--locale en] [--pillar slug]",
    );
    process.exit(2);
  }
  if (!(CATEGORIES as readonly string[]).includes(category)) {
    console.error(`Invalid category. One of: ${CATEGORIES.join(", ")}`);
    process.exit(2);
  }
  if (!(LOCALES as readonly string[]).includes(locale)) {
    console.error(`Invalid locale. One of: ${LOCALES.join(", ")}`);
    process.exit(2);
  }
  if (!["seo", "pillar", "expert"].includes(type)) {
    console.error("Invalid type. One of: seo|pillar|expert");
    process.exit(2);
  }
  if (!(author in authors)) {
    console.error(
      `Unknown author "${author}". Add to lib/authors.ts first. Known: ${Object.keys(authors).join(", ")}`,
    );
    process.exit(2);
  }

  return { keyword, category, subtopic, type, locale, author, pillar };
}

async function main() {
  const args = parseArgs();
  const slug = slugify(args.keyword, { lower: true, strict: true });
  const target = path.join(
    CONTENT_ROOT,
    args.locale,
    args.category,
    args.subtopic,
    `${slug}.md`,
  );

  if (fs.existsSync(target)) {
    console.error(`✗ Article already exists: ${target}`);
    process.exit(1);
  }

  const templateName =
    args.type === "pillar"
      ? "pillar-template.md"
      : args.type === "expert"
      ? "expert-template.md"
      : "seo-article-template.md";
  const templatePath = path.join(process.cwd(), "templates", templateName);
  if (!fs.existsSync(templatePath)) {
    console.error(`✗ Template not found: ${templatePath}`);
    process.exit(1);
  }
  const template = await fsp.readFile(templatePath, "utf8");

  const tags = [args.subtopic, args.category];
  const sources = suggestSources(args.category, 3);

  const filled = template
    .replace(/\{\{TITLE\}\}/g, args.keyword)
    .replace(/\{\{SLUG\}\}/g, slug)
    .replace(/\{\{TYPE\}\}/g, args.type)
    .replace(/\{\{EXCERPT\}\}/g, `${args.keyword} — a clear, sourced explainer.`)
    .replace(/\{\{AUTHOR_ID\}\}/g, args.author)
    .replace(/\{\{DATE\}\}/g, todayISO())
    .replace(/\{\{TAGS\}\}/g, `[${tags.join(", ")}]`)
    .replace(/\{\{PILLAR\}\}/g, args.pillar ?? slug)
    .replace(
      /\{\{SOURCES_BLOCK\}\}/g,
      sources
        .map(
          (s, i) =>
            `${i + 1}. **${s.organization}** — [${s.name}](${s.url})`,
        )
        .join("\n"),
    );

  await fsp.mkdir(path.dirname(target), { recursive: true });
  await fsp.writeFile(target, filled, "utf8");
  console.log(`✓ Created ${path.relative(process.cwd(), target)}`);
  console.log("  → next: edit prose, then run: npm run content:build");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
