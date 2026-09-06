---
title: 'Evapotranspiration: the largest land water flux nobody measures directly'
metaTitle: Evapotranspiration and the land water budget
excerpt: More water leaves land as vapour than leaves it as rivers. Three independent families of global estimate now agree on the total to within about five per cent — and disagree profoundly about how much of it passes through plants.
type: expert
author: earth-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-06'
readingTime: 6
tags:
  - evapotranspiration
  - water-cycle
  - transpiration
  - land-surface-models
related:
  - earth-system-science-explained
  - global-water-cycle-explained
  - biosphere-climate-interactions
  - climate-feedback-mechanisms
pillar: earth-system-science-explained
_bodyHash: 8ab61baa
---

Evapotranspiration is "the sum of all processes by which water moves from the land surface to the atmosphere via evaporation and transpiration." It is the largest term in the terrestrial water balance after precipitation, and the one with no instrument of its own. Rainfall has gauges and radar. Runoff has stream gauges. Evapotranspiration has inference: from [energy balance](/en/ecology/ecosystems/urban-heat-islands-and-surface-energy-balance), from [gas exchange](/en/ecology/oceans/air-sea-gas-exchange) over a small footprint, from a model, or from what is left after subtracting the terms that were measured.

That asymmetry is the reason the flux is both fundamental and slippery. It couples the water cycle to the energy budget — every kilogram evaporated carries away roughly the latent heat of vaporisation, so the partition of available energy between evaporating water and warming air is what sets surface temperature over land. The wider circulation this feeds into is described in [the global water cycle](/en/ecology/earth-systems/global-water-cycle-explained), and the vegetation side of the coupling in [biosphere–climate interactions](/en/ecology/earth-systems/biosphere-climate-interactions).

## Two processes with one name

The composite term hides a real distinction. *Evaporation* is a physical phase change from soil, open water and wet surfaces, controlled by available energy, humidity deficit, wind and the supply of water at the surface. *Transpiration* is water drawn through a plant from the root zone and released through stomata, controlled by all of the above plus the plant's own regulation of its stomatal aperture — a physiological control described in [plant physiology, water and nutrients](/en/biology/physiology/plant-physiology-water-and-nutrients). Interception loss, the evaporation of rain caught on foliage before it reaches the ground, is often treated as a third component.

The USGS lists the controls on the transpiration term as plant type, temperature, humidity, wind, soil type, sunlight availability, precipitation and land slope, and gives an indication of magnitude at field scale: "an acre of corn gives off about 3,000-4,000 gallons (11,400-15,100 liters) of water each day, and a large oak tree can transpire 40,000 gallons (151,000 liters) per year."

The distinction matters because the two components respond differently to change. Rising CO₂ tends to reduce stomatal conductance, which suppresses transpiration without directly affecting soil evaporation. Land-cover change alters the ratio between them. A model that gets the total right by compensating errors in the components will get the response to any of these wrong.

## The total is now reasonably well constrained

Three independent methodological families now estimate global land evapotranspiration: remote-sensing retrievals, machine-learning upscaling of flux-tower observations, and land-surface models. A systematic evaluation in *Hydrology and Earth System Sciences* compared all three and reported that their ensemble means "agreed well, with values ranging from 589.6 mm yr−1 (6.56×10⁴ km³ yr−1) to 617.1 mm yr−1 (6.87×10⁴ km³ yr−1)."

That is a spread of about 27.5 mm yr⁻¹, under five per cent, across approaches that share almost no assumptions — a genuinely reassuring result, and better agreement than the global carbon fluxes achieve. Agreement between independent methods is the strongest evidence available when there is no direct measurement to check against.

The agreement is not uniform in space. The same study found uncertainties concentrated "particularly in the Amazon Basin and arid/semiarid regions" — the two settings where the methods' assumptions are most exposed. In the Amazon the constraint is rarely energy or water supply but canopy and rooting behaviour during the dry season; in drylands the flux is dominated by brief pulses after rain that a monthly mean cannot represent and a satellite overpass may miss entirely.

## The partition is not constrained

If the total is in reasonable shape, the split between transpiration and evaporation is not. A harmonised global transpiration product published in *Scientific Data* — daily, at 0.1° resolution, for 2000 to 2020 — notes that in earlier global estimates the uncertainties on transpiration were "often exceeding two to three times those of total ET."

