---
title: 'Wärmeübertragung: drei Mechanismen mit unterschiedlicher Temperaturabhängigkeit'
metaTitle: 'Wärmeübertragung: Wärmeleitung, Konvektion und Strahlung'
excerpt: Wärmeleitung und Konvektion wachsen etwa im Gleichschritt mit der Temperaturdifferenz; die Strahlung wächst mit der vierten Potenz der absoluten Temperatur. Dieser Unterschied im Exponenten entscheidet, welcher Mechanismus dominiert, und die Antwort ändert sich mit der Betriebstemperatur.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - heat-transfer
  - conduction
  - convection
  - thermal-radiation
  - emissivity
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - solar-radiation-and-earth-energy-balance
pillar: laws-of-thermodynamics-explained
_bodyHash: 5d6fc5a4
---

Man nehme eine Oberfläche bei 500 K in einer Umgebung von 300 K und bringe sie dann auf 1,500 K. Die Temperaturdifferenz, die Wärmeleitung und Konvektion antreibt, wächst um das Sechsfache. Der Nettostrahlungsfluss wächst um etwa den Faktor 93, von rund 3.1 kW m⁻² auf 287 kW m⁻². An den Materialien hat sich nichts geändert; geändert haben sich die Exponenten. Wärmeleitung und Konvektion werden von einer *Differenz* der Temperatur angetrieben, die Strahlung von der Differenz der vierten Potenzen der *absoluten* Temperatur, und dieses Auseinanderfallen ist der Grund, warum der dominierende Verlustpfad in einem Kryostaten, in einer Hauswand und in einem Turbinengehäuse jeweils ein anderer ist.

Die Thermodynamik legt fest, in welche Richtung Energie fließt und wie viel Arbeit sich unterwegs entnehmen lässt, wie [die vier Hauptsätze festhalten](/de/physics/thermodynamics/laws-of-thermodynamics-explained), doch sie stellt dem Vorgang keine Uhr zur Seite. Die Rate ist ein eigenes Thema, und sie kennt nur drei Mechanismen.

## Wärmeleitung: ein Gradientengesetz, dessen Koeffizient keine Konstante ist

Wärmeleitung trägt Energie durch ein ruhendes Medium, getragen von molekularen oder elektronischen Stößen. Das Fouriersche Gesetz gibt den Fluss als proportional zum lokalen Temperaturgradienten an, mit der Wärmeleitfähigkeit k als Proportionalitätskonstante. Über eine ebene Platte im stationären Zustand reduziert sich das auf einen Fluss kΔT/L: Halbiert man die Dicke einer Wand, verdoppelt sich ihr Verlust, und in Reihe geschaltete Schichten addieren Widerstände statt Leitwerte.

Die aufgeräumte Form verdeckt, wie viel Arbeit der Koeffizient leistet. Die Datenbank kryogener Werkstoffe des NIST veröffentlicht für sauerstofffreies Kupfer Kurvenanpassungen, die von 4 K bis 300 K gelten und deren Übereinstimmung mit den zugrunde liegenden Daten mit 1–2% angegeben wird. Bei 300 K ausgewertet, liefern die Anpassungen für jede Reinheitsstufe der Tabelle etwa 390–400 W m⁻¹ K⁻¹ — bei Raumtemperatur spielt der Verunreinigungsgehalt kaum eine Rolle. Bei 20 K ausgewertet, liefern dieselben Anpassungen etwa 1.4 × 10³ W m⁻¹ K⁻¹ für ein Restwiderstandsverhältnis von 50 und etwa 6.6 × 10³ für ein Verhältnis von 500. Gleiches Element, gleiche Gleichung, und fast ein Faktor fünf zwischen zwei chemisch nahezu identischen Kupferchargen.

