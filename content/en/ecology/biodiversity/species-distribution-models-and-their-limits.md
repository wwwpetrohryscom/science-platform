---
title: 'Species distribution models: what they predict, and where they stop'
metaTitle: Species distribution models and the transferability problem
excerpt: A model that fits a species range well in the place and period it was trained on may be worthless a valley away or a decade later. One study found temporal transferability acceptable for fewer than a quarter of species — and finer resolution made it worse, not better.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-06'
readingTime: 7
tags:
  - species-distribution-models
  - model-transferability
  - biodiversity-monitoring
  - uncertainty
related:
  - why-species-counts-mislead-conservation
  - remote-sensing-for-biodiversity-monitoring
  - habitat-fragmentation-metrics
  - species-extinction-risk-assessment
pillar: why-species-counts-mislead-conservation
_bodyHash: 79327dbc
---

A species distribution model takes records of where a species has been observed, pairs them with environmental layers at those locations, learns a statistical association, and projects it onto every cell of a map. The output is a surface of predicted suitability. It is the workhorse of applied biodiversity science: it fills in ranges for species nobody has surveyed exhaustively, prioritises places to protect, projects range shifts under climate scenarios, and forecasts where an invasive species might establish.

It is also the tool whose failure mode is least visible in its own output. A suitability map looks equally confident everywhere. Nothing on the map marks the cells where the model is extrapolating beyond anything it was trained on, and those are precisely the cells that most applications care about.

## Fit and transfer are different achievements

Every model is evaluated somehow, usually by holding back part of the training data and checking that the model predicts it. That measures *fit*: how well the association describes the conditions it was built from. What most applications actually need is *transfer*: whether the association still holds somewhere else, or at another time.

These come apart, and not gently. A study in *Scientific Reports* built ecological niche models for a bird community from climate, land use and [land cover](/en/ecology/earth-observation/land-cover-change-detection), and satellite-derived ecosystem functional attributes, then tested them on a later period. Combining those predictor families helped — "the combination of these factors significantly increased both model performance and transferability" — but the headline result stands regardless: temporal transferability was acceptable for "less than 25% of species."

The same paper reports something more uncomfortable for anyone using species traits to decide which models to trust. Mediterranean species, migrants and habitat specialists produced better-performing models during calibration, but "positive effects of species traits on predictive accuracy within model calibration are not necessarily translated into higher temporal transferability." In other words, the traits that predict a well-fitted model do not predict a model that survives being moved. The usual diagnostic does not diagnose the usual failure.

## Finer is not better

There is a standing intuition that resolution is a free good: model at the finest grain the data permit, and the result will be at least as good as a coarser one. For transfer, that intuition is wrong.

A study of *Rhododendron ponticum*, an invasive shrub in Britain, trained models in Snowdonia at several grain sizes and transferred them to the Brecon Beacons. Accuracy within the training region did improve as grain got finer. Transferred performance did not: at 300-metre resolution the transferred model reached a Continuous Boyce Index of 0.90, while the finest grain tested, 50 metres, reached only 0.77. The authors' conclusion is that "successful model transferability may require optimization of model grain size" — that grain is a parameter to be tuned against the intended use, not a resource to be maximised.

The mechanism is intelligible once stated. At fine grain a model can latch onto local associations — a particular soil patch, a particular land-use mosaic — that are real where they were learned and absent elsewhere. Coarse grain averages those away and leaves the associations that generalise. Fitting the training landscape better is exactly what makes the model worse at describing a different one.

## Why transfer fails

Three reasons recur, and they are ecological rather than statistical.

The first is that the environmental space itself differs. A model transferred to a region containing conditions absent from its training data is extrapolating, and the shape of the response curve outside the observed range is an assumption made by the algorithm, not a finding. Novelty of this kind is measurable before the projection is made, and it usually is not.

The second is that the association was never causal to begin with. Correlative models learn whatever covaries with occurrence. If a species is limited by a competitor, a pathogen or a dispersal barrier, the model attributes that limit to whichever climate variable happens to be collinear with it — and that collinearity is a property of the training region. Move the model to a region where the competitor is absent and the projection is wrong in a way no goodness-of-fit statistic in the training region could have revealed.

The third is that occurrence records are a sample of observation effort as much as of the species. The consequences of that for biodiversity data generally are set out in [citizen-science biodiversity data](/en/ecology/biodiversity/citizen-science-biodiversity-data); for distribution models specifically it means the model may be learning where recorders go.

