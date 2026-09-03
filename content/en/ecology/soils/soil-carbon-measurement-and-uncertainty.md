---
title: 'Soil carbon: why the measurement problem is the whole problem'
excerpt: Global estimates of carbon in the top 30 centimetres of soil range from 504 to 1,267 petagrams. The spread is not disagreement about the soil but about depth, bulk density, sampling density and what counts as a measurement.
type: expert
author: soil-land-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 9
tags:
  - soil-carbon
  - measurement-uncertainty
  - monitoring
  - carbon-accounting
related:
  - soil-science-explained
  - soil-carbon-crediting-meets-the-detection-limit
  - soil-biology-and-the-soil-food-web
  - carbon-cycle-explained
pillar: soil-science-explained
_bodyHash: 43c2d822
---

Seven global products estimate the organic carbon held in the top 30 centimetres of the world's soils. Their answers are 504, 574, 682, 699, 710, 967 and 1,267 petagrams. The FAO's own Global Soil Organic Carbon Map, the 682 in that list, attaches an uncertainty of ±144 petagrams to its figure — about 20 per cent — which is not nearly wide enough to reconcile it with the highest of its competitors.

Nobody in that list is measuring a different planet. They are measuring the same soils with different conventions about depth, different treatments of bulk density and stone content, different interpolation methods, and profile datasets of wildly uneven density. Understanding the spread is not a detour from soil carbon science. It is most of the science, and the rest of this article is about why that is so. The physical stock those numbers are trying to describe is set out in the overview of [soil as a slow-forming resource](/en/ecology/soils/soil-science-explained).

## A stock is not measured; it is computed

Nothing in a soil survey measures carbon per hectare. Dry combustion measures a carbon *concentration* in a prepared sample — grams of carbon per kilogram of fine earth. Turning that into a stock requires three further quantities, each with its own error: the bulk density of the layer, the depth of the layer, and the fraction of the volume occupied by stones and gravel that hold no carbon and must be subtracted. Which layer is being sampled is itself a judgement about the profile, and the horizon boundaries that judgement rests on are the subject of [how soils form and are classified](/en/ecology/soils/soil-formation-and-classification).

The UNCCD's technical guidance for the land-degradation indicator states the problem in a single sentence, noting that global products such as the Harmonized World Soil Database map carbon content and bulk density but not stocks, so the reporting quantity has to be derived by multiplying maps and averaging depths. Every one of those operations propagates error, and the error in bulk density is the one that behaves worst, because bulk density is not a fixed property. It changes with tillage, with traffic, with wetting and drying, and with the carbon content itself.

That creates a specific failure mode. If the same fixed depth is sampled twice and the soil has compacted in between, the second sample contains more mineral material than the first. A carbon gain can appear where nothing has been added. The correction — expressing the stock over an **equivalent soil mass** rather than an equivalent depth — is traced in the UNCCD's glossary to work published in 2001, and a 2020 review in *Global Change Biology* [comparing the two approaches](https://pubmed.ncbi.nlm.nih.gov/32307802/) shows the fixed-depth method also distorts mass-based properties such as carbon-to-nitrogen ratio and δ¹³C, and argues it should be replaced as the default for mineral soils. What that correction does to reported gains at field scale, and to the certificates issued against them, is examined in the insight on [the soil-carbon detection limit](/en/insight/soil-carbon-crediting-meets-the-detection-limit).

## The global number has been moving since 1951, and mostly for methodological reasons

The FAO and its Intergovernmental Technical Panel on Soils reconstruct the history of the global estimate, and it reads less like a series of refinements than like a series of different questions.

