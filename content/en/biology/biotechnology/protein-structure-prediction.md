---
title: 'Protein structure prediction: a benchmark largely won, and the residue it left'
excerpt: Deep-learning models closed most of the gap between sequence and fold on the blind CASP targets. What remains — assemblies, disorder, alternative conformations, mutation effects — is where the difficulty moved rather than where it ended.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - protein-folding
  - casp
  - structural-biology
  - prediction-confidence
  - alphafold
related:
  - bioinformatics-explained
  - synthetic-biology-explained
  - mutation-types-and-rates
  - crispr-genome-editing-explained
pillar: biotechnology-explained
---

When people say protein folding was solved, they are making a claim about a benchmark. It is worth knowing which one, because the benchmark's design determines exactly what the claim covers. The Critical Assessment of methods of protein Structure Prediction, known as CASP, runs as a blind trial: experimental groups contribute structures that have been determined but not released, predictors submit models before the coordinates become public, and independent assessors score the submissions against the withheld experiment. That design removes the usual worry about a model having seen the answer, and it is why the result carried weight. It also fixes the scope of the claim to a specific comparison — predicted coordinates against one experimental structure of one construct, usually a single chain, usually crystallised or frozen in one state.

Prediction sits on the same infrastructure of sequence databases and alignments described in the companion page on [the inferences between sequencer and result](/en/biology/biotechnology/bioinformatics-explained), and its outputs now feed most of the design work in the wider [biotechnology toolkit](/en/biology/biotechnology/biotechnology-explained).

## The size of the change, in the units the assessors use

At the fourteenth round in 2020, the leading method reached a median backbone accuracy of 0.96 Å r.m.s.d.95 across the assessed domains, with a 95 per cent confidence interval of 0.85–1.16 Å, against 2.8 Å for the next best group; on all atoms the figures were 1.5 Å and 3.5 Å. An error of roughly one ångström is the width of a covalent bond, and it is comparable to the disagreement between two experimental determinations of the same protein.

The following round showed what happens once a benchmark approaches its own noise floor. Across 98 suitable targets assessed from 162 groups in 89 laboratories across 17 countries, Cα r.m.s.d. was below 3 Å for over 90 per cent of targets and below 1 Å for 40 per cent — but the assessors were explicit that gains from 2020 to 2022 were "more modest likely because in CASP14 many computed structures were already within experimental uncertainty, so there is not much room for further improvement". A benchmark that has been saturated stops measuring progress, which is a good reason to look at what it never measured.

## What each score can and cannot say

CASP reports several numbers and they are not interchangeable. Backbone agreement is expressed in GDT_TS units; lDDT scores the accuracy of each residue's local environment in terms of inter-atomic distances rather than after global superposition; interface quality for assemblies is scored separately, for example as an F1-like contact score. Confidence is different again: pLDDT is the model's own prediction of its lDDT, reported per residue on a 0–100 scale.

| Measure | What it compares | What it cannot tell you |
| --- | --- | --- |
| Cα r.m.s.d. / GDT_TS | Global backbone geometry against one experimental structure | Whether that structure is the biologically relevant state |
| lDDT | Local environment of each residue, superposition-free | Whether domains are correctly placed relative to each other |
| pLDDT | The model's expected local accuracy | Anything the training data did not represent |
| Interface contact scores | Residue–residue contacts between chains | Stoichiometry, or whether the complex forms in the cell |

The confidence bands are published with an explicit reading. Above 90, regions are generally modelled with high accuracy; 70 to 90 represents a reliable backbone; 50 to 70 should be used cautiously; below 50 the model typically produces an extended, ribbon-like trace that indicates a probable disordered region rather than a wrong fold. That last band is the one most often misread. A low score there is frequently the model saying, correctly, that no single structure exists.

## Where the predictions are still weak

**Alternative conformations are the sharpest case.** A systematic test on 98 fold-switching proteins — chains that adopt two distinct, stable secondary and tertiary structures — found that 94 per cent of predictions captured one experimentally determined conformation but not the other. The failure was not flagged: confidence was moderate to high for 74 per cent of fold-switching residues, in contrast to the systematically low confidence assigned to intrinsically disordered regions. The authors read this as evidence that the model searches for a single most probable conformer through learned sequence patterns rather than modelling a structural ensemble through biophysics. The practical implication is asymmetric. Low confidence is informative; high confidence is not a warranty.