Grenzflächen verkomplizieren das Bild weiter. Zwei aufeinandergepresste Festkörper berühren sich nur an Rauheitsspitzen, sodass eine reale Fügestelle einen Temperatursprung trägt, den keine Volumenleitfähigkeit vorhersagt. In laminierten oder verschraubten Baugruppen ist der Kontaktwiderstand oft der größte Term der Kette, und deshalb fällt eine thermische Auslegung, die bei den Materialkennwerten stehen bleibt, tendenziell zu optimistisch aus.

## Konvektion: der Mechanismus, dessen Koeffizient gemessen und nicht hergeleitet wird

Der Konvektionsausdruck — der Fluss ist gleich h mal der Temperaturdifferenz zwischen Oberfläche und Fluid — sieht aus wie ein physikalisches Gesetz und kommt einer Definition näher. Der Wärmeübergangskoeffizient h nimmt alles auf, was die Gleichung ausgelassen hat: Strömungsgeschwindigkeit, Geometrie, Orientierung, Oberflächenzustand sowie Viskosität, Dichte, Leitfähigkeit und spezifische Wärmekapazität des Fluids.

Da sich h für realistische Geometrien nicht aus ersten Prinzipien herleiten lässt, gewinnt man ihn aus Korrelationen zwischen dimensionslosen Kennzahlen: die Nusselt-Zahl aus Reynolds- und Prandtl-Zahl bei erzwungener Strömung, aus der Rayleigh-Zahl bei freier Konvektion. Diese Korrelationen sind Anpassungen an bestimmte Experimente über bestimmte Bereiche, und ihre Genauigkeit bewegt sich eher im Bereich von zehn und mehr Prozent als im Bereich einzelner Prozent. Auslegungsreserven bei der Dimensionierung von Wärmeübertragern gibt es weitgehend deshalb, und der Fehlermodus besteht darin, eine Korrelation außerhalb der Geometrie oder des Strömungsregimes zu verwenden, für die sie angepasst wurde.

Konvektion erklärt auch das meiste von dem, was eine Dämmung leistet. Faser- und Schaumdämmstoffe wirken vor allem dadurch, dass sie Luft in Poren festsetzen, die klein genug sind, um eine Zirkulation zu unterdrücken, und nicht deshalb, weil die feste Matrix schlecht leitet; der abgeschlossene Gasspalt eines Fensters wird so dünn ausgelegt, dass eine auftriebsgetriebene Strömung gar nicht erst einsetzen kann. Vergrößert man den Spalt, steigt der Verlust, obwohl nun mehr Gas die Scheiben trennt.

## Strahlung: die vierte Potenz ändert die Arithmetik

Jede Oberfläche oberhalb des absoluten Nullpunkts sendet [elektromagnetische Strahlung](/de/physics/quantum-basics/electromagnetic-spectrum-applications) mit einer Rate aus, die das Stefan–Boltzmann-Gesetz angibt: εσT⁴, mit σ = 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴, einem Wert, den das SI heute exakt festlegt, weil er aus anderen definierten Konstanten folgt. Der Nettoaustausch zwischen einer Oberfläche und ihrer Umgebung geht mit der Differenz der vierten Potenzen.

Aus dem Exponenten folgen zwei Konsequenzen. Eine schwarze Oberfläche bei 300 K strahlt etwa 459 W m⁻² ab, was gewaltig klingt, bis man die 459 W m⁻² abzieht, die aus einer Umgebung gleicher Temperatur zurückkommen; es zählt der Nettowert, und ein Überschuss von 10 K gegenüber der Umgebung ergibt netto nur etwa 64 W m⁻² — vergleichbar mit freier Konvektion in Luft und daher nahe Raumtemperatur nie vernachlässigbar. Bei 1,500 K strahlt dieselbe Oberfläche etwa 287 kW m⁻² ab, und die Strahlung konkurriert nicht mehr mit den beiden anderen Mechanismen, sondern beherrscht sie.

