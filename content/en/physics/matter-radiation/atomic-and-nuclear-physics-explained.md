---
title: 'Atoms and nuclei: the single curve behind fission and fusion'
excerpt: An atom and the nucleus at its centre differ by four orders of magnitude in size and six in energy. That gap is why chemistry and nuclear physics behave as separate subjects, and why one binding-energy curve governs both fission and fusion.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - nuclear-physics
  - atomic-structure
  - binding-energy
  - isotopes
  - radioactive-decay
related:
  - radioactivity-and-radiation-units
  - nuclear-fission-and-reactors
  - nuclear-fusion-fundamentals
  - ionising-radiation-exposure-and-risk
_bodyHash: aa67d06f
---

Two comparisons set up everything that follows. The Bohr radius, the natural length scale of an atom, is 5.2918 × 10⁻¹¹ m in the 2022 CODATA adjustment. The charge radius of a uranium-238 nucleus, from the IAEA's evaluated nuclear data, is 5.8571 ± 0.0033 fm — that is 5.8571 × 10⁻¹⁵ m. In radius, the nucleus is smaller than the atom around it by a factor of about nine thousand.

The energy scales are further apart still. Pulling the electron off a hydrogen atom takes 13.6057 eV. The average binding energy per nucleon in a mid-mass nucleus is close to 8.79 MeV — roughly 650,000 times more. Nuclear physics and chemistry are the same physics applied at two scales that barely overlap, and almost every counterintuitive fact about radioactivity, reactors and stars follows from how large that separation is.

## Why the electron cloud and the nucleus behave like separate subjects

Chemistry is what the outer electrons do. Which reactions an atom enters, what colour its compounds are, whether the solid it forms conducts — all of it is decided by electron states at the electronvolt scale, the same physics that gives solids their band structure and is taken up in [how band theory sorts conductors from insulators](/en/physics/matter-radiation/materials-physics-and-semiconductors).

The nucleus contributes almost nothing to that. It supplies charge, which fixes how many electrons the atom holds, and mass, which shifts vibrational frequencies slightly. Change the neutron count and you have a different **isotope**: a nucleus of the same element with different mass and, often, entirely different stability. Carbon-12 and carbon-14 form chemically indistinguishable molecules and are taken up by living tissue in very nearly the same way; one is stable and the other decays with a half-life of 5,700 years.

That near-independence has a practical consequence which recurs throughout this subject. Isotopes cannot be separated by chemistry in any straightforward way, because chemistry cannot see the difference. Separating them requires exploiting the mass difference itself, which is why uranium enrichment is an industrial problem rather than a laboratory one.

## The competition inside a heavy nucleus

Protons repel each other electrostatically, and in a heavy nucleus they are packed at a few femtometres' separation, where that repulsion is enormous. What holds the assembly together is the residual strong interaction between nucleons — itself a leftover of the colour force acting between the quarks inside them, described in more detail in [the Standard Model's account of the four interactions](/en/physics/matter-radiation/particle-physics-fundamentals).

Two properties of that residual force decide the shape of everything downstream. It is far stronger than electrostatic repulsion at short range, and it has almost no reach beyond about a nucleon diameter. A nucleon therefore binds only to its immediate neighbours, so total binding grows roughly in proportion to the number of nucleons — but electrostatic repulsion is long-range and every proton pushes on every other, so it grows faster than that. Add nucleons and, past a point, the repulsion wins.

## The curve, and the nuclide that actually sits on top of it

Plot binding energy per nucleon against mass number and you get a curve that rises steeply through the light nuclides, flattens into a broad plateau, and declines slowly to the heaviest. Every quantitative claim in this cluster is a statement about a position on that curve.

The peak is routinely reported as iron-56. The evaluated masses do not quite say that. Taking values from the IAEA live chart, which carries the AME2020 mass evaluation, the three highest are nickel-62 at 8794.5555 keV per nucleon, iron-58 at 8792.2534, and iron-56 at 8790.3563. Iron-56 is third, by about four parts in ten thousand.

The correction matters less than the reason the misconception is so durable. The iron group is a real abundance peak in cosmic material, and which nuclide dominates that peak is a different question from which nuclide is most tightly bound. Abundance is decided by what stellar burning actually produces and what those products decay into — the problem laid out in the 1957 review of stellar nucleosynthesis that still frames the field. The curve tells you what is energetically favoured; it does not tell you what a star makes.

## Reading the same curve in two directions

Because the curve has a maximum, there are two ways to move toward it and release energy.

Going down from the heavy end is **fission**. Uranium-235 sits at 7590.9151 keV per nucleon; its likeliest fragments land on the plateau between roughly 8.3 and 8.7 MeV. That difference, multiplied across 236 nucleons, is the couple of hundred megaelectronvolts released per event — the arithmetic is worked through in [the neutron economy of a fission reactor](/en/physics/matter-radiation/nuclear-fission-and-reactors).

