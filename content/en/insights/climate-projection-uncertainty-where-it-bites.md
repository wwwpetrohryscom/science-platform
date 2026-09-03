---
title: Not all climate-projection uncertainty is the same kind, and only one kind answers to better models
excerpt: Scenario choice, model response and internal variability contribute to projection spread in proportions that shift with lead time and spatial scale. Only one of the three is a modelling problem, and it has not narrowed.
argument: Climate-projection uncertainty is three different quantities wearing one word. Internal variability dominates the near term at regional scale and is not a model defect; scenario choice dominates the late century and is not a scientific quantity; only model response answers to better physics, and across two model generations its spread widened rather than shrank.
category: ecology
author: climate-research-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - climate-projections
  - uncertainty
  - cmip6
  - climate-sensitivity
  - emissions-scenarios
related:
  - climate-models-projections-uncertainty
  - climate-sensitivity-explained
  - climate-model-physics-explained
  - el-nino-la-nina-enso-explained
_bodyHash: 219221d5
---

A wide spread across climate model output means something different depending on what is being projected. For summer rainfall over the Sahel in the 2040s the spread is large, and much of it is not disagreement between models at all. For the sign of global temperature change in 2090 the spread is also large, and it says nothing about whether the planet warms. Both are routinely reported as "the models disagree", and in neither case is that what the number is describing.

The IPCC's Sixth Assessment Report separates three contributions to the spread in a projection: **scenario uncertainty**, which is uncertainty about what humans emit; **model uncertainty**, which covers structural differences between models, their effective radiative forcing and their response; and **internal variability**, the chaotic year-to-year and decade-to-decade fluctuation the climate system produces with no change in forcing at all. Chapter 4 of the Working Group I report traces this partition to a line of work that includes [a 2009 analysis in the *Bulletin of the American Meteorological Society*](https://journals.ametsoc.org/view/journals/bams/90/8/2009bams2607_1.xml), and states plainly that the relative magnitude of model uncertainty and internal variability "depends on the time horizon of the projection, location, spatial and temporal aggregation, variable, and signal strength."

That sentence is the whole argument. The proportions are not a property of climate science; they are a property of the question asked.

## The mix moves with the question