Der andere Hebel ist spektral. Der **Emissionsgrad** ist das Verhältnis der Emission einer Oberfläche zu der eines idealen Strahlers, und das Kirchhoffsche Gesetz verknüpft ihn mit dem Absorptionsgrad bei gleicher Wellenlänge und gleicher Richtung. Weil Sonnenlicht bei kurzen Wellenlängen eintrifft, während eine Oberfläche nahe Umgebungstemperatur im thermischen Infrarot abstrahlt, lässt sich eine Beschichtung bauen, die das erste Band reflektiert und im zweiten stark abstrahlt. Die schärfste Demonstration ist eine in [*Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/) berichtete Apparatur, die über einen vollen Tag-Nacht-Zyklus im Mittel 37 °C unter der Umgebungslufttemperatur erreichte, mit einer maximalen Absenkung von 42 °C, mit einem auf das atmosphärische Fenster von 8–13 µm abgestimmten Emitter. Sie zeigt zugleich, wie schwach der Effekt gegenüber der Konkurrenz ist: Der Aufbau brauchte eine Vakuumkammer bei 10⁻⁶ Torr und zehn konzentrische Strahlungsschilde, damit Wärmeleitung und Konvektion das Strahlungsdefizit nicht auslöschten. Die ungeschirmte Version derselben Physik ist das Kühldach, für das die US-amerikanische Umweltschutzbehörde maximale Innentemperatursenkungen von 1.2–3.3 °C in Gebäuden ohne Klimaanlage und Senkungen der Kühllastspitze von 11–27% in Gebäuden mit Klimaanlage berichtet.

| Mechanismus | Was ihn antreibt | Wie er skaliert | Woran man dreht, um ihn zu steuern |
| --- | --- | --- | --- |
| Wärmeleitung | Temperaturgradient in einem Medium | Linear in ΔT, umgekehrt zur Weglänge | Leitfähigkeit, Dicke, Kontaktgüte |
| Konvektion | Differenz Oberfläche-Fluid plus Strömung | Linear in ΔT, mit h aus Strömung und Geometrie | Geschwindigkeit, Spaltbreite, Phasenwechsel |
| Strahlung | Absolute Temperatur beider Oberflächen | Differenz der vierten Potenzen | Emissionsgrad, spektrale Selektivität, Sichtfaktor |

## Zwei Systeme, in denen die Mischung die ganze Auslegung ist

Eine Gasturbinenschaufel ist ein Wärmeleitungs- und Konvektionsproblem, das ein thermodynamischer Wunsch erzeugt hat. Der Wirkungsgrad des Kreisprozesses steigt mit der Eintrittstemperatur, weshalb vom Energieministerium der Vereinigten Staaten geförderte Programme Turbineneintrittstemperaturen von 1,700 °C oder mehr angestrebt haben — wissentlich oberhalb des Schmelzpunkts der Substratlegierung — und auf Transpirations- und Gitterkühlung setzen, um über wenige Millimeter Metall einen Gradienten zu halten. Das Bauteil überlebt nicht, weil das Material die Gastemperatur verträgt, sondern weil der Transport konstruiert ist; das Effizienzmotiv dahinter ist in [Wärmekraftmaschinen und ihre Wirkungsgradgrenzen](/de/physics/thermodynamics/heat-engines-and-efficiency-limits) dargelegt.

