---
title: Ecology's reproducibility problem is real, and it is not a copy of psychology's
excerpt: Surveys find questionable research practices in ecology at rates close to those in psychology, but an ecological field study usually cannot be re-run. That changes both how an unreliable literature is diagnosed and what fixes it.
argument: Direct replication is unavailable for much ecological fieldwork, so the field's reliability problem has to be diagnosed through power, analytical flexibility and code availability rather than through repeat experiments — and corrected through coordinated design and synthesis rather than through repetition.
category: biology
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 9
tags:
  - research-methods
  - meta-research
  - statistics
  - open-science
  - ecology
related:
  - ecological-restoration-evidence
  - measurement-uncertainty-explained
  - microbiomes-and-host-microbe-interactions
  - food-webs-and-trophic-structure
_bodyHash: b88946c
---

Ecology has a reliability problem with much the same causes as psychology's and a materially different shape, and the difference is not cosmetic: it decides which corrections can work at all. The 2019 National Academies report draws the line that most public discussion of the subject ignores. **Reproducibility** is obtaining consistent results from the same data using the same code and analytical steps; **replicability** is obtaining consistent results from a new study that collects its own data to answer the same question. The two failure modes have different causes and different remedies, and ecology sits awkwardly across both.

It sits awkwardly because a large part of its evidence base cannot be re-run. A 2017 assessment in *BioScience* noted that in some cases direct replication of ecological research is difficult "because of strong temporal and spatial dependencies", and proposed metaresearch as a proxy measure precisely for that reason. The 2014 growing season at a particular grassland, with that year's rainfall and that plot's soil history and that community of insects, is not available for a second run. When a repeat study of the same question in a different place gets a different answer, no experiment can tell you whether the first result was wrong or whether the two systems simply differ.

That is the structural difference from psychology, where a mass replication programme is at least conceivable. It is not, however, an argument that ecology's evidence base is fine.

## What the surveys found, and what they did not

A 2018 anonymous survey published in *PLOS ONE* asked 807 researchers — 494 ecologists and 313 evolutionary biologists, a 15 per cent response from the 5,386 contacted — about their own practice. Of those surveyed, 64 per cent reported having at least once failed to report a result because it was not statistically significant; 51 per cent had presented an unexpected finding as though it had been hypothesised from the start; 42 per cent had collected more data after checking whether a result was significant. The authors' own conclusion was that these rates are comparable with those seen in psychology.

Two things follow, and only one of them is usually drawn. The first is that the behaviours that generated psychology's crisis are present here. The second is that the *diagnostic* used in psychology — attempt the replication, count the failures — is unavailable, so the evidence about ecology's reliability has to come from elsewhere: from the statistical properties of the studies themselves, from what happens when different analysts are given the same data, and from what is missing when someone tries to check a published result.

## Power is the binding constraint

The most quantified line of evidence concerns statistical power. An analysis of 3,847 field experiments designed to estimate the effect of environmental stressors on ecosystems, published in *Global Change Biology*, found that after controlling for publication bias, single experiments were underpowered to detect response magnitude, with median power of 18 to 38 per cent depending on the effect size assumed. Power to detect changes in response *variability* was lower still, at 6 to 12 per cent.

Low power does not merely produce more false negatives. It inflates the effects that do reach significance, because only large estimates clear the threshold. The same analysis put that exaggeration at two to three times for response magnitude and four to ten times for variability. Once the bias was corrected for, estimates of response magnitude came out 17 to 31 per cent lower. The same reasoning applies wherever a field estimate is scarce and expensive, which is most of environmental science; it is the reason [restoration outcomes measured on short monitoring records](/en/ecology/conservation/ecological-restoration-evidence) should be read with the sample size in view.

One finding in that analysis cuts against the intuitive fix. Manipulative experiments and non-manipulative observations had very similar power and very similar error rates, so the common assumption that an experiment is inherently the more trustworthy design is, on this evidence, overstated.

