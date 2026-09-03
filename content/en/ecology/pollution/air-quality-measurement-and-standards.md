---
title: 'Air quality: what the monitors measure and what the index hides'
excerpt: A regulatory air measurement is a concentration plus a statistical form, and the index built on top of it keeps only the worst pollutant. Both steps discard information that matters for reading any air quality claim.
type: expert
author: public-health-environment-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - air-quality-index
  - air-monitoring
  - criteria-pollutants
  - low-cost-sensors
  - ozone
related:
  - environmental-pollution-explained
  - particulate-matter-and-health-evidence
  - nitrogen-pollution-and-eutrophication
  - noise-and-light-pollution-ecology
pillar: environmental-pollution-explained
_bodyHash: 13732c9b
---

An air quality standard is never just a concentration. It is a concentration attached to an averaging time, a statistic, and usually a multi-year averaging rule — and the statistic does as much regulatory work as the number in front of it. The US ozone standard is 0.070 parts per million over eight hours, but the form of the standard is the annual fourth-highest daily maximum eight-hour value, averaged over three years. A location can therefore record several days above the level every year and still be in attainment. That is a deliberate design choice, not a loophole: it tolerates rare meteorological extremes while constraining the recurring pattern. It also means "the standard was exceeded today" and "the standard was violated" are different statements.

This page follows a measurement from the instrument to the index, and points out what is lost at each stage. The framing it sits inside — hazard against risk, health goal against feasible limit — is set out in [the source, pathway and receptor framework](/en/ecology/pollution/environmental-pollution-explained).

## Six pollutants, and the statistic attached to each

The pollutants monitored under a national standard are chosen because they are widespread, well characterised and regulable, not because they are the only ones that matter. The current US primary (health-based) standards illustrate how varied the forms are:

| Pollutant | Averaging time | Level | Form |
| --- | --- | --- | --- |
| Carbon monoxide | 8 hours | 9 ppm | not to be exceeded more than once per year |
| Nitrogen dioxide | 1 hour | 100 ppb | annual 98th percentile of daily 1-hour maxima, averaged over 3 years |
| Ozone | 8 hours | 0.070 ppm | annual fourth-highest daily maximum, averaged over 3 years |
| Fine particles | 1 year | 9.0 µg/m³ | annual mean, averaged over 3 years |
| Fine particles | 24 hours | 35 µg/m³ | 98th percentile, averaged over 3 years |
| Coarse particles (PM10) | 24 hours | 150 µg/m³ | not to be exceeded more than once per year on average over 3 years |
| Sulfur dioxide | 1 hour | 75 ppb | annual 99th percentile of daily 1-hour maxima, averaged over 3 years |
| Lead | rolling 3 months | 0.15 µg/m³ | maximum of three consecutive monthly means in a 3-year period |

Two patterns are worth extracting. Pollutants whose health evidence rests on chronic exposure get annual means; those whose evidence rests on acute response get high percentiles of short averages. And every recent standard is expressed as a multi-year average of an annual statistic, which smooths meteorological variability but also delays the point at which a genuine deterioration becomes legally visible.

## What a monitor is, and what a sensor is allowed to be

Regulatory measurements come from instruments designated as federal reference or equivalent methods under a testing regulation that specifies the measurement principle, the acceptable interference levels and the collocation performance. A reference filter-based fine-particle measurement is a mass determination: air is drawn through a size-selective inlet for 24 hours and the collected filter is weighed. That is slow, expensive and unambiguous.

Low-cost optical sensors are none of those things. They infer mass from how much light particles scatter, which requires assumptions about particle size distribution, density and refractive index — assumptions that fail when the aerosol changes character, as it does in wildfire smoke or at high humidity, when particles take up water and scatter more strongly than their dry mass warrants. The EPA is explicit that these devices "will not meet the stringent requirements for air quality instruments used for regulatory purposes", and its performance targets and testing protocols, published for ozone and fine particles and supplemented three years later, are written for what the agency calls non-regulatory supplemental and informational monitoring.