Ein Planet ist der umgekehrte Fall. Innerhalb des Erdsystems bewegen Konvektion und Verdunstung den größten Teil der Energie: Nach der Bilanzierung der NASA treffen im globalen Mittel etwa 340 W m⁻² an der Obergrenze der Atmosphäre ein, 29% werden reflektiert, 23% in der Atmosphäre und 48% an der Oberfläche absorbiert; von derselben eintreffenden Summe verlassen 25% die Oberfläche wieder durch Verdunstung und 5% durch Thermik, gegenüber netto 17% als Infrarot. Der Weltraum ist jedoch ein Vakuum, sodass keiner dieser beiden Mechanismen ein Joule über die Obergrenze der Atmosphäre hinaustragen kann: Der einzige Ausgang ist die Strahlung, von einem Körper, der von außen wie eine Oberfläche bei etwa −20 °C aussieht. Wie das spektrale Detail dieser Emission funktioniert, wird in [Strahlungstransport durch eine Atmosphäre](/de/physics/climate-physics/radiative-transfer-explained) und in der thermodynamischen Einordnung [der planetaren Energiebilanz](/de/physics/thermodynamics/earth-energy-budget-and-the-second-law) aufgegriffen, während die eintreffende Hälfte der Bilanz in [Sonnenstrahlung und die Energiebilanz der Erde](/de/physics/energy/solar-radiation-and-earth-energy-balance) behandelt wird.

## Was die Koeffizienten nicht klären können

Jeder Mechanismus trägt eine andere Art von Unsicherheit, und sie sind nicht austauschbar. Die Leitfähigkeit ist für reine Materialien unter kontrollierten Bedingungen gut vermessen, doch der Betriebswert einer Dämmung driftet mit Feuchte, Kompression und Alterung, und die tatsächliche Leistung eines Wandaufbaus wird meist von Wärmebrücken bestimmt und nicht von dem Wert, der auf dem Produkt steht. Konvektive Koeffizienten erben die Streuung der Experimente, an die die Korrelationen angepasst wurden. Der Emissionsgrad ist das schwächste der drei Glieder: Eine einzelne Datenblattzahl ist ein Mittel über Wellenlänge, Winkel und Oberflächenzustand, und Oxidation oder Staub können sie über die Lebensdauer eines Bauteils erheblich verschieben.

Es gibt zudem eine Grenze, an der das Fouriersche Gesetz selbst nicht mehr gilt. Auf Längenskalen, die mit der mittleren freien Weglänge der [Energieträger](/de/physics/energy/hydrogen-as-an-energy-carrier) vergleichbar sind, oder auf Zeitskalen kürzer als deren Streuzeit wird der Transport ballistisch statt diffusiv, und eine gradientengetriebene Beschreibung trägt nicht mehr. Dieses Regime ist für die Mikroelektronik und für Dünnschicht-Thermoelektrika von Bedeutung, und es erinnert daran, dass alle drei obigen Ausdrücke Kontinuumsnäherungen mit einem Gültigkeitsbereich sind und keine Gesetze in dem Sinne, in dem es die thermodynamischen sind.

## Sources

1. **NIST Cryogenic Technologies Group** — [Material properties: OFHC copper](https://trc.nist.gov/cryogenics/materials/OFHC%20Copper/OFHC_Copper_rev1.htm). Kurvenanpassungen der Wärmeleitfähigkeit von 4 K bis 300 K nach Restwiderstandsverhältnis, mit angegebener Anpassungsgenauigkeit.
2. **NIST CODATA** — [Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Exakter Wert und Einheiten, die hier für die Berechnungen des Strahlungsflusses verwendet werden.
3. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Aufteilung der eintreffenden Sonnenenergie im globalen Mittel und die Energiepfade an der Oberfläche.
4. **Nature Communications** — [Radiative cooling to deep sub-freezing temperatures through a 24-h day–night cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/). Größenordnungen der Kühlung unter Umgebungstemperatur sowie Vakuum und Abschirmung, die zur Isolierung des Strahlungsterms nötig sind.
5. **U.S. Environmental Protection Agency** — [Using cool roofs to reduce heat islands](https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands). Gemessene Wirkungen hochreflektierender Dächer auf die Innentemperatur und die Kühllastspitze.
6. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems developed by additive manufacturing with ODS alloys](https://www.osti.gov/biblio/1923377). Angestrebte Turbineneintrittstemperaturen oberhalb des Schmelzpunkts des Substrats und der Kühlansatz, mit dem sie erreicht werden sollen.
