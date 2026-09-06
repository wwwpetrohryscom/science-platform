---
title: 'Calibration and why a sensor drifts: the measurement under every measurement'
metaTitle: Calibration and why a sensor drifts
excerpt: Every environmental indicator rests on an instrument whose calibration is itself a measurement, with its own uncertainty and its own history of revision. When NOAA revised the WMO carbon dioxide scale, the scale moved by 0.18 ppm at 400 ppm and the whole record had to be re-expressed.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 12
tags:
  - calibration
  - metrology
  - remote-sensing
  - earth-observation
  - measurement-uncertainty
related:
  - sensor-calibration-and-record-continuity
  - calibration-and-traceability
  - remote-sensing-limitations-and-uncertainty
  - greenhouse-gas-concentrations-monitoring
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: f3a83dc8
---

An indicator is usually quoted as though it were read off the planet. The [atmospheric carbon dioxide concentration](/en/data/indicators/atmospheric-co2) is a number of parts per million; a vegetation index is a ratio of reflectances. In both cases the instrument does not measure the quantity. It measures a voltage, or a count of photoelectrons, and something else converts that into physical units. That something else is a calibration, and a calibration is not a constant. It is a measurement in its own right, made at a particular time, with a stated uncertainty, and subject to revision.

This is the layer underneath every number in an [Earth observation](/en/ecology/earth-observation/earth-observation-and-remote-sensing-explained) product or a monitoring record, and it is where a change on the instrument's side can be mistaken for a change on the planet's side.

## Why a radiometer drifts

An optical instrument in orbit does not stay the same instrument, and the published calibration record names the changes precisely rather than in the abstract. The polarisation sensitivity of MODIS Terra *increased* from about 2007 onward, enough that a later calibration release had to add a correction for it. The reflectance of the solar diffuser panel carried for calibration changes as well — enough that a second instrument rides along whose only job is to measure that change. Neither is a defect. Both are what sustained exposure to sunlight and space does to optics.

The important property is that this degradation is not spectrally flat. In a study of the MODIS record, "sensor degradation is largest in the blue band (B3) of the MODIS sensor on Terra and decreases with wavelength." The paper does not put a figure on how large that blue-band loss grew over the mission; the claim it makes, and the one that matters here, is about the ordering across wavelength. That wavelength dependence is what makes drift dangerous rather than merely inconvenient. A uniform loss of sensitivity would cancel in any band ratio. A loss that is stronger in the blue than the near infrared does not cancel: it propagates into atmospheric correction, into surface reflectance, and from there into every index built on top of them, including [NDVI](/en/ecology/earth-observation/ndvi-explained).

## The calibrator on board is drifting too

The standard answer is to carry a reference into orbit. [MODIS](/en/ecology/earth-observation/modis-earth-observation-system) carries four on-board calibrators. A blackbody is "the prime calibration source for the mid- and long-wave infrared bands (located from 3.5 µm to 14.4 µm)". A solar diffuser "provides a diffuse, solar-illuminated calibration source for the visible, near infrared, and short-wave infrared bands (0.4 µm < = lambda < = 2.2 µm)". A spectroradiometric calibration assembly supplies "in-flight spectral, radiometric, and spatial calibration". The fourth is the Solar Diffuser Stability Monitor, which is the subject of the next few paragraphs.

Two further references are not hardware at all but directions to point in. A view of deep space supplies "a photon input signal of zero, which will be used as an additional point of reference for calibration" — the zero end of the response curve. And lunar views exploit the fact that, unlike the diffuser or the Earth, the Moon stays stable across the mission, which makes it a second, independent way of tracking the diffuser's degradation.

Landsat's Operational Land Imager applies the same logic with different hardware: a baffle "occasionally pointed at the sun so that a diffuser panel can reflect solar illumination into the telescope", plus "two lamp assemblies, with six small lamps each, inside an integrating hemisphere" that illuminate the focal plane with the shutter closed. NASA states the resulting requirement as data "calibrated to an uncertainty of less than 5% for spectral radiance" and "less than 3% for top-of-atmosphere spectral reflectance", with spectral band widths held "within 3% of specified values across the field-of-view".

