---
title: 'Detection limits and non-detects: what a result of "not detected" actually means'
metaTitle: 'Detection limits and non-detects: what "not detected" means'
excerpt: A non-detect is not a zero, and how a dataset treats it changes the average. EPA's guidance names four ways of handling the problem and says which of them is biased in which direction.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - detection-limit
  - monitoring
  - measurement-uncertainty
  - water-quality
related:
  - environmental-pollution-explained
  - water-quality-measurement-explained
  - calibration-and-traceability
  - particulate-matter-and-health-evidence
_bodyHash: 5820e7fb
pillar: environmental-pollution-explained
---

An environmental dataset reports a concentration for some samples and "not detected" for others. The second category is not an absence of contamination; it is an absence of signal above a threshold that the method itself defines. What happens to those rows when the data are summarised is a choice, it is usually invisible in the published figure, and it can move a mean by more than the analytical uncertainty does.

## Two thresholds, not one

The EPA's regional guidance on data near the detection limit defines the detection limit as "the lowest concentration that can reliably be distinguished from zero, but is not quantifiable with acceptable precision". At that concentration, the guidance continues, the analyte has been shown to be present but its reported concentration is an estimate.

That is a stronger statement than the phrase suggests. A value at the detection limit means the substance is there; it does not mean the number attached to it can be relied on. A second, higher threshold — the reporting or quantitation limit — marks where the number becomes usable. Results between the two are real detections with unreliable magnitudes, which is a third category that flat "detected / not detected" reporting erases.

## How the limit is set

The method detection limit is not a property of an instrument but the outcome of a defined procedure. EPA's current definition, from the 2016 revision, is that the MDL "is defined as the minimum measured concentration of a substance that can be reported with 99% confidence that the measured concentration is distinguishable from method blank results."

The procedure behind it is deliberately demanding. The MDL is taken as the higher of two calculations — one from spiked samples, one from method blanks — each at the 99% confidence level, and requires a minimum of seven spiked samples and seven method blanks collected over a two-year period and analysed across multiple batches rather than in a single sitting.

Spreading the replicates across two years is the substantive part. A detection limit measured in one afternoon by one analyst on one instrument describes that afternoon. The limit that matters for a monitoring programme is the one that holds across instrument drift, reagent lots, and staff changes, and the only way to measure that is over time.

## The four ways of handling a non-detect

EPA guidance sets out four approaches and, unusually for a procedural document, says what each does to the answer.

**Substitute the detection limit.** Every non-detect is treated as though the analyte were present at the highest concentration consistent with not seeing it. The guidance is blunt: this "always produces a mean concentration which is biased high."

**Substitute zero.** Described as "the best-case approach", appropriate only where the assessor has grounds to believe the chemical is genuinely absent. It biases the mean low by construction.

**Substitute half the detection limit.** The common compromise, resting on the assumption that "on the average all values between the DL and zero could be present". It is the default in much environmental reporting, and it is a modelling assumption rather than a measurement.

**Estimate statistically.** Fitting a distribution to the detected values and using it to infer the censored ones. The guidance calls this "technically superior" while noting it takes more effort and more data, and recommends it where the compound materially affects the assessment.

The reason to know all four is that a published summary statistic rarely says which was used, and the difference between the first and the second is not small when most of the dataset is censored.

## Why this matters for trends

Censoring interacts badly with time series, and in a direction that is easy to miss. [Analytical methods](/en/ecology/pollution/microplastics-evidence-and-uncertainty) improve, so detection limits fall. A substance measured at half the detection limit in 2005 and at half a lower detection limit in 2025 will appear to have declined even if its true concentration did not change at all.

The same effect runs the other way for detection frequency: as limits fall, the proportion of samples reporting a detection rises, and a monitoring programme can report an apparent increase in occurrence that is entirely a change in method sensitivity. Long-term water and air records therefore need the detection limit alongside the values to be interpretable, in the same way that any calibrated measurement needs [its traceability chain](/en/physics/mechanics-waves/calibration-and-traceability).

This is the concrete form of a general point about [pollution as a source-pathway-receptor problem](/en/ecology/pollution/environmental-pollution-explained): the pathway includes the laboratory, and the properties of the measurement are part of the evidence rather than a preliminary to it.

## Sources

1. **US EPA** — [Method Detection Limit: frequent questions](https://www.epa.gov/cwa-methods/method-detection-limit-frequent-questions). The 2016 MDL definition and the replicate procedure behind it.
2. **US EPA** — [Regional guidance on handling chemical concentration data near the detection limit in risk assessments](https://www.epa.gov/risk/regional-guidance-handling-chemical-concentration-data-near-detection-limit-risk-assessments). The definition of the detection limit and the four substitution approaches with their biases.
3. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). Matrix-matched materials as the check on whether a method recovers what it should.
