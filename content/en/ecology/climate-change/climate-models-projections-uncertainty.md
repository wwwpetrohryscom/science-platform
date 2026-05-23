---
title: 'Climate models and projections: where the uncertainty actually comes from'
excerpt: A climate projection range is not a single forecast with error bars — it is a combination of scenario, model-structural, and internal-variability uncertainty. The shares change over time and by indicator.
type: expert
author: climate-research-desk
publishedDate: '2026-05-23'
updatedDate: '2026-05-23'
readingTime: 8
tags:
  - climate-change
  - climate-models
  - projections
  - uncertainty
related:
  - climate-indicators-earth-system-monitoring
  - what-is-climate-change
  - extreme-weather-attribution-basics
  - carbon-cycle-feedbacks
pillar: what-is-climate-change
---

A climate projection is not a forecast in the weather sense. A weather forecast estimates the actual state of the atmosphere at a future time; a climate projection estimates the *statistics* of the climate system under a specified set of forcing assumptions. The difference matters because the relevant uncertainty in a climate projection is not "how exactly will the weather unfold" — it is a structured combination of three different sources.

This piece walks through what climate models are, where the uncertainty in their projections comes from, and how to read a projection range responsibly.

## What a climate model is

A climate model is a numerical simulation of the climate system on a discrete spatial grid, integrating the governing physical equations forward in time under specified forcing. The major models — coordinated under the Coupled Model Intercomparison Project (CMIP) through the [World Climate Research Programme](https://www.wcrp-climate.org/) — combine atmosphere, ocean, sea-ice, land-surface, and (in earth-system configurations) carbon-cycle and vegetation components. The current generation, CMIP6, was the model basis for [IPCC AR6 WG1](https://www.ipcc.ch/report/ar6/wg1/).

A model run for a given forcing scenario produces a time series of climate variables — temperature, precipitation, sea level, sea ice, ocean heat content — at each grid cell. A *projection* is typically a multi-model ensemble of such runs combined with statistical methods to estimate plausible ranges of future climate.

Models are evaluated against the historical [climate-indicator record](/en/ecology/climate-change/climate-indicators-earth-system-monitoring). The historical-period evaluation tests whether a model reproduces observed temperature, ocean heat content, sea ice, and sea level given known historical forcing. Models that perform well on the historical record give more weight to their projections of the same indicators in the future.

## The three sources of projection uncertainty

The standard decomposition, used by AR6 and reviewed across the projection literature, distinguishes three sources.

**Scenario uncertainty.** What forcing path the climate system will be subjected to depends on emissions, which depend on socioeconomic, technological, and policy choices that climate science does not project itself. AR6 uses the SSP (Shared Socioeconomic Pathway) scenario framework, which spans plausible emissions trajectories from rapid decarbonization to high-emissions paths. Scenario uncertainty grows with projection lead time and is the dominant source of long-range projection uncertainty for most indicators.

**Model-structural uncertainty.** Different climate models — different research groups' implementations of the governing equations, sub-grid parameterizations, and coupling — produce different responses to the same forcing. The spread among CMIP models for a given scenario is the structural uncertainty. It is largest for variables whose dynamics depend strongly on sub-grid processes (regional precipitation, cloud feedback) and smaller for variables driven directly by the energy budget (global mean temperature, ocean heat content).

**Internal-variability uncertainty.** Even a perfect model with a perfectly known forcing would produce a range of outcomes because the climate system has internal variability — ENSO, the Atlantic Multidecadal Oscillation, the Pacific Decadal Oscillation, and others. A single model run is one realization of the variability; the ensemble of plausible realizations is what the projection range needs to capture. Large-ensemble experiments (running the same model with the same forcing but different initial conditions) isolate this term.

The relative shares of the three sources shift over time and by indicator. For global mean temperature in the late 21st century, scenario uncertainty dominates. For regional precipitation over the next two decades, internal variability dominates. For sea-level rise, model-structural uncertainty — particularly the ice-sheet contribution — is the largest term in the upper tail. The standard reference for this decomposition is the [IPCC AR6 WG1 interactive atlas](https://www.ipcc.ch/report/ar6/wg1/) and the [Copernicus Climate Change Service](https://climate.copernicus.eu/) projection products.

## Equilibrium climate sensitivity

Climate sensitivity is the central parameter linking forcing to temperature response. Equilibrium climate sensitivity (ECS) is the equilibrium global mean surface temperature response to a doubling of CO₂; transient climate response (TCR) is the corresponding response at the time CO₂ has doubled in a 1%-per-year ramp experiment. ECS depends on the sum of feedbacks (water vapour, lapse rate, surface-albedo, cloud) that the climate system engages as it warms.

AR6 assesses the likely range of ECS at 2.5–4 °C, with a best estimate of 3 °C. The range is narrower than in earlier assessments because the bounds were re-derived using a combination of paleoclimate constraints, historical-record constraints, and process-level evidence on cloud feedback. Cloud feedback remains the largest individual contributor to the residual ECS spread.

The relevance for projection uncertainty is that ECS sets the scale of the temperature response to a given concentration trajectory. A higher ECS world warms more for the same emissions; a lower ECS world warms less. The AR6 likely range translates into a fractional uncertainty on the projected warming — comparable in magnitude to the spread induced by scenario choice across SSPs for the late century.

## Where the projections are most reliable

Three classes of projection are more reliable than the average.

**Global aggregates.** Global mean surface temperature, global mean sea level, global mean ocean heat content, and global greenhouse-gas concentration trajectories are constrained by physics that the models capture well. Their projection ranges are dominated by scenario uncertainty more than by structural uncertainty.

**Sign of regional change.** For many regions, models agree on the *direction* of change (warmer, drier, more frequent heat extremes) even where they disagree on magnitude. The IPCC AR6 atlas reports robust-agreement signals separately from contested ones.

**Frequency change in well-resolved extremes.** Extreme heat extremes — the long-warm tail of the temperature distribution — are projected with higher confidence than other extremes because their statistics depend more directly on the mean shift and on physically robust mechanisms. Coverage of this is in [extreme-weather attribution basics](/en/ecology/climate-change/extreme-weather-attribution-basics).

## Where the projections are less reliable

Three classes of projection carry larger uncertainty.

**Regional precipitation.** Mean precipitation response is constrained by global energy-budget arguments, but regional patterns depend on circulation changes that models do not resolve to confidence. Whether a specific region gets wetter, drier, or seasonally more variable is harder to project than mean temperature.

**Ice-sheet contributions to sea level.** The largest single source of structural uncertainty in 21st-century sea level is the Antarctic contribution. AR6 reports plausible 21st-century ranges with low-likelihood, high-consequence upper tails driven by mechanisms — marine ice-cliff instability, ice-shelf collapse — that the historical record does not fully sample.

**Carbon-cycle feedbacks.** As covered in [carbon-cycle feedbacks](/en/ecology/climate-change/carbon-cycle-feedbacks), the response of land and ocean carbon sinks to continued warming is itself uncertain. Emissions-driven projections that let the sinks respond freely carry a wider envelope than concentration-driven projections that prescribe the concentration trajectory.

## Reading a projection range responsibly

Three practices reduce avoidable confusion.

**Read the scenario, not just the range.** An RCP8.5 or SSP5-8.5 projection is conditional on a specific high-emissions assumption that is not a forecast itself. A "1.5 °C" or "4 °C" world depends on which scenario is being discussed; AR6 reports ranges across all SSPs.

**Read the time horizon.** Scenario uncertainty dominates at 2100; internal variability dominates at 2030. The dominant source of projection uncertainty for a near-term decision is not the same as the dominant source for a century-scale planning question.

**Read what is not in the range.** Standard projection ranges are conditional on the represented processes performing as the models implement them. AR6 separately reports low-likelihood, high-impact scenarios — for example a high-end ice-sheet contribution — outside the central range, because the responsible reading of projection uncertainty includes the tails that the model ensemble does not fully sample.

## Methods notes

**CMIP ensemble structure.** CMIP6 includes models with a wide range of equilibrium climate sensitivities, including several "hot" models with ECS values above the AR6 likely range. AR6 weights or constrains the multi-model ensemble using observational and paleoclimate evidence rather than treating each model as equally credible.

**Bias correction and downscaling.** Regional and impact-level projections often pass model output through bias-correction and downscaling steps. Each step adds methodological assumptions; the resulting product is no longer "raw" model output and its uncertainty should be reported on the downscaled basis, not the parent ensemble basis. [Copernicus Climate Change Service](https://climate.copernicus.eu/) documents the methodology for its downscaled European products.

**Reanalyses are not projections.** Reanalysis products (ERA5, JRA-55) assimilate observations into a model framework to estimate the historical state. They are not projections; they are products that provide globally complete fields for the historical period and can be used to evaluate models but cannot be extended forward without becoming projections themselves.

## What this means for the indicator framework

Models do not replace the indicator record — they extend it forward conditionally. The historical [indicator records](/en/ecology/climate-change/climate-indicators-earth-system-monitoring) are the empirical foundation; the projections are the consequence of running the models forward under specified assumptions. A projection is honest about what the underlying assumptions are; a forecast that hides the scenario is a forecast that has confused its own structure.

## Sources

1. **IPCC** — [Climate Change 2021: The Physical Science Basis (AR6 Working Group I), Chapter 4 (Future Global Climate) and Chapter 7 (The Earth's Energy Budget, Climate Feedbacks, and Climate Sensitivity)](https://www.ipcc.ch/report/ar6/wg1/). Authoritative assessment of climate-model projections and equilibrium climate sensitivity.
2. **World Climate Research Programme** — [Coupled Model Intercomparison Project (CMIP)](https://www.wcrp-climate.org/). Coordinates the multi-model ensemble framework underlying IPCC projections.
3. **Copernicus Climate Change Service** — [Climate projection products and the Climate Data Store](https://climate.copernicus.eu/). European projection and downscaling pipeline.
4. **NASA Global Climate Change** — [Climate model resources and explainers](https://climate.nasa.gov/). Public-facing model explainer materials.
5. **NOAA Climate.gov** — [Climate model explainers and uncertainty articles](https://www.climate.gov/). Public-facing companion to NOAA's projection materials.
6. **WMO** — [State of the Global Climate and projection-related products](https://wmo.int/). International annual indicator and projection context.
7. **IPCC** — [AR6 Synthesis Report](https://www.ipcc.ch/report/ar6/syr/). Integrates projection findings across working groups.
