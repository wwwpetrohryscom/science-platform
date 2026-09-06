#!/usr/bin/env tsx
/**
 * Mathematical tests for the scientific tools.
 *
 * A calculator without numerical tests is not ready. Every tool is
 * checked against values that can be derived by hand or looked up in the
 * source that defines them, and every tool is checked at its edges:
 * zero, negative, empty, non-numeric, and magnitudes that overflow a
 * double.
 *
 * The last group matters most. `Number("")` is 0 and `Number("1e999")`
 * is Infinity, and both produce a plausible-looking wrong answer rather
 * than an obvious failure — which is how a sea-level series in this same
 * wave briefly reported a year of exactly 0 mm.
 *
 * Usage: npm run tools:test
 */
import {
  parseNumber,
  convertEnergy,
  ENERGY_UNITS,
  wavelengthToFrequency,
  frequencyToWavelength,
  spectralRegion,
  photonEnergyFromWavelength,
  photonEnergyFromFrequency,
  radioactiveDecay,
  decayConstants,
  exponentialGrowth,
  logisticGrowth,
  diversityIndices,
  carbonMasses,
  carbonToCarbonDioxide,
  carbonDioxideToCarbon,
  significantFigures,
  toScientificNotation,
} from "../lib/tools/index";
import { constant, value, atomicWeight, CONSTANTS } from "../lib/scientific-data/constants";

