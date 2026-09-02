---
title: 'Earth observation and remote sensing explained: how the planet is measured from space'
excerpt: Satellites have become the instruments that let scientists watch the whole planet at once. This explains how Earth observation works — from photons to calibrated data products — what it measures across climate and ecosystems, and where its limits lie.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-08-29'
readingTime: 12
tags:
  - earth-observation
  - remote-sensing
  - satellites
  - environmental-monitoring
related:
  - what-is-remote-sensing
  - landsat-program-explained
  - earth-observation-data-products
  - remote-sensing-limitations-and-uncertainty
_bodyHash: 2fc4b30c
---

Most of what we know about how the planet is changing — shrinking ice, advancing deforestation, warming seas, greening and browning land — is now measured, at least in part, from space. [Earth observation](/en/glossary/earth-observation) is the practice of gathering information about the planet's land, ocean, atmosphere, and ice using sensors on satellites and aircraft. [Remote sensing](/en/glossary/remote-sensing) is the underlying technique: measuring something without touching it, by recording the radiation it reflects or emits.

This is the hub of EcoScienceHub's Earth-observation cluster, and it is deliberately a bridge. The same satellite measurements that track [climate indicators](/en/ecology/climate-change/climate-indicators-earth-system-monitoring) also underpin [biodiversity monitoring](/en/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health) and the study of [ecosystems](/en/ecology/ecosystems/what-is-an-ecosystem). This article explains how the measurements are made, what turns a raw signal into usable science, and why every satellite product carries uncertainty that has to be stated rather than hidden. The supporting articles linked throughout go deeper on each instrument and application.

## What remote sensing actually measures

A remote sensor does not photograph "deforestation" or "drought". It measures electromagnetic radiation in defined wavelength bands and records the value at each location as a number. Everything else — vegetation, water, fire, urban growth — is inferred from how surfaces interact with that radiation.

Two broad families of instrument do this. **Passive** sensors record naturally available radiation, almost always reflected sunlight or thermal infrared emitted by the surface; optical and thermal imagers such as those on Landsat and MODIS are passive. **Active** sensors supply their own energy and measure what returns — radar and lidar send a pulse and time the echo, which lets them see through cloud and at night and measure height directly. Each surface has a characteristic [spectral signature](/en/glossary/spectral-signature): the particular way it reflects across wavelengths. Healthy vegetation, for instance, absorbs red light and reflects strongly in the near-infrared, and that contrast is the basis of the vegetation indices discussed below.

The quantity a calibrated optical sensor ultimately reports is [reflectance](/en/glossary/reflectance) — the fraction of incoming light a surface returns in each band — stored as a grid of pixels, a form of [raster data](/en/glossary/raster-data). The resolution of that grid, and how often it is refreshed, are the first things that determine what a sensor can and cannot see.

## The satellite systems

No single satellite covers every need, so Earth observation relies on a fleet with complementary strengths. The [what is remote sensing](/en/ecology/earth-observation/what-is-remote-sensing) primer covers the physics; the workhorses themselves each have a dedicated article.

The joint NASA–USGS [Landsat program](/en/ecology/earth-observation/landsat-program-explained) has imaged the land surface continuously since 1972 at moderate (about 30-metre) resolution, the longest such record in existence. The European Union's [Copernicus programme](/en/ecology/earth-observation/copernicus-programme-explained) operates the [Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained), which add frequent revisits, radar imaging, and operational services. NASA's [MODIS instruments](/en/ecology/earth-observation/modis-earth-observation-system), and their VIIRS successors, trade spatial detail for near-daily global coverage that is ideal for tracking fast-moving change. Radar altimeters on a separate line of missions measure the height of the sea surface — the subject of the [satellite altimetry](/en/ecology/earth-observation/satellite-altimetry-explained) article. Choosing among them is a trade-off between spatial resolution, how often a place is revisited, and the wavelengths a sensor can measure; no instrument optimises all three at once.

## From photons to data products: the methodology

A number recorded by a sensor in orbit is not yet science. Turning it into a measurement of the surface is a defined processing chain, and the [Earth observation data products](/en/ecology/earth-observation/earth-observation-data-products) article walks through it in detail. The essential steps are these.

**Calibration.** The raw signal is converted to a physical radiance using the sensor's calibration, and corrected geometrically so each pixel sits at its true location on the ground.

**Atmospheric correction.** Between the surface and the satellite lies the atmosphere, which scatters and absorbs light. Correcting for it converts top-of-atmosphere radiance into surface reflectance — the step that makes images from different dates comparable.