For global mean surface air temperature, the three terms hand off to each other in sequence. A [study in *Earth System Dynamics*](https://esd.copernicus.org/articles/11/491/2020/) that partitioned uncertainty using multiple single-model large ensembles alongside CMIP5 and CMIP6 describes the ordering: internal variability matters initially, model uncertainty then rises and dominates the first half of the century, and scenario uncertainty "becomes dominant by about mid-century."

The assessed numbers show the same handover. Averaged over 2021–2040 and across all five SSP scenarios, AR6 assesses global surface temperature as very likely 0.4 °C to 1.0 °C above the 1995–2014 mean — one range, because the scenarios have barely separated yet. By 2081–2100 the same assessment gives 1.0 °C–1.8 °C above 1850–1900 under SSP1-1.9 and 3.3 °C–5.7 °C under SSP5-8.5. Nothing about the physics changed between those two statements. What changed is that the emissions pathway had eighty years to matter.

| Source of spread | What it is | Where it dominates | Does better modelling shrink it? |
| --- | --- | --- | --- |
| Internal variability | Unforced fluctuation of the coupled system | Near term, small regions, precipitation | No. Initialised forecasts can predict part of it; averaging cannot remove it |
| Model response | Structural differences, forcing, feedback strength | Roughly the 2020s to 2050s for global temperature | In principle. In practice the spread widened from CMIP5 to CMIP6 |
| Scenario | Which emissions pathway is followed | Late century, global scale | No. It is a question about human choices, not about the atmosphere |

## Where internal variability actually bites

At regional scale and short lead times, the forced signal in precipitation is small relative to the noise. AR6 states that the magnitude of projected near-term precipitation change, "especially on regional scales is small compared to the magnitude of internal variability," and that model uncertainty and internal variability dominate near-term precipitation while scenario uncertainty is very small. The *Earth System Dynamics* partition puts numbers on one case: for Sahel summer monsoon rainfall, internal variability contributes somewhere between about 40% and 80% of total uncertainty in the first half of the century, and the estimate itself varies across the large ensembles used.

This is the part that no amount of model improvement removes, because it is not an error. It is the system doing what it does — the [El Niño–Southern Oscillation cycle](/en/ecology/earth-systems/el-nino-la-nina-enso-explained) and its relatives redistributing heat and moisture on interannual to decadal timescales. A user who reads a wide spread in 2045 regional rainfall as evidence that the models are unreliable has misread a physical property of the climate as a defect in the software.

## The hot-model problem, and what the assessment did about it

Model uncertainty is the one term that ought to answer to better physics. The CMIP6 record is a caution against assuming it will.

Raw CMIP6 output spans a wider range than the assessed range. For 2081–2100 relative to 1995–2014, the CMIP6 5–95% range under SSP5-8.5 is 2.7 °C–5.7 °C; AR6's assessed *very likely* range for the same scenario and period is 2.4 °C–4.8 °C. The report states with high confidence that "the CMIP6 models project a wider range of GSAT change than the assessed range," and attributes roughly half of the increase relative to CMIP5 to higher climate sensitivity being more prevalent, and roughly half to higher effective radiative forcing in nominally comparable scenarios. A 2022 comment in *Nature* framed this for the wider research community as [the "hot model" problem](https://www.nature.com/articles/d41586-022-01192-2), and argued that users of CMIP6 output should weight models by evidence rather than take the raw ensemble mean.

AR6 did exactly that. Chapter 7 explains that the report broke with previous assessments by excluding direct estimates of climate sensitivity from Earth system models, on the grounds that model information already enters the other lines of evidence, that models share code and are therefore not independent samples, and that development history can quietly influence a model's sensitivity. The [assessed range for climate sensitivity](/en/ecology/climate-change/climate-sensitivity-explained) — best estimate 3 °C, likely 2.5 °C to 4 °C — comes from process understanding, the instrumental record, paleoclimate and emergent constraints combined, not from counting models. The projection ranges were then built by averaging observationally constrained CMIP6 results with an emulator driven by those assessed sensitivity ranges.

The uncomfortable finding underneath this is in the same chapter: "despite decades of model development, increases in model resolution and advances in parametrization schemes, there has been no systematic convergence in model estimates of ECS. In fact, the overall inter-model spread in ECS for CMIP6 is larger than for CMIP5." The term that is supposed to shrink has not shrunk. Some of that reflects genuine progress — the higher sensitivities trace partly to shortwave cloud feedbacks in models that were improved to match satellite observations of mixed-phase cloud, which is described from the physics side in [how clouds form and why they are hard to represent](/en/physics/climate-physics/convection-and-cloud-formation).

## Three objections that survive scrutiny

Each of the following weakens the three-way split in a different place, and none of them is a straw position.

First, internal variability is not entirely irreducible. Its *predictable* component can be extracted by initialising a model from the observed ocean state. AR6 reports that decadal forecasts initialised from recent observations produced 2019–2028 changes consistent with the assessed very likely range, and treats them as an independent line of evidence for the near term. Calling internal variability "irreducible" is shorthand; the precise claim is that it is not reduced by improving a model's physics alone.

Second, the conclusion of the analysis that introduced this decomposition cuts against the fatalistic reading. It found that for regional decadal temperature, near-term uncertainty is dominated by sources "that are potentially reducible through progress in climate science," and that model uncertainty was the larger of the two. The framing that near-term regional projection is hostage to noise is too pessimistic for temperature, even where it holds for precipitation.

Third, treating scenario uncertainty as purely political overstates the case. AR6 attributes about half the CMIP5-to-CMIP6 warming increase to higher effective radiative forcing in comparable scenarios, which is a scientific quantity, not a policy one. Scenario spread is dominated by human choices; it is not made only of them.

## What this changes for someone quoting a number

A projection figure is uninterpretable without three tags: the scenario, the period, and the spatial aggregation. Those three determine which of the uncertainties is doing the work, and therefore what the spread means. A wide spread in a 2040s regional rainfall projection is mostly the climate being noisy — an inherent property, not a defect, and a failure mode traced further in the piece on [uncertainty lost between dataset and headline](/en/insight/uncertainty-lost-between-dataset-and-headline). A wide spread in a 2090s global temperature projection is mostly a question about emissions that no observing system will answer.

Only the third case rewards scepticism about the models, and there the raw ensemble is the least reliable guide available — which is why the [explainer on projection uncertainty](/en/ecology/climate-change/climate-models-projections-uncertainty) and the underlying account of [what a model solves and what it parameterises](/en/physics/climate-physics/climate-model-physics-explained) matter more than the width of the spread. Two decades of parametrization work have not narrowed the equilibrium-sensitivity range, and the assessment that reported this responded by taking the models out of the estimate rather than by waiting for them to converge. That is the unusual move worth noticing in AR6: an uncertainty was reduced by changing what counted as evidence, not by improving the simulations.

## Sources

1. **IPCC AR6 WG1, Chapter 4** — [Future global climate: scenario-based projections and near-term information](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/). The three-way uncertainty partition, assessed GSAT ranges for 2021–2040 and 2081–2100, the raw CMIP6 ranges, and the constrained-plus-emulator assessment method.
2. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Assessed ECS and TCR ranges, the decision to exclude direct model estimates, and the statement that model sensitivity has not converged.
3. **Earth System Dynamics (European Geosciences Union)** — [Partitioning climate projection uncertainty with multiple large ensembles and CMIP5/6](https://esd.copernicus.org/articles/11/491/2020/). Time evolution of the three uncertainty terms and the Sahel precipitation figures.
4. **Bulletin of the American Meteorological Society** — [The potential to narrow uncertainty in regional climate predictions](https://journals.ametsoc.org/view/journals/bams/90/8/2009bams2607_1.xml). The original three-source decomposition and the finding that near-term regional temperature uncertainty is potentially reducible.
5. **Nature** — [Climate simulations: recognize the 'hot model' problem](https://www.nature.com/articles/d41586-022-01192-2). The case for weighting CMIP6 output by evidence rather than using the raw ensemble.
6. **Geoscientific Model Development** — [Overview of the Coupled Model Intercomparison Project Phase 6 experimental design and organization](https://gmd.copernicus.org/articles/9/1937/2016/). The design of the archive from which these ranges are drawn.
7. **IPCC AR6 WG1, Summary for Policymakers** — [Climate Change 2021: the physical science basis](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/). Headline assessed ranges as presented to policy audiences.
