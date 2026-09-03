---
title: 'Microbiomes: what sequencing surveys can and cannot establish'
excerpt: A microbiome survey reports proportions at a total the sequencer chose, not a census of a gut. This page separates what that data structure can support from the causal claims that require a transplant, a gnotobiotic host, or a trial.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - microbiome
  - metagenomics
  - causal-inference
  - host-microbe-interactions
  - compositional-data
related:
  - culturing-and-sequencing-microbes
  - antimicrobial-resistance-evidence
  - microbiology-explained
  - the-immune-system-explained
pillar: microbiology-explained
_bodyHash: cafea542
---

A gut microbiome survey does not count organisms. It reports what fraction of the sequences recovered from a sample were assigned to each taxon, at a total set by the instrument rather than by the gut. Nearly every way these surveys get over-read follows from that single structural fact, and the corrections for it are neither obscure nor recent.

Which organisms are being surveyed, and what they do for a living, is the subject of the [broader account of microbial life](/en/biology/microbiology/microbiology-explained). This page is about inference: what a table of proportions can carry, and what it takes to move a statement from *associated with* to *causes*.

## A number that outlived its evidence

The claim that the human body contains ten bacterial cells for every human cell circulated for decades. A 2016 reassessment in PLOS Biology put the figure at roughly 3.8 × 10¹³ bacteria — overwhelmingly in the colon — against about 3.0 × 10¹³ human cells in a 70 kg reference male, a ratio of 1.3 with a stated 25 per cent uncertainty and around 50 per cent variation across a population of similar men. The bacterial mass involved is about 0.2 kg wet, 50–100 g dry.

The old ratio is recoverable, but only by comparing bacteria against *nucleated* human cells and discarding red blood cells, which are the numerical majority of human cells. That is the useful part of the story. The 10:1 figure was not fabricated; it was a defensible estimate whose qualifying clause fell off in transmission, after which it survived on citation rather than on measurement. Anyone reading a striking microbiome statistic should ask which quantity was actually measured, because [the term microbiome](/en/glossary/microbiome) is routinely attached to numbers about cells, genes, species and mass interchangeably.

## Proportions are not abundances

Sequencing imposes an arbitrary total. A run returns a fixed budget of reads, and taxa compete for it, so the data are **compositional**: only ratios between components carry information, and the absolute quantity of anything is unmeasured. A 2017 review in *Frontiers in Microbiology* set out the consequences plainly, and they are not cosmetic. If one organism blooms, every other proportion falls, and a naive test will report those falls as depletions. Correlations computed between raw proportions are constrained to sum to a constant and are therefore partly spurious by construction. Standard tests that assume independent components do not apply.

The workarounds are established — log-ratio transformations, spike-in standards of known concentration, or an independent measure of total microbial load — but they are not universal in the published literature, and a paper that reports "increased *Bacteroides*" without saying against what total has not distinguished a rise in one taxon from a fall in everything else.

What the sequencing itself resolves is a separate limit. Amplicon surveys read one conserved marker gene and typically resolve to genus; shotgun metagenomics reads whatever DNA is present and can reach species and strain, and reports which genes are there; metatranscriptomics reports which are being transcribed. None of the three measures a rate, and each carries technical biases that are covered in the companion page on [how microbial communities are sampled and sequenced](/en/biology/microbiology/culturing-and-sequencing-microbes).

## Designs that can carry a causal claim

The distinction that matters in this field is not statistical significance but study architecture. Four designs recur, and they establish different things.

| Design | What it can establish | What defeats it |
| --- | --- | --- |
| Cross-sectional case–control | An association; a candidate biomarker | Reverse causation, diet and drug confounding, batch effects |
| Longitudinal cohort | Temporal ordering of change | Confounding persists; sampling may miss the relevant window |
| Transfer into germ-free animals | That a community is sufficient to produce a phenotype in that host | The recipient is not a human; diet and housing change the result |
| Randomised clinical intervention | An effect in people | Exists for very few conditions |

The transfer experiments are the reason the field can make any causal statement at all. In a 2013 study in *Science*, faecal communities from adult female twin pairs discordant for obesity were transplanted into germ-free mice; increased body and fat mass travelled with the community from the heavier twin, and travelled with cultured collections derived from it as well. Co-housing the recipients prevented the phenotype, and the rescue tracked the invasion of particular *Bacteroidetes* from the lean co-twin's community — and depended on what the mice were fed. That last clause is the finding most often dropped in summary: the microbial effect was conditional on diet, not autonomous.

