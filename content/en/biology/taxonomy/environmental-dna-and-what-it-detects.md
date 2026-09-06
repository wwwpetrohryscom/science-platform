---
title: 'Environmental DNA and what it detects: a negative result is mostly a statement about volume'
metaTitle: Environmental DNA and what a negative result means
excerpt: 'At low target concentrations, eDNA surveys miss species that are present, and simulation shows why: at 10 copies per litre, 97 per cent of PCR replicates contain nothing at all. Increasing sample volume helps more than increasing replicates.'
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 3
tags:
  - environmental-dna
  - biodiversity-monitoring
  - detection
  - taxonomy
related:
  - taxonomy-and-classification-explained
  - dna-barcoding-and-its-limits
  - citizen-science-biodiversity-data
  - detection-limits-and-non-detects
_bodyHash: eeacc500
pillar: taxonomy-and-classification-explained
---

Environmental DNA surveys look for a species — an entity [classification](/en/biology/taxonomy/taxonomy-and-classification-explained) had to define before anything could be looked for — by looking for its genetic material in water, soil or air rather than for the organism. The technique has changed what is practical in aquatic monitoring, and its central interpretive problem is the same one that governs any [measurement near a detection limit](/en/ecology/pollution/detection-limits-and-non-detects): what a negative result means.

## The sensitivity problem, quantified

A 2015 simulation study in *PLOS One* modelled the whole chain from ambient concentration to a PCR result. Its conclusion is blunt: "Simulation results show that eDNA surveys have a high false negative rate at low concentrations of the genetic marker."

The mechanism is a sampling problem before it is a molecular one. At an ambient concentration of 10 copies per litre, the authors find that 97 per cent of PCR replicates contain zero target marker copies. Nothing has failed — the assay is working correctly on a sample that happens to contain no target molecules, because the target was dilute and the sample was small.

## Which fix works

The study compares three routes to higher sensitivity: "Increases in field survey sensitivity can be achieved by increasing sample volume, sample number, and PCR replicates. Increasing sample volume yields the greatest increase in sensitivity."

That ordering is informative because it is not the intuitive one. Running more PCR replicates on the same extract cannot recover molecules the extract does not contain; only collecting more water can. Effort spent in the laboratory is largely wasted if the limitation is in the bucket.

Reported requirements scale steeply with density. At high densities of a target fish, a few litres suffice for a better than 95 per cent detection probability; at low densities, more than a hundred litres may be needed for the same confidence.

## Everything between the organism and the result

A detection depends on a chain, and each link can break.

**Shedding.** How much DNA an organism releases varies with species, size, life stage, activity and temperature, so concentration is not a simple function of abundance.

**Transport and mixing.** In flowing water, DNA is carried downstream, so a detection localises a species to a catchment rather than to a point. In a lake it is patchy, so where the sample was taken matters.

**Degradation.** DNA breaks down under sunlight, warmth and microbial activity, and persistence differs by substrate — longest in solid abiotic material, shorter in biological substrates, shortest in water.

**Inhibition.** Humic substances and other compounds in environmental samples inhibit PCR, producing false negatives that are invisible without internal controls.

Each link means the same true abundance can give different results in different conditions, which is why eDNA is stronger as a presence detector than as an abundance estimator.

## Reading a survey honestly

**A detection is strong evidence, with caveats.** Contamination is the main alternative explanation, which is why field and laboratory blanks are not optional.

**A non-detection is weak evidence without a sensitivity statement.** The useful form is not "not detected" but "not detected, with X per cent power to detect at Y concentration given this volume and replication".

**Assignment inherits the barcoding limitations.** A sequence recovered from water is matched against a reference library and carries the same two assumptions — that the species is in the library and that the library's taxonomy is right — with no specimen available to check against. Where the target has [recently diverged relatives](/en/biology/taxonomy/dna-barcoding-and-its-limits), the assignment is correspondingly weaker.

The parallel with chemical monitoring is exact. A method detection limit is a property of the procedure, a non-detect is a censored observation rather than a zero, and reporting either without the limit attached invites a conclusion the data does not support.

## Sources

1. **PLOS One (PMC)** — [Modeling the sensitivity of field surveys for detection of environmental DNA (eDNA)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624909/). The high false-negative rate at low concentration, the 97 per cent of empty replicates at 10 copies per litre, and sample volume as the most effective lever.
2. **PLOS One (PMC)** — [DNA barcoding of recently diverged species](https://pmc.ncbi.nlm.nih.gov/articles/PMC3260286/). The assignment step eDNA depends on and where it fails.
3. **US EPA** — [Method detection limit: frequent questions](https://www.epa.gov/cwa-methods/method-detection-limit-frequent-questions). The chemical-monitoring analogue of the same censoring problem.
