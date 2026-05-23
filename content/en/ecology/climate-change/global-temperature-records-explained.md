---
title: 'Global temperature records: what GISTEMP, HadCRUT, NOAAGlobalTemp, and reanalyses each measure'
excerpt: There is no single global temperature dataset. There are several, built independently from overlapping observations. Here is what each one does and why they mostly agree.
type: expert
author: climate-research-desk
publishedDate: '2026-05-23'
updatedDate: '2026-05-23'
readingTime: 7
tags:
  - climate-change
  - temperature
  - climate-indicators
  - monitoring
related:
  - climate-indicators-earth-system-monitoring
  - ocean-heat-content-indicators
  - climate-models-projections-uncertainty
  - what-is-climate-change
pillar: what-is-climate-change
---

"Global mean surface temperature" is the most familiar climate indicator and also the one most often misread as a single number from a single dataset. It is not. Several independent groups produce global mean temperature records, each from their own combination of raw observations and their own gridding, infilling, and bias-correction methods. They agree to within stated uncertainties — which is the property that makes the trend robust.

This piece walks through the major operational products, what they have in common, and what their differences tell you.

## What "global mean surface temperature" actually is

The standard global mean surface temperature record combines two physically different quantities: near-surface air temperature over land (typically the World Meteorological Organization standard of measurement at about 2 m above ground) and sea-surface temperature over the ocean. Different groups handle the ocean component slightly differently — some use sea-surface temperature directly, others blend it with marine air temperature in some versions — and the methodology choices are documented in each product's technical reports.

