---
title: 'The Coriolis effect: what it deflects, and what it does not'
excerpt: The deflection is real and the force is not — in a rotating frame a straight line reads as a curve. Which flows it governs is decided by a single dimensionless ratio, and a draining basin misses the threshold by four orders of magnitude.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 10
tags:
  - atmospheric-physics
  - general-circulation
  - ocean-circulation
  - fluid-dynamics
  - rossby-waves
related:
  - atmospheric-physics-explained
  - atmospheric-circulation-cells
  - fluid-dynamics-explained
  - ocean-circulation-and-climate
pillar: atmospheric-physics-explained
_bodyHash: 5ba55590
---

The National Weather Service glossary defines the Coriolis force as "a fictitious force used to account for the apparent deflection of a body in motion with respect to the earth, as seen by an observer on the earth". Three of those words carry the argument. *Fictitious*: nothing pushes on the air. *Apparent*: the curvature is in the description, not in the trajectory. *As seen by an observer on the earth*: move the observer off the planet and the term disappears from the equations altogether. NOAA's hurricane researchers use the same qualifier, calling it "an apparent force that deflects movement of air to the right coming from the Northern hemisphere and to the left coming from the Southern hemisphere".

The term exists because [Newton's first law](/en/physics/mechanics-waves/classical-mechanics-explained) is a statement about which reference frames the rest of mechanics is valid in, and the surface of a spinning planet is not one of them. Working in that frame anyway is unavoidable — the instruments and the weather are bolted to the same rotating ground — and the price is a pair of extra terms in the momentum equation. One of them is this. The question that then gets skipped is the second one: granted that the deflection is real in the rotating frame, when is it large enough to matter? There is a specific answer, it is a number, and applying it disposes of most of what the effect is wrongly credited with.

## Where the deflection comes from, and where the usual account stops

NOAA's National Ocean Service states the counterfactual first: "If the Earth did not rotate on its axis, the atmosphere would only circulate between the poles and the equator in a simple back-and-forth pattern." Because it does rotate, "circulating air is deflected toward the right in the Northern Hemisphere and toward the left in the Southern Hemisphere" — a deflection named for Gaspard Gustave de Coriolis (1792–1843), who came to it studying energy transfer in rotating machinery such as waterwheels.

The mechanism usually offered next is the difference in surface speed with latitude. Every point on the planet completes one rotation in the same time but travels a different distance doing it, so NOAA's satellite service gives the eastward surface speed as "almost 1040 miles per hour" at the equator against roughly 0.00005 miles per hour near the poles. The arithmetic checks, on the clock NESDIS is using. NASA gives Earth an equatorial diameter of 12,756 km, so the equator is 40,074 km around, and NESDIS's own statement that "it takes the Earth 24 hours to rotate one time" carries a point on the equator around that circle at about 1,670 km/h — 1,038 mph, which is what "almost 1040" means. NASA's 23.9-hour rotation period is the sidereal figure, one turn relative to the stars rather than to the Sun; it is the one that belongs in Ω below, and it lifts the equatorial surface speed slightly, to about 1,042 mph.

That picture is useful and it is not the whole mechanism, which is worth saying plainly because the gap is where misconceptions breed. It explains why air moving north or south acquires an east–west drift. It does not explain why air moving due east or due west is deflected too, and it sits awkwardly with the fact that the surface moves fastest exactly where the effect vanishes: NOAA's hurricane FAQ is explicit that "the force is greatest at the poles and zero at the equator". Surface speed is not the controlling quantity. Latitude enters through the geometry of the rotation axis relative to the local horizontal, not through how fast the ground is going.

## What the size of the effect depends on

Two quantities, and only two. The first is latitude, through the Coriolis parameter, written *f* = 2Ω sin φ, where Ω is Earth's angular velocity and φ is latitude — the form used in the *Weather and Climate Dynamics* treatment of polar Rossby waves. NOAA's hurricane research division gives the same object geometrically, as "twice the component of the Earth's rotation vector about the local vertical", which is what the sine is doing: at the equator the rotation vector lies flat in the local horizontal and has no vertical component at all.

Numerically, NASA's 23.9-hour rotation puts Ω at 7.3 × 10⁻⁵ radians per second, so 2Ω is 1.5 × 10⁻⁴ s⁻¹ at the pole and *f* is about 1.0 × 10⁻⁴ s⁻¹ at 45°. Because *f* has units of inverse time, its reciprocal is the natural timescale of the effect: roughly 2.7 hours at 45°. Anything that resolves itself in minutes never feels it.

The second dependence is on the speed of the flow itself. It follows from the definition of the Rossby number below: if that number is the ratio of the inertial acceleration, of order *U*²/*L*, to the Coriolis acceleration, and it equals *U*/(*fL*), then the Coriolis acceleration must scale as *fU*. Air at rest is not deflected. Air moving twice as fast is deflected twice as hard, in the same time.

## The Rossby number is the test of when it matters

An *Ocean Science* study of a Benguela upwelling filament states the definition compactly: "The Rossby number describes the relative importance of inertial to Coriolis force and is defined as U/fL, where U is velocity, f is the coriolis frequency, and L is a length scale." It plays the role for rotation that [the Reynolds number](/en/glossary/reynolds-number) plays for viscosity in [fluid dynamics](/en/physics/mechanics-waves/fluid-dynamics-explained): a single dimensionless ratio deciding which terms in the equations survive.

The thresholds are conventional but well anchored in observation. The same paper reports that Ro "is small (𝒪(<0.1)) for quasi-geostrophic motions", while "higher Ro values (e.g., Ro>0.5) indicate that unbalanced, ageostrophic motions are present and may drive a forward energy cascade". Measuring one region three ways, it found |Ro| < 0.1 in the upwelling zone from satellite geostrophic velocities, |Ro| up to 0.4 in the eddies and along the upwelling front from shipboard current profiling, and values exceeding 0.5 along the filament itself in those profiles and in surface drifter tracks. The same water, at different scales, on both sides of the boundary.

Put a mid-latitude depression through the same formula. Take a thousand kilometres of width and winds of ten metres per second at *f* = 1.0 × 10⁻⁴ s⁻¹, and Ro comes out at about 0.1. Rotation is not a correction to that flow; it is one of the two terms that determine it.

## What a small Rossby number buys

When Ro is small, the Coriolis term is large enough to stand against the pressure gradient, and the flow stops going where the pressure pushes it. NOAA's account of balanced winds around a cyclone has "the inward decrease of pressure" accelerating parcels toward the centre and balancing "the sum of the centripetal and Coriolis accelerations required by the curved path". Air ends up circling the low rather than filling it — which is why a surface pressure chart can be read as a map of streamlines, and why weather systems persist for days instead of collapsing in hours.

The ocean does the same thing more slowly. Wind dragging on the surface sets the top layer moving, and NOAA's description of the Ekman spiral has each successively deeper layer moving more slowly and further to the right in the Northern Hemisphere, or left in the Southern, until the motion ceases at a depth of about 100 metres. The horizontal divergence that geometry creates is what drives [upwelling](/en/glossary/upwelling) along eastern boundaries, and at basin scale it is what organises the wind-driven gyres described in [ocean circulation and climate](/en/ecology/earth-systems/ocean-circulation-and-climate).

The latitude dependence has a second-order consequence of its own. Because *f* varies with latitude, its meridional gradient β is non-zero, and that gradient supports a class of large-scale waves whose phase speed carries a −β/K² term against the background flow — the reason planetary waves propagate westward relative to the westerlies that carry them, and part of why the [general circulation](/en/physics/climate-physics/atmospheric-circulation-cells) takes the shape it does rather than a smoother one.

## Where the balance breaks down

Two places, and they are the two ends of the Rossby number. Near the equator *f* goes to zero, and no amount of slow, broad flow will make Ro small. NOAA's hurricane FAQ sets the practical consequence: "the storm must be at least 300 miles from the equator in order for the Coriolis force to create the spin" — 480 km, about four degrees of latitude on a planet with 111 km to the degree. Tropical convection near the equator is abundant; organised rotation is not.

At the other end, the length scale shrinks and Ro climbs through one. That is the submesoscale regime the Benguela filament sits in, and it is also where every domestic-plumbing claim about the Coriolis effect lives.

## The bathtub, and the rest of the charge sheet

NOAA's hurricane researchers dispose of the best-known claim in a parenthesis: "the Coriolis force is not strong enough to affect small containers such as in sinks and toilets. The notion that the water flushes the other way in the opposite hemisphere is a myth."

The Rossby number says why, and says it quantitatively. Take a basin 0.3 m across at 45°, where *f* is 1.0 × 10⁻⁴ s⁻¹. For rotation to be a leading term the water would have to move no faster than *fL*, about 3 × 10⁻⁵ metres per second — three hundredths of a millimetre a second. Water actually running toward a drain at five centimetres per second gives Ro of roughly 1,700. The honest statement is not that there is no Coriolis acceleration in a washbasin; it is that it is some three orders of magnitude weaker than the inertia of the draining flow itself, and so is buried under the residual swirl left by filling, the asymmetry of the basin, and any temperature difference across it.

The same arithmetic dismisses several neighbouring claims. A tornado a hundred metres wide with 50 m/s winds has a Rossby number in the thousands; whatever fixes its sense of rotation, it is not the planet. The effect creates no wind and no current — pressure gradients and wind stress do that, and the Coriolis term only reallocates the direction. And every description quoted above is a description of a *deflection* — the word the National Weather Service, the National Ocean Service and the hurricane research division all reach for — which is a change of heading, not of speed. A fictitious force that only turns things is not an energy source, has never been one, and cannot be recruited as one.

What survives is a large claim, correctly scoped. Above a few hundred kilometres and below Rossby numbers of about a tenth, rotation is not a correction to the flow but half of what determines it — which is why the [energy transport that atmospheric physics is ultimately about](/en/physics/climate-physics/atmospheric-physics-explained) is carried by curved, banded, persistent structures rather than by air simply running from hot to cold.

## Sources

1. **NOAA National Weather Service** — [Glossary: Coriolis force](https://forecast.weather.gov/glossary.php?word=coriolis). The formal definition as a fictitious force accounting for apparent deflection in the Earth-fixed frame.
2. **NOAA NESDIS** — [What Is the Coriolis Effect?](https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-the-coriolis-effect). Eastward surface speed by latitude, the 24-hour rotation, and hemispheric storm rotation.
3. **NOAA National Ocean Service** — [The Coriolis Effect](https://oceanservice.noaa.gov/education/tutorial_currents/04currents1.html). The non-rotating counterfactual, deflection direction by hemisphere, and the origin of the name.
4. **NOAA National Ocean Service** — [The Ekman Spiral](https://oceanservice.noaa.gov/education/tutorial_currents/04currents4.html). Rotation of the current vector with depth and the roughly 100-metre depth at which the motion ceases.
5. **NOAA Atlantic Oceanographic and Meteorological Laboratory** — [Hurricane Research Division FAQ](https://www.aoml.noaa.gov/hrd-faq/). The Coriolis force as apparent, greatest at the poles and zero at the equator, the 300-mile threshold for tropical cyclone spin-up, and the sinks-and-toilets myth.
6. **NOAA Atlantic Oceanographic and Meteorological Laboratory** — [Gradient Balance Winds](https://www.aoml.noaa.gov/hrd/hrd_sub/gradbal.html). The Coriolis parameter as twice the vertical component of Earth's rotation vector, and the balance of pressure gradient against centripetal and Coriolis accelerations.
7. **NASA** — [Earth Facts](https://science.nasa.gov/earth/facts/). Sidereal rotation period of 23.9 hours and equatorial diameter of 12,756 km.
8. **Copernicus, Weather and Climate Dynamics** — [The role of Rossby waves in polar weather and climate](https://wcd.copernicus.org/articles/4/61/2023/). The Coriolis parameter f = 2Ω sin φ, its meridional gradient β, and the westward phase-speed term in the Rossby wave dispersion relation.
9. **Copernicus, Ocean Science** — [Characterization of physical properties of a coastal upwelling filament with evidence of enhanced submesoscale activity and transition from balanced to unbalanced motions in the Benguela upwelling region](https://os.copernicus.org/articles/20/103/2024/). Definition of the Rossby number, the 𝒪(<0.1) and >0.5 thresholds, and observed values from satellite, shipboard and drifter data.
