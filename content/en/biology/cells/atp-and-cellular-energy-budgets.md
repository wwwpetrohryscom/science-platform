---
title: 'ATP and cellular energy budgets: what the numbers per second actually are'
metaTitle: 'ATP and cellular energy budgets: the numbers per second'
excerpt: A human cell turns over ten million to a hundred million ATP molecules a second, and most of that goes on making protein rather than on anything that looks like activity. The budget is more informative than the pathway diagram.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - atp
  - bioenergetics
  - cell-biology
  - metabolism
related:
  - mitochondria-and-cellular-respiration
  - free-energy-and-biological-work
  - cell-membrane-structure-and-transport
  - photosynthesis-explained
_bodyHash: 41c0cd7d
pillar: what-is-a-cell
---

Everything in [what a cell is](/en/biology/cells/what-is-a-cell) rests on a supply of usable chemical energy, and the usual way to teach that supply is as a sequence of pathways ending with a number of ATP per glucose. That number turns out to be the least reliable part of the account, and the more informative question is a budget one: how many ATP does a cell spend per second, and on what.

## The turnover, at three scales

At the level of the whole organism, the *StatPearls* physiology reference states that "cells in the human body depend on the hydrolysis of 100-150 moles of ATP per day". ATP's molar mass is about 507 g mol⁻¹, so that range corresponds to roughly 50 to 75 kilograms of ATP hydrolysed and remade daily. That arithmetic is ours rather than the reference's, and it is worth doing because of what it implies: a person does not hold tens of kilograms of ATP. Nothing is consumed in the ordinary sense — the same molecules are recycled continuously.

At the level of the cell, the quantitative survey *The quantified cell* puts it at "the average cell in the human body produces ∼10^7–10^8 ATP/s", derived from whole-body oxygen consumption of "≈0.3 liter of oxygen/min" divided across "∼10^13 cells in the human body (excluding the abundant red blood cells)".

At the level of a single measured cell type, the same paper reaches the same order by an independent route. Human fibroblasts take up "≈1 nmol glucose per μg protein per hour" and "metabolize about one-half of their glucose uptake aerobically (producing ≈30 ATP/glucose) and the other one-half fermentatively (producing lactate and 2 ATP/glucose)", giving "≈16 ATP/glucose" on average and a rate of approximately 10⁸ ATP/s. Two calculations from unrelated measurements agreeing to within an order of magnitude is the strongest thing in this article.

## Where it goes

The interesting result is what dominates the spending, because it is not what intuition suggests.

Protein synthesis is the largest single line. *The quantified cell* notes that "the average protein is 300–400 amino acids" and that it takes "≈4 ATP equivalents to add an amino acid". With "(2–4) × 10^6 proteins in 1 μm³ of a cell" and "the average half-life of a protein to be about 1 day", a cell must "duplicate its proteome once every 24 h", which the authors cost at "≈2 × 10^12 ATP just to synthesize its proteins", or "≈2 × 10^7 ATP/s".

Motility, which looks like the energetic activity, is far cheaper. For a rapidly crawling goldfish keratocyte the paper counts "≈4000 filaments in total" at the leading edge, each growing by "≈100 monomers/s" at "≈1 ATP hydrolysis per polymerizing actin monomer" — "≈4000 × 100 = 4 × 10^5 ATP/s". Building the proteome costs "three to four orders of magnitude more ATP" than dragging the whole cell around.

That ratio is the reason a cell's energy budget is dominated by maintenance rather than by work in the mechanical sense, and it is the biological version of a general point about [free energy and what it buys](/en/physics/thermodynamics/free-energy-and-biological-work).

## The ATP-per-glucose number, and why it is soft

The figure students memorise is a stoichiometric ceiling, not a measurement. The NCBI *Cell* reference gives it as "the total yield is 38 molecules of ATP per molecule of glucose", and immediately qualifies it: when glycolytic NADH enters the electron transport chain through a shuttle at the FADH₂ level rather than directly, this drops "to 36 rather than 38 ATPs per molecule of glucose".

Measured yields are lower still, for reasons that are not accounting errors. The proton-motive force leaks across the inner membrane; the H⁺/ATP ratio of ATP synthase is not an integer; and a working cell runs some fraction of its glucose fermentatively even in the presence of oxygen, which is how fibroblasts arrive at ≈16 rather than ≈30. Quoting 38 as though it were an observed quantity is the most common error in this area, and it is a category error rather than a numerical one: it treats a bound as a reading.

## Why the budget framing is more useful

Three things follow from looking at rates rather than pathways.

**Maintenance is the baseline, not the exception.** A cell doing nothing observable still spends most of its budget, because proteins degrade whether or not the cell is busy. Any account of how much energy an organism needs has to start from that floor.

**Scale-up is arithmetic, not metaphor.** A resting human runs at "≈100 W", roughly the "2000 kcal/d" recommendation; the same paper notes that "Tour de France cyclists consume 5000–6000 kcal/d and average >400 W". The per-cell rate and the whole-body power are two views of one quantity, and each constrains the other.

**The lower end is a real limit.** If maintenance sets a floor, there is a smallest energy supply on which a cell can remain viable, and organisms living near it should look qualitatively different. They do — which is the subject of [what happens to microbial life at the edge of the energy supply](/en/biology/microbiology/microbial-energy-limits).

## Sources

1. **Molecular Biology of the Cell (PMC)** — [The quantified cell](https://pmc.ncbi.nlm.nih.gov/articles/PMC4230611/). Per-cell ATP rates, protein-synthesis costs, motility costs, and whole-body power.
2. **NCBI Bookshelf** — [Metabolic Energy, in *The Cell: A Molecular Approach*](https://www.ncbi.nlm.nih.gov/books/NBK9903/). The 38-and-36 ATP yields and the shuttle caveat.
3. **NCBI Bookshelf** — [Physiology, Adenosine Triphosphate (StatPearls)](https://www.ncbi.nlm.nih.gov/books/NBK553175/). Daily whole-body ATP hydrolysis in moles.
4. **Biophysical Journal (PMC)** — [The molecular mechanism of ATP synthase constrains the evolutionary landscape of chemiosmosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256841/). Working free energy of hydrolysis and synthase stoichiometry.
