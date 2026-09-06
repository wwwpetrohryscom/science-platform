---
title: 'Land surface temperature: what the thermal band measures'
metaTitle: Land surface temperature from space, and what it is not
excerpt: A thermal satellite measures the temperature of the ground, not the air above it. In one Shanghai comparison, four accepted retrieval algorithms differed from station air temperature by between 2.39 and 12.32 degrees on the same summer day.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-06'
readingTime: 6
tags:
  - land-surface-temperature
  - thermal-infrared
  - emissivity
  - earth-observation
related:
  - earth-observation-and-remote-sensing-explained
  - landsat-program-explained
  - urban-heat-islands-and-surface-energy-balance
  - remote-sensing-limitations-and-uncertainty
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 2206ab57
---

Every surface above absolute zero radiates. The intensity and spectral shape of that radiation depend on the surface's temperature, so an instrument that measures radiance in the thermal infrared can, in principle, invert the measurement and recover a temperature. That is the whole idea behind land surface temperature retrieval, and it is the basis of satellite maps of urban heat, evapotranspiration, volcanic activity and fire.

The principle is sound. The complications are in the two words "in principle", and they matter enough that land surface temperature is one of the most misread products in Earth observation.

## The instrument

Landsat 8 and 9 carry the Thermal Infrared Sensor, which "measures land surface temperature in two thermal-infrared bands using principles of quantum physics to detect heat emitted from the Earth's surface." The two bands sit at 10.6–11.2 μm and 11.5–12.5 μm — a window where the atmosphere is comparatively transparent and where terrestrial surfaces at ordinary temperatures emit strongly.

The resolution is worth noting because it is often quoted incorrectly. The instrument design "achieves 100-meter (328-foot) resolution," and the data are then "resampled to 30" metres for distribution to match the reflective bands. A 30-metre thermal pixel in a Landsat product is a resampled 100-metre observation; it does not resolve thermal structure at 30 metres. The programme's wider design and continuity are covered in [the Landsat programme](/en/ecology/earth-observation/landsat-program-explained).

Two bands rather than one is a deliberate choice. The difference in atmospheric absorption between adjacent thermal windows carries information about the intervening water vapour, which is what makes split-window retrieval possible — correcting for the atmosphere using the observation itself rather than an external profile.

## Emissivity: the term that is assumed, not measured

The inversion from radiance to temperature requires knowing how efficiently the surface radiates relative to a perfect blackbody. That property, emissivity, expresses how efficiently a real surface emits compared with a blackbody at the same temperature, and it varies with the material, its roughness, how much vegetation covers it, and the wavelength interval the [remote sensing](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) instrument observes in.

No satellite measures emissivity and temperature independently in the same observation; there are more unknowns than measurements. Every operational retrieval therefore supplies emissivity from somewhere else — a land-cover classification, a vegetation index, a static database — and the temperature inherits whatever error that estimate carries. Dense vegetation and open water are close to blackbodies and forgiving. Bare soil, sand and built surfaces are neither: their emissivity varies with mineralogy, moisture and roughness, and those are exactly the surfaces where thermal products are most in demand.

## How much the algorithms disagree

The choice of retrieval algorithm is not a detail. A study comparing four accepted approaches — the radiative transfer equation, mono-window, split-window and single-channel algorithms — applied all four to Landsat 8 scenes over Shanghai and compared each against meteorological station data.

On a winter date the average differences between retrieved land surface temperature and station air temperature ranged from 2.54 °C for the mono-window algorithm to 3.51 °C for the single-channel algorithm. On a summer date the spread widened dramatically: from 2.39 °C to 12.32 °C. The authors conclude that the split-window approach "is more suitable for retrieving LST in Shanghai during the summer," while in winter the radiative-transfer, split-window and single-channel algorithms are "relatively more reliable."

