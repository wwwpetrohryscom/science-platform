---
title: 'Heat engines: the Carnot ceiling and where the missing efficiency goes'
excerpt: A coal steam plant converts about a third of its fuel energy to electricity against a reversible ceiling near two thirds. The gap is mostly deliberate, and the reasons are temperature limits, finite-rate operation and where the accounting boundary is drawn.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - heat-engines
  - carnot-efficiency
  - power-generation
  - exergy
  - gas-turbines
related:
  - laws-of-thermodynamics-explained
  - entropy-explained
  - heat-transfer-conduction-convection-radiation
  - thermodynamic-limits-of-photovoltaics
pillar: laws-of-thermodynamics-explained
---

American power plants report their performance as a heat rate — the fuel energy consumed per unit of electricity delivered — and the Energy Information Administration's 2024 figures make the state of the art easy to read. Tested coal-fired steam units averaged 10,018 Btu per kilowatt-hour, natural gas combined-cycle units 7,548, and simple-cycle gas turbines 10,999. Since a kilowatt-hour is 3,412 Btu, those convert to 34.1%, 45.2% and 31.0%.

A steam plant raising 600 °C steam and rejecting heat to cooling water near 30 °C has a reversible ceiling of 65.3%. The measured machine delivers a little over half of that. Nothing in the difference is a mystery, and very little of it is bad engineering: most of it is the price of running at a finite rate, with materials that melt, inside a boundary someone chose.

## Why the ceiling depends on two temperatures and nothing else

Carnot's result is that the efficiency of any cyclic engine operating between a hot reservoir at absolute temperature T_h and a cold one at T_c cannot exceed 1 − T_c/T_h. The argument is a proof by consequence rather than a calculation about steam: if some engine exceeded that bound, its output could drive a reversed Carnot engine to return all the absorbed heat to the hot reservoir, with the net result that energy moved from cold to hot with no other change — which is exactly what the second law forbids, in the form set out in [the four laws and what each one rules out](/en/physics/thermodynamics/laws-of-thermodynamics-explained).

The corollary is the part that gets forgotten. Working fluid, cycle geometry, blade design and control strategy do not appear in the expression. They determine how close a machine gets to the ceiling; only the two temperatures determine where the ceiling is. This is why the fuel is nearly irrelevant to the ranking: EIA's operating figures for 2024 put the coal fleet at 10,777 Btu per kilowatt-hour and the nuclear fleet at 10,443, within a few per cent of each other despite having nothing in common but the fact that both raise steam at a temperature far below a combustion flame.

## The cycles, and where each one loses

| Cycle | Heat in at | Practical temperature limit | Measured efficiency | Where the energy goes |
| --- | --- | --- | --- | --- |
| Rankine (steam) | Boiler tubes | Around 600 °C live steam in current plants | 34.1% | Condenser rejection; boiler temperature difference |
| Brayton, simple cycle | Combustor | Gas inlet limited by blade cooling | 31.0% | Exhaust leaves hot and unused |
| Combined cycle | Combustor, then a steam bottoming cycle | Same inlet limit, lower rejection | 45.2% | Condenser rejection; stack losses |
| Reciprocating, gas-fired | In-cylinder combustion | Compression ratio and knock | 38.2% | Coolant and exhaust |

The combined cycle is the clearest illustration of the principle. It does not improve on the Brayton cycle's conversion; it catches the exhaust the Brayton cycle throws away, still hot enough to raise steam, and runs a Rankine cycle on it. Two cycles in series see a wider temperature span than either alone, and the reported efficiency rises from 31.0% to 45.2% without any new combustion physics.

## The ceiling is raised by metallurgy, not by cycle diagrams

If only temperatures matter, then progress means raising the top one, and that is a materials programme rather than a thermodynamics programme.

On the steam side, U.S. Department of Energy work on advanced ultrasupercritical plant describes current ultrasupercritical practice at 3,600 psi and 600 °C, with the advanced target at 4,250–5,000 psi and 730–760 °C. The reports are about thick-walled headers and nickel-based alloys because creep in thick sections, not the thermodynamics, is what stops the temperature from going up.

On the gas side the numbers are more extreme. A DOE Office of Fossil Energy and Carbon Management project targets turbine inlet temperatures of 1,700 °C or higher — explicitly beyond the melting point of the substrate alloy — using transpiration and lattice cooling produced by additive manufacturing, with a combined-cycle efficiency target of 65%. A blade survives gas hotter than its own melting point only because a steep temperature gradient is maintained across a few millimetres of metal, which makes the achievable cycle efficiency a question about [conduction, convection and radiation](/en/physics/thermodynamics/heat-transfer-conduction-convection-radiation) as much as about the cycle. The cooling air comes from the compressor and does no useful work, so each increment of firing temperature returns less than the Carnot expression alone would suggest.