Going up from the light end is **fusion**, and it is steeper. Deuterium is bound at 1112.2831 keV per nucleon; helium-4 at 7073.9156. Fusing two deuterons into one helium-4 nucleus releases about 23.8 MeV across four nucleons, near 6 MeV per nucleon, against roughly 0.86 MeV per nucleon for fission. Fusion is about seven times better per unit of fuel mass and far worse per event, which is why the engineering problem is completely different; [why the Lawson criterion is the binding constraint](/en/physics/matter-radiation/nuclear-fusion-fundamentals) takes that up.

The asymmetry is worth stating plainly. Fission is easy to start and hard to stop; fusion is hard to start and stops by itself. Both facts are consequences of the same curve and of the Coulomb barrier that guards its light end.

## How many nuclei there are, and how few of them last

The IAEA's live chart holds ground-state data for 3,386 nuclides. Of those, 244 are listed as stable, distributed across 80 elements, and 288 carry a measured natural terrestrial abundance. Everything else exists only as a decay product, a fission product, or an accelerator target.

An unstable nucleus has a limited menu of exits. Alpha emission sheds a helium-4 nucleus and dominates among the heaviest species. Beta-minus emission converts a neutron to a proton; electron capture and beta-plus emission run the other way. Gamma emission carries off excitation without changing composition. Spontaneous fission splits the nucleus outright and is significant only for the very heaviest.

Nuclides are not obliged to pick one. Potassium-40, half-life 1.248 × 10⁹ years and present in every organism that handles potassium, goes to calcium-40 by beta-minus emission 89.28 per cent of the time and to argon-40 by electron capture the rest. Nor do half-lives cluster: uranium-238 at 4.468 × 10⁹ years and iodine-131 at 8.0252 days are both counted with the same instrument in the same unit, yet they are problems eleven orders of magnitude apart in time. How the resulting emissions are counted, and why the count is not the same thing as the hazard, is the subject of [the difference between the becquerel, the gray and the sievert](/en/physics/matter-radiation/radioactivity-and-radiation-units).

## Energetically allowed is not the same as accessible

The binding-energy curve is a statement about energetics only. It says which rearrangements release energy. It says nothing about whether they happen, or how fast.

Thermodynamically, every nucleus heavier than the iron-nickel region would release energy by fissioning, and every nucleus lighter would release energy by fusing. Almost none of them do at any observable rate, because the Coulomb barrier and the availability of a suitable projectile decide the rate, and rates span dozens of orders of magnitude where the energy difference spans one. This is the single most common misreading of the curve: treating an energetically allowed process as an accessible one.

Three further limits are worth holding on to. The word "stable" in a nuclide table is observational — some entries are species whose decay has simply never been detected, not species proved to be eternal. Mass evaluations far from the valley of stability rest on systematics and extrapolation rather than measurement, so quoted binding energies for exotic nuclides carry uncertainties much larger than the four-decimal figures above suggest; the general discipline for reading a quoted value with its uncertainty is set out in [how a stated uncertainty should be interpreted](/en/physics/mechanics-waves/measurement-uncertainty-explained). And the curve is silent on biology: it cannot tell you what a given emission does in tissue, which is a question about energy deposition and repair rather than about nuclear structure, and is treated in [what the epidemiology of low-dose exposure supports](/en/physics/matter-radiation/ionising-radiation-exposure-and-risk).

## Sources

1. **IAEA Nuclear Data Services** — [Livechart of Nuclides](https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html). Binding energies per nucleon, charge radii, natural abundances, half-lives and decay branching ratios quoted throughout.
2. **IAEA Nuclear Data Services** — [Livechart data download API](https://www-nds.iaea.org/relnsd/vcharthtml/api_v0_guide.html). The ground-state dataset queried for the nuclide, stability and abundance counts.
3. **NIST, CODATA 2022** — [Bohr radius](https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0). Atomic length scale used in the opening comparison.
4. **NIST, CODATA 2022** — [Rydberg constant times hc in eV](https://physics.nist.gov/cgi-bin/cuu/Value?rydhcev). Hydrogen ionisation energy used as the atomic energy scale.
5. **Chinese Physics C** — [The AME 2020 atomic mass evaluation (I)](https://doi.org/10.1088/1674-1137/abddb0). The mass evaluation underlying the binding energies served by the IAEA chart.
6. **Chinese Physics C** — [The NUBASE2020 evaluation of nuclear physics properties](https://doi.org/10.1088/1674-1137/abddae). Half-lives, decay modes and branching ratios in the same dataset.
7. **Reviews of Modern Physics** — [Synthesis of the Elements in Stars](https://doi.org/10.1103/RevModPhys.29.547). The nucleosynthesis framework separating cosmic abundance from nuclear binding.
8. **NIST** — [Fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Source and revision status of the CODATA values cited.
