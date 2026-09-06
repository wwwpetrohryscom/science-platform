---
title: 'The oxygen dissociation curve: why the shape is the mechanism'
excerpt: Haemoglobin's binding curve is sigmoid rather than hyperbolic, and that single geometric fact is what turns a molecule which holds oxygen into one which hands it over. P50 names a point on the curve; the Bohr effect moves it.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-06'
updatedDate: '2026-09-06'
readingTime: 7
tags:
  - oxygen-transport
  - gas-exchange
  - respiration
  - circulation
  - comparative-physiology
related:
  - physiology-explained
  - respiration-and-gas-exchange
  - circulation-and-the-heart
  - diffusion-limits-on-body-size
pillar: physiology-explained
---

Two neighbouring accounts stop at the same place. [Gas exchange](/en/biology/physiology/respiration-and-gas-exchange) gets oxygen across a membrane and into blood; [circulation](/en/biology/physiology/circulation-and-the-heart) moves the blood past tissues. Neither draws the curve that decides how much of the cargo comes off where it is wanted. That curve — haemoglobin saturation plotted against the partial pressure of oxygen surrounding it — is why a litre of blood carries roughly 197 mL of oxygen in the protein-bound form while only about 3 mL rides dissolved at atmospheric oxygen tension, a split usually quoted as 98 per cent bound against 2 per cent dissolved. It is also the reason the bound fraction does not simply stay bound.

## What the curve plots, and what shape it takes

The axes are unremarkable: oxygen tension along the bottom, the fraction of haemoglobin's binding sites occupied up the side. The shape is not. Plotting oxygen tension against saturation "reveals a sigmoid curve", and the S is the whole point of the article. Other oxygen-carrying proteins do not produce one: the dissociation curve of haemoglobin is sigmoidal, "whereas that of other oxygen-carrying molecules (such as Myoglobin) is hyperbolic".

A hyperbola is what a single independent binding site gives you. It rises fastest where oxygen is scarcest and then flattens gradually, which makes a superb sponge and a poor courier — a protein whose curve is hyperbolic and steep at low tension will take oxygen up avidly and part with it only when the surrounding tension has fallen close to zero. Haemoglobin instead has to load fully in one place and unload substantially in another, which is a different requirement: it must ferry oxygen "from an extreme gradient of partial pressure from lungs (where it must remain tightly bound) to tissues (where it has to be easily released)". The sigmoid shape is the resolution of those two demands, and it is not an accident of chemistry that happens to be convenient. It is the mechanism.

## Why it bends: four sites in conversation

In most vertebrates haemoglobin is a tetramer of two α-subunits and two β-subunits, and the four subunits do not bind independently. The molecule occupies two quaternary arrangements: "the tense (T) state (unliganded Hb) which exhibits low affinity for O2, and the relaxed (R) state (liganded Hb) which exhibits high affinity for O2." Binding one oxygen destabilises T and makes the transition to the high-affinity R state easier for the others. Saturation therefore lags at low tension, accelerates through a narrow band, and saturates — which is the sigmoid.

How exactly the four subunits communicate is still a live question rather than a settled one, and the competing accounts have been running for sixty years. The MWC two-state model "assumes that, upon ligand binding, the T state switches to the R state without intermediate states"; the KNF sequential model instead assumes a single unliganded conformation which changes with each binding event, transmitted subunit by subunit; the Perutz stereochemical model routes the signal through direct contact between the α1 and β2 subunits. These are not idle distinctions — they predict different populations of partly-liganded intermediates — but all three produce a sigmoid, so the curve alone does not adjudicate between them.

The steepness of the sigmoid is conventionally summarised by the Hill coefficient, and its value in normal adult haemoglobin is about 2.6 — below four, the number of sites, which is itself the signal that cooperativity is real but incomplete. Variants make the connection explicit: haemoglobin Bassett, a low-affinity mutant, shows a Hill coefficient of 1.4 against 2.6 in HbA. Take away the cooperation and the curve straightens out towards the hyperbolic case.

