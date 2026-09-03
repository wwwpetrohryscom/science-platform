---
title: 'Microbial biogeochemistry: the organisms that close the elemental cycles'
excerpt: Several steps in the nitrogen, carbon and sulfur cycles have no plant or animal equivalent — only prokaryotes run them. This page follows those reactions and the awkward distance between detecting the gene for one and measuring its rate.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - biogeochemistry
  - nitrogen-cycle
  - methane
  - isotope-tracing
  - functional-genes
related:
  - microbiology-explained
  - culturing-and-sequencing-microbes
  - nitrogen-cycle-explained
  - soil-biology-and-the-soil-food-web
pillar: microbiology-explained
_bodyHash: 79d769b3
---

Plants and animals move elements around. They do not, for the most part, transform them. The reactions that convert atmospheric N₂ into ammonia and back again, that make methane from carbon dioxide, that reduce sulfate to sulfide and oxidise it back, are prokaryotic monopolies or near-monopolies, and a [biogeochemical cycle](/en/glossary/biogeochemical-cycle) that lacked them would not close — it would run down into whichever reservoir the abiotic chemistry favoured. The organisms behind these reactions are introduced in the [wider survey of microbial life](/en/biology/microbiology/microbiology-explained); what follows is what they do to the planet's chemistry, and how hard that turns out to be to measure.

## The nitrogen relay

Nitrogen fixation breaks the N≡N triple bond using nitrogenase, an enzyme so oxygen-sensitive that organisms carrying it have evolved elaborate physical and temporal shielding — heterocysts, root nodules, night-time fixation. Nothing else in biology performs this reaction. The ammonia it produces is then oxidised to nitrite and nitrate by ammonia-oxidising bacteria and archaea, and by complete ammonia oxidisers that run both steps in one cell.

Return to the atmosphere happens by two routes, and for most of the twentieth century only one of them was known. **Denitrification** steps nitrate down through nitrite, nitric oxide and nitrous oxide to N₂. **Anammox** — anaerobic ammonium oxidation — couples ammonium directly with nitrite to make N₂, and is carried out by a distinctive group of planctomycete bacteria. A 2025 global synthesis in *Advanced Science*, pooling 3,240 observations from 199 published isotope-pairing studies, found denitrification responsible for 79.8 ± 0.4 per cent of microbial nitrogen loss worldwide, with anammox contributing more in aquatic than in terrestrial settings and reaching as much as 43.2 per cent of nitrogen loss in seawater. Its share falls with latitude in soils and sediments and generally rises with depth in a sediment column.

Neither route is clean. Denitrification releases nitrous oxide as an intermediate, and nitrification leaks it as a by-product, so N₂O emission scales with how much reactive nitrogen is circulating rather than with any single process. NOAA's Global Monitoring Laboratory recorded a global mean N₂O of 339.78 parts per billion for April 2026, with an annual increase of 1.23 ppb across 2025. The Earth-system consequences of that flux are treated in the existing article on [the nitrogen cycle](/en/ecology/earth-systems/nitrogen-cycle-explained); the point here is that the leak is a property of microbial physiology operating under variable oxygen, not of the fertiliser itself.

## Methane: made by one domain, removed by several

Methanogenesis is restricted to archaea, and to strictly anaerobic ones. They generate methane from hydrogen and carbon dioxide, from acetate, or from methylated compounds, and they occupy the terminal position in anaerobic food chains — where sulfate is available, sulfate-reducing bacteria outcompete them for the same substrates, which is why methanogenesis dominates in freshwater sediments and sulfate reduction dominates in marine ones.

Removal happens in two places. Aerobic methanotrophs oxidise methane wherever it meets oxygen, in soils, at the oxic–anoxic interface of sediments and in the water column. Anaerobic oxidation of methane, coupled to sulfate, nitrate or metal oxides and typically run by archaeal–bacterial consortia, intercepts methane below that interface. Together they act as a filter between where methane is produced and where it reaches the atmosphere, and the size of what gets through is a climate variable.

The bookkeeping comes from the Global Carbon Project's methane budget, published in *Earth System Science Data*. For 2010–2019, atmospheric inversions put total global emissions at 575 Tg CH₄ per year (range 553–586), of which about 369 Tg (350–391), roughly 65 per cent, is directly anthropogenic. Wetlands and inland fresh waters together — overwhelmingly microbial sources — average 248 Tg (159–369). Chemical loss to the hydroxyl radical, the dominant sink, is 563 Tg (510–663). NOAA's network put the global mean at 1937.59 ppb for April 2026, after an annual increase of 5.34 ± 0.59 ppb in 2025; those observations are the constraint that the top-down estimates are fitted to, and the monitoring side of them is described in [greenhouse-gas concentration monitoring](/en/ecology/climate-change/greenhouse-gas-concentrations-monitoring).

