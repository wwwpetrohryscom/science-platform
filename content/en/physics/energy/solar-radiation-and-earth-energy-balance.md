---
title: 'Solar radiation and Earth''s energy balance: the physics behind the climate'
excerpt: The Earth absorbs a specific amount of energy from the Sun and radiates a specific amount back to space. The accounting between the two is the foundation of climate physics.
type: expert
author: energy-systems-desk
publishedDate: '2026-04-24'
updatedDate: '2026-05-18'
readingTime: 5
tags:
  - energy
  - solar-radiation
  - earth-energy-budget
  - climate-physics
related:
  - thermodynamic-limits-of-photovoltaics
  - perovskite-stack-field-stability
  - earth-energy-budget-and-the-second-law
pillar: perovskite-stack-field-stability
---

The Earth's [climate](/en/ecology/climate-change/what-is-climate-change) system is, at its core, an [energy](/en/physics/energy/perovskite-stack-field-stability) budget. The Sun delivers shortwave radiation; the planet absorbs some, reflects some, and radiates longwave (infrared) energy back to space. The accounting between input and output is the foundation of climate physics, and it is also the framing that anchors most discussion of [energy systems](/en/physics/energy/perovskite-stack-field-stability) and [photovoltaics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

The numbers are well-established. The structure of the budget — what is well-known, what is uncertain, and what is genuinely model-dependent — is worth understanding directly rather than through proxies.

## Top-of-atmosphere quantities

