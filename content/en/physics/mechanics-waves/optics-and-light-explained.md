---
title: 'Optics: reflection, refraction, diffraction and the limits of an image'
excerpt: Ray optics is an approximation that works until the aperture gets small, and then diffraction sets a floor no amount of engineering removes. This page traces that boundary through lenses, fibres, thin films, telescopes and polarimetry.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - optics
  - refraction
  - diffraction
  - polarisation
  - imaging
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - measurement-uncertainty-explained
  - electromagnetic-spectrum-applications
pillar: classical-mechanics-explained
_bodyHash: b3fee0dd
---

Every optical instrument ever built has a resolution limit that was fixed before any glass was ground, by nothing more than the diameter of its opening and the wavelength of the light it collects. Understanding optics largely means understanding where the convenient picture of light as a set of straight rays holds, and what replaces it when it fails.

## Rays are an approximation with a stated domain

Geometric optics treats light as travelling in straight lines that bend at interfaces — the same trajectory idea that [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained) applies to a moving body, transferred to a beam. It is an excellent approximation whenever every relevant feature — lens diameter, mirror, aperture, obstacle — is much larger than the wavelength. Under that assumption a single relation connects object distance, image distance and focal length for a thin lens, and a second relation gives the magnification. Almost all everyday optical design begins here.

The approximation is not a simplification of convenience but a limit of a wave theory, and it fails predictably. As soon as an aperture approaches the wavelength, light spreads into the geometric shadow. NASA's summary of wave behaviours puts the condition plainly: diffraction is most pronounced when the wavelength is comparable to the size of the object. Everything distinctive about optics lives at that boundary, and the same boundary appears in [the general treatment of waves and oscillations](/en/physics/mechanics-waves/waves-and-oscillations-explained).

## The refractive index is itself still a research subject

Light travels more slowly in matter than in vacuum, and the ratio of the two speeds is the refractive index of the medium. The vacuum speed is not measured but fixed by definition at 299,792,458 m s⁻¹, so an index measurement is really a measurement of a slowing.

The effect is easy to underestimate because air seems optically inert. It is not. NOAA's solar position calculator assumes 0.833° of atmospheric refraction when computing sunrise and sunset, which means the Sun is already geometrically below the horizon at the moment it appears to touch it. The agency also flags the limitation honestly: the correction "vary[ies] with atmospheric pressure, humidity and other variables", and errors grow toward the poles because the Sun there crosses the horizon at a very shallow angle where small atmospheric variations have a larger effect.

That the index of air is close to one does not make it uninteresting. Interferometric realisation of the metre requires knowing it precisely, and a 2026 paper in *Measurement Science and Technology* reports two-colour measurements aimed at revising the standard formulation, noting that the Ciddor treatment "has stood for the past 30 years, but it has long been suspected that its treatment of water vapor may have shortcomings". The apparatus reaches an uncertainty of about 2 × 10⁻¹⁰ in the refractive index at ambient pressure. A quantity most people would round to 1.0003 is, at the level where length metrology operates, still an open question — which is the sort of distinction taken up in [how measurement uncertainty is evaluated](/en/physics/mechanics-waves/measurement-uncertainty-explained).

## Dispersion is refraction that depends on colour

Different wavelengths are slowed by different amounts, so they bend through different angles at the same interface. NASA's account of visible light dates the demonstration to Isaac Newton's 1665 prism experiment, and gives the band the eye detects as roughly 380 to 700 nanometres, violet at the short end and red at the long.

Dispersion is simultaneously the mechanism of every spectrometer and a defect to be engineered around in every lens. A single glass element focuses blue and red at different distances, producing coloured fringes; correcting it requires combining glasses whose dispersions differ, which is why a good camera lens contains many elements rather than one good one. The tie between wavelength, frequency and photon energy that makes spectroscopy informative is set out across the [electromagnetic spectrum](/en/glossary/electromagnetic-spectrum) as a whole.

## Trapping light: total internal reflection in a fibre

When light travels from a denser medium toward a less dense one, the refracted ray bends away from the normal, and beyond a critical angle of incidence there is no refracted ray at all: the interface reflects essentially everything. The critical angle depends only on the ratio of the two indices.

An optical fibre is that geometry wrapped into a cylinder, with a core of slightly higher index than the surrounding cladding, so light launched within a narrow cone of angles is trapped and guided. The ray picture explains the confinement and the acceptance cone perfectly well. It cannot explain what happens once the core diameter is only a few wavelengths across, where the fibre supports a discrete set of guided modes rather than a continuum of ray paths — a standing-wave problem, not a ray problem, and another place where the boundary between the two descriptions is the interesting part.

## Interference and thin films

Two coherent waves arriving with a path difference of a whole number of wavelengths reinforce; a half-integer difference cancels them. Because the path difference depends on wavelength, a film a few hundred nanometres thick reinforces some colours and suppresses others — the iridescence of a soap bubble or an oil slick, and, deliberately engineered, the anti-reflection coatings on camera lenses and spectacle lenses.

The same principle turned into a measuring instrument is interferometry, which converts a displacement into a countable number of fringes and underpins the most precise length measurements available. It is also why the refractive-index question above is not academic: an interferometer measuring in air measures wavelengths in air, and the conversion to a length in vacuum runs entirely through the index.

