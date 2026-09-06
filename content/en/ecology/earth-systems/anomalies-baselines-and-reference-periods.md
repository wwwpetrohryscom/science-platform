---
title: 'Anomalies, baselines and reference periods: why a climate number needs its zero'
metaTitle: 'Climate anomalies and baselines: why the zero matters'
excerpt: GISTEMP reports against 1951–1980, the greenhouse gas index against 1990, and global mean sea level against a zero internal to the altimeter file. Three headline indicators, three different zeros, and no way to place them on one axis without the offsets.
type: expert
author: earth-systems-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 11
tags:
  - climate-indicators
  - measurement
  - climate-data
  - temperature
  - uncertainty
related:
  - global-temperature-records-explained
  - greenhouse-gas-concentrations-monitoring
  - sea-level-rise-indicators
  - essential-climate-variables-explained
pillar: earth-system-science-explained
_bodyHash: fab96baa
---

Three of the most quoted climate indicators are published against three different zeros. NASA's GISTEMP surface temperature anomaly is stated relative to the 1951–1980 mean. NOAA's Annual Greenhouse Gas Index is stated relative to 1990. The satellite record of global mean sea level is stated relative to a zero carried inside the altimeter file itself. None of those numbers can be put on a common axis with the others, and none carries a meaning until its reference period is stated alongside it. The framework this sits inside is set out in the overview of [Earth system science](/en/ecology/earth-systems/earth-system-science-explained).

This is not a reporting convenience. Working in differences is what makes several of these records estimable at all, and the choice of what to difference against is made for a different reason in each case.

## Why the record is a difference rather than a value

The clearest case is surface temperature. NASA GISS states the reason plainly: "absolute temperature varies enormously over short distances, while monthly or annual temperature anomalies are representative of a much larger region." Two stations a few kilometres apart, one on a ridge and one in a valley, can differ by several degrees in absolute terms and still record almost the same departure from their own normals in a given month.

That property is what makes a sparse network usable. Following Hansen and Lebedeff (1987), GISS notes that "temperature anomalies are strongly correlated out to distances of the order of 1000 km," which "makes it significantly more accurate to estimate anomalies between stations and in data-sparse areas." Absolute temperatures cannot be interpolated over anything like that distance. Global anomalies are therefore not computed by subtracting a 1951–1980 absolute regional mean from a current one — GISS is explicit that "finding absolute regional means encounters significant difficulties that create large uncertainties" — but by averaging station anomalies directly.

The consequence for uncertainty is severe enough that GISS spells out the arithmetic. The uncertainty on the absolute global baseline temperature is around 0.5 °C, while the uncertainty on an annual anomaly is closer to 0.06 °C, so adding the two produces a number whose error is still 0.5 °C. The historical damage is documented: reports before 2000 added anomalies to an assumed baseline of 15 °C and after 2000 to about 14 °C, so comparisons of pre-2000 and post-2000 reports can, in GISS's words, "give the misleading impression that temperatures had cooled dramatically." The anomaly is the quantity the observing system constrains; the absolute value is not.

## The thirty-year convention, and why it exists twice

A baseline is normally a climatological normal. The WMO defines climatological standard normals as "averages of climatological data computed for the following consecutive periods of 30 years: 1 January 1981 to 31 December 2010, 1 January 1991 to 31 December 2020, etc." NOAA's National Centers for Environmental Information state the obligation from the member side: the WMO "requires each member nation to compute 30-year meteorological quantity averages at least every 30 years (1931–1960, 1961–1990, 1991–2020, etc.), and recommends an update each decade."

The decadal refresh has a stated motive. WMO puts it this way: "Rising atmospheric concentrations of greenhouse gases are changing the Earth's climate much faster than before, and therefore WMO has agreed that the standard 30-year reference period has to be updated every decade in order to better reflect the changing climate and its influence on our day-to-day weather experience." A moving normal keeps "above average" meaningful to a forecaster, because roughly half of recent conditions should fall on each side of it.

That is exactly what a long climate record must not do, so the WMO keeps two baselines rather than one: alongside the rolling normal, "the period from 1961 to 1990 has been retained as a standard reference period for long-term climate change assessments." NASA GISS gives the same argument for staying put — "the primary focus of the GISS analysis are long-term temperature changes over many decades and centuries, and a fixed base period yields anomalies that are consistent over time" — while noting that an agency focused on current conditions has reason to move its normal. The two purposes are incompatible, and the field has resolved the conflict by keeping separate references rather than choosing between them.

## What the major indicators actually reference

**Surface temperature.** GISTEMP uses 1951–1980, a fixed 30-year window GISS has declined to move. The Copernicus Climate Change Service uses 1991–2020 for its monthly bulletins, "the period recommended by the WMO for monitoring recent climate." The IPCC and WMO use 1850–1900 as the pre-industrial baseline for tracking global temperature against the Paris Agreement limits — a period Copernicus describes as "the earliest feasible reference period for the globe based on instrumental data." The [global temperature records](/en/ecology/climate-change/global-temperature-records-explained) piece covers the products; the point here is that one physical quantity is routinely published against three references.

