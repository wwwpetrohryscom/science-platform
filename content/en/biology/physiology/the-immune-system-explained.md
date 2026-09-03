---
title: 'Immunity: a layered system, not a single defence'
excerpt: An immune system has to recognise pathogens that have not evolved yet. Vertebrates solve that by manufacturing receptor diversity at random, then editing it — and plants and invertebrates show the problem has other solutions.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - immunology
  - innate-immunity
  - adaptive-immunity
  - immunological-memory
related:
  - physiology-explained
  - developmental-biology-explained
  - hormones-and-endocrine-signalling
  - thermoregulation-in-animals
pillar: physiology-explained
_bodyHash: 2872ac3f
---

The hard problem in immunity is combinatorial. A pathogen population evolves on a timescale of days, so any defence built around a fixed list of molecular signatures will be outrun; the system has to be able to recognise things that did not exist when the organism was born. Two very different strategies address that, and vertebrates run both at once — a fast, encoded layer aimed at features microbes cannot easily discard, and a slow layer that manufactures recognition at random and then selects from what it made.

Calling the second layer "the immune system" and the first one a preamble gets the proportions wrong. Most encounters never reach a lymphocyte. The layered structure is also a control problem of the kind set out in the pillar on [how organisms hold internal conditions steady](/en/biology/physiology/physiology-explained): thresholds, effectors, and costs incurred when a response overshoots.

## What the encoded layer recognises

Barriers come first — epithelia, mucus, low pH, resident microbial communities occupying the space a pathogen would need. Past those, the innate response is triggered by receptors that detect conserved microbial features rather than specific organisms: bacterial lipopolysaccharide, double-stranded RNA, unmethylated CpG DNA, flagellin, fungal β-glucans. These are hard for a pathogen to abandon because they are load-bearing parts of its own biology, which is what makes an encoded receptor viable against an evolving target.

The best-characterised family is the Toll-like receptors, and the species comparison is instructive: humans have ten of them, TLR1 through TLR10, while mice have twelve — TLR1 to TLR9 plus TLR11 to TLR13, with TLR10 present only as a pseudogene. Their positioning encodes what they are for. Receptors on the plasma membrane, including TLR1, TLR2, TLR4, TLR5 and TLR6, sample surfaces and detect microbial lipids and proteins; receptors in endosomes, including TLR3, TLR7, TLR8 and TLR9, sample the contents of what the cell has swallowed and detect nucleic acids, which is how a nucleic-acid sensor avoids firing on the host's own genome. It is worth noting that even in this heavily studied family, human TLR10 is considered functionally active but its definitive ligand remains unresolved — the gaps in this field are not all at the frontier.

Innate detection does not act alone. Complement operates as an independent humoral system that marks surfaces for destruction and recruits cells, interfacing with cytokine signalling without being reducible to it, and cytokines and chemokines carry the local decision outward so that the response scales beyond the cell that made it. Some of the pathogens this layer is aimed at are covered in the article on [viruses and their replication strategies](/en/biology/microbiology/viruses-explained), which are recognised largely through the nucleic acids their replication exposes.

## Anticipation by randomisation

The adaptive strategy is to build receptors before knowing what they will need to bind, by cutting and rejoining gene segments in each developing lymphocyte. The arithmetic is worth doing explicitly, because it is where the power of the mechanism lives.

For human antibody light chains there are roughly 40 functional Vκ segments and five Jκ segments, giving 200 combinations, and about 30 Vλ with four Jλ, giving 120. Heavy chains draw on around 65 functional VH, some 27 DH and six JH segments, yielding roughly 11,000 possible VH regions. Pairing a heavy chain with a light chain multiplies these together for about 3.5 × 10⁶ distinct specificities from recombination alone. Junctional diversity then adds far more: nucleotides are deleted by exonucleases and added back as templated P-nucleotides and untemplated N-nucleotides at each join, concentrated in the third complementarity-determining region that sits at the centre of the binding site. Counting that, the estimate for how many different receptors the repertoire *could* contain runs to 10¹¹.

That is a statement about combinatorial possibility, not about any individual. **[Clonal selection](/en/glossary/clonal-selection)** — the principle that each lymphocyte carries one receptor specificity, and that antigen binding drives that cell to divide — means the repertoire is a standing library that is read only where it is used. One activated lymphocyte produces on the order of a thousand daughter cells over three to five days, which is why the first adaptive response to a new pathogen takes four to seven days to become effective while the innate layer holds the line.

## What a person actually carries

The gap between potential and realised diversity is where the interesting measurements are. High-throughput sequencing of human T-cell receptor β chains gives a lower-bound estimate of about 100 million distinct sequences in the naive CD4 and CD8 repertoires of young adults — an enormous number, and three orders of magnitude below the 10¹¹ ceiling counted above, because a body contains a finite number of lymphocytes. The two numbers are not strictly commensurable — the ceiling was arithmetic on antibody gene segments, the measurement is of one chain of a different receptor — but the size of the gap between what recombination could produce and what a person carries is the point, and it does not depend on which receptor is counted.

Ageing does not erode that library the way it is often described. In the same analysis, naive repertoire richness declined only about two- to fivefold in healthy elderly people, and memory repertoires contracted less still. What changed sharply with age was the *evenness* of the repertoire: large naive clones appeared that were distinct from memory clones, indicating uneven homeostatic proliferation. The diversity that matters for responding to something new is therefore not simply how many specificities exist but how much of the population a few expanded clones occupy — a distinction that a headline richness count cannot carry.

Because the naive repertoire is produced by controlled genomic rearrangement and then maintained by transcriptional programmes, much of what determines it is the same machinery discussed under [how gene expression is regulated](/en/biology/genetics/how-gene-expression-is-regulated).

