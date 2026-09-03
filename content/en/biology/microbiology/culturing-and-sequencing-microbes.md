---
title: 'Studying microbes: why the method decides what you find'
excerpt: A plate, a PCR primer and a metagenome assembler each return a different subset of the same community. This page sets out what every major microbiological method selects for, and the quality standards that make a genome without an organism reportable.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - culturing
  - amplicon-sequencing
  - metagenome-assembled-genomes
  - single-cell-genomics
  - culturomics
related:
  - microbiology-explained
  - microbiomes-and-host-microbe-interactions
  - microbial-biogeochemistry
  - dna-sequencing-technologies
pillar: microbiology-explained
_bodyHash: 75ae3a9e
---

Microbiology has a recurring problem that other fields of biology mostly do not: the organisms cannot be seen doing anything useful, so every fact about them arrives through an instrument that admits some of them and excludes the rest. A colony on agar, a sequence read from a PCR product and a genome binned out of a metagenome are three different filters, and the composition each one reports is partly a description of the filter. Knowing which is which is most of what separates a defensible microbial ecology claim from an artefact.

The organisms and their metabolic range are covered in the [introduction to microbial life](/en/biology/microbiology/microbiology-explained). What follows is a methods page, organised by what each approach systematically misses.

## What a plate selects for

The **[great plate count anomaly](/en/glossary/great-plate-count-anomaly)** — the long-standing observation that far fewer colonies grow from an environmental sample than there are cells countable under a microscope — is usually presented as a puzzle. It is better read as a list. A standard plate offers one carbon source at one concentration, one oxygen tension, one temperature, one pH, no partner organisms and an incubation of a few days. An organism that requires a syntrophic partner to remove hydrogen, or that grows at a doubling time of weeks, or that is inhibited by the very nutrient concentrations used to make a rich medium, will not appear — not because it is unculturable in principle but because those conditions were not offered.

The size of the resulting gap depends entirely on the habitat, and this is the part usually left out. A 2018 analysis in *mSystems* compared metagenomic 16S rRNA gene sequences — which carry far less culture-driven bias than primer-amplified surveys — with their nearest cultured relatives across many environments. Seawater, freshwater, terrestrial subsurface, soil, hypersaline systems, marine sediment, hot springs, hydrothermal vents, snow and bioreactors were dominated by uncultured groups, with 22 to 87 per cent belonging to uncultured genera through classes. Human and human-associated environments were the exception, dominated by cultured genera at 45 to 97 per cent. Scaled globally, the authors estimated that uncultured genera account for around 7.3 × 10²⁹ cells, roughly 81 per cent of the total, and that uncultured phyla are overrepresented in metatranscriptomes relative to metagenomes — evidence that these cells are not merely present but active.

The practical consequence is that the human microbiome literature and the environmental microbiology literature face different versions of the same problem, and results about how well sequencing tracks culture do not transfer between them.

## The biases a marker gene carries

Amplicon sequencing replaces the plate with a primer pair, which is a filter of a different shape.

- **Primer coverage.** No primer set matches every target; lineages with mismatches in the primer-binding region are underrepresented or absent, and the affected lineages differ between primer sets, so two studies of the same sample can disagree systematically.
- **Copy number.** The rRNA operon occurs in multiple copies, from 1 to 15 in bacteria and 1 to 4 in archaea. A frequently recovered sequence may be a high-copy taxon of modest abundance or a low-copy taxon of high abundance, and correcting for this requires knowing the copy number of organisms that are often the least characterised.
- **Chimeras and error.** PCR generates hybrid sequences from partial extension products; these inflate apparent diversity unless removed, and the removal itself discards some real sequences.
- **Region and resolution.** Different variable regions of the same gene resolve different taxa, so the taxonomic depth of a result is a function of which fragment was amplified.

None of these is fatal, and all are correctable in principle. What they preclude is treating a relative-abundance table as a direct observation — a limitation that compounds with the compositional problem examined in [what microbiome surveys establish](/en/biology/microbiology/microbiomes-and-host-microbe-interactions).

## Genomes without organisms

Shotgun metagenomics removes the primer, and computational binning then groups assembled fragments into putative genomes. A **metagenome-assembled genome** is a hypothesis about which contigs came from one population, and its usefulness depends on being honest about how good that hypothesis is.

