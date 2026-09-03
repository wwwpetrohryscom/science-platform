---
title: 'Entropy: what the quantity measures, and where the analogies break'
excerpt: Entropy was defined as a ratio of heat to temperature before anyone knew what it counted. The statistical reading came later and connects to the first through a constant the SI now fixes exactly.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - entropy
  - statistical-mechanics
  - second-law
  - information-theory
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - heat-transfer-conduction-convection-radiation
pillar: laws-of-thermodynamics-explained
_bodyHash: 93e3b8bc
---

The quantity was defined operationally decades before anyone could say what it counted. Clausius wrote it as an accumulated ratio: the energy transferred as heat in a reversible step, divided by the absolute temperature at which the transfer happens. That gives changes in a property with units of joules per kelvin, computable from calorimetry alone, with no commitment to atoms — which was prudent in the 1860s, when atoms were still contested.

Boltzmann's version came from the other side. Count the microscopic arrangements consistent with a given macroscopic state, take the logarithm, multiply by a constant. The two definitions describe the same property, and the constant that converts between them is the Boltzmann constant, fixed by the SI since 2019 at exactly 1.380649 × 10⁻²³ J K⁻¹. The bridge between a measured ratio of heat to temperature and a count of arrangements carries the units of the first and the arithmetic of the second. Where this quantity sits among the other thermodynamic statements is the subject of [the four laws and what each forbids](/en/physics/thermodynamics/laws-of-thermodynamics-explained); what follows is about the quantity itself.

## What the numbers actually look like

Because the third law supplies a common reference point, absolute entropies can be tabulated rather than just differences. NIST's Chemistry WebBook gives liquid water a standard molar entropy of 69.95 ± 0.03 J mol⁻¹ K⁻¹ at 298.15 K, and water vapour, in the ideal-gas standard state at 1 bar, 188.835 ± 0.010 J mol⁻¹ K⁻¹.

Two things are worth noticing. The difference — about 119 J mol⁻¹ K⁻¹ — belongs to the same molecules with the same chemical bonds; what changed is how much position and momentum space is accessible to each one. And the values carry stated uncertainties in the second and third decimal places, because they are measured quantities, obtained by integrating heat capacity data down toward absolute zero. This is not a metaphor with a unit attached.

## Why "disorder" is the wrong word

The disorder gloss survives because it works for the easy cases — melting, boiling, mixing — and it fails wherever ordering and entropy increase together, which happens more often than the slogan allows.

The clearest counterexample comes from systems of hard particles with no attractive interactions at all. As density rises, such systems spontaneously form crystals and liquid crystals, and they do so because the ordered arrangement leaves each particle more local freedom to move than a jammed disordered one. Work published in [*PNAS*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4234574/) frames this as **shape entropy** acting through directional entropic forces, emergent effects "on the order of a few times the thermal energy" at the onset of ordering, generated purely by the maximisation of entropy through local dense packing. Order appears; nothing is minimising anything; the arrangement with the larger count of microstates simply happens to be the structured one.