The starting numbers, summarized by [NASA Earth Observatory](https://earthobservatory.nasa.gov/), [NASA Climate](https://climate.nasa.gov/), and [NOAA Climate.gov](https://www.climate.gov/):

- **Solar irradiance at the top of the atmosphere** (the solar "constant", which varies slightly): approximately 1361 W/m² perpendicular to the Sun's rays.
- **Average over Earth's surface** (accounting for the planet being a rotating sphere): approximately 340 W/m² averaged over the full sphere day-and-night.
- **Albedo** (the fraction reflected back to space, by clouds, ice, and surface): approximately 0.30, so reflected shortwave is around 100 W/m².
- **Absorbed shortwave** (what makes it into the climate system): around 240 W/m².
- **Outgoing longwave radiation** (what the planet emits back to space at infrared wavelengths): around 240 W/m² in the long-term mean.

The two final numbers must balance in the long-term mean. Any imbalance — the *energy imbalance at the top of atmosphere* — accumulates as additional energy in the climate system. This imbalance is currently positive, around +1 W/m², driven by anthropogenic greenhouse-gas forcing as documented in the [IPCC AR6 Working Group I](https://www.ipcc.ch/report/ar6/wg1/) report.

## Where the absorbed energy goes

About 89% of the energy imbalance is taken up by the [ocean](/en/ecology/climate-change/ocean-heat-content-indicators), with the remainder split among land warming, ice melt, and atmospheric warming. This partition is the reason [ocean heat content](/en/ecology/climate-change/ocean-heat-content-indicators) is the best single indicator of total climate-system energy uptake — the atmosphere holds only a small fraction of the imbalance and is also subject to year-to-year variability.

The ocean is therefore the slow buffer. It absorbs the imbalance now and releases it on multi-decade timescales as warmer water mixes downward and warmer water near the surface eventually equilibrates with a warmer atmosphere. This is the physical reason climate change is sometimes described as having "committed warming" — the imbalance is real now even if forcing were held constant from this point.

## What changes the balance

The absorbed-shortwave side and the outgoing-longwave side are not independent. They are coupled through the temperature of the surface and atmosphere, which adjusts to whatever balance can hold.

Three physical changes shift the balance:

**Albedo changes.** Ice loss reduces albedo, increasing absorbed shortwave. Cloud changes can go either direction. Land-use changes (deforestation, desert expansion, urbanization) modify surface albedo. The [IPCC AR6 WG1](https://www.ipcc.ch/report/ar6/wg1/) report assesses each contribution.

**Atmospheric composition changes.** Greenhouse gases — water vapour, CO₂, methane, nitrous oxide, halocarbons, ozone — absorb outgoing longwave and re-emit it. Adding more of them at fixed surface temperature reduces outgoing longwave to space, producing the imbalance that drives surface warming. Aerosols partly counteract this by scattering shortwave and modifying clouds. The bookkeeping is the [radiative forcing](/en/ecology/climate-change/greenhouse-gases-and-radiative-forcing) framework.

**Solar irradiance changes.** Solar output varies on the 11-year cycle (about 1 W/m² peak-to-peak at top of atmosphere, dampened by the spherical-area factor), and on longer cycles. The contribution to recent warming is small relative to greenhouse forcing — by about an order of magnitude in [IPCC](https://www.ipcc.ch/report/ar6/wg1/) and [NASA](https://www.nasa.gov/) assessments — but it is not zero, and it matters for paleoclimate.

## What this implies for solar energy

For [photovoltaic technology](/en/physics/energy/perovskite-stack-field-stability), the relevant quantity is direct and diffuse irradiance at the surface, not the top-of-atmosphere flux. Atmospheric absorption (mostly water vapour, ozone, and CO₂) and scattering (Rayleigh and aerosol) reduce the surface flux and shift its spectrum relative to the top-of-atmosphere AM0 spectrum. Standardized AM1.5 spectra are used by the [U.S. National Renewable Energy Laboratory](https://www.nrel.gov/) for module rating and by the [U.S. Department of Energy Solar Energy Technologies Office](https://www.energy.gov/eere/solar) for industry guidance.

This is also why panel efficiency tested under AM1.5 does not equal field performance: the actual incident spectrum varies with location, season, time of day, and atmospheric conditions. The [thermodynamic limit](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) on a single-junction cell under AM1.5 is the [Shockley-Queisser](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) bound, around 33%; outdoor performance is determined by additional factors including spectral mismatch, temperature derating, and soiling.

## What we know less well

Two quantities in the energy budget are well-constrained; one is not.

**Greenhouse-gas forcing** is well-constrained. The radiative properties of the gases are measured to high precision in laboratory spectroscopy and confirmed in atmospheric measurements.

**Outgoing longwave radiation** is well-measured by satellite radiometry — the CERES instrument suite onboard NASA Earth Observing System satellites measures it directly.

**Cloud feedback** is the dominant remaining uncertainty. How clouds change as the climate warms — height, coverage, optical properties — determines a substantial fraction of the spread in climate sensitivity estimates. AR6 reports cloud feedback as positive overall (warming-amplifying) with quantifiable but irreducible spread across models. This is the principal reason climate sensitivity is reported as a range rather than a single number.

## Recent evidence and updated context

The satellite top-of-atmosphere imbalance record, produced by the CERES instrument suite, continues to indicate a positive Earth energy imbalance of roughly 1 W/m² when averaged over the most recent multi-year window. The ocean uptake record from [ocean heat content](/en/ecology/climate-change/ocean-heat-content-indicators) datasets closes the budget within stated uncertainties, which is the cross-check that gives the imbalance estimate its weight. The companion [NASA CERES mission documentation](https://www.nasa.gov/) and [NOAA Climate.gov](https://www.climate.gov/) explainers describe the calibration and uncertainty structure of the radiometric record.

Recent work documented in [IPCC AR6 WG1](https://www.ipcc.ch/report/ar6/wg1/) Chapter 7 and follow-on analyses continues to refine cloud-feedback estimates; the central value remains positive and the uncertainty range has narrowed somewhat without resolving the spread fully.

## Methods note

Top-of-atmosphere energy budget estimates rest primarily on satellite radiometry. The [NASA Earth Observatory](https://earthobservatory.nasa.gov/) and [NASA](https://www.nasa.gov/) mission pages document the instruments — CERES, MISR, MODIS, AIRS — that contribute. Surface energy budget estimates combine in-situ flux measurements (FLUXNET, baseline surface radiation network), satellite-derived surface temperature, and reanalyses produced by [ECMWF Copernicus](https://climate.copernicus.eu/) and partner agencies.

## Why this framing matters

The Earth's energy budget is the physical layer underneath every climate claim. Reading discussion of climate change without anchoring it to the energy budget is reading abstractions. Reading discussion of solar energy without anchoring it to the same accounting — same Sun, same atmosphere, same surface — is reading an industry framing rather than a physical one.

The accounting is the physics. The [applications](/en/physics/quantum-basics/quantum-sensors-leaving-the-lab) follow from it.

## Sources

1. **NASA Earth Observatory** — [Earth's energy budget](https://earthobservatory.nasa.gov/). Topic-level reference on solar irradiance, albedo, and outgoing longwave.
2. **NASA Climate** — [Climate vital signs and explainers](https://climate.nasa.gov/). Public-facing reference on Earth energy balance and climate indicators.
3. **NOAA Climate.gov** — [Energy budget and indicator products](https://www.climate.gov/). Methodology and explainer pages on climate energy bookkeeping.
4. **IPCC** — [AR6 Working Group I](https://www.ipcc.ch/report/ar6/wg1/), Chapter 7 (The Earth's energy budget, climate feedbacks and climate sensitivity). Authoritative assessment of the components.
5. **U.S. National Renewable Energy Laboratory** — [Solar resource and reference spectra](https://www.nrel.gov/). Reference spectra and surface-irradiance data products for solar applications.
6. **U.S. Department of Energy Solar Energy Technologies Office** — [Solar irradiance reference](https://www.energy.gov/eere/solar). Industry reference for solar resource quantification.
7. **Copernicus Climate Change Service** — [Reanalysis and energy-budget products](https://climate.copernicus.eu/). Independent European reanalysis chain used to cross-check NASA and NOAA energy-budget estimates.