## Living on inorganic chemistry

The nitrogen and methane cycles are the visible cases of a more general capability. Chemolithotrophs take electrons from inorganic donors — hydrogen, ammonium, nitrite, reduced sulfur, ferrous iron — and many of them fix carbon dioxide with that energy, making a living in complete darkness with no organic input at all. Sulfate reduction is the anaerobic mirror image, using sulfate as the electron acceptor for organic-matter oxidation and producing sulfide, which is then reoxidised by sulfur-oxidising bacteria at the redox boundary.

This matters beyond microbiology because it decouples primary production from light. A chemolithotrophic community in a deep sediment or a hydrothermal system is a genuine primary producer, and the metabolic range involved is far wider than anything found in plants or animals. The soil expression of the same versatility, where these guilds are packed into millimetre-scale oxygen gradients, is the subject of the article on [soil biology and the soil food web](/en/ecology/soils/soil-biology-and-the-soil-food-web).

## A gene is not a rate

Sequencing makes it cheap to ask whether the capacity for a process is present. It is tempting to treat the answer as a measurement of the process, and the field has tested that assumption directly. A meta-analysis in *The ISME Journal* screened 415 studies quantifying carbon- and nitrogen-cycling genes or transcripts, found 59 that reported both gene abundance and the corresponding process rate, and analysed 224 paired observations. The overall correlation was weak though statistically significant, r = 0.26; for DNA-based measurements r = 0.30, while for transcripts it was 0.08 and not significant. Only 38 per cent of individual effects were significantly positively correlated, with nearly twice as many either negatively correlated or showing no significant relationship at all. The genes involved were the standard markers: *nifH*, *amoA*, *nirK*, *nirS*, *nosZ*, *narG*, *mcrA*, *pmoA*.

The reason is not mysterious. Gene abundance reports capacity, transcript abundance reports recent regulatory intent, and a rate is set by substrate supply, temperature, redox state and diffusion — conditions that can vary by an order of magnitude within a centimetre of sediment while the gene inventory stays put. Measuring the rate requires a rate method: ¹⁵N isotope pairing, ¹³C or ¹⁴C tracer incubations, stable-isotope probing, microelectrode profiling, chamber flux measurements, or atmospheric inversion at the far end of the scale ladder. Each of those has its own artefacts, and the choice of method is often what separates two published estimates of the same flux, a point developed in the companion page on [how microbes are cultured and sequenced](/en/biology/microbiology/culturing-and-sequencing-microbes).

## Why the largest microbial fluxes are the least certain

The methane budget is the clearest illustration. Adding up process-based estimates from the bottom gives 669 Tg CH₄ per year (512–849); constraining the same total from the top, using atmospheric observations and transport modelling, gives 575 Tg (553–586). The 94 Tg gap is not a rounding difference — it is roughly a sixth of the total, and it sits mostly in the natural sources, particularly wetlands and inland fresh waters. The ranges have converged enough that they now overlap, which is progress, but the residual disagreement is concentrated in exactly the term that is microbial, diffuse and hardest to observe.

That pattern generalises. The microbial fluxes that matter most to planetary chemistry are produced by organisms at scales of micrometres, in environments that are patchy at scales of millimetres, and they are wanted as annual totals over continents. Every step of that extrapolation is an assumption, and none of them is removed by sequencing more deeply.

## Sources

1. **Earth System Science Data (Global Carbon Project)** — [Global Methane Budget 2000–2020](https://essd.copernicus.org/articles/17/1873/2025/). Top-down and bottom-up emission totals, the anthropogenic share, wetland and inland-water sources, and the chemical sink.
2. **Global Carbon Project** — [Global Methane Budget](https://www.globalcarbonproject.org/methanebudget/). The assessment cycle and scope of the budget exercise.
3. **NOAA Global Monitoring Laboratory** — [Trends in atmospheric methane](https://gml.noaa.gov/ccgg/trends_ch4/). Global mean methane and its recent annual growth rate.
4. **NOAA Global Monitoring Laboratory** — [Trends in atmospheric nitrous oxide](https://gml.noaa.gov/ccgg/trends_n2o/). Global mean nitrous oxide and its recent annual increase.
5. **Advanced Science** — [Global relative importance of denitrification and anammox in microbial nitrogen loss](https://pmc.ncbi.nlm.nih.gov/articles/PMC11848586/). Synthesis of isotope-pairing studies partitioning nitrogen loss between the two pathways.
6. **The ISME Journal** — [Relationships between protein-encoding gene abundance and corresponding process are commonly assumed yet rarely observed](https://pmc.ncbi.nlm.nih.gov/articles/PMC4511926/). Meta-analysis of functional-gene abundance against measured process rates.
