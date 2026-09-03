---
title: 'Genetic drift: why population size decides whether selection matters'
excerpt: Drift is the allele-frequency change that comes from finite sampling alone. Because its strength scales inversely with effective population size, that one parameter decides which selection coefficients are visible to evolution and which are invisible.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - genetic-drift
  - effective-population-size
  - neutral-theory
  - conservation-genetics
  - population-genetics
related:
  - evolution-explained
  - natural-selection-and-adaptation
  - speciation-mechanisms
  - species-extinction-risk-assessment
pillar: evolution-explained
_bodyHash: a6ec2b27
---

Every generation is a sample. A population produces far more gametes than become offspring, and which ones make it through is partly a matter of who happened to find a mate, who happened to be eaten before breeding, and which of two equally good copies a parent happened to pass on. The National Human Genome Research Institute defines genetic drift as random fluctuation in the frequency of an allele in a population, and notes that although the effect is strongest in small, isolated groups it can be powerful enough to fix a variant or erase it entirely. That is the whole mechanism. The consequences are less obvious than the definition.

The arithmetic is unforgiving. In a diploid population of *N* breeding individuals, the variance in an allele's frequency introduced by one generation of sampling is p(1 − p)/2N, where p is the current frequency. Halve the population and the sampling noise doubles. A new neutral mutation, present as a single copy, has a probability of eventually reaching fixation equal to 1/(2N) — vanishingly small in a large population, but a real possibility in a small one, with no reference at all to whether it does the organism any good.

Drift has no direction, which is why it is often described as doing nothing in particular. That is a misreading. Over generations it does something entirely predictable: it removes variation. Alleles wander until they hit zero or one, and each fixation or loss is permanent unless mutation or migration restores the variant. The direction of any single step is random; the destination is not. Placing that process alongside the others is the subject of the overview on [what changes when a population evolves](/en/biology/evolution/evolution-explained).

## Effective size is a rate, not a headcount

The *N* in those formulas is not the number of animals a survey counts. It is the **effective population size**, conventionally written Ne and defined as the size of an idealised population that would experience the same amount of a given genetic property — drift, or the accumulation of inbreeding — as the real one. A population of ten thousand in which twenty males father almost everything drifts like a far smaller group, and it is that smaller number that governs its genetics.

Several ordinary features of real populations pull Ne below census size: skewed sex ratios among actual breeders, high variance in reproductive success, overlapping generations, and fluctuation in size over time, which weights the small years heavily. Conservation genetics has settled on a working figure for the gap. When no genetic data are available, practice is to use census size as a proxy with a rule-of-thumb averaged ratio of 0.10 — an order-of-magnitude correction applied by default, which is itself a statement about how routinely the two quantities diverge.

That correction now has policy weight. The Kunming-Montreal Global Biodiversity Framework adopted, as a headline indicator, the number of populations within a species with an effective size above 500 compared with the number below it. Whether 500 is the right line is contested: it has been criticised as too permissive, with a threshold of 1,000 proposed instead, and the argument is sharpest for species with low fecundity, where the ratio between effective and census size is unusually high. How thresholds of this kind behave once they become reporting instruments is a recurring theme in [the design of biodiversity indicators](/en/ecology/biodiversity/biodiversity-indicators-explained).

## Which Ne is being reported

The single symbol conceals a family of quantities. Inbreeding, variance, additive-variance, eigenvalue, coalescent and metapopulation effective sizes coincide only when a population is closed and at mutation-drift equilibrium, which is a description of almost no wild population. Estimation methods each assume some combination of no immigration, random mating, random sampling, absence of spatial genetic structure, and equilibrium — assumptions that are seldom examined and rarely met.

The practical consequence is stated bluntly in the current conservation-genetics literature: depending on sampling design and analytical method, estimates of Ne for the same population can differ by orders of magnitude. A reported effective size without its method, its assumed spatial scale, and the time period it refers to is close to uninterpretable. This is not a marginal caveat; it is the main obstacle to using Ne as a monitoring quantity at all.

## The threshold below which selection stops mattering

The reason drift belongs in an argument about selection is that the two are not independent. Selection changes allele frequencies at a rate set by the selection coefficient *s*; drift changes them at a rate set by 1/Ne. When |s| is much larger than 1/Ne, selection dominates and the allele's fate is essentially deterministic. When |s| is smaller, the allele behaves as though it were neutral, however beneficial or harmful it is in principle. The same mutation can therefore be visible to selection in one species and invisible in another purely because of demography — a point developed from the selection side in [how the strength of selection is actually measured](/en/biology/evolution/natural-selection-and-adaptation).

This is the core of the **nearly neutral theory**, which posits a substantial class of alleles weakly enough selected that both processes govern their dynamics. Because slightly deleterious mutations far outnumber slightly advantageous ones, the theory predicts a negative correlation between a lineage's substitution rate and its effective size: small populations fix mildly harmful changes that large populations purge. The prediction has held up against comparative data. Among mammals, lineages with long generation times tend to have smaller effective sizes, and the ratio of non-synonymous to synonymous divergence is correspondingly higher in the human-chimpanzee comparison than in the mouse-rat comparison.

