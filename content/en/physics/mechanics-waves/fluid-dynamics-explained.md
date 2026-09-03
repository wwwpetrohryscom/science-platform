---
title: 'Fluid dynamics: why one dimensionless number decides how a flow behaves'
excerpt: A swimming ciliate and a hurricane obey the same equations. What separates them is the ratio of inertia to viscosity, and that ratio decides whether a flow is smooth, chaotic, or beyond the reach of direct calculation.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - fluid-dynamics
  - reynolds-number
  - turbulence
  - boundary-layer
  - aerodynamics
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - sound-and-acoustics-explained
  - convection-and-cloud-formation
pillar: classical-mechanics-explained
_bodyHash: aecb63d8
---

A single-celled organism beating its cilia and a cyclone wrapping around its eye are governed by the same equations. What separates them is not the physics but a ratio: how much the fluid's inertia matters relative to its viscosity. That ratio, the Reynolds number, is the first thing a fluid dynamicist asks about a problem, because it determines which terms in the equations can be thrown away and which cannot.

The conservation laws underneath are the ones laid out in [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained). What changes is the object: instead of a body with fixed parts, the subject is a continuum that deforms without limit, so mass, momentum and energy have to be tracked through a control volume rather than attached to a thing.

## The ratio, and what it selects

NASA's aeronautics reference states the definition plainly: the Reynolds number "expresses the ratio of inertial (resistant to change or motion) forces to viscous (heavy and gluey) forces", written Re = ρVL/μ, where ρ is density, V a characteristic velocity, L a characteristic length and μ the dynamic viscosity. Nothing in that expression is a property of the fluid alone. Two of the four terms describe the flow, and one describes the geometry, which is why the same water sits deep in the viscous regime in a capillary and is thoroughly turbulent in a river.

The low end is stranger than it sounds. Work on the ciliate *Paramecium* puts it at a Reynolds number of about 0.1, a regime in which "inertial forces are small compared with viscous forces". An organism there does not coast. Stop the cilia and motion ceases almost immediately, over a distance far shorter than the cell itself, because there is no stored momentum worth speaking of. Strategies that work by throwing fluid backwards — the way a swimmer does — return nothing at that scale.

For the fluid properties themselves, NIST's reference data give liquid water at 20 °C and 1 bar a density of 998.21 kg/m³ and a viscosity of 1.0016 × 10⁻³ Pa·s. Dividing one by the other gives a kinematic viscosity close to 1.0 × 10⁻⁶ m²/s, and it is this combined quantity, not viscosity alone, that sets how fast momentum diffuses sideways through a flow.

The practical payoff of the ratio is model testing. NASA's account is direct: "If the Reynolds number of the experiment and flight are close, then we properly model the effects of the viscous forces relative to the inertial forces." A scale model in a tunnel is not a small aircraft; it is a different flow that has been arranged to have the same dimensionless numbers. Where compressibility also matters, a second ratio — the Mach number, velocity divided by [the local speed of sound](/en/physics/mechanics-waves/sound-and-acoustics-explained) — has to be matched as well, and NASA warns that carrying low-speed coefficients into high-speed conditions fails because "the compressibility of the air alters the important physics between these two cases".

## What Bernoulli's equation says, and the version of it that is wrong

Bernoulli's relation is a statement about energy along a streamline, and it holds only for flow that is steady, incompressible and effectively inviscid. Those conditions are not fine print; they are the content. Where they hold, a rise in speed corresponds to a fall in pressure, and the equation converts one into the other.

The trouble comes when it is run backwards to explain something it cannot. The most durable example is the claim that a wing lifts because air taking the longer upper path must arrive at the trailing edge alongside air on the lower path, and so must travel faster. NASA's aeronautics guide rejects the reasoning on measurement grounds rather than on principle: "the velocity on the upper surface of a lifting wing is much higher than the velocity on the upper surface that produces an equal transit time." The assumed velocity is simply not the observed one. Bernoulli's equation is fine; it is being fed a fabricated input. The honest order of operations is to solve for the velocity field first, then use Bernoulli to turn it into pressure, then integrate the pressure to get a force.

## The boundary layer, where the viscosity you neglected does all the work

Treating a flow as inviscid works surprisingly well away from surfaces and fails completely at them, because a real fluid does not slip along a solid wall. NASA describes the consequence as "this thin layer of fluid near the surface in which the velocity changes from zero at the surface to the free stream value away from the surface". Almost all the shear, and therefore almost all the viscous drag, lives inside that layer.

Its character depends on the Reynolds number: "For lower Reynolds numbers, the boundary layer is laminar and the streamwise velocity changes uniformly as one moves away from the wall", while at higher values it "is turbulent and the streamwise velocity is characterized by unsteady swirling flows inside the boundary layer". The distinction matters because a boundary layer that runs out of momentum detaches from the surface, and separation is what produces wing stall at a high angle of attack.

This is also why drag does not rise smoothly with speed. NASA's treatment of flow past a sphere describes a sequence rather than a trend: stable attached vortices at low speed, then unstable alternating shedding — the vortex street — generating large drag, then chaotic flow that reduces drag somewhat, and then a turbulent boundary layer that initially produces less drag than the laminar case before the relationship reverses again. A turbulent layer is more dissipative at the wall but carries higher-momentum fluid down towards it, so it can stay attached further round the body. Whether that trade is favourable depends on where you are in the sequence.

