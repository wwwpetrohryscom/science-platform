---
title: 'Ocean-colour observations: reading the sea from its colour'
excerpt: The colour of the ocean carries information about the microscopic plants living in it. This explains how satellites estimate phytoplankton from water-leaving light, the missions that have built the record, and why atmospheric correction over water is the hard part.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - ocean-color
  - oceans
  - remote-sensing
  - monitoring
related:
  - modis-earth-observation-system
  - sentinel-satellites-explained
  - satellite-altimetry-explained
_bodyHash: 40bd2e4e
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
---

The sea is not a uniform blue. Its precise shade, sampled from orbit, carries information about the microscopic plant life drifting near the surface. By measuring the spectrum of light leaving the water, satellites can estimate how much phytoplankton is present, and that estimate has become one of the steadier threads in our [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) of the oceans.

## What the colour tells us

Phytoplankton contain chlorophyll-a, the same pigment that makes land plants green. The more of it the surface water holds, the more the water shifts away from deep blue toward green. This is the physical basis of [ocean colour](/en/glossary/ocean-color) remote sensing: instruments measure the light that emerges from just below the sea surface and read its colour to infer what is in the water, chlorophyll-a above all.

These microscopic plants matter out of proportion to their size. They sit at the base of the marine food web, and they take up carbon dioxide as they photosynthesise, so they figure prominently in the ocean carbon cycle. Tracking their abundance lets researchers follow primary productivity, watch algal blooms form and fade, gauge water quality, and look for slower shifts in marine ecosystems. NASA's [Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) has published a long series of images showing how a single colour signal can be read in all these ways.

## How the measurement works

The quantity at the heart of the method is the [reflectance](/en/glossary/reflectance) of the water across several visible wavelengths — essentially, how strongly the sea returns light at the blue and green ends of the spectrum. Standard chlorophyll algorithms compare these: a blue-to-green reflectance ratio. When phytoplankton are sparse, blue light dominates and the ratio is high; as their numbers rise, green light strengthens and the ratio falls. Converting that ratio into an estimate of chlorophyll concentration is the core step that turns colour into a number.

Doing this well depends on isolating the small fraction of light that actually came from the water. Most of the radiation reaching a satellite over the ocean has been scattered by the atmosphere rather than reflected by the sea, so the processing must first strip the atmospheric contribution away before any blue-to-green comparison is meaningful. The products and the methods behind them are documented and distributed through [NASA Earthdata](https://www.earthdata.nasa.gov/), where the long history of ocean-colour processing is laid out in detail.

## Building the record

The technique was first demonstrated by the Coastal Zone Color Scanner, launched in 1978, which showed that chlorophyll patterns could be mapped from space at all. After a long gap, the modern continuous record began with SeaWiFS, which operated from 1997 to 2010 and established the consistent, calibrated time series that later missions extended.

That record is now carried forward by several instruments at once. MODIS and VIIRS both contribute ocean-colour measurements, the same kind tracked through [the MODIS system](/en/ecology/earth-observation/modis-earth-observation-system) for its other products, while the OLCI instrument aboard Europe's Sentinel-3 platforms adds a further stream described in our note on [the Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained). Operational products derived from these sensors are delivered through the [Copernicus Marine Service](https://marine.copernicus.eu/), and NOAA distributes its own ocean-colour products via its environmental satellite service, [NESDIS](https://www.nesdis.noaa.gov/). Keeping these sources consistent matters because the colour signal complements other ocean observations, such as [satellite altimetry](/en/ecology/earth-observation/satellite-altimetry-explained) and broader [ocean heat content indicators](/en/ecology/climate-change/ocean-heat-content-indicators), in building a fuller picture of the surface ocean.

## Why atmospheric correction is the hard part

The dominant difficulty in this field is atmospheric correction, and it is demanding precisely because of the geometry just described. Since most of the light a satellite receives over water comes from the atmosphere and not the sea, the water-leaving signal is weak by comparison. A small error in estimating the atmospheric part therefore translates into a large error in the faint signal that remains — the very signal the chlorophyll algorithm depends on. Getting the correction right is, in practice, harder than the colour ratio itself.

Some waters compound the problem. The open ocean, where chlorophyll is the main thing varying the colour, is the more tractable case. Coastal and turbid waters are harder: suspended sediment and dissolved coloured matter also alter the spectrum, so the simple link between colour and phytoplankton no longer holds cleanly, and separating these contributions takes more careful methods. Clouds add a further, simpler limit — they block the surface from view entirely, leaving gaps that must be filled in from neighbouring days or flagged as missing.

## Reading the products with care

None of these limitations make ocean colour unreliable, but they shape how its products should be read. An estimate over the clear open ocean rests on firmer ground than one near a sediment-laden coast, and a cloud-free composite may stitch together observations from several passes rather than a single instant. Values are best understood as estimates with stated uncertainty rather than direct measurements of what is in the water.

Used with that caution, the colour of the sea remains a practical way to watch the living surface ocean over wide areas and long spans of time. From the first proof offered by the 1978 scanner to today's overlapping missions, the same idea — that a shift from blue toward green reveals the plants beneath — continues to underpin how phytoplankton are observed from orbit.

## Sources

1. **NASA Earthdata** — [ocean colour](https://www.earthdata.nasa.gov/). NASA Ocean Color products and history.
1. **Copernicus Marine Service** — [ocean colour products](https://marine.copernicus.eu/). Operational ocean-colour data.
1. **NASA Earth Observatory** — [ocean colour explained](https://science.nasa.gov/earth/earth-observatory/). How colour reveals phytoplankton.
1. **NOAA NESDIS** — [ocean colour](https://www.nesdis.noaa.gov/). NOAA ocean-colour satellite products.
