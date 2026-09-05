---
title: 'Free energy and biological work: what a cell can actually buy with a molecule'
metaTitle: 'Free energy and biological work: what ATP actually buys'
excerpt: The textbook figure for ATP hydrolysis is a standard-state value that no cell ever experiences. The number that governs what a cell can do is larger, it depends on concentrations the cell holds far from equilibrium, and the difference is the whole point.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - free-energy
  - thermodynamics
  - atp
  - bioenergetics
related:
  - laws-of-thermodynamics-explained
  - entropy-explained
  - atp-and-cellular-energy-budgets
  - mitochondria-and-cellular-respiration
_bodyHash: 2c452283
pillar: laws-of-thermodynamics-explained
---

Thermodynamics constrains living things exactly as it constrains engines, and the constraint is stated in the same currency. What a process can do is bounded not by the energy it releases but by the fraction of that energy available to do work at constant temperature and pressure — the Gibbs free energy change. The [laws that fix this bound](/en/physics/thermodynamics/laws-of-thermodynamics-explained) say nothing about mechanism, which is why the same accounting covers a turbine and a ribosome.

The complication in biology is that the number quoted in textbooks is a standard-state value, and a cell is never in the standard state. Reading the standard number as the cell's operating number understates the available work by roughly half.

## The standard value, and why it is not the operating value

For the hydrolysis of ATP to ADP and inorganic phosphate, the NCBI *Cell* reference gives the standard free energy change directly: "In the hydrolysis of ATP to ADP plus phosphate (Pi), ΔG°′= -7.3 kcal/mol." That value assumes every reactant and product at one molar, which no living cell approaches.

The same reference gives the in-cell figure and the reason for the difference: "for ATP hydrolysis within a cell, ΔG is approximately -12 kcal/mol", because intracellular phosphate sits near 10⁻² M and ATP is held well above ADP.

A 2025 analysis of ATP synthase in the *Biophysical Journal* reaches the same place from measured concentrations. Taking "typical nucleotide concentrations of [ATP] = 3 mM, [ADP] = 0.4 mM, and [Pi] = 6 mM", the authors compute ΔG_hyd = −48 kJ mol⁻¹, and describe the working figure as "the free energy of hydrolysis of around 50 kJ mol⁻¹ (20 kBT) under cellular conditions". Minus 48 kJ mol⁻¹ is minus 11.5 kcal mol⁻¹: two independent routes, one from a reference text and one from a concentration calculation, land within a few per cent of each other.

## Where the extra energy comes from

Nothing has been added to the molecule. The difference between −7.3 and about −11.5 kcal mol⁻¹ is a logarithmic term in the concentration ratio, and the cell pays for it continuously by holding that ratio away from equilibrium.

This is the structurally important point, and it generalises past ATP. A displaced concentration ratio is itself a store of free energy. The cell does not keep a reservoir of high-energy molecules so much as a maintained disequilibrium, and the maintenance cost is not optional: let the ratio relax and the available work per molecule falls toward zero long before the molecules themselves are gone.

The same logic applies to ion gradients, which is why the [membrane transport a cell runs continuously](/en/biology/cells/cell-membrane-structure-and-transport) is an energy expense rather than a side effect.

## Coupling: how an unfavourable reaction gets run anyway

A reaction with a positive ΔG does not happen spontaneously in the direction written. Biology runs such reactions constantly — polymerising amino acids, pumping ions uphill, moving cargo against a gradient — by coupling them to hydrolysis so that the pair has a negative total.

Coupling is a mechanical fact, not an accounting trick. The two reactions must share an intermediate or a physical machine; otherwise the free energy of one is unavailable to the other and the sum is meaningless. ATP synthase makes the point concretely: it is a rotary machine in which proton flow down an electrochemical gradient turns a rotor, and the rotation is what drives synthesis. The 2025 analysis reports single-molecule measurements of "at least 2.3 ATP/revolution", and notes that "mitochondrial ATP synthases, which almost exclusively synthesize ATP, all have eight c-subunits, thus maximizing the ratio of ATP molecules synthesized to protons translocated."

That stoichiometry is a design constraint written in thermodynamics: the number of protons per turn sets how much free energy the gradient must supply per ATP made, and evolution has limited room to move it.

## What the bound does and does not forbid

Free energy sets a ceiling on work, not a floor on waste. A reaction with ΔG = −48 kJ mol⁻¹ can deliver at most 48 kJ per mole of useful work, and real machines deliver less, with the remainder appearing as heat. Nothing in thermodynamics says how much less; that is a question about the machine.

Two errors follow from forgetting the direction of the bound. The first is treating a favourable ΔG as a guarantee that a reaction proceeds — it does not, because kinetics can stall a thermodynamically downhill process indefinitely, which is precisely what enzymes exist to relieve. The second is treating measured efficiency as a violation when it looks high; efficiency defined against the standard-state number rather than the in-cell number can exceed 100% for no better reason than a mismatched denominator.

## Why this matters outside biochemistry

Reading metabolism as free-energy accounting is what makes it comparable to anything else that converts energy. The [second law's grip on the planetary energy budget](/en/physics/thermodynamics/earth-energy-budget-and-the-second-law) and its grip on a mitochondrion are the same statement applied at different scales, and the shared quantity is the one that permits comparison at all.

It also sets the terms for the question of how little energy a living thing can run on. If the available work per molecule depends on a maintained disequilibrium, then an organism in an environment that cannot sustain that disequilibrium is not merely poor — it is thermodynamically outside the range where the machinery functions. That limit is measurable, and it has been measured in the places where energy supply is smallest.

## Sources

1. **NCBI Bookshelf** — [Metabolic Energy, in *The Cell: A Molecular Approach*](https://www.ncbi.nlm.nih.gov/books/NBK9903/). Standard-state and intracellular free energy of ATP hydrolysis.
2. **Biophysical Journal (PMC)** — [The molecular mechanism of ATP synthase constrains the evolutionary landscape of chemiosmosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256841/). Concentration-based ΔG_hyd, ATP per revolution, and c-subunit stoichiometry.
3. **Molecular Biology of the Cell (PMC)** — [The quantified cell](https://pmc.ncbi.nlm.nih.gov/articles/PMC4230611/). Cellular energy budgets in ATP units.
