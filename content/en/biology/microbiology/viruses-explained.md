---
title: 'Viruses: replication strategies and the question of whether they are alive'
excerpt: Every virus faces the same problem — producing messenger RNA a host ribosome will read. The seven routes to that outcome organise virology better than shape or host does, and they explain why some viruses evolve past a vaccine and others do not.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - viruses
  - bacteriophage
  - baltimore-classification
  - viral-evolution
  - marine-microbiology
related:
  - microbiology-explained
  - bacteria-and-archaea-explained
  - antimicrobial-resistance-evidence
  - culturing-and-sequencing-microbes
pillar: microbiology-explained
---

A virus particle is an incomplete instruction set with a delivery system. It carries a genome of either RNA or DNA inside a protein capsid, sometimes wrapped in a lipid envelope taken from a previous host's membrane, and it carries no machinery for making protein or for generating its own energy. Everything a virus does after entry is done with borrowed equipment, which is why the useful way to organise virology is not by what a particle looks like but by how its genome gets converted into something a host ribosome can translate.

Viruses appear in the biosphere's mass budget at about 0.2 gigatonnes of carbon, the smallest entry among the major categories in the census discussed in the survey of [microbial life at planetary scale](/en/biology/microbiology/microbiology-explained). That figure understates their significance by a wide margin, for reasons that become clear once the ocean numbers are set out below.

## Seven routes to messenger RNA

Host ribosomes read one thing: positive-sense single-stranded messenger RNA. A virus whose genome is already in that form can begin translation immediately; a virus whose genome is anything else must first perform a conversion, and the enzyme required for that conversion generally has to be encoded by the virus itself, because host cells have no reason to possess it.

Sorting viruses by that conversion step produces the seven-class scheme that has organised the field since the early 1970s. Classification of viruses proceeds on morphology, chemical composition and mode of replication, and it is the third of these that carries most of the predictive weight.

| Class | Genome | Route to mRNA | Example group |
| --- | --- | --- | --- |
| I | double-stranded DNA | transcribed directly | herpesviruses, tailed phages |
| II | single-stranded DNA | converted to dsDNA, then transcribed | parvoviruses, circoviruses |
| III | double-stranded RNA | transcribed by a viral RNA polymerase | rotaviruses |
| IV | positive-sense ssRNA | genome is already mRNA | picornaviruses, coronaviruses |
| V | negative-sense ssRNA | copied to positive sense by a packaged polymerase | influenza viruses, rhabdoviruses |
| VI | positive-sense ssRNA with reverse transcription | reverse-transcribed to DNA, integrated, then transcribed | retroviruses |
| VII | double-stranded DNA with reverse transcription | transcribed, then the genome is rebuilt by reverse transcription | hepadnaviruses |

The scheme earns its place because membership predicts things that matter. Classes V and VI must package a polymerase in the particle, because the first step after entry cannot wait for protein synthesis. Class VI viruses integrate into host chromosomes, which is why the infections they cause are difficult to clear. And the RNA classes, lacking proofreading, mutate orders of magnitude faster than the DNA classes — a difference taken up below.

## Size, and where the category breaks

The particle-size range spans nearly two orders of magnitude, and both ends are instructive. Circoviruses, among the smallest autonomously propagating viruses, have an isometric capsid measuring around 17 nm. At the other extreme, pandoraviruses isolated from Chilean coastal sediment and an Australian freshwater pond have micrometre-sized ovoid particles containing DNA genomes of at least 2.5 and 1.9 megabases — larger than the genomes of some parasitic bacteria, and larger than the *Carsonella* genome described in the article on [the two prokaryotic domains](/en/biology/microbiology/bacteria-and-archaea-explained).

This is where the "are viruses alive" question usually enters, and it is worth being clear that it is a question about a definition rather than about the world. No new observation will settle it. What giant viruses did change is the empirical claim that used to prop up one side of the argument — that viruses are necessarily small and genetically minimal. They are not. They still do not carry ribosomes, and they still do not metabolise. Whether that disqualifies them from a category depends entirely on where the category's boundary is drawn, and the boundary is a convention.

## The decision to lyse or to wait

A phage infecting a bacterium faces a choice with an obvious economic structure. Lysis produces progeny immediately and destroys the host; lysogeny integrates the genome into the host chromosome, forgoes immediate reproduction, and rides along. Which is better depends on how many uninfected hosts remain, and a phage inside a cell has no direct way to see that.

Some phages solve it by leaving messages. Phages of the SPbeta group infecting *Bacillus* produce a six-amino-acid peptide during infection and release it into the medium; later-arriving phages measure its concentration and shift toward lysogeny when it is high. The system is encoded by three genes — one producing the peptide, one an intracellular receptor for it, and one a negative regulator of lysogeny — and it lets an infecting phage estimate how many infections have recently occurred nearby, which is a proxy for how many hosts are left. Different phages use different peptide versions, so the signal is private to a lineage.

The point generalises beyond the elegance of the mechanism. Lysogeny is how phages become vehicles for bacterial gene movement, carrying host DNA into new cells and, in several clinically important cases, carrying toxin and resistance genes with it. That route connects directly to the evidence on [how resistance spreads between bacteria](/en/biology/microbiology/antimicrobial-resistance-evidence).

## Ocean arithmetic

