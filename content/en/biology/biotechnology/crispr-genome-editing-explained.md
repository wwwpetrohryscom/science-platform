---
title: 'CRISPR: the bacterial immune system that became an editing tool'
excerpt: A guided nuclease cuts DNA; the cell decides what the cut becomes. That division of labour explains why knockouts are routine, precise replacements are hard, and delivery — not targeting — is the limiting step.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - genome-editing
  - crispr-cas9
  - dna-repair
  - base-editing
  - gene-therapy
related:
  - biotechnology-explained
  - dna-sequencing-technologies
  - dna-replication-and-repair
  - synthetic-biology-explained
pillar: biotechnology-explained
_bodyHash: 6e971da8
---

The nuclease is the famous component and the least interesting one. Cas9 finds a sequence and breaks it; what happens next is done by repair machinery the cell already had, and the repair outcome is the product. Nearly every practical property of genome editing — why gene knockouts became routine, why precise replacements stayed difficult, why delivery rather than targeting is the binding constraint in therapy — follows from that division of labour between an introduced enzyme and a pre-existing biological process. It is also the part most often skipped in summaries, which tend to describe the scissors and stop. Editing in place is the most recent of the core operations in the [wider biotechnology toolkit](/en/biology/biotechnology/biotechnology-explained), and the one whose limits are least widely understood.

## An anti-phage system, read in reverse

CRISPR-Cas systems are bacterial and archaeal adaptive immunity. Fragments of previously encountered viral or plasmid DNA are stored in an array, transcribed and processed into short guide RNAs, and used to recognise and destroy the same sequence on re-encounter. The system is a defence against [viruses that infect bacteria](/en/biology/microbiology/viruses-explained), and it evolved under the pressure of that arms race rather than for anything resembling laboratory convenience.

The 2012 result that turned it into a tool established the mechanism precisely. In one class of these systems, a mature CRISPR RNA base-paired to a trans-activating RNA forms a two-RNA structure that directs Cas9 to introduce a double-strand break; the enzyme's HNH domain cuts the strand complementary to the guide and its RuvC-like domain cuts the other. The same work showed that the two RNAs could be fused into a single engineered chimera that still directed sequence-specific cleavage — the step that made the system programmable by synthesising one short RNA rather than reconstructing a natural locus.

Targeting is not free of constraints. Cas9 requires a short protospacer-adjacent motif immediately beside the matched sequence, which in the native context distinguishes invading DNA from the bacterium's own stored copy. For the commonly used *Streptococcus pyogenes* enzyme that motif is NGG, and later work quantified how permissive that is: an NGG motif on one strand or the other occurs on average about every 8 base pairs, so the constraint bites mainly when an edit must fall at an exact position rather than merely within a region.

## The repair pathway is the product

A double-strand break in a mammalian cell is usually resolved by end-joining, which frequently leaves small insertions or deletions. In a coding sequence those shift the reading frame, which is why disrupting a gene is straightforward: you are not making a designed change, you are exploiting an error-prone repair route and selecting the cells where it misfired usefully. Replacing a sequence with a specified alternative requires homology-directed repair with a supplied template, a pathway that is restricted to particular cell-cycle phases and competes poorly with end-joining. The mechanics of both routes are covered in the article on [DNA replication and repair](/en/biology/genetics/dna-replication-and-repair).

The efficiency gap is stark in head-to-head data. In the experiments that introduced base editing, delivering Cas9, a guide and a single-stranded donor to drive homology-directed repair produced the intended cytosine-to-thymine conversion at an average of 0.5 per cent of alleles while generating insertions and deletions at an average of 4.3 per cent. The same paper puts the ratio of intended conversion to end-joining outcomes at 0.17 for wild-type Cas9, against 23 for the third-generation base editor it was introducing.

## Writing without breaking both strands

Two approaches avoid the double-strand break entirely, and both were built by fusing a new activity to a disabled or nicking Cas9.

Base editing fuses a cytidine deaminase to Cas9, converting cytosine to uracil within a window of roughly five nucleotides in the guide-defined region; replication then fixes the change as a C-to-T (or G-to-A) substitution. With a nickase targeting the unedited strand and a uracil glycosylase inhibitor included, the reported conversion reached approximately 15 to 75 per cent of total cellular DNA across four cell lines, with indel formation typically at or below 1 per cent.

Prime editing fuses a reverse transcriptase to a nickase Cas9 and uses a guide RNA that both specifies the site and encodes the desired sequence, which is written into the nicked strand and resolved by the cell. The originating work performed more than 175 edits in human cells, including all twelve possible point substitutions plus small insertions and deletions, with indel frequencies averaging 0.86 per cent for the simpler of its two configurations; the variant that adds a second nick to bias repair towards the edited strand raised both efficiency and indels, the latter into the low tens of per cent at some sites. Its authors calculated that, in principle, the approach could address up to about 89 per cent of the 75,122 pathogenic human variants then catalogued in ClinVar — a statement about the class of changes the chemistry can make, not a claim about clinical reach.