## What operational practice looks like

Agencies that publish these maps at scale have converged on a defensive design. The US Geological Survey's INHABIT dataset, which feeds a national habitat-suitability tool for invasive plants, models roughly 296 species and states its uncertainty handling explicitly: "we accounted for uncertainty related to sampling bias by using two alternative sources of background samples, and constructed model ensembles using the 10 models for each species (five algorithms by two background methods) for three different thresholds (conservative to targeted)."

Three things are worth extracting from that sentence. Sampling bias is addressed by varying the background sample rather than assuming it away — an acknowledgement that where a species has *not* been recorded is as much an artefact of effort as where it has. The algorithm choice is treated as a source of uncertainty and averaged over rather than resolved. And the threshold that converts a continuous suitability surface into a binary suitable/unsuitable map is published in three versions, because there is no principled single value: the choice is a decision about the cost of a false positive against a false negative, and that is a management judgement, not a statistical one.

That last point deserves emphasis, because the binary map is what most users actually see. A single published threshold hides a decision that was never the modeller's to make.

## Stating an application niche

A useful proposal from the wider ecological-modelling literature is to define, for each model, the region of context space within which its use is defensible — a *model application niche*. The framing asks practitioners to "synthesize information from databases, past studies, and/or past model transfers to create model performance curves and heat maps," on the principle that "the more contextually similar an application site is to the model development site, the more likely it is that a model transfer will be successful." In the wetland case study accompanying that proposal, the model was found to be generalizable across 35 per cent of the spatial-organizational contextual dissimilarity space assessed.

Thirty-five per cent is neither a good nor a bad number in isolation. What makes it valuable is that it exists at all: it is a stated boundary, against which a proposed use can be checked. A suitability raster with no such boundary implies a boundary of one hundred per cent, which is never true.

## What this means in practice

None of this argues against using these models. For interpolating within a well-sampled region, for generating hypotheses about where to survey next, and for comparing scenarios under a fixed set of assumptions, they remain the best available tool, and they underpin a large share of modern range mapping — including inputs to [extinction risk assessment](/en/ecology/conservation/species-extinction-risk-assessment) and to protected-area planning.

It argues for four disciplines. Report transferability, not just fit, and test it by holding out a *region* or a *period* rather than a random subset of points. Quantify and map environmental novelty alongside the suitability surface, so the extrapolated cells are visible. Treat grain size as a tuned parameter. And state the application niche — the conditions under which the model is being offered as usable — because a model without one will be used everywhere. The broader lesson is the same one that runs through [why species counts mislead conservation](/en/ecology/biodiversity/why-species-counts-mislead-conservation): a number that looks like a measurement of nature is often a measurement of the method that produced it.

## Sources

1. **Scientific Reports** — [Effects of species traits and environmental predictors on performance and transferability of ecological niche models](https://pmc.ncbi.nlm.nih.gov/articles/PMC6414724/). Regos and colleagues (2019). Acceptable temporal transferability for fewer than 25 per cent of species; the gain from combining climate, land-use/cover and ecosystem functional attributes; and the finding that trait effects on calibration accuracy do not carry over to transferability.
2. **Scientific Reports** — [Species distribution model transferability and model grain size – finer may not always be better](https://pmc.ncbi.nlm.nih.gov/articles/PMC5940916/). Manzoor, Griffiths and Lukac (2018). The Snowdonia-to-Brecon-Beacons transfer for *Rhododendron ponticum*, the Continuous Boyce Index of 0.90 at 300 m against 0.77 at 50 m, and the case for optimising rather than minimising grain.
3. **US Geological Survey** — [INHABIT species potential distribution across the contiguous United States, version 3.0](https://www.usgs.gov/data/inhabit-species-potential-distribution-across-contiguous-united-states-ver-30-february-2023). The species count, the five-algorithm by two-background-method ensemble, the treatment of sampling bias, and the three published thresholds.
4. **Ecosphere** — [Model application niche analysis: assessing the transferability and generalizability of ecological models](https://pmc.ncbi.nlm.nih.gov/articles/PMC6140329/). Moon and colleagues (2017). The application-niche framing, the performance-curve and heat-map method, the contextual-similarity principle, and the 35 per cent generalisability result in the wetland case study.
