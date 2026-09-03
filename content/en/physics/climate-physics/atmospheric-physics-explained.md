---
title: 'Atmospheric physics: the machine that moves energy from equator to pole'
excerpt: The atmosphere holds about ten tonnes of air over every square metre and carries roughly five petawatts of energy poleward. This page sets out the composition, vertical structure, energy budget and transport mechanics the rest of the subject rests on.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - atmospheric-physics
  - energy-budget
  - hydrostatic-balance
  - poleward-heat-transport
related:
  - radiative-transfer-explained
  - the-greenhouse-effect-physics
  - atmospheric-structure-and-lapse-rate
  - atmospheric-circulation-cells
_bodyHash: e6b3fe56
---

Air is thin, and the arithmetic makes that concrete. NOAA gives standard sea-level pressure as 1013.25 hPa, which is the weight of a column carrying about 10.3 tonnes of air over each square metre of ground. By the cruising altitude of an airliner, roughly three-quarters of that column is already below you. What this shell does with the energy passing through it is the subject of atmospheric physics, and the single most useful summary of what it does is a transport figure: about five petawatts, moved from the tropics towards each pole, continuously.

## The abundant gases are not the interesting ones

NOAA's JetStream reference gives dry air as 78.084 per cent nitrogen, 20.946 per cent oxygen and 0.934 per cent argon by volume, with the top four constituents accounting for 99.998 per cent of the total. Water vapour is kept out of that table for a good reason: unlike the others it is not well mixed, ranging from near zero over desert regions with dry winds to something approaching 4 per cent by volume in the humid tropics.

The mass ranking and the radiative ranking are almost inverted. Nitrogen, oxygen and argon do very little to infrared radiation, so the radiative behaviour of the whole shell is set by constituents present in fractions of a per cent or less. NOAA's table lists carbon dioxide at 0.042 per cent; its Global Monitoring Laboratory puts the global annual mean at 425.62 ± 0.09 parts per million for 2025. Why a gas at four parts in ten thousand should matter when one at four parts in five does not is a question about molecular symmetry rather than abundance, and it is worked through in the article on [how radiative transfer actually works](/en/physics/climate-physics/radiative-transfer-explained).

## Pressure obeys one equation almost everywhere

For any layer of air that is not accelerating vertically, the upward pressure-gradient force balances its own weight. That is **hydrostatic balance**, and because density is itself proportional to pressure at a given temperature, the balance forces pressure to fall close to exponentially with height. Using NASA Glenn's standard-atmosphere relations — which set a surface temperature of 15.04 °C and a decrease of 0.00649 °C per metre through the troposphere — pressure falls to half its sea-level value at about 5.5 km and to roughly 22 per cent by 11 km.

Hydrostatic balance is one of the most reliable approximations in the subject, and its failures are informative. It breaks down exactly where vertical accelerations become large, which in practice means inside deep convective updrafts. That is one reason [the physics of convection and cloud formation](/en/physics/climate-physics/convection-and-cloud-formation) has to be handled as its own problem rather than as a correction to the mean state.

Temperature is far less obliging. It falls through the troposphere, holds nearly constant through the lower stratosphere at about −56.5 °C in the standard atmosphere, then rises again where ozone absorbs ultraviolet. The sign changes are what divide the atmosphere into layers at all, and the reasoning is set out in the companion article on [lapse rates and atmospheric stability](/en/physics/climate-physics/atmospheric-structure-and-lapse-rate).

## The budget that everything else has to close

NASA's Earth Observatory puts the intensity of sunlight at the top of the atmosphere, on the face directly presented to the Sun, at about 1,360 watts per square metre. Spread over the whole rotating sphere that becomes roughly 340 W/m². Of that, about 29 per cent is reflected by clouds, aerosol and bright surfaces; about 23 per cent is absorbed within the atmosphere by water vapour, dust and ozone; and about 48 per cent reaches and is absorbed by the surface. Some 71 per cent of the arriving energy is therefore absorbed, or close to 240 W/m².

Over the long run the planet has to emit that much back to space, and it very nearly does. The residual is small and it is the whole anthropogenic signal. The IPCC's AR6 assessment reports an [Earth energy imbalance](/en/glossary/earth-energy-imbalance) of 0.50 [0.32 to 0.69] W/m² for 1971–2006, rising to 0.79 [0.52 to 1.06] W/m² for 2006–2018, with ocean heat uptake accounting for 91 per cent of the total energy change. NASA's CERES project puts the present magnitude at approximately 0.7 W/m², which it notes is 0.3 per cent of absorbed solar radiation. Detecting three parts in a thousand in a budget of that size is the central measurement problem of the field.

