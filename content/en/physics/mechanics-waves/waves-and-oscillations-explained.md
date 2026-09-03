---
title: 'Waves and oscillations: one mathematics, many physical systems'
excerpt: A pendulum, a quartz crystal, a swaying footbridge and a tsunami obey the same small set of equations. This page follows that mathematics from the simple oscillator to dispersion, and stops at the point where the shared model stops working.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - oscillation
  - resonance
  - wave-equation
  - dispersion
  - seismic-waves
related:
  - classical-mechanics-explained
  - optics-and-light-explained
  - sound-and-acoustics-explained
  - fluid-dynamics-explained
pillar: classical-mechanics-explained
_bodyHash: 3ad037ec
---

A pendulum clock, a quartz timekeeping crystal, a bridge deck in a crosswind and a swell crossing an ocean basin are governed by the same short list of equations. That is not a coincidence of mathematics, and the reason it happens is more useful to know than any of the individual solutions.

## The reason the same curve keeps appearing

The starting point is the same one used throughout [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained): a force law plus an inertia. A stable equilibrium is, by definition, a minimum of the potential energy. Any smooth function near a minimum looks like a parabola if you look closely enough, which means the restoring force — the slope of that function — is proportional to the displacement for small enough excursions. The equation of motion is then the same equation regardless of what the system is made of, and its solution is a sinusoid whose frequency is set by the ratio of stiffness to inertia and does not depend on how far the system was displaced.

**Simple harmonic motion** is therefore not a special case that nature happens to favour. It is the leading-order behaviour of every stable system, and everything else is a correction. The corrections are real: a pendulum swung through a large angle has a period that lengthens measurably with amplitude, because the restoring torque follows the sine of the angle rather than the angle itself. Small-amplitude results should always be labelled as such, and the practice of doing so is the whole basis of the linear analysis that follows.

## Damping is the weakest number in a structural model

Real oscillators lose energy. Adding a resistive term proportional to velocity gives three regimes: underdamped motion that rings down through many cycles, overdamped motion that creeps back without overshooting, and the critically damped case in between that returns fastest without oscillating — the target for a door closer or a vehicle suspension.

The convenient summary is the quality factor, the ratio of energy stored to energy lost per radian of oscillation. It sets how sharply a system responds near its natural frequency and how long it rings after the driving stops. It is also, in practice, the least reliable number in a structural model. Stiffness and mass can be computed from geometry and material properties; damping arises from joints, bearings, internal friction and the surrounding medium, and it is usually estimated from measurements on the finished object rather than predicted in advance. Where analysts disagree about whether a structure will misbehave, they are frequently disagreeing about damping.

## The two bridges everyone cites are not simple resonance

Drive an oscillator at its natural frequency and the amplitude builds until dissipation balances the input. That is resonance, and it is genuinely responsible for a great deal — the selectivity of a radio receiver, the tone of an organ pipe, the response of a building to ground shaking.

