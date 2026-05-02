/**
 * Shared helpers for /scripts.
 *
 * Why this exists separately from /lib/content.ts: the runtime loader
 * uses `marked` (and is reached through Next's path-aliased imports)
 * which couples it to the React/Next environment. The scripts run in
 * a plain Node context — they only need to read frontmatter + body.
 *
 * Walks the locale tree, parses with gray-matter only, and yields a
 * shape compatible with both the validator and the linker. The shape
 * uses path-derived `category`/`subtopic`/`slug` to match the existing
 * convention (frontmatter does not carry these).
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require("js-yaml") as {
  dump: (obj: unknown, opts?: Record<string, unknown>) => string;
};

export const PROJECT_ROOT = process.cwd();
export const CONTENT_ROOT = path.join(PROJECT_ROOT, "content");

export const LOCALES = ["en", "fr", "es", "de", "pt", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const CATEGORIES = ["ecology", "biology", "physics"] as const;
export type Category = (typeof CATEGORIES)[number];

export type WalkedArticle = {
  filepath: string;
  locale: Locale;
  category: Category;
  subtopic: string;
  slug: string;
  /** Whether this is an /insights/<slug>.md (no subtopic). */
  kind: "article" | "insight";
  frontmatter: Record<string, unknown>;
  body: string;
};

/**
 * Walk the entire content tree, yielding parsed entries. Skips
 * non-markdown files and any file that fails frontmatter parsing
 * (those errors surface during `npm run dev`).
 */
export async function walkAllContent(): Promise<WalkedArticle[]> {
  const out: WalkedArticle[] = [];
  for (const locale of LOCALES) {
    const localeRoot = path.join(CONTENT_ROOT, locale);
    if (!fs.existsSync(localeRoot)) continue;

    // Articles: /content/<locale>/<category>/<subtopic>/<slug>.md
    for (const category of CATEGORIES) {
      const catDir = path.join(localeRoot, category);
      if (!fs.existsSync(catDir)) continue;
      const subEntries = await fsp.readdir(catDir, { withFileTypes: true });
      for (const sub of subEntries) {
        if (!sub.isDirectory()) continue;
        const subDir = path.join(catDir, sub.name);
        const files = await fsp.readdir(subDir, { withFileTypes: true });
        for (const f of files) {
          if (!f.isFile() || !f.name.endsWith(".md")) continue;
          const fp = path.join(subDir, f.name);
          const parsed = await readDoc(fp);
          if (!parsed) continue;
          out.push({
            filepath: fp,
            locale,
            category,
            subtopic: sub.name,
            slug: f.name.replace(/\.md$/, ""),
            kind: "article",
            frontmatter: parsed.data,
            body: parsed.content,
          });
        }
      }
    }

    // Insights: /content/<locale>/insights/<slug>.md
    const insightsDir = path.join(localeRoot, "insights");
    if (fs.existsSync(insightsDir)) {
      const files = await fsp.readdir(insightsDir, { withFileTypes: true });
      for (const f of files) {
        if (!f.isFile() || !f.name.endsWith(".md")) continue;
        const fp = path.join(insightsDir, f.name);
        const parsed = await readDoc(fp);
        if (!parsed) continue;
        const fmCategory = String(parsed.data.category ?? "");
        const category = (CATEGORIES as readonly string[]).includes(fmCategory)
          ? (fmCategory as Category)
          : "ecology"; // tolerated default — validator will flag missing/invalid
        out.push({
          filepath: fp,
          locale,
          category,
          subtopic: "insights",
          slug: f.name.replace(/\.md$/, ""),
          kind: "insight",
          frontmatter: parsed.data,
          body: parsed.content,
        });
      }
    }
  }
  return out;
}

/** Returns null when the file does not exist or cannot be parsed. */
export async function readDoc(filepath: string): Promise<{
  data: Record<string, unknown>;
  content: string;
} | null> {
  if (!fs.existsSync(filepath)) return null;
  const raw = await fsp.readFile(filepath, "utf8");
  try {
    const parsed = matter(raw);
    return {
      data: parsed.data as Record<string, unknown>,
      content: parsed.content,
    };
  } catch {
    return null;
  }
}

/**
 * Atomic write — writes to a temp file and renames. Avoids partial
 * files if the process is interrupted mid-write, which matters when
 * the editor is watching the tree.
 *
 * Frontmatter normalization: gray-matter parses unquoted ISO dates
 * (e.g. `publishedDate: 2026-01-22`) as JavaScript Date objects, and
 * its YAML stringifier writes them back as full ISO datetimes
 * (`2026-01-22T00:00:00.000Z`). That cosmetic round-trip pollutes
 * every diff. We normalize known-date keys back to YYYY-MM-DD strings
 * before stringifying.
 */
const DATE_KEYS = new Set(["publishedDate", "updatedDate"]);

function normalizeFrontmatter(
  data: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (DATE_KEYS.has(k) && v instanceof Date) {
      out[k] = v.toISOString().slice(0, 10);
    } else if (DATE_KEYS.has(k) && typeof v === "string") {
      out[k] = v.slice(0, 10);
    } else {
      out[k] = v;
    }
  }
  return out;
}

/**
 * Custom YAML engine for gray-matter. Defaults would fold long strings
 * (`>-` block scalars) and force every array onto multiple lines —
 * both legitimate YAML, but they create huge diffs when content barely
 * changed. Configuration:
 *  - lineWidth: -1   → never wrap; excerpts and FAQ answers stay on one line
 *  - noRefs: true    → no `&anchor` references
 *
 * gray-matter's TS types do not expose the `engines` option on
 * stringify, but the runtime supports it (documented). We cast.
 */
const YAML_ENGINE = {
  parse: (s: string) =>
    matter(`---\n${s}\n---\n`).data as Record<string, unknown>,
  stringify: (obj: unknown) =>
    yaml.dump(obj, { lineWidth: -1, noRefs: true }),
};

export async function writeDoc(
  filepath: string,
  data: Record<string, unknown>,
  content: string,
): Promise<void> {
  const out = (
    matter.stringify as unknown as (
      content: string,
      data: Record<string, unknown>,
      options?: { engines?: Record<string, unknown> },
    ) => string
  )(content, normalizeFrontmatter(data), {
    engines: { yaml: YAML_ENGINE },
  });
  await fsp.mkdir(path.dirname(filepath), { recursive: true });
  const tmp = `${filepath}.tmp`;
  await fsp.writeFile(tmp, out, "utf8");
  await fsp.rename(tmp, filepath);
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * FNV-1a hash of body content. Used to decide whether `updatedDate`
 * should bump on a metadata pass. We are not protecting against
 * collisions; we only need "did the bytes change" with no FS-mtime
 * dependency (which doesn't survive a `git clone`).
 */
export function hashBody(body: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < body.length; i++) {
    h ^= body.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
}

/** Article URL used by the linker. Mirrors `localizedPath()` from lib/i18n. */
export function articleUrl(a: WalkedArticle): string {
  if (a.kind === "insight") return `/${a.locale}/insight/${a.slug}`;
  return `/${a.locale}/${a.category}/${a.subtopic}/${a.slug}`;
}
