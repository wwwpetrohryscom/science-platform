---
title: 'What a genome is, and why its size tells you almost nothing'
excerpt: A genome is the complete DNA content of a cell. Size, gene count and functional fraction are three separate measurements answering three separate questions, and they have very different reliability.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - genomics
  - genome-size
  - gene-annotation
  - pangenome
  - reference-genome
related:
  - what-is-dna
  - dna-replication-and-repair
  - mutation-types-and-rates
  - dna-sequencing-technologies
pillar: what-is-dna
---

A genome is the complete set of DNA carried by a cell — the nuclear chromosomes plus whatever the mitochondria and, in plants, the plastids carry on their own. That definition is not contested. Almost everything built on top of it is a measurement, and the three measurements people reach for most often — how large a genome is, how many genes it contains, and how much of it does anything — differ enormously in how firmly they are established. Only the first is close to settled. The molecular substrate is treated separately in [what DNA is and what it does not determine](/en/biology/genetics/what-is-dna); this page is about the accounting layer sitting above the molecule.

## The one measurement that finally became precise

Genome size can be measured two ways, and they are not the same operation. Flow cytometry and densitometry measure the physical DNA content of a nucleus, reported as a C-value in picograms or gigabase pairs. Sequencing measures assembly length: how many bases an assembler could place in order.

For decades the second number was smaller than the first, because repetitive regions defeated short reads. Ensembl's annotation of GRCh38.p14 reports a golden path length of 3,099,750,718 base pairs — a figure that included multi-megabase gaps at centromeres and on the acrocentric short arms. The Telomere-to-Telomere Consortium's CHM13 assembly closed them, reporting 3,054,815,472 bp of nuclear DNA plus a 16,569 bp mitochondrial genome, and adding 238 Mbp that does not align co-linearly to GRCh38, of which 182 Mbp has no primary alignment at all. That assembly also put hard numbers on repeat content: 1,647.81 Mbp, or 53.94 per cent of the sequence, is repetitive, with segmental duplications alone accounting for 6.61 per cent.

It is worth being clear about what "complete" meant there. Satellite arrays and rDNA repeats were resolved as sequence, largely by [long-read sequencing platforms](/en/biology/biotechnology/dna-sequencing-technologies) that could span them. What those arrays do was not resolved by reading them.

## A 2,400-fold range, and none of it tracks complexity

The single most useful thing to know about genome size is that it varies wildly and predicts very little. Vascular plants alone span roughly 2,400-fold in DNA content. The record now sits with a New Caledonian fork fern, *Tmesipteris oblanceolata*, at 160.45 Gbp per 1C — more than fifty times the human genome, in a plant a few centimetres tall. It displaced the angiosperm *Paris japonica* at 148.89 Gbp.

This is the **C-value paradox**: DNA content per cell bears no consistent relationship to how elaborate an organism is. The paradox dissolved once repetitive DNA was properly characterised. Most of the difference between a 3 Gbp genome and a 160 Gbp one is transposable-element expansion and retained polyploidy, not additional genes. What survives the resolution is a warning rather than a puzzle: genome size is a real, precisely measurable quantity that is a poor proxy for nearly anything about the organism you would otherwise want to know.

## The gene count came down for fifty years

Gene number was supposed to be the informative measurement instead. Its history is a long descent. Friedrich Vogel's preliminary 1964 estimate — computed by dividing the genome by the length of a haemoglobin-sized gene, on the assumption that the whole genome coded for protein and that genes were uninterrupted — came to 6.7 million. The 1990 joint report from the US National Institutes of Health and Department of Energy used 100,000. Expressed-sequence-tag surveys through the mid-1990s clustered between 50,000 and 100,000. By 2000, estimates ran from 28,000 to 57,000, and a decade later a review of the whole exercise settled on 22,333 as its own best guess.

Current annotations put the protein-coding count just under 20,000. Ensembl's GENCODE-based gene set for the GRCh38.p14 primary assembly lists 19,878 coding genes alongside 42,155 non-coding genes and 15,205 pseudogenes; the CHM13 annotation independently predicted 19,969 protein-coding genes among 63,494 total. The convergence matters less than what it reveals: the coding count is now stable to a few hundred, while the non-coding and pseudogene counts are not, because they depend on annotation criteria that are still moving.

Against that, the nematode *Caenorhabditis elegans* — 97 megabases, roughly a thirtieth of the human genome — was reported in 1998 to carry over 19,000 genes. A worm with about a thousand somatic cells and a human have protein-coding gene counts in the same range. Whatever distinguishes them is mostly a matter of how those genes are deployed, which is the subject of [gene-expression regulation](/en/biology/genetics/how-gene-expression-is-regulated).

