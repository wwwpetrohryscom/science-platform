---
title: 'Heat transfer: three mechanisms that scale differently with temperature'
excerpt: Conduction and convection rise roughly in step with a temperature difference; radiation rises as the fourth power of absolute temperature. That difference in exponent decides which mechanism dominates, and it changes with the working temperature.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - heat-transfer
  - conduction
  - convection
  - thermal-radiation
  - emissivity
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - solar-radiation-and-earth-energy-balance
pillar: laws-of-thermodynamics-explained
_bodyHash: 1cc6a542
---

Take a surface sitting at 500 K in surroundings at 300 K, then raise it to 1,500 K. The temperature difference driving conduction and convection grows sixfold. The net radiative flux grows by a factor of about 93, from roughly 3.1 kW m⁻² to 287 kW m⁻². Nothing about the materials has changed; the exponents have. Conduction and convection are driven by a temperature *difference*, radiation by the difference of fourth powers of *absolute* temperature, and that mismatch is why the dominant loss path in a cryostat, a house wall and a turbine casing is a different one in each case.

Thermodynamics fixes which direction energy moves and how much work can be extracted along the way, as [the four laws set out](/en/physics/thermodynamics/laws-of-thermodynamics-explained), but it puts no clock on the process. Rate is a separate subject, and it has only three mechanisms.

## Conduction: a gradient law whose coefficient is not a constant

Conduction carries energy through a stationary medium by molecular or electronic collisions. Fourier's law states the flux as proportional to the local temperature gradient, with the constant of proportionality the thermal conductivity, k. Across a plane slab in steady state this reduces to a flux of kΔT/L, so halving a wall's thickness doubles its loss, and layers in series add resistances rather than conductances.

The tidy form conceals how much work the coefficient is doing. NIST's cryogenic materials database publishes curve fits for oxygen-free copper valid from 4 K to 300 K and stated to lie within 1–2% of the underlying data. Evaluated at 300 K, the fits give roughly 390–400 W m⁻¹ K⁻¹ for every purity grade in the table — at room temperature, impurity content barely matters. Evaluated at 20 K, the same fits give about 1.4 × 10³ W m⁻¹ K⁻¹ for a residual-resistance ratio of 50 and about 6.6 × 10³ for a ratio of 500. Same element, same equation, nearly a factor of five between two batches of copper that are chemically almost identical.

Interfaces complicate the picture further. Two solids pressed together touch only at asperities, so a real joint carries a temperature step that no bulk conductivity predicts. In laminated or bolted assemblies the contact resistance is often the largest term in the stack, which is why thermal design that stops at material properties tends to be optimistic.

## Convection: the mechanism whose coefficient is measured, not derived

The convective expression — flux equals h times the surface-to-fluid temperature difference — looks like a physical law and is closer to a definition. The heat transfer coefficient h absorbs everything the equation left out: flow velocity, geometry, orientation, surface condition, and the fluid's viscosity, density, conductivity and specific heat.

Because h cannot be derived from first principles for realistic geometries, it is obtained from correlations among dimensionless groups — Nusselt from Reynolds and Prandtl in forced flow, from Rayleigh in free convection. Those correlations are fits to particular experiments over particular ranges, and their accuracy is a matter of tens of per cent rather than per cent. Design margin in heat-exchanger sizing exists largely because of this, and the failure mode is using a correlation outside the geometry or flow regime it was fitted for.

Convection also explains most of what insulation does. Fibrous and foam insulations work primarily by immobilising air in pores small enough to suppress circulation, not because the solid matrix conducts poorly; a sealed gas gap in a window is sized to be thin enough that buoyancy-driven flow cannot get started. Widen the gap and the loss increases even though more gas now separates the panes.

## Radiation: the fourth power changes the arithmetic

Every surface above absolute zero emits electromagnetic radiation at a rate given by the Stefan–Boltzmann law: εσT⁴, with σ = 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴, a value the SI now fixes exactly because it follows from other defined constants. Net exchange between a surface and its surroundings goes as the difference of fourth powers.

Two consequences follow from the exponent. A black surface at 300 K emits about 459 W m⁻², which sounds enormous until you subtract the 459 W m⁻² arriving back from surroundings at the same temperature; the net is what matters, and a 10 K excess over ambient nets only about 64 W m⁻² — comparable to free convection in air, and therefore never negligible near room temperature. At 1,500 K the same surface emits about 287 kW m⁻², and radiation stops competing with the other two mechanisms and starts dominating them.

