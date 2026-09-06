#!/usr/bin/env tsx
/**
 * Link glossary terms into the articles that already declare them, in
 * every language the term exists in.
 *
 * The constraint that makes this safe is that the pairing is authored,
 * not discovered. A term is only ever linked inside an article listed in
 * that term's own `relatedArticles`, or inside a translation of one of
 * those articles. The script never searches the corpus for a word and
 * decides what it means — which is the operation that produced
 * `[cells]` pointing at cell biology from an article about photovoltaic
 * cells.
 *
 * On top of that pairing, five guards:
 *   - the surface form must appear verbatim as a whole phrase;
 *   - a single-word surface form must be long and distinctive, and must
 *     not be on the locale's ambiguous list, because short or ordinary
 *     words are ambiguous however they were paired;
 *   - a link is only ever written to a locale that has the term, so a
 *     localized link can never point at a page that does not exist;
 *   - masked regions are never touched: headings, existing links, code
 *     spans, table rows and the whole Sources block, so a hand-written
 *     link is never rewritten or nested inside a generated one;
 *   - at most three new glossary links per file, and never the same
 *     term twice;
 *   - never enough single-word anchors to trip the corpus's own
 *     anchor-quality rule, which treats three or more on a page as the
 *     signature of mechanical injection. The linker is that mechanism,
 *     so it has to stay under the bar it would otherwise be measured
 *     against.
 *
 * Non-English surface forms come from the localization's `term` and its
 * `aliases`. Matching stays verbatim: German and Russian inflect, and a
 * suffix-tolerant match would buy coverage by making the wrong link
 * possible, which is the trade this script exists to refuse.
 *
 * A translation never links a term its English original does not. The
 * English file is processed first and its link set becomes the candidate
 * list for every translation of it, so the two can only ever differ by a
 * term whose localized form is absent from the translated prose — never
 * by a term the translation invented. Without that ordering each locale
 * links whatever its own wording happens to contain, and the translation
 * fidelity check reports link sets that drift apart article by article.
 *
 * Usage:
 *   npm run glossary:link            # dry run, prints what it would do
 *   npm run glossary:link -- --apply
 */
import fs from "node:fs";

import matter from "gray-matter";
import { walkAllContent } from "./_lib";
import {
  GLOSSARY,
  glossaryLocalization,
  hasLocalizedGlossaryTerm,
} from "../lib/glossary";

const MAX_NEW_PER_FILE = 3;
const MIN_SINGLE_WORD_LENGTH = 9;

/**
 * Single words that pass the length test and still mean different
 * things in different disciplines, or in ordinary language. Never
 * linked on their own, in any locale.
 *
 * Each list holds two kinds of entry. The first is the locale's
 * rendering of the words that are ambiguous in the English list and in
 * the brief — cell, field, energy, mass, current, wave, species,
 * population, stress, adaptation. Most are short enough that the length
 * test already stops them; they are written out anyway, because a guard
 * that happens to hold by accident is not a guard. The second is every
 * ordinary-language word that actually occurs as a term or alias in
 * data/glossary/localized.json and would otherwise pass: "référence",
 * "incertidumbre", "Gleichmäßigkeit", "sumidouro", "неопределённость".
 */