## P50 is a point, not a property

The single number most often used to stand in for the whole curve is P50 — the oxygen tension at which haemoglobin is half saturated. For normal adult human haemoglobin it is "about 26 mmHg", and clinical sources give the accepted normal as 26 to 27 mmHg. A higher P50 means lower affinity and a curve displaced rightwards; a lower P50 means the reverse.

The trouble is that P50 is a property of a measurement, not of a molecule. A 2019 reanalysis in *eLife* of classic comparative blood data ranked mammalian haemoglobins by affinity and found it tracks body size inversely: elephant 23.03 ± 0.32 mmHg, horse 29.26 ± 0.16, human 33.02 ± 0.29, cat 43.22 ± 0.62, mouse 57.86 ± 0.76 mmHg, with Hill coefficients rising the same way, from 2.49 in the elephant to 3.32 in the mouse. Small mammals with high [mass-specific metabolic rates](/en/biology/physiology/metabolic-scaling-and-body-size) run low-affinity, high-cooperativity haemoglobin, which unloads readily; large ones do not need to. That ranking is the useful result. The human figure of 33.0 mmHg in the same table is well above the 26 to 27 mmHg quoted for human blood elsewhere, because the values come from a different protocol — which is exactly the warning. P50 values are comparable within one set of conditions and not across them.

The Hill coefficient carries the same caveat, and reviewers of high-affinity haemoglobinopathies state it plainly: standardised measurements of P50 and the Hill coefficient "do not account for *in vivo* modulation of Hb-O2 affinity", because the conditions a red cell meets change continuously along its circuit. A curve measured in a tonometer is a curve measured in a tonometer.

## The Bohr effect, and the residues that carry it

The curve moves. Rising carbon dioxide and falling pH lower haemoglobin's affinity for oxygen — the Bohr effect — and the physiological logic is close to elegant: tissue that is working produces carbon dioxide and acid, and those products are themselves the signal that releases more oxygen there. Carbon dioxide contributes twice over. It is hydrated to carbonic acid inside the red cell and dissociates to bicarbonate and hydrogen ions, lowering pH; and it binds directly to haemoglobin, forming carbaminohaemoglobin, which "stabilizes the T state, lowers affinity for oxygen, and induces oxygen unloading".

At the molecular level the proton-dependent Bohr effect is attributed to the C-terminal residues of both chains, αArg141 and βHis146, which in the deoxygenated molecule make salt bridges — βHis146 with βAsp94 and αLys40, αArg141 with αLys127 and αAsp126 — that hold the T state together. Protonating those residues stabilises the low-affinity arrangement.

Its size can be stated. The Bohr factor, the change in log P50 per unit change in pH, is about −0.5 in human HbA under standard in vitro conditions. Deer mouse haemoglobins measured under matched conditions at 37 °C give −0.62 ± 0.04 for a high-altitude variant and −0.57 ± 0.00 for a lowland one — similar to each other, and of the same order as the human value. The reciprocal relationship, in which giving up oxygen makes haemoglobin a better acceptor of carbon dioxide and protons, is the Haldane effect, and it is properly a feature of the carbon dioxide dissociation curve rather than this one.

## The other levers

**2,3-bisphosphoglycerate.** The organic phosphate binds preferentially into the central cleft between the β-subunits of deoxygenated haemoglobin, contacting βHis2, βLys82, βHis143 and βHis146, and by cross-linking those subunits it stabilises the T state and lowers affinity. Raised concentrations shift the curve right.

**Temperature.** Oxygen binding is exothermic, so warming lowers affinity. The magnitude is species-specific and the spread is large: the overall enthalpy of oxygenation for human HbA is −50.7 kJ per mol O₂, while deer mouse haemoglobins average about −10.5 kJ per mol O₂. A haemoglobin with a small enthalpy change is nearly temperature-insensitive, which matters for animals whose extremities cool.

