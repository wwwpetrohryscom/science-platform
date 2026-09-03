---
title: 'Reading energy statistics: capacity factor, LCOE, and the metrics that mislead'
excerpt: Nameplate capacity, capacity factor, levelised cost and primary energy are four different accounts of the same fleet, and each carries a convention that can move a headline without anything physical changing.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - capacity-factor
  - levelised-cost
  - energy-statistics
  - primary-energy
  - electricity-generation
related:
  - energy-systems-explained
  - grid-integration-of-variable-renewables
  - wind-energy-physics
  - solar-photovoltaics-explained
pillar: energy-systems-explained
---

In 2025 the United States utility-scale wind fleet averaged 154.6 GW of capacity at a capacity factor of 34.2 per cent. The solar photovoltaic fleet averaged 133.9 GW at 24.4 per cent. The nuclear fleet averaged 98.4 GW at 91.0 per cent. Multiply each pair and the average power delivered comes out at 52.9 GW from wind, 32.7 GW from solar and 89.6 GW from nuclear: with roughly a third of the combined nameplate of the other two, the nuclear fleet produced more electricity than both together.

None of those figures is disputed and all of them come from the same monthly publication. The reason the comparison surprises people is that capacity is quoted far more often than output, and the ratio between the two varies by nearly a factor of four across those three fleets alone, and by far more across the full set of generating technologies. The distinction between a quantity and a rate is developed in the treatment of [work, energy and power as distinct quantities](/en/physics/mechanics-waves/energy-work-and-power); what follows is about the four ratios that energy reporting actually turns on, and the conventions buried in each. They sit downstream of the conversion accounting described in the overview of [how an energy system is organised](/en/physics/energy/energy-systems-explained).

## What the ratio is a ratio of

Capacity factor is net generation over a period divided by what the same plant would have produced running continuously at its rated capacity. Both terms in that fraction are conventions.

The numerator is *net* generation, after the plant's own consumption. The denominator is a rating, and the US Energy Information Administration builds it from time-adjusted summer capacity — the summer rating of units that operated for the whole month, excluding units that started or retired mid-month. Summer ratings are conservative for thermal plant, because condenser and turbine performance improve in cold weather. That is why the nuclear fleet's monthly capacity factor reached 99.0 per cent in December 2025 and 100.0 per cent in January 2026. A reactor fleet is not exceeding its physical limit; it is exceeding a rating defined for a hot day.

| Technology (2025, United States, utility scale) | Capacity factor | What sets it |
| --- | --- | --- |
| Nuclear | 91.0% | Refuelling and maintenance outages only |
| Geothermal | 65.9% | Resource and plant availability |
| Natural gas, combined cycle | 58.4% | Dispatch economics against fuel price |
| Coal | 48.7% | Dispatch economics; position in merit order |
| Hydroelectric | 35.3% | Water availability and seasonal storage |
| Wind | 34.2% | Wind resource and hub-height shear |
| Solar photovoltaic | 24.4% | Daylight, season and latitude |
| Natural gas, steam turbine | 19.8% | Reserve and peaking duty |
| Natural gas, combustion turbine | 14.1% | Peaking duty |
| Petroleum, steam turbine | 11.3% | Rarely economic to run |

## Three different reasons a number is low

A low capacity factor is often read as a defect. It is a symptom with at least three distinct causes, and the diagnosis matters more than the number.

The clearest evidence is inside a single fuel. Natural gas appears three times in the table above at 58.4, 19.8 and 14.1 per cent. The fuel is identical; what differs is thermal efficiency and therefore position in the merit order. A combined-cycle unit is efficient enough to run most of the time; a combustion turbine exists to cover the hours when nothing cheaper is available, and running it much more would mean the system had a problem. Its 14.1 per cent is the design intent, not underperformance.