**Greenhouse gas forcing.** The NOAA Annual Greenhouse Gas Index carries two reference points inside one number. The forcing is computed from measured mole fractions against unperturbed 1750 abundances — 278.3 ppm for CO₂, 729.2 ppb for CH₄, 270.1 ppb for N₂O, zero for the seventeen minor halogenated gases — and the total is then divided by its 1990 value to form the index. NOAA states why 1990: it "is the baseline year for the Kyoto Protocol, an early climate agreement." For 2024 the total effective radiative forcing from the long-lived gases was 3.539 W m⁻² relative to pre-industrial, and the AGGI was 1.538, because the 1990 total was 2.301 W m⁻². The physical statement is the first number; the index is that number divided by a treaty date. How the underlying concentrations are measured is covered in [greenhouse-gas concentration monitoring](/en/ecology/climate-change/greenhouse-gas-concentrations-monitoring).

**Sea level.** The altimeter record has no climatological normal at all. NOAA's Laboratory for Satellite Altimetry describes a reference series beginning with TOPEX/Poseidon in 1992 and continuing through Jason-1, Jason-2, Jason-3 and Sentinel-6MF, estimating global mean sea level every ten days with an uncertainty of 3–4 mm. The record itself only begins in 1992, so there is no thirty-year normal available to reference it to, and the series is a splice across five spacecraft. The global file NOAA distributes (slr_sla_gbl_keep_ref_90.csv) carries a header trend of "3.11 mm/year (no glacial isostatic adjustment correction)," and its first cycle, at 1992.96, reads −14.57 mm. The file's zero is therefore a convention internal to the processing, not the first measurement of the record. Which sea-level question each product answers is treated in [sea-level rise indicators](/en/ecology/climate-change/sea-level-rise-indicators).

## Converting between baselines, and what the conversion costs

Offsets between reference periods are published, and they are not free.

The IPCC's Sixth Assessment gives one directly: global surface temperature was 1.09 [0.95 to 1.20] °C higher in 2011–2020 than in 1850–1900, and "changes relative to the recent reference period 1995–2014 may be calculated approximately by subtracting 0.85 °C, the best estimate of the observed warming from 1850–1900 to 1995–2014." Copernicus adds a standard offset of 0.88 °C to an annual global anomaly against 1991–2020 to express it against 1850–1900, with an uncertainty range of 0.72 to 0.99 °C. NASA GISS reports that converting a GISTEMP anomaly from 1951–1980 to 1850–1900 amounts, as of January 2025, to adding about 0.19 °C, and warns that "these numbers may change slightly in the future as more data is digitized or if the methodologies change."

Three properties of those offsets matter more than their values.

They carry uncertainty larger than the anomaly they are applied to. An annual global anomaly is uncertain at the level of a few hundredths of a degree; the 1991–2020 to 1850–1900 offset spans roughly a quarter of a degree. A converted value quoted to two decimals claims a precision the conversion destroyed.

They are revised. AR6's assessment of historical warming for the AR5 reference period 1986–2005 came out higher by 0.08 [−0.01 to +0.12] °C than AR5's own. The offset is an estimate from data, not a constant.

They are not scalars in general. Copernicus uses a single 0.88 °C for annual global means but a varying offset for shorter windows — between 0.80 and 0.96 °C for monthly values, 0.79 and 0.97 °C for daily — and a much larger 1.45 °C for the annual European mean, an offset Copernicus states is "not fixed, as it is based on the latest versions of the datasets used." An offset derived for one aggregation and one region does not transfer to another.

A subtler effect follows from the same arithmetic. In the *Indicators of Global Climate Change* update, land annual maximum temperatures from three datasets are computed against 1961–1990 and shifted by 0.51 °C to express them against 1850–1900; the authors note that because the offset is calculated over 1961–1990, "temperature anomalies align by construction over this period but can diverge afterwards." Agreement between datasets inside a shared baseline window is an artefact of the referencing, not independent corroboration.

## What changing the baseline does not change

Trends are invariant. GISS puts the argument at its simplest: if the absolute temperature at a location is two degrees higher than a year ago, so is the anomaly, "no matter what base period is selected, since the normal temperature used as base point ... is the same for both years." Subtracting a constant cannot alter a difference, so rates, trends and comparisons between years within one series survive a change of baseline untouched.

What changes is every individual reported value, and with it whether a year reads as unusual. NCEI's comparison of the 1991–2020 U.S. normals against 1981–2010 found that most of the country was warmer and the eastern two-thirds of the contiguous U.S. wetter in the newer period — though NCEI also records the Southwest as considerably drier and the central northern U.S. as having cooled somewhat. Where the normal rose, the same weather scored against it is less anomalous. A rolling baseline absorbs the trend it is measured against, which is why the assessment community keeps a fixed one in parallel.