**Processing levels.** Agencies label products by how far along this chain they sit, from raw instrument data (Level 0), through calibrated and geolocated radiance (Level 1) and retrieved geophysical variables such as surface temperature or reflectance (Level 2), to gridded, time-composited products (Level 3) and model-assimilated outputs (Level 4). Knowing a product's level tells a user how much processing — and how many assumptions — already sit inside the number.

**Derived indices and classification.** From surface reflectance, analysts compute indices and maps. The best known is [NDVI](/en/glossary/ndvi), the normalised difference vegetation index, explained in the [NDVI](/en/ecology/earth-observation/ndvi-explained) article and generalised in the [vegetation indices](/en/ecology/earth-observation/vegetation-indices-and-monitoring) piece. Classifying pixels into categories such as forest, water, or cropland produces [land cover](/en/glossary/land-cover) maps; comparing them over time is [land-cover change detection](/en/ecology/earth-observation/land-cover-change-detection).

## What Earth observation measures across the environment

On top of this processing chain sits a wide range of applications, and this is where the cluster connects to the rest of EcoScienceHub.

For the **land surface and biosphere**, satellites map vegetation condition, track [deforestation](/en/ecology/earth-observation/satellite-deforestation-monitoring), detect [wildfires and burned area from space](/en/ecology/earth-observation/wildfire-monitoring-from-space), and feed [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems). These same structural measurements underpin [remote sensing for biodiversity monitoring](/en/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring) and the mapping of [habitat fragmentation](/en/ecology/biodiversity/habitat-fragmentation-metrics).

For the **ocean**, [ocean-colour observations](/en/ecology/earth-observation/ocean-color-observations) estimate phytoplankton from the colour of the water, while altimetry tracks sea-surface height. For the **climate system**, Earth observation supplies many of the headline records: the satellite altimetry behind [sea-level rise](/en/ecology/climate-change/sea-level-rise-indicators), the sensors that monitor [greenhouse-gas concentrations](/en/ecology/climate-change/greenhouse-gas-concentrations-monitoring), and the imagery behind ice and temperature indicators. The point of the cluster is that these are not separate techniques but one measurement system pointed at different questions.

## Validation: why ground data still matters

A satellite product is only trusted once it has been checked against independent measurements. [Ground-truthing](/en/glossary/ground-truthing) — comparing a satellite estimate against field observations, instrumented towers, ships, or higher-resolution imagery — is how the relationship between a spectral signal and a real-world quantity is calibrated and its error quantified. Earth observation does not replace fieldwork; it extends it, and the two are designed to work together. A vegetation index calibrated against no ground data is a pattern, not yet a measurement.

## Open data and continuity

Two features of modern Earth observation are easy to overlook but central to its scientific value: open access and continuity. When the USGS opened the full Landsat archive for free public download in 2008, use of the data expanded sharply, because researchers could finally analyse long image stacks rather than buy scenes one at a time. The European Union built the Copernicus programme on the same principle — its Sentinel data are free and openly licensed — and NASA distributes its Earth-science archives openly through Earthdata. Open access is what makes independent verification and long-term studies possible.

Continuity matters just as much. A measurement is only an indicator of change if the same quantity is produced consistently across years and successive satellites, which is why agencies invest heavily in overlapping missions and cross-calibration so that one instrument's record can be joined to the next without a spurious jump. A gap in coverage, or an uncalibrated change of sensor, can masquerade as an environmental signal; sustaining the record is therefore a scientific task in its own right, not merely an operational one.

## Uncertainty

Every satellite measurement carries uncertainty, and authoritative providers report it rather than bury it.

**Resolution trade-offs.** Finer spatial detail usually means a narrower swath and less frequent revisits. A sensor that sees a place every day cannot also resolve individual trees; one that resolves field boundaries may revisit only every week or two. The right instrument depends on the question.

**The atmosphere and clouds.** Optical sensors cannot see the surface through cloud, so cloudy and tropical regions have systematic gaps. Residual atmospheric effects, aerosols, and haze add error even on clear days, which atmospheric correction reduces but never fully removes.

**Mixed pixels.** A single pixel often covers several surface types, so its value is a blend. A "forest" pixel may be part clearing; an estimate built from it inherits that ambiguity.

**Sensor and inter-mission differences.** Instruments degrade, orbits drift, and successive missions differ, so building a consistent long record requires careful cross-calibration. Apparent change can be an artefact of a sensor change rather than a change on the ground.

## Limitations: what satellites cannot do

