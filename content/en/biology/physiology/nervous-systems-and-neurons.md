---
title: 'Neurons and nervous systems: signalling by controlled ion leaks'
excerpt: A neuron spends energy building an ion gradient so that it can discharge part of it on demand. That arrangement explains the all-or-nothing spike, the value of myelin, and what a brain scan is actually measuring.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - neuroscience
  - action-potential
  - membrane-transport
  - connectomics
related:
  - physiology-explained
  - hormones-and-endocrine-signalling
  - cell-membrane-structure-and-transport
  - developmental-biology-explained
pillar: physiology-explained
_bodyHash: 233a3b2a
---

A neuron at rest is not idle. It is holding a charge separation across its membrane, maintained at continuous metabolic cost, so that it can discharge part of that separation in a controlled way far faster than any pump could restore it. Almost everything distinctive about neural signalling — its speed, its direction, its ability to combine inputs — follows from that one arrangement, which is a specialised case of [the general problem of holding a physiological set point](/en/biology/physiology/physiology-explained).

## The battery, and what it costs to keep charged

Ion pumps, principally the Na⁺/K⁺-ATPase, keep potassium concentrated inside the cell and sodium concentrated outside. Because the resting membrane is far more permeable to K⁺ than to Na⁺, potassium leaks outward down its concentration gradient until the electrical field this creates opposes further loss. Each ion has an **equilibrium potential** — the membrane voltage at which its chemical and electrical driving forces exactly cancel — and the NIH-hosted physiology reference on the action potential gives roughly +60 mV for sodium and about −85 mV for potassium. A resting neuron sits close to the potassium value, not because potassium matters more in principle, but because potassium is the ion the resting membrane will let through. Which channels are open at a given moment is the whole story, and it depends directly on [the selective permeability of the cell membrane](/en/biology/cells/cell-membrane-structure-and-transport).

Maintaining this is not a minor overhead. A widely used energy budget for rodent grey matter apportions signalling costs as 47 per cent to action potentials, 34 per cent to the postsynaptic effects of glutamate, 13 per cent to the resting potential and 3 per cent to glutamate recycling. The same analysis estimates that raising activity by one action potential per cortical neuron per second increases oxygen consumption by 145 mL per 100 g of grey matter per hour, and concludes that the cost favours sparse codes in which no more than about 15 per cent of neurons are active at once. Neural tissue is metabolically expensive enough that its architecture is partly an economising response, which is also why its function is tightly coupled to [the delivery of oxygen to tissues](/en/biology/physiology/respiration-and-gas-exchange).

## Why the spike is all-or-nothing

Depolarise the membrane past a threshold and voltage-gated sodium channels open; sodium entry depolarises further, opening more channels. That positive feedback is regenerative, so once threshold is crossed the event runs to completion at a size set by the ion gradients rather than by the stimulus. Sodium channels then inactivate — a distinct state from being closed — and delayed potassium channels repolarise the cell, producing a refractory period that prevents the spike from propagating backwards.

The quantitative account of this came from Hodgkin and Huxley's 1952 analysis of the squid giant axon, which described membrane current as separate voltage- and time-dependent sodium and potassium conductances and reconstructed the shape and speed of the impulse from those measurements. The practical consequence for interpretation is that spike amplitude carries no information. A neuron cannot signal "more" by firing a larger spike; it can only fire sooner, more often, or in a different pattern.

## Speed is bought with insulation, not with more current

Conduction velocity is a problem of cable physics: current leaks out through the membrane as it spreads along the axon. Vertebrates solved this by wrapping axons in myelin, which raises membrane resistance and lowers capacitance, so that depolarisation jumps between the exposed nodes of Ranvier instead of regenerating continuously. Sodium channels are concentrated where they are needed, with roughly a fifty-fold increase in channel density at spike-initiation zones. The same reference describes myelinated fibres as conducting more than an order of magnitude faster than unmyelinated fibres of comparable size.

Invertebrates generally took the other route and increased axon diameter, which is why the squid giant axon exists at all and why it was large enough to accept electrodes in the 1930s and 1940s. Both solutions trade volume or metabolic investment for latency; neither is available for free.

## The synapse is where the arithmetic happens

Most signalling between neurons is chemical. An arriving spike triggers transmitter release, which opens or modulates receptor channels on the receiving cell, producing graded depolarising or hyperpolarising potentials that sum across space and time. Only if that sum crosses threshold at the trigger zone does the receiving neuron fire. The spike is digital; the integration that decides whether it occurs is analogue.

