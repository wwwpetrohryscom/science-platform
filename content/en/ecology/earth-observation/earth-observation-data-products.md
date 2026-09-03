---
title: 'Earth observation data products: from raw signal to analysis-ready data'
metaTitle: 'Earth observation data: from raw signal to analysis-ready'
excerpt: A number recorded by a satellite is not yet science. This explains the processing levels that turn raw instrument data into geophysical measurements, what analysis-ready and surface-reflectance products are, and where the major open archives live.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - data-products
  - processing-levels
  - remote-sensing
  - earth-observation
related:
  - what-is-remote-sensing
  - land-cover-change-detection
  - copernicus-programme-explained
_bodyHash: 294c2a87
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
---

A value a satellite records is not yet a measurement of the planet; it is a raw signal that must be transformed before it carries scientific meaning. Earth-observation archives organise that transformation into a ladder of processing levels, each describing how far a product has been moved from the instrument's first reading. Understanding where a product sits on that ladder tells a user how much work has already been done, and how many assumptions already sit inside the number. For the wider context, see our [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) hub.

## What a processing level describes

Earth-observation data are organised by processing level, a shorthand for how far a product has been transformed from the raw signal. The convention runs from Level 0 to Level 4. Level 0 is raw instrument data, the unprocessed output of the sensor. Level 1 is calibrated, geolocated radiance: the recorded signal converted into physical units and placed correctly on the ground. Level 2 holds retrieved geophysical variables, such as surface reflectance, sea-surface temperature, or chlorophyll, derived from the calibrated signal.

The ladder continues upward. Level 3 takes those geophysical variables and resamples them onto a regular grid, often compositing several observations over time. Level 4 is output that combines observations with models, producing values that no single instrument measured directly. The same scene can therefore exist as several products at once, and the level label is the first thing that tells a user how much processing, and how many modelling choices, are already built into what they are reading. NASA's [EOSDIS](https://www.earthdata.nasa.gov/about/esdis/eosdis) documentation lays out this structure for its archive.

## Surface reflectance and analysis-ready data

Two product types are worth singling out because so much environmental work depends on them. Surface-reflectance products are Level 2 optical data that have been atmospherically corrected, removing the distorting effect of the atmosphere so that images recorded on different dates can be compared on equal terms. Without that correction, a change in apparent brightness between two scenes might reflect haze or sun angle rather than anything on the ground. The corrected quantity is [reflectance](/en/glossary/reflectance): the fraction of incoming light a surface returns in each band.

Analysis Ready Data, or ARD, go a step further toward convenience. These are products already calibrated, geolocated, and cloud-masked, so that a user can analyse a time series without performing those preparatory steps. The aim is to lower the barrier between an archive and an answer, letting researchers stack observations and look for change directly. The [USGS](https://www.usgs.gov/landsat-missions) provides Landsat in surface-reflectance and analysis-ready forms, and this kind of pre-processing is what makes routine work such as [land-cover change detection](/en/ecology/earth-observation/land-cover-change-detection) practical at scale.

## How a product carries its own provenance

A well-made data product does not arrive as a bare grid of values. It ships with metadata describing the sensor that recorded it, the processing it has undergone, and quality flags that mark which observations can be trusted. Many products also carry per-pixel uncertainty estimates or cloud masks, so that a user can see, location by location, where a reading is reliable and where it should be set aside.

This provenance is what lets a measurement be reused responsibly. Earth-observation data are usually stored as [raster data](/en/glossary/raster-data) — a grid of pixels — and the accompanying flags travel with that grid so the history of each value stays attached to it. Reading the metadata before the data is a habit worth keeping, because it states the assumptions a product was built on rather than leaving a user to guess them. The principles of how an instrument records a signal in the first place are covered in [what remote sensing is](/en/ecology/earth-observation/what-is-remote-sensing).

## Where the open archives live

Several public archives distribute these products at no cost, each with its own structure. NASA delivers Earth-science data through Earthdata and its EOSDIS archive centres, known as DAACs, which group holdings by discipline. The USGS maintains and serves the Landsat record through its own archive. The European Union's Copernicus programme distributes data from its Sentinel satellites openly, as the programme [overview](https://www.copernicus.eu/en) describes, and the details of that system are the subject of [the Copernicus programme](/en/ecology/earth-observation/copernicus-programme-explained).

Alongside these operational archives sits a different kind of resource: peer-reviewed reference datasets, published in journals such as [Earth System Science Data](https://earth-system-science-data.net/). Where an archive supplies a continuous stream of products, a published reference dataset has passed through formal review and is documented in a citable paper, which suits it to use as a benchmark. Knowing which kind of source a dataset comes from is part of judging how to rely on it.

## Weighing convenience against embedded assumptions

The processing ladder is a convenience, and like any convenience it carries a cost. Each step from raw signal to higher-level product introduces assumptions: calibration relies on a model of the instrument, atmospheric correction relies on a model of the atmosphere, and gridding relies on choices about how to resample and composite. None of these steps is arbitrary, but each one folds a decision into the values a user eventually reads.

This is why a higher-level product is not simply a better product. A Level 3 or Level 4 grid is easier to work with than raw radiance, yet it carries more embedded modelling, and the further a product sits from the instrument, the more of its content reflects processing choices rather than direct observation. The practical guidance is to match the level to the question: lean on analysis-ready and gridded products when convenience and comparability matter, and reach back toward lower levels when a study needs to inspect, or contest, the assumptions those higher products were built on. The quality flags and uncertainty layers that travel with a product exist precisely so this trade-off can be weighed rather than ignored.

## Sources

1. **NASA Earthdata** — [EOSDIS and data levels](https://www.earthdata.nasa.gov/about/esdis/eosdis). Processing levels and archive structure.
1. **USGS** — [Landsat data products](https://www.usgs.gov/landsat-missions). Surface-reflectance and analysis-ready products.
1. **Copernicus** — [Sentinel data](https://www.copernicus.eu/en). Open Sentinel data distribution.
1. **Earth System Science Data** — [reference datasets](https://earth-system-science-data.net/). Peer-reviewed Earth-system data publication.
