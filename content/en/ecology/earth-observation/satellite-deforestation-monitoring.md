---
title: 'Satellite deforestation monitoring: detecting forest loss from orbit'
excerpt: Satellites are the primary way forest loss is detected at scale, from annual global statistics to near-real-time clearing alerts. This explains how the change is measured from image time series, who reports it, and the uncertainties that come with monitoring tropical forests from space.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - deforestation
  - land-use-change
  - remote-sensing
  - forests
related:
  - land-cover-change-detection
  - wildfire-monitoring-from-space
  - remote-sensing-limitations-and-uncertainty
_bodyHash: af495327
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
---

Forest loss is now detected, at scale, mostly from space. Deforestation — the conversion of forest to another [land cover](/en/glossary/land-cover) — is identified by comparing satellite images of the same place taken at different dates and finding where the tree canopy has disappeared. This piece explains how that change is measured from an image time series, which institutions compile and report it, and why the resulting figures always carry uncertainty.

## What satellites are actually detecting

A satellite does not record "deforestation" directly. It measures the radiation reflected from the surface, and forest stands out because a living canopy reflects light in a distinctive way. When a stretch of forest is cleared, that signal changes, and an analysis of repeated observations can flag where canopy cover present on one date is absent on a later one.

Detecting the loss is therefore a question of comparing images through time rather than reading a single snapshot. Because the underlying measurement is a shift in surface cover, the same family of methods used in broader [land-cover change detection](/en/ecology/earth-observation/land-cover-change-detection) applies here, narrowed to the specific transition from forest to something else. This is one application within the wider field of [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained), and it shares its instruments and processing logic with adjacent uses.

## Two modes: periodic assessment and near-real-time alerts

Forest monitoring from orbit serves two different needs, and the systems built for them work on different clocks.

The first mode is periodic assessment, which produces consistent statistics of forest area and loss over a span of years. The Global Forest Resources Assessment compiled by the Food and Agriculture Organization is the standard international reporting in this category, drawing country-level figures into a comparable record ([FAO](https://www.fao.org/forestry/en/)). Its value lies in consistency: comparable definitions applied across countries and across time so that trends can be read with confidence.

The second mode is the near-real-time alert. Rather than summarizing years of change, these systems flag recent clearing within days or weeks, using frequent imagery from Landsat and Sentinel satellites so that authorities can respond while an event is still unfolding. The two modes are complementary. One answers how much forest has changed over a long period; the other answers where clearing is happening now.

## How the measurement is made

Detecting forest loss begins with a steady supply of imagery. NASA and the United States Geological Survey supply the Landsat record that underlies much of this work, the imagery against which forest change is detected ([USGS](https://www.usgs.gov/landsat-missions)). Sentinel observations add further frequent coverage, and the combined cadence is what makes near-real-time alerting possible.

From that imagery, an analysis examines each location across dates and identifies pixels where canopy cover has been lost. The European Commission's Joint Research Centre produces tropical-forest and global forest-monitoring products built on this approach ([JRC](https://joint-research-centre.ec.europa.eu/)), while FAO compiles the country-level statistics and NASA and USGS maintain the data feeding the analysis. Comparable change-detection data products are also distributed through open archives ([NASA Earthdata](https://www.earthdata.nasa.gov/)).

A detail that shapes every result is the definition of "forest" itself. Monitoring systems apply thresholds for canopy cover and for the minimum area that counts as forest, and a minimum mapping unit below which change is not recorded. These choices are not incidental; they determine which clearings register and which fall below the threshold, and so they directly affect the reported totals. Because deforestation is a form of [land-use change](/en/glossary/land-use-change), the way a system draws those boundaries reflects decisions about what kind of conversion it is built to capture.

## Validation against independent data

Satellite-detected loss is not accepted on its own. To gauge how reliable a result is, detected change is checked against higher-resolution imagery and against field data gathered on the ground. This step tests whether the pixels flagged as cleared correspond to real clearing, and whether genuine loss has been missed.

Validation also exposes the effect of definitions. Two monitoring efforts using different canopy-cover thresholds or area limits can report different totals for the same landscape, not because the forest behaved differently but because each system counts differently. Comparing detected change with reference data is how those differences are quantified rather than hidden, and it is part of the broader practice of stating [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) openly.

## Why the figures carry uncertainty

Several factors limit how cleanly forest loss can be measured, and they are worth stating plainly.

The first is cloud. Tropical forests sit under persistent cloud cover, which blocks optical sensors and can delay detection of a clearing until the sky happens to be clear over that spot. Radar helps here, because it sees through cloud, and combining radar with optical imagery reduces the gaps that cloud would otherwise leave.

The second is interpreting what a change actually means. Distinguishing permanent clearing from temporary disturbance is difficult, and selective logging or a natural treefall gap can resemble deliberate clearing in the data. A canopy can also recover, so a loss seen on one date may not represent lasting conversion. Reading the difference often requires looking across several observations rather than a single pair.

The third is the definitional choice discussed earlier. Because the forest definition and the minimum mapping unit change the reported figures, two credible assessments can legitimately disagree on totals while agreeing on the broad pattern. None of this makes satellite monitoring unreliable; it means the numbers should be read together with the definitions and methods that produced them. The same structural measurements that reveal canopy loss also support [remote sensing for biodiversity monitoring](/en/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring), and similar interpretive care applies whenever surface change is inferred from orbit — including in related work such as [wildfire monitoring from space](/en/ecology/earth-observation/wildfire-monitoring-from-space).

## Sources

1. **FAO** — [Forest Resources Assessment](https://www.fao.org/forestry/en/). International forest area and change statistics.
1. **European Commission JRC** — [forest monitoring](https://joint-research-centre.ec.europa.eu/). Tropical and global forest-change products.
1. **USGS** — [Landsat forest monitoring](https://www.usgs.gov/landsat-missions). Imagery underlying forest-change detection.
1. **NASA Earthdata** — [land-cover change](https://www.earthdata.nasa.gov/). Data products for forest-change analysis.