**A different globin altogether.** Fetal haemoglobin, α₂γ₂, sits left of the adult curve — a P50 of 19 mmHg against 27 mmHg for adult haemoglobin — which is what allows oxygen to move from maternal to fetal blood across a placenta where the two are only tens of millimetres of mercury apart.

**Competitive occupation.** Carbon monoxide binds haemoglobin with roughly 240 times the affinity of oxygen and displaces it, and it also distorts the curve for the sites that remain.

## Shuttle, not sponge

Put the pieces together and the reason for the shape becomes arithmetic. Where oxygen tension is high — the lung, at around 100 mmHg — the curve has flattened into its plateau, so saturation is close to complete and stays close to complete even if alveolar tension falls somewhat. Peripheral saturation in healthy people at sea level runs from 95 to 100 per cent. Where tension is low, in systemic capillaries, the curve is steep, and a small further fall in tension releases a large quantity of oxygen.

That asymmetry is what a hyperbolic carrier cannot deliver. A sponge with high affinity everywhere would arrive at the tissue full and leave it nearly full; a carrier with low affinity everywhere would never load properly in the first place. Haemoglobin gets both because its affinity is a function of how much it is already carrying, and then gets a second adjustment for free because the Bohr effect moves the whole steep region rightwards precisely where acid is being made. Only about 2 per cent of the blood's oxygen is in solution; the total content is dominated by the bound fraction, as the standard content equation makes explicit — CaO₂ = (1.34 × haemoglobin × SaO₂) + (0.003 × PaO₂), where the first term is haemoglobin's and the second is plasma's. The shape of the curve governs the first term entirely.

## How much the shifting actually explains

It is worth resisting the temptation to credit the Bohr effect with the bulk of delivery. A 2015 modelling study in *PLoS One* comparing Root-effect haemoglobins in fish with the mammalian case put numbers on it. Fish possess haemoglobins so pH-sensitive that an acidosis reduces not only affinity but carrying capacity — the Root effect. Modelling arterial-to-venous pH changes of 0.2 units in trout and 0.035 units in humans, and holding venous oxygen tension constant, the authors calculated that the right-shift increased oxygen released from haemoglobin by 73.5 per cent in trout but by only 1.3 per cent in the human. At half saturation, the change in oxygen tension produced by a comparable pH shift was between three and twenty-one times greater in the fish system.

The human figure deserves to be read carefully rather than repeated as a debunking. It is a modelled increment under one assumption — constant venous tension — and the authors are explicit that their models assume all other aspects of the oxygen cascade remain constant, and that intracellular pH still cannot be reliably measured in real time at the tissue level in a living animal. What the comparison does establish is that the Bohr effect in a resting human operates over a very small pH excursion, and that the sigmoid shape itself, not the shifting of it, is doing most of the work. It also shows what the same mechanism can achieve when an animal is willing to spend a full pH unit on it, as teleosts do at the swim bladder and the eye, where acid-secreting cells and a [countercurrent](/en/glossary/countercurrent-exchange) capillary network manufacture a local acidosis on purpose.

## Which direction is better is not settled

The natural assumption is that lower affinity — a right-shifted curve — is always better for delivery, since it unloads more readily. The high-altitude literature does not support so simple a rule. Below about 4,500 m humans acclimatising to altitude reduce haemoglobin-oxygen affinity through elevated 2,3-DPG, yet several animal species adapted to high altitude have evolved *higher* affinity instead. A 2022 review in *Frontiers in Physiology* frames the tension directly: "there is ongoing debate about the advantages of higher or lower hemoglobin-oxygen (Hb-O₂) affinity in humans, particularly during hypoxia", because the benefit depends on the balance between loading in the lung and unloading in the periphery, and hypoxia changes both.

The human evidence that exists is suggestive and thin. Over 200 mutations are known that raise affinity, defined there as a P50 below 24 mmHg, most falling between 12 and 17 mmHg. At Leadville, Colorado, around 3,100 m, maximal oxygen uptake fell by about 28 and 19 per cent relative to sea level in two siblings with normal affinity, while two siblings with high-affinity haemoglobin showed no reduction at all. In normobaric hypoxia equivalent to roughly 2,600 m, high-affinity carriers lost 4 ± 5 per cent of maximal oxygen uptake against 13 ± 6 per cent in controls. Four siblings is a case series, not a settlement.