const AMBIGUOUS: Record<string, Set<string>> = {
  en: new Set([
    "cell", "field", "energy", "mass", "current", "wave", "species",
    "population", "stress", "adaptation",
    "resolution", "sensitivity", "resistance", "efficiency",
    "concentration", "conductivity", "generation", "transmission",
    "radiation", "attenuation", "saturation", "circulation",
    "speciation", "convection", "reflectance", "signature",
    "structure", "emissivity", "baseline", "reference", "uncertainty",
    "selection", "forcing", "evenness",
  ]),
  fr: new Set([
    "cellule", "champ", "énergie", "masse", "courant", "onde", "espèce",
    "espèces", "population", "stress", "adaptation",
    "résolution", "sensibilité", "résistance", "rendement",
    "concentration", "conductivité", "génération", "transmission",
    "rayonnement", "atténuation", "saturation", "circulation",
    "spéciation", "convection", "signature", "structure",
    "référence", "incertitude", "sélection", "forçage", "régularité",
  ]),
  es: new Set([
    "célula", "campo", "energía", "masa", "corriente", "onda", "especie",
    "especies", "población", "estrés", "adaptación",
    "resolución", "sensibilidad", "resistencia", "eficiencia",
    "concentración", "conductividad", "generación", "transmisión",
    "radiación", "atenuación", "saturación", "circulación",
    "especiación", "convección", "firma", "estructura",
    "referencia", "incertidumbre", "selección", "equidad",
  ]),
  de: new Set([
    "zelle", "feld", "energie", "masse", "strom", "welle", "art",
    "arten", "population", "stress", "anpassung",
    "auflösung", "empfindlichkeit", "widerstand", "wirkungsgrad",
    "konzentration", "leitfähigkeit", "erzeugung", "übertragung",
    "strahlung", "abschwächung", "sättigung", "zirkulation",
    "artbildung", "konvektion", "signatur", "struktur",
    "referenz", "unsicherheit", "auslese", "antrieb",
    "gleichmäßigkeit", "bezugszustand", "ausgangszustand",
  ]),
  pt: new Set([
    "célula", "campo", "energia", "massa", "corrente", "onda", "espécie",
    "espécies", "população", "stresse", "adaptação",
    "resolução", "sensibilidade", "resistência", "rendimento",
    "concentração", "condutividade", "geração", "transmissão",
    "radiação", "atenuação", "saturação", "circulação",
    "especiação", "convecção", "assinatura", "estrutura",
    "referência", "incerteza", "seleção", "sumidouro", "equidade",
  ]),
  ru: new Set([
    "клетка", "поле", "энергия", "масса", "ток", "волна", "вид",
    "виды", "популяция", "стресс", "адаптация",
    "разрешение", "чувствительность", "устойчивость", "эффективность",
    "концентрация", "проводимость", "поколение", "передача",
    "излучение", "ослабление", "насыщение", "циркуляция",
    "видообразование", "конвекция", "подпись", "структура",
    "отсчёт", "неопределённость", "отбор", "воздействие",
    "выравненность",
  ]),
};

const PLACEHOLDER = /__G(\d+)__/g;

