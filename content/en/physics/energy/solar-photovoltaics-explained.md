---
title: 'Photovoltaics: from photon absorption to a rated module'
excerpt: A module's nameplate wattage is a measurement made against a modelled spectrum at a fixed temperature, not a prediction of field output. This page follows the physics from photon absorption to the rating, and then to what the rating omits.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - photovoltaics
  - semiconductor-physics
  - solar-measurement
  - module-degradation
related:
  - energy-systems-explained
  - thermodynamic-limits-of-photovoltaics
  - perovskite-stack-field-stability
  - solar-radiation-and-earth-energy-balance
pillar: energy-systems-explained
---

Every photovoltaic rating is a measurement, and like any measurement it is defined against reference conditions that someone had to write down. The number stamped on a module is the power it produced under a specified spectrum, at a specified cell temperature, over a specified area. None of those three conditions holds on a roof. Understanding what a module does therefore means understanding both the device physics and the metrology, because the gap between them is where most of the disappointment in photovoltaics lives.

## The photon supplies the energy; the junction only sorts

A common description has the p-n junction "generating" electricity. It does not. Absorption of a photon with more than the bandgap energy promotes an electron across the gap and leaves a hole behind, and that pair carries the energy. What the junction contributes is asymmetry: the built-in electric field across the depletion region drives electrons one way and holes the other, so that the pair is separated before it can recombine. Remove the field and the same photons are still absorbed, but the carriers simply relax and the energy leaves as heat.

That distinction explains why so much photovoltaic research is about interfaces rather than about absorbers. Recombination at a surface, a grain boundary or a contact destroys carriers that were successfully generated, and a device with a superb absorber and poor passivation performs badly. It also explains why the physics of conversion sits inside the wider [accounting of conversion chains](/en/physics/energy/energy-systems-explained) as an unusually direct step: there is no working fluid and no hot reservoir between the resource and the electrical work.

## The bandgap is a compromise, not an optimum

