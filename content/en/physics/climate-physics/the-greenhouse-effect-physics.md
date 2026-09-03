---
title: 'The greenhouse effect: the emission-height argument, done properly'
metaTitle: 'The greenhouse effect and the emission-height argument'
excerpt: Neither the blanket nor the greenhouse describes what actually happens. The mechanism is a shift in the altitude from which the planet radiates to space, and it only works because temperature falls with height.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - greenhouse-effect
  - emission-height
  - infrared-spectra
  - band-saturation
related:
  - radiative-transfer-explained
  - atmospheric-physics-explained
  - atmospheric-structure-and-lapse-rate
  - climate-sensitivity-explained
pillar: atmospheric-physics-explained
_bodyHash: cd9f1534
---

An actual greenhouse works by stopping convection: the glass keeps warm air from rising away, and the radiative properties of the glass are secondary. The atmosphere does not do that — the troposphere convects vigorously, which is precisely the point. A blanket works by suppressing conduction and convection at the skin. The atmosphere does not do that either. Both metaphors survive because they get the sign of the answer right, and both fail the moment anyone asks what happens when the concentration changes.

The mechanism is a change in the altitude from which infrared radiation escapes to space, and it depends on a fact about vertical structure that neither metaphor contains.

## The 33 K figure, and the three things it is not

Start with the balance already established in [the atmospheric energy budget](/en/physics/climate-physics/atmospheric-physics-explained). The planet absorbs about 240 W/m² of sunlight, so in the long run it must radiate about that much. Setting Stefan's law equal to 240 W/m² with the CODATA constant gives an effective emitting temperature of 255 K. The observed global mean surface temperature is about 288 K, which NASA's Earth Observatory records as roughly 15 °C — "more than 30 degrees warmer than it would be if it didn't have an atmosphere", in their phrasing. The gap of about 33 K is the greenhouse effect as a temperature.

Three qualifications travel with that number and are usually left off.

It is not a prediction of what stripping the atmosphere away would do. The calculation holds planetary albedo fixed at its present value of about 0.29, and most of that reflection comes from clouds and from ice whose extent depends on having an atmosphere in the first place. An airless Earth would have a different albedo and therefore a different answer.

It is not a statement about one gas. NASA's Goddard Institute for Space Studies attributed the absorption in a set of radiative experiments as roughly 50 per cent to water vapour, 25 per cent to clouds and 20 per cent to carbon dioxide, with the remainder from ozone, methane and aerosol. Carbon dioxide is a fifth of the effect, not the whole of it — and it is the fifth that behaves as a forcing rather than as a response, because water vapour condenses out and carbon dioxide does not.

And it is not an amount of "trapped heat". In flux terms the same institute's work puts the surface emission at about 150 W/m² more than what leaves for space. Energy is not accumulating at that rate anywhere; it is being emitted, absorbed, and re-emitted, with the atmosphere returning a large share downward.

## Why the emission altitude is the thing that changes

Every infrared wavelength escapes to space from the level where the [optical depth](/en/glossary/optical-depth) measured downward from the top reaches about one, a point developed in [how radiative transfer works line by line](/en/physics/climate-physics/radiative-transfer-explained). Averaged across the spectrum, that level for present-day Earth sits several kilometres up. Taking the standard tropospheric temperature decrease of about 6.5 K per kilometre, the altitude at which the air is at 255 K is roughly five kilometres above a 288 K surface.

Now add carbon dioxide. At wavelengths where the band is not already opaque, the extra molecules mean that a photon emitted at a given altitude is more likely to be reabsorbed, so escape occurs from higher up. Higher up is colder. Colder air emits less. For a moment the planet is emitting less than it absorbs, and it must warm until the emitting level, wherever it has moved to, is back at the temperature that balances the incoming sunlight.

The whole argument rests on the temperature falling with height. In an isothermal atmosphere, raising the emission altitude would change nothing at all, because the new level would emit exactly as much as the old one. This is why the greenhouse effect cannot be explained without the [lapse rate and the stability structure that maintains it](/en/physics/climate-physics/atmospheric-structure-and-lapse-rate) — and why a warming that changes the lapse rate changes the strength of the effect as a side consequence.

## The saturation objection, and why the band edges answer it

The strongest-sounding objection to all of this is that the carbon dioxide band centre is already opaque, so adding more can do nothing. It was raised in that form by Ångström in 1900, it has been raised in the same form many times since, and it has a specific answer: a band is not a step function. Its edges are pressure-broadened line wings where absorption remains weak, and those wings keep thickening as concentration rises. What saturates is the centre; what does the work is the margin. The line-shape mechanics behind that, and the near-logarithmic response they produce, belong to the wavelength-by-wavelength calculation referred to above.

