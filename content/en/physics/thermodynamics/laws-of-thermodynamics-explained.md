---
title: 'The laws of thermodynamics: what each one actually forbids'
excerpt: The four laws are prohibitions, not recipes. Each one rules out a class of machine or process, and together they fix what temperature means, what energy accounting must balance, and which direction a process can run.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - thermodynamics
  - second-law
  - temperature
  - entropy
  - energy-conversion
related:
  - entropy-explained
  - heat-engines-and-efficiency-limits
  - heat-transfer-conduction-convection-radiation
  - earth-energy-budget-and-the-second-law
---

Thermodynamics is a set of prohibitions. Each of its four laws says that something cannot be done, and each has outlived the microscopic theories that were meant to explain it — caloric, then classical mechanics, then classical field theory. That is why a nineteenth-century argument about steam still constrains a solar cell, a domestic refrigerator and a bacterium without modification.

They are also quoted more loosely than they are used. "Energy is conserved" and "entropy increases" are slogans that drop the conditions attached to them, and the conditions are where the confusion about perpetual motion, efficiency claims and living systems lives.

## The zeroth law is what makes a thermometer mean anything

The zeroth law says that thermal equilibrium is transitive: if two bodies are each in equilibrium with a third, they are in equilibrium with each other. It sounds like bookkeeping. It is the reason a single number can stand for a property shared by every system in mutual equilibrium — and therefore the reason an instrument placed in contact with a body reports something about the body rather than only about the instrument.

That number now rests on a defined constant rather than a substance. Since May 2019 the SI has fixed the Boltzmann constant at exactly 1.380649 × 10⁻²³ J K⁻¹, and the kelvin follows from it; the CODATA listing carries no uncertainty because there is none to carry. The previous definition, adopted in 1954, made the kelvin 1/273.16 of the triple-point temperature of water, and NIST is blunt about why that was replaced: extrapolating from one fixed point to very high or very low temperatures was the weak link. Absolute zero stays where it was, at −273.15 °C.

**Temperature is not a quantity of energy.** A spark and a bathtub can sit at the same temperature with energies differing by many orders of magnitude. Temperature is the variable that equalises when two systems are allowed to exchange energy — which is exactly what the zeroth law asserts, and all it asserts.

## The first law: energy is conserved, and heat is not a thing a body contains

The first law extends energy conservation to include heat: the change in a system's internal energy equals the heat added minus the work done by the system. Its content is in the difference between the terms. Internal energy is a **state function** — it depends only on the system's current condition, so a round trip returns it to where it started. Heat and work are **path quantities**: they describe energy crossing a boundary during a process, and their split depends on how the process was run.

The practical consequence is that "how much heat does this object contain" is not a well-formed question. An object holds internal energy; heat is that energy in transit under a temperature difference, and work is energy in transit through a force acting over a displacement. The same change of state can be reached by many combinations of the two, which is why the first law alone never picks out an efficiency — it balances the books and stops there.

What it forbids is the perpetual motion machine of the first kind: a cyclic device that delivers work without an equal energy input. The prohibition is categorical rather than mechanical — it applies without inspecting the proposed linkage, because any cycle returns the internal energy to its starting value and the books must then balance across the boundary.

## The second law: the one with a direction

Two classical statements are equivalent. Clausius: no cyclic process can have as its sole result the transfer of heat from a colder body to a hotter one. Kelvin–Planck: no cyclic process can have as its sole result the complete conversion of heat from a single reservoir into work. Both are summarised by the entropy form — in an isolated system, entropy does not decrease — and both forbid the perpetual motion machine of the second kind, the device that would extract useful work from ambient warmth alone. What entropy is, and why "disorder" is a poor gloss for it, is the subject of the companion article on [what entropy actually measures](/en/physics/thermodynamics/entropy-explained).

This is the only law here that distinguishes past from future, and it is the one with the sharpest engineering consequence: the ceiling on any cyclic engine depends on the temperatures of its reservoirs and on nothing else, a bound developed with real plant data in [heat engines and their efficiency limits](/en/physics/thermodynamics/heat-engines-and-efficiency-limits).

It is also statistical, and that is not a hedge. The Crooks fluctuation relation fixes how much more likely a forward trajectory is than its reverse, given the work exchanged, and it was [tested directly by pulling single RNA molecules](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/) with optical tweezers: the folding free energy recovered from the work distributions was 62.8 ± 1.5 kBT for a hairpin, in agreement with independent calculation. Individual molecular trajectories in that experiment absorb less work than the free-energy change — locally running the "wrong" way — while the ensemble obeys the inequality. The second law is a statement about overwhelming odds in systems of many particles, not a logical impossibility at the scale of a few.

## The third law: absolute zero as an asymptote

The third law states that the entropy of a system approaches a constant as temperature approaches absolute zero, and that the constant is zero for a perfect crystal. Two consequences follow. Absolute entropies become meaningful, because there is a common reference point to integrate from — which is why tabulated standard entropies exist at all. And cooling gets progressively harder: heat capacities fall toward zero as the temperature does, so each further stage of cooling has less to work with.

