#!/usr/bin/env tsx
/**
 * Translation fidelity checks.
 *
 * A translation may change every word and must change none of the
 * evidence. These rules check the parts that carry meaning across the
 * language boundary, because those are the parts a fluent-sounding
 * translation can quietly get wrong.
 *
 * The severity split is deliberate and is the thing to preserve when
 * adding a rule:
 *
 *   ERROR   — the translation says something the English does not, or
 *             has dropped something the English asserts. A reader of
 *             the translation would come away with a different set of
 *             facts. Structure, citations, units, link targets and
 *             untranslated fragments all fall here.
 *
 *   WARNING — a difference a human should read, but which normal
 *             grammatical transformation produces routinely. English
 *             spells "Forty-five percent" where Spanish writes "45 por
 *             ciento", Spanish renders "3 billion" as "3000 millones",
 *             Russian writes "2018-19" as "2018-2019", French moves a
 *             hedge from the verb to an adverb. Numbers, hedging,
 *             negation, attribution and punctuation conventions are
 *             warnings, and every one of them prints enough context to
 *             be settled without opening the file.
 *
 * A rule that fires on correct localization is worse than no rule: it
 * teaches the reader to skim the output. Anything here that turns out
 * to be noisy should be narrowed or dropped, not tolerated.
 *
 * Usage:
 *   npm run content:translations
 *   tsx scripts/validate-translations.ts --json
 *   tsx scripts/validate-translations.ts --locale fr
 */
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { PROJECT_ROOT, CONTENT_ROOT, LOCALES, type Locale } from "./_lib";

type Issue = {
  severity: "error" | "warning";
  rule: string;
  message: string;
  filepath: string;
};

const IDENTITY_FIELDS = [
  "type",
  "author",
  "publishedDate",
  "updatedDate",
  "pillar",
] as const;

