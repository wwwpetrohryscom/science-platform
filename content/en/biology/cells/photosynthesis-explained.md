---
title: 'Photosynthesis: a photochemical device bolted to a slow enzyme'
excerpt: The light reactions are among the fastest and most efficient energy conversions in biology. The carbon-fixing enzyme they feed is one of the slowest and least specific. Most of what plants do about photosynthesis is a response to that mismatch.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - photosynthesis
  - rubisco
  - light-reactions
  - plant-biology
related:
  - what-is-a-cell
  - mitochondria-and-cellular-respiration
  - cell-membrane-structure-and-transport
  - primary-production-and-energy-flow
pillar: what-is-a-cell
_bodyHash: 5daaf15d
---

Two very different machines are joined inside a chloroplast. The first is a photochemical device that captures a photon and separates a charge in picoseconds, at a quantum efficiency most engineered systems cannot approach. The second is an enzyme that fixes carbon dioxide at a few molecules per second and cannot reliably tell CO₂ apart from O₂. Almost everything distinctive about plant physiology — the enormous investment in one protein, photorespiration, the repeated independent invention of C4 and CAM metabolism — is a consequence of that mismatch, and it is a better organising idea than the usual two-stage summary. Environmental responsiveness is one of the requirements that [distinguishes a cell from a bag of chemistry](/en/biology/cells/what-is-a-cell), and a chloroplast spends much of its regulatory capacity managing the enzyme downstream of the light.

## The antenna: catching a photon before it is wasted

A chlorophyll molecule that absorbs [a quantum of visible light](/en/glossary/photon) holds the excited state for about four nanoseconds in vivo — around six nanoseconds for the isolated pigment dissolved in solvent — before relaxing to the ground state and losing the energy. Four nanoseconds is a long time chemically and a very short time biologically, so a reaction centre that waited for photons to land on it directly would spend most of its existence idle.

The solution is an antenna. Light-harvesting complexes bind on the order of 200 chlorophylls per reaction centre and funnel absorbed energy inward by excitation transfer on femtosecond to picosecond timescales — fast enough that the excitation reaches a reaction centre long before it can decay. Measured light-harvesting-to-charge-separation efficiency for photosystem II in higher plants runs at 84–90 per cent, with quantum efficiencies across organisms and light conditions spanning roughly 50–90 per cent. That is the number that makes photosynthesis look impressive, and it is also the number most often quoted out of context: it describes what happens to a photon *after* it has been absorbed by the antenna, not what fraction of incident sunlight ends up as biomass.

## The strongest oxidant in biology

Photosystem II performs the step everything else depends on: it takes electrons from water. Removing the first electron from a water molecule requires more than 2 eV, which no ordinary biological cofactor can supply. Charge separation solves the problem by generating P680⁺, whose oxidation potential is estimated at +1.2 to +1.3 V — the highest known in biology.

That oxidant is applied to a manganese-calcium cluster, Mn₄CaO₅, four manganese ions and one calcium bridged by five oxygens, with water bound at the calcium and at the terminal manganese. The cluster accumulates oxidising equivalents across five states, S₀ to S₄, and releases O₂ only after four consecutive photochemical events — the four-flash periodicity that first revealed the mechanism.

The cost of running chemistry that aggressive is damage. Reactive oxygen species produced as a by-product limit the functional lifetime of photosystem II to about 30 minutes in normal light, though the complex completes more than 10⁵ reaction cycles before it must be replaced. Plants therefore maintain a continuous repair cycle for the complex — a permanent maintenance overhead that exists because the reaction is at the edge of what biological chemistry can do.

## Two photosystems in series

A single photochemical step cannot span the gap from water at +820 mV to NADP⁺ at roughly −320 mV, so the light reactions use two in series. Photosystem II raises electrons from water to an intermediate level; they fall through an electron-transport chain, pumping protons; photosystem I raises them again to reduce NADP⁺. Plotting potential against reaction step gives the characteristic Z shape.

The proton gradient built during that descent reaches 3 to 3.5 pH units across the thylakoid membrane, equivalent to a [proton-motive force](/en/glossary/proton-motive-force) of about 200 mV, and ATP synthase spends it exactly as [the inner mitochondrial membrane does](/en/biology/cells/mitochondria-and-cellular-respiration). Chemiosmosis is not an analogy between the two organelles; it is the same mechanism, running in the same direction, on a membrane with the same [near-total impermeability to protons](/en/biology/cells/cell-membrane-structure-and-transport) that makes any gradient storable.

## Rubisco, and the cost of an unreliable active site

The Calvin-Benson cycle consumes three ATP and two NADPH for every CO₂ fixed. Its first step is catalysed by ribulose bisphosphate carboxylase-oxygenase, and by two measures it is a poor enzyme. It is slow: more than 95 per cent of characterised Rubiscos catalyse only one to ten carboxylation reactions per second, against a median of about 79 reactions per second across characterised enzymes. And it is unselective, accepting O₂ in place of CO₂ and initiating photorespiration, a salvage pathway that consumes energy and releases carbon already fixed.

Plants compensate by brute force. Rubisco often exceeds 50 per cent of total chloroplast protein and is generally reckoned the most abundant protein on Earth; C3 plants dedicate up to a quarter of their leaf nitrogen to it. Even so, photorespiration costs C3 plants about a quarter of the carbon they fix — one of the largest routine inefficiencies in biology, and the reason the enzyme is a standing target for engineering.

Two things are worth being careful about here. Rubisco's slowness is not a design failure so much as a consequence of a demanding active site that must distinguish two small, similar, non-polar gases; catalytic rate and specificity trade off against one another across the enzyme's known variants. And photorespiration is not purely wasteful — the salvage pathway recovers most of the carbon and has been argued to have protective roles under stress.

