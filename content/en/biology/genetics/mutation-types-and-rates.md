---
title: 'Mutation: how much, of what kind, and how much of it matters'
excerpt: Mutation covers events spanning eight orders of magnitude in size. Trio sequencing has pinned the human germline rate near 1.2 × 10⁻⁸ per base per generation, and the same datasets show why most of what it produces is harmless.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 9
tags:
  - mutation-rate
  - de-novo-variants
  - structural-variation
  - somatic-mutation
  - population-genetics
related:
  - what-is-dna
  - dna-replication-and-repair
  - what-is-a-genome
  - heritability-explained
pillar: what-is-dna
_bodyHash: 638f5143
---

The word covers a single swapped base and the gain of an entire chromosome arm, events separated by eight orders of magnitude in the amount of sequence involved. They arise by different mechanisms, are detected by different methods, occur at rates that do not convert into one another, and have completely different consequence distributions. Most apparent contradictions between published mutation figures come from comparing counts of one class with counts of another. Sorting by scale first is what makes the numbers usable — and it is worth doing before any of them are attached to [DNA as an information carrier](/en/biology/genetics/what-is-dna) in a way that implies more than they support.

## A census by scale

The 1000 Genomes Project's completed phase, covering 2,504 individuals from 26 populations, produced the most widely used census of what a single human genome contains. It catalogued more than 88 million variants overall — 84.7 million single-nucleotide polymorphisms, 3.6 million short insertions and deletions, and 60,000 structural variants — and characterised what a typical genome carries.

| Class | Typical size | Count in one genome |
| --- | --- | --- |
| Single-nucleotide variants and short indels | 1–50 bp | 99.9 per cent of the 4.1–5.0 million sites at which a genome differs from the reference |
| Large deletions | >50 bp | about 1,000 |
| *Alu* insertions | ~300 bp | about 915 |
| L1 insertions | up to ~6 kb | about 128 |
| SVA insertions | ~2 kb | about 51 |
| Copy-number variants | kb to Mb | about 160 |
| Inversions | kb to Mb | about 10 |

The arithmetic that table invites is the part usually missed. The structural classes below the first row total between 2,100 and 2,500 events — about a twentieth of one per cent of the sites at which a genome differs from the reference — and between them they rearrange some 20 million bases. The four to five million single-base differences account for four to five million bases. Counting events and counting affected sequence therefore give opposite impressions of which class dominates a genome, and a paper reporting one is easy to misread as reporting the other.

## What trio sequencing measured

Population catalogues describe standing variation, most of it inherited and old. The rate at which *new* mutations appear requires sequencing parents and offspring together and finding the alleles present in the child and in neither parent.

The first high-coverage study of this kind sequenced 78 Icelandic parent–offspring trios and reported an average [de novo mutation](/en/glossary/de-novo-mutation) rate of 1.20 × 10⁻⁸ per nucleotide per generation, at an average paternal age of 29.7 years. A later study from the same group extended it to 1,548 trios, identifying 108,778 de novo mutations and assigning a parent of origin to 42,961 of them — on the order of seventy new mutations entering each genome per generation. Against a genome of roughly three billion bases, seventy is the number that the [three-stage fidelity system of replication and repair](/en/biology/genetics/dna-replication-and-repair) leaves behind.

## The paternal age effect is a statement about supply

The most robust finding in this literature is that the number of de novo mutations depends far more on the father's age than on anything else measured. The 78-trio study found an increase of about two mutations per year of paternal age, with an exponential model implying that paternal mutations double every 16.5 years, and concluded that after accounting for Poisson variation, the father's age explained nearly all remaining variation in de novo counts.

The larger cohort separated the parental contributions precisely: mutations from mothers increase by 0.37 per year of age (95 per cent CI 0.32–0.43), against 1.51 per year from fathers (95 per cent CI 1.45–1.57). The maternal contribution is not simply the smaller version of the paternal one. Clustered mutations increase faster with maternal age, maternal clusters span more sequence, and the *types* of mutation a mother transmits shift substantially with her age — C>G mutations rise by 0.33 per cent per year while CpG>TpG mutations fall by 0.26 per cent. Most striking, these age-related changes are not spread evenly: a 20-megabase region on chromosome 8p carries a maternal C>G rate up to fiftyfold above the rest of the genome.

Read carefully, this is a statement about the supply of new variation in a population, not a prognosis for anyone. An extra 1.5 mutations per paternal year against a per-generation baseline near seventy changes the input to selection and drift. It does not translate into an individual probability of anything without knowing what those particular mutations hit, which the counts alone cannot say.

## Rate is a trait, not a constant

Across the tree of life the per-base rate varies enormously while the per-genome rate does not. Comparing DNA-based microbes whose genome sizes span roughly 6,500-fold, per-base-pair mutation rates were found to vary by about 16,000-fold — yet per-genome rates varied only around 2.5-fold, clustering near 0.0033 mutations per DNA replication. The per-base rate is close to inversely proportional to genome size, which is what one expects if selection acts on the mutational burden per replication rather than on fidelity per nucleotide.

Viruses sit outside that regularity and show their own gradient. A systematic review of more than 40 original estimates put DNA viruses at 10⁻⁸ to 10⁻⁶ substitutions per nucleotide per cell infection and RNA viruses at 10⁻⁶ to 10⁻⁴, with nucleotide substitutions about four times more common than insertions or deletions. Rates spanning four orders of magnitude between virus groups are one reason the mutational supply available to a pathogen differs so much between systems, a theme that recurs in [how antibiotic resistance evolves](/en/biology/evolution/antibiotic-resistance-evolution-mechanisms).

