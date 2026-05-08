---
title: 'Cell signaling: how cells decide what to do next'
excerpt: A cell receives thousands of signals every second. The mechanisms by which it weighs them and acts coherently are among the most studied — and still partially open — questions in cell biology.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-04-22'
updatedDate: '2026-05-08'
readingTime: 5
tags:
  - cell-biology
  - signaling
  - molecular-biology
related:
  - what-is-a-cell
  - coral-microbiome-bleaching-resistance
  - how-gene-expression-is-regulated
pillar: what-is-a-cell
---

A cell in a multicellular organism is constantly receiving signals — chemical, mechanical, electrical — from its environment and from other [cells](/en/biology/cells/what-is-a-cell). The mechanisms by which it integrates those signals and decides what to do next are among the most studied questions in [cell biology](/en/biology/cells/what-is-a-cell). Public reference sources including the [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/) and [Genomics Glossary at the National Human Genome Research Institute](https://www.genome.gov/genetics-glossary) treat cell signaling as a foundational topic.

This article walks through the core architecture and the parts of it that remain genuinely unsettled.

## The basic architecture

A signaling pathway has the same general shape across most contexts:

1. **A signal** — a molecule (hormone, growth factor, neurotransmitter), a physical force, or a change in environment.
2. **A receptor** — usually a protein at the cell membrane that selectively binds the signal.
3. **A transduction cascade** — a series of intracellular events, often involving phosphorylation of intermediate proteins, that propagates and amplifies the signal.
4. **An effector** — a downstream change in cell behaviour: gene expression, protein activity, ion flux, cytoskeletal reorganization, division, differentiation, or death.

The components are protein-coded, so the [DNA sequence](/en/biology/genetics/what-is-dna) of the organism specifies what receptors and signaling proteins a cell can use. But the *state* of the pathway at any moment is set by which proteins are present, where they are localized, and which post-translational modifications they carry. Two cells with identical genomes can be in radically different signaling states.

## A few canonical pathways

Three families illustrate the diversity:

**G-protein-coupled receptors (GPCRs).** A large family of seven-transmembrane receptors that activate intracellular G proteins on ligand binding. They mediate sensory perception, hormonal signaling, and a substantial fraction of currently approved drug targets. The [NIH](https://www.nih.gov/)-funded research literature indexed via [PubMed](https://pubmed.ncbi.nlm.nih.gov/) covers GPCR biology more extensively than any other receptor family.

**Receptor tyrosine kinases.** Activated by growth factors, these receptors dimerize on ligand binding and phosphorylate one another, recruiting downstream signaling proteins. The pathway controls cell proliferation and differentiation; mutations that hold the kinase in a constitutively active state are a common driver of cancer. Standard [cell-biology](/en/biology/cells/what-is-a-cell) textbook treatments cover the canonical pathway in detail.

**Notch signaling.** A short-range, contact-dependent pathway in which a transmembrane receptor on one cell is activated by a transmembrane ligand on a neighbouring cell. Activation cleaves the receptor; the intracellular fragment translocates to the nucleus and modifies gene expression. Notch is central to developmental cell-fate decisions and tissue patterning.

These pathways do not run in isolation. Most cellular decisions integrate inputs from several pathways simultaneously.

## Why specificity is harder than it looks

A persistent question is how signaling can be specific. Many pathways share intermediate proteins — kinases like ERK and PI3K participate in dozens of signaling contexts. If the same kinase is activated by different signals, how does the cell distinguish between them?

The accepted answer involves several mechanisms operating together:

- **Spatial localization.** Signaling complexes are often physically scaffolded into specific compartments. Activated kinase in one location does different work than activated kinase in another.
- **Temporal pattern.** Sustained activation produces different downstream effects than transient activation, even of the same kinase. This was shown in cell-fate choices in PC12 cells and has been confirmed in many other systems.
- **Combinatorial input.** A given pathway is rarely sufficient to determine outcome. Cell behaviour usually requires coincidence of signals — growth factor *and* anchorage *and* nutrient availability.

These mechanisms are well-established. Their relative weighting in different cell types remains an active research area; the survey papers indexed via [PubMed](https://pubmed.ncbi.nlm.nih.gov/) document the variety.

## Where signaling biology is still open

Three problems remain genuinely unsettled.

**Quantitative integration.** Reading "the cell integrates inputs from multiple pathways" is easier than predicting what the integration will produce in a specific case. Quantitative models — built from time-resolved measurements in single cells — have made progress, but predictive models that span many cell types are still partial.

**[Single-cell](/en/biology/genetics/single-cell-evo-devo) heterogeneity.** Genetically identical cells in the same culture respond differently to the same signal. Some of this is stochastic ([gene-expression](/en/biology/genetics/how-gene-expression-is-regulated) noise); some reflects pre-existing differences in protein levels or modifications. The literature now treats cell-to-cell variability as a feature of the system, not [measurement](/en/physics/quantum-basics/electromagnetic-spectrum-applications) error, but the role this variability plays in tissue function is still being mapped.

**Cross-talk vs. modularity.** The textbook view treats pathways as roughly modular blocks that occasionally cross-talk. The systems-biology view increasingly treats them as one connected network with no clean module boundaries. Both views are partially correct; the question is which is more useful for prediction in a given context.

## What this means for the rest of the field

Cell signaling is the substrate on which higher-level questions in [biology](/en/biology/cells/what-is-a-cell) and disease rest. Cancer is, in large part, dysregulated signaling. Immune function depends on coordinated signaling between cell types. Embryonic development is choreographed by signaling cascades acting on cells whose competence to respond is itself determined by previous signaling history.

The accuracy of mechanistic claims about disease, development, or organism behaviour is constrained by the underlying signaling biology. Reading a paper that proposes a clinical intervention based on "activating pathway X" — without engaging with the specificity, integration, and heterogeneity questions above — is reading half the argument.

## Limitations of this article

The pathway descriptions above are simplifications. Each canonical pathway has been extended, in actual cell-biology literature, with dozens of accessory proteins, alternative effectors, and tissue-specific variants. Open-access editions of standard cell-biology textbooks (linked in the sources block) are an entry point; the primary literature behind specific claims should be checked individually for any clinical or applied use.

## Sources

1. **National Center for Biotechnology Information (NIH/NLM)** — [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/). Open-access editions of foundational cell- and [molecular-biology](/en/biology/genetics/how-gene-expression-is-regulated) textbooks.
2. **National Human Genome Research Institute** — [Genomics glossary](https://www.genome.gov/genetics-glossary). Authoritative terminology reference for receptors, kinases, and signaling concepts.
3. **PubMed (NIH/NLM)** — [Biomedical literature index](https://pubmed.ncbi.nlm.nih.gov/). Access to the primary literature behind specific signaling pathways.
4. **National Institutes of Health** — [Research programs and explainers](https://www.nih.gov/). Topic-level reference and grant-supported research overviews.
5. **Nature** — [Nature primers and review articles](https://www.nature.com/). Peer-reviewed synthesis of current signaling-biology research.
