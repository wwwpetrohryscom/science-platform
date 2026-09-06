---
title: 'Uncertainty propagation in practice: how components combine'
excerpt: Absolute uncertainties add for sums, relative ones for products, and neither rule survives contact with correlated inputs. This is the arithmetic that carries an uncertainty from the inputs of a calculation to its result, and where it quietly stops working.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 10
tags:
  - metrology
  - measurement-uncertainty
  - uncertainty
  - statistics
  - measurement-methods
related:
  - measurement-uncertainty-explained
  - calibration-and-traceability
  - interlaboratory-comparison-and-consensus-values
  - soil-carbon-measurement-and-uncertainty
pillar: classical-mechanics-explained
_bodyHash: d85ee457
---

Very little that gets published is a bare measurement. A carbon flux is a difference of larger terms, a rate is a quotient, a stock is an area times a density. [The stated ± on a single result](/en/physics/mechanics-waves/measurement-uncertainty-explained) is only the starting material; what decides whether the final figure means anything is the arithmetic carrying those inputs through the calculation. NIST describes that arithmetic precisely: the law of propagation of uncertainty is "based on a first-order Taylor series approximation of the measurement equation". Every word of that is also a restriction. The framework this sits inside is set out in the overview of [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained).

## Sums take absolute uncertainties, products take relative ones

The NIST/SEMATECH engineering statistics handbook reproduces the standard formulas, from a 1966 paper by H. Ku, for functions of two measured variables. For a linear combination *Y* = *AX̄* + *BZ̄* the result's standard deviation is built from *A*²*s*ₓ² + *B*²*s*_z², plus a covariance term. For a product *Y* = *X̄Z̄* it is the product itself times the square root of *s*ₓ²/*X̄*² + *s*_z²/*Z̄*², plus a covariance term — the same shape, except that each variance has been divided by the square of its own mean.

That is the whole distinction: sums and differences combine uncertainties in the units of the quantity, products and quotients combine them as fractions. Farrance and Frenkel state the first case plainly in *The Clinical Biochemist Reviews*: "For results derived from a functional relationship which contains only terms related by sums and/or differences, the variance of the measurand is obtained by adding the variances of the contributing inputs."