Field experience adds a less obvious caution. In a community study around homes in California's San Joaquin Valley, more than 90% of the tested low-cost monitors agreed closely with each other, and applying correction factors derived from collocation barely shifted the distribution of measured concentrations — the devices were precise, and correction was not the binding problem. Data completeness was. Relying on the units' wireless transmission alone would have lost more than half the intended record, while onboard memory cards raised the [data collection success rate above 80%](https://pmc.ncbi.nlm.nih.gov/articles/PMC12339596/). The deeper limitation of a crowdsourced network is not any of that, though. Its geography is determined by who buys and maintains devices, not by where exposure is highest, so a dense map is not automatically a representative one. The same tension between coverage and continuity is examined in the insight on [thinning environmental monitoring networks](/en/insight/environmental-monitoring-networks-are-thinning).

## The index is a transformation, not a measurement

The air quality index converts a concentration into a 0–500 number so that different pollutants can be compared on one scale. The conversion is piecewise linear: truncate the concentration to a specified precision, find the two breakpoints that bracket it, interpolate between the index values assigned to those breakpoints, and round. Categories run Good (0–50), Moderate (51–100), Unhealthy for Sensitive Groups (101–150), Unhealthy (151–200), Very Unhealthy (201–300) and Hazardous above 300, with concentrations beyond the top of the scale reported as "beyond the index".

Three properties of that construction are routinely missed.

**The index keeps the worst pollutant and discards the rest.** Sub-indices are computed for each pollutant and the reported value is the highest; the pollutant producing it is named the critical or responsible pollutant. In the agency's own worked example, an eight-hour ozone value of 0.078 ppm yields 126, and when a fine-particle value and a carbon monoxide value of 8.4 ppm are also available the reported index is still 126 with ozone responsible. Two days can both read 126 with entirely different mixtures behind them, and the index cannot distinguish them.

**The scale moves when the standard moves.** An index value near 100 corresponds roughly to the short-term standard for that pollutant, so when a standard is revised the breakpoints follow. When the annual fine-particle standard was tightened to 9.0 µg/m³ in February 2024, the boundary between Good and Moderate moved from 12.0 to 9.0 µg/m³ and the upper breakpoints were also lowered; the agency noted that many areas could expect more days in the Moderate category as a result. The previous breakpoints had stood since 2012. An index series compared across that boundary is not comparing like with like.

**The index is a daily statistic.** It is defined on daily maxima or daily averages, and computing one from hourly data is not valid. Real-time maps therefore show a different quantity, produced by a weighting scheme that uses longer averaging windows when air quality is stable — eight hours for ozone, twelve for particles — and shorter ones when it is changing quickly, three hours for particles during a fire. A current reading and a daily index are not interchangeable.

There is a fourth loss, and it is the largest. Because the index is anchored to short-term standards, a place with a chronically elevated annual mean but no sharp episodes can report Good on most days — while the mortality evidence rests heavily on long-term average exposure, as set out in [the health evidence on fine particles](/en/ecology/pollution/particulate-matter-and-health-evidence).

## Two limits for the same air

The World Health Organization's 2021 guideline levels are health-derived and carry no feasibility constraint: 5 µg/m³ annual and 15 µg/m³ over 24 hours for fine particles, 15 and 45 µg/m³ for PM10, and 10 µg/m³ annual for nitrogen dioxide. The European Union's binding annual limit values, in force from 2015 and 2010 respectively, are 25 µg/m³ for fine particles and 40 µg/m³ for nitrogen dioxide, with an ozone target value of 120 µg/m³ as a daily eight-hour maximum, permitting 25 exceedance days averaged over three years.

The consequence is arithmetic rather than scientific. Reporting on European cities for 2024, the European Environment Agency found that almost none of the urban population was exposed above the EU limit values for fine particles or nitrogen dioxide, while 95.1% were above the WHO fine-particle guideline level and 81.0% above its nitrogen dioxide guideline. The same monitoring data, the same year, two defensible descriptions — one of compliance, one of exposure. Anyone quoting a share of the population breathing "unsafe" air is choosing between them, usually without saying so.

## The pollutant that refuses to fall

Regulated pollutants have not improved uniformly, and the exception is instructive. Between 1980 and 2024 the US national air quality trend statistics fell by 87% for carbon monoxide, 95% for one-hour sulfur dioxide and 69% for annual nitrogen dioxide. The eight-hour ozone statistic fell 29% over the same period, and only 7% since 2010 — even though emissions of its two main precursor families, nitrogen oxides and volatile organic compounds, fell 75% and 61% respectively.

Ozone is not emitted. It is produced photochemically from those precursors, and the observed trends are the clearest available demonstration that the production is not proportional to either of them. A secondary pollutant breaks the intuition that proportional emission cuts buy proportional improvement in the air, and no amount of monitoring resolves that on its own — it is a question about atmospheric chemistry, not about instruments. Ammonia has a comparable role in secondary particle formation, traced in [the reactive nitrogen cascade](/en/ecology/pollution/nitrogen-pollution-and-eutrophication).

The remaining limitation is spatial. Networks are sited to represent populations and to detect the pollutants the standards name, which leaves steep near-road gradients, indoor concentrations, and unregulated species poorly resolved. A monitor tells the truth about the air at its inlet; everything beyond that is a model.

## Sources

1. **US Environmental Protection Agency** — [NAAQS table](https://www.epa.gov/criteria-air-pollutants/naaqs-table). Current levels, averaging times and statistical forms of the US primary and secondary standards.
2. **US Environmental Protection Agency** — [Air sensor performance targets and testing protocols](https://www.epa.gov/air-sensor-toolbox/air-sensor-performance-targets-and-testing-protocols). The non-regulatory status of low-cost sensors and the published testing protocols.
3. **AirNow (US interagency air quality programme)** — [Technical assistance document for the reporting of daily air quality](https://www.airnow.gov/sites/default/files/2020-05/aqi-technical-assistance-document-sept2018.pdf). Index equation, breakpoint procedure, critical-pollutant rule, worked example and real-time weighting scheme.
4. **US Environmental Protection Agency** — [Final updates to the Air Quality Index for particulate matter](https://www.epa.gov/system/files/documents/2024-02/pm-naaqs-air-quality-index-fact-sheet.pdf). The 2024 standard revision and the resulting changes to index breakpoints.
5. **World Health Organization** — [Types of pollutants](https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/types-of-pollutants). The 2021 global air quality guideline levels.
6. **European Commission** — [EU air quality standards](https://environment.ec.europa.eu/topics/air/air-quality/eu-air-quality-standards_en). Binding limit and target values and their dates of application.
7. **European Environment Agency** — [Exceedance of air quality standards in Europe](https://www.eea.europa.eu/en/analysis/indicators/exceedance-of-air-quality-standards). Urban population exposure against EU standards and against WHO guideline levels.
8. **US Environmental Protection Agency** — [Air quality national summary](https://www.epa.gov/air-trends/air-quality-national-summary). Long-run concentration and emission trends for the criteria pollutants.
9. **Aerosol and Air Quality Research** — [Practical guidance for using low-cost particle monitors in community field studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC12339596/). Collocation precision, correction factors and data-completeness rates in a residential deployment.
