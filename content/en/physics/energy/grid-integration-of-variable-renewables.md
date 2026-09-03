---
title: 'Grid integration: what variability actually costs a power system'
excerpt: The cost of wind and solar in a power system is mostly not a cost of energy. It is the price of frequency control, curtailment, firm capacity and wires — four separate problems that get collapsed into one word.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - grid-integration
  - power-systems
  - curtailment
  - system-flexibility
  - electricity-markets
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - capacity-factor-and-energy-metrics
  - wind-energy-physics
pillar: energy-systems-explained
---

In the late spring of 2020 the power system of Great Britain ran an experiment nobody had designed. Lockdown removed a large slice of demand while wind and solar output carried on, and the system operator found itself paying for something other than electricity. Ancillary-service costs over May to July came to £302 million against £101 million in the same months of the previous year — three times the bill in a quarter when less energy was delivered. National demand fell to its lowest recorded value, 13.4 GW overnight on 28 June, while the synchronous capacity needed online to hold the system stable was put at around 8 to 9 GW.

That quarter is the integration problem in miniature. What a system pays for weather-driven generation is largely not a payment for energy; it is a payment for services that conventional plant supplied incidentally, because it happened to be spinning. Those services are separable, they have different physics, and bundling them under "intermittency" hides which one is binding. The wider conversion chain they sit inside is set out in the overview of [how an energy system is put together](/en/physics/energy/energy-systems-explained).

## Variability and uncertainty are not the same problem

Variability is the fact that output changes. Uncertainty is the fact that you do not know in advance exactly how. They are covered by different resources and they cost different amounts.

A resource that swings hard but predictably is comparatively cheap to accommodate: the schedule is built around it a day ahead, and the flexible plant that fills the gap is committed at leisure. A resource that is nearly constant and occasionally surprises the operator is expensive, because surprise must be covered by reserve held in real time, and reserve is capacity paid to be available rather than to produce. This is why forecast improvement is one of the cheapest integration measures available: it does nothing about variability, but it converts uncertainty into variability, and variability is the cheaper of the two.

## Frequency is a balance sheet settled every second

Grid frequency is the visible sign of instantaneous balance between generation and load. In a fleet of large synchronous machines the rotating masses are electromechanically locked to that frequency, so a sudden mismatch first draws on their kinetic energy. That stored rotational energy — system inertia — sets the rate of change of frequency after a disturbance, which in turn sets how long control systems have before protection equipment starts disconnecting things.

Inverter-connected generation does not supply this by default. A grid-following inverter measures the voltage waveform and injects current in step with it; it needs a waveform to follow. A grid-forming inverter imposes a waveform of its own and behaves, from the network's point of view, more like a source than a follower. Simulation work published in *Scientific Reports* illustrates the difference on a nine-bus test network: under a step load increase of about a third, an all-synchronous case dipped to a frequency nadir of 59.42 Hz and took roughly 80 seconds to settle, a mixed case reached 59.79 Hz and settled in under 8 seconds, and an all-grid-forming case held 59.85 Hz. Those are modelled results on a small test system rather than measurements from a real network, but the direction matters: the capability is a question of control design, not of spinning steel.

Voltage is a separate problem with separate physics — local rather than system-wide, and managed through reactive power. It is why distribution networks with dense rooftop generation hit constraints long before the bulk system does.

## Curtailment is a price signal that got a bad name

Curtailment — deliberately reducing available output — is usually reported as waste. It is better read as a system declining to pay for energy it cannot use, and its causes are diagnosable. A survey of global solar curtailment published in *Solar Energy* identified three: transmission that cannot move remote output to load, a mismatch between when output peaks and when demand does, and oversupply when variable generation plus inflexible must-run plant exceeds demand.

| System (2018) | Share of potential solar output curtailed | What drove it |
| --- | --- | --- |
| Germany | 0.3% | Local network constraints |
| California | 1.5% | Midday oversupply against inflexible plant |
| Hawaii | 2.7% statewide | Small island systems; 14% on Maui |
| Arizona | 2.9% | Localised oversupply |
| China (national) | 3.0% | Transmission limits; 16% in Xinjiang, 10% in Gansu |
| Chile | about 6% | Remote generation, limited transmission |
| Texas | 8.4% | Transmission congestion |

Two orders of magnitude separate the top and bottom of that column, and none of the spread is explained by how much sun each place receives. Curtailment is a network and market outcome, and the same study found Californian curtailment doubling between 2018 and 2019.

Negative prices are the market's version of the signal. Where a generator earns a payment per megawatt-hour regardless of the market price — through a subsidy, a tax credit or a contract — it stays rational to keep generating below zero, and the price falls until something with worse economics stops. A negative price is not evidence of a broken market; it is evidence that the cheapest response to oversupply has not been built. Which response is cheapest depends on how long the surplus lasts, the argument developed in the companion page on [what storage duration actually buys](/en/physics/energy/energy-storage-fundamentals). Where surpluses are seasonal, converting them into [a storable chemical carrier](/en/physics/energy/hydrogen-as-an-energy-carrier) becomes a candidate, at a steep conversion penalty.

## Capacity credit is not capacity factor

