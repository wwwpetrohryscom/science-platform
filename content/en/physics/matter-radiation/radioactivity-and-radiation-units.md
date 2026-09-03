---
title: 'Becquerel, gray, sievert: three units that answer three different questions'
metaTitle: 'Becquerel, gray and sievert: three different questions'
excerpt: A count of decays, an energy deposit and a risk-weighted estimate are not interchangeable, yet radiation reporting swaps them routinely. Here is what each unit in the chain measures, and the point at which each one stops meaning anything.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - radiation-units
  - dosimetry
  - radioactivity
  - background-radiation
  - si-units
related:
  - atomic-and-nuclear-physics-explained
  - ionising-radiation-exposure-and-risk
  - nuclear-fission-and-reactors
  - measurement-uncertainty-explained
pillar: atomic-and-nuclear-physics-explained
_bodyHash: bff7d6dd
---

How fast a source is decaying, how much energy its emissions leave behind in a kilogram of matter, and how much biological harm that deposit is expected to represent are three separate quantities. The becquerel, the gray and the sievert measure them in that order, and each step forward adds an assumption the previous unit did not carry. Collapsing all three into a single scale of "how much radiation" is the most common error in reporting on the subject, and it runs in both directions: alarm at a figure that cannot justify it, and reassurance from a figure that cannot justify that either.

## Three emissions, three different reaches

The unit chain only makes sense alongside what is being emitted, because the emissions behave very differently once outside. The decay modes themselves are covered in the [binding-energy account of nuclear stability](/en/physics/matter-radiation/atomic-and-nuclear-physics-explained); what matters here is penetration.

Alpha particles — helium nuclei — are heavy and doubly charged, and they spend their energy almost immediately. The US Environmental Protection Agency's summary is that they "lack the energy to penetrate even the outer layer of skin", which makes an external alpha emitter close to harmless and an inhaled or ingested one the opposite: the same short range means all the energy lands in a handful of cells. Beta particles travel further in air but can be stopped "by a layer of clothing or by a thin layer of a substance such as aluminum". Gamma rays, being uncharged photons at the high-energy end of [the electromagnetic spectrum](/en/glossary/electromagnetic-spectrum), may need "several inches of a dense material like lead, or even a few feet of concrete".

So the same activity, in the same unit, describes a trivial external hazard for one nuclide and a serious one for another. The unit has not lied; it was never measuring that.

## Activity is a rate, and a rate is not a quantity of anything

The **becquerel** is defined in the SI as one reciprocal second — one nuclear transformation per second. NIST's guide carries a pointed footnote: "Activity referred to a radionuclide is sometimes incorrectly called radioactivity." The older unit, the curie, is 3.7 × 10¹⁰ Bq, which is why legacy figures in curies look small and modern figures in becquerels look enormous for the same source.

Because activity is a rate, it is fixed jointly by how many atoms are present and how fast each one decays — and half-lives span an absurd range. Using half-lives from the IAEA's evaluated data, one megabecquerel corresponds to about 0.22 nanograms of iodine-131, roughly 0.31 micrograms of caesium-137, or 80 grams of uranium-238. The same headline activity is a speck, a smear, or a paperweight, depending entirely on which nuclide it is.

That is also why a bare becquerel figure in a food or soil measurement carries so little information on its own. Without the nuclide, the emission type, and the pathway by which it might reach a person, the number is a rate of events in a sample and nothing more.

## Absorbed dose is energy per kilogram, and only that

The **gray** is one joule per kilogram — in SI base units, m²·s⁻². It is a purely physical quantity: energy deposited in matter, divided by the mass of that matter. It applies to a person, a phantom, a tomato or a transistor. The corresponding legacy unit, the rad, is 10⁻² Gy.

The arithmetic here catches people out. Four joules per kilogram delivered into water would raise its temperature by about 0.001 K. Yet the EPA puts the threshold for acute radiation syndrome at more than 0.75 gray absorbed "in a short time span (minutes to hours)" — under a fifth of that energy. The deposit is negligible thermally and decisive biologically, because ionising radiation does not warm tissue; it breaks particular bonds in particular molecules, and the consequence is set by where the energy lands rather than by how much of it there is.

That same fact is why absorbed dose alone cannot rank hazards across radiation types. A gray delivered by alpha particles concentrates its ionisations along a very short track; a gray of gammas spreads them thinly. Equal energy, unequal consequence.

## The sievert is where physics hands over to judgement

