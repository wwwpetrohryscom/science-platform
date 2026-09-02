---
title: Diurnal and seasonal storage are treated as one problem and are not
excerpt: A store cycled every day and a store cycled twice a year are governed by different cost terms, and the technologies that won daily balancing are structurally poor candidates for multi-week duty.
argument: How often a store is cycled decides which of its costs dominates. That single parameter separates the technologies already deployed at scale from the ones a very-high-renewable grid might need, and it explains why published estimates of the storage requirement differ by an order of magnitude.
category: physics
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
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
---

The word "storage" is doing two jobs in most energy discussions, and the two jobs have economics that differ by roughly two orders of magnitude. Moving solar output from midday to evening is a problem the market has largely solved. Covering a fortnight of low wind in January with energy captured in August is a different problem, and the parameter that separates them is how often the store is cycled.

Any store has two capital costs that scale independently: a power cost, in dollars per kilowatt of charge and discharge capability, and an energy cost, in dollars per kilowatt-hour of stuff held. Their ratio is the duration. The U.S. Energy Information Administration defines a battery's duration as energy capacity divided by power capacity — how long it can hold rated output before it runs out — and the deployed U.S. fleet has sat in the low single-digit hours: about 3.0 hours on average across utility-scale systems at the end of 2020, with most capacity built for grid services, daily load shifting, or both. That architecture is described from the engineering side in the article on [how energy storage systems are put together](/en/physics/energy/energy-storage-fundamentals).

## Why cycling frequency rewrites the cost sheet

A store cycled once a day amortises its energy-capacity capital across roughly 365 discharges a year. A store cycled twice a year amortises the same capital across two. Everything else being equal, the tolerable energy-capacity cost for the seasonal case is smaller by something close to that ratio. Cycle life, which dominates lithium-ion economics in daily service, becomes almost irrelevant when a store is emptied twice a year; calendar ageing and standing losses take over instead. Round-trip efficiency stays important throughout, but it is paid for once per cycle, so a low efficiency hurts a daily store far more per year than a seasonal one.

Efficiency also deserves measurement rather than a data sheet. The EIA's analysis of reported operating data puts the average monthly round-trip efficiency of U.S. utility-scale batteries at 82 per cent and of pumped-storage plants at 79 per cent for 2019 — both below the figures usually quoted for the technologies in isolation, because the fleet number includes auxiliary loads, part-load operation and standby.

## What the modelling literature actually claims

The most cited quantitative treatment is a 2021 capacity-expansion study in *Nature Energy* that swept 1,280 combinations of long-duration storage cost and efficiency parameters across 17,920 modelled cases. Its findings are specific. Energy-capacity cost and discharge efficiency dominate; charge efficiency and power-capacity cost are secondary. For long-duration storage to cut the total cost of a carbon-free electricity system by around 10 per cent, energy-capacity cost has to fall below about $20/kWh. To displace nuclear generation entirely — the least competitive firm technology in that analysis — roughly $10/kWh is needed. To displace gas with carbon capture or hydrogen combustion turbines, the requirement is near $1/kWh together with very low power costs and high efficiencies. Lithium-ion energy capacity, the same paper notes, currently sits in the hundreds of dollars per kilowatt-hour.

Two details of that result are more interesting than the headline. First, in the cases where storage displaces the most firm generation, optimal discharge durations land between 100 and 650 hours — four to twenty-seven days, not four to twenty-seven hours. Second, adding heavy electrification of heating and transport in a northern-latitude system made full displacement of firm generation require performance combinations the authors judged infeasible for known technologies. The U.S. Department of Energy's Long Duration Storage Shot sets a target in the same territory from the policy side: a 90 per cent cost reduction from a 2020 lithium-ion baseline for systems delivering ten or more hours.

## The candidates, and what each pays at the door

| Option | Round-trip penalty | What limits it | Where it fits |
| --- | --- | --- | --- |
| Lithium-ion | ~82% measured across the U.S. fleet | Energy capacity costs in the hundreds of $/kWh; power and energy scale together | Hours |
| Pumped hydro | ~79% measured; ~80% typical for off-river designs | Site topography and head; reservoir pairs are civil works, not products | Hours to days |
| Hydrogen | Losses at electrolysis, storage and reconversion | Volumetric density; suitable geology for bulk containment | Days to seasons |

Hydrogen's difficulty is the one most often understated because the gravimetric figure flatters it. Roughly 120 MJ per kilogram against 44 for gasoline sounds decisive until the volumetric comparison arrives: about 8 MJ per litre as a cryogenic liquid against 32 for gasoline, with storage requiring 350–700 bar or temperatures below −252.8 °C. Bulk seasonal quantities therefore go underground, and underground means geology. A 2020 assessment in the *International Journal of Hydrogen Energy* put Europe's total onshore and offshore salt-cavern hydrogen storage potential at about 84.8 PWh, of which Germany alone accounts for roughly 9.4 PWh — an endowment that is large in aggregate and distributed very unevenly across the countries that would need it. The carrier's wider role is taken up in the article on [hydrogen as an energy carrier](/en/physics/energy/hydrogen-as-an-energy-carrier).

