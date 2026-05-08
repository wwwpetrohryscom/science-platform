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
_bodyHash: d3c24af4
---

The conversation about AI in science is dominated by a particular kind of story: discovery. Protein-structure prediction, [materials](/en/physics/energy/perovskite-stack-field-stability) screening, and literature-mining systems are real scientific tools. But public research infrastructure from [NIH/NLM](https://www.ncbi.nlm.nih.gov/books/), peer-reviewed literature indexed in [PubMed](https://pubmed.ncbi.nlm.nih.gov/), and [measurement](/en/physics/quantum-basics/electromagnetic-spectrum-applications) standards from [NIST](https://www.nist.gov/) point to a less visible bottleneck: the experimental record is still hard to reproduce, query, and reuse at scale.

The wins that compound are different ones, and they are quietly going underfunded.

## The current framing

The dominant frame for AI in science is that AI is a discovery engine. Train a powerful enough model on enough scientific data, and it will see patterns the human researchers could not. Promising biomarkers. Novel catalysts. New drug targets. The output of the process is a candidate that humans then validate experimentally.

This is happening, it is real, and it is also the application that least benefits from cumulative effects. Each discovery model is trained on a research record that remains fragmented, unstandardized, and largely irreproducible. The next discovery model trained on the same record runs into the same substrate problem. The marginal model captures less new ground because the substrate has not improved.

## Where the leverage actually is

The substrate is the bottleneck. Standardized experimental records — protocols, raw data, instrument metadata, negative results — are what every downstream use of AI in science depends on. They are also where the substrate problem is most acute: most of this information lives in PDFs, in lab notebooks, in supplementary [materials](/en/physics/energy/perovskite-stack-field-stability), in formats that vary not just by field but often by lab.

AI may be useful for the structured work of extracting and normalizing this information. The same model families that summarize prose can help parse a methods section or supplementary table, but deployment quality depends on validation, provenance, and human review. The technology is useful; it is not a substitute for scientific curation.

If the time and money currently going into another foundation model trained on Wikipedia were instead going into systematic extraction of the experimental record into a structured, queryable, machine-readable form, the cumulative effect over five years would be substantially larger than another iteration of the discovery model.

## What this would change

A standardized, machine-readable experimental record changes several things at once.

Reproducibility becomes a routine check, not a heroic effort. A reader who wants to verify a claim does not need to reconstruct the experiment from the prose; they query the structured record.

Meta-analyses become easier to update when the underlying records are structured. A researcher asking "what is the actual distribution of effect sizes for this intervention" still needs study-quality filters, but the extraction burden is lower.

The next generation of discovery models trains on a clean substrate. The patterns they identify are over data that has been cleanly recorded, not over the noise of inconsistent reporting. The signal-to-noise ratio for the modeling itself improves.

Negative results become first-class. Most negative results are never published; the ones that are, are buried in supplementary materials. A structured extraction surface that captured them would substantially improve the field's collective understanding of what does not work.

## Why this is undervalued

The investment case for substrate work is unglamorous, which is exactly why it is undervalued. There is no headline-friendly demo of a more searchable methods database. There is no grand challenge prize for normalizing instrument metadata.

Funding agencies and platforms that absorb this unsexy work will create more cumulative scientific value than the next model trained on the existing fragmented record. The fact that this is not obvious is itself part of why the leverage is so high — undervalued work returns more than well-valued work, almost by definition.

There is also no shortage of organizations that could lead this. National scientific infrastructure programs, large-scale repository operators, journal publishers with the leverage to require structured submissions, even individual large research labs that could standardize their own outputs as a credible commitment. The question is not whether the technology is ready. It is whether anyone with the resources will choose to deploy it on the part of the problem that actually matters.

The bet is that someone will. The bet is that, looking back from a decade hence, the consequential AI-for-science investments will turn out to have been the unglamorous infrastructure ones, and that the discovery-model headlines of this period will read as the surface foam over the deeper, slower, more important shift.

## Sources

1. **NIH / NLM** — [NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/). Public biomedical and life-science reference infrastructure.
2. **PubMed** — [NIH/NLM biomedical literature index](https://pubmed.ncbi.nlm.nih.gov/). Peer-reviewed literature index and metadata infrastructure.
3. **NIST** — [National Institute of Standards and Technology](https://www.nist.gov/). Measurement standards and scientific infrastructure context.
4. **Nature** — [Nature research journals](https://www.nature.com/). Peer-reviewed literature on scientific data, AI, and reproducibility.
5. **Science** — [Science journals](https://www.science.org/). Peer-reviewed literature on scientific infrastructure and research reproducibility.
