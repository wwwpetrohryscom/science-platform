/**
 * Scientific tools — pure calculation.
 *
 * Every function here is a pure function of its inputs. No DOM, no
 * fetch, no clock. That is what makes `npm run tools:test` able to check
 * the arithmetic against known values, and it is why the client
 * components in `components/tools/` contain form state and nothing else:
 * the science is here, tested, and the browser only renders it.
 *
 * Two rules the tests enforce:
 *
 *   1. No NaN or Infinity ever reaches a caller. Every entry point
 *      returns a discriminated result — `{ ok: true, ... }` or
 *      `{ ok: false, error }` — so an invalid input produces a message
 *      rather than a page reading "NaN kWh".
 *   2. Every physical constant comes from `lib/scientific-data/constants`
 *      and therefore from a named authority. There are no unexplained
 *      magic numbers in this file.
 */
import { value, atomicWeight } from "@/lib/scientific-data/constants";

export type Ok<T> = { ok: true } & T;
export type Err = { ok: false; error: string };
export type Result<T> = Ok<T> | Err;

const err = (error: string): Err => ({ ok: false, error });

/**
 * Guard every numeric input at the boundary.
 *
 * `Number("")` is 0 and `Number("1e999")` is Infinity; both are the sort
 * of value that produces a plausible-looking wrong answer rather than an
 * obvious failure.
 */
export function parseNumber(raw: string | number): Result<{ value: number }> {
  if (typeof raw === "number") {
    if (!Number.isFinite(raw)) return err("Value must be a finite number.");
    return { ok: true, value: raw };
  }
  const s = raw.trim();
  if (s === "") return err("Enter a value.");
  const n = Number(s);
  if (Number.isNaN(n)) return err(`"${s}" is not a number.`);
  if (!Number.isFinite(n)) return err("Value is too large to represent.");
  return { ok: true, value: n };
}

/* ------------------------------------------------------------------ */
/* 1. Energy units                                                     */
/* ------------------------------------------------------------------ */

/**
 * Energy units, each expressed in joules.
 *
 * The calorie needs saying out loud: this is the **thermochemical**
 * calorie, defined as exactly 4.184 J, which is the one the SI brochure
 * and the nutrition label both use. The 15 °C calorie and the
 * International Steam Table calorie are different numbers, and a
 * converter that does not say which it means is not a scientific tool.
 */
export const ENERGY_UNITS = {
  J: { label: "joule", symbol: "J", inJoules: 1, note: "SI derived unit of energy." },
  kJ: { label: "kilojoule", symbol: "kJ", inJoules: 1e3, note: "10³ joules." },
  MJ: { label: "megajoule", symbol: "MJ", inJoules: 1e6, note: "10⁶ joules." },
  GJ: { label: "gigajoule", symbol: "GJ", inJoules: 1e9, note: "10⁹ joules." },
  Wh: {
    label: "watt-hour",
    symbol: "Wh",
    inJoules: 3600,
    note: "One watt for one hour. Exactly 3600 J, since the hour is exactly 3600 s.",
  },
  kWh: { label: "kilowatt-hour", symbol: "kWh", inJoules: 3.6e6, note: "Exactly 3.6 MJ." },
  MWh: { label: "megawatt-hour", symbol: "MWh", inJoules: 3.6e9, note: "Exactly 3.6 GJ." },
  GWh: { label: "gigawatt-hour", symbol: "GWh", inJoules: 3.6e12, note: "Exactly 3.6 TJ." },
  cal: {
    label: "calorie (thermochemical)",
    symbol: "cal",
    inJoules: 4.184,
    note: "The thermochemical calorie, defined as exactly 4.184 J. Not the 15 °C calorie (≈4.1855 J) or the International Steam Table calorie (4.1868 J).",
  },
  kcal: {
    label: "kilocalorie (thermochemical)",
    symbol: "kcal",
    inJoules: 4184,
    note: "1000 thermochemical calories. This is the 'Calorie' on a nutrition label.",
  },
  eV: {
    label: "electronvolt",
    symbol: "eV",
    inJoules: 0, // filled below from CODATA
    note: "The energy gained by one elementary charge across one volt. Exact since the 2019 SI redefinition fixed the elementary charge.",
  },
  BTU: {
    label: "British thermal unit (IT)",
    symbol: "BTU",
    inJoules: 1055.05585262,
    note: "The International Table BTU, exactly 1055.055 852 62 J. Other BTU definitions differ by up to 0.2 per cent.",
  },
} as const;