Pumped hydro has the same shape of constraint in a different medium. It is mature, cheap per unit of stored energy, and — as a 2019 survey by an Australian National University group recorded — accounted for roughly 97 per cent of global storage power and 99 per cent of stored energy at that time. It also needs two reservoirs at different elevations within a few kilometres of each other, which some regions have in abundance and others do not.

## How large is the requirement? This is where the disagreement is real

Two published positions differ by close to an order of magnitude, and both are held by serious people for stated reasons.

The first says the seasonal problem is small. The ANU survey identified about 616,000 potentially feasible off-river pumped hydro sites with a combined potential near 23 million GWh, which the authors describe as roughly 100 times more than a fully renewable global electricity system would require — their benchmark being about 20 GWh per million people for Australia. That benchmark is day-scale, and it is explicitly conditional: the same paper specifies stronger interconnection over large areas, demand management, and occasional spillage of surplus generation as part of the package. On this reading, apparent seasonal storage requirements are largely an artefact of models that restrict transmission and demand flexibility.

The second says the tail events are the design case. A 2026 study in *Communications Earth & Environment* characterised European renewable droughts across 38 historic weather years and found that the most extreme event, in the winter of 1996/97, ran 55 days even in an idealised perfectly interconnected Europe — during which average renewable availability was still 47 per cent of its long-run mean, so this is a deep shortfall rather than a total one. The same analysis found drought statistics depend heavily on the threshold chosen, and concluded that modelling scenarios on arbitrary single calendar years is not defensible.

These are not contradictory observations. They are different questions: how much storage does a least-cost system build, versus what does the worst multi-week weather sequence in four decades demand. A study that optimises against one typical year and a study that optimises against 1996/97 will report storage requirements that differ by an order of magnitude without either being wrong. The link between weather regimes and grid design is developed further in the article on [atmospheric circulation cells](/en/physics/climate-physics/atmospheric-circulation-cells), and the system-integration side in [integrating variable renewables](/en/physics/energy/grid-integration-of-variable-renewables).

## What would settle it, and what to ask meanwhile

The evidence gap is not primarily about storage chemistry. It is about the joint distribution of weather, demand and transmission over decades, and about how systems behave at renewable shares above roughly 90 per cent, where almost no operating experience exists. Multi-decade weather records run through whole-system models, rather than single representative years, would narrow the range; so would observed data from the first large grids to operate at those shares through a genuinely bad winter.

Until then, four questions make any storage figure interpretable. What duration is assumed, and at what cycling frequency? How many weather years does the study cover? How much transmission and demand flexibility is permitted? And is the quoted round-trip efficiency a measured fleet average or a nameplate value? A number without those four is not comparable to another number without them — a point that generalises well beyond storage, and one taken up in the companion piece on [which energy-transition constraints are physical](/en/insight/energy-transition-constraints-physical-and-institutional). The related question of how output is reported over time is covered in [capacity factor and energy metrics](/en/physics/energy/capacity-factor-and-energy-metrics).

## Sources

1. **Nature Energy, via the NSF Public Access Repository** — [The design space for long-duration energy storage in decarbonized power systems](https://par.nsf.gov/biblio/10308792). Energy-capacity cost thresholds, the dominance of energy cost and discharge efficiency, and optimal discharge durations of 100–650 hours.
2. **U.S. Energy Information Administration** — [Utility-scale batteries and pumped storage return about 80% of the electricity they store](https://www.eia.gov/todayinenergy/detail.php?id=46756). Measured average monthly round-trip efficiencies for batteries and pumped storage.
3. **U.S. Energy Information Administration** — [Duration of utility-scale batteries depends on how they are used](https://www.eia.gov/todayinenergy/detail.php?id=51798). Definition of duration and the duration distribution of the deployed U.S. fleet.
4. **U.S. Department of Energy** — [Long Duration Storage Shot fact sheet](https://www.energy.gov/sites/default/files/2025-01/Storage%20shot%20fact%20sheet_011425_.pdf). The 90 per cent cost-reduction target for systems of ten or more hours against a 2020 lithium-ion baseline.
5. **U.S. Department of Energy** — [Hydrogen storage](https://www.energy.gov/cmei/fuels/hydrogen-storage). Gravimetric and volumetric energy density of hydrogen and the storage conditions required.
6. **International Solar Energy Society** — [A global atlas of 616,000 pumped hydro energy storage sites](https://doi.org/10.18086/swc.2019.20.02). Site counts, storage potential, round-trip efficiency of off-river designs, and the stated system assumptions behind the per-capita storage benchmark.
7. **International Journal of Hydrogen Energy** — [Technical potential of salt caverns for hydrogen storage in Europe](https://doi.org/10.1016/j.ijhydene.2019.12.161). European salt-cavern storage potential and its national distribution.
8. **Communications Earth & Environment** — [Multi-threshold time series analysis enables characterization of variable renewable energy droughts in Europe](https://www.nature.com/articles/s43247-026-03251-2). Duration and depth of the most extreme European renewable drought across 38 weather years.
