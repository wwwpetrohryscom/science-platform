---
title: 'Taxonomy: naming, ranking, and the rules that keep names stable'
excerpt: Naming an organism is a rule-governed procedure with its own codes, types and priority rules, and it is separate from the scientific judgement about which organisms belong together. This is how that machinery works and where it strains.
type: pillar
author: biology-life-sciences-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - taxonomy
  - nomenclature
  - classification
  - systematics
  - biodiversity-data
related:
  - what-is-a-species
  - phylogenetics-explained
  - the-tree-of-life-and-domains
  - how-many-species-are-there
---

A scientific name does two jobs, and most confusion about taxonomy comes from treating them as one. Deciding which organisms belong together in a group is a scientific judgement, revisable whenever the evidence shifts. Deciding which name that group correctly carries is a rule-governed procedure with almost no scientific content — closer to property law than to biology. The international codes of nomenclature govern the second and are deliberately silent on the first. When a familiar name changes, the cause can lie in either, and from outside the two look identical.

## What a name is anchored to

Every formally published name is tied to a **type**: a designated object that fixes what the name refers to. The type is not a typical individual, an average, or a best example. It is a reference point, and its only function is to settle disputes. If a group later turns out to contain two distinct lineages, the original name stays with whichever lineage contains the type, and the other needs a name of its own.

