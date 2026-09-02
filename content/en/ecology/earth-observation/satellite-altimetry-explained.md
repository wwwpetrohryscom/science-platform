---
title: 'Satellite altimetry explained: measuring sea level from orbit'
excerpt: Radar altimeters measure the height of the sea surface to within centimetres by timing a pulse to the water and back. This explains how altimetry works, the reference missions since 1992, what it measures beyond sea level, and the corrections it depends on.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - satellite-altimetry
  - sea-level
  - oceans
  - remote-sensing
related:
  - ocean-color-observations
  - sentinel-satellites-explained
  - remote-sensing-limitations-and-uncertainty
_bodyHash: d75d662f
---

A radar altimeter in orbit measures the height of the sea surface by aiming a pulse straight down and timing how long it takes to return. Combined with very precise knowledge of where the satellite itself is, that timing yields sea-surface height to within centimetres. This article describes how the technique works, the missions that built a continuous record, what altimetry measures besides sea level, and the corrections the measurement depends on.

## How a radar altimeter works

The principle is direct. The instrument sends a radar pulse downward toward the ocean and measures the round-trip time for the signal to reflect off the water and come back. Because the speed of the pulse is known, that travel time converts into a distance, or range, between the satellite and the surface below.

A range on its own is not yet a sea-surface height. The satellite is moving, and the height that matters is the position of the water relative to a fixed reference, not relative to the spacecraft. So the range is subtracted from the satellite's own altitude, which is why altimetry is as much an exercise in tracking the orbit as in timing a pulse. This combination of precise ranging and precise orbit knowledge is the core of [satellite altimetry](/en/glossary/satellite-altimetry), and it places the method firmly within the wider toolkit of [earth observation](/en/glossary/earth-observation).

## The reference record since 1992

The modern precise record began with TOPEX/Poseidon, a joint NASA and CNES mission launched in 1992. It established the measurement standard that later spacecraft were designed to continue. The Jason series followed in turn — Jason-1, then Jason-2, then Jason-3 — each overlapping with its predecessor so the record would not break. Sentinel-6 Michael Freilich, launched in 2020, carries the series forward today.

Keeping these missions linked into one continuous series is what makes the satellite measurement of global mean sea level possible. Over the satellite era, that record shows global mean sea level rising at roughly three to four millimetres per year. NASA maintains an overview of the [altimetry missions](https://science.nasa.gov/) and the sea-level record they produce, and the longer-term context, alongside tide-gauge measurements, is set out in the discussion of [sea-level rise indicators](/en/ecology/climate-change/sea-level-rise-indicators). For operational, near-real-time products built from these satellites, the Copernicus Marine Service distributes [sea-level data](https://marine.copernicus.eu/) used in forecasting and monitoring.

## What altimetry measures beyond sea level

Sea level is the most familiar product, but it is not the only one. The same height measurements reveal ocean surface topography — the gentle hills and valleys of the sea surface that mark out currents and eddies, since water piles up and drains away around these features. Mapping that topography is one of the main ways altimetry contributes to physical oceanography.

The shape of the returning pulse carries further information. The way the reflected signal spreads in time relates to the roughness of the surface, which gives significant wave height, while the strength of the return relates to wind speed near the surface. Specialised altimeters extend the technique to other targets: the elevation of ice sheets and sea ice, and the levels of inland water bodies such as lakes and large rivers. Many of these measurements complement other satellite methods, including the [ocean-colour observations](/en/ecology/earth-observation/ocean-color-observations) that track biology and sediment rather than height. ESA describes the European contribution to these [altimetry missions](https://www.esa.int/Applications/Observing_the_Earth) and their range of applications.

## Corrections: from raw range to sea-surface height

A raw range is not yet an accurate height, because several effects sit between the instrument and a usable number. The first is the orbit itself: precise orbit determination is needed so that the satellite's altitude is known well enough to subtract the range from it.

The second is the atmosphere. As the radar pulse travels down and back, it is slowed by the air it passes through, and water vapour is a particularly variable source of delay. Left uncorrected, this stretches the apparent range and biases the height. To account for it, the altimeter is paired with an onboard radiometer that measures the water vapour along the path, so the delay can be estimated and removed. These corrections are routine but essential; without them the centimetre-scale signal of interest would be lost in the noise. The broader role of such adjustments across satellite measurement is discussed in the overview of [the Sentinel satellites](/en/ecology/earth-observation/sentinel-satellites-explained), whose fleet includes an altimetry mission.

## Uncertainty and limitations

No measurement of this kind is exact, and being clear about the error sources is part of using it responsibly. Uncertainty enters through the orbit determination, through the atmospheric corrections, and through slow instrument drift over a mission's lifetime. These are managed rather than eliminated, and each contributes to the final budget.

Geometry adds its own limits. Near coastlines the radar footprint can include land as well as water, which contaminates the return and degrades the measurement just where many users would most like it. And because no single satellite lasts indefinitely, a reliable multi-decade trend depends on careful overlap and cross-calibration between successive missions, so that a change of spacecraft does not masquerade as a change in the ocean. This is why the deliberate mission-to-mission handover described above matters as much as any individual instrument. NOAA's discussion of [sea level](https://www.climate.gov/) places the satellite record alongside tide gauges, and the general principles behind these caveats are treated in the guide to [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). For the wider family of techniques that altimetry belongs to, see the cluster overview of [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained).

## Sources

1. **NASA** — [sea level and altimetry](https://science.nasa.gov/). Altimetry missions and the global sea-level record.
1. **NOAA** — [sea level](https://www.climate.gov/). Tide-gauge and satellite sea-level data.
1. **Copernicus Marine Service** — [sea-level products](https://marine.copernicus.eu/). Operational altimetry-based sea-level data.
1. **ESA** — [altimetry missions](https://www.esa.int/Applications/Observing_the_Earth). European altimetry satellites.
