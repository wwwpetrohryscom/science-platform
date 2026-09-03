---
title: 'Band structure: why a few electron-volts decide whether a solid conducts'
excerpt: What separates copper from quartz is not how many electrons a material has but whether an energy gap sits between the states they occupy and the states they could move in. Almost every modern device is engineering on that gap.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - materials-physics
  - semiconductors
  - band-structure
  - superconductivity
  - measurement
related:
  - atomic-and-nuclear-physics-explained
  - quantum-mechanics-fundamentals
  - solar-photovoltaics-explained
  - measurement-uncertainty-explained
  - particle-physics-fundamentals
pillar: atomic-and-nuclear-physics-explained
_bodyHash: 3bf69bb
---

Copper conducts electricity about twenty orders of magnitude better than quartz, and both are made of ordinary atoms held together by ordinary electromagnetic forces. The difference is not the number of electrons available. It is whether an electron that receives a small nudge of energy has anywhere to go.

In an isolated atom, electrons occupy discrete levels — the structure set out in [the account of atomic and nuclear structure](/en/physics/matter-radiation/atomic-and-nuclear-physics-explained). Bring 10²³ atoms together into a crystal and those levels split and smear into continuous bands, because no two electrons in the whole solid may share a state. Between the bands there can be a range of energies that no state occupies at all. That gap, and where the electrons sit relative to it, is the whole story.

## Three cases, one diagram

- In a **metal**, the highest occupied band is only partly filled. An electron at the top of the occupied states has empty states immediately above it, so an arbitrarily small electric field sets electrons moving. Conduction costs nothing to start.
- In an **insulator**, the occupied band is completely full and the next empty band sits several electron-volts above it. A full band carries no net current, because for every electron moving one way there is one moving the other, and thermal energy at room temperature — about 0.025 eV — is nowhere near enough to lift an electron across a 5 eV gap.
- A **semiconductor** is an insulator with a small gap. Silicon's is about 1.1 eV. Still far above thermal energy, so pure silicon at room temperature is a poor conductor — but close enough that the population of excited electrons is not negligible, rises steeply with temperature, and, decisively, can be controlled.

That controllability is the entire basis of the industry. A metal's conductivity is what it is. A semiconductor's can be tuned across many orders of magnitude by adding impurities at the level of parts per million.

## Doping: conductivity by deliberate contamination

Substitute a phosphorus atom, which has five valence electrons, for a silicon atom, which has four. Four electrons complete the bonds and the fifth is bound only weakly, sitting on a level just below the conduction band and easily promoted into it. The crystal now has mobile negative carriers: it is **n-type**. Substitute boron, with three valence electrons, and the missing bond behaves as a mobile positive carrier — a **hole**. That is **p-type**.

Bring n-type and p-type material into contact and something happens that no single material does. Electrons diffuse across the junction and recombine with holes, leaving behind a region stripped of mobile carriers and containing the fixed charges of the dopant ions. Those fixed charges set up an internal electric field opposing further diffusion, and equilibrium is reached. The result is a **p-n junction**, which conducts readily in one direction and barely at all in the other.

Almost everything else is a consequence. Forward-bias the junction and injected carriers recombine across the gap, emitting a photon of roughly the gap energy — a light-emitting diode, whose colour is chosen by choosing the material's gap. Illuminate the junction and absorbed photons create carriers that the built-in field separates before they recombine — a photovoltaic cell, where the same gap that sets the LED's colour sets the [ceiling on how much of the solar spectrum can be converted](/en/physics/energy/solar-photovoltaics-explained). Put a controlling electrode above a channel between two junctions and the field switches the channel's conductivity — a transistor, and from there everything.

## Why bandgap engineering is a trade-off, not an optimisation

A larger gap means a device that tolerates higher temperature and higher voltage before thermal carriers swamp the controlled ones, which is why silicon carbide and gallium nitride displaced silicon in high-power switching. It also means more energy per carrier is required to do anything, and different fabrication chemistry.

For light emission and absorption the gap sets the wavelength directly, so the material is chosen by the photon energy wanted rather than by any general notion of quality. And whether the gap is **direct** or **indirect** — whether the lowest empty state sits at the same crystal momentum as the highest occupied one — decides whether a photon alone can bridge it or whether a lattice vibration has to participate too. Silicon's gap is indirect, which is why silicon is an excellent transistor material and a poor light emitter, and why the light-emitting devices in a silicon-based system are almost always made of something else.

