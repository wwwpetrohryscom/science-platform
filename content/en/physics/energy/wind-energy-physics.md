---
title: 'Wind energy: cubic scaling, the Betz limit, and why turbines got large'
metaTitle: 'Wind energy physics: cubic scaling and the Betz limit'
excerpt: Power in the wind rises with the cube of speed, which makes a resource assessment a measurement problem before it is an engineering one. This page derives the extraction ceiling and follows the scaling arguments that drove turbine size.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - wind-energy
  - betz-limit
  - capacity-factor
  - wake-effects
related:
  - energy-systems-explained
  - capacity-factor-and-energy-metrics
  - grid-integration-of-variable-renewables
  - solar-photovoltaics-explained
pillar: energy-systems-explained
_bodyHash: df545239
---

The kinetic energy flux through a plane perpendicular to a moving fluid is ½ρv³ per unit area, where ρ is the fluid density and v the flow speed. Near sea level the air density is around 1.2 kg/m³, so the available power density in a 10 m/s wind is about 600 W/m² — a low figure that turbines compensate for by presenting a very large area. But it is the exponent, not the coefficient, that governs everything downstream. A 10 per cent error in an estimated long-term mean wind speed becomes roughly a 33 per cent error in estimated power, which is why wind development spends more effort on anemometry and on atmospheric modelling than the apparent simplicity of the machine would suggest.

That sensitivity also propagates into the [system-level accounting of conversion routes](/en/physics/energy/energy-systems-explained): unlike a fuel, whose energy content is known before it is burned, the wind resource at a site is an estimate with its own error structure, and that error is cubed.

## Why a rotor cannot take it all

There is a ceiling on the fraction of that flux any rotor can convert, and it comes from a conservation argument rather than from engineering. To extract energy the rotor must slow the air passing through it. But mass must be conserved: if the flow behind the rotor is slower, the same mass flux occupies a wider cross-section, so the streamtube expands. Slow the air too much and the streamtube expands so far that most of the approaching air diverts around the disc instead of passing through it. Extract nothing and the air passes through undisturbed. The maximum lies between.

Writing the wind speed at the disc as (1 − a) times the free-stream speed, where a is the axial induction factor, and applying mass and momentum conservation across an idealised disc gives a power coefficient that peaks at a = 1/3. At that point the coefficient equals 16/27, or about 59.3 per cent — the **[Betz limit](/en/glossary/betz-limit)**, named for Albert Betz. A chapter in *Advances in Wind Power* states the assumptions explicitly: an infinite number of rotor blades, one-dimensional flow through an ideal loaded disc, and no losses to friction or turbulence. The same chapter notes that practical efficiencies of operating machines sit in the proximity of 40 per cent.

The gap between 59.3 and roughly 40 per cent is not waste in any simple sense. It contains finite blade count and tip losses, aerofoil drag, the rotational wake the rotor imparts to the air, drivetrain and generator losses, and the control decisions that keep loads within structural limits. It is also worth being precise about the scope of the theorem: Betz bounds one idealised disc in unconstrained flow, not the aggregate output of an array of machines that share the same airflow. That second problem has no equivalent clean bound, and it is where most of the modern uncertainty lives.

## Two scalings, one direction of travel

Turbine growth follows from two facts that point the same way.

Swept area rises with the square of rotor diameter, so doubling the diameter quadruples the intercepted flux. And in the atmospheric boundary layer the mean wind speed increases with height above the surface, so a taller tower reaches faster air — and because power goes as the cube of speed, a modest gain in speed is a substantial gain in energy. Neither scaling is subtle, and both are paid for in materials, transport, crane capacity and structural loads rather than in physics.

The result is visible in the fleet. The EIA describes small turbines capable of powering a single home at electric-generating capacities around 10 kilowatts, while the largest operating machines reach about 15,000 kilowatts — 15 megawatts — with the largest horizontal-axis designs standing as tall as twenty-storey buildings and carrying blades more than 100 feet long. The same spread shows up between individual projects. As of the end of 2022 the Highland Wind Project in Iowa had the most turbines of any U.S. project — 462, for about 502 MW, an average near 1.1 MW per machine — while the Grand Prairie Wind project in Texas held the largest total nameplate capacity, at 1,027 MW from 365 turbines, an average close to 2.8 MW.

How fast wind speed actually rises with height is not a constant, though. It depends on surface roughness and, more strongly, on atmospheric stability — the same thermodynamic property that governs whether the lower atmosphere convects, discussed in the article on [lapse rates and atmospheric stability](/en/physics/climate-physics/atmospheric-structure-and-lapse-rate). A stable nocturnal boundary layer produces strong shear across the rotor plane; an unstable daytime one mixes it away. A single shear exponent fitted to annual mean data conceals a diurnal cycle that the blades experience directly.

## What fleets actually deliver

Extraction efficiency is not the quantity that determines annual energy. That is the [capacity factor](/en/glossary/capacity-factor) — generation divided by what the nameplate rating would have produced running flat out — and for wind it is dominated by the distribution of wind speeds at the site rather than by rotor aerodynamics. The EIA's Electric Power Monthly reports annual capacity factors for the U.S. utility-scale fleet:

