---
title: 'Soil moisture: what a measurement actually covers'
metaTitle: 'Soil moisture: depth, footprint and what is inferred'
excerpt: A satellite senses the top few centimetres of soil across a 36-kilometre cell; a probe senses a few centilitres at one point; drought decisions need the top metre. Almost every soil-moisture number in circulation is a model reconciling those three.
type: expert
author: soil-land-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-06'
readingTime: 6
tags:
  - soil-moisture
  - remote-sensing
  - drought
  - measurement-uncertainty
related:
  - soil-science-explained
  - drought-monitoring-systems
  - nutrient-availability-and-soil-fertility
  - soil-carbon-measurement-and-uncertainty
pillar: soil-science-explained
_bodyHash: cf3c4948
---

Soil moisture is the variable that makes [soil](/en/ecology/soils/soil-science-explained) behave as a reservoir rather than a substrate, and the one that couples the [water cycle](/en/ecology/earth-systems/evapotranspiration-and-the-land-water-budget) to the [carbon cycle](/en/ecology/climate-change/carbon-cycle-feedbacks). It decides how much of a rainfall event runs off and how much infiltrates, whether stomata stay open, whether decomposition proceeds or stalls, and how much of the surface energy budget goes into evaporating water rather than heating air. It is also, unusually among the variables in Earth-system science, one where the measurement's *support* — the depth and area it represents — differs by three orders of magnitude between the main methods, and where those methods are routinely quoted as if they were the same quantity.

## Three depths, three different questions

Operational drought monitoring distinguishes at least two layers, and the distinction is not cosmetic. Surface soil moisture is "the water that is in the upper 10 cm of soil." Root-zone soil moisture is "the water that is available to plants—generally considered to be in the upper 200 cm of soil." The headline maps published by the US National Integrated Drought Information System show something different again — "the moisture content of the top 1 meter of soil."

Those three layers respond on different timescales. The surface dries within hours of a rainfall event and rewets within minutes of the next one; the root zone integrates weeks to months. A surface measurement is therefore an excellent detector of recent rainfall and a poor predictor of whether a crop is under stress. Almost every practical question — irrigation scheduling, yield forecasting, fire risk, drought classification — concerns a layer that no satellite observes directly.

## What the satellite actually senses

NASA's Soil Moisture Active Passive mission is the reference instrument for the surface layer. Its radiometer works at L-band, detecting "emitted radiation in the frequency range of 1-2 GHz" with "a wavelength range of 30-15 cm" — long wavelengths chosen because they pass through vegetation and moderate cloud, and because the emission at those wavelengths is strongly controlled by the dielectric constant of the soil, which in turn is dominated by liquid water content. The mission's own public description of the depth is blunt: it is "studying the moisture in the top two inches of the soil from space."

The spatial support is the other half of the problem. Soil moisture is mapped "via the radiometer data at a spatial resolution of 36 km every 2-3 days," and the mission's design anticipated that "a combination of radar and radiometer measurements would lead to a soil moisture product at a spatial resolution of 9 km." The mission page describes the radar in the past tense — it "sent pulses of radio waves down to a spot on Earth and measured the echo that returned a few microseconds later" — while the enhanced 9 km product is described conditionally. Anyone using SMAP products should check which of the two resolutions a given dataset actually rests on, and on what.

A 36-kilometre cell is about 1,300 square kilometres. Within it there will be soils of different texture, fields at different points in an irrigation cycle, slopes with different aspects, and open water. The retrieved value is a single number for that whole area, weighted by emission rather than by area, and it describes the top few centimetres. It is a genuine measurement of a real physical quantity; it is not the quantity a farm or a catchment model needs. The general form of that mismatch is set out in [remote-sensing limitations and uncertainty](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty), and the long-wavelength radar principle that makes L-band useful here is covered in [radar remote sensing](/en/ecology/earth-observation/radar-remote-sensing-explained).

## What the probe senses, and why networks are thin

At the other extreme, an in-situ sensor measures a small volume of soil around a single point at a fixed depth, which is exactly the right support for a plant root and exactly the wrong support for a satellite pixel. Reconciling the two — validating a 36-kilometre retrieval against a point probe — requires either a dense cluster of probes within the footprint or a strong assumption that the point represents the cell. Dense clusters exist at a small number of core validation sites and nowhere else.

The consequence is that soil-moisture products are, in practice, model outputs constrained by two observation types with incompatible geometries. Drought.gov describes the field the same way, noting the role of "enhanced modeling capabilities" and of products that blend observational data with models, alongside "new *in situ* and proximal sensors."

## Why the absolute number does not travel

The single most important caveat in operational use has nothing to do with instruments. A given volumetric water content means different things in different soils. Clay holds far more water than sand at the same matric potential, and much of what it holds is not available to plants. So the quantity that matters agronomically — how hard a root has to work to extract water — is not the quantity that is measured.

The NIDIS statement of the problem is worth quoting because it is unusually direct for an operational agency: "the same absolute value of soil moisture can indicate a serious drought in the Southeast, while it represents normal soils in the Southwest." Interpreting a value requires "assessing and maintaining a range of other 'metadata,' particularly soil characteristics," and "more than one unit of measure may be needed to adequately describe conditions."

This is why operational drought products are almost always expressed as percentiles against a local climatology rather than as raw water content — a transformation that makes maps comparable between regions at the cost of discarding the physical quantity. How that convention plays out across the wider drought-indicator family is covered in [drought monitoring systems](/en/ecology/earth-observation/drought-monitoring-systems). The link between water availability and what a plant can actually take up is a separate physiological question, treated in [plant physiology, water and nutrients](/en/biology/physiology/plant-physiology-water-and-nutrients).

## Reading a soil-moisture claim

Four questions settle most of the ambiguity. *What depth?* — surface, root zone, or a modelled profile. *What footprint?* — a point, a 9-kilometre cell, a 36-kilometre cell, or a model grid. *What units?* — volumetric content, a percentile, or a derived index. And *how much of it is observed?* — a satellite retrieval, a probe, or a land-surface model that assimilates both and fills the gaps between overpasses.

A statement that does not answer those four is not necessarily wrong, but it is not checkable either, and soil moisture is a field where two correct measurements can disagree by a wide margin simply because they are measurements of different things. The soil properties that make that so — texture, structure, organic matter and the pore geometry they produce — are the subject of [soil formation and classification](/en/ecology/soils/soil-formation-and-classification).

## Sources

1. **NOAA National Integrated Drought Information System** — [Soil moisture](https://www.drought.gov/topics/soil-moisture). The surface (upper 10 cm) and root-zone (upper 200 cm) definitions, the top-1-metre convention in the headline maps, the regional non-comparability of absolute values, and the metadata requirement.
2. **NASA Jet Propulsion Laboratory** — [SMAP observatory](https://smap.jpl.nasa.gov/observatory/). The radiometer and radar instrument description, the 36 km every 2–3 days radiometer product, and the anticipated 9 km combined product.
3. **NASA Jet Propulsion Laboratory** — [SMAP: why it matters](https://smap.jpl.nasa.gov/mission/why-it-matters/). The sensing depth stated as the top two inches of soil, and the drought and crop-forecast applications.
4. **NASA Earthdata** — [SMAP L-band radiometer](https://www.earthdata.nasa.gov/data/instruments/smap-l-band-radiometer). The 1–2 GHz frequency range and 30–15 cm wavelength range, the 9 km and 36 km soil-moisture resolutions, and the daily revisit.
