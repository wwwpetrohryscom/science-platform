---
title: The limits of Earth observation are systematic, not random
excerpt: Cloud, canopy, depth and orbit geometry put the same variables out of reach on every pass. A gap that falls in the same place each time does not average away as more observations accumulate.
argument: What an orbiting sensor cannot resolve is fixed by physics and geometry, so the missing information is structured rather than noisy — concentrated under cloud, under canopy, below the surface and outside the covered latitudes. Structured gaps are filled by retrieval algorithms and ground networks, which means a great many published "satellite measurements" are partly model output, and should be read that way.
category: ecology
author: climate-research-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 9
tags:
  - earth-observation
  - remote-sensing
  - measurement-uncertainty
  - validation
  - satellite-data
related:
  - remote-sensing-limitations-and-uncertainty
  - earth-observation-data-products
  - forest-carbon-measurement
  - global-temperature-records-explained
_bodyHash: d42f6f26
---

Orbital sensors do not fail randomly. Where they fail is determined by wavelength, viewing geometry and orbit, which means the same information is missing in the same places on every pass. That distinction matters more than it sounds: random error shrinks as observations accumulate, and a structured absence does not. Adding twenty years of imagery over a persistently cloudy tropical basin produces twenty years of clear-sky images of that basin, not an unbiased record of it.

NASA's Earth Observatory collects the relevant figures in one place: one study, based on nearly a decade of satellite data, estimated that about 67 per cent of Earth's surface is typically covered by cloud, and other work puts completely clear sky at under 10 per cent of the time over the oceans and 30 per cent over land. The accompanying global cloud-fraction map, averaged from MODIS on the Aqua satellite between July 2002 and April 2015, shows where that cover concentrates — a band near the equator and two wider bands in the mid-latitudes. Optical and thermal instruments therefore sample a conditional world — the world on clear days — and the conditions that clear the sky are not independent of the variables being measured.

## The clear-sky world is a different world

The cleanest demonstration of this comes from thermal infrared. A study in the *Journal of Geophysical Research: Atmospheres* compared 17 years of land surface temperature from the Along-Track Scanning Radiometer series against station observations of 2 m air temperature. Night-time surface temperature, retrieved on a roughly 10 p.m. overpass, tracked minimum air temperature closely: a global median difference of 1.8 °C and an interquartile range of 3.8 °C. The 10 a.m. daytime retrieval sat almost on top of maximum air temperature in the median, at −0.1 °C, and was far looser around it — an interquartile range of 8.1 °C.

Two separate things are visible in those numbers. One is that skin temperature and air temperature are different physical quantities — the ground can run far hotter or colder than the air above it depending on insolation, vegetation cover and moisture. The other is that the comparison itself is asymmetric: the retrieved surface temperature is clear-sky only, while the station record is all-sky. Some of the spread is the sampling rule, not the instrument. Anyone using a thermal product as a proxy for air temperature inherits both problems, which is one reason the [instrumental temperature record](/en/ecology/climate-change/global-temperature-records-explained) is still built from surface stations rather than from orbit.

## Radar sees through cloud, and then stops seeing

Radar solves the cloud problem and introduces a different one. Backscatter increases with vegetation volume until the signal saturates, and the saturation point depends on wavelength. A review in *Frontiers in Forests and Global Change* reports typical saturation levels of 30 to 80 megagrams per hectare for X-band, 40 to 150 for L-band, and 150 to 300 for the much longer P-band. Above those levels the return stops responding to additional biomass, so a dense tropical forest and a much denser one look identical.

P-band sits at the top of that range, and it is the band ESA's Biomass mission carries — launched in April 2025 with a 12 m deployable antenna, the first P-band radar flown in space. Lidar attacks the same problem from a different direction: GEDI ranges the canopy directly at roughly 25 m footprints along eight beam transects. But GEDI samples rather than maps — the tracks leave gaps between them — and the instrument operates from the International Space Station, so its coverage runs only between 51.6° N and 51.6° S. Most of the boreal forest lies north of that limit. The practical consequences for [measuring forest carbon](/en/ecology/forests/forest-carbon-measurement) are direct: continuous biomass maps are built by extrapolating sampled lidar with saturating radar and cloud-limited optical data, and the uncertainty is largest exactly where the carbon is densest.

## Below the surface, almost everything is inference

Microwave emission comes from a shallow layer, so NASA's SMAP radiometer senses only the top few centimetres of soil. The root-zone moisture that agriculture and hydrology actually want arrives as a Level 4 product, posted on a 9 km grid and produced by assimilating SMAP L-band brightness temperatures into a land surface model. It is a good product. It is also, by construction, a model constrained by observation rather than an observation of the root zone.

The same holds for groundwater. Satellite gravimetry is the only technique that senses vertically integrated changes in terrestrial water storage, but a review in *Hydrology and Earth System Sciences* notes that GRACE and GRACE-FO are limited to a coarse spatial resolution of a few hundred kilometres and a monthly cadence, and that the retrieved signal is the sum of groundwater, soil moisture, snow and surface water. Splitting that total into compartments requires assimilating it into a hydrological model. Reports of [aquifer depletion](/en/ecology/freshwater/groundwater-and-aquifer-depletion) derived from gravimetry are therefore joint products of a gravity measurement and a model of everything else in the column — which is not a criticism, but is a different claim from "the satellite measured the groundwater".

## A retrieval is not a reading

