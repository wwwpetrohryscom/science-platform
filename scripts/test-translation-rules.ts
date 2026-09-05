#!/usr/bin/env tsx
/**
 * Regression tests for the translation fidelity rules.
 *
 * Each case takes a clean English/French pair, injects one defect, and
 * asserts that the matching rule fires — and, for the clean pair, that
 * nothing fires at all. Both halves matter. A validator with no
 * false-positive test drifts into noise; a validator with no
 * true-positive test can be silently disabled by a bad regex and look
 * exactly like a corpus with no defects. Both failure modes have
 * happened in this repository.
 *
 * Usage: npm run content:translations:test
 */
import { checkTranslation } from "./validate-translations";

const EN = `---
title: 'Radiative forcing: the bookkeeping unit of climate change'
metaTitle: 'Radiative forcing: what the number measures'
excerpt: What the figure means, and what it does not.
type: expert
author: climate-desk
publishedDate: '2026-01-02'
updatedDate: '2026-02-03'
readingTime: 5
tags:
  - radiative-forcing
related:
  - what-is-climate-change
pillar: what-is-climate-change
---

The IPCC estimates total anthropogenic effective radiative forcing since 1750 at about 2.72 W/m². That figure is not a temperature and should not be read as one. NASA describes the same quantity for a public audience in its [climate evidence review](https://science.nasa.gov/climate-change/).

## How the number is measured

Satellite and surface measurements constrain the estimate, but the aerosol term remains uncertain and the total may be revised as observations accumulate. It is not a settled constant, and no single instrument measures it directly.

The distinction that matters is between the forcing and the response, which is set out in [what climate change is](/en/ecology/climate-change/what-is-climate-change).

## What it is not

- The forcing is a flux, measured in W/m².
- The response is a temperature, measured in °C.

## Sources

1. **IPCC** — [AR6 Working Group I](https://www.ipcc.ch/report/ar6/wg1/). The assessed total.
2. **NASA** — [Climate change evidence](https://science.nasa.gov/climate-change/). The public summary.
`;

const FR = `---
title: "Le forçage radiatif : l'unité de comptabilité du climat"
metaTitle: 'Le forçage radiatif : ce que mesure le chiffre'
excerpt: Ce que le chiffre signifie, et ce qu'il ne signifie pas.
type: expert
author: climate-desk
publishedDate: '2026-01-02'
updatedDate: '2026-02-03'
readingTime: 5
tags:
  - radiative-forcing
related:
  - what-is-climate-change
pillar: what-is-climate-change
---

Le GIEC estime le forçage radiatif effectif anthropique total depuis 1750 à environ 2,72 W/m². Ce chiffre n'est pas une température et ne doit pas être lu comme telle. La NASA décrit la même grandeur pour un public non spécialiste dans sa [revue des preuves climatiques](https://science.nasa.gov/climate-change/).

## Comment le chiffre est mesuré

Les mesures satellitaires et de surface contraignent l'estimation, mais le terme aérosol reste incertain et le total pourrait être révisé à mesure que les observations s'accumulent. Ce n'est pas une constante établie, et aucun instrument ne le mesure directement.

La distinction qui compte est celle entre le forçage et la réponse, exposée dans [ce qu'est le changement climatique](/fr/ecology/climate-change/what-is-climate-change).

## Ce que ce n'est pas

- Le forçage est un flux, mesuré en W/m².
- La réponse est une température, mesurée en °C.

## Sources

1. **GIEC** — [Groupe de travail I du sixième rapport](https://www.ipcc.ch/report/ar6/wg1/). Le total évalué.
2. **NASA** — [Les preuves du changement climatique](https://science.nasa.gov/climate-change/). Le résumé grand public.
`;

type Case = { name: string; rule: string; mutate: (fr: string) => string };

