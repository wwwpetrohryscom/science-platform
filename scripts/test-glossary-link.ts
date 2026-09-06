#!/usr/bin/env tsx
/**
 * Regression tests for the glossary linker.
 *
 * The linker is the piece of this codebase with the worst historical
 * failure: it once shipped `[cells]` pointing at cell biology from an
 * article about photovoltaic cells, and on another pass it left the
 * literal string `__G16__` inside two published headings. Both are
 * covered here, in every locale, and both halves of the contract are
 * tested — that the linker does link what it should, and that it
 * refuses to link what it must not.
 *
 * The ten words the ambiguity guard exists for — cell, field, energy,
 * mass, current, wave, species, population, stress, adaptation — are
 * asserted ineligible in all six locales, so a future localization
 * cannot introduce one of them as a surface form without this failing.
 *
 * Usage: npm run glossary:link:test
 */
import {
  eligible,
  linkBody,
  maskProtected,
  surfacesFor,
  type Candidate,
} from "./glossary-link";
import { LOCALES } from "../lib/i18n-config";
import { glossaryLocalization } from "../lib/glossary";

let failures = 0;

function check(name: string, ok: boolean, detail = "") {
  if (ok) {
    console.log(`✓ ${name}`);
  } else {
    failures += 1;
    console.log(`✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

/* ------------------------------------------------------------------
   1. The ambiguous words, in every locale.
------------------------------------------------------------------ */

const AMBIGUOUS_BY_LOCALE: Record<string, string[]> = {
  en: ["cell", "field", "energy", "mass", "current", "wave", "species", "population", "stress", "adaptation"],
  fr: ["cellule", "champ", "énergie", "masse", "courant", "onde", "espèce", "population", "stress", "adaptation"],
  es: ["célula", "campo", "energía", "masa", "corriente", "onda", "especie", "población", "estrés", "adaptación"],
  de: ["Zelle", "Feld", "Energie", "Masse", "Strom", "Welle", "Art", "Population", "Stress", "Anpassung"],
  pt: ["célula", "campo", "energia", "massa", "corrente", "onda", "espécie", "população", "stresse", "adaptação"],
  ru: ["клетка", "поле", "энергия", "масса", "ток", "волна", "вид", "популяция", "стресс", "адаптация"],
};

for (const [locale, words] of Object.entries(AMBIGUOUS_BY_LOCALE)) {
  const leaked = words.filter((w) => eligible(w, locale));
  check(
    `ambiguity guard · ${locale} refuses all ten bare words`,
    leaked.length === 0,
    `eligible: ${leaked.join(", ")}`,
  );
}

/* ------------------------------------------------------------------
   2. The photovoltaic-cell bug, in every locale.

   Even when the term is offered as a candidate — that is, even if a
   future edit wrongly pairs the cell-biology entry with an article
   about solar cells — the ambiguity guard must stop the link.
------------------------------------------------------------------ */

const PV: Record<string, string> = {
  en: "A photovoltaic cell converts light to current. Each cell is a diode.",
  fr: "Une cellule photovoltaïque convertit la lumière en courant. Chaque cellule est une diode.",
  es: "Una célula fotovoltaica convierte la luz en corriente. Cada célula es un diodo.",
  de: "Eine photovoltaische Zelle wandelt Licht in Strom um. Jede Zelle ist eine Diode.",
  pt: "Uma célula fotovoltaica converte luz em corrente. Cada célula é um díodo.",
  ru: "Фотоэлектрическая клетка преобразует свет в ток. Каждая клетка — это диод.",
};

for (const [locale, body] of Object.entries(PV)) {
  // Offered unfiltered on purpose: linkBody must refuse them itself,
  // not rely on the caller having run them past eligible() first.
  const r = linkBody(body, locale, [
    { slug: "cell", surfaces: AMBIGUOUS_BY_LOCALE[locale] },
  ]);
  check(
    `photovoltaic cells · ${locale} gets no cell-biology link`,
    r.added.length === 0 && r.body === body,
    `added ${JSON.stringify(r.added)}`,
  );
}

/* ------------------------------------------------------------------
   3. Masked regions are never touched.
------------------------------------------------------------------ */

const CAND: Candidate[] = [{ slug: "thermocline", surfaces: ["thermocline"] }];

const MASK_CASES: Array<{ name: string; body: string }> = [
  { name: "heading", body: "## The thermocline\n\nNothing else here.\n" },
  { name: "existing link", body: "See [thermocline](/en/somewhere-else) for more.\n" },
  { name: "code span", body: "Use `thermocline` as the variable name.\n" },
  { name: "table row", body: "| thermocline | depth |\n| --- | --- |\n" },
  { name: "Sources block", body: "Body text.\n\n## Sources\n\n1. On the thermocline.\n" },
];

for (const c of MASK_CASES) {
  const r = linkBody(c.body, "en", CAND);
  check(
    `masking · ${c.name} is left alone`,
    r.added.length === 0 && r.body === c.body,
    `body became: ${JSON.stringify(r.body)}`,
  );
}

/* ------------------------------------------------------------------
   4. An existing link to the same term is never duplicated, and the
      restore pass never leaks a placeholder.
------------------------------------------------------------------ */

{
  const body =
    "The [thermocline](/en/glossary/thermocline) separates the layers. The thermocline is sharp.\n";
  const r = linkBody(body, "en", CAND);
  check(
    "already linked · no second link is added",
    r.body === body && r.added.length === 0,
  );
}

{
  const body =
    "## A heading with a [link](/en/somewhere) inside it\n\nThe thermocline is sharp.\n";
  const r = linkBody(body, "en", CAND);
  check(
    "restore · nested masks come back without a __G placeholder",
    !/__G\d+__/.test(r.body) && r.body.includes("[link](/en/somewhere)"),
    r.body,
  );
  check(
    "restore · the prose match is still linked",
    r.body.includes("[thermocline](/en/glossary/thermocline)"),
    r.body,
  );
}

{
  const { masked, restore } = maskProtected(
    "# H\n\n`code` and [a](/b) and\n\n| t | u |\n\n## Sources\n\ntail\n",
  );
  check(
    "maskProtected · round-trips exactly",
    restore(masked) === "# H\n\n`code` and [a](/b) and\n\n| t | u |\n\n## Sources\n\ntail\n",
  );
}

/* ------------------------------------------------------------------
   5. The link goes to the body's own locale.
------------------------------------------------------------------ */

{
  const r = linkBody(
    "La thermocline sépare les couches.\n",
    "fr",
    [{ slug: "thermocline", surfaces: ["thermocline"] }],
  );
  check(
    "destination · a French body gets a /fr/ link",
    r.body.includes("](/fr/glossary/thermocline)"),
    r.body,
  );
}

/* ------------------------------------------------------------------
   6. Unicode word boundaries. An ASCII \w class does not fire around
      Cyrillic or accented Latin, which would silently link inside a
      longer inflected word.
------------------------------------------------------------------ */

{
  const inflected = linkBody(
    "Экосистемам нужен обмен веществ.\n",
    "ru",
    [{ slug: "ecosystem", surfaces: ["Экосистема"] }],
  );
  check(
    "boundaries · ru inflected form is not matched",
    inflected.added.length === 0,
    inflected.body,
  );
  const bare = linkBody(
    "Экосистема есть обмен веществ.\n",
    "ru",
    [{ slug: "ecosystem", surfaces: ["Экосистема"] }],
  );
  check(
    "boundaries · ru bare form is matched",
    bare.body.includes("](/ru/glossary/ecosystem)"),
    bare.body,
  );
  const plural = linkBody(
    "Les écosystèmes échangent de la matière.\n",
    "fr",
    [{ slug: "ecosystem", surfaces: ["Écosystème"] }],
  );
  check(
    "boundaries · fr plural is not matched",
    plural.added.length === 0,
    plural.body,
  );
}

/* ------------------------------------------------------------------
   7. Longest surface first, and the per-file cap.
------------------------------------------------------------------ */

{
  const r = linkBody(
    "The glacier mass balance is negative; the balance is measured yearly.\n",
    "en",
    [
      { slug: "glacier-mass-balance", surfaces: ["glacier mass balance"] },
      { slug: "energy-balance", surfaces: ["balance"] },
    ],
  );
  check(
    "ordering · the longer phrase is linked, the bare word is not",
    r.body.includes("[glacier mass balance](/en/glossary/glacier-mass-balance)") &&
      !r.body.includes("/en/glossary/energy-balance"),
    r.body,
  );
}

{
  // Multi-word surfaces, so the cap is the thing being measured rather
  // than the single-word anchor guard.
  const body =
    "radiative forcing, ocean heat content, glacier mass balance and " +
    "species richness are all here.\n";
  const r = linkBody(body, "en", [
    { slug: "radiative-forcing", surfaces: ["radiative forcing"] },
    { slug: "ocean-heat-content", surfaces: ["ocean heat content"] },
    { slug: "glacier-mass-balance", surfaces: ["glacier mass balance"] },
    { slug: "species-richness", surfaces: ["species richness"] },
  ]);
  check("cap · at most three links per file", r.added.length === 3, `${r.added.length}`);
}

/* ------------------------------------------------------------------
   7b. The anchor-stuffing signature the content validator rejects is
       never created. Three or more single-word internal anchors on an
       English page is a warning there, and the linker is the mechanism
       that rule was written about.
------------------------------------------------------------------ */

{
  const body =
    "The [atmosphere](/en/glossary/atmosphere) is thin.\n\n" +
    "The [biosphere](/en/glossary/biosphere) is a process.\n\n" +
    "The hydrosphere is mostly ocean, and the lithosphere is slow.\n";
  const r = linkBody(body, "en", [
    { slug: "hydrosphere", surfaces: ["hydrosphere"] },
    { slug: "lithosphere", surfaces: ["lithosphere"] },
  ]);
  check(
    "anchor quality · a third single-word anchor is refused in English",
    r.added.length === 0 && r.body === body,
    `added ${JSON.stringify(r.added)}`,
  );
  const phrase = linkBody(body, "en", [
    { slug: "ocean-circulation", surfaces: ["mostly ocean"] },
  ]);
  check(
    "anchor quality · a multi-word anchor is still allowed",
    phrase.added.length === 1,
    phrase.body,
  );
  const de = linkBody(
    "Die [Atmosphäre](/de/glossary/atmosphere) ist dünn.\n\n" +
      "Die [Biosphäre](/de/glossary/biosphere) ist ein Vorgang.\n\n" +
      "Die Hydrosphäre ist grösstenteils Ozean.\n",
    "de",
    [{ slug: "hydrosphere", surfaces: ["Hydrosphäre"] }],
  );
  check(
    "anchor quality · German compounds are not counted against it",
    de.added.length === 1,
    de.body,
  );
}

/* ------------------------------------------------------------------
   8. Never a link to a locale that does not have the term. This is the
      "never create a broken localized destination" rule, checked
      against the real localization data rather than a fixture.
------------------------------------------------------------------ */

{
  // greenhouse-gas is an English-only term in this pass.
  const unlocalized = LOCALES.filter(
    (l) => l !== "en" && !glossaryLocalization("greenhouse-gas", l),
  );
  check(
    "coverage · greenhouse-gas is still English-only (fixture assumption holds)",
    unlocalized.length === LOCALES.length - 1,
  );
  const leaks = unlocalized.filter(
    (l) => surfacesFor("greenhouse-gas", "Greenhouse gas", l).length > 0,
  );
  check(
    "destination · an unlocalized term offers no surface form",
    leaks.length === 0,
    `offered in: ${leaks.join(", ")}`,
  );
  const localized = LOCALES.filter((l) => l !== "en" && glossaryLocalization("thermocline", l));
  check(
    "destination · a localized term offers its localized surface forms",
    localized.every((l) => surfacesFor("thermocline", "Thermocline", l).length > 0),
  );
}

console.log(
  `\n${failures === 0 ? "all checks passed" : `${failures} failing`}`,
);
if (failures) process.exit(1);
