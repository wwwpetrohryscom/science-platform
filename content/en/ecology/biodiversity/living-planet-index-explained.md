---
title: 'The Living Planet Index explained: what an average population trend measures'
excerpt: The Living Planet Index aggregates thousands of vertebrate population time series into a single trend. Understanding what it is — a relative average, not a headcount of animals — and the methodological debates around it is essential to reading the headline figure correctly.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-03'
tags:
  - biodiversity
  - living-planet-index
  - population-trends
  - monitoring
related:
  - biodiversity-indicators-explained
  - red-list-index-explained
  - biodiversity-baselines-and-shifting-baselines
pillar: why-species-counts-mislead-conservation
_bodyHash: d0a00d00
readingTime: 5
---

Few biodiversity statistics travel further into public conversation than the headline figure from the [Living Planet Index](/en/glossary/living-planet-index). It is widely cited and almost as widely misunderstood, in much the same way and for much the same reasons as [the species count it is often confused with](/en/ecology/biodiversity/why-species-counts-mislead-conservation). The index summarizes the average relative change in monitored vertebrate populations, and reading it correctly means knowing what kind of number it is — and what it is not.

## What the index actually measures

The Living Planet Index (LPI) is compiled by the Zoological Society of London together with WWF. It tracks the average relative change in the size of monitored vertebrate populations — mammals, birds, fishes, reptiles, and amphibians — measured against a reference starting point of 1970. The published data and methods are maintained in an open [data portal](https://www.livingplanetindex.org/).

The crucial point is what the index is *not*. It is not a count of animals, and it is not a percentage of species lost. Each monitored population is followed as a time series, and that series is converted into a rate of change relative to its own earlier value. The index is then assembled from the average of those rates rather than from any absolute total. A decline in the index therefore describes how the typical monitored population has changed on average, not how many individuals or species have vanished worldwide.

## How the index is built

Building the index is a layered process. Each population series — for example, a particular bird species at a particular wetland — is first smoothed to estimate its underlying trajectory, commonly using generalized additive models that fit a flexible curve through the observed counts. This step turns irregular, noisy field data into an estimated annual rate of change for that population.

Those individual rates are then combined. The aggregation uses a geometric mean within a modelling framework, which is the appropriate way to average multiplicative quantities such as proportional changes. Working with rates rather than raw abundances lets the method place a small monitored fish stock and a large monitored mammal herd on the same footing: each contributes its relative trend, scaled to its own [baseline condition](/en/glossary/baseline-condition) in 1970, rather than its sheer number of individuals. The result is a single curve indexed to that starting year.

This design is why the LPI sits in the same family as other aggregate measures rather than standing alone. It is one of several complementary [biodiversity indicators](/en/ecology/biodiversity/biodiversity-indicators-explained), and it is most informative when read alongside others — notably [the Red List Index](/en/ecology/biodiversity/red-list-index-explained), which tracks extinction risk rather than abundance. The LPI speaks to the abundance dimension of biodiversity; the Red List Index speaks to the risk dimension. They answer different questions.

## Where it fits in global reporting

The LPI is one of the headline indicators adopted under the Convention on Biological Diversity for the abundance dimension of biodiversity, used in international [reporting](https://www.cbd.int/) on the state of life. Because abundance can fall long before a species is formally threatened, an abundance trend offers an early, population-level signal that complements risk-based measures.

International assessments treat the index as one line of evidence among several. The [Global Assessment Report](https://www.ipbes.net/global-assessment) places abundance trends within a broader picture that also draws on range changes, extinction risk, and ecosystem condition. This is part of the wider point made across EcoScienceHub's work on [biodiversity monitoring and ecosystem health](/en/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health): no single scalar captures the state of nature, so indicators are read together rather than ranked against one another.

## Why the headline number is often misread

Two features of the method explain most public confusion. First, because the index averages *relative* changes, a small number of extremely steep declines can pull the global mean down strongly. A handful of populations that have collapsed to a fraction of their 1970 value can weigh heavily on the average, even when many other monitored populations are stable or rising. The summary value reflects the shape of the whole distribution of trends, not a uniform decline shared by every population.

Second, the headline figure is frequently restated as "X percent of all animals have disappeared." That reading is incorrect. The index does not estimate the share of animals lost, the share of populations in decline, or the share of species gone. Peer-reviewed methodological analyses have examined how the distribution of population trends, gaps in geographic and taxonomic coverage, and specific method choices shape the resulting value — work that has sharpened how the index is interpreted rather than overturned its purpose. The index remains a meaningful average; it simply answers a narrower question than the popular paraphrase implies.

## Uncertainty and limitations

Several limitations should travel with any citation of the index. Monitored populations over-represent well-studied taxa and regions, so the underlying data are uneven: some groups and parts of the world contribute many series, others very few. The value is also sensitive to how series are weighted and aggregated, which is why different methodological choices can yield somewhat different figures and why no single percentage is treated here as definitive.

The reference year carries its own caveat. The 1970 starting point comes well after major historical losses in many systems — large declines in some fisheries, forests, and wildlife populations had already occurred long before. Measuring change from 1970 therefore captures the trajectory since that date, not the full distance from any undisturbed state, a classic instance of the [shifting baselines](/en/ecology/biodiversity/biodiversity-baselines-and-shifting-baselines) problem. Read with these qualifications in mind, the LPI is a useful summary of average population change among monitored vertebrates — a trend to interpret carefully, not a tally of animals to read at face value.

## Sources

1. **Living Planet Index** — [data portal](https://www.livingplanetindex.org/). Zoological Society of London; the index database and method.
2. **CBD** — [headline indicators](https://www.cbd.int/). Use of the index in global biodiversity reporting.
3. **IPBES** — [Global Assessment Report](https://www.ipbes.net/global-assessment). Abundance trends in the context of other indicators.
