---
title: 'Ionising radiation and risk: what the epidemiology can and cannot settle'
excerpt: Above a few hundred millisieverts the health effects of ionising radiation are directly observed. Below that, estimates come from extrapolation — and the shape of that extrapolation is a live scientific argument with real consequences.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - radiation-protection
  - epidemiology
  - linear-no-threshold
  - radon
  - dose-limits
related:
  - radioactivity-and-radiation-units
  - atomic-and-nuclear-physics-explained
  - nuclear-fission-and-reactors
  - measurement-uncertainty-explained
pillar: atomic-and-nuclear-physics-explained
_bodyHash: 6055357f
---

Radiation biology splits its effects into two categories that behave nothing alike, and most public confusion comes from applying the logic of one to the other.

**Tissue reactions**, historically called deterministic effects, require enough cells in an organ to be killed or disabled that the organ's function measurably degrades. They have thresholds, they appear within hours to weeks, and above the threshold their severity increases with the amount absorbed. The World Health Organization puts the threshold for acute radiation syndrome at about 1 Sv; the US EPA describes it as requiring more than 0.75 gray delivered "in a short time span (minutes to hours)". Below the threshold the effect is not seen.

**Stochastic effects** — principally cancer, and in principle heritable effects — work the other way. The severity of a cancer does not depend on the exposure that initiated it. What is assumed to scale with exposure is the probability. No threshold has been observed, which is not the same as demonstrating that none exists, and the difference between those two statements is where the entire low-dose argument lives.

Both categories begin with the same physical event: an emission carrying enough energy to strip an electron from a molecule. That energy scale — megaelectronvolts per decay, against the few electronvolts holding a chemical bond together — is fixed by [the binding energy of the nucleus that emitted it](/en/physics/matter-radiation/atomic-and-nuclear-physics-explained). What diverges is everything downstream of the first ionisation.

## The two cohorts the estimates rest on

Almost every quantitative risk coefficient in radiological protection traces back to a small number of large cohorts, and two of them dominate.

The Life Span Study of Japanese atomic-bomb survivors is the anchor. Its most recent solid-cancer incidence analysis followed 105,444 people from 1958 to 2009 — 80,205 survivors plus 25,239 residents not in either city at the time — accumulating 3,079,484 person-years and identifying 22,538 first primary solid cancers, of which 992 were, in the study’s own wording, "associated with radiation exposure".

The International Nuclear Workers Study approaches the problem from the opposite end of the dose scale. Its 2023 analysis covered 309,932 monitored workers in France, the United Kingdom and the United States, with an average cumulative colon dose of 20.9 mGy among workers whose estimated dose exceeded zero, accumulated slowly over working lifetimes, 10.7 million person-years of follow-up, and 28,089 solid-cancer deaths.

| | Life Span Study | INWORKS |
| --- | --- | --- |
| Population | 105,444 atomic-bomb survivors and controls | 309,932 monitored nuclear workers |
| Exposure | Single acute exposure | Protracted occupational exposure |
| Typical magnitude | Wide range, extending above 1 Gy | Mean cumulative colon dose 20.9 mGy, among workers with a dose above zero |
| Endpoint reported | 22,538 incident solid cancers | 28,089 solid-cancer deaths |
| Excess relative risk | 0.64 per Gy for women at attained age 70 (95% CI 0.52–0.77) | 0.52 per Gy (90% CI 0.27–0.77) |

Neither excess relative risk is a single number that travels: in the atomic-bomb analysis it varies strongly with sex, with age at exposure and with attained age, and the figure in the table is quoted for one reference combination. With that caveat, the two studies agree better than they have any right to, given that one describes a flash of mixed gamma and neutron exposure and the other decades of low-rate external exposure. That agreement is the strongest single argument that the protection system is not badly wrong. Where credible datasets built on different designs converge, the convergence carries more weight than either result alone — the general point made in the note on [what it means when two good datasets disagree](/en/insight/why-two-credible-datasets-disagree).

## Where extrapolation begins, and what is actually disputed

The **[linear no-threshold model](/en/glossary/linear-no-threshold)** assumes that stochastic risk is proportional to the amount absorbed all the way down to zero, with no safe floor. The EPA states the operational form directly: "cutting the dose in half cuts the risk in half."

It is worth being precise about what is contested. The model's use as a regulatory tool is close to universal, because it is simple, conservative, and additive across sources. Whether it is *true* at low levels is a different question, and the evidence there is genuinely mixed.

The atomic-bomb data support linearity for women with "no evidence of a threshold". For men the same analysis found significant upward curvature across the full range and preferred a linear-quadratic fit, which yields an excess relative risk of 0.20 at 1 Gy but only 0.010 at 0.1 Gy — with a confidence interval running from −0.0003 to 0.021, that is to say, an interval that includes zero. A linear extrapolation from the high-exposure region would overstate the low end for that group.

The occupational data point the other way. INWORKS reported "some evidence" of "a steeper slope for the dose-response association at lower doses than over the full dose range", with the association "approximately doubled" when the analysis was restricted to 0–100 mGy.