| Approach | Break introduced | Changes it can make | Reported unintended indels |
| --- | --- | --- | --- |
| Nuclease plus end-joining | Double-strand | Disruption, not specification | The intended mechanism |
| Nuclease plus donor template | Double-strand | Any, in principle | ~4.3% against ~0.5% conversion |
| Cytosine base editing | Nick only | One transition class, ~5 nt window | Typically ≤1% |
| Prime editing | Nick only | All substitutions, small insertions and deletions | ~0.86% for the base configuration |

## Measuring what cannot be predicted

An editor that recognises about twenty bases will sometimes act at sequences that resemble the target. The important finding from the assays built to measure this is not that off-target activity exists but that it is poorly predicted. The GUIDE-seq method captures a short double-stranded oligonucleotide into breaks and sequences the insertion points, giving an unbiased genome-wide map. Applied to thirteen guides in two human cell lines, it found that most identified sites had not been detected by the computational prediction tools then in use or by chromatin immunoprecipitation, and that missed sites included some differing from the target by as little as one mismatch. It also showed that truncating the guide RNA substantially reduced off-target breaks, and that some apparent breakpoint hotspots were independent of the nuclease altogether.

Two limits follow. Any off-target profile is specific to the guide, the cell type and the assay's sensitivity; a clean result in one cell line does not transfer. And because these events can be rarer than the error floor of the sequencing used to detect them, the depth and error characteristics of the [sequencing platform](/en/biology/biotechnology/dna-sequencing-technologies) set the detection limit for the safety claim.

## Delivery decides which diseases are reachable

The first approved therapy using this technology is instructive about what is currently practical. It treats sickle cell disease by taking a patient's own blood stem cells out of the body, using Cas9 to silence an erythroid-specific enhancer of *BCL11A* — a repressor of fetal haemoglobin — so that edited cells produce fetal haemoglobin, which interferes with sickling. It was approved in the United States on 8 December 2023 for patients aged 12 and over with recurrent vaso-occlusive crises, and in January 2024 for transfusion-dependent β-thalassaemia.

Two features deserve attention. The edit does not repair the causative mutation; it disables a regulatory element so that a different, normally silenced gene is expressed, which is a strategy borrowed from what is known about [how gene expression is regulated](/en/biology/genetics/how-gene-expression-is-regulated) rather than from repair biology. And the procedure is ex vivo: cells are edited in a dish, and the patient undergoes myeloablative conditioning before their return. The therapeutic bulletin describing both approved sickle cell products notes that this combination of ex vivo genomic manipulation and conditioning leaves questions about long-term haematologic risk that only extended follow-up can answer. Editing tissues in place, without removing them, remains the harder and mostly unsolved problem.

## Where the governance line is drawn

Editing somatic cells affects one patient. Editing gametes or embryos affects descendants who cannot consent and cannot be followed up. The World Health Organization's 2021 recommendations treat somatic, germline and heritable applications within one governance framework while separating them in practice, proposing a registry for human genome editing research, mechanisms for reporting work that falls outside agreed norms, and sustained public engagement. National law diverges considerably below that level, and the practical position is that heritable applications remain outside accepted clinical practice while somatic ones proceed under conventional therapeutic regulation.

What editing has changed for research is less contested than what it has changed for medicine. Being able to disable a gene in a chosen cell type turns many correlative observations into testable ones. It does not turn them into explanations: a phenotype that appears when a sequence is removed shows that the sequence is necessary under those conditions, which is a narrower claim than the one usually reported.

## Sources

1. **Science (author manuscript, PubMed Central)** — [A programmable dual RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6286148/). The two-RNA mechanism, domain-specific cleavage and the single-chimera demonstration.
2. **Nature (author manuscript, PubMed Central)** — [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4873371/). Base-editing window, conversion efficiencies and the comparison with homology-directed repair.
3. **Nature (author manuscript, PubMed Central)** — [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). Prime-editing scope, indel frequencies, PAM spacing and the ClinVar calculation.
4. **Nature Biotechnology (author manuscript, PubMed Central)** — [GUIDE-Seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pmc.ncbi.nlm.nih.gov/articles/PMC4320685/). Unbiased off-target mapping and the failure of prediction tools.
5. **Genetics in Medicine Open (ACMG therapeutics bulletin)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Mechanism, approval dates and the long-term follow-up caveats.
6. **World Health Organization** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Governance framework covering somatic, germline and heritable applications.
