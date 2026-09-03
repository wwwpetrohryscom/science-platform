---
title: 'Convergent evolution: what repeated solutions do and do not tell us'
excerpt: Unrelated lineages arrive at similar traits often enough that convergence is used as evidence of adaptation and as a guide to causal mutations. It is also generated in quantity by chance, which makes the null model the hard part.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - evolution
  - convergent-evolution
  - molecular-evolution
  - phylogenetics
  - adaptation
related:
  - evolution-explained
  - natural-selection-and-adaptation
  - speciation-mechanisms
  - antibiotic-resistance-evolution-mechanisms
pillar: evolution-explained
_bodyHash: 32cf6728
---

A gliding membrane in a squirrel and in a marsupial is the version of convergence everyone learns, and it is the least informative version. Similar bodies under similar physics are cheap to explain and hard to test. The interesting claims are made at finer resolution — the same enzyme, the same amino acid position, the same substitution in the same order — because that is where a repeated outcome starts to say something about how constrained the available paths are. It is also where the statistical difficulty begins, since molecular similarity accumulates between unrelated lineages by chance at a rate that has to be estimated before any excess can be claimed. Both halves of that story belong in an account of [how evolutionary change is produced and tested](/en/biology/evolution/evolution-explained).

## Three words that are not interchangeable

The vocabulary is worth fixing early, because the terms encode different claims about what happened.

| Term | Ancestral condition | What a match indicates |
| --- | --- | --- |
| Homology | The common ancestor had the trait | Shared descent; the similarity is inherited, not re-derived |
| Parallelism | The common ancestor lacked the trait but shared the developmental or genetic starting point | Independent origins constrained down similar channels |
| Convergence | The common ancestor lacked both the trait and the starting point | Independent origins from different material |

The boundary between the middle two is not fixed by nature. Whether two origins count as parallel or convergent depends on how deep the comparison reaches: lineages that look convergent at the level of anatomy may prove to have redeployed the same regulatory gene, which reads as parallelism the moment the genetic basis is known. **Homoplasy** is the neutral umbrella term for any similarity not inherited from a common ancestor, and it is the word to reach for when the mechanism is undetermined.

## When the repetition reaches the individual residue

Milkweeds and their relatives produce cardiac glycosides, which block the sodium pump Na⁺/K⁺-ATPase — a protein no animal can do without. Insects from six orders have independently colonised such plants, and many have acquired amino acid substitutions in the α-subunit of that pump. The substitutions are not scattered: three positions, 111, 119 and 122, change repeatedly across lineages.

