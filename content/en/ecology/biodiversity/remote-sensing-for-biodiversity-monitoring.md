---
title: 'Remote sensing for biodiversity monitoring: what satellites can and cannot see'
excerpt: Satellites cannot see most species, but they measure the structure of ecosystems consistently and globally. This explains what Earth observation actually contributes to biodiversity monitoring — land cover, canopy structure, vegetation state — and the limits of inferring biological diversity from a spectral signal.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-03'
tags:
  - biodiversity
  - remote-sensing
  - earth-observation
  - monitoring
related:
  - habitat-fragmentation-metrics
  - essential-biodiversity-variables-monitoring
  - ecological-integrity-indicators
pillar: why-species-counts-mislead-conservation
_bodyHash: ba46a7eb
readingTime: 5
---

A satellite passing overhead cannot tell a warbler from a wren, yet it can map the forest both depend on, watch that forest change season by season, and do so over the whole planet at once. The gap it cannot close is the one that also limits ground surveys, described in [why species counts mislead](/en/ecology/biodiversity/why-species-counts-mislead-conservation). That gap — between what an instrument detects and what conservation wants to know — defines both the promise and the limits of Earth observation. Understanding it is central to the wider task of [biodiversity monitoring and ecosystem health](/en/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## What satellites actually observe

[Remote sensing](/en/glossary/remote-sensing) gathers information about ecosystems from satellites and aircraft without touching the ground. It does not directly identify most individual species. What it does measure well is the physical state of ecosystems: where habitat is, how much of it remains, and what condition it is in.

The reliable products fall into a handful of families. Sensors map land cover and land-cover change, track forest extent and forest loss, and gauge vegetation greenness and productivity through indices such as NDVI. They detect surface water and wetlands, record fire, and — where lidar instruments are involved — resolve the three-dimensional structure of a forest canopy. These observations sit squarely within the ecosystem-structure class of the [Essential Biodiversity Variables](/en/ecology/biodiversity/essential-biodiversity-variables-monitoring), the dimension that ground surveys alone cannot scale to cover.

## The programmes that make it possible

Much of this capacity rests on a few long-running missions. The joint NASA and USGS [Landsat](https://www.usgs.gov/) record supplies decades of consistent imagery, an archive whose continuity matters as much as any single image because change is only visible against a stable baseline. NASA's MODIS adds frequent measures of vegetation productivity, while its GEDI lidar mission samples canopy structure in three dimensions.

On the European side, the [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth) programme of the European Space Agency operates the Sentinel satellites, whose frequent passes feed the operational [land products](https://land.copernicus.eu/) of the Copernicus Land Monitoring Service. ESA's BIOMASS mission is designed to estimate the amount of carbon-bearing material held in forests. Together these systems convert raw radiance into the land-cover and vegetation layers that downstream analysis depends on, including the maps behind [habitat fragmentation metrics](/en/ecology/biodiversity/habitat-fragmentation-metrics) and many measures of [habitat fragmentation](/en/glossary/habitat-fragmentation).

## From spectra to diversity: a research frontier

The harder ambition is to move from structure toward biological diversity itself. One active line of research uses spectral diversity — the variation in the reflectance signal measured across a scene — as an indirect proxy for the diversity of life on the ground. The underlying idea is that more varied habitats and more varied plant assemblages tend to scatter light in more varied ways, so a patchier spectral signal may flag a richer community.

This is a hypothesis under test rather than a finished tool. To give it structure, GEO BON has defined [remote-sensing EBVs](https://geobon.org/) — Essential Biodiversity Variables that can be informed by Earth observation — formalising the links between what a sensor measures and what ecologists track. The framework keeps the inference disciplined: it specifies which variables a satellite can plausibly inform and which still require people in the field.

## How the measurement works

A useful product is rarely a single picture. Sensors record reflected or emitted radiation in defined wavelength bands; that signal is calibrated, corrected for atmospheric effects, and then classified into categories such as forest, water, or cropland, or converted into a continuous index such as a greenness value. The result is a layer that can be compared across space and repeated through time.

Two points about method deserve emphasis. First, species-level inference is never read straight from the pixel: it requires ground data to calibrate the relationship and independent field observations to validate it. Second, the choice of sensor sets hard limits — spatial resolution determines the smallest feature that can be distinguished, and spectral resolution governs how finely surfaces can be told apart. These constraints feed directly into broader [ecological integrity indicators](/en/ecology/biodiversity/ecological-integrity-indicators), which often combine satellite layers with field measurements rather than relying on either alone. The reliability of land and vegetation products, documented by the [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/), comes from this disciplined chain from radiance to validated map.

## Strengths and limits

The strengths are distinctive and difficult to replace. Earth observation offers global coverage, repeatable measurement on a regular schedule, and long, internally consistent archives that let analysts separate genuine change from noise. No ground campaign can match that reach or that temporal depth.

The limits are equally real and follow from the same physics. Satellites see structure, not species; a map of canopy height or greenness describes habitat, not the animals or microbes within it. Resolution caps what can be resolved, so features below the sensor's grain stay invisible. And optical sensors are interrupted by cloud cover, leaving gaps that are uneven across regions and seasons. These are properties of the technique, not failures of any one mission, and they shape what questions Earth observation can responsibly be asked to answer.

## Reading the data with appropriate caution

Several sources of uncertainty should temper interpretation. Ecosystem structure is an imperfect stand-in for biodiversity: two stands of forest that look alike from above can hold very different communities, so a structural measure constrains but does not fix the biological answer. Classification itself carries error, because assigning each pixel to a category is a judgement that can be wrong, and those misclassifications propagate into every metric built on the map.

The spectral-diversity proxy adds a further layer of caution. It is an indirect signal still being validated, and its relationship to on-the-ground diversity appears to vary with habitat, season, and scale. The sensible posture is to treat satellite products as one strong, scalable input among several — excellent for tracking the extent and condition of habitat, dependent on fieldwork for what lives there, and most trustworthy when the structural signal and the biological question are kept clearly distinct.

## Sources

1. **NASA Earth Observatory** — [land and vegetation](https://science.nasa.gov/earth/earth-observatory/). Satellite land-cover, vegetation, and structure products.
1. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Sentinel and biomass missions for ecosystem structure.
1. **Copernicus Land** — [land products](https://land.copernicus.eu/). Operational land-cover and vegetation-state data.
1. **USGS** — [Landsat](https://www.usgs.gov/). Long-term consistent satellite imagery archive.
1. **GEO BON** — [remote-sensing EBVs](https://geobon.org/). Framework linking Earth observation to biodiversity variables.
