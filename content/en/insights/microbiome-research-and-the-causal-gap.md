---
title: Microbiome research produces associations far faster than it produces causes
excerpt: Sequencing made microbial community composition cheap to measure and did nothing to make causation cheaper to establish. A systematic review found that 36 of 38 human-microbiota transfer studies in rodents reported a positive result.
argument: The rate-limiting step in microbiome science is study design, not data. Composition is now trivial to measure, while the designs that can support a causal claim remain scarce, expensive and narrow in what they generalise to — and the design most often used to claim causation reports positive findings at a rate the underlying biology is unlikely to support.
category: biology
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - microbiome
  - causal-inference
  - sequencing
  - research-methods
  - gnotobiotic-models
related:
  - microbiomes-and-host-microbe-interactions
  - culturing-and-sequencing-microbes
  - dna-sequencing-technologies
  - soil-microbiome-regenerative-agriculture
_bodyHash: 930c69b5
---

The standard way to turn a microbiome correlation into a causal claim is to transfer stool from human donors into germ-free rodents and see whether the donor's phenotype travels with it. A systematic review published in *Cell* in 2020 collected the studies that had done this and found that 36 of 38 — 95 per cent — reported a successful transfer of a pathological phenotype, with many going on to infer causation in the corresponding human disease.

A 95 per cent success rate for transferring human pathology across a species barrier, into an animal with a different immune system, diet and gut anatomy, is not a plausible feature of biology. It is a feature of a literature. The review's authors called a transfer rate that high implausible, argued that it overstates the role of the gut microbiome in human disease, and pressed for a more critical standard before causation is inferred. That is the sharpest answer the field has given to a question it asks about itself, and it is worth taking seriously without over-reading it.

## What sequencing made cheap, and what it left expensive

PubMed indexes more than 100,000 records with "microbiome" in the title or abstract. That volume is a direct consequence of a cost collapse: amplicon and shotgun sequencing turned "which taxa are present, and in what proportions" into a question answerable for a few tens of dollars per sample, on any material, in any laboratory. The [methods behind that shift](/en/biology/microbiology/culturing-and-sequencing-microbes) are the same ones that made population genomics cheap.

Nothing equivalent happened to causal inference. Establishing that a microbial community *does* something to a host still requires manipulating the community and observing the consequence, in a system where the manipulation is difficult to make specific and the host cannot usually be randomised. The gap between those two costs is the whole shape of the field: an enormous, fast-growing observational literature, and a much smaller experimental one that the observational literature is routinely read as though it contained.

## Three ways a composition study goes wrong before biology enters

**Compositionality.** A sequencer returns a fixed number of reads, so the data describe proportions, not abundances. A taxon can appear to increase simply because another decreased. A review in *Frontiers in Microbiology* argues that these datasets have an arbitrary total imposed by the instrument and should be treated as compositions at every analytical stage, and sets out the specific errors — spurious correlations, misleading distance measures — that follow from not doing so.

**Contamination.** Extraction kits and laboratory reagents carry bacterial DNA. Work published in *BMC Biology* showed that this contamination is ubiquitous, varies between kit batches, affects both 16S surveys and shotgun metagenomics, and dominates results when the sample itself has low microbial biomass. The stakes are not hypothetical: a widely cited claim that blood and tissue samples carry microbial signatures usable for cancer diagnosis was retracted from *Nature* in 2024. Tissue and blood are precisely the low-biomass material where the contamination hazard is largest, which is why sequencing negative controls alongside the samples is standing advice rather than a refinement.

**Analytic degrees of freedom.** A comparison in *Nature Communications* ran 14 differential-abundance methods across 38 16S datasets and found they identified drastically different numbers and sets of significant taxa, with the count for many tools correlating with sample size and sequencing depth rather than with biology. Two competent groups analysing the same reads can therefore report different organisms — which is a reason to ask which method was used before asking what it found.

## The designs that can carry a causal claim, and where each stops

| Design | What it can establish | Where it stops |
| --- | --- | --- |
| Human-microbiota-associated rodents | That a donor community is sufficient to produce a phenotype in that animal model | Species differences in immunity, diet and anatomy; small group sizes; cage effects; a positive-result rate that invites scepticism |
| Defined colonisation of a strain or consortium | That a specific organism or gene is sufficient, and sometimes necessary, for a measured effect | Most gut taxa are still hard to culture; a defined community is not the community it stands in for |
| Randomised human intervention | A causal effect of the intervention in the population studied | Rarely isolates a mechanism — a stool transplant changes hundreds of variables at once |
| Mendelian randomisation | A causal direction inferred from host genotype, without an experiment | Requires strong genetic instruments for microbial traits, which mostly do not exist yet |

The bottom two rows are where the strongest human evidence sits, and it is thin but real. A Cochrane review of faecal microbiota transplantation for recurrent *Clostridioides difficile* infection pooled six randomised trials with 320 participants and found that the procedure likely produces a large increase in resolution compared with control, with a risk ratio of 1.92 (95 per cent confidence interval 1.36 to 2.71) and moderate-certainty evidence. That is a genuine causal result about a microbial community, and it is one of very few.