// The electronvolt is not an arbitrary conversion factor: it is the
// elementary charge in coulombs, numerically, and that constant is
// exact by the SI definition of the ampere.
(ENERGY_UNITS.eV as { inJoules: number }).inJoules = value("elementary-charge");

export type EnergyUnit = keyof typeof ENERGY_UNITS;

export function convertEnergy(
  amount: number,
  from: EnergyUnit,
  to: EnergyUnit,
): Result<{ value: number; joules: number }> {
  const a = parseNumber(amount);
  if (!a.ok) return a;
  if (!(from in ENERGY_UNITS)) return err(`Unknown energy unit "${from}".`);
  if (!(to in ENERGY_UNITS)) return err(`Unknown energy unit "${to}".`);
  const joules = a.value * ENERGY_UNITS[from].inJoules;
  const out = joules / ENERGY_UNITS[to].inJoules;
  if (!Number.isFinite(out)) return err("Result is outside the representable range.");
  return { ok: true, value: out, joules };
}

/* ------------------------------------------------------------------ */
/* 2. Wavelength and frequency                                         */
/* ------------------------------------------------------------------ */

/**
 * Regions of the electromagnetic spectrum, by vacuum wavelength in metres.
 *
 * The boundaries are conventions, not physics. Different fields put the
 * UV/X-ray boundary in different places, and nothing changes at the line.
 */
const SPECTRAL_REGIONS: Array<{ max: number; name: string }> = [
  { max: 1e-11, name: "gamma ray" },
  { max: 1e-8, name: "X-ray" },
  { max: 4e-7, name: "ultraviolet" },
  { max: 7e-7, name: "visible" },
  { max: 1e-3, name: "infrared" },
  // Microwave runs to 1 m, not to 0.1 m. The band is conventionally
  // 300 MHz to 300 GHz, and 300 MHz is a 1 m wavelength; a boundary at
  // 0.1 m put 2.45 GHz — the microwave-oven frequency, 122 mm — in the
  // radio band.
  { max: 1, name: "microwave" },
  { max: Infinity, name: "radio" },
];

export function spectralRegion(wavelengthMetres: number): string {
  for (const r of SPECTRAL_REGIONS) if (wavelengthMetres < r.max) return r.name;
  return "radio";
}

/**
 * c = λf, in vacuum.
 *
 * In a medium of refractive index n the phase speed is c/n, so the same
 * frequency corresponds to a shorter wavelength. Pass `refractiveIndex`
 * to say so explicitly; the default of 1 is vacuum and the tool says as
 * much on the page rather than leaving the reader to assume it.
 */
export function wavelengthToFrequency(
  wavelengthMetres: number,
  refractiveIndex = 1,
): Result<{ frequencyHz: number; region: string; speed: number }> {
  const w = parseNumber(wavelengthMetres);
  if (!w.ok) return w;
  if (w.value <= 0) return err("Wavelength must be greater than zero.");
  const n = parseNumber(refractiveIndex);
  if (!n.ok) return n;
  if (n.value < 1) return err("Refractive index must be at least 1.");
  const speed = value("speed-of-light") / n.value;
  const f = speed / w.value;
  if (!Number.isFinite(f)) return err("Result is outside the representable range.");
  return { ok: true, frequencyHz: f, region: spectralRegion(w.value * n.value), speed };
}

export function frequencyToWavelength(
  frequencyHz: number,
  refractiveIndex = 1,
): Result<{ wavelengthMetres: number; region: string; speed: number }> {
  const f = parseNumber(frequencyHz);
  if (!f.ok) return f;
  if (f.value <= 0) return err("Frequency must be greater than zero.");
  const n = parseNumber(refractiveIndex);
  if (!n.ok) return n;
  if (n.value < 1) return err("Refractive index must be at least 1.");
  const speed = value("speed-of-light") / n.value;
  const w = speed / f.value;
  if (!Number.isFinite(w)) return err("Result is outside the representable range.");
  return { ok: true, wavelengthMetres: w, region: spectralRegion(w * n.value), speed };
}

/* ------------------------------------------------------------------ */
/* 3. Photon energy                                                    */
/* ------------------------------------------------------------------ */

