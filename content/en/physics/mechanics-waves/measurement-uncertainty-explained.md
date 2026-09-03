---
title: 'Measurement uncertainty: what a stated ± actually claims'
excerpt: A number without an uncertainty is not a measurement result. This is what the international guidance asks of an interval, how the components are evaluated and combined, and the places where an uncertainty budget quietly fails.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - metrology
  - uncertainty
  - calibration
  - si-units
  - measurement-methods
related:
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - sound-and-acoustics-explained
  - global-temperature-records-explained
pillar: classical-mechanics-explained
_bodyHash: e4c13f78
---

Write down 9.81 m/s² and you have asserted almost nothing. Write down 9.81 ± 0.02 m/s² and you have made a testable claim: about how the value was obtained, about what would happen if the measurement were repeated, and about the interval within which a further determination would be expected to fall. The second number is not a disclaimer attached to the first. It is the part that makes the first one usable, and it is what allows two laboratories to say whether they agree.

The international framework for constructing that second number is the *Guide to the expression of uncertainty in measurement*, issued as JCGM 100 by the Joint Committee for Guides in Metrology and hosted by the BIPM. It is not a statistical technique so much as a discipline for accounting, and it applies to any quantitative measurement — including the ones underlying [the mechanics](/en/physics/mechanics-waves/classical-mechanics-explained) that this cluster of articles covers.

## Accuracy, trueness and precision are three different words

The international vocabulary of metrology keeps apart three terms that everyday usage merges. **Measurement accuracy** is defined as the "closeness of agreement between a measured quantity value and a true quantity value of a measurand" — and, importantly, "the concept 'measurement accuracy' is not a quantity and is not given a numerical quantity value". You cannot report an accuracy of 0.3 per cent; you can report an uncertainty.

The vocabulary is equally firm on the boundaries: "the term 'measurement accuracy' should not be used for measurement trueness and the term 'measurement precision' should not be used for 'measurement accuracy'". Trueness concerns systematic offset — whether repeated measurements cluster around the right place. Precision concerns scatter — how tightly they cluster, wherever that is. An instrument can be precise and untrue, which is the more dangerous combination, because repetition looks like confirmation.

## Type A and Type B are not "measured" and "guessed"

The guide splits uncertainty components by how they are evaluated rather than by how much they are trusted. NIST's summary follows the guide exactly: a Type A evaluation is a "method of evaluation of uncertainty by the statistical analysis of series of observations", and Type B is "evaluation of uncertainty by means other than the statistical analysis of series of observations".

That second category is not a euphemism. It covers a calibration certificate's stated uncertainty, a manufacturer's specification, the resolution limit of a display, published reference data, and physical reasoning about an effect that cannot be varied during the experiment. What matters is that once each component has been expressed as a standard uncertainty, the two kinds are combined identically. A Type B component derived from a certificate can be smaller and better founded than a Type A component computed from six noisy repeats, and treating repeatability as the only real uncertainty is the most common way a budget becomes optimistic.

## Combining components, and the assumption inside the propagation law

Components are combined into a **combined standard uncertainty**, which NIST describes as "the positive square root of the estimated variance", obtained through what the guide calls the law of propagation of uncertainty. The construction has two moving parts that are easy to miss. It is a first-order Taylor expansion, so it linearises the measurement model about the operating point. And it contains a covariance term that "vanishes" only if the input estimates can be assumed uncorrelated.

Neither assumption is automatic. Inputs calibrated against the same reference standard are correlated by construction, and dropping the covariance term then understates the result. Strongly nonlinear models break the linearisation, which is why the guide is accompanied by a supplement propagating whole distributions by Monte Carlo rather than propagating variances, and why an amendment addressing nonlinearity in measurement models was issued in 2026. The framework is still under active revision.

## The coverage factor, and the word the guide avoids

A standard uncertainty is a standard-deviation-like quantity, and most published results are wider. The expanded uncertainty is U = k·u_c(y), where k is a coverage factor chosen for the level of confidence wanted. NIST states that "typically, k is in the range 2 to 3", that k = 2 "defines an interval having a level of confidence of approximately 95%", and that k = 3 gives an interval with "a level of confidence greater than 99%".

The approximation in "approximately" is doing real work. Peer-reviewed treatment of coverage intervals from the NIST research journal notes that the guide deliberately declines to call these intervals confidence intervals unless "all components of uncertainty that contribute to u_c(y) be obtained from Type A evaluations". A conventional confidence interval is a frequentist statement about long-run coverage of repeated experiments; an expanded uncertainty built partly from Type B components is not that, even when the arithmetic looks the same. The same paper works an example in which sixteen replicates give a 95 per cent coverage interval of the mean plus or minus 2.131 standard errors — the Student t percentile for fifteen degrees of freedom — rather than the flat factor of 2 that a quick calculation would use. With few observations the two differ enough to matter.

## Traceability is what makes two laboratories comparable

An uncertainty is only meaningful relative to a scale, and the mechanism that ties scales together is [metrological traceability](/en/glossary/traceability): as one review of chemical reference materials puts it, "a documented unbroken chain of calibrations with stated uncertainties that ideally link the measurement result for a sample to a primary calibrator in appropriate SI units". Each link adds uncertainty; none may be missing. The same review describes what the chain has to embody in practice — "the concepts of [measurement uncertainty](/en/glossary/measurement-uncertainty) and calibrations against a hierarchy of reference standards" — which is why a certificate that states a value without an uncertainty breaks the chain rather than shortening it.

