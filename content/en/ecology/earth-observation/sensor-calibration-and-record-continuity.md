---
title: 'Sensor calibration and record continuity: how a fifty-year satellite archive stays comparable'
metaTitle: Sensor calibration and satellite record continuity
excerpt: A climate record assembled from successive satellites is only a record if the instruments agree. Keeping them agreeing means reprocessing the whole archive when the calibration improves — which is why the data you downloaded last year may not be the data available now.
type: expert
author: earth-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - calibration
  - remote-sensing
  - landsat
  - data-quality
related:
  - landsat-program-explained
  - remote-sensing-limitations-and-uncertainty
  - calibration-and-traceability
  - earth-observation-data-products
_bodyHash: c3d8f951
pillar: earth-observation-and-remote-sensing-explained
---

[Earth observation](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) promises records long enough to see climate in them, and no satellite lasts fifty years. A long Earth-observation record is therefore a splice: several instruments, each with its own optics, detectors and degradation history, stitched into something that is supposed to behave as one measurement. Whether the splice holds is a calibration question, and it is the question that decides whether an apparent trend is in the planet or in the hardware.

## What has to be held constant

Three things have to be transferred across an instrument change, and they fail in different ways.

**Radiometric response.** What digital number corresponds to what physical radiance. Detectors degrade, optics contaminate, and the relationship drifts over a mission's life, so a fixed conversion applied across a decade will manufacture a trend.

**Geometric registration.** Whether a pixel is where the file says it is. Small misregistration between eras turns a change-detection result into an artefact along every edge in the scene.

**Spectral response.** Which wavelengths a band actually integrates. Two instruments with nominally the same band are not measuring quite the same quantity, and indices computed from them are not directly comparable without adjustment.

## Reprocessing as normal practice

The consequence is that a long record is periodically rebuilt from the raw data rather than extended. The USGS states of Landsat Collection 2 that it applies "several radiometric calibration improvements for Landsat 5 Thematic Mapper (TM) and Landsat 8 Operational Land Imager (OLI) data", and that "all Landsat Level-1 data are consistently calibrated and processed and retain traceability of data quality provenance."

The geometric half is done by tying the archive to an external reference rather than to itself: "Re-baselining the Landsat 8 OLI Ground Control Points (GCPs) to the European Space Agency Copernicus Sentinel-2 Global Reference Image (GRI) improves the interoperability of the global Landsat archive spatially and temporally."

That sentence describes something worth noticing — one agency's archive being registered to another agency's reference image. Interoperability between independent programmes is not a courtesy; it is the only way a user can combine [Landsat](/en/ecology/earth-observation/landsat-program-explained) and Sentinel scenes in one analysis without introducing a systematic offset at the join.

## The consequence for anyone using the data

Reprocessing is the correct response to improved calibration, and it has a cost that users routinely absorb without noticing.

**Results are versioned.** An analysis run on Collection 1 and repeated on Collection 2 can differ, and the difference is not an error in either. Any published result that does not state the collection or processing version cannot be reproduced exactly, because the input is ambiguous.

**Trends can move.** Recalibration adjusts values across the whole archive, and the adjustment is not uniform in time — it is largest where the original calibration was weakest, which is usually the oldest data. A trend computed over the full record is therefore more sensitive to reprocessing than a recent difference is.

**Derived products lag.** Higher-level products built on Level-1 data have to be regenerated too, and they are not always regenerated at the same time, so a mixed pipeline can carry a mismatch between a reprocessed input and an un-reprocessed derivative.

## Where the residual uncertainty sits

Calibration transfers the physical quantity — radiance at the sensor — with good and quantified accuracy. What it does not transfer is the interpretation. The [step from a calibrated radiance to a geophysical variable](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) runs through atmospheric correction and a retrieval model, and those carry their own version history, their own assumptions, and in some cases their own discontinuities at instrument changes.

This is why the honest form of a satellite-derived trend states three things rather than one: the value, the uncertainty, and the processing version it came from. The first two are the ordinary content of [a traceable measurement](/en/physics/mechanics-waves/calibration-and-traceability); the third is what makes it a member of a series rather than an isolated reading.

## Sources

1. **USGS** — [Landsat Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2). Radiometric improvements, ground-control re-baselining to the Sentinel-2 reference image, and provenance traceability.
2. **NIST** — [Standard Reference Materials](https://www.nist.gov/srm). The general form of the problem calibration solves: making independent measurements compatible.
3. **BIPM / JCGM** — [Guides in metrology](https://www.bipm.org/en/committees/jc/jcgm/publications). The vocabulary and uncertainty framework a calibrated record is expressed in.
