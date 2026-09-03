---
title: 'Lapse rates and stability: why the troposphere convects and the stratosphere does not'
excerpt: Two different quantities are both called the lapse rate, and confusing them produces most of the errors made about atmospheric stability. Here is what each one measures, how they combine, and what the tropopause definition actually says.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - lapse-rate
  - atmospheric-stability
  - tropopause
  - temperature-inversion
related:
  - atmospheric-physics-explained
  - convection-and-cloud-formation
  - the-greenhouse-effect-physics
  - atmospheric-circulation-cells
pillar: atmospheric-physics-explained
---

Two quite different quantities are routinely called "the lapse rate". One is a property of a rising parcel of air, fixed by thermodynamics and the same everywhere on the planet. The other is a property of the surrounding air column, measured by a radiosonde and different every day. Stability is the comparison between them, and almost every muddle about why air rises, why smoke sometimes hangs over a valley, and why the stratosphere is called what it is comes from treating the two as one number. The vertical temperature structure this produces is the second half of the picture sketched in [the overview of atmospheric physics](/en/physics/climate-physics/atmospheric-physics-explained), where the pressure profile was the first.

## Three rates, and what each one describes

An unsaturated parcel lifted through the atmosphere expands against falling pressure and cools without exchanging heat with its surroundings. NOAA's parcel-theory reference gives that **dry adiabatic lapse rate** as a fixed 9.8 °C per 1,000 metres. Once the parcel saturates, condensation releases latent heat into it and slows the cooling: NOAA's skew-T documentation puts the near-surface **moist adiabatic rate** at about 4 °C per 1,000 metres, rising towards the dry value in the upper troposphere as there is progressively less vapour left to condense. The **environmental lapse rate** is whatever the sounding says; the standard atmosphere used in aviation, in NASA Glenn's formulation, sets it at 0.00649 °C per metre from a 15.04 °C surface up to 11,000 metres.

| Rate | Value | What it is a property of |
| --- | --- | --- |
| Dry adiabatic | 9.8 °C/km | A lifted unsaturated parcel |
| Moist adiabatic | about 4 °C/km near the surface, approaching 9.8 °C/km aloft | A lifted saturated parcel |
| Environmental | measured; 6.49 °C/km in the standard atmosphere | The surrounding air column |

## Stability is a comparison, not a property of air

Whether a displaced parcel keeps going depends on how its own cooling rate compares with the temperature it finds around it. NOAA's teaching material makes the comparison with a ball and a bowl. If the environmental rate is shallower than both adiabats, a lifted parcel is always colder and denser than its surroundings and sinks back: the column is absolutely stable, the ball returns to the bottom of the bowl. If the environmental rate is steeper than the dry adiabat, any displacement grows: absolutely unstable, the bowl inverted. Between the two — steeper than the moist adiabat, shallower than the dry one — the answer depends on whether the parcel reaches saturation before it runs out of buoyancy. This is **conditional instability**, and NOAA describes it as one of the most common states of the atmosphere.

That intermediate case is why the sky is not simply either calm or convecting. It is also why lifting matters as much as heating: a conditionally unstable column needs something to push a parcel to its level of free convection, whether a front, terrain, or surface heating, before it will do anything on its own. What happens after that point — droplet nucleation, growth, glaciation — is the subject of [how convection builds clouds](/en/physics/climate-physics/convection-and-cloud-formation).

## Why the real profile sits between the two adiabats

The standard 6.49 °C per kilometre is not an arbitrary compromise. Radiation alone, acting on the atmosphere's opacity, would leave the lower atmosphere far steeper than the dry adiabat and therefore unstable. Convection removes the excess almost as fast as radiation creates it, and it does so along a moist adiabat in the humid tropics because ascending air is usually saturated. The observed mean profile is the residue of that competition: steep enough to keep convection going, shallow enough that it does not run away.

This is not a detail of meteorology. A falling temperature profile is a precondition for the whole radiative argument set out in [the emission-height account of the greenhouse effect](/en/physics/climate-physics/the-greenhouse-effect-physics), which is why the lapse rate appears in climate feedback accounting rather than only in forecasting.

## CAPE: a real energy, and an upper bound nobody reaches

Instability that is available rather than merely possible is measured as **convective available potential energy**. NOAA's Storm Prediction Center defines it as the total potential energy available to a parcel originating at the surface once it is lifted to its level of free convection, expressed in joules per kilogram.

Because it is an energy per unit mass, CAPE converts directly into a velocity: the maximum updraft speed in undiluted parcel theory is the square root of twice the CAPE, so 2,000 J/kg corresponds to about 63 m/s. Real updrafts fall well short of that, for reasons the parcel model deliberately ignores. Entrainment mixes drier environmental air into the rising column and dilutes its buoyancy; condensed water is carried along and weighs the parcel down; and pressure perturbations around the updraft do work on it. CAPE is best read as a ceiling and a comparative index, not a forecast of what the air will do.