let failures = 0;
function check(name: string, ok: boolean, detail = "") {
  if (ok) console.log(`✓ ${name}`);
  else {
    failures += 1;
    console.log(`✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

/** Relative closeness, for results that are not exact in binary. */
function close(a: number, b: number, rel = 1e-12): boolean {
  if (a === b) return true;
  return Math.abs(a - b) / Math.max(Math.abs(a), Math.abs(b)) < rel;
}

/* ================================================================== */
/* Constants provenance                                                */
/* ================================================================== */
{
  check(
    "constants · every entry names its unit and exactness",
    CONSTANTS.every((c) => c.unit && typeof c.exact === "boolean" && c.valueDisplay),
  );
  check(
    "constants · speed of light is the exact SI value",
    value("speed-of-light") === 299792458 && constant("speed-of-light").exact,
    String(value("speed-of-light")),
  );
  check(
    "constants · Planck constant is the exact SI value",
    value("planck-constant") === 6.62607015e-34 && constant("planck-constant").exact,
  );
  check(
    "constants · elementary charge is the exact SI value",
    value("elementary-charge") === 1.602176634e-19 && constant("elementary-charge").exact,
  );
  check(
    "constants · Avogadro constant is the exact SI value",
    value("avogadro-constant") === 6.02214076e23,
  );
  check(
    "constants · the atomic mass constant is measured, not exact",
    constant("atomic-mass-constant").exact === false &&
      constant("atomic-mass-constant").standardUncertainty !== null,
  );
  let threw = false;
  try {
    value("speed-of-lite");
  } catch {
    threw = true;
  }
  check("constants · an unknown id throws rather than defaulting", threw);
}

/* ================================================================== */
/* Input guard                                                         */
/* ================================================================== */
{
  check("parseNumber · empty string is rejected", !parseNumber("").ok);
  check("parseNumber · whitespace is rejected", !parseNumber("   ").ok);
  check("parseNumber · non-numeric is rejected", !parseNumber("twelve").ok);
  check("parseNumber · Infinity is rejected", !parseNumber(Infinity).ok);
  check("parseNumber · NaN is rejected", !parseNumber(NaN).ok);
  check("parseNumber · 1e999 overflows and is rejected", !parseNumber("1e999").ok);
  const z = parseNumber("0");
  check("parseNumber · zero is a valid input", z.ok && z.value === 0);
  const neg = parseNumber("-3.5e-8");
  check("parseNumber · scientific notation parses", neg.ok && neg.value === -3.5e-8);
}

/* ================================================================== */
/* 1. Energy conversion                                                */
/* ================================================================== */
{
  const r1 = convertEnergy(1, "kWh", "MJ");
  check("energy · 1 kWh = 3.6 MJ exactly", r1.ok && r1.value === 3.6, r1.ok ? String(r1.value) : r1.error);

  const r2 = convertEnergy(1, "Wh", "J");
  check("energy · 1 Wh = 3600 J exactly", r2.ok && r2.value === 3600);

  const r3 = convertEnergy(1, "kcal", "kJ");
  check("energy · 1 kcal = 4.184 kJ exactly", r3.ok && close(r3.value, 4.184), r3.ok ? String(r3.value) : "");

  const r4 = convertEnergy(1, "eV", "J");
  check(
    "energy · 1 eV equals the elementary charge in joules",
    r4.ok && r4.value === value("elementary-charge"),
  );

  const r5 = convertEnergy(1, "BTU", "J");
  check("energy · 1 BTU (IT) = 1055.05585262 J", r5.ok && r5.value === 1055.05585262);

  const r6 = convertEnergy(0, "MJ", "kWh");
  check("energy · zero converts to zero", r6.ok && r6.value === 0);

  const r7 = convertEnergy(-5, "MJ", "kWh");
  check("energy · a negative amount is allowed (an energy change can be negative)", r7.ok);

  const round = convertEnergy(1234.5678, "GJ", "kcal");
  const back = round.ok ? convertEnergy(round.value, "kcal", "GJ") : null;
  check(
    "energy · round trip returns the original to 12 significant figures",
    Boolean(back && back.ok && close(back.value, 1234.5678)),
    back && back.ok ? String(back.value) : "",
  );

  // @ts-expect-error deliberately passing an unknown unit
  check("energy · an unknown unit is refused", !convertEnergy(1, "furlong", "J").ok);
  check("energy · a non-finite amount is refused", !convertEnergy(Infinity, "J", "kJ").ok);
  check(
    "energy · every unit declares a positive factor and a note",
    Object.values(ENERGY_UNITS).every((u) => u.inJoules > 0 && u.note.length > 10),
  );
}

/* ================================================================== */
/* 2. Wavelength and frequency                                         */
/* ================================================================== */
{
  // 1 m in vacuum → c hertz, by definition of the metre.
  const a = wavelengthToFrequency(1);
  check("wave · 1 m maps to exactly c hertz", a.ok && a.frequencyHz === 299792458);

  // Green light, 500 nm → 5.9958…e14 Hz
  const b = wavelengthToFrequency(500e-9);
  check(
    "wave · 500 nm is 5.9958e14 Hz and visible",
    b.ok && close(b.frequencyHz, 299792458 / 500e-9) && b.region === "visible",
    b.ok ? `${b.frequencyHz.toExponential(4)} ${b.region}` : b.error,
  );

  const c = frequencyToWavelength(2.45e9);
  check(
    "wave · 2.45 GHz is about 122 mm and microwave",
    c.ok && close(c.wavelengthMetres, 299792458 / 2.45e9) && c.region === "microwave",
    c.ok ? `${(c.wavelengthMetres * 1000).toFixed(1)} mm ${c.region}` : c.error,
  );

  const rt = wavelengthToFrequency(632.8e-9);
  const back = rt.ok ? frequencyToWavelength(rt.frequencyHz) : null;
  check(
    "wave · round trip recovers the wavelength",
    Boolean(back && back.ok && close(back.wavelengthMetres, 632.8e-9)),
  );

  // In a medium the phase speed is c/n, so the wavelength shortens.
  const water = wavelengthToFrequency(500e-9, 1.333);
  check(
    "wave · a refractive index of 1.333 lowers the frequency for a fixed wavelength",
    water.ok && b.ok && close(water.frequencyHz, b.frequencyHz / 1.333),
    water.ok ? water.frequencyHz.toExponential(4) : water.error,
  );
  check("wave · a refractive index below 1 is refused", !wavelengthToFrequency(500e-9, 0.5).ok);

  check("wave · zero wavelength is refused", !wavelengthToFrequency(0).ok);
  check("wave · negative wavelength is refused", !wavelengthToFrequency(-1).ok);
  check("wave · zero frequency is refused", !frequencyToWavelength(0).ok);

  check("wave · region boundaries", spectralRegion(1e-12) === "gamma ray");
  check("wave · 550 nm is visible", spectralRegion(550e-9) === "visible");
  check("wave · 10 µm is infrared", spectralRegion(10e-6) === "infrared");
  check("wave · 1 m is radio", spectralRegion(1) === "radio");
}

/* ================================================================== */
/* 3. Photon energy                                                    */
/* ================================================================== */
{
  // A 1240 nm photon is very close to 1 eV — the standard mnemonic.
  const p = photonEnergyFromWavelength(1239.8419843320025e-9);
  check(
    "photon · the 1239.84 nm photon is 1.000 eV",
    p.ok && Math.abs(p.eV - 1) < 1e-9,
    p.ok ? p.eV.toPrecision(12) : p.error,
  );

  const green = photonEnergyFromWavelength(500e-9);
  check(
    "photon · a 500 nm photon is about 2.48 eV",
    green.ok && Math.abs(green.eV - 2.4797) < 1e-3,
    green.ok ? green.eV.toFixed(4) : green.error,
  );

  // E = hf checked directly against the constant.
  const f = photonEnergyFromFrequency(1e15);
  check(
    "photon · E = hf at 1 PHz",
    f.ok && f.joules === value("planck-constant") * 1e15,
  );

  const consistent = photonEnergyFromWavelength(400e-9);
  const viaF = consistent.ok ? photonEnergyFromFrequency(consistent.frequencyHz) : null;
  check(
    "photon · hc/λ and hf agree",
    Boolean(viaF && viaF.ok && consistent.ok && close(viaF.joules, consistent.joules)),
  );

  check("photon · zero wavelength is refused", !photonEnergyFromWavelength(0).ok);
  check("photon · negative frequency is refused", !photonEnergyFromFrequency(-1).ok);
  const tiny = photonEnergyFromWavelength(1e-300);
  check("photon · an absurdly short wavelength is refused rather than returning Infinity",
    !tiny.ok || Number.isFinite(tiny.joules));
}

/* ================================================================== */
/* 4. Radioactive decay                                                */
/* ================================================================== */
{
  const one = radioactiveDecay(100, 10, 10);
  check("decay · one half-life leaves exactly half", one.ok && one.remaining === 50);

  const three = radioactiveDecay(80, 5, 15);
  check("decay · three half-lives leave one eighth", three.ok && three.remaining === 10);

  const zeroTime = radioactiveDecay(1000, 5730, 0);
  check(
    "decay · zero elapsed time leaves everything",
    zeroTime.ok && zeroTime.remaining === 1000 && zeroTime.fraction === 1,
  );

  // Carbon-14, half-life 5730 a: one half-life leaves 50 per cent.
  const c14 = radioactiveDecay(1, 5730, 5730);
  check("decay · carbon-14 after one half-life", c14.ok && close(c14.fraction, 0.5));

  const long = radioactiveDecay(1, 1, 2000);
  check(
    "decay · 2000 half-lives underflow to zero rather than NaN",
    long.ok && long.remaining === 0 && Number.isFinite(long.remaining),
  );

  check("decay · a zero half-life is refused", !radioactiveDecay(1, 0, 1).ok);
  check("decay · a negative half-life is refused", !radioactiveDecay(1, -5, 1).ok);
  check("decay · negative elapsed time is refused", !radioactiveDecay(1, 5, -1).ok);
  check("decay · a negative initial amount is refused", !radioactiveDecay(-1, 5, 1).ok);

  const dc = decayConstants(5730);
  check(
    "decay · mean lifetime is the half-life over ln 2",
    dc.ok && close(dc.meanLifetime, 5730 / Math.LN2),
    dc.ok ? dc.meanLifetime.toFixed(3) : dc.error,
  );
  check(
    "decay · λ and τ are reciprocal",
    dc.ok && close(dc.decayConstant * dc.meanLifetime, 1),
  );
}

/* ================================================================== */
/* 5. Population models                                                */
/* ================================================================== */
{
  const e = exponentialGrowth(100, 0.05, 0);
  check("population · zero time returns the initial value", e.ok && e.population === 100);

  const d = exponentialGrowth(100, Math.LN2, 1);
  check("population · a rate of ln 2 doubles in one time unit", d.ok && close(d.population, 200));
  check("population · doubling time is ln 2 over r", d.ok && close(d.doublingTime!, 1));

  const flat = exponentialGrowth(100, 0, 50);
  check(
    "population · a zero rate leaves the population unchanged and no doubling time",
    flat.ok && flat.population === 100 && flat.doublingTime === null,
  );

  const decline = exponentialGrowth(100, -0.1, 10);
  check(
    "population · a negative rate declines and reports no doubling time",
    decline.ok && decline.population < 100 && decline.doublingTime === null,
  );

  const overflow = exponentialGrowth(1e300, 100, 100);
  check("population · an overflowing result is refused, not returned as Infinity", !overflow.ok);

  const l0 = logisticGrowth(10, 0.5, 1000, 0);
  check("population · logistic at t=0 returns the initial value", l0.ok && close(l0.population, 10));

  const lInf = logisticGrowth(10, 0.5, 1000, 1000);
  check(
    "population · logistic approaches carrying capacity",
    lInf.ok && close(lInf.population, 1000, 1e-9) && close(lInf.fractionOfCapacity, 1, 1e-9),
  );

  const atK = logisticGrowth(1000, 0.5, 1000, 10);
  check(
    "population · starting at capacity stays at capacity",
    atK.ok && close(atK.population, 1000),
  );

  const above = logisticGrowth(2000, 0.5, 1000, 5);
  check(
    "population · starting above capacity declines toward it",
    above.ok && above.population < 2000 && above.population > 1000,
    above.ok ? above.population.toFixed(2) : above.error,
  );

  check("population · zero capacity is refused", !logisticGrowth(10, 0.5, 0, 1).ok);
  check("population · zero initial population is refused", !logisticGrowth(0, 0.5, 100, 1).ok);
}

/* ================================================================== */
/* 6. Diversity indices                                                */
/* ================================================================== */
{
  // Perfectly even, four species: Shannon = ln 4, Simpson D = 0.25.
  const even = diversityIndices([25, 25, 25, 25]);
  check(
    "diversity · four even species give Shannon = ln 4",
    even.ok && close(even.shannon, Math.log(4)),
    even.ok ? even.shannon.toFixed(6) : even.error,
  );
  check("diversity · and Simpson D = 0.25", even.ok && close(even.simpsonD, 0.25));
  check("diversity · inverse Simpson equals the richness when even", even.ok && close(even.inverseSimpson, 4));
  check("diversity · evenness is 1 when perfectly even", even.ok && close(even.evenness!, 1));

  // One species: Shannon 0, Simpson D 1, evenness undefined.
  const one = diversityIndices([100]);
  check(
    "diversity · a single species gives zero Shannon and D = 1",
    one.ok && one.shannon === 0 && one.simpsonD === 1,
  );
  check("diversity · evenness is undefined for one species, not 0/0", one.ok && one.evenness === null);

  // Zeros are species not observed; they must not become 0·ln0 = NaN.
  const withZeros = diversityIndices([25, 25, 25, 25, 0, 0]);
  check(
    "diversity · absent species do not change the indices or produce NaN",
    withZeros.ok && even.ok && close(withZeros.shannon, even.shannon) && withZeros.richness === 4,
    withZeros.ok ? String(withZeros.shannon) : withZeros.error,
  );

  // Shannon in bits.
  const bits = diversityIndices([1, 1]);
  check("diversity · two even species are exactly 1 bit", bits.ok && close(bits.shannonBase2, 1));

  // Uneven community: Shannon falls, Simpson D rises.
  const uneven = diversityIndices([97, 1, 1, 1]);
  check(
    "diversity · a dominated community has lower Shannon and higher D",
    uneven.ok && even.ok && uneven.shannon < even.shannon && uneven.simpsonD > even.simpsonD,
    uneven.ok ? `H=${uneven.shannon.toFixed(4)} D=${uneven.simpsonD.toFixed(4)}` : "",
  );
  check(
    "diversity · Simpson diversity is 1 − D",
    uneven.ok && close(uneven.simpsonDiversity, 1 - uneven.simpsonD),
  );

  // Scale invariance: proportions, not counts, drive the indices.
  const scaled = diversityIndices([970, 10, 10, 10]);
  check(
    "diversity · multiplying every count by 10 changes nothing",
    scaled.ok && uneven.ok && close(scaled.shannon, uneven.shannon),
  );

  check("diversity · an empty list is refused", !diversityIndices([]).ok);
  check("diversity · all-zero counts are refused", !diversityIndices([0, 0]).ok);
  check("diversity · a negative count is refused", !diversityIndices([5, -1]).ok);
  check("diversity · a non-finite count is refused", !diversityIndices([5, Infinity]).ok);
}

/* ================================================================== */
/* 7. Carbon ↔ carbon dioxide                                          */
/* ================================================================== */
{
  const m = carbonMasses();
  check(
    "carbon · molar masses come from the CIAAW atomic weights",
    m.mC === atomicWeight("C").standardAtomicWeight &&
      m.mO === atomicWeight("O").standardAtomicWeight,
  );
  check(
    "carbon · M(CO₂) = M(C) + 2 M(O) = 44.009",
    close(m.mCO2, 44.009),
    String(m.mCO2),
  );
  check(
    "carbon · the CO₂-per-C ratio is 44.009/12.011 ≈ 3.664",
    close(m.ratioCO2perC, 44.009 / 12.011) && Math.abs(m.ratioCO2perC - 3.664) < 0.001,
    m.ratioCO2perC.toFixed(6),
  );

  const up = carbonToCarbonDioxide(1);
  check("carbon · 1 t C is 3.664 t CO₂", up.ok && close(up.carbonDioxide, m.ratioCO2perC));

  const down = carbonDioxideToCarbon(m.ratioCO2perC);
  check("carbon · and the reverse recovers 1 t C", down.ok && close(down.carbon, 1));

  const gtc = carbonToCarbonDioxide(10);
  check(
    "carbon · 10 Gt C is 36.64 Gt CO₂, not 10",
    gtc.ok && Math.abs(gtc.carbonDioxide - 36.64) < 0.01,
    gtc.ok ? gtc.carbonDioxide.toFixed(4) : "",
  );

  check("carbon · zero maps to zero", carbonToCarbonDioxide(0).ok && carbonToCarbonDioxide(0).ok);
  check("carbon · a negative mass is refused", !carbonToCarbonDioxide(-1).ok);
  check("carbon · a non-numeric mass is refused", !carbonToCarbonDioxide(NaN).ok);
}

/* ================================================================== */
/* 8. Scientific notation and significant figures                      */
/* ================================================================== */
{
  const cases: Array<[string, number, boolean]> = [
    ["1234", 4, false],
    ["1.234", 4, false],
    ["0.001234", 4, false],
    ["1200", 2, true],
    ["1200.", 4, false],
    ["1.200e3", 4, false],
    ["100.0", 4, false],
    ["0.0", 1, false],
    ["-45.60", 4, false],
    ["1002", 4, false],
  ];
  for (const [input, expected, amb] of cases) {
    const r = significantFigures(input);
    check(
      `sig figs · "${input}" has ${expected}${amb ? " (ambiguous)" : ""}`,
      r.ok && r.figures === expected && r.ambiguous === amb,
      r.ok ? `${r.figures}, ambiguous=${r.ambiguous}` : r.error,
    );
  }
  check("sig figs · an empty string is refused", !significantFigures("").ok);
  check("sig figs · a non-number is refused", !significantFigures("12a").ok);

  const sn = toScientificNotation(299792458, 4);
  check(
    "notation · 299792458 to 4 figures is 2.998 × 10⁸",
    sn.ok && sn.mantissa === 2.998 && sn.exponent === 8,
    sn.ok ? sn.text : sn.error,
  );
  const small = toScientificNotation(0.000123456, 3);
  check(
    "notation · 0.000123456 to 3 figures is 1.23 × 10⁻⁴",
    small.ok && small.mantissa === 1.23 && small.exponent === -4,
    small.ok ? small.text : small.error,
  );
  const zero = toScientificNotation(0);
  check("notation · zero is handled", zero.ok && zero.mantissa === 0 && zero.exponent === 0);
  const neg = toScientificNotation(-6.02e23, 3);
  check(
    "notation · a negative number keeps its sign",
    neg.ok && neg.mantissa === -6.02 && neg.exponent === 23,
    neg.ok ? neg.text : neg.error,
  );
  check("notation · zero significant figures is refused", !toScientificNotation(1, 0).ok);
  check("notation · a fractional figure count is refused", !toScientificNotation(1, 2.5).ok);
  check("notation · a non-finite input is refused", !toScientificNotation(Infinity).ok);
}

/* ================================================================== */
/* Cross-cutting: nothing non-finite escapes any entry point            */
/* ================================================================== */
{
  const probes: Array<[string, unknown]> = [
    ["convertEnergy", convertEnergy(1e308, "GWh", "eV")],
    ["wavelengthToFrequency", wavelengthToFrequency(1e-320)],
    ["photonEnergyFromFrequency", photonEnergyFromFrequency(1e308)],
    ["radioactiveDecay", radioactiveDecay(1e308, 1e-300, 1e300)],
    ["exponentialGrowth", exponentialGrowth(1e308, 1e3, 1e3)],
    ["logisticGrowth", logisticGrowth(1e-300, 1e3, 1e308, 1e3)],
    ["toScientificNotation", toScientificNotation(5e-324, 3)],
  ];
  for (const [name, r] of probes) {
    const res = r as Record<string, unknown>;
    const finite =
      res.ok === false ||
      Object.entries(res)
        .filter(([k, v]) => k !== "ok" && typeof v === "number")
        .every(([, v]) => Number.isFinite(v as number));
    check(`no-leak · ${name} returns finite numbers or an error`, finite, JSON.stringify(res));
  }
}

console.log(`\n${failures === 0 ? "all checks passed" : `${failures} failing`}`);
if (failures) process.exit(1);
