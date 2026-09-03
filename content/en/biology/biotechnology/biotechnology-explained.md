---
title: 'Biotechnology: what the techniques do, and where the claims outrun them'
excerpt: Recombinant DNA, sequencing, editing and computational design each made one thing cheap and left the hard parts untouched. This is what the toolkit does, how a laboratory result becomes a product, and where that path breaks.
type: pillar
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - biotechnology
  - recombinant-dna
  - genome-editing
  - biosafety
  - translation
related:
  - dna-sequencing-technologies
  - crispr-genome-editing-explained
  - synthetic-biology-explained
  - bioinformatics-explained
---

Brewing, cheesemaking and the industrial production of penicillin were all biotechnology before the word existed, and none of them required knowing what a gene was. What changed in the early 1970s was not that living cells began doing useful chemistry — they always had — but that a chosen instruction could be moved into a cell deliberately. Every technique described here inherits that shift in specificity, and most of the field's recurring disappointments come from assuming that specificity in a laboratory transfers intact into a manufactured product.

## The result everything else is built on

A 1973 report in the *Proceedings of the National Academy of Sciences* described joining restriction-enzyme fragments from two separate plasmids outside the cell, then returning the construct to *Escherichia coli*, where it replicated and expressed genetic properties drawn from both parent molecules. That single experiment contains the recombinant-DNA premise: DNA as a portable, cut-and-rejoin substrate, and a bacterium as the machine that copies whatever you hand it.

The interval between that result and a marketed medicine is worth stating precisely, because it is unusually short. Synthetic genes for the A and B chains of human insulin were expressed in *E. coli* by 1979, and Humulin was approved in October 1982 as the first protein therapeutic based on recombinant DNA to be cleared for human use. Nine years from proof of principle to pharmacy is not the field's normal pace. It happened because the target was a small, fully characterised protein, already in clinical use in animal-derived form, and needed in bulk by a large and identified patient population. Few later programmes had that combination, which is why the insulin timeline has served as a misleading template ever since.

## What each part of the toolkit actually buys

The modern toolkit is usually described as four capabilities. Setting out what each one makes cheap — and what it leaves untouched — explains more than any list of instruments.

| Capability | What it made cheap | What it did not solve |
| --- | --- | --- |
| Reading DNA | Determining sequence at population scale | Knowing what a sequence does |
| Writing and assembling DNA | Building constructs from designed parts | Making a construct behave the same way in a new host |
| Editing in place | Introducing a defined change in a living genome | Getting the editing machinery into the right cells in a body |
| Computation | Searching, aligning and predicting across large corpora | Distinguishing a prediction from an experimental result |

The reading side is the one with a genuine exponential behind it, and it is treated separately in the article on [sequencing platforms and their error profiles](/en/biology/biotechnology/dna-sequencing-technologies). Editing in place — the ability to change a sequence in a living cell rather than assemble a new one in a tube — is the capability that arrived most recently and is covered in the article on [CRISPR-based genome editing](/en/biology/biotechnology/crispr-genome-editing-explained). The ambition to compose parts into predictable circuits, and the evidence about how far that composition actually holds, belongs to [synthetic biology](/en/biology/biotechnology/synthetic-biology-explained).

Two computational strands sit alongside the wet work. The analysis of sequence data — alignment, assembly, annotation and the multiple-testing statistics that large datasets demand — is the subject of [bioinformatics and its error-propagation problems](/en/biology/biotechnology/bioinformatics-explained). The prediction of three-dimensional structure from sequence, where accuracy is now high in the average case and unreliable in specific and important ones, is examined in [protein structure prediction](/en/biology/biotechnology/protein-structure-prediction). Applications in crops sit under a distinct regulatory logic and a much larger evidence base, treated in [agricultural biotechnology](/en/biology/biotechnology/biotechnology-in-agriculture-evidence). Most of these techniques were first developed in, or borrowed from, microbes, and the organisms themselves are described in the [microbiology pillar](/en/biology/microbiology/microbiology-explained).

## Where the attrition happens

A working result in a cell line is separated from an approved product by a filter that is much harsher than most coverage implies. An analysis of 406,038 clinical trial entries covering 21,143 compounds between 2000 and 2015, published in *Biostatistics*, reconstructed 41,040 complete development paths rather than counting phase transitions in aggregate. It puts the probability that a programme entering phase 1 eventually reaches approval at 13.8 per cent — higher than the 10.4 and 9.6 per cent that two earlier analyses had reported using different methods. The individual transition rates are much less forbidding: 66.4 per cent from phase 1 to phase 2, 58.3 per cent from phase 2 to phase 3, 59.0 per cent from phase 3 to approval. Those rates do not multiply out to the overall figure, and the discrepancy is the interesting part — a path-based estimate follows programmes that stall or are abandoned between stages, which chained stage probabilities do not see.

