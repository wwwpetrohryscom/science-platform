---
title: 'Information and thermodynamics: what erasing a bit costs, and why it is not zero'
metaTitle: 'Information and thermodynamics: the cost of erasing a bit'
excerpt: Landauer argued in 1961 that discarding a bit must dissipate at least kT ln 2 of heat. The bound is tiny, it took fifty years to measure, and it is the reason Maxwell's demon does not work.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 5
tags:
  - information-theory
  - entropy
  - second-law
  - landauer-principle
related:
  - entropy-explained
  - laws-of-thermodynamics-explained
  - quantum-computing-fundamentals
  - measurement-uncertainty-explained
_bodyHash: '761e3688'
pillar: laws-of-thermodynamics-explained
---

The [second law](/en/physics/thermodynamics/laws-of-thermodynamics-explained) is usually introduced through engines, and its statements are about heat and work. It also constrains something that looks like it belongs to a different subject entirely: what it costs to forget.

Rolf Landauer's argument — the *Scientific Reports* study dates it to "the 60's" — is that a logically irreversible operation — one whose output does not determine its input — cannot be performed without dissipating heat. Erasing a bit is the canonical case. Two possible prior states map to one final state, the information about which one it was has to go somewhere, and the only place available is the environment.

## The bound

The quantity is small and exact in form. A 2016 study in *Scientific Reports* states it as Q_L ≥ k_B T ln 2, and the same paper gives the standard framing: the principle "states that any logically irreversible transformation, such as the deletion of a classical bit of information, dissipates heat", with "the minimum heat produced during this operation" equal to k_B T ln 2.

With the Boltzmann constant fixed by the SI at exactly 1.380649 × 10⁻²³ J K⁻¹, the bound at 300 K works out to 2.87 × 10⁻²¹ joules per bit — about 2.9 zeptojoules, or ln 2 ≈ 0.69 times k_B T. For comparison, the [free energy](/en/physics/thermodynamics/free-energy-and-biological-work) a cell gets from hydrolysing one ATP molecule under working conditions is "around 50 kJ mol⁻¹ (20 kBT)" — about thirty times the erasure bound for a single bit. The bound is not what limits computing today. What makes it interesting is that it is not zero, and that it does not depend on how the erasure is implemented.

## Why it took fifty years to measure

The obstacle was never the physics but the instrument. Measuring a few zeptojoules requires a system with one degree of freedom, operated slowly enough to stay near equilibrium, with heat exchange resolvable against thermal noise of the same magnitude.

The first verification came in 2012. As the later study records: "the first experimental verification of the Landauer principle has been carried out by Bérut et al. using a colloidal particle trapped in optical tweezers", published as Bérut A. et al., "Experimental verification of Landauer's principle linking information and thermodynamics", *Nature* 483, 187–189 (2012). A single colloidal particle in a double-well optical potential is a one-bit memory: which well it occupies is the stored bit. Driving the particle through an erasure cycle and tracking its trajectory gives the dissipated heat directly, and the mean saturates at the Landauer value as the cycle is made slower.

Subsequent work extended the test to other physical realisations. The 2016 study reports the measurement "in a novel memory unit based on a bistable mechanical cantilever at effective temperature" — a micro-electro-mechanical system rather than a colloid, chosen precisely because agreement across unrelated implementations is what makes a bound look like physics rather than a property of one apparatus.

## Maxwell's demon, closed

The bound resolves a puzzle that stood for well over a century. Maxwell imagined a being who observes molecules and opens a shutter selectively, sorting fast from slow and building a temperature difference from equilibrium without doing work. The construction appears to violate the second law.

The resolution is not that the demon cannot measure, nor that measurement necessarily costs energy. It is that the demon accumulates information — a record of which molecules it let through — and a finite demon must eventually clear that record to keep operating. Erasing it costs at least k_B T ln 2 per bit, and the accounting closes exactly.

This is a satisfying result partly because of where the cost lands. The expensive step is not acquiring information but discarding it, which is the opposite of intuition and the reason the puzzle survived so long.

## What the principle does not say

Three misreadings are common enough to name.

**It is not a claim that information is physical in a metaphysical sense.** The claim is narrower and more useful: a physical system used to represent information has thermodynamic properties, and operations on the representation inherit them.

**It does not make computation expensive.** Logically reversible computation — where each step's output determines its input — carries no Landauer cost, and the bound applies only where information is discarded. Real processors dissipate far more than the bound for engineering reasons that have nothing to do with it.

**It is not a settled matter in every formulation.** The derivation is standard for classical bits in contact with a single thermal bath; extensions to quantum memories, to finite-time operations, and to systems with correlated degrees of freedom continue to be worked out, and papers testing the bound in new regimes are still appearing.

## Where it connects

The link to [entropy as a count of microstates](/en/physics/thermodynamics/entropy-explained) is the substantive one. Boltzmann's entropy counts arrangements consistent with a macroscopic description; Shannon's counts messages consistent with a probability distribution. Landauer's principle is the exchange rate between them, and the constant that converts is the same k_B the SI now fixes exactly.

It also bears on [quantum computing](/en/physics/quantum-basics/quantum-computing-fundamentals), though not in the way it is often invoked. Quantum gates are unitary and therefore logically reversible, so the Landauer cost of the computation itself is zero. The energy budget of a quantum machine is dominated by error correction, measurement, and refrigeration — all of which involve discarding information, which puts the bound back in play at the level of the apparatus rather than the algorithm.

## Sources

1. **Scientific Reports (PMC)** — [Heat production and error probability relation in Landauer reset at effective temperature](https://pmc.ncbi.nlm.nih.gov/articles/PMC5037424/). Statement of the bound, the 2012 verification, and a micro-electro-mechanical test.
2. **NIST** — [The Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). The exact SI value that fixes the size of the bound.
3. **Biophysical Journal (PMC)** — [The molecular mechanism of ATP synthase constrains the evolutionary landscape of chemiosmosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256841/). The cellular free energy of ATP hydrolysis in k_BT units, for the comparison of scales.
