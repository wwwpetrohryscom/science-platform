---
title: 'Temperature and biological rates: what the 0.65 eV constant is, and how much it varies'
metaTitle: 'Temperature and biological rates: the 0.65 eV constant'
excerpt: Biological rates rise with temperature in a way that looks Arrhenius-like, and a single activation energy near 0.65 eV is widely used to summarise it. A survey of 1,072 thermal responses found that mean holds and that the variation around it is systematic.
type: expert
author: biology-life-sciences-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - temperature
  - metabolic-rate
  - physiology
  - thermal-biology
related:
  - thermoregulation-in-animals
  - metabolic-scaling-and-body-size
  - physiology-explained
  - free-energy-and-biological-work
_bodyHash: b895cb27
pillar: physiology-explained
---

Warm an ectotherm and almost everything [its physiology](/en/biology/physiology/physiology-explained) does speeds up: respiration, growth, feeding, development, movement. Over the middle of a species' tolerated range the increase is close to exponential in temperature, and the standard summary borrows the Boltzmann–Arrhenius form from reaction kinetics, with a single fitted parameter — an activation energy — standing in for a whole organism's biochemistry.

That parameter has a canonical value near 0.65 electronvolts. It is worth knowing where the number comes from, what it does well, and where using it is a mistake.

## What the survey found

The most direct empirical test is a 2011 *PNAS* study by Dell, Pawar and Savage, which assembled 1,072 thermal responses spanning 112 distinct traits across a wide range of taxa and habitats. Of those responses, 87% fit the Boltzmann–Arrhenius model well over the rising portion of the curve.

The headline figure is a confirmation with a caveat attached: "The mean activation energy for these rises is 0.66 ± 0.05 eV, similar to the reported across-species (interspecific) value of 0.65 eV." So the canonical constant survives as a mean.

The distribution behind that mean is not narrow, and it is not symmetric. The median sits at 0.55 eV, below the mean, with the distribution skewed right — meaning most traits respond more weakly to temperature than the average does, and a minority respond much more strongly. Anyone applying 0.65 eV to a particular trait is applying a number that is above the typical case.

## The variation is structured, not noise

The same study breaks activation energies down by trait type and finds differences large enough to matter: 0.40 ± 0.05 eV for traits the authors classify as negatively motivated, 0.69 ± 0.09 eV for positively motivated ones, 0.64 ± 0.12 eV for voluntary traits and 0.76 ± 0.08 eV for autonomic ones.

A predator's attack rate and its escape rate are both temperature-dependent and need not share an activation energy. When they do not, warming changes the outcome of the encounter rather than just its tempo — which is a different kind of ecological prediction from "everything speeds up together", and a much harder one.

## The curve is not a line, and the decline is steeper

Arrhenius kinetics rise without limit. Organisms do not. Beyond a species-specific optimum, rates fall, and they fall faster than they rose: the survey gives a mean activation energy for declines of 1.15 ± 0.39 eV, roughly double the rise value and with far wider spread.

This asymmetry is the single most consequential feature of a thermal performance curve, and fitting only the rising limb hides it. An organism a few degrees below its optimum gains from warming; the same organism a few degrees above it loses much faster than symmetry would suggest. Two populations of one species sitting on opposite sides of the peak respond to the same warming in opposite directions, with different magnitudes.

Mechanistically the descending limb is not the same physics as the ascending one. The rise reflects reaction kinetics; the fall reflects enzyme denaturation and the breakdown of coordination between processes with different optima, which is why models that treat the whole curve with one activation energy are known to be wrong in a specified way rather than merely imprecise.

## The endotherm case, briefly

None of this applies straightforwardly to a mammal or a bird, because an endotherm holds its own temperature and pays to do so. The StatPearls reference gives the defended band as "a core body temperature of 37 +/- 0.5°C (98.6 +/- 0.9°F)", with thermoregulation defined as "the maintenance of physiologic core body temperature by balancing heat generation with heat loss."

An organism that keeps its internal temperature within a degree has removed environmental temperature as a driver of its reaction rates and replaced it with an energetic cost. That is the trade the [thermoregulation literature](/en/biology/physiology/thermoregulation-in-animals) is about, and it is why activation-energy summaries are an ectotherm tool.

## Q10 and why it is not a constant

The older summary statistic is Q10, defined by a 2015 paper in *Extreme Physiology & Medicine* as "the ratio of the rate of a physiological process at a particular temperature to the rate at a temperature 10 °C lower", and reported there with the standard range: "Q10 varies between 2 and 3 in biological systems." Q10 and activation energy are two parametrisations of the same curve, and the conversion is temperature-dependent: a fixed activation energy does not give a fixed Q10, because the Arrhenius exponent depends on 1/T rather than T.

Reporting a Q10 without the temperature interval it was measured over therefore leaves out information needed to use it. The convention persists because it is intuitive, and it is defensible over a narrow range near where it was measured.

## What this means for warming projections

Two cautions follow, and both are about applying a mean where a distribution is needed.

**A community is not a single Q10.** If activation energies differ systematically between trait types, and between the rising and falling limbs, then warming a community redistributes rates rather than scaling them. Predicting the aggregate requires the individual curves, not an average one.

**Position relative to the optimum decides the sign.** Whether warming helps or harms a population depends on where it currently sits on its own curve, which varies with latitude, season, and microhabitat. This is why tropical ectotherms — already near their optima — are expected to respond differently from temperate ones at the same absolute warming.

Body temperature is also the second axis of any whole-organism energy budget; the first is size, and the [mass-scaling exponent has its own contested history](/en/biology/physiology/metabolic-scaling-and-body-size). Comparing two organisms requires both corrections, and neither is a constant of nature.

## Sources

1. **PNAS (PMC)** — [Systematic variation in the temperature dependence of physiological and ecological traits](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127911/). The 1,072-response survey, mean and median activation energies, trait-class breakdown, and the decline value.
2. **Biology (PMC)** — [Body-mass scaling of metabolic rate: what are the relative roles of cellular versus systemic effects?](https://pmc.ncbi.nlm.nih.gov/articles/PMC4381225/). Physiological state as a modifier of metabolic scaling.
3. **PNAS (PMC)** — [Mammalian basal metabolic rate is proportional to body mass^2/3](https://pmc.ncbi.nlm.nih.gov/articles/PMC153045/). Temperature control as a prerequisite for comparing basal rates.
4. **NCBI Bookshelf (StatPearls)** — [Physiology, Temperature Regulation](https://www.ncbi.nlm.nih.gov/books/NBK507838/). The narrow band an endotherm defends, for contrast with the ectotherm case.
5. **Extreme Physiology & Medicine (PMC)** — [Metabolic costs of physiological heat stress responses: Q10 coefficients relating oxygen consumption to body temperature](https://pmc.ncbi.nlm.nih.gov/articles/PMC4580850/). Definition of Q10 and its usual biological range.
