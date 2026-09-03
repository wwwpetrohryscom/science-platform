---
title: 'Inside a climate model: what is solved, what is parameterised, and what tuning can reach'
excerpt: A climate model is two pieces of software bolted together — a solver for equations that are known exactly, and a library of approximations for everything smaller than a grid cell. Nearly every contested result lives in the second half.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - climate-modelling
  - parameterisation
  - model-tuning
  - cmip6
related:
  - atmospheric-physics-explained
  - convection-and-cloud-formation
  - climate-models-projections-uncertainty
  - earth-system-models-explained
  - climate-sensitivity-explained
pillar: atmospheric-physics-explained
---

Ask what a climate model is made of and the honest answer has two halves that behave very differently. One half integrates equations that nobody disputes — Navier–Stokes for fluid motion, Clausius–Clapeyron for the vapour a given temperature can hold, conservation of mass and energy as constraints on everything else. IPCC AR6 describes Earth system models exactly this way, as mathematical formulations of natural laws evaluated numerically on three-dimensional discrete grids. The other half is a collection of approximations for every process that happens on a scale smaller than one of those grid cells. The first half is settled physics of the sort set out in the wider account of [atmospheric physics](/en/physics/climate-physics/atmospheric-physics-explained). The second is where the disagreements are.

## The grid decides what the model can even see

AR6 puts the dividing line plainly: the spatial and temporal resolution of the grid determines which processes need to be parameterised and which can be explicitly resolved. That sentence is the whole design problem. A cyclone spanning a thousand kilometres is a shape the grid can hold. A convective updraught a kilometre across, in a model whose cells are a hundred kilometres wide, is invisible to the equations and has to be represented by a rule that says what such updraughts collectively do to the cell they are inside.

Resolution has improved. Horizontal grids and vertical level counts in CMIP6 are generally finer than in CMIP5, and CMIP6 included a dedicated experiment, HighResMIP, specifically to test what higher resolution buys — atmospheric grids at roughly 50 km, 25 km and even 10 km, against the coarser standard configurations. Finer grids improve the simulated atmospheric and ocean circulation and the global hydrological cycle. They do not, however, come free, and the reason is arithmetic rather than engineering.

## The timestep is not a free choice

An explicit numerical scheme is stable only when the timestep is short enough that no signal travels more than one grid cell during it — the Courant–Friedrichs–Lewy condition. Refine the grid and the timestep has to shorten in proportion.

The consequence compounds. Halving the horizontal spacing in both directions quadruples the number of columns, and the shorter timestep then doubles the number of steps needed to simulate the same century. Eightfold more work is the floor, and refining the vertical grid to match pushes it higher. This is why AR6 records that only a limited number of simulations per model are available from the high-resolution experiments: a modelling centre can afford resolution or ensemble size, not both. Every choice about which to buy is a choice about which uncertainty to sample.

## What has to be approximated, and the worst case

AR6 Chapter 8 states the situation for the process that matters most: current-generation global models cannot represent small-scale cloud processes, so both shallow and deep convection are determined by sub-grid parameterisations. Those schemes can be tested against field campaigns, but a central quantity — convective entrainment, how much surrounding air a rising plume mixes in — remains difficult to estimate in a form valid for shallow and deep convection at once. Comparisons between regional projections run with explicit convection and with parameterised convection expose the limitations of the parameterised version for assessing climate change.

| Process | How a CMIP-class global model treats it | What that costs |
| --- | --- | --- |
| Large-scale winds, pressure, temperature advection | Integrated directly on the grid | Little; these are what the grid was built to carry |
| Shallow and deep moist convection | Sub-grid parameterisation | Entrainment is poorly constrained; explicit-convection runs disagree with parameterised ones |
| Cloud microphysics and cloud amount | Sub-grid parameterisation | The dominant contribution to inter-model spread in sensitivity |
| Convective initiation at the sub-grid scale | Not represented; requires convection-permitting resolution | Timing and location of convective rainfall are not resolved |

The bottom two rows are the same physical problem seen from two directions, and they explain a great deal about where model disagreement concentrates. The processes that set how much sunlight is reflected and how much heat escapes are precisely the ones a hundred-kilometre grid cannot hold, which is why the [physics of cloud formation and cloud feedback](/en/physics/climate-physics/convection-and-cloud-formation) is where the widest uncertainty in the whole subject sits.

## Tuning: the targets are published, and they are not the answers

Every parameterisation contains free parameters. Their acceptable ranges are set by numerical consistency, physical constraints such as energy conservation, and observations of the individual process; within those ranges, developers choose values so that the assembled model reproduces a set of declared **tuning targets**. AR6 groups the targets into three kinds — mean climate, regional phenomena, and historical trends — and reports that for CMIP6 the single most important global target is the net top-of-atmosphere heat flux and its radiative components. Others include the split of top-of-atmosphere fluxes into clear-sky and cloud contributions, global mean air and ocean temperature, sea-ice extent and volume, glacier mass balance, and the root-mean-square error of precipitation. Regional targets can include the Atlantic overturning circulation, Southern Ocean circulation, ocean basin temperature profiles, and Northern Hemisphere stationary waves.