The deer mouse work points at why the question resists a general answer. High-altitude deer mice do carry higher-affinity haemoglobin, and the investigators concluded that the resulting unloading penalty "is compensated by an associated increase in the tissue diffusion capacity of O2 (via increased muscle capillarization)". The curve is one term in a cascade that also contains ventilation, cardiac output, capillary density and [the diffusion distance at the far end](/en/biology/physiology/diffusion-limits-on-body-size). Shifting it is only ever an adjustment to one term, which is the honest reason a right shift is not universally good and a left shift is not universally bad.

## Sources

1. **Subcellular Biochemistry** — [Hemoglobin: Structure, Function and Allostery](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370311/). Tetramer composition, T and R states, P50 of about 26 mmHg for HbA, the Hill coefficients of HbA and Hb Bassett, the 2,3-BPG binding residues, the Bohr-effect salt bridges, and the MWC, KNF and Perutz models.
2. **StatPearls, NCBI Bookshelf** — [Physiology, Oxyhemoglobin Dissociation Curve](https://www.ncbi.nlm.nih.gov/books/NBK499818/). The sigmoid plot, 197 mL/L bound versus 3 mL/L dissolved, the plateau and the steep region, right-shift factors, fetal haemoglobin, and the 240-fold carbon monoxide affinity.
3. **StatPearls, NCBI Bookshelf** — [Physiology, Oxygen Transport and Carbon Dioxide Dissociation Curve](https://www.ncbi.nlm.nih.gov/books/NBK539815/). The 98 per cent bound / 2 per cent dissolved split, the cooperative basis of the sigmoid, and carbaminohaemoglobin stabilising the T state.
4. **StatPearls, NCBI Bookshelf** — [Oxygen Saturation](https://www.ncbi.nlm.nih.gov/books/NBK525974/). The arterial oxygen content equation with its 1.34 and 0.003 coefficients, the 26 to 27 mmHg P50, and the 95 to 100 per cent peripheral saturation range at sea level.
5. **StatPearls, NCBI Bookshelf** — [Physiology, Bohr Effect](https://www.ncbi.nlm.nih.gov/books/NBK526028/). The definition of the Bohr effect, the accepted normal P50 of 27 mmHg, the fetal value of 19 mmHg, and the right-shifting factors.
6. **eLife** — [Evolutionary and functional insights into the mechanism underlying body-size-related adaptation of mammalian hemoglobin](https://pmc.ncbi.nlm.nih.gov/articles/PMC6812962/). Species P50 values and Hill coefficients from elephant to mouse, and the inverse relationship between body size and oxygen affinity.
7. **Comparative Biochemistry and Physiology Part A** — [Bohr effect and temperature sensitivity of hemoglobins from highland and lowland deer mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC4789091/). Bohr factors for deer mouse and human haemoglobin, oxygenation enthalpies, and the muscle-capillarisation compensation argument.
8. **PLoS One** — [Root Effect Haemoglobins in Fish May Greatly Enhance General Oxygen Delivery Relative to Other Vertebrates](https://pmc.ncbi.nlm.nih.gov/articles/PMC4593521/). The Root effect, the modelled 73.5 per cent versus 1.3 per cent increase in oxygen released, the assumed arterial-venous pH changes, and the authors' stated caveats.
9. **Frontiers in Physiology** — [Influence of High Hemoglobin-Oxygen Affinity on Humans During Hypoxia](https://pmc.ncbi.nlm.nih.gov/articles/PMC8795792/). High-affinity variants and their P50 ranges, the unresolved debate over affinity at altitude, the Leadville and normobaric hypoxia maximal-oxygen-uptake results, and the limits of P50 and the Hill coefficient as in vivo descriptors.
