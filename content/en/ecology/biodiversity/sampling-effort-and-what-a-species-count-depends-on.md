---
title: 'Sampling effort: what a species count actually depends on'
excerpt: Species richness rises with the effort spent looking for it, and Shannon and Simpson rise with it too, more slowly. This covers accumulation curves, rarefaction, coverage-based standardisation, and why indices computed from samples of different sizes compare the surveys as much as the sites.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
tags:
  - biodiversity
  - diversity-metrics
  - species-richness
  - monitoring
  - uncertainty
related:
  - species-richness-explained
  - species-evenness-and-diversity
  - citizen-science-biodiversity-data
  - why-species-counts-mislead-conservation
pillar: why-species-counts-mislead-conservation
readingTime: 10
_bodyHash: ff26dafd
---

Every species count is the endpoint of a search, and the search has a length. Keep looking and the list keeps growing, quickly at first and then more slowly, because the species still missing are the ones that were hardest to find. This is not a defect in particular surveys; it is a structural property of counting things that differ in how often they are encountered. It means that a species count, and every diversity index computed from one, is a joint statement about a place and about the work done there.

## The curve behind every count

The relationship has a standard representation. A species accumulation curve plots, in the definition given by Deng, Daley and Smith, "the expected number of observed species or distinct classes as a function of sampling effort" — effort being individuals captured, samples taken, hours spent, or area covered. The curve rises, decelerates, and in a finite population approaches an asymptote. Their central caution is that the deceleration never amounts to a guarantee: "no matter how many species have been observed there may exist an arbitrary number of undetected rare species in the population."

How long the climb takes is easy to underestimate. Fattorini's reconstruction of the tenebrionid beetle fauna of Latium, Italy — an area of 17,200 km², a conspicuous and well-collected family, and 3,561 records covering 26,743 specimens gathered between 1871 and 2010 — found that 90% of the region's known species richness was reached only in 1939, after 69 years of collecting and 1,309 sampled individuals. That specimen figure is itself an artefact of how unevenly the collecting was spread across those years: a smoothed (Mao Tau) curve over the same data indicates that about 50 years, but more than 9,000 individuals, would be needed to reach the same 90%. Spatially, about 64 of the region's 210 UTM 10 × 10 km cells had to be sampled before the same 90% threshold was crossed. If a well-studied beetle family in a well-worked European region takes that long to approach its own known total, the counts produced by a single field season carry a correspondingly wide margin between what was recorded and what was there.

## What the shape of the curve is telling you

The interesting information sits in the tail. Species represented by one individual (singletons) and by two (doubletons) are the sample's evidence about what it missed, which is why the standard nonparametric estimators are built from them. Chiu and Chao describe the Chao1 estimator as yielding "generally a minimum number of species": it is a lower bound on richness inferred from the frequency of the rarest observations, not a best guess at the truth. A sample full of singletons announces that the curve is still rising steeply; a sample with few announces that additional effort would return little.

That distinction matters when a figure is reported. An observed count is a floor. Chao1 is a higher, better-argued floor. Neither is an estimate of how many species live in the area, and neither becomes one by being reported to two decimal places. The broader argument for treating any single biodiversity number cautiously is developed in [why species counts mislead conservation](/en/ecology/biodiversity/why-species-counts-mislead-conservation); effort is the mechanism behind a large part of it.

## Rarefaction: standardising by the number of individuals

If richness climbs with effort, then comparing a large sample with a small one measures the difference in effort along with any difference in ecology. Rarefaction addresses this by reading every sample at a common point on its accumulation curve — as Deng and colleagues put it, the curves allow "fair comparisons of the expected number of species for a fixed number of individuals captured." In practice the richer or larger sample is scaled down to the size of the smaller one.

The size of the correction can be the entire result. Engemann and co-authors analysed 205,735 georeferenced plant specimens representing 15,788 species from Ecuador, at 10 × 10, 25 × 25 and 50 × 50 km resolutions. Across spatial scales, richness estimated by most methods correlated with the number of specimens at 0.86 to 0.96; only rarefaction broke that dependence, dropping the correlation to about 0.40 on average. Their conclusion was that sampling effort "overshadowed the effect of environmental predictors as the dominant richness predictor for most of the estimators used," with the sampling influence up to 24 times higher than that of the environmental variables the study was ostensibly testing. A richness map built from those records without standardisation is, to a first approximation, a map of where botanists went.

