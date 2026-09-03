---
title: 'Replication and repair: fidelity assembled from three imperfect filters'
excerpt: Copying a genome with roughly one error per ten billion bases is not a property of the chemistry. It is what polymerase selectivity, proofreading and mismatch repair produce when they act in series, backed by repair that never stops.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - dna-replication
  - dna-repair
  - genome-stability
  - mismatch-repair
  - molecular-biology
related:
  - what-is-dna
  - mutation-types-and-rates
  - what-is-a-genome
  - cell-division-mitosis-and-meiosis
pillar: what-is-dna
---

If base pairing were left to thermodynamics alone — if a polymerase simply took whichever nucleotide the free-energy difference between correct and incorrect pairs favoured — mismatches would be laid down at a rate somewhere around one in a hundred to one in a thousand. Measured at specific loci, the spontaneous mutation rate in eukaryotic genomes is instead about 10⁻¹⁰ per base pair per generation. Seven orders of magnitude separate the chemistry from the outcome, and every one of them is paid for by machinery. That gap, rather than the [double-helical structure of DNA](/en/biology/genetics/what-is-dna), is what makes stable inheritance possible.

## The arithmetic of fidelity

The gap closes in three stages, each acting on what the previous one let through.

The first is **nucleotide selectivity** at the polymerase active site. The replicative eukaryotic polymerases α, δ and ε do not rely on base-pairing energetics; their active sites are shaped so that a correct incoming nucleotide is catalytically favoured. In vitro they generate roughly one mismatch per 10⁴ to 10⁵ correct incorporations — an improvement of two to three orders of magnitude on unassisted chemistry.

The second is **proofreading**. Polymerases δ and ε carry a 3′→5′ exonuclease that excises a mispaired terminal nucleotide before synthesis continues. Its contribution is not a fixed constant: because proofreading depends on the competition between forward polymerisation and backward excision, its efficiency varies by more than a hundredfold with the local sequence and the polymerase involved.

The third is **mismatch repair**, which scans behind the fork for mismatches that survived the first two filters. The reference treatment in *Molecular Biology of the Cell* puts its contribution at a further factor of about 10². Genetic comparisons of repair-proficient and repair-deficient cells give a more uncomfortable picture: the efficiency with which the MutSα–MutLα pathway corrects a replication error varies by more than 100,000-fold depending on which mismatch it is.

That heterogeneity runs through the whole system. The chance that a replicase makes a particular error ranges from misinsertion of dCTP opposite template C by polymerase α, at 10⁻⁷ or below, to single-base deletions in long homonucleotide runs at 10⁻³ or above — a millionfold spread hidden inside the average. When a genome-wide mutation rate is quoted as a single number, it is describing a distribution with a very long tail, and the tail is where disease-relevant errors concentrate.

One comparison makes the point that this accuracy is a deliberate expenditure rather than a physical necessity. Transcription and translation both run at an error frequency near one in 10⁴ — a hundred thousand times worse than replication. A mistranslated protein is degraded; a mis-replicated base is inherited by every descendant cell. The cell buys fidelity only where errors are heritable.

## Why the two strands are not copied equally well

Replication is semiconservative and the fork is structurally asymmetric, and that asymmetry leaves a signature. Because synthesis runs only 5′→3′, one strand is made continuously while the other is assembled from short fragments — 1,000 to 2,000 nucleotides long in bacteria, only 100 to 200 in eukaryotes, each requiring its own RNA primer, primer removal and ligation. Bacterial forks move at rates as high as 1,000 nucleotides per second; eukaryotic forks run about a tenth as fast.

The extra transactions on the lagging strand cost accuracy. A genome-wide comparison found lagging-strand replication about twofold less accurate than leading-strand replication — and mismatch repair about twofold more efficient on lagging-strand mismatches, which partly compensates. Strand asymmetry of this kind is one reason mutation spectra differ systematically across a genome rather than being uniform, a pattern developed further in [mutation types and per-generation rates](/en/biology/genetics/mutation-types-and-rates).

## Damage is continuous, not occasional

Replication errors are only one input. DNA in a resting cell is chemically unstable in water, and the resulting damage arrives constantly.

*Molecular Biology of the Cell* estimates that about 5,000 purine bases are lost from the DNA of each human cell every day through spontaneous depurination, and that cytosine deaminates to uracil at roughly 100 bases per cell per day. A later review in *Environmental and Molecular Mutagenesis* puts abasic-site generation at about 10,000 per cell per day and adds a further tally from S-adenosylmethionine acting as an accidental methyl donor: up to 4,000 N7-methylguanine, 600 N3-methyladenine and 10 to 30 O⁶-methylguanine residues per cell per day.

The twofold disagreement between those depurination figures is worth naming rather than averaging away. Both are extrapolations from in vitro decay kinetics to whole-cell conditions, and neither is a direct count. They are order-of-magnitude statements, and the interesting quantity is not the exact number but the ratio between damage and mutation: fewer than one in a thousand accidental base changes ends up as a permanent mutation. The repair systems are catching almost everything.

One residue class illustrates what happens when they do not. About 3 per cent of cytosines in human DNA carry a methyl group, yet mutations at those positions account for roughly a third of the single-base changes observed in inherited human disease. Deamination of 5-methylcytosine yields thymine — a natural base, paired against guanine, with nothing chemically wrong with it — so the repair machinery must recognise the mismatch rather than the damage. The same modification that carries regulatory information, discussed as [DNA methylation and other epigenetic marks](/en/biology/genetics/epigenetics-explained), is also a mutational hotspot.

