---
title: 'Sequencing technologies: read length, error profile, and what each is good for'
excerpt: Choosing a sequencing platform is less about headline accuracy than about the shape of its errors and the length of its reads. Here is how the main families differ, why depth requirements vary, and what the cost curve leaves out.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - dna-sequencing
  - long-read-sequencing
  - reference-genomes
  - measurement-uncertainty
related:
  - biotechnology-explained
  - bioinformatics-explained
  - crispr-genome-editing-explained
  - what-is-a-genome
pillar: biotechnology-explained
---

Ask which sequencing platform is most accurate and you get an unhelpful answer, because the platforms fail in different ways. A method that makes rare, scattered substitution errors and a method that makes frequent but predictable errors in a specific sequence context can report the same headline accuracy and be suited to completely different problems. Read length, error shape and cost per base are the three axes that actually decide a project, and they trade against each other. Reading DNA is the capability that made the rest of the [biotechnology toolkit](/en/biology/biotechnology/biotechnology-explained) tractable, and it is also the one whose economics are quoted most often out of context.

## Three ways of turning a molecule into a string

The chain-termination method described in 1977 reads sequence by making copies that stop at defined bases. Dideoxynucleotide analogues act as chain-terminating inhibitors of DNA polymerase, producing a nested set of fragments whose lengths report the position of each base; the original demonstration was on bacteriophage φX174. It remains in use for short, single-locus confirmations because it is simple and its failure modes are visible on the trace.

Short-read sequencing-by-synthesis replaced it for anything at scale. Millions of spatially separated clusters are extended one base at a time and imaged in parallel, producing reads of a few hundred bases at very low per-base error, dominated by substitutions rather than insertions or deletions. Its constraint is not accuracy but length: a read shorter than a repeat cannot be placed unambiguously in a genome that contains that repeat more than once.

Single-molecule long-read platforms sequence one molecule without amplification. The complete human genome assembly published in 2022 used two of them together and describes their properties directly: circular-consensus reads averaging around 20 kbp with an error rate near 0.1 per cent, and ultra-long nanopore reads exceeding 100 kbp at substantially lower per-read accuracy. The two are complementary — one supplies base-level precision, the other spans structures that nothing else can cross.

| Family | Typical read length | Dominant error character | What it resolves |
| --- | --- | --- | --- |
| Chain termination | Under a kilobase | Low, visible in the trace | Single loci, construct verification |
| Short-read synthesis | Hundreds of bases | Substitutions, context-dependent | Variants in unique sequence, deep counting |
| Circular-consensus long reads | Around 20 kbp | Low and largely random | Assembly across most repeats |
| Ultra-long nanopore reads | Over 100 kbp | Higher, partly systematic | Segmental duplications, centromeres |

## Random error averages out; systematic error does not

The distinction that matters most in practice is whether an error recurs at the same position for the same reason. Independent random errors are diluted by depth: sequence a site thirty times and a 1 per cent random error becomes negligible in the consensus. A systematic error survives any amount of coverage, because every read makes the same mistake.

Nanopore sequencing has supplied the clearest recent example. A 2024 evaluation of bacterial genome reconstruction found that older R9.4.1 chemistry gave a median per-read accuracy of 96.8 per cent (interquartile range 95.9–97.4), rising to 98.8 per cent (98.1–99.2) with R10.4.1, and to a median of 99.2 per cent (98.8–99.5) when reads were called with a newer basecalling model. Crucially, part of the residual error was not noise but a reproducible confusion of modified bases: native DNA methylation was producing systematic adenosine-to-guanine and cytosine-to-thymine substitutions, which were addressed by training basecallers on methylated native DNA rather than by sequencing deeper. The same study found that long-read-only assemblies using the newer chemistry and basecaller recovered above 99 per cent of annotated coding sequences at coverage of 30× or more, comparable to hybrid assemblies that combine long and short reads.

That is the general lesson. When a platform's remaining errors are context-specific, the fix lives in the interpretation layer — basecalling models, polishing, assembly graphs — rather than in the chemistry, which is one reason the boundary between sequencing and [computational analysis of sequence data](/en/biology/biotechnology/bioinformatics-explained) is not a clean one.

## Why depth requirements differ so much

