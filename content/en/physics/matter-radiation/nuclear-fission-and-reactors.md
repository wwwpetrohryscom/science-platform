---
title: 'Fission reactors: the neutron budget and the heat that does not switch off'
excerpt: A fission does not release all its energy at once. That single fact — a delayed remainder arriving over hours and years — shapes reactor control, shutdown cooling and spent-fuel handling more than any other feature of the physics.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - nuclear-fission
  - reactor-physics
  - decay-heat
  - nuclear-fuel-cycle
  - neutron-moderation
related:
  - atomic-and-nuclear-physics-explained
  - radioactivity-and-radiation-units
  - nuclear-fusion-fundamentals
  - ionising-radiation-exposure-and-risk
pillar: atomic-and-nuclear-physics-explained
---

Start with the arithmetic of one event, because everything difficult about reactors is visible in it.

Take the IAEA's evaluated binding energies, and the position on [the binding-energy curve that governs both fission and fusion](/en/physics/matter-radiation/atomic-and-nuclear-physics-explained) that uranium occupies. Uranium-235 is bound at 7590.9151 keV per nucleon, so the whole nucleus holds 1783.9 MeV. Split it one way — into krypton-92 and barium-141, releasing three neutrons — and the products hold 1957.1 MeV, a release of about 173 MeV. Split it another way, into the beta-stable end products molybdenum-95 and lanthanum-139 with two neutrons, and the release is about 202 MeV.

Both are correct. They differ because the first pair are themselves radioactive, and the roughly 29 MeV between the two figures is not released at the moment of fission at all. It arrives afterwards, over seconds to decades, as the fragments beta-decay toward stability — and a substantial share of it leaves as antineutrinos that deposit essentially nothing anywhere. That deferred remainder is decay heat, and it is the reason a shut-down reactor is still a thermal management problem.

## Where the fragments actually land

Fission is not a bisection. Querying the IAEA's evaluated cumulative fission yields for thermal-neutron fission of uranium-235 gives a strongly asymmetric mass distribution: a heavy peak around mass number 134, with a chain yield of 7.79 per cent, and a light peak around mass 95 at 6.50 per cent. The symmetric split, at mass 118, has a chain yield of 0.014 per cent — roughly five hundred times less likely than the favoured asymmetric outcome.

Summed across all mass chains, those yields total 2.0032, which is the expected sanity check: two fragments per fission. The asymmetry itself is a structural effect rather than a statistical accident, and it was already a target for explanation in Bohr and Wheeler's 1939 liquid-drop treatment of the fission mechanism.

The practical consequence is that a reactor manufactures a specific and predictable inventory of isotopes — iodine, caesium, strontium, xenon and their neighbours — rather than a random assortment. Which ones matter for radiological protection depends on their half-lives and emission types, the subject taken up in [what activity and dose units each measure](/en/physics/matter-radiation/radioactivity-and-radiation-units).

## The neutron budget

Each fission also frees neutrons — more than one, on average, which is the entire basis of a chain reaction. Whether the chain sustains itself depends on a budget: neutrons produced per generation against neutrons lost to absorption in fuel, structure, coolant and the outside world. When production exactly replaces losses the system is critical, and a reactor at steady power is a system held at that balance point on purpose.

Two things make the budget easier to close. The first is moderation. Slow neutrons are far more likely to induce fission in uranium-235 than fast ones, so most power reactors surround the fuel with a light nucleus that absorbs little and scatters efficiently. The US Department of Energy's description of a water-cooled reactor puts both jobs on the same fluid: "the moderator helps slow down the neutrons produced by fission to sustain the chain reaction" while the same water carries heat away.

The second is enrichment. Natural uranium is 0.7204 per cent uranium-235 by the IAEA's abundance table — "just over 0.7% of natural uranium" in the EIA's phrasing — and commercial fuel raises that to 3–5 per cent. Because the two isotopes are chemically identical, that step exploits the mass difference alone, which is why enrichment capacity rather than uranium supply is the constraint that matters politically.

The resulting fuel is geometrically specific: ceramic pellets in tubes "about 1 centimeter in diameter", 179 to 264 rods per assembly, 121 to 193 assemblies in a core, with about a third of the core replaced every 12 to 24 months.

## Why the reaction can be controlled at all

Prompt neutrons appear effectively at the instant of fission. If they were the whole population, a reactor's response to any change in reactivity would run far faster than mechanical linkages or human judgement, and holding a plant at steady power would not be a tractable control problem.

What rescues the situation is a small population of neutrons that arrive late. Certain fission products beta-decay into excited states that immediately emit a neutron. Bromine-87, with a half-life of 55.68 seconds, does this in 2.6 per cent of its decays; iodine-137, half-life 24.5 seconds, in 7.14 per cent. Summing the IAEA's evaluated thermal fission yields against the beta-delayed neutron branching ratios in the same dataset gives roughly 0.016 delayed neutrons per fission — well under one per cent of the total neutron production.

That fraction of a per cent sets the timescale of reactor control. Held just below prompt criticality, the chain reaction cannot change power faster than the delayed group allows, which is seconds rather than microseconds. Reactivity control — absorber rods, dissolved neutron poisons, coolant density — works on that timescale because the delayed neutrons create it.

## The families of reactor, and what distinguishes them

Reactor designs differ mainly in what moderates the neutrons and what removes the heat, and those two choices propagate into everything else.

