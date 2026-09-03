---
title: 'Heritability: what a figure like 0.8 actually describes'
excerpt: Heritability is a ratio of variances estimated in one population under one range of environments. It is not a measure of how genetically fixed a trait is, and it carries no information about differences between groups.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - heritability
  - quantitative-genetics
  - twin-studies
  - complex-traits
related:
  - genome-wide-association-studies-explained
  - what-is-a-genome
  - epigenetics-explained
  - what-is-dna
pillar: what-is-dna
---

[MedlinePlus](https://medlineplus.gov/genetics/understanding/traits/height/) states that about 80 per cent of an individual's height is determined by the DNA sequence variations they have inherited. Taken at face value, that sentence describes a person: eight-tenths of your height, apparently, comes from your genes and the rest from everything else. The statistic it compresses describes no person at all. Heritability is a property of a population, and the slide from one to the other is the same slide that turns [a four-letter code into a blueprint](/en/biology/genetics/what-is-dna). It is common enough that it is worth spelling out exactly what is being ratioed against what.

## A ratio, and what sits in its denominator

Heritability is the share of the observed variation in a trait, across the individuals in a defined population, that is statistically attributable to genetic variation among them. **Broad-sense heritability** puts all genetic variance in the numerator, including dominance and interaction effects. **Narrow-sense heritability**, the quantity that matters for prediction and for response to selection, uses only the additive component — the part that parents transmit predictably to offspring.

The denominator is the total variance in the trait in that population. This is where the intuition breaks. If a population becomes more uniform in the environments its members experience, the environmental contribution to the total shrinks, the ratio rises, and heritability goes up without a single allele frequency changing. Heritability is therefore an index of a population under a particular range of conditions, not a constant of a trait. It also says nothing about any individual: there is no meaningful sense in which 80 per cent of one person's height is genetic, because a single measurement has no variance to partition.

## Why different methods give different numbers

Three estimation strategies dominate, and they disagree in a structured way because they are not estimating the same quantity. Height is the standard worked example because it is cheap to measure, varies continuously, and has been studied at every scale from family pedigrees to [maps of the whole genome](/en/biology/genetics/what-is-a-genome).

| Method | What it estimates | Height estimate | Principal assumption |
| --- | --- | --- | --- |
| Classical twin design | Broad-sense, from the excess similarity of identical over fraternal twins | 0.87–0.93 in men; 0.68–0.84 in women | Identical and fraternal twins share environments to the same degree |
| Genomic relatedness among unrelated people | Variance tagged by common genotyped variants | 0.45 | Causal variants are in linkage disequilibrium with the array's markers |
| Variants passing genome-wide significance | Variance captured by the specific signals a study can name | 0.40 in European-ancestry samples; 0.10–0.20 in others | The threshold is stringent enough to control false positives |

The twin figures come from an eight-country analysis of [30,111 complete twin pairs](https://pubmed.ncbi.nlm.nih.gov/14624724/), which found essentially no variation in male heritability across affluent Western populations. The lower and more variable female estimates in that work traced to the shared-environment component of the model rather than to any difference in the genetic architecture between the sexes.

The second row comes from an analysis of [294,831 markers in 3,925 unrelated individuals](https://pubmed.ncbi.nlm.nih.gov/20562875/), which reported that 45 per cent of variance could be explained by considering all markers simultaneously. The third comes from a study assembling data on [5.4 million people](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/), in which 12,111 independent variants accounted for 40 per cent of phenotypic variance in European-ancestry populations and only around 10 to 20 per cent in populations of other ancestries — a portability failure taken up in the companion piece on [what an association study can establish](/en/biology/genetics/genome-wide-association-studies-explained).

Read as a set, these rows are a description of measurement, not of biology. Each method sees a different slice of the genetic variance, and quoting one without naming the method is how a heritability figure loses its meaning in transit.

## Heritability across traits, and the additivity result

The broadest survey available pooled twin correlations for [17,804 traits from 2,748 publications](https://pubmed.ncbi.nlm.nih.gov/25985137/), covering 14,558,903 partly dependent twin pairs — close to every published twin study of a complex trait. Reported heritability across all of them averaged 49 per cent, and estimates clustered strongly by functional domain rather than scattering at random.

The more consequential finding in that survey concerns model shape. For 69 per cent of traits, the observed twin correlations were consistent with a simple additive model, and the data were inconsistent with substantial influence from shared environment or from non-additive genetic variation. That result underwrites the use of additive polygenic models throughout human genetics. It is also a statement about average behaviour across thousands of traits, not a licence to assume additivity for any particular one.

## What closed most of the missing heritability

When the first wave of association studies reported that their significant hits explained only a small fraction of the heritability estimated from families, the gap was named [missing heritability](https://pmc.ncbi.nlm.nih.gov/articles/PMC2831613/) and treated as a puzzle about where the genetic signal had gone. For some traits the explained fraction was [more than ten times smaller](https://pubmed.ncbi.nlm.nih.gov/31165258/) than the family-based expectation.

Most of the gap turned out to be an artefact of the significance threshold rather than a mystery about biology. The genomic-relatedness result above showed that the variance was still there, distributed across thousands of variants whose individual effects were too small to pass a genome-wide test. Larger samples then confirmed the prediction directly: at 5.4 million participants, the named height variants accounted for nearly all of the common-variant heritability, clustered in 7,209 genomic segments covering roughly 21 per cent of the genome.

A residual gap remains between the 0.45 tagged by common markers and the 0.8-plus estimated from pedigrees. Part of it is incomplete linkage disequilibrium and causal variants at frequencies lower than genotyping arrays sample well — and that frequency spectrum is itself a product of [population history and drift](/en/biology/evolution/genetic-drift-and-population-size) rather than of anything about the trait. Part of it is probably upward bias in the pedigree estimates themselves, since assortative mating — people pairing non-randomly by height — inflates the resemblance that a twin model attributes to additive genetics. Non-sequence transmission is occasionally offered as a third explanation, but the mammalian evidence reviewed under [epigenetic inheritance and its limits](/en/biology/genetics/epigenetics-explained) does not currently support a contribution on that scale. Which part dominates is not settled, and the honest description of the field is that the two families of estimate have converged without fully reconciling.

## The inferences the statistic does not support

The most common error is to read a high heritability as evidence that a trait is immovable — that a large genetic share implies a fixed outcome. Phenylketonuria takes genetic causation to its limit and shows the inference failing anyway. [MedlinePlus](https://medlineplus.gov/genetics/condition/phenylketonuria/) describes it as occurring in 1 in 25,000 newborns in the United States, caused by variants in the *PAH* gene and inherited in an autosomal recessive pattern, with its damaging effects arising from the accumulation of phenylalanine that the body cannot process. The genotype settles the enzyme; how much of the substrate arrives is a separate matter. Heritability quantifies the sources of variation in a population as it currently is; it does not bound what an environmental change could do.

The second error is to carry a within-population statistic across a population boundary. The eight-country twin analysis provides its own counter-example in the same tables that carry its heritability estimates. Mean male height ranged from 177 cm in Italy to 184 cm in the Netherlands, and mean female height from 163 cm to 171 cm across the same two, while male heritability sat between 0.87 and 0.93 in every one of the eight countries. High and near-identical heritability within each population, and a seven-centimetre gap between two of them that the heritability figures explain nothing about. The partition of variance is computed inside a population; it contains no term for why two populations have different means, and the arithmetic of the estimate cannot be extended to produce one.

The third is subtler and concerns the assumptions rather than the interpretation. Twin designs rest on the premise that identical and fraternal twin pairs experience equally similar environments, which is testable but not automatically true. Gene–environment correlation, where a genetic propensity influences the environment a person ends up in, is counted as genetic variance by these models even when the causal path runs through the environment. Estimates are also drawn overwhelmingly from wealthy, well-fed, mostly European-ancestry cohorts, and the restricted environmental range those cohorts represent is exactly the sort of thing that pushes a heritability estimate up. A number produced under narrow conditions describes those conditions.

A published heritability figure is therefore interpretable only alongside four things: the population it was estimated in, the range of environments that population spanned, the method used, and the exact trait definition. A figure travelling without them has the shape of a fact and very little of the content — a general problem in how quantitative results move from a dataset into a headline, examined in [uncertainty lost between dataset and headline](/en/insight/uncertainty-lost-between-dataset-and-headline).

## Sources

1. **MedlinePlus Genetics, NIH/NLM** — [Is height determined by genetics?](https://medlineplus.gov/genetics/understanding/traits/height/). The commonly quoted 80 per cent figure and the non-genetic influences on adult height.
2. **Twin Research (via PubMed)** — [Heritability of adult body height: a comparative study of twin cohorts in eight countries](https://pubmed.ncbi.nlm.nih.gov/14624724/). Twin-based heritability estimates by sex and country, and the country means for adult height.
3. **Nature Genetics (via PubMed)** — [Common SNPs explain a large proportion of the heritability for human height](https://pubmed.ncbi.nlm.nih.gov/20562875/). The 45 per cent estimate from genomic relatedness among unrelated individuals.
4. **Nature (via PubMed Central)** — [A saturated map of common genetic variants associated with human height](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/). Variance explained by named variants at 5.4 million participants, and its drop outside European-ancestry samples.
5. **Nature Genetics (via PubMed)** — [Meta-analysis of the heritability of human traits based on fifty years of twin studies](https://pubmed.ncbi.nlm.nih.gov/25985137/). Trait and study counts, the 49 per cent average, and the additivity result.
6. **Nature (via PubMed Central)** — [Finding the missing heritability of complex diseases](https://pmc.ncbi.nlm.nih.gov/articles/PMC2831613/). Statement of the missing-heritability problem and the proposed explanations.
7. **Human Genetics (via PubMed)** — [Missing heritability of complex diseases: case solved?](https://pubmed.ncbi.nlm.nih.gov/31165258/). Scale of the original discrepancy and a review of how much of it has since been accounted for.
8. **MedlinePlus Genetics, NIH/NLM** — [Phenylketonuria](https://medlineplus.gov/genetics/condition/phenylketonuria/). Frequency, gene, inheritance pattern, and the dependence of outcome on dietary phenylalanine.
