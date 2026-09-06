---
title: 'Molecular clocks and divergence dating: why more sequence data does not narrow the date'
metaTitle: 'Molecular clocks: why more data does not narrow the date'
excerpt: Divergence times are estimated by combining sequence differences with fossil calibrations, and the two quantities the method must separate are confounded. Adding sequence has a limit that adding loci does not.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - molecular-clock
  - phylogenetics
  - dating
  - taxonomy
related:
  - phylogenetics-explained
  - taxonomy-and-classification-explained
  - the-tree-of-life-and-domains
  - horizontal-gene-transfer-and-the-tree
_bodyHash: 40467fdd
pillar: taxonomy-and-classification-explained
---

A phylogenetic tree — the object [classification](/en/biology/taxonomy/taxonomy-and-classification-explained) is built on — gives the branching order of lineages. Putting dates on the branches requires converting genetic distance into elapsed time, and that conversion needs a rate. The rate is not observed, and the difficulty of estimating it is the whole subject of molecular dating.

## The confounding at the centre

A 2015 study in *Systematic Biology* states the structural problem, and it is not a limitation of current data: "Because times and rates are confounded, our posterior time estimates will not approach point values even if an infinite amount of sequence data are used in the analysis."

This is worth pausing on. In most estimation problems, more data narrows the interval toward a point. Here it does not, because the observable — the number of substitutions along a branch — is a product of rate and time. Doubling the rate and halving the time gives the same branch length. No amount of additional sequence separates them.

What breaks the tie is external information: fossils, biogeographic events, dated ancient sequences. Those are what convert a tree with branch lengths into a tree with dates, and their quality bounds the result.

## Where the uncertainty comes from

The same paper decomposes it: "Uncertainty in posterior time estimates is partitioned into three sources: Sampling errors in the estimates of branch lengths in the tree for each locus due to limited sequence length, variation of substitution rates among lineages and among loci, and uncertainty in fossil calibrations."

Only the first shrinks with longer sequences. The second is a property of biology — rates genuinely differ between lineages and between genes — and the third is a property of the fossil record.

The practical consequence follows: "with the fossil calibrations fixed, analyzing multiple loci or site partitions is the most effective way for improving the precision of posterior time estimation." More genes, not longer genes. Additional loci sample the rate variation rather than merely reducing sampling noise on one draw from it.

And the summary judgement is blunt: "even if a huge amount of sequence data is analyzed, considerable uncertainty will persist in time estimates."

## What relaxed clocks do and do not fix

A strict clock assumes one rate everywhere and is known to be wrong. Relaxed clocks allow rates to vary between branches, drawn from a distribution whose parameters are estimated alongside the times.

That is the right correction and it does not eliminate the problem, because allowing rate variation widens the range of rate-and-time combinations compatible with the data. A relaxed clock produces more honest intervals, not narrower ones, and a study reporting tighter dates after relaxing the clock has usually gained the tightening from somewhere else — normally from the calibrations.

## Why calibrations dominate

A fossil gives a minimum age for a clade: the lineage existed at least that long ago. It rarely gives a maximum, because absence from older rocks is weak evidence. Calibration priors therefore encode a judgement about how much older the divergence might be, and that judgement propagates into every date in the tree.

Two failure modes follow.

**A wrongly assigned fossil moves everything.** A specimen placed on the wrong branch shifts dates across the tree, not only at the calibration point.

**Calibration density is uneven.** The fossil record is far richer for some groups and periods than others, so the precision of dates varies across a tree in a pattern that reflects preservation rather than biology.

## How to read a published date

Three questions do most of the work.

**What calibrated it?** A date is a statement about sequence plus fossils; the fossils should be named and their placement justified.

**Is the interval a credible interval or a range of point estimates?** Different analyses report different things, and a narrow spread of point estimates across methods is not the same as a narrow credible interval within one.

**Is the tree itself certain?** Dating assumes a topology. Where the branching order is contested — and [gene trees frequently disagree with species trees](/en/biology/taxonomy/phylogenetics-explained) — the dates inherit that uncertainty without displaying it.

## Sources

1. **Systematic Biology (PMC)** — [Characterization of the uncertainty of divergence time estimation under relaxed molecular clock models using multiple loci](https://pmc.ncbi.nlm.nih.gov/articles/PMC4380039/). The confounding of times and rates, the three-way partition of uncertainty, and multiple loci as the effective route to precision.
2. **F1000Research (PMC)** — [Horizontal gene transfer: essentiality and evolvability in prokaryotes, and roles in evolutionary transitions](https://pmc.ncbi.nlm.nih.gov/articles/PMC4962295/). Why a single tree is an approximation for microbial lineages.
3. **PLOS One (PMC)** — [DNA barcoding of recently diverged species: relative performance of matching methods](https://pmc.ncbi.nlm.nih.gov/articles/PMC3260286/). The difficulty of resolving recent divergences from sequence alone.
4. **NCBI Bookshelf** — [Metabolic energy, in *The Cell: A Molecular Approach*](https://www.ncbi.nlm.nih.gov/books/NBK9903/). Background on the molecular processes whose substitution rates the clock measures.
