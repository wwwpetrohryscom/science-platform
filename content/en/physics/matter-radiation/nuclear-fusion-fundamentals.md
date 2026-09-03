---
title: 'Fusion: three conditions at once, and the distance still to go'
excerpt: Fusion needs temperature, density and confinement time together, and no device has yet held all three long enough to run. This separates the physics from the engineering, and scientific gain from net electricity.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - nuclear-fusion
  - plasma-physics
  - energy
  - lawson-criterion
  - tritium
related:
  - atomic-and-nuclear-physics-explained
  - nuclear-fission-and-reactors
  - energy-systems-explained
  - heat-engines-and-efficiency-limits
  - radioactivity-and-radiation-units
pillar: atomic-and-nuclear-physics-explained
_bodyHash: b958a640
---

Both fission and fusion release energy for the same reason, which is set out in the pillar on [the binding-energy curve behind both processes](/en/physics/matter-radiation/atomic-and-nuclear-physics-explained): nuclei near iron are more tightly bound than nuclei at either end, so splitting a heavy one or joining two light ones moves mass into binding energy. The difficulty is entirely on the way in. Two nuclei carry positive charge, and the electrostatic repulsion between them rises steeply as they approach, while the strong force that would bind them only reaches across roughly a nuclear diameter. Getting two nuclei that close means giving them enough kinetic energy to climb most of that barrier — and then keeping enough of them close enough for long enough that the reactions repay what it cost to set the conditions up.

That last clause is where fusion research actually lives. The reaction is not in doubt; the Sun has been running it for four and a half billion years and hydrogen bombs demonstrated it on Earth in 1952. What is in doubt is whether a controlled device can hold the conditions steadily enough to produce more usable energy than it consumes.

## Why deuterium and tritium, and not the reaction the Sun uses

The Sun fuses ordinary hydrogen, but the first step of that chain requires a weak-interaction conversion of a proton into a neutron, which is so improbable that a given proton in the solar core waits on the order of billions of years for it. The Sun compensates with sheer mass. No terrestrial device can.

Every serious fusion-energy programme therefore uses deuterium and tritium, the two heavy hydrogen isotopes. The US Department of Energy's explainer gives the reason plainly: D–T fusion produces a neutron and a helium nucleus, releases much more energy than most fusion reactions, and — decisively — occurs at lower temperatures than the alternatives. ITER puts the same choice in terms of probability: deuterium and tritium have the greatest cross-section — the likelihood that two nuclei which meet actually fuse — at the lowest temperature of any possible fuel candidates, which means the most reactions for a given temperature and density.

The choice has two consequences that shape everything downstream. The energy comes out mostly as a fast neutron, which is electrically neutral and therefore cannot be confined magnetically — it flies out of the plasma and deposits its energy in the surrounding structure, where it also damages the material over time. And tritium does not occur naturally in useful quantities.

## Three quantities, and why they are multiplied together

A fusion plasma has to satisfy three conditions simultaneously: it must be hot enough for reactions to occur at a useful rate, dense enough for nuclei to encounter each other, and confined long enough that the energy released exceeds the energy leaking out. Raising one at the expense of another does not help, which is why the field's figure of merit is the product of all three — density, temperature and energy confinement time, the **triple product**.

EUROfusion gives the threshold for D–T as a triple product of at least 5×10²¹ m⁻³ s keV, at temperatures in excess of 100 million degrees. The density that turns out to be optimal is around a millionth of that of the atmosphere — fusion plasmas are extremely hot and extremely thin, and the fuel ITER injects as a gas, filling the entire volume of the tokamak, weighs only a few grams. JET, the largest tokamak of the previous generation, reached triple products above 10²¹ m⁻³ s keV with energy confinement times on the order of a second; ITER is designed for confinement times around four seconds.

Two ways of satisfying the product exist, and they sit at opposite ends of the density scale. **Magnetic confinement** — tokamaks and stellarators — holds a very dilute plasma for seconds using magnetic fields, since a plasma is a conductor and charged particles spiral along field lines. **Inertial confinement** compresses a millimetre-scale fuel capsule to enormous density with lasers and relies on the fuel's own inertia to hold it together for the nanoseconds before it blows apart. Neither approach is a variation on the other; they differ by roughly ten orders of magnitude in density and by the same factor in the opposite direction in confinement time.

## Ignition, gain, and the three different things "breakeven" can mean

In December 2022 the National Ignition Facility at Lawrence Livermore delivered 2.05 megajoules of laser energy to a target and recorded 3.15 megajoules of fusion energy output — the first controlled fusion experiment to release more energy than the laser light that drove it. That is a genuine and hard-won physics result, and it is also the point at which most reporting on fusion goes wrong.

Three distinct quantities get called gain, and they differ by more than an order of magnitude at every device built so far.

| What is being compared | What it measures | Where NIF's 2022 shot sits |
| --- | --- | --- |
| Scientific gain | Fusion energy out versus energy delivered to the fuel target | 3.15 MJ out from 2.05 MJ in — exceeded 1 |
| Engineering gain | Fusion energy out versus total energy drawn by the facility | Far below 1; the laser system draws vastly more from the grid than reaches the target |
| Net electrical output | Electricity to the grid versus electricity consumed | No fusion device has produced any |

