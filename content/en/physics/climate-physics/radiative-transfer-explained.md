---
title: 'Radiative transfer: absorption, emission, and why the spectrum matters more than the total'
excerpt: Radiative transfer is bookkeeping done wavelength by wavelength. A temperature fixes what a body emits, molecular structure fixes what the air absorbs, and almost every interesting result comes from the mismatch between the two.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - radiative-transfer
  - blackbody-radiation
  - absorption-spectra
  - band-saturation
related:
  - atmospheric-physics-explained
  - the-greenhouse-effect-physics
  - convection-and-cloud-formation
  - atmospheric-structure-and-lapse-rate
pillar: atmospheric-physics-explained
_bodyHash: ef836c18
---

A radiative transfer calculation does not ask how much heat the air holds. It asks, at each wavelength separately, how much radiation is emitted, how much is absorbed on the way through, and what emerges at the top. Almost every result that matters in [atmospheric physics](/en/physics/climate-physics/atmospheric-physics-explained) — the surface temperature, the direction of the outgoing spectrum, the size of a forcing — falls out of doing that accounting properly rather than in aggregate.

## What a temperature buys you

Three results fix what an object emits if it emits as a [blackbody](/en/glossary/blackbody). Planck's law gives the full spectral shape as a function of temperature alone. Stefan's law gives the total: the flux is the fourth power of temperature multiplied by a constant that CODATA now fixes exactly, at 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴. Wien's displacement law gives the position of the peak.

Those are enough to separate the two radiation streams that reach and leave the planet. The Sun's surface is close to 5,800 K, which puts its emission peak near 0.50 µm, in the visible. Earth emits to space at an effective temperature near 255 K — the value that satisfies Stefan's law for the roughly 240 W/m² the planet absorbs — and that puts its peak near 11 µm, deep in the thermal infrared. The two spectra barely overlap. That separation, and not any difference in the physics, is what licenses the standard division into "shortwave" and "longwave" and lets them be modelled with different approximations. The wider behaviour of radiation across the spectrum is set out in [what the electromagnetic spectrum is used for](/en/physics/quantum-basics/electromagnetic-spectrum-applications).

### The peak depends on how you plot it

A detail that causes recurring confusion: the wavelength at which a blackbody spectrum peaks is not a single number, because it depends on whether the spectrum is expressed per unit wavelength or per unit frequency. CODATA lists both constants. The wavelength form, 2.897771955 × 10⁻³ m K, puts a 288 K surface's peak at 10.06 µm. The frequency form, 5.878925757 × 10¹⁰ Hz K⁻¹, gives a peak frequency that corresponds to 17.71 µm for the same body. Neither is wrong; they answer different questions, because the two spectra are related by a Jacobian that shifts the maximum. Quoted "peak wavelengths" of terrestrial radiation that differ by a factor of nearly two are usually this convention, not a disagreement.

## Why air is clear to sunlight and murky to heat

For a molecule to absorb or emit a photon by a vibrational transition, the vibration has to change the molecule's electric dipole moment. Nitrogen and oxygen are homonuclear diatomics: stretching the bond moves two identical nuclei symmetrically, the dipole moment stays zero, and the transition is forbidden. So the two gases that make up 99 per cent of the air are, to a good approximation, invisible in the thermal infrared. They are not perfectly transparent — dense gases absorb weakly through collision-induced dipoles — but the effect is small next to the trace gases.

Carbon dioxide is linear and symmetric too, yet its bending mode is not: bending it displaces the carbon off-axis and creates a dipole. Water vapour is bent to begin with and has a permanent dipole, giving it both a dense vibrational spectrum and a thick rotational band at long wavelengths. The consequence, in NASA Earth Observatory's description of the resulting spectrum, is a partly open **atmospheric window** running from roughly 8 to 14 µm with maximum transparency near 10 µm, where water vapour absorbs weakly — and a strong carbon dioxide band between about 12 and 15 µm that sits across the long-wavelength edge of it. This is the geometry behind the whole subject: the surface emits most strongly right where the air is most nearly clear, and the principal trace gas absorbs at the edge of that opening.

## Absorption and emission are the same coefficient

The equation that governs a beam passing through the air — Schwarzschild's equation — contains two terms that use the same quantity. Along any path, radiation is removed in proportion to the absorption coefficient and the intensity present, and added in proportion to the same absorption coefficient and the Planck function at the local temperature. A gas that absorbs strongly at a wavelength necessarily emits strongly at it.

That symmetry is what makes the useful concept **[optical depth](/en/glossary/optical-depth)**, the absorption coefficient integrated along the path. Where the optical depth measured downward from space reaches about one, radiation at that wavelength can escape; deeper than that it is reabsorbed before it gets out. Every wavelength therefore has its own effective emission level, and the outgoing spectrum is a map of the temperature at those levels rather than of the surface. Cloud droplets and ice crystals add a second complication — they scatter as well as absorb, and their optical properties depend on particle size — which is why they are handled separately in [the physics of cloud formation](/en/physics/climate-physics/convection-and-cloud-formation).

