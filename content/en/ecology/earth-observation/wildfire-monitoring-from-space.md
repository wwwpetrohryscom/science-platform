---
title: 'Wildfire monitoring from space: active fires and burned area'
excerpt: Satellites detect wildfires in two ways — spotting the heat of active flames and mapping the scar they leave behind. This explains the thermal and reflectance methods, the near-real-time systems built on them, and why some fires are still missed from orbit.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - wildfire
  - fire-monitoring
  - remote-sensing
  - hazards
related:
  - modis-earth-observation-system
  - drought-monitoring-systems
  - satellite-deforestation-monitoring
_bodyHash: b6bfc133
---

Satellites watch wildfire in two complementary ways: they sense the heat of flames while a fire is burning, and they map the darkened scar once it has passed. Each approach reads a different signal, on a different clock, and each has its own blind spots. This piece explains the thermal and reflectance methods behind them, the near-real-time systems built on those methods, and why some fires still go undetected from orbit.

## Two signals, two methods

A satellite never records "wildfire" as such. It measures radiation leaving the surface, and a fire reveals itself through two distinct changes in that radiation. The first is heat. Active flames are far hotter than their surroundings, and that contrast shows up strongly in thermal and mid-infrared wavelengths, allowing an instrument to flag the burning front against a cooler background. The second is colour, in a broad sense: once vegetation has been charred or removed, the ground reflects sunlight differently than the living canopy did before.

These two signals support two jobs. Sensing heat answers where a fire is burning right now. Sensing the change in surface [reflectance](/en/glossary/reflectance) answers where a fire has already been. Both are applications of the same underlying field of [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained), and both rely on repeated, calibrated observation of the planet's surface.

## Detecting active fires from their heat

Active-fire detection looks for the intense thermal emission of flames. Because a fire is so much hotter than nearby unburned land, mid-infrared and thermal bands register that excess energy even when the burning area is small relative to a satellite pixel. The [MODIS](/en/glossary/modis) and VIIRS instruments provide frequent active-fire detections of this kind, and their repeat coverage is what makes a usable, regularly refreshed picture of ongoing fire possible.

For these detections to support emergency response, they have to arrive quickly. NASA's Fire Information for Resource Management System (FIRMS) distributes active-fire detections in near-real time, putting locations into the hands of analysts and responders for situational awareness rather than weeks later ([NASA Earthdata](https://www.earthdata.nasa.gov/)). The instruments behind these feeds are described further in our note on [the MODIS system](/en/ecology/earth-observation/modis-earth-observation-system), one of the long-running sources of fire observations from orbit.

## Mapping the burned area afterwards

The second method works after the flames are out. Where a fire has charred or stripped the vegetation, the surface reflects light differently from the unburned land around it, and comparing imagery from before and after reveals the extent of the burn scar. This is a change-detection task: the analysis looks for where reflectance has shifted in the characteristic way a burn produces.

Several data streams feed this kind of mapping. MODIS, Sentinel-2, and Copernicus products are all used to map burn scars and estimate burned area ([NASA Earth Observatory](https://earthobservatory.nasa.gov/)). Active-fire and burned-area mapping are complementary rather than interchangeable. One tells responders where to act while an event unfolds; the other delivers a more complete account of how much land ultimately burned, once the fire is no longer hot enough to detect from its heat alone.

## Smoke, emissions, and regional services

Fire produces more than flame and scar. Smoke and the gases released by combustion are tracked separately, by atmospheric services rather than by the surface-mapping systems above. The Copernicus Atmosphere Monitoring Service follows smoke and fire emissions as part of its broader watch on air quality ([Copernicus](https://www.copernicus.eu/en)), a different observational problem from locating the fire front or outlining the burn.

Regional coordination adds another layer. In Europe, the Joint Research Centre operates the European Forest Fire Information System, drawing fire information together for the continent ([European Commission JRC](https://joint-research-centre.ec.europa.eu/)). Taken together, NASA, Copernicus, JRC, and NOAA maintain overlapping systems that observe fire from different angles — active heat, burn scar, smoke plume, and emissions — so that no single sensor or service has to carry the whole task.

## Why some fires are still missed

Fire monitoring from space is informative, but it is not complete, and the gaps are worth stating plainly. The most common obstacle is obscuration: thick smoke and cloud can hide a fire from optical and thermal sensors, so a fire that is plainly burning on the ground may not register cleanly from above until the air clears.

Size and timing matter as well. Small, cool, or short-lived fires can fall below an instrument's detection limits, and a fire that ignites and dies between satellite overpasses can be missed entirely, with no overpass positioned to catch it. These limits sit alongside the broader interpretive cautions that apply across drought and vegetation work — the same care taken in [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems), where surface conditions are inferred rather than measured directly.

Two further error types are routinely measured during validation. Omission errors are real fires that the system failed to flag; commission errors are false detections, where a hot industrial source can be mistaken for a wildfire. Both are quantified when detections are checked against independent reference data, the same validation discipline applied in [satellite deforestation monitoring](/en/ecology/earth-observation/satellite-deforestation-monitoring). None of this makes the observations unreliable; it means a detection record should be read together with the conditions and the known error rates that produced it.

## Sources

1. **NASA Earthdata** — [FIRMS active fire data](https://www.earthdata.nasa.gov/). Near-real-time active-fire detections.
1. **NASA Earth Observatory** — [fires from space](https://earthobservatory.nasa.gov/). How active fire and burned area are observed.
1. **Copernicus** — [fire monitoring](https://www.copernicus.eu/en). Atmosphere and emergency fire services.
1. **European Commission JRC** — [EFFIS](https://joint-research-centre.ec.europa.eu/). European Forest Fire Information System.