Synaptic strength is also adjustable, which is what makes nervous systems more than fixed wiring. Brief high-frequency stimulation of the perforant path in anaesthetised rabbits produced potentiation of the population response lasting from 30 minutes to 10 hours, in 15 of 18 animals — the observation that established long-lasting activity-dependent change as a real property of intact tissue. Mechanistically this belongs to the broader repertoire of [cell signalling](/en/glossary/cell-signaling), and it operates on a timescale between the millisecond spike and the hours-to-days regime of hormones.

## Nervous systems are not scaled copies of one another

Complete wiring diagrams now exist for two species, and they are separated by three orders of magnitude. Serial-section electron microscopy of the *Caenorhabditis elegans* hermaphrodite found 302 neurons in 118 morphological classes, connected by about 5,000 chemical synapses, 2,000 neuromuscular junctions and 600 gap junctions, in an arrangement essentially invariant between animals. The adult *Drosophila* brain reconstruction published in 2024 contains 5 × 10⁷ chemical synapses among 139,255 neurons from a single female fly.

Nothing comparable exists for a vertebrate. Cell counts, however, do: isotropic fractionator measurements of adult human brains give 86.1 ± 8.1 billion neurons and 84.6 ± 9.8 billion non-neuronal cells. That result corrected a durable misconception — glia do not outnumber neurons roughly ten to one, and human glia-to-neuron ratios resemble those of other primates. It also exposes a distributional surprise: only about 19 per cent of the brain's neurons lie in the cerebral cortex, although the cortex accounts for some 82 per cent of brain mass. Comparative work of this kind is how [nervous system organisation across animal body plans](/en/biology/taxonomy/zoology-animal-diversity-explained) is separated from the peculiarities of any one species.

## What an image of a working brain is measuring

Functional MRI does not record spikes. It records a haemodynamic signal, and the mapping from neural activity to that signal is indirect enough that a 2008 review in *Nature* argued the conclusions drawn from fMRI often ignore the actual limitations of the methodology. The grey-matter energy budget points at the specific difficulty: because most signalling energy goes on synaptic currents and action-potential propagation, the imaged signal is expected to be dominated by synaptic input and local processing rather than by the output spiking of the region being imaged. A region can therefore light up because it is being addressed, not because it is speaking.

Uncertainty also persists at the cellular level. On adult neurogenesis, the NIH's neurological institute states plainly that neuroscientists disagree about how many new neurons are made and how often. That disagreement is about counting methods and about what post-mortem tissue can support, not about whether the phenomenon exists at all — and it is a reminder that a technique which resolves millimetres and seconds cannot arbitrate a question posed in cells and decades. Endocrine control, treated separately in [slow, broadcast hormonal signalling](/en/biology/physiology/hormones-and-endocrine-signalling), operates on exactly the timescales that neural recording is worst at.

## Sources

1. **StatPearls (NCBI Bookshelf)** — [Physiology, Action Potential](https://www.ncbi.nlm.nih.gov/books/NBK538143/). Equilibrium potentials for sodium and potassium, channel density at spike-initiation zones, and the relative speed of myelinated conduction.
2. **Journal of Physiology (1952)** — [A quantitative description of membrane current and its application to conduction and excitation in nerve](https://pubmed.ncbi.nlm.nih.gov/12991237/). The voltage-clamp analysis and reconstruction of the action potential.
3. **Journal of Cerebral Blood Flow & Metabolism (2001)** — [An energy budget for signaling in the grey matter of the brain](https://pubmed.ncbi.nlm.nih.gov/11598490/). Apportionment of signalling energy and the implication for fMRI interpretation.
4. **Journal of Physiology (1973)** — [Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit](https://pubmed.ncbi.nlm.nih.gov/4727084/). Duration and incidence of activity-dependent synaptic potentiation.
5. **Philosophical Transactions of the Royal Society B (1986)** — [The structure of the nervous system of the nematode Caenorhabditis elegans](https://royalsocietypublishing.org/doi/10.1098/rstb.1986.0056). Neuron, class and synapse counts for the nematode nervous system.
6. **Nature (2024)** — [Neuronal wiring diagram of an adult brain](https://pubmed.ncbi.nlm.nih.gov/39358518/). Neuron and synapse counts for the whole-brain Drosophila connectome.
7. **Journal of Comparative Neurology (2009)** — [Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain](https://pubmed.ncbi.nlm.nih.gov/19226510/). Human neuronal and non-neuronal cell counts and their distribution.
8. **Nature (2008)** — [What we can do and what we cannot do with fMRI](https://pubmed.ncbi.nlm.nih.gov/18548064/). Constraints that haemodynamic signals impose on neuroimaging interpretation.
9. **NIH National Institute of Neurological Disorders and Stroke** — [Brain Basics: The Life and Death of a Neuron](https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-life-and-death-neuron). Neuron and glial cell types, and the unresolved state of adult neurogenesis.