On the clinical side, one intervention has accumulated genuinely strong evidence. A 2020 systematic review and meta-analysis in *EClinicalMedicine*, covering 45 studies, reported a clinical effect at week 8 of 91 per cent (95 per cent CI 89–94) for repeat faecal microbiota transplantation in recurrent *Clostridioides difficile* infection across 24 studies and 1,855 patients, and 84 per cent (80–88) for a single administration; the number needed to treat against vancomycin was 1.5 for repeat transplantation. The authors graded the evidence for repeat transplantation as high quality. This is one disease with one well-characterised mechanism, and it is not a template for microbiome intervention generally.

## Colonisation resistance is the best-supported function

That mechanism has a name. **Colonisation resistance** is the capacity of an established community, together with the host's defences, to prevent an incoming organism from taking hold — through competition for nutrients and attachment sites, transformation of bile acids, production of short-chain fatty acids and other inhibitory metabolites, and the maintenance of mucosal immune tone. A 2025 review in *FEMS Microbiology Ecology* frames it as a joint property of the resident community and the host rather than of either alone, which is why antibiotic exposure and a pathogen invasion are the same event viewed from two sides.

Read as ecology, this is an occupancy effect, not a gift: a resident community excludes a newcomer for the same reasons a closed canopy excludes a seedling. It also explains why the mechanistic contribution of [immune regulation](/en/biology/physiology/the-immune-system-explained) cannot be separated cleanly from the microbial contribution in an intact animal.

## Why most disease associations do not transfer

The single most useful corrective in this literature is a cross-study meta-analysis published in *Nature Communications* in 2017. Reprocessing 28 case–control gut studies spanning ten diseases with standardised methods, it found that a few conditions were marked by large community shifts involving more than 50 genera while most involved only 10–15, and — the decisive result — that about half of the genera flagged in individual studies respond to more than one disease. Many published associations are therefore part of a non-specific shift between health and illness rather than a signature of any particular condition.

This is compounded by ordinary methodological variance. A 2018 perspective in *mBio* separates reproducibility, replicability, robustness and generalisability as distinct failures, and the distinction matters here: two laboratories can process the same samples and disagree because of DNA extraction chemistry, primer choice or bioinformatic pipeline, before any biology is involved. The consequences for interpretation are examined further in the insight on [the causal gap in microbiome research](/en/insight/microbiome-research-and-the-causal-gap), and the same inferential trap recurs in [soil microbial communities](/en/ecology/ecosystems/soil-microbiome-regenerative-agriculture), where relative abundance is likewise read as function.

The honest position is narrow. Sequencing surveys are good at detecting that a community differs between groups, weak at saying which difference matters, and silent on direction of causation. Closing that gap requires either a tractable isolate to manipulate or an intervention in the host — and for most of the taxa these surveys detect, neither is currently available.

## Sources

1. **PLOS Biology** — [Revised estimates for the number of human and bacteria cells in the body](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533). Bacterial and human cell counts, the 1.3 ratio and its uncertainty, and the origin of the 10:1 claim.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2017.02224/full). Why sequencing totals are arbitrary and what that does to correlation and difference testing.
3. **Science** — [Gut microbiota from twins discordant for obesity modulate metabolism in mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC3829625/). Transmissibility of an adiposity phenotype into germ-free mice, and its diet dependence.
4. **EClinicalMedicine** — [Faecal microbiota transplantation for recurrent Clostridioides difficile infection: an updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7788438/). Pooled clinical effect, number needed to treat, and evidence grading.
5. **Nature Communications** — [Meta-analysis of gut microbiome studies identifies disease-specific and shared responses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5716994/). Cross-disease reanalysis showing that many associations are non-specific.
6. **mBio** — [Identifying and overcoming threats to reproducibility, replicability, robustness and generalizability in microbiome research](https://pmc.ncbi.nlm.nih.gov/articles/PMC5989067/). Framework separating four distinct failure modes.
7. **FEMS Microbiology Ecology** — [Ecology of the gut microbiota and colonization resistance: mechanisms and therapeutic implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC12728824/). Mechanisms by which a resident community and host defences exclude invaders.
8. **National Human Genome Research Institute** — [Microbiome](https://www.genome.gov/genetics-glossary/Microbiome). Reference definition of the term as used across these literatures.