Two things follow. First, a land surface temperature value is not algorithm-independent, and a comparison between two studies that used different retrievals may be comparing methods rather than places. Second, and more importantly, that comparison was against *air* temperature — which brings up the confusion that does the most damage.

## Land surface temperature is not air temperature

They are different physical quantities measured at different heights by different means, and the gap between them is large, variable and systematic.

Air temperature as reported by weather services is measured in a shielded enclosure, typically around two metres above ground, and describes the air. Land surface temperature describes the skin of whatever the sensor is looking at: asphalt, roof, canopy, bare soil. The two are coupled by turbulent exchange, and the strength of that coupling varies through the day: weak insolation and light winds at night bring them close together, while strong daytime heating of a dry surface drives them apart. Vegetated surfaces run cooler than the air during the day because evaporation carries heat away — the surface energy balance treated in [urban heat islands and the surface energy balance](/en/ecology/ecosystems/urban-heat-islands-and-surface-energy-balance).

The practical consequence is that a satellite-derived "urban heat" map is a map of surface temperature, and reading it as human thermal exposure overstates the effect on exactly the surfaces people notice most. This does not make the product wrong; it makes the label important.

## Validating against the ground is hard

An obvious response is to check the satellite against ground measurements. That turns out to be a research problem in itself.

An intercomparison of in-situ sensors published in *Sensors* found that infrared radiometers agreed with reference brightness temperatures to a "bias of <0.23 °C, and root mean square error (RMSE) of <0.36 °C" — good instrument performance. But when the same site's land surface temperature was derived by different accepted ground methods, they disagreed with each other: radiometer against thermocouple gave a daytime "bias = 0.26 °C and RMSE = 0.67 °C", while radiometer against longwave-radiation-derived temperature gave "bias > 1.1 and RMSE > 1.46 °C". At night all three agreed to within 0.47 °C.

So the daytime disagreement among ground methods is of the same order as the accuracy claimed for satellite products, and the authors note the deeper obstacle: accurate in-situ land surface temperature measurements "are quite scarce," and sensors with different fields of view produce footprint mismatches over heterogeneous ground. Validating a satellite pixel requires a ground truth that is itself contested at the precision in question.

## Reading a thermal product honestly

Four questions again. *Which quantity* — surface or air? *Which algorithm*, and was emissivity assumed from [land cover](/en/ecology/earth-observation/land-cover-change-detection) or measured? *What native resolution*, as opposed to the resampled grid it is distributed on? And *what time of day* — because a single overpass samples one point on a diurnal cycle whose amplitude is the thing most applications actually care about.

Thermal remote sensing does something no other technique can: it maps the surface energy state continuously over large areas, and it is the observational basis for satellite evapotranspiration products, treated in [evapotranspiration and the land water budget](/en/ecology/earth-systems/evapotranspiration-and-the-land-water-budget). It is worth the care its interpretation demands.

## Sources

1. **NASA** — [Landsat Thermal Infrared Sensor](https://science.nasa.gov/mission/landsat/tirs). The two thermal bands at 10.6–11.2 μm and 11.5–12.5 μm, the 100-metre instrument resolution resampled to 30 metres, and the science objectives including evapotranspiration, urban heat, volcanic hazard and wildfire.
2. **International Journal of Environmental Research and Public Health** — [A comparative analysis of retrieval algorithms of land surface temperature from Landsat-8 data: a case study of Shanghai, China](https://pmc.ncbi.nlm.nih.gov/articles/PMC8198215/). Jiang and Lin (2021). The four-algorithm comparison, the 2.54–3.51 °C winter and 2.39–12.32 °C summer differences against station air temperature, and the algorithm recommendations by season.
3. **Sensors** — [Intercomparison of in situ sensors for ground-based land surface temperature measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC7570879/). Krishnan and colleagues (2020). Radiometer brightness-temperature bias and RMSE, the daytime and nighttime disagreements between ground methods, and the scarcity and footprint-mismatch problems in validation.
