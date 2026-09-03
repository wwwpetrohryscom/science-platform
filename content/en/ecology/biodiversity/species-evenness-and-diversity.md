---
title: 'Species evenness and diversity indices: why a count is not enough'
excerpt: Two communities with the same number of species can differ sharply in how abundance is shared among them. Evenness, and the Shannon, Simpson, and Hill-number diversity indices that combine it with richness, capture what a raw count leaves out.
type: expert
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-06-02'
tags:
  - biodiversity
  - species-evenness
  - diversity-metrics
  - monitoring
related:
  - species-richness-explained
  - why-species-counts-mislead-conservation
  - biodiversity-indicators-explained
pillar: why-species-counts-mislead-conservation
_bodyHash: 840f594a
readingTime: 4
---

Two communities can hold the same number of species and still describe very different ecological situations. What separates them is how individuals are shared among those species — a property that a simple tally cannot see. Diversity indices were developed to capture that missing dimension, and they remain central to how community change is tracked.

## What evenness adds to a count

A list of species names tells you how many kinds are present but says nothing about their relative abundance. [Species evenness](/en/glossary/species-evenness) fills that gap by measuring how equally individuals are distributed among the species present. When evenness is high, no single species dominates and the community is, in a sense, balanced. When evenness is low, one or a few species hold most of the individuals while the rest persist at the margins.

This matters because the same headcount can sit on top of opposite structures. A community where abundance is spread evenly and one where a single species overwhelms the others may both report identical [species richness](/en/glossary/species-richness), yet they behave differently under stress. Counting alone, as discussed in our note on [why species counts mislead conservation](/en/ecology/biodiversity/why-species-counts-mislead-conservation), treats those two situations as equivalent when they are not. The [IPBES global assessment](https://www.ipbes.net/global-assessment) frames biodiversity as multi-dimensional for this reason.

## The classic indices: Shannon and Simpson

Diversity indices combine richness and evenness into a single value, weighting the two ingredients differently depending on the formula. The Shannon index, written H', weights each species by the logarithm of its proportional abundance, so both the number of species and the balance among them shape the result. The Simpson index takes a different route: it emphasises the probability that two individuals drawn at random belong to the same species. Because that probability is governed by whichever species are most plentiful, Simpson is dominated by common species and is relatively insensitive to the rare ones.

Neither index is wrong. They simply answer slightly different questions, and that difference becomes visible the moment you compare communities. Peer-reviewed work in the [ecology literature](https://www.nature.com/) has long examined how these formulas behave and where they diverge.

## Hill numbers and the effective number of species

A more recent approach expresses diversity as an "effective number of species" — the count of equally abundant species that would produce the observed diversity value. Hill numbers do this across a continuous family indexed by an order, q, that sets how much weight common species receive. At q = 0 the measure ignores abundance entirely and reduces to richness. At q = 1 it corresponds to Shannon, and at q = 2 it corresponds to Simpson. As q rises, common species count for more and rare ones count for less.

The appeal is interpretability. Because every order returns a value on the same effective-species scale, results can be compared directly rather than read off incompatible formulas. That comparability is why Hill numbers are now widely preferred for reporting and why they slot cleanly into broader [biodiversity indicators](/en/ecology/biodiversity/biodiversity-indicators-explained).

## When richness and diversity disagree

The practical payoff of all this is that richness and diversity can rank the same set of communities in different orders. A species-rich community with one dominant species can register lower Shannon or Simpson diversity than a community holding fewer species in which abundance is shared more evenly. The richer site looks more diverse by a headcount and less diverse once balance is taken into account.

This is the core reason a count is not enough, and it connects directly to how [species richness](/en/ecology/biodiversity/species-richness-explained) should be read alongside other measures. The ranking you obtain depends on the property you choose to emphasise.

## Why evenness matters for monitoring

For people watching ecosystems over time, evenness is often the more sensitive early signal. When a few species begin to dominate — a shift toward lower evenness — it can flag disturbance, eutrophication, or invasion well before any species actually disappears from the list. A loss of species is a late and blunt indicator; a change in how abundance is shared can register earlier. Evenness also relates to ecosystem function and stability, which is part of why it features in community-level work tracked through resources such as the [European Environment Agency on biodiversity](https://www.eea.europa.eu/en/topics/in-depth/biodiversity). These metrics anchor the broader picture of [biodiversity monitoring and ecosystem health](/en/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## How it is measured, and where it is uncertain

Computing any of these indices begins with abundance or occurrence data — records of which species are present and, ideally, how many individuals each contributes. Large pools of such records, including those aggregated by [GBIF](https://www.gbif.org/), feed the proportional abundances that the formulas require. From those proportions, an analyst selects an index, or an order q for Hill numbers, and derives a value that can be compared across sites or across years.

The choices made along the way carry real consequences, so transparency is essential. Because each index weights common and rare species differently, the index you pick can change how communities rank, and no single formula is the uniquely correct one; the appropriate order q should match the question being asked. Field samples add a second source of noise: abundance estimates drawn from limited sampling are themselves uncertain, and that uncertainty propagates into any diversity value computed from them. The sound practice is to state which measure was used, why, and how confident the underlying counts are — rather than presenting a single number as settled.

## Sources

1. **IPBES** — [Global Assessment Report](https://www.ipbes.net/global-assessment). Multi-dimensional view of biodiversity beyond species counts.
1. **Nature** — [ecology literature](https://www.nature.com/). Peer-reviewed work on diversity indices and Hill numbers.
1. **EEA** — [biodiversity](https://www.eea.europa.eu/en/topics/in-depth/biodiversity). Community-level indicators of biodiversity change.
1. **GBIF** — [occurrence records](https://www.gbif.org/). Abundance and occurrence data used to compute diversity.
