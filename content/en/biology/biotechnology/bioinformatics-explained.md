---
title: 'Bioinformatics: four inferences between the sequencer and the result'
excerpt: Sequence data becomes a finding only after alignment, assembly, annotation and statistical filtering have each made an inference. This page follows those four steps and the characteristic way each one fails.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - sequence-alignment
  - genome-assembly
  - functional-annotation
  - false-discovery-rate
  - computational-biology
related:
  - dna-sequencing-technologies
  - protein-structure-prediction
  - genome-wide-association-studies-explained
  - what-is-a-genome
pillar: biotechnology-explained
---

GenBank release 273, issued in August 2026, holds 8,236,878,868,450 bases in 267,383,895 sequence records, and its whole-genome-shotgun division holds a further 50,829,714,144,609 bases across more than 5.1 billion records. NCBI's Sequence Read Archive, which stores the raw output rather than the curated records, passed 91 petabases at the last point in its published growth series in February 2024. None of that is a result. It becomes one only after software has decided where each read came from, what the reads assemble into, what the assembled sequence is likely to do, and which of the differences between two samples deserve reporting. Those are four separate inferences, and each has its own way of being wrong.

The instruments that produce the reads — and the way their read lengths and error profiles differ — are the subject of the companion page on [sequencing platforms and what each is good for](/en/biology/biotechnology/dna-sequencing-technologies). What follows sits downstream of them, in the layer that turns signal into claim and that most of the [modern biotechnology toolkit](/en/biology/biotechnology/biotechnology-explained) now depends on.

## Alignment scores similarity against a search, not against biology

Optimal pairwise alignment is solved in a narrow sense. Dynamic programming — global in the Needleman–Wunsch formulation, local in the Smith–Waterman one — returns the highest-scoring alignment under a chosen scoring scheme, at a cost proportional to the product of the two sequence lengths. Against a database of hundreds of millions of records that cost is unaffordable, so practical search is heuristic: seed on short exact or near-exact matches, extend the promising ones, and never examine most of the database at all.

Two consequences follow, and both are easy to lose. The score itself depends on the substitution matrix and gap penalties, which together encode an assumption about how far apart the sequences are expected to be; change the assumption and the ranking of hits can change. And the statistical significance attached to a hit depends on the size of the space searched, so the same pair of sequences becomes less surprising as the database grows. A match that cleared threshold against a database of a million entries need not clear it against one of two hundred million. What an alignment score reports is how unusual a similarity is *given this search*, which is not the same question as whether two molecules are related.

## Where the assembly graph branches

Assembly reconstructs long sequences from short observations by building a graph — of overlaps between reads, or of fixed-length words in the de Bruijn formulation — and then finding a path through it. A repeat longer than the reads spanning it produces a branch point with no local evidence for which way to go. The usual outcomes are collapse, where several copies of a repeat merge into one, and fragmentation, where the assembly stops at the boundary.

For two decades the human reference carried the consequences of that, and the clearest measure of it is segmental duplication content — long, near-identical blocks that are precisely what a repeat-limited assembler collapses. GRCh38 contained 151.71 megabases of such sequence; the first complete assembly contains 201.93, a third more. In the regions where the older reference has no primary alignment at all, the complete assembly annotates 1,956 genes.

The methodological point is not that the earlier reference was built carelessly. It is that the unresolvable regions were absent rather than flagged, so a query returning nothing there looked identical to a query returning nothing anywhere else. Absence in a reference is read as absence in biology unless something marks the difference, and for most of the period in question nothing did.

## Most annotation is inherited rather than observed

The word "annotation" suggests observation. Almost none of it is. Function is assigned overwhelmingly by transfer — a new sequence resembles a characterised one, so it inherits the characterised one's description — and the resulting label is then available as evidence for the next transfer.

The scale of the asymmetry is stark. UniProtKB held roughly 246 million sequence records at release 2024_04, and its manually reviewed section is measured in hundreds of thousands. Automatic annotation is what fills the gap: incorporating one signature resource into UniProt's rule-based annotator generated 9,141 new rules and 119,579,654 new predictions covering over 20 million sequences, and a machine-learning naming system supplied protein names for more than 28 million entries previously labelled uncharacterised.

The failure mode of transfer was measured directly in a study of 37 enzyme families with strong experimental coverage. The manually curated section of UniProtKB showed misannotation close to zero for most families, while the automatically annotated databases averaged between 5 and 63 per cent across the superfamilies examined; for 10 of the 37 families, misannotation exceeded 80 per cent in at least one database. Most errors were **overprediction** — assigning a more specific function than the evidence supports — and the rate rose steadily between 1993 and 2005 as each wrong label became a template for the next. Predicted three-dimensional structure now offers a partly independent line of evidence, with the important caveats set out in [what structure prediction can and cannot establish](/en/biology/biotechnology/protein-structure-prediction).