The reason the surface sits well above the 255 K implied by emitting 240 W/m² is not that energy is stored under a lid; it is that the altitude from which the planet radiates to space is not the surface. That argument is set out carefully in [the emission-height account of the greenhouse effect](/en/physics/climate-physics/the-greenhouse-effect-physics).

## Three transport mechanisms, and where each one wins

Energy moves through the atmosphere by radiation, by convection — including the latent heat carried in water vapour and released on condensation — and by advection, the bulk transport of warm or moist air by the wind. The three have different scaling behaviour and different characteristic distances, a comparison developed in general terms in the article on [conduction, convection and radiation as heat-transfer mechanisms](/en/physics/thermodynamics/heat-transfer-conduction-convection-radiation).

| Mechanism | Dominant direction | What limits it |
| --- | --- | --- |
| Radiation | Vertical, and outward to space | Opacity of the air at each wavelength |
| Convection | Vertical, within the troposphere | Static stability; latent heat release |
| Advection | Horizontal, equator to pole | Wind speed and the temperature contrast being carried |

The division of labour between atmosphere and ocean has been quantified. An analysis in the *Journal of Climate* using reanalysis data and Earth Radiation Budget Experiment fluxes found annual mean poleward transports of atmospheric energy peaking at 5.0 ± 0.14 PW at 43°N, with similar values near 40°S. At 35° latitude, where the peak total poleward transport occurs in each hemisphere, the atmosphere carries 78 per cent of the total in the Northern Hemisphere and 92 per cent in the Southern. Ocean transport dominates only between the equator and about 17°N. The ocean is a large reservoir; it is not, at most latitudes, the main conveyor.

## Rotation is what makes it a circulation rather than a single cell

A non-rotating planet heated at the equator would run one enormous overturning cell per hemisphere. Earth turns once in 23.9 hours, and the resulting Coriolis acceleration — proportional to twice the rotation rate times the sine of latitude, so zero at the equator and largest at the poles — deflects poleward-moving air until it can no longer complete the circuit. The tropical cell breaks off in the subtropics, and the mid-latitudes transport heat by transient eddies instead. That geometry is the subject of the article on [the Hadley, Ferrel and polar cells](/en/physics/climate-physics/atmospheric-circulation-cells).

Both parameters in that argument — the rotation rate and the surface gravity that sets the pressure scale — are properties of the solid planet rather than of the air, and they are known from the methods described in [how the Earth's interior is measured](/en/physics/climate-physics/geophysics-and-earth-structure).

## The surface half of the budget is the weak half

The top-of-atmosphere budget is far better constrained than the surface budget beneath it. AR6 puts the uncertainty in global monthly mean downward solar and thermal fluxes in the CERES-EBAF surface dataset at 10 and 8 W/m² respectively, and the uncertainties in ocean mean latent and sensible heat fluxes at roughly 11 and 5 W/m². Those are large compared with the imbalance the budget is being used to detect, which is why the imbalance is estimated from ocean heat content rather than by differencing surface fluxes.

Model spread is comparable. AR6 notes that differences in land-averaged downward thermal and solar radiation across CMIP5 models amounted to more than 30 and 40 W/m² respectively, though CMIP6 agrees better with reference estimates. Polar surface fluxes remain the least constrained, for the straightforward reason that there are fewer surface sites. What follows from all of this — which parts of the atmosphere a numerical model solves and which parts it represents by approximation — is taken up in [what is inside a climate model](/en/physics/climate-physics/climate-model-physics-explained).

## Sources

1. **NOAA JetStream** — [The Atmosphere](https://www.noaa.gov/jetstream/atmosphere). Dry-air composition table, water-vapour range, and the share held by the four most abundant gases.
2. **NOAA JetStream** — [Air Pressure](https://www.noaa.gov/jetstream/atmosphere/air-pressure). Standard sea-level pressure of 1013.25 hPa.
3. **NOAA Global Monitoring Laboratory** — [Global annual mean CO₂](https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_gl.txt). Global marine-surface annual mean series through 2025.
4. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Standard-atmosphere temperature and pressure relations used for the halving height.
5. **NASA Earth Observatory** — [Climate and Earth's Energy Budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Solar irradiance, reflected and absorbed fractions, and the surface budget.
6. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Earth energy imbalance for 1971–2006 and 2006–2018, and surface-flux uncertainties.
7. **NASA CERES** — [Science overview](https://ceres.larc.nasa.gov/science/). Present magnitude of the energy imbalance as a fraction of absorbed solar radiation.
8. **American Meteorological Society, Journal of Climate** — [Estimates of Meridional Atmosphere and Ocean Heat Transports](https://journals.ametsoc.org/view/journals/clim/14/16/1520-0442_2001_014_3433_eomaao_2.0.co_2.xml). Peak poleward atmospheric transport and the atmosphere-ocean split by latitude.
