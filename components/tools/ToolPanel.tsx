"use client";

import { useMemo, useState } from "react";

import {
  ENERGY_UNITS,
  convertEnergy,
  wavelengthToFrequency,
  frequencyToWavelength,
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
  superscript,
  type EnergyUnit,
} from "@/lib/tools/index";
import type { ToolSlug } from "@/lib/tools/registry";

/**
 * The interactive half of a tool page.
 *
 * This component holds form state and nothing else. Every number it
 * shows comes from a pure, tested function in `lib/tools/index`, and
 * every one of those returns a discriminated result — so an invalid
 * input renders a sentence, never "NaN".
 *
 * Only this component is a Client Component. The explanation, the
 * formula, the assumptions, the provenance and the related reading are
 * all server-rendered around it, so a reader without JavaScript still
 * gets the science and loses only the calculator.
 */

export type ToolLabels = Record<string, string>;

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-ink-subtle">{hint}</p>}
    </div>
  );
}

const inputClass =
  "mt-1 w-full rounded-md border border-ink-line bg-white px-3 py-2 text-ink tabular-nums outline-none focus:border-primary-700";

function Output({
  rows,
  error,
  errorLabel,
}: {
  rows: Array<{ term: string; value: string }>;
  error?: string;
  errorLabel: string;
}) {
  return (
    <div aria-live="polite" className="mt-6 rounded-lg border border-ink-line bg-ink-surface/50 p-4">
      {error ? (
        <p className="text-sm text-ink">
          <span className="font-medium">{errorLabel}: </span>
          {error}
        </p>
      ) : (
        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[minmax(11rem,auto)_1fr]">
          {rows.map((r) => (
            <div key={r.term} className="contents">
              <dt className="text-sm text-ink-subtle">{r.term}</dt>
              <dd className="text-sm font-medium tabular-nums text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function sig(n: number, digits = 6): string {
  if (n === 0) return "0";
  const a = Math.abs(n);
  if (a >= 1e6 || a < 1e-4) {
    const exp = Math.floor(Math.log10(a));
    const mant = n / Math.pow(10, exp);
    return `${Number(mant.toPrecision(digits))} × 10${superscript(exp)}`;
  }
  return String(Number(n.toPrecision(digits)));
}

export function ToolPanel({ slug, labels }: { slug: ToolSlug; labels: ToolLabels }) {
  switch (slug) {
    case "energy-unit-converter":
      return <EnergyTool labels={labels} />;
    case "wavelength-frequency-converter":
      return <WavelengthTool labels={labels} />;
    case "photon-energy-calculator":
      return <PhotonTool labels={labels} />;
    case "radioactive-decay-calculator":
      return <DecayTool labels={labels} />;
    case "population-growth-models":
      return <PopulationTool labels={labels} />;
    case "diversity-index-calculator":
      return <DiversityTool labels={labels} />;
    case "carbon-dioxide-mass-converter":
      return <CarbonTool labels={labels} />;
    case "scientific-notation-tool":
      return <NotationTool labels={labels} />;
    default:
      return null;
  }
}

/* ---------------------------------------------------------------- */

function EnergyTool({ labels }: { labels: ToolLabels }) {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState<EnergyUnit>("kWh");
  const [to, setTo] = useState<EnergyUnit>("MJ");

  const result = useMemo(() => {
    const n = Number(amount);
    if (amount.trim() === "" || Number.isNaN(n)) {
      return { ok: false as const, error: labels.err_number };
    }
    return convertEnergy(n, from, to);
  }, [amount, from, to, labels.err_number]);

  const units = Object.entries(ENERGY_UNITS) as Array<
    [EnergyUnit, (typeof ENERGY_UNITS)[EnergyUnit]]
  >;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="amount" label={labels.amount}>
          <input
            id="amount"
            inputMode="decimal"
            className={inputClass}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Field>
        <Field id="from" label={labels.from}>
          <select
            id="from"
            className={inputClass}
            value={from}
            onChange={(e) => setFrom(e.target.value as EnergyUnit)}
          >
            {units.map(([k, u]) => (
              <option key={k} value={k}>
                {u.symbol} — {u.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="to" label={labels.to}>
          <select
            id="to"
            className={inputClass}
            value={to}
            onChange={(e) => setTo(e.target.value as EnergyUnit)}
          >
            {units.map(([k, u]) => (
              <option key={k} value={k}>
                {u.symbol} — {u.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? [
                { term: labels.result, value: `${sig(result.value)} ${ENERGY_UNITS[to].symbol}` },
                { term: labels.in_joules, value: `${sig(result.joules)} J` },
              ]
            : []
        }
      />
      <p className="mt-3 text-xs text-ink-subtle">{ENERGY_UNITS[from].note}</p>
      {ENERGY_UNITS[to].note !== ENERGY_UNITS[from].note && (
        <p className="mt-1 text-xs text-ink-subtle">{ENERGY_UNITS[to].note}</p>
      )}
    </div>
  );
}

function WavelengthTool({ labels }: { labels: ToolLabels }) {
  const [mode, setMode] = useState<"wavelength" | "frequency">("wavelength");
  const [wavelength, setWavelength] = useState("500");
  const [frequency, setFrequency] = useState("6e14");
  const [n, setN] = useState("1");

  const result = useMemo(() => {
    const ri = Number(n);
    if (mode === "wavelength") {
      const nm = Number(wavelength);
      if (wavelength.trim() === "" || Number.isNaN(nm)) {
        return { ok: false as const, error: labels.err_number };
      }
      return wavelengthToFrequency(nm * 1e-9, ri);
    }
    const hz = Number(frequency);
    if (frequency.trim() === "" || Number.isNaN(hz)) {
      return { ok: false as const, error: labels.err_number };
    }
    return frequencyToWavelength(hz, ri);
  }, [mode, wavelength, frequency, n, labels.err_number]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="wmode" label={labels.mode}>
          <select
            id="wmode"
            className={inputClass}
            value={mode}
            onChange={(e) => setMode(e.target.value as "wavelength" | "frequency")}
          >
            <option value="wavelength">{labels.from_wavelength}</option>
            <option value="frequency">{labels.from_frequency}</option>
          </select>
        </Field>
        {mode === "wavelength" ? (
          <Field id="wl" label={labels.wavelength_nm}>
            <input
              id="wl"
              inputMode="decimal"
              className={inputClass}
              value={wavelength}
              onChange={(e) => setWavelength(e.target.value)}
            />
          </Field>
        ) : (
          <Field id="fq" label={labels.frequency_hz}>
            <input
              id="fq"
              inputMode="decimal"
              className={inputClass}
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </Field>
        )}
        <Field id="ri" label={labels.refractive_index} hint={labels.refractive_hint}>
          <input
            id="ri"
            inputMode="decimal"
            className={inputClass}
            value={n}
            onChange={(e) => setN(e.target.value)}
          />
        </Field>
      </div>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? "frequencyHz" in result
              ? [
                  { term: labels.frequency, value: `${sig(result.frequencyHz)} Hz` },
                  { term: labels.region, value: labels[`region_${result.region.replace(/[ -]/g, "_")}`] ?? result.region },
                  { term: labels.phase_speed, value: `${sig(result.speed)} m s⁻¹` },
                ]
              : [
                  {
                    term: labels.wavelength,
                    value: `${sig(result.wavelengthMetres * 1e9)} nm  (${sig(result.wavelengthMetres)} m)`,
                  },
                  { term: labels.region, value: labels[`region_${result.region.replace(/[ -]/g, "_")}`] ?? result.region },
                  { term: labels.phase_speed, value: `${sig(result.speed)} m s⁻¹` },
                ]
            : []
        }
      />
    </div>
  );
}

function PhotonTool({ labels }: { labels: ToolLabels }) {
  const [mode, setMode] = useState<"wavelength" | "frequency">("wavelength");
  const [wavelength, setWavelength] = useState("500");
  const [frequency, setFrequency] = useState("6e14");

  const result = useMemo(() => {
    if (mode === "wavelength") {
      const nm = Number(wavelength);
      if (wavelength.trim() === "" || Number.isNaN(nm)) {
        return { ok: false as const, error: labels.err_number };
      }
      return photonEnergyFromWavelength(nm * 1e-9);
    }
    const hz = Number(frequency);
    if (frequency.trim() === "" || Number.isNaN(hz)) {
      return { ok: false as const, error: labels.err_number };
    }
    return photonEnergyFromFrequency(hz);
  }, [mode, wavelength, frequency, labels.err_number]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="pmode" label={labels.mode}>
          <select
            id="pmode"
            className={inputClass}
            value={mode}
            onChange={(e) => setMode(e.target.value as "wavelength" | "frequency")}
          >
            <option value="wavelength">{labels.from_wavelength}</option>
            <option value="frequency">{labels.from_frequency}</option>
          </select>
        </Field>
        {mode === "wavelength" ? (
          <Field id="pwl" label={labels.wavelength_nm}>
            <input
              id="pwl"
              inputMode="decimal"
              className={inputClass}
              value={wavelength}
              onChange={(e) => setWavelength(e.target.value)}
            />
          </Field>
        ) : (
          <Field id="pfq" label={labels.frequency_hz}>
            <input
              id="pfq"
              inputMode="decimal"
              className={inputClass}
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </Field>
        )}
      </div>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? [
                { term: labels.energy_j, value: `${sig(result.joules)} J` },
                { term: labels.energy_ev, value: `${sig(result.eV)} eV` },
                { term: labels.region, value: labels[`region_${result.region.replace(/[ -]/g, "_")}`] ?? result.region },
              ]
            : []
        }
      />
    </div>
  );
}

function DecayTool({ labels }: { labels: ToolLabels }) {
  const [initial, setInitial] = useState("100");
  const [halfLife, setHalfLife] = useState("5730");
  const [time, setTime] = useState("5730");

  const result = useMemo(
    () => radioactiveDecay(Number(initial), Number(halfLife), Number(time)),
    [initial, halfLife, time],
  );
  const constants = useMemo(() => decayConstants(Number(halfLife)), [halfLife]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="n0" label={labels.initial_amount}>
          <input id="n0" inputMode="decimal" className={inputClass} value={initial} onChange={(e) => setInitial(e.target.value)} />
        </Field>
        <Field id="hl" label={labels.half_life} hint={labels.same_units}>
          <input id="hl" inputMode="decimal" className={inputClass} value={halfLife} onChange={(e) => setHalfLife(e.target.value)} />
        </Field>
        <Field id="tt" label={labels.elapsed_time} hint={labels.same_units}>
          <input id="tt" inputMode="decimal" className={inputClass} value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
      </div>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? [
                { term: labels.remaining, value: sig(result.remaining) },
                { term: labels.fraction_remaining, value: `${sig(result.fraction * 100, 5)} %` },
                { term: labels.half_lives_elapsed, value: sig(result.halfLivesElapsed, 5) },
                ...(constants.ok
                  ? [
                      { term: labels.decay_constant, value: `${sig(constants.decayConstant)} (1/${labels.time_unit})` },
                      { term: labels.mean_lifetime, value: `${sig(constants.meanLifetime)} ${labels.time_unit}` },
                    ]
                  : []),
              ]
            : []
        }
      />
    </div>
  );
}

function PopulationTool({ labels }: { labels: ToolLabels }) {
  const [model, setModel] = useState<"exponential" | "logistic">("exponential");
  const [n0, setN0] = useState("100");
  const [r, setR] = useState("0.05");
  const [k, setK] = useState("10000");
  const [t, setT] = useState("50");

  const result = useMemo(() => {
    if (model === "exponential") return exponentialGrowth(Number(n0), Number(r), Number(t));
    return logisticGrowth(Number(n0), Number(r), Number(k), Number(t));
  }, [model, n0, r, k, t]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field id="model" label={labels.model}>
          <select
            id="model"
            className={inputClass}
            value={model}
            onChange={(e) => setModel(e.target.value as "exponential" | "logistic")}
          >
            <option value="exponential">{labels.exponential}</option>
            <option value="logistic">{labels.logistic}</option>
          </select>
        </Field>
        <Field id="pn0" label={labels.initial_population}>
          <input id="pn0" inputMode="decimal" className={inputClass} value={n0} onChange={(e) => setN0(e.target.value)} />
        </Field>
        <Field id="pr" label={labels.growth_rate} hint={labels.per_time_unit}>
          <input id="pr" inputMode="decimal" className={inputClass} value={r} onChange={(e) => setR(e.target.value)} />
        </Field>
        {model === "logistic" ? (
          <Field id="pk" label={labels.carrying_capacity}>
            <input id="pk" inputMode="decimal" className={inputClass} value={k} onChange={(e) => setK(e.target.value)} />
          </Field>
        ) : (
          <Field id="pt" label={labels.time}>
            <input id="pt" inputMode="decimal" className={inputClass} value={t} onChange={(e) => setT(e.target.value)} />
          </Field>
        )}
      </div>
      {model === "logistic" && (
        <div className="mt-4 max-w-xs">
          <Field id="pt2" label={labels.time}>
            <input id="pt2" inputMode="decimal" className={inputClass} value={t} onChange={(e) => setT(e.target.value)} />
          </Field>
        </div>
      )}
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? "doublingTime" in result
              ? [
                  { term: labels.population_at_t, value: sig(result.population) },
                  {
                    term: labels.doubling_time,
                    value: result.doublingTime === null ? labels.not_applicable : sig(result.doublingTime),
                  },
                ]
              : [
                  { term: labels.population_at_t, value: sig(result.population) },
                  { term: labels.fraction_of_capacity, value: `${sig(result.fractionOfCapacity * 100, 4)} %` },
                ]
            : []
        }
      />
    </div>
  );
}

function DiversityTool({ labels }: { labels: ToolLabels }) {
  const [raw, setRaw] = useState("42, 17, 9, 3, 1");
  const counts = useMemo(
    () =>
      raw
        .split(/[,\s\n]+/)
        .map((s) => s.trim())
        .filter((s) => s !== "")
        .map(Number),
    [raw],
  );
  const result = useMemo(() => {
    if (counts.some((c) => Number.isNaN(c))) {
      return { ok: false as const, error: labels.err_counts };
    }
    return diversityIndices(counts);
  }, [counts, labels.err_counts]);

  return (
    <div>
      <Field id="counts" label={labels.counts} hint={labels.counts_hint}>
        <textarea
          id="counts"
          rows={3}
          className={inputClass}
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
        />
      </Field>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? [
                { term: labels.richness, value: String(result.richness) },
                { term: labels.total_individuals, value: sig(result.totalIndividuals) },
                { term: labels.shannon, value: `${sig(result.shannon, 5)} ${labels.nats}` },
                { term: labels.shannon_bits, value: `${sig(result.shannonBase2, 5)} ${labels.bits}` },
                {
                  term: labels.evenness,
                  value: result.evenness === null ? labels.undefined_one_species : sig(result.evenness, 5),
                },
                { term: labels.simpson_d, value: sig(result.simpsonD, 5) },
                { term: labels.simpson_diversity, value: sig(result.simpsonDiversity, 5) },
                { term: labels.inverse_simpson, value: sig(result.inverseSimpson, 5) },
              ]
            : []
        }
      />
    </div>
  );
}

function CarbonTool({ labels }: { labels: ToolLabels }) {
  const [direction, setDirection] = useState<"c-to-co2" | "co2-to-c">("c-to-co2");
  const [mass, setMass] = useState("1");
  const masses = carbonMasses();

  const result = useMemo(() => {
    const m = Number(mass);
    if (mass.trim() === "" || Number.isNaN(m)) {
      return { ok: false as const, error: labels.err_number };
    }
    return direction === "c-to-co2" ? carbonToCarbonDioxide(m) : carbonDioxideToCarbon(m);
  }, [direction, mass, labels.err_number]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="dir" label={labels.direction}>
          <select
            id="dir"
            className={inputClass}
            value={direction}
            onChange={(e) => setDirection(e.target.value as "c-to-co2" | "co2-to-c")}
          >
            <option value="c-to-co2">{labels.c_to_co2}</option>
            <option value="co2-to-c">{labels.co2_to_c}</option>
          </select>
        </Field>
        <Field id="mass" label={direction === "c-to-co2" ? labels.mass_c : labels.mass_co2} hint={labels.any_mass_unit}>
          <input id="mass" inputMode="decimal" className={inputClass} value={mass} onChange={(e) => setMass(e.target.value)} />
        </Field>
      </div>
      <Output
        errorLabel={labels.err}
        error={result.ok ? undefined : result.error}
        rows={
          result.ok
            ? [
                {
                  term: direction === "c-to-co2" ? labels.mass_co2 : labels.mass_c,
                  value: sig("carbonDioxide" in result ? result.carbonDioxide : result.carbon),
                },
                { term: labels.factor_used, value: sig(result.ratio, 7) },
              ]
            : []
        }
      />
      <p className="mt-3 text-xs text-ink-subtle">
        M(C) = {masses.mC} · M(O) = {masses.mO} · M(CO₂) = {Number(masses.mCO2.toFixed(4))} ·{" "}
        M(CO₂)/M(C) = {Number(masses.ratioCO2perC.toFixed(6))}
      </p>
    </div>
  );
}

function NotationTool({ labels }: { labels: ToolLabels }) {
  const [raw, setRaw] = useState("0.00012340");
  const [figures, setFigures] = useState("4");

  const sigfigs = useMemo(() => significantFigures(raw), [raw]);
  const sciNotation = useMemo(
    () => toScientificNotation(Number(raw), Number(figures)),
    [raw, figures],
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="num" label={labels.number} hint={labels.number_hint}>
          <input id="num" className={inputClass} value={raw} onChange={(e) => setRaw(e.target.value)} />
        </Field>
        <Field id="figs" label={labels.figures}>
          <input id="figs" inputMode="numeric" className={inputClass} value={figures} onChange={(e) => setFigures(e.target.value)} />
        </Field>
      </div>
      <Output
        errorLabel={labels.err}
        error={!sigfigs.ok ? sigfigs.error : !sciNotation.ok ? sciNotation.error : undefined}
        rows={
          sigfigs.ok && sciNotation.ok
            ? [
                { term: labels.significant_figures, value: String(sigfigs.figures) },
                ...(sigfigs.ambiguous ? [{ term: labels.note, value: labels.ambiguous_trailing_zeros }] : []),
                { term: labels.scientific_notation, value: sciNotation.text },
                { term: labels.mantissa, value: String(sciNotation.mantissa) },
                { term: labels.exponent, value: String(sciNotation.exponent) },
              ]
            : []
        }
      />
    </div>
  );
}
