---
title: 'Phylogenetics: reconstructing history from present-day data'
excerpt: A phylogenetic tree is an estimate produced by a model from living molecules, and every figure attached to it describes the estimate rather than the past. Here is where the errors enter and what the support values really measure.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - phylogenetics
  - molecular-evolution
  - systematics
  - statistical-inference
  - molecular-clock
related:
  - taxonomy-and-classification-explained
  - the-tree-of-life-and-domains
  - what-is-a-species
  - zoology-animal-diversity-explained
pillar: taxonomy-and-classification-explained
---

Nobody observes an ancestor. A phylogeny is an estimate, produced by fitting a model of how sequences change to molecules collected from organisms alive today, and every number printed on a published tree — branch length, support value, divergence date — is a property of that estimate rather than of history. Reading trees well means knowing which parts of the picture the data constrain tightly and which parts the model is supplying. The naming conventions that classifications then hang on the result are handled separately in [the rules that keep names stable](/en/biology/taxonomy/taxonomy-and-classification-explained).

## Similarity that is inherited, and similarity that is not

The raw material is **homology**: similarity that two lineages share because they inherited it from a common ancestor. The confounder is **homoplasy**, similarity arising independently — through convergence, reversal, or the same site mutating repeatedly. In molecular data the third route dominates. With only four nucleotide states, a site that has changed many times will often look unchanged, and apparent distances then underestimate real ones. An alignment in that condition is described as **saturated**, and inference works best when saturation is mild.

The generalised term for what results is non-phylogenetic signal: structured noise, arising when the data violate the assumptions of the model, that competes with genuine signal during reconstruction. It matters that this is structured. Random noise averages out as datasets grow. Structured noise does not, and can instead become more confidently wrong.

## Choosing among an impossible number of trees

The number of distinct unrooted binary trees for *n* tips is the double factorial (2*n* − 5)!!. Ten tips give 2,027,025 possible trees; twenty give about 2.2 × 10²⁰; fifty give roughly 2.8 × 10⁷⁴. No search examines them all, so every method pairs a criterion for scoring a tree with a heuristic for moving through tree space.

| Approach | Scores a tree by | Principal weakness |
| --- | --- | --- |
| Parsimony | fewest character changes required | biased when rates vary strongly between branches |
| Maximum likelihood | probability of the data under an explicit substitution model | conclusions inherit the model's simplifications |
| Bayesian inference | posterior probability, sampled by Markov chain Monte Carlo | priors influence results; convergence must be demonstrated |