The obvious objection is that the reference degrades too, and it does. MODIS answers it with a device whose only job is to watch another calibrator: the Solar Diffuser Stability Monitor "tracks changes in the reflectance of the SD via reference to the sun so that potential instrument changes are not incorrectly attributed to changes in the calibration source." It uses "nine filtered detectors" at wavelengths "between 0.4 mm and 1.0 mm" — micrometres, in the page's typography — and a three-position fold mirror that lets them view "a dark scene, direct sunlight, and illumination from the Solar Diffuser" in sequence, with the direct solar view attenuated through "a two-percent transmitting screen".

That sentence states the whole problem exactly. The regress stops only because the Sun and the vacuum are outside the spacecraft and are not degrading with it.

## Calibrating against the ground

The second answer is to look at something on Earth whose reflectance is known independently. This is vicarious calibration, and it is organised internationally. RadCalNet, run under the Committee on Earth Observation Satellites, maintains "five instrumented reference test sites (with more in preparation)" — Railroad Valley in the United States, La Crau in France, two sites at Baotou in China, and Gobabeb in Namibia — and publishes top-of-atmosphere reflectance "at a 10 nm spectral sampling interval" over "the spectral range from 400 nm to 2500 nm", "at 30 minute intervals". Each member site is responsible for its own quality assurance and "is subject to peer review and rigorous comparison", and site-to-site consistency and SI traceability are "underpinned by the United Kingdom's National Physical Laboratory (NPL)" as a national metrology institute, in alignment with the Quality Assurance Framework for Earth Observation.

This buys an estimate of what the sensor ought to have recorded, derived without reference to the sensor's own hardware. It does not buy coverage: the sites are bright, flat, arid and cloud-poor by design, the atmosphere above them still has to be modelled, and the technique constrains the reflective bands far better than the thermal ones.

## What a calibration scale is

For atmospheric composition the reference is not a target but a set of cylinders. "The NOAA Global Monitoring Laboratory serves as the World Meteorological Organization Global Atmosphere Watch (WMO/GAW) Central Calibration Laboratory (CCL) for CO2," as Hall and colleagues put it, and the scale it maintains is "based on 19 primary standards covering the nominal mole fraction range 250 - 800 ppm", all of them "natural air in high pressure aluminum cylinders". Fifteen of the nineteen had defined the previous scale, X2007, and their values were updated rather than replaced. The scale is propagated downward — "secondary standards are used in the hierarchy to extend the lifetime of the primary standards", and "tertiary standards are distributed to the WMO community".

A carbon dioxide mole fraction is therefore not a property of the air alone. It is the air compared against those cylinders, and a value is fully specified only when the scale is named. The naming is explicit about this. Describing the earlier scale, Hall and colleagues gloss it as one "where X is used to denote mole fraction and 2007 is the year in which the assigned values were adopted" — so the name carries a version number, and X2019 is read the same way.

## When the scale moves, the record moves

In 2021 the laboratory published the revision. The X2019 scale "is 0.18 µmol mol−1 (ppm) greater than the previous scale at 400 ppm CO2. While this difference is small in relative terms (0.045 %), it is significant in terms of atmospheric monitoring."

Two corrections to the historical manometric work produced most of that shift. The second virial coefficient for carbon dioxide had been "calculated corresponding to a temperature that was 10 K higher than the actual TCO2 (320 K instead of 310 K) due to an interpolation error", which underestimated the mole fraction "by about ∼ 0.03 ppm at 400 ppm". The larger term came from carbon dioxide going missing during the manometric measurement itself. The pressure in the small volume falls slowly even after its temperature has settled, and the authors "suspect that CO2 absorbs to Viton O-rings and possibly adsorbs to surfaces of the small volume". In the paper's worked example, for a 380 ppm sample, "the loss correction is 0.14 ppm" — a single illustrative case rather than a constant applied across the scale.