The reported number is an anomaly relative to a reference period, not an absolute temperature. The absolute global mean is harder to pin down precisely because of how station coverage and gridding interact; the anomaly is what the long-term records were designed to estimate. Different reference periods (1951–1980, 1961–1990, 1991–2020) shift the reported anomaly value but not the trend. The [WMO State of the Global Climate](https://wmo.int/) bulletin uses the 1850–1900 baseline as a proxy for pre-industrial when comparing against Paris Agreement thresholds.

## The main operational products

Five products carry most of the public-facing temperature reporting.

**NOAAGlobalTemp.** The U.S. NOAA [National Centers for Environmental Information](https://www.ncei.noaa.gov/) operational product. It combines NOAA's land surface temperature dataset with the Extended Reconstructed Sea Surface Temperature (ERSST) record. It is the dataset behind the [NOAA Climate.gov](https://www.climate.gov/) headline figures and the [State of the Climate annual report](https://www.ncei.noaa.gov/).

**NASA GISTEMP.** NASA's Goddard Institute for Space Studies (GISS) product. It uses the GHCN station network for land and ERSST for ocean, with NASA-specific gridding and Antarctic infilling. The [NASA Global Climate Change](https://climate.nasa.gov/) site presents the GISTEMP record on its global-temperature vital sign.

**HadCRUT.** The UK Met Office and University of East Anglia product, currently in its 5th version. It uses CRUTEM (land) and HadSST (sea surface). HadCRUT5 introduced ensemble-based uncertainty estimation and updated infilling of the Arctic, addressing earlier divergence from the other products in that region.

**Berkeley Earth.** An independent product developed initially to test whether station-bias concerns affected the global trend. It uses a different statistical framework and a different set of stations. Its long-term trend agrees with NOAAGlobalTemp, GISTEMP, and HadCRUT5, which was the original headline finding.

**JRA-55 and ERA5 reanalyses.** A reanalysis is a different kind of product. It assimilates observations into a numerical weather prediction model run backward in time, producing globally complete fields on a model grid. The Japan Meteorological Agency's JRA-55 and the [Copernicus Climate Change Service](https://climate.copernicus.eu/) ERA5 (which is the operational European product) are reanalysis-based temperature records. They give complete spatial coverage at the cost of an additional model-dependence layer, and they agree with the station-based products on the long-term trend.

## Why they agree, and where they differ

The five products use overlapping but not identical observations and substantially different processing. The fact that they agree to within stated uncertainties on the long-term warming trend is itself the empirical case for the trend.

Where they differ:

- **Arctic infilling.** The Arctic is sparsely observed; pre-HadCRUT5 the UK product reported less warming there than the others, a difference traceable to the assumption that unobserved cells should default to the global mean rather than the surrounding cell mean. HadCRUT5 narrowed the gap by adopting a different infilling approach.
- **Recent vs. long-term trends.** Reanalysis products can show slightly different month-to-month rankings from station products because they assimilate satellite radiances differently. The decadal trends remain consistent.
- **Absolute anomaly.** Different baseline periods produce different anomaly values; the *trend* is unaffected by the baseline choice. Comparing reported anomalies across products without first aligning baselines will produce apparent disagreement that is purely cosmetic.

The convergence among multiple independent processing chains is the property the IPCC AR6 WG1 assessment leans on when it describes recent warming as "unequivocal" — it is not a single-dataset claim.

## What the record shows

Across all the major products, the global mean surface temperature for 1850–1900 is below the late-20th-century mean by approximately 0.7–0.8 °C, and recent decades exceed it by about 1.2 °C. The rate of warming has roughly doubled since the 1970s relative to earlier in the instrumental record. [IPCC AR6 WG1 Chapter 2](https://www.ipcc.ch/report/ar6/wg1/) reviews the assessment ranges.

The intra-year and interannual variability is dominated by ENSO. The 2023–2024 period contained a moderate-to-strong El Niño, and the [WMO State of the Global Climate 2024](https://public.wmo.int/publication-series/state-of-global-climate-2024), [NOAA NCEI 2024 assessment](https://www.ncei.noaa.gov/), and [Copernicus Global Climate Highlights 2024](https://climate.copernicus.eu/global-climate-highlights-2024) all report record warmth for 2024 across multiple analysis chains. ENSO modulates the level of any single year; the underlying forced trend that drives the indicator framework is independent of it.

A separate complication for the very recent record is the IMO 2020 sulphur-cap shipping fuel regulation, which has been hypothesized to have unmasked some aerosol-offset warming. The magnitude and attribution of any such contribution is an active research area in the peer-reviewed literature; major assessment bodies do not yet treat it as a settled component of the trend.

## Reading temperature data well

Three reading practices reduce avoidable confusion.

**Read the trend, not the single year.** A record-warm year is a measurement of one year; the trend is what the multi-decade record was designed to resolve. ENSO and volcanic eruptions push individual years up or down; the trend persists.

**Compare anomalies on the same baseline.** A "1.3 °C above pre-industrial" figure and a "0.8 °C above 1961–1990 mean" figure can describe the same warming. Mismatched baselines are the dominant source of apparent disagreement among news reports.

**Cross-check between products.** When the major products agree on a trend, the trend is on solid ground. When they disagree, the disagreement is usually informative — often regional rather than global, often related to a documented methodological choice. The [NOAA Climate.gov](https://www.climate.gov/) explainer pages and the [NASA Earth Observatory](https://earthobservatory.nasa.gov/) walk through specific divergences.

## Methods and uncertainty

The reported uncertainty in global mean surface temperature has three components.

**Coverage uncertainty.** Earlier decades had fewer stations, sparser ocean coverage, and gaps in the Arctic and parts of the Southern Hemisphere. The Met Office and NASA uncertainty quantification frameworks estimate the contribution of incomplete coverage to the anomaly estimate; the contribution shrinks toward the present.

**Bias-correction uncertainty.** Sea-surface temperature is the dominant source of historical correction work — wartime measurement changes, the transition from bucket to engine-intake measurements, the satellite-era cross-calibration. ERSST and HadSST document their correction pipelines and their estimated residual biases.

**Structural uncertainty.** Different choices of infilling, gridding, and bias correction produce a spread of plausible estimates. The IPCC AR6 assessment treats the spread among independent products as the structural component.

The total uncertainty on the recent decade-mean trend is small relative to the trend itself — which is, again, the empirical statement underneath "unequivocal."

## What temperature does and does not capture

Global mean surface temperature is one indicator in the cluster, not a summary of the entire climate system. It does not capture the [ocean heat content](/en/ecology/climate-change/ocean-heat-content-indicators) reservoir that stores the bulk of the energy. It does not capture [sea-level rise](/en/ecology/climate-change/sea-level-rise-indicators) — which depends on thermal expansion and ice loss, not directly on surface air temperature. It does not capture [cryosphere change](/en/ecology/climate-change/cryosphere-indicators-glaciers-sea-ice) in a regionally complete way, nor the [greenhouse-gas concentration](/en/ecology/climate-change/greenhouse-gas-concentrations-monitoring) input side.

The temperature indicator is most useful when read alongside the others. That is the design intent of the [indicator framework](/en/ecology/climate-change/climate-indicators-earth-system-monitoring) — temperature is the headline, but the headline alone is not the report.

## Sources

1. **IPCC** — [Climate Change 2021: The Physical Science Basis (AR6 Working Group I), Chapter 2](https://www.ipcc.ch/report/ar6/wg1/). Authoritative assessment of global temperature trends, observational uncertainty, and product intercomparison.
2. **NOAA National Centers for Environmental Information** — [NOAAGlobalTemp and State of the Climate](https://www.ncei.noaa.gov/). Operational U.S. global temperature product and annual assessment.
3. **NASA Global Climate Change** — [Global temperature vital sign](https://climate.nasa.gov/). GISTEMP record and explainer material.
4. **NOAA Climate.gov** — [Climate change indicators and explainers](https://www.climate.gov/). Public-facing temperature explainer products.
5. **WMO** — [State of the Global Climate 2024](https://public.wmo.int/publication-series/state-of-global-climate-2024). International annual indicator assessment, including global temperature.
6. **Copernicus Climate Change Service** — [Global Climate Highlights 2024](https://climate.copernicus.eu/global-climate-highlights-2024). ERA5-based annual indicator assessment.
7. **NASA Earth Observatory** — [Temperature, energy balance, and reanalysis explainers](https://earthobservatory.nasa.gov/). Topic pages on the temperature indicator.
8. **EPA Climate Change Indicators** — [U.S. and Global Temperature](https://www.epa.gov/climate-indicators). Temperature indicator in the U.S. domestic framework.