/** E = hf = hc/λ. Returns joules and electronvolts. */
export function photonEnergyFromWavelength(
  wavelengthMetres: number,
): Result<{ joules: number; eV: number; frequencyHz: number; region: string }> {
  const f = wavelengthToFrequency(wavelengthMetres);
  if (!f.ok) return f;
  const joules = value("planck-constant") * f.frequencyHz;
  if (!Number.isFinite(joules)) return err("Result is outside the representable range.");
  return {
    ok: true,
    joules,
    eV: joules / value("elementary-charge"),
    frequencyHz: f.frequencyHz,
    region: f.region,
  };
}

export function photonEnergyFromFrequency(
  frequencyHz: number,
): Result<{ joules: number; eV: number; wavelengthMetres: number; region: string }> {
  const w = frequencyToWavelength(frequencyHz);
  if (!w.ok) return w;
  const f = parseNumber(frequencyHz);
  if (!f.ok) return f;
  const joules = value("planck-constant") * f.value;
  if (!Number.isFinite(joules)) return err("Result is outside the representable range.");
  return {
    ok: true,
    joules,
    eV: joules / value("elementary-charge"),
    wavelengthMetres: w.wavelengthMetres,
    region: w.region,
  };
}

/* ------------------------------------------------------------------ */
/* 4. Radioactive decay                                                */
/* ------------------------------------------------------------------ */

/**
 * N(t) = N₀ (1/2)^(t/t½).
 *
 * `time` and `halfLife` must be in the same unit; the function does not
 * know or care which, and the page says so. Returns the remaining
 * fraction as well as the amount, because the fraction is the part that
 * is independent of what was there to begin with.
 */
export function radioactiveDecay(
  initialAmount: number,
  halfLife: number,
  time: number,
): Result<{ remaining: number; fraction: number; halfLivesElapsed: number; decayed: number }> {
  const n0 = parseNumber(initialAmount);
  if (!n0.ok) return n0;
  if (n0.value < 0) return err("Initial amount cannot be negative.");
  const h = parseNumber(halfLife);
  if (!h.ok) return h;
  if (h.value <= 0) return err("Half-life must be greater than zero.");
  const t = parseNumber(time);
  if (!t.ok) return t;
  if (t.value < 0) return err("Elapsed time cannot be negative.");

  const halfLives = t.value / h.value;
  const fraction = Math.pow(0.5, halfLives);
  const remaining = n0.value * fraction;
  // halfLives overflows before the fraction does: a very long time
  // divided by a very short half-life is Infinity, and the fraction
  // underflows to a perfectly finite 0 beside it. Checking only the
  // outputs the caller reads first would have let Infinity through in
  // the field the page labels "half-lives elapsed".
  if (
    !Number.isFinite(remaining) ||
    !Number.isFinite(fraction) ||
    !Number.isFinite(halfLives)
  ) {
    return err("Result is outside the representable range.");
  }
  return {
    ok: true,
    remaining,
    fraction,
    halfLivesElapsed: halfLives,
    decayed: n0.value - remaining,
  };
}

/** Mean lifetime τ = t½ / ln 2, and the decay constant λ = ln 2 / t½. */
export function decayConstants(
  halfLife: number,
): Result<{ decayConstant: number; meanLifetime: number }> {
  const h = parseNumber(halfLife);
  if (!h.ok) return h;
  if (h.value <= 0) return err("Half-life must be greater than zero.");
  const lambda = Math.LN2 / h.value;
  return { ok: true, decayConstant: lambda, meanLifetime: 1 / lambda };
}

/* ------------------------------------------------------------------ */
/* 5. Population models                                                */
/* ------------------------------------------------------------------ */

/**
 * Exponential growth, N(t) = N₀ e^(rt).
 *
 * A model, not a forecast. Nothing grows exponentially for long.
 */
export function exponentialGrowth(
  initial: number,
  rate: number,
  time: number,
): Result<{ population: number; doublingTime: number | null }> {
  const n0 = parseNumber(initial);
  if (!n0.ok) return n0;
  if (n0.value < 0) return err("Initial population cannot be negative.");
  const r = parseNumber(rate);
  if (!r.ok) return r;
  const t = parseNumber(time);
  if (!t.ok) return t;

  const population = n0.value * Math.exp(r.value * t.value);
  if (!Number.isFinite(population)) {
    return err("Population is outside the representable range — try a smaller rate or time.");
  }
  return {
    ok: true,
    population,
    doublingTime: r.value > 0 ? Math.LN2 / r.value : null,
  };
}

