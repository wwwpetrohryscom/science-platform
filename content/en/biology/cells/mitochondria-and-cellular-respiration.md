---
title: 'Cellular respiration: follow the electrons, not the sugar'
excerpt: Respiration is usually taught as a sequence of pathways to memorise. Read instead as a controlled fall of electrons down 1.14 volts, with a proton gradient as the intermediate currency, and the textbook ATP totals stop looking like constants.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - bioenergetics
  - mitochondria
  - oxidative-phosphorylation
  - endosymbiosis
related:
  - what-is-a-cell
  - cell-membrane-structure-and-transport
  - photosynthesis-explained
  - cell-types-as-units-of-evolution
pillar: what-is-a-cell
_bodyHash: 3b5811a1
---

Glucose is not the point. What a respiring cell extracts from glucose is a supply of electrons held at high energy, and what it does with them is let them fall — in controlled steps, down a potential difference of 1.14 volts, to oxygen. Everything else in the process is bookkeeping around that fall: the pathways that strip electrons off carbon, the membrane that converts their descent into a proton gradient, and the rotary motor that converts the gradient into ATP. Framed that way, several things that look arbitrary in a pathway diagram become necessary, and one very familiar number turns out to be an estimate rather than a stoichiometry. Self-sustenance is the first of the three things [any structure has to do to count as a cell](/en/biology/cells/what-is-a-cell); this is the process that pays for it.

## The 1.14 volts everything is paid from

A 1:1 mixture of NADH and NAD⁺ sits at a redox potential of −320 mV. A 1:1 mixture of water and half an oxygen molecule sits at +820 mV. The difference — 1.14 V — is the entire energetic span available to an aerobic cell, and *Molecular Biology of the Cell* puts the standard free-energy release at −52.4 kcal/mol for the two electrons carried by each NADH.

Dropping that in one step would release the energy as heat. Instead the inner mitochondrial membrane spreads it across a chain of carriers — six haems bound to cytochromes, more than seven iron-sulfur centres, ubiquinone, two copper atoms and a flavin — so that the fall happens in increments small enough for the released energy to do work at each stage. Three respiratory complexes use that work to push protons across the membrane, some translocating one H⁺ per electron and others two.

This is why the pathway looks convoluted. It is not a chemical necessity that carbon be oxidised in nine glycolytic steps and eight more around the citric acid cycle. It is a requirement that the oxidation be *incremental*, because a single-step oxidation cannot be coupled to anything.

## Where the electrons are actually collected

Glycolysis, pyruvate oxidation and the citric acid cycle are best read as three successive electron harvests rather than three separate topics. Glycolysis splits a six-carbon sugar in the cytosol and yields a net two ATP directly, plus reduced carriers. Pyruvate oxidation and the citric acid cycle then complete the dismantling inside the mitochondrial matrix, stripping the remaining electrons onto NAD⁺ and FAD and releasing the carbon as CO₂ — the gas that a whole organism subsequently has to [move out through its respiratory surfaces](/en/biology/physiology/respiration-and-gas-exchange).

The substrate-level ATP produced along the way is almost negligible. The reduced carriers are the product that matters, and until they reach the inner membrane no useful energy has been captured at all.

## The gradient as intermediate currency

Proton pumping makes an electrochemical gradient; ATP synthase spends it. The insight that the two are connected only through that gradient — not through any shared chemical intermediate — is the chemiosmotic principle, and it is the same mechanism the [light reactions of photosynthesis](/en/biology/cells/photosynthesis-explained) use across the thylakoid membrane. The inner mitochondrial membrane is unusually extensive for the purpose: in a liver cell it accounts for about a third of the cell's total membrane, distributed across 1,000 to 2,000 mitochondria, and cardiac muscle mitochondria carry roughly three times the cristae area of liver mitochondria.

The gradient can only exist because the membrane is otherwise almost impermeable to protons, which is a specific instance of the [near-total ion impermeability of a lipid bilayer](/en/biology/cells/cell-membrane-structure-and-transport). Any agent that opens a proton path — an uncoupler, or the regulated uncoupling that generates heat in brown fat — lets electron transport continue while ATP synthesis collapses.

## Why "38 ATP per glucose" is not a stoichiometry

The number most people carry out of school is 36 or 38 ATP per glucose. The current textbook figure is about 30, and the reason for the discrepancy is instructive: the yield is set by a proton-to-ATP ratio that is a physical property of one enzyme, and that property is not an integer.

ATP synthase makes three ATP per complete 360° rotation of its rotor. The rotor ring in bovine mitochondria contains eight c-subunits — the smallest c-ring yet observed among F-ATPases — so eight protons pass per rotation, giving 2.7 protons per ATP. Adding the cost of exchanging ADP and ATP across the inner membrane and importing phosphate raises the bioenergetic cost to 3.7 protons per ATP delivered to the cytosol. Those figures reproduce the experimentally measured P/O ratios closely: 10 protons pumped per NADH divided by 3.7 gives 2.7, against a measured 2.5, and the six protons from succinate give 1.6 against a measured 1.5.