These two ratios answer unrelated questions and are routinely swapped. Capacity factor is about energy: annual output divided by what continuous operation at rated power would have produced. Capacity credit is about reliability: how much conventional capacity a resource displaces without degrading the system's ability to meet load in the tightest hours. A fleet can have a respectable capacity factor and a small capacity credit, and the gap widens with penetration, because clustered output is correlated — when one machine is becalmed so are its neighbours, which is the failure mode adequacy planning exists to prevent. The wind-speed dependence behind that correlation is set out in the physics of [how much power a turbine can take from moving air](/en/physics/energy/wind-energy-physics).

A study of New England published in *Heliyon* shows the shape of the problem. Wind generation sized at one times annual demand met about 73 per cent of hourly demand with no storage, and solar about 69 per cent; twelve hours of storage lifted both to roughly 86 to 87 per cent. Reaching the 99.97 per cent reliability level used in North American planning took about two and a half times annual demand in generation alongside twelve hours of storage for a wind-dominated mix, and more for a solar-dominated one. The final tranche is a different problem from the first: it is set by seasonal cycles and multi-day weather events, and covering it needs weeks of stored energy rather than hours.

## Geography does the cheapest smoothing, and wires are the constraint

Aggregating variable output over a wide area reduces its variance, because weather systems are spatially correlated over a limited range and sites far enough apart do not rise and fall together. That makes transmission the least exotic form of flexibility available: it substitutes for storage, reserve and firm capacity at once, without a round-trip loss. It also has the longest lead time, which is why the binding constraint in many systems is now a queue rather than a technology. The International Energy Agency's *Electricity 2026* assessment estimates that 450 to 700 GW of stalled projects could be released by grid-enhancing technologies on existing lines, and a further 750 to 900 GW by more flexible, non-firm connection agreements — capacity unlocked by control and contract changes rather than by new conductors.

The agency's stocktake of 50 power systems, covering nearly 90 per cent of global solar and wind generation, sorts them into six phases by how far variable output has changed operations. Denmark, Ireland, South Australia and Spain sit at phase four or above, integrating between 35 and 75 per cent variable renewables in annual generation — evidence that the phases describe engineering practice rather than ceilings. The same report estimates that delayed integration measures could put up to 15 per cent of solar and wind generation at risk by 2030, as much as 2,000 TWh of output that was physically available and had nowhere to go.

## "Baseload" describes a cost structure, not a system requirement

The most persistent misconception in this area is that a power system requires a category of plant called baseload. What a system requires is enough energy in every hour and enough controllability to hold frequency and voltage while delivering it. Baseload describes two other things: the portion of the load curve present at all hours, and a class of plant whose cheapest operating point is flat because capital costs dominate and fuel costs are low.

The operating record makes the distinction visible. Capacity factors published by the US Energy Information Administration show the utility-scale coal fleet at 52.8 per cent in 2016, 40.5 per cent in 2020 and 48.7 per cent in 2025. Nothing about those boilers changed; relative fuel prices and dispatch order did. Over the same years the nuclear fleet held between roughly 91 and 93 per cent, reflecting a fuel cost so low that running flat out is always the economic choice. One fleet's number tracks the market and the other's tracks maintenance scheduling.

## Where the integration-cost numbers are weakest

**Integration costs are not cleanly attributable.** Assigning a cost to a resource requires a counterfactual system without it, and the choice of counterfactual moves the answer substantially — published estimates vary more between methodologies than between systems.

**Curtailment percentages have a modelled denominator.** Curtailed energy is compared against potential output, which was never produced and has to be estimated from irradiance or wind data plus an assumed availability. Two operators reporting different curtailment may be disagreeing about the denominator.

**Adequacy studies rest on a short weather record.** The events that set reliability requirements are rare, correlated and multi-day, and the historical record holds few of them. A handful of weather years cannot resolve the tail the study is trying to size, which is why the marginal cost of the last per cent of reliability is the least certain number in the exercise — and why the limits that bind are often institutional rather than physical, a distinction examined in the analysis of [constraints that are not about the technology](/en/insight/energy-transition-constraints-physical-and-institutional).

## Sources

1. **International Energy Agency** — [Integrating Solar and Wind: executive summary](https://www.iea.org/reports/integrating-solar-and-wind/executive-summary). Six-phase integration framework, the 35–75 per cent range in frontrunner systems, and the estimate that up to 15 per cent of solar and wind generation is at risk by 2030.
2. **International Energy Agency** — [Electricity 2026: executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Capacity that could be released by grid-enhancing technologies and by non-firm connection agreements.
3. **Applied Energy** — [Ancillary services in Great Britain during the COVID-19 lockdown](https://pmc.ncbi.nlm.nih.gov/articles/PMC9759740/). Ancillary-service costs, minimum national demand, and the synchronous capacity estimated as necessary for stability.
4. **Solar Energy** — [Too much of a good thing? Global trends in the curtailment of solar PV](https://pmc.ncbi.nlm.nih.gov/articles/PMC7470769/). Curtailment shares by system and the causes identified behind them.
5. **Scientific Reports** — [Hybrid compatible grid forming inverters for low inertia and mixed generation grids](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357951/). Simulated frequency nadir and settling times for synchronous, hybrid and inverter-dominated cases.
6. **Heliyon** — [The impact of energy storage on the reliability of wind and solar power in New England](https://pmc.ncbi.nlm.nih.gov/articles/PMC10955263/). Reliability reached at given generation and storage sizes, and the seasonal character of the residual.
7. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Annual capacity factors for the utility-scale coal fleet.
8. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Annual capacity factors for the utility-scale nuclear fleet.
