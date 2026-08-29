---
title: 'Predictability across timescales: why two weeks is hard and a century is not'
excerpt: A forecast and a projection are different kinds of statement. One depends on knowing today's state precisely; the other does not, which is why the longer one can be more reliable.
type: expert
author: environmental-science-desk
publishedDate: '2026-08-29'
updatedDate: '2026-08-29'
readingTime: 9
tags:
  - predictability
  - forecasting
  - earth-system-model
  - uncertainty
related:
  - earth-system-models-explained
  - el-nino-la-nina-enso-explained
  - climate-variability-and-teleconnections
  - earth-system-science-explained
---

The most durable objection to climate projection is also the most easily answered: if the weather cannot be forecast beyond a fortnight, how can anyone say anything about 2100? The answer is that the two are not the same problem, and the distinction between them is one of the more useful ideas in [Earth system science](/en/ecology/earth-systems/earth-system-science-explained).

## Two kinds of problem

An **initial-value problem** asks where a system will be, given exactly where it is now. Its accuracy degrades as small errors in the initial state grow, and beyond some horizon the prediction is worthless. Weather forecasting is this kind of problem.

A **boundary-value problem** asks what the statistics of a system will be, given the constraints acting on it. It does not require knowing today's state at all. Projecting the climate response to a given emissions pathway is this kind of problem.

The analogy usually offered is the difference between predicting a single coin toss and predicting the fraction of heads in ten thousand tosses. The second is easier, not harder, and it does not become easier by improving your knowledge of the first coin.

## The deterministic limit

The idea that atmospheric prediction has a limit of roughly two weeks emerged from numerical experiments in the 1960s, and Lorenz's work on sensitivity to initial conditions gave it a theoretical basis: inevitable errors in the initial state, however small, eventually contaminate all scales of the flow. This finding was part of the scientific case for establishing ECMWF in the 1970s.

Two sources set the limit: **initial-condition error**, which is irreducible in practice because the atmosphere cannot be observed everywhere, and **model error**, which is reducible in principle but never eliminated. The practical horizon for detailed weather prediction is around a week, with useful large-scale information extending somewhat further.

The operational response is ensemble forecasting: rather than one run, a forecast centre runs many from slightly perturbed initial states and slightly perturbed model formulations, and reports the distribution. That converts an unanswerable deterministic question into an answerable probabilistic one — the same move made throughout this field.

## What is predictable at each horizon

Four regimes, each drawing on a different source of skill.

**Days to about two weeks.** Skill comes from the initial atmospheric state, and it decays as described above. This is the classic forecast problem.

**Weeks to seasons.** Skill comes from slowly varying boundary conditions — chiefly ocean surface temperature, soil moisture, and snow cover. The atmosphere forgets its initial state, but the ocean does not, and its influence on atmospheric statistics persists. [ENSO](/en/ecology/earth-systems/el-nino-la-nina-enso-explained) is the single largest contributor to seasonal skill worldwide.

**Years to a decade.** Decadal prediction attempts to combine an initialised ocean state with the forced response. It is the least mature of the four regimes: the signal from internal variability is comparable to the forced signal at this horizon, so both must be got right.

**Decades to a century.** Skill comes almost entirely from the forced response — the accumulated change to the energy budget from greenhouse gases and aerosols. Initial conditions have washed out entirely, which is precisely why this regime does not inherit the two-week limit.

## Why the long horizon has its own uncertainties

The boundary-value framing does not make century-scale projection easy; it relocates the difficulty. Three sources dominate, and their relative shares change with horizon and with the quantity being projected.

**Scenario uncertainty** — which emissions pathway is followed — is not a scientific uncertainty at all but a statement about future human choices. It dominates the spread in the second half of the century.

**Model-structural uncertainty** reflects genuine disagreement between models about how the system responds, and traces largely to the [feedbacks](/en/ecology/earth-systems/climate-feedback-mechanisms) whose assessed ranges are wide, clouds above all.

**Internal variability** matters most in the near term and for regional quantities, and is the reason a twenty-year regional projection can be less certain than a hundred-year global one. The modes responsible are surveyed in [teleconnections and variability](/en/ecology/earth-systems/climate-variability-and-teleconnections).

The decomposition and its evolution over time are worked through in the existing article on [climate models and projection uncertainty](/en/ecology/climate-change/climate-models-projections-uncertainty).

## The reconstruction problem

Predictability also runs backwards. Reconstructing past states from incomplete observations is its own methodological challenge, addressed by **reanalysis**: ECMWF describes it as a physically consistent blend of observations with short-range forecasts rerun using a modern forecasting model, producing what it calls the most complete picture currently possible of past weather and climate. ERA5 covers from 1940 onward, from the surface to the top of the atmosphere.

Reanalyses carry a caveat that applies to every retrospective product: uncertainty is larger where and when observations were sparse. A reanalysis field for the 1950s Southern Ocean and for the 2010s North Atlantic are not equally trustworthy, and treating a reanalysis as observation rather than as a constrained model is a common error.

## The practical upshot

Three statements are safe to make, and they are frequently run together to no one's benefit.

Detailed weather beyond about two weeks is not predictable, and no improvement in models or observations will change that in kind.

Seasonal statistics are partly predictable where a slow boundary condition exists, which is mainly the tropics and mainly through ENSO.

Long-run climate statistics under a specified emissions pathway are predictable in a different sense entirely, with uncertainty dominated by which pathway is followed and by feedback strength rather than by initial conditions.

The models used across all four regimes share a common architecture, described in [Earth system models](/en/ecology/earth-systems/earth-system-models-explained), and are evaluated against the standardised observations described in [Essential Climate Variables](/en/ecology/earth-systems/essential-climate-variables-explained).

## Sources

1. **ECMWF** — [Introduction to chaos, predictability and ensemble forecasts](https://www.ecmwf.int/en/learning/training/introduction-chaos-predictability-and-ensemble-forecasts). Chaos, the deterministic limit, and the rationale for ensembles.
2. **WMO** — [Predictability beyond the deterministic limit](https://wmo.int/media/magazine-article/predictability-beyond-deterministic-limit). Origin of the two-week limit and the transition to probabilistic and coupled prediction.
3. **ECMWF** — [Reanalysis fact sheet](https://www.ecmwf.int/en/about/media-centre/focus/2020/fact-sheet-reanalysis). What ERA5 is, how data assimilation works, and where reanalysis uncertainty is largest.
4. **IPCC AR6 WG1, Chapter 4** — [Future global climate](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/). Near-term, mid-term, and long-term projection and the changing role of internal variability.
5. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Feedback ranges underlying model-structural uncertainty.
6. **NOAA Climate Prediction Center** — [Seasonal outlooks and ENSO diagnostics](https://www.cpc.ncep.noaa.gov/). Operational seasonal prediction and its verification.