Several consequences follow. The yield per glucose is a quotient of two independently varying quantities, so it is not conserved across species: c-ring size differs between organisms, and a larger ring means more protons per ATP and a lower yield. It is also not conserved across conditions, because the membrane leaks protons at a rate that depends on its state. Quoting 30, or 36, or 38 without saying which assumptions produced it is the most common way this part of bioenergetics is reported slightly wrong.

## A second genome, kept at considerable expense

Human mitochondrial DNA is a circle of about 16,500 base pairs carrying 37 genes: 13 protein-coding, 22 transfer RNAs and two ribosomal RNAs. The 13 proteins are all subunits of respiratory complexes I, III, IV and V. Cells carry hundreds to thousands of copies, and a fertilised human egg may hold on the order of 2,000.

Set that against the size of the organelle's protein complement. The MitoCarta inventory published in *Nucleic Acids Research* lists 1,136 human genes encoding mitochondrial-localised proteins, spanning 149 annotated mitochondrial pathways. Better than 98 per cent of the mitochondrial proteome is therefore encoded in the nucleus, translated in the cytosol, and imported. Maintaining the residual genome is not cheap either: more than 90 nuclear-encoded proteins exist solely to run the mitochondrial genetic system, which uses a genetic code in which four of the 64 codons have meanings different from the universal code — UGA specifying tryptophan rather than a stop, for instance.

Why keep any genes at all, given the cost of a parallel transcription and translation apparatus and a divergent code? The question is genuinely open. The common explanation, that the retained proteins are too hydrophobic to import, is a hypothesis with partial support rather than a settled account.

## The bacterium that never left

Mitochondria descend from a bacterial endosymbiont within the Alphaproteobacteria, with the Rickettsiales the closest known relatives. That much is well supported. The precise sister group is not: a 2012 review in *Cold Spring Harbor Perspectives in Biology* concluded that despite extensive knowledge of the mitochondrial family tree, the identity of the immediate next of kin remains elusive, and later analyses have continued to move the branch point rather than fix it.

The reduction that followed the symbiosis was drastic — an estimated 1,000 to 3,000 genes lost in the transition from bacterial symbiont to organelle, most transferred to the host nucleus rather than deleted outright. What survives varies enormously: mitochondrial genomes range from about 6 kb in *Plasmodium falciparum* to roughly 11,000 kb in some land plants, and some lineages have gone all the way. Hydrogenosomes and mitosomes are mitochondrion-related organelles that retain the compartment and parts of its biochemistry while lacking mitochondrial DNA entirely, which places a useful floor under any claim about what the organelle is for. It is not, definitionally, a genome-bearing structure. It is a compartment that happens usually to have kept one, and the [cell type it sits inside is itself a unit that evolves](/en/biology/evolution/cell-types-as-units-of-evolution).

## What the numbers do not pin down

Proton pumping stoichiometries are hard to measure directly, and the 10-protons-per-NADH figure used above is a well-supported consensus rather than a directly counted quantity. Proton leak across the inner membrane is real, variable, and physiologically regulated, so any efficiency figure applies to a preparation rather than to mitochondria in general.

The organisation of the respiratory complexes is also less settled than a linear chain diagram implies. Whether the complexes assemble into stable supercomplexes with kinetic consequences, or simply diffuse and collide, has been argued in both directions, and the evidence is mixed on how much functional channelling of electrons occurs. That uncertainty propagates: it affects how proton pumping should be modelled, which affects the yield calculations above, which is a fair reminder that the tidiest numbers in cell biology often rest on the least tidy measurements.

## Sources

1. **NIH / NLM, NCBI Bookshelf** — [The Mitochondrion, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26894/). Mitochondrial abundance and membrane area, ATP yield per glucose, and P/O ratios.
2. **NIH / NLM, NCBI Bookshelf** — [Electron-Transport Chains and Their Proton Pumps, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26904/). Redox span from NADH to oxygen, free-energy release, and the inventory of electron carriers.
3. **NIH / NLM, NCBI Bookshelf** — [The Genetic Systems of Mitochondria and Plastids, Molecular Biology of the Cell, 4th edition](https://www.ncbi.nlm.nih.gov/books/NBK26924/). Mitochondrial genome size and content, copy number, and codon reassignments.
4. **PNAS (PubMed Central)** — [Bioenergetic cost of making an adenosine triphosphate molecule in animal mitochondria](https://pmc.ncbi.nlm.nih.gov/articles/PMC2947889/). The eight-subunit c-ring, 2.7 and 3.7 protons per ATP, and the resulting P/O ratios.
5. **Nature (PubMed Central)** — [Quantifying constraint in the human mitochondrial genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC11646341/). Gene content of human mtDNA and its copy number per cell.
6. **Nucleic Acids Research (PubMed Central)** — [MitoCarta3.0: an updated mitochondrial proteome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7778944/). The 1,136-gene human mitochondrial protein inventory and its pathway annotations.
7. **Cold Spring Harbor Perspectives in Biology (PubMed Central)** — [Mitochondrial evolution](https://pmc.ncbi.nlm.nih.gov/articles/PMC3428767/). Alphaproteobacterial ancestry, gene loss during endosymbiosis, genome size range, and organelles lacking mtDNA.