| Estimate | Depth as reported | Note |
| --- | --- | --- |
| 710 Pg C (1951) | not stated | the earliest global figure; it stood for 25 years |
| 3,000 Pg C (1976) | not stated | from analysis of the FAO–UNESCO Soil Map of the World |
| 2,200 Pg C (1982) | not stated | a later estimate by the same author |
| 1,395 Pg C (1982) | not stated | published the same year by a different group |
| 1,576 Pg C (1993) | 1 m | — |
| 1,462–1,548 Pg C (1996) | 1 m | — |
| 1,502 Pg C (2000) | 1 m | the IPCC adopted 1,500 for this depth |
| 1,417 Pg C / 716 Pg C (2011) | 1 m / 30 cm | Harmonized World Soil Database |
| 2,344 Pg C (2000) | 3 m | the only entry reaching below one metre |

Two things follow. First, the two figures published in the same year, 1982, differ by a factor of 1.6, and the jump from 710 to 3,000 and back is not a story of the soil changing; it is a story of what data existed. Second, the modern convergence around 1,400 to 1,600 petagrams to one metre is partly genuine and partly an artefact of successive studies drawing on overlapping profile databases. Independent replication is scarcer than the number of published estimates suggests — a general hazard when several products share their inputs, discussed in the insight on [why two credible datasets disagree](/en/insight/why-two-credible-datasets-disagree).

## Thirty centimetres is a reporting convention, not a soil boundary

Almost all soil carbon reporting stops at 30 centimetres. That is where the IPCC's default methods sit, where the SDG land-degradation indicator sets its carbon sub-indicator, and where most sampling budgets run out.