## Tolerance is the harder half of the problem

A system that generates receptors at random will generate receptors against its own tissues, so the same process that creates the repertoire creates the need to censor it. Developing lymphocytes that bind self-antigen strongly in the thymus are deleted or diverted, which requires the thymus to display self-antigens it has no business expressing — insulin, for instance, in a tissue that is not the pancreas.

The autoimmune regulator, AIRE, is what makes that possible: it drives medullary thymic epithelial cells to express a broad but selective repertoire of tissue-restricted antigens. Recent work describes AIRE forming transcriptionally active condensates, which offers an explanation for a puzzling feature of the process — expression of any given tissue-restricted gene is sparse and stochastic, reflecting the low probability that a particular locus reaches a permissive chromatin and cofactor state, rather than a scheduled display of everything at once. Reviewers of that work are explicit that direct evidence for equivalent mechanisms outside these thymic cells is currently lacking.

Central deletion is incomplete by construction, which is why peripheral tolerance — regulatory populations, anergy, restricted access to tissues — exists as a second line. Autoimmunity is best understood as failure modes of this censorship rather than as the immune system doing something foreign to its design.

## Memory outside the vertebrate arrangement

Immunological memory was long treated as the defining property of vertebrate adaptive immunity. It is not exclusive to it. Plants defend themselves with a two-tiered innate system: cell-surface pattern recognition receptors detecting conserved microbial molecules, and intracellular nucleotide-binding leucine-rich repeat receptors recognising pathogen effectors. The field dates itself from 1992, when the first plant resistance gene was cloned — though that gene, maize *Hm1*, encodes a reductase rather than a receptor; the first pattern recognition receptors and the first nucleotide-binding leucine-rich repeat receptors were identified two years later. The two tiers interact rather than operating in series, and plants have no lymphocytes and no somatic receptor rearrangement of the vertebrate kind.

Both plants and a growing list of invertebrate taxa nonetheless show immune priming: a prior exposure changes the response to a later one. In vertebrates the analogous innate phenomenon is called trained immunity and is attributed to metabolic and epigenetic remodelling of innate cells. A 2025 review in *eLife* argues these phenomena should be examined together across taxa, notes that the underlying mechanisms differ and only partly overlap, and identifies specificity — whether the second response is enhanced against the same threat in particular — as the criterion that decides whether "memory" is the right word. It also raises the [microbiome](/en/glossary/microbiome) of soil and gut as a possible route by which innate memory is acquired, which would blur the boundary further.

The evidence here is uneven. Priming is well demonstrated in some invertebrate systems and thinly demonstrated in others, effect sizes vary, and the mechanistic accounts are more advanced than the comparative data supporting them. What the work has already established is narrower and still substantial: the strict partition between an innate system without memory and an adaptive system with it does not survive contact with the range of organisms that defend themselves successfully.

Two further limits are worth stating. Repertoire sequencing measures receptor sequences, not what those receptors bind, so a diversity figure is a proxy for functional coverage rather than a measurement of it. And the pathogen side is a moving target — resistance mechanisms are selected in real time, as covered in the article on [the evidence base for antimicrobial resistance](/en/biology/microbiology/antimicrobial-resistance-evidence). The population-scale consequence of durable immunological memory is visible in immunisation statistics: the World Health Organization reports 85 per cent global coverage with three doses of diphtheria–tetanus–pertussis vaccine in 2025, around 110 million infants, alongside 13.5 million children who received no doses at all, and measles coverage of 84 per cent for a first dose and 77 per cent for two. Those figures describe population coverage and are not guidance for any individual.

## Sources

1. **Janeway's Immunobiology, 5th edition (NCBI Bookshelf)** — [Principles of innate and adaptive immunity](https://www.ncbi.nlm.nih.gov/books/NBK27090/). Clonal selection, the scale of clonal expansion, and the timing of a primary adaptive response.
2. **Janeway's Immunobiology, 5th edition (NCBI Bookshelf)** — [The generation of diversity in immunoglobulins](https://www.ncbi.nlm.nih.gov/books/NBK27140/). Gene segment counts, combinatorial totals, and the contribution of junctional diversity.
3. **Signal Transduction and Targeted Therapy** — [Innate immunity: current understandings and future perspectives](https://pmc.ncbi.nlm.nih.gov/articles/PMC13462524/). Toll-like receptor counts in humans and mice, receptor localisation and ligands, and the status of complement and trained immunity.
4. **PNAS** — [Diversity and clonal selection in the human T-cell repertoire](https://pmc.ncbi.nlm.nih.gov/articles/PMC4246948/). Lower-bound repertoire richness in young adults and how richness and clonality change with age.
5. **Frontiers in Immunology** — [AIRE transcriptional condensates in central tolerance](https://pmc.ncbi.nlm.nih.gov/articles/PMC13414922/). Tissue-restricted antigen expression in medullary thymic epithelial cells and why it is sparse.
6. **The Plant Cell** — [Thirty years of resistance: zig-zag through the plant immune system](https://pmc.ncbi.nlm.nih.gov/articles/PMC9048904/). The two-tiered PRR and NLR architecture of plant immunity and its history since 1992.
7. **eLife** — [Trained immunity and immune priming in plants and invertebrates](https://pmc.ncbi.nlm.nih.gov/articles/PMC12680377/). Immune memory outside vertebrate adaptive immunity, and specificity as the defining criterion.
8. **World Health Organization** — [Immunization coverage](https://www.who.int/news-room/fact-sheets/detail/immunization-coverage). Global DTP3 and measles coverage figures and the number of zero-dose children.