Powers follow from the product rule. The handbook gives *Y* = *c*(*X̄*)^*a*(*Z̄*)^*b*, whose standard deviation contains *a*²*s*ₓ²/*X̄*² and *b*²*s*_z²/*Z̄*²: the exponent multiplies the relative standard deviation of its base. A length known to one per cent yields a volume known to three; a square root halves it.

So the same input can be negligible in one calculation and decisive in another. Subtract two nearly equal quantities and the absolute uncertainties survive intact while the result collapses: two values near 100, each known to about one unit, differ by 2 with a combined uncertainty near 1.4, and a one per cent measurement has produced a seventy per cent result. Differencing is where the quietly catastrophic budgets are built, which is why [soil carbon stock change](/en/ecology/soils/soil-carbon-measurement-and-uncertainty) is far harder to establish than soil carbon stock.

## Quadrature is not democratic

Because variances add rather than standard deviations, quadrature is heavily weighted towards the largest component: one a third the size of the dominant term raises the combined value by about five per cent, one a tenth the size by half a per cent.

The useful implication is that effort belongs on the largest term. The uncomfortable one is that the same insensitivity hides errors: a dominant term underestimated by a factor of two shifts the total by nearly a factor of two with nothing in the arithmetic to signal it, and a dominant term never entered at all leaves a budget that is internally consistent, arithmetically correct and wrong. Quadrature does not detect omissions; it ranks what it was given.

## The covariance term, and the sign that catches people out

NIST's statement of the combination rule is explicit that the covariance term drops out only under an assumption: when the input estimates are uncorrelated, "the second term vanishes". The handbook is blunter about practice — "Covariance terms can be difficult to estimate if measurements are not made in pairs. Sometimes, these terms are omitted from the formula" — and then sets conditions. Independent measurements give zero covariance, but "generally, reported values of test items from calibration designs have non-zero covariances that must be taken into account if *Y* is a summation such as the mass of two weights, or the length of two gage blocks end-to-end", and such terms belong in the computation "only if they have been estimated from sufficient data".

The detail most often missed is the sign. In the handbook's formulas the covariance enters a product with a plus and a quotient with a minus: positive correlation inflates the uncertainty of a product and deflates that of a ratio. This is why a ratio of two quantities measured on the same instrument against the same reference can be determined far better than either quantity separately, and why omitting the covariance term is conservative for a sum or a product and anti-conservative for a ratio. Which mistake an omission produces depends on the algebra, not the physics.

At scale this is not a correction but the whole story. Merchant and colleagues, reviewing satellite climate data records for *Earth System Science Data*, note that "different errors may be correlated across a wide range of timescales and space scales", so that "error effects that contribute negligibly to the total uncertainty in a single-satellite measurement can be the dominant sources of uncertainty in a CDR on the large space scales and long timescales". Averaging suppresses whatever is independent and leaves whatever is shared: a retrieval that is excellent per pixel can yield a decadal mean whose uncertainty is set almost entirely by a calibration offset invisible in any single scene.

## Type A and Type B are routes of evaluation, not grades of confidence

The GUM's two categories are defined by method alone. NIST gives Type A as a "method of evaluation of uncertainty by the statistical analysis of series of observations" and Type B as evaluation "by means other than the statistical analysis of series of observations", drawing on "manufacturer's specifications, data provided in calibration and other reports, and uncertainties assigned to reference data taken from handbooks". Where only limits are known, NIST's guidance is to model the quantity by a uniform distribution and take the standard uncertainty as the half-width divided by the square root of 3.

The classification then stops mattering. Once each component is a standard uncertainty, propagation treats them identically and nothing downstream knows which was which. Treating repeatability as the real uncertainty and everything else as a footnote has no basis in the framework, and it favours the components cheapest to measure over the ones that are largest. Careful budgets say so: the *Global Carbon Budget 2025* states that its uncertainties "combine statistical analysis of the underlying data, assessments of uncertainties in the generation of the datasets, and expert judgement of the likelihood of results lying outside this range" — three ingredients, one a Type A evaluation and two not.

## Where the first-order law stops working

Linearisation fails where a model curves sharply over the range its inputs occupy. Farrance and Frenkel put it directly: "the standard GUM procedure relies on a simple linear approximation for the propagation of uncertainties and may lead to errors" under severe non-linearity, whereas Monte Carlo simulation "automatically takes into account any nonlinearities in the functional relationship". Their worked serum anion-gap example, a linear model, gives a combined standard uncertainty of 2.267 mmol/L by propagation and 2.268 mmol/L by simulation, reported as 14.5 ± 4.5 mmol/L over a 95.4 per cent coverage interval. Agreement that close is a property of that model, not evidence that the two methods generally converge.

The Joint Committee for Guides in Metrology has extended the framework accordingly: JCGM 101:2008 propagates whole distributions by Monte Carlo, JCGM 102:2011 handles any number of output quantities, and JCGM 100:2008/Amd.1:2026 is titled "AMENDMENT 1: Nonlinearity in measurement models". Simulation carries its own cost: Farrance and Frenkel note that Supplement 1 "recommends at least 200,000 trials for a 95% coverage interval which is reliable to one or two significant decimal digits", against the 10,000 that sufficed for their linear cases.

## Digits are a claim, and the claim is about the uncertainty

Section 7.2.6 of the GUM, quoted by Farrance and Frenkel, states that the values of an estimate and its uncertainty "should not be given with an excessive number of digits", and that "it usually suffices to quote *u*(*y*) and *U* … to at most two significant digits". Their surrounding argument is the operative one: "The number of significant figures used to report a quantitative result conveys not only its value but also connotes the confidence which may be attached to that result."

Propagation is what makes this structural rather than stylistic. Divide one value carrying a one per cent uncertainty by another carrying one per cent, and the fourth significant digit of the quotient is arithmetic residue: the calculation produces it, the measurement never contained it. The failure is rarely in the original report, where the interval is present and the rounding disciplined, but downstream, where the interval is dropped and the digits keep travelling — the transfer examined in [uncertainty lost between dataset and headline](/en/insight/uncertainty-lost-between-dataset-and-headline).

## A budget that shows its working

The *Global Carbon Budget 2025* reports all uncertainties as ± 1 standard deviation, "representing a likelihood of 68 % that the true value will be within the provided range if the errors have a gaussian distribution, and no bias is assumed". For 2024 it gives fossil CO₂ emissions of 10.3 ± 0.5 GtC yr⁻¹ and land-use change emissions of 1.3 ± 0.7 GtC yr⁻¹, and their sum as 11.6 ± 0.9 GtC yr⁻¹. The central values add; the uncertainties do not. In quadrature the two give about 0.86, which rounds to the stated 0.9, where adding them directly would have given 1.2. The same document combines the two components of the atmospheric growth-rate uncertainty in quadrature and estimates others by simulation, using 100 bootstrapped alternative station networks for the measurement-network term and a Monte Carlo approach with 20 000 iterations for the oxygen-based sink estimate.

The residual then does work no propagation formula can. For 2024 the ocean sink is 3.4 ± 0.4 GtC yr⁻¹ and the land sink 1.9 ± 1.1 GtC yr⁻¹ — the land term's uncertainty exceeds every other component's and dominates any quadrature that includes it — leaving a budget imbalance of −1.7 GtC yr⁻¹, which the authors read as "suggesting that the total sink or G_ATM is strongly overestimated in 2024". A mismatch larger than the largest stated component uncertainty is a statement about the budget rather than about the year, the diagnostic that also governs [interlaboratory comparison](/en/physics/mechanics-waves/interlaboratory-comparison-and-consensus-values).

That is the limit of the apparatus. Propagation transports the uncertainty that was entered, and nothing else. The handbook's list of what goes wrong is a list of absences — "unsuspected covariances", "disturbances that affect the reported value and not the elementary measurements (usually a result of mis-specification of the model)", "mistakes in propagating the error through the defining formulas" — and every defence lies outside the arithmetic: replicating the whole measurement rather than its parts, which the handbook credits with "proper treatment of unsuspected sources of error", and comparing against a route that shares no assumptions, which is what makes [traceability](/en/physics/mechanics-waves/calibration-and-traceability) worth its cost. The algebra is the easy half, and the half that says nothing about what was left out.

## Sources

1. **NIST** — [Combining uncertainty components](https://physics.nist.gov/cuu/Uncertainty/combination.html). The law of propagation of uncertainty as a first-order Taylor approximation, sensitivity coefficients, and the covariance term that vanishes only for uncorrelated inputs.
2. **NIST/SEMATECH e-Handbook of Statistical Methods** — [Propagation of error considerations](https://www.itl.nist.gov/div898/handbook/mpc/section5/mpc55.htm). The general propagation formula, guidance on when covariance terms may be omitted, calibration designs as a source of non-zero covariance, and the listed disadvantages of the propagation approach.
3. **NIST/SEMATECH e-Handbook of Statistical Methods** — [Formulas for functions of two variables](https://www.itl.nist.gov/div898/handbook/mpc/section5/mpc552.htm). Ku's formulas for linear combinations, products, quotients and power functions, including the sign the covariance term carries in each.
4. **NIST** — [Basic definitions of uncertainty](https://physics.nist.gov/cuu/Uncertainty/basic.html). Standard uncertainty, and the definitions of Type A and Type B evaluation.
5. **NIST** — [Type B evaluation of standard uncertainty](https://physics.nist.gov/cuu/Uncertainty/typeb.html). Admissible sources of information for a Type B component, and the rectangular-distribution rule dividing a half-width by the square root of 3.
6. **BIPM / JCGM** — [JCGM publications](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, Supplement 1 (JCGM 101:2008), Supplement 2 (JCGM 102:2011), and Amendment 1:2026 on nonlinearity in measurement models.
7. **The Clinical Biochemist Reviews** — [Uncertainty in Measurement: A Review of Monte Carlo Simulation Using Microsoft Excel](https://pmc.ncbi.nlm.nih.gov/articles/PMC3961998/). Farrance and Frenkel (2014) on the sum rule, correlated inputs, the linear approximation under non-linearity, trial counts, the worked anion-gap example, and GUM section 7.2.6 on significant digits.
8. **Earth System Science Data** — [Global Carbon Budget 2025](https://essd.copernicus.org/articles/18/3211/2026/). Component estimates and ± 1σ uncertainties for 2024, quadrature combination, Monte Carlo and bootstrap evaluations, and the budget imbalance.
9. **Earth System Science Data** — [Uncertainty information in climate data records from Earth observation](https://essd.copernicus.org/articles/9/511/2017/). Merchant et al. (2017) on error correlation across space and time scales, and on effects negligible per measurement but dominant in an averaged record.
