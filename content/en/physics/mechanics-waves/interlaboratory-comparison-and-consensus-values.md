---
title: 'Interlaboratory comparison and consensus values: measuring without a standard'
metaTitle: Interlaboratory comparison and consensus values
excerpt: When no certified material exists, the reference value is whatever independent laboratories agree on. That is a workable substitute with a specific failure mode, and the failure mode is shared method rather than shared error.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - metrology
  - measurement-uncertainty
  - standards
  - reproducibility
related:
  - calibration-and-traceability
  - measurement-uncertainty-explained
  - model-intercomparison-as-a-measurement-device
  - reference-materials-in-genome-measurement
_bodyHash: 7c00535b
pillar: classical-mechanics-explained
---

The quantities that [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained) defines have certified standards behind them. Most other quantities do not: certified reference materials exist for a minority of the things people measure. NIST supplies "over 1200 Standard Reference Materials®" — a large number in absolute terms and a small one against the range of quantities that laboratories report. For everything else, comparability has to be built rather than bought, and the instrument for building it is the interlaboratory comparison.

## The mechanism

Split a homogeneous material, send portions to laboratories that do not communicate about it, collect their results with their stated uncertainties, and examine the distribution. Two things come out.

The first is a consensus value: some robust central estimate of the distribution, used as the reference in the absence of a certified one. The second, and often the more useful, is a picture of the between-laboratory spread — which is almost always wider than any individual laboratory's stated uncertainty, and the gap is the finding.

That gap has a specific interpretation. A laboratory's stated uncertainty describes what it knows about its own procedure. The between-laboratory spread includes everything the procedure does not pin down: reagent lots, instrument models, operator judgement, subtly different interpretations of the same written method. Repeatability within a laboratory and reproducibility across laboratories are different quantities, and only the second predicts whether two published results should be expected to agree.

## The failure mode

A consensus value is not a true value, and the way it fails is not random.

If every participant uses the same method, they share its biases, and the consensus converges on a wrong answer with a reassuringly narrow spread. The comparison then measures method reproducibility while appearing to measure accuracy. This is the reason a comparison with diverse methods is more informative than one with many participants — the informative variable is method independence, not sample size.

The same logic governs the two other cases on this site where a reference had to be built rather than traced. Genome benchmarks integrate technologies with uncorrelated error profiles precisely so that agreement means something, which is why [reference materials in genome measurement](/en/biology/biotechnology/reference-materials-in-genome-measurement) are characterised across many platforms rather than deeply on one. And [climate model intercomparison](/en/ecology/earth-systems/model-intercomparison-as-a-measurement-device) is weakened to exactly the extent that participating models share components and heritage.

## What a laboratory learns from participating

Three things, in decreasing order of how often they are appreciated.

**Where it sits.** A z-score against the consensus tells a laboratory whether it is an outlier, which is information no amount of internal quality control can supply.

**Whether its uncertainty is honest.** A laboratory whose result sits four stated uncertainties from the consensus has either a problem with its measurement or a problem with its uncertainty estimate, and distinguishing the two is the diagnostic work that follows.

**What the method cannot fix.** Persistent between-laboratory spread that no participant can reduce is a property of the method rather than of the laboratories, and it is the signal to revise the written procedure.

## The reporting consequence

Where a quantity rests on a consensus value rather than a certified one, the honest form of a published number says so. The vocabulary for this is standardised — the *International Vocabulary of Metrology*, JCGM 200:2012, fixes the terms, and the *Guide to the Expression of Uncertainty in Measurement*, JCGM 100:2008(E), fixes how the components are combined — but the standardisation covers the expression rather than the practice, and a great deal of published measurement does not state which route its reference came from.

The practical test for a reader is simple and rarely applied: ask what the number was compared against. If the answer is a certified material, the chain runs to the SI. If it is a consensus, the number is comparable to other measurements in the same comparison and to nothing else. Both are legitimate; they support different claims, and the distinction is the substance of [what makes a measurement defensible](/en/physics/mechanics-waves/calibration-and-traceability).

## Sources

1. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). The scale of the certified-material programme, and its stated purpose of making measurements compatible.
2. **BIPM / JCGM** — [Guides in metrology](https://www.bipm.org/en/committees/jc/jcgm/publications). The VIM (JCGM 200:2012) and GUM (JCGM 100:2008) and their supplements.
3. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). A reference built by integrating methods with uncorrelated errors.
