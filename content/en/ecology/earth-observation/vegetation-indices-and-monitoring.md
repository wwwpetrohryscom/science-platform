---
title: 'Vegetation indices and monitoring: beyond NDVI'
excerpt: NDVI is the best known vegetation index but not the only one. This explains why several indices exist — EVI, soil- and water-adjusted indices — what limitation each one corrects, and how index time series are used to monitor vegetation condition and productivity.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - vegetation-indices
  - enhanced-vegetation-index
  - remote-sensing
  - monitoring
related:
  - ndvi-explained
  - drought-monitoring-systems
  - modis-earth-observation-system
_bodyHash: 18ff809b
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
---

A vegetation index combines reflectance measured in different spectral bands into a single number that tracks how much vegetation is present, or what condition it is in. [NDVI](/en/ecology/earth-observation/ndvi-explained) is the most familiar of these, but it is one member of a larger family. Several other indices exist because each was designed to correct a specific weakness in how reflectance relates to the plants on the ground.

## Why one index is not enough

Greenness, as a satellite sees it, is never a clean signal. The light reaching the sensor has passed through the atmosphere, bounced off leaves, and mixed with whatever lies between and beneath the canopy — bare soil, litter, shadow, or water. Each of these can pull a simple index away from the quantity an analyst actually wants to measure.

Because no single formula handles every one of these effects at once, [remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) research has produced a set of indices, each tuned to a different problem. Choosing among them is part of the analysis, not a detail. As NASA's overview of [measuring vegetation](https://science.nasa.gov/earth/earth-observatory/) sets out, the underlying physics — strong absorption of red light by chlorophyll and strong reflectance in the near-infrared — is shared, but the way each index packages that contrast differs.

## The Enhanced Vegetation Index

The [Enhanced Vegetation Index](/en/glossary/enhanced-vegetation-index), or EVI, is a standard product of [the MODIS system](/en/ecology/earth-observation/modis-earth-observation-system). It was built to address three of the limitations that affect [NDVI](/en/glossary/ndvi). First, it reduces the influence of the atmosphere, drawing on the blue band to help correct for atmospheric scattering. Second, it lessens the effect of the soil and canopy background that sits behind sparse or open vegetation. Third, it is less prone to saturation in areas of high biomass, where dense canopies push a simpler index toward a flat ceiling and small real differences stop registering.

These corrections make EVI a useful complement rather than a replacement. The MODIS vegetation-index suite documented by [NASA Earthdata](https://www.earthdata.nasa.gov/) typically distributes both indices together, so users can compare the two and pick whichever suits the landscape and the question at hand.

## Soil- and water-adjusted indices

Two further groups of indices address backgrounds that a greenness measure handles poorly.

Soil-adjusted indices, of which SAVI is the common example, add a soil-brightness correction term. They are most useful where vegetation is sparse and bare ground dominates each pixel — drylands, early-season crops, and degraded land — because in those settings the brightness of the soil itself can otherwise masquerade as a change in the plants.

Water-sensitive indices, such as NDWI, take a different tack. Instead of red and near-infrared, they pair near-infrared with shortwave-infrared reflectance, which makes them respond to the water held in vegetation, or to open water, rather than to greenness. The USGS catalogue of [spectral indices](https://www.usgs.gov/landsat-missions) derived from Landsat documents both vegetation and water variants and the band combinations behind them.

## How index time series are used

A single index value on a single date says little on its own. The method that turns indices into monitoring is repetition: the same index is computed again and again over the same place to build a time series. Read across the seasons, that series traces phenology — the green-up and senescence of the annual cycle. Read across years, it captures productivity, showing whether a growing season was stronger or weaker than those before it.

The most practical use comes from comparing each new observation against that established history. When an index drops below its seasonal norm, the anomaly can flag drought stress, disease, grazing, fire, or another disturbance — which is why such series feed operational [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems). The same long records also serve as [ecological integrity indicators](/en/ecology/biodiversity/ecological-integrity-indicators), where a persistent departure from the expected pattern is a signal worth investigating rather than a conclusion in itself.

## Choosing an index, and reading its limits

Selecting an index is a methodological decision. The appropriate choice depends on the vegetation type, on what lies in the background of the pixel, and on the question being asked. A soil-adjusted index suits sparse cover; a water-sensitive index suits questions about moisture; EVI helps where atmosphere and saturation are concerns. No single index is the right tool for every situation, and treating one as universal tends to introduce error rather than remove it.

The indices themselves carry uncertainty that should be stated plainly. Values respond to sensor calibration and to how thoroughly the atmosphere has been corrected, so the same scene can yield slightly different numbers depending on the processing chain behind it. Mixed pixels — those containing more than one cover type — blur the result, and the soil background continues to influence even the indices designed to suppress it. Comparisons across different sensors therefore require care, because instruments differ in their bands and calibration. Peer-reviewed work in journals such as [Remote Sensing](https://www.mdpi.com/journal/remotesensing) continues to examine these effects and to test how far index measurements can be compared across platforms and through time.

## Sources

1. **NASA Earth Observatory** — [measuring vegetation](https://science.nasa.gov/earth/earth-observatory/). NDVI and EVI explained.
1. **NASA Earthdata** — [vegetation index products](https://www.earthdata.nasa.gov/). MODIS vegetation-index documentation.
1. **USGS** — [spectral indices](https://www.usgs.gov/landsat-missions). Landsat-derived vegetation and water indices.
1. **Remote Sensing (journal)** — [index methods](https://www.mdpi.com/journal/remotesensing). Peer-reviewed vegetation-index research.