The unattainability statement has been sharpened recently. A [general derivation published in *Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/) in 2017 quantified the cost: perfect cooling to absolute zero requires that at least one resource — the volume of the cold bath or the work consumed — be infinite, and for a radiation bath the temperature achievable scales as an inverse power of the cooling time. Absolute zero is not merely difficult in practice; the difficulty is a theorem, and the theorem prices it.

## The four laws side by side

| Law | What it asserts | What it forbids | What it makes meaningful |
| --- | --- | --- | --- |
| Zeroth | Thermal equilibrium is transitive | A temperature scale that depends on the instrument | Temperature as a shared property |
| First | Energy, including heat, is conserved | Work from nothing — perpetual motion of the first kind | Internal energy as a state function |
| Second | Entropy of an isolated system does not decrease | Work from a single reservoir — perpetual motion of the second kind | Entropy, and a direction for time |
| Third | Entropy tends to a constant as temperature tends to zero | Reaching absolute zero with finite resources | Absolute entropy, referenced to zero |

## Reversibility is a limit, not a procedure

Every bound above is derived for a reversible process: one driven so slowly, by so small an imbalance, that it could be run backwards through the same states with no residue. Nothing real is reversible, because a finite rate requires a finite driving force, and a finite driving force produces entropy. This is why the bounds are approached and never met, and why maximising efficiency and maximising power are different optimisations with different answers. The distance involved is not small: the U.S. coal fleet consumed 10,777 Btu of fuel for each kilowatt-hour sent out in 2024, according to the Energy Information Administration, so just under a third of the fuel energy arrived as electricity.

It also explains a division of labour that trips people up. Thermodynamics fixes direction and ceiling; it says nothing about how fast anything happens. The rate at which energy actually crosses a boundary is a transport question, governed by conduction, convection and radiation with their own scaling laws — the subject of [how heat actually moves](/en/physics/thermodynamics/heat-transfer-conduction-convection-radiation), and the reason a thermodynamically permitted process can still be uselessly slow.

## Where the laws bite outside engines

A heat pump delivers more thermal energy to a building than the electricity it consumes, which is routinely misread as a violation. It is not: the machine moves heat rather than making it, and the second law limits the ratio through the temperature lift rather than forbidding a ratio above one. The smaller the lift, the higher the achievable ratio, which is why ground-coupled machines are attractive where the ground is available. The U.S. Department of Energy notes that temperatures about 30 feet down stay between roughly 10 °C and 15 °C year-round, a far gentler source in January than outdoor air.

Living systems provoke the same misreading. An organism builds and maintains improbable structure, decreasing its own entropy, while exporting a larger increase to its surroundings; the accounting closes because the organism is open, as the energy-flow argument behind [primary production in ecosystems](/en/ecology/ecosystems/primary-production-and-energy-flow) sets out. The planetary version — sunlight absorbed at a high temperature, infrared radiated at a low one — is worked through in [the Earth's energy budget as a heat engine](/en/physics/thermodynamics/earth-energy-budget-and-the-second-law); the same reasoning applied to a hot radiation source and a cold cell gives [the thermodynamic limits of photovoltaics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics), and it recurs at every step of the conversion chains described in [how energy systems are put together](/en/physics/energy/energy-systems-explained).

## What the framework does not settle

Classical thermodynamics is a theory of equilibrium states and the transitions between them: it gives no time constants and is silent about mechanism. Far-from-equilibrium steady states — a living cell, a convecting atmosphere, a laser — are covered by no extremum principle with the standing of the second law, despite repeated proposals; current evidence does not support treating maximum entropy production as a general law.

Temperature itself becomes ambiguous outside equilibrium: a system whose parts relax at very different rates can be assigned several defensible temperatures at once. Systems dominated by gravity are stranger still, with negative heat capacities and, for black holes, entropy scaling with area rather than volume. The laws survive both cases; the shortcuts built on top of them often do not.

## Sources

1. **NIST** — [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction). SI redefinition of the kelvin, the previous triple-point definition, and absolute zero in degrees Celsius.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). The seven defining constants of the SI and the fixed value of the Boltzmann constant since 20 May 2019.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). Exact value and units, with no assigned uncertainty.
4. **Nature Communications** — [A general derivation and quantification of the third law of thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/). Resource cost of cooling and the scaling of attainable temperature with cooling time.
5. **Nature** — [Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/). Single-molecule test of a fluctuation relation and the recovered folding free energy.
6. **U.S. Department of Energy** — [Geothermal heat pumps](https://www.energy.gov/hgeo/geothermal/geothermal-heat-pumps). Shallow ground temperatures that set the temperature lift for ground-coupled machines.
7. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Fleet-average fuel-to-electricity conversion in operating power plants.
