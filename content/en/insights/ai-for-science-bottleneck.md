---
title: Why "AI for science" is undervaluing the bottleneck it is best placed to fix
excerpt: Most AI-for-science investment chases discovery. The higher-leverage use is making the experimental record reproducible and machine-readable.
argument: Discovery captures attention; infrastructure captures compounding returns. Funding agencies and platforms that systematize how experiments are recorded, indexed, and replicated will create more cumulative value than the next foundation model trained on papers.
category: physics
author: ecosciencehub-editorial-team
publishedDate: '2026-03-22'
updatedDate: '2026-05-08'
readingTime: 4
tags:
  - AI
  - infrastructure
  - open science
  - reproducibility
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
_bodyHash: 16232f31
---

The conversation about AI in science is dominated by a particular kind of story: discovery. Protein-structure prediction, materials screening, and literature-mining systems are real scientific tools. But public research infrastructure from [NIH/NLM](https://www.ncbi.nlm.nih.gov/books/), peer-reviewed literature indexed in [PubMed](https://pubmed.ncbi.nlm.nih.gov/), and measurement standards from [NIST](https://www.nist.gov/) point to a less visible bottleneck: the experimental record is still hard to reproduce, query, and reuse at scale.

The wins that compound are different ones, and they are quietly going underfunded.

## The current framing

The dominant frame for AI in science is that AI is a discovery engine. Train a powerful enough model on enough scientific data, and it will see patterns the human researchers could not. Promising biomarkers. Novel catalysts. New drug targets. The output of the process is a candidate that humans then validate experimentally.

This is happening, it is real, and it is also the application that least benefits from cumulative effects. Each discovery model is trained on a research record that remains fragmented, unstandardized, and largely irreproducible. The next discovery model trained on the same record runs into the same substrate problem. The marginal model captures less new ground because the substrate has not improved.

## Where the leverage actually is

The substrate is the bottleneck. Standardized experimental records — protocols, raw data, instrument metadata, negative results — are what every downstream use of AI in science depends on. They are also where the substrate problem is most acute: most of this information lives in PDFs, in lab notebooks, in supplementary materials, in formats that vary not just by field but often by lab.

AI may be useful for the structured work of extracting and normalizing this information. The same model families that summarize prose can help parse a methods section or supplementary table, but deployment quality depends on validation, provenance, and human review. The technology is useful; it is not a substitute for scientific curation.

If the time and money currently going into another foundation model trained on Wikipedia were instead going into systematic extraction of the experimental record into a structured, queryable, machine-readable form, the cumulative effect over five years would be substantially larger than another iteration of the discovery model.

## What this would change

A standardized, machine-readable experimental record changes several things at once.

Reproducibility becomes a routine check, not a heroic effort. A reader who wants to verify a claim does not need to reconstruct the experiment from the prose; they query the structured record.

Meta-analyses become easier to update when the underlying records are structured. A researcher asking "what is the actual distribution of effect sizes for this intervention" still needs study-quality filters, but the extraction burden is lower.

The next generation of discovery models trains on a clean substrate. The patterns they identify are over data that has been cleanly recorded, not over the noise of inconsistent reporting. The signal-to-noise ratio for the modeling itself improves.

Negative results become first-class. Most negative results are never published; the ones that are, are buried in supplementary materials. A structured extraction surface that captured them would substantially improve the field's collective understanding of what does not work.

## The strongest case against this

The clearest counter-example is protein structure prediction, and it cuts directly against the argument above. The Protein Data Bank was already a standardised, curated, machine-readable substrate; decades of it. What changed in 2020 was not the record but the model. AlphaFold's authors report accuracy competitive with experimental structures in a majority of cases, and — the part that matters for this argument — it was scored blind by CASP, an assessment the predictors do not run. So there is at least one domain where the substrate was ready, the bottleneck was capability, and capability is what moved.

Two weaker versions of the same objection are also worth stating. Data curation has been argued for since long before machine learning, and the argument has not moved funding much; something about it may simply not work as a proposal. And if models keep getting better at reading unstructured methods sections, then extracting the record later gets cheaper than extracting it now, which makes today's curation spending premature rather than undervalued.

What none of these establish is the general case. The protein example shows what happens when a field *already has* the substrate — which is the argument's own claim, arrived at from the other direction. The FAIR principles were published in 2016 and are widely endorsed and unevenly implemented, which is closer to the situation in most fields than the Protein Data Bank is. And the premature-curation objection assumes extraction quality is the binding constraint; provenance and the willingness of labs to record negative results are not things a better parser supplies.

The honest position is that the two claims are not symmetric. "Capability was the bottleneck for protein structures" is established. "Capability is the bottleneck in general" is not, and neither is its opposite.

## Why this is undervalued

The investment case for substrate work is unglamorous, which is exactly why it is undervalued. There is no headline-friendly demo of a more searchable methods database. There is no grand challenge prize for normalizing instrument metadata.

Funding agencies and platforms that absorb this unsexy work will create more cumulative scientific value than the next model trained on the existing fragmented record. The fact that this is not obvious is itself part of why the leverage is so high — undervalued work returns more than well-valued work, almost by definition.

There is also no shortage of organizations that could lead this. National scientific infrastructure programs, large-scale repository operators, journal publishers with the leverage to require structured submissions, even individual large research labs that could standardize their own outputs as a credible commitment. The question is not whether the technology is ready. It is whether anyone with the resources will choose to deploy it on the part of the problem that actually matters.

The bet is that someone will. The bet is that, looking back from a decade hence, the consequential AI-for-science investments will turn out to have been the unglamorous infrastructure ones, and that the discovery-model headlines of this period will read as the surface foam over the deeper, slower, more important shift.

## Sources

1. **NIH / NLM** — [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/). Public biomedical and life-science reference infrastructure.
2. **PubMed** — [NIH/NLM biomedical literature index](https://pubmed.ncbi.nlm.nih.gov/). Peer-reviewed literature index and metadata infrastructure.
3. **NIST** — [National Institute of Standards and Technology](https://www.nist.gov/). Measurement standards and scientific infrastructure context.
4. **Wilkinson and colleagues, *Scientific Data*, 2016 (PubMed Central)** — [The FAIR Guiding Principles for scientific data management and stewardship](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792175/). The reference statement of what a machine-readable research record has to satisfy.
5. **Jumper and colleagues, *Nature*, 2021 (PubMed Central)** — [Highly accurate protein structure prediction with AlphaFold](https://pmc.ncbi.nlm.nih.gov/articles/PMC8371605/). The counter-example discussed below.
6. **Protein Structure Prediction Center** — [CASP14](https://predictioncenter.org/casp14/). The blind assessment that scored it; cited because independent assessment is what distinguishes this case from a vendor claim.
