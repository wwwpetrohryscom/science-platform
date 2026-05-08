---
title: 'Gene expression regulation: why two cells with the same genome are not the same cell'
excerpt: A liver cell and a neuron carry identical DNA. The reason they are not interchangeable is regulation — a layered system of decisions about which genes are read and when.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-04-26'
updatedDate: '2026-05-08'
readingTime: 5
tags:
  - genetics
  - gene-expression
  - regulation
  - molecular-biology
related:
  - what-is-dna
  - single-cell-evo-devo
  - cell-signaling-pathways-basics
pillar: what-is-dna
---

A liver cell and a neuron in the same body carry essentially identical genomes. They look, behave, and metabolise differently because gene expression — the process by which information in [DNA](/en/biology/genetics/what-is-dna) becomes functional protein — is regulated. The accepted reference summaries from the [National Human Genome Research Institute](https://www.genome.gov/genetics-glossary) and the [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/) treat gene-expression regulation as a layered system, with decision points at multiple steps between genome and phenotype.

This article walks through the layers, what each contributes, and where current understanding has clear edges.

## The layers, in order of operation

The flow from DNA to protein passes through several control points:

1. **Chromatin accessibility.** Most of a cell's genome is packaged into chromatin in states that range from accessible to tightly compacted. Only the accessible regions are available to be transcribed. Histone modifications and DNA methylation establish and maintain these states.
2. **Transcription initiation.** A specific combination of transcription factors must bind regulatory DNA — promoters and enhancers — to recruit RNA polymerase. The combinations differ across cell types and conditions.
3. **Transcript processing.** RNA splicing, polyadenylation, and alternative-isoform choice happen co-transcriptionally and produce different mature transcripts from the same gene.
4. **RNA [stability](/en/physics/energy/perovskite-stack-field-stability) and localization.** Once produced, an mRNA can be stabilized, degraded, or transported to a specific subcellular location. Small RNAs (microRNAs and others) modulate stability and translation efficiency.
5. **Translation.** Ribosomes translate mature mRNAs at variable rates. Translation efficiency itself is regulated, particularly under stress.
6. **Post-translational regulation.** The protein produced may then be modified, localized, or degraded — adding another layer of control downstream of expression.

All six layers are operating at any given moment in any given cell. Saying "gene X is upregulated" is shorthand for an integrated change across some subset of these layers; the underlying mechanism varies by gene and context.

## Transcription factors: the combinatorial layer

A core insight from decades of work indexed through [PubMed](https://pubmed.ncbi.nlm.nih.gov/) is that transcription factors operate combinatorially. A typical enhancer is bound by several transcription factors; the combination — not any single factor — determines whether the enhancer activates the target gene.

This combinatorial logic is the reason cell types are stable. A liver cell maintains its identity because a small number of transcription factors are co-expressed and reinforce one another. Disturbing this self-reinforcing core can reprogram cell identity, the basis for induced pluripotent stem cell technology described in [NIH](https://www.nih.gov/) research summaries and [MedlinePlus Genetics](https://medlineplus.gov/genetics/) reference pages.

It is also the reason developmental programmes are robust. The transcription-factor combinations that specify cell types during development are layered, with later decisions constrained by earlier ones. Disrupting one factor in the cascade does not produce a single defect; it shifts the cell toward an alternative trajectory.

## Chromatin and the slow layer

Chromatin states are the slow layer. They change on developmental timescales, are inherited through cell division, and are difficult to reverse without active intervention. DNA methylation patterns established during early development persist through the lifetime of the cell type they specify.

This stability is what makes a differentiated cell stay differentiated. It is also what makes some disease states hard to reverse. The reference treatment in the [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/) editions of standard textbooks documents the principal modifications — H3K4 methylation marking active promoters, H3K27 methylation marking facultative repression, H3K9 methylation marking constitutive heterochromatin — and the enzymes that establish them.

What chromatin marks do *not* do is encode a separate "epigenetic code" independent of DNA sequence. The marks are deposited and removed by enzymes whose activity is itself regulated by the cell's transcription state. Chromatin is a layer of memory, not a parallel inheritance system.

## Non-coding RNA and the post-transcriptional layer

A substantial fraction of mammalian genomes encode RNAs that are never translated. Some — small interfering RNAs, microRNAs — act in well-defined pathways to repress mRNAs. Others — long non-coding RNAs — have a more diverse and partially-understood set of functions. The [Ensembl](https://www.ensembl.org/) genome browser annotates non-coding RNA features alongside protein-coding genes; the literature on their functions is large and uneven.

The honest summary is that microRNAs and a small set of well-characterized lncRNAs have established regulatory roles, while the function of most lncRNAs in the genome remains uncertain. Some lncRNAs are likely transcriptional noise; others have specific functions; sorting between the two is an open empirical project.

## Three things this regulation explains

**Cell-type diversity.** A multicellular organism can produce hundreds of stably distinct cell types from a single genome because the regulatory system is rich enough to maintain that many self-reinforcing transcription-factor states. The number of cell types in a tissue, and how they relate, is now mapped by [single-cell](/en/biology/genetics/single-cell-evo-devo) sequencing as documented in the [single-cell evo-devo](/en/biology/genetics/single-cell-evo-devo) literature.

**Robust development.** Embryonic development reproduces complex multicellular bodies with high reliability because the regulatory cascade has been shaped by selection for robustness. Small perturbations are buffered; large ones produce reproducible defects rather than chaos.

**Disease.** Many diseases involve dysregulated expression rather than gene loss. Cancer, autoimmune disorders, and metabolic disease all involve [cells](/en/biology/cells/what-is-a-cell) expressing programs that they should not, or failing to express programs that they should. Reference [materials](/en/physics/energy/perovskite-stack-field-stability) at [NIH](https://www.nih.gov/) and [WHO](https://www.who.int/) treat dysregulation as a primary mechanism.

## Limits of current understanding

Three areas remain genuinely open.

**Predicting phenotype from regulatory variation.** Most disease-associated variants identified by genome-wide association studies fall in non-coding regulatory regions. Predicting which gene each variant affects, and through which mechanism, is hard — current models are statistically successful but mechanistically incomplete.

**Long non-coding RNA function.** As above. The state of evidence varies by transcript; general claims about lncRNA function are easy to make and hard to support.

**Cell-state memory under perturbation.** When a cell is perturbed — by drug, infection, or environmental stress — the regulatory state shifts and partially returns. Whether and how perturbation history is remembered after recovery is an active research topic with implications for chronic disease and adaptive resistance.

## Sources

1. **National Human Genome Research Institute** — [Genomics glossary](https://www.genome.gov/genetics-glossary). Authoritative reference for transcription, regulation, and chromatin terminology.
2. **NCBI Bookshelf (NIH/NLM)** — [Foundational textbooks on molecular biology](https://www.ncbi.nlm.nih.gov/books/). Open-access reference treatment of gene-expression regulation.
3. **PubMed (NIH/NLM)** — [Biomedical literature](https://pubmed.ncbi.nlm.nih.gov/). Primary literature on transcription factors, chromatin, and non-coding RNAs.
4. **MedlinePlus [Genetics](/en/biology/genetics/what-is-dna) (NIH/NLM)** — [Plain-language genetics reference](https://medlineplus.gov/genetics/). Patient-oriented summaries of gene regulation in inheritance and disease.
5. **Ensembl (EMBL-EBI)** — [Genome annotation database](https://www.ensembl.org/). Reference annotation of protein-coding and non-coding RNA features.
6. **National Institutes of Health** — [Research overviews](https://www.nih.gov/). Topic-level reference on regulation in development and disease.