A claim that fusion has "achieved breakeven" is true of the first row and false of the other two. The distinction is not pedantry: the second and third rows are where the remaining engineering problem is, and collapsing them into the first makes a fifty-year problem look solved.

ITER is designed to address the first two together. Its stated goal is Q = 10 — 500 megawatts of fusion power from 50 megawatts of injected heating power — in a plasma five times the volume of the largest machine operating today, sustained long enough to be a genuinely burning plasma, one heated mostly by its own fusion products rather than from outside. ITER will not convert that heat to electricity. It is an experiment to establish that the plasma physics scales, not a power station, and reading its 500 MW as a generating capacity is the same category error as the table above.

## The tritium problem

Tritium has a half-life of about 12.3 years, so the Earth's inventory is whatever is being produced now — a small quantity from cosmic-ray interactions and a larger one as a by-product of certain fission reactors. There is no tritium mine. A fusion economy would have to make its own.

The proposed mechanism is elegant and unproven at scale. ITER describes it directly: a blanket module containing lithium absorbs an incoming fusion neutron, and the lithium nucleus recombines into an atom of tritium and an atom of helium. The reaction that damages the vessel wall is the same reaction that makes the next batch of fuel. ITER will be the first device to test this concept of tritium self-sufficiency, through a Test Blanket Module programme trying four separate breeding designs — water-cooled lithium-lead, water-cooled ceramic breeder, helium-cooled ceramic breeder, and helium-cooled ceramic pebbles — and ITER's own documentation states that further research will be needed to demonstrate large-scale tritium production and recycling.

That is the honest position. Breeding has to work, at a ratio above one, with the tritium recovered from the blanket faster than it decays, in a structure that the same neutron flux is steadily damaging. None of those has been demonstrated in an operating reactor.

## What fusion would and would not solve

Fusion produces no carbon dioxide and no long-lived actinide waste, and the reaction cannot run away — losing confinement stops it rather than accelerating it, which is a categorically different safety profile from the decay heat that makes shutdown insufficient in a [fission reactor](/en/physics/matter-radiation/nuclear-fission-and-reactors). Those advantages are real and they are physics, not projection.

It does produce radioactive material: neutron activation of the structure leaves components that are hazardous for decades to a century, which is a waste-management problem of a different shape and scale from spent fission fuel but not an absence of one. Tritium itself is a radioactive gas that is difficult to contain, and the [units in which any of this is measured](/en/physics/matter-radiation/radioactivity-and-radiation-units) matter for judging the risk honestly.

And a fusion plant would still be a thermal power station. The neutrons heat a blanket, the blanket boils water, the steam turns a turbine — which puts the whole output back under the [Carnot bound and the materials limits that cap every heat engine](/en/physics/thermodynamics/heat-engines-and-efficiency-limits). Fusion changes where the heat comes from. It does not change the thermodynamics of what happens next, and any estimate of what fusion would cost has to pass through the same conversion losses as everything else in [an energy system](/en/physics/energy/energy-systems-explained).

## Sources

1. **EUROfusion** — [Fusion conditions](https://euro-fusion.org/fusion/fusion-conditions/). Triple-product threshold for D–T, the temperature requirement, optimum density, and JET and ITER confinement times.
2. **U.S. Department of Energy, Office of Science** — [DOE explains… fusion reactions](https://www.energy.gov/science/doe-explainsfusion-reactions). Why D–T is the chosen reaction and what it produces.
3. **Lawrence Livermore National Laboratory** — [National Ignition Facility achieves fusion ignition](https://www.llnl.gov/article/49306/lawrence-livermore-national-laboratory-achieves-fusion-ignition). The 5 December 2022 shot: 2.05 MJ delivered, 3.15 MJ of fusion output.
4. **ITER Organization** — [What will ITER do?](https://www.iter.org/fusion-energy/what-will-iter-do). The Q = 10 goal, 500 MW from 50 MW of heating, five times the plasma volume of the largest machine operating today, the burning-plasma objective, and the explicit statement that ITER will not convert its output to electricity.
5. **ITER Organization** — [The magic cocktail of deuterium and tritium](https://www.iter.org/node/20687/magic-cocktail-deuterium-and-tritium). Cross-section as the probability of a reaction, and the statement that deuterium and tritium have the greatest cross-section at the lowest temperature of any possible fuel candidates.
6. **ITER Organization** — [Tritium breeding](https://www.iter.org/machine/supporting-systems/tritium-breeding). The lithium breeding reaction, the four Test Blanket Module concepts, and the outstanding research needed for large-scale breeding.
7. **ITER Organization** — [Frequently asked questions](https://www.iter.org/faqs). The fuel gas weighing only a few grams and filling the whole tokamak volume, and the few-seconds burn it represents.
8. **ITER Organization** — [Advantages of fusion](https://www.iter.org/fusion-energy/advantages-fusion). No high-activity, long-lived nuclear waste; the plasma cooling and the reaction stopping within seconds of any disturbance; and activated components anticipated to be recyclable or reusable within 100 years.
9. **National Ignition Facility, LLNL** — [NIF and inertial confinement fusion](https://lasers.llnl.gov/). Inertial-confinement approach and facility description.
10. **Particle Data Group** — [Review of Particle Physics](https://pdg.lbl.gov/). Reference values for nuclear and particle properties underlying the reaction energetics.
