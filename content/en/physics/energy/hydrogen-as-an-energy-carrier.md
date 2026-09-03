---
title: 'Hydrogen: an energy carrier with an efficiency penalty at every step'
excerpt: A kilogram of hydrogen holds 33.3 kWh and costs roughly 50 to 64 kWh of electricity to make. Every later step — compression, storage, transport, reconversion — takes another cut, and that arithmetic decides where hydrogen belongs.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - hydrogen
  - electrolysis
  - energy-carriers
  - fuel-cells
  - industrial-decarbonisation
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - grid-integration-of-variable-renewables
  - capacity-factor-and-energy-metrics
pillar: energy-systems-explained
_bodyHash: 3ee93282
---

A kilogram of hydrogen holds 33.3 kWh of energy on a lower-heating-value basis, according to the US Department of Energy's alternative fuels data. Making that kilogram by water electrolysis takes considerably more electricity than the hydrogen ends up holding: an assessment of liquid alkaline systems in *Environmental Science & Technology* reports stack-plus-balance-of-plant consumption of 59 to 64 kWh per kilogram for a baseline design and 49 to 52 kWh for an advanced one. Nothing downstream recovers the difference, and every claim made for hydrogen has to survive that gap.

Hydrogen is not an energy source. It is a carrier, in the same category as electricity and refined liquid fuels — a way of moving and storing energy that came from somewhere else, discussed as one route among several in the overview of [how energy systems convert and deliver energy](/en/physics/energy/energy-systems-explained). Judging a carrier means asking what fraction of the original energy survives to the point of use, and what the carrier can do that the alternatives cannot.

## Superb by mass, awkward by volume

Hydrogen has the highest energy content per unit mass of any chemical fuel: 33.3 kWh/kg as the lower heating value, or about 39.4 kWh/kg counting the heat released when the product water condenses. Per unit of space it is among the worst, and the gap does not close with clever engineering, because the molecule is small, light and reluctant to condense.

| Form | Energy per kilogram | Energy per litre |
| --- | --- | --- |
| Hydrogen, as a molecule (lower heating value) | 33.3 kWh | — |
| Hydrogen gas compressed to 700 bar | — | about 1.3 kWh |
| A complete 700-bar vehicle storage system | 1.4 kWh | 0.8 kWh |
| Petrol blended with 10 per cent ethanol | — | about 9 kWh |

The third row is the one that matters for engineering, because it counts the vessel as well as the contents. At the status the Department of Energy reports for 700-bar systems, hydrogen is 4.2 per cent of the mass of its own storage system and 0.024 kg per litre of system volume; the department's long-term targets of 2.2 kWh/kg and 1.7 kWh/L would still leave the tank well below petrol by volume. Liquefying instead of compressing raises density but requires holding the fuel near its 20 K boiling point, which means a cryogenic vessel and a continuous heat leak.

## Three routes, and where each one spends its energy

Almost all hydrogen made today comes from fossil feedstock. Steam methane reforming drives methane and steam together at 700–1000 °C under 3–25 bar to give carbon monoxide and three parts hydrogen, followed by a shift reaction that converts the carbon monoxide with more steam. The Department of Energy states that 95 per cent of US hydrogen is made this way. The carbon in the methane leaves the process as carbon dioxide whether or not anyone captures it, which is why the emissions profile of this route depends on a capture step rather than on the chemistry.

Electrolysis splits water using electricity, and the three commercial families differ mainly in where they sit on the temperature axis. Alkaline cells operate below 100 °C, polymer-electrolyte-membrane cells at 70–90 °C, and solid-oxide cells at about 700–800 °C, where part of the energy demand can be met with heat instead of electricity. Higher temperature buys thermodynamic advantage and costs materials durability.

The *Environmental Science & Technology* assessment gives an unusually clear picture of what the trade looks like inside an alkaline stack. Its baseline case assumes a cell voltage of 2 V at the beginning of life, degrading at 3.2 mV per 1,000 hours over a 60,000-hour life; the advanced case starts at 1.7 V, degrades at 1.4 mV per 1,000 hours and lasts 80,000 hours. Cell voltage is the efficiency: the lower the voltage needed to drive the same current, the less electricity is spent per molecule. Set against hydrogen's 33.3 kWh/kg, the consumption ranges above span about 52 per cent efficiency at the worst end of the baseline case to about 68 per cent at the best end of the advanced one.

Deployment is still small relative to the demand it would have to displace. The International Energy Agency reports global hydrogen demand passing 100 Mt in 2025 while low-emissions production grew 20 per cent to just under 1 Mt, and installed electrolysis capacity doubling in the same year to more than 4 GW, with China responsible for nearly three-quarters of the new installations.

## The round trip, done with real numbers

The case that gets made most often for hydrogen — store surplus electricity as hydrogen, burn or oxidise it back to electricity later — is the case the arithmetic treats most harshly.

Take the electrolysis efficiencies above, 52 to 68 per cent. Fuel cells convert chemical energy to electrical energy directly rather than through a thermal cycle, so they are not bound by the reservoir-temperature ceiling that constrains [engines that work by moving heat between reservoirs](/en/physics/thermodynamics/heat-engines-and-efficiency-limits); the Department of Energy describes efficiencies capable of exceeding 60 per cent. Take 60 per cent for that step. Multiplying the best pair of figures returns about 41 per cent of the electricity that went in; the baseline pair returns about 31 per cent. Neither includes compression, storage losses, transport, or boil-off from a cryogenic tank, all of which subtract further.