## Coverage: standardising by how complete the sample is

Equal sample sizes are not equal sampling. Two hundred individuals drawn from an assemblage dominated by one abundant species represent a much larger fraction of that assemblage than 200 drawn from an even one. Sample coverage formalises the difference: Chiu and Chao define it as "the fraction of the individuals in an assemblage that belong to the species observed in the sample." Coverage-based standardisation compares samples at equal completeness rather than equal size, which means the number of individuals used differs from site to site.

The two standardisations are not interchangeable, and the difference is not cosmetic. Shimadzu's analysis holds that size-based rarefaction, which fixes the number of individuals, reflects "only the change in community composition," whereas coverage-based rarefaction "presents the changes in both components: species composition … and community size." In a simulation of 1,000 runs with 100 species, the two disagreed in direction: size-based rarefied richness showed a flat trend where coverage-based richness declined in step with the observed richness. Choosing a standardisation is therefore choosing a question, not applying a neutral correction, and the choice belongs in the methods rather than in a footnote.

## Effort is a design decision, and it is written into the protocols

Long-running monitoring programmes solve the comparability problem in advance, by fixing effort and never varying it. The USGS North American Breeding Bird Survey states its protocol precisely: routes are "roughly 25 miles long and are comprised of 50 point counts," each count "lasts 3 minutes," during which an observer records all birds heard or seen within a 0.25-mile radius; surveys start half an hour before local sunrise, take about five hours, and are run once a year by a qualified observer along over 4,800 routes across the continental United States, Canada and northern Mexico. The rigidity is the point. A trend estimated from those data is a change in birds because the survey itself was held still.

The same logic operates in the laboratory. The EPA's Rapid Bioassessment Protocols for streams specify a fixed-count subsample: the published procedure "is based on a 200-organism subsample, but it could be used for any subsample size (100, 300, 500, etc.)", drawn by selecting four squares from a gridded pan with a random numbers table and accepting the result when the count falls within 200 organisms ± 20%. The number of taxa a stream sample yields is thus partly a laboratory decision made before any organism is identified — which is why bioassessment results are compared only within a fixed count, and why the count is always reported. The practical consequences for programme design are taken up in [biodiversity monitoring and ecosystem health](/en/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## Which index cares most about effort

Richness is the most effort-sensitive diversity measure, but it is not the only sensitive one. Chiu and Chao note that Hill numbers calculated from a sample "are an increasing function of sampling effort," with the dependence varying systematically by the order q: curves for low q "heavily depend on the low frequency counts, especially singletons," while the order q = 2 measure, corresponding to Simpson, shows only weak dependence on sample completeness. Richness (q = 0) counts every rare species equally and therefore inherits the full effect of effort; Shannon (q = 1) is intermediate; Simpson is dominated by common species, which are detected early and whose proportions stabilise quickly.

This has a direct implication for computed values. The [diversity index calculator](/en/tools/diversity-index-calculator) takes abundances and returns Shannon and Simpson values, and it has no way of knowing how those abundances were obtained. Two of its outputs are comparable only if the counts behind them came from comparable sampling — and where they did not, the Simpson value will usually be the more transportable of the two. What the indices are measuring in the first place, and why evenness is not redundant with richness, is covered in [species evenness and diversity](/en/ecology/biodiversity/species-evenness-and-diversity), and the properties of the count itself in [species richness explained](/en/ecology/biodiversity/species-richness-explained).

## What to report alongside the number

Whether a dataset supports a richness comparison at all is testable, and the test often fails. Troia and McManamay assessed more than 13.6 million occurrence records for ten taxonomic groups across more than 190,000 grid cells of 0.1° × 0.1° in the contiguous United States, scoring cells by record count, the Chao2 completeness index and the final slope of the species accumulation curve. Of grid cells surveyed through GBIF, 4.7% qualified as well-surveyed for the full time period and 3.7% for the contemporary one; across the two structured programmes examined — the Breeding Bird Survey and freshwater fish surveys — the corresponding figures for the full and contemporary periods were 82.6% and 82.3%. The difference is a difference in survey design, not in the underlying biota, and it is the reason [citizen-science records](/en/ecology/biodiversity/citizen-science-biodiversity-data) are usually modelled with an explicit effort term rather than counted directly.

