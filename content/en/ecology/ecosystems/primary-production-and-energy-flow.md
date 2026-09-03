---
title: 'Primary production: what GPP, NPP and NEP measure, and how each is estimated'
metaTitle: 'Primary production: what GPP, NPP and NEP measure'
excerpt: Gross primary production is never measured directly at ecosystem scale, only inferred. What GPP, NPP and NEP each mean, which instrument stands behind each number, and why the land and ocean halves rest on different methods.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - primary-production
  - carbon-flux
  - eddy-covariance
  - satellite-products
related:
  - food-webs-and-trophic-structure
  - what-is-an-ecosystem
  - carbon-cycle-explained
  - ocean-color-observations
pillar: what-is-an-ecosystem
_bodyHash: ab79eebc
---

Every figure for how much carbon the biosphere fixes is the output of a model, not the reading of an instrument. That is not a criticism of the figures; it is a fact about the quantity. There is no device that can be pointed at a forest or a stretch of ocean and made to report photosynthesis. What can be measured is a concentration, a reflectance, a mass of harvested tissue, or the vertical flux of carbon dioxide above a canopy — and each of those becomes a production estimate only after assumptions are applied.

Four terms are in circulation for what looks like one quantity, and they differ only in which respiration has already been subtracted. Confusing two of them changes an answer by a factor of two, which is enough to reverse the sign of a carbon budget. The reactions doing the fixing are set out in [how photosynthesis works](/en/biology/cells/photosynthesis-explained); the difficulty here starts one level up, where a leaf-scale process has to be converted into a number for a continent — the same translation that forces an ecosystem to be described by [the rates that pass through it rather than the ground it covers](/en/ecology/ecosystems/what-is-an-ecosystem).

## Four quantities and the subtractions between them

| Quantity | What it is | How a number is produced | Rough global scale |
| --- | --- | --- | --- |
| Gross primary production (GPP) | Total carbon fixed by photosynthesis before any of it is respired | Never observed directly; partitioned out of a net flux, or modelled from absorbed light | Land: 123 ± 8 to 147 Pg C yr⁻¹ depending on method |
| Autotrophic respiration | Carbon respired by the photosynthesisers themselves | Modelled from temperature and tissue properties; not observed separately at ecosystem scale | Not reported as a standalone global figure |
| Net primary production (NPP) | GPP minus autotrophic respiration — the carbon available to everything else | Harvest and inventory at plot scale; satellite light-use-efficiency models at global scale | About 105 Pg C yr⁻¹ globally, split roughly evenly between land and ocean |
| Net ecosystem production (NEP) | NPP minus respiration by consumers and decomposers | Derived from eddy-covariance net exchange, sign-reversed | A small residual of two large fluxes |
| Net biome production | NEP minus fire, harvest, and lateral export | Inventory, bookkeeping models and atmospheric inversions | The quantity a carbon budget actually needs |

Read down the table and the pattern is that precision falls as the quantity becomes more useful. GPP is conceptually clean and unobservable. Net biome production is what a national inventory or a [carbon sink](/en/glossary/carbon-sink) claim depends on, and it is the term with the most subtractions and the largest relative uncertainty.

## Nothing on a flux tower measures photosynthesis

The workhorse instrument for land production is eddy covariance: a fast anemometer and a gas analyser mounted above the canopy, sampling vertical wind speed and CO₂ concentration many times a second, with their covariance giving the net vertical flux. What that yields is net ecosystem exchange — the difference between uptake and total respiration — and nothing else.

