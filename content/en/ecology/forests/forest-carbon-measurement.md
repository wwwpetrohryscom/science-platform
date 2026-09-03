---
title: 'Measuring forest carbon: allometry, plots, lidar, and the error budget'
excerpt: Nobody weighs a forest. Every published forest-carbon figure is the output of a chain of substitutions running from a tape measure to a global total, and the largest pool in that total is the one measured worst.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - forest-carbon
  - allometry
  - lidar
  - forest-inventory
  - measurement-uncertainty
related:
  - forest-ecosystems-explained
  - forest-degradation-vs-deforestation
  - deforestation-statistics-explained
  - boreal-forests-and-permafrost-interactions
pillar: forest-ecosystems-explained
_bodyHash: 9dbcc6dd
---

Nobody has ever weighed a forest. Every carbon figure attached to one is the output of a chain of substitutions: a trunk diameter stands in for a tree's mass, a statistical model stands in for the harvest that would have measured it, a plot stands in for a landscape, and a satellite stands in for the plots that were never installed. Each substitution is defensible and each one has a variance. Understanding a forest-carbon number means knowing which link in that chain is loosest — and it is almost never the one people assume.

## Five pools, unequally known

Greenhouse-gas inventories partition forest carbon into five pools, following the IPCC's guidelines for national inventories. The global assessment reports all five, and reporting coverage across them is wildly uneven.

| Pool | Global stock, 2025 | Share of total | Countries reporting | Forest area covered |
| --- | --- | --- | --- | --- |
| Soil organic carbon | 329 Gt | 46% | 77 | 70% |
| Aboveground biomass | 247 Gt | 35% | 215 | ~100% |
| Belowground biomass | 65.9 Gt | 9% | 215 | ~100% |
| Litter | 41.1 Gt | 6% | 75 | 66% |
| Deadwood | 30.3 Gt | 4% | 101 | 78% |

The total is 714 gigatonnes of carbon, about 172 tonnes per hectare. The asymmetry in that table is the central fact of the subject. The largest single pool is reported by roughly a third as many countries as the second largest. And of the two pools with near-complete coverage, only one is measured: belowground biomass is almost always inferred from the aboveground figure rather than dug up, so its apparent completeness is inherited rather than earned.

## From a tape measure to a tonne of carbon