Estimators can also be defeated by processing steps that have nothing to do with ecology. In a perspective piece in The ISME Journal, Deng, Umbach and Neufeld argue that Chao1 and ACE "must not be used for estimating total richness of amplicon sequence variant (ASV) datasets", because the denoising algorithms that generate such data remove single-sequence variants by default, and both estimators are computed from singleton counts; the resulting values are, in their words, "meaningless and thus unacceptable for alpha diversity analyses." The lesson generalises past that particular pipeline: an estimator inherits the assumptions of the processing that fed it.

The minimum honest reporting is therefore a count with its effort attached — the number of individuals or samples, the protocol, the standardisation applied and the standardisation's basis, whether size or coverage. A richness figure without those is not wrong so much as uninterpretable, because there is no way to tell how much of it belongs to the place.

## Sources

1. **Deng, Daley and Smith, Quantitative Biology (2015)** — [Applications of species accumulation curves in large-scale biological data analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4885658/). Definition of the species accumulation curve as expected species observed against sampling effort, its decelerating shape, and the impossibility of ruling out undetected rare species.
2. **Fattorini, PLoS ONE (2013)** — [Regional Insect Inventories Require Long Time, Extensive Spatial Sampling and Good Will](https://pmc.ncbi.nlm.nih.gov/articles/PMC3632580/). The 1871–2010 tenebrionid inventory of Latium (17,200 km², 3,561 records, 26,743 specimens) and the effort needed to reach 90% of known richness in time, space and collectors.
3. **Engemann and colleagues, Ecology and Evolution (2015)** — [Limited sampling hampers "big data" estimation of species richness in a tropical biodiversity hotspot](https://pmc.ncbi.nlm.nih.gov/articles/PMC4328781/). Correlation of richness estimates with specimen numbers in Ecuador and the effect of rarefaction on that correlation.
4. **Chiu and Chao, PeerJ (2016)** — [Estimating and comparing microbial diversity in the presence of sequencing errors](https://pmc.ncbi.nlm.nih.gov/articles/PMC4741086/). Sample coverage, Chao1 as a lower bound from singletons and doubletons, and the dependence of Hill numbers of different order q on sampling effort.
5. **Shimadzu, Journal of Mathematical Biology (2018)** — [On species richness and rarefaction: size- and coverage-based techniques quantify different characteristics of richness change in biodiversity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6182778/). Formal contrast between size-based and coverage-based rarefaction and the simulation in which they disagree in direction.
6. **U.S. Geological Survey** — [The North American Breeding Bird Survey: Helping Keep Common Birds Common](https://www.usgs.gov/centers/eesc/news/north-american-breeding-bird-survey-helping-keep-common-birds-common). Fixed survey effort: route length, 50 point counts, 3-minute counts, 0.25-mile radius, start time and route network.
7. **U.S. Environmental Protection Agency** — [Rapid Bioassessment Protocols, Chapter 7: Benthic Macroinvertebrate Protocols](https://archive.epa.gov/water/archive/web/html/ch07b.html). Fixed-count laboratory subsampling, the 200-organism ± 20% target, the gridded-pan random selection procedure, and alternative subsample sizes.
8. **Troia and McManamay, Ecology and Evolution (2016)** — [Filling in the GAPS: evaluating completeness and coverage of open-access biodiversity databases in the United States](https://pmc.ncbi.nlm.nih.gov/articles/PMC4979697/). Completeness scoring of 13.6 million records and the share of well-surveyed grid cells for aggregated versus structured surveys.
9. **Deng, Umbach and Neufeld, The ISME Journal (2024)** — [Nonparametric richness estimators Chao1 and ACE must not be used with amplicon sequence variant data](https://pmc.ncbi.nlm.nih.gov/articles/PMC11208923/). How default removal of singleton sequences invalidates singleton-dependent richness estimators.