A further caution comes from the same comparison. The 1981–2010 normals were computed from the 2011 version of NCEI's data holdings and the 1991–2020 normals from an early-2021 version, homogenised a decade apart, so the difference between successive normals is not purely climatic. The two also share twenty years of data, which mutes the apparent change.

## Reading rules

A value without its reference period is not a measurement. This is the discipline that governs any [calibrated quantity](/en/physics/mechanics-waves/calibration-and-traceability): a reading means nothing without the datum it was taken against, and a datum is a convention someone chose and wrote down.

Two anomalies against different baselines are not comparable, and the offset that makes them comparable brings an uncertainty the converted number should carry.

A baseline is not a physical zero. The AGGI's 1990 is a treaty date; the altimeter's zero is an artefact of one processing of one record; 1850–1900 is a proxy that the *Indicators of Global Climate Change* authors describe as standing in for "the period before 1750, even though a small amount of warming likely occurred over 1750–1850."

Where a provider does not state a reference period, none should be assumed. GISS makes the general case on surface temperature: the anomaly is the quantity the observing system constrains, and the absolute level is not, so a series of this kind is usable as a change and not as a level. The wider set of choices between an observation and a published indicator runs through [climate indicators and Earth system monitoring](/en/ecology/climate-change/climate-indicators-earth-system-monitoring).

## Sources

1. **NASA Goddard Institute for Space Studies** — [The Elusive Absolute Surface Air Temperature (SAT)](https://data.giss.nasa.gov/gistemp/faq/abs_temp.html). Why GISTEMP works in anomalies, the ~1000 km anomaly correlation length, and the error argument comparing a 0.5 °C absolute-baseline uncertainty with a 0.06 °C annual anomaly uncertainty, including the 15 °C and 14 °C historical baselines.
2. **NASA Goddard Institute for Space Studies** — [GISTEMP Frequently Asked Questions](https://data.giss.nasa.gov/gistemp/faq/). The 1951–1980 base period and the reason it is fixed, the invariance of trends to base period, and the ~0.19 °C adjustment from 1951–1980 to 1850–1900.
3. **NOAA Global Monitoring Laboratory** — [The NOAA Annual Greenhouse Gas Index (AGGI)](https://gml.noaa.gov/aggi/aggi.html). The 1990 = 1 index convention and its Kyoto Protocol origin, the 1750 unperturbed abundances used in the forcing expressions, and the 2024 forcing and index values. The page text rounds these to 3.54 W m⁻² and 1.54; the three-decimal figures used above are the 2024 and 1990 rows of AGGI_Table.csv, distributed from the same page.
4. **NOAA Laboratory for Satellite Altimetry** — [Sea Level Rise](https://www.star.nesdis.noaa.gov/socd/lsa/SeaLevelRise/). The reference series of altimeter missions from TOPEX/Poseidon in 1992, the 3–4 mm uncertainty on each ten-day global estimate, and — in the global mean sea level file distributed from this page, slr/slr_sla_gbl_keep_ref_90.csv — the header trend of 3.11 mm per year without glacial isostatic adjustment and the −14.57 mm value of the first cycle.
5. **World Meteorological Organization** — [WMO Climatological Normals](https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/climate-services/wmo-climatological-normals). The definition of climatological standard normals as consecutive 30-year averages, and the retention of 1961–1990 as the standard reference period for long-term climate change assessment.
6. **World Meteorological Organization** — [It's warmer than average. But what is average?](https://wmo.int/media/news/its-warmer-average-what-average) (13 July 2022). The stated reason for updating the standard 30-year reference period every decade, and the parallel use of 1961–1990 for long-term climate change assessment and 1850–1900 by WMO and IPCC as the pre-industrial baseline.
7. **Copernicus Climate Change Service** — [Climate Bulletin — About the data and analysis](https://climate.copernicus.eu/climate-bulletin-about-data-and-analysis). The 1991–2020 standard reference period, the 1850–1900 pre-industrial period, and the annual, monthly, daily and European offsets used to convert between them.
8. **IPCC** — [AR6 Working Group I: Summary for Policymakers](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/). The 2011–2020 warming relative to 1850–1900, the 0.85 °C conversion to the 1995–2014 reference period, and the revision of the AR5 1986–2005 assessment.
9. **Earth System Science Data (Copernicus)** — [Indicators of Global Climate Change 2024: annual update of key indicators of the state of the climate system and human influence](https://essd.copernicus.org/articles/17/2641/2025/). The 1850–1900 baseline as a proxy for the period before 1750, and the 0.51 °C offset applied to extreme-temperature anomalies computed over 1961–1990, with the note that datasets align by construction inside the baseline window.
10. **NOAA National Centers for Environmental Information** — [U.S. Climate Normals](https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals). The WMO requirement and decadal update recommendation, the 1991–2020 release, and the comparison against 1981–2010 including the differing data vintages and the twenty-year overlap.