## Diffraction sets a floor that engineering cannot lift

A circular aperture of diameter D illuminated at wavelength λ cannot form an image finer than roughly 1.22 λ/D in angle. That is the Rayleigh criterion, and it is a property of the aperture rather than of the optics behind it.

The Hubble Space Telescope makes a clean arithmetic check. Its primary mirror is 2.4 metres across, and NASA states that it can distinguish objects in visible light separated by 0.05 arcsecond. Putting a mid-visible wavelength of 500 nm and that diameter into the criterion gives about 2.5 × 10⁻⁷ radians, which is 0.05 arcsecond — the instrument is working at its diffraction limit, and the only routes to a finer image are a larger opening or a shorter wavelength.

That is precisely the logic of the James Webb Space Telescope, whose primary mirror is 6.5 metres across and made of 18 hexagonal segments each 1.32 metres flat to flat. The resolution follows the full 6.5-metre aperture, not the segment size, provided the segments are phased to a fraction of a wavelength; the segmentation is a launch-volume solution, not an optical compromise. Applying the same criterion at a near-infrared wavelength of 2 µm gives an angular limit of roughly 0.08 arcsecond, coarser than Hubble in the visible despite the far larger mirror — because the criterion depends on wavelength as much as on aperture, and Webb was built to work where the sky is infrared.

A telescope on the ground is usually limited not by its own aperture but by turbulence in the air above it — the same variable medium that makes the refraction correction discussed earlier approximate. The criterion is therefore a design target that space telescopes routinely meet and ground instruments generally have to work for.

## Polarisation is a channel most instruments throw away

Light carries an orientation as well as an intensity and a wavelength, and scattering processes imprint information on it. Discarding polarisation discards a measurement.

NASA's PACE mission, launched on 8 February 2024, is a working example. Alongside a hyperspectral ocean colour instrument covering the ultraviolet, visible and near-infrared plus seven discrete shortwave-infrared channels, it flies two polarimeters: SPEXone, which observes from five viewing geometries, and HARP2, which observes from 10 viewing angles in its blue, green and near-infrared bands and 60 in the red. The published mission description states that multi-angle polarimetry gives "sensitivity to particle microphysical properties, including particle size distribution, effective radius, refractive index, and particle shape" — quantities that an intensity-only radiometer cannot separate. The measurement of water-leaving light that this enables is described further in [ocean colour observations](/en/ecology/earth-observation/ocean-color-observations).

Light in water sets the outer bound on what any such instrument can see. NOAA reports that the upper 200 metres of the ocean is the euphotic zone, and that although light may be detected as far as 1,000 metres down, "there is rarely any significant light beyond 200 meters". An ocean-colour sensor therefore samples a thin surface layer, whatever the depth of the water beneath it, which is one of the structural constraints discussed in [the limits and uncertainties of remote sensing](/en/ecology/earth-observation/remote-sensing-limitations-and-uncertainty).

## What the limit does and does not mean

The diffraction limit is a floor on angular resolution, not a ceiling on information. Knowing the shape of the blur allows a known point source to be located far more precisely than the blur is wide, which is the basis of astrometry and of single-molecule localisation microscopy. What the limit does forbid is separating two unknown sources closer than the blur without further assumptions. The distinctive feature of optics is that its central limitation is not a matter of engineering budget or of manufacturing tolerance but of the wave itself, and it can be written down before the instrument is designed.

## Sources

1. **NASA** — [Visible light](https://science.nasa.gov/ems/09_visiblelight/). Wavelength range of visible light and the prism demonstration of dispersion.
2. **NASA** — [Wave behaviors](https://science.nasa.gov/ems/03_behaviors/). Reflection, refraction, diffraction and scattering, and the condition under which diffraction dominates.
3. **NASA** — [Hubble's optics](https://science.nasa.gov/mission/hubble/observatory/design/optics/). Primary mirror diameter and quoted angular resolution.
4. **NASA** — [Webb's mirrors](https://science.nasa.gov/mission/webb/webbs-mirrors/). Aperture diameter, segment count and segment size.
5. **NOAA Global Monitoring Laboratory** — [Solar calculator details](https://gml.noaa.gov/grad/solcalc/calcdetails.html). Atmospheric refraction assumed at sunrise and sunset, and its stated variability.
6. **NOAA National Ocean Service** — [How far does light travel in the ocean?](https://oceanservice.noaa.gov/facts/light_travel.html). Depth of the euphotic zone and the limit of detectable light.
7. **Measurement Science and Technology** — [Two-color measurements supporting a revised formulation for the refractive index of air](https://pmc.ncbi.nlm.nih.gov/articles/PMC13417924/). Status of the Ciddor formulation and the uncertainty achieved.
8. **Global Change Biology** — [Advancing Earth system science with the NASA PACE satellite mission](https://pmc.ncbi.nlm.nih.gov/articles/PMC13100863/). Instrument complement, viewing geometries and what polarimetry adds.
9. **NIST** — [Definitions of the SI base units](https://www.nist.gov/si-redefinition/definitions-si-base-units). The fixed value of the speed of light used to define the metre.