## Counting the hypotheses you actually tested

Omics analyses test enormous numbers of hypotheses at once, and the arithmetic of that is unforgiving. The GWAS Catalog, as of its August 2026 release, holds 1,191,572 reported associations from 7,797 studies covering 562,145 variants — a corpus built by testing hundreds of thousands of variants per study against each trait.

Two corrections are in common use and they answer different questions. Family-wise error control asks for a low probability of *any* false positive, which is appropriate when a single wrong claim is costly. False-discovery-rate control, in the Benjamini–Hochberg formulation, instead bounds the expected proportion of false positives among the results you report, which is the right currency when the output is a shortlist for follow-up work. Neither makes an individual hit dependable. A gene reported at a 5 per cent false-discovery rate is a member of a list one in twenty of whose members is expected to be wrong, and there is nothing in the statistic that says which. The same logic governs how association studies are read, treated at length in [what genome-wide association studies can support](/en/biology/genetics/genome-wide-association-studies-explained); it applies equally to differential [gene expression](/en/glossary/gene-expression), proteomic and metabolomic screens.

## The same reads, analysed twice

Analysis choices are part of the result, and their contribution is measurable. A study that partitioned 219 deep human whole-genome datasets by how consistently different variant-calling pipelines agreed found that 20 to 30 per cent of the genome falls in low-concordance territory, and that concordance depends predominantly on genomic context rather than on which dataset was used — meaning the disagreement is systematic and predictable rather than random noise.

The reference build matters just as concretely. The Genome in a Bottle Consortium, hosted by NIST, produces the benchmark variant calls against which pipelines are scored, and those benchmarks excluded nearly 400 medically relevant genes because they are too repetitive or too polymorphic to call confidently. A curated set covering 273 of those 395 genes showed that false duplications present in GRCh37 or GRCh38 cause reference-specific missed variants; masking them raised recall in the affected genes from 8 per cent to 100 per cent. Two laboratories with identical reads, differing only in reference build, can therefore publish different variant lists and both be following standard practice.

| Stage | What is being inferred | What makes it fail |
| --- | --- | --- |
| Alignment | Where a sequence came from | Search-space size; scoring assumptions |
| Assembly | What the underlying molecule was | Repeats longer than the reads |
| Annotation | What the sequence does | Transfer from an already-wrong label |
| Testing | Which differences are real | Number of hypotheses; region excluded from benchmarking |

None of this argues for less confidence in sequence analysis generally; the discipline's benchmarks are unusually good, and the concordance and misannotation figures above exist because the field measured its own error rates. It argues for reporting the things that determine whether a number is reproducible. A variant list without its reference build, a functional call without its evidence code, and a hit list without its search space and correction method are each incomplete in a way that is invisible to the reader and consequential downstream — the same gap between a dataset and the claim made from it that the note on [uncertainty lost between dataset and headline](/en/insight/uncertainty-lost-between-dataset-and-headline) traces in another field.

## Sources

1. **NCBI** — [GenBank and WGS statistics](https://www.ncbi.nlm.nih.gov/genbank/statistics/). Release 273 base and record counts for GenBank and the WGS division.
2. **NCBI** — [Sequence Read Archive growth](https://www.ncbi.nlm.nih.gov/sra/docs/sragrowth/). Published growth series for raw sequence holdings.
3. **Science / PMC** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). T2T-CHM13 assembly size, unaligned sequence, segmental duplication content and newly annotated genes.
4. **PLOS Computational Biology** — [Annotation error in public databases: misannotation of molecular function in enzyme superfamilies](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000605). Measured misannotation rates and the growth of overprediction over time.
5. **Nucleic Acids Research / PMC** — [UniProt: the Universal Protein Knowledgebase in 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701636/). Record counts and the scale of automatic annotation rules and predictions.
6. **EMBL-EBI** — [NHGRI-EBI GWAS Catalog](https://www.ebi.ac.uk/gwas/home). Current counts of curated associations, studies and variants.
7. **Bioinformatics / PMC** — [ReliableGenome: annotation of genomic regions with high/low variant calling concordance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5903559/). Proportion of the genome in low-concordance regions across 219 whole-genome datasets.
8. **Nature Biotechnology / PMC** — [Curated variation benchmarks for challenging medically relevant autosomal genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC9117392/). Genes excluded from standard benchmarks and the effect of reference false duplications on recall.
9. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Benchmark variant calls and stratification of difficult genomic regions.