## Transition is a range, not a threshold

Textbook shorthand puts the laminar-to-turbulent transition in a pipe at a Reynolds number of about 2,300, as though the flow flipped state at a line. Careful work on transitional pipe flow describes something less tidy. Below Re₁ ≃ 2,300 turbulence appears as localised "equilibrium (or longtime transient) puffs" travelling in an otherwise laminar background; the turbulent fraction then grows with Reynolds number "until Re₂ ≃ 2,600 where there is a continuous transition to a state of uniform turbulence".

| Reynolds number | State of the pipe flow | What is actually observed |
| --- | --- | --- |
| Below ≈ 2,300 | Laminar with localised turbulence | Isolated puffs, transient or long-lived, in laminar surroundings |
| ≈ 2,300 to ≈ 2,600 | Intermittent | Turbulent fraction rises continuously with Reynolds number |
| Above ≈ 2,600 | Uniform turbulence | Turbulence fills the pipe rather than occupying patches |

Two consequences follow. Transition is a property of a range, so a flow near the lower figure can be laminar or turbulent depending on inlet disturbance and wall roughness. And a single quoted critical value is a summary of a distribution, not a switch.

## Turbulence: the part that has not been closed

Turbulence is not a separate physical theory. It is what the same equations do when the nonlinear inertial terms dominate, and the difficulty is arithmetic rather than conceptual. Averaging the equations to get the mean flow introduces new terms representing the transport of momentum by fluctuations, and those terms contain unknowns that the averaged equations themselves cannot supply. Every practical calculation therefore closes the system with a model.

How far that concession reaches is visible in how the field states its own ambitions. A study commissioned by NASA on the future of computational aerodynamics sets as a target for 2030 that "physics-based, accurate predictions of complex turbulent flows, including flow separation, can be accomplished routinely and efficiently" — a goal worth writing down precisely because it is not yet routine. Turbulence models are calibrated against measured and simulated cases rather than derived from first principles, which means a model validated in one regime cannot be assumed accurate outside it.

## Why this shows up in every climate and weather forecast

The gap between resolved and modelled motion is the central constraint on geophysical simulation, not a detail of engineering practice. The IPCC's assessment puts it directly: "Given limitations in computing resources, the current-generation GCMs cannot yet represent small-scale cloud processes and consequently shallow and deep convection is determined by sub-grid-scale parametrizations." Regional convection-permitting models, "typically run at a resolution less than 10 km", resolve some of what a global model has to parameterise, and they improve the simulated diurnal cycle and precipitation extremes — but they cannot be run globally for long periods at present cost.

The honest reading of that situation is the one the assessment gives: there remains "low confidence in their ability to accurately simulate the spatio-temporal features of present-day precipitation, especially in the tropics". A [climate model](/en/glossary/climate-model) is not wrong about fluid dynamics; it is unable to resolve the scales at which some of the fluid dynamics happens, and the substitute is a parameterisation whose coefficients are constrained by observation rather than derived. The same problem sets limits on how [ocean circulation](/en/ecology/earth-systems/ocean-circulation-and-climate) is represented, and it is the reason [convection and cloud formation](/en/physics/climate-physics/convection-and-cloud-formation) remains one of the most actively revised parts of atmospheric physics.

What the Reynolds number cannot do is tell you which length to put in it. A pipe has an obvious diameter; a mountain range, a leaf boundary layer or a breaking wave does not, and the choice of characteristic length is a modelling judgement that changes the value by orders of magnitude. Two flows quoted at the same Reynolds number are dynamically similar only if the same length was meant in both cases — which is the sort of thing that is easy to state and easy to lose between a wind tunnel and a paper.

## Sources

1. **NASA Glenn Research Center** — [Similarity parameters](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/similarity-parameters/). Definition of the Reynolds and Mach numbers and the basis of wind-tunnel similarity.
2. **NASA Glenn Research Center** — [Bernoulli and Newton](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/). Why the equal-transit-time account of lift misstates the velocity field.
3. **NASA Glenn Research Center** — [Boundary layer](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/). Boundary-layer definition, laminar and turbulent character, and flow separation.
4. **NASA Glenn Research Center** — [Drag of a sphere](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Sequence of flow states behind a bluff body and its effect on drag.
5. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Density and viscosity of liquid water at 20 °C and 1 bar.
6. **Proceedings of the National Academy of Sciences** — [Distinct large-scale turbulent-laminar states in transitional pipe flow](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889535/). Critical Reynolds numbers bounding the intermittent regime in pipe flow.
7. **eNeuro** — [Integrative neuroscience of Paramecium, a "swimming neuron"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8208649/). Reynolds number of a swimming ciliate and the dominance of viscous forces.
8. **NASA Technical Reports Server** — [CFD Vision 2030 Study: A Path to Revolutionary Computational Aerosciences](https://ntrs.nasa.gov/citations/20140003093). Stated 2030 goal of routine, accurate prediction of complex turbulent flows.
9. **IPCC AR6 WG1, Chapter 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Sub-grid parameterisation of convection, convection-permitting resolution, and confidence in simulated precipitation.
