---
title: 'Reference materials in genome measurement: how a sequencing result is checked'
metaTitle: Reference materials in genome measurement
excerpt: A genome sequence has no SI unit and no calibration standard. What it has instead is a small set of human genomes characterised so thoroughly that they can be used as a ruler, which is a different kind of metrology and a harder one.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - sequencing
  - reference-materials
  - benchmarking
  - bioinformatics
related:
  - dna-sequencing-technologies
  - bioinformatics-explained
  - calibration-and-traceability
  - interlaboratory-comparison-and-consensus-values
_bodyHash: bb375bef
pillar: biotechnology-explained
---

Ask how accurate a sequencing pipeline is — one of the routine questions of [biotechnology](/en/biology/biotechnology/biotechnology-explained) — and it runs immediately into a metrological problem. There is no standard metre for a genome, no physical constant to trace back to, and no way to know the true sequence of a sample independently of sequencing it. Accuracy has to be defined against something, and what that something is turns out to be the whole difficulty.

## The approach: characterise a genome until it can serve as the reference

The answer adopted for human genome sequencing is to take a small number of specific genomes and characterise them exhaustively, using many technologies whose errors are uncorrelated, until the consensus is trusted enough to be treated as truth for benchmarking purposes.

NIST describes the Genome in a Bottle Consortium as "a public-private-academic consortium hosted by NIST to develop the technical infrastructure (reference standards, reference methods, and reference data) to enable translation of whole human genome sequencing to clinical practice and innovations in technologies."

The materials are concrete and few. NIST produces four reference materials — RM 8391, 8392, 8393 and 8398 — derived from characterised genomes, and the consortium has "currently characterized a pilot genome (NA12878/HG001) from the HapMap project, and two son/father/mother trios of Ashkenazi Jewish and Han Chinese ancestry from the Personal Genome Project", giving seven genomes with published benchmarks. Benchmark variant calls and the regions they cover are distributed as VCF and BED files against both GRCh37 and GRCh38.

## Why the regions file matters as much as the calls

The pairing of a variant call file with a bed file of regions is the part that is easy to skip and impossible to do without.

A benchmark is only a benchmark where it is confident. Repetitive sequence, segmental duplications, and structurally complex regions are exactly the places where short-read sequencing struggles, and they are also the places where the reference itself is least certain. A benchmark that quietly included them would penalise a caller for disagreeing with a reference that was itself unreliable there.

The consequence is that reported accuracy figures for variant callers apply to the high-confidence regions and not to the genome. That is a legitimate and necessary scoping, and it is regularly lost in summary. A pipeline described as 99.9% accurate is 99.9% accurate on the part of the genome where the reference is trustworthy — which is not the part where the clinically difficult variants concentrate.

## The trio design

Using parent–child trios rather than isolated samples is a deliberate error-detection mechanism. Mendelian inheritance imposes constraints: a child's genotype at a site must be consistent with the parents' unless there has been a de novo mutation, which is rare enough to be individually checkable. A call set that violates those constraints at an implausible rate is wrong somewhere, and the violation localises the problem without any external standard.

This is the same logic as a redundant measurement in physical metrology — internal consistency substituting for an unavailable external reference — and it is one of the few tools available when the quantity has no unit.

## What this does and does not establish

**It establishes comparability, not correctness.** Two pipelines benchmarked against the same materials can be compared. Neither is thereby shown to recover the biological truth, because the reference is itself a consensus of measurements.

**It is ancestry-limited by construction.** Seven characterised genomes, from a small number of ancestral backgrounds, cannot represent human genetic diversity. A pipeline tuned to perform well on them may perform differently on samples unlike them, and this is a known and structural limitation rather than an oversight.

**It does not cover the analysis.** A benchmark tests the call set; it does not test the interpretation of a variant, which is a separate and much less standardised activity. The [reproducibility problems of computational biology](/en/biology/biotechnology/bioinformatics-explained) sit downstream of the benchmark and are not addressed by it.

The general shape here — characterise a material well enough to measure against it, publish the uncertainty, accept that comparability comes before accuracy — is the same one that governs [calibration and traceability](/en/physics/mechanics-waves/calibration-and-traceability) in physical measurement. What is different is that the reference is a sample rather than a constant, which means it can be exhausted, and that its representativeness is a scientific question rather than a logistical one.

## Sources

1. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). The consortium's description, the four reference materials, the seven characterised genomes, and the benchmark call and region files.
2. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). The wider certified-material programme these sit within.
3. **BIPM / JCGM** — [Guides in metrology](https://www.bipm.org/en/committees/jc/jcgm/publications). The vocabulary that distinguishes comparability from accuracy.