| Year | Wind | Solar PV | Hydroelectric | Nuclear |
| --- | --- | --- | --- | --- |
| 2021 | 20.5% | 24.4% | 36.0% | 92.8% |
| 2022 | 23.1% | 24.4% | 36.3% | 92.7% |
| 2023 | 22.1% | 23.2% | 35.0% | 93.0% |
| 2024 | 25.0% | 23.2% | 34.6% | 90.8% |
| 2025 | 23.6% | 24.4% | 35.3% | 91.0% |

Values through 2024 are final; 2025 is preliminary. Two features deserve attention. The year-to-year movement in the wind row — from 20.5 per cent to 25.0 per cent and back to 23.6 per cent — is mostly weather, not fleet performance, which is why a single year's capacity factor is a poor description of a technology. And the comparison across columns is not a comparison of quality: a nuclear plant near 91 per cent and a wind fleet near 24 per cent are answering different questions, a point developed in the page on [what capacity factor does and does not measure](/en/physics/energy/capacity-factor-and-energy-metrics).

## Wakes, and the loss that exists only in arrays

A turbine leaves behind it a region of slower, more turbulent air. Downstream machines in that wake see reduced speed — cubed again in the power they can extract — and increased fatigue loading. Wake interaction is one of the major causes of wind plant underperformance, and it is a plant-scale effect that no single-turbine measurement can reveal.

It is also poorly constrained. The National Laboratory of the Rockies puts the uncertainty of current industry wake models such as FLORIS at 20 to 50 per cent, and mounted the AWAKEN field campaign — at a site between Ponca City and Enid in Oklahoma, with scanning radars, lasers and aircraft, collecting data from 2022 until July 2025 — with the stated aim of cutting that uncertainty in half or better. An uncertainty band of that width on a plant-level loss term is large enough to change an investment decision.

The modelling literature says something similar from the other direction. A study in *Wind Energy Science* comparing two planetary boundary layer schemes under the same wind farm parameterisation found plant average capacity factors ranging between 39.5 and 53.8 per cent across its simulations, with the two schemes differing in predicted in-plant wind speed deficit by between −0.20 and 0.22 m/s, or −2.2 to 2.4 percentage points. The authors concluded that the choice of boundary layer scheme is itself a meaningful source of modelled wind resource uncertainty. That is a statement about the model, not the atmosphere, and it belongs in any error budget quoted for a modelled yield. The stakes are not small: the IEA's *Renewables 2025* forecast has global wind capacity nearly doubling to over 2,000 GW by 2030, while the five-year outlook for offshore wind — where machines are largest and arrays densest — has been revised down by more than a quarter.

## What is still open

The unresolved physics is turbulence, which is the same obstacle that limits progress across [fluid dynamics more generally](/en/physics/mechanics-waves/fluid-dynamics-explained). A 2026 review in *Wind Energy Science* surveying the effect of atmospheric turbulence on turbine performance and loads concludes that despite extensive study of turbulence itself, significant gaps remain in understanding its impact on wind power resources and wind farm operations. Turbulence makes power output fluctuate and shortens component life through dynamic loading; combined with shear across the rotor plane it drives blade root fatigue in particular.

None of that is an argument against the technology, and none of it is captured by the Betz limit. It is an argument for reading a projected yield as a modelled quantity with a stated method, and for asking which boundary layer scheme, which wake model and which measurement campaign stand behind it — much as the variability itself has to be handled explicitly when the output reaches a network, the subject of the page on [integrating weather-driven generation](/en/physics/energy/grid-integration-of-variable-renewables).

## Sources

1. **IntechOpen, *Advances in Wind Power*** — [Wind Turbine Power: The Betz Limit and Beyond](https://doi.org/10.5772/52580). The 16/27 power coefficient, the optimum axial induction factor, the assumptions behind the derivation, and practical efficiencies near 40 per cent.
2. **U.S. Energy Information Administration** — [Capacity factors for utility-scale generators primarily using non-fossil fuels](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Annual capacity factors by technology, 2016–2025, and the final/preliminary status of each year.
3. **U.S. Energy Information Administration** — [Types of wind turbines](https://www.eia.gov/energyexplained/wind/types-of-wind-turbines.php). Turbine capacity ranges, physical dimensions, and project-level turbine counts and nameplate capacities.
4. **National Laboratory of the Rockies** — [AWAKEN wake experiment](https://www.nlr.gov/wind/awaken). Wake losses as a cause of plant underperformance, the 20–50 per cent uncertainty of current wake models, and the campaign design and duration.
5. **Wind Energy Science** — [The sensitivity of the Fitch wind farm parameterization to a three-dimensional planetary boundary layer scheme](https://wes.copernicus.org/articles/7/2085/2022/). Modelled capacity factor range and the wind speed deficit difference between boundary layer schemes.
6. **Wind Energy Science** — [Impact of atmospheric turbulence on performance and loads of wind turbines: knowledge gaps and research challenges](https://wes.copernicus.org/articles/11/509/2026/). Turbulence effects on power production and fatigue loading, and the outstanding research gaps.
7. **International Energy Agency** — [Renewables 2025, executive summary](https://www.iea.org/reports/renewables-2025/executive-summary). Global wind capacity trajectory to 2030 and the downward revision to the offshore forecast.