The best evidence on what that truncation costs comes from stable-isotope work. A 2018 meta-analysis in *Nature* of [carbon incorporation through whole soil profiles](https://pubmed.ncbi.nlm.nih.gov/29995858/), drawing on 112 grassland, forest and cropland sites sampled between 1965 and 2015, found that the 30 to 100 centimetre layer holds on average 47 per cent of the organic carbon in the top metre — but received only 19 per cent of the carbon incorporated into that metre over the preceding 50 years. The median depth of recent carbon incorporation was 10 centimetres.

That result cuts both ways, and it is often quoted in only one direction. Roughly half the carbon in the first metre is invisible to standard reporting, which understates the stock. But most of the carbon that *moves* on management timescales moves in the top layers, which means a 30-centimetre survey captures a disproportionate share of the change even while missing a large share of the stock. Whether that also holds where deep rooting or subsoil clay dominates is not settled. The authors found the vertical allocation of carbon better explained by an aridity index than by mean annual temperature, and argue on that basis for depth-resolved soil modules in global carbon models rather than the single-layer treatments still in common use.

## How much sampling does it take to see a change

Detecting change is a different problem from estimating a stock, and a harder one, because the change is small relative to the spatial variance it sits inside.

A field study on degraded alpine meadow on the Tibetan Plateau gives a rare direct answer. Using 1,196 sampling sites across 190 km², the authors found carbon stocks in moderately, heavily and extremely degraded meadow reduced by 11.0, 13.5 and 17.9 per cent relative to lightly degraded meadow — and then used a power analysis to work out how much of that sampling effort had been necessary. For a tolerable uncertainty of 10 per cent, [the optimal density](https://pubmed.ncbi.nlm.nih.gov/26985730/) was 2, 3, 5 and 7 sites per 10 km² across the four degradation classes: their survey had been far more intensive than the statistics required. With that optimal design and a paired resampling scheme, they estimated 5 to 10 years would be needed to detect the expected trend in the top 20 centimetres.

Two generalisable points sit inside that. Required sampling density rises with heterogeneity, so degraded and disturbed land needs more effort than intact land to reach the same confidence. And the binding constraint on detecting a soil carbon trend is usually elapsed time, not laboratory precision.

## What survives into policy

Several of those measurement decisions are now embedded in international reporting. Soil organic carbon stock is one of the three sub-indicators of SDG indicator 15.3.1 — the metric behind national reporting on [land degradation](/en/ecology/soils/land-degradation-and-desertification) — integrated with land cover and land productivity under a one-out-all-out rule in which a significant negative change in any one of them counts as degradation. The UNCCD's guidance sets the baseline period as the 16 years from 1 January 2000 to 31 December 2015, and concedes that global map products cannot currently supply the management and organic-input factors the IPCC method calls for, so those are set to one — meaning that at the global tier, land-use transition is effectively the only driver of modelled carbon change.

Commercial accounting has arrived at a similar accommodation. A published account of a large agricultural crediting project covering 553,743 hectares of United States cropland from 2018 to 2022 reports an estimated 398,408.5 tonnes of CO₂-equivalent in emissions reductions, of which 296,662 tonnes were issued as credits after uncertainty and leakage deductions — a haircut of roughly a quarter. That paper was written by employees of the company issuing the credits, which is disclosed in its competing-interests statement and is worth weighing; a 2022 policy analysis in *Science* [on crediting agricultural soil carbon](https://pubmed.ncbi.nlm.nih.gov/35298251/) argues that regional consistency between protocols is a precondition for credit integrity, which is a different way of saying the deductions are not yet comparable between schemes.

## What would actually narrow the range

The honest summary is that the uncertainty on global soil carbon is dominated by sampling coverage, not by analytical method. The GSOCmap's error surface peaks where profiles are thinnest on the ground — the tropical and Arctic deserts — and of the countries that contributed national maps, only 22 were able to supply an uncertainty layer with them at all. Nothing about the chemistry is unresolved, and the biology that determines which carbon persists is separately well characterised in [the soil food web](/en/ecology/soils/soil-biology-and-the-soil-food-web). What is missing is a repeat-measured, depth-resolved, mass-corrected sample of the places nobody has sampled — and that is a funding and monitoring-infrastructure problem rather than a scientific one.

## Sources

1. **FAO** — [Global Soil Organic Carbon Map version 1.6: technical report](https://openknowledge.fao.org/server/api/core/bitstreams/e6173e90-b5df-481b-ac98-cb800e0f020f/content). The 682 Pg estimate, the ±144 Pg uncertainty layer, the comparison against six other global products, and the countries able to supply uncertainty estimates.
2. **FAO and Intergovernmental Technical Panel on Soils** — [Status of the World's Soil Resources: Main Report](https://openknowledge.fao.org/server/api/core/bitstreams/6ec24d75-19bd-4f1f-b1c5-5becf50d0871/content). The published history of global soil organic carbon estimates from 1951 onwards, with depths and bases.
3. **UNCCD** — [Good Practice Guidance for SDG Indicator 15.3.1, version 2](https://www.unccd.int/sites/default/files/documents/2021-09/UNCCD_GPG_SDG-Indicator-15.3.1_version2_2021.pdf). The carbon-stock sub-indicator, the one-out-all-out rule, the 2000–2015 baseline period, the equivalent-soil-mass definition, and the limits of global map products for stock-change factors.
4. **Global Change Biology** — [Soils' dirty little secret: depth-based comparisons can be inadequate for quantifying changes in soil organic carbon and other mineral soil properties](https://pubmed.ncbi.nlm.nih.gov/32307802/). The case for equivalent soil mass over fixed depth, including effects on mass-based soil properties.
5. **Nature** — [Atmosphere-soil carbon transfer as a function of soil depth](https://pubmed.ncbi.nlm.nih.gov/29995858/). Subsoil share of stock versus share of recently incorporated carbon, and the median depth of recent incorporation.
6. **Journal of Environmental Management** — [Exploring effective sampling design for monitoring soil organic carbon in degraded Tibetan grasslands](https://pubmed.ncbi.nlm.nih.gov/26985730/). Optimal sampling densities by degradation class and the time required to detect an expected trend.
7. **Journal of Environmental Management** — [Solutions and insights for agricultural monitoring, reporting, and verification (MRV) from three consecutive issuances of soil carbon credits](https://pubmed.ncbi.nlm.nih.gov/39213843/). Project area, gross emissions reductions and credits issued after uncertainty and leakage deductions.
8. **Science** — [Crediting agricultural soil carbon sequestration](https://pubmed.ncbi.nlm.nih.gov/35298251/). The argument that regional consistency between protocols is necessary for credit integrity.