The other lever is spectral. **Emissivity** is the ratio of a surface's emission to that of a perfect emitter, and Kirchhoff's law ties it to absorptivity at the same wavelength and direction. Because sunlight arrives at short wavelengths while a surface near ambient temperature emits in the thermal infrared, a coating can be built that reflects the first band and radiates strongly in the second. The sharpest demonstration is an apparatus reported in [*Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/) that reached an average of 37 °C below ambient air temperature over a full day–night cycle, with a maximum depression of 42 °C, using an emitter tuned to the 8–13 µm atmospheric window. It also shows how weak the effect is against competition: the assembly needed a vacuum chamber at 10⁻⁶ Torr and ten concentric radiation shields to keep conduction and convection from erasing the radiative deficit. The unshielded version of the same physics is a cool roof, for which the U.S. Environmental Protection Agency reports maximum indoor temperature reductions of 1.2–3.3 °C in buildings without air conditioning and peak cooling-demand reductions of 11–27% in buildings with it.

| Mechanism | What drives it | How it scales | What you change to control it |
| --- | --- | --- | --- |
| Conduction | Temperature gradient in a medium | Linear in ΔT, inverse in path length | Conductivity, thickness, contact quality |
| Convection | Surface-to-fluid difference plus flow | Linear in ΔT, with h set by flow and geometry | Velocity, gap size, phase change |
| Radiation | Absolute temperature of both surfaces | Difference of fourth powers | Emissivity, spectral selectivity, view factor |

## Two systems where the mix is the whole design

A gas turbine blade is a conduction-and-convection problem created by a thermodynamic wish. Cycle efficiency rises with inlet temperature, so programmes funded by the U.S. Department of Energy have targeted turbine inlet temperatures of 1,700 °C or higher — knowingly beyond the melting point of the substrate alloy — and rely on transpiration and lattice cooling to hold a gradient across a few millimetres of metal. The component survives not because the material tolerates the gas temperature but because the transport is engineered; the efficiency motive behind it is set out in [heat engines and their efficiency limits](/en/physics/thermodynamics/heat-engines-and-efficiency-limits).

A planet is the opposite case. Within the Earth system, convection and evaporation move most of the energy: NASA's accounting has about 340 W m⁻² arriving at the top of the atmosphere on a global average, 29% reflected, 23% absorbed in the atmosphere and 48% at the surface; of that same incoming total, 25% leaves the surface again by evaporation and 5% by thermals, against a net 17% as infrared. But space is a vacuum, so neither of those mechanisms can carry a joule beyond the top of the atmosphere: the only exit is radiation, from a body that looks from outside like a surface at about −20 °C. How the spectral detail of that emission works is taken up in [radiative transfer through an atmosphere](/en/physics/climate-physics/radiative-transfer-explained) and in the thermodynamic framing of [the planetary energy budget](/en/physics/thermodynamics/earth-energy-budget-and-the-second-law), while the incoming half of the balance is covered in [solar radiation and the Earth's energy balance](/en/physics/energy/solar-radiation-and-earth-energy-balance).

## What the coefficients cannot resolve

Each mechanism carries a different kind of uncertainty, and they are not interchangeable. Conductivity is well measured for pure materials in controlled conditions, but an insulation's in-service value drifts with moisture, compression and ageing, and a wall assembly's real performance is usually set by thermal bridges rather than by the value printed on the product. Convective coefficients inherit the scatter of the experiments the correlations were fitted to. Emissivity is the weakest link of the three: a single datasheet number is an average over wavelength, angle and surface condition, and oxidation or dust can move it substantially over a component's life.

There is also a boundary where Fourier's law itself stops applying. At length scales comparable to the mean free path of the energy carriers, or on timescales shorter than their scattering time, transport becomes ballistic rather than diffusive, and a gradient-driven description no longer holds. That regime matters for microelectronics and for thin-film thermoelectrics, and it is a reminder that all three expressions above are continuum approximations with a domain of validity rather than laws in the sense the thermodynamic ones are.

## Sources

1. **NIST Cryogenic Technologies Group** — [Material properties: OFHC copper](https://trc.nist.gov/cryogenics/materials/OFHC%20Copper/OFHC_Copper_rev1.htm). Thermal conductivity curve fits from 4 K to 300 K by residual-resistance ratio, with stated fit accuracy.
2. **NIST CODATA** — [Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Exact value and units used for the radiative flux calculations here.
3. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Global-average partition of incoming solar energy and the surface energy pathways.
4. **Nature Communications** — [Radiative cooling to deep sub-freezing temperatures through a 24-h day–night cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/). Sub-ambient cooling magnitudes and the vacuum and shielding needed to isolate the radiative term.
5. **U.S. Environmental Protection Agency** — [Using cool roofs to reduce heat islands](https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands). Measured indoor temperature and peak cooling-demand effects of high-reflectance roofing.
6. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems developed by additive manufacturing with ODS alloys](https://www.osti.gov/biblio/1923377). Target turbine inlet temperatures above the substrate melting point and the cooling approach used to reach them.