Those numbers describe medicines, but the shape generalises. The filter is rarely the molecular biology. It is efficacy in an organism that was not the model system, manufacturing at a scale where impurity profiles and batch consistency start to matter, and a cost of goods that a payer will accept. A technique can be entirely sound and still leave a programme with nothing, because the technique was never the binding constraint.

The product end of the field is real but narrower than the discourse suggests. The first medicine to use programmable genome editing — an autologous cell therapy in which a patient's own blood stem cells are edited outside the body and returned after a myeloablative conditioning regimen — received United States approval on 8 December 2023, roughly a decade after the editing method it depends on was first described.

## Rules the field wrote before governments did

Biotechnology governance began with self-restraint. The 1975 Asilomar conference on recombinant DNA molecules published its summary statement in *PNAS* while the hazards of the new methods were still unquantified and before any statutory framework existed — practitioners setting out the terms on which their own work should continue, ahead of any legislature. That precedent recurs whenever a capability arrives faster than the oversight for it.

Formal international instruments followed. The Cartagena Protocol on Biosafety, adopted on 29 January 2000 and in force from 11 September 2003, governs transboundary movement of living modified organisms and establishes an advance informed agreement procedure so that an importing country can decide with the relevant information in hand. For human applications a separate track applies: the World Health Organization published recommendations in 2021 on the governance of human genome editing, setting out nine areas of action ranging from international collaboration on oversight to intellectual property and public engagement. National regimes differ substantially in how they classify edited organisms, which is the single largest source of confusion when a regulatory claim crosses a border.

## Reading a claim about what biotechnology can do

One curve in this field is genuinely exponential, and it is useful as a calibration point. The cost data the National Human Genome Research Institute publishes for its funded sequencing centres records about $95.3 million per human genome in September 2001 and about $525 by May 2022 — but that figure covers production sequencing only. It excludes quality control, alignment, assembly, variant calling and interpretation, which is to say it excludes most of what turns sequence into an answer. A cost curve for data generation is not a cost curve for knowledge.

Three questions separate a supportable claim from an inflated one. Was the result obtained in the system it is being claimed for, or in a proxy? Is the reported quantity an efficiency in cells, a yield in a bioreactor, or a clinical outcome — three quantities that are routinely conflated? And is the limiting step the one the new technique addresses? A method that improves editing precision does not help if delivery to the target tissue is what is failing, and a fermentation titre that rises tenfold does not matter if the downstream purification sets the cost.

What none of these techniques supply is biological understanding. Sequencing a genome does not explain a phenotype; editing a locus demonstrates sufficiency or necessity only under the conditions tested; predicting a structure does not predict a function. The techniques have made specific operations extraordinarily cheap, and the interpretive work they feed has not become cheaper at anything like the same rate. That gap is where most overstatement in this field lives.

## Sources

1. **Proceedings of the National Academy of Sciences** — [Construction of biologically functional bacterial plasmids in vitro](https://pmc.ncbi.nlm.nih.gov/articles/PMC427208/). The 1973 recombinant-plasmid experiment underlying the field.
2. **Endocrine Reviews** — [Making, cloning, and the expression of human insulin genes in bacteria: the path to Humulin](https://pmc.ncbi.nlm.nih.gov/articles/PMC8152450/). Expression of insulin chains in *E. coli* and the October 1982 approval.
3. **Proceedings of the National Academy of Sciences** — [Summary statement of the Asilomar conference on recombinant DNA molecules](https://pmc.ncbi.nlm.nih.gov/articles/PMC432675/). The 1975 self-governance precedent and containment levels.
4. **Biostatistics** — [Estimation of clinical trial success rates and related parameters](https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/). Path-based success probabilities from 406,038 trial entries.
5. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). Cost per genome from 2001 to 2022 and what the accounting excludes.
6. **Genetics in Medicine Open (ACMG therapeutics bulletin)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Approval date and mechanism of the first genome-editing therapy.
7. **Secretariat of the Convention on Biological Diversity** — [The Cartagena Protocol on Biosafety: background](https://bch.cbd.int/protocol/background). Adoption, entry into force and the advance informed agreement procedure.
8. **World Health Organization** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Governance recommendations covering somatic, germline and heritable editing.