The second load-bearing rule is **priority**. Where several names compete for the same group, the earliest validly published one normally prevails. Priority is why revisions so often replace a familiar name with an obscure older one, and why taxonomists spend so much of their time in old literature: a description nobody has consulted for a century can still outrank the name printed in every field guide. Both mechanisms are portable across disciplines by design. When microbiologists drafted the SeqCode in 2022 for organisms described from sequence data alone, they built it to be [similar to the prokaryotic code](https://pmc.ncbi.nlm.nih.gov/articles/PMC9519449/) in name formation and rules of priority, changing only what serves as the type.

## Four codes, and what each one accepts as a type

Nomenclature is not one system but several, each with its own governing body, its own literature and its own jurisdiction. They do not always agree, which is why the same word can be a legitimate genus name for both an animal and a plant.

| Code | What it covers | What serves as the type | A recent change |
| --- | --- | --- | --- |
| ICZN | animals | a designated specimen | electronic-only publication permitted since 2012, under conditions |
| ICN | algae, fungi and plants | a preserved specimen | rules on derogatory names adopted in 2024 |
| ICNP | prokaryotes obtainable in pure culture | a living isolate | most prokaryotes remain ineligible |
| SeqCode | prokaryotes, cultured or not | a genome sequence | established in 2022 with its own registry |

The zoological rules illustrate how narrowly these codes legislate. The Commission's 2012 amendment allowed electronic-only publication of new animal names, but only if the work is [registered in ZooBank](https://pmc.ncbi.nlm.nih.gov/articles/PMC3433695/) before it appears, states its own date of publication, carries evidence of that registration, and names both an intended electronic archive and an ISSN or ISBN. Registration of the names themselves remained optional; publication on CD-ROM and similar discs was disallowed after 2012.

The botanical code has moved differently. At the 20th International Botanical Congress in Madrid in July 2024, decisions taking effect on 27 July established a new Article 51.2 under which names published after 1 January 2026 [may be rejected as derogatory](https://pmc.ncbi.nlm.nih.gov/articles/PMC12012794/) to a group of people, and a set of epithets rooted in a racial slur was replaced outright by a new stem, producing names such as *Erythrina afra*. That proposal carried by 351 votes to 205. The same congress rejected both proposals to allow DNA sequences to serve as types, referring the question to a special-purpose committee that will report to the 2029 congress. Registration became available for algal and plant names on a voluntary and retrospective basis, in contrast to fungi, where registration in a recognised repository has been mandatory since 1 January 2013. Which of these rules apply to a given organism depends on which kingdom it was assigned to, a point developed further in the survey of [plant diversity and its major lineages](/en/biology/taxonomy/botany-plant-diversity-explained).

## Ranks are containers, not discoveries

Species is the only rank with candidate empirical definitions, and even there the definitions conflict — the subject of the companion article on [the species problem](/en/biology/taxonomy/what-is-a-species). Above it, the ranks are administrative. Nothing measurable distinguishes a genus from a family; there is no threshold of divergence, age or distinctness that a group must cross to be one rather than the other. Two families in different phyla may differ by orders of magnitude in age and diversity.

That arbitrariness has practical costs, and one project has tried to remove it. The Genome Taxonomy Database rebuilt bacterial classification from a concatenated protein phylogeny and normalised ranks using relative evolutionary divergence, so that a phylum in one part of the tree means roughly what it means elsewhere. The result was disruptive: [58 per cent of the 94,759 genomes](https://pubmed.ncbi.nlm.nih.gov/30148503/) in the database had their existing taxonomy changed, the Candidate Phyla Radiation collapsed from many phyla into one, and 99 phyla were recognised in total. The exercise makes the underlying point visible — ranks are a convention, and a different convention gives a different answer to a question that sounded factual. How groups are inferred in the first place is the business of [phylogenetic inference](/en/biology/taxonomy/phylogenetics-explained), and the deepest ranks of all are still being renegotiated, as the article on [domains and the deep tree](/en/biology/taxonomy/the-tree-of-life-and-domains) sets out.

## Why one organism can carry several valid-looking names

Synonymy is not an occasional untidiness; it is the normal condition of a well-studied group. The second version of the Mammal Diversity Database, published in 2025, curates [50,230 valid and synonymous species-rank names](https://pmc.ncbi.nlm.nih.gov/articles/PMC12526941/) against 6,759 accepted living and recently extinct mammal species — roughly seven names in circulation for every accepted one. Most describe populations later judged to belong to a species already named.

Three separate mechanisms generate the surplus. Independent descriptions of the same organism create objective duplicates, resolved by priority. Taxonomic revision creates subjective ones, when a group formerly ranked as a species is absorbed into another. And transferring a species between genera changes the binomial without any change in the underlying judgement about the organism, so the same animal legitimately appears in the literature under two combinations. None of this is error. It is the visible history of a two-century argument, which is why the deep revisions in [animal body-plan classification](/en/biology/taxonomy/zoology-animal-diversity-explained) left a long trail of names behind them.

## What a checklist is actually asserting

A modern name list is a snapshot of expert opinion, versioned like software. The Catalogue of Life publishes [numbered, dated releases](https://www.catalogueoflife.org/) — the most recent at the time of writing was issued on 26 August 2026 — with totals broken down by kingdom. Those totals move whenever a specialist community revises its treatment of a group, which is a change of opinion rather than of the world, and they move again depending on whether a particular figure counts only accepted names or the synonyms sitting alongside them.

Sequence databases assert something narrower still. NCBI Taxonomy describes itself as [a curated classification and nomenclature](https://www.ncbi.nlm.nih.gov/taxonomy) for the organisms in the public sequence databases, representing about 10 per cent of described species. Its 2020 update reported more than 460,000 formal species names, close to a quarter of described species at the time, alongside over 1.34 million species-ranked entries [carrying no formal name at all](https://pmc.ncbi.nlm.nih.gov/articles/PMC7408187/) — sequences from organisms nobody has described, the so-called dark taxa. The same paper is blunt that no database is error-free or complete and that the primary literature remains necessary. A third approach grafts published trees onto a reference taxonomy wherever a phylogeny exists: the Open Tree of Life assembled a draft with [2.3 million tips](https://pmc.ncbi.nlm.nih.gov/articles/PMC4611642/) this way, filling the gaps with classification rather than evidence. Anyone reading a total should ask which of these three things produced it — a question taken further in [how many species exist](/en/biology/taxonomy/how-many-species-are-there).

## Where the system is now under strain

The pressure comes from organisms that cannot supply a traditional type. Most prokaryotes have never been grown in culture and are therefore ineligible for naming under the prokaryotic code, which is why the SeqCode admits isolate genomes, metagenome-assembled genomes and single-amplified genomes as nomenclatural types — a change that matters for the classification of [bacteria and archaea](/en/biology/microbiology/bacteria-and-archaea-explained). Botany has so far declined the equivalent step. The result is a divided landscape in which what counts as an adequate anchor for a name depends on the kingdom, and in which the same evidence would be sufficient for one organism and inadmissible for another.

None of this machinery decides whether two populations are one kind of organism or two. It records that decision, fixes it to an object and makes it citable — no more than that. Stability in a name list is therefore a property of its governance, and it can coexist with unresolved disagreement about the organisms underneath. The gap matters most where names carry legal and funding weight, as they do in [extinction risk assessment](/en/ecology/conservation/species-extinction-risk-assessment), and it is the reason a nomenclatural act and a taxonomic finding should never be reported as the same event.

## Sources

1. **International Commission on Zoological Nomenclature** — [Amendment of Articles 8, 9, 10, 21 and 78 of the International Code of Zoological Nomenclature to expand and refine methods of publication](https://pmc.ncbi.nlm.nih.gov/articles/PMC3433695/). Conditions for electronic publication, ZooBank registration and the Official Register.
2. **American Journal of Botany** — [From the Shenzhen Code to the Madrid Code: new rules and recommendations for naming algae, fungi, and plants](https://pmc.ncbi.nlm.nih.gov/articles/PMC12012794/). Madrid Code decisions, Article 51.2, registration provisions and the rejected DNA-type proposals.
3. **Nature Microbiology** — [SeqCode: a nomenclatural code for prokaryotes described from sequence data](https://pmc.ncbi.nlm.nih.gov/articles/PMC9519449/). Genome sequences as nomenclatural types and the relationship to the prokaryotic code.
4. **Nature Biotechnology** — [A standardized bacterial taxonomy based on genome phylogeny substantially revises the tree of life](https://pubmed.ncbi.nlm.nih.gov/30148503/). Rank normalisation by relative evolutionary divergence and the scale of resulting reclassification.
5. **Journal of Mammalogy** — [How many mammal species are there now? Updates and trends in taxonomic, nomenclatural, and geographic knowledge](https://pmc.ncbi.nlm.nih.gov/articles/PMC12526941/). Curated valid and synonymous species-rank names for mammals.
6. **Catalogue of Life** — [Catalogue of Life checklist](https://www.catalogueoflife.org/). Versioned, dated releases of the consensus checklist.
7. **NCBI** — [Taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy). Scope of the classification and its coverage of described species.
8. **Database (Oxford)** — [NCBI Taxonomy: a comprehensive update on curation, resources and tools](https://pmc.ncbi.nlm.nih.gov/articles/PMC7408187/). Formal versus unnamed species-ranked entries and the limits of any single database.
9. **PNAS** — [Synthesis of phylogeny and taxonomy into a comprehensive tree of life](https://pmc.ncbi.nlm.nih.gov/articles/PMC4611642/). Construction and scale of the Open Tree of Life draft.
