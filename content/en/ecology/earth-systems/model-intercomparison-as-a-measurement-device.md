---
title: 'Model intercomparison as a measurement device: what a multi-model spread is for'
metaTitle: 'Model intercomparison: what a multi-model spread is for'
excerpt: CMIP exists because no single climate model can be validated against a second Earth. Running many models under identical forcing turns disagreement between them into a measurable quantity, which is a substitute for a control and not the same thing as one.
type: expert
author: earth-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - climate-models
  - cmip
  - uncertainty
  - model-evaluation
related:
  - earth-system-models-explained
  - climate-models-projections-uncertainty
  - climate-model-physics-explained
  - interlaboratory-comparison-and-consensus-values
_bodyHash: 80ffc45c
pillar: earth-system-science-explained
---

[Earth system science](/en/ecology/earth-systems/earth-system-science-explained) has a problem no laboratory discipline shares: there is one Earth and no control. A climate model cannot be validated the way an instrument is, by measuring a known standard, because the thing it predicts has happened only once and is still happening. What can be done instead is to run many independently built models under identical conditions and see where they agree.

That is the design of the Coupled Model Intercomparison Project. NOAA's Geophysical Fluid Dynamics Laboratory describes it in one line: "CMIP is an international effort to improve climate models by comparing multiple model simulations to observations and to each other."

## The scale of the exercise

The sixth phase is large enough that its logistics are themselves a research subject. A 2024 study in *Geoscientific Model Development* on the computational cost of the exercise records that "a total of 21 model intercomparison projects (MIPs) were endorsed in its sixth phase (CMIP6), which included 190 different experiments that were used to simulate 40 000 years and produced around 40 PB of data in total."

Forty petabytes is not a side effect. An intercomparison is only useful if the outputs are comparable, which means a common variable list, a common output format, and common forcing datasets — and that standardisation is what converts a collection of independent modelling efforts into a single instrument.

The count of endorsed MIPs is itself worth a footnote, and it illustrates the ordinary difficulty of citing a moving programme: the GFDL page refers to "a suite of 23 endorsed Model Intercomparison Projects" for CMIP6, while the 2024 paper states 21. Both are describing the same phase. Endorsement lists change over the life of a project, and a figure of this kind carries an implicit date whether or not one is printed.

## What the spread measures, and what it does not

The multi-model range is the most quoted output and the most misread.

**It is not a probability distribution.** Models are not independent samples from a population. They share parameterisation schemes, components, code lineages and, in some cases, tuning targets. Treating the ensemble as though each member were an independent draw overstates the information in the spread.

**It is not a complete uncertainty budget.** Three sources contribute to the range of a projection — the emissions pathway assumed, the models' disagreement about the response, and internal variability — and the ensemble spread captures only the second. Which dominates depends on the lead time and the variable, and reporting the spread alone conceals that.

**It is not evidence about the mean.** The multi-model mean often verifies better against observations than most individual members, which is a statistical consequence of averaging errors rather than a sign that the mean is a better physical model. It is a useful summary, not a superior simulation.

What the spread does measure is the sensitivity of a conclusion to modelling choices that are currently defensible. Where models agree despite different schemes, the result is robust to those choices. Where they disagree, the disagreement localises what is not yet known — and that is a genuine measurement, of the field rather than of the atmosphere.

## The relationship to observations

Intercomparison does not replace evaluation against data. Models are checked against the [observed indicator record](/en/ecology/climate-change/climate-indicators-earth-system-monitoring) before their projections are weighted in assessment, and that step is where a model can be found wrong rather than merely different.

The two activities answer different questions. Comparison with observations asks whether a model reproduces what happened. Comparison between models asks how much a conclusion depends on which model produced it. A result that survives both is on firmer ground than one that survives either.

## Why this generalises

The same structure appears wherever a true value is unavailable and independence has to substitute for a standard. Analytical chemistry uses interlaboratory comparison to establish [consensus values](/en/physics/mechanics-waves/interlaboratory-comparison-and-consensus-values) when no certified material exists; genome benchmarking integrates multiple sequencing technologies whose errors are uncorrelated. In each case the logic is the same: agreement among methods that fail differently is evidence, and agreement among methods that share a flaw is not.

The weakness is also the same. Independence is assumed and rarely measured, and where it fails the ensemble is narrower than it looks. That is a live concern for [Earth system models](/en/ecology/earth-systems/earth-system-models-explained), which share more code and more heritage than the count of participating groups suggests.

## Sources

1. **NOAA GFDL** — [CMIP](https://www.gfdl.noaa.gov/cmip/). The purpose of intercomparison and the count of endorsed MIPs for CMIP6.
2. **Geoscientific Model Development** — [The computational and energy cost of simulation and storage for climate science: lessons from CMIP6](https://gmd.copernicus.org/articles/17/3081/2024/). The MIP, experiment, simulated-year and data-volume totals.
3. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). The certified-material route that intercomparison substitutes for when no standard exists.
