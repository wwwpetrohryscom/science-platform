---
title: 'Life-cycle emissions and how they are compared: what a single number per kilowatt-hour contains'
metaTitle: 'Life-cycle emissions: what one number per kWh contains'
excerpt: Comparing generation technologies on grams of CO2 per kilowatt-hour requires deciding what to include, and the decision is where most of the disagreement lives. Published compilations report quartiles rather than point values for exactly that reason.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - life-cycle-assessment
  - emissions
  - energy-systems
  - methodology
related:
  - energy-systems-explained
  - capacity-factor-and-energy-metrics
  - critical-minerals-and-supply-concentration
  - calibration-and-traceability
_bodyHash: cd6517d3
pillar: energy-systems-explained
---

A comparison of the technologies in an [energy system](/en/physics/energy/energy-systems-explained) on greenhouse gas emissions has to reduce each to one number, and the number is not measured. It is assembled: from construction, from fuel supply, from operation, from decommissioning, over an assumed lifetime and an assumed output. Every step is a modelling choice, and the choices vary between studies far more than the underlying physics does.

## What the accounting has to include

The US Department of Energy's Office of Scientific and Technical Information catalogues a life-cycle emissions dataset that makes the structure explicit. The analysis is broken into "one-time upstream, ongoing combustion, ongoing non-combustion, one-time downstream, and total" stages, with results in "grams of carbon dioxide equivalent per kilowatt hour of generation (g CO2e/kWh)".

Those five categories are the whole methodological argument in compressed form.

**One-time upstream** is construction: mining, refining, manufacturing, transport, installation. It is amortised over lifetime output, so it depends on assumed lifetime and assumed [capacity factor](/en/physics/energy/capacity-factor-and-energy-metrics) as much as on the plant.

**Ongoing combustion** is what most people mean by emissions, and it is zero for wind, solar, nuclear and hydro.

**Ongoing non-combustion** covers fugitive methane from gas supply, reservoir emissions from hydropower, and process emissions. This category is where the largest disputes sit, because it is the hardest to measure and the most variable between installations.

**One-time downstream** is decommissioning and waste management, amortised the same way as construction.

The technologies covered in the dataset span "biopower, coal, concentrating solar power, geothermal, hydrogen storage, hydropower, lithium-ion battery storage, natural gas, nuclear, ocean, oil, photovoltaic, pumped-storage hydropower, and wind" — including storage, which has no generation of its own and whose emissions therefore depend entirely on what it is charged with.

## Why the results are reported as ranges

The dataset provides "quartile estimates" rather than single values, and the reason is that published studies for the same technology disagree substantially. The compilation notes that "literature estimates were compiled by the LCA Harmonization study and subsequent updates" — harmonisation being the process of re-expressing heterogeneous studies on common assumptions so that the remaining spread reflects real differences rather than methodological ones.

That framing matters. Before harmonisation, the spread mixes genuine variation between installations with variation in how the studies were done. After it, the residual spread is closer to a physical quantity: how much these technologies actually differ by site, by vintage, and by supply chain.

Reporting quartiles rather than a median alone is the same discipline as [reporting an uncertainty with a measurement](/en/physics/mechanics-waves/measurement-uncertainty-explained). A point value invites a comparison the data does not support.

## The choices that move the answer most

**Lifetime and output assumptions.** Construction emissions per kilowatt-hour scale inversely with lifetime generation. A wind turbine assumed to run twenty years at a 35% capacity factor and the same turbine assumed to run thirty at 45% differ by nearly a factor of two in amortised construction emissions, with no change to the turbine.

**Grid mix for embodied energy.** Manufacturing emissions depend on the electricity used to manufacture. A technology built in a coal-heavy grid and deployed in a clean one carries emissions from the first, and studies differ on which mix to assume.

**System boundary.** Whether to include transmission, storage needed for integration, or backup capacity changes the comparison, and there is no methodologically neutral answer because the requirement depends on the rest of the system.

**Global warming potential horizon.** Methane's warming effect relative to CO₂ depends on the time horizon chosen, and the choice moves gas-supply emissions substantially.

## How to read a comparison

The useful questions are not about the numbers but about the boundaries. Which stages are included; over what lifetime and output; with what grid mix for manufacturing; and is the figure a median of harmonised studies or a single study's result.

A comparison that answers those four is doing legitimate work even if its numbers differ from another that answers them differently. One that answers none of them is not a comparison so much as a claim with units attached.

## Sources

1. **OSTI (US Department of Energy)** — [Life cycle emissions factors for electricity generation technologies](https://www.osti.gov/biblio/1819907). The five life-cycle stages, the g CO2e/kWh unit, the technologies covered, the use of quartile estimates, and the LCA Harmonization provenance.
2. **OSTI (US Department of Energy)** — [Life cycle greenhouse gas emissions from electricity generation](https://www.osti.gov/biblio/1338444). The purpose of the harmonisation project in reducing spread caused by methodological inconsistency.
3. **IEA** — [Critical minerals](https://www.iea.org/topics/critical-minerals). The material supply chains that populate the upstream stage of the accounting.