/**
 * Logistic growth, N(t) = K / (1 + ((K − N₀)/N₀) e^(−rt)).
 *
 * The carrying capacity K is an assumption about the environment, and
 * in a real system it is neither constant nor knowable in advance.
 */
export function logisticGrowth(
  initial: number,
  rate: number,
  capacity: number,
  time: number,
): Result<{ population: number; fractionOfCapacity: number }> {
  const n0 = parseNumber(initial);
  if (!n0.ok) return n0;
  if (n0.value <= 0) return err("Initial population must be greater than zero.");
  const r = parseNumber(rate);
  if (!r.ok) return r;
  const k = parseNumber(capacity);
  if (!k.ok) return k;
  if (k.value <= 0) return err("Carrying capacity must be greater than zero.");
  const t = parseNumber(time);
  if (!t.ok) return t;

  const a = (k.value - n0.value) / n0.value;
  const denom = 1 + a * Math.exp(-r.value * t.value);
  if (denom === 0 || !Number.isFinite(denom)) {
    return err("Result is outside the representable range.");
  }
  const population = k.value / denom;
  if (!Number.isFinite(population)) return err("Result is outside the representable range.");
  return { ok: true, population, fractionOfCapacity: population / k.value };
}

/* ------------------------------------------------------------------ */
/* 6. Diversity indices                                                */
/* ------------------------------------------------------------------ */

/**
 * Shannon and Simpson diversity from a list of species counts.
 *
 * Both are computed here because quoting one without the other invites
 * the reader to treat "diversity" as a single number. Shannon weights
 * rare species more heavily than Simpson does; two communities can be
 * ordered differently by the two indices, and that is a property of the
 * indices, not a contradiction in the data.
 *
 * Shannon is returned in nats (natural log), which is the convention in
 * most ecological software. `shannonBase2` is given as well because the
 * information-theory literature uses bits.
 */
export function diversityIndices(
  counts: number[],
): Result<{
  totalIndividuals: number;
  richness: number;
  shannon: number;
  shannonBase2: number;
  evenness: number | null;
  simpsonD: number;
  simpsonDiversity: number;
  inverseSimpson: number;
  proportions: number[];
}> {
  if (!Array.isArray(counts) || counts.length === 0) {
    return err("Enter at least one species count.");
  }
  const clean: number[] = [];
  for (const c of counts) {
    const p = parseNumber(c);
    if (!p.ok) return p;
    if (p.value < 0) return err("Counts cannot be negative.");
    clean.push(p.value);
  }
  const total = clean.reduce((a, b) => a + b, 0);
  if (total <= 0) return err("Total abundance must be greater than zero.");

  const present = clean.filter((c) => c > 0);
  const proportions = present.map((c) => c / total);

  // 0 ln 0 is defined as 0 in this limit; species absent from the sample
  // contribute nothing, and filtering them out is what implements that.
  const shannon = -proportions.reduce((s, p) => s + p * Math.log(p), 0);
  const simpsonD = proportions.reduce((s, p) => s + p * p, 0);
  const richness = present.length;

  return {
    ok: true,
    totalIndividuals: total,
    richness,
    shannon,
    shannonBase2: shannon / Math.LN2,
    // Pielou's evenness is undefined for a single species: ln 1 is 0.
    evenness: richness > 1 ? shannon / Math.log(richness) : null,
    simpsonD,
    simpsonDiversity: 1 - simpsonD,
    inverseSimpson: 1 / simpsonD,
    proportions,
  };
}

/* ------------------------------------------------------------------ */
/* 7. Carbon and carbon dioxide mass                                   */
/* ------------------------------------------------------------------ */

/**
 * Carbon mass ↔ carbon dioxide mass.
 *
 * This is the single most common unit error in climate reporting: a
 * figure in tonnes of carbon quoted as if it were tonnes of CO₂, or the
 * reverse. The two differ by the ratio of the molar masses, a factor of
 * about 3.664, so a number reported in the wrong one is wrong by nearly
 * a factor of four.
 *
 * Both molar masses come from the CIAAW standard atomic weights, and the
 * ratio is computed from them rather than typed in.
 */
