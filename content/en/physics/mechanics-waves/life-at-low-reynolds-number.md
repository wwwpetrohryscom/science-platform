---
title: 'Life at low Reynolds number: why a bacterium cannot coast'
metaTitle: 'Life at low Reynolds number: why a bacterium cannot coast'
excerpt: Below a Reynolds number of about one, inertia is irrelevant and a swimmer that repeats its motion in reverse returns exactly where it started. That constraint — Purcell's scallop theorem — determines what shapes of propulsion are available to anything small.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - fluid-dynamics
  - reynolds-number
  - microswimmers
  - biophysics
related:
  - fluid-dynamics-explained
  - classical-mechanics-explained
  - the-limits-of-chemical-sensing
  - transport-by-diffusion-and-by-flow
_bodyHash: 3ec71339
pillar: classical-mechanics-explained
---

Newtonian mechanics governs a swimmer as it governs a planet, but [the classical framework](/en/physics/mechanics-waves/classical-mechanics-explained) yields wildly different behaviour depending on one dimensionless number. The Reynolds number is the ratio of inertial to viscous forces, and [fluid dynamics](/en/physics/mechanics-waves/fluid-dynamics-explained) turns on it: a ship and a bacterium are not the same problem at two scales but two different physical regimes, because in one inertia dominates and in the other it is absent.

For a bacterium the value is extraordinarily small. The micro-scale swimmer built by Qiu and colleagues to test the point operated at Reynolds numbers of 1.4 × 10⁻⁴ to 3 × 10⁻³ — four orders of magnitude below unity. At those values a body that stops pushing stops moving, over a distance far shorter than its own length. There is no coasting.

## The scallop theorem

The consequence Edward Purcell drew from this is the sharpest result in the subject, and it is a statement about symmetry rather than about force. The authors of the 2014 *Nature Communications* study state it in his terms: "If a low-Reynolds number swimmer executes geometrically reciprocal motion… then the net displacement of the swimmer must be zero, if the fluid is incompressible and Newtonian."

A reciprocal motion is one whose sequence of shapes is the same played backwards — a scallop opening and closing, a hinge flapping. In an inertial world the fast stroke beats the slow one and the animal advances. At low Reynolds number the equations have no time dependence at all, so speed cannot break the symmetry, and the swimmer ends the cycle exactly where it began.

This is why the propulsion of small things looks the way it does. As the same paper's abstract puts it: "Biological microorganisms swim with flagella and cilia that execute nonreciprocal motions for low Reynolds number (Re) propulsion in viscous fluids. This symmetry requirement is a consequence of Purcell's scallop theorem, which complicates the actuation scheme needed by microswimmers." A rotating helical flagellum is not reciprocal — running it backwards is a different motion — and a cilium's power stroke differs in shape, not merely in speed, from its recovery stroke.

## The conditions matter, and they can be broken

The theorem holds "if the fluid is incompressible and Newtonian", and that clause is not decoration. The 2014 study exploited it directly, noting that "most biomedically important fluids are non-Newtonian where the scallop theorem no longer holds", and demonstrating a micro-scallop that does swim by reciprocal motion — provided the fluid shear-thickens or shear-thins and the opening and closing rates differ.

Two things follow. Practically, a device intended to move through mucus, blood or synovial fluid has design options a device in water does not. Conceptually, the theorem is an example of a result whose usefulness lies in its stated conditions: knowing exactly what has to be true for it to hold is what tells you where to look for exceptions.

## What else changes in this regime

Propulsion is the visible consequence; the less visible ones matter more for how small organisms live.

**Mixing is unavailable.** Stirring works by generating turbulence, and turbulence requires inertia. A bacterium cannot stir its surroundings, so anything it needs from the medium arrives by diffusion, on diffusion's timescale. That is the constraint behind [transport by diffusion and by flow](/en/physics/mechanics-waves/transport-by-diffusion-and-by-flow).

**Sensing is noise-limited rather than sensitivity-limited.** A cell measuring a concentration is counting molecular arrivals, and the counting statistics set a floor on precision that no better receptor can beat. That bound has been calculated, and organisms operate close to it — the subject of [the limits of chemical sensing](/en/biology/microbiology/the-limits-of-chemical-sensing).

**Swimming to find food is nearly pointless at small enough size.** Below some radius, a cell moving through the medium encounters molecules barely faster than one sitting still, because diffusion brings them in faster than swimming can outrun the depleted region. This is why motility is common in bacteria and unknown in the smallest cells.

## The general lesson

The Reynolds number is a ratio, and its usefulness is that it identifies which terms in the equations can be dropped. Dropping the inertial term does not simplify the problem quantitatively so much as change its character: the resulting equations are linear and time-independent, which is why a symmetry argument can settle a question about locomotion without solving anything.

That is the pattern worth taking from it. Dimensionless numbers are not conversion factors; they mark the boundaries between regimes in which different physics applies, and identifying the regime is usually more informative than computing the number precisely.

## Sources

1. **Nature Communications (PMC)** — [Swimming by reciprocal motion at low Reynolds number](https://pmc.ncbi.nlm.nih.gov/articles/PMC4241991/). Purcell's statement of the scallop theorem, its Newtonian condition, and a micro-swimmer operating at Re = 1.4 × 10⁻⁴ to 3 × 10⁻³.
2. **Biophysical Journal (PMC)** — [Physics of chemoreception](https://pmc.ncbi.nlm.nih.gov/articles/PMC1473391/). Berg and Purcell on what diffusion delivers to a small body, and the limits it sets.
3. **NCBI Bookshelf** — [The circulatory system and oxygen transport](https://www.ncbi.nlm.nih.gov/books/NBK54112/). Diffusion as an efficient transport process only over short distances.
