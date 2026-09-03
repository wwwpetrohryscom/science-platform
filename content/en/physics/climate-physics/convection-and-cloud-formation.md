---
title: 'Cloud physics: from a condensation nucleus to the widest uncertainty in climate sensitivity'
excerpt: Clouds cool the present-day planet by roughly 20 W/m², and their response to warming is still the largest single source of spread in climate sensitivity. Those two statements are not in tension, and understanding why is most of the subject.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - cloud-physics
  - cloud-feedback
  - condensation-nuclei
  - cloud-radiative-effect
related:
  - atmospheric-physics-explained
  - atmospheric-structure-and-lapse-rate
  - climate-model-physics-explained
  - climate-feedback-mechanisms
  - radiative-transfer-explained
pillar: atmospheric-physics-explained
_bodyHash: c52986a
---

Every droplet in every cloud condensed onto something else. Water vapour in clean air does not spontaneously assemble into droplets at the humidities the atmosphere actually reaches; it needs a surface to condense on, and NOAA's JetStream reference sets the useful minimum for that surface at a radius of about one micrometre. Smoke, volcanic ash, sea spray and wind-blown soil supply them in enormous numbers, which is why every cloud droplet has a speck of dirt or salt at its core. That microscopic requirement is the start of a chain that ends at the widest open question in [atmospheric physics](/en/physics/climate-physics/atmospheric-physics-explained).

## Cooling to saturation, then finding a surface

The common route to a cloud is mechanical. Air rises, the pressure around it falls, it expands, and expansion cools it without any heat being exchanged with its surroundings. NOAA gives that unsaturated cooling as 9.8 °C per kilometre of ascent, which is the same number everywhere on the planet because it follows from the thermodynamics of the gas rather than from local conditions; the distinction between that rate and the one a radiosonde actually measures is set out in the companion article on [lapse rates and atmospheric stability](/en/physics/climate-physics/atmospheric-structure-and-lapse-rate).

Once the parcel reaches saturation, vapour condenses onto the available **cloud condensation nuclei** — hygroscopic particles that attract water molecules and are far smaller than the droplets they seed. The Met Office puts the resulting droplets at about a hundredth of a millimetre across — small enough that ordinary turbulence holds them up, and far too small to fall out as rain.

What follows is not a static object. Drier air is continuously entrained into a rising parcel, so condensation and evaporation both run at once; a cloud grows where condensation wins and dissipates where evaporation does. That is why a cloud visibly changes shape, and appears and disappears, while the air mass it sits in changes far more slowly.

The familiar classification by altitude is a description of where that process happened, not of a different physics. The Met Office's convention for the British Isles puts low cloud bases below 6,500 ft, medium cloud between 6,500 and 20,000 ft, and high cloud at 20,000 ft or above. Those thresholds are regional bookkeeping — the tropopause sits far higher over the tropics than over the poles, so the same category means a different absolute height at a different latitude.

## Condensation gives you a cloud; it does not give you rain

Cloud droplets are too small and too light to fall out, and growing them by continued condensation is far too slow to explain observed rainfall. Two other mechanisms do the work, and NOAA treats them separately.

The **collision–coalescence** or warm-rain process relies on the droplet population being uneven. Droplets of different size fall at different speeds, larger ones overtake smaller ones, and collisions that stick produce drops that fall faster still, collide more often, and eventually leave the cloud as rain.

The **ice-crystal process** operates in colder cloud where ice crystals and liquid droplets coexist. Water vapour deposits directly onto ice more readily than it coalesces as liquid, so the crystals grow at the expense of the surrounding droplets until they are heavy enough to fall — reaching the ground as snow if the lower air is cold enough, and as rain if it is not.

That second mechanism is worth holding on to, because the mixed-phase cloud in which it operates — liquid and ice in the same volume, at temperatures below freezing — turns out to be where the largest recent revision to modelled climate sensitivity came from.

## Two radiative jobs, pointing in opposite directions

A cloud reflects incoming sunlight, which cools. It also absorbs radiation from the surface below and re-emits at its own, colder temperature, which warms — the wavelength-by-wavelength bookkeeping behind that second effect is set out under [radiative transfer](/en/physics/climate-physics/radiative-transfer-explained). Whether either dominates depends on how reflective the cloud is and how high its top is, and the aggregate is not obvious from the physics of a single cloud.

IPCC AR6 quantifies the aggregate by comparing the observed energy budget with one computed by removing the clouds and leaving everything else in place. Without clouds, 47 W/m² less solar radiation is reflected back to space — 53 ± 2 W/m² instead of 100 ± 2 W/m² — while 28 W/m² more thermal radiation escapes, 267 ± 3 W/m² instead of 239 ± 3 W/m². The shortwave term wins, and the cloud-free budget is left with a 20 W/m² imbalance at the top of the atmosphere. Clouds, on balance, cool the present-day planet by about that much.

Two caveats travel with that figure. AR6 is explicit that the cloud-free budget is not the state a cloud-free Earth would settle into; it is the same atmosphere with the cloud radiative properties switched off, which is exactly how models compute clear-sky fluxes and is therefore the right comparison for that purpose. And the cooling is a global mean over a very uneven field: MODIS on NASA's Aqua satellite, over July 2002 to April 2015, found about 67 per cent of Earth's surface typically under cloud, with less than 10 per cent of the sky over the oceans completely clear at any moment against 30 per cent over land.

## Why "clouds cool the planet" tells you nothing about the feedback

