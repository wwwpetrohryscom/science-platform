---
title: 'Synthetic biology: engineering principles meeting biological variability'
excerpt: The field was founded on an analogy with electronics — standard parts, datasheets, predictable composition. The parts exist. What has proved harder is that the host keeps changing the circuit while it runs.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - synthetic-biology
  - metabolic-engineering
  - minimal-genome
  - biocontainment
  - biosafety
related:
  - biotechnology-explained
  - crispr-genome-editing-explained
  - protein-structure-prediction
  - bioinformatics-explained
pillar: biotechnology-explained
---

Synthetic biology began with a borrowed analogy. If electronic engineering could compose reliable systems from catalogued components with published behaviour, biology should be able to do the same: define standard parts, give each one a datasheet, abstract away the layers below, and let a designer assemble a circuit without re-deriving molecular biology each time. The programme produced real infrastructure — part registries, standard assembly formats, a generation of trained engineers — and it produced a specific and instructive failure. The parts exist. Composing them predictably is where the analogy stops holding, and the reasons are biological rather than organisational. It is the most explicitly engineering-flavoured branch of the [modern biotechnology toolkit](/en/biology/biotechnology/biotechnology-explained), and the branch where the distance between a design and its behaviour is easiest to measure.

## What standardisation was supposed to deliver

Three commitments define the founding approach. **Standardisation** means physical and functional interfaces are fixed so any part can be joined to any other. **Abstraction** means a designer can work at the level of a device without tracking its promoter sequences. **Modularity** means a part behaves the same way in a new construct as it did in the one where it was characterised.

The first two are largely engineering choices, and they worked. The third is an empirical claim about biology, and it is the one that has repeatedly failed testing. Its failure is not a detail to be fixed by better documentation; it reflects the fact that a genetic part shares a cell with everything else in it, competing for the same polymerases, ribosomes and metabolic precursors, inside a host whose physiological state varies with growth phase and medium.

## The host does not hold still

The sharpest evidence concerns evolution rather than physiology, and it comes from measuring how long engineered constructs keep working. A 2010 study propagated standard-format circuits in *Escherichia coli* without selection for their function and tracked expression until it decayed. One standard-registry circuit lost function in fewer than 20 generations, with an evolutionary half-life — the number of generations until expression fell to half its starting level — of about 7.1 generations. The cause was reproducible: a deletion between two homologous transcriptional terminators, occurring in every replicate population. A second circuit lost function within 50 generations through a deletion between repeated operator sequences in its promoter.

Both failures are recombination between repeated sequences, which is an artefact of a design philosophy that reuses standard parts. Re-engineering the first circuit to remove terminator homology more than doubled its half-life; removing the homology and cutting expression fourfold extended it more than seventeenfold, to roughly 125 generations. Across the constructs tested, half-life fell exponentially as expression rose — the more a circuit costs the cell, the faster [selection against that burden](/en/biology/evolution/natural-selection-and-adaptation) removes it. Loss of function arrived by point mutation, small insertions and deletions, large deletions and insertion-sequence transposition, so no single sequence fix closes the whole class.

This has not become a solved problem. Work published in 2025 on stabilising engineered expression in yeast by fusing a gene of interest to an essential host gene still opens by describing evolutionary instability as a persistent challenge that causes engineered expression to be lost over time — fifteen years after the measurements above, in a different organism.

## What has actually been built

Two achievements are worth stating precisely, because both are more interesting in their limitations than in their headlines.

The best-documented metabolic engineering programme reconstructed a plant pathway in yeast to supply a precursor of the antimalarial artemisinin. A review of the commercial effort records fermentative production of artemisinic acid at 25 g/L in a strain expressing the full complement of oxidation enzymes from *Artemisia annua*, grown under the same regimen as a parent strain producing 40 g/L of the hydrocarbon precursor — a conversion of about 55 mol per cent. That is a serious industrial titre. The same review then describes what happened next: after transfer between companies and five years of process work, the original route was judged to have reached its performance limits and not to be cost-effective enough for commercial production, sending chemists back to a photochemical step. The biology succeeded; the economics against an agricultural supply chain with volatile prices did not follow automatically.