function walk(dir: string, out: string[] = []): string[] {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Text preparation
 * ------------------------------------------------------------------ */

function splitSources(raw: string): { prose: string; sources: string } {
  const { content } = matter(raw);
  const m = content.match(/^##\s+Sources[\s\S]*/im);
  return {
    prose: m ? content.slice(0, m.index) : content,
    sources: m ? m[0] : "",
  };
}

/**
 * Prose with everything that is not translated prose removed: link
 * targets, bare URLs, code spans, image syntax. Numbers and units
 * inside a URL are part of an address, not a claim, and counting them
 * produced most of the old number noise.
 */
function proseOnly(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]+`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ");
}

function paragraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/**
 * Sentences, block-aware.
 *
 * A plain sentence split runs straight through "climatique.\n\n## Ce
 * que ce n'est pas" — the lookahead wants a capital letter and a "#"
 * is not one — so an English paragraph got glued to the French heading
 * and list that followed it, and its English-word density fell below
 * the threshold. Markdown blocks are hard boundaries; split on them
 * first, and drop the heading and list markers.
 */
function sentences(text: string): string[] {
  const out: string[] = [];
  for (const block of text.split(/\n{2,}/)) {
    for (const line of block.split(/\n/)) {
      const clean = line.replace(/^\s{0,3}(?:#{1,6}|[-*+]|\d{1,2}[.)]|>|\|)\s*/, "").trim();
      if (!clean) continue;
      for (const s of clean.split(/(?<=[.!?…])\s+(?=[A-ZА-ЯÀ-ÖØ-Þ"«„(])/u)) {
        const t = s.trim();
        if (t) out.push(t);
      }
    }
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Numbers
 * ------------------------------------------------------------------ */

/**
 * A number, allowing '.', ',' or a (narrow/non-breaking) space as a
 * group separator — but only in front of an actual group of three
 * digits. The old pattern allowed any run of separators, so "2. 58.3"
 * at the head of an ordered-list item read as one number in English
 * and two in Portuguese, and reported a difference that was purely an
 * artefact of the list marker.
 */
const NUMBER = /\d+(?:[.,    ]\d{3})*(?:[.,]\d+)?/g;
/** "2018-19" is the same span as "2018-2019". */
const YEAR_SPAN = /\b(\d{2})(\d{2})[-–](\d{2})\b(?!\d)/g;
/** "19th century" in English is "XIXe siècle" / "XIX век" elsewhere. */
const ORDINAL_CENTURY =
  /\b\d{1,2}(?:st|nd|rd|th)[- ](?:century|centuries)\b|\b\d{1,2}(?:e|er|ème|ª|º|\.)?[- ](?:siècle|siglo|Jahrhundert|século|век)\p{L}*/giu;

function normaliseNumber(raw: string): string {
  let n = raw.trim().replace(/[.,]$/, "");
  n = n.replace(/[    ](?=\d{3}(?:\D|$))/g, "");
  n = n.replace(/(?<=\d)[.,](?=\d{3}(?:\D|$))/g, "");
  n = n.replace(",", ".");
  const f = Number(n);
  return Number.isFinite(f) ? String(f) : n;
}

function numbersOf(text: string): string[] {
  const cleaned = proseOnly(text)
    .replace(YEAR_SPAN, (_m, a, b, c) => `${a}${b}-${a}${c}`)
    .replace(ORDINAL_CENTURY, " ")
    // Ordered-list markers are structure, not quantities.
    .replace(/^\s{0,3}\d{1,2}[.)]\s+/gm, " ");
  return (cleaned.match(NUMBER) ?? []).map(normaliseNumber);
}

/* ------------------------------------------------------------------ *
 * Multisets
 * ------------------------------------------------------------------ */

function multiset(values: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const v of values) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
}

function diffMultiset(a: Map<string, number>, b: Map<string, number>) {
  const onlyA: string[] = [];
  const onlyB: string[] = [];
  for (const [k, n] of a) {
    const d = n - (b.get(k) ?? 0);
    for (let i = 0; i < d; i++) onlyA.push(k);
  }
  for (const [k, n] of b) {
    const d = n - (a.get(k) ?? 0);
    for (let i = 0; i < d; i++) onlyB.push(k);
  }
  return { onlyA, onlyB };
}

/* ------------------------------------------------------------------ *
 * Rule inputs
 * ------------------------------------------------------------------ */

/**
 * Symbols that are the same in every language this platform publishes.
 * A translation that has fewer of them than the English has dropped a
 * measured quantity, whatever it did with the surrounding words. Units
 * that are routinely spelled out (per cent, tonnes, metres) are not
 * here — those belong to the prose.
 */
const SI_TOKENS = [
  "W/m²",
  "kW/m²",
  "°C",
  "°F",
  "K⁻¹",
  "ppm",
  "ppb",
  "ppt",
  "µg/m³",
  "μg/m³",
  "mg/m³",
  "mg/L",
  "µm",
  "μm",
  "nm",
  "mSv",
  "Sv",
  "Bq",
  "Gy",
  "GtCO₂",
  "MtCO₂",
  "GtC",
  "PgC",
  "CO₂",
  "CH₄",
  "N₂O",
  "O₃",
  "NO₂",
  "SO₂",
  "NH₃",
  "PM2.5",
  "PM10",
  "km³",
  "km²",
  "m³",
  "m²",
  "kWh",
  "MWh",
  "TWh",
  "GW",
  "MW",
  "eV",
  "keV",
  "MeV",
  "Hz",
  "GHz",
  "pH",
];

/**
 * Unit symbols are not universal: Russian sets them in Cyrillic, so
 * W/m² is Вт/м² and MeV is МэВ. Only the tokens that actually change
 * are listed; anything absent is compared against itself.
 */
const UNIT_ALIASES: Partial<Record<Locale, Record<string, string[]>>> = {
  ru: {
    "W/m²": ["Вт/м²"],
    "kW/m²": ["кВт/м²"],
    ppm: ["млн⁻¹", "ppm"],
    ppb: ["млрд⁻¹", "ppb"],
    "µg/m³": ["мкг/м³"],
    "μg/m³": ["мкг/м³"],
    "mg/m³": ["мг/м³"],
    "mg/L": ["мг/л"],
    "µm": ["мкм"],
    "μm": ["мкм"],
    nm: ["нм"],
    mSv: ["мЗв"],
    Sv: ["Зв"],
    Bq: ["Бк"],
    Gy: ["Гр"],
    "GtCO₂": ["ГтCO₂", "Гт CO₂"],
    "MtCO₂": ["МтCO₂", "Мт CO₂"],
    GtC: ["ГтC"],
    PgC: ["ПгC"],
    "km³": ["км³"],
    "km²": ["км²"],
    "m³": ["м³"],
    "m²": ["м²"],
    kWh: ["кВт·ч", "кВт⋅ч"],
    MWh: ["МВт·ч", "МВт⋅ч"],
    TWh: ["ТВт·ч", "ТВт⋅ч"],
    GW: ["ГВт"],
    MW: ["МВт"],
    eV: ["эВ"],
    keV: ["кэВ"],
    MeV: ["МэВ"],
    Hz: ["Гц"],
    GHz: ["ГГц"],
    "K⁻¹": ["К⁻¹"],
  },
};

/**
 * Names that identify who made a measurement. Prose may reorder them
 * or expand an acronym, but it should not lose one: an unattributed
 * figure is a different claim from an attributed one.
 */
const ATTRIBUTIONS = [
  "IPCC",
  "IPBES",
  "IUCN",
  "UNEP",
  "WMO",
  "WHO",
  "FAO",
  "UNESCO",
  "IAEA",
  "NASA",
  "NOAA",
  "USGS",
  "EPA",
  "NIST",
  "NIH",
  "CDC",
  "ESA",
  "EEA",
  "Copernicus",
  "Landsat",
  "Sentinel",
  "*Nature*",
  "*Science*",
  "UNSCEAR",
  "BIPM",
  "GCOS",
  "CBD",
  "OECD",
  "IEA",
  "IRENA",
];

/**
 * The same body under its local acronym. GIEC and МГЭИК are the IPCC;
 * a translation that uses them has not dropped the attribution. Only
 * bodies whose acronym actually changes are listed.
 */
const ATTRIBUTION_ALIASES: Partial<Record<Locale, Record<string, string[]>>> = {
  fr: { IPCC: ["GIEC"], WMO: ["OMM"], WHO: ["OMS"], IUCN: ["UICN"], UNEP: ["PNUE"], IAEA: ["AIEA"], OECD: ["OCDE"], IEA: ["AIE"], EEA: ["AEE"], CBD: ["CDB"] },
  es: { IPCC: ["Grupo Intergubernamental"], WMO: ["OMM"], WHO: ["OMS"], IUCN: ["UICN"], UNEP: ["PNUMA"], IAEA: ["OIEA"], OECD: ["OCDE"], IEA: ["AIE"], EEA: ["AEMA"], CBD: ["CDB"] },
  de: { IPCC: ["Weltklimarat"], IAEA: ["IAEO"], EEA: ["EUA"] },
  pt: { IPCC: ["PIAC"], WMO: ["OMM"], WHO: ["OMS"], IUCN: ["UICN"], UNEP: ["PNUMA", "PNUA"], IAEA: ["AIEA"], OECD: ["OCDE"], IEA: ["AIE"], EEA: ["AEA"], CBD: ["CDB"] },
  ru: { USGS: ["Геологическ"], ESA: ["ЕКА"], EPA: ["Агентств"], NOAA: ["NOAA"], IPCC: ["МГЭИК"], WMO: ["ВМО"], WHO: ["ВОЗ"], IUCN: ["МСОП"], UNEP: ["ЮНЕП"], UNESCO: ["ЮНЕСКО"], IAEA: ["МАГАТЭ"], FAO: ["ФАО"], NASA: ["НАСА"], IPBES: ["МПБЭУ"], OECD: ["ОЭСР"], IEA: ["МЭА"], CBD: ["КБР"], UNSCEAR: ["НКДАР"] },
};
/**
 * Hedging, in two classes, because one of them is a trap.
 *
 * "About" in front of a number is a hedge; "about" in front of a noun
 * is a preposition, and counting both made a well-hedged French
 * translation look like it had dropped seven qualifiers when what it
 * had dropped was the English word "about" in "a claim about carbon".
 * So numeric hedges must be followed by a digit, and the word class
 * holds only markers that are epistemic wherever they appear.
 */
const HEDGE_NUMERIC: Record<string, RegExp> = {
  en: /\b(?:about|around|roughly|approximately|nearly|some|up to|at least|more than|less than|fewer than)\s+[\d]/giu,
  fr: /\b(?:environ|à peu près|de l'ordre de|près de|jusqu'à|au moins|plus de|moins de|quelque)\s+[\d]/giu,
  es: /\b(?:unos|unas|alrededor de|aproximadamente|cerca de|hasta|al menos|más de|menos de)\s+[\d]/giu,
  de: /\b(?:etwa|rund|ungefähr|knapp|bis zu|mindestens|mehr als|weniger als|gut)\s+[\d]/giu,
  pt: /\b(?:cerca de|aproximadamente|à volta de|perto de|até|pelo menos|mais de|menos de|uns|umas)\s+[\d]/giu,
  ru: /(?:около|примерно|порядка|почти|до|не менее|более|менее|свыше)\s+[\d]/giu,
};

const HEDGE_WORD: Record<string, RegExp> = {
  en: /(?:likely|unlikely|probabl\p{L}*|estimat\p{L}*|suggest\p{L}*|may\b|might\b|uncertain\p{L}*|confidence|appears|tends to|thought to|plausib\p{L}*)/giu,
  fr: /(?:probabl\p{L}*|vraisemblab\p{L}*|estim\p{L}*|suggèr\p{L}*|peut\b|pourrait|incertain\p{L}*|incertitude|confiance|semble\p{L}*|paraît|plausib\p{L}*|sans doute)/giu,
  es: /(?:probabl\p{L}*|estim\p{L}*|sugier\p{L}*|puede\b|podría|inciert\p{L}*|incertidumbre|confianza|parece\p{L}*|plausib\p{L}*)/giu,
  de: /(?:wahrscheinlich\p{L}*|vermutlich|geschätzt\p{L}*|Schätzung\p{L}*|deutet|kann\b|könnte|unsicher\p{L}*|Unsicherheit\p{L}*|Konfidenz|scheint|dürfte|plausib\p{L}*)/giu,
  pt: /(?:provável|provavelmente|estimad\p{L}*|estimativa\p{L}*|sugere\p{L}*|pode\b|poderia|incert\p{L}*|confiança|parece\p{L}*|plausív\p{L}*)/giu,
  ru: /(?:вероятн\p{L}*|оцен\p{L}*|предполага\p{L}*|может|могут|неопредел\p{L}*|уверенност\p{L}*|по-видимому|кажется|правдоподоб\p{L}*)/giu,
};

function hedgeCount(text: string, locale: string): number {
  const n = (text.match(HEDGE_NUMERIC[locale] ?? HEDGE_NUMERIC.en) ?? []).length;
  const w = (text.match(HEDGE_WORD[locale] ?? HEDGE_WORD.en) ?? []).length;
  return n + w;
}
/** Negation markers, by locale. */
const NEGATIONS: Record<string, RegExp> = {
  en: /(?<![\p{L}])(not|no|never|nor|cannot|can't|without|neither|none|rather than|instead of)(?![\p{L}])/giu,
  fr: /(?<![\p{L}])(ne|n'|pas|non|jamais|aucun\p{L}*|sans|ni|plutôt que|au lieu de)(?![\p{L}])/giu,
  es: /(?<![\p{L}])(no|nunca|ningún\p{L}*|ninguna\p{L}*|sin|ni|en lugar de|tampoco)(?![\p{L}])/giu,
  de: /(?<![\p{L}])(nicht|nie|kein\p{L}*|ohne|weder|statt|anstatt|nichts)(?![\p{L}])/giu,
  pt: /(?<![\p{L}])(não|nunca|nenhum\p{L}*|sem|nem|em vez de|tampouco)(?![\p{L}])/giu,
  ru: /(?<![\p{L}])(не|нет|ни|без|никогда|нельзя|вместо)(?![\p{L}])/giu,
};

/**
 * Calques and near-misses that a fluent translation of this subject
 * matter should not contain, with the established term to use instead.
 * Every entry here was chosen because the wrong form is a plausible
 * literal rendering of the English, not because it is impossible.
 */
const TERMINOLOGY: Record<string, Array<[RegExp, string]>> = {
  fr: [
    [/\bcarbone dioxyde\b/gi, "dioxyde de carbone"],
    [/\bgaz de serre\b/gi, "gaz à effet de serre"],
    [/\bchangement climatique globale\b/gi, "changement climatique mondial"],
    [/\bforçage radiatif de\b/gi, "forçage radiatif (sans « de »)"],
    [/\bbiodiversité de la vie\b/gi, "biodiversité"],
    [/\bsensitivité climatique\b/gi, "sensibilité climatique"],
    [/\bcycle de carbone\b/gi, "cycle du carbone"],
  ],
  es: [
    [/\bdióxido carbono\b/gi, "dióxido de carbono"],
    [/\bgases de invernadero\b/gi, "gases de efecto invernadero"],
    [/\bsensitividad climática\b/gi, "sensibilidad climática"],
    [/\bciclo de carbono\b/gi, "ciclo del carbono"],
    [/\bcalentamiento glob(o|almente)\b/gi, "calentamiento global"],
  ],
  de: [
    [/\bKohlenstoff Dioxid\b/gi, "Kohlendioxid"],
    [/\bTreibhaus Gas\b/gi, "Treibhausgas"],
    [/\bKlima Sensitivität\b/gi, "Klimasensitivität"],
    [/\bKohlenstoff Kreislauf\b/gi, "Kohlenstoffkreislauf"],
    [/\bStrahlungs Antrieb\b/gi, "Strahlungsantrieb"],
  ],
  pt: [
    [/\bdióxido carbono\b/gi, "dióxido de carbono"],
    [/\bgases de estufa\b/gi, "gases com efeito de estufa"],
    [/\bsensitividade climática\b/gi, "sensibilidade climática"],
    [/\bciclo de carbono\b/gi, "ciclo do carbono"],
  ],
  ru: [
    [/\bкарбон\b/gi, "углерод"],
    [/\bпарниковый газы\b/gi, "парниковые газы"],
    [/\bклиматическая чувствительность земли\b/gi, "чувствительность климата"],
    [/\bрадиативное форсирование\b/gi, "радиационное воздействие"],
  ],
};

/** English function words. Used only to detect untranslated runs. */
const EN_STOPWORDS = new Set(
  ("the of and to in that is are was were for with as by on it this these those from " +
    "which but not have has had they their there than then when where while because " +
    "an a be been being at into over under between about after before its it's also " +
    "more most much many such other same each any all can could would should will").split(
    " ",
  ),
);

/* ------------------------------------------------------------------ *
 * Rules
 * ------------------------------------------------------------------ */

/**
 * Count occurrences of fixed tokens, with letter boundaries.
 *
 * The boundaries are the whole rule. "nm" is a unit and it is also the
 * middle of "environment"; counting substrings reported that every
 * French translation had lost three nanometres, which was sixty-two
 * findings and not one defect.
 */
function countAll(
  text: string,
  needles: string[],
  /**
   * Allow an inflectional suffix after the token. German writes
   * "NASAs Uberblick"; a strict right boundary reads the genitive as a
   * different word and reports a dropped attribution. Units keep the
   * strict boundary, because there "Gy" inside "Gyre" is exactly the
   * mistake to avoid.
   */
  allowSuffix = false,
): Map<string, number> {
  const m = new Map<string, number>();
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  for (const n of needles) {
    const left = /^[A-Za-z]/.test(n) ? "(?<![\\p{L}])" : "";
    const right = /[A-Za-z]$/.test(n)
      ? allowSuffix
        ? "(?![\\p{Lu}\\p{N}])"
        : "(?![\\p{L}])"
      : "";
    const re = new RegExp(`${left}${esc(n)}${right}`, "gu");
    const c = (text.match(re) ?? []).length;
    if (c) m.set(n, c);
  }
  return m;
}

function headingShape(text: string): string[] {
  return (text.match(/^#{2,6}\s+/gm) ?? []).map((h) => h.trim());
}

function listItemCount(text: string): number {
  return (text.match(/^\s{0,3}(?:[-*+]|\d{1,2}[.)])\s+/gm) ?? []).length;
}

function tableShape(text: string): number[] {
  return (text.match(/^\s*\|.*\|\s*$/gm) ?? []).map(
    (row) => row.split("|").length,
  );
}

function untranslatedSentences(text: string, locale: Locale): string[] {
  if (locale === "en") return [];
  const out: string[] = [];
  for (const s of sentences(proseOnly(text))) {
    const words = (s.toLowerCase().match(/\p{L}+/gu) ?? []).filter(
      (w) => w.length > 1,
    );
    if (words.length < 10) continue;
    // A sentence in another language will still contain Latin words
    // (species names, agency names). What it will not contain is a
    // high density of English function words — and single letters are
    // excluded because "a" and "o" are Romance articles, which is what
    // made a perfectly good Portuguese sentence look English.
    const foreign = words.filter((w) => !/^[a-z']+$/.test(w)).length;
    if (foreign / words.length > 0.04) continue;
    const stop = words.filter((w) => EN_STOPWORDS.has(w)).length;
    if (stop / words.length >= 0.3 && stop >= 5) out.push(s);
  }
  return out;
}

function punctuationIssues(text: string, locale: Locale): string[] {
  const out: string[] = [];
  const prose = proseOnly(text);
  if (locale === "fr") {
    const tight = prose.match(/\S[;:!?»](?=\s|$)/g) ?? [];
    const bad = tight.filter((m) => !/[   ]/.test(m[0]));
    if (bad.length > 2) {
      out.push(
        `${bad.length} occurrences of « ; : ! ? » with no space before the mark (French typography wants a space)`,
      );
    }
    const open = (prose.match(/«/g) ?? []).length;
    const close = (prose.match(/»/g) ?? []).length;
    if (open !== close) out.push(`« ${open} vs » ${close} — unbalanced quotation marks`);
  }
  if (locale === "es") {
    const q = (prose.match(/\?/g) ?? []).length;
    const iq = (prose.match(/¿/g) ?? []).length;
    if (q > iq) out.push(`${q} "?" but only ${iq} "¿" — Spanish questions open with ¿`);
    const e = (prose.match(/(?<![!])!/g) ?? []).length;
    const ie = (prose.match(/¡/g) ?? []).length;
    if (e > ie + 0) out.push(`${e} "!" but only ${ie} "¡" — Spanish exclamations open with ¡`);
  }
  if (locale === "ru") {
    const latin = prose.match(/(?<![A-Za-z/²³⁻])[A-Za-z]{4,}(?![A-Za-z])/g) ?? [];
    const unexpected = latin.filter(
      (w) => !ATTRIBUTIONS.includes(w) && !/^[A-Z]/.test(w),
    );
    if (unexpected.length > 6) {
      out.push(
        `${unexpected.length} lower-case Latin words in Russian prose, e.g. ${unexpected
          .slice(0, 4)
          .join(", ")}`,
      );
    }
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

const EXTERNAL = /\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g;
const INTERNAL = /\]\((\/[a-z]{2}\/[^)#?\s]*)/g;

/**
 * Every fidelity rule, applied to one English/translation pair.
 *
 * Split out from the file walk so the rules can be exercised on
 * synthetic pairs: scripts/test-translation-rules.ts injects a defect
 * of each kind and asserts the matching rule fires. A rule nobody has
 * ever seen fail is indistinguishable from a rule that cannot.
 */
export function checkTranslation(
  enRaw: string,
  trRaw: string,
  locale: Locale,
  rel: string,
): Issue[] {
  const issues: Issue[] = [];
  const en = matter(enRaw);
  const tr = matter(trRaw);
  const add = (severity: Issue["severity"], rule: string, message: string) =>
    issues.push({ severity, rule, message, filepath: rel });

  // ---- Identity frontmatter ------------------------------------
  for (const key of IDENTITY_FIELDS) {
    const norm = (v: unknown) =>
      v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? "");
    if (norm(en.data[key]) !== norm(tr.data[key])) {
      add(
        "error",
        "translation-frontmatter",
        `${key} is "${norm(tr.data[key])}" but the English source has "${norm(en.data[key])}"`,
      );
    }
  }
  const arr = (v: unknown) => (Array.isArray(v) ? v.map(String) : []);
  for (const key of ["tags", "related"] as const) {
    if (arr(en.data[key]).join("|") !== arr(tr.data[key]).join("|")) {
      add(
        "error",
        "translation-frontmatter",
        `${key} differs from the English source — these are corpus-wide slugs, not prose`,
      );
    }
  }
  if (tr.data._bodyHash !== undefined && en.data._bodyHash === tr.data._bodyHash) {
    add("warning", "translation-frontmatter", "_bodyHash copied from the English source");
  }
  for (const key of ["title", "excerpt", "metaTitle"] as const) {
    const a = String(en.data[key] ?? "");
    const b = String(tr.data[key] ?? "");
    if (a && b && a === b) {
      add("warning", "untranslated-field", `${key} is identical to the English`);
    }
    if (key === "metaTitle" && b && b.length > 65) {
      add(
        "error",
        "metatitle-length",
        `metaTitle is ${b.length} characters — the rendered <title> gate allows 65`,
      );
    }
  }

  // ---- Sources heading convention ------------------------------
  if (!/^##\s+Sources/im.test(tr.content)) {
    add(
      "error",
      "sources-heading",
      'the "## Sources" heading must stay in English — the validator and the linker both key on it',
    );
  }

  const enParts = splitSources(enRaw);
  const trParts = splitSources(trRaw);

  // ---- External citations: identical set -----------------------
  const urlDiff = diffMultiset(
    multiset([...enRaw.matchAll(EXTERNAL)].map((m) => m[1])),
    multiset([...trRaw.matchAll(EXTERNAL)].map((m) => m[1])),
  );
  if (urlDiff.onlyA.length || urlDiff.onlyB.length) {
    add(
      "error",
      "translation-sources",
      `citation set differs from the English source — missing: ${
        urlDiff.onlyA.slice(0, 3).join(", ") || "none"
      }; added: ${urlDiff.onlyB.slice(0, 3).join(", ") || "none"}`,
    );
  }

  // ---- Sources block shape -------------------------------------
  const enSrcItems = listItemCount(enParts.sources);
  const trSrcItems = listItemCount(trParts.sources);
  if (enSrcItems !== trSrcItems) {
    add(
      "error",
      "sources-block-drift",
      `the Sources block has ${trSrcItems} entries against ${enSrcItems} in the English — a citation was merged, split or dropped`,
    );
  }
  const enSrcUrls = [...enParts.sources.matchAll(EXTERNAL)].map((m) => m[1]);
  const trSrcUrls = [...trParts.sources.matchAll(EXTERNAL)].map((m) => m[1]);
  if (enSrcUrls.join("|") !== trSrcUrls.join("|")) {
    add(
      "error",
      "sources-block-drift",
      "the Sources block lists the same citations in a different order or place — the numbering readers cite by must match",
    );
  }

  // ---- Internal links ------------------------------------------
  const strip = (l: string) => l.replace(/^\/[a-z]{2}\//, "/");
  const enLinks = multiset([...en.content.matchAll(INTERNAL)].map((m) => strip(m[1])));
  const trMatches = [...tr.content.matchAll(INTERNAL)].map((m) => m[1]);
  for (const l of trMatches) {
    if (!l.startsWith(`/${locale}/`) && !l.startsWith("/en/")) {
      add(
        "error",
        "translation-link-prefix",
        `internal link ${l} uses neither /${locale}/ nor the English-only /en/ prefix`,
      );
    } else if (
      l.startsWith("/en/") &&
      !/^\/en\/(glossary|editorial|sourcing-policy|editorial-standards|corrections)/.test(l)
    ) {
      add(
        "error",
        "translation-link-prefix",
        `internal link ${l} still points at the English article; only the English-only routes (glossary, editorial, policies) may keep /en/`,
      );
    }
  }
  const linkDiff = diffMultiset(enLinks, multiset(trMatches.map(strip)));
  if (linkDiff.onlyA.length || linkDiff.onlyB.length) {
    add(
      "warning",
      "translation-links",
      `internal-link targets differ from the English — missing: ${
        linkDiff.onlyA.slice(0, 3).join(", ") || "none"
      }; added: ${linkDiff.onlyB.slice(0, 3).join(", ") || "none"}`,
    );
  }

  // ---- Structure ------------------------------------------------
  const enHeads = headingShape(enParts.prose);
  const trHeads = headingShape(trParts.prose);
  if (enHeads.join(",") !== trHeads.join(",")) {
    add(
      "error",
      "structure-drift",
      `heading shape differs — English ${enHeads.length} headings (${enHeads.join(" ")}), translation ${trHeads.length} (${trHeads.join(" ")})`,
    );
  }
  const enParas = paragraphs(enParts.prose).length;
  const trParas = paragraphs(trParts.prose).length;
  if (enParas !== trParas) {
    add(
      "error",
      "structure-drift",
      `${trParas} paragraphs against ${enParas} in the English — a paragraph was merged, split or dropped`,
    );
  }
  const enItems = listItemCount(enParts.prose);
  const trItems = listItemCount(trParts.prose);
  if (enItems !== trItems) {
    add(
      "error",
      "structure-drift",
      `${trItems} list items against ${enItems} in the English`,
    );
  }
  if (tableShape(enParts.prose).join(",") !== tableShape(trParts.prose).join(",")) {
    add(
      "error",
      "structure-drift",
      "table shape differs from the English — a row or column was added or lost",
    );
  }

  // ---- Broken markdown -----------------------------------------
  const openBrackets = (trParts.prose.match(/\[/g) ?? []).length;
  const closeBrackets = (trParts.prose.match(/\]/g) ?? []).length;
  const linkOpens = (trParts.prose.match(/\]\(/g) ?? []).length;
  const linkCloses = [...trParts.prose.matchAll(/\]\([^)\n]*\)/g)].length;
  if (openBrackets !== closeBrackets || linkOpens !== linkCloses) {
    add(
      "error",
      "broken-markdown",
      `link syntax does not close: [ ${openBrackets} vs ] ${closeBrackets}, "](" ${linkOpens} vs complete links ${linkCloses}`,
    );
  }

  // ---- Untranslated fragments ----------------------------------
  const untranslated = untranslatedSentences(trParts.prose, locale);
  if (untranslated.length) {
    add(
      "error",
      "untranslated-fragment",
      `${untranslated.length} sentence(s) are still English — "${untranslated[0].slice(0, 90)}…"`,
    );
  }

  // ---- Machine-translation repetition --------------------------
  const trP = paragraphs(proseOnly(trParts.prose));
  const enP = paragraphs(proseOnly(enParts.prose));
  const dupTr = multiset(trP);
  const dupEn = multiset(enP);
  for (const [p, n] of dupTr) {
    if (n > 1 && p.length > 120 && (dupEn.get(p) ?? 0) < n) {
      add(
        "error",
        "repeated-paragraph",
        `a paragraph appears ${n}× in the translation and once in the English — "${p.slice(0, 80)}…"`,
      );
      break;
    }
  }

  // ---- Scientific units ----------------------------------------
  const aliases = UNIT_ALIASES[locale] ?? {};
  const enUnits = countAll(enParts.prose, SI_TOKENS);
  const trUnits = countAll(
    trParts.prose,
    SI_TOKENS.flatMap((u) => [u, ...(aliases[u] ?? [])]),
  );
  const unitDrift: string[] = [];
  for (const [u, n] of enUnits) {
    const forms = [u, ...(aliases[u] ?? [])];
    const m = forms.reduce((acc, f) => acc + (trUnits.get(f) ?? 0), 0);
    if (m < n) unitDrift.push(`${u} ${m}/${n}`);
  }
  if (unitDrift.length) {
    add(
      "error",
      "unit-drift",
      `scientific units the translation has fewer of than the English: ${unitDrift.join(", ")} — these symbols are not translated, so a missing one is a missing quantity`,
    );
  }

  // ---- Attribution ---------------------------------------------
  const attrAliases = ATTRIBUTION_ALIASES[locale] ?? {};
  const enAttr = countAll(enParts.prose, ATTRIBUTIONS, true);
  const trAttr = countAll(
    trParts.prose,
    ATTRIBUTIONS.flatMap((a) => [a, ...(attrAliases[a] ?? [])]),
    true,
  );
  const attrDrift: string[] = [];
  for (const [a, n] of enAttr) {
    const m = [a, ...(attrAliases[a] ?? [])].reduce(
      (acc, f) => acc + (trAttr.get(f) ?? 0),
      0,
    );
    if (m < n) attrDrift.push(`${a} ${m}/${n}`);
  }
  if (attrDrift.length) {
    add(
      "warning",
      "attribution-drift",
      `named sources the translation mentions less often than the English: ${attrDrift.join(", ")}. An expanded acronym is fine; a dropped attribution turns a sourced figure into an assertion.`,
    );
  }

  // ---- Numbers --------------------------------------------------
  const numDiff = diffMultiset(
    multiset(numbersOf(enParts.prose)),
    multiset(numbersOf(trParts.prose)),
  );
  if (numDiff.onlyA.length || numDiff.onlyB.length) {
    add(
      "warning",
      "translation-numbers",
      `numbers differ — only in EN: ${
        numDiff.onlyA.slice(0, 6).join(", ") || "none"
      } | only here: ${numDiff.onlyB.slice(0, 6).join(", ") || "none"}. Spelled-out numerals and the "mil millones" scale legitimately differ; a figure that is simply gone does not.`,
    );
  }

  // ---- Hedging --------------------------------------------------
  const enHedge = hedgeCount(proseOnly(enParts.prose), "en");
  const trHedge = hedgeCount(proseOnly(trParts.prose), locale);
  if (enHedge >= 4 && trHedge < Math.ceil(enHedge * 0.5)) {
    add(
      "warning",
      "uncertainty-drift",
      `${trHedge} hedging markers against ${enHedge} in the English — a translation that reads more certain than its source is a fidelity failure, not a style choice`,
    );
  }

  // ---- Negation -------------------------------------------------
  const enNeg = (proseOnly(enParts.prose).match(NEGATIONS.en) ?? []).length;
  const trNeg = (proseOnly(trParts.prose).match(NEGATIONS[locale]) ?? []).length;
  if (enNeg >= 4 && trNeg < Math.ceil(enNeg * 0.4)) {
    add(
      "warning",
      "negation-drift",
      `${trNeg} negation markers against ${enNeg} in the English — check that no "does not" became an affirmative`,
    );
  }

  // ---- Terminology ----------------------------------------------
  for (const [re, better] of TERMINOLOGY[locale] ?? []) {
    const hits = trParts.prose.match(re);
    if (hits) {
      add(
        "warning",
        "terminology-drift",
        `"${hits[0]}" reads as a literal rendering of the English; the established term is "${better}"`,
      );
    }
  }

  // ---- Punctuation conventions -----------------------------------
  for (const p of punctuationIssues(trParts.prose, locale)) {
    add("warning", "punctuation-convention", p);
  }
  return issues;
}

function main() {
  const asJson = process.argv.includes("--json");
  const onlyLocale = (() => {
    const i = process.argv.indexOf("--locale");
    return i === -1 ? null : process.argv[i + 1];
  })();
  const issues: Issue[] = [];
  let checked = 0;

  for (const locale of LOCALES) {
    if (locale === "en") continue;
    if (onlyLocale && locale !== onlyLocale) continue;
    for (const file of walk(path.join(CONTENT_ROOT, locale))) {
      const rel = path.relative(PROJECT_ROOT, file);
      const source = file.replace(
        `${path.sep}${locale}${path.sep}`,
        `${path.sep}en${path.sep}`,
      );
      if (!fs.existsSync(source)) {
        issues.push({
          severity: "error",
          rule: "orphan-translation",
          message: `no English source at ${path.relative(PROJECT_ROOT, source)} — the loader matches translations by path, so this file renders as nothing`,
          filepath: rel,
        });
        continue;
      }
      checked += 1;

      const enRaw = fs.readFileSync(source, "utf8");
      const trRaw = fs.readFileSync(file, "utf8");
      issues.push(...checkTranslation(enRaw, trRaw, locale, rel));
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  if (asJson) {
    console.log(JSON.stringify({ checked, issues }, null, 2));
    process.exit(errors.length > 0 ? 1 : 0);
  }

  for (const i of issues) {
    console.log(
      `${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.filepath} — ${i.message}`,
    );
  }
  console.log(
    `\n${checked} translations · ${errors.length} errors · ${warnings.length} warnings`,
  );
  if (errors.length > 0) process.exit(1);
}

/**
 * Only run the walk when invoked as a script. The rule tests import
 * checkTranslation from here.
 */
if (process.argv[1] && /validate-translations\.ts$/.test(process.argv[1])) {
  main();
}