The companion quantity, convective inhibition, measures the negative-buoyancy work needed to get a parcel through a stable layer to that level. A column can hold a large CAPE all afternoon and produce nothing, because the lid never breaks.

## Inversions: the profile turned upside down

When temperature increases with height near the ground, the column is about as stable as it can be, and vertical mixing largely stops. Inversions form by several routes: clear-night radiative cooling of the surface, subsidence warming aloft in a high-pressure system, and — in basins and valleys — cold dense air pooling in the terrain and staying there for days.

The persistent kind has been studied directly. A field campaign in Utah's Salt Lake valley ran from 1 December 2010 to 7 February 2011 and documented ten persistent cold-air pool episodes in a single winter. The reported air-quality association is straightforward: the 24-hour mean concentration of fine particulate matter often exceeds the US National Ambient Air Quality Standard of 35 µg/m³ during these episodes, and during each of the four longest pools observed in that campaign it did. The mechanism is not extra emission but the loss of the volume the emissions used to be diluted into. How those concentrations are defined and measured is covered in the work on [air-quality measurement and standards](/en/ecology/pollution/air-quality-measurement-and-standards).

Inversions are also the part of the profile that observation handles worst. Shallow surface inversions, thin stable layers and the top of the boundary layer are features a few tens of metres deep; neither the radiosonde network nor a typical model level spacing resolves them everywhere, so a stable layer can be real, consequential and invisible to the sounding meant to detect it. That resolution problem propagates outward, because the strength of the mid-latitude storm track depends on gradients living in the same shallow layers — a dependence taken up in [the global circulation cells](/en/physics/climate-physics/atmospheric-circulation-cells).

## The tropopause is a criterion, not an object

Above the troposphere the sign flips, and it flips because ozone absorbs solar ultraviolet and deposits the energy locally. NOAA's layer description records the resulting profile: temperature climbing from an average of about −51 °C at the tropopause to roughly −15 °C at the top of the stratosphere, and notes that this arrangement — warmer air above cooler — suppresses convection, which is why thunderstorm anvils spread flat at that level. The stratosphere holds about 19 per cent of the atmosphere's mass and very little water vapour.

Where exactly the boundary lies is set by definition rather than found. The World Meteorological Organization's lapse-rate criterion, quoted in a reanalysis assessment published in *Atmospheric Chemistry and Physics*, defines the first tropopause as "the lowest level at which the lapse rate decreases to 2 °C/km or less, provided also the average lapse rate between this level and all higher levels within 2 km does not exceed 2 °C/km", with a second tropopause identified above it wherever the average lapse rate over any 1 km layer again exceeds 3 °C/km. Applied to reanalysis fields, that criterion puts the mean tropical tropopause at 16 to 17 km and the high-latitude one between roughly 8 and 12.5 km — consistent with NOAA's simpler statement that the troposphere reaches 18 to 20 km at the equator and about 6 km at the poles.

How much that criterion carries is worth being explicit about. The same assessment found monthly mean tropopause-height differences between two generations of one reanalysis system ranging from about −300 m near 30° latitude to 150 m at the equator, with no change whatever in the underlying atmosphere. A trend in tropopause height compared across products is therefore partly a trend in algorithm and input data. The boundary is a threshold applied to a gradient, and where a gradient is smooth the threshold does the deciding.

## Sources

1. **NOAA JetStream** — [Parcel Theory](https://www.noaa.gov/jetstream/upperair/parcel-theory). Dry adiabatic lapse rate and the buoyancy argument for stability.
2. **NOAA JetStream** — [Skew-T Log-P Diagrams](https://www.noaa.gov/jetstream/upperair/skew-t-log-p-diagrams). Moist adiabatic rate near the surface and its convergence on the dry rate aloft.
3. **NOAA JetStream** — [Stability and Instability](https://www.noaa.gov/jetstream/upperair/bowls). The four stability regimes and conditional instability as the common case.
4. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Standard-atmosphere environmental lapse rate and troposphere depth.
5. **NOAA JetStream** — [Layers of the Atmosphere](https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere). Ozone heating, stratospheric temperature range and mass share, and tropopause heights by latitude.
6. **NOAA Storm Prediction Center** — [Surface-based CAPE](https://www.spc.noaa.gov/exper/mesoanalysis/help/help_sbcp.html). Definition and units of convective available potential energy.
7. **American Meteorological Society, Bulletin of the AMS** — [The Persistent Cold-Air Pool Study](https://journals.ametsoc.org/view/journals/bams/94/1/bams-d-11-00255.1.xml). Field campaign dates, episode count, and the particulate-matter association.
8. **Copernicus, Atmospheric Chemistry and Physics** — [An assessment of tropopause characteristics of the ERA5 and ERA-Interim meteorological reanalyses](https://acp.copernicus.org/articles/22/4019/2022/). WMO lapse-rate tropopause definition, mean tropopause heights, and inter-product differences.