Field measurement records trunk diameter at breast height, sometimes total height, and a species identity from which wood specific gravity is looked up. An **allometric model** converts those into oven-dry aboveground mass. The pantropical reference model was fitted to a global database of directly harvested trees — [4,004 stems of at least 5 cm diameter at 58 sites](https://pubmed.ncbi.nlm.nih.gov/24817483/) — and found that when diameter, height and wood specific gravity are all included, one model holds across tropical vegetation types with no detectable regional effect. That is a strong result, and it comes with a caveat that matters in practice: height is frequently not measured. Where it is missing, a substitute using a bioclimatic stress variable outperforms earlier height-free models, but the authors advise developing local diameter–height relationships wherever possible, because that substitution is where bias enters.

Mass then becomes carbon by a conversion factor. The IPCC default carbon fraction of dry matter is 0.47 tonnes of carbon per tonne of dry matter. Belowground mass is rarely measured at all; it is inferred from aboveground mass by a root-to-shoot ratio, with the guidelines' worked example using 0.29 for stands carrying 50 to 150 tonnes of aboveground biomass per hectare. The global totals are consistent with those conventions — living biomass of 647 gigatonnes carrying 313 gigatonnes of carbon implies a ratio close to 0.48 — but consistency with a default is not independent confirmation, because in many countries the default is what generated the number.

## Plots are the layer everything else is calibrated against

A national forest inventory is the only part of this chain that involves measuring trees. The design principle is a statistically distributed network of permanent plots remeasured on a fixed cycle: in the United States, plots are remeasured every five to ten years depending on location, capturing site and tree data for living and standing dead stems, with down woody material, soils and understorey vegetation added on a subset. Remeasurement is what converts a stock estimate into a flux estimate, and it is why inventory-based sink estimates carry the weight they do.

Two different errors live here and are often conflated. **Sampling error** is the uncertainty from having measured some of the landscape rather than all of it; it shrinks predictably as plots are added. **Model error** is the uncertainty in the allometric conversion applied to every tree on every plot; adding plots does not reduce it, because the same model is being reused. Sampling error is also the easier of the two to compute, so an interval built from it alone understates the total — and the shortfall does not announce itself.

## What lidar changed, and what it did not

Spaceborne lidar replaced the extrapolation step rather than the measurement step. NASA's Global Ecosystem Dynamics Investigation fires three lasers producing eight ground transects of roughly 25 metre footprints spaced about 60 metres along-track, with transects about 600 metres apart, giving an across-track swath near 4.2 km. Its gridded product infers mean aboveground biomass density for 1 km cells from the sample falling inside each one, against a mission requirement that 80 percent of cells fall within a standard error of either 20 tonnes per hectare or 20 percent of the estimate, whichever is greater.

That last sentence is worth reading twice. The accuracy target is stated per kilometre cell, as a standard error, with a floor — and the product's own documentation decomposes its uncertainty into two parts: covariance from the field-to-lidar biomass model, and sampling variance from the fact that the beams sample the cell rather than covering it. Neither part disappears with more orbits. Coverage is also bounded: the instrument observes between about 51.6° north and south, which excludes most of the boreal zone, where the carbon question is dominated by soils anyway, as [the boreal ground-carbon problem](/en/ecology/forests/boreal-forests-and-permafrost-interactions) sets out.

Radar approaches the same target from a different physical direction. The European Space Agency's Biomass mission, launched on 29 April 2025, carries the first P-band synthetic aperture radar in orbit, with a 12 metre antenna at 666 km altitude, chosen because longer wavelengths penetrate canopy and return signal from woody structure rather than leaves.

## Where the error budget actually sits

Not in the trees. The soil pool is the largest and the loosest, and the reason is mundane: countries report soil organic carbon to a depth of their own choosing. The forest-area-weighted global average is 41 cm, but the regional figures run from 30 cm in Asia and Oceania and 32 cm in Europe to 70 cm in North and Central America. A stock reported to 30 cm and a stock reported to 70 cm are not the same quantity, and they are summed into one global total. For the countries that did not report at all, values were derived by overlaying a 1 km global soil-carbon grid covering only the top 30 cm with forest-cover layers.

The conversion factors carry their own spread. The inventory guidelines' uncertainty assessment cites basic wood density at 10 to 40 percent, growing stock at about 8 percent in industrialised countries and 30 percent elsewhere, forest area at roughly 3 percent in industrialised countries, and a combination of remote sensing with ground survey at 10 to 15 percent. Those are not small relative to the changes being detected.

The result propagates all the way to the global budget. The IPCC's assessment of the industrial era, covering 1750 to 2019, puts cumulative fossil-fuel and industry emissions at 445 ± 20 petagrams of carbon and the cumulative land-use, land-use-change and forestry flux at 240 ± 70 petagrams — a relative uncertainty roughly six times larger on the land term. That the land term is the least constrained part of [the global carbon budget](/en/ecology/earth-systems/carbon-cycle-explained) is a direct consequence of the chain described above.

## Why the arithmetic decides what a credit certifies

Forest carbon is priced as though it were measured. It is modelled, and the model's assumptions are usually inherited defaults. The same assessment that publishes the pool table above notes that its figures diverge from what countries submit under the climate convention, because the two systems use different forest definitions, because the convention asks only about *managed* forest, and because calibration, reclassification and forecasting methods differ. Two official carbon totals for the same country's forests can therefore differ without either being wrong.

For a project claiming a specific tonnage on a specific parcel, the practical consequence is that the confidence interval is often wider than the claimed effect, particularly where soil carbon is included and where default rather than locally fitted factors are used. That gap between what is certified and what is measurable is examined further in the note on [what carbon offset markets are actually buying](/en/insight/carbon-offset-outsourcing-science), and the parallel problem of counting area rather than mass is set out in [how deforestation statistics are constructed](/en/ecology/forests/deforestation-statistics-explained). The framing question — what counts as forest before anything is weighed at all — belongs to the [overview of forest definitions and structure](/en/ecology/forests/forest-ecosystems-explained).

## Sources

1. **FAO** — [Global Forest Resources Assessment 2025: growing stock, biomass and carbon](https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/growing-stock-biomass-carbon.html). Pool-by-pool carbon stocks, reporting coverage, soil depths by region, and the divergence from convention reporting.
2. **Global Change Biology, via PubMed** — [Improved allometric models to estimate the aboveground biomass of tropical trees](https://pubmed.ncbi.nlm.nih.gov/24817483/). The harvested-tree database behind the pantropical allometric model and the role of height and wood specific gravity.
3. **IPCC** — [2006 Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 4: Forest Land](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf). Carbon fraction and root-to-shoot defaults, and the chapter's uncertainty assessment for wood density, growing stock and area.
4. **NASA ORNL DAAC** — [GEDI L4B Gridded Aboveground Biomass Density, Version 2](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html). Instrument sampling geometry, latitude coverage, the mission accuracy requirement, and the two variance components.
5. **European Space Agency** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). The P-band radar mission, its launch date and its instrument configuration.
6. **USDA Forest Service** — [Forest Inventory and Analysis](https://research.fs.usda.gov/programs/fia). Permanent-plot design, remeasurement interval and the variables recorded on plots and subplots.
7. **IPCC AR6 WG1, Chapter 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Cumulative fossil and land-use fluxes with their assessed uncertainties.
8. **FAO** — [Global Forest Resources Assessment 2025](https://openknowledge.fao.org/handle/20.500.14283/cd6709en). The full assessment, including the methodological chapter behind the reporting-coverage figures.
