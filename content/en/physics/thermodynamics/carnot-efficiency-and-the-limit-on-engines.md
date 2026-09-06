---
title: 'Carnot efficiency: the bound that only two temperatures set'
excerpt: The bound is one minus the ratio of two absolute temperatures, and nothing else appears in it. That universality is what makes it useful and what makes it easy to misapply — to power stations, to heat pumps whose coefficient of performance exceeds one, and to solar cells.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 7
tags:
  - carnot-efficiency
  - thermodynamics
  - second-law
  - heat-engines
  - energy-conversion
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - entropy-explained
  - thermodynamic-limits-of-photovoltaics
pillar: laws-of-thermodynamics-explained
---

Sadi Carnot published *Réflexions sur la puissance motrice du feu* in 1824, at a time when steam engines converted below 5% of their fuel into work. The expression now carrying his name was not his. A bicentennial review of the *Réflexions* points out that the formula written as one minus the ratio of the sink and source temperatures was developed in the 1850s, first by Kelvin and later by Clausius; what Carnot supplied was the physical claim underneath it, that "the motive power of heat is independent of the agents employed to realize it."

The formula is bookkeeping. That claim is the physics, and it is the part that gets misapplied.

## What the expression says, and what each term has to be

For an engine that absorbs heat from a reservoir at absolute temperature T_h, rejects heat to a reservoir at T_c, and returns to its starting state at the end of each cycle, the fraction of absorbed heat that can leave as work cannot exceed 1 − T_c/T_h.

Three features of that sentence are load-bearing. The temperatures are thermodynamic ones, counted from absolute zero, which is why [the kelvin and the constant that now defines it](/en/physics/thermodynamics/the-kelvin-and-the-boltzmann-constant) matter to the arithmetic — the same two reservoirs quoted in Celsius give a different and meaningless answer. The bound is a ratio rather than a difference, so equal increments of T_h are worth progressively less as T_h rises. And it applies to a cycle: a device that ends each period of operation in the state it began, which excludes a one-shot process that consumes a stock of something.

The consequences are blunt. Two reservoirs at 900 K and 300 K give a ceiling of 66.7%; at 450 K and 300 K, the same expression gives 33.3%. Halving the ceiling took no change of fuel, fluid or machine — only a change in where the heat came in.

## Why the working substance drops out

The reason nothing else appears in the expression is that the argument for it never mentions anything else. Suppose an engine existed that exceeded the bound between a given pair of reservoirs. Run a reversible engine backwards on part of its output, returning the absorbed heat to the hot reservoir. The composite device would end its cycle unchanged, having moved heat from cold to hot with no other effect anywhere — which is precisely the outcome that [the second law forbids](/en/physics/thermodynamics/laws-of-thermodynamics-explained). The contradiction is reached without ever asking what was inside the first engine.

That is the sense in which the bound is universal, and it is also the source of most misuse of it. Working fluid, cycle geometry, blade profile, control strategy and fuel decide how close a machine comes to the ceiling. Only the two temperatures decide where the ceiling is. An efficiency claim that does not state two temperatures has not yet said enough to be checked.

## Reversibility is a limit process, not an operating point

The bound is attained only by a reversible cycle, and reversibility is a demand about rates as much as about friction. Work on Carnot and Chambadal modelling states the requirement plainly: the mechanical and calorific exchanges between working fluid and surroundings "are of infinite time duration for reversible conditions." Heat crossing a finite temperature difference at a finite rate generates entropy, and the entropy generated is exactly the accounting entry that separates a real cycle from the reversible one, in the sense set out in [what entropy measures](/en/physics/thermodynamics/entropy-explained).

An engine at the Carnot bound therefore delivers no power, which makes it useless as a design target. The same literature notes that "the maximum of the power output is not obtained under the same conditions as the maximum of efficiency" — they are different optimisations with different answers. The standard reworking assumes the working substance itself runs reversibly while its contact with the reservoirs is rate-limited; that endoreversible model gives an efficiency at maximum power of 1 − √(T_c/T_h), described in the recent literature as a more practical bound than the Carnot one.

