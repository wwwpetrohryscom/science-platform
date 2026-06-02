---
title: 'NDVI explained: the vegetation index read from red and near-infrared light'
excerpt: 'NDVI is the most widely used satellite vegetation index, built from the contrast between the red light plants absorb and the near-infrared they reflect. This explains the formula, the −1 to +1 range, what the values mean, and where the index breaks down.'
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - ndvi
  - vegetation-indices
  - remote-sensing
  - monitoring
related:
  - vegetation-indices-and-monitoring
  - modis-earth-observation-system
  - drought-monitoring-systems
---

When a satellite looks at a green field, it does not see "vegetation" directly. It records how much light each patch of ground reflects in separate wavelength bands, and the condition of the plants has to be inferred from those numbers. [NDVI](/en/glossary/ndvi), the Normalised Difference Vegetation Index, is the simplest and most widely used way to make that inference, and it sits within the broader field of [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained).

## The physics behind the index

NDVI works because of how leaves interact with sunlight. Chlorophyll in healthy green vegetation strongly absorbs visible red light, using it to drive photosynthesis, so little red is returned to the sensor. The internal cell structure of the same leaves strongly reflects near-infrared light, which the human eye cannot see. The result is a pronounced contrast: low [reflectance](/en/glossary/reflectance) in the red band, high reflectance in the near-infrared. The larger that gap, the more dense and vigorous the vegetation tends to be. Stressed, sparse, or senescent plants reflect more red and less near-infrared, narrowing the contrast. NDVI is simply a way of putting a number on that difference, as the NASA Earth Observatory [measuring vegetation](https://earthobservatory.nasa.gov/) explainer describes.

## The formula and what it does

The index is defined as a normalised difference between the two bands:

NDVI = (NIR − Red) / (NIR + Red)

Here NIR is near-infrared reflectance and Red is red reflectance. Dividing the difference by the sum is what makes the index "normalised": it scales the result into a fixed range of −1 to +1, and it partly cancels out variations in overall brightness, such as those caused by changing illumination or terrain slope. Because the output is bounded the same way everywhere, values from different scenes and sensors can be compared on a common footing. NDVI is produced today from many instruments, including the surface-reflectance products documented by the [USGS](https://www.usgs.gov/landsat-missions) for the Landsat record.

## Reading the values

The numbers map onto surface types in a consistent, if approximate, way. Dense, healthy vegetation typically returns high values, roughly 0.6 to 0.9. Sparse or stressed plant cover produces lower readings, and bare soil generally sits near 0.1 to 0.2. Surfaces with no living vegetation at all — open water, snow, and cloud — give values near zero or below it, sometimes negative. These bands are guidance rather than fixed cut-offs: the exact thresholds shift with the sensor, the atmosphere, the viewing geometry, and the season. For that reason NDVI is most reliable as a relative measure, comparing one place or one date against another, rather than as an absolute statement about a single pixel. Documentation for these products is maintained through resources such as NASA Earthdata's [vegetation indices](https://www.earthdata.nasa.gov/) pages.

## How NDVI is used in practice

The index was developed in the 1970s using data from the early Landsat satellites, then known as ERTS, and it has remained in use ever since because it is straightforward to compute and easy to interpret. Its main value comes not from any one image but from sequences of images over time. By repeating the calculation through the year, analysts can follow seasonal phenology — the green-up and senescence of vegetation — and detect departures from the normal pattern. A field that greens later or browns earlier than usual stands out against its own history. This makes NDVI a building block for crop monitoring and for [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems), where a sustained drop relative to past seasons can flag developing stress. The same multi-date approach connects NDVI to [remote sensing for biodiversity monitoring](/en/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring), where vegetation structure and productivity inform habitat assessments. Coarse-resolution daily imagery, such as that from [the MODIS system](/en/ecology/earth-observation/modis-earth-observation-system), supports continental time series of this kind.

## Limitations and uncertainty

NDVI is useful precisely because it is simple, but that simplicity carries known weaknesses that have to be stated rather than hidden. The most important is saturation: once vegetation becomes very dense, the index stops rising even as biomass continues to increase, so it loses sensitivity in places such as closed forest canopies. NDVI is also affected by the soil visible between plants, because a bright or dark background changes the reflectance the sensor records, and by the atmosphere, which scatters and absorbs light before it reaches orbit. Differences in viewing and illumination angle add further noise. These limitations are not failures of the method so much as the reasons other indices were created; the Enhanced Vegetation Index, for instance, was designed to reduce saturation and soil and atmospheric effects. NDVI therefore belongs to [the wider family of vegetation indices](/en/ecology/earth-observation/vegetation-indices-and-monitoring), each chosen to match the surface and question at hand, and ongoing peer-reviewed work continues to refine them, as collected in the journal [Remote Sensing](https://www.mdpi.com/journal/remotesensing). Read with its limits in mind, and as a trend rather than a snapshot, NDVI remains a dependable first measure of vegetation condition.

## Sources

1. **NASA Earth Observatory** — [measuring vegetation](https://earthobservatory.nasa.gov/). NDVI formula, interpretation, and history.
1. **NASA Earthdata** — [vegetation indices](https://www.earthdata.nasa.gov/). NDVI products and documentation.
1. **USGS** — [Landsat vegetation indices](https://www.usgs.gov/landsat-missions). Surface-reflectance NDVI products.
1. **Remote Sensing (journal)** — [index research](https://www.mdpi.com/journal/remotesensing). Peer-reviewed work on vegetation indices.