## The same data, analysed 174 ways

The second line of evidence is newer and, for a reader trying to weigh a single paper, more unsettling. A study reported in *BMC Biology* in 2025 gave two unpublished datasets — nestling growth against sibling number in blue tits, and *Eucalyptus* seedling recruitment against grass cover — to 174 analyst teams comprising 246 analysts, all working from prespecified research questions. The teams returned 141 usable effects for the blue tit data and 85 for the *Eucalyptus* data.

For the blue tits the average effect was convincingly negative, but the individual results ran in near-continuous variation from large negative effects through effects near zero, with some crossing the significance threshold in the opposite direction. For the *Eucalyptus* data the average was only slightly negative and not distinguishable from zero, while about a third of the individual effects were significant in one direction or the other.

The detail that matters most is what did not explain the spread. Variable selection, random-effects structure and peer reviewers' ratings of analytical quality showed no strong relationship with how far a result sat from the meta-analytic mean. Analyses far from the centre were not detectably worse analyses. This is a problem about the [uncertainty a single measurement or estimate can carry](/en/physics/mechanics-waves/measurement-uncertainty-explained) rather than about competence — and in that exercise, review did not track it.

## The strongest case that the alarm is overstated

There is a serious counterposition, and it is held by working meta-analysts rather than by contrarians.

Its central piece of evidence is a 2022 study in *Ecology* that compiled 466 ecological meta-analyses and looked for decline effects — the pattern in which early large effects are followed by smaller ones as a literature matures, which is what pervasive publication bias should produce. Only about 5 per cent of those meta-analyses showed a directional change in mean effect size attributable to anything other than chance. Most apparent declines were regression to the mean, consistent with primary studies appearing in random order with respect to the effects they report. If publication bias were distorting the cumulative record as badly as the survey data suggest it should, that record would not be as temporally stable as it is.

The power analysis itself supports part of this. Its authors found that meta-analysis largely mitigated the problems of low power and exaggerated effect sizes. The synthesis machinery, in other words, appears to be doing the job it was built for.

A second strand of the counterargument concerns what disagreement between studies means. A 2022 review in *Trends in Ecology & Evolution* separates *mechanistic* context dependence, where a relationship genuinely changes sign or magnitude with conditions because of a real interaction, from *apparent* context dependence arising from confounding, statistical artefacts and methodological differences between studies. Under the first, two studies disagreeing is a finding about the world rather than a failure by either. Where mechanistic context dependence is common, treating every non-replication as an error discards real signal — and the same review is careful that the label is often applied to the apparent kind, which is not a defence of anything.

This is a live disagreement rather than a settled one, and the two camps overlap: the same group that produced the power analysis has published objections to the decline-effect result in the same journal. What survives from both sides is narrower than either headline. The cumulative literature is more stable than the survey data alone would predict; the individual study is less informative than its confidence interval implies. Those two statements are compatible, and together they say something specific — trust the synthesis more than the paper.

## Where the evidence is one-sided

On one question there is no real dispute. A 2020 review in *PLOS Biology* sampled 346 non-molecular ecology articles published between 2015 and 2019 under mandatory or encouraged code-sharing policies and found code available for 27 per cent of eligible articles, against data for 79 per cent. Over the same period the share of ecological journals with such policies rose from 15 per cent in 2015 to 75 per cent in 2020. Policy adoption and author compliance moved in opposite directions.

That gap matters more than it sounds. Computational reproducibility is the one form of checking fully available to this field, because it needs no second field season and no cooperative weather. When a published result cannot be recomputed, it is usually being lost to a missing file rather than to any deep property of ecosystems — and given how much of the spread in the many-analyst study came from ordinary modelling choices, the script is often the only record of what was actually done.

## What actually changes the answer

Three corrections address the diagnosis rather than the symptom.

