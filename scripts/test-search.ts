#!/usr/bin/env tsx
/**
 * Search behaviour tests.
 *
 * Ranking lives in `lib/search.ts` rather than in the client component
 * precisely so it can be checked here, without a browser. Each case
 * below is a property a reader would notice if it broke.
 *
 * Usage: npm run search:test
 */
import {
  normalise,
  terms,
  score,
  search,
  type SearchDoc,
} from "../lib/search-core";
import { buildSearchIndex } from "../lib/search-index";

let failures = 0;
function check(name: string, ok: boolean, detail = "") {
  if (ok) console.log(`✓ ${name}`);
  else {
    failures += 1;
    console.log(`✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

const doc = (over: Partial<SearchDoc> & { url: string; title: string }): SearchDoc => ({
  excerpt: "",
  kind: "article",
  tags: [],
  ...over,
});

const CORPUS: SearchDoc[] = [
  doc({
    url: "/en/physics/energy/photovoltaics-explained",
    title: "Photovoltaic cells and what limits them",
    excerpt: "A solar cell converts light into current, and loses most of it.",
    tags: ["solar", "photovoltaics", "energy"],
  }),
  doc({
    url: "/en/biology/cells/what-is-a-cell",
    title: "What is a cell? An operational definition",
    excerpt: "The membrane, the genome, and the metabolism that keeps both going.",
    tags: ["cell-biology", "membranes"],
  }),
  doc({
    url: "/en/ecology/soils/soil-moisture-and-what-a-measurement-covers",
    title: "Soil moisture: what a measurement actually covers",
    excerpt: "A satellite senses the top few centimetres across a 36-kilometre cell.",
    tags: ["soil-moisture", "remote-sensing"],
  }),
  doc({
    url: "/en/glossary/albedo",
    title: "Albedo",
    excerpt: "The fraction of incoming solar radiation a surface reflects.",
    kind: "glossary",
    tags: [],
  }),
];

/* 1. Normalisation folds case, accents and punctuation. */
{
  check(
    "normalise · accents and punctuation are folded",
    normalise("Évapotranspiration — la BIODIVERSITÉ, 2026!") ===
      "evapotranspiration la biodiversite 2026",
    normalise("Évapotranspiration — la BIODIVERSITÉ, 2026!"),
  );
  check(
    "terms · single characters are dropped",
    JSON.stringify(terms("a la mer")) === JSON.stringify(["la", "mer"]),
    terms("a la mer").join(","),
  );
}

/* 2. Every query word must match. This is the property that makes a
      second word narrow the result set instead of widening it, and it
      is what stops "photovoltaic cell" returning cell biology. */
{
  const one = search(CORPUS, "cell").map((d) => d.url);
  check("conjunctive · a single word matches both senses", one.length === 3, one.join(" "));
  const two = search(CORPUS, "photovoltaic cell").map((d) => d.url);
  check(
    "conjunctive · adding a word narrows to one sense",
    two.length === 1 && two[0].includes("photovoltaics"),
    two.join(" "),
  );
  check(
    "conjunctive · a word in no document returns nothing",
    search(CORPUS, "cell tardigrade").length === 0,
  );
}

/* 3. Field weights are taken per term, not summed across fields. A
      document matching one query word in three of its fields must not
      outrank a document matching two distinct query words. */
{
  const spread = doc({
    url: "/en/a",
    title: "Soil soil soil",
    excerpt: "soil soil",
    tags: ["soil"],
  });
  const both = doc({
    url: "/en/b",
    title: "Soil moisture in drylands",
    excerpt: "",
    tags: [],
  });
  const ranked = search([spread, both], "soil moisture").map((d) => d.url);
  check(
    "weights · two matched words beat one word in many fields",
    ranked.length === 1 && ranked[0] === "/en/b",
    ranked.join(" "),
  );
}

/* 4. A whole-word hit outranks a prefix hit. */
{
  const exact = doc({ url: "/en/exact", title: "Albedo" });
  const prefix = doc({ url: "/en/prefix", title: "Albedometer readings" });
  check(
    "ranking · exact word beats prefix",
    score(exact, "albedo") > score(prefix, "albedo"),
    `${score(exact, "albedo")} vs ${score(prefix, "albedo")}`,
  );
  check(
    "ranking · a prefix still matches",
    score(prefix, "albed") > 0,
  );
}

/* 5. Title beats excerpt beats path. */
{
  const inTitle = doc({ url: "/en/x", title: "Permafrost" });
  const inExcerpt = doc({ url: "/en/y", title: "Boreal soils", excerpt: "permafrost" });
  const inPath = doc({ url: "/en/permafrost-notes", title: "Field notes" });
  check(
    "ranking · title > excerpt > path",
    score(inTitle, "permafrost") > score(inExcerpt, "permafrost") &&
      score(inExcerpt, "permafrost") > score(inPath, "permafrost"),
    [inTitle, inExcerpt, inPath].map((d) => score(d, "permafrost")).join(" "),
  );
}

/* 6. An empty or whitespace query matches nothing rather than everything. */
{
  check("empty query · returns nothing", search(CORPUS, "   ").length === 0);
  check("one-character query · returns nothing", search(CORPUS, "a").length === 0);
}

/* 7. Accented queries reach unaccented documents and vice versa. */
{
  const accented = doc({ url: "/fr/a", title: "Évapotranspiration et bilan hydrique" });
  check("accents · unaccented query finds accented title", score(accented, "evapotranspiration") > 0);
  check("accents · accented query finds it too", score(accented, "évapotranspiration") > 0);
}

/* 8. The real index only carries what exists in the locale — a French
      index padded with English fallbacks would hand a French reader
      English results dressed as French ones. */
async function indexChecks() {
  const fr = await buildSearchIndex("fr");
  const en = await buildSearchIndex("en");
  check("index · fr is smaller than en", fr.docs.length < en.docs.length, `${fr.docs.length} vs ${en.docs.length}`);
  check(
    "index · every fr document has an /fr/ url",
    fr.docs.every((d) => d.url.startsWith("/fr/")),
    fr.docs.find((d) => !d.url.startsWith("/fr/"))?.url ?? "",
  );
  check(
    "index · no duplicate urls",
    new Set(en.docs.map((d) => d.url)).size === en.docs.length,
  );
  check(
    "index · every document has a title and a url",
    en.docs.every((d) => d.title.trim() && d.url.startsWith("/")),
  );
  check(
    "index · glossary, articles and insights are all present",
    new Set(en.docs.map((d) => d.kind)).size === 3,
    [...new Set(en.docs.map((d) => d.kind))].join(","),
  );
}

indexChecks().then(() => {
  console.log(`\n${failures === 0 ? "all checks passed" : `${failures} failing`}`);
  if (failures) process.exit(1);
});