export function maskProtected(body: string): {
  masked: string;
  restore: (s: string) => string;
} {
  const store: string[] = [];
  const put = (m: string) => {
    const tok = `__G${store.length}__`;
    store.push(m);
    return tok;
  };
  let out = body;
  out = out.replace(/^##\s+Sources[\s\S]*/im, put);
  out = out.replace(/```[\s\S]*?```/g, put);
  out = out.replace(/`[^`\n]+`/g, put);
  out = out.replace(/\[[^\]]*\]\([^)]*\)/g, put);
  out = out.replace(/^#{1,6}.*$/gm, put);
  out = out.replace(/^\s*\|.*$/gm, put);
  return {
    masked: out,
    /**
     * Restores in a loop, because the masks nest: a heading containing a
     * link is masked as a link first and then as a heading, so a single
     * pass hands back a heading that still contains the link's
     * placeholder. One pass left `__G16__` inside two published headings
     * before this was fixed.
     */
    restore: (s: string) => {
      let out = s;
      for (let i = 0; i < 10 && PLACEHOLDER.test(out); i += 1) {
        PLACEHOLDER.lastIndex = 0;
        out = out.replace(PLACEHOLDER, (_, n) => store[Number(n)]);
      }
      PLACEHOLDER.lastIndex = 0;
      return out;
    },
  };
}

/** Whether a surface form may be linked at all in this locale. */
export function eligible(surface: string, locale: string): boolean {
  const trimmed = surface.trim();
  if (!trimmed) return false;
  const lower = trimmed.toLowerCase();
  if (AMBIGUOUS[locale]?.has(lower)) return false;
  const words = trimmed.split(/\s+/);
  if (words.length >= 2) return true;
  return lower.length >= MIN_SINGLE_WORD_LENGTH;
}

export type Candidate = { slug: string; surfaces: string[] };

/**
 * The surface forms to try for a term in a locale, longest first. For
 * English that is the term itself; for a localized entry it is the
 * localized term plus its aliases.
 */
export function surfacesFor(slug: string, term: string, locale: string): string[] {
  if (locale === "en") {
    // English used to get exactly one surface form while every other
    // locale got the term plus its aliases. That asymmetry is why the
    // English glossary accumulated 71 unreachable terms: a term
    // displayed as "Counterfactual (conservation evidence)" cannot
    // match prose that says "counterfactual".
    const entry = GLOSSARY.find((g) => g.slug === slug);
    return [term, ...(entry?.aliases ?? [])]
      .filter((s) => eligible(s, locale))
      .sort((a, b) => b.length - a.length);
  }
  const loc = glossaryLocalization(slug, locale);
  if (!loc) return [];
  return [loc.term, ...(loc.aliases ?? [])]
    .filter((s) => eligible(s, locale))
    .sort((a, b) => b.length - a.length);
}

/**
 * Single-word internal anchors already in a body. The content validator
 * warns above two of them in an English article, on the grounds that a
 * page full of one-word anchors reads as anchor stuffing rather than as
 * links placed where the idea is used. The count is English-only there,
 * because German compounds a phrase into one word and the rule would
 * punish correct German; the linker follows the same boundary.
 */
function singleWordAnchors(body: string): number {
  return [...body.matchAll(/\[([^\]]+)\]\(\/[a-z]{2}\/[^)]+\)/g)].filter(
    (m) => m[1].trim().split(/\s+/).length === 1,
  ).length;
}

const MAX_SINGLE_WORD_ANCHORS = 2;

export type LinkResult = {
  body: string;
  added: Array<{ slug: string; surface: string }>;
  noMatch: number;
};

/**
 * Add at most `max` glossary links to one file's body.
 *
 * Pure: same body and candidates in, same body out. That is what lets
 * the regression tests drive it with fixtures instead of the corpus.
 */
export function linkBody(
  body: string,
  locale: string,
  candidates: Candidate[],
  max = MAX_NEW_PER_FILE,
): LinkResult {
  let out = body;
  const added: Array<{ slug: string; surface: string }> = [];
  let noMatch = 0;

  // Longest surface first, so "cation exchange capacity" is linked
  // before "capacity" and the shorter match cannot nest inside it.
  const ordered = [...candidates].sort(
    (a, b) =>
      Math.max(0, ...b.surfaces.map((s) => s.length)) -
      Math.max(0, ...a.surfaces.map((s) => s.length)),
  );

  for (const c of ordered) {
    if (added.length >= max) break;
    // Already linked — by an earlier run, or by hand in any locale.
    if (out.includes(`/glossary/${c.slug})`)) continue;

    const { masked, restore } = maskProtected(out);
    let done = false;
    for (const surface of c.surfaces) {
      // Re-checked here as well as in surfacesFor. The guard must not
      // depend on every caller having remembered to filter: the
      // photovoltaic-cell bug was a candidate list that should never
      // have contained the word, and one careless assembly site is
      // enough to bring it back.
      if (!eligible(surface, locale)) continue;
      if (
        locale === "en" &&
        surface.trim().split(/\s+/).length === 1 &&
        singleWordAnchors(out) >= MAX_SINGLE_WORD_ANCHORS
      ) {
        continue;
      }
      const escaped = surface.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // Unicode-aware boundaries: an ASCII \w class does not fire before
      // "Экосистема" or after "Écosystème", which silently disabled the
      // guard for every non-English locale.
      const re = new RegExp(
        `(?<![\\p{L}\\p{N}_-])(${escaped})(?![\\p{L}\\p{N}_-])`,
        "iu",
      );
      const m = re.exec(masked);
      if (!m || m.index === undefined) continue;
      out = restore(
        masked.slice(0, m.index) +
          `[${m[1]}](/${locale}/glossary/${c.slug})` +
          masked.slice(m.index + m[1].length),
      );
      added.push({ slug: c.slug, surface: m[1] });
      done = true;
      break;
    }
    if (!done) noMatch += 1;
  }

  return { body: out, added, noMatch };
}

async function main() {
  const apply = process.argv.includes("--apply");
  const walked = await walkAllContent();

  // Which terms are paired with which English article.
  const paired = new Map<string, Array<{ slug: string; term: string }>>();
  for (const g of GLOSSARY) {
    for (const ra of g.relatedArticles ?? []) {
      const list = paired.get(ra.slug) ?? [];
      list.push({ slug: g.slug, term: g.term });
      paired.set(ra.slug, list);
    }
  }

  const perLocale = new Map<
    string,
    { linked: number; files: number; noMatch: number }
  >();
  const bump = (locale: string) => {
    const a = perLocale.get(locale) ?? { linked: 0, files: 0, noMatch: 0 };
    perLocale.set(locale, a);
    return a;
  };

  const write = (filepath: string, data: unknown, body: string) => {
    if (!apply) return;
    const out = (
      matter.stringify as unknown as (
        content: string,
        d: Record<string, unknown>,
      ) => string
    )(body, data as Record<string, unknown>);
    fs.writeFileSync(filepath, out, "utf8");
  };

  const glossaryLinksIn = (body: string): Set<string> => {
    const found = new Set<string>();
    for (const m of body.matchAll(/\]\(\/[a-z]{2}\/glossary\/([a-z0-9-]+)\)/g)) {
      found.add(m[1]);
    }
    return found;
  };

  // ---- English first. Its link set defines what the translations may
  //      carry, so it has to be settled before they are touched.
  const englishLinks = new Map<string, Set<string>>();
  for (const w of walked.filter((x) => x.locale === "en")) {
    const parsed = matter(fs.readFileSync(w.filepath, "utf8"));
    let body = parsed.content;
    const terms = paired.get(w.slug) ?? [];
    const candidates: Candidate[] = [];
    for (const t of terms) {
      // An article whose whole subject is the term does not need to link
      // the one-line definition of its own title.
      if (w.slug.includes(t.slug) || t.slug.includes(w.slug)) continue;
      const surfaces = surfacesFor(t.slug, t.term, "en");
      if (surfaces.length) candidates.push({ slug: t.slug, surfaces });
    }
    if (candidates.length) {
      const r = linkBody(body, "en", candidates);
      const acc = bump("en");
      acc.noMatch += r.noMatch;
      if (r.added.length) {
        acc.linked += r.added.length;
        acc.files += 1;
        body = r.body;
        write(w.filepath, parsed.data, body);
      }
    }
    englishLinks.set(w.slug, glossaryLinksIn(body));
  }

  // ---- Then the translations, from the English link set.
  for (const w of walked.filter((x) => x.locale !== "en")) {
    const wanted = englishLinks.get(w.slug);
    if (!wanted || wanted.size === 0) continue;
    const byTerm = new Map((paired.get(w.slug) ?? []).map((t) => [t.slug, t.term]));

    const candidates: Candidate[] = [];
    for (const slug of wanted) {
      // Never write a localized link to a term this locale has not
      // localized: the destination would 404.
      if (!hasLocalizedGlossaryTerm(slug, w.locale)) continue;
      const surfaces = surfacesFor(slug, byTerm.get(slug) ?? slug, w.locale);
      if (surfaces.length) candidates.push({ slug, surfaces });
    }
    if (!candidates.length) continue;

    const parsed = matter(fs.readFileSync(w.filepath, "utf8"));
    // The cap is the English article's own link count: a translation
    // mirrors, it does not accumulate.
    const r = linkBody(parsed.content, w.locale, candidates, candidates.length);
    const acc = bump(w.locale);
    acc.noMatch += r.noMatch;
    if (r.added.length) {
      acc.linked += r.added.length;
      acc.files += 1;
      write(w.filepath, parsed.data, r.body);
    }
  }

  const verb = apply ? "linked" : "would link";
  let total = 0;
  for (const [locale, a] of [...perLocale].sort()) {
    total += a.linked;
    console.log(
      `${locale}: ${verb} ${a.linked} across ${a.files} files · ${a.noMatch} skipped (surface form not present verbatim)`,
    );
  }
  console.log(`\n${verb} ${total} glossary links in total`);
  if (!apply) console.log("(dry run — pass --apply to write)");
}

if (process.argv[1] && /[/\\]glossary-link\.ts$/.test(process.argv[1])) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