| Family | Moderator | Coolant | Fuel |
| --- | --- | --- | --- |
| Pressurised water | Light water | Pressurised light water, separate steam loop | Enriched uranium oxide |
| Boiling water | Light water | Light water boiling in the vessel | Enriched uranium oxide |
| Heavy water | Heavy water | Heavy water | Natural or slightly enriched uranium oxide |
| Graphite-moderated, gas-cooled | Graphite | Carbon dioxide or helium | Enriched uranium oxide |
| Fast spectrum | None | Liquid metal or gas | Higher-enrichment uranium or plutonium |

The DOE notes that more than 65 per cent of US commercial reactors are pressurised-water designs, with roughly a third boiling-water. The heavy-water route buys the ability to run on natural uranium, at the cost of producing an expensive moderator. The fast-spectrum route deliberately gives up moderation, which makes the neutron economy harder but opens access to isotopes that thermal neutrons will not fission.

Whichever family, the plant downstream of the core is a steam cycle, and its efficiency is bounded by the same reservoir-temperature argument that limits [any heat engine](/en/physics/thermodynamics/heat-engines-and-efficiency-limits). Nuclear steam conditions are relatively cool, so thermal efficiency is modest; the offsetting characteristic is availability, and the EIA reports an average annual capacity factor of 91 per cent for US nuclear plants in 2025, a figure whose meaning is unpacked in [how capacity factor is defined](/en/physics/energy/capacity-factor-and-energy-metrics).

## The heat that shutdown does not remove

Insert every control rod and the chain reaction stops within seconds. The 29 MeV of deferred energy identified at the top of this article does not stop, because it is being delivered by the decay of an inventory of fission products that is already there.

Immediately after shutdown this residual output is a small percentage of full thermal power — the deferred share identified above, less whatever the antineutrinos carry off — and that is enough that a large reactor still needs active heat removal. It falls steeply over the first hours and then slowly, which is why spent fuel is moved to water pools rather than straight into storage. Measurements make the persistence concrete: a calorimetric dataset for five used pressurised-water assemblies covers cooling times from 4.5 to 21.4 years after discharge at burnups of 50.3 to 55.1 MWd/kgU, and those assemblies were still generating measurable heat at the end of that span.

Decay heat is therefore not a failure mode. It is a permanent property of the fuel, present in normal operation, present during refuelling, present in storage, and the design problem it poses is the removal of a declining but never-zero thermal load.

## The inventory that leaves the plant

The DOE's Office of Nuclear Energy puts US commercial spent fuel generation at "about 2,000 metric tons" a year and the cumulative total at "about 90,000 metric tons" since the 1950s, stored at more than 70 reactor sites in 35 states, first in pools and later in dry casks. The same source notes that "more than 90% of its potential energy still remains in the fuel", which is a statement about the neutron economy rather than about chemistry: thermal reactors fission only a small part of the heavy nuclei loaded into them.

Two cautions belong with those figures. They are national, from a fleet the EIA gives as 96 operating reactors at 57 plants across 28 states, and they do not translate to countries that reprocess. And mass is the wrong quantity for judging a waste stream in isolation, because national inventories are reported in categories defined by regulation rather than by physics, and the categories differ by orders of magnitude in both volume and activity concentration. A tonnage quoted without saying which category produced it is not comparable to anything.

The deeper limit on this accounting is that decay-heat and inventory figures are functions of irradiation history — burnup, enrichment, cooling time, fuel type — so a single quoted value describes one fuel history and not the technology. That sensitivity is also why disposal timescales are argued in terms of specific nuclides rather than bulk mass, and why the exposures involved sit in the range where [the epidemiology is least able to resolve an effect](/en/physics/matter-radiation/ionising-radiation-exposure-and-risk). Fission's engineering problem is fundamentally one of managing what the fragments do afterwards; the alternative approach of moving up the binding-energy curve instead of down it, treated in [the confinement problem for fusion](/en/physics/matter-radiation/nuclear-fusion-fundamentals), trades that inventory for a different set of difficulties.

## Sources

1. **IAEA Nuclear Data Services** — [Livechart of Nuclides](https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html). Binding energies, uranium-235 abundance, and the half-lives and beta-delayed neutron branches of bromine-87 and iodine-137.
2. **IAEA Nuclear Data Services** — [Livechart data download API](https://www-nds.iaea.org/relnsd/vcharthtml/api_v0_guide.html). The cumulative fission-yield endpoint used for the mass-yield distribution.
3. **Physical Review** — [The mechanism of nuclear fission](https://doi.org/10.1103/PhysRev.56.426). Bohr and Wheeler's liquid-drop account of the fission process and its asymmetry.
4. **US EIA** — [The nuclear fuel cycle](https://www.eia.gov/energyexplained/nuclear/the-nuclear-fuel-cycle.php). Enrichment levels, fuel assembly geometry and refuelling intervals.
5. **US EIA** — [US nuclear industry](https://www.eia.gov/energyexplained/nuclear/us-nuclear-industry.php). Operating reactor count, capacity and capacity factor.
6. **US DOE Office of Nuclear Energy** — [Nuclear 101: how does a nuclear reactor work](https://www.energy.gov/ne/articles/nuclear-101-how-does-nuclear-reactor-work). Moderator and coolant roles and the share of US reactors by type.
7. **US DOE Office of Nuclear Energy** — [Five fast facts about spent nuclear fuel](https://www.energy.gov/ne/articles/5-fast-facts-about-spent-nuclear-fuel). Spent fuel quantities, storage arrangements and unused fuel energy.
8. **Data in Brief** — [Calorimetric decay heat measurements of five used PWR fuel assemblies](https://pmc.ncbi.nlm.nih.gov/articles/PMC6926112/). Cooling times and burnups over which decay heat remains measurable.
