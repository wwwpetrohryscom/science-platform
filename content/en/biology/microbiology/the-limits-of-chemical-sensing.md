---
title: 'The limits of chemical sensing: how well a cell can measure a concentration'
metaTitle: The limits of chemical sensing in a single cell
excerpt: Berg and Purcell calculated in 1977 the best precision any cell can achieve when measuring a concentration by counting molecules. The bound depends on size, diffusion and time — and bacteria operate close to it.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - chemotaxis
  - biophysics
  - sensing
  - microbiology
related:
  - microbiology-explained
  - bacteria-and-archaea-explained
  - life-at-low-reynolds-number
  - transport-by-diffusion-and-by-flow
_bodyHash: f2415c89
pillar: microbiology-explained
---

A bacterium swimming up a gradient has to know which way is up, and the only information available to it is how many molecules of the attractant hit its surface. That is a counting problem, and counting problems have a noise floor. What Howard Berg and Edward Purcell established in 1977 is that the floor can be calculated from physics alone, without knowing anything about the receptor.

## The bound

The paper opens with the claim in one sentence: "Statistical fluctuations limit the precision with which a microorganism can, in a given time T, determine the concentration of a chemoattractant in the surrounding medium."

The result is a scaling law rather than a number. "The least fractional error attainable in the determination of a concentration c is approximately (TcaD)^-1/2, where D is diffusion constant of the attractant" — with a the cell radius and T the averaging time.

Every term in that expression is a design constraint. Precision improves with the square root of averaging time, so a cell wanting ten times better resolution must wait a hundred times longer. It improves with cell radius, so a smaller cell is a worse instrument for reasons no amount of receptor engineering can fix. And it improves with concentration and with the diffusion constant, both properties of the environment rather than of the organism.

## Why receptors do not need to cover the cell

The second result is the counter-intuitive one, and it explains a puzzling observation about real cells: they carry far fewer receptors than a naive picture requires.

Berg and Purcell showed why: "For nearly optimum performance only a small fraction of the surface need be specifically adsorbing. The probability that a molecule that has collided with the cell will find a receptor is Ns/(Ns + πa), if N receptors, each with a binding site of radius s, are evenly distributed over a cell of radius a."

The mechanism is that a molecule which strikes the cell surface and misses does not leave. It diffuses in the neighbourhood and strikes again, many times, so a sparse array of small targets captures nearly as much as a fully absorbing surface. The number required follows: "The number of specific receptors needed to attain such precision is about a/s."

For a micron-scale cell and nanometre-scale binding sites, that ratio is in the thousands — a few thousand receptors covering a tiny fraction of the membrane, rather than the millions a covering argument would demand. The rest of the surface is then free for everything else a membrane has to do.

## How close do real cells get?

The paper's conclusion is that *E. coli*'s chemotactic sensitivity approaches the theoretically optimal performance for a cellular detection system. That is a strong claim and an unusual one: it says the organism is not merely good but near a physical limit, so that further improvement would require changing the physics rather than the biology.

Later work has refined the treatment — receptor binding and unbinding take time, receptors interact, and the original derivation idealises both — but the structure of the conclusion has held. The Berg–Purcell expression is a floor: real systems can be noisier, and none can be quieter.

## What this explains

**Why bacteria measure in time rather than in space.** A cell one micron long sits in a gradient whose difference between head and tail is far below the noise floor for any plausible averaging time. Swimming and comparing successive samples gives a longer effective baseline, which is why chemotaxis in *E. coli* is a temporal comparison rather than a spatial one.

**Why size matters for sensing as well as for swimming.** The same radius appears in the sensing bound and in the [low-Reynolds-number](/en/physics/mechanics-waves/life-at-low-reynolds-number) constraints on movement. Small cells are simultaneously worse at measuring gradients and unable to stir their surroundings, and both limits tighten together as size falls.

**Why signalling networks amplify rather than measure again.** Downstream machinery cannot recover information the receptors never collected. Amplification and adaptation improve the use of a noisy input; they cannot beat the counting statistics, and understanding [how microbial life works](/en/biology/microbiology/microbiology-explained) at this level means keeping the two separate.

## Sources

1. **Biophysical Journal (PMC)** — [Physics of chemoreception](https://pmc.ncbi.nlm.nih.gov/articles/PMC1473391/). The fractional-error bound, the receptor-coverage result, the number of receptors required, and the comparison with *E. coli*.
2. **Nature Communications (PMC)** — [Swimming by reciprocal motion at low Reynolds number](https://pmc.ncbi.nlm.nih.gov/articles/PMC4241991/). The regime in which these cells operate and why they cannot mix their surroundings.
3. **NCBI Bookshelf** — [The circulatory system and oxygen transport](https://www.ncbi.nlm.nih.gov/books/NBK54112/). Diffusion distances, for the scale over which molecular arrival is fast.
