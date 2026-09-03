---
title: 'Earth system models: what gets added when a climate model becomes an ESM'
excerpt: An Earth system model is a coupled climate model with the biogeochemistry made interactive. That one change alters what it can be asked, and where it goes wrong.
type: expert
author: environmental-science-desk
publishedDate: '2026-08-29'
updatedDate: '2026-09-03'
readingTime: 5
tags:
  - earth-system-model
  - cmip
  - modelling
  - methods
related:
  - earth-system-science-explained
  - earth-system-predictability-explained
  - essential-climate-variables-explained
  - climate-feedback-mechanisms
_bodyHash: 658b6a24
pillar: earth-system-science-explained
---

"Climate model" and "Earth system model" are used interchangeably in most reporting, and the difference between them is not a matter of size. It is a specific architectural change with specific consequences for what the model can answer, and it follows directly from [what makes Earth system science a distinct field](/en/ecology/earth-systems/earth-system-science-explained). This article describes the change, the international framework these models are run within, and where the resulting projections are weakest.

Projection *uncertainty* — how scenario, model structure, and internal variability combine into a range — is treated separately in the existing article on [climate models and projections](/en/ecology/climate-change/climate-models-projections-uncertainty). The subject here is the machinery.

## The components and the coupler

A coupled model is built from separate numerical models of the atmosphere, the ocean, sea ice, and the land surface, each solving its own governing equations on its own grid, joined by a **coupler** that exchanges fluxes of heat, momentum, moisture, and gases across their shared interfaces at defined intervals.

Those components correspond closely to the [Earth system components](/en/ecology/earth-systems/earth-system-components-explained) of the conceptual diagram, and the interfaces are where the interesting failures happen. Each component is a reasonable approximation on its own; conserving energy and mass across the exchange between two components with different grids and different timesteps is a genuine engineering problem, and small systematic imbalances at the interface accumulate over century-length simulations.

## What "Earth system" adds

An [Earth system model](/en/glossary/earth-system-model) extends the coupled physical model with **interactive biogeochemistry**. The distinction is concrete: in a physical climate model, atmospheric CO₂ concentration is an input the modeller prescribes. In an ESM, the model is given emissions, and it computes the resulting concentration itself by simulating photosynthesis, respiration, soil decomposition, air–sea gas exchange, and ocean carbon chemistry.

That change matters for three reasons.

It makes **carbon-cycle feedbacks emergent** rather than assumed. If warming reduces the land sink in the model's own dynamics, the extra airborne carbon feeds back on temperature without anyone imposing it — the mechanism examined in the existing article on [carbon-cycle feedbacks](/en/ecology/climate-change/carbon-cycle-feedbacks).

It makes the model **answerable to observations it was not tuned on** — the seasonal cycle of atmospheric CO₂, the interannual variability of the land sink, the ocean carbon inventory — which is a stronger test than reproducing temperature alone.

It also **imports the uncertainty of the biological components**, which is substantially larger than that of the physical ones. An ESM is not simply a better climate model; it trades a prescribed quantity for a simulated one, and the simulation has its own errors.

Modern ESMs typically add interactive vegetation dynamics, nutrient limitation — the coupling to [the nitrogen cycle](/en/ecology/earth-systems/nitrogen-cycle-explained) — atmospheric chemistry and aerosols, and in some cases ice-sheet components. The processes being represented are those described in [biosphere–climate interactions](/en/ecology/earth-systems/biosphere-climate-interactions).

## The CMIP framework

Individual models are not much use in isolation, because a single model's biases cannot be distinguished from a real signal. The Coupled Model Intercomparison Project, coordinated by the World Climate Research Programme, exists to make comparison possible: participating centres run a common set of prescribed experiments and publish output in a standard format.

The scale is substantial. CMIP6 comprises roughly 24.5 petabytes of data across some 6.4 million datasets, from 132 registered models representing 48 institutions in 26 countries, distributed through the Earth System Grid Federation. CMIP7 is the current phase. This coordinated ensemble is what underpins the assessments in the IPCC reports; when AR6 quotes a range across models, this is the ensemble it is quoting.

The standardisation has an underappreciated consequence: because all participating models run the same experiments, differences between their outputs can be attributed to model structure rather than to differences in how they were driven.

## What models do well and badly

The reliability of a model result depends strongly on the quantity and the scale, and lumping them together is the most common misuse.

**Well constrained**: global and large-scale energy budgets, the sign and approximate magnitude of the major physical feedbacks, the large-scale temperature response to a given forcing, and the broad structure of atmospheric and oceanic circulation.

**Less well constrained**: regional precipitation, especially where it depends on circulation shifts rather than thermodynamics; cloud processes, which AR6 identifies as the largest contributor to feedback uncertainty; the land carbon sink and its response to CO₂ and drought; and ice-sheet dynamics, which many ESMs still do not include interactively.

The general rule is that quantities determined by conservation laws are more trustworthy than quantities determined by processes smaller than the model grid. Convection, cloud microphysics, turbulence, and vegetation processes all occur below grid scale and are represented by **parameterisations** — physically motivated approximations with tunable coefficients. Most inter-model disagreement traces back to parameterisation choices rather than to the resolved dynamics.

## Reading model output responsibly

Three habits are worth adopting.

**Prefer the ensemble to any single model.** A single run confounds the forced response with internal variability, and a single model confounds both with its own structural bias.

**Check whether a result is a projection or a scenario comparison.** "Warming reaches X by 2100" is meaningless without naming the emissions pathway, since scenario choice dominates the spread in the second half of the century.

**Distinguish evaluation from validation.** Models are evaluated against the historical record, but the historical record was also used in their development, so agreement with it is a weaker test than it looks. Out-of-sample tests — paleoclimate states, the response to volcanic eruptions, quantities not used in tuning — carry more weight.

The observational side of the same problem, and the standardised variables models are compared against, is covered in [Essential Climate Variables](/en/ecology/earth-systems/essential-climate-variables-explained), while what models can and cannot predict at different horizons is in [Earth-system predictability](/en/ecology/earth-systems/earth-system-predictability-explained).

## Sources

1. **World Climate Research Programme** — [Coupled Model Intercomparison Project](https://wcrp-cmip.org/). CMIP structure, participation, current phase, and data distribution figures.
2. **IPCC AR6 WG1, Chapter 4** — [Future global climate](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/). How CMIP6 output is used to construct assessed projections.
3. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Feedback and sensitivity differences between CMIP5 and CMIP6 ensembles.
4. **IPCC AR6 WG1, Chapter 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Carbon-cycle components that distinguish an ESM from a physical climate model.
5. **ECMWF** — [Reanalysis fact sheet](https://www.ecmwf.int/en/about/media-centre/focus/2023/fact-sheet-reanalysis). Data assimilation, and the difference between a reanalysis and a free-running model.
6. **Copernicus Climate Change Service** — [Climate projections and datasets](https://climate.copernicus.eu/). Operational access to processed model output.
