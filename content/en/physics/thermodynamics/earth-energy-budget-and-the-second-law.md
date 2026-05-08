---
title: 'Earth''s climate is a heat engine: thermodynamics and the planetary energy budget'
excerpt: A planet receives concentrated radiation from a hot source, redistributes it, and emits it back to space at a colder temperature. This is a heat engine. The thermodynamics is what bounds the climate.
type: expert
author: energy-systems-desk
publishedDate: '2026-04-26'
updatedDate: '2026-05-08'
readingTime: 5
tags:
  - thermodynamics
  - earth-energy-budget
  - climate-physics
  - second-law
related:
  - thermodynamic-limits-of-photovoltaics
  - solar-radiation-and-earth-energy-balance
  - greenhouse-gases-and-radiative-forcing
pillar: thermodynamic-limits-of-photovoltaics
---

The Earth receives concentrated solar radiation at an effective temperature of roughly 5800 K, redistributes it through the atmosphere and ocean, and emits it back to space at an effective temperature of roughly 255 K. This is, in the most literal sense, a heat engine. The [thermodynamics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) of that engine bounds what the [climate](/en/ecology/climate-change/what-is-climate-change) can do, what surface temperatures are physically possible, and what fraction of incident [energy](/en/physics/energy/perovskite-stack-field-stability) is available to drive atmospheric circulation.

This perspective is the bridge between [solar radiation physics](/en/physics/energy/solar-radiation-and-earth-energy-balance), [greenhouse-gas forcing](/en/ecology/climate-change/greenhouse-gases-and-radiative-forcing), and [the thermodynamic limits of photovoltaic conversion](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics). All three rest on the same physical layer.

## The Earth as a Carnot-like engine

A Carnot engine extracts work from a temperature difference between a hot reservoir and a cold reservoir. The maximum efficiency is set by the temperatures alone: η = 1 − T_cold/T_hot.