The revised scale carries an expanded uncertainty at 400 ppm of "0.17 ppm or 0.043 %". Set that beside the size of the correction, 0.18 ppm, and the relationship is the right one: a revision comparable to the stated uncertainty is a scale behaving as advertised. A revision several times larger than the uncertainty would have meant the uncertainty was wrong.

None of this changes one measurement. It changes all of them. Every flask analysed on the old scale, at every site in the network, has to be re-expressed, which is why the [greenhouse-gas monitoring record](/en/ecology/climate-change/greenhouse-gas-concentrations-monitoring) is versioned and why comparisons between networks that have adopted a scale revision at different dates can disagree for reasons that have nothing to do with the atmosphere.

## The same thing, on a satellite record

The MODIS case shows the failure in its uncorrected form. Calibration degradation in Collection 5 "causes negative global trends in multiple MODIS C5 products including the dark target algorithm's aerosol optical depth over land and Ångström exponent over the ocean, global liquid water and ice cloud optical thickness, as well as surface reflectance and vegetation indices, including the normalized difference vegetation index (NDVI) and enhanced vegetation index (EVI)."

Collection 6 "removes major calibrations trends in the Level 1B (L1B) data". A further enhanced version, which the authors label C6+, adds "an additional polarization correction (PC) to compensate for the increased polarization sensitivity of MODIS Terra since about 2007, as well as detrending and Terra–Aqua cross-calibration over quasi-stable desert calibration sites", which removes "residual decadal trends on the order of several tenths of 1% of the top-of-atmosphere (TOA) reflectance in the visible and near-infrared MODIS bands B1–B4". Over the southern United States that further step removed "an additional negative decadal trend of Terra ΔNDVI ~ 0.01 as compared to Aqua data" — a browning signal contributed by the instrument.

The authors were explicit about why they were saying so in public: "As the C5 production will be maintained for another year in parallel with C6, one objective of this paper is to raise awareness of the calibration-related trends for the broad MODIS user community." For that year two versions of the same record were being produced side by side, one of them carrying trends the other had corrected — which is the practical hazard, since nothing in a downloaded time series announces which collection it came from. The corresponding practice on the land-imaging side is periodic reprocessing of the whole archive, discussed in [sensor calibration and record continuity](/en/ecology/earth-observation/sensor-calibration-and-record-continuity); the USGS describes Landsat Collection 2 as "the second major reprocessing effort on the Landsat archive".

## What this asks of a reader

Three things follow, and none of them is a reason to distrust the records.

First, a value is under-specified without its version. "422 ppm" and "422 ppm on WMO CO2 X2019" are different statements, and only the second can be compared with anything. The same holds for a collection number on a satellite product.

Second, two credible datasets can differ because they sit on different scales. That is a comparability problem, not an accuracy problem, and it is fixed by naming the reference rather than by arguing about the measurement — the distinction developed in [calibration and traceability](/en/physics/mechanics-waves/calibration-and-traceability).

Third, traceability is not accuracy. NIST defines metrological traceability as the "property of a measurement result whereby the result can be related to a reference through a documented unbroken chain of calibrations, each contributing to the measurement uncertainty", and says directly that "traceability alone does not signify or guarantee fitness for purpose, because this typically requires that the uncertainty associated with a measured value or calibration be sufficiently small to satisfy a particular measurement need." A traceable number can still be too uncertain for the question asked of it — which is the general form of the [limits on reading satellite data](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty).

Drift is not visible in the data. A slowly falling reflectance and a slowly browning continent look identical to a time series. What separates them is an independent reference — a diffuser watched by a monitor, a desert watched from the ground, a cylinder of natural air held in a laboratory — and the willingness to revise the record when the reference turns out to have been slightly wrong.