The **sievert** has the same base units as the gray — J/kg, m²·s⁻² — and measures something different. Equivalent dose multiplies absorbed dose in an organ by a radiation weighting factor reflecting how damaging that radiation type is per unit energy. Effective dose then sums weighted organ doses using tissue weighting factors that reflect each organ's contribution to overall detriment. One rem is 10⁻² Sv.

Two units sharing base-unit dimensions but not meaning is exactly the situation that makes dimensional checking useless as a guard. Only the name distinguishes them, so the name has to be used correctly.

| Quantity | Unit | SI base units | What it depends on | Legacy unit |
| --- | --- | --- | --- | --- |
| Activity | becquerel (Bq) | s⁻¹ | Number of atoms and their half-life | curie: 1 Ci = 3.7 × 10¹⁰ Bq |
| Absorbed dose | gray (Gy) | m²·s⁻² | Energy deposited per unit mass | rad: 1 rad = 10⁻² Gy |
| Equivalent and effective dose | sievert (Sv) | m²·s⁻² | Absorbed dose plus weighting choices | rem: 1 rem = 10⁻² Sv |

## Background, written out with its spread

UNSCEAR's summary of natural sources puts the global average annual effective dose at 2.4 mSv, with a typical range of 1–13 mSv and the note that "sizeable population groups receive 10-20 mSv annually". Inhalation of radon contributes 1.26 mSv on average (0.2–10 mSv); external terrestrial radiation 0.48 mSv; cosmic radiation 0.39 mSv; ingestion 0.29 mSv.

National figures run higher because they include medical exposure. The EPA gives the average annual total in the United States as 6.2 mSv and notes that "another 48 percent of the average American's dose comes from medical procedures", with radon in a typical home contributing 2.28 mSv and terrestrial radioactivity 0.21 mSv.

The spread inside those ranges is the useful part. A factor of thirteen separates the low and high ends of ordinary natural exposure before anyone has done anything unusual, which sets the scale against which any additional figure should be read.

## The last link in the chain carries the least

Effective dose is the unit most often quoted and the one with the narrowest legitimate use. A review in *Health Physics* states the position plainly: it "is calculated for a Reference Person and not for an individual", its tissue weighting factors are "averaged across all ages and both genders and thus do not apply to any specific individual", and it "should never be used to estimate future cancer risk from specific sources of radiation exposure". The same review notes it "is not recommended for epidemiological evaluations".

So the last link in the chain is a planning and comparison quantity for radiological protection, built on a reference phantom and on averaged weighting factors chosen by committee. It is not a measurement of what happened to a particular person, and converting it into an individual probability of harm — a step that reporting makes almost automatically — goes beyond what the quantity was constructed to carry. What the underlying epidemiology does and does not support is a separate question, taken up in [the evidence on low-dose exposure](/en/physics/matter-radiation/ionising-radiation-exposure-and-risk).

Two smaller cautions belong with it. Legacy units persist unevenly: exposure is still occasionally quoted in roentgens, defined as 2.58 × 10⁻⁴ C/kg, a quantity of ionisation in air that is neither activity nor dose. And a stated dose figure inherits the uncertainty of the dosimetry behind it, which for retrospective reconstructions can be large — a reminder that a number without its uncertainty is only half reported, as set out in [the discipline of stating an uncertainty](/en/physics/mechanics-waves/measurement-uncertainty-explained).

## Sources

1. **NIST, Guide for the Use of the SI (SP 811)** — [Two classes of SI units and the SI prefixes](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes). Definitions of becquerel, gray and sievert and their expressions in SI base units.
2. **NIST, Guide for the Use of the SI (SP 811)** — [Units outside the SI](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-5-units-outside-si). Conversion factors for the curie, rad, rem and roentgen.
3. **UNSCEAR** — [Radiation FAQ](https://www.unscear.org/unscear/en/areas-of-work/radiation-faq.html). Global average and range of annual effective dose from natural sources, by component.
4. **US EPA** — [Radiation sources and doses](https://www.epa.gov/radiation/radiation-sources-and-doses). United States average annual dose and its breakdown by source.
5. **US EPA** — [Radiation basics](https://www.epa.gov/radiation/radiation-basics). Penetrating power of alpha, beta and gamma radiation and the internal-versus-external distinction.
6. **Health Physics** — [Appropriate use of effective dose in radiation protection and risk assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC5878049/). The reference-person basis of effective dose and the uses it is not intended for.
7. **IAEA Nuclear Data Services** — [Livechart of Nuclides](https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html). Half-lives used to convert one megabecquerel into a mass for each nuclide.
8. **US EPA** — [Radiation health effects](https://www.epa.gov/radiation/radiation-health-effects). The absorbed-dose threshold quoted for acute radiation syndrome.
