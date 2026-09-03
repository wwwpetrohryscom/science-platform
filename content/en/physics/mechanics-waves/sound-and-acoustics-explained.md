---
title: 'Sound and acoustics: a decibel is a ratio, and half the number is the reference'
excerpt: Sound is a pressure fluctuation travelling through a compressible medium. Almost every misreading of an acoustic figure comes from forgetting that a decibel is a logarithm of a ratio, and that the ratio needs a stated reference.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - acoustics
  - decibel
  - sound-propagation
  - noise-exposure
  - underwater-sound
related:
  - waves-and-oscillations-explained
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - measurement-uncertainty-explained
pillar: classical-mechanics-explained
_bodyHash: bba7195a
---

Nothing about a sound wave travels except a disturbance. The air itself stays roughly where it was; what moves outward is a pattern of compression and rarefaction, a fluctuation in pressure superimposed on whatever the ambient pressure happens to be. That makes sound a longitudinal wave — the material displaces along the direction of travel rather than across it — and it means sound needs a medium in a way that light does not.

The mathematics is the same wave mathematics that governs a plucked string or a pendulum, set out in the companion article on [oscillations and the wave equation](/en/physics/mechanics-waves/waves-and-oscillations-explained), and the momentum and energy bookkeeping is the ordinary bookkeeping of [Newtonian mechanics](/en/physics/mechanics-waves/classical-mechanics-explained) applied to a compressible continuum. What is distinctive about acoustics is not the wave theory but the measurement conventions built on top of it, and those conventions are where most confusion enters.

## Why the speed of sound depends on temperature and not on loudness

A compression wave travels at a speed set by how stiff the medium is against compression and how much inertia it has. For a gas behaving ideally, NASA's aeronautics reference gives the relation as a² = γRT, with γ the ratio of specific heats, R the specific gas constant and T the absolute temperature. Two things follow from the form of that expression. Pressure does not appear, so a loud sound does not travel faster than a quiet one. And temperature does, which is why sound speed changes with altitude and with the season rather than with the weather report's barometric reading. NASA gives the value at sea level as "about 330 m/s or 760 mph".

Liquids are far less compressible than gases and correspondingly faster. NIST's reference data for water give a sound speed of 1,482.3 m/s at 20 °C and 1 bar, rising to 1,496.7 m/s at 25 °C — more than four times the value in air, and increasing with temperature in fresh water rather than decreasing. Seawater is faster again because dissolved salts stiffen it, and in the ocean the speed also rises with pressure, which is what makes the vertical structure described later in this article possible.

## The decibel: a logarithm, and the reference that carries half the meaning

A decibel is not a unit of sound. NIST's guidance on units used with the SI is explicit that the bel and the decibel "are used to express the values of logarithmic ratio quantities whose numerical values are based on the decadic logarithm", and that a statement of the form "m dB" is interpreted to mean m = 10 lg(X/X₀). The reference value X₀ is doing half the work, which is why the same guidance insists that "in using these units it is important that the nature of the quantity be specified and that any reference value used be specified".

For airborne sound the convention fixes that reference at a sound pressure of 20 µPa, described in acoustic measurement work as "the standard reference level employed". Underwater the convention is different: published levels are given relative to 1 µPa, and are written that way — a study of vessel noise reports source levels "between 169–172 dB referenced to 1 microPascal (re 1µPa)". The consequence is blunt. A number in dB re 1 µPa and a number in dB re 20 µPa are not the same kind of quantity, and comparing them directly, as popular accounts of ocean noise routinely do, produces a difference of tens of decibels that exists only in the choice of reference. Sound pressure is also a field quantity rather than a power quantity, so the conversion from a pressure ratio to a level carries a factor of 20 rather than 10 — another place where a stated level and a stated pressure part company.

Because the scale is logarithmic, decibel values also do not add. Two independent sources of equal level do not produce twice the number; they produce twice the acoustic power, which the definition converts into an increase of about 3 dB. The table below follows directly from taking ten times the logarithm of the number of equal, uncorrelated sources.

| Equal uncorrelated sources | Increase in level | Reading |
| --- | --- | --- |
| 2 | about 3 dB | Doubling the power moves the level by a small amount |
| 4 | about 6 dB | Two doublings, not four times the number |
| 10 | about 10 dB | An order of magnitude in power, one bel in level |

This is why closing one of two equally busy roads changes an exposure figure far less than intuition suggests, and why a 10 dB reduction is a much larger engineering achievement than the arithmetic gap between two numbers implies.

## Weighting, and what a single figure discards

Human hearing is not equally sensitive across frequency, and a microphone is. Regulatory acoustics closes that gap by applying a frequency weighting — most often A-weighting, which attenuates low frequencies before the level is computed — and then compressing a whole day into one indicator. European noise reporting uses L_den, a day-evening-night level with penalties applied to evening and night periods, and the Environmental Noise Directive sets its reporting threshold at 55 dB for that indicator.

