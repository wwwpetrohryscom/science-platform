---
title: How a fish stock assessment is built, and why two assessments of the same ocean disagree
excerpt: A stock assessment is a fitted model, not a census. This page follows the three data streams it runs on, the reference points it produces, the stocks nobody assesses at all, and why two analyses of the same database reached opposite conclusions.
type: expert
author: oceans-freshwater-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - fisheries
  - stock-assessment
  - maximum-sustainable-yield
  - marine-management
  - data-limited-methods
related:
  - ocean-science-explained
  - marine-food-webs-and-productivity
  - marine-protected-areas-evidence
  - why-species-counts-mislead-conservation
pillar: ocean-science-explained
_bodyHash: 12f7776
---

Nobody counts the fish. A stock assessment is a statistical model of a population that cannot be observed directly, fitted to a few noisy indicators and then read by managers as though it were a measurement. Most of the long-running arguments in fisheries science are arguments about the size of that gap, and this page works through where it opens up. The animal being counted lives inside the layered, thinly observed column that [ocean science](/en/ecology/oceans/ocean-science-explained) sets out, which is why its numbers have to be assembled indirectly from three narrow streams of evidence.

## Three inputs, and the one that is not abundance

NOAA Fisheries groups assessment inputs into three kinds. **Catch** is the mass or number of fish removed by fishing, assembled from dockside monitoring, vessel logbooks, at-sea observers and recreational surveys. An **abundance index** is a relative measure of how many fish are in the stock, ideally from a statistically designed survey run by a research vessel to the same protocol each year. **Biology** supplies growth rates, natural mortality, reproductive output and movement, much of it from ageing structures such as otoliths.

The order matters, because it runs opposite to data quality. Catch is by far the most completely reported of the three and by far the least informative about the population, since a landing is the product of how many fish were there and how hard people fished for them. A falling catch series is equally consistent with depletion, a quota cut, a price collapse, a gear restriction, or a fleet that moved somewhere more profitable. This is the reason a serious status series is never derived from the catch trend alone, and it is worth holding on to before reading any headline about global landings.

## Model families: from a single biomass pool to tracked cohorts

The simplest workhorse is the surplus production model, which treats the stock as one undifferentiated pool of biomass with a capacity limit and a rate at which the pool regenerates. It needs only a catch series and an abundance index, which is why it survives in data-poor settings, and it cannot distinguish a stock that is failing to reproduce from one that is being fished too hard, because it has no age structure to look at.

Age-structured models track cohorts through time and can make that distinction. Their price is data: a usable age composition means reading thousands of otoliths a year, and the model then estimates recruitment, fishing mortality and selectivity as separate quantities. Modern implementations are usually state-space formulations, which carry process error explicitly rather than assuming the population dynamics are known exactly and only the observations are noisy. The choice among families is not a free one — it is set by what data the stock has, which is why the same species can be assessed to very different standards in two adjacent management areas.

## Reference points, and the fragility of maximum sustainable yield

Assessment output is converted into advice through reference points. In United States federal management, a stock is **subject to overfishing** when its harvest rate exceeds the rate that would produce maximum sustainable yield, and **overfished** when its population size has fallen far enough to jeopardise its ability to produce that yield. The two are separate determinations, and a stock can be on one list and not the other.

The structural weakness is that maximum sustainable yield is a property of the fitted curve, estimated by the same model that estimates current status. Target and status therefore share their errors: if the model has the productivity of the stock wrong, it will have the target wrong in the same direction and the status will look better than it is. Fishing precisely at the yield-maximising rate also leaves no margin for a bad recruitment year, which is why most advisory bodies now treat it as a ceiling rather than an aim. The International Council for the Exploration of the Sea (ICES) makes this explicit: only its best-informed stock categories receive advice framed around maximum sustainable yield, while stocks in the data-limited categories get advice built on precautionary buffers instead.

## The stocks nobody assesses

The most under-reported fact in fisheries science is how much of the ocean is not assessed at all.

| Assessment programme | Stocks in scope | How much is actually resolved |
| --- | --- | --- |
| NOAA Fisheries (US federal) | 522 stocks and stock complexes in 45 management plans | 372 have a known overfishing status; 263 have a known overfished status |
| ICES (Northeast Atlantic) | about 260 fish and shellfish stocks | over 60 per cent lack the data for a full quantitative evaluation |
| FAO global status series | a fixed list of 445 aggregated stocks | those stocks account for roughly 72 per cent of global marine production |

Reading the middle column against the right-hand one is instructive. Roughly half of the stocks that United States law requires to be managed have no determination of whether their population size is too low. ICES gives fishing-opportunity advice on around 260 stocks while acknowledging that most of them sit in categories where neither the process knowledge nor the data supports an analytical assessment. And the FAO series deliberately holds its stock list fixed so the time series stays comparable, at the cost of not being a sample of the current ocean.

On that fixed list, the FAO assessed 62.3 per cent of stocks as being fished within biologically sustainable levels in 2021, down 2.3 percentage points from 2019 and down from 90 per cent in 1974. Weighting by landings rather than counting each stock equally raises the figure to 76.9 per cent, because the largest and most valuable stocks are the ones that get assessed and managed most intensively. The regional spread is wider than either global number suggests: the Eastern Central Pacific scored highest at 84.2 per cent sustainable and the Northeast Atlantic second at 79.4 per cent, while the Southeast Pacific was at 33.3 per cent and the Mediterranean and Black Sea at 37.5 per cent.