Coverage is not a quality setting; it is a statistical requirement derived from what you are trying to detect. For a germline variant present in half or all of the sequenced molecules, moderate depth suffices, and the 30× figure above is the coverage at which the bacterial assemblies in that study reached near-complete coding-sequence recovery. Detecting a variant carried by a small fraction of cells — a subclonal somatic mutation, a minority pathogen in a mixture — requires depth that scales inversely with that fraction, plus an error rate low enough that true signal is distinguishable from background at that frequency. This is why the same instrument can be described as adequate for one application and hopeless for another with no contradiction. The same arithmetic governs [sequencing-based surveys of microbial communities](/en/biology/microbiology/culturing-and-sequencing-microbes), where a taxon's read count reflects primer choice and sequencing depth before it reflects abundance. Sequencing-based assays for [off-target activity in genome editing](/en/biology/biotechnology/crispr-genome-editing-explained) face precisely this problem: the events being counted may be rarer than the platform's own error floor.

The reference-genome projects illustrate the upper end. Alongside its long reads, the complete human assembly drew on roughly 100× short-read data and 70× chromosome-conformation data as supporting evidence, together with optical and single-cell strand-specific maps.

## What long reads actually bought

The complete assembly published in 2022 totals 3,054,815,472 base pairs of nuclear DNA plus a 16,569 base-pair mitochondrial genome. Relative to the previous reference it added or corrected 238 Mbp of non-syntenic sequence, of which 182 Mbp had no primary alignment to the earlier assembly at all. Within the newly resolved material it reported 3,604 genes not present in the prior reference, of which 140 were predicted to be protein-coding, and 99 predicted protein-coding genes fell in regions with no earlier alignment.

The point is not that the reference grew by a few per cent. It is that the missing regions were not missing at random — they were the repetitive, duplicated and satellite-rich parts of the genome, systematically excluded because short reads could not be placed in them. A generation of studies described the genome as though those regions were absent, which is a specific and correctable form of the [gap between a reference sequence and a genome](/en/biology/genetics/what-is-a-genome).

## The cost curve and the part it never priced

The cost figures the National Human Genome Research Institute publishes for its funded centres are quoted constantly and over-read routinely. Their table records about $95.3 million per genome in September 2001, $7.1 million in October 2007, $3.1 million three months later, and about $525 by May 2022 — a fall of more than five orders of magnitude. The institute dates the sharpest departure from the doubling behaviour of computing hardware to January 2008, when its centres moved to second-generation instruments, which is exactly where that fourfold drop in a single quarter appears. The institute's own accounting for the reference era is equally specific: the original human genome draft cost on the order of $300 million worldwide, with refinement to a finished sequence adding around $150 million.

What those figures include is production: reagents, instruments, labour, laboratory information systems, initial data processing. What they exclude is quality assurance, alignment to a reference, assembly, variant calling and annotation. In other words, the published curve prices the generation of reads, not the production of an interpretable result. A laboratory quoting a per-sample price is rarely quoting the same quantity, and a comparison between the two is not a comparison at all.

## What benchmarking still cannot certify

Accuracy claims rest on reference materials, and those have boundaries. The Genome in a Bottle consortium at the National Institute of Standards and Technology characterises a small set of human samples — a pilot genome and two family trios — and distributes both benchmark variant sets and stratification files that mark difficult territory: homopolymers, tandem repeats, the major histocompatibility complex. Those stratifications exist because performance inside them differs from performance outside, and a benchmark that reports a single genome-wide accuracy figure without them is averaging over that difference.

The consequence for reading any claim is narrow and practical. A stated accuracy applies to the regions the benchmark covers, in the sample types it covers, with the analysis pipeline that produced it. Regions excluded from a benchmark are not certified as easy; they are simply not certified.

## Sources

1. **Proceedings of the National Academy of Sciences** — [DNA sequencing with chain-terminating inhibitors](https://pmc.ncbi.nlm.nih.gov/articles/PMC431765/). The 1977 dideoxy method and its first application.
2. **Nature (author manuscript, PubMed Central)** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Assembly size, added sequence, gene counts and the read technologies used.
3. **Microbial Genomics** — [Evaluation of the accuracy of bacterial genome reconstruction with Oxford Nanopore R10.4.1 long-read-only sequencing](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170131/). Per-read accuracy distributions, methylation-linked systematic errors and coverage effects.
4. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). The cost-per-genome series and the scope of the cost accounting.
5. **National Human Genome Research Institute** — [The cost of sequencing a human genome](https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost). Reference-era costs and what the estimates include and exclude.
6. **National Institute of Standards and Technology** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Reference materials, benchmark variant sets and stratifications for difficult regions.