Resource limitation is the second cause and applies to wind, solar and hydro, where the input is not dispatchable. It is a property of the site and the machine, traced for turbines in the account of [why output scales with the cube of wind speed](/en/physics/energy/wind-energy-physics) and for panels in the discussion of [the gap between a module's rating and its field output](/en/physics/energy/solar-photovoltaics-explained).

Availability is the third. The US nuclear fleet's monthly capacity factor fell to 80.9 per cent in October 2025 and 84.9 per cent in the previous May, both shoulder seasons, when refuelling outages are typically scheduled. That is a maintenance calendar showing through a performance statistic.

## An annual mean hides the shape that matters

Averaging a year of hourly output into one number discards the property a power system cares about most: when the energy arrives.

Across 2025 the solar photovoltaic fleet's monthly capacity factor ran from 13.7 per cent in December to 32.4 per cent in July. Wind ran the other way, from 22.9 per cent in September to 44.2 per cent in March. Hydroelectric output moved from 26.6 per cent in September to 41.0 per cent in May. Each annual figure conceals a swing of roughly a factor of two, and the swings are not in phase with each other or with demand. An annual capacity factor cannot tell you whether a fleet contributes at the hours of system stress, which is a separate question addressed by capacity credit and taken up in the page on [what variability costs a power system](/en/physics/energy/grid-integration-of-variable-renewables).

## Levelised cost is a discounted ratio, and the rate is doing the work

The levelised cost of electricity divides the discounted lifetime cost of a plant by its discounted lifetime generation. The second discounting is the part that gets forgotten: a megawatt-hour produced in year 20 counts for less than one produced in year 2, so the discount rate penalises long-lived, capital-heavy assets twice over.

The International Energy Agency's cost study covering 243 plants in 24 countries adopts 7 per cent as its baseline discount rate. The report's own sensitivity analysis shows what that choice buys: at 3 per cent, nuclear falls below coal and gas; at the 7 to 10 per cent rates it associates with riskier environments, a newly built nuclear plant costs more than fossil alternatives. The technology, the site and the engineering are identical in both cases. Only the assumed cost of money changed.

That sensitivity is not hypothetical. An analysis in *iScience* of financing conditions found real interest rates rising from −0.5 per cent to 2.5 per cent between 2020 and 2024, and calculated that the higher financing costs added 18 per cent to the levelised cost of US solar photovoltaics — 12 per cent with tax credits — but only 9 per cent to a combined-cycle gas turbine. The asymmetry follows directly from capital intensity: a technology whose cost is almost entirely up front is a bond-like asset, and its headline cost moves with the bond market. The same study reports the weighted average cost of capital varying by several percentage points between countries for the same technology, which is enough on its own to reorder a cost league table without any engineering difference behind it.

## What sits outside the fence

Levelised cost is a plant-boundary metric, and the agency that publishes it says so: it applies at the level of the individual plant and does not address the value a generation technology adds to the system. Two plants with equal levelised costs are not equally useful if one produces when prices are high and the other when they are not — which is why the same report introduced a value-adjusted metric alongside the conventional one.

Modelling published in *Nature Communications* puts numbers on the divergence for European solar. In its scenarios, photovoltaic market values fall from about 50 per cent of the flat-block average price in a low-penetration case to 19 per cent in a high-penetration one, purely because output is concentrated in the same hours across the whole fleet. Curtailment in the same modelling runs to 234 TWh by 2040 in one configuration and 131 TWh in another that spreads generation across the day. A cost metric computed per megawatt-hour generated cannot see any of this, because it counts curtailed and low-value megawatt-hours identically with the rest.

## Primary energy: the convention sets the headline

The last of the four metrics is the one where the arithmetic is trivial and the convention is decisive. One kilowatt-hour of electricity contains 3,412 Btu. A thermal power plant with a heat rate of 10,500 Btu per kilowatt-hour is 33 per cent efficient; one at 7,500 Btu per kilowatt-hour is 45 per cent.

Now ask how much *primary* energy a wind farm consumed. There is no fuel, so the answer is a choice. Counting the electricity at its own energy content values a terawatt-hour of wind at 3,412 Btu per kilowatt-hour. Counting instead the fossil energy that would have been burned to generate the same electricity values it at something near a thermal plant's heat rate — roughly three times as many Btu for exactly the same delivered electricity. Neither convention is wrong. But a renewable share of primary energy computed one way is not comparable with one computed the other way, and the difference is large enough to change whether a transition looks fast or slow. Any figure for a source's share of *primary* energy that does not name its convention has been stripped of the thing that makes it meaningful.

## Reading a figure honestly

Four checks cover most of the failure modes above. Name the product and the period, because a monthly figure and an annual figure for the same fleet routinely differ by ten percentage points or more. Check the boundary: the capacity factors on this page cover utility-scale generators only, so distributed rooftop generation is outside them entirely. Check the vintage: the administration marks 2024 and earlier as final and 2025 onward as preliminary, and preliminary values move. And treat any cost figure as conditional on a discount rate that is rarely printed beside it.

Those qualifications are exactly what tends to fall away between a dataset and a headline, the pattern traced in the analysis of [what gets lost on the way to publication](/en/insight/uncertainty-lost-between-dataset-and-headline). None of it makes the metrics useless: capacity factor, levelised cost and primary energy each answer a real question, and the failure is asking one of them a question that belongs to another. The habit that prevents it is the ordinary discipline of [stating what a measurement can support](/en/physics/mechanics-waves/measurement-uncertainty-explained), applied to published statistics rather than to instruments.

## Sources

1. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Annual and monthly capacity factors and time-adjusted capacity for non-fossil utility-scale generators.
2. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Annual capacity factors for coal, combined-cycle, combustion-turbine, steam-turbine and petroleum plant.
3. **US Energy Information Administration** — [What is the efficiency of different types of power plants?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Heat rate and the conversion between heat rate and thermal efficiency.
4. **US Energy Information Administration** — [British thermal units](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php). The 3,412 Btu equivalent of one kilowatt-hour.
5. **International Energy Agency and OECD Nuclear Energy Agency** — [Projected Costs of Generating Electricity 2020](https://www.iea.org/reports/projected-costs-of-generating-electricity-2020). Baseline discount rate, discount-rate sensitivity across technologies, and the plant-level scope of the metric.
6. **iScience** — [Financing costs and the competitiveness of renewable power](https://pmc.ncbi.nlm.nih.gov/articles/PMC12677178/). Real interest rate movement, the asymmetric effect of financing costs on solar and gas, and cost of capital by country.
7. **Nature Communications** — [Impacts of large-scale deployment of vertical bifacial photovoltaics on European electricity market dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303785/). Modelled photovoltaic market values relative to average prices, and curtailment volumes by deployment configuration.
