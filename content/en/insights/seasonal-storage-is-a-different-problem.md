---
title: Diurnal and seasonal storage are treated as one problem and are not
metaTitle: 'Seasonal storage is not diurnal storage'
excerpt: A store cycled every day and a store cycled twice a year are governed by different cost terms, and the technologies that won daily balancing are structurally poor candidates for multi-week duty.
argument: How often a store is cycled decides which of its costs dominates. That single parameter separates the technologies already deployed at scale from the ones a very-high-renewable grid might need, and it explains why published estimates of the storage requirement differ by an order of magnitude.
category: physics
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - energy-storage
  - long-duration-storage
  - renewable-integration
  - pumped-hydro
  - hydrogen
related:
  - energy-storage-fundamentals
  - grid-integration-of-variable-renewables
  - hydrogen-as-an-energy-carrier
  - capacity-factor-and-energy-metrics
  - energy-systems-explained
_bodyHash: 603d0ea9
---

The word "storage" is doing two jobs in most energy discussions, and the two jobs have economics that differ by roughly two orders of magnitude. Moving solar output from midday to evening is a problem the market has largely solved. Covering a fortnight of low wind in January with energy captured in August is a different problem, and the parameter that separates them is how often the store is cycled.

Any store has two capital costs that scale independently: a power cost, in dollars per kilowatt of charge and discharge capability, and an energy cost, in dollars per kilowatt-hour of stuff held. Their ratio is the duration. The U.S. Energy Information Administration defines a battery's duration as energy capacity divided by power capacity — how long it can hold rated output before it runs out. The deployed U.S. fleet has been built around short durations: about 3.0 hours on average across utility-scale systems at the end of 2020, with capacity divided between grid services, daily load shifting and hybrid duty. That architecture is described from the engineering side in the article on [how energy storage systems are put together](/en/physics/energy/energy-storage-fundamentals).

## Why cycling frequency rewrites the cost sheet

A store cycled once a day amortises its energy-capacity capital across roughly 365 discharges a year. A store cycled twice a year amortises the same capital across two. Everything else being equal, the tolerable energy-capacity cost for the seasonal case is smaller by something close to that ratio. Cycle life, which dominates lithium-ion economics in daily service, becomes almost irrelevant when a store is emptied twice a year; calendar ageing and standing losses take over instead. Round-trip efficiency stays important throughout, but it is paid for once per cycle, so a low efficiency hurts a daily store far more per year than a seasonal one.

Efficiency also deserves measurement rather than a data sheet. The EIA's analysis of reported operating data puts the average monthly round-trip efficiency of U.S. utility-scale batteries at 82 per cent and of pumped-storage plants at 79 per cent for 2019 — both below the figures usually quoted for the technologies in isolation, because the fleet number includes auxiliary loads, part-load operation and standby.

## What the modelling literature actually claims

The most cited quantitative treatment is a 2021 capacity-expansion study in *Nature Energy* that swept 1,280 combinations of long-duration storage cost and efficiency parameters across 17,920 modelled cases. Energy-capacity cost and discharge efficiency dominate; charge efficiency and power-capacity cost are secondary. For long-duration storage to cut the total cost of a carbon-free electricity system by around 10 per cent, energy-capacity cost has to fall below about $20/kWh. To displace nuclear generation entirely — the least competitive firm technology in that analysis — roughly $10/kWh is needed. To displace gas with carbon capture or hydrogen combustion turbines, the requirement is near $1/kWh together with very low power costs and high efficiencies.

Two details of that result are more interesting than the headline. First, in the cases where storage displaces the most firm generation, optimal discharge durations land between 100 and 650 hours — four to twenty-seven days, not four to twenty-seven hours. Second, adding heavy electrification of heating and transport in a northern-latitude system made full displacement of firm generation require performance combinations the authors judged infeasible for known technologies. The U.S. Department of Energy's Long Duration Storage Shot sets a target in the same territory from the policy side: a 90 per cent cost reduction from a 2020 lithium-ion baseline for systems delivering ten or more hours.

## The candidates, and what each pays at the door

| Option | Round-trip penalty | What limits it | Where it fits |
| --- | --- | --- | --- |
| Lithium-ion | ~82% measured across the U.S. utility-scale fleet in 2019 | Energy capacity costs in the hundreds of $/kWh; power and energy scale together | Hours |
| Pumped hydro | ~79% measured in 2019; ~80% typical for off-river designs | Site topography and head; reservoir pairs are civil works, not products | Hours to days |
| Hydrogen | Losses at electrolysis, storage and reconversion | Volumetric density; suitable geology for bulk containment | Days to seasons |

Hydrogen's difficulty is the one most often understated, because the per-kilogram figure flatters it and the per-litre figure does not. On the Department of Energy's numbers a cryogenic litre of hydrogen holds about 8 MJ where a litre of gasoline holds 32, and the pressures and temperatures needed to reach even that density are themselves a parasitic load. No tank farm holds a fortnight of national demand. Bulk seasonal quantities therefore go underground, and underground means geology. A 2020 assessment in the *International Journal of Hydrogen Energy* put Europe's total onshore and offshore salt-cavern hydrogen storage potential at about 84.8 PWh, of which Germany alone accounts for roughly 9.4 PWh — an endowment that is large in aggregate and distributed very unevenly across the countries that would need it. The carrier's wider role is taken up in the article on [hydrogen as an energy carrier](/en/physics/energy/hydrogen-as-an-energy-carrier).