Genome editing turned that pattern into a causal test. CRISPR base editing applied to the native gene in *Drosophila melanogaster* [retraced the mutational path taken in the monarch lineage](https://pmc.ncbi.nlm.nih.gov/articles/PMC7039281/), producing triple-mutant flies as insensitive to cardiac glycosides as monarch butterflies themselves, which also retained small amounts of the toxin through metamorphosis. The order in which the substitutions appeared was not arbitrary either: earlier changes ameliorate the costs of later ones through epistasis, so some sequences of steps are accessible and others are not.

The same target has been examined in leaf-mining flies feeding on plants from four botanical families that independently evolved cardiac glycosides of two structural classes. Five of six exposed species carried [substitutions in the toxin-binding site previously described in other insect orders](https://pubmed.ncbi.nlm.nih.gov/28731826/), and in only one species was the gene duplicated instead. Repeatability of this kind is what makes convergence useful as a search strategy: it nominates candidate sites, which editing can then confirm or reject.

## The same job, done with different genes

Convergence at the level of function carries no guarantee of convergence at the level of sequence, and the clearest demonstration is antifreeze. Antarctic notothenioid fishes and northern cods sit in different superorders and produce near-identical antifreeze glycoproteins built from the same simple glycotripeptide repeat. The genes are not the same genes. Notothenioid antifreeze genes derive from a pancreatic trypsinogen; the Arctic cod genes [share no sequence identity with trypsinogen](https://pmc.ncbi.nlm.nih.gov/articles/PMC20524/), have a different intron–exon organisation and different spacer sequences, and encode the repeated tripeptide using a different permutation of codons.

Two lineages therefore reached the same molecule from unrelated genomic starting material, under the same physical constraint of ice formation in body fluids. That is the strongest form of the convergence argument, and it is also a caution: identifying a shared function tells you nothing about whether the underlying [adaptation](/en/glossary/evolutionary-adaptation) has a shared genetic basis until the genes are sequenced.

## Counting the origins

Where a trait's origins can be tallied against a phylogeny, the counts are often startling. C4 photosynthesis — the carbon-concentrating modification that suppresses photorespiration in warm, high-light conditions — has been placed on the plant tree in enough detail to count. A 2016 census of the C4 flora identifies [61 independent C4 lineages](https://academic.oup.com/jxb/article-lookup/doi/10.1093/jxb/erw156), with further ancillary origins possible within 12 of them, together producing roughly 8,100 C4 species: 5,044 grasses, 1,322 sedges and 1,777 eudicots. The oldest and most species-rich lineage, the grass subfamily Chloridoideae, is estimated at close to 30 million years; most lineages are younger than 15 million years, and those younger than about 7 million years contain fewer than 43 species each.

Sixty-one origins of a multi-step biochemical and anatomical syndrome is a strong statement about accessibility: the intermediate states must be reachable and useful, not merely conceivable. It also carries an ecological reading, since the clustering of origins in time points at a shared external driver rather than sixty-one coincidences. How that pathway alters carbon fixation at ecosystem scale is treated separately under [primary production and energy flow](/en/ecology/ecosystems/primary-production-and-energy-flow).

## How much convergence should be expected anyway?

The hardest problem in this field is not finding convergence but knowing how much to expect without it. The dispute over echolocating mammals is the clearest worked example, and it remains the standard cautionary case.

An analysis of 805,053 amino acids across 2,326 orthologous genes in 22 mammals, including four newly sequenced bat genomes, reported [signatures consistent with convergence at nearly 200 loci](https://pmc.ncbi.nlm.nih.gov/articles/PMC3836225/) shared between echolocating bats and the bottlenose dolphin, with hearing-related genes prominent — and, unexpectedly, many vision genes as well. Two responses published together in 2015 disputed the inference rather than the data. One showed that convergence between echolocating lineages was [generally no stronger than between echolocating and comparable non-echolocating lineages](https://pmc.ncbi.nlm.nih.gov/articles/PMC4408410/), including for the set of 29 hearing-related proteins claimed to be enriched. The other showed that the statistic used — site-specific likelihood support, calibrated against simulated topologies — [does not adequately measure convergence](https://pmc.ncbi.nlm.nih.gov/articles/PMC4408409/), and that an empirical null comparing convergent substitutions between all pairs of species leaves no surprising excess, even in sensory genes.

The methodological point generalises well beyond bats. Convergent substitutions are common in any genome comparison because the amino acid alphabet is small and many sites are constrained to a handful of tolerated states. A count of shared changes between two focal lineages is therefore uninterpretable on its own; what matters is the count relative to lineage pairs matched for divergence time and rate. Convergence is also why similarity can mislead a tree-building method that treats shared states as evidence of shared ancestry — the same failure mode, seen from the phylogenetic side, that makes barriers to gene flow difficult to read off [patterns of genomic divergence between close relatives](/en/biology/evolution/speciation-mechanisms).

## What repetition licenses

Read carefully, these cases support a bounded claim. Where selection pressure is sharply defined and the number of molecular solutions is small, outcomes repeat often enough to be anticipated: the binding sites of toxins and drugs on highly conserved proteins are the recurring examples, and the [evolution of antibiotic resistance](/en/biology/evolution/antibiotic-resistance-evolution-mechanisms) is the case with the densest observational record. Where the trait is a whole organism in a whole environment, the number of routes is far larger, the constraints are weaker, and the record supports no comparable expectation.

That asymmetry is the useful takeaway, and it also sets the boundary of the inference. Repetition is evidence that a path is accessible, not that it was inevitable, and demonstrating that a repeated trait is adaptive still requires the ordinary tests of [how adaptive hypotheses are examined](/en/biology/evolution/natural-selection-and-adaptation) rather than an appeal to the repetition itself.

## Sources

1. **Nature (via PubMed Central)** — [Genome-wide signatures of convergent evolution in echolocating mammals](https://pmc.ncbi.nlm.nih.gov/articles/PMC3836225/). The original genome-wide claim, its scale in amino acids, genes and taxa, and the loci reported.
2. **Molecular Biology and Evolution (via PubMed Central)** — [No genome-wide protein sequence convergence for echolocation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4408410/). Comparison of echolocating and non-echolocating lineage pairs, including the hearing-related protein set.
3. **Molecular Biology and Evolution (via PubMed Central)** — [Determining the null model for detecting adaptive convergence from genomic data](https://pmc.ncbi.nlm.nih.gov/articles/PMC4408409/). Why the site-specific likelihood approach fails and what an empirical null shows.
4. **PNAS (via PubMed Central)** — [Convergent evolution of antifreeze glycoproteins in Antarctic notothenioid fish and Arctic cod](https://pmc.ncbi.nlm.nih.gov/articles/PMC20524/). Separate genomic origins for a near-identical protein.
5. **Nature (via PubMed Central)** — [Genome editing retraces the evolution of toxin resistance in the monarch butterfly](https://pmc.ncbi.nlm.nih.gov/articles/PMC7039281/). The three repeatedly substituted sites, the edited flies, and the role of epistasis in ordering the path.
6. **Journal of Experimental Botany** — [A portrait of the C4 photosynthetic family on the 50th anniversary of its discovery](https://academic.oup.com/jxb/article-lookup/doi/10.1093/jxb/erw156). Count of independent C4 lineages, species totals by group, and lineage ages.
7. **The American Naturalist (via PubMed)** — [Convergently evolved toxic secondary metabolites in plants drive the parallel molecular evolution of insect resistance](https://pubmed.ncbi.nlm.nih.gov/28731826/). Repeated binding-site substitutions across independent leaf-mining fly lineages.