The practice was for a long time poorly documented, and a 2017 review in the *Bulletin of the American Meteorological Society*, [The art and science of climate model tuning](https://journals.ametsoc.org/view/journals/bams/98/3/bams-d-15-00135.1.xml), is what pushed the field towards describing it. CMIP6 groups now publish their tuning at three levels, for the assembled model and for each component.

What that documentation makes checkable is the question everyone actually asks. Of 29 CMIP6 modelling groups, 23 report that they do not tune to observed historical trends, and 25 report that they do not tune to equilibrium climate sensitivity. For the large majority of models, in other words, sensitivity is an emergent property of the parameter choices rather than a chosen output — which is the claim that matters when a model's warming is compared against the record.

One consequence of tuning cuts the other way, and AR6 flags it. Earth system models agree well with the observed global mean top-of-atmosphere fluxes from the CERES satellite record. Since some of them calibrate those fluxes to CERES in the first place, the agreement is not by itself evidence of accuracy. Matching a tuning target is not a test; the tests are the quantities nobody tuned to, and the regional flux patterns, where models still differ substantially, are a better place to look.

## Ensembles are not one thing

CMIP6 is organised as a required core — the DECK experiments plus a historical simulation from 1850 to the present — surrounded by 21 endorsed model intercomparison projects that groups may join according to their interests. Participation has grown steadily: 11 centres in the first CMIP, 19 in CMIP5, 28 in CMIP6.

Two kinds of ensemble come out of that structure, and they answer different questions. A **multi-model ensemble** runs many different models under the same forcing and samples the consequences of different structural choices. A **single-model initial-condition large ensemble** runs one model in a fixed configuration from many slightly different starting states; because the system is chaotic, the members diverge, and their spread is an estimate of internal variability alone. Some such experiments perturb initial conditions minutely; others start from well-separated ocean states to sample the slower circulation modes.

Which spread dominates depends on the variable and the lead time. For global mean surface temperature, AR6 finds the internal-variability contribution small and the total dominated by scenario and model-response uncertainty, with scenario becoming dominant in the long term. The overlap between scenarios in the meantime is larger than most summaries suggest: for 2041–2060, the slowest-warming simulation under the high-emissions SSP5-8.5 pathway produces less warming than the fastest-warming simulation under the low-emissions SSP1-1.9. The full decomposition, and how the shares shift by indicator, is worked through in [where projection uncertainty comes from](/en/ecology/climate-change/climate-models-projections-uncertainty).

## Why the ensemble spread is not a probability distribution

The temptation to read the CMIP range as a confidence interval is strong and AR6 resists it, for reasons that are structural rather than statistical. Modelling groups share code components, and in some cases whole sub-models; the ensemble is a set of families with interdependencies rather than a set of independent attempts, so common biases cannot be ruled out. AR6 departed from previous IPCC reports by leaving sensitivity estimates taken directly from Earth system models out of its assessed ranges altogether, on the grounds that model information already enters the other lines of evidence and would otherwise be counted twice.

Two further observations sit uncomfortably with the convergence narrative. Despite decades of development, rising resolution and improved schemes, AR6 records no systematic convergence in modelled equilibrium climate sensitivity — the CMIP6 inter-model spread is wider than CMIP5's, not narrower, with higher mean sensitivity traced in some models to revised extratropical cloud feedbacks. And the published ensemble is a filtered sample: models that perform poorly during development may be re-tuned, reconfigured or discarded, and never appear in the literature at all.

None of that makes the ensemble uninformative. It makes it a sample of what a community of partly related models produces under stated protocols, which is a different object from a random draw from the space of possible climates. Reading it as the latter is the most common mistake made with model output — a distinction developed further in the account of [what an Earth system model adds](/en/ecology/earth-systems/earth-system-models-explained) and in the assessment of [climate sensitivity from multiple lines of evidence](/en/ecology/climate-change/climate-sensitivity-explained).

## Sources

1. **IPCC AR6 WG1, Chapter 1** — [Framing, context and methods](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/). Model formulation and grids, HighResMIP resolutions, tuning targets and the survey of what CMIP6 groups do and do not tune to, and ensemble types.
2. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Calibration of model fluxes to CERES, the exclusion of model sensitivity from assessed ranges, and the absence of convergence in modelled ECS.
3. **IPCC AR6 WG1, Chapter 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Why shallow and deep convection are parameterised, and what explicit-convection comparisons reveal.
4. **Geoscientific Model Development** — [Overview of the CMIP6 experimental design and organization](https://gmd.copernicus.org/articles/9/1937/2016/). The DECK, the historical simulation, and the 21 endorsed MIPs.
5. **Geoscientific Model Development** — [High Resolution Model Intercomparison Project (HighResMIP v1.0) for CMIP6](https://gmd.copernicus.org/articles/9/4185/2016/). Protocol and resolution tiers for the high-resolution experiments.
6. **Bulletin of the American Meteorological Society** — [The art and science of climate model tuning](https://journals.ametsoc.org/view/journals/bams/98/3/bams-d-15-00135.1.xml). The survey that prompted systematic documentation of tuning practice.