The Genomic Standards Consortium set that standard in 2017. A high-quality draft assembled genome or single-amplified genome must be more than 90 per cent complete with less than 5 per cent contamination, and must encode the 23S, 16S and 5S rRNA genes plus tRNAs for at least 18 of the 20 amino acids. A medium-quality draft is at least 50 per cent complete with less than 10 per cent contamination; anything below 50 per cent is a low-quality draft. Completeness and contamination are themselves estimates, derived from expected single-copy marker genes — which means they are least reliable for exactly the deeply novel lineages that make binning worthwhile, because the marker sets were built from cultured relatives.

The scale these methods reach is real. The Unified Human Gastrointestinal Genome collection, published in *Nature Biotechnology* in 2021, assembled 204,938 non-redundant genomes representing 4,644 gut prokaryotes and more than 170 million protein sequences. More than 70 per cent of those species have no cultured representative, and 40 per cent of the proteins have no functional annotation. Single-cell genomics offers a complementary route — sort one cell, amplify its genome, sequence it — which yields an unambiguous single-organism genome but usually an incomplete one, and is graded under the same standards.

Reference databases set a further ceiling: taxonomic assignment can only place a sequence against what has been deposited. NCBI's RefSeq collection stood at 182,465 organisms in release 236 of July 2026, across all of life. Every "unassigned" read in a survey is a statement about that collection as much as about the sample.

## Culture came back

The response to all of this was not to abandon culture but to industrialise it. **Culturomics** multiplies the number of conditions — hundreds of media, atmospheres, incubation times and enrichment steps — and screens the resulting colonies by mass spectrometry and sequencing. A parallel line of work used targeted phenotypic culturing informed by metagenomic data: a 2016 study in *Nature* isolated 137 bacterial species from healthy human faecal samples, archived them as pure cultures, and inferred from genomic and phenotypic analysis that at least 50 to 60 per cent of intestinal bacterial genera form resilient spores specialised for host-to-host transmission — which is also a plausible reason so many gut anaerobes turned out to be culturable after all.

One caveat belongs in the record. An early and widely cited culturomics paper, published in *Nature Microbiology* in 2016, was retracted in November 2024. The stated reason was documentary rather than microbiological: the authors could not provide evidence of ethics approval in the additional countries from which samples had been collected, beyond the French approval the paper cited. Several authors disagreed with the retraction. The culturing approach itself has been reproduced by other groups, but a reader tracing the literature will meet a retracted foundational reference, and it is better to know why.

## What this means for reading a result

The methods are not interchangeable, and the mismatch between them is informative rather than embarrassing. A taxon abundant in an amplicon survey and absent from a metagenome may be a copy-number artefact. A metabolic capability inferred from an assembled genome is a capability, not an activity — the gap between the two is the subject of [microbial biogeochemistry](/en/biology/microbiology/microbial-biogeochemistry). And a survey of a poorly sampled habitat will report high novelty partly because the reference databases are thin there.

The same logic that ecologists apply to survey effort in [species counts](/en/ecology/biodiversity/species-richness-explained) applies here with more force, because the detection probability of a microbial taxon depends not just on how hard you looked but on which of several incompatible instruments you looked with. Improvements are coming from the platform side as much as from the biology, as covered in [DNA sequencing technologies](/en/biology/biotechnology/dna-sequencing-technologies); longer reads shorten the assembly gap, but they do not tell you what an organism does.

## Sources

1. **mSystems** — [Phylogenetically novel uncultured microbial cells dominate Earth microbiomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6156271/). Uncultured fractions by habitat, global cell estimates, and metatranscriptome evidence of activity.
2. **Nucleic Acids Research** — [rrnDB: improved tools for interpreting rRNA gene abundance in bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383981/). rRNA operon copy-number ranges and the bias they introduce into amplicon surveys.
3. **Nature Biotechnology** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). Completeness, contamination and marker-gene thresholds for reporting assembled genomes.
4. **Nature Biotechnology** — [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7801254/). Genome and protein counts, and the share of species without cultured representatives.
5. **Nature** — [Culturing of 'unculturable' human microbiota reveals novel taxa and extensive sporulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4890681/). Targeted phenotypic culturing of 137 species and the prevalence of sporulation.
6. **Nature Microbiology** — [Retraction note: Culture of previously uncultured members of the human gut microbiota by culturomics](https://pmc.ncbi.nlm.nih.gov/articles/PMC13179128/). The 2024 retraction and its stated grounds.
7. **NCBI (National Library of Medicine)** — [Reference Sequence (RefSeq) database](https://www.ncbi.nlm.nih.gov/refseq/). Release 236 organism and record counts underpinning taxonomic assignment.