GPP is then extracted by partitioning. The best-known approach fits a respiration model to night-time fluxes, when photosynthesis is zero, extrapolates it into the daytime using temperature, and adds it back to the measured net exchange. Every GPP value from a tower therefore carries the assumptions of whichever partitioning model produced it. The [FLUXNET2015 dataset](https://www.nature.com/articles/s41597-020-0534-3), which standardised the processing across the community, treats that dependence as something to be measured rather than removed: it runs both the night-time method and a daytime light-response method over every site, adds a third sundown-respiration method wherever storage measurements allow it, and tells users to take the difference between the daytime and night-time products as uncertainty. It is explicit that ecosystem respiration and photosynthetic uptake are derived data products rather than measurements, distributed alongside the fluxes with their own uncertainty estimates.

That dataset also sets the scale of the observational base: 212 sites worldwide, over 1,500 site-years of data up to and including 2014. For a planetary flux, a few hundred towers is a thin sample, and it is not an evenly spread one: coverage is densest in temperate Europe and North America and sparsest in the tropics, deserts and the high latitudes, which is the opposite of where the largest and least certain fluxes sit.

## From a few hundred towers to a global field

Three families of method turn that sample into a global number, and they disagree in an instructive way.

Light-use-efficiency models take absorbed photosynthetically active radiation from a satellite and multiply it by an efficiency that varies with vegetation type and is down-regulated for temperature and humidity stress. NASA's operational implementation, [the MOD17 product](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061) — MOD17A3HGF, version 6.1 — delivers annual GPP and NPP at 500 m from the summed 8-day composites, with net photosynthesis given as GPP minus maintenance respiration. Its documentation is candid about the compromises: the annual product is generated only after the year closes, because gap-filling the input leaf-area and absorbed-radiation series requires the whole year, and pixels that fail quality screening are filled by interpolation rather than observation.

Statistical upscaling instead learns a relationship between tower fluxes and satellite predictors and applies it everywhere. An [observation-based synthesis using eddy-covariance data and diagnostic models](https://www.science.org/doi/10.1126/science.1184984) put global land GPP at 123 ± 8 Pg C yr⁻¹, with tropical forests and savannahs accounting for 60 per cent of that total and GPP over 40 per cent of vegetated land associated with precipitation. A later approach scaling near-infrared reflectance of vegetation from the same tower network returned [147 Pg C yr⁻¹, with a 95 per cent credible interval of 131 to 163](https://pubmed.ncbi.nlm.nih.gov/31199543/), and noted that its estimates run systematically higher than earlier bottom-up work, particularly in the mid-latitudes.

Those two are not a measurement and a correction. They are two defensible ways of extrapolating the same tower archive whose central values differ by about a fifth — more than either study's own stated uncertainty. Anyone quoting a global GPP figure is quoting a method as much as a planet.

## The ocean half is a different instrument and a different error

Marine production is reconstructed almost entirely from ocean colour. Sensors measure water-leaving radiance, algorithms convert it to chlorophyll concentration or to phytoplankton carbon inferred from particulate backscatter, and a productivity model converts that standing stock into a rate using light, mixed-layer depth and temperature. The Copernicus Marine Service's [global ocean colour product](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description) is a working example: primary production is distributed as one variable among many, gridded at 4 km, stitched together from SeaWiFS, MODIS, MERIS, VIIRS and OLCI across a record beginning in 1997. How that inversion is done, and what it can and cannot see, is the subject of [ocean colour observations](/en/ecology/earth-observation/ocean-color-observations).

The canonical integration of the two domains estimated [global NPP at 104.9 Pg C yr⁻¹ with roughly equal contributions from land and ocean](https://www.science.org/doi/10.1126/science.281.5374.237), and that near-parity is still the headline most readers encounter. It deserves more caution than it usually gets, because the two halves are not measured in comparable ways. On land, production can be cross-checked against biomass inventories, litterfall traps and harvest records, because most of what is fixed stays in place for years. In the ocean, the photosynthesisers turn over in days; there is no standing stock to weigh, no tower network, and validation rests on scattered shipboard incubations. A recent analysis of the satellite era, which reports [statistically significant declines in net primary production across almost half the ocean](https://www.nature.com/articles/s41467-025-60906-y), notes in passing that the remote-sensing record is the best available basis for a global trend — a statement about the absence of alternatives as much as about the strength of the method.

## Why the residual is the hard part

The gap between gross and net is where the policy-relevant number lives, and it is a difference of large quantities. Land GPP is of order 120 to 150 Pg C yr⁻¹; the net terrestrial carbon sink assessed by the IPCC for 2010 to 2019 is [3.4 ± 0.9 Pg C yr⁻¹](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). A systematic error of a few per cent in the gross flux would be the size of the entire sink. This is why the [carbon cycle](/en/ecology/earth-systems/carbon-cycle-explained) is not constrained by improving GPP estimates alone, and why net biome production is estimated by independent routes — atmospheric inversions, forest inventories, bookkeeping models — rather than by subtracting one large modelled term from another.

For ecology rather than accounting, NPP is usually the quantity that matters, because it is the carbon actually available to everything that does not photosynthesise, and therefore the ceiling on what the rest of [the food web](/en/ecology/ecosystems/food-webs-and-trophic-structure) can be built from. That ceiling is real, but it is worth remembering how it was arrived at. When a figure says a hectare of grassland produced a given tonnage last year, the honest expansion is that a model of light interception, an assumed efficiency, and a satellite series with interpolated gaps together implied it.

## Sources

1. **Scientific Data (Nature Portfolio)** — [The FLUXNET2015 dataset and the ONEFlux processing pipeline for eddy covariance data](https://www.nature.com/articles/s41597-020-0534-3). Site count, record length, and the status of respiration and uptake as derived products.
2. **Science** — [Terrestrial gross carbon dioxide uptake: global distribution and covariation with climate](https://www.science.org/doi/10.1126/science.1184984). The 123 ± 8 Pg C yr⁻¹ observation-based GPP estimate and its regional partitioning.
3. **Global Change Biology** — [Terrestrial gross primary production: using NIRv to scale from site to globe](https://pubmed.ncbi.nlm.nih.gov/31199543/). The 147 Pg C yr⁻¹ estimate with its credible interval and comparison to bottom-up work.
4. **NASA Earthdata** — [MODIS/Terra net primary production gap-filled yearly L4 global 500 m, version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061). Operational light-use-efficiency product, its gap-filling procedure and its timing constraints.
5. **Science** — [Primary production of the biosphere: integrating terrestrial and oceanic components](https://www.science.org/doi/10.1126/science.281.5374.237). The 104.9 Pg C yr⁻¹ global NPP total and the approximate land-ocean parity.
6. **Copernicus Marine Service** — [Global ocean colour, bio-geo-chemical, L4 product description](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description). Sensors, resolution and record length behind an operational marine primary production field.
7. **Nature Communications** — [Global declines in net primary production in the ocean colour era](https://www.nature.com/articles/s41467-025-60906-y). Satellite-era trend in marine production and the reliance on remote sensing for global trends.
8. **IPCC AR6 WG1, Chapter 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). The assessed net terrestrial carbon sink for 2010 to 2019.