Model-based methods are not a way to escape assumptions but a way to state them. Their assumptions are written down, which is what makes them testable — and what makes model selection a real step rather than a formality. Selection procedures that also account for rate variation across sites [measurably improve accuracy](https://pmc.ncbi.nlm.nih.gov/articles/PMC5453245/) compared with choosing a substitution model by convention, because the rate at which sites accumulate change is itself deeply uneven, for reasons set out in the article on [mutation types and rates](/en/biology/genetics/mutation-types-and-rates).

## The artefact that grows stronger with more data

The best-known failure is **long-branch attraction**. When two lineages have accumulated much more change than their neighbours, [they tend to group together](https://pmc.ncbi.nlm.nih.gov/articles/PMC3057953/) regardless of their true relationships, because their independently acquired similarities outnumber the genuine signal linking each to its real relatives. An outgroup is a natural source of a long branch, which is why the taxa used to root a tree can distort the tree they are rooting.

A reanalysis of animal phylogenomic datasets shows the practical scale. Correcting an alignment in which mitochondrial sequences of one sponge group had been used to represent two others dropped bootstrap support for sponge monophyly from 100 per cent to 36 per cent — the strong result had been an artefact of the error rather than a finding. The same work reduced missing data from 55 to 35 per cent of the matrix and retained 14,112 unambiguously aligned positions, and its conclusion is uncomfortable: where the genuine signal is faint, adding sequence can entrench the wrong answer with high confidence. The specific dispute it belongs to is discussed in [the phylogenomic revision of animal relationships](/en/biology/taxonomy/zoology-animal-diversity-explained).

## Genes have their own histories

Even with perfect data and a perfect model, a single gene's tree need not match the species tree. Lineage sorting is stochastic: ancestral polymorphism can persist through a speciation event and be resolved differently at different loci, a process called incomplete lineage sorting. The consequence is not merely noise. For any species tree with five or more taxa there exist branch lengths for which [the most probable gene tree differs from the species tree](https://pmc.ncbi.nlm.nih.gov/articles/PMC1464820/) — an "anomaly zone" in which taking the most frequently recovered gene tree as the answer converges on the wrong topology as loci accumulate.

This is why multilocus inference moved to methods that model discordance explicitly rather than concatenating everything into one supermatrix. The review literature on the multispecies coalescent is direct about the implication: with conflicting genealogical histories throughout the genome, [resolving close relationships is not simply a matter of adding data](https://pubmed.ncbi.nlm.nih.gov/19307040/). The same coalescent machinery, applied to shallower questions, is what underlies the delimitation problem described in [the species problem](/en/biology/taxonomy/what-is-a-species).

## What a support value is measuring

Bootstrapping was introduced to phylogenetics in 1985 as a resampling procedure: keep all the taxa, [resample the characters with replacement](https://pubmed.ncbi.nlm.nih.gov/28561359/), rebuild the tree many times, and report how often each group appears. That is a measure of how repeatable a grouping is under resampling of the data you have, given the method and model you used. It is not the probability that the group is real. Systematic error is present in every resample, so a systematically misleading dataset yields high support for the same wrong clade every time — as the sponge example above shows in a single number.

Contemporary practice therefore reports more than one quantity. Fast approximations make resampling tractable on genome-scale matrices, with the second-generation ultrafast bootstrap [running about 778 times faster](https://pmc.ncbi.nlm.nih.gov/articles/PMC5850222/) than standard bootstrapping in median tests while reducing the overestimation of support caused by polytomies and severe model violation. Concordance factors report something different again: the gene concordance factor is [the percentage of decisive gene trees](https://pmc.ncbi.nlm.nih.gov/articles/PMC7475031/) containing a given branch, and the site concordance factor the percentage of decisive sites supporting it. A branch with 100 per cent bootstrap support and a gene concordance factor near a third is common in phylogenomic data, and the two numbers are not in conflict — they answer different questions. Assembling and filtering the matrices behind them is its own discipline, sketched in [bioinformatics](/en/biology/biotechnology/bioinformatics-explained).

## Dates are calibrations wearing a molecular disguise

Molecular clocks convert branch lengths into time, but sequences alone contain no absolute timescale; they must be calibrated against dated evidence, almost always fossils. Uncertainty in the calibration therefore passes straight into the estimate and does not shrink when more sequence is added. An analysis of animal divergence times using a large molecular dataset and four different fossil calibration strategies found that [the ambiguity of ancient fossils and clock violations impose a limit](https://pmc.ncbi.nlm.nih.gov/articles/PMC4651906/) on achievable precision: the authors could place the origin of crown Metazoa in the Cryogenian, but not pin individual divergences precisely enough to test them against geological events, and they judged narrative reconstructions built on such dates premature.

A published tree, then, entitles a reader to rather less than it appears to. It supports statements about relative branching order where support and concordance agree; it supports statements about timing only within the interval the calibrations allow; and it says nothing at all about the classification built on top of it, since databases such as [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) organise sequences under a curated classification rather than a phylogeny. Where the inference reaches deepest — the relationships among the primary domains — those limits become the whole story, as [the deep tree and its domains](/en/biology/taxonomy/the-tree-of-life-and-domains) sets out.

## Sources

1. **PLOS Biology** — [Resolving difficult phylogenetic questions: why more sequences are not enough](https://pmc.ncbi.nlm.nih.gov/articles/PMC3057953/). Non-phylogenetic signal, saturation, long-branch attraction and the collapse of support after alignment correction.
2. **Nature Methods** — [ModelFinder: fast model selection for accurate phylogenetic estimates](https://pmc.ncbi.nlm.nih.gov/articles/PMC5453245/). Effect of substitution-model and rate-heterogeneity selection on accuracy.
3. **PLOS Genetics** — [Discordance of species trees with their most likely gene trees](https://pmc.ncbi.nlm.nih.gov/articles/PMC1464820/). The anomaly zone for five or more taxa.
4. **Trends in Ecology & Evolution** — [Gene tree discordance, phylogenetic inference and the multispecies coalescent](https://pubmed.ncbi.nlm.nih.gov/19307040/). Why added data does not resolve close relationships on its own.
5. **Evolution** — [Confidence limits on phylogenies: an approach using the bootstrap](https://pubmed.ncbi.nlm.nih.gov/28561359/). The original resampling procedure and what it was intended to show.
6. **Molecular Biology and Evolution** — [UFBoot2: improving the ultrafast bootstrap approximation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5850222/). Speed relative to standard bootstrapping and control of support overestimation.
7. **Molecular Biology and Evolution** — [New methods to calculate concordance factors for phylogenomic datasets](https://pmc.ncbi.nlm.nih.gov/articles/PMC7475031/). Definitions of the gene and site concordance factors.
8. **Current Biology** — [Uncertainty in the timing of origin of animals and the limits of precision in molecular timescales](https://pmc.ncbi.nlm.nih.gov/articles/PMC4651906/). Calibration uncertainty as the binding constraint on molecular dates.
9. **NCBI** — [Taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy). A curated classification of sequenced organisms, distinct from an inferred phylogeny.