Coordinated distributed experiments substitute breadth for repetition: the same protocol run at many sites, analysed together, so that between-site variation becomes an estimated quantity instead of an unexplained discrepancy. A grassland nutrient-and-herbivory experiment replicated at 40 sites on six continents, reported in *Nature*, could separate a general mechanism from site-specific noise in a way no single well-designed plot experiment can.

Preregistration and the routine reporting of non-significant results attack the selection process the survey data expose, though the evidence that they change published effect sizes in this field is still thin — adoption is recent and the relevant comparisons are only now accumulating. Publishing analysis code addresses the computational gap directly, and is both the cheapest of the three and the one with the least ambiguity about whether it worked.

None of this makes a 2014 field season repeatable. That is the point: the corrections available to ecology are design corrections and disclosure corrections, not replication corrections. For a reader, the practical consequence is narrow but usable. A single field study with a modest sample is weak evidence about the magnitude of anything, and the same caution applies to observational sequencing surveys, where the [inference from composition to mechanism](/en/biology/microbiology/microbiomes-and-host-microbe-interactions) is separately fragile — a limit examined in the insight on [why microbiome associations outrun causal tests](/en/insight/microbiome-research-and-the-causal-gap). Well-constructed syntheses and multi-site experiments are considerably stronger. And where a claim depends on the exact shape of a fitted model — as claims about [energy flow through food webs](/en/ecology/ecosystems/food-webs-and-trophic-structure) often do — the absence of published code removes the only check this field can actually perform.

What none of this supports is a rate. Psychology can quote a replication percentage because it ran the replications. Ecology has power distributions, an analytical spread measured on two datasets and a code-availability count, and no way to turn those into the share of its published results that would not hold up.

## Sources

1. **National Academies of Sciences, Engineering, and Medicine** — [Reproducibility and Replicability in Science](https://www.ncbi.nlm.nih.gov/books/NBK547546/). Definitions of reproducibility and replicability, and the point that a rigorously conducted study may still fail to replicate.
2. **BioScience** — [Metaresearch for Evaluating Reproducibility in Ecology and Evolution](https://pubmed.ncbi.nlm.nih.gov/28596617/). Why direct replication is difficult in ecology, and the case for metaresearch as a proxy.
3. **PLOS ONE** — [Questionable research practices in ecology and evolution](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200303). Survey of 807 researchers; the 64, 51 and 42 per cent figures and the comparison with psychology.
4. **Global Change Biology** — [Low statistical power and overestimated anthropogenic impacts, exacerbated by publication bias, dominate field studies in global change biology](https://pubmed.ncbi.nlm.nih.gov/34736291/). Power, Type M error and publication-bias adjustment across 3,847 field experiments.
5. **BMC Biology** — [Same data, different analysts: variation in effect sizes due to analytical decisions in ecology and evolutionary biology](https://pubmed.ncbi.nlm.nih.gov/39915771/). The 174-team analytical variability study and the failure of quality ratings to predict deviation.
6. **Ecology** — [Decline effects are rare in ecology](https://pubmed.ncbi.nlm.nih.gov/35302660/). The 466-meta-analysis compilation and the regression-to-the-mean explanation.
7. **Ecology** — [Decline effects are rare in ecology: Comment](https://pubmed.ncbi.nlm.nih.gov/37290921/). The published objection that keeps this question open.
8. **Trends in Ecology & Evolution** — [Addressing context dependence in ecology](https://pubmed.ncbi.nlm.nih.gov/34756764/). The distinction between mechanistic and apparent context dependence.
9. **PLOS Biology** — [Low availability of code in ecology: A call for urgent action](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000763). Code availability at 27 per cent against data at 79 per cent, and the growth of journal policies.
10. **Nature** — [Herbivores and nutrients control grassland plant diversity via light limitation](https://www.nature.com/articles/nature13144). A single protocol replicated at 40 grasslands on six continents, as an example of a coordinated distributed experiment.
