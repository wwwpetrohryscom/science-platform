---
title: 'Quantum mechanics: the working rules, without the philosophy'
excerpt: Quantum theory pins physical constants to ten significant figures while its interpretation stays open. This page sets out the working rules — amplitudes, observables, quantisation, uncertainty, spin statistics, decoherence — and marks where the real gaps sit.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - quantum-mechanics
  - superposition
  - decoherence
  - measurement
  - spin-statistics
related:
  - wave-particle-duality-explained
  - quantum-computing-fundamentals
  - quantum-sensors-leaving-the-lab
  - electromagnetic-spectrum-applications
_bodyHash: c4e33738
---

Judged as a predictive instrument, quantum mechanics is the most severely tested theory physics has. The 2022 CODATA evaluation lists the electron magnetic moment anomaly as 1.159 652 180 46(18) × 10⁻³, a relative standard uncertainty of 1.6 × 10⁻¹⁰. The fine-structure constant that governs the strength of the electromagnetic interaction is pinned to the same order, 7.297 352 5643(11) × 10⁻³. Whatever is unresolved about quantum theory, its arithmetic is not the unresolved part.

What is unresolved is what the arithmetic is describing. Those are separate questions, and this page keeps them separate: the working rules first, the seams marked where they occur.

## The state is a list of amplitudes

A quantum state assigns a complex number — an **amplitude** — to each possible result of a measurement. The probability of a result is the squared magnitude of its amplitude. The structurally important fact is the order of those two operations: amplitudes are added first and squared second, so contributions can cancel. Classical probabilities, being non-negative, never cancel. Every distinctively quantum effect traces back to that one asymmetry.

A **superposition** is a single state whose amplitude is spread across several outcomes. It is not an object occupying two places, and it is not ignorance about which place the object is really in. Both readings fail on the same evidence: they predict that the outcome statistics should be a weighted average of the separate cases, and the observed statistics contain interference terms that no such average produces. The experiments that force this conclusion are set out in [what the double-slit experiments actually show](/en/physics/quantum-basics/wave-particle-duality-explained).

The amplitude language also fixes the meaning of "the wavefunction spreads". Spreading is a statement about where the amplitude has support, not about a substance thinning out. A single detection is always a single localised event.

## Observables, and the seam at measurement

Each measurable quantity is represented by an operator. The results a measurement can return are that operator's eigenvalues, and the probability of each is given by the Born rule. Between measurements the state evolves under the Schrödinger equation, which is deterministic, linear and reversible.

The two halves do not obviously fit together. Unitary evolution never turns a superposition into a definite result; the measurement rule does exactly that, probabilistically and irreversibly. The theory postulates both and derives neither from the other. This is the **measurement problem**, and it is a real gap rather than a rhetorical one — but it is a gap in interpretation, not in prediction. No experiment has found a case where the Born rule gives the wrong statistics.

## Where quantisation comes from — and where it does not

The name is misleading, because most quantities in the theory are not quantised. A free particle has a continuous energy spectrum. Position and momentum are continuous. Quantisation appears when a wave equation is solved subject to boundary conditions, in the same way that a clamped string admits only certain standing modes. Bind an electron to a proton and the allowed energies become discrete; the ionisation energy of hydrogen in its ground state is the Rydberg energy, 13.605 693 122 990(15) eV in the CODATA evaluation, known to about one part in 10¹².

Spin is the exception that clarifies the rule. It is not quantised by a boundary condition, has no classical rotation behind it, and takes half-integer or integer values as an intrinsic property of the particle species.

Light carries its own version of the same idea. The energy exchanged between a field and matter comes in units of hf, which is why the [photon](/en/glossary/photon) energy — rather than the intensity — determines what radiation can do to a molecule, a point developed across the bands in [the electromagnetic spectrum and its applications](/en/physics/quantum-basics/electromagnetic-spectrum-applications). It is also why the efficiency ceiling on a single-junction solar cell is fixed by photon energetics rather than engineering, as [the thermodynamic limit on photovoltaics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) sets out.

## Conjugate variables, not clumsy instruments

The uncertainty relation σₓσₚ ≥ ħ/2 is usually introduced through a story about a microscope disturbing an electron. That story gets the right inequality for the wrong reason, and the wrong reason then has to be unlearned.

Position and momentum amplitudes are Fourier transforms of one another. A state with a narrow spread in position is, as a matter of mathematics, built from a wide range of momentum components — the same trade-off that stops a radio pulse from being both very short and very close to a single frequency. The relation constrains the state itself. It holds before anybody measures anything, and it would hold for a perfect instrument.

Measurement disturbance is a separate effect that also exists, and the two were experimentally prised apart in an atom interferometer where the disturbance from path detection was too small to account for the loss of interference. The scale of ħ explains why none of this shows up in ordinary life: ħ/2 is about 5.3 × 10⁻³⁵ J s, so for any laboratory object the permitted joint precision in position and momentum is far finer than any instrument could use. The Planck constant itself is no longer measured at all — since the 2019 revision of the SI it is fixed by definition at 6.626 070 15 × 10⁻³⁴ J Hz⁻¹, and the kilogram is realised through it.

