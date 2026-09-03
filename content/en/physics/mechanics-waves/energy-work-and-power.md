---
title: 'Work, energy and power: the definitions that most confusion comes from'
excerpt: Almost every argument about energy is really a disagreement about definitions. Work is a path integral, power is a rate, and only some of the familiar unit conversions are exact — the rest are empirical averages that are revised each year.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - energy
  - work
  - power
  - units
  - unit-conversion
related:
  - classical-mechanics-explained
  - measurement-uncertainty-explained
  - capacity-factor-and-energy-metrics
  - laws-of-thermodynamics-explained
pillar: classical-mechanics-explained
_bodyHash: f911fca8
---

Hold a heavy box motionless at arm's length until your arms shake. In the mechanical sense you have done no work on it at all. That result is not a quirk of physics jargon; it follows from the only definition of work that makes the rest of mechanics consistent, and the gap between that definition and the everyday word is where a large fraction of energy confusion begins.

## Work is a path integral of force, not a measure of exertion

Work is the integral of force along the displacement it acts through, counting only the component of force parallel to the motion. Three consequences follow immediately, and each one contradicts an intuition.

A force perpendicular to the motion does zero work. The tension holding a satellite in a circular orbit never speeds it up. A force applied with no displacement does zero work, which is the box above. And work is signed: a decelerating force does negative work, removing kinetic energy rather than adding it.

The payoff is the **work–energy theorem**: the net work done on a body equals the change in its kinetic energy. This is not an additional law. It is what the second law of motion becomes when you integrate it along a trajectory instead of evaluating it instant by instant, and it is the reason energy methods can answer questions about speeds without ever solving for the motion in between. The wider framework these definitions sit inside is set out in [the article on classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained).

## Potential energy is a bookkeeping device that only some forces permit

For certain forces, the work done between two points does not depend on the route taken. Gravity near a planet, an ideal spring and the electrostatic force all have this property. Whenever it holds, you can define a **potential energy** — a function of position alone whose difference between two points equals the work the force would do — and then track a single conserved total instead of integrating along every path.

Friction and fluid drag do not permit this. The work they do depends on the distance travelled, so a longer route costs more, and no position-dependent function can capture it. Drag is the harder of the two, because the force itself depends on the flow regime around the moving body — the subject of [why the Reynolds number decides the behaviour of a fluid](/en/physics/mechanics-waves/fluid-dynamics-explained). Calling such forces dissipative is accurate but slightly misleading: the energy is not lost, it is transferred into the disordered internal motion of the materials involved, which is where mechanics hands the problem over to [the laws of thermodynamics](/en/physics/thermodynamics/laws-of-thermodynamics-explained). The distinction between conservative and non-conservative forces is therefore not about whether energy is conserved — it always is — but about whether a potential function exists.

## Power is a rate, and the two words are swapped constantly

Power is the rate at which energy is transferred. In SI terms the difference is visible in the dimensions themselves: the BIPM defines the joule as kg m² s⁻² and the watt as kg m² s⁻³, differing by exactly one power of time.

This is the most common error in public writing about energy. A battery installation described as "a 100 MW battery" has been described by its power alone, which says how fast it can deliver energy but nothing about how long it can keep going; the energy capacity, quoted in megawatt hours, is a separate number, and the ratio of the two is the duration. A solar panel rated at 300 W is rated at an instantaneous maximum under standard test conditions, not at what it will produce over a day. Conflating the two makes it impossible to compare technologies sensibly, which is why the metrics discussed in [capacity factor and other energy measures](/en/physics/energy/capacity-factor-and-energy-metrics) exist at all.

A related trap is the kilowatt hour, which looks like a rate multiplied by a time and is therefore often mistaken for a power. It is an energy: a power of one kilowatt sustained for one hour.

## Which conversions are exact, and which are conventions

The unit landscape for energy is unusually cluttered, and the entries in it do not all have the same standing. Some are exact by definition, some are exact by a convention someone chose, and some are empirical averages. NIST's guide to the SI lists the conversion factors below.

| Unit | Value in joules | Standing |
| --- | --- | --- |
| Kilowatt hour | 3.6 × 10⁶ | Exact — one kilowatt for one hour |
| Electronvolt | 1.602 177 × 10⁻¹⁹ | Fixed by the defined elementary charge |
| Calorie (thermochemical) | 4.184 | Exact by convention |
| Calorie (International Table) | 4.1868 | Exact by a different convention |
| Calorie (15 °C) | 4.185 80 | Exact by a third convention |
| British thermal unit (IT) | 1.055 056 × 10³ | Conventional |
| British thermal unit (thermochemical) | 1.054 350 × 10³ | Conventional |
| Foot pound-force | 1.355 818 | Conventional |
| Ton of TNT | 4.184 × 10⁹ | A definition, not a measurement |