## Somatic mutation is a separate ledger

Germline mutations enter through the gametes and appear in essentially every cell of the resulting organism; somatic mutations arise during a lifetime, exist in a subset of cells, and are not transmitted to offspring. The two are measured differently and answer different questions.

A comparative study sequenced 208 intestinal crypts from 56 individuals across 16 mammal species and found that somatic mutation rates per year vary greatly between species, with a strong inverse relationship to lifespan — no other life-history trait tested showed a comparable association. The striking result was the convergence at the end: despite around 30-fold variation in lifespan and around 40,000-fold variation in body mass among those species, the accumulated somatic burden at the end of life varied only by a factor of about three. Endogenous processes, chiefly 5-methylcytosine deamination and oxidative damage, dominated in every species.

## Why mutation is not a synonym for harm

This is where popular usage and technical usage part company. Clinical genetics reference material from the US National Library of Medicine now prefers "gene variant" to "gene mutation" precisely because "changes in DNA do not always cause disease", and states plainly that most variants do not lead to disease and that the ones that do are uncommon in the general population.

The catalogue data make the point quantitatively. A typical human genome contains 149 to 182 sites carrying protein-truncating variants and 10,000 to 12,000 sites with peptide-sequence-altering variants, alongside 459,000 to 565,000 variant sites overlapping annotated regulatory regions. The people carrying those genomes are, in the ordinary case, well. Most of what any genome carries is also common rather than rare: only about 1 to 4 per cent of the variants in a typical genome — some 40,000 to 200,000 of them — occur at frequencies below 0.5 per cent.

Rarity is where consequence concentrates. A reference map of structural variation built from 14,891 genomes catalogued 433,371 structural variants and estimated that they account for 25 to 29 per cent of all rare protein-truncating events per genome, despite being far less numerous than point mutations. It also found very large rare structural variants, over a megabase, in 3.9 per cent of samples, and estimated that 0.13 per cent of individuals carry one meeting existing criteria for clinically important incidental findings. A class of variation can be a small minority of events and still carry a disproportionate share of the functional impact — which is also why association studies keyed to common single-base markers, described in [what a genome-wide association study can establish](/en/biology/genetics/genome-wide-association-studies-explained), systematically under-see it.

## Four limits on all of the above

The per-generation figures come overwhelmingly from one relatively homogeneous population sequenced by one group. That is a strength for internal consistency and a weakness for generality; whether the human germline rate is identical across populations is not settled by those cohorts.

De novo mutation calling has structured, not random, false negatives. Short reads under-detect variants in repeats, segmental duplications and homonucleotide runs — precisely the sequence contexts where indel and structural mutation rates are highest, as [the repeat content of genomes](/en/biology/genetics/what-is-a-genome) makes clear. Published per-generation counts are therefore lower bounds.

Somatic rates are tissue-specific by construction. Intestinal crypts were chosen because they are clonal and comparable across species, not because they represent neurons, hepatocytes or germline precursors.

And the distribution of fitness effects — how many new mutations are neutral, how many mildly deleterious, how few advantageous — is inferred from allele-frequency patterns under population-genetic models rather than measured directly. That inference is what connects a mutation rate to an evolutionary outcome, and it depends on effective population size in the way set out in [genetic drift and population size](/en/biology/evolution/genetic-drift-and-population-size). It is also why a mutation rate on its own supports no claim about how much of a trait's variation is genetic, a separate question handled in [heritability as a variance ratio](/en/biology/genetics/heritability-explained).

## Sources

1. **1000 Genomes Project Consortium, *Nature*** — [A global reference for human genetic variation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4750478/). Cohort size, total variant catalogue, and the per-genome counts of single-nucleotide, indel and structural variation.
2. **Kong and colleagues, *Nature*** — [Rate of de novo mutations and the importance of father's age to disease risk](https://pmc.ncbi.nlm.nih.gov/articles/PMC3548427/). The 1.20 × 10⁻⁸ per-nucleotide rate, the two-mutations-per-paternal-year effect and the 16.5-year doubling model.
3. **Jónsson and colleagues, *Nature*** — [Parental influence on human germline de novo mutations in 1,548 trios from Iceland](https://pubmed.ncbi.nlm.nih.gov/28959963/). Maternal and paternal per-year coefficients, mutation-type shifts with age, and the chromosome 8p C>G region.
4. **Drake, *PNAS*** — [A constant rate of spontaneous mutation in DNA-based microbes](https://pmc.ncbi.nlm.nih.gov/articles/PMC52253/). Per-genome versus per-base-pair mutation rates across microbial genome sizes.
5. **Sanjuán and colleagues, *Journal of Virology*** — [Viral mutation rates](https://pmc.ncbi.nlm.nih.gov/articles/PMC2937809/). Substitution rates per nucleotide per cell infection for DNA and RNA viruses, and the substitution-to-indel ratio.
6. **Cagan and colleagues, *Nature*** — [Somatic mutation rates scale with lifespan across mammals](https://pmc.ncbi.nlm.nih.gov/articles/PMC9021023/). Cross-species somatic mutation rates, the lifespan relationship and end-of-life burden convergence.
7. **Collins and colleagues, *Nature*** — [A structural variation reference for medical and population genetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC7334194/). The gnomAD structural-variant catalogue and the share of rare protein-truncating events attributable to it.
8. **MedlinePlus Genetics, US National Library of Medicine** — [What is a gene variant and how do variants occur?](https://medlineplus.gov/genetics/understanding/mutationsanddisorders/genemutation/). Germline versus somatic variants and the terminology shift from mutation to variant.