It is also the explanation reached for too quickly. The collapse of the Tacoma Narrows suspension bridge in 1940 is the standard classroom illustration of resonance, and a paper in the *American Journal of Physics* titled [Resonance, Tacoma Narrows bridge failure, and undergraduate physics textbooks](https://doi.org/10.1119/1.16590) exists precisely because that attribution is contested. The failure is better described as aeroelastic flutter: a self-excited oscillation in which the deck's own motion changes the airflow so as to feed energy back into the motion. There is no external periodic driver whose frequency happens to match. The distinction matters for design, because the two mechanisms are avoided by different means.

The London Millennium Bridge is the more instructive case, because the physics is still being argued. When the footbridge opened it swayed laterally, and the widely cited explanation, published in *Nature* as [Crowd synchrony on the Millennium Bridge](https://doi.org/10.1038/438043a), modelled pedestrians spontaneously falling into step with the bridge's vibrations and amplifying them — a phenomenon the authors noted "was not due to the bridge's innovative design as was first thought". A later analysis in *Nature Communications* reached a different conclusion, arguing that uncorrelated walkers adjusting their balance produce a negative damping term that destabilises the deck without any synchronisation, and that "increased coherence of pedestrians' foot placement is a consequence of, not a cause of the instability". That paper notes that the most definitive observational study estimated only about 20 per cent of the crowd walked in time with the bridge motion. The evidence is mixed on which mechanism dominates; what both accounts share is that the input was not an external oscillator but a feedback loop through the structure itself.

## From an oscillator to a wave

Couple many oscillators together and a disturbance in one propagates to its neighbours. In the continuum limit this gives the wave equation, whose solutions are any shape travelling at a speed set by the medium's stiffness and density, with wavelength, frequency and speed tied together by a single product relation.

Because the equation is linear, solutions add. **Superposition** is the property that makes almost every wave technique possible: interference patterns, the decomposition of a complicated signal into sinusoids, and standing waves. A wave confined between boundaries can only persist at the frequencies whose half-wavelengths fit the available length, which is why a string of fixed length has a discrete set of tones rather than a continuum, and why the same reasoning reappears in [interference, thin films and the resolution limits of optical instruments](/en/physics/mechanics-waves/optics-and-light-explained). In a fluid the same equation governs [longitudinal pressure waves and their measurement](/en/physics/mechanics-waves/sound-and-acoustics-explained).

## When a medium sorts waves by wavelength

In some media all frequencies travel at the same speed. Light in vacuum behaves this way, and so, to good approximation, does sound in air. In dispersive media the speed depends on wavelength, and a pulse — which is a sum of many wavelengths — spreads out as it travels.

Dispersion forces a distinction between two velocities that coincide only when it is absent. The **phase velocity** is the speed of an individual crest; the **group velocity** is the speed of the envelope, and therefore of the energy and the information. For deep-water gravity waves the group velocity is half the phase velocity, so individual crests appear at the back of a wave group, run forward through it and vanish at the front while the group itself advances at half their speed.

Long ocean waves behave differently. Once the wavelength greatly exceeds the water depth the speed depends only on depth, and dispersion effectively disappears. This is why NOAA can state that the speed of tsunami waves "depends on ocean depth rather than the distance from the source of the wave", and that such waves "may travel as fast as jet planes over deep waters, only slowing down when reaching shallow waters". A pulse that does not disperse holds its shape across an ocean, which is what makes basin-scale tsunami forecasting possible at all — and what makes the arrival concentrated rather than smeared.

## What waves reveal about the medium they cross

Because propagation depends on the medium, a wave that has crossed something inaccessible carries a record of it. Seismology is the clearest case. The USGS describes a P wave as a compressional body wave that "shakes the ground back and forth in the same direction and the opposite direction as the direction the wave is moving", and an S wave as a shear wave that shakes it perpendicular to the direction of travel. A shear wave requires a medium that resists being twisted, so it cannot propagate through a liquid — and the observed pattern of S waves "being stopped entirely by the liquid core and P waves being bent (refracted) by the liquid core" is how the liquid outer core was identified without anyone going near it. Almost everything known about [the Earth's internal structure](/en/physics/climate-physics/geophysics-and-earth-structure) was inferred this way, from arrival times and missing arrivals. The same agency notes that each whole-number step in earthquake magnitude corresponds to the release of about 31 times more energy, which is why a linear intuition about magnitudes misleads so badly.

## Where the shared model runs out

Everything above rests on linearity, and linearity is an approximation that fails at large amplitude. A breaking wave, a shock front and a saturating oscillator all violate superposition, and none of them can be built from sinusoids in the usual way. The systems where nonlinearity dominates from the outset belong instead to [the study of turbulent and separated flows](/en/physics/mechanics-waves/fluid-dynamics-explained). Between those extremes, the honest statement is that the linear model predicts frequencies well, amplitudes less well, and the onset of failure worst of all.

## Sources

1. **American Journal of Physics** — [Resonance, Tacoma Narrows bridge failure, and undergraduate physics textbooks](https://doi.org/10.1119/1.16590). Peer-reviewed challenge to the standard resonance account of the 1940 collapse.
2. **Nature** — [Crowd synchrony on the Millennium Bridge](https://doi.org/10.1038/438043a). The pedestrian-synchronisation model of the footbridge's lateral oscillation.
3. **Nature Communications** — [Emergence of the London Millennium Bridge instability without synchronisation](https://pmc.ncbi.nlm.nih.gov/articles/PMC8664840/). The competing negative-damping account and the observed fraction of synchronised walkers.
4. **NOAA National Ocean Service** — [What is a tsunami?](https://oceanservice.noaa.gov/facts/tsunami.html). Dependence of tsunami speed on ocean depth.
5. **USGS** — [Earthquake magnitude, energy release, and shaking intensity](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity). P- and S-wave definitions, the liquid-core shadow, and the energy step per magnitude unit.
6. **NASA** — [Anatomy of an electromagnetic wave](https://science.nasa.gov/ems/02_anatomy/). Wavelength, frequency and energy as descriptions of a propagating wave.
