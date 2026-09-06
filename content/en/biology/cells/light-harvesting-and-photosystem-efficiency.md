---
title: 'Light harvesting and photosystem efficiency: the most efficient converter in nature'
metaTitle: 'Light harvesting: the most efficient converter in nature'
excerpt: Photosystem I converts nearly every absorbed photon into a charge separation. That near-perfect internal efficiency sits inside an overall process that is famously inefficient, and the gap between the two is where the interesting biology is.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - photosynthesis
  - energy-transfer
  - biophysics
  - cell-biology
related:
  - photosynthesis-explained
  - what-is-a-cell
  - fluorescence-as-a-measure-of-photosynthesis
  - light-in-the-ocean-and-the-photic-zones
_bodyHash: 6c02c0ef
pillar: what-is-a-cell
---

Photosynthesis is what makes [a plant cell](/en/biology/cells/what-is-a-cell) an energy converter, and it is routinely described as inefficient. At the level of sunlight-to-biomass it is. At the level of the first physical step it is the opposite, and holding both facts at once is what makes the process legible.

## Near-perfect at the first step

A 2013 review in *Photosynthesis Research* states the figure for Photosystem I without hedging: "the internal quantum efficiency is close to 100 % which makes PSI the most efficient energy converter in nature."

Internal quantum efficiency here means the probability that a photon absorbed anywhere in the complex ends up driving a charge separation at the reaction centre rather than being lost as heat or re-emitted as fluorescence. Close to unity means essentially every absorbed photon does useful work.

## Why that is hard

The difficulty is one of distance and time. The reaction centre is a single site; the absorbing pigments are many, and most of them are nowhere near it. The review gives the count: "In total, the PSI-LHCI complex of higher plants contains 173 chlorophyll molecules."

An excitation created on any one of those 173 has to migrate to the reaction centre before it decays. Isolated chlorophyll in solution loses its excitation in a few nanoseconds; the transfer must beat that comfortably, and it does. The review reports the timescale: "on average it takes around 50 ps for the excitation to reach the RC in plants, without being quenched in the meantime."

Fifty picoseconds against a nanosecond-scale decay is a factor of twenty or more in the system's favour, and that ratio is the efficiency. The complex is not efficient because its chemistry is exceptional but because its geometry makes the useful process much faster than the wasteful ones.

## Where the overall efficiency goes

If the first step is near-perfect, the losses are downstream and upstream of it. They are worth listing because each is a different kind of constraint.

**Spectral coverage.** Chlorophyll absorbs strongly in the blue and red and weakly in the green, so a large part of the solar spectrum passes through a leaf without being absorbed at all. This is a property of the pigment, not of the machinery around it.

**Energy above the gap.** A blue photon carries more energy than a red one, but both drive the same charge separation, and the excess is thermalised within picoseconds. The loss is structurally identical to the one that caps [single-junction photovoltaics](/en/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

**Carbon fixation.** Rubisco is slow and reacts with oxygen as well as carbon dioxide, and recovering from that costs energy. Almost all of photosynthesis's reputation for inefficiency is earned here rather than in the [light reactions](/en/biology/cells/photosynthesis-explained).

**Photoprotection.** Under high light, plants deliberately dissipate absorbed energy as heat to avoid damage. That is efficiency traded for safety, and it is regulated rather than accidental.

## Why the fluorescence matters more than its size

The small fraction of excitations that are re-emitted rather than used is, from the plant's point of view, a rounding error. From an observer's point of view it is the only part of the process visible from outside.

Because fluorescence competes with photochemistry for the same excitations, its yield rises when photochemistry slows — which makes it a proxy for what the machinery is doing. That is the basis for [measuring photosynthesis from orbit](/en/ecology/earth-observation/fluorescence-as-a-measure-of-photosynthesis), and it works precisely because the internal efficiency is so high that the leftover signal tracks the process rather than the pigment.

## The comparison worth making

A photosystem and a solar cell both convert photons into separated charge, and both are bounded by the same thermodynamics. The photosystem wins decisively on internal quantum efficiency and loses decisively on everything after it, because it is optimised to make chemistry under variable light without breaking, rather than to maximise power under standard illumination.

Comparing the two on a single efficiency figure therefore compares different quantities. The useful comparison is structural: both spend most of their theoretical headroom on spectral mismatch, and both have a first step that is far better than the system containing it.

## Sources

1. **Photosynthesis Research (PMC)** — [Light-harvesting in photosystem I](https://pmc.ncbi.nlm.nih.gov/articles/PMC3825136/). The near-100% internal quantum efficiency, the 173 chlorophylls of PSI-LHCI, and the ~50 ps trapping time.
2. **Geophysical Research Letters (PMC)** — [Global retrievals of solar induced chlorophyll fluorescence with TROPOMI](https://pmc.ncbi.nlm.nih.gov/articles/PMC7580822/). Fluorescence as the observable remainder of the same process.
3. **NOAA Ocean Service** — [How far does light travel in the ocean?](https://oceanservice.noaa.gov/facts/light_travel.html). The light field the aquatic version of this machinery operates in.
