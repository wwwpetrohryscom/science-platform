---
title: 'Genome-wide association studies: what an association can and cannot establish'
excerpt: A GWAS correlates allele frequency with a trait across unrelated people. The design is deliberately hypothesis-free, and almost every limit it has — tagging, thresholds, tiny effects, poor portability — follows directly from that choice.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - gwas
  - polygenic-scores
  - population-genetics
  - study-design
related:
  - heritability-explained
  - epigenetics-explained
  - what-is-a-genome
  - what-is-dna
pillar: what-is-dna
_bodyHash: fbd26e39
---

A genome-wide association study asks one narrow question at hundreds of thousands of positions at once: does the frequency of an allele differ between people who have a trait and people who do not? The [National Human Genome Research Institute](https://www.genome.gov/about-genomics/fact-sheets/Genome-Wide-Association-Studies-Fact-Sheet) describes the standard design as a comparison of two groups whose DNA is genotyped on arrays and scanned for variants that are more frequent in one group than the other. No hypothesis about biology enters the analysis. That is the design's central strength, and nearly everything it cannot do follows from the same choice — beginning with the point made in [the molecule and what it underdetermines](/en/biology/genetics/what-is-dna), that a sequence difference correlated with an outcome is not yet a cause of it.

## The array reads a neighbour, not the variant

Genotyping arrays interrogate a fixed panel of positions, and the causal variant is usually not one of them. What makes the design work anyway is linkage disequilibrium: nearby variants are inherited together in blocks, so a genotyped marker acts as a proxy for whatever else sits in its block. The same fact-sheet is explicit that the associated variants may themselves not cause anything, and may simply be tagging along with the real causal variants.

The consequence shows up whenever a result is translated into a gene name. A decade-scale review of the field reported that [two-thirds of GWAS-associated loci implicate a gene that is not the nearest gene](https://pmc.ncbi.nlm.nih.gov/articles/PMC5501872/) to the most associated marker, and that the majority of identified risk alleles are non-coding. Naming the closest gene to a peak is a convention of reporting, not a finding. Assigning a non-coding signal to a cell type is done instead by overlaying it on chromatin annotations, the approach that produced the observation that trait-associated variants are enriched in tissue-specific marks — described from the other side in [the chromatin and methylation layers](/en/biology/genetics/epigenetics-explained).

Imputation extends an array's reach by inferring untyped genotypes from a sequenced reference panel, and whole-genome sequencing removes the panel restriction entirely, at a cost per sample that still shapes study design. The trade-offs between array, imputation and sequencing are the subject of [sequencing technologies and what each one measures](/en/biology/biotechnology/dna-sequencing-technologies).

## Where 5 × 10⁻⁸ came from, and whose genome it was calibrated on

The conventional threshold for declaring a genome-wide significant result is a p-value below 5 × 10⁻⁸. It is not an arbitrary round number and it is not a property of the phenotype. It is a multiple-testing correction, and the correction was computed from data.

Using haplotype maps to count how many effectively independent tests a genome-wide scan performs, one analysis estimated a burden of [about a million independent tests in Europeans, and twice that number in Africans](https://pubmed.ncbi.nlm.nih.gov/18348202/). Dividing a conventional 0.05 by a million produces 5 × 10⁻⁸. The threshold that the whole field now uses therefore encodes the linkage structure of one group of populations. In an African-ancestry sample, where the same scan performs about twice as many effectively independent tests, the conventional cut-off corrects for roughly half the tests actually being carried out. It is a small, technical point with a direct consequence: applying an identical threshold to two ancestry groups is not applying identical statistical rigour to them.

## Effect sizes, and the arithmetic that follows

Individual common variants move complex traits very little. The same review offers a calibration that is worth memorising: effect sizes of 0.01, 0.1 and 1 phenotypic standard deviations correspond approximately to odds ratios of 1.02, 1.2 and 4. Almost everything a GWAS finds sits at the low end. As studies grow, the newly discovered loci get smaller still — the review puts newly identified height variants at typically less than 0.5 mm and newly identified disease variants at an odds ratio around 1.01.

This is why sample size, rather than any change in method, is the field's main axis of progress. The saturation point for one trait is now visible. Assembling data on [5.4 million individuals](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/), a study of adult height identified 12,111 independent significant variants, clustered in 7,209 non-overlapping genomic segments of around 90 kb, covering about 21 per cent of the genome, and accounting for nearly all of the common-variant heritability of the trait. The relationship between that figure and the older family-based estimates is worked through in [what a heritability figure describes](/en/biology/genetics/heritability-explained).

## What the catalogue's growth is actually counting

The NHGRI-EBI [GWAS Catalog](https://www.ebi.ac.uk/gwas/) is the field's central record. Its release statistics for 22 August 2026 report 7,797 publications, 1,191,572 curated top associations and 201,294 sets of full summary statistics. Two years earlier the resource's own description in [Nucleic Acids Research](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701593/) put it at close to 7,000 publications covering more than 15,000 traits, from which more than 625,000 lead associations had been curated, alongside 85,000 summary-statistics datasets.

An association count is not a count of mechanisms, and the composition of the growth matters. The Catalog's maintainers name the rapid increase in large-scale molecular quantitative-trait studies — associations with [gene expression](/en/glossary/gene-expression) levels, protein abundance and similar intermediate measurements — as one of the challenges they have had to handle. Those entries are scientifically valuable and are not new disease loci. A million associations in a database is a statement about how much scanning has been done, not about how much has been explained.

## Polygenic scores and the portability failure

A polygenic score sums a person's trait-increasing alleles, each weighted by its estimated effect, into a single number. The construction is straightforward. The problem is that the weights are estimated in one population and then applied in another.

The scale of the imbalance in the underlying data is well documented. An analysis of prediction accuracy across populations noted that around [79 per cent of all GWAS participants are of European descent](https://pmc.ncbi.nlm.nih.gov/articles/PMC6563838/) while that group makes up roughly 16 per cent of the global population, and measured what follows: relative to European accuracy, genetic prediction accuracy was 1.6-fold lower in Hispanic and Latino Americans, 1.7-fold lower in South Asians, 2.5-fold lower in East Asians and 4.9-fold lower in Africans on average. A later review of the field's first fifteen years put the European share of participants at around 86 per cent as of 2021, and NHGRI's own summary of [polygenic risk scores](https://www.genome.gov/Health/Genomics-and-Medicine/Polygenic-risk-scores) states plainly that their accuracy may at this point be valid and useful only for European-ancestry populations.

The reason matters, because the obvious explanation is wrong. The height study found effect sizes, associated regions and gene prioritisation to be similar across ancestries, and attributed the drop in prediction accuracy to linkage disequilibrium and allele-frequency differences within the associated regions rather than to different underlying biology. The variant that tags a causal site well in one population may tag it poorly in another, and an allele common enough to estimate precisely in one sample may be rare in the next. Those are properties of population history — the same demographic processes covered under [drift and effective population size](/en/biology/evolution/genetic-drift-and-population-size) — which means the remedy is more diverse sampling rather than a better estimator applied to the samples already collected.

## Stratification, and the failure mode that looks like a result

Population structure is the design's characteristic false positive. If cases and controls differ systematically in ancestry, then every allele whose frequency differs between those ancestries will associate with the trait, whether or not it has anything to do with it. The standard defences are to include principal components of genotype as covariates, to fit linear mixed models that absorb relatedness, or to use family-based designs in which transmitted and untransmitted alleles are compared within the same family.

None of these fully solves the problem for traits with geographic gradients, where genuine environmental variation is correlated with genuine ancestry variation across the same map. Residual stratification is difficult to distinguish from a weak real signal, and because a polygenic score sums thousands of small effects, a bias that runs in a consistent direction across variants can survive in the score even where no individual p-value looks suspicious.

## From an associated locus to a claim about biology

The honest summary of what the design delivers is that it localises signal reliably and explains almost nothing on its own. As the ten-year review put it, an association between a variant at a locus and a trait is not directly informative about the target gene or the mechanism — a point it illustrates by noting that compelling effector transcripts had been identified for only about a third of some 100 known type 2 diabetes loci. The [fifteen-year assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC9943775/) attributes the persistence of that gap to low penetrance of individual variants, the resolution limit that linkage disequilibrium imposes on the genome, and the concentration of associations in non-coding sequence.

That gap is not a defect to be apologised for; it is the boundary of the method. Association is the first step in a chain that continues through fine-mapping, functional assays, expression studies and, where the assumptions hold, causal inference designs that use genotype as an instrument. A result that has been through none of those steps supports one claim: that something in this region of the genome covaries with this trait in this sample. Reported as such, it is durable. Reported as a gene for something, it usually is not.

## Sources

1. **National Human Genome Research Institute** — [Genome-Wide Association Studies Fact Sheet](https://www.genome.gov/about-genomics/fact-sheets/Genome-Wide-Association-Studies-Fact-Sheet). The basic case-control design and the caveat that associated variants may be tagging causal ones.
2. **American Journal of Human Genetics (via PubMed Central)** — [10 years of GWAS discovery: biology, function, and translation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5501872/). Effect-size calibration, the nearest-gene result, and the locus-to-mechanism gap.
3. **Genetic Epidemiology (via PubMed)** — [Estimation of the multiple testing burden for genomewide association studies of nearly all common variants](https://pubmed.ncbi.nlm.nih.gov/18348202/). The independent-test counts behind the 5 × 10⁻⁸ threshold and their variation by ancestry.
4. **Nature (via PubMed Central)** — [A saturated map of common genetic variants associated with human height](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/). Sample size, variant and segment counts, genome coverage, and the linkage-disequilibrium explanation for reduced portability.
5. **NHGRI-EBI GWAS Catalog, EMBL-EBI** — [The NHGRI-EBI Catalog of human genome-wide association studies](https://www.ebi.ac.uk/gwas/). Release statistics for publications, curated associations and summary-statistics datasets.
6. **Nucleic Acids Research (via PubMed Central)** — [The NHGRI-EBI GWAS Catalog: standards for reusability, sustainability and diversity](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701593/). Catalog scope, trait counts, and the growth of molecular quantitative-trait studies.
7. **Nature Genetics (via PubMed Central)** — [Clinical use of current polygenic risk scores may exacerbate health disparities](https://pmc.ncbi.nlm.nih.gov/articles/PMC6563838/). Ancestry composition of GWAS participants and the measured loss of prediction accuracy across populations.
8. **American Journal of Human Genetics (via PubMed Central)** — [15 years of GWAS discovery: realizing the promise](https://pmc.ncbi.nlm.nih.gov/articles/PMC9943775/). European share of participants in 2021 and the reasons the association-to-mechanism gap persists.
9. **National Human Genome Research Institute** — [Polygenic risk scores](https://www.genome.gov/Health/Genomics-and-Medicine/Polygenic-risk-scores). What such scores do and do not represent, and their current limitation to European-ancestry populations.
