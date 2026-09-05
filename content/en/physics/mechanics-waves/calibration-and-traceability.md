---
title: 'Calibration and traceability: what it means for a number to be defensible'
metaTitle: 'Calibration and traceability: what makes a number defensible'
excerpt: A measurement is comparable to another only if both can be traced, through an unbroken chain of calibrations with stated uncertainties, to the same reference. That chain is infrastructure, and most disputes about data are really disputes about it.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - metrology
  - calibration
  - measurement-uncertainty
  - standards
related:
  - measurement-uncertainty-explained
  - interlaboratory-comparison-and-consensus-values
  - sensor-calibration-and-record-continuity
  - reference-materials-in-genome-measurement
_bodyHash: 3ab773b1
pillar: classical-mechanics-explained
---

Measurement sits underneath every quantitative claim in the sciences, and the [classical framework](/en/physics/mechanics-waves/classical-mechanics-explained) that supplies most of its units is silent about the practice. Two laboratories measure the same thing and get different answers. Before anyone can ask which is right, there is a prior question: were they measuring against the same reference at all? [Uncertainty](/en/physics/mechanics-waves/measurement-uncertainty-explained) describes the spread of a single result. Traceability describes whether two results are in the same conversation.

## The chain

A traceable measurement is one connected to a stated reference through a documented sequence of calibrations, each contributing to the uncertainty. Every link matters: a break anywhere means the final number is precise relative to the instrument and unmoored relative to anything else.

The reference at the top of the chain is, for most quantities, the SI, whose defining constants are fixed exactly. Below that sit national metrology institutes, then accredited calibration laboratories, then working instruments. The mechanism is unglamorous — certificates, comparison measurements, documented procedures — and it is the reason a kilogram in one country is a kilogram in another.

The formal vocabulary is maintained jointly. The Joint Committee for Guides in Metrology publishes both the *International Vocabulary of Metrology* — JCGM 200:2012, which fixes what terms like traceability, accuracy and precision mean — and the *Guide to the Expression of Uncertainty in Measurement*, JCGM 100:2008(E), with its supplements and the newer modular guides. That two documents are needed is itself informative: one settles what the words mean, the other how the numbers are combined, and confusion between the two is where most measurement arguments actually live.

## Reference materials: traceability for things you cannot calibrate

An instrument can be calibrated against a standard. A method — an extraction, a digestion, a sequencing protocol — cannot, because what it produces depends on the sample as much as on the apparatus. The answer is a material of known composition, measured as though it were a sample.

NIST provides "over 1200 Standard Reference Materials®", described as supporting "accurate and compatible measurements by certifying and providing" materials "with well-characterized composition or properties, or both". A laboratory running an SRM through its whole procedure learns whether the procedure recovers the certified value, which no instrument calibration can tell it.

The word that matters in that description is *compatible*. The purpose is not to make one laboratory accurate in isolation but to make many laboratories comparable, which is a property of the system rather than of any member of it.

## What traceability does not give you

Three things it is regularly assumed to provide, and does not.

**It is not accuracy.** A traceable measurement can be badly wrong if the method is inappropriate to the sample. What traceability establishes is that the error is documented and bounded relative to a reference, not that it is small.

**It is not a licence to drop the uncertainty.** A traceable value without its stated uncertainty is less useful than an untraceable one with it, because it invites comparison it cannot support. The uncertainty is part of the number.

**It does not survive reprocessing silently.** When a data producer recalibrates a historical record, values change, and the old and new versions are not interchangeable. Good practice is to say so explicitly — the USGS states of the reprocessed Landsat archive that "all Landsat Level-1 data are consistently calibrated and processed and retain traceability of data quality provenance", which is a promise about the chain rather than about the pixels.

## Where the chain is thin

Traceability is well developed for physical quantities with SI definitions: mass, length, time, temperature, electrical units. It is thinner elsewhere, and the thin places are exactly where measurement disputes concentrate.

Chemical measurement at trace concentrations depends heavily on matrix-matched reference materials, and where none exists, comparability rests on interlaboratory agreement instead. Biological measurement is harder still: a count of cells or a variant call has no SI unit, so the reference has to be a characterised material rather than a derived quantity, which is the approach taken for [genome measurement](/en/biology/biotechnology/reference-materials-in-genome-measurement). Environmental [remote sensing](/en/ecology/earth-observation/sensor-calibration-and-record-continuity) sits somewhere between, with radiometric calibration traceable to physical standards but the retrieved geophysical quantity — biomass, chlorophyll, soil moisture — resting on models validated against field data.

Recognising which regime a number comes from is more useful than knowing its uncertainty to two figures, because it tells you what kind of disagreement to expect when it is compared with another.

## Sources

1. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). The count and the stated purpose of certified reference materials.
2. **BIPM / JCGM** — [Guides in metrology](https://www.bipm.org/en/committees/jc/jcgm/publications). The VIM (JCGM 200:2012) and the GUM (JCGM 100:2008) and their supplements.
3. **USGS** — [Landsat Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2). Traceability of data quality provenance through a reprocessed archive.