## The repair systems are sorted by lesion shape, not by cause

Cells do not maintain a separate repair pathway for each mutagen. They maintain a handful of pathways defined by the geometry of the lesion and by what template remains available.

| Pathway | Lesion recognised | Template used | When it acts |
| --- | --- | --- | --- |
| Base excision repair | single altered bases — deaminated, oxidised or alkylated — and abasic sites | the undamaged complementary strand | continuously |
| Nucleotide excision repair | bulky lesions that distort the helix, including ultraviolet photoproducts | the undamaged complementary strand | continuously |
| Mismatch repair | base–base mismatches and small insertion/deletion loops left by replication | the parental strand, identified by a strand-discrimination signal | immediately behind the fork |
| Non-homologous end joining | double-strand breaks | none; the two ends are processed and ligated directly | throughout the cell cycle |
| Homologous recombination | double-strand breaks | an intact sister chromatid | once replication has produced one |

The double-strand break is the hard case, because both strands are gone and there is no local template. End joining recognises the break within seconds, protects the ends from resection and ligates them, at the price of occasionally losing or adding nucleotides at the junction. Homologous recombination copies the missing sequence from a sister chromatid and does not change the sequence, but it cannot run before one exists. Which of the two resolves a given break is what decides the outcome of a targeted cut, which is why the choice matters so much in [CRISPR genome editing](/en/biology/biotechnology/crispr-genome-editing-explained) — knockouts are easy because end joining is always available, and precise replacements are hard because recombination is not.

## What the failure modes show

Losing a pathway is informative in proportion to how narrow its job is.

Xeroderma pigmentosum, caused by variants in any of nine genes — most of them components of nucleotide excision repair — removes the cell's ability to excise ultraviolet photoproducts. Clinical genetics reference material records a greater than 10,000-fold increase in non-melanoma skin cancer with a median onset at nine years of age, a greater than 2,000-fold increase in cutaneous melanoma with median onset at 22, and an estimated 34-fold increase in internal neoplasms. Reported prevalence is about 1 in 1,000,000 in the United States and Europe, 1 in 22,000 in Japan, and as high as 1 in 10,000 in parts of North Africa and the Middle East.

Lynch syndrome, arising from variants in the mismatch repair genes *MLH1*, *MSH2*, *MSH6* and *PMS2* or in *EPCAM*, produces a different signature: tumours accumulate length changes at repetitive microsatellite tracts, the errors that mismatch repair is least efficient at correcting. Population prevalence has been estimated at 1 in 279, and the syndrome accounts for approximately 3 per cent of colorectal and 3 per cent of endometrial cancers. Cumulative colorectal cancer risk to age 70 differs sharply by gene — around 44 per cent in females and 53 per cent in males with *MLH1* variants, against about 3 per cent for *PMS2*.

That last spread is the caution the whole field carries. A pathway is not a switch. These estimates come substantially from families ascertained because they already had cancer, and the gene-specific range — more than a tenfold difference in colorectal risk between *MLH1* and *PMS2* carriers — is wide enough that a single headline risk figure for the syndrome would misdescribe most of the people who carry it. What repair-deficiency syndromes establish firmly is the causal direction — take out a repair pathway and mutation accumulates — not a fixed probability for any individual. The genome-scale consequences of that accumulation, and the cell-cycle checkpoints that decide whether a damaged cell divides at all, are taken up in [what a genome contains](/en/biology/genetics/what-is-a-genome) and in [mitosis, meiosis and the cell cycle](/en/biology/cells/cell-division-mitosis-and-meiosis).

## Sources

1. **Kunkel and Erie, *Annual Review of Genetics*** — [Eukaryotic mismatch repair in relation to DNA replication](https://pmc.ncbi.nlm.nih.gov/articles/PMC5439269/). Polymerase selectivity, proofreading variability, mismatch-repair efficiency ranges, and leading- versus lagging-strand accuracy.
2. **Alberts and colleagues, *Molecular Biology of the Cell* (NCBI Bookshelf)** — [DNA replication mechanisms](https://www.ncbi.nlm.nih.gov/books/NBK26850/). Overall replication error rate, the mismatch-repair contribution, fork speeds and Okazaki fragment lengths.
3. **Alberts and colleagues, *Molecular Biology of the Cell* (NCBI Bookshelf)** — [DNA repair](https://www.ncbi.nlm.nih.gov/books/NBK26879/). Depurination and deamination rates, the damage-to-mutation ratio, methylated-cytosine mutations, and the repair pathway inventory.
4. **Chatterjee and Walker, *Environmental and Molecular Mutagenesis*** — [Mechanisms of DNA damage, repair and mutagenesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC5474181/). Abasic-site and spontaneous-alkylation rates, and the double-strand break repair pathways.
5. **Ganai and Johansson, *Molecular Cell*** — [DNA replication — a matter of fidelity](https://pubmed.ncbi.nlm.nih.gov/27259205/). Framing of fidelity as polymerase selectivity, proofreading, mismatch repair, nucleotide supply and template condition.
6. **GeneReviews, University of Washington (NCBI Bookshelf)** — [Xeroderma pigmentosum](https://www.ncbi.nlm.nih.gov/books/NBK1397/). Genes involved, the nucleotide-excision-repair defect, cancer risk multiples and population prevalence.
7. **GeneReviews, University of Washington (NCBI Bookshelf)** — [Lynch syndrome](https://www.ncbi.nlm.nih.gov/books/NBK1211/). Mismatch-repair genes, population prevalence, share of colorectal and endometrial cancers, and gene-specific cumulative risks.