**Disorder is not a defect to be fixed.** Intrinsically disordered proteins make up roughly 30 per cent of eukaryotic proteomes, and their function often depends on not having a fixed structure. For those chains the target the benchmark scores does not exist, so the benchmark has nothing to say about whether the prediction is useful.

**Assemblies improved from a low base and remain the harder half.** In the fifteenth round, the fraction of high-quality models of protein assemblies rose from under 10 per cent to over 60 per cent on both interface measures — a large advance, and one that still leaves close to 40 per cent of assembly targets outside the high-quality band while over 90 per cent of single-chain targets came within 3 Å. Most proteins act in complexes, so the residual sits directly on the biology of interest.

**Mutation effects do not follow from a correct fold.** When five stability predictors were applied to more than a thousand missense variants across 26 hereditary-cancer genes using predicted structures, discrimination of pathogenic from benign variants was low to moderate, with areas under the ROC curve between 0.614 and 0.719 for most of the tools tested and 0.534 for one of them. Knowing where every atom sits in the wild-type protein does not deliver the free-energy change caused by substituting one of them, which is a separate and harder estimation problem — one that matters for interpreting the [substitutions that arise in real genomes](/en/biology/genetics/mutation-types-and-rates).

There is a constructive counterpart to the conformational failure. Clustering the input sequence alignment by similarity, rather than feeding one deep alignment, has been shown to make the same model produce multiple distinct conformations for proteins known to switch. The ensemble information is partly present; the default output simply does not report it.

## A predicted structure is a hypothesis about function

The gap that matters most is not geometric. Coordinates do not carry the ligand, the partner chain, the phosphorylation state, the local concentration, the membrane, or the cell. The Protein Data Bank now distributes 259,412 experimental and integrative structures alongside 1,062,058 computed models, and a database of predictions covers more than 214 million sequences — close to three orders of magnitude more predicted structures than measured ones. That ratio should shape how the two are read. Prediction has made structure cheap enough to be a routine starting point for [designing enzymes and pathways](/en/biology/biotechnology/synthetic-biology-explained); it has not made experiment redundant, because experiment is what supplies the states, the partners and the ligands against which any prediction is checked, and what will be needed to move the field from single structures towards measured ensembles. The pattern is a familiar one wherever learned models meet a discipline's hardest questions, and it recurs in the discussion of [where machine learning helps science and where it stalls](/en/insight/ai-for-science-bottleneck).

## Sources

1. **Nature / PMC** — [Highly accurate protein structure prediction with AlphaFold](https://pmc.ncbi.nlm.nih.gov/articles/PMC8371605/). CASP14 median backbone and all-atom accuracy, and the comparison with the next best method.
2. **Proteins / PMC** — [Critical assessment of methods of protein structure prediction (CASP) — Round XV](https://pmc.ncbi.nlm.nih.gov/articles/PMC10843301/). Target and participant counts, Cα r.m.s.d. distribution, assembly-model quality, and the assessors' statement on saturation.
3. **Nucleic Acids Research** — [AlphaFold Protein Structure Database in 2024](https://academic.oup.com/nar/article/52/D1/D368/7337620). Database coverage and the published interpretation of pLDDT confidence bands.
4. **RCSB Protein Data Bank** — [PDB statistics](https://www.rcsb.org/statistics). Current holdings of experimental structures and computed structure models.
5. **Protein Science / PMC** — [AlphaFold2 fails to predict protein fold switching](https://pmc.ncbi.nlm.nih.gov/articles/PMC9134877/). Results on 98 fold-switching proteins and the confidence assigned to them.
6. **Nature / PMC** — [Predicting multiple conformations via sequence clustering and AlphaFold2](https://pmc.ncbi.nlm.nih.gov/articles/PMC10808063/). Recovery of alternative conformations by clustering input alignments.
7. **Frontiers in Genetics / PMC** — [Evaluation of AlphaFold structure-based protein stability prediction on missense variations in cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988940/). Discrimination performance of stability predictors on predicted structures.
8. **Methods in Molecular Biology** — [Searching and using MobiDB resource 6 for intrinsically disordered proteins](https://pubmed.ncbi.nlm.nih.gov/39718444/). Estimate of the share of eukaryotic proteomes that is intrinsically disordered.