How far the statistical picture should be stretched is itself disputed in the teaching literature. One [critique in *Entropy*](https://pmc.ncbi.nlm.nih.gov/articles/PMC7517180/) argues the generalisation to "any disorder or randomness" is over-reaching, and that the thermodynamic quantity is tied specifically to thermal energy and its transfer. What is not in dispute is the operational definition — the ratio Clausius wrote down — and that any usable statement about the quantity has to reduce to it.

The practical version of the correction: a count of microstates is always relative to the macroscopic description you chose. Specify pressure, volume and temperature and you get one number; specify the position of every molecule and there is nothing left to count. That description-dependence is a feature of the definition, not sloppiness in it, and it is why "how untidy something looks" has no thermodynamic content.

## The information connection is quantitative, not poetic

Written in the Gibbs form — a sum over the probabilities of the accessible states, weighted by their logarithms — the thermodynamic quantity has the same functional shape as the information-theoretic one. The link is not merely formal. Landauer's argument says that erasing one bit of information in contact with a reservoir at temperature T must dissipate at least kT ln 2, which at 300 K is 2.8 × 10⁻²¹ J, or 2.8 zeptojoules.

That bound has been tested. [Single-bit operations on nanomagnetic memory](https://pmc.ncbi.nlm.nih.gov/articles/PMC4795654/) dissipated (6.09 ± 1.43) zJ at 300 K, equivalent to (1.45 ± 0.35) times the thermal energy kT — above the limit, as it must be, and within a small multiple of it. The result matters less as a demonstration of the number than as a demonstration of the type: a logical operation has a thermodynamic price, set by the temperature of the surroundings and paid in heat. It puts a floor under the energy cost of computation that sits many orders of magnitude below what present hardware dissipates, and it applies as much to error-corrected [quantum computing hardware](/en/physics/quantum-basics/quantum-computing-fundamentals) as to a transistor.

## Life, and the accounting that makes it legal

Organisms build and maintain structure that is wildly improbable, and the objection that this contradicts the second law is a bookkeeping error about system boundaries. The relevant balance is planetary, and it is quantitative.

Sunlight reaches Earth from a photosphere at about 5,500 °C. The planet returns essentially the same amount of energy to space as infrared, but it does so at an effective temperature of roughly −20 °C. Because the entropy carried by a radiation stream scales inversely with the temperature at which it is emitted, the outgoing stream carries on the order of twenty times the entropy of the incoming one for the same energy. That surplus is the accounting room in which biological order is built, and it is the same asymmetry that drives weather and ocean circulation, developed further in [the Earth's energy budget as a heat engine](/en/physics/thermodynamics/earth-energy-budget-and-the-second-law).

Nothing in this is peculiar to life. A refrigerator lowers the entropy of its contents and raises that of the kitchen by more; the rule that forbids the free lunch and permits the refrigerator is one rule, applied with the boundary drawn in the right place.

## Where the quantity is genuinely hard

Three limitations are worth carrying.

Absolute values depend on an extrapolation. Tabulated entropies come from integrating measured heat capacities from the lowest temperature reached down to zero, and that last stretch is modelled rather than measured. Substances whose microscopic arrangement stays frozen in a partly random configuration — ice is the standard example, with proton positions that do not settle into a unique pattern — retain a residual entropy at absolute zero, so the "perfect crystal" premise of the third law does not hold universally.

Away from equilibrium there is no single definition. Entropy production in a steady non-equilibrium system depends on how the system is coarse-grained, and different reasonable choices give different numbers; claims about systems far from equilibrium should be read as claims about a particular model, not about a measured property.

And the reversible qualifier in the Clausius ratio does real work. The δQ in that expression is energy crossing a boundary as heat, by the mechanisms set out in [conduction, convection and radiation](/en/physics/thermodynamics/heat-transfer-conduction-convection-radiation), and only in the reversible limit does the ratio of that transfer to temperature equal the change in the property. Any real transfer at a finite rate produces additional entropy, which is precisely the gap between the ideal cycles and the machines examined in [heat engines and their efficiency limits](/en/physics/thermodynamics/heat-engines-and-efficiency-limits).

## Sources

1. **NIST Chemistry WebBook** — [Water, condensed phase thermochemistry data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=2). Standard molar entropy of liquid water at 298.15 K with its uncertainty.
2. **NIST Chemistry WebBook** — [Water, gas phase thermochemistry data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=1). Standard molar entropy of water vapour in the ideal-gas reference state.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). The exact fixed value linking the statistical and thermodynamic definitions.
4. **PNAS** — [Understanding shape entropy through local dense packing](https://pmc.ncbi.nlm.nih.gov/articles/PMC4234574/). Entropy-driven ordering in hard-particle systems and the magnitude of directional entropic forces.
5. **Entropy** — [The second law and entropy misconceptions demystified](https://pmc.ncbi.nlm.nih.gov/articles/PMC7517180/). A critique of the generalisation of entropy to disorder of any kind.
6. **Science Advances** — [Experimental test of Landauer's principle in single-bit operations on nanomagnetic memory bits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4795654/). Measured dissipation per erasure against the kT ln 2 bound at 300 K.
7. **NASA Science** — [Sun facts](https://science.nasa.gov/sun/facts/). Photosphere temperature used for the incoming radiation stream.
8. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Effective emission temperature of the planet as seen from space.