## Founder events and bottlenecks do not always do what is expected

A **founder effect**, in NHGRI's definition, is the reduction in genomic variability that occurs when a small group separates from a larger population, after which the new subpopulation carries genotypes resembling those few founders rather than the source. A bottleneck is the same sampling event applied to a population that stays in place while its numbers crash. Both reduce variation at the moment they happen.

What follows is less predictable, and one Antarctic case shows why. A colony of southern elephant seals occupied the Victoria Land Coast for roughly seven millennia after ice-sheet retreat opened the beaches around 8,000 years before present, before disappearing about a thousand years ago. Ancient DNA from the colony's earlier phase, between about 7,100 and 3,000 years before present, recovered 58 haplotypes across 49 segregating sites; the later phase yielded 128 haplotypes and 79 segregating sites. The likely source population at Macquarie Island, some 1,500 km away, carries only 15 haplotypes and 23 segregating sites today. Diversity in the founded colony rose rather than fell, which the authors attribute to rapid growth and a sustained large size after establishment. A founder event sets the starting point; the demographic trajectory afterwards decides what survives of it.

Human genomes carry the same kind of history. Coalescent analysis of thirty-four genomes from nine populations recovers a shared decline in all non-African lineages from about 200,000 years ago until roughly 50,000 years ago, consistent with a bottleneck at the dispersal out of Africa around 40,000 to 60,000 years ago, followed by very large increases — ancestral effective sizes above a million in some East Asian lineages by 2,000 years ago. Those inferences are scaled quantities: converting them into individuals and years requires dividing by an assumed mutation rate and multiplying by an assumed generation time, so the shape of the curve is far better constrained than its absolute height. The relationship between such demographic histories and the emergence of separate lineages is taken up in [how reproductive isolation arises](/en/biology/evolution/speciation-mechanisms).

## Very small populations, and the case that was actually monitored

The best-documented intervention is the Florida panther. By the mid-1990s the population comprised roughly two dozen breeding adults, with the associated inbreeding, and in 1995 eight female pumas from Texas were translocated into it. Average individual microsatellite heterozygosity rose to 25 per cent from 18.4 per cent measured in 1993. Admixed kittens showed increased survival relative to non-admixed ones, and the frequency of cryptorchidism fell. In the southern Big Cypress National Preserve, an area of 2,174 km², panther numbers rose eightfold, from 3 animals to 25, and the wider population reached at least 95 adults by 2003.

The result is a clean demonstration that the genetic component of small-population decline is real and, in this instance, reversible. It is not a general prescription: the outcome depended on an available source population of the same species, on habitat that could support growth, and on continued management, and single well-monitored cases do not establish an expected effect size. What the panther record does establish is that when a population becomes small enough for drift to overwhelm selection, the losses are genetic as well as demographic — a consideration that now runs alongside abundance and range in [formal assessments of extinction risk](/en/ecology/conservation/species-extinction-risk-assessment) and in the design of [recovery programmes for depleted species](/en/ecology/conservation/endangered-species-recovery-programmes).

## Sources

1. **National Human Genome Research Institute** — [Genetic drift (Talking Glossary of Genomic and Genetic Terms)](https://www.genome.gov/genetics-glossary/Genetic-Drift). Definition of drift and its dependence on population size and isolation.
2. **National Human Genome Research Institute** — [Founder effect](https://www.genome.gov/genetics-glossary/Founder-Effect). Definition of the founder effect and the reduction in variability it produces.
3. **Evolutionary Applications** — [Dealing with the complexity of effective population size in conservation practice](https://pmc.ncbi.nlm.nih.gov/articles/PMC11645448/). Definition and types of Ne, the 0.10 census ratio, the 500 and 1,000 thresholds, and the orders-of-magnitude spread between estimation methods.
4. **Genome Biology and Evolution** — [Near-neutrality, robustness, and epigenetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC3227401/). The nearly neutral theory, the predicted rate-Ne correlation, and the primate versus rodent divergence comparison.
5. **Science (Johnson and colleagues)** — [Genetic restoration of the Florida panther](https://pmc.ncbi.nlm.nih.gov/articles/PMC6993177/). Translocation details, heterozygosity change, kitten survival, and population and density figures.
6. **Proceedings of the Royal Society B** — [Rapid increase in southern elephant seal genetic diversity after a founder event](https://pmc.ncbi.nlm.nih.gov/articles/PMC3924085/). Haplotype and segregating-site counts for the Victoria Land Coast colony and its source population.
7. **Nature Genetics** — [Inferring human population size and separation history from multiple genome sequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC4116295/). Inferred effective-size trajectories, the out-of-Africa bottleneck, and the scaling caveat on absolute sizes.
