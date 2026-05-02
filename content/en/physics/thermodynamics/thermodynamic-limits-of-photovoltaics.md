---
title: The thermodynamic limits of photovoltaics — and why they matter for what's possible
excerpt: There is a hard upper bound on how much sunlight any single-junction photovoltaic cell can convert to electricity. Knowing where it comes from clarifies which directions of improvement are physics, and which are engineering.
type: pillar
author: daniel-okafor
publishedDate: '2026-02-26'
updatedDate: '2026-05-02'
readingTime: 4
tags:
  - thermodynamics
  - photovoltaics
  - shockley-queisser
  - energy
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
pillar: thermodynamic-limits-of-photovoltaics
_bodyHash: ebcccbc4
---

There is a hard upper bound on how much sunlight any single-junction photovoltaic cell can convert to electricity. Under standard solar illumination it sits near 33% — the Shockley-Queisser limit, derived in 1961. Modern silicon [cells](/en/biology/cells/what-is-a-cell) operate around 27%, very close to a refined version of that bound. Knowing where the bound comes from clarifies what counts as fundamental physics and what counts as engineering — and which directions of improvement are real.

## Where the bound comes from

The Shockley-Queisser limit is a thermodynamic argument, not an engineering one. It applies to any single-bandgap absorber operating under standard solar illumination, regardless of material, architecture, or fabrication process.

It arises from three irreducible loss mechanisms.

**Photons below the bandgap pass through.** A solar cell's bandgap defines the minimum photon [energy](/en/physics/energy/perovskite-stack-field-stability) that can excite an electron across it. Photons with less energy are not absorbed — they pass through, contributing nothing. For a typical silicon bandgap (1.1 eV), this discards a large fraction of the long-wavelength solar spectrum.

**Photons above the bandgap thermalize.** Photons with more than enough energy excite electrons high into the conduction band, but those electrons rapidly relax to the band edge — losing the excess as heat, on a timescale much shorter than they can be extracted as electrical work. Whether the photon carried 2 eV or 4 eV, you get one electron's worth of bandgap energy out.

**Radiative recombination.** A cell that absorbs photons must, by detailed balance, also emit them. This sets a minimum loss to spontaneous emission that no physics can eliminate without changing the temperature of the absorber or the geometry of incoming light.

Optimizing the bandgap balances these losses. Too small a bandgap captures more photons but loses more to thermalization. Too large captures fewer photons but extracts more energy from each. The optimum sits near 1.3 eV; silicon at 1.1 eV is slightly below it, which is part of why silicon's practical limit is closer to 30% than to 33%.

These losses are thermodynamic. They cannot be eliminated by any single-bandgap design.

## What the bound does not constrain

The Shockley-Queisser limit applies to single-junction cells under standard illumination. Three known directions sidestep it.

**Multi-junction cells.** Stacking absorbers with different bandgaps lets each handle the part of the spectrum it is best at. The top cell captures high-energy photons before they can thermalize; the bottom cell captures lower-energy photons that the top cell missed. With infinite junctions and concentration, the thermodynamic limit rises to about 86%. With realistic finite stacks, lab efficiencies above 47% have been measured. The current generation of [perovskite](/en/physics/energy/perovskite-stack-field-stability)-silicon tandems is the commercially-relevant version of this strategy.

**Concentrator [photovoltaics](/en/physics/energy/perovskite-stack-field-stability).** Concentrating solar light onto a small cell raises the chemical potential of the photon flux relative to the cell. For a single junction at very high concentration, the limit rises toward 40%. This requires precision tracking and active cooling, which limits the deployment scenarios where it is economical.

**Hot-carrier extraction.** Extracting carriers before they fully thermalize, in principle, can preserve some of the energy normally lost as heat. This has been demonstrated in proof-of-concept devices but has not approached practical efficiency. The required carrier extraction speed pushes against fundamental relaxation timescales in semiconductors.

**Spectrum modification.** Down-conversion (splitting a high-energy photon into two lower-energy photons) and up-conversion (combining two low-energy photons into one) can in principle reshape the incoming spectrum to better match a single bandgap. Both have been demonstrated; neither has reached deployment-relevant efficiencies.

Each of these is a real direction of research. None of them violates the underlying thermodynamics; they each change the conditions under which the thermodynamic argument applies.

## What this means for the cost curve

The cost decline of single-junction silicon has been driven overwhelmingly by manufacturing scale and process refinement, not by physics. The technology has been operating near its practical efficiency ceiling for years; further cost declines come from cheaper manufacturing of the same physics.

Multi-junction approaches — particularly perovskite-silicon tandems — sit on a different cost curve. Their efficiency ceiling is meaningfully higher; their manufacturing maturity is much lower. The question for the next decade is whether the manufacturing curve for tandems can be brought down fast enough to make them economical at scale before the silicon cost decline saturates.

Concentrator photovoltaics sit on yet another curve. Their thermodynamic ceiling is high but their balance-of-system costs (tracking, cooling, optics) are high enough that they have remained a niche even as the underlying cell efficiencies have improved.

The commercial trajectory of solar generation in the next decade will be decided primarily by how the tandem-versus-silicon competition plays out, with concentrator and hot-carrier approaches as longer-term contenders. Knowing the thermodynamics tells you which of these are bounded by physics (silicon, near its limit) and which still have headroom (tandems, with significant headroom remaining).

## What this means for non-photovoltaic generation

The same kind of thermodynamic argument applies, with different constants, to all solar conversion processes.

Solar thermal generation has its own Carnot-style ceiling that depends on receiver temperature. Photosynthesis has a [quantum](/en/physics/quantum-basics/quantum-sensors-leaving-the-lab)-yield ceiling around 11% under ideal conditions, with field crops operating an order of magnitude below that. Artificial photosynthesis for fuel production has limits set by the thermodynamics of the target reaction — splitting water has a different ceiling than reducing CO₂.

The Shockley-Queisser limit is not a special quirk of photovoltaics; it is the photovoltaic case of a general principle. Solar conversion is bounded; the bounds depend on the conversion process. Knowing the bound for your process tells you whether the engineering frontier is close to it or far from it — and whether further improvement is a matter of effort or a matter of physics.

This is the kind of clarity worth having before placing decade-scale energy bets.