That is a poor showing against electrochemical storage on any timescale where a battery is usable at all, which is the argument made in detail in the companion page on [what determines a storage technology's application](/en/physics/energy/energy-storage-fundamentals). Hydrogen's advantage is not efficiency. It is that the quantity stored and the equipment that converts it are separable: adding storage volume does not require adding electrolysers or fuel cells, whereas a battery buys energy capacity and power capacity together in the same cells.

## Containment is a materials problem, not a logistics problem

Hydrogen atoms are small enough to enter the crystal lattice of steel and change how it fails. The resulting embrittlement is a defect-and-diffusion phenomenon of the kind covered under [how structure and defects govern the behaviour of solids](/en/physics/matter-radiation/materials-physics-and-semiconductors), and it is the main reason existing gas infrastructure cannot simply be repurposed. A review in *Materials* reports estimates of more than 50 years of service life for X70 pipeline steel under hydrogen but around 37 years for X80 steel carrying a 50 per cent hydrogen blend — a reminder that susceptibility is not a simple function of strength grade, and that the fraction of hydrogen a pipeline can carry is a materials specification rather than a policy dial.

Water demand is a smaller but frequently overlooked term: the same review puts consumption at roughly 9 litres of water per kilogram of hydrogen produced, before any water used for cooling.

## Where the physics favours hydrogen anyway

The efficiency penalty is decisive only when there is a direct-electric alternative. There often is not.

Hydrogen is already a chemical feedstock at industrial scale — in refining, and in ammonia synthesis, where the hydrogen becomes part of the product rather than being burned. Substituting low-emissions hydrogen there displaces fossil hydrogen one-for-one and requires no new end-use technology, which is why the IEA expects 2.5 Mt of low-emissions hydrogen, some 60 per cent of committed global production, to go into refineries and industrial plants by 2030. Reduction of iron ore is a second case where the chemistry, not the energy content, is what is wanted.

There is also a genuine link to surplus electricity. A study of European curtailment in *Environmental Science & Technology* found 95 to 134 TWh of renewable electricity curtailed each year over 2020–2022, equal to 3 to 4 per cent of European demand, and estimated that using all of it could supply up to 36 per cent of the hydrogen currently consumed by European ammonia production and refineries. The catch is in the same paper, which notes that electrolysers run on surplus alone operate well below full capacity, at reported capacity factors of around 25 per cent — and a capital-intensive plant used a quarter of the time carries the cost of the other three quarters. That interaction between utilisation and unit cost is the same one that makes [capacity factor a load-bearing number in energy statistics](/en/physics/energy/capacity-factor-and-energy-metrics), and it is why hydrogen produced from curtailed power is cheap in energy terms and expensive in capital terms. The surplus itself is a product of system design rather than a fixed resource, as set out in the treatment of [what variability costs a power system](/en/physics/energy/grid-integration-of-variable-renewables).

## The distance between an announcement and a plant

The weakest numbers in this field are the forward-looking ones, and they have been moving in one direction. The IEA reports the pipeline of announced low-emissions hydrogen projects shrinking to 27 Mt of potential 2030 production, and projects either committed or with a strong chance of operating by 2030 falling from 10 Mt to just above 6 Mt since the previous year's review, with only some 300 kt a year of additional production reaching a final investment decision over that period and only around 20 per cent of newly signed offtake volumes backed by firm contractual commitments. An announced megatonne and a committed megatonne are different quantities, and headline capacity figures rarely say which they are.

Two further cautions apply to the efficiency numbers on this page. They are system-level figures from specific modelled designs, and a real plant's consumption depends on operating point, duty cycle and age — an electrolyser cycling with a variable power supply does not perform like one held at its design point. And the cost targets that appear alongside them, such as the department's goal of one US dollar per kilogram by 2030, are policy objectives rather than projections of what the technology will cost.

## Sources

1. **US Department of Energy, Alternative Fuels Data Center** — [Fuel properties comparison](https://afdc.energy.gov/fuels/properties). Lower and higher heating values for hydrogen.
2. **US Department of Energy** — [Hydrogen production: electrolysis](https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis). Electrolyser families, operating temperatures, and the cost targets.
3. **US Department of Energy** — [Hydrogen production: natural gas reforming](https://www.energy.gov/cmei/fuels/hydrogen-production-natural-gas-reforming). Steam methane reforming conditions and the share of US hydrogen made this way.
4. **US Department of Energy** — [Physical hydrogen storage](https://www.energy.gov/cmei/fuels/physical-hydrogen-storage). Storage pressures, liquid hydrogen temperature, and system-level gravimetric and volumetric densities.
5. **US Department of Energy** — [Fuel cells](https://www.energy.gov/cmei/fuels/fuel-cells). Direct chemical-to-electrical conversion and efficiencies capable of exceeding 60 per cent.
6. **International Energy Agency** — [Global Hydrogen Review 2026: executive summary](https://www.iea.org/reports/global-hydrogen-review-2026/executive-summary). Global demand, low-emissions production, electrolyser capacity, project pipeline and offtake commitments.
7. **Environmental Science & Technology** — [Liquid alkaline water electrolysers: comparing performance across design, operation and end-of-life scenarios](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550807/). Specific energy consumption, cell voltages, degradation rates and stack lifetimes.
8. **Environmental Science & Technology** — [Utilizing curtailed wind and solar power to scale up electrolytic hydrogen production in Europe](https://pmc.ncbi.nlm.nih.gov/articles/PMC11866934/). European curtailment volumes, the share of industrial hydrogen demand they could meet, and electrolyser capacity factors.
9. **Materials** — [An overview of challenges for the future of hydrogen](https://pmc.ncbi.nlm.nih.gov/articles/PMC10608639/). Volumetric energy densities, pipeline steel service-life estimates, and water consumption per kilogram.