This is where the subject is most often misread. The 20 W/m² is a property of the current state. A **cloud feedback** is a derivative: how the cloud contribution to the energy budget changes per degree of warming. A field that cools strongly today can still amplify warming, if the warming makes it cool slightly less strongly, and that is what the evidence indicates.

AR6 assesses the net cloud feedback at +0.42 W m⁻² °C⁻¹, with a very likely range of −0.10 to +0.94, high confidence that it is positive, and a judgement that a net negative cloud feedback is very unlikely. The uncertainty on that term is roughly half what AR5 carried, largely because the assessment stopped treating clouds as one object and assessed each regime on its own.

| Cloud regime | AR5 assessment | AR6 assessment |
| --- | --- | --- |
| High-cloud altitude | Positive (high confidence) | Positive (high confidence) |
| Tropical high-cloud amount | Not assessed | Negative (low confidence) |
| Subtropical marine low cloud | Not assessed (low confidence) | Positive (high confidence) |
| Land cloud | Not assessed | Positive (low confidence) |
| Mid-latitude cloud amount | Positive (medium confidence) | Positive (medium confidence) |
| Extratropical cloud optical depth | Not assessed | Small negative (medium confidence) |
| Arctic cloud | Small positive (very low confidence) | Small positive (low confidence) |

Note what the table does and does not say. The subtropical marine low cloud line — a shallow, reflective deck over the eastern subtropical oceans — moved from the single largest source of doubt to a high-confidence positive, on the combined strength of satellite retrievals and simulations that resolve those decks explicitly instead of relying on the approximations a coarse grid forces, an issue taken up in [what a climate model solves and what it approximates](/en/physics/climate-physics/climate-model-physics-explained). Three regimes remain at low confidence. And the cloud term is not the largest feedback: the combined water-vapour and lapse-rate response is bigger, as the assessed values for [each feedback parameter](/en/ecology/earth-systems/climate-feedback-mechanisms) show. It is simply the one that dominates the uncertainty.

## What repairing one bias did to the answer

Between CMIP5 and CMIP6, the modelled net cloud feedback grew by about 20 per cent, and AR6 identifies that as the main reason the net climate feedback became less negative and modelled sensitivity rose. The change was traced in part to extratropical cloud containing both ice and supercooled liquid. CMIP5 models carried too little supercooled liquid over the Southern Ocean and therefore cloud optical depths biased low, which left their shortwave cooling there too weak. Reducing that bias — guided by laboratory experiments, field measurements and satellite observations — changed how the same clouds respond to warming, and in a number of models raised the shortwave cloud feedback. The [analysis of higher sensitivity in CMIP6](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL085782) is the reference AR6 leans on for the attribution.

The episode is a useful corrective to the assumption that model development converges on a stable answer. A defensible improvement to one process moved the ensemble away from the previous central estimate — which is one reason AR6 declined to take model sensitivity at face value and assessed [equilibrium climate sensitivity](/en/ecology/climate-change/climate-sensitivity-explained) from several independent lines of evidence instead.

## Where the instruments stop

The satellite record of the energy budget is precise about change and much less precise about absolutes. AR6 puts the accuracy of CERES EBAF Ed4.0 global mean fluxes at 1.7 per cent, or 1.7 W/m², for reflected solar radiation and 1.3 per cent, or 3.0 W/m², for outgoing thermal radiation at 90 per cent confidence — which is not good enough to state Earth's energy imbalance in absolute terms, since the imbalance itself is smaller than those bars. The published fluxes are therefore adjusted, within the stated uncertainty, to agree with an independent estimate built from ocean heat content. Anyone comparing an absolute top-of-atmosphere number against a model should know it has been anchored that way.

The forcing side is worse constrained than the feedback side. Aerosols seed cloud droplets, and changing their number changes cloud brightness and lifetime. AR6 assesses the effective radiative forcing from aerosol–cloud interactions at −1.0 W/m² with a range of −1.7 to −0.3 and only medium confidence — the largest component of the total aerosol forcing, and wide enough that it remains one of the loosest terms in the historical energy budget. Narrowing it is a different measurement problem from narrowing the feedback, and progress on one does not deliver the other.

## Sources

1. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Cloud radiative effect in the global energy budget, the assessed net cloud feedback and its regime breakdown, CERES accuracy, and aerosol–cloud forcing.
2. **NOAA JetStream** — [How clouds form](https://www.noaa.gov/jetstream/clouds/how-clouds-form). Cloud condensation nuclei, adiabatic cooling on ascent, and the continuous condensation–evaporation balance.
3. **NOAA JetStream** — [Precipitation](https://www.noaa.gov/jetstream/atmosphere/precipitation). The collision–coalescence and ice-crystal routes from cloud droplet to precipitation.
4. **Met Office** — [Types of cloud](https://weather.metoffice.gov.uk/learn-about/weather/types-of-weather/clouds). Droplet size and the cloud-base height conventions used for classification.
5. **NASA Earth Observatory** — [Cloudy Earth](https://science.nasa.gov/earth/earth-observatory/cloudy-earth-85843/). Global cloud fraction from MODIS on Aqua and its land–ocean contrast.
6. **NASA Earth Observatory** — [Clouds and radiation](https://science.nasa.gov/earth/earth-observatory/clouds-and-radiation/). How cloud altitude and optical thickness set the balance between albedo and greenhouse forcing.
7. **Geophysical Research Letters** — [Causes of higher climate sensitivity in CMIP6 models](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL085782). The extratropical mixed-phase cloud origin of the stronger CMIP6 cloud feedback.
