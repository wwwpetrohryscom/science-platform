---
title: 'Land-cover change detection: mapping how the surface changes over time'
excerpt: Comparing satellite images from different dates is how large-scale land change is measured. This explains the difference between land cover and land use, the main change-detection methods, the global products, and the errors that have to be controlled.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - land-cover
  - land-use-change
  - remote-sensing
  - monitoring
related:
  - satellite-deforestation-monitoring
  - landsat-program-explained
  - earth-observation-data-products
_bodyHash: 46881cac
---

When a forest becomes cropland, or a field is built over, the surface itself changes, and that change leaves a measurable trace in satellite imagery. Detecting it is a matter of comparing pictures of the same place taken at different times and asking, carefully, what is genuinely different. This article explains the distinction that underlies the whole exercise, the main ways the comparison is done, the products it feeds, and the errors that have to be kept in check.

## Land cover and land use are not the same thing

The first thing to settle is what is being measured. [Land cover](/en/glossary/land-cover) is the physical material on the surface — forest, water, cropland, built-up ground — the stuff a sensor can record directly. [Land-use change](/en/glossary/land-use-change), by contrast, concerns the human function of that land: whether a grassy area is a pasture, a park, or an airfield left to seed. The two are related but distinct.

This distinction matters because remote sensing measures cover, not use. A satellite records the reflectance of a surface and, from that, a classifier can label it as forest or water with reasonable confidence. Use, however, is usually inferred — read from context, ancillary maps, or the pattern of cover over time — rather than seen. Keeping the two apart prevents a common confusion: a map of land cover is not automatically a map of how land is being used.

## How change detection works

Change detection rests on a simple premise: take imagery of one location from two or more dates and find where the surface no longer matches itself. Several established methods do this, and they differ in what they compare and how much they assume.

The most direct is **image differencing**, in which one date's band or index is subtracted from another's; pixels where the difference is large are flagged as candidate change. A second approach, **post-classification comparison**, classifies each date independently into land-cover categories and then compares the resulting maps, so that the output describes not just where change occurred but what changed into what. A third family, **time-series analysis**, works with a long stack of images and looks for the moment — a breakpoint — when a pixel's behaviour shifts, which helps pin down the timing of a change rather than only its presence. Each method trades simplicity against the richness of what it can report, and the choice depends on the question and the imagery to hand. The broader pipeline that turns raw scenes into analysis-ready inputs is covered in the cluster's [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) overview.

These techniques are general, but one application has driven much of their refinement: tracking forest loss. The way time-series methods isolate the date of a clearing is central to [satellite deforestation monitoring](/en/ecology/earth-observation/satellite-deforestation-monitoring), where knowing when a stand was cut matters as much as knowing that it was.

## The products and the imagery behind them

Change detection is not only a research technique; it produces operational maps that many users rely on. At the global and regional scale, the ESA Climate Change Initiative land-cover maps offer a consistent series across the planet, while the Copernicus Land Monitoring Service delivers pan-European and global products ([Copernicus Land](https://land.copernicus.eu/)). The ESA Climate Change Initiative effort sits within the agency's wider Earth-observation programme ([ESA](https://www.esa.int/Applications/Observing_the_Earth)). National efforts complement these, such as the USGS National Land Cover Database built on the long Landsat record ([USGS](https://www.usgs.gov/landsat-missions)), and the European Commission's Joint Research Centre produces land and forest monitoring of its own ([JRC](https://joint-research-centre.ec.europa.eu/)).

Most of these products rest on the same foundation: Landsat and Sentinel imagery. That dependence is worth stating plainly, because it means the quality of any land-cover map is bounded by the quality of its input scenes and by the classification method applied to them. The Landsat side of that foundation, with its decades of moderate-resolution coverage, is described in [the Landsat program](/en/ecology/earth-observation/landsat-program-explained), and how such inputs are packaged for use is the subject of [Earth observation data products](/en/ecology/earth-observation/earth-observation-data-products).

## Why apparent change is not always real change

A map of change is only as trustworthy as its handling of error, and several sources of error are intrinsic to the method. The most fundamental is that classification accuracy is never perfect: every classifier mislabels some pixels, which is why reputable products are released with accuracy assessments rather than presented as exact. Treating a classified map as ground truth, without reading its reported accuracy, overstates what is known.

Two further problems can manufacture change that did not happen. Image-to-image misregistration — when two dates are not aligned to the same ground position — causes a pixel to be compared against the wrong neighbour, producing false change along edges and boundaries. Seasonal differences do something similar: a field that is bare in winter and green in summer can look like land conversion when it is merely the same field at a different point in its cycle. Sound analysis controls for this, for instance by comparing images from matching seasons or by using time-series methods that model the normal annual rhythm before flagging a departure from it. Distinguishing real conversion from these artefacts is the recurring difficulty of the field, and it connects to ecological questions downstream, such as the [habitat fragmentation metrics](/en/ecology/biodiversity/habitat-fragmentation-metrics) that depend on accurate land-cover maps to be meaningful.

## Reading change maps with care

Land-cover change detection is a mature and widely used tool, but its outputs are interpretations, not photographs of fact. The most useful habit a reader can adopt is to ask three questions of any change map: what method produced it, what imagery it was built from, and what accuracy was reported. A difference image, a pair of classified maps, and a time-series breakpoint can all describe the same patch of ground while disagreeing at the margins, and none is correct in an absolute sense. Used with that awareness — and with seasonal and registration effects accounted for — change detection gives a defensible, repeatable picture of how the surface of the planet is shifting over time.

## Sources

1. **Copernicus Land** — [land-cover products](https://land.copernicus.eu/). Pan-European and global land-cover mapping.
1. **ESA** — [Climate Change Initiative land cover](https://www.esa.int/Applications/Observing_the_Earth). Global land-cover map series.
1. **USGS** — [land-cover data](https://www.usgs.gov/landsat-missions). Landsat-based land-cover products.
1. **European Commission JRC** — [land monitoring](https://joint-research-centre.ec.europa.eu/). EC land and forest monitoring.