The scale of the disagreement in the literature is easiest to see in compilations. A 2026 analysis in *Hydrology and Earth System Sciences* cites two of them: "Wei et al. (2017) showed mean global Et/E varying from 0.24 to 0.90 based on a variety of remote-sensing, isotopic, and modelling studies. Another compilation by Liu et al. (2022) showed the mean varying between 0.24 and 0.86."

A quantity whose published central estimates span 0.24 to 0.90 is not a quantity that is known. It ranges from "a quarter of land evaporation passes through plants" to "nearly all of it does" — two different pictures of how tightly the water cycle is coupled to the biosphere.

That paper's own contribution, using long-term hydrological observations across 648 US watersheds and a proportionality argument rather than a flux model, produces values that vary strongly by vegetation type: 0.33 for shrubs, 0.32 for grasslands, 0.48 for croplands, 0.60 for deciduous broadleaf forests, 0.69 for evergreen needleleaf forests and 0.70 for mixed forests. The ordering is intuitive — the more leaf area routing water through stomata, the higher the ratio — and it suggests that a single global number was always the wrong target. A global mean over a quantity that ranges from a third to seven-tenths depending on [land cover](/en/ecology/earth-observation/land-cover-change-detection) is a statement about the land-cover mix as much as about hydrology.

## Why direct measurement is so hard

The reference instrument for the total is the eddy-covariance flux tower, which measures the vertical turbulent transport of water vapour above a canopy directly. Its limits are the same ones described for carbon in [primary production and energy flow](/en/ecology/ecosystems/primary-production-and-energy-flow): a footprint of hundreds of metres, a sparse global network biased toward accessible temperate ecosystems, with gaps that must be filled by modelling before an annual total exists.

The tower measures the sum. Splitting it into transpiration and evaporation requires an additional signal — sap flow in stems, isotopic composition of the vapour, chamber measurements, or a model assumption — and each of those methods has its own bias. The compilations spanning 0.24 to 0.90 are, in large part, a compilation of partitioning methods rather than of places.

Satellite approaches invert the surface energy balance, which requires land surface temperature as an input, with all the retrieval caveats set out in [land surface temperature from space](/en/ecology/earth-observation/land-surface-temperature-from-space). That dependence is worth tracing: an evapotranspiration product derived from thermal imagery inherits the emissivity assumption, the algorithm choice and the once-per-overpass sampling of the temperature product beneath it.

## What to take from this

The total flux of water from land to atmosphere is one of the better-constrained large numbers in Earth-system science, agreed to within a few per cent by three independent method families. The partition of that flux between plants and soil is one of the worse-constrained, with published estimates differing by a factor of three or more, and it is the partition that determines how the flux responds to CO₂, to drought and to land-cover change.

That combination — a confident total over an unresolved composition — is a recurring pattern in [Earth observation](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained), and it is worth naming, because a well-constrained total invites the assumption that the parts are equally well known. The interpretive framework for that kind of claim runs through [Earth system science](/en/ecology/earth-systems/earth-system-science-explained).

## Sources

1. **US Geological Survey, Water Science School** — [Evapotranspiration and the water cycle](https://www.usgs.gov/special-topics/water-science-school/science/evapotranspiration-and-water-cycle). The definition of evapotranspiration, the listed controls on transpiration, and the field-scale magnitudes for maize and a large oak.
2. **Hydrology and Earth System Sciences** — [Evaluation of global terrestrial evapotranspiration using state-of-the-art approaches in remote sensing, machine learning and land surface modeling](https://hess.copernicus.org/articles/24/1485/2020/). Pan and colleagues (2020). The three method families, the 589.6 to 617.1 mm yr⁻¹ ensemble-mean range, and the concentration of disagreement in the Amazon Basin and arid and semi-arid regions.
3. **Scientific Data** — [A harmonized global gridded transpiration product based on collocation analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11161592/). Li and colleagues (2024). The 0.1° daily 2000–2020 product, and the statement that transpiration uncertainties in earlier global estimates often exceed those of total evapotranspiration by two to three times.
4. **Hydrology and Earth System Sciences** — [Insights into evapotranspiration partitioning based on hydrological observations using the generalized proportionality hypothesis](https://hess.copernicus.org/articles/30/317/2026/). Hassan, Prentice and Liang (2026). The 648-watershed method, the vegetation-type ratios from 0.32 for grasslands to 0.70 for mixed forests, and the cited compilation ranges of 0.24–0.90 and 0.24–0.86.