There is no best semiconductor. There is a gap value, a directness, a carrier mobility, a thermal conductivity and a manufacturing base, and every real device picks a point in that space.

## Defects: the part that decides whether any of it works

A perfect crystal is a teaching device. Real crystals contain vacancies, interstitials, dislocations and grain boundaries, and the electronic consequences are out of all proportion to the concentrations involved.

A defect can introduce an energy level inside the gap — a place an electron can rest that the pure crystal does not offer. Such a level is a recombination centre: a carrier falls into it and is lost before it can be collected, which in a solar cell is directly a loss of current and in a transistor is leakage. Controlling defects at concentrations of parts per billion is what semiconductor manufacturing largely consists of, and it is why the field is a metrology problem as much as a materials one.

NIST's account of its semiconductor work makes the measurement dependency explicit: the agency created a new measurement method and issued its first photomask linewidth standard in 1979, which reduced measurement discrepancies among companies tenfold. As chips shrink they become ever more sensitive to contamination, and detecting those flaws is hard; NIST researchers, with an industry colleague, adapted a low-cost microscopy method — through-focus scanning optical microscopy — to detect nanoscale contaminants during manufacture. An industry cannot hold a tolerance it cannot measure, and the [distinction between what is measured and what is inferred](/en/physics/mechanics-waves/measurement-uncertainty-explained) is as consequential here as anywhere in physics.

## Superconductivity: the case band theory did not predict

Some materials, cooled below a critical temperature, conduct direct current with no energy loss at all and expel magnetic fields as they make the transition. The US Department of Energy's summary states both properties plainly. This is not a very good conductor; it is a qualitatively different state, and nothing in ordinary band theory anticipates it.

The conventional explanation is that electrons pair through an interaction mediated by lattice vibrations, and the paired state can move through the lattice without scattering. It accounts well for the metals in which superconductivity was first found. It does not account for the copper-oxide materials discovered in 1986, some of which superconduct above the boiling point of liquid nitrogen — a practically decisive threshold, since liquid nitrogen is cheap and liquid helium is not. Four decades later there is no agreed mechanism for high-temperature superconductivity, which is worth stating flatly: it is one of the clearest open problems in condensed-matter physics, and claims of room-temperature superconductivity have a poor record of surviving replication.

That is the honest shape of materials physics. Band theory explains an enormous amount with a simple picture, the deviations from it are where the interesting materials live, and the gap between "we can make this" and "we understand why it works" is narrower in engineering than in physics but has never closed.

## Sources

1. **NIST** — [Semiconductors](https://www.nist.gov/semiconductors). The 1979 photomask linewidth standard and its tenfold reduction in inter-company measurement discrepancy; through-focus scanning optical microscopy, adapted by NIST researchers with an industry colleague to detect nanoscale contaminants during manufacture.
2. **NIST** — [Nanoscale Device Characterization Division](https://www.nist.gov/pml/nanoscale-device-characterization-division). Measurement programmes underlying semiconductor device characterisation.
3. **U.S. Department of Energy, Office of Science** — [DOE explains… superconductivity](https://www.energy.gov/science/doe-explainssuperconductivity). Loss-free DC conduction below a critical temperature, expulsion of magnetic fields, and the 1986 high-temperature materials operating above liquid-nitrogen temperature.
4. **NIST** — [Fundamental physical constants](https://www.nist.gov/pml/fundamental-physical-constants). CODATA values for the electron-volt and the constants used in the energy comparisons above.
5. **National Laboratory of the Rockies** — [Best research-cell efficiency chart](https://www.nlr.gov/pv/cell-efficiency). Confirmed champion-cell efficiencies by material, the practical record of bandgap choice in photovoltaics.
6. **U.S. Department of Energy, Office of Scientific and Technical Information** — [OSTI technical reports](https://www.osti.gov/). National-laboratory research output on semiconductor materials and defect physics.
7. **Particle Data Group** — [Review of Particle Physics](https://pdg.lbl.gov/). Reference values for the electron and photon properties underlying the band picture.