## "Functional" is doing two jobs at once

The most contested number in genomics is the fraction of the human genome that is functional, and the dispute is definitional before it is empirical. The ENCODE consortium reported in 2012 that its assays could "assign biochemical functions for 80% of the genome" — 80.4 per cent in its own tally, built from findings that 74.7 per cent showed detectable [transcription across the genome](/en/glossary/transcription), 15.2 per cent fell in open chromatin, and 8.5 per cent overlapped transcription-factor binding.

A detailed critique in *Genome Biology and Evolution* argued that this uses a causal-role definition — this sequence does something measurable — where evolutionary biology uses a selected-effect definition: this sequence is maintained by purifying selection because losing it costs fitness. On the second criterion, comparative genomics puts the conserved fraction below 15 per cent, with the most comprehensive analysis near 5 per cent, rising to roughly 9 per cent once lineage-specific constraint inferred from within-species variation is added. The critique's sharpest point is arithmetic: if 80 per cent is functional and only about 10 per cent is under selection, then some 70 per cent of the genome would have to be functional while being immune to deleterious mutation.

ENCODE's own authors published a considered response two years later, acknowledging in *PNAS* that biochemically active regions cover a much larger fraction of the genome than evolutionarily conserved regions do, and that biochemical, evolutionary and genetic approaches each answer a different question. That is the honest reading. Neither figure is a mistake; they are measurements of different properties, and a headline that converts "biochemically active" into "needed" has changed the claim.

## One reference genome was always a compromise

GRCh38 is not any person's genome. It is a mosaic assembled from a small number of donors, serving as a coordinate system rather than a specimen — which means every variant call is expressed as a difference from an arbitrary baseline. Individual gene content genuinely differs: an estimate from three sequenced genomes put the difference between any two people at 73 to 87 genes, mostly through variation in segmental duplication.

The Human Pangenome Reference Consortium's 2023 draft replaces the single line with a graph. It comprises 47 phased, diploid assemblies from genetically diverse individuals, adding 119 million base pairs of euchromatic polymorphic sequence and 1,115 gene duplications relative to GRCh38, roughly 90 million of those bases coming from structural variation. Used to analyse short-read data, it reduced small-variant discovery errors by 34 per cent and increased structural variants detected per haplotype by 104 per cent. The same logic has long been standard in microbiology, where a species is described by a core genome plus an accessory set that differs between strains — the framing used in [bacteria and archaea as separate domains](/en/biology/microbiology/bacteria-and-archaea-explained).

Three limits remain. Forty-seven assemblies is a thin sample of human diversity, and the populations represented are not evenly weighted. Annotation lags assembly, so newly resolved sequence can sit unannotated for years. And none of this touches the functional question: knowing every base of every genome would still leave open which of them matter, because that is a question about selection and phenotype, not about sequence. The rate at which new differences enter a genome is treated in [mutation types and per-generation rates](/en/biology/genetics/mutation-types-and-rates), and the machinery that keeps that rate as low as it is in [DNA replication and repair](/en/biology/genetics/dna-replication-and-repair).

## Sources

1. **T2T Consortium, *Science*** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). CHM13 assembly length, sequence added relative to GRCh38, gene predictions, and repeat and segmental-duplication content.
2. **EMBL-EBI, Ensembl** — [Human assembly and gene annotation](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation). GRCh38.p14 golden path length and GENCODE coding, non-coding and pseudogene counts.
3. **Fernández and colleagues, *iScience*** — [A 160 Gbp fork fern genome shatters size record for eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11270024/). Record eukaryotic genome size and the range of vascular-plant genome sizes.
4. **C. elegans Sequencing Consortium, *Science*** — [Genome sequence of the nematode C. elegans](https://pubmed.ncbi.nlm.nih.gov/9851916/). Genome size and gene count for the nematode comparison.
5. **Pertea and Salzberg, *Genome Biology*** — [Between a chicken and a grape: estimating the number of human genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2898077/). History of human gene-number estimates and per-individual gene-content variation.
6. **ENCODE Project Consortium, *Nature*** — [An integrated encyclopedia of DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3439153/). The 80 per cent biochemical-function claim.
7. **Graur and colleagues, *Genome Biology and Evolution*** — [On the immortality of television sets: "function" in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/). The selected-effect critique and the conservation-based functional estimates.
8. **Kellis and colleagues, *PNAS*** — [Defining functional DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4035993/). The ENCODE authors' own reconciliation of biochemical, evolutionary and genetic definitions.
9. **Human Pangenome Reference Consortium, *Nature*** — [A draft human pangenome reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172123/). Assembly count, added sequence, and the measured effect on variant discovery.
