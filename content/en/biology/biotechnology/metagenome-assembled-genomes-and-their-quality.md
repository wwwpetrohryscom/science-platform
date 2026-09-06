---
title: 'Metagenome-assembled genomes and their quality: what a MAG is allowed to be missing'
metaTitle: Metagenome-assembled genomes and their quality tiers
excerpt: A genome reconstructed from a mixed community is a statistical assembly, not an isolate. The MIMAG standard says how incomplete and how contaminated it may be and still be called high quality — 90 per cent and 5 per cent respectively.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 5
tags:
  - metagenomics
  - genome-assembly
  - standards
  - bioinformatics
related:
  - bioinformatics-explained
  - biotechnology-explained
  - culturing-and-sequencing-microbes
  - reference-materials-in-genome-measurement
_bodyHash: 5d79c6cf
pillar: biotechnology-explained
---

Among the tools [biotechnology](/en/biology/biotechnology/biotechnology-explained) has made routine, community sequencing is the one whose output most needs a quality standard. Sequencing a microbial community produces reads from many organisms at once. Turning that into genomes means assembling the reads into fragments and then sorting the fragments into bins that are believed to come from the same organism — a process with no specimen to check against and no guarantee that any bin corresponds to one genome.

The result is a metagenome-assembled genome, and the reason it needs a quality standard is that it is a hypothesis with a sequence attached.

## The tiers

A 2017 standard in *Nature Biotechnology* defines what may be claimed. A **high-quality draft** is "'>90% complete with less than 5% contamination" and should "encode the 23S, 16S, and 5S rRNA genes, and tRNAs for at least 18 of the 20 possible amino acids."

A **medium-quality draft** has "completeness estimates of ≥50% and less than 10% contamination". A **low-quality draft** is everything remaining, "less than 50% complete with <10% contamination". **Finished** is reserved for manually curated genomes assembled "into a single, validated, contiguous sequence per replicon, without gaps or ambiguities, having a consensus error rate equivalent to Q50 or better."

Read those thresholds carefully. A high-quality MAG may be missing a tenth of its genome and may contain up to five per cent sequence from something else. That is a reasonable and useful standard, and it is not what most readers assume "genome" means.

## Why the rRNA requirement is there

The ribosomal RNA genes appear explicitly in the high-quality definition, and their presence is unusually hard to achieve. They are highly conserved and often present in multiple near-identical copies, which is exactly the configuration short-read assemblers collapse or fragment.

The consequence is a systematic gap: many otherwise excellent MAGs lack the very genes used for taxonomic placement, so the organism is well characterised functionally and poorly placed phylogenetically. Long-read sequencing largely resolves this, which is why the read-length question is not a detail — it decides whether a genome can be named.

## How completeness and contamination are estimated

There is no reference to compare against, so both are inferred from marker genes: a set expected to be present in single copy in the relevant lineage. Completeness is the fraction of those markers found; contamination is the fraction found more than once.

That method has two structural limitations worth stating.

**It measures the markers, not the genome.** An organism whose lineage-specific gene content differs from the reference set can be scored as incomplete when it is not, and organisms with reduced genomes — symbionts especially — are systematically penalised.

**Contamination from a close relative is invisible.** Two strains of the same species have nearly identical marker sets, so mixing them produces a bin with excellent apparent quality and a chimeric sequence.

The general problem is the one described in [reference materials for genome measurement](/en/biology/biotechnology/reference-materials-in-genome-measurement): where no certified truth exists, quality is assessed by internal consistency, and internal consistency cannot detect an error that is consistent.

## What this means for a published result

**A MAG is evidence about a population, not an isolate.** It represents a consensus over the strains present in the sample, and strain-level variation is averaged out by construction.

**Absence of a gene is weak evidence.** In a genome that may be 10 per cent incomplete, not finding a gene does not establish that the organism lacks it — a distinction routinely lost when metabolic capability is inferred from MAGs.

**The quality tier belongs with the claim.** A functional conclusion drawn from a medium-quality draft that is half complete is a different claim from the same conclusion drawn from a finished genome, and the tier is the fastest way to tell them apart.

This is the counterweight to what metagenomics made possible. The [gap between cells visible and cells culturable](/en/biology/microbiology/culturing-and-sequencing-microbes) was closed largely by sequencing communities directly, and the standard above is the honest accounting of what that substitution costs.

## Sources

1. **Nature Biotechnology (PMC)** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). The four quality tiers with their completeness, contamination, rRNA and tRNA criteria.
2. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). The contrasting case where a characterised reference does exist.
3. **F1000Research (PMC)** — [Horizontal gene transfer: essentiality and evolvability in prokaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC4962295/). Why gene content varies between close relatives, which complicates both binning and marker-based completeness.