Two limits are structural. First, remote sensing measures **physical and spectral properties, not the things themselves** — it sees canopy greenness, not plant species; thermal anomalies, not "fire" as such; water colour, not phytoplankton directly. The biological or social meaning is always an inference that needs validation. Second, the **archive sets the horizon**: a satellite record cannot describe conditions before its instruments existed, which is why the 1972 start of the continuous Landsat record, or the satellite-altimetry era beginning in the early 1990s, marks the practical baseline for many studies. For longer perspectives, satellite data must be joined to older records.

## What the observations are measuring toward

Continuity has a target as well as a rationale. The international community specifies which quantities must be sustained through the Essential Climate Variables: the Global Climate Observing System currently defines 55 of them across the atmosphere, ocean, and land domains, selected against relevance to characterising the climate system, technical feasibility of global observation, and cost effectiveness. Many are retrieved primarily or entirely from orbit — sea-surface temperature, sea level, sea ice, land cover, above-ground biomass, ocean colour, albedo, leaf area index — which is why mission continuity and ECV specification are the same conversation. The framework is set out in [Essential Climate Variables](/en/ecology/earth-systems/essential-climate-variables-explained), and the coupled system these variables collectively describe is the subject of the [Earth system science](/en/ecology/earth-systems/earth-system-science-explained) cluster.

## Source transparency

Every quantitative claim in this cluster is attributed to a named authority — NASA and NASA Earthdata, the USGS Landsat program, ESA and the European Union's Copernicus programme and its services, ECMWF, the European Commission's Joint Research Centre, NOAA, the WMO, and the FAO — or to peer-reviewed literature such as the journals *Remote Sensing* and *Earth System Science Data*. Citation hosts are checked against a curated registry when the site builds, so an unfamiliar or low-authority link is flagged before publication. Where a number is contested or version-dependent, the text says so.

## The rest of the cluster

The supporting articles take each piece further: [what is remote sensing](/en/ecology/earth-observation/what-is-remote-sensing), the [Landsat program](/en/ecology/earth-observation/landsat-program-explained), the [Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained), the [MODIS system](/en/ecology/earth-observation/modis-earth-observation-system), [NDVI](/en/ecology/earth-observation/ndvi-explained) and the wider family of [vegetation indices](/en/ecology/earth-observation/vegetation-indices-and-monitoring), [land-cover change detection](/en/ecology/earth-observation/land-cover-change-detection), [satellite deforestation monitoring](/en/ecology/earth-observation/satellite-deforestation-monitoring), [wildfire monitoring from space](/en/ecology/earth-observation/wildfire-monitoring-from-space), [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems), [ocean-colour observations](/en/ecology/earth-observation/ocean-color-observations), [satellite altimetry](/en/ecology/earth-observation/satellite-altimetry-explained), [Earth observation data products](/en/ecology/earth-observation/earth-observation-data-products), the [Copernicus programme](/en/ecology/earth-observation/copernicus-programme-explained), and a frank account of [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). Together they explain how the planet is watched from orbit, and how to read what the watching produces.

## Sources

1. **NASA Earthdata** — [Earth-science data and EOSDIS](https://www.earthdata.nasa.gov/). Gateway to NASA's Earth-observation archives and product-level documentation.
2. **NASA Earth Observatory** — [imagery and explainers](https://earthobservatory.nasa.gov/). Topic pages on how satellite measurements are made and used.
3. **USGS** — [Landsat missions](https://www.usgs.gov/landsat-missions). History, sensors, and the continuous land-surface record (with NASA).
4. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). European Earth-observation missions and instruments.
5. **Copernicus** — [EU Earth-observation programme](https://www.copernicus.eu/en). The Sentinels and the Copernicus services.
6. **ECMWF** — [reanalysis and Copernicus services](https://www.ecmwf.int/). Operates the Climate Change and Atmosphere Monitoring services.
7. **NOAA NESDIS** — [environmental satellites](https://www.nesdis.noaa.gov/). NOAA's operational satellites and data services.
8. **European Commission JRC** — [land, forest, and hazard monitoring](https://joint-research-centre.ec.europa.eu/). Operational EO-based products.
9. **WMO** — [global observing systems](https://wmo.int/). International standards for environmental observation.
10. **Remote Sensing (journal)** — [peer-reviewed methods](https://www.mdpi.com/journal/remotesensing). Sensor, algorithm, and application research.
11. **Earth System Science Data** — [reference datasets](https://earth-system-science-data.net/). Peer-reviewed Earth-system data publications.