The emission-height framing makes the same point without any spectroscopy. A saturated band means only that escape happens from high up. Raising the escape level further still lowers the emitting temperature, and still forces a compensating adjustment at the surface, for as long as temperature falls with altitude.

The instantaneous radiative change is smaller than the eventual response, and by a large factor. The Goddard analysis gives about 4 W/m² of extra absorption from doubling carbon dioxide directly, rising to almost 20 W/m² once water vapour and clouds have adjusted to the warmer atmosphere — a result the science brief itself qualifies as holding "in the GISS climate model, at least". The direct effect is well constrained; the multiplier is not, which is the subject of [climate sensitivity](/en/ecology/climate-change/climate-sensitivity-explained).

## What has actually been measured

Three independent observational lines bear on the argument, and they test different parts of it.

The outgoing spectrum has been compared across decades. Work published in *Nature* in 2001 inferred [increases in greenhouse forcing from the outgoing longwave radiation spectra of the Earth in 1970 and 1997](https://www.nature.com/articles/35066553) — a direct test at the top of the atmosphere, where the emission-height argument predicts the spectrum should change in specific bands rather than uniformly.

The surface side has been measured too. Spectroscopic observations at two Department of Energy sites, the Southern Great Plains and the North Slope of Alaska, yielded clear-sky carbon dioxide surface radiative forcing attributable to the 22 ppm rise between 2000 and 2010, with trends of 0.2 W/m² per decade at each site — uncertainties of ± 0.06 and ± 0.07 W/m² per decade respectively — and seasonal ranges of 0.1 to 0.2 W/m². The authors note this amounts to roughly 10 per cent of the trend in total downwelling longwave radiation, which is a useful reminder of how small the signal is relative to the flux carrying it.

The energy is going somewhere, and it is measurable at the top of the atmosphere. NASA's CERES project gives the magnitude of the imbalance as approximately 0.7 W/m², or 0.3 per cent of absorbed solar radiation — a figure its science overview states without attaching a period to it — while the IPCC's assessed value for 2006–2018 is 0.79 [0.52 to 1.06] W/m².

## One emission height is a summary statistic

A caveat is owed to the argument this page has been making. "The" emission height is an average over a spectrum whose individual wavelengths escape from levels kilometres apart, and in the window region much of what leaves still comes from the surface itself. A single altitude is a convenient summary, not a place. The physics is exact wavelength by wavelength and only tidy in aggregate, which is worth remembering whenever the five-kilometre figure is used as though it were a measurement.

What the account establishes is the sign, and for the direct radiative change roughly the magnitude. It does not settle the response. The step from about 4 W/m² of extra absorption to a surface temperature change runs through water vapour, lapse-rate adjustment, surface albedo and clouds, and the cloud term — the reason the spread in sensitivity estimates has resisted narrowing, as [the treatment of cloud physics](/en/physics/climate-physics/convection-and-cloud-formation) sets out — is the least constrained of the four.

## Sources

1. **NASA Earth Observatory** — [Climate and Earth's Energy Budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Absorbed solar flux, mean surface temperature, and the magnitude of the natural greenhouse effect.
2. **NASA Goddard Institute for Space Studies** — [Taking the Measure of the Greenhouse Effect](https://www.giss.nasa.gov/research/briefs/2010_schmidt_05/). Attribution of infrared absorption among water vapour, clouds and carbon dioxide, and the direct versus adjusted response to doubling.
3. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Planetary albedo, the assessed Earth energy imbalance, and the history of the saturation objection.
4. **NIST** — [Stefan-Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Constant used for the 255 K effective-temperature calculation.
5. **Nature** — [Increases in greenhouse forcing inferred from the outgoing longwave radiation spectra of the Earth in 1970 and 1997](https://www.nature.com/articles/35066553). Decadal comparison of top-of-atmosphere infrared spectra.
6. **US Department of Energy, OSTI** — [Observational determination of surface radiative forcing by CO₂ from 2000 to 2010](https://www.osti.gov/pages/biblio/1512180). Measured surface forcing trends at two long-running spectroscopic sites.
7. **NASA CERES** — [Science overview](https://ceres.larc.nasa.gov/science/). Present magnitude of the Earth energy imbalance.
8. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Standard tropospheric temperature decrease used for the emission-altitude estimate.
