---
title: 'Energy systems: conversion, carriers, and the constraints that decide what scales'
excerpt: Primary energy, energy carriers and final consumption are three separate accounts, and mixing them produces most bad energy arguments. This page follows the conversion chain from resource to end use and names where the losses and the limits actually sit.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - energy-systems
  - primary-energy
  - energy-conversion
  - electrification
  - energy-statistics
related:
  - solar-photovoltaics-explained
  - wind-energy-physics
  - energy-storage-fundamentals
  - grid-integration-of-variable-renewables
  - capacity-factor-and-energy-metrics
_bodyHash: 85d7ff5e
---

An energy system keeps three ledgers, and almost every confused argument about energy comes from reading a number out of one and using it in another. The first ledger counts the resource as it is extracted or captured — coal in the seam, uranium in the ore, photons on a panel. The second counts the carriers that move usable energy around: electricity, refined liquid fuels, pipeline gas, heat in a district main. The third counts what is delivered to the point where somebody wants work done — a furnace, a motor, a screen. Each conversion between ledgers has a physical cost, and the size of that cost is the single most informative thing about a technology.

## Three ledgers, and why the totals never match

**Primary energy** is the content of the resource before conversion. **Final consumption** is what reaches the end user. Between them sits a transformation sector that loses a large and unevenly distributed fraction of the input, so the two totals differ by an amount that depends heavily on the mix of technologies in between.

The scale of the gap is easiest to see in how little of the world's delivered energy currently arrives as electrons. The International Energy Agency's *World Energy Outlook 2025* reports that electricity accounts for only 21 per cent of total final consumption globally, even though spending on electricity supply and end-use electrification already makes up half of global energy investment. Most delivered energy still arrives as a fuel that is burned close to where the work is done.

The resource side looks different again. The U.S. Energy Information Administration's national accounts for 2024 put petroleum at 38 per cent of primary energy consumption, natural gas at 36 per cent, nuclear and renewables at 9 per cent each, and coal at 8 per cent. Those shares are shares of energy *entering* the system, not of the service leaving it, and the difference matters because the fuels do not convert at the same rate.

## Where the joules disappear

Combustion-based electricity generation is where the largest single loss in most national systems occurs, and it is measurable rather than theoretical. The EIA publishes an average operating heat rate — the thermal energy consumed per unit of electricity produced — for each generating fuel. For 2024 the figures are 10,777 Btu per kilowatt-hour for coal, 7,754 for natural gas, 11,200 for petroleum and 10,443 for nuclear.

Those numbers convert straightforwardly into efficiencies, because a kilowatt-hour is about 3,412 Btu. The U.S. coal fleet therefore delivered about 32 per cent of the chemical energy it consumed as electricity in 2024; the gas fleet, dominated by combined-cycle plant, about 44 per cent. The nuclear figure of roughly 33 per cent is a statement about steam-cycle thermodynamics rather than about the reactor, and it carries an accounting convention with it: the "input" to a reactor is a heat quantity assigned by the statistical agency, not a purchased fuel volume. How those conventions distort comparisons between thermal and non-thermal generation is the subject of the companion page on [reading energy statistics honestly](/en/physics/energy/capacity-factor-and-energy-metrics).

Non-thermal converters do not have a heat rate at all. A photovoltaic module converts photon energy directly to electrical work without an intermediate hot reservoir, which is why its ceiling comes from detailed balance rather than from Carnot, as set out in the article on [the thermodynamic ceiling on solar conversion](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics). A wind rotor extracts kinetic energy from a moving fluid and is bounded by a mass-and-momentum argument instead. Neither device is exempt from the second law; both simply enter it at a different point.

## A watt is not a joule

The most consequential unit error in public energy argument is treating capacity and generation as interchangeable. Energy is a quantity, measured in joules or kilowatt-hours; power is a rate, measured in watts, and the watt is defined as one joule per second. The distinction is fixed in the SI base and derived units maintained by the Bureau International des Poids et Mesures and published nationally by NIST, and it is not a matter of convention.

The practical consequence is that a gigawatt of nameplate capacity and a gigawatt of another kind of nameplate capacity deliver different quantities of energy over a year, and no amount of capacity comparison recovers the difference. The IEA's *Electricity 2026* assessment illustrates the same problem from the system side: more than 2,500 GW of projects worldwide are stalled awaiting connection, a figure in units of power that says nothing on its own about the energy those projects would deliver, or when. The ratio between the two is what closes the gap, and it varies by technology, site and year.

## What the conversion route decides

Each family of technologies has a characteristic place where its energy goes missing, and a characteristic thing that stops it scaling. Those two properties predict more about a technology's trajectory than its cost does.

