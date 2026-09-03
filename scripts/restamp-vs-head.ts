#!/usr/bin/env tsx
/**
 * Apply the freshness rule to the working tree, using the committed
 * version as the "before".
 *
 * `content:metadata` compares against the `_bodyHash` stored in the file,
 * which is the right thing during normal authoring. After a mechanical
 * pass that rewrote many files at once, the stored hash may already have
 * been re-stamped, and the question is instead "did the prose change
 * relative to what is committed". This answers that, and restores the
 * committed `updatedDate` on every file whose prose did not change.
 *
 * Usage: tsx scripts/restamp-vs-head.ts [--ref HEAD]
 */
import { execSync } from "node:child_process";
import path from "node:path";
import matter from "gray-matter";

import { walkAllContent, writeDoc, hashProse, todayISO } from "./_lib";

function committed(rel: string): { body: string; updatedDate: string } | null {
  try {
    const raw = execSync(`git show ${REF}:${rel}`, {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    const parsed = matter(raw);
    const d = parsed.data.updatedDate;
    return {
      body: parsed.content,
      updatedDate:
        d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? ""),
    };
  } catch {
    return null;
  }
}

const refIdx = process.argv.indexOf("--ref");
const REF = refIdx >= 0 ? process.argv[refIdx + 1] : "HEAD";

async function main() {
  const walked = await walkAllContent();
  let bumped = 0,
    restored = 0,
    added = 0;

  for (const w of walked) {
    const rel = path.relative(process.cwd(), w.filepath);
    const before = committed(rel);
    const nowHash = hashProse(w.body);
    const fm: Record<string, unknown> = { ...w.frontmatter };

    if (!before) {
      added += 1;
      fm._bodyHash = nowHash;
    } else if (hashProse(before.body) !== nowHash) {
      // Prose genuinely changed. New pages in this wave keep their
      // publication date; anything older is dated today.
      const pub = String(fm.publishedDate ?? "").slice(0, 10);
      fm.updatedDate = pub >= "2026-09-02" ? pub : todayISO();
      fm._bodyHash = nowHash;
      bumped += 1;
    } else {
      if (before.updatedDate && fm.updatedDate !== before.updatedDate) {
        fm.updatedDate = before.updatedDate;
        restored += 1;
      }
      fm._bodyHash = nowHash;
    }
    await writeDoc(w.filepath, fm, w.body);
  }

  console.log(
    `${bumped} prose changes dated · ${restored} dates restored (links or URLs only) · ${added} new files`,
  );
}

main();
