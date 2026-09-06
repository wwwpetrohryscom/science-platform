/**
 * Scientific constants, with provenance.
 *
 * Every number a tool on this site multiplies by comes from here, and
 * every one of them names the body that recommends it, the adjustment or
 * table it comes from, and whether it is exact by definition or measured
 * with an uncertainty.
 *
 * That last distinction matters more than it looks. Seven of the CODATA
 * constants are exact because the SI defines a unit in terms of them —
 * the speed of light has no uncertainty because the metre is defined
 * from it, not because anyone measured it perfectly. A tool that reports
 * five decimal places of a result derived from an exact constant and one
 * derived from a measured one is telling the reader the same thing about
 * two different situations.
 *
 * This file is deliberately client-safe: constants are imported inline
 * rather than read from disk, so a calculator component can use them
 * without dragging `node:fs` into the browser bundle.
 */
import codata from "@/data/constants/codata.json";
import atomicWeights from "@/data/constants/atomic-weights.json";

export type PhysicalConstant = {
  constantId: string;
  symbol: string;
  name: string;
  /** The name exactly as NIST prints it, so the row can be found again. */
  nistName: string;
  value: number;
  /** The value as the provider prints it, spacing and all. */
  valueDisplay: string;
  unit: string;
  exact: boolean;
  standardUncertainty: number | null;
  standardUncertaintyDisplay: string;
};

export type ConstantsSource = {
  datasetId: string;
  adjustment: string;
  provider: string;
  sourceUrl: string;
  landingPage: string;
  accessedDate: string;
};

export const CODATA_SOURCE: ConstantsSource = codata.source as ConstantsSource;
export const CONSTANTS: PhysicalConstant[] = codata.constants as PhysicalConstant[];

const BY_ID = new Map(CONSTANTS.map((c) => [c.constantId, c]));

/**
 * Look up a constant, or throw.
 *
 * Throwing is deliberate. A tool that silently fell back to a default
 * when a constant id was mistyped would produce a number that looks
 * right and is not traceable to anything, which is the failure this
 * whole layer exists to prevent.
 */
export function constant(id: string): PhysicalConstant {
  const c = BY_ID.get(id);
  if (!c) {
    throw new Error(
      `Unknown constant "${id}". Known: ${[...BY_ID.keys()].join(", ")}`,
    );
  }
  return c;
}

/** Numeric value of a constant, for use in a formula. */
export function value(id: string): number {
  return constant(id).value;
}

export type AtomicWeight = {
  symbol: string;
  name: string;
  atomicNumber: number;
  standardAtomicWeight: number;
  uncertainty: number;
  interval: [number, number];
  unit: string;
};

export const ATOMIC_WEIGHTS_SOURCE = atomicWeights.source;
export const ATOMIC_WEIGHTS: AtomicWeight[] =
  atomicWeights.elements as AtomicWeight[];

const BY_SYMBOL = new Map(ATOMIC_WEIGHTS.map((e) => [e.symbol, e]));

export function atomicWeight(symbol: string): AtomicWeight {
  const e = BY_SYMBOL.get(symbol);
  if (!e) {
    throw new Error(
      `No standard atomic weight for "${symbol}". Known: ${[...BY_SYMBOL.keys()].join(", ")}`,
    );
  }
  return e;
}