## One database, two headlines

In 2020 a large multi-author analysis in the Proceedings of the National Academy of Sciences assembled abundance and harvest-rate trends for scientifically assessed stocks representing about half of reported global marine catch, and found that on average their abundance was increasing and had [reached proposed target levels](https://www.pnas.org/doi/10.1073/pnas.1909726116). Regions with less-developed management carried roughly three times the harvest rates and half the abundance.

A 2021 paper in the same journal took the same body of assessments and asked whether that conclusion survived a change in how the averaging was done. Applying ten plausible aggregation methods, [four of them indicated that recovery had not been achieved](https://www.pnas.org/doi/10.1073/pnas.2108532118), with up to 48 per cent of individual stocks below biomass targets and 40 per cent exploited above sustainable rates. Recent recovery rates came out only marginally different from zero, and up to 46 per cent of stocks were trending downward in biomass.

Neither analysis found a fault in the underlying assessments. The disagreement is entirely about aggregation — what it means to take a global average across stocks that differ by orders of magnitude in size, productivity and data quality. That is the same problem that makes a single [headline biodiversity count misleading](/en/ecology/biodiversity/why-species-counts-mislead-conservation): the summary statistic hides the distribution that actually matters.

## What catch reconstruction does and does not claim

A separate long-running dispute concerns the catch data themselves. A 2016 study in Nature Communications rebuilt global marine catch from 1950 to 2010 country by country, adding small-scale commercial, subsistence and recreational fishing, discarded bycatch and illegal removals that national submissions to the FAO typically omit. Reported landings rose to 86 million tonnes in 1996 and drifted down to about 77 million tonnes by 2010; the [reconstructed series peaked at 130 million tonnes](https://www.nature.com/articles/ncomms10244) in the same year and then fell at an average 1.22 million tonnes a year, against 0.38 million tonnes for the reported data. Taken across the whole 1950–2010 period, the reconstruction runs 53 per cent above what countries reported.

It is easy to read that as a refutation of the FAO's sustainability picture, and it is not one. Reconstruction estimates removals; the status series estimates stock condition, and does not take the catch trend as its evidence. Both statements can hold simultaneously: total extraction has been substantially larger than the official record, and the assessed stocks that dominate landings are in better shape than the global stock count implies. What the reconstruction does establish is that the unreported fraction is large enough to matter for anything built on catch volume, including food-security accounting and the fishing-effort arguments that run through the case for [marine protected areas](/en/ecology/oceans/marine-protected-areas-evidence).

## The residual uncertainties

Assessment reviews keep returning to the same weak points, and none of them is the kind of problem that more sampling would fix. Natural mortality is usually fixed at an assumed value rather than estimated, because the data cannot separate it from fishing mortality, and status is sensitive to that assumption. Recruitment is largely environmentally driven, so a stock can decline in a well-managed fishery for reasons that have nothing to do with the quota — anchoveta in the Humboldt system respond to [El Niño and La Niña](/en/ecology/earth-systems/el-nino-la-nina-enso-explained) far more sharply than to any management measure, a coupling explored further in the treatment of [upwelling and marine production](/en/ecology/oceans/marine-food-webs-and-productivity). And most assessments show retrospective patterns: adding another year of data systematically revises previous years in one direction, which is a signal that some structural assumption is wrong even when nobody can say which.

None of this argues for discarding the numbers. It argues for reading them as estimates carrying a stated [baseline condition](/en/glossary/baseline-condition), a model structure and a data category, and for treating a status figure quoted without those three things as an incomplete statement.

## Sources

1. **FAO** — [The State of World Fisheries and Aquaculture 2024: the status of fishery resources](https://openknowledge.fao.org/server/api/core/bitstreams/1273bc36-339b-43d2-8163-af4d805f2ad2/content/sofia/2024/status-of-fishery-resources.html). The fixed 445-stock list, the 62.3 per cent sustainable figure for 2021, the production-weighted figure, and the regional breakdown.
2. **NOAA Fisheries** — [Status of Stocks 2024](https://www.fisheries.noaa.gov/national/sustainable-fisheries/status-stocks-2024). Numbers of managed stocks, overfishing and overfished determinations, and how many stocks have unknown status.
3. **NOAA Fisheries** — [Fish Stock Assessment 101, Part 1: data required for assessing US fish stocks](https://www.fisheries.noaa.gov/feature-story/fish-stock-assessment-101-series-part-1-data-required-assessing-us-fish-stocks). The catch, abundance and biology data categories and how each is collected.
4. **ICES** — [Breathing life into ICES stocks](https://www.ices.dk/news-and-events/news-archive/news/Pages/Breathing-life-into-ICES-stocks.aspx). The six stock categories, the share that is data-limited, and why categories 3–6 receive precautionary rather than MSY-based advice.
5. **PNAS** — [Effective fisheries management instrumental in improving fish stock status](https://www.pnas.org/doi/10.1073/pnas.1909726116). Trends in assessed-stock abundance and the contrast between intensively and weakly managed regions.
6. **PNAS** — [Recovery of assessed global fish stocks remains uncertain](https://www.pnas.org/doi/10.1073/pnas.2108532118). The sensitivity of the global picture to the choice of averaging method.
7. **Nature Communications** — [Catch reconstructions reveal that global marine fisheries catches are higher than reported and declining](https://www.nature.com/articles/ncomms10244). Reconstructed peak catch, the gap against reported landings, and the decline rates.