It deserves to be read as a model rather than a law. Its answer depends on the assumed heat-transfer law, and it is one idealisation among several. What it captures correctly is the direction of the trade: a designer who wants power out accepts efficiency below the ceiling, and the amount accepted is set by how fast heat has to move.

## What a power station's number actually measures

American generators report a heat rate — the fuel energy consumed per kilowatt-hour delivered. Tested 2024 figures from the Energy Information Administration put coal-fired steam units at 10,018 Btu per kilowatt-hour and natural gas combined-cycle units at 7,548. The agency's own conversion is to divide the 3,412 Btu equivalent of a kilowatt-hour by the heat rate, giving 34.1% and 45.2%.

Neither number is the Carnot efficiency of anything, and the gap between them and any ceiling you compute is easy to misattribute. The hot reservoir in the expression is not the flame. It is the temperature at which the working fluid actually receives heat — the boiler tube, or the turbine inlet — and that temperature is set by what the pressure boundary and the blade alloy survive, not by what the combustion could in principle reach. The sourced temperature limits and the loss breakdown are treated in [the ceiling and where the missing efficiency goes](/en/physics/thermodynamics/heat-engines-and-efficiency-limits); the point here is narrower. A plant efficiency is a fuel-in, electricity-out ratio drawn at the site fence. A Carnot efficiency is a statement about two reservoir temperatures. Comparing them requires knowing which temperatures the machine's working fluid sees, and published heat rates do not report that.

## Heat pumps: a coefficient above one violates nothing

A heat pump is the same statement run backwards, and it produces the number that most often reads as a paradox. The relevant ratio is not an efficiency but a coefficient of performance, defined in the field literature as the thermal energy moved into the building divided by the electric energy used to drive the compressor. That ratio is routinely three or four, and the bicentennial review is candid about why the quantity has its awkward name: it "is always over 100%," and an efficiency over 100% "would not be fundamentally (nor 'politically') proper."

Nothing is being created. The electricity pays for moving heat that already exists, and the first law is satisfied because the heat delivered indoors is the sum of the heat taken from outdoors and the work put in. The relevant bound is the Carnot expression inverted: for a reversible pump the coefficient cannot exceed T_h/(T_h − T_c). Holding a room at 293 K against outdoor air at 273 K gives a reversible ceiling near 14.7.

Measured performance sits far below that. A meta-analysis reported in a recent study of air-to-air units found an average coefficient of performance of about 3 even at 0 °C; scenarios spanning mild to cold climates used rated values from 2.5 to 4.5, and in the median case the actual coefficient fell below 2.5 on the coldest winter days. Against a reversible ceiling near 14.7, a measured 3 is roughly a fifth of what the second law permits. The U.S. Department of Energy's consumer guidance reports that modern air-source units can cut electricity use by 50% against furnaces and baseboard heaters, with ground-coupled systems cutting energy use by 30% to 60%.

Two readings follow. The headline coefficient is not evidence of anything exotic, and the distance from the reversible bound means cold-climate heat pump performance is an engineering problem with a long way to run, not a physics wall.

## Photovoltaics are bounded, but not by this bound

Sunlight invites the naive substitution: a source near 6,000 K against an ambient near 300 K gives 1 − 300/6,000, or 95%. The careful thermodynamic treatments land below that. Work on harvesting from thermal radiation computes, for a source at 6,000 K and an ambient at 300 K, a Landsberg limit of 93.3% for conversion with no irreversible entropy generation, and 85.4% for a converter using an intermediate blackbody absorber held at its optimal temperature of 2,544 K.

