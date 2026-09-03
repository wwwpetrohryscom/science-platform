---
title: What is remote sensing? Measuring the planet without touching it
excerpt: Remote sensing means measuring a surface from a distance by recording the radiation it reflects or emits. This explains the physics — passive and active sensors, the spectral bands, and the four kinds of resolution — that make satellite measurement of the environment possible.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - remote-sensing
  - earth-observation
  - satellites
  - fundamentals
related:
  - landsat-program-explained
  - sentinel-satellites-explained
  - earth-observation-data-products
_bodyHash: 211c9f02
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
---

[Remote sensing](/en/glossary/remote-sensing) is the practice of acquiring information about an object or area without touching it, by measuring the electromagnetic radiation the surface reflects or emits. A sensor records that radiation in defined wavelength bands and stores a value for each location, and everything we learn about the ground — what is growing, what is wet, what is warm — is inferred from those values. This primer covers the physics that makes such measurement possible; the wider context sits in our [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) hub.

## What a sensor actually records

A remote sensor does not capture meaning directly. It captures radiation. For each point it observes, the instrument measures how much energy arrives within particular ranges of the [electromagnetic spectrum](https://www.earthdata.nasa.gov/) and converts that into a stored number. The result is a grid of pixels, each holding one or more measured values, and the science begins only when those numbers are interpreted.

This is a useful distinction to hold onto. When an image appears to show a forest, a flood, or a city, the instrument has not recognised any of those things. It has recorded radiation, and the categories are conclusions drawn afterward from patterns in the recorded values. Keeping the measurement separate from the interpretation is part of what makes remote sensing a quantitative discipline rather than photography from a great height.

## Passive and active sensors

Instruments fall into two families according to where their energy comes from. Passive sensors record radiation that is already available in the environment. Most often this is sunlight reflected by the surface, measured across the visible, near-infrared, and shortwave-infrared ranges, or it is thermal-infrared radiation that the surface itself emits because it has a temperature. Because passive optical instruments depend on sunlight, they generally need daylight and a clear view to work.

Active sensors instead supply their own energy and measure what returns. Radar instruments emit microwave pulses, and lidar instruments emit laser pulses; both time and characterise the signal that bounces back. This independence from sunlight has practical consequences, as the [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) explains in its sensor primers: active systems can operate at night, and radar in particular can see through cloud, which optical sensors cannot. The trade-off is that active instruments are more complex and interpret a fundamentally different kind of return signal.

## Spectral signatures and the bands of light

The reason different surfaces can be told apart is that each interacts with radiation in its own way across wavelengths. This pattern is a surface's [spectral signature](/en/glossary/spectral-signature) — the particular fingerprint of how strongly it reflects or absorbs light at each part of the spectrum. By measuring several bands rather than one, a sensor can compare values across wavelengths and distinguish materials that might look identical to the eye.

Healthy vegetation is the classic example. Chlorophyll absorbs red light strongly, while leaf structure reflects near-infrared light strongly, so vegetation appears dark in the red band yet bright in the near-infrared. That contrast is the foundation of vegetation indices such as [NDVI](/en/ecology/earth-observation/ndvi-explained), which combine red and near-infrared measurements. The bands used in Earth observation span the visible, near-infrared, shortwave infrared, thermal infrared, and microwave regions, and the [USGS](https://www.usgs.gov/landsat-missions) documents how spectral bands map to specific surface properties. The longest of these wavelengths, the microwaves used by radar, are what allow active systems to work through cloud cover.

## The four kinds of resolution

How well a sensor performs is described by four separate resolutions, and they are worth keeping distinct. Spatial resolution is the size of the area each pixel represents on the ground, which sets how small a feature can be resolved. Spectral resolution refers to the number of bands a sensor measures and how narrow each one is, which governs how finely surfaces can be told apart. Temporal resolution is how often the sensor revisits the same place, which determines how quickly change can be tracked. Radiometric resolution describes how finely the instrument distinguishes levels of brightness within a band.

These four rarely improve together. Gathering more light to sharpen one property often means giving up another, so designing an instrument means deciding which resolutions matter most for its purpose. A system built for fine spatial detail may revisit a site less often; one built for frequent global coverage may record coarser pixels. There is no single configuration that maximises all four at once, and matching a sensor to a question means understanding these trade-offs.

## From radiation to a usable measurement

Turning recorded radiation into something a scientist can compare across time and place takes calibration. For optical instruments, the calibrated quantity is surface [reflectance](/en/glossary/reflectance): the fraction of incoming light a surface returns in each band, corrected so that values mean the same thing from one scene to the next. Reflectance is stored as a raster — a grid of pixels — and that consistent, gridded form is what lets measurements be stacked, differenced, and analysed quantitatively. The peer-reviewed methods behind these steps are the subject of journals such as [Remote Sensing](https://www.mdpi.com/journal/remotesensing).

These sensors ride on more than one kind of platform. Satellites provide repeated, wide-area coverage; aircraft offer flexible, higher-detail surveys; and drones bring close-range observation over small areas. The same physical principles apply at every altitude, and the specific instruments — the [Landsat program](/en/ecology/earth-observation/landsat-program-explained) record and the [Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained) of the Copernicus programme among them — are covered in their own articles, where resolutions and band details belong.

## Limits and sources of uncertainty

Because remote sensing infers surface conditions rather than measuring them directly, every product carries uncertainty that should be stated rather than assumed away. A pixel reports an average over its whole footprint, so features smaller than that footprint, or mixtures of different surfaces within one pixel, blur together. Passive optical sensors are interrupted by cloud and depend on illumination, which limits how often a clear view is available. Spectral signatures themselves vary with conditions — moisture, viewing angle, and the state of the surface all shift the recorded values — so the same material can read differently from one scene to the next.

None of this undermines the method; it defines how it should be read. Calibration reduces some of these effects but cannot remove them, and interpretation always rests on assumptions about how surfaces behave. The reliable way to use remote sensing is to treat each measurement as an estimate with a known footprint, a known set of conditions, and a stated margin of doubt, and to confirm conclusions against independent observations where the stakes warrant it.

## Sources

1. **NASA Earthdata** — [remote sensing basics](https://www.earthdata.nasa.gov/). NASA Earth-science data and remote-sensing concepts.
1. **NASA Earth Observatory** — [how sensors see](https://science.nasa.gov/earth/earth-observatory/). Explainers on reflected and emitted radiation.
1. **USGS** — [remote sensing](https://www.usgs.gov/landsat-missions). Sensor and spectral-band fundamentals.
1. **Remote Sensing (journal)** — [methods](https://www.mdpi.com/journal/remotesensing). Peer-reviewed remote-sensing methods.
