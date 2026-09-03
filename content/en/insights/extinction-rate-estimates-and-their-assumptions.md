---
title: Every extinction-rate number is a model, and the models disagree about what they are counting
metaTitle: 'Extinction-rate estimates and their assumptions'
excerpt: The claim that species are disappearing hundreds or thousands of times faster than normal is a ratio between two model outputs built from different taxa, different data types and different timescales. It inherits every assumption in both.
argument: A current-versus-background extinction ratio compares a vertebrate-dominated, species-level, five-century record against a fossil record dominated by hard-bodied marine taxa, often resolved only to genus and averaged over millions of years. The comparison is still informative about direction and order of magnitude, and it is much weaker than the precision of the quoted numbers implies.
category: ecology
author: biodiversity-conservation-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - extinction-rates
  - red-list
  - fossil-record
  - biodiversity-loss
  - measurement-uncertainty
related:
  - species-extinction-risk-assessment
  - red-list-index-explained
  - how-many-species-are-there
  - why-species-counts-mislead-conservation
  - biodiversity-numbers-and-what-they-can-support
_bodyHash: 395aa6b9
---

"Species are disappearing a thousand times faster than the natural background rate" is not a measurement. It is a ratio between two model outputs, each assembled from a different kind of evidence, for a different set of organisms, across a different span of time. Both halves are defensible on their own terms. The ratio inherits every assumption in both, and the assumptions are not small.

This matters because the ratio is the number that travels. It appears in policy documents and headlines stripped of the derivation that produced it, and readers reasonably treat a stated multiplier as though it had been counted rather than constructed.

## Four routes to a modern rate

The first route is to count what has been documented. The 2020 edition of the Red List placed 882 species in the Extinct category — 0.04 per cent of roughly two million described animals and plants, as set out in a 2022 review in *Biological Reviews* that used the mollusc record to argue the count is a severe undercount. That count is a floor rather than an estimate, because the Extinct category is applied only after exhaustive survey, and survey effort is thinnest exactly where undocumented losses are most likely. IUCN currently reports 175,909 species assessed and 49,505 of them threatened, which is a very large body of work and still a small fraction of described diversity, heavily weighted towards mammals, birds and amphibians. What that assessment can and cannot decide for an individual taxon is covered in the explainer on [how extinction risk is assessed](/en/ecology/conservation/species-extinction-risk-assessment).