The exposure that follows is large. The European Environment Agency's 2025 assessment finds that more than one in five Europeans is exposed to harmful transport noise, rising to more than 30 per cent when measured against the stricter World Health Organization recommendations, with an estimated 92 million people above the 55 dB threshold for road traffic, 18 million for rail and 2.6 million for aircraft. The same assessment attributes about 73,000 premature deaths a year in Europe to chronic transport noise, along with around 49,000 new cardiovascular disease cases and 23,000 cases of type 2 diabetes, and estimates the loss of 1.5 million healthy life years annually. Those figures were revised in a corrigendum issued in March 2026 after an error was identified in several health estimates, which is a useful reminder that a published number and a current number are not always the same thing. The WHO's own compendium puts the earlier scale of the problem at an estimated one million healthy life years lost in 2011 to traffic-related noise in the western part of Europe alone.

What the single weighted number cannot carry is the shape of the sound. Two locations with identical L_den values can differ in spectrum, in how impulsive the events are, and in how they are distributed through the night. A-weighting in particular deliberately discounts low-frequency energy, which is exactly the part that penetrates building fabric most readily. The indicator is a compression of a signal, and every compression loses something; treating it as a full description of an acoustic environment is a category error rather than a measurement error.

## How sound gets across an ocean basin

Sound speed in the ocean falls with temperature and rises with pressure, so a profile that cools downward and then becomes pressure-dominated at depth has a minimum somewhere in between. That minimum acts as a waveguide: rays that would otherwise escape upward or downward are refracted back towards it, and energy is trapped rather than spread through the full water column. NOAA's description of the resulting sound channel notes that sound emitted at the right depth "bounces between these various layers and can travel for hundreds of miles", and that "low-frequency sounds can be heard across entire ocean basins".

Low frequency is the operative condition, because absorption in seawater rises steeply with frequency. The same physics that lets a blue whale call cross a basin means a high-frequency echo sounder is a local instrument. It also means that the noise humans add at low frequencies — propeller cavitation, seismic survey pulses, engine tonals — is precisely the noise that carries. NOAA states that shipping, recreational boating and energy exploration have all increased, that noise from these activities "can travel long distances underwater", and that this is "leading to increases and changes in ocean noise levels in many coastal and offshore habitats". A [2022 study of simulated vessel noise](https://pmc.ncbi.nlm.nih.gov/articles/PMC8800386/) summarises the ocean trend as a rise of approximately 3 dB per decade; because the scale is logarithmic, that is a doubling of acoustic power every ten years.

The moving-source case adds a further shift. When a source approaches, successive wavefronts are emitted from positions closer to the listener, so they arrive more closely spaced and the received frequency rises; as it recedes, the reverse. The Doppler effect is a purely kinematic consequence of finite propagation speed, which is why the same relation underpins weather radar, ultrasound blood-flow measurement and the recession velocities of galaxies, with the propagation speed changed to suit.

## What acoustic measurement cannot settle

Three limits are worth stating plainly. A measured level always depends on where the microphone or hydrophone was, and in a reverberant or refracting environment two positions metres apart can differ substantially; a single figure without a stated position and averaging time is close to uninterpretable. Weighted indicators are designed around one species' hearing, so applying an A-weighted metric to marine mammals or to structural response is a misuse of the weighting rather than a conservative approximation. And exposure statistics rest on modelled noise maps rather than dense measurement networks, so their uncertainty is dominated by model inputs — traffic volumes, building geometry, ground absorption — rather than by the acoustics. Reading any of these numbers well requires the habits set out in [measurement uncertainty](/en/physics/mechanics-waves/measurement-uncertainty-explained), and the propagation of the wave itself is inseparable from the [compressible fluid mechanics](/en/physics/mechanics-waves/fluid-dynamics-explained) of the medium carrying it. For the ocean, the physical setting that makes long-range transmission possible is the same stratification described in [ocean science](/en/ecology/oceans/ocean-science-explained).

## Sources

1. **NASA Glenn Research Center** — [Role of the Mach number](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/role-of-the-mach-number/). Speed of sound as a function of absolute temperature and its sea-level value.
2. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Speed of sound in liquid water at 20 °C and 25 °C.
3. **NIST Special Publication 330** — [Non-SI units accepted for use with the SI](https://www.nist.gov/pml/special-publication-330/sp-330-section-4). Definition of the bel and decibel and the requirement to state the reference value.
4. **Scientific Data** — [In-depth analysis of tram curve noise dataset for rigorous noise assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC11846905/). Use of the 20 µPa reference level in airborne acoustic measurement.
5. **PeerJ** — [Potential impacts from simulated vessel noise and sonar on commercially important invertebrates](https://pmc.ncbi.nlm.nih.gov/articles/PMC8800386/). Underwater levels expressed re 1 µPa and the reported rate of increase in ocean noise.
6. **NOAA National Ocean Service** — [What is the SOFAR channel?](https://oceanservice.noaa.gov/facts/sofar.html). Refraction into the deep sound channel and long-range low-frequency propagation.
7. **NOAA Fisheries** — [Ocean noise](https://www.fisheries.noaa.gov/national/science-data/ocean-noise). Growth of human-generated underwater sound and its distribution across habitats.
8. **European Environment Agency** — [Environmental noise in Europe 2025](https://www.eea.europa.eu/en/analysis/publications/environmental-noise-in-europe-2025). Exposure above the 55 dB reporting threshold, health estimates, and the March 2026 corrigendum.
9. **World Health Organization** — [Guidance on environmental noise](https://www.who.int/tools/compendium-on-health-and-environment/environmental-noise). Earlier estimate of healthy life years lost to traffic-related noise in western Europe.