## Two answers to the same problem

C4 and CAM metabolism solve the specificity problem the same way: raise the CO₂ concentration where Rubisco is working, so oxygenation becomes rare. They differ in whether the concentrating step is separated from fixation in space or in time.

| | C3 | C4 | CAM |
| --- | --- | --- | --- |
| CO₂ pre-concentration | none | in bundle-sheath cells | overnight, as malate in the vacuole |
| Separation from fixation | — | spatial | temporal |
| Stomata open | daytime | daytime | mainly at night |
| Extra ATP per CO₂ | none | yes | yes |
| Independent evolutionary origins | ancestral | more than 60 | at least 66 |

The recurrence is the striking part. C4 photosynthesis has evolved from C3 ancestors on more than 60 separate occasions — by one count nearly 70 — and a [2023 survey in *Annals of Botany*](https://academic.oup.com/aob/article/132/4/627/7271350) documents direct evidence for CAM in 370 genera across 38 families, estimating that around 7 per cent of vascular plants are CAM-capable, from a minimum of 66 independent origins. Convergence on this scale means the underlying C3 machinery is unusually easy to modify in this particular direction.

The payoff is water. Because a C4 leaf can fix carbon at a lower internal CO₂ concentration, it can hold its stomata narrower for the same carbon gain, and fixes roughly twice as much net carbon per unit of water lost as a C3 leaf. CAM pushes that further by opening stomata at night, when evaporative demand is lowest. Both pathways are common in hot, dry and open environments. C4 is conspicuously rare in trees, and the reason is not obvious: the intuitive explanation — that C4 performs badly in the shade of a closed canopy — is only partly supported, since at least one C4 tree lineage uses sunflecks about as efficiently as a comparable C3 tree. A [2020 review in the *Journal of Experimental Botany*](https://pmc.ncbi.nlm.nih.gov/articles/PMC7410182/) argues instead for a set of interacting constraints, including the way trees load phloem passively and an adaptive trough that intermediate C3-C4 states have to cross.

## The ceiling, and where efficiency claims go wrong

The theoretical maximum conversion efficiency for C3 crops — incident solar energy to biomass — has been assessed at 0.046 to 0.051, or 4.6 to 5.1 per cent. The best conversion efficiency actually observed in the field is about 0.024, roughly half the theoretical value. Those numbers are far below the 84–90 per cent quoted earlier for charge separation, and both are correct: they measure different things. The antenna figure is a quantum efficiency for absorbed photons. The crop figure includes photons not absorbed at all, energy lost as heat during photoprotection, respiration by the plant itself, and the fraction of biomass that never reaches a harvestable organ. Any claim about photosynthetic efficiency is uninterpretable without knowing which boundary it was drawn around — the same problem that makes [gross and net primary production](/en/ecology/ecosystems/primary-production-and-energy-flow) two very different quantities at ecosystem scale.

Three further cautions apply. Rubisco kinetics are mostly measured in vitro at controlled temperature and gas concentration, while the oxygenation fraction in a real leaf depends on temperature, stomatal behaviour and internal CO₂ drawdown, all of which vary through a day. The C4 water-use advantage is condition-dependent rather than fixed: it is largest where heat, light and evaporative demand are high, and the maximum quantum yield of C4 photosynthesis is inherently lower than that of C3 because the concentrating step costs extra ATP. And the efficiency gap between theoretical and observed values is often presented as available headroom for crop improvement. The review those figures come from does see clear scope for improvement, but closing the gap would take coordinated changes to several biochemical pathways at once rather than one adjustment — a target rather than an achieved result.

## Sources

1. **NIH / NLM, NCBI Bookshelf** — [Chloroplasts and Photosynthesis, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26819/). Calvin-Benson stoichiometry, Rubisco abundance and rate, the thylakoid proton gradient, and the C4 water-use comparison.
2. **Photosynthesis Research (PubMed Central)** — [Water oxidation in photosystem II](https://pmc.ncbi.nlm.nih.gov/articles/PMC6763417/). The P680⁺ oxidation potential, the Mn₄CaO₅ cluster, the S-state cycle, and photodamage limits.
3. **The Royal Society** — [Photosynthetic light harvesting: excitons and coherence, Journal of the Royal Society Interface](https://royalsocietypublishing.org/rsif/article/11/92/20130901/64425/Photosynthetic-light-harvesting-excitons-and). Antenna size per reaction centre, energy-transfer timescales, and measured quantum efficiencies.
4. **Annual Review of Plant Biology (PubMed Central)** — [Prospects for Engineering Biophysical CO₂ Concentrating Mechanisms into Land Plants to Enhance Yields](https://pmc.ncbi.nlm.nih.gov/articles/PMC7845915/). Rubisco turnover rates, leaf-nitrogen allocation, and the carbon cost of photorespiration in C3 plants.
5. **New Phytologist (PubMed Central)** — [Enhancing crop yields through improvements in the efficiency of photosynthesis and respiration](https://pmc.ncbi.nlm.nih.gov/articles/PMC10100352/). Theoretical and observed solar-energy conversion efficiencies for C3 crops.
6. **Oxford University Press** — [The CAM lineages of planet Earth, Annals of Botany](https://academic.oup.com/aob/article/132/4/627/7271350). CAM genera, families, share of vascular plants, and count of independent origins.
7. **Journal of Experimental Botany (PubMed Central)** — [Why is C4 photosynthesis so rare in trees?](https://pmc.ncbi.nlm.nih.gov/articles/PMC7410182/). Number of independent C4 origins and the constraints on C4 in woody plants.
