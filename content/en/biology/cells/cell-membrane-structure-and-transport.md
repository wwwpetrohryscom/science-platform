---
title: 'The cell membrane: self-assembly, selectivity, and the price of a gradient'
excerpt: A lipid bilayer builds itself and then leaks almost nothing. What a cell spends to keep its interior chemically unlike its surroundings, and how channels, carriers and pumps divide that work, is the substance of membrane biology.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - membrane-transport
  - membrane-potential
  - bioenergetics
  - cell-biology
related:
  - what-is-a-cell
  - mitochondria-and-cellular-respiration
  - cytoskeleton-and-cell-motility
  - cell-signaling-pathways-basics
pillar: what-is-a-cell
_bodyHash: da4ac61
---

An animal cell holds potassium ten to twenty times more concentrated inside than outside, sodium the other way round, and a voltage across a film two molecules thick. None of that is a resting state. Every gradient is one the cell is paying for, continuously, out of the same ATP budget that funds everything else. Membrane biology is largely the accounting of that payment: what the barrier stops for free, what has to be pushed, and what the pushing costs. The [operational definition of a cell](/en/biology/cells/what-is-a-cell) puts maintaining an interior chemistry against a different exterior first among its three requirements, and this is the machinery that does it.

## The bilayer needs no assembly instructions

Phospholipids are amphipathic — a phosphate-bearing head that dissolves happily in water, two hydrocarbon tails that do not. Dropped into water at sufficient concentration they arrange themselves into a double sheet with the tails inward, because that arrangement leaves the fewest water molecules ordered around exposed hydrocarbon. No template and no enzyme is required, which is why a bilayer also reseals itself when punctured.