## Line shape, and why pressure enters at all

Absorption is organised into lines, and the width of a line is not a constant. Three broadening mechanisms compete. Natural broadening from the finite lifetime of the excited state is negligible here. Doppler broadening, from the thermal motion of the molecules, scales with the square root of temperature. Collisional broadening, from the interruption of the emitting state by neighbouring molecules, scales with pressure and dominates through the troposphere.

The practical result is that a line is broad and shallow-shouldered near the surface and narrow higher up. That has a direct bearing on how a greenhouse gas behaves: the far wings of a line, which are a pressure-broadening phenomenon, are where the absorption is weak enough to be unsaturated and therefore where added gas still does work.

## Saturation, wings, and the logarithm

The centre of the carbon dioxide band has been effectively opaque for a long time. In 1900 Ångström raised this as an objection to the whole idea, arguing that the atmosphere was already saturated in infrared absorption so more of the gas could not matter. The IPCC's AR6 assessment records that his assertion "was understood half a century later to be incorrect", and the reason is the line shape just described: absorption keeps growing on the wings of the band, and it grows there roughly in proportion to the logarithm of concentration rather than linearly.

The physical explanation is not merely spectroscopic. Line-by-line calculations reported in the *Journal of Geophysical Research: Atmospheres* found that the logarithmic dependence holds even for monochromatic radiance, which spectroscopic band-saturation arguments alone do not explain, and attributed it to an emission-layer displacement effect — the level from which a wavelength escapes moves upward as concentration rises, through an atmosphere whose temperature falls linearly with height and whose gas concentration decays exponentially with it.

The logarithm is an approximation with a known validity range. A 2016 revision of the standard forcing expressions in *Geophysical Research Letters* reported that the 1750–2011 carbon dioxide forcing is within 1 per cent of the previous assessed value but about 10 per cent higher when concentrations reach 2,000 ppm, and that methane's forcing rises about 25 per cent, from 0.48 to 0.61 W/m², once shortwave absorption is included. AR6's assessed effective radiative forcing for a doubling of carbon dioxide relative to 1750 is 3.93 ± 0.47 W/m². What that quantity is defined to mean, and how it is misread, is covered in the existing article on [greenhouse gases and radiative forcing](/en/ecology/climate-change/greenhouse-gases-and-radiative-forcing); how the same calculation produces a surface temperature is taken up in [the emission-height argument](/en/physics/climate-physics/the-greenhouse-effect-physics).

## Line parameters, the continuum, and broken cloud

Line-by-line codes are among the better-validated pieces of atmospheric physics, and their residual uncertainties are specific rather than general. Line strengths and their pressure-broadening parameters are measured in the laboratory and carry their own error bars, which propagate into forcing estimates. Water-vapour continuum absorption — the smooth background between lines, attributable partly to the far wings of distant lines and partly to weakly bound molecular pairs — is parameterised rather than derived, and it matters most in exactly the window region where the outgoing flux is largest.

Beyond the single column, the problems are geometric rather than spectroscopic. Real radiation fields are three-dimensional and real clouds are broken; treating each grid column as an independent plane-parallel slab is an approximation that is known to bias fluxes, and one whose error is difficult to bound observationally. The honest summary is that the clear-sky infrared calculation is a strong constraint, and the cloudy-sky one is not.

## Sources

1. **NIST** — [Stefan-Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). CODATA 2022 value, exact.
2. **NIST** — [Wien wavelength displacement law constant](https://physics.nist.gov/cgi-bin/cuu/Value?bwien). CODATA 2022 value used for the wavelength-form peak.
3. **NIST** — [Wien frequency displacement law constant](https://physics.nist.gov/cgi-bin/cuu/Value?bpwien). CODATA 2022 value used for the frequency-form peak.
4. **NASA Earth Observatory** — [Climate and Earth's Energy Budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Solar surface temperature, the 8-14 µm window, and the carbon dioxide band position.
5. **NIST Chemistry WebBook** — [Carbon dioxide, gas-phase infrared spectrum](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Type=IR-SPEC&Index=1). Reference spectrum for the molecule's infrared-active bands.
6. **IPCC AR6 WG1, Chapter 7** — [The Earth's energy budget, climate feedbacks and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Effective radiative forcing for doubled carbon dioxide, and the history of the saturation objection.
7. **AGU, Journal of Geophysical Research: Atmospheres** — [Why logarithmic? A note on the dependence of radiative forcing on gas concentration](https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2014JD022466). Emission-layer displacement as the explanation for logarithmic forcing.
8. **AGU, Geophysical Research Letters** — [Radiative forcing of carbon dioxide, methane, and nitrous oxide: a significant revision of the methane radiative forcing](https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2016GL071930). Revised forcing expressions and the departure from the logarithm at high concentration.
