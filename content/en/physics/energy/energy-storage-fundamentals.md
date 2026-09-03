---
title: 'Energy storage: the quantities that matter are duration and energy, not power'
excerpt: A store advertised in megawatts has told you how fast it can move energy and nothing about how much it holds. This page separates power, energy and duration, then works through round-trip losses and the chemistry of capacity fade.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - energy-storage
  - batteries
  - pumped-hydro
  - round-trip-efficiency
related:
  - energy-systems-explained
  - grid-integration-of-variable-renewables
  - hydrogen-as-an-energy-carrier
  - capacity-factor-and-energy-metrics
pillar: energy-systems-explained
_bodyHash: 69b301eb
---

At the end of November 2020 the United States had 21.9 GW of pumped-storage hydropower and 1.4 GW of utility-scale batteries. By the end of June 2026 the EIA's capacity accounts recorded 23,035.1 MW of pumped storage and 51,665.7 MW of batteries, with a further 22,788.4 MW of battery capacity planned over the following twelve months. In under six years the electrochemical fleet went from a rounding error against the hydraulic one to more than twice its size. Those two figures come from different EIA releases and different capacity conventions, so the direction is the reliable part, not the decimal places.

That comparison is also, on its own, close to meaningless — and the reason it is meaningless is the most useful thing to understand about storage. Megawatts describe how fast a store can move energy. They say nothing about how much of it there is.

## A store has three numbers; headlines quote one

Any store is characterised by a power rating in megawatts, an energy capacity in megawatt-hours, and the ratio between them, which is its duration in hours. The three are set by different pieces of hardware and scale with different costs: power is a property of the converter — the turbine, the inverter, the electrode area — while energy is a property of the reservoir, whether that reservoir is an upper lake, a mass of active material or a tank of fluid.

The distinction is visible in real project data. A survey of U.S. hybrid power plants found that at the end of 2022 there were 374 operating plants above 1 MW, with nearly 41 GW of generating capacity and 5.4 GW/15.2 GWh of co-located storage. The 213 plants pairing photovoltaics with batteries carried 4.0 GW/12.5 GWh, a storage-to-generator capacity ratio of 49 per cent and a storage duration of 3.1 hours. Read only the gigawatts and those plants look half as large as their generators; read the hours and it is clear they were built to shift an afternoon of output into an evening, and nothing longer. How the paired generation itself is rated, and against what conditions, is set out in the article on [photovoltaic modules and their nameplate figures](/en/physics/energy/solar-photovoltaics-explained).

Duration is what makes a store fit an application. Frequency response needs power and almost no energy. Evening peak-shifting needs a few hours. Riding out a still, overcast week needs an amount of energy that the same technology cannot supply at any sensible cost, which is why that case is treated separately in the analysis of [why daily and seasonal storage are different problems](/en/insight/seasonal-storage-is-a-different-problem).

## Round-trip efficiency is a measurement, not a specification

Storage is a conversion chain like any other in the [wider energy-system accounting](/en/physics/energy/energy-systems-explained), and every step takes a cut. **[Round-trip efficiency](/en/glossary/round-trip-efficiency)** is the EIA's term for the percentage of electricity put into storage that is later retrieved; the higher it is, the less energy the storage process loses.

The measured fleet numbers are closer together than the underlying physics would suggest. Using reported operating data for 2019, the EIA calculated average monthly round-trip efficiencies of 82 per cent for utility-scale batteries and 79 per cent for pumped storage — one an electrochemical process, the other a hydraulic and rotating-machinery one, landing within three percentage points of each other. That near-equality is itself informative. Round-trip efficiency is not a property of the storage medium alone but of the whole installation — power electronics or pump-turbines, auxiliary loads, and how the plant is dispatched. A cell measured on a bench and a fleet measured at a revenue meter are not answering the same question.

One accounting consequence of that loss is worth stating plainly, because it regularly confuses readers of generation statistics: pumped-storage plants have net negative electricity generation balances. They consume more electricity pumping water uphill than they return, and they appear in national accounts accordingly. A store is not a generator; it is a device that trades quantity of energy for control over its timing, and that trade shows up in the arithmetic of [how generating assets are measured](/en/physics/energy/capacity-factor-and-energy-metrics).

## Four families, sorted by what is actually stored

The most durable way to organise storage technologies is by the form the energy takes while it waits. A review of industrial storage groups them as thermal, chemical, electrochemical and mechanical, and the grouping predicts the failure modes better than any classification by application does.

| Form | Representative technologies | What sets the practical duration | Dominant limitation |
| --- | --- | --- | --- |
| Mechanical | Pumped hydro, compressed air, flywheels | Reservoir volume and head, or cavern size | Site geology and topography; flywheels self-discharge quickly |
| Electrochemical | Lithium-ion, flow batteries, sodium-ion | Mass of active material; in flow cells, tank volume | Irreversible capacity fade and energy-capacity cost |
| Thermal | Sensible heat in salts or rock, latent heat in phase-change media | Insulation quality and the temperature difference held | Standing heat loss; low exergy if the output is heat rather than work |
| Chemical | Hydrogen, ammonia, synthetic fuels | Containment volume and the geology available for bulk storage | Cumulative conversion losses at production and reconversion |

Two features of that table are easy to miss. Mechanical and chemical stores decouple power from energy — a bigger reservoir or cavern adds hours without adding converter capacity — whereas in a conventional lithium-ion cell the two scale together, which is precisely why long durations become expensive. And thermal storage is cheap per unit of stored energy but returns heat, so its usefulness depends on whether the end use wants heat or work.

