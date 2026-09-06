---
title: 'Fluorescence as a measure of photosynthesis: reading the light plants give back'
metaTitle: Fluorescence as a measure of photosynthesis from space
excerpt: Vegetation re-emits a faint glow that greenness indices cannot see, and it tracks the light reactions rather than the leaf area. Two satellites now measure it globally, and they agree with each other.
type: expert
author: earth-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - remote-sensing
  - photosynthesis
  - fluorescence
  - carbon-cycle
related:
  - earth-observation-and-remote-sensing-explained
  - ndvi-explained
  - light-harvesting-and-photosystem-efficiency
  - remote-sensing-limitations-and-uncertainty
_bodyHash: c3125b3f
pillar: earth-observation-and-remote-sensing-explained
---

[Earth observation](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) mostly measures structure, and vegetation indices are the clearest case: they measure how green a surface is. That is a proxy for how much photosynthetic machinery is present, and a poor proxy for whether it is running. A drought-stressed canopy stays green for weeks after it has stopped fixing carbon, which is the standing limitation of [NDVI](/en/ecology/earth-observation/ndvi-explained) and of every index like it.

Solar-induced chlorophyll fluorescence measures something different. It is the small fraction of absorbed light that chlorophyll re-emits instead of using, and because emission competes with photochemistry for the same excitations, it varies with what the light reactions are actually doing.

## The measurement problem

The signal is faint — a per cent or two of reflected radiance — and sits on top of a reflected solar spectrum thousands of times brighter. It is detectable only because the solar spectrum has narrow dark lines, the Fraunhofer lines, where incoming light is nearly absent; fluorescence fills them in slightly, and the fill-in is measurable with a spectrometer of sufficient resolution.

That requirement is why the instruments doing this were not built for it. A 2018 study in *Geophysical Research Letters* describes the situation: "The near-infrared band of the recently launched TROPOspheric Monitoring Instrument (TROPOMI) features the required spectral resolution and signal-to-noise ratio to retrieve SIF in a spectral range devoid of atmospheric absorption features."

TROPOMI was designed to monitor atmospheric trace gases. The fluorescence retrieval is a by-product of the spectral resolution needed for that job.

## What the instruments deliver

The resolution gain over earlier sensors is large. The same paper reports "a substantially improved spatio-temporal resolution (up to 7 km × 3.5 km pixels with daily revisit), representing a step change in SIF remote sensing capabilities."

Daily global coverage at a few kilometres is a different kind of dataset from sparse sampling, and it makes seasonal and event-scale questions tractable — the onset of spring uptake, the response to a heatwave, the timing of harvest.

## The agreement that makes it credible

An unfamiliar measurement from a single instrument is a candidate for artefact. The paper's validation is a comparison with an independent sensor: "A first inter-sensor comparison with OCO-2 (Orbiting Carbon Observatory-2) SIF shows excellent agreement, underscoring the high quality of TROPOMI's SIF retrievals and the notable radiometric performance of the instrument."

Two instruments with different optics, different orbits and different primary missions producing the same field is the strongest available evidence that the field is real rather than an instrumental signature. It is the same argument as [cross-calibration in any long record](/en/ecology/earth-observation/sensor-calibration-and-record-continuity), applied at a single point in time rather than across an archive.

## The caveat the authors put in the abstract

The paper does not present the result as straightforward: "However, interpretation requires caution, as the broad range of viewing-illumination geometries covered by TROPOMI's 2600 km wide swath needs to be taken into account."

A wide swath means the same surface is seen from many angles across a scene, and fluorescence emission is not isotropic — how much reaches the sensor depends on the geometry of the canopy relative to the sun and the sensor. A raw retrieval therefore mixes a physiological signal with a geometric one, and separating them is a modelling step rather than a measurement.

## What it is and is not evidence for

**It is a light-reaction signal.** Fluorescence tracks electron transport, which is upstream of carbon fixation. Under conditions where the two decouple — stomatal closure limiting CO₂ supply while light absorption continues — the relationship between fluorescence and carbon uptake changes.

**Its relation to productivity is empirical, not derived.** The link to gross [primary production](/en/ecology/ecosystems/primary-production-and-energy-flow) is established by correlation against flux-tower measurements, and correlation coefficients from those comparisons are properties of the site network used, not constants.

**It complements rather than replaces greenness.** Structure and physiology are different variables and both are needed. The value of fluorescence is precisely that it is not a measure of how much vegetation is there, which is what everything else already measures.

## Sources

1. **Geophysical Research Letters (PMC)** — [Global retrievals of solar induced chlorophyll fluorescence with TROPOMI: first results and inter-sensor comparison to OCO-2](https://pmc.ncbi.nlm.nih.gov/articles/PMC7580822/). The spectral requirement, the 7 km × 3.5 km daily resolution, the OCO-2 agreement, and the viewing-geometry caveat.
2. **Photosynthesis Research (PMC)** — [Light-harvesting in photosystem I](https://pmc.ncbi.nlm.nih.gov/articles/PMC3825136/). Why fluorescence is a small remainder and why it competes with photochemistry.
3. **USGS** — [Landsat Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2). The calibration practice that underpins any claim of inter-sensor agreement.