Real cells are nowhere near either, and the reason is that a photovoltaic cell is not a two-reservoir heat engine. Its limit comes from detailed balance between absorbed and re-emitted photons in a single-bandgap absorber, and that argument gives a much lower number: the Shockley-Queisser limit is about 34% for a single junction, rising to about 45% for a tandem, with roughly 1.74 eV identified as the ideal top-cell bandgap over silicon. The mechanisms behind that gap — sub-bandgap transmission, thermalisation and unavoidable radiative recombination — are set out in [the thermodynamic limits of photovoltaics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

The general lesson survives the specific case. Every conversion process has a bound; the bound follows from the mechanism, and the Carnot expression is the bound for the particular mechanism of a cyclic engine between two reservoirs. Quoting it for a device that is not one produces a ceiling far too generous to be useful.

## Reading an efficiency claim

Four questions settle most disputes. Which two temperatures, and are they the ones the working fluid actually sees? Where is the boundary drawn, and does the number include the fuel supply chain or stop at the fence? Is it a first-law ratio of energies, which treats a joule of warm water as equal to a joule of electricity, or a second-law comparison against the reversible bound for those same conditions? And is it rated or measured — a design point, or a fleet operating under load, weather and part-load cycling?

The Carnot expression answers none of those questions. It sets the ceiling, and it is exact. Everything about how close a machine comes to it lies outside the formula.

## Sources

1. **Entropy** — [2024 "Key Reflections" on Sadi Carnot's 1824 "Réflexions" and 200 Year Legacy](https://pmc.ncbi.nlm.nih.gov/articles/PMC12111712/). Attribution of the 1 − T_L/T_H formula to Kelvin and Clausius in the 1850s, Carnot's statement that motive power is independent of the working agent, the sub-5% efficiency of early steam engines, and why the heat-pump ratio is named a coefficient of performance.
2. **Entropy** — [Progress in Carnot and Chambadal Modeling of Thermomechanical Engine by Considering Entropy Production and Heat Transfer Entropy](https://pmc.ncbi.nlm.nih.gov/articles/PMC7514577/). Reversible exchanges as processes of infinite time duration, and the non-coincidence of maximum power with maximum efficiency.
3. **Entropy** — [Revisiting the endoreversible Carnot engine: extending the Yvon engine](https://pmc.ncbi.nlm.nih.gov/articles/PMC11854467/). The endoreversible efficiency at maximum power and its description as a more practical bound than the Carnot efficiency.
4. **U.S. Energy Information Administration** — [Average tested heat rates by prime mover and energy source](https://www.eia.gov/electricity/annual/html/epa_08_02.html). Tested 2024 heat rates for coal steam and natural gas combined-cycle units.
5. **U.S. Energy Information Administration** — [How much coal, natural gas, or petroleum is used to generate a kilowatthour of electricity?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Definition of heat rate and the method of converting it to a percentage using the 3,412 Btu equivalent of a kilowatt-hour.
6. **Scientific Reports** — [Energy and environmental impacts of air-to-air heat pumps in a mid-latitude city](https://pmc.ncbi.nlm.nih.gov/articles/PMC11213923/). Definition of the coefficient of performance, the meta-analysis average near 3 at 0 °C, the 2.5 to 4.5 rated range, and sub-2.5 performance on the coldest days.
7. **U.S. Department of Energy** — [Pump Up Your Savings with Heat Pumps](https://www.energy.gov/articles/pump-your-savings-heat-pumps). Electricity reduction of 50% for air-source units against furnaces and baseboard heaters, and 30% to 60% energy reduction for geothermal units.
8. **Proceedings of the National Academy of Sciences** — [Thermodynamic limits of energy harvesting from outgoing thermal radiation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5910829/). The Landsberg limit of 93.3% and the 85.4% blackbody-converter limit for a 6,000 K source and 300 K ambient, with the 2,544 K optimal intermediate temperature.
9. **Journal of Physical Chemistry Letters** — [Modeling the Performance Limitations and Prospects of Perovskite/Si Tandem Solar Cells under Realistic Operating Conditions](https://pmc.ncbi.nlm.nih.gov/articles/PMC5594440/). The detailed-balance Shockley-Queisser limit of 34% for a single junction and 45% for a tandem, and the 1.74 eV ideal top-cell bandgap.
