---
title: 'What a biodiversity index can carry, and where it is asked to carry too much'
excerpt: The Living Planet Index, the Red List Index, species richness and protected-area coverage each aggregate a different quantity over a differently biased sample, and each supports a narrower claim than the way it is usually quoted.
argument: The headline biodiversity indices are not interchangeable measures of the same thing. Each answers one narrow question about a non-random sample, and the distance between that question and the sentence it is quoted in is largest for the number that travels furthest.
category: ecology
author: biodiversity-conservation-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 9
tags:
  - biodiversity-indicators
  - living-planet-index
  - red-list-index
  - protected-areas
  - measurement-uncertainty
related:
  - living-planet-index-explained
  - red-list-index-explained
  - protected-area-effectiveness
  - species-extinction-risk-assessment
  - biodiversity-indicators-explained
---

The most repeated biodiversity statistic in the world is a 73% decline. It comes from the 2024 Living Planet Report, it covers 1970 to 2020, and it is calculated by the Zoological Society of London from 34,836 monitored populations of 5,495 vertebrate species. The report gives it with an uncertainty range of −67% to −78% and an equivalent average annual rate of 2.6%.

What it measures is the average change in the *size of monitored populations*, expressed as a rate. It is not a count of animals that no longer exist, not a share of species lost, and not a statement that 73% of populations are declining — the report itself notes that many populations in the index show positive or stable trends. The gap between what the number measures and what a reader takes from it is the subject here, and it is not unique to this index. Every headline biodiversity number has one.

## Four indices, four different questions

| Index | What it aggregates | Over what sample | Supports a claim about | Does not support |
| --- | --- | --- | --- | --- |
| Living Planet Index | Geometric mean of annual rates of change in population size | Monitored vertebrate populations, weighted by species richness of region and group | Average relative trend in monitored abundance | Numbers of animals, numbers of species, share of populations declining |
| Red List Index | Movement of species between extinction-risk categories | Five groups assessed comprehensively more than once | Direction and pace of change in aggregate extinction risk | Anything about population size, or about groups without repeat assessments |
| Species richness | Count of species recorded | A defined area and a defined sampling effort | Comparison between sites sampled the same way | Comparison across surveys with different effort, area or detectability |
| Protected-area coverage | Area inside designated boundaries | National reporting to the World Database on Protected Areas | Extent of designation | Extent of protection, ecological representativeness, or outcome |

## The Living Planet Index does arithmetic that most readers do not expect

The index takes the rate of change of each population, averages those rates geometrically, and chains the result year on year from a 1970 baseline of 1. A population falling from 1,000 to 100 and a population falling from 10 to 1 contribute identically. That is a deliberate design decision — it stops abundant species dominating — but it is also why the index cannot be read as animals lost.

Since 2014 the index has also been diversity-weighted, giving more weight to species-rich regions and groups that are under-represented in the underlying database. The Biodiversity Indicators Partnership records the effect candidly: the weighting produced "a steeper decline than in other versions of the LPI as a result of placing more weight on highly diverse regions and species groups which, on average, are declining faster." The correction for sampling bias is itself a modelling choice that moves the headline.

