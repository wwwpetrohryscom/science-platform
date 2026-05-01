---
title: "Single-cell sequencing is rewriting evolutionary developmental biology"
excerpt: "Cell-type atlases across species are revealing that the conserved unit of evolution may be the cell type, not the gene network."
type: expert
author: mira-brandt
publishedDate: 2026-02-02
updatedDate: 2026-04-18
readingTime: 8
tags: [evo-devo, single-cell, transcriptomics, genomics]
related:
  - what-is-dna
  - cell-types-as-units-of-evolution
pillar: what-is-dna
---

For decades, evolutionary developmental biology asked how gene networks are conserved or modified across species to produce homologous structures. Single-cell transcriptomics changes the resolution of that question. Instead of comparing networks in tissues, we now compare entire transcriptional identities of individual cells. The shift is consequential: what we have started to find suggests that the unit of evolutionary conservation is finer than the network and finer than the organ — it is the cell type itself.

## The shift in unit of analysis

Bulk transcriptomics — averaging the expression of thousands of cells in a tissue — masks what happens when a tissue contains many distinct cell types in different ratios. The signals from rare cell types are lost in the average; the signals from abundant types dominate. Single-cell sequencing breaks the average: instead of one expression vector per tissue, you get tens of thousands per tissue, each from a single cell.

When you cluster the resulting cells by their transcriptional state and ask which clusters correspond to which classical cell types, you usually find good correspondence — and a long tail of fine-grained subdivisions that classical histology missed. The "cell type" the textbook described is often a cluster of related but distinguishable transcriptional states.

This finer resolution is what enables comparative work across species. You can now ask not "which tissues are conserved" but "which cells are conserved" — a question with a much higher information content.

## Homology at the cell level

When cell-type atlases of distantly related animals are aligned by shared regulatory programs, clear correspondences emerge. A class of secretory cell can persist as a coherent transcriptional identity across hundreds of millions of years, while the organ around it is reinvented. The same is true for some neuronal cell types, some immune cell types, and several muscle cell types.

This is the kind of finding that was previously inaccessible. Classical homology was a statement about structures: this fin and this arm are evolutionarily related because they share developmental origin and topology. Cell-type homology is a statement about transcriptional identity: this cell type in a sponge and this cell type in a vertebrate share a regulatory module and an inferred ancestral state, even though the structures around them are non-homologous.

The implication is significant. The conserved unit of animal evolution may not be the body plan or the organ — it may be the cell type, with body plans assembled from a partially conserved cell-type toolkit. This is closer to the developmental geneticist's intuition (Hox-like modules of regulatory information) than to the classical morphologist's intuition (homology of structure).

## Method caveats

Cross-species transcriptome alignment is hard. Differential gene expression depends sensitively on capture efficiency, normalization, and ortholog assignment. Cells from a species with poor reference-genome quality systematically look noisier; cells from a species with well-annotated regulatory regions systematically look richer. These artefacts are not always distinguishable from biology.

The strongest claims in the field — those that survive across multiple integration methods, multiple sequencing depths, and multiple research groups — are robust. The weakest are integration artefacts. The current bar for a credible cell-type homology claim is approximately: cluster correspondence under at least three independent integration methods, supported by independent regulatory-element evidence (ATAC-seq, conserved transcription-factor binding sites), with replication across multiple samples per species.

This bar is increasingly being met. Several recent papers on cnidarian, ctenophore, and sponge cell-type atlases have produced claims that meet it. The field is moving from speculative single-paper claims to a coherent comparative framework.

## What this changes about evo-devo

If cell types are the conserved unit, several long-running debates in evo-devo simplify.

The persistence of regulatory modules makes more sense — you do not need to explain why a network persists across hundreds of millions of years; you need to explain why a cell type does, which is a question about the integration of a regulatory module with a stable functional role.

The repeated re-evolution of complex structures (eyes, wings, neurons) becomes less mysterious — the regulatory machinery for the constituent cell types was already available; assembling them into a structure under selection happens repeatedly because the substrate is reusable.

The boundary between "homology" and "convergence" becomes a question about the level of analysis. Two structures may be convergent at the morphological level but homologous at the cell-type level. This is not a paradox — it is a more accurate description of what is shared.

## What survives the shift

The classical results of evo-devo — Hox patterning, the Pax6 master-regulator story, the deep conservation of developmental signaling pathways — survive intact. They are described more precisely now, often in terms of which cell types they instantiate. The shift is not a refutation of the previous generation's work; it is a finer-grained reformulation.

The bigger change is methodological. The field's empirical center of gravity is moving from candidate-gene screens to atlas-scale comparative genomics. The next decade of work in evo-devo will, in large part, look like cell-type comparative biology. The tools are mature; the comparative reference is filling in; the conceptual framework is in place.
