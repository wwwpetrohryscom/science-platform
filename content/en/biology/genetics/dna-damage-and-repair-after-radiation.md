---
title: 'DNA damage and repair after radiation: two pathways and a decision about which to use'
metaTitle: 'DNA repair after radiation: two pathways, one decision'
excerpt: A double-strand break can be rejoined quickly and imperfectly, or slowly and accurately using a sister chromatid as a template. Which happens depends on where in the cell cycle the break occurs, and the choice is actively made.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - dna-repair
  - radiation
  - double-strand-breaks
  - genetics
related:
  - dna-replication-and-repair
  - what-is-dna
  - ultraviolet-damage-and-photoprotection
  - why-wavelength-decides-what-radiation-does
_bodyHash: 158ec5d6
pillar: what-is-dna
---

Ionising radiation damages [DNA](/en/biology/genetics/what-is-dna) in many ways, and one of them dominates the consequences. A single-strand break leaves an intact complementary strand to copy from; a double-strand break leaves nothing on either side to specify what the sequence was. The cell has to choose between rejoining the ends it can find and reconstructing the sequence from somewhere else, and the two options have different costs.

## Not all radiation makes the same damage

The distinction that organises the field is between sparsely and densely ionising radiation. A 2021 review in *Frontiers in Genetics* states it: "Photon radiation induces mainly isolated lesions including single strand breaks (SSBs), base damage and DSBs. In contrast, particle radiation with high LET, such as α-particles and carbon ions are thought to induce a more highly localized and clustered DNA damage (CDD)."

Linear energy transfer is the quantity behind that. A photon deposits energy in scattered small events along a long track; an alpha particle deposits far more per unit length, so the damage it makes is concentrated in a short stretch of DNA.

The consequence is that a gray of alpha radiation is not biologically equivalent to a gray of X-rays, and this is why [dose is weighted](/en/physics/matter-radiation/radioactivity-and-radiation-units) by radiation type before being used to estimate risk. Clustered damage is harder to repair, because the machinery that would fix one lesion needs undamaged DNA nearby to work against, and clustered damage does not provide it.

## The two pathways

The first is fast and does not consult a template. As the review puts it: "The first major pathway of DSB repair following X-ray irradiation is NHEJ" — non-homologous end joining, which recognises the broken ends, processes them minimally and ligates them.

The second is accurate and requires a copy. "HR is usually error-free because it makes use of a sister chromatid as a template for repair. This dependence on a template limits its activity to late S and G2 phase."

That last clause is the whole structure of the system. A sister chromatid exists only after replication, so homologous recombination is simply unavailable to a cell in G1 no matter how much the accuracy would be worth. The choice is not a preference; for most of the [cell cycle](/en/biology/cells/cell-division-mitosis-and-meiosis) there is only one option.

## The choice is made, not defaulted to

Where both are available, the cell decides, and the decision is implemented at the level of the broken end. The review identifies the mechanism: 53BP1 "inhibits end resection in G1 phase of the cell cycle."

End resection — chewing back one strand to expose a single-stranded overhang — is the commitment step for homologous recombination, and it cannot be undone. Blocking it in G1 forecloses the accurate pathway at a point where the accurate pathway would fail anyway, because there is no template and resection would leave the cell with a long single-stranded end and nothing to do with it.

So the pathway choice is a regulated decision that tracks the availability of a template, and the regulator acts on the DNA end itself rather than on the enzymes.

## Why error-prone repair is not a design flaw

Non-homologous end joining introduces small insertions and deletions at the junction. It is nonetheless the dominant pathway in most cells most of the time, and calling it inferior misreads the problem.

An unrepaired double-strand break is not a mutation; it is a broken chromosome, and it kills the cell or produces a gross rearrangement at the next division. Against that, a few lost bases at the join is a good trade. The pathway is fast, works in any cell-cycle phase, and requires no template — properties that matter more than fidelity when the alternative is chromosome loss.

This also explains why the pathway is exploited rather than merely tolerated: [CRISPR knockouts](/en/biology/biotechnology/crispr-genome-editing-explained) work because the cell repairs a targeted cut by end joining and makes exactly the small indels that disrupt a reading frame.

## The link to dose and risk

The EPA's radiation guidance frames the population-level consequence in terms this mechanism explains. Acute radiation syndrome "takes a very high radiation exposure… more than 0.75 gray (75 rad) in a short time span" — the regime in which enough cells are killed outright to disable a tissue. Cancer risk sits far below that, and the agency states that "about 99 percent of individuals would not get cancer as a result of a one-time uniform whole-body exposure of 100 millisieverts (10 rem) or lower."

Regulatory practice bridges the gap with a modelling assumption rather than a measurement: "The LNT model assumes that the risk of cancer due to a low-dose exposure is proportional to dose, with no threshold." Whether that assumption is right at low dose is the argument examined in [ionising radiation and risk](/en/physics/matter-radiation/ionising-radiation-exposure-and-risk); what the repair biology contributes is a reason it is hard to settle, since the same lesion is sometimes repaired correctly, sometimes incorrectly, and sometimes fatally.

## Sources

1. **Frontiers in Genetics (PMC)** — [DNA double strand break repair pathways in response to different types of ionizing radiation](https://pmc.ncbi.nlm.nih.gov/articles/PMC8514742/). Isolated versus clustered damage, NHEJ as the first major pathway after X-rays, HR's template dependence and cell-cycle restriction, and 53BP1's role in G1.
2. **US EPA** — [Radiation health effects](https://www.epa.gov/radiation/radiation-health-effects). The acute-syndrome threshold, the 100 mSv statement, and the linear no-threshold assumption.
3. **Photochemistry and Photobiology (PMC)** — [Molecular regulation of UV-induced DNA repair](https://pmc.ncbi.nlm.nih.gov/articles/PMC4355264/). The contrasting excision pathway for lesions that distort rather than break.