Pumped hydro has the same shape of constraint in a different medium. It is mature, cheap per unit of stored energy, and — as a 2019 survey by an Australian National University group recorded — accounted for roughly 97 per cent of global storage power and 99 per cent of stored energy at that time, a snapshot taken before the last several years of battery deployment. It also needs two reservoirs at different elevations within a few kilometres of each other, which some regions have in abundance and others do not.

## How large is the requirement? This is where the disagreement is real

Two published positions differ by close to an order of magnitude. The first says the seasonal problem is smaller than the models make it look. The ANU survey identified about 616,000 potentially feasible off-river pumped hydro sites with a combined potential near 23 million GWh, which the authors describe as roughly 100 times more than a fully renewable global electricity system would require — their benchmark being about 20 GWh per million people for Australia. That benchmark is day-scale, and it is explicitly conditional: the same paper specifies stronger interconnection over large areas, demand management, and occasional spillage of surplus generation as part of the package. On this reading, apparent seasonal storage requirements are largely an artefact of models that restrict transmission and demand flexibility.

The strongest support for that position is quantitative, and it comes from the literature usually cited against it. Averaged across thresholds and countries, combining solar PV with onshore and offshore wind cuts maximum drought duration by 64, 52 and 47 per cent against standalone PV, onshore wind and offshore wind respectively; at a common threshold, allowing unconstrained balancing across Europe on top of that shortens the longest portfolio drought from 106 days in Germany alone to 55. Mix and interconnection, on those figures, do most of the work a seasonal store would otherwise have to do — which is why an argument about storage volume is so often really an argument about transmission.

The second says the residual tail is the design case, because the residual is what a store is for. The 2026 study in *Communications Earth & Environment* behind those balancing figures characterised European renewable droughts across 38 historic weather years and found that the most extreme event, in the winter of 1996/97, still ran 55 days in that idealised perfectly interconnected Europe — during which average renewable availability was 47 per cent of its long-run mean, so this is a deep shortfall rather than a total one. The same analysis found drought statistics depend heavily on the threshold chosen, and concluded that modelling scenarios on arbitrary single calendar years is not defensible.

These are not contradictory observations. They are different questions: how much storage does a least-cost system build, versus what does the worst multi-week sequence in four decades demand. A study optimised against one typical year and a study optimised against 1996/97 will report requirements an order of magnitude apart without either being wrong. Which of the two a modeller answered is rarely stated in an abstract, and it is the first thing worth recovering — as is the transmission assumption underneath it, taken up in [integrating variable renewables](/en/physics/energy/grid-integration-of-variable-renewables).

## What would settle it, and what to ask meanwhile

The evidence gap is not primarily about storage chemistry. It is about the joint distribution of weather, demand and transmission over decades, and about how systems behave above roughly 90 per cent renewable share, where almost no operating experience exists. Multi-decade weather records run through whole-system models, rather than single representative years, would narrow the range; so would operating data from the first large grids to reach those shares through a bad winter.

Until then, four questions make any storage figure interpretable. What duration is assumed, and at what cycling frequency? How many weather years does the study cover? How much transmission and demand flexibility is permitted? And is the quoted round-trip efficiency a measured fleet average or a nameplate value? A number without those four is not comparable to another number without them — a point that generalises well beyond storage, and one taken up in the companion piece on [which energy-transition constraints are physical](/en/insight/energy-transition-constraints-physical-and-institutional).

## Sources

1. **Nature Energy, via the NSF Public Access Repository** — [The design space for long-duration energy storage in decarbonized power systems](https://par.nsf.gov/biblio/10308792). Energy-capacity cost thresholds, the dominance of energy cost and discharge efficiency, and optimal discharge durations of 100–650 hours.
2. **U.S. Energy Information Administration** — [Utility-scale batteries and pumped storage return about 80% of the electricity they store](https://www.eia.gov/todayinenergy/detail.php?id=46756). Measured average monthly round-trip efficiencies for batteries and pumped storage.
3. **U.S. Energy Information Administration** — [Duration of utility-scale batteries depends on how they are used](https://www.eia.gov/todayinenergy/detail.php?id=51798). Definition of duration and the duration distribution of the deployed U.S. fleet.
4. **U.S. Department of Energy** — [Long Duration Storage Shot fact sheet](https://www.energy.gov/sites/default/files/2025-01/Storage%20shot%20fact%20sheet_011425_.pdf). The 90 per cent cost-reduction target for systems of ten or more hours against a 2020 lithium-ion baseline.
5. **U.S. Department of Energy** — [Hydrogen storage](https://www.energy.gov/cmei/fuels/hydrogen-storage). Gravimetric and volumetric energy density of hydrogen and the storage conditions required.
6. **International Solar Energy Society** — [A global atlas of 616,000 pumped hydro energy storage sites](https://doi.org/10.18086/swc.2019.20.02). Site counts, storage potential, round-trip efficiency of off-river designs, and the stated system assumptions behind the per-capita storage benchmark.
7. **International Journal of Hydrogen Energy** — [Technical potential of salt caverns for hydrogen storage in Europe](https://doi.org/10.1016/j.ijhydene.2019.12.161). European salt-cavern storage potential and its national distribution.
8. **Communications Earth & Environment** — [Multi-threshold time series analysis enables characterization of variable renewable energy droughts in Europe](https://www.nature.com/articles/s43247-026-03251-2). Duration and depth of the most extreme European renewable drought across 38 weather years.