So one major cohort suggests the linear model may be conservative for part of its population, and the other suggests it may be insufficiently conservative at exactly the range that matters most for occupational and public protection. Neither result is a refutation of the other; they are different exposure patterns, different endpoints — incidence against mortality — and different dosimetry. Available data are too limited to settle the shape of the relationship below roughly 100 mSv, and that is the honest summary.

## Dose limits are administrative ceilings, not biological ones

The protection system does not wait for the argument to resolve. The recommendations in ICRP Publication 103, which national regulators broadly adopt, set an occupational limit of "20 mSv per year averaged over 5 years, with no more than 50 mSv in any one year" and a public limit of "1 mSv per year", with a separate skin limit of 500 mSv averaged over 1 cm² for workers.

These are administrative ceilings derived from a risk model, not biological thresholds. Nothing changes at 20 mSv in a cell. The numbers exist so that exposures can be kept, in the system's own language, as low as reasonably achievable while remaining bounded, and they are set well below the range where effects have been observed directly.

They are also, importantly, expressed in effective dose — the reference-person quantity whose limits are set out alongside [the unit chain from becquerel to sievert](/en/physics/matter-radiation/radioactivity-and-radiation-units). A published review in *Health Physics* is unambiguous that effective dose "should never be used to estimate future cancer risk from specific sources of radiation exposure" and "is not recommended for epidemiological evaluations". The quantity used to write the limits is not the quantity that can tell an individual what happened to them.

For scale, EPA offers a benchmark that is often more useful than a percentage: "About 99 percent of individuals would not get cancer as a result of a one-time uniform whole-body exposure of 100 millisieverts (10 rem) or lower." UNSCEAR's own banding places anything up to 10 mSv in the range with "no direct evidence of human health effects", and reserves radiation sickness for the 1–10 Sv band.

## Radon, which nobody chose

The largest single natural contribution is a gas that seeps from the ground into buildings. WHO estimates that radon causes "between 3% to 14% of all lung cancers in a country, depending on the national average radon level and smoking prevalence", with lung-cancer risk rising "by about 16% per 100 Bq/m3 increase in long time average radon concentration". Indoor concentrations vary "from 10 Bq/m3 to more than 10 000 Bq/m3" against an outdoor background of 5–15 Bq/m3, and WHO recommends a national reference level of 100 Bq/m³, not to exceed 300 Bq/m³ where that is unachievable.

Two features make radon the interesting case. Its risk estimate comes largely from residential and miner studies rather than from the acute-exposure cohorts, so it is partly independent evidence for a low-level effect. And it interacts strongly with smoking, which means a population-average figure conceals a wide spread across individuals — the same averaging problem that makes effective dose a poor personal predictor.

## Why the low-dose question stays open

The obstacle is statistical rather than conceptual. Detecting a small proportional increase against a lifetime cancer incidence that is already common in the general population requires cohorts far larger than those now assembled, followed for longer, with individual dosimetry good enough that measurement error does not swamp the signal. Retrospective dose reconstruction is itself a substantial source of uncertainty, and errors in an exposure variable tend to flatten an apparent relationship rather than steepen it.

Meanwhile the practical consequences of the unresolved question are real: collective-dose arithmetic, which multiplies a tiny individual figure by a very large population, produces casualty estimates that depend entirely on whether the linear assumption holds at the bottom of its range. That is a case study in how a modelling choice made for administrative convenience travels into headline numbers without its caveats, which is the pattern examined in [how uncertainty gets lost between a dataset and a headline](/en/insight/uncertainty-lost-between-dataset-and-headline). Similar questions attach to routine emissions and waste from [the fission fuel cycle](/en/physics/matter-radiation/nuclear-fission-and-reactors), where the exposures involved sit far below the range any epidemiological study can resolve.

## Sources

1. **Radiation Research** — [Solid cancer incidence among the Life Span Study of atomic bomb survivors: 1958–2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC10320812/). Cohort size, follow-up, case counts and the sex-specific dose-response models.
2. **BMJ** — [Cancer mortality after low dose exposure to ionising radiation in workers in France, the United Kingdom, and the United States (INWORKS)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10427997/). Occupational cohort size, mean cumulative dose and excess relative risk.
3. **Radiation Physics and Chemistry** — [A comprehensive review of dose limits, triage systems and measurement tools](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170981/). Tabulated ICRP Publication 103 occupational, public and skin dose limits.
4. **World Health Organization** — [Ionizing radiation and health effects](https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects). Acute radiation syndrome threshold and medical exposure share.
5. **World Health Organization** — [Radon and health](https://www.who.int/news-room/fact-sheets/detail/radon-and-health). Attributable lung-cancer fraction, risk per 100 Bq/m³, and reference levels.
6. **US EPA** — [Radiation health effects](https://www.epa.gov/radiation/radiation-health-effects). The linear no-threshold model as a regulatory basis, and the 100 mSv benchmark.
7. **UNSCEAR** — [Radiation FAQ](https://www.unscear.org/unscear/en/areas-of-work/radiation-faq.html). Indicative dose bands and the effects associated with each.
8. **Health Physics** — [Appropriate use of effective dose in radiation protection and risk assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC5878049/). Constraints on interpreting effective dose as individual risk.
