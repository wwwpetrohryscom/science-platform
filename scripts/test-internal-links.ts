#!/usr/bin/env tsx
/**
 * Regression tests for the internal-linking engine.
 *
 * Every guard here exists because the corpus caught the engine doing
 * something wrong, and a guard that has quietly stopped firing is
 * indistinguishable from a corpus with nothing to catch. The two
 * historical failures — a cell-biology article linking "energy budget"
 * to atmospheric physics, and links written into Sources citations —
 * are both covered.
 *
 * Usage: npm run content:link:test
 */
import {
  buildKeywordIndex,
  injectInternalLinks,
  insideProperName,
  crossesSection,
  GENERIC_ANCHORS,
  type LinkableArticle,
} from "../lib/internal-linking";

let failures = 0;
function check(name: string, ok: boolean, detail = "") {
  if (ok) console.log(`✓ ${name}`);
  else {
    failures += 1;
    console.log(`✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

const ARTICLES: LinkableArticle[] = [
  {
    url: "/en/physics/climate-physics/atmospheric-physics-explained",
    slug: "atmospheric-physics-explained",
    type: "pillar",
    title: "Atmospheric physics explained",
    tags: ["energy-budget", "atmospheric-circulation"],
    category: "physics",
  },
  {
    url: "/en/ecology/climate-change/what-is-climate-change",
    slug: "what-is-climate-change",
    type: "pillar",
    title: "What is climate change?",
    tags: ["climate-change"],
    category: "ecology",
  },
  {
    url: "/en/ecology/climate-change/carbon-cycle-feedbacks",
    slug: "carbon-cycle-feedbacks",
    type: "expert",
    title: "Carbon-cycle feedbacks",
    tags: ["climate-change", "ipcc-ar6"],
    category: "ecology",
  },
  {
    url: "/en/biology/cells/what-is-a-cell",
    slug: "what-is-a-cell",
    type: "pillar",
    title: "What is a cell?",
    tags: ["cell-biology"],
    category: "biology",
  },
];

const INDEX = buildKeywordIndex(ARTICLES);

/* 1. The section guard — the photovoltaic bug in its newest costume. */
{
  const body =
    "A cell spends most of its energy budget on maintaining gradients.\n";
  const r = injectInternalLinks(body, INDEX, "what-is-a-cell", {
    source: { category: "biology", related: [], title: "What is a cell?", tags: [] },
  });
  check(
    "sections · a biology article does not link energy budget to physics",
    !r.body.includes("/en/physics/"),
    r.body,
  );
  // "energy budget" is now excluded from the index entirely (see
  // GENERIC_ANCHORS), so the `related` exception has to be exercised
  // with a keyword that still names one thing.
  const crossBody =
    "Heat reaches the poles through atmospheric circulation, not conduction.\n";
  const declared = injectInternalLinks(crossBody, INDEX, "what-is-a-cell", {
    source: {
      category: "biology",
      related: ["atmospheric-physics-explained"],
      title: "What is a cell?",
      tags: [],
    },
  });
  check(
    "sections · an authored `related` pairing may cross",
    declared.body.includes("/en/physics/"),
    declared.body,
  );
  check(
    "sections · crossesSection is false within a category",
    !crossesSection(
      { ownerCategory: "ecology", ownerSlug: "x" },
      { category: "ecology", related: [] },
    ),
  );
}

/* 2. Sources block. The mask used to run after the heading mask, which
      had already replaced `## Sources`, so the block was unprotected. */
{
  const body =
    "Body prose with nothing to match.\n\n" +
    "## Sources\n\n" +
    "1. **IPCC** — [AR6](https://www.ipcc.ch/), Intergovernmental Panel on Climate Change (2021).\n";
  const r = injectInternalLinks(body, INDEX, "what-is-a-cell", {
    source: { category: "ecology", related: [], title: "", tags: [] },
  });
  check("sources · the citation list is untouched", r.body === body, r.body);
}

/* 3. Proper names. */
{
  check(
    "proper names · Copernicus Climate Change Service is one name",
    insideProperName("the Copernicus Climate Change Service runs it", 15, 29),
  );
  check(
    "proper names · a sentence-initial capital is not evidence",
    !insideProperName("Climate change is measured.", 0, 14),
  );
  check(
    "proper names · ordinary mid-sentence use links",
    !insideProperName("driven by climate change and land use", 10, 24),
  );
  const r = injectInternalLinks(
    "The ESA Climate Change Initiative publishes the maps.\n",
    INDEX,
    "x",
    { source: { category: "ecology", related: [], title: "", tags: [] } },
  );
  check("proper names · no link inside the programme name", r.injected.length === 0, r.body);
}

/* 4. Designations are not topics. */
{
  const kws = INDEX.map((k) => k.keyword.toLowerCase());
  check(
    "designations · a keyword with a digit is not indexed",
    !kws.some((k) => /\d/.test(k)),
    kws.filter((k) => /\d/.test(k)).join(", "),
  );
}

/* 5. An article's own subject is not handed to another page. */
{
  const r = injectInternalLinks(
    "Climate change is the subject of this page.\n",
    INDEX,
    "some-other-article",
    {
      source: {
        category: "ecology",
        related: [],
        title: "Climate change",
        tags: ["climate-change"],
      },
    },
  );
  check(
    "own subject · the page's own topic is not linked away",
    r.injected.length === 0,
    r.body,
  );
}

/* 6. A keyword is burned, not passed down, when its best owner is
      already linked. */
{
  const body =
    "See [the primer](/en/ecology/climate-change/what-is-climate-change). " +
    "Climate change is measured many ways.\n";
  const r = injectInternalLinks(body, INDEX, "x", {
    source: { category: "ecology", related: [], title: "", tags: [] },
  });
  check(
    "keyword burn · not reassigned to a lower-priority owner",
    !r.body.includes("carbon-cycle-feedbacks"),
    r.body,
  );
}

/* 7. Existing links seed the page-level "link the idea once" rule. */
{
  const body =
    "See [climate change](/en/ecology/climate-change/what-is-climate-change) " +
    "for the mechanism. Climate change also drives feedbacks.\n";
  const r = injectInternalLinks(body, INDEX, "x", {
    source: { category: "ecology", related: [], title: "", tags: [] },
  });
  check("anchor repeat · an already-linked target is not linked twice", r.body === body, r.body);
}

/* 8. Idempotence. */
{
  const body = "Climate change is measured in several ways here.\n";
  const src = { category: "ecology", related: [], title: "", tags: [] };
  const once = injectInternalLinks(body, INDEX, "x", { source: src }).body;
  const twice = injectInternalLinks(once, INDEX, "x", { source: src }).body;
  check("idempotence · a second pass changes nothing", once === twice, twice);
  check("idempotence · the first pass did link", once !== body, once);
}

/* 9. Generic anchors are never indexed. The corpus carried 15 links on
      "land surface" — a plain geographic noun in all 15 — plus "land
      use" pointing at forest ecosystems and "satellite products"
      pointing at primary production. MIN_ANCHOR_WORDS and the section
      guard both pass those, because the phrase has two words and stays
      inside its category. Only the exclusion list stops them. */
{
  const generic: LinkableArticle[] = [
    {
      url: "/en/ecology/earth-systems/biosphere-climate-interactions",
      slug: "biosphere-climate-interactions",
      type: "expert",
      title: "Biosphere-climate interactions",
      tags: ["land-surface", "albedo"],
      category: "ecology",
    },
    {
      url: "/en/ecology/forests/forest-ecosystems-explained",
      slug: "forest-ecosystems-explained",
      type: "pillar",
      title: "Forest ecosystems explained",
      tags: ["land-use", "forests"],
      category: "ecology",
    },
  ];
  const idx = buildKeywordIndex(generic);
  check(
    "generic anchors · not present in the keyword index",
    !idx.some((e) => GENERIC_ANCHORS.has(e.keyword.toLowerCase())),
    idx.map((e) => e.keyword).join(", "),
  );
  const body =
    "Peatlands cover about 3 per cent of the global land surface, and " +
    "land use is the largest single pressure on them.\n";
  const r = injectInternalLinks(body, idx, "wetlands-and-their-functions", {
    source: { category: "ecology", related: [], title: "Wetlands", tags: [] },
  });
  check(
    "generic anchors · a plain geographic noun is not linked",
    r.body === body,
    r.body,
  );
  check(
    "generic anchors · a non-generic tag from the same article still indexes",
    idx.some((e) => e.keyword === "albedo") === false &&
      idx.some((e) => e.keyword === "Forest ecosystems explained"),
    idx.map((e) => e.keyword).join(", "),
  );
}

console.log(`\n${failures === 0 ? "all checks passed" : `${failures} failing`}`);
if (failures) process.exit(1);