| Route | Where the dominant loss sits | What limits deployment |
| --- | --- | --- |
| Photovoltaic conversion | Light the absorber cannot use and excess photon energy shed as heat | Land, materials, and the distance between a rating and a yield |
| Wind extraction | The flow that must be left moving, plus wake interaction between machines | Site wind resource, hub height and array spacing |
| Thermal generation | The rejected heat demanded by the steam or gas cycle | Fuel supply, cooling water and cycle temperature limits |
| Electrochemical storage | The share of stored electricity never retrieved, plus the capacity a cell quietly loses with age | Cost per unit of reservoir, which is what makes long durations expensive |
| Chemical carriers | Cumulative conversion penalties at each production and reconversion step | Volumetric density, containment and end-use suitability |

The supporting pages in this cluster take those rows one at a time. The article on [what a photovoltaic rating is measured against](/en/physics/energy/solar-photovoltaics-explained) follows a photon from absorption through to a nameplate and explains why that nameplate is a laboratory statement. The page on [the physics of wind energy capture](/en/physics/energy/wind-energy-physics) derives the extraction ceiling and shows why the cube law in wind speed drove machines to be tall and wide. The treatment of [electrochemical and mechanical storage](/en/physics/energy/energy-storage-fundamentals) argues that duration, not power, is the parameter that decides an application. The page on [hydrogen as a carrier rather than a source](/en/physics/energy/hydrogen-as-an-energy-carrier) traces the efficiency penalty at each step of the chain. And the article on [integrating variable output into a grid](/en/physics/energy/grid-integration-of-variable-renewables) takes up what a power system has to do differently when generation is weather-driven.

## The constraints that bind before physics does

Physical limits are real, but they are rarely the ones that decide a deployment schedule. The IEA's *Renewables 2025* forecast expects variable renewables to supply almost 30 per cent of global electricity by 2030, roughly double the current share, with solar photovoltaics alone accounting for nearly 80 per cent of the capacity increase. In the same forecast, curtailment and negative pricing are rising across China, Germany, Brazil, Chile and the United Kingdom, and the offshore wind outlook has been revised down by more than a quarter — neither of which follows from any property of a turbine or a cell.

Network capacity shows the same pattern. Investment in generation has risen by almost 70 per cent since 2015 to around USD 1 trillion a year, while annual grid spending has grown at less than half that pace to about USD 400 billion; the IEA judges that grid investment needs to rise by roughly half again by 2030. A system in which the converters are cheap and the wires are the queue behaves differently from one where the converters are the binding term. Distinguishing the limits that have a derivation from the ones that have a history is the subject of a separate analysis of [which energy-transition constraints are physical](/en/insight/energy-transition-constraints-physical-and-institutional).

## What this accounting cannot tell you

Three weaknesses in the framework are worth carrying whenever an energy figure is quoted.

The first is that primary-energy totals are convention-dependent. A statistical agency must decide what counts as the "input" to a hydro, wind or solar plant that consumes no fuel, and different agencies answer differently. Comparisons of primary-energy shares across sources therefore embed a methodological choice that is invisible in the headline number.

The second is that the transformation losses described above are averages over heterogeneous fleets. A single combined-cycle unit and a single old subcritical boiler sit far apart from the fleet mean, and a national average heat rate moves when the merit order shifts, not only when technology improves.

The third is that the forward-looking numbers are scenario outputs, not forecasts. The IEA's own *World Energy Outlook 2025* spans a range in which global energy demand grows by about 90 exajoules to 2035 under one set of policy assumptions and by roughly 50 exajoules under another — a difference of nearly a factor of two in the growth term, produced entirely by assumptions rather than by measurement. Energy-related carbon dioxide emissions reached a record 38 gigatonnes in 2024; where they go next is a policy variable, and any single projected path quoted without its scenario label has been stripped of the thing that made it meaningful.

## Sources

1. **International Energy Agency** — [World Energy Outlook 2025, executive summary](https://www.iea.org/reports/world-energy-outlook-2025/executive-summary). Electricity's 21 per cent share of total final consumption, investment figures, scenario demand growth, and 2024 energy-related CO₂ emissions.
2. **International Energy Agency** — [Electricity 2026, executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Demand growth rates, stalled interconnection capacity, and required grid investment.
3. **International Energy Agency** — [Renewables 2025, executive summary](https://www.iea.org/reports/renewables-2025/executive-summary). Variable renewable share by 2030, solar and wind capacity trajectories, and rising curtailment.
4. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Heat rates by fuel for 2014–2024, used here to derive fleet conversion efficiencies.
5. **U.S. Energy Information Administration** — [U.S. energy facts explained](https://www.eia.gov/energyexplained/us-energy-facts/). Shares of primary energy consumption by source and the treatment of electrical system energy losses.
6. **NIST Office of Weights and Measures** — [SI units](https://www.nist.gov/pml/owm/metric-si/si-units). Definitions of the joule and the watt as separate quantities.
7. **Bureau International des Poids et Mesures** — [Measurement units](https://www.bipm.org/en/measurement-units). The SI definitions underlying energy and power units.
8. **National Laboratory of the Rockies** — [Industrial Energy Storage Review](https://www.osti.gov/biblio/2473658). Classification of storage technologies by the form of the stored energy, and projected industrial storage growth.
