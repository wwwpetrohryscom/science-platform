---
title: 'MODIS: the daily global view of the Earth system'
excerpt: For over two decades the MODIS instruments on NASA’s Terra and Aqua satellites have imaged the entire planet almost every day. This explains the sensor, its 36 bands and coarse-but-frequent coverage, the products it generates, and its VIIRS successors.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - modis
  - earth-observation
  - remote-sensing
  - monitoring
related:
  - sentinel-satellites-explained
  - ndvi-explained
  - wildfire-monitoring-from-space
_bodyHash: 5edceb2c
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
---

Some satellites are built to see small things in fine detail; others are built to see almost everything, almost every day. The Moderate Resolution Imaging Spectroradiometer, or MODIS, belongs firmly to the second group. Flown on two NASA satellites for more than twenty years, it has provided a near-daily portrait of the whole planet that underpins much of our routine [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained).

## Two satellites, one design

MODIS is not a single instrument but a matched pair. One copy flies on the Terra satellite, launched in 1999, and a second on Aqua, launched in 2002. The two cross the equator at different times of day, and together they image almost the entire surface of the Earth every one to two days. That cadence is the defining feature of the system: where some sensors return to a given location only every week or two, MODIS sees most places more than once a day.

The trade-off behind that frequency is built into the optics. Each instrument carries a wide-swath scanner that sweeps a broad strip of ground on every orbit, so the planet is covered quickly but each pixel represents a relatively large patch of surface. NASA describes both spacecraft and their roles in its mission overviews of [Terra and Aqua](https://science.nasa.gov/), the platforms that have kept this view consistent for two decades.

## How MODIS sees: bands and resolution

The instrument observes in 36 spectral bands, spanning the visible, near-infrared, and thermal-infrared parts of the spectrum. Different bands are recorded at different spatial resolutions, reflecting what each is meant to measure. Two bands are collected at 250 metres, five at 500 metres, and the remaining bands at 1 kilometre. The finer 250- and 500-metre bands support land and vegetation work where a little more spatial detail helps, while the 1-kilometre bands serve measurements — such as surface temperature and atmospheric properties — where frequent, broad coverage matters more than sharpness.

This is a deliberate engineering choice rather than a shortcoming. By accepting coarser pixels, the design buys a very wide swath and the near-daily revisit that makes the data useful for watching change as it happens. The signal each band records is calibrated reflected sunlight or emitted thermal radiation; the surface conditions of interest are inferred from how those values vary in space and time. NASA's [Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) regularly publishes imagery showing how these observations are read.

## What MODIS measures: the standard products

MODIS data are processed into a catalogue of standard products that distil the raw bands into geophysical quantities. On land, these include vegetation indices — both NDVI and the enhanced vegetation index (EVI) — along with land cover classifications and land-surface temperature. The vegetation indices, explained more fully in our note on NDVI, track how green and photosynthetically active the surface is, and their near-daily updates make seasonal cycles easy to follow.

Other products address active processes and other parts of the Earth system. MODIS detects active fires and thermal anomalies, a capability central to [wildfire monitoring from space](/en/ecology/earth-observation/wildfire-monitoring-from-space). Over the oceans it measures ocean colour and chlorophyll, an indicator of phytoplankton; it also maps snow cover and atmospheric aerosols. The full set of products and their documentation is distributed through [NASA Earthdata](https://www.earthdata.nasa.gov/). Because the same measurements are repeated day after day across the globe, they feed directly into longer-term [climate indicators and Earth-system monitoring](/en/ecology/climate-change/climate-indicators-earth-system-monitoring).

## Strengths, limits, and uncertainty

The strength of MODIS follows directly from its near-daily revisit: it is well suited to tracking fast-moving change such as fires, ocean blooms, and the seasonal rhythm of vegetation, where catching the event within a day or two is what counts. Few systems combine that frequency with such broad, consistent global coverage over so long a record.

The same design imposes clear limits. Coarse pixels cannot resolve small features that finer-resolution sensors capture; for field-scale detail, instruments like Landsat or the [Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained) are better matched to the task. Several sources of uncertainty also have to be stated plainly. A single coarse pixel often mixes several surface types, so its value is an average that may not correspond to any one cover type on the ground. The optical bands depend on clear skies, and cloud interrupts them, leaving gaps that have to be filled or flagged. And because MODIS is an ageing system, continuity itself is a concern: the records must be carried forward without breaks in calibration.

## The transition to VIIRS

MODIS was never meant to operate forever, and its measurements are being continued by a newer instrument, the Visible Infrared Imaging Radiometer Suite, or VIIRS. VIIRS flies on the Suomi NPP satellite and on the NOAA polar-orbiting satellites, and it carries forward many of the same measurements — vegetation, fires, ocean colour, snow, and aerosols among them. NOAA's environmental satellite service, [NESDIS](https://www.nesdis.noaa.gov/), operates the VIIRS instruments that now provide much of this continuity.

Handing a long observational record from one sensor to another is not automatic. The two instruments differ in their bands and detail, so their measurements must be cross-calibrated — adjusted so that a value from VIIRS means the same thing as the equivalent value from MODIS. Done carefully, that cross-calibration lets the daily global view begun by Terra and Aqua continue as a consistent, decades-long climate data record rather than two separate, hard-to-compare archives.

## Sources

1. **NASA Earthdata** — [MODIS data](https://www.earthdata.nasa.gov/). MODIS products and documentation.
1. **NASA Earth Observatory** — [MODIS imagery](https://science.nasa.gov/earth/earth-observatory/). How MODIS observations are used.
1. **NASA** — [Terra and Aqua](https://science.nasa.gov/). The satellites carrying MODIS.
1. **NOAA NESDIS** — [VIIRS](https://www.nesdis.noaa.gov/). Operates the VIIRS successor instruments.