The gap sets a threshold. Photons carrying less energy than the gap are not absorbed by the transition at all and pass through; photons carrying more are absorbed, but the excess above the gap is lost as heat within picoseconds as the carrier relaxes to the band edge. A wide gap wastes the red end of the spectrum; a narrow gap wastes energy from the blue end. The optimum for a single absorber is therefore a balance struck against a particular spectrum, which is why the [Shockley–Queisser limit](/en/glossary/shockley-queisser-limit) is a spectrum-dependent quantity rather than a universal constant, and why stacking absorbers of different gaps raises the ceiling — the argument developed in the companion article on [the thermodynamic bound on single-junction conversion](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

## Which spectrum, exactly

Because the ceiling depends on the spectrum, the reference spectrum has to be specified with some care, and it is. The standard flat-plate reference spectrum is the one defined in ASTM G-173-03, which the National Laboratory of the Rockies specifies for an absolute air mass of 1.5 — a solar zenith angle of 48.19° — falling on a plane inclined 37° toward the equator and facing the sun. The atmosphere in that specification is fixed too: a total column water vapour equivalent of 1.42 cm, column ozone of 0.34 cm, and an Ångström turbidity at 500 nm of 0.084. The spectrum itself was not measured on a particular day; it was modelled with the SMARTS2 radiative transmission code.

Two consequences follow. A cell optimised against this spectrum is optimised against a modelled clear-sky mid-latitude condition, and real sites differ in air mass, water vapour and aerosol load throughout the day and the year. And any device whose response depends strongly on spectral shape — a tandem stack with series-connected subcells, most obviously — will show a seasonal signature in the field that the rating cannot express. How much energy the spectrum delivers before it reaches the panel is a separate question, covered in the article on [the solar resource arriving at the surface](/en/physics/energy/solar-radiation-and-earth-energy-balance).

## What an efficiency figure is defined over

Standard test or reporting conditions fix the remaining variables. The reference temperature is 25 °C, the flat-plate reference spectrum is the global one and the concentrator reference is the direct spectrum, both as specified in IEC 60904-3 edition 2 or ASTM G173. The area in the denominator is either the total device area or the area defined by an aperture, and which of the two is used changes the answer.

Record efficiencies are also not self-certified. Entries on the research-cell chart are confirmed by independent recognised laboratories — the National Laboratory of the Rockies, AIST, JRC-ESTI and Fraunhofer-ISE — and are reported on a standardised basis. The parallel champion-module chart is kept separately for a reason that is easy to overlook: it groups devices into area classes above 14,000 cm², from 6,500 to 14,000 cm², from 800 to 6,500 cm² and from 200 to 800 cm². A cell record and a module record are different measurements on different objects, and the difference between them is the whole business of interconnection, encapsulation and inactive area.

The current work on halide perovskites shows that gap concretely. A study in *Nature Nanotechnology* reporting an amorphised hole-transport layer measured inverted perovskite cells at 26.63 per cent power conversion efficiency, while blade-coated modules from the same work reached a certified quasi-steady-state 23.01 per cent. Both figures are real; they answer different questions.

## Reading a current-voltage curve

The measurement itself is a sweep. Illuminate the device, vary the load, and record current against voltage. Short-circuit current scales with the photon flux absorbed; open-circuit voltage reflects how far the carrier populations can be driven apart before recombination balances generation. Somewhere between the two extremes lies the maximum-power point, and the **fill factor** is the ratio of that maximum power to the product of short-circuit current and open-circuit voltage — a dimensionless measure of how square the curve is.

Fill factor is the diagnostic that separates a device problem from an absorber problem. Series resistance in contacts and fingers pulls the curve down near the current axis; shunt paths across the junction pull it down near the voltage axis; heavy recombination flattens it everywhere. Two devices with the same short-circuit current and open-circuit voltage can differ substantially in delivered power, and the fill factor is where that difference appears.

## From a rating to a year of output

Field operation departs from the reference conditions in every direction at once. Cell temperature under load in sunlight sits well above 25 °C, and because open-circuit voltage falls as temperature rises, delivered power falls with it — the reason identical modules yield differently in hot and temperate climates. Angle of incidence, soiling, spectral shift, shading and inverter behaviour each subtract further.

Modelling tools acknowledge this candidly. The PVWatts calculator, which estimates production for grid-connected systems worldwide, warns in its own documentation that modules with better performance are not differentiated within the tool from lesser performing ones. That is an honest statement of scope rather than a defect: system-level yield estimation and device-level ranking are different tasks, and a tool built for the first should not be read as authority on the second. Converting an annual yield into the ratio most often quoted for a generating asset is the subject of a separate page on [capacity factors and the metrics built from them](/en/physics/energy/capacity-factor-and-energy-metrics).

## Degradation splits the field into two populations

For mature crystalline silicon, degradation is slow enough to be difficult to measure. The National Laboratory of the Rockies states that modules typically lose less than 1 per cent of their performance per year, and that the loss is undetectable within measurement uncertainty for the first several years of operation. The laboratory's PV Lifetime project, which has tracked sixteen module types indoors under controlled annual retesting since 2016, reports an annual median degradation between −0.4 and −0.5 per cent per year for the earliest-deployed types, with several types better than −0.3 per cent per year. Four of the sixteen exceed −1 per cent per year, and one bifacial heterojunction type declines at roughly −1.5 per cent per year — so the spread within a single controlled study is wider than the median suggests.

Newer architectures behave differently. A study in *PRX Energy* of a mechanically stacked four-terminal gallium arsenide over silicon tandem minimodule, deployed outdoors in Golden, Colorado from October 2019 to January 2021, measured −4.1 ± 0.2 per cent per year for the GaAs subcell and −2.5 ± 0.9 per cent per year for the silicon subcell. The dominant mechanism was packaging degradation, particularly delamination, rather than anything intrinsic to the absorbers. That result is the general shape of the problem for emerging stacks, and it is why the durability work described in the article on [perovskite tandem stability in the field](/en/physics/energy/perovskite-stack-field-stability) matters more to deployment than another point of certified efficiency.

| Family | What the absorber is | Where it is strong | Principal constraint |
| --- | --- | --- | --- |
| Crystalline silicon | Wafer-based elemental semiconductor | Mature supply chain, well-characterised long-term field behaviour | Indirect gap requires a thick absorber; single-junction ceiling |
| Thin-film chalcogenides | Deposited compound layers such as CdTe and CIGS | Low material use, good performance in warm and diffuse conditions | Composition control over large areas; constituent element supply |
| III–V compounds | Epitaxially grown gallium arsenide and relatives | Highest measured conversion efficiencies, especially under concentration | Substrate and epitaxy cost restrict use to concentrators and space |
| Halide perovskites | Solution- or vapour-processed ionic semiconductors | Tunable gap, rapid efficiency gains, low-temperature processing | Operational stability and the cell-to-module efficiency gap |
| Multijunction stacks | Two or more absorbers of different gap in series or in parallel | Recovers thermalisation and transmission losses simultaneously | Spectral sensitivity, current matching and packaging durability |

What no rating and no degradation figure can supply is the joint distribution — how a given module type behaves at a given site under a given spectrum over twenty-five years. Accelerated indoor testing compresses time by increasing stress, which changes which failure mode dominates; outdoor testing runs at the right stresses but at real speed. Both are used because neither is sufficient, and the honest reading of any single degradation number is that it describes the population and the conditions it was drawn from.

## Sources

1. **National Laboratory of the Rockies** — [Best research-cell efficiency chart](https://www.nlr.gov/pv/cell-efficiency). Standard test and reporting conditions, the IEC 60904-3 and ASTM G173 reference spectra, the 25 °C reference temperature, area conventions, and the independent laboratories that confirm records.
2. **National Laboratory of the Rockies** — [Champion photovoltaic module efficiency chart](https://www.nlr.gov/pv/module-efficiency). Module area classes and the separation of module records from cell records.
3. **National Laboratory of the Rockies** — [Reference air mass 1.5 spectra](https://www.nlr.gov/grid/solar-resource/spectra-am1.5). ASTM G-173-03 specification, air mass, tilt, atmospheric column values and the SMARTS2 model behind the spectrum.
4. **National Laboratory of the Rockies** — [PV module lifetime research](https://www.nlr.gov/pv/lifetime). Typical annual degradation below 1 per cent and its detectability against measurement uncertainty.
5. **U.S. Department of Energy, via OSTI** — [PV Lifetime Project — 2025 NLR Annual Report](https://www.osti.gov/biblio/3020423). Median degradation rates across sixteen tracked module types and the spread within them.
6. **PRX Energy, via OSTI** — [Performance modeling of tandem photovoltaics: a yearlong outdoor degradation analysis of a GaAs//Si minimodule](https://www.osti.gov/biblio/3377551). Subcell degradation rates, deployment period and the delamination failure mechanism.
7. **Nature Nanotechnology** — [Nanoscale amorphization of poly(triarylamine) for efficient and stable inverted perovskite photovoltaics](https://doi.org/10.1038/s41565-026-02207-z). Certified inverted perovskite cell and blade-coated module efficiencies.
8. **National Laboratory of the Rockies** — [PVWatts calculator](https://pvwatts.nlr.gov/). Scope statement on the tool's inability to differentiate module quality.