NASA's own product taxonomy makes this explicit. Level 0 is raw instrument data; Level 1 is calibrated, geolocated radiance; Level 2 holds *derived geophysical variables*; Level 3 grids them; Level 4 is merged data or model output. Almost every number quoted in public as a satellite measurement is Level 2 or above, which means it is the output of a retrieval algorithm applied to radiance, with assumptions about atmosphere, surface emissivity, aerosol and view angle baked in.

Those assumptions get revised. The Landsat archive, which has acquired imagery continuously since 1972, was reorganised in 2016 into tiered Collections precisely so that time-series analysis would rest on a consistently processed archive — and reprocessing changes values. Comparing a figure from one collection or product version against a figure from another can manufacture a trend out of a change in the algorithm, which is why the versioning conventions described in the guide to [Earth-observation data products](/en/ecology/earth-observation/earth-observation-data-products) are not housekeeping. The version, the product and the processing level are part of the number.

## What orbit does that no ground network can

None of this makes remote sensing a weak instrument, and it is worth being clear that the people who build these products do not dispute that the gaps are there. There is no live scientific argument about whether cloud blocks thermal infrared or whether backscatter saturates. The disagreement, such as it is, sits downstream: how much of the retrieval's interpretive machinery should travel with a number once it leaves the mission documentation and enters a policy brief. Four points cut against reading this page as a case for scepticism, and they are serious.

First, the limits described here are not hidden. They are documented in the mission specifications, quantified in the validation literature, and reported alongside the products; they are constraints being managed rather than errors being concealed. Second, the alternative has its own geography. Ground networks are concentrated where instruments are cheap to install and maintain, they are sparse across much of the tropics and the deep ocean, and in several domains they are contracting — an argument developed in the companion piece on [thinning environmental monitoring networks](/en/insight/environmental-monitoring-networks-are-thinning). Orbital coverage is the only observation that is uniform by construction. Third, a modelled product is not an inferior product: assimilating an observation into a physical model is how numerical weather prediction works, and it is the correct way to combine partial information, provided the user knows which parts are which. And fourth, the authors who quantified the surface-versus-air temperature spread concluded in favour of *more* use of satellite thermal data in climate science, not less — because the global anomaly series from the two independent systems agree closely even where the absolute values differ.

## What closes the gaps, and what does not

More orbital data does not close a structured gap; independent measurement of a different kind does. Ground networks exist for exactly this, and their value is calibration rather than coverage: AERONET, the ground-based aerosol network run by NASA with international partners, has provided more than 25 years of spectral aerosol optical depth whose stated purposes include the validation of satellite retrievals. Flux towers, radiosondes, tide gauges and profiling floats play the same role in their own domains: small in number, and load-bearing for the products built above them.

Record length is the constraint that no amount of ground truth fixes. The Landsat series is the exception at more than five decades; a great many widely used products are one or two decades old, which is short relative to the variability of the systems they observe. That is a limit on what can be detected, not on what is happening, and it is a separate issue from the accuracy of any single retrieval — one taken up in the article on [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty).

For any claim resting on Earth observation, four questions establish what is actually being asserted. Which processing level is the number — radiance, retrieval, gridded composite or assimilated model output? Under what sampling condition was it collected, and is that condition correlated with the variable? Does the sensor physically respond to the quantity claimed, or to a proxy that saturates or stops at a depth? And what independent ground data constrain it? A claim that survives all four is usually solid. A claim built purely on orbital data, with none of the four answered, is usually reporting a model without saying so.

## Sources

1. **NASA Earth Observatory** — [Cloudy Earth](https://science.nasa.gov/earth/earth-observatory/cloudy-earth-85843/). The summarised global cloud fraction of about 67 per cent and the clear-sky frequencies over land and ocean, plus the MODIS/Aqua cloud-fraction map for July 2002 to April 2015.
2. **Journal of Geophysical Research: Atmospheres** — [A spatiotemporal analysis of the relationship between near-surface air temperature and satellite land surface temperatures](https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2017JD026880). Median differences and interquartile ranges between land surface temperature and 2 m air temperature over 17 years.
3. **Frontiers in Forests and Global Change** — [Combining L-band synthetic aperture radar backscatter and TanDEM-X canopy height for forest aboveground biomass estimation](https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2022.918408/full). Reported saturation levels for X-, L- and P-band backscatter against biomass.
4. **European Space Agency** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). Launch date, orbit and the first P-band radar in space.
5. **NASA Earthdata** — [GEDI L2B canopy cover and vertical profile metrics, global footprint level V002](https://www.earthdata.nasa.gov/data/catalog/lpcloud-gedi02-b-002). Footprint size, eight-beam transects and the 51.6° latitude coverage limit.
6. **NSIDC** — [SMAP L4 global 3-hourly surface and root zone soil moisture geophysical data](https://nsidc.org/data/spl4smgp/versions/8). Assimilation of L-band brightness temperature into a land surface model, and the 9 km grid.
7. **Hydrology and Earth System Sciences** — [A review of current best practices and future directions in assimilating GRACE/-FO terrestrial water storage data into numerical models](https://hess.copernicus.org/articles/30/985/2026/). Coarse resolution, monthly cadence, and the need for a model to separate storage compartments.
8. **NASA Earthdata** — [Data processing levels](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels). Definitions of Levels 0 to 4, including Level 2 derived geophysical variables and Level 4 model output.
9. **USGS** — [Landsat satellite missions](https://www.usgs.gov/landsat-missions/landsat-satellite-missions). Continuous acquisition since 1972 and the 2016 reorganisation of the archive into Collections.
10. **NASA AERONET** — [Aerosol Robotic Network](https://aeronet.gsfc.nasa.gov/). More than 25 years of ground-based aerosol measurements used to validate satellite retrievals.