const CASES: Case[] = [
  {
    name: "a tag translated into French",
    rule: "translation-frontmatter",
    mutate: (fr) => fr.replace("  - radiative-forcing", "  - forcage-radiatif"),
  },
  {
    name: "the Sources heading translated",
    rule: "sources-heading",
    mutate: (fr) => fr.replace("\n## Sources\n", "\n## Références\n"),
  },
  {
    name: "a citation swapped for a different URL",
    rule: "translation-sources",
    mutate: (fr) =>
      fr.replace("https://www.ipcc.ch/report/ar6/wg1/", "https://www.ipcc.ch/"),
  },
  {
    name: "two citations merged into one entry",
    rule: "sources-block-drift",
    mutate: (fr) =>
      fr.replace(
        "Le total évalué.\n2. **NASA**",
        "Le total évalué, et **NASA**",
      ),
  },
  {
    name: "an internal link left pointing at the English article",
    rule: "translation-link-prefix",
    mutate: (fr) => fr.replace("/fr/ecology/climate-change", "/en/ecology/climate-change"),
  },
  {
    name: "an internal link dropped",
    rule: "translation-links",
    mutate: (fr) =>
      fr.replace(
        "[ce qu'est le changement climatique](/fr/ecology/climate-change/what-is-climate-change)",
        "ce qu'est le changement climatique",
      ),
  },
  {
    name: "a paragraph dropped",
    rule: "structure-drift",
    mutate: (fr) =>
      fr.replace(
        /\nLa distinction qui compte[^\n]*\n/,
        "\n",
      ),
  },
  {
    name: "a link left unclosed",
    rule: "broken-markdown",
    mutate: (fr) => fr.replace("climatiques](https://science.nasa.gov/climate-change/)", "climatiques](https://science.nasa.gov/climate-change/"),
  },
  {
    name: "a paragraph left in English",
    rule: "untranslated-fragment",
    mutate: (fr) =>
      fr.replace(
        "La distinction qui compte est celle entre le forçage et la réponse, exposée dans",
        "The distinction that matters is the one between the forcing and the response, which is set out in",
      ),
  },
  {
    name: "a paragraph emitted twice",
    rule: "repeated-paragraph",
    mutate: (fr) =>
      fr.replace(
        "## Ce que ce n'est pas",
        "Les mesures satellitaires et de surface contraignent l'estimation, mais le terme aérosol reste incertain et le total pourrait être révisé à mesure que les observations s'accumulent. Ce n'est pas une constante établie, et aucun instrument ne le mesure directement.\n\n## Ce que ce n'est pas",
      ),
  },
  {
    name: "a unit symbol dropped",
    rule: "unit-drift",
    mutate: (fr) => fr.replace("à environ 2,72 W/m²", "à environ 2,72"),
  },
  {
    name: "the attribution removed from a sourced figure",
    rule: "attribution-drift",
    mutate: (fr) => fr.replace("Le GIEC estime", "On estime"),
  },
  {
    name: "a figure changed",
    rule: "translation-numbers",
    mutate: (fr) => fr.replace("2,72", "2,27"),
  },
  {
    name: "the hedging removed",
    rule: "uncertainty-drift",
    mutate: (fr) =>
      fr
        .replace("à environ 2,72", "à 2,72")
        .replace("reste incertain et le total pourrait être révisé", "est connu et le total sera révisé")
        .replace("contraignent l'estimation", "fixent la valeur"),
  },
  {
    name: "the negation removed",
    rule: "negation-drift",
    mutate: (fr) =>
      fr
        .replace("n'est pas une température et ne doit pas être lu comme telle", "est une température")
        .replace("Ce n'est pas une constante établie, et aucun instrument ne le mesure directement", "C'est une constante établie, mesurée directement")
        .replace("Ce que ce n'est pas", "Ce que c'est")
        .replace("ce qu'il ne signifie pas", "ce qu'il implique"),
  },
  {
    name: "a calque instead of the established term",
    rule: "terminology-drift",
    mutate: (fr) =>
      fr.replace("le forçage radiatif effectif", "le cycle de carbone effectif"),
  },
  {
    name: "a metaTitle too long for the head",
    rule: "metatitle-length",
    mutate: (fr) =>
      fr.replace(
        "metaTitle: 'Le forçage radiatif : ce que mesure le chiffre'",
        "metaTitle: 'Le forçage radiatif : ce que le chiffre mesure réellement, et ce qu il ne mesure pas du tout'",
      ),
  },
  {
    name: "the excerpt left in English",
    rule: "untranslated-field",
    mutate: (fr) =>
      fr.replace(
        "excerpt: Ce que le chiffre signifie, et ce qu'il ne signifie pas.",
        "excerpt: What the figure means, and what it does not.",
      ),
  },
];

function run() {
  let failures = 0;

  const clean = checkTranslation(EN, FR, "fr", "fixture.md");
  if (clean.length) {
    failures += 1;
    console.log("✗ the clean pair should produce nothing, but produced:");
    for (const i of clean) console.log(`    [${i.rule}] ${i.message}`);
  } else {
    console.log("✓ clean pair — no issues");
  }

  for (const c of CASES) {
    const issues = checkTranslation(EN, c.mutate(FR), "fr", "fixture.md");
    const hit = issues.find((i) => i.rule === c.rule);
    if (hit) {
      console.log(`✓ ${c.rule.padEnd(24)} ${c.name}`);
    } else {
      failures += 1;
      console.log(
        `✗ ${c.rule.padEnd(24)} ${c.name} — rule did not fire. Fired instead: ${
          issues.map((i) => i.rule).join(", ") || "nothing"
        }`,
      );
    }
  }

  console.log(
    `\n${CASES.length + 1} checks · ${failures} failing`,
  );
  if (failures) process.exit(1);
}

run();
