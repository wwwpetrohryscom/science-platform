---
title: Die thermodynamischen Grenzen der Photovoltaik — und warum sie über das Mögliche entscheiden
metaTitle: 'Die thermodynamischen Grenzen der Photovoltaik'
excerpt: Es gibt eine harte Obergrenze dafür, wie viel Sonnenlicht eine Einfachsolarzelle in Strom umwandeln kann. Zu wissen, woher sie kommt, klärt, welche Verbesserungsrichtungen Physik sind und welche Ingenieurskunst.
type: expert
author: energy-systems-desk
publishedDate: '2026-02-26'
updatedDate: '2026-09-03'
readingTime: 5
pillar: laws-of-thermodynamics-explained
tags:
  - thermodynamics
  - photovoltaics
  - shockley-queisser
  - energy
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
---

Es gibt eine harte Obergrenze dafür, wie viel Sonnenlicht eine Einfachsolarzelle in Strom umwandeln kann. Unter Standardsonneneinstrahlung liegt sie nahe 33 % — die Shockley-Queisser-Grenze, [1961 hergeleitet](https://doi.org/10.1063/1.1736034) aus einem Argument des detaillierten Gleichgewichts über einen p-n-Übergang unter Schwarzkörperbeleuchtung. Leistungsstarke Siliziumzellen arbeiten nahe genug an dieser Grenze, dass weitere Gewinne zunehmend ingenieurtechnisch begrenzt sind. Zu wissen, woher die Grenze kommt — und sie kommt aus [den Hauptsätzen der Thermodynamik](/de/physics/thermodynamics/laws-of-thermodynamics-explained) und nicht aus einer Eigenschaft des Siliziums —, klärt, was als Grundlagenphysik zählt und was als Ingenieurskunst.

## Woher die Grenze kommt

Die Shockley-Queisser-Grenze ist ein thermodynamisches Argument, kein ingenieurtechnisches. Sie gilt für jeden Absorber mit einer einzigen Bandlücke unter Standardsonneneinstrahlung, unabhängig von Material, Aufbau oder Fertigungsverfahren.

Sie entsteht aus drei nicht reduzierbaren Verlustmechanismen.

**Photonen unterhalb der Bandlücke gehen hindurch.** Die Bandlücke einer Solarzelle legt die kleinste Photonenenergie fest, die ein Elektron über sie hinweg anregen kann. Photonen mit weniger Energie werden nicht absorbiert — sie gehen hindurch und tragen nichts bei. Bei einer typischen Siliziumbandlücke (1,1 eV) verwirft das einen großen Teil des langwelligen Sonnenspektrums.

**Photonen oberhalb der Bandlücke thermalisieren.** Photonen mit mehr als genug Energie regen Elektronen weit hinauf ins Leitungsband an, doch diese Elektronen fallen rasch zur Bandkante zurück und verlieren den Überschuss als Wärme, auf einer Zeitskala, die weit kürzer ist als die ihrer Entnahme als elektrische Arbeit. Ob das Photon 2 eV oder 4 eV trug, heraus kommt der Bandlückenbetrag eines Elektrons.

**Strahlende Rekombination.** Eine Zelle, die Photonen absorbiert, muss nach dem detaillierten Gleichgewicht auch welche aussenden. Das setzt einen Mindestverlust durch spontane Emission, den keine Physik beseitigen kann, ohne die Temperatur des Absorbers oder die Geometrie des einfallenden Lichts zu ändern.

Die Bandlücke zu optimieren wägt diese Verluste ab. Eine zu kleine Bandlücke fängt mehr Photonen ein, verliert aber mehr durch Thermalisierung. Eine zu große fängt weniger Photonen ein, holt aber aus jedem mehr Energie. Das Optimum liegt nahe 1,3 eV; Silizium mit 1,1 eV liegt etwas darunter, was mit erklärt, warum seine praktische Grenze näher an 30 % als an 33 % liegt.

Diese Verluste sind thermodynamisch. Kein Entwurf mit einer einzigen Bandlücke kann sie beseitigen.

## Was die Grenze nicht einschränkt

Die Shockley-Queisser-Grenze gilt für Einfachzellen unter Standardbeleuchtung. Drei bekannte Richtungen umgehen sie.

**Mehrfachzellen.** Absorber mit verschiedenen Bandlücken zu stapeln lässt jeden den Spektralteil bearbeiten, in dem er am besten ist. Die obere Zelle fängt hochenergetische Photonen, bevor sie thermalisieren können; die untere fängt die energieärmeren Photonen, die die obere durchgelassen hat. Mit unendlich vielen Übergängen und Konzentration steigt die thermodynamische Grenze auf etwa 86 %. Mit realistischen endlichen Stapeln wurden Laborwirkungsgrade über 47 % gemessen. Die heutige Generation von Perowskit-Silizium-Tandems ist die kommerziell einschlägige Fassung dieser Strategie.

**Konzentrierende Photovoltaik.** Sonnenlicht auf eine kleine Zelle zu bündeln hebt das chemische Potenzial des Photonenflusses gegenüber der Zelle. Für einen einzelnen Übergang bei sehr hoher Konzentration steigt die Grenze in Richtung 40 %. Das verlangt Präzisionsnachführung und aktive Kühlung, was die wirtschaftlich sinnvollen Einsatzszenarien einschränkt.

**Entnahme heißer Ladungsträger.** Ladungsträger zu entnehmen, bevor sie vollständig thermalisieren, kann im Prinzip einen Teil der sonst als Wärme verlorenen Energie erhalten. Das wurde in Machbarkeitsbauteilen gezeigt, hat aber keine praktische Effizienz erreicht. Die erforderliche Entnahmegeschwindigkeit stößt an grundlegende Relaxationszeitskalen in Halbleitern.

**Spektrumsveränderung.** Abwärtskonversion (ein hochenergetisches Photon in zwei energieärmere spalten) und Aufwärtskonversion (zwei energiearme Photonen zu einem verbinden) können das einfallende Spektrum im Prinzip so umformen, dass es besser zu einer einzigen Bandlücke passt. Beides wurde gezeigt; keines hat einsatzrelevante Wirkungsgrade erreicht.

Jede davon ist eine echte Forschungsrichtung. Keine verletzt die zugrunde liegende Thermodynamik; jede ändert die Bedingungen, unter denen das thermodynamische Argument gilt.

## Was das für die Kostenkurve bedeutet

Den Kostenrückgang von Einfachsilizium haben überwiegend Fertigungsskalierung und Prozessverfeinerung getragen, nicht die Physik. Die Technik arbeitet seit Jahren nahe ihrer praktischen Wirkungsgradobergrenze; weitere Kostenrückgänge kommen aus billigerer Fertigung derselben Physik.

Mehrfachansätze — besonders Perowskit-Silizium-Tandems — sitzen auf einer anderen Kostenkurve. Ihre Wirkungsgradobergrenze liegt merklich höher; ihre Fertigungsreife weit niedriger. Die Frage des kommenden Jahrzehnts ist, ob die Fertigungskurve der Tandems schnell genug sinken kann, um sie im großen Maßstab wirtschaftlich zu machen, bevor der Kostenrückgang des Siliziums sättigt.

Konzentrierende Photovoltaik sitzt auf noch einer weiteren Kurve. Ihre thermodynamische Obergrenze ist hoch, doch ihre Systemnebenkosten (Nachführung, Kühlung, Optik) sind hoch genug, dass sie eine Nische geblieben ist, auch als die zugrunde liegenden Zellwirkungsgrade stiegen.

Die kommerzielle Entwicklung der Solarstromerzeugung im kommenden Jahrzehnt entscheidet sich vor allem daran, wie der Wettstreit Tandem gegen Silizium ausgeht, mit Konzentration und heißen Ladungsträgern als längerfristigen Anwärtern. Die Thermodynamik zu kennen sagt, welche davon durch Physik begrenzt sind (Silizium, nahe seiner Grenze) und welche noch Luft haben (Tandems, mit erheblicher Luft).

## Was das für nicht photovoltaische Erzeugung bedeutet

Dieselbe Art thermodynamischen Arguments gilt mit anderen Konstanten für alle solaren Umwandlungsverfahren.

Solarthermische Erzeugung hat ihre eigene Obergrenze vom Carnot-Typ, die von der Empfängertemperatur abhängt. Die Photosynthese hat unter Idealbedingungen eine Quantenausbeutegrenze um 11 %, während Feldkulturen eine Größenordnung darunter arbeiten. Künstliche Photosynthese zur Kraftstofferzeugung hat Grenzen, die die Thermodynamik der Zielreaktion setzt — Wasser zu spalten hat eine andere Obergrenze als CO₂ zu reduzieren.

Die Shockley-Queisser-Grenze ist keine Eigenheit der Photovoltaik; sie ist der photovoltaische Fall eines allgemeinen Prinzips. Solare Umwandlung ist begrenzt; die Grenzen hängen vom Umwandlungsverfahren ab. Die Grenze des eigenen Verfahrens zu kennen sagt, ob die ingenieurtechnische Front nahe daran liegt oder weit davon — und ob weitere Verbesserung eine Frage des Aufwands oder eine Frage der Physik ist.

Das ist die Art Klarheit, die man haben sollte, bevor man Energiewetten über ein Jahrzehnt eingeht.

## Sources

1. **National Laboratory of the Rockies** — [Photovoltaikforschung](https://www.nlr.gov/pv/research). Photovoltaikforschung und Leistungskontext des Labors des US-Energieministeriums, früher NREL genannt.
2. **US-Energieministerium** — [Solar Energy Technologies Office](https://www.energy.gov/cmei/systems/integrated-energy-systems-office). Kontext zu Solarforschung und -ausbau im DOE.
3. **Reviews of Modern Physics** — [Zeitschriften der American Physical Society](https://journals.aps.org/rmp/). Begutachtete Übersichtsliteratur zu photovoltaischen und thermodynamischen Grenzen.