The second route extrapolates from habitat loss using the species–area relationship, running the accumulation curve backwards to smaller areas. A 2011 paper in *Nature* showed this is systematically biased: the area required to remove the last individual of a species is almost always larger than the sample area needed to encounter the first, and the resulting [overestimate can exceed 160 per cent](https://www.nature.com/articles/nature09985). The authors were explicit that this does not make habitat loss a smaller threat; it makes one popular arithmetic route to quantifying it wrong.

The third route scales up threat status. The IPBES Global Assessment's headline figure — around one million species facing extinction — comes from observing that roughly 25 per cent of species in assessed groups are threatened and applying that proportion to an estimated global total of eight million. IPBES labels the finding "established but incomplete", a confidence term that rarely survives the trip to a press summary. The eight-million denominator is itself an estimate with its own wide spread, as the explainer on [how many species exist](/en/biology/taxonomy/how-many-species-are-there) sets out.

The fourth route samples a well-known taxon exhaustively and extrapolates. Expert re-assessment of a random global sample of 200 land snail species implied that 3,000 to 5,100 species — 10 to 17 per cent of the roughly 30,000 recognised — may already be gone. Extended across all described diversity under stated assumptions, that yields 7.5 to 13 per cent, or 150,000 to 260,000 species lost since about 1500. These four routes do not merely give different numbers; they answer different questions.

## The denominator comes from a different world

The background rate is conventionally expressed in extinctions per million species-years, abbreviated E/MSY. Published estimates of it do not agree, and the disagreement is not small. A 2015 analysis in *Conservation Biology* [combined fossil, phylogenetic and diversification evidence](https://pubmed.ncbi.nlm.nih.gov/25159086/) to produce median estimates of 0.023 to 0.135 E/MSY and concluded that the typical background is closer to 0.1 E/MSY. A 2015 paper in *Science Advances* instead [adopted 2 E/MSY](https://pmc.ncbi.nlm.nih.gov/articles/PMC4640606/), double the highest previous rough estimate, precisely so that its conclusions could not be attributed to a flattering baseline. The mammal fossil record analysed in a [2011 palaeontological review in *Nature*](https://www.nature.com/articles/nature09678) gave a mean of about 1.8 E/MSY, and the *Science Advances* value is that figure rounded upward — so two of those three estimates are one estimate wearing different clothes, and the real spread runs from roughly 0.1 to roughly 2.

Choosing between them changes the headline multiplier by a factor of twenty without anyone having measured anything differently in the modern record.

The deeper problem is what the fossil estimate is made of. Its authors say plainly that fossil data are temporally coarse, mostly limited to marine hard-bodied taxa, and generally resolved to genera rather than species. The 2011 review makes the same point from the other side: only taxa with fossilisable hard parts, and a restricted subset of mostly temperate biomes, have records good enough for direct fossil-to-modern comparison. Even the familiar threshold that defines a mass extinction — loss of more than three-quarters of species — is an inference rather than a count. In the Ordovician event, 57 per cent of *genera* were lost, from which an estimated 86 per cent species loss is derived.

So the standard comparison sets a five-century, species-level, land-vertebrate-dominated record against a multi-million-year, genus-level, marine-invertebrate-dominated one. That is not a fatal objection. It is a reason the comparison supports a claim about magnitude and not a claim about precision.

## The hole labelled Data Deficient

About one species in six in IUCN's spatial dataset carries no threat status, listed instead as Data Deficient. A 2022 study in *Communications Biology* trained a classifier on species with sufficient data and applied it to [7,699 Data Deficient species](https://pmc.ncbi.nlm.nih.gov/articles/PMC9352662/), predicting that 56 per cent are threatened against 28 per cent of the data-sufficient set, and that 960 of 1,130 Data Deficient amphibians — 85 per cent — are likely to be. The authors are careful about their own method: in the held-out test data, only 60 to 67 per cent of the species the classifier called threatened were also classified as threatened by IUCN, so this is a model that over-calls threat rather than one that misses it.

Data deficiency is not random. It concentrates in invertebrates, in the tropics, and in taxa without a constituency of specialists — which is to say in exactly the places where the extrapolated rates are highest. The same bias propagates into the aggregate indicator built from category movements, described in the explainer on [the Red List Index](/en/ecology/biodiversity/red-list-index-explained), and into the wider family of headline indices taken up in the companion piece on [what a biodiversity number can support](/en/insight/biodiversity-numbers-and-what-they-can-support).

## Two live disagreements, pulling opposite ways

The disagreement in the literature is not between people who think the losses are serious and people who think they are not. It runs in both directions from the Red List count.

On one side, the 2022 *Biological Reviews* review argues the [documented record understates losses by orders of magnitude](https://pmc.ncbi.nlm.nih.gov/articles/PMC9786292/), because IUCN's coverage in 2020 amounted to 120,372 assessed species out of about 2.14 million described — 5.6 per cent — and because molluscs and other invertebrates are barely represented. Their extrapolated 150 to 260 E/MSY is far above any figure derived from vertebrates.

On the other, a 2025 review in *Trends in Ecology & Evolution* [questions whether the sixth mass extinction framing is supported at all](https://pubmed.ncbi.nlm.nih.gov/39955198/). Its case deserves to be stated at full strength: extinction rates can exceed background rates without a mass extinction occurring, since only five intervals in 540 million years qualify; the documented recent extinctions are disproportionately island endemics, whose vulnerability to introduced predators is not a good model for continental biotas; the projections to 75 per cent global loss specify no mechanism that would deliver it; and more than half of assessed species are currently classified as non-threatened. That is a technical argument about inference, not a denial of biodiversity loss, and it is the strongest version of the sceptical position in the current literature.

## What survives all of it

Three things do. First, the direction: no credible line of evidence has modern rates below background. Second, the order of magnitude: IPBES assesses the current global rate as at least tens to hundreds of times the average of the past ten million years. Third, the conditional projection: if every species currently listed as threatened were lost within a century and that pace held, the fully assessed vertebrate groups would reach three-quarters loss in roughly 240 to 540 years, or 890 to 2,270 years if only the critically endangered are counted. Those are conditionals, and they are usually quoted as forecasts.

What does not survive is any specific multiplier quoted without its method. When you encounter one, the four questions that recover its meaning are: which taxa were counted, by which of the four routes, against which background estimate, and over what window. A figure that cannot answer all four is not wrong so much as undefined — a point that also applies to the raw tallies discussed in [why species counts mislead conservation decisions](/en/ecology/biodiversity/why-species-counts-mislead-conservation). Strip a multiplier of those four answers and the direction survives, the order of magnitude survives, and the second significant figure turns out never to have been there.

## Sources

1. **Science Advances (via PubMed Central)** — [Accelerated modern human-induced species losses: entering the sixth mass extinction](https://pmc.ncbi.nlm.nih.gov/articles/PMC4640606/). The 2 E/MSY conservative background rate, the documented vertebrate losses since 1500 and 1900, and the 8-to-100-fold range against background.
2. **Conservation Biology (via PubMed)** — [Estimating the normal background rate of species extinction](https://pubmed.ncbi.nlm.nih.gov/25159086/). Median background estimates of 0.023–0.135 E/MSY, the 0.1 E/MSY conclusion, and the stated limitations of fossil-derived rates.
3. **Nature** — [Has the Earth's sixth mass extinction already arrived?](https://www.nature.com/articles/nature09678). The three-quarters species-loss definition, the genus-to-species conversion behind it, the 1.8 E/MSY mammal fossil rate, and the 240–540 year conditional projection.
4. **Nature** — [Species–area relationships always overestimate extinction rates from habitat loss](https://www.nature.com/articles/nature09985). The sampling asymmetry behind species–area extrapolation and the greater-than-160-per-cent overestimate.
5. **Biological Reviews (via PubMed Central)** — [The Sixth Mass Extinction: fact, fiction or speculation?](https://pmc.ncbi.nlm.nih.gov/articles/PMC9786292/). Red List coverage of 5.6 per cent of described species, the land-snail sample extrapolation, and the 7.5–13 per cent estimate.
6. **Trends in Ecology & Evolution (via PubMed)** — [Questioning the sixth mass extinction](https://pubmed.ncbi.nlm.nih.gov/39955198/). The island-endemic composition of documented losses and the case against the mass-extinction framing.
7. **Communications Biology (via PubMed Central)** — [More than half of data deficient species predicted to be threatened by extinction](https://pmc.ncbi.nlm.nih.gov/articles/PMC9352662/). The 7,699-species model, the 56 per cent figure, and the authors' accuracy caveats.
8. **IPBES** — [Global Assessment summary for policymakers](https://files.ipbes.net/ipbes-web-prod-public-files/2020-02/ipbes_global_assessment_report_summary_for_policymakers_en.pdf). The one-million-species estimate and its derivation, the tens-to-hundreds-of-times statement, and the confidence language attached to both.
9. **IUCN** — [The IUCN Red List of Threatened Species](https://iucn.org/resources/conservation-tool/iucn-red-list-threatened-species). Current totals for species assessed and species threatened.
