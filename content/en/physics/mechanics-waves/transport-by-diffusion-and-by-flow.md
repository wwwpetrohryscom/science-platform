---
title: 'Transport by diffusion and by flow: the crossover that organises biology and the ocean'
metaTitle: 'Transport by diffusion and by flow: where the crossover falls'
excerpt: Diffusion beats flow at small scales and loses badly at large ones, and the crossover falls at a distance you can state. Where a system sits relative to it explains cell size, capillary spacing, and why the ocean needs to be stirred.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - diffusion
  - transport
  - fluid-dynamics
  - scaling
related:
  - fluid-dynamics-explained
  - life-at-low-reynolds-number
  - diffusion-limits-on-body-size
  - stratification-mixing-and-nutrient-supply
_bodyHash: 9ac88d36
pillar: classical-mechanics-explained
---

Two mechanisms move dissolved material, and [classical mechanics](/en/physics/mechanics-waves/classical-mechanics-explained) describes both: random molecular motion, and bulk motion of the fluid carrying it. They scale differently with distance, and the difference is not a matter of degree. Diffusion time grows as the square of the distance; transport by flow grows linearly. Whichever is faster at one scale must therefore lose at some larger one.

That is why the same physical argument keeps reappearing in unrelated fields, and why the interesting question in each is where the crossover falls.

## Where the crossover falls in tissue

The NIH's *Regulation of Tissue Oxygenation* gives the numbers for the case that has been studied hardest. "Diffusion is an efficient transport process over short distances (<100 μm)", and beyond that a body must use "bulk flow (convection) to reduce the effective distance between the pumping action of the heart and the various parts of an organism", bringing blood to within "<10 μm" of the cells it supplies.

So the architecture is explicit: flow over centimetres, diffusion over microns, and a branching structure whose entire purpose is to hand over between them at the right scale. Above about a millimetre in radius, diffusion alone cannot supply an organism at all — the source states the critical radius as "about 1 mm" — and the [limit on body size](/en/biology/physiology/diffusion-limits-on-body-size) follows immediately.

## Where the crossover cannot be crossed

Below the crossover, flow is not merely unnecessary but unavailable. At low [Reynolds number](/en/physics/mechanics-waves/fluid-dynamics-explained) there is no turbulence to stir with, and a body that stops pushing stops instantly. A bacterium therefore has no option to switch mechanisms: everything it acquires arrives by diffusion, and its size, its sensing precision and its swimming strategy are all consequences of being stuck on that side of the line. That is the content of [life at low Reynolds number](/en/physics/mechanics-waves/life-at-low-reynolds-number).

It also sets a hard limit on information. Berg and Purcell's analysis of concentration measurement gives the attainable fractional error as "approximately (TcaD)^-1/2, where D is diffusion constant of the attractant" — the diffusion constant appearing directly in what a cell can know, because diffusion is what brings the molecules that constitute the measurement.

## Where the crossover organises an ocean

The same argument at eleven orders of magnitude larger scale explains why the sea is layered. Vertical exchange in the ocean is not driven by diffusion in any useful sense; molecular diffusion over hundreds of metres would take geological time. It happens by mixing, and mixing is suppressed by density stratification.

NOAA describes the structure this produces: a thermocline is "the transition layer between warmer mixed water at the ocean's surface and cooler deep water below", in which "the temperature decreases rapidly from the mixed layer temperature to the much colder deep water temperature." The layer is "semi-permanent in the tropics, variable in temperate regions (often deepest during the summer), and shallow to nonexistent in the polar regions."

Where that barrier is strong, nutrients consumed at the surface are not replaced from below, and the surface becomes a desert regardless of how much light it receives. Where wind breaks it, they are — which is why [stratification and mixing](/en/ecology/oceans/stratification-mixing-and-nutrient-supply) determine productivity more directly than sunlight does.

## The general form

Three things recur across the cases, and they are worth stating as a pattern rather than as three coincidences.

**The crossover scale is a design parameter, not an accident.** Capillary spacing, alveolar dimensions, root hair length, the thickness of a biofilm's active layer: all sit near the distance at which diffusion stops being fast enough for the relevant consumption rate.

**Consumption sets the scale as much as diffusion does.** The distance over which diffusion suffices depends on how fast the material is being used up at the far end. A slowly respiring tissue tolerates a longer path than a fast one, which is why the same physics gives different answers in different tissues.

**Where flow is unavailable, size is capped.** Systems that cannot stir — a single cell, a still pond's sediment, the interior of a cell cluster — are bounded in extent by diffusion, and grow only by changing shape to keep everything near a surface.

## Sources

1. **NCBI Bookshelf** — [The circulatory system and oxygen transport, in *Regulation of Tissue Oxygenation*](https://www.ncbi.nlm.nih.gov/books/NBK54112/). The 100 μm and 10 μm distances, the 1 mm critical radius, and the role of bulk flow.
2. **Biophysical Journal (PMC)** — [Physics of chemoreception](https://pmc.ncbi.nlm.nih.gov/articles/PMC1473391/). The diffusion constant in the bound on measurement precision.
3. **NOAA Ocean Service** — [What is a thermocline?](https://oceanservice.noaa.gov/facts/thermocline.html). The layered structure that suppresses vertical exchange, and its regional variation.