The second is the minimal cell. A synthetic *Mycoplasma* genome reduced to essentials yields an organism, JCVI-syn3A, with 452 protein-coding genes — the smallest gene set for any organism able to grow independently of a host cell. The honest reading of that result is in the same annotation work: roughly one third of its proteins have no known function. A genome can be designed, chemically synthesised and booted while a third of what it encodes remains unexplained, which is a useful corrective to the idea that building something demonstrates understanding of it.

## Containment is a measurement, not a property

Because engineered organisms are alive, containment is part of the design rather than an afterthought, and the useful versions are genetic rather than physical. One approach places essential genes under both transcriptional and recombinational control, so that growth depends on a small molecule supplied only in the intended environment. In yeast, individual safeguards of this kind showed escape frequencies below 10⁻⁶, and combining two mechanistically independent safeguards put the frequency of viable escapers below the detection limit of the assay, reported as under 10⁻¹⁰, with little fitness cost to the contained strain.

The phrasing matters. Each of those numbers is an upper bound set by how many cells were plated, not a measured escape rate. A containment claim is therefore a statement about an experiment's sensitivity, and it degrades in exactly the situation containment exists for: population sizes in an open environment are far larger than any laboratory assay, and horizontal gene transfer among [bacteria and archaea](/en/biology/microbiology/bacteria-and-archaea-explained) provides routes that a within-strain safeguard does not address.

## Rules that already apply

Two governance layers apply to this work now. Movement of engineered organisms across borders falls under the Cartagena Protocol on Biosafety, whose advance informed agreement procedure was designed around identifiable shipments of living modified organisms between identifiable parties. Research conduct falls under biorisk and dual-use frameworks, of which the most recent global reference is the World Health Organization's 2022 guidance on responsible use of the life sciences, written around the idea that risk mitigation is distributed across scientists, institutions, funders, publishers and regulators rather than concentrated at one checkpoint. Neither instrument was drafted with easily obtained synthesis and [programmable genome editing](/en/biology/biotechnology/crispr-genome-editing-explained) in mind, and the gap between what the rules assume about who can build what, and what is currently possible, is the live policy question in this area.

## What would count as maturity

The field's remaining ambition is not more parts. It is composition that holds: a construct whose measured behaviour in one host and condition predicts its behaviour in another well enough that a design can be trusted before it is tested. Progress towards that is being made through characterisation in context rather than in isolation, through designs that reduce burden instead of maximising expression, and through the same computational modelling that underpins [structure prediction for engineered proteins](/en/biology/biotechnology/protein-structure-prediction). It also depends on something the founding analogy underplayed: a transistor does not mutate, and a chassis that reproduces will keep proposing alternatives to your design. Any engineering discipline built on self-replicating substrates has to treat that as a design constraint rather than an inconvenience, and the parts of the field that do so are the parts producing durable results.

## Sources

1. **Journal of Biological Engineering** — [Designing and engineering evolutionary robust genetic circuits](https://pmc.ncbi.nlm.nih.gov/articles/PMC2991278/). Evolutionary half-lives, loss-of-function mutations and the expression-stability relationship.
2. **Science Advances** — [AI-directed gene fusing prolongs the evolutionary half-life of synthetic gene circuits](https://pmc.ncbi.nlm.nih.gov/articles/PMC12487889/). Evidence that evolutionary instability remains an active problem.
3. **Frontiers in Plant Science** — [Approaches and recent developments for the commercial production of semi-synthetic artemisinin](https://pmc.ncbi.nlm.nih.gov/articles/PMC5797932/). Fermentation titres, conversion efficiency and the commercial outcome.
4. **Protein Science** — [SynWiki: functional annotation of the artificial organism Mycoplasma mycoides JCVI-syn3A](https://pmc.ncbi.nlm.nih.gov/articles/PMC8740822/). Gene count of the minimal cell and the fraction of proteins with unknown function.
5. **Proceedings of the National Academy of Sciences** — [Intrinsic biocontainment: multiplex genome safeguards combine transcriptional and recombinational control of essential yeast genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC4330768/). Escape frequencies for single and combined safeguards.
6. **Secretariat of the Convention on Biological Diversity** — [The Cartagena Protocol on Biosafety: background](https://bch.cbd.int/protocol/background). Scope and timing of the transboundary regime for living modified organisms.
7. **World Health Organization** — [Global guidance framework for the responsible use of the life sciences](https://www.who.int/publications/i/item/9789240056107). Biorisk management and dual-use research governance.