## Why electrochemical stores age

A battery does not wear out mechanically. It loses capacity through chemistry, and which chemistry is doing the losing matters, because the mechanisms respond to different things.

A reduced-order capacity fade model built from accelerated aging tests on 32 graphite/NMC cells, published in the *Journal of the Electrochemical Society*, identifies loss of lithium inventory and cathode-material loss as the dominant fade mechanisms, arising through growth of the solid-electrolyte interphase, electrode cracking, cycling-driven acceleration of that interphase growth, and distinct early-life "break-in" processes. The rates depend on temperature, charge rate, depth of discharge and state of charge — four operating variables, not one.

Crucially, some of that loss happens whether or not the cell is used. Calendar aging proceeds with time; cycle aging proceeds with throughput. Work on silicon anodes published in *Frontiers in Batteries and Electrochemistry* found chemical contributions to calendar aging dominant over mechanical ones, with capacity fade still dominated by elapsed time for rest periods of a month or more between cycling. A store that sits mostly idle is therefore not a store that is being preserved, and any lifetime figure quoted without its duty cycle is incomplete.

## The cost curve that changed the fleet

The reason the U.S. capacity balance flipped is not that electrochemistry became more efficient. It is that it became cheap. The IEA reports lithium-ion battery costs falling by about 90 per cent since 2010, from around USD 1,400 per kilowatt-hour to less than USD 140 per kilowatt-hour by 2023, with 42 GW of battery storage added globally in 2023 — more than double the previous year — taking the installed power-sector total above 85 GW. Industrial storage is projected to grow by a factor of 2.6, from just over 60 GWh to 167 GWh, by 2030.

Notice which unit each of those statements uses. Deployment is announced in gigawatts; the quantity that decides what a system can ride through is gigawatt-hours; and the cost that has fallen is quoted per kilowatt-hour, which is the energy term. A 90 per cent fall in the energy-capacity cost changes the economics of long durations far more than it changes the economics of short ones, and the fleet that has been built so far is still overwhelmingly short.

## Where this framework stops being enough

Three limitations are worth carrying.

Round-trip efficiency, duration and fade rate are all measured under conditions that a real duty cycle does not reproduce. Accelerated aging compresses time by raising stress, which can change which mechanism dominates; fleet-average efficiencies average over plants operated for different purposes.

The published numbers also age quickly. A cost figure for 2023 and a capacity figure for June 2026 describe a technology in the middle of a rapid deployment phase, and a stale figure in this field misleads more than it informs.

And the hardest case is not covered by any of it. Storing energy for weeks or seasons is not the same problem scaled up: it changes which cost term dominates and which technologies remain candidates. At least one assessment of hydrogen for that duty is discouraging on cost and practicality rather than on physics: a study of rural Alaskan microgrids found renewable expansion to a 75 per cent generation share competitive at current costs, while concluding that large-scale seasonal storage via hydrogen is currently unlikely to be cost-effective or practical for the region it considered — though it adds that hydrogen may become viable if battery costs rise. The conversion penalties behind that conclusion are traced in the article on [hydrogen as an energy carrier](/en/physics/energy/hydrogen-as-an-energy-carrier), while the system-level question of how much storage a weather-driven grid actually needs belongs to the discussion of [integrating variable renewables](/en/physics/energy/grid-integration-of-variable-renewables).

## Sources

1. **U.S. Energy Information Administration** — [Electric generating summer capacity changes](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_01). Installed pumped-storage and battery capacity as of June 2026 and the planned additions over the following twelve months.
2. **U.S. Energy Information Administration** — [Utility-scale batteries and pumped storage return about 80% of the electricity they store](https://www.eia.gov/todayinenergy/detail.php?id=46756). Definition of round-trip efficiency, the 2019 measured averages, and 2020 installed capacities.
3. **U.S. Energy Information Administration** — [Hydropower explained](https://www.eia.gov/energyexplained/hydropower/). Pumped-storage operation and its net negative generation balance.
4. **Lawrence Berkeley National Laboratory, via OSTI** — [Hybrid Power Plants: Status of Operating and Proposed Plants, 2023 Edition](https://www.osti.gov/biblio/1994526). Operating hybrid plant counts, paired storage power and energy capacity, storage-to-generator ratio and duration.
5. **National Laboratory of the Rockies, via OSTI** — [Industrial Energy Storage Review](https://www.osti.gov/biblio/2473658). Classification of storage by the form of the stored energy and the projected growth of industrial storage to 2030.
6. **International Energy Agency** — [Batteries and Secure Energy Transitions, executive summary](https://www.iea.org/reports/batteries-and-secure-energy-transitions/executive-summary). Battery cost decline since 2010, 2023 deployment, and installed power-sector capacity.
7. **Journal of the Electrochemical Society, via OSTI** — [Lithium-ion battery life model with electrode cracking and early-life break-in processes](https://www.osti.gov/biblio/1834314). Capacity fade mechanisms and their dependence on temperature, rate, depth of discharge and state of charge.
8. **Frontiers in Batteries and Electrochemistry** — [Chemical contributions to silicon anode calendar aging are dominant over mechanical contributions](https://www.frontiersin.org/journals/batteries-and-electrochemistry/articles/10.3389/fbael.2023.1308127/full). Time-dominated capacity fade during extended rest periods.
9. **U.S. Department of Energy, via OSTI** — [Learning from Arctic microgrids: cost and resiliency projections for renewable energy expansion with hydrogen and battery storage](https://www.osti.gov/biblio/2570815). Cost-effectiveness assessment of large-scale seasonal hydrogen storage.