## Two families of particles, and everything that follows

Identical particles in quantum mechanics are identical in a strong sense: no measurement distinguishes one electron from another, so the state must behave in a definite way when two are exchanged. Only two behaviours are consistent. Symmetric states describe **bosons**, which carry integer spin; antisymmetric states describe **fermions**, which carry half-integer spin.

Antisymmetry has an immediate consequence — two fermions cannot occupy the same state, the Pauli exclusion principle — and an enormous amount of the observable world rests on it. Atomic shell structure and therefore the periodic table follow from it. So does the electron degeneracy pressure that holds up a white dwarf, and so does the filling of energy bands that decides whether a solid conducts, the subject of [band structure in materials](/en/physics/matter-radiation/materials-physics-and-semiconductors). Bosons do the opposite: they can pile into one state, which is what a laser beam and a Bose–Einstein condensate have in common. The particle inventory itself splits along the same line, with quarks and leptons on the fermion side and the force carriers on the boson side, as CERN's summary of the Standard Model lays out.

## Decoherence explains the classical limit, but not the outcome

A quantum system is never isolated. It becomes entangled with its surroundings — air molecules, stray photons, the thermal radiation it emits itself — and once the environment holds a record of which branch the system took, interference between branches is no longer observable in the system alone. This is **decoherence**, and it is measurable rather than assumed. Heating fullerene molecules inside an interferometer until they radiate thermal photons destroys their interference fringes by a predictable amount, and the measured loss of visibility matched microscopic decoherence theory.

Decoherence answers a specific question well: why large, warm, well-coupled objects show no interference, without needing any modification to the theory. It does not answer why a particular outcome is the one that occurs. Conflating the two is the most common overstatement in popular accounts of the subject. Everything in [engineering a machine out of qubits](/en/physics/quantum-basics/quantum-computing-fundamentals) is downstream of this: the entire discipline is a fight to postpone decoherence long enough to finish a calculation.

## What the Bell experiments settled

Bell's 1964 theorem turned a philosophical dispute into an experiment: any theory in which properties are locally determined before measurement obeys an inequality that quantum mechanics violates. Two generations of tests followed, each leaving an assumption open.

The 2015 experiment closed the two hardest of them at once, entangling electron spins in separate laboratories 1.3 kilometres apart with an estimated state fidelity of 0.92 ± 0.03 and running 245 trials, with detection efficient enough to avoid fair-sampling assumptions and separation large enough to enforce locality. The reported rejection of local realism was at the two-standard-deviation level — a genuine result and a modest one, and the paper said so plainly. A later collaboration attacked the remaining assumption, that the measurement settings are themselves unpredictable, by recruiting about 100,000 people to generate 97,347,490 binary choices in a twelve-hour window on 30 November 2016 and routing them to thirteen experiments in twelve laboratories on five continents.

What this body of work establishes is narrow and firm: no local hidden-variable theory reproduces the observed correlations. What it does not establish is which of the surviving interpretations is correct, because they agree on every prediction. That is why the honest summary of the field is that the formalism is fixed to ten significant figures while its interpretation remains genuinely open. The same control over individual quantum systems that makes these tests possible is now an instrument-building technique in its own right, described in [quantum sensors leaving the lab](/en/physics/quantum-basics/quantum-sensors-leaving-the-lab).

One boundary is worth stating explicitly. The rules above are non-relativistic quantum mechanics, which is a limiting case of quantum field theory; particle creation and annihilation sit outside them. And no version of the theory yet incorporates gravity, which is why the descriptions here stop well short of a complete account of nature.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Reference values and stated uncertainties for the Planck constant, the fine-structure constant and the Rydberg energy.
2. **NIST** — [Electron magnetic moment anomaly](https://physics.nist.gov/cgi-bin/cuu/Value?ae). The 2022 CODATA value and its 1.6 × 10⁻¹⁰ relative standard uncertainty.
3. **NIST** — [Redefining the kilogram](https://www.nist.gov/si-redefinition/kilogram-introduction). The 2018–2019 revision of the SI and the fixing of the Planck constant.
4. **Nature 526, 682 (2015)** — [Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres](https://www.nature.com/articles/nature15759). Separation, entanglement fidelity, trial count and the strength of the reported violation.
5. **Nature 557, 212 (2018)** — [Challenging local realism with human choices](https://www.nature.com/articles/s41586-018-0085-3). The scale and design of the distributed Bell test addressing the freedom-of-choice assumption.
6. **Nature 427, 711 (2004)** — [Decoherence of matter waves by thermal emission of radiation](https://www.nature.com/articles/nature02276). Quantitative agreement between measured loss of interference visibility and decoherence theory.
7. **CERN** — [The Standard Model](https://home.cern/science/physics/standard-model/). Classification of matter particles and force carriers, and the model's acknowledged gaps.
8. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Separation of measurement back-action from the loss of interference.
9. **NIST** — [Quantum information science](https://www.nist.gov/quantum-information-science). Reference material on controlling and measuring individual quantum systems.
