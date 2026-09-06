---
title: 'Radar remote sensing: seeing through cloud, and into canopy'
metaTitle: 'Radar remote sensing: bands, penetration and what SAR adds'
excerpt: Optical satellites stop at the first cloud and at nightfall. Radar does neither — and because its wavelengths are centimetres rather than micrometres, it responds to structure and moisture rather than to colour.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-06'
readingTime: 6
tags:
  - radar
  - synthetic-aperture-radar
  - remote-sensing
  - earth-observation
related:
  - earth-observation-and-remote-sensing-explained
  - what-is-remote-sensing
  - sentinel-satellites-explained
  - remote-sensing-limitations-and-uncertainty
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 1ac3c87c
---

Most of what a general audience pictures as satellite imagery is optical: a sensor collecting sunlight reflected from the surface, in wavelengths a human eye would broadly recognise. That approach has two hard constraints. It requires the sun, so it cannot observe at night, and it requires a clear line of sight, so it cannot observe through cloud. In the humid tropics — where deforestation, flooding and rice cultivation all need monitoring — the cloud constraint alone can remove most of the year.

Radar removes both, and in doing so changes what is being measured. The general architecture of optical Earth observation is set out in [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained); this article is about the alternative and what it substitutes.

## Active, not passive

A radar instrument supplies its own illumination. NASA's description is exact: "an instrument sends out a pulse of energy and then records the amount of that energy reflected back after it interacts with Earth." Because the source is on the spacecraft, the sun's position is irrelevant and the acquisition geometry is under the operator's control.

The wavelengths involved are centimetres rather than the fractions of a micrometre optical sensors use, and that is the deeper difference. At optical wavelengths the return is governed by the chemistry of the surface — pigment, mineralogy, water absorption bands. At radar wavelengths it is governed by geometry and by dielectric properties: how rough the surface is relative to the wavelength, how the scatterers are oriented, and how much liquid water is present. A radar image is not a photograph in an unfamiliar colour. It is a map of structure and moisture.

## The aperture problem, and the synthetic solution

Angular resolution for any aperture worsens as wavelength grows, which is why a centimetre-wavelength instrument would need an implausible antenna. NASA puts the number on it: to obtain 10-metre spatial resolution from orbit "you would need a radar antenna about 4,250 m long. (That's over 47 football fields!)"

Synthetic aperture radar solves this by exploiting the spacecraft's own motion. As the platform flies, a short physical antenna occupies a long succession of positions; combining "a sequence of acquisitions from a shorter antenna" reconstructs the response of a much larger one. The resolution is bought with signal processing rather than hardware, which is why SAR imagery arrives as a processing chain rather than as a picture, and why its artefacts — layover, foreshortening, speckle — are geometric rather than radiometric. The consequences of that for interpretation belong with the wider account of [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty).

## Bands, and what each one reaches

Wavelength determines penetration, and the standard bands are chosen accordingly:

| Band | Frequency | Wavelength | Typical use |
| --- | --- | --- | --- |
| X | 8–12 GHz | 3.8–2.4 cm | High-resolution urban monitoring, limited vegetation penetration |
| C | 4–8 GHz | 7.5–3.8 cm | Global mapping and change detection — the "SAR Workhorse" |
| L | 1–2 GHz | 30–15 cm | Deeper canopy penetration for biomass mapping |

The physical rule of thumb is that a wave interacts most strongly with objects comparable to its own wavelength. At X-band, a few centimetres, the return comes largely from leaves and the top of the canopy. At L-band the wavelength is long enough — NASA cites 23 cm — to "penetrate more deeply through a tree canopy and allows for more interaction between the radar signal and large branches and tree trunks." Since most of a forest's biomass is in trunks and large branches rather than foliage, L-band is the band with a physical claim on biomass; the measurement problem that remains is described in [measuring forest carbon](/en/ecology/forests/forest-carbon-measurement).

The same logic explains why L-band is used for soil: at 1–2 GHz the signal passes through moderate vegetation and responds to the dielectric constant of the soil surface, which is dominated by liquid water. That is the principle behind the microwave soil-moisture products discussed in [soil moisture and what a measurement covers](/en/ecology/soils/soil-moisture-and-what-a-measurement-covers) — although the mission described there uses passive microwave radiometry, detecting natural emission rather than transmitting a pulse.

## What radar is used for

Four applications follow directly from the physics.

**Flood mapping.** Calm open water is a specular reflector at radar wavelengths: it bounces the pulse away from the sensor and returns almost nothing, appearing dark and unambiguous. Floods also happen under cloud, which is exactly when optical sensors fail.

**Change detection under cloud.** Repeated acquisitions with identical geometry make clearing, logging and land-cover change detectable in places where an optical time series has too few clear scenes to work with — a problem quantified for optical deforestation monitoring in [satellite deforestation monitoring](/en/ecology/earth-observation/satellite-deforestation-monitoring).

**Structure and biomass.** Longer wavelengths interact with the woody skeleton of vegetation rather than its surface.

**Ground motion.** Because the instrument records the phase of the returned wave, not only its amplitude, differences in phase between two passes can be turned into displacement of the ground between them. This is the basis of interferometric SAR, and it underlies the measurement of subsidence discussed in [groundwater and aquifer depletion](/en/ecology/freshwater/groundwater-and-aquifer-depletion).

## What it does not solve

Radar's independence from cloud and sun is often over-read as independence from conditions generally. It is not.

The return depends on incidence angle, so images from different geometries are not directly comparable, and terrain relief distorts the geometry systematically. It depends on surface roughness at the scale of the wavelength, which means a wet ploughed field and a dry rough one can be hard to separate without ancillary data. It depends on moisture, which is an advantage when moisture is the target and a confounder when it is not — biomass retrieval has to contend with the fact that the same trunk returns differently wet and dry. And coherent imaging produces speckle, a multiplicative noise that has to be suppressed by averaging, trading resolution for radiometric stability.

The practical upshot is that radar and optical observations answer different questions and are strongest in combination: optical for composition and condition, radar for structure, moisture and continuity of coverage. Europe's operational pairing of the two is described in [the Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained). Its radar half is built "as a two-satellite constellation", each carrying "an advanced radar instrument to provide an all-weather, day-and-night supply of imagery of Earth's surface" from a 693 km orbit, and is used for ice sheets and glaciers, ground displacement from earthquakes, maritime traffic, flood detection and land-use change — a list that maps almost one-to-one onto the four capabilities above.

## Sources

1. **NASA Earthdata** — [What is synthetic aperture radar?](https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar). The active-sensing definition, the 4,250 m antenna required for 10 m resolution from a real aperture, the synthetic-aperture principle, the X-, C- and L-band frequency and wavelength ranges with their typical uses, and the 23 cm penetration statement for canopy and trunks.
2. **European Space Agency** — [Sentinel-1](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1). The two-satellite constellation design, the all-weather day-and-night radar imaging concept, the 693 km orbit, and the application list spanning ice sheets and glaciers, ground displacement from earthquakes, maritime traffic, flood detection and land-use change.
3. **NASA Earthdata** — [SMAP L-band radiometer](https://www.earthdata.nasa.gov/data/instruments/smap-l-band-radiometer). The 1–2 GHz frequency range and 30–15 cm wavelength range used for soil observation, and the passive-microwave contrast to active radar.