export function carbonMasses() {
  const mC = atomicWeight("C").standardAtomicWeight;
  const mO = atomicWeight("O").standardAtomicWeight;
  const mCO2 = mC + 2 * mO;
  return { mC, mO, mCO2, ratioCO2perC: mCO2 / mC, ratioCperCO2: mC / mCO2 };
}

export function carbonToCarbonDioxide(
  massOfCarbon: number,
): Result<{ carbonDioxide: number; ratio: number }> {
  const m = parseNumber(massOfCarbon);
  if (!m.ok) return m;
  if (m.value < 0) return err("Mass cannot be negative.");
  const { ratioCO2perC } = carbonMasses();
  return { ok: true, carbonDioxide: m.value * ratioCO2perC, ratio: ratioCO2perC };
}

export function carbonDioxideToCarbon(
  massOfCO2: number,
): Result<{ carbon: number; ratio: number }> {
  const m = parseNumber(massOfCO2);
  if (!m.ok) return m;
  if (m.value < 0) return err("Mass cannot be negative.");
  const { ratioCperCO2 } = carbonMasses();
  return { ok: true, carbon: m.value * ratioCperCO2, ratio: ratioCperCO2 };
}

/* ------------------------------------------------------------------ */
/* 8. Scientific notation and significant figures                      */
/* ------------------------------------------------------------------ */

/**
 * Significant figures in a written number.
 *
 * The rules are the ordinary ones: leading zeros never count, zeros
 * between significant digits always do, and trailing zeros count only
 * when a decimal point is written. "1500" is ambiguous by this rule and
 * is read as two significant figures; "1500." and "1.500e3" are four.
 */
export function significantFigures(raw: string): Result<{ figures: number; ambiguous: boolean }> {
  const s = raw.trim();
  if (s === "") return err("Enter a number.");
  if (!/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(s)) {
    return err(`"${s}" is not a number in decimal or scientific notation.`);
  }
  const [mantissa] = s.split(/[eE]/);
  const body = mantissa.replace(/^[+-]/, "");
  const hasPoint = body.includes(".");
  const digits = body.replace(".", "");
  const trimmedLeading = digits.replace(/^0+/, "");
  if (trimmedLeading === "") {
    // 0, 0.0, 0.000 — the zeros after the point are significant.
    const afterPoint = hasPoint ? body.split(".")[1] ?? "" : "";
    return { ok: true, figures: Math.max(1, afterPoint.length), ambiguous: false };
  }
  if (hasPoint) {
    return { ok: true, figures: trimmedLeading.length, ambiguous: false };
  }
  const withoutTrailingZeros = trimmedLeading.replace(/0+$/, "");
  const ambiguous = withoutTrailingZeros.length !== trimmedLeading.length && !s.match(/[eE]/);
  return {
    ok: true,
    figures: withoutTrailingZeros.length || 1,
    ambiguous,
  };
}

/** Render a number in scientific notation with a chosen number of figures. */
export function toScientificNotation(
  n: number,
  figures = 4,
): Result<{ mantissa: number; exponent: number; text: string }> {
  const p = parseNumber(n);
  if (!p.ok) return p;
  const f = parseNumber(figures);
  if (!f.ok) return f;
  if (f.value < 1 || f.value > 21 || !Number.isInteger(f.value)) {
    return err("Significant figures must be a whole number between 1 and 21.");
  }
  if (p.value === 0) {
    return { ok: true, mantissa: 0, exponent: 0, text: `0 × 10⁰` };
  }
  const exponent = Math.floor(Math.log10(Math.abs(p.value)));
  // Math.pow(10, -324) underflows to 0, so dividing by it gives
  // Infinity. Subnormal doubles are exactly the inputs where the
  // straightforward mantissa calculation stops working.
  const scale = Math.pow(10, exponent);
  if (!Number.isFinite(scale) || scale === 0) {
    return err("Value is too close to the limits of double precision to express.");
  }
  const mantissa = Number((p.value / scale).toFixed(f.value - 1));
  if (!Number.isFinite(mantissa)) {
    return err("Value is too close to the limits of double precision to express.");
  }
  return {
    ok: true,
    mantissa,
    exponent,
    text: `${mantissa} × 10${superscript(exponent)}`,
  };
}

const SUPERSCRIPTS: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻",
};

export function superscript(n: number): string {
  return String(n)
    .split("")
    .map((ch) => SUPERSCRIPTS[ch] ?? ch)
    .join("");
}