Mendelian randomisation should in principle scale better, because host genotype is randomised at conception and cannot be caused by the microbiome. The MiBioGen consortium assembled genotypes and 16S data from 18,340 people across 24 cohorts and found 31 loci associated with microbial taxa at genome-wide significance — but only one, the lactase locus, reached study-wide significance, and only 9 of 410 genera were even detected in more than 95 per cent of samples. The instruments needed for the method are, for now, mostly missing. Readers familiar with the same problem in [genome-wide association studies](/en/biology/genetics/genome-wide-association-studies-explained) will recognise the pattern: the design is sound and the power is not there yet.

## Why an association-first literature is not a scandal

The strongest defence of the current literature is not that the criticisms are wrong. It is that association-first is how every observational science opens, and that the standard implied by "read the design before the abstract" would, applied literally, have stalled epidemiology, ecology and human genetics at their own descriptive phases.

Three specific points deserve weight. Germ-free rodent transfer is not a broken assay; it is an assay with a known domain of validity, and used to ask whether a community is *sufficient* in that model it answers exactly that. The 95 per cent figure is a property of a published set rather than a verdict on any experiment inside it, and the case against it is explicitly an inference: the review's authors *posit* that a cross-species transfer rate that high is implausible, which is an argument from a prior about how often such transfers ought to work, not a measurement of how often they do. That prior is very probably right, and it still does not identify which of the 36 positive results are the wrong ones — a distinction that matters to anyone deciding whether to build on a particular paper. And the field has produced its own correctives quickly: an explicit framework of **commensal Koch's postulates**, published in *Current Opinion in Microbiology*, sets out what cultivation, colonisation and genetic manipulation would have to show before a commensal organism is credited with a health effect. A discipline that publishes that framework, and publishes the systematic review criticising itself, is not one that has stopped noticing.

## What the evidence cannot settle

No one has a defensible number for the proportion of microbiome claims backed by a causal design, and this page does not supply one. The 36-of-38 figure covers a single design class in one body of work. What can be said is narrower: for most reported host–microbiome associations in humans, no experiment capable of distinguishing cause from consequence has been run, and dysbiosis remains a description of a difference rather than a demonstrated mechanism. Whether a given community change is a driver, a marker or a downstream effect of the disease it accompanies is unresolved case by case, and the [host–microbe interactions](/en/biology/microbiology/microbiomes-and-host-microbe-interactions) involved differ enough between body sites that a result in one says little about another.

What would settle particular cases is unglamorous and known: larger and preregistered animal experiments with cage as a unit of analysis, defined consortia rather than whole-community transfers, negative controls sequenced alongside low-biomass samples, and human trials with mechanistic endpoints. The same logic applies outside medicine — claims about the [soil microbiome and agricultural management](/en/ecology/ecosystems/soil-microbiome-regenerative-agriculture) rest on the same inferential chain and face the same gap between composition and function.

None of that will close the gap by sequencing more, because the gap is not made of missing sequences. The one large causal result here — faecal transplant for recurrent *C. difficile* — took six randomised trials and 320 participants to reach moderate certainty about a single condition with an unusually clean endpoint, in a disease where the microbial community is the proximate cause rather than a correlate of one. That is roughly what a causal claim costs in this field. Associations cost a few tens of dollars a sample. As long as those two prices differ by that much, the observational literature will keep outrunning the experimental one, and a composition difference is better read as a lead than as a finding.

## Sources

1. **Cell** — [Establishing or exaggerating causality for the gut microbiome: lessons from human microbiota-associated rodents](https://pubmed.ncbi.nlm.nih.gov/31978342/). The systematic review reporting that 36 of 38 transfer studies found a positive result, and its argument about why.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://pmc.ncbi.nlm.nih.gov/articles/PMC5695134/). Why sequencing output constrains totals and what that does to standard analyses.
3. **BMC Biology** — [Reagent and laboratory contamination can critically impact sequence-based microbiome analyses](https://pmc.ncbi.nlm.nih.gov/articles/PMC4228153/). Ubiquity of kit contamination and its effect on low-biomass samples.
4. **Nature** — [Retraction note: microbiome analyses of blood and tissues suggest cancer diagnostic approach](https://www.nature.com/articles/s41586-024-07656-x). The retraction of the tumour-microbiome diagnostic claim.
5. **Nature Communications** — [Microbiome differential abundance methods produce different results across 38 datasets](https://www.nature.com/articles/s41467-022-28034-z). Disagreement among 14 analytical methods on the same data.
6. **Cochrane Database of Systematic Reviews** — [Fecal microbiota transplantation for the treatment of recurrent Clostridioides difficile](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013871.pub2/full). Pooled effect estimate from six randomised trials and the certainty rating.
7. **Nature Genetics** — [Large-scale association analyses identify host factors influencing human gut microbiome composition](https://www.nature.com/articles/s41588-020-00763-1). Cohort size, loci identified, and the limits on genetic instruments for microbial traits.
8. **Current Opinion in Microbiology** — [Commensal Koch's postulates: establishing causation in human microbiota research](https://pubmed.ncbi.nlm.nih.gov/29112885/). A proposed causal framework built on cultivation and defined colonisation.
9. **US National Library of Medicine** — [PubMed query for microbiome in title or abstract](https://pubmed.ncbi.nlm.nih.gov/?term=microbiome%5BTitle%2FAbstract%5D). The record count quoted in the second section, retrieved September 2026.