## Sources

1. **Atmospheric Measurement Techniques** — [Revision of the World Meteorological Organization Global Atmosphere Watch (WMO/GAW) CO2 calibration scale](https://amt.copernicus.org/articles/14/3015/2021/). Hall and colleagues (2021). NOAA GML's role as the WMO/GAW Central Calibration Laboratory for CO2; the meaning of the scale name (X for mole fraction, the year for adoption of the assigned values); the 0.18 ppm (0.045 %) offset at 400 ppm between X2007 and X2019; the virial-coefficient interpolation error (320 K instead of 310 K, ~0.03 ppm); the suspected adsorption to Viton O-rings and the 0.14 ppm loss correction in the paper's 380 ppm worked example; and the expanded uncertainty of 0.17 ppm or 0.043 % at 400 ppm.
2. **NOAA Global Monitoring Laboratory** — [WMO CO2 X2019 scale](https://gml.noaa.gov/ccl/co2_scale.html). The 19 primary standards of natural air in high-pressure aluminium cylinders over 250–800 ppm, the 15 carried over from X2007 with updated values, and the primary–secondary–tertiary propagation hierarchy.
3. **NASA** — [MODIS on-board calibration system](https://modis.gsfc.nasa.gov/about/calsys.php). The four on-board calibrators: the blackbody (3.5–14.4 µm), the solar diffuser (0.4–2.2 µm), the spectroradiometric calibration assembly, and the diffuser stability monitor; plus the deep-space zero-signal reference and the lunar views as a stable secondary check on diffuser degradation.
4. **NASA** — [Solar Diffuser Stability Monitor](https://modis.gsfc.nasa.gov/about/sdsm.php). The nine filtered detectors between 0.4 and 1.0 µm, the three-position fold mirror viewing dark scene, Sun and diffuser, and the two-percent transmitting screen.
5. **NASA** — [Landsat Operational Land Imager](https://science.nasa.gov/mission/landsat/oli). The solar-view baffle and diffuser panel, the two lamp assemblies of six lamps each behind a closed shutter, and the requirements of under 5 % uncertainty in spectral radiance, under 3 % in top-of-atmosphere reflectance, and band widths within 3 % across the field of view.
6. **CEOS** — [The Radiometric Calibration Network (RadCalNet)](https://ceos.org/home-2/wgcv-radcalnet/). The five instrumented reference test sites and their locations, the 400–2500 nm range at 10 nm sampling and 30-minute intervals, and SI traceability underpinned by the National Physical Laboratory under QA4EO.
7. **Atmospheric Measurement Techniques** — [Scientific impact of MODIS C5 calibration degradation and C6+ improvements](https://amt.copernicus.org/articles/7/4353/2014/amt-7-4353-2014.html). Lyapustin, Wang, Xiong, Meister, Platnick, Levy, Franz, Korkin, Hilker, Tucker, Hall, Sellers, Wu and Angal (2014). Degradation largest in Terra band B3 and decreasing with wavelength, the list of C5 products carrying spurious negative trends, the C6 removal of major Level 1B trends, the C6+ polarisation correction for increased Terra polarisation sensitivity since about 2007 together with detrending and Terra–Aqua cross-calibration over quasi-stable desert sites, the residual decadal trends of several tenths of 1 % of TOA reflectance in B1–B4, the additional Terra ΔNDVI ~0.01 decadal trend removed over the southern United States, and the statement that C5 production would be maintained for another year in parallel with C6.
8. **NIST** — [Traceability](https://www.nist.gov/calibrations/traceability). The VIM definition of metrological traceability as a documented unbroken chain of calibrations each contributing to the uncertainty, and the statement that traceability alone does not guarantee fitness for purpose.
9. **USGS** — [Landsat Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2). Collection 2 as the second major reprocessing effort on the Landsat archive, and the radiometric calibration improvements it applied.