Marine virology reset expectations about how much of the biosphere's mortality is viral. The standard assessment puts roughly 10³⁰ virus particles in the ocean, and approximately 10²³ viral infections occurring in it every second. Viruses are, on that accounting, the most abundant biological entities in seawater and the largest reservoir of genetic diversity in it.

The consequence for chemistry is that lysis diverts carbon and nutrients away from grazers and back into dissolved organic matter, where other microbes re-consume it — a short-circuit in the food web usually called the viral shunt. The standard reading is that this shifts the balance between carbon exported to depth and carbon respired near the surface, which is why the process appears in discussions of [marine productivity and food-web structure](/en/ecology/oceans/marine-food-webs-and-productivity); the size of that effect at global scale is still being measured rather than settled.

## Mutation rate, quasispecies, and what the clinic inherits

Measured mutation rates cluster by genome chemistry rather than by host or disease. A survey of published estimates puts DNA viruses at 10⁻⁸ to 10⁻⁶ substitutions per nucleotide per cell infection and RNA viruses at 10⁻⁶ to 10⁻⁴ — a difference of roughly two orders of magnitude, driven largely by the absence of proofreading in most viral RNA polymerases.

At the upper end, a large fraction of progeny genomes differ from their template in every replication cycle. The population inside a single infected host is therefore not a clone but a **quasispecies**: a cloud of closely related but genetically distinct genomes evolving together under mutation and selection. In one documented clinical case, 26 mutations accumulated over three years, corresponding to about 2.7 × 10⁻³ substitutions per site per year.

Two practical consequences follow, and both are well supported. First, variants resistant to a given antiviral typically pre-exist in the population before treatment starts, which is the argument for combination therapy — a principle articulated for highly variable RNA viruses in the late 1980s and repeatedly borne out since. Second, vaccine composition for rapidly evolving viruses has to be revisited on a schedule, because the antigens that [an adaptive immune response](/en/biology/physiology/the-immune-system-explained) has learned to recognise are themselves drifting: the World Health Organization convenes twice a year to recommend influenza vaccine composition, in February for the northern hemisphere season and in September for the southern.

## What the counts do and do not cover

The International Committee on Taxonomy of Viruses maintains the formal classification, and its most recent published ratification round placed the taxonomy at 16,213 species distributed across 3,768 genera, 368 families, 93 orders and 7 realms. Those totals rise with every annual release, which is a measure of sequencing and curation effort rather than of viral diversity appearing.

Formal taxonomy lags metagenomics badly here, and by design: a named species requires enough evidence to place it, whereas environmental sequencing turns up viral genome fragments faster than committees can evaluate them, most of them with no known host and no cultured representative. The same cultivation gap that limits bacterial and archaeal microbiology limits virology more severely, because a virus cannot be cultured without first culturing something for it to infect — a constraint discussed in the page on [methods and what they select for](/en/biology/microbiology/culturing-and-sequencing-microbes). Any statement about the total number of virus types on Earth is currently an extrapolation, and the honest version of it carries an order-of-magnitude uncertainty rather than a figure.

## Sources

1. **Archives of Virology — ICTV Executive Committee (2025)** — [Changes to virus taxonomy, the International Code of Virus Classification and Nomenclature, and the ICTV Statutes ratified by the International Committee on Taxonomy of Viruses](https://pmc.ncbi.nlm.nih.gov/articles/PMC12714852/). Ratified species, genus, family, order and realm totals for the current Master Species List release.
2. **NCBI Bookshelf, Medical Microbiology (4th edition)** — [Structure and classification of viruses](https://www.ncbi.nlm.nih.gov/books/NBK8174/). Virion composition, capsid and envelope structure, the 17 nm circovirus capsid, and classification criteria.
3. **Journal of Virology — Sanjuán and colleagues (2010)** — [Viral mutation rates](https://pmc.ncbi.nlm.nih.gov/articles/PMC2937809/). Measured mutation-rate ranges for DNA and RNA viruses in substitutions per nucleotide per cell infection.
4. **Nature — Erez and colleagues (2017)** — [Communication between viruses guides lysis-lysogeny decisions](https://pmc.ncbi.nlm.nih.gov/articles/PMC5378303/). The arbitrium peptide system and the three genes that encode it.
5. **Nature Reviews Microbiology — Suttle (2007)** — [Marine viruses: major players in the global ecosystem](https://pubmed.ncbi.nlm.nih.gov/17853907/). The 10³⁰ ocean virus estimate and the rate of viral infection in seawater.
6. **Science — Philippe and colleagues (2013)** — [Pandoraviruses: amoeba viruses with genomes up to 2.5 Mb reaching that of parasitic eukaryotes](https://pubmed.ncbi.nlm.nih.gov/23869018/). Giant-virus particle size and genome size.
7. **Pathogens (2026)** — [Understanding basic concepts of viral quasispecies: from evolutionary dynamics to clinical relevance](https://pmc.ncbi.nlm.nih.gov/articles/PMC13516255/). Definition of a quasispecies, the pre-existence of resistant variants, and the combination-therapy argument.
8. **World Health Organization** — [Recommendations for influenza vaccine composition](https://www.who.int/teams/global-influenza-programme/vaccines/who-recommendations). The twice-yearly northern and southern hemisphere recommendation cycle.