The resulting sheet is dense and, in the plane, extremely mobile. [*Molecular Biology of the Cell*](https://www.ncbi.nlm.nih.gov/books/NBK26871/) puts roughly 5 × 10⁶ lipid molecules in a 1 µm × 1 µm patch, each exchanging places with its neighbours on the order of 10⁷ times a second, with a lateral diffusion coefficient near 10⁻⁸ cm²/s — fast enough for an average lipid to traverse the length of a large bacterium in about a second.

Movement between the two leaflets is a different matter entirely. Flipping a polar head group through the hydrocarbon interior is costly, and unassisted it happens less than once a month for any individual molecule. That asymmetry between rapid lateral motion and almost absent transverse motion is what allows the two faces of a membrane to hold different lipid compositions indefinitely, and what makes enzyme-catalysed lipid flipping a usable signal rather than background noise.

## A factor of a billion

Small nonpolar molecules — oxygen, carbon dioxide — dissolve in the hydrocarbon core and cross rapidly. Small uncharged polar molecules such as water and urea cross too, much more slowly. Ions barely cross at all: synthetic protein-free bilayers are about 10⁹ times more permeable to water than to sodium or potassium.

That factor of a billion is the reason everything else in this article exists. A barrier that merely slowed ions down would be useless; a barrier that stops them almost completely converts every subsequent transport protein into a control point. Selectivity is not a property of the lipid, which is indiscriminately obstructive. It is a property of what the cell chooses to insert into the lipid.

## Fifty years of crowding the mosaic

The fluid mosaic model — proteins inserted into a two-dimensional lipid fluid, both free to diffuse laterally — was proposed by Singer and Nicolson in 1972 and remains the correct starting picture. The revisions since have almost all run in one direction: the real thing is far more crowded than the original diagram.

Most plasma membranes are roughly half lipid and half protein by weight, which works out to about one protein molecule for every 50 to 100 lipids, with cholesterol present in about the same molar amount as the phospholipids. Successive models have raised protein density further and shrunk the open lipid regions correspondingly. Free Brownian diffusion turns out to be the exception rather than the rule: membrane components show confined, anomalous and hop diffusion, with cytoskeletal fence domains varying from 40 to 300 nm across, and small cholesterol- and sphingolipid-enriched raft domains reported at 2–20 nm with larger assemblies from 10 to 200 nm. Much of that corralling is imposed from beneath, by the [cortical filament network anchored to the membrane](/en/biology/cells/cytoskeleton-and-cell-motility).

The picture to discard is a dilute lipid sea with a few proteins bobbing in it. The picture to keep is a jammed mosaic in which a protein's neighbours, and the local lipid environment it sits in, are part of how it behaves.

Those nanodomain figures are also the least settled part of the modern account, and it is worth saying so at the point they are introduced. Reported raft diameters of 2–20 nm sit well below the diffraction limit, and the evidence is mixed on how much observed domain structure reflects organisation in a living membrane rather than the labelling, cross-linking or fixation used to see it; domain lifetimes are harder still. The same caution applies to the permeability contrast in the previous section, which comes from synthetic bilayers containing no protein, no cholesterol and no cortex. And textbook diagrams name four or five phospholipid classes, while the lipid inventory of a real plasma membrane is considerably larger — what most individual species contribute beyond bulk fluidity and thickness remains an open question.

## Four routes, two of which cost something

| Route | What drives it | Moves solute uphill? | Throughput | Worked example |
| --- | --- | --- | --- | --- |
| Diffusion through the bilayer | concentration difference | no | slow, never saturates | O₂, CO₂ |
| Channel | electrochemical gradient | no | up to 10⁸ ions per second | K⁺ leak channel |
| Carrier (facilitated) | electrochemical gradient | no | saturable, roughly 10³ per second | glucose uniporter |
| Primary active transport | ATP hydrolysis | yes | saturable | Na⁺-K⁺ pump |
| Secondary active transport | an ion gradient built by a pump | yes | saturable | Na⁺-glucose symport in gut epithelium |

The throughput gap between the top two active rows and the channels is the sharpest number in the field. A channel can pass up to 100 million ions each second — a rate 10⁵ times greater than the fastest transport any known carrier protein achieves, which places carriers near a thousand solutes a second. Channels are holes with a filter; carriers are machines that change shape for each cycle, and the mechanical step is what limits them.

## Pricing the sodium-potassium pump

For every ATP hydrolysed, the Na⁺-K⁺ pump moves three sodium ions out and two potassium ions in. Almost one-third of the energy requirement of a typical animal cell is consumed running it; in electrically active nerve cells, which gain sodium and lose potassium with every impulse, that figure approaches two-thirds. The ATP funding it comes from the [respiratory chain in the mitochondrion](/en/biology/cells/mitochondria-and-cellular-respiration), so a large fraction of a resting animal's oxygen consumption is ultimately spent holding a concentration difference in place.

Reading that as overhead is the mistake. The sodium gradient is a rechargeable store, and the cell spends it on transport it could not otherwise do. Intestinal and kidney epithelial cells carry symport systems in which sodium moving down its electrochemical gradient drags a sugar or an amino acid into the cell against that solute's own gradient. One pump, burning ATP, therefore powers an entire second tier of uphill transport — the same logical structure as any [system that stores work in a potential and draws on it later](/en/physics/thermodynamics/laws-of-thermodynamics-explained).

The one-third and two-thirds figures should be read as the ends of a range rather than as constants. They are estimates from particular preparations, and a quiescent fibroblast and a firing neuron do not allocate ATP the same way.

## Where the voltage comes from

A common shortcut has the pump generating the membrane potential. Because it exports three positive charges for every two it imports, it does contribute directly, but only modestly. The larger effect is indirect and worth getting right.

The pump establishes the gradients. The potential then arises because the membrane is selectively permeable, chiefly to potassium through leak channels: potassium exits down its concentration gradient, leaves uncompensated negative charge behind, and stops when the electrical field it has built opposes further loss. Resting potentials measured across cells run from about −20 mV to −200 mV depending on organism and cell type. The sodium equilibrium potential sits near +50 mV, and the excursion between those two values is what an [electrically excitable cell exploits to signal](/en/biology/physiology/nervous-systems-and-neurons). Spread across a film a few nanometres thick, a potential of that size corresponds to a field of roughly 100,000 V/cm — an enormous electrical stress, sustained by a structure held together only by the hydrophobic effect.

## Sources

1. **NIH / NLM, NCBI Bookshelf** — [The Lipid Bilayer, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26871/). Lipid packing density, lateral diffusion coefficient, and the rarity of transverse flip-flop.
2. **NIH / NLM, NCBI Bookshelf** — [Principles of Membrane Transport, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26815/). Relative permeability of protein-free bilayers to water versus ions.
3. **NIH / NLM, NCBI Bookshelf** — [Carrier Proteins and Active Membrane Transport, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26896/). Pump stoichiometry, its share of cellular energy use, and sodium-driven symport.
4. **NIH / NLM, NCBI Bookshelf** — [Ion Channels and the Electrical Properties of Membranes, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26910/). Channel throughput, resting-potential range, and the transmembrane field strength.
5. **NIH / NLM, NCBI Bookshelf** — [Structure of the Plasma Membrane, The Cell: A Molecular Approach, 2nd edition](https://www.ncbi.nlm.nih.gov/books/NBK9898/). Lipid-to-protein ratio, cholesterol content, and the original fluid mosaic formulation.
6. **Biomedicines (PubMed Central)** — [Fifty Years of the Fluid–Mosaic Model of Biomembrane Structure and Organization](https://pmc.ncbi.nlm.nih.gov/articles/PMC9313417/). Protein crowding, restricted diffusion modes, and reported fence and raft domain sizes.
7. **Annual Reviews** — [Lipid–Protein Interactions in Plasma Membrane Organization and Function, Annual Review of Biophysics](https://www.annualreviews.org/doi/10.1146/annurev-biophys-090721-072718). Current treatment of nanoscale membrane organisation and its measurement limits.