The Earth-as-engine analogy is approximate — the planet is not in steady state in the strict thermodynamic sense, and irreversibilities throughout the system reduce its efficiency far below the Carnot bound — but it is the right starting point. The hot reservoir is the absorbed solar radiation; the cold reservoir is space. The engine produces atmospheric circulation, ocean circulation, and the kinetic energy of weather systems. The numbers are documented in [NASA Earth Observatory](https://earthobservatory.nasa.gov/) energy-budget [materials](/en/physics/energy/perovskite-stack-field-stability) and in the [IPCC AR6 Working Group I](https://www.ipcc.ch/report/ar6/wg1/) chapter on the energy budget.

The atmosphere converts on the order of a few percent of absorbed solar energy into the kinetic energy of winds. This is far below the Carnot maximum because most absorbed energy is dissipated as heat — frictional, radiative, and turbulent — before it can be organized into bulk flow. The fact that the conversion happens at all is what produces weather; the fact that it is inefficient is why the atmosphere is a turbulent, chaotic system rather than a clockwork.

## What the second law buys you

The second law of thermodynamics constrains the climate in three useful ways.

**Direction of heat flow.** Heat flows from hot to cold. Combined with the rotating-sphere geometry of the Earth, this produces poleward heat transport from the tropics, with characteristic atmospheric and oceanic patterns whose existence (though not exact form) is forced by thermodynamics. The structure of the Hadley cells, the storm tracks, and the ocean overturning circulation all follow.

**Maximum entropy production.** Several authors have argued that the climate system, like other dissipative systems, operates close to the state of maximum entropy production consistent with its boundary conditions. This is a useful heuristic in some contexts — it correctly predicts coarse properties of poleward heat transport — and it is debated whether it is a derivable principle or a useful empirical regularity. Either way, it constrains what climate states are reachable.

**Bound on free energy.** The free energy available to drive circulation is the absorbed solar energy minus the entropy production at the cold reservoir. This sets an upper bound on storm intensity, ocean overturning rates, and similar bulk dynamical quantities. The bound is far above what is observed, which means thermodynamics is not the binding constraint for most weather phenomena, but it is for the gross structure.

## Greenhouse gases in the thermodynamic frame

The greenhouse effect is sometimes described as the atmosphere "trapping heat". In thermodynamic terms it is more precise to say that greenhouse gases raise the *altitude* at which the atmosphere becomes optically thin to outgoing longwave radiation. Because the atmosphere is colder higher up, that altitude radiates at a lower effective temperature, reducing outgoing longwave for a given surface temperature. The surface must warm until outgoing longwave at the new effective emission altitude balances absorbed shortwave.

This framing makes several things clearer. It explains why the warming response is not bounded by saturation — adding more greenhouse gas continues to raise the effective emission altitude even when the absorption bands are saturated near the surface. It explains why the [climate response](/en/ecology/climate-change/what-is-climate-change) operates on the timescale of the ocean, not the atmosphere — the surface temperature has to rise enough to push the radiating altitude back to where outgoing longwave matches absorbed shortwave, and most of the heat capacity is in the ocean.

The accounting is reviewed in detail in the [IPCC AR6 Working Group I](https://www.ipcc.ch/report/ar6/wg1/) chapter on the energy budget, climate feedbacks, and climate sensitivity, and the [NASA Earth Observatory](https://earthobservatory.nasa.gov/) explanation of the greenhouse effect.

## The thermodynamic limit on photovoltaics

A photovoltaic cell converts solar radiation into work (electrical work). The same heat-engine framework that bounds the climate bounds the cell: a perfect single-junction cell under AM1.5 illumination has a maximum efficiency of around 33% (the [Shockley-Queisser](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) limit), well below the Carnot bound for the Sun-Earth temperature pair (~95%) because of the spectral and entropy losses specific to single-junction conversion. The [U.S. National Renewable Energy Laboratory](https://www.nrel.gov/) maintains the canonical Shockley-Queisser reference and tracks champion-cell efficiencies against it.

[Tandem and multi-junction cells](/en/physics/energy/perovskite-stack-field-stability) approach the Carnot bound more closely because they recover the spectral mismatch loss. The asymptotic limit for an infinite-junction cell under AM1.5 is around 86% — still below Carnot because of unrecovered [photon](/en/physics/quantum-basics/electromagnetic-spectrum-applications) entropy. The [thermodynamic limits piece](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) walks through this in detail.

## What this perspective changes

Two things, mostly.

**It removes the temptation to look for "hidden energy" or "missing physics" in the climate.** When the energy budget closes within stated uncertainties — and it does — there is no hidden term. Climate science is not waiting for a unifying mechanism that overturns the budget; it is refining the partition among well-defined components. [NIST](https://www.nist.gov/) physical-constants reference and [NOAA](https://www.noaa.gov/) [measurement](/en/physics/quantum-basics/electromagnetic-spectrum-applications) standards anchor the underlying physical quantities.

**It puts solar generation, climate change, and atmospheric physics on a single conceptual layer.** They are all heat-engine problems with shared bounds and shared accounting. Reading them as separate fields obscures the structure; reading them through the same energy budget makes the connections obvious.

## Limits of the framing

Two caveats.

**The Earth is not in steady state.** The current top-of-atmosphere imbalance of around +1 W/m² means the system is gaining energy. Steady-state thermodynamic arguments are approximations to a system that is currently being forced. Where the language of equilibrium is used in this article, it should be read as the long-term average to which the system would relax if forcing were held constant.

**Maximum-entropy-production heuristics are not laws.** The argument that the atmosphere operates near a maximum-entropy-production state is consistent with observations and useful in coarse [modelling](/en/ecology/climate-change/temperate-forest-carbon-sink-decline), but it is not derivable from first principles in general. Treating it as a law produces overconfident predictions; treating it as a useful approximation does not.

## Sources

1. **IPCC** — [AR6 Working Group I, Chapter 7](https://www.ipcc.ch/report/ar6/wg1/). The Earth's energy budget, climate feedbacks, and climate sensitivity.
2. **NASA Earth Observatory** — [Earth's energy budget](https://earthobservatory.nasa.gov/). Topic-level reference on the components of the planetary energy budget.
3. **NASA Climate** — [Climate vital signs](https://climate.nasa.gov/). Public-facing reference on energy-imbalance indicators.
4. **NOAA Climate.gov** — [Energy budget explainers](https://www.climate.gov/). Methodology pages on climate energy bookkeeping.
5. **U.S. National Renewable Energy Laboratory** — [Photovoltaic efficiency reference](https://www.nrel.gov/). Shockley-Queisser limit and champion-cell tables.
6. **NIST** — [Physical constants and measurement standards](https://www.nist.gov/). Reference quantities underpinning radiometric and thermodynamic measurements.