## Maximum efficiency and maximum power are different targets

A reversible engine has zero power output, because reversibility requires infinitesimal driving temperature differences and therefore infinitely slow heat exchange. No one builds for that. The relevant optimisation is power, and the classical treatment of it — an internally reversible engine coupled to its reservoirs through finite-rate heat exchange — gives an efficiency at maximum power of 1 − √(T_c/T_h), the Curzon–Ahlborn expression, [described in the recent literature](https://pmc.ncbi.nlm.nih.gov/articles/PMC11854467/) as a more practical bound than the Carnot one.

For the same 600 °C and 30 °C reservoirs, that expression gives 41.1% against Carnot's 65.3%, and the measured 34.1% sits below it. The agreement is worth noting and worth not over-reading: the endoreversible model is one idealisation among several, its assumptions about the heat-exchange law matter, and it is not a law in the sense the Carnot bound is. What it does capture correctly is the direction of the trade — that a designer buying power gives up efficiency, and that the entropy produced in every finite-rate transfer, in the sense developed in [what entropy measures](/en/physics/thermodynamics/entropy-explained), is where the difference goes.

## Efficiency of what, measured over what

The single largest source of confusion in published efficiency figures is the boundary.

Tested and operating heat rates differ for the same fleet: EIA's tested combined-cycle figure of 7,548 Btu per kilowatt-hour becomes 7,754 across the gas fleet in operation, because real units start, stop, run at part load and work on hot days. Any plant-level number that comes from a design point should be read as the best case rather than the expectation.

Counting the heat changes the answer more dramatically still. The Environmental Protection Agency puts combined heat and power systems above 80% total efficiency against about 50% for the conventional arrangement of separate grid electricity and an on-site boiler, and notes that nearly two-thirds of the energy in conventional generation is discharged as heat during generation, transmission and distribution. That comparison is a first-law statement: it adds a joule of 90 °C hot water to a joule of electricity as though they were the same thing. On a second-law accounting — which weights each output by the work that could in principle be recovered from it — they are not, and the same reasoning explains why burning gas at flame temperature to hold a room at 20 °C destroys most of the fuel's available work no matter how little goes up the flue. Which convention a headline number follows is rarely stated, and it is the first thing to check when comparing technologies, as the wider treatment of [capacity factors and energy metrics](/en/physics/energy/capacity-factor-and-energy-metrics) sets out.

## What these numbers do not cover

Heat rates stop at the plant fence. They exclude the energy spent extracting, processing and transporting the fuel, and they say nothing about the water withdrawn for cooling, which for a steam plant is the largest physical flow on the site after the fuel itself. They are also fuel-energy ratios, so they carry no information about the emissions released per unit of that fuel — two plants at identical efficiency can differ substantially in carbon intensity depending on what they burn.

The forward-looking figures deserve the same caution. A 65% combined-cycle target and a 760 °C steam target are programme objectives with materials qualification still ahead of them, not fleet performance; the reported creep and oxidation behaviour of the candidate alloys is what will decide whether they arrive. Meanwhile the reason nuclear and coal report similar heat rates — a steam temperature set by what the pressure boundary tolerates — is the same reason to be sceptical of any efficiency claim that does not state its two temperatures, whether for a [fission reactor](/en/physics/matter-radiation/nuclear-fission-and-reactors) or a gas turbine.

## Sources

1. **U.S. Energy Information Administration** — [Average tested heat rates by prime mover and energy source](https://www.eia.gov/electricity/annual/html/epa_08_02.html). Tested heat rates for steam, gas turbine, combined-cycle and internal-combustion units through 2024.
2. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Fleet-level operating heat rates for coal, gas, petroleum and nuclear.
3. **U.S. Energy Information Administration** — [How much coal, natural gas, or petroleum is used to generate a kilowatthour of electricity?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Definition of heat rate and the 3,412 Btu per kilowatt-hour conversion.
4. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Advanced ultrasupercritical materials thick-walled cycling header development](https://www.osti.gov/biblio/1431234). Current and target steam pressures and temperatures for ultrasupercritical plant.
5. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems with ODS alloys](https://www.osti.gov/biblio/1923377). Turbine inlet temperature target above substrate melting and the associated combined-cycle efficiency goal.
6. **U.S. Environmental Protection Agency** — [What is CHP?](https://www.epa.gov/chp/what-chp). Total-efficiency comparison between combined heat and power and separate heat and power.
7. **Entropy** — [Revisiting the endoreversible Carnot engine: extending the Yvon engine](https://pmc.ncbi.nlm.nih.gov/articles/PMC11854467/). Statement of the efficiency at maximum power for an endoreversible engine.