Three of those rows deserve comment. There is no such thing as "the" calorie: the thermochemical and International Table versions differ in the third decimal place, and a fifteen-degree calorie differs again. The dietary Calorie written with a capital letter on a food label is a kilocalorie, so the prefix rather than the unit is doing the work. The two British thermal units differ by about 0.07 per cent, which is negligible for a domestic gas bill and not negligible when it is applied to a national fuel inventory. And the ton of TNT at 4.184 × 10⁹ J is exactly 10⁹ thermochemical calories — it is a stipulated reference quantity rather than a measurement of any particular explosive.

Power has the same problem in miniature. NIST lists a horsepower of 550 foot pound-force per second at 745.6999 W, a metric horsepower at 735.4988 W and an electric horsepower at exactly 746 W. Nothing in the arithmetic tells you which one a manufacturer used.

## Where a conversion factor stops being a constant

The rows above are all fixed numbers. The conversions people actually use in energy statistics are frequently not.

The U.S. Energy Information Administration publishes Btu contents for fuels: one kilowatt hour at 3,412 Btu, one cubic foot of natural gas at 1,036 Btu, one gallon of motor gasoline at 120,214 Btu, one cord of wood at 20,000,000 Btu. The first of those is arithmetic — 3.6 MJ divided by the International Table Btu gives 3,412 to four figures, and it will never change. The others are averages over a physical commodity that varies, and the agency states plainly that the factors "are recalculated to account for changes in the quality and composition of the fuels" each year.

That distinction matters more than it looks. In the agency's own worked comparison, a household burning 67,000 cubic feet of natural gas used 69,412,000 Btu while a neighbour burning 500 gallons of heating oil used 68,690,476 Btu — a margin of about one per cent, which is the same order as the annual revision to the factors themselves. The same page illustrates the point without meaning to: its table gives heating oil as 138,500 Btu per gallon, while the worked example computes with 137,381. Neither figure is wrong; a Btu content is a periodically restated average of a variable commodity, not a constant. When national energy accounts are reported in quadrillion Btu — U.S. petroleum consumption was about 38 per cent of the total in 2025, at 35.9 quads — those totals carry the same embedded assumption about fuel quality, which is invisible in the headline figure and is one reason year-to-year comparisons are safer within a single data release than across releases. Interpreting such a figure is the same discipline described in [how measurement uncertainty is evaluated and reported](/en/physics/mechanics-waves/measurement-uncertainty-explained).

## The rule that prevents most of these mistakes

A NIST paper on quantity calculus states the principle cleanly: "the value of a quantity is an inherent property of the quantity — it does not change when the value of the quantity is expressed in different units, only its numerical value changes." Treat the unit symbol as an algebraic factor, carry it through every step, and the arithmetic itself objects when a power is used where an energy belongs, or when a kilowatt hour is added to a kilowatt.

What that discipline cannot do is tell you which convention a source used before handing you the number. An energy figure without its unit convention, its reference conditions and its year of publication is not yet a quantity; it is a numeral with a suggestion attached.

## Sources

1. **NIST** — [Guide to the SI, Appendix B.9: conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9). Exact factors for the calorie, Btu, kilowatt hour, foot pound-force, ton of TNT and the three horsepowers.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). The SI defining constants and the base-unit expressions for the joule and the watt.
3. **NIST** — [Definitions of the SI base units](https://www.nist.gov/si-redefinition/definitions-si-base-units). Fixed values of the elementary charge and the other defining constants.
4. **Journal of Research of the National Institute of Standards and Technology** — [Quantity calculus, fundamental constants, and SI units](https://pmc.ncbi.nlm.nih.gov/articles/PMC7339734/). The distinction between a quantity and its numerical value.
5. **U.S. Energy Information Administration** — [Units and calculators explained](https://www.eia.gov/energyexplained/units-and-calculators/). Btu contents of fuels, the annual recalculation of those factors, and the worked household comparison.
6. **U.S. Energy Information Administration** — [U.S. energy facts explained](https://www.eia.gov/energyexplained/us-energy-facts/). Primary energy consumption by source in quadrillion Btu.