The underlying sample is thin in exactly the places that carry the most weight. A [2023 review by the index team in *npj Biodiversity*](https://www.nature.com/articles/s44185-023-00017-3) reports that the 2020 version of the index contained only four populations of African amphibians despite targeted searching for more, and identifies English-language dominance in the source literature as a further constraint on geographic coverage. The mechanics of the calculation are set out in the explainer on the [Living Planet Index](/en/ecology/biodiversity/living-planet-index-explained).

## Three published critiques, and what they actually claim

The methodological literature on this index is unusually sharp, and it is worth being precise about how far each critique goes.

An analysis in *Nature* found that [the global mean is driven by a very small number of populations](https://www.nature.com/articles/s41586-020-2920-6): the estimate of more than 50% mean vertebrate decline since 1970 is driven by less than 3% of populations, and excluding those extreme decliners switches the global trend to an increase. The authors report that 16 taxonomic–geographic systems contain clusters of extreme decline, comprising around 1% of populations, 7 contain extreme increases, and the remaining 98.6% show no mean global trend. Crucially, the same paper finds three systems declining strongly with high certainty, all in the Indo-Pacific, and seven more declining strongly with less certainty, mostly reptile and amphibian groups. The conclusion is that a single global mean hides where the losses are, not that there are no losses.

A second study used randomisation null models to show that [random population fluctuations bias the index downward](https://www.nature.com/articles/s41559-021-01494-0), exaggerating declines in the global figure by 9.6%. Its own summary is careful: the results "confirm substantial declines in the LPI but highlight sources of uncertainty in quantitative estimates."

A third, in *Nature Communications*, inspected the calculation pipeline directly and found the index [sensitive to several subjective processing decisions](https://www.nature.com/articles/s41467-024-49070-x) — the smoothing method, the handling of zeros in a time series, and the inclusion of very short series with two or three records. Recomputing without zeros and with a minimum of five records per population produced considerably lower declines. That paper goes furthest, concluding that the index "does not seem to accurately represent biodiversity trends." It also concedes the cost of its own fix: dropping sparse series reduces the taxonomic and geographic representativeness of what remains.

## The strongest version of the case for the index

The index team's response is not a dismissal, and it should not be read as one. Their review accepts the central semantic point outright: "The assertion that the LPI does not measure abundance is valid but... the LPI was not developed to measure abundance but rather change in relative abundance." On that reading the dispute is largely about communication — the substitution of "loss" for "decline" in press coverage — rather than about whether the arithmetic does what it was built to do.

There is a stronger argument still. The Red List Index and the Living Planet Index share no data, no method and no sampling frame, and both point the same way. The Red List Index tracks movement of species between extinction-risk categories rather than population size, and every group with a repeat comprehensive assessment shows deterioration. Convergence between indicators built on independent evidence is a much better basis for a claim about direction than any single index, and the direction is not what is in dispute. What is in dispute is the magnitude, and whether a single global scalar was ever the right object to publish.

## The Red List Index is slower and narrower than it looks

The Red List Index runs from 1, meaning every species assessed is Least Concern, to 0, meaning every species is extinct. It exists for five groups only — birds, mammals, amphibians, cycads and warm-water reef-building corals — because those are the groups where every species has been comprehensively assessed more than once. A review of two decades of the index published in *Philosophical Transactions of the Royal Society B* records over 166,000 species globally assessed and over 46,000 listed as threatened, but only that handful of groups can generate a trend.

It is also insensitive by construction. The review states that "the population size, trend or distribution of species may have to change substantially before crossing the criteria thresholds to qualify for a higher or lower Red List category." A species can decline steeply and stay in the same category for a decade, and the index will not move. It also excludes category changes that come from better knowledge or revised taxonomy, which is correct methodology and which further slows it. For groups too speciose to assess exhaustively, the review reports that a random sample of about 900 species is sufficient where a group changes in extinction risk at the same rate as birds, with reassessment about every ten years. What a category means, and how it is assigned, is covered in the explainer on the [Red List Index](/en/ecology/biodiversity/red-list-index-explained).

Then there is the Data Deficient problem. A machine-learning study in *Communications Biology* modelled [7,699 Data Deficient species](https://www.nature.com/articles/s42003-022-03638-9), around 17% of the IUCN spatial datasets, and predicted 56% of them to be threatened, against 28% of data-sufficient species; for Data Deficient amphibians the figure was 85%. Data Deficient species contribute nothing to the index until reassessed, so a category built to be honest about ignorance also systematically removes the most likely threatened species from the trend.

## Coverage is not protection

Protected-area coverage is the index most often quoted as though it were an outcome. Statistics maintained by UNEP-WCMC and IUCN put terrestrial and inland-water coverage at 18.45% and marine and coastal coverage at 10.03% as of September 2026, counting both protected areas and other effective area-based conservation measures. Those are measurements of designation, and nothing more. The Living Planet Report's own treatment says it plainly: protected areas "are not representative of the ecological diversity on Earth," freshwater systems in particular are poorly covered, and "simply designating a protected area is no guarantee that nature will be protected." The gap between designation and outcome is the subject of the article on [protected-area effectiveness](/en/ecology/biodiversity/protected-area-effectiveness).

Species richness has the least excuse of the four, because its weakness is elementary. A richness count is a function of area sampled, effort expended and detectability, and two richness figures are comparable only where those three are matched. That constraint is well understood in the field and routinely dropped when the number is quoted, which is why [counting species in a place](/en/ecology/biodiversity/species-richness-explained) is a weaker basis for prioritisation than it appears, as [the case against species counts as a conservation target](/en/ecology/biodiversity/why-species-counts-mislead-conservation) sets out.

## What follows

None of this makes the indices worthless, and none of it supports the reading that biodiversity trends are unknown. It supports something narrower and more useful: match the claim to the index. A statement about the average relative trend of monitored vertebrate populations is what the Living Planet Index can carry. A statement about the pace of movement toward extinction in five well-assessed groups is what the Red List Index can carry. A statement about how much area has been designated is what coverage can carry.

The practical test before quoting any of them is to ask what the index aggregates, over what sample, and what the sample is missing. Applied to the 73% figure, that test yields a defensible sentence — monitored vertebrate populations have on average shrunk substantially since 1970, with the steepest measured declines in freshwater systems and in Latin America and the Caribbean — and rules out the sentence most often written instead. The same discipline applies with more force to extinction rates, where the derivation matters even more than the sample, and which are examined in the piece on [how an extinction rate is actually derived](/en/insight/extinction-rate-estimates-and-their-assumptions).

## Sources

1. **WWF and Zoological Society of London** — [Living Planet Report 2024](https://www.wwf.org.uk/sites/default/files/2024-10/living-planet-report-2024.pdf). The 73% figure, its uncertainty range, realm and regional breakdowns, and the report's own statements on protected-area representativeness.
2. **npj Biodiversity** — [Past, present, and future of the Living Planet Index](https://www.nature.com/articles/s44185-023-00017-3). The index team's account of method changes, the relative-abundance concession, and the African amphibian coverage figure.
3. **Nature** — [Clustered versus catastrophic global vertebrate declines](https://www.nature.com/articles/s41586-020-2920-6). Sensitivity of the global mean to under 3% of populations, and the clustered-decline alternative.
4. **Nature Ecology & Evolution** — [Random population fluctuations bias the Living Planet Index](https://www.nature.com/articles/s41559-021-01494-0). The 9.6% exaggeration from randomisation null models.
5. **Nature Communications** — [Mathematical biases in the calculation of the Living Planet Index lead to overestimation of vertebrate population decline](https://www.nature.com/articles/s41467-024-49070-x). Sensitivity of the index to smoothing, zeros and short time series.
6. **Philosophical Transactions of the Royal Society B** — [Measuring trends in extinction risk: a review of two decades of development and application of the Red List Index](https://pmc.ncbi.nlm.nih.gov/articles/PMC11712279/). Groups covered, category insensitivity, sampled-approach requirements, and assessment totals.
7. **Communications Biology** — [More than half of data deficient species predicted to be threatened by extinction](https://www.nature.com/articles/s42003-022-03638-9). Modelled threat status of Data Deficient species.
8. **UNEP-WCMC and IUCN** — [Protected Planet](https://www.protectedplanet.net/en). Current terrestrial and marine coverage statistics from the World Database on Protected Areas.
9. **Biodiversity Indicators Partnership** — [Living Planet Index](https://www.bipindicators.net/indicators/living-planet-index). Documentation of the diversity-weighting change and its effect on the index.
