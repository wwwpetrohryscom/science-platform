---
title: 'The Sentinel satellites explained: the eyes of Copernicus'
excerpt: The Sentinel fleet is the satellite backbone of Europe’s Copernicus programme. This explains what each Sentinel family measures — radar, multispectral optical, ocean and land colour, atmospheric composition, and sea level — and why free, frequent data changed operational monitoring.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - sentinel
  - copernicus
  - earth-observation
  - satellites
related:
  - what-is-remote-sensing
  - copernicus-programme-explained
  - modis-earth-observation-system
_bodyHash: 70ca55ec
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
---

The Sentinels are the dedicated space component of the European Union's [Copernicus](https://www.copernicus.eu/en) programme, built and operated by the European Space Agency (ESA) on the EU's behalf. Each family carries a different kind of instrument, so the fleet as a whole measures land, ocean, ice, and the atmosphere rather than any single one. Their data are released free and under an open licence, which is part of why they became a fixture of operational monitoring.

## What the Sentinels are

A [Sentinel satellite](/en/glossary/sentinel-satellite) is not a general-purpose camera but a mission tuned to a specific measurement. Together the families cover several distinct domains of [earth observation](/en/glossary/earth-observation): imaging radar, multispectral optical imaging, ocean and land observation, atmospheric chemistry, and the precise height of the sea surface. ESA [builds and operates](https://www.esa.int/Applications/Observing_the_Earth) the satellites, while the European Commission directs Copernicus and the downstream services that turn the raw measurements into products.

For readers new to the underlying physics, the companion primer on [what remote sensing is](/en/ecology/earth-observation/what-is-remote-sensing) explains how sensors record reflected or emitted radiation, and the broader [Copernicus programme](/en/ecology/earth-observation/copernicus-programme-explained) article sets out how the missions and services fit together. This piece focuses on the satellites themselves and what each one is for.

## Radar and optical: Sentinel-1 and Sentinel-2

Sentinel-1 carries a C-band synthetic aperture radar (SAR). Because radar supplies its own energy, it images day or night and sees through cloud, which makes it well suited to land, ice, and maritime monitoring and to measuring slow ground motion. That all-weather capability is the main reason it complements the optical missions rather than duplicating them.

Sentinel-2 is the optical workhorse. It is a multispectral mission with 13 bands at 10-, 20-, and 60-metre resolution, the different scales reflecting what each band is designed to resolve. With two satellites in orbit — Sentinel-2A, launched in 2015, and Sentinel-2B, launched in 2017 — a given location is revisited roughly every five days. That cadence, paired with the open data policy, is what made Sentinel-2 a standard tool for vegetation and land monitoring.

## Ocean, atmosphere, and sea level

Three further families extend the fleet beyond land imaging. Sentinel-3 observes both ocean and land: ocean and land colour, sea- and land-surface temperature, and radar altimetry. Its ocean measurements feed the [Copernicus Marine Service](https://marine.copernicus.eu/), which turns them into products describing the state of the sea.

Sentinel-5P carries the TROPOMI instrument and looks at atmospheric composition, including gases such as nitrogen dioxide and ozone. Sentinel-6 — the Sentinel-6 Michael Freilich satellite, launched in 2020 — is a radar-altimetry reference mission that measures sea-surface height and continues the record begun by the earlier Jason series, keeping a long and consistent sea-level time series intact.

## How the data become usable

The instruments deliver calibrated measurements, but most users work with higher-level products rather than the raw signal. Operational organisations ingest Sentinel data into models and services: the [ECMWF](https://www.ecmwf.int/) runs several Copernicus services that draw on these inputs, and the marine and atmosphere services do the same in their own domains. The shared principle is that one mission's measurement becomes an input to a processing chain, not a finished map on its own.

This division of labour matters for interpretation. A Sentinel-2 scene reports reflectance in defined bands; a vegetation index, a land-cover classification, or a change map is derived from it downstream, with assumptions that the analyst should be able to inspect. The same holds for radar, ocean colour, and altimetry. Knowing which mission supplied a measurement, and how it was processed, is part of using the result responsibly. The Sentinels are also frequently combined with sensors outside Copernicus, such as NASA's [MODIS instruments](/en/ecology/earth-observation/modis-earth-observation-system), where near-daily coverage complements the finer spatial detail of the European optical missions.

## Limits and uncertainty

No single Sentinel sees everything, and that is by design. The optical missions, Sentinel-2 and the optical channels of Sentinel-3, are limited by cloud: where skies are persistently overcast, usable observations are sparse regardless of how often a satellite passes over. Radar avoids that constraint but answers different questions, so cloud cover shapes which mission is useful where.

Because each mission is specialised, a full picture of a region usually needs several combined rather than any one alone. Revisit gaps also remain between overpasses; even a five-day cycle leaves intervals during which a fast-moving event can be missed or only partly captured. None of this undermines the fleet's value, but it means Sentinel products carry uncertainty that should be stated rather than assumed away, and conclusions are firmest when independent measurements point the same way.

## How the pieces fit

Read as a whole, the fleet is a set of complementary instruments under one open-data umbrella. Radar and optical imaging describe the land and ice; ocean colour, surface temperature, and altimetry describe the sea; TROPOMI describes the air; and a reference altimeter anchors the sea-level record. The value lies less in any one satellite than in the [earth observation and remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) ecosystem they belong to — free, frequent, and consistent enough to support monitoring that has to run year after year.

## Sources

1. **Copernicus** — [the Sentinels](https://www.copernicus.eu/en). EU programme overview of the Sentinel missions.
1. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Builds and operates the Sentinel satellites.
1. **Copernicus Marine Service** — [ocean products](https://marine.copernicus.eu/). Uses Sentinel-3 ocean data.
1. **ECMWF** — [Copernicus services](https://www.ecmwf.int/). Operates Copernicus services that ingest Sentinel data.