The base of that chain changed on 20 May 2019, when the SI was redefined so that all units follow from seven constants with fixed numerical values.

| Defining constant | Symbol | Fixed value |
| --- | --- | --- |
| Caesium-133 hyperfine frequency | ΔνCs | 9 192 631 770 Hz |
| Speed of light in vacuum | c | 299 792 458 m/s |
| Planck constant | h | 6.626 070 15 × 10⁻³⁴ J s |
| Elementary charge | e | 1.602 176 634 × 10⁻¹⁹ C |
| Boltzmann constant | k | 1.380 649 × 10⁻²³ J/K |
| Avogadro constant | N_A | 6.022 140 76 × 10²³ mol⁻¹ |
| Luminous efficacy | K_cd | 683 lm/W |

Those values now carry no uncertainty, because they are definitions rather than results. The uncertainty did not disappear; it moved to the experiments that realise the units, which is a much better place for it, because it is now attached to an apparatus that can be improved rather than to an artefact that could be scratched.

## Where the uncertainty still is

Not every constant was absorbed into the definitions. The 2022 CODATA adjustment gives the Newtonian constant of gravitation as 6.674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻² with a standard uncertainty of 0.000 15 × 10⁻¹¹ in the same units — a relative standard uncertainty of 2.2 × 10⁻⁵. Set against the constants in the table, which are now exact by definition, that is an enormous gap. It persists because gravitation can be neither screened nor amplified, so each determination confronts the same class of systematic effects at a magnitude comparable to the signal itself. That is the standing reminder in this field: a small quoted uncertainty is always a claim about the effects somebody recognised.

That pattern generalises. Where two credible teams disagree by more than their stated intervals allow, the disagreement is evidence that at least one budget is missing a term. The same reasoning explains why independent [global temperature records](/en/ecology/climate-change/global-temperature-records-explained) are compared through their uncertainty envelopes rather than their headline values, and why the practical guidance in [remote-sensing limitations](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) turns on knowing what a retrieval algorithm did not model.

## False precision is a claim, not a formatting choice

Digits are cheap to produce and expensive to justify. A spreadsheet returns them by the dozen regardless of what went in, and a result reported to more figures than its uncertainty supports asserts a resolution that was never achieved. The convention that follows from the framework is simple: the uncertainty determines how many digits the value may carry, so a value should be rounded to a place consistent with its uncertainty rather than to whatever the calculation produced.

The failure mode is rarely the original paper. It is the transfer, where an interval is dropped because it does not fit a summary, and a central estimate travels onward as though it were exact — the process examined in the insight on [uncertainty lost between dataset and headline](/en/insight/uncertainty-lost-between-dataset-and-headline). Precision that appears during transmission was manufactured, not measured.

## What an uncertainty budget cannot contain

The structural limitation is that a budget can only include effects someone thought of. Unrecognised systematic effects are, by construction, absent from it, which means a stated uncertainty is a lower bound conditional on the completeness of the model. This is not a hypothetical concern: a review of how national institutes evaluate uncertainty for organic reference materials found "inconsistencies in approach and distinct cases of underestimation" among participating laboratories applying the same nominal methods, and concluded that combining independent measurement approaches is what exposes biases a single method masks.

The practical consequences run further than metrology laboratories. When a model substitutes a parameterisation for a process it cannot resolve — as [fluid-dynamics models](/en/physics/mechanics-waves/fluid-dynamics-explained) must for turbulence — the uncertainty attached to the output cannot fully represent structural error in the scheme itself. When an exposure statistic is computed from a modelled map rather than a measurement network, as in [environmental noise assessment](/en/physics/mechanics-waves/sound-and-acoustics-explained), the dominant uncertainty is in the inputs and not in the instrument. In both cases the number is honest about what was quantified and silent about what was assumed, and reading it well means asking which of the two you are looking at.

## Sources

1. **BIPM / JCGM** — [JCGM publications: the GUM and its supplements](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, the Monte Carlo supplement, and the 2026 amendment on nonlinearity in measurement models.
2. **JCGM International Vocabulary of Metrology** — [Measurement accuracy (VIM 2.13)](https://jcgm.bipm.org/vim/en/2.13.html). Definitions separating accuracy, trueness and precision.
3. **NIST** — [Basic definitions of uncertainty](https://physics.nist.gov/cuu/Uncertainty/basic.html). Type A and Type B evaluation of standard uncertainty.
4. **NIST** — [Combining uncertainty components](https://physics.nist.gov/cuu/Uncertainty/combination.html). Combined standard uncertainty and the law of propagation of uncertainty.
5. **NIST** — [Expanded uncertainty and coverage factor](https://physics.nist.gov/cuu/Uncertainty/coverage.html). Values of k and the levels of confidence associated with them.
6. **Journal of Research of the National Institute of Standards and Technology** — [Coverage intervals](https://pmc.ncbi.nlm.nih.gov/articles/PMC10898794/). Why the guide avoids the term confidence interval, and Student t coverage factors for small samples.
7. **BIPM** — [Measurement units and the SI defining constants](https://www.bipm.org/en/measurement-units). The seven fixed constants and the 20 May 2019 redefinition.
8. **NIST CODATA** — [Newtonian constant of gravitation](https://physics.nist.gov/cgi-bin/cuu/Value?bg). Recommended 2022 value, standard uncertainty and relative standard uncertainty.
9. **Accreditation and Quality Assurance** — [SI traceable calibrators for organic chemical measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC10938631/). Definition of the traceability chain and evidence of underestimated uncertainty between laboratories.
