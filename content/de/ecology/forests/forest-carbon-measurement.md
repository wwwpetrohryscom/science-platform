---
title: 'Waldkohlenstoff messen: Allometrie, Probeflächen, Lidar und das Fehlerbudget'
metaTitle: 'Waldkohlenstoff messen: Allometrie, Probeflächen, Lidar'
excerpt: Niemand wiegt einen Wald. Jede veröffentlichte Waldkohlenstoffzahl ist das Ergebnis einer Kette von Ersetzungen vom Maßband bis zur globalen Summe, und der größte Speicher in dieser Summe ist der am schlechtesten gemessene.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - forest-carbon
  - allometry
  - lidar
  - forest-inventory
  - measurement-uncertainty
related:
  - forest-ecosystems-explained
  - forest-degradation-vs-deforestation
  - deforestation-statistics-explained
  - boreal-forests-and-permafrost-interactions
pillar: forest-ecosystems-explained
_bodyHash: 3a3114c2
---

Niemand hat je einen Wald gewogen. Jede Kohlenstoffzahl, die einem Wald anhängt, ist das Ergebnis einer Kette von Ersetzungen: ein Stammdurchmesser steht für die Masse eines Baumes, ein statistisches Modell steht für die Ernte, die sie gemessen hätte, eine Probefläche steht für eine Landschaft, und ein Satellit steht für die Probeflächen, die nie angelegt wurden. Jede Ersetzung ist vertretbar, und jede hat eine Varianz. Eine Waldkohlenstoffzahl zu verstehen heißt zu wissen, welches Glied dieser Kette am lockersten ist — und es ist fast nie das, das man vermutet.

## Fünf Speicher, ungleich gut bekannt

Treibhausgasinventare teilen Waldkohlenstoff nach den IPCC-Leitlinien für nationale Inventare in fünf Speicher. Das globale Assessment berichtet alle fünf, und die Berichtsabdeckung ist zwischen ihnen extrem ungleich.

| Speicher | Globaler Vorrat, 2025 | Anteil an der Summe | Berichtende Länder | Erfasste Waldfläche |
| --- | --- | --- | --- | --- |
| Organischer Bodenkohlenstoff | 329 Gt | 46 % | 77 | 70 % |
| Oberirdische Biomasse | 247 Gt | 35 % | 215 | ~100 % |
| Unterirdische Biomasse | 65,9 Gt | 9 % | 215 | ~100 % |
| Streu | 41,1 Gt | 6 % | 75 | 66 % |
| Totholz | 30,3 Gt | 4 % | 101 | 78 % |

Die Summe beträgt 714 Gigatonnen Kohlenstoff, etwa 172 Tonnen je Hektar. Die Asymmetrie dieser Tabelle ist die zentrale Tatsache des Themas. Der größte Einzelspeicher wird von rund einem Drittel so vieler Länder berichtet wie der zweitgrößte. Und von den beiden Speichern mit nahezu vollständiger Abdeckung wird nur einer gemessen: unterirdische Biomasse wird fast immer aus der oberirdischen Zahl abgeleitet statt ausgegraben, ihre scheinbare Vollständigkeit ist also geerbt und nicht verdient.

## Vom Maßband zur Tonne Kohlenstoff

Die Feldaufnahme erfasst den Stammdurchmesser in Brusthöhe, manchmal die Gesamthöhe und eine Artidentität, aus der die Rohdichte des Holzes nachgeschlagen wird. Ein **allometrisches Modell** rechnet das in ofentrockene oberirdische Masse um. Das pantropische Referenzmodell wurde an einer globalen Datenbank direkt geernteter Bäume angepasst — [4.004 Stämme von mindestens 5 cm Durchmesser an 58 Standorten](https://pubmed.ncbi.nlm.nih.gov/24817483/) — und fand, dass ein Modell über tropische Vegetationstypen hinweg ohne nachweisbaren Regionaleffekt gilt, wenn Durchmesser, Höhe und Rohdichte alle enthalten sind. Das ist ein starkes Ergebnis, und es kommt mit einem in der Praxis wichtigen Vorbehalt: die Höhe wird häufig nicht gemessen. Wo sie fehlt, übertrifft ein Ersatz über eine bioklimatische Stressvariable frühere höhenfreie Modelle, doch die Autoren raten, wo immer möglich lokale Durchmesser-Höhen-Beziehungen zu entwickeln, weil an dieser Ersetzung der Bias eintritt.

Aus Masse wird dann Kohlenstoff über einen Umrechnungsfaktor. Der IPCC-Standardwert für den Kohlenstoffanteil der Trockenmasse liegt bei 0,47 Tonnen Kohlenstoff je Tonne Trockenmasse. Unterirdische Masse wird kaum je gemessen; sie wird über ein Wurzel-Spross-Verhältnis aus der oberirdischen abgeleitet, wobei das Rechenbeispiel der Leitlinien 0,29 für Bestände mit 50 bis 150 Tonnen [oberirdischer Biomasse](/en/glossary/aboveground-biomass) je Hektar verwendet. Die globalen Summen sind mit diesen Konventionen verträglich — 647 Gigatonnen lebende Biomasse mit 313 Gigatonnen Kohlenstoff bedeuten ein Verhältnis nahe 0,48 —, aber Verträglichkeit mit einem Standardwert ist keine unabhängige Bestätigung, denn in vielen Ländern hat der Standardwert die Zahl erst erzeugt.

## Probeflächen sind die Schicht, an der alles andere kalibriert wird

Eine nationale Waldinventur ist der einzige Teil dieser Kette, bei dem Bäume gemessen werden. Das Konstruktionsprinzip ist ein statistisch verteiltes Netz dauerhafter Probeflächen, die in festem Turnus wiederholt aufgenommen werden: in den Vereinigten Staaten je nach Lage alle fünf bis zehn Jahre, mit Standort- und Baumdaten für lebende und stehende tote Stämme, ergänzt um liegendes Totholz, Böden und Bodenvegetation auf einer Teilmenge. Die Wiederholungsaufnahme wandelt eine Vorratsschätzung in eine Flussschätzung, und deshalb wiegen inventarbasierte Senkenschätzungen so schwer.

Hier wohnen zwei verschiedene Fehler, die oft vermengt werden. Der **Stichprobenfehler** ist die Unsicherheit daraus, dass ein Teil der Landschaft statt der ganzen gemessen wurde; er schrumpft berechenbar, wenn Flächen hinzukommen. Der **Modellfehler** ist die Unsicherheit der allometrischen Umrechnung, die auf jeden Baum jeder Fläche angewandt wird; mehr Flächen verringern ihn nicht, weil dasselbe Modell wiederverwendet wird. Der Stichprobenfehler ist zudem der leichter zu berechnende, also unterschätzt ein allein daraus gebildetes Intervall die Summe — und der Fehlbetrag meldet sich nicht.

## Was Lidar verändert hat und was nicht

Weltraumgestütztes Lidar hat den Extrapolationsschritt ersetzt, nicht den Messschritt. Die NASA-Mission Global Ecosystem Dynamics Investigation feuert drei Laser, die acht Bodentransekte mit Fußabdrücken von etwa 25 Metern erzeugen, entlang der Spur etwa 60 Meter voneinander entfernt, bei einem Transektabstand von etwa 600 Metern, was einen Querstreifen nahe 4,2 km ergibt. Das Rasterprodukt leitet die mittlere oberirdische Biomassedichte für 1-km-Zellen aus der Stichprobe ab, die in jede Zelle fällt, gegen eine Missionsanforderung, dass 80 Prozent der Zellen innerhalb eines Standardfehlers von 20 Tonnen je Hektar oder 20 Prozent der Schätzung liegen, je nachdem, was größer ist.

Diesen letzten Satz sollte man zweimal lesen. Das Genauigkeitsziel ist je Kilometerzelle formuliert, als Standardfehler, mit einer Untergrenze — und die Produktdokumentation zerlegt ihre Unsicherheit selbst in zwei Teile: Kovarianz aus dem Feld-zu-Lidar-Biomassemodell und Stichprobenvarianz daraus, dass die Strahlen die Zelle abtasten statt sie zu bedecken. Keiner der beiden verschwindet mit mehr Orbits. Auch die Abdeckung ist begrenzt: das Instrument beobachtet zwischen etwa 51,6° Nord und Süd, was den größten Teil der borealen Zone ausschließt, wo die Kohlenstofffrage ohnehin von Böden bestimmt wird, wie [das boreale Bodenkohlenstoffproblem](/de/ecology/forests/boreal-forests-and-permafrost-interactions) darlegt.

Radar nähert sich demselben Ziel physikalisch anders. Die Mission Biomass der Europäischen Weltraumorganisation, gestartet am 29. April 2025, trägt das erste P-Band-Radar mit synthetischer Apertur im Orbit, mit einer 12-Meter-Antenne in 666 km Höhe, gewählt, weil längere Wellenlängen das Kronendach durchdringen und Signal von der Holzstruktur statt von Blättern zurückwerfen.

## Wo das Fehlerbudget tatsächlich liegt

Nicht in den Bäumen. Der Bodenspeicher ist der größte und der lockerste, und der Grund ist banal: Länder berichten organischen Bodenkohlenstoff bis zu einer selbst gewählten Tiefe. Der waldflächengewichtete globale Mittelwert liegt bei 41 cm, doch die Regionalwerte reichen von 30 cm in Asien und Ozeanien und 32 cm in Europa bis 70 cm in Nord- und Mittelamerika. Ein bis 30 cm berichteter Vorrat und ein bis 70 cm berichteter sind nicht dieselbe Größe, und sie werden zu einer globalen Summe addiert. Für Länder, die gar nicht berichteten, wurden Werte abgeleitet, indem ein globales 1-km-Bodenkohlenstoffraster, das nur die obersten 30 cm abdeckt, mit Waldbedeckungsschichten überlagert wurde.

Die Umrechnungsfaktoren tragen eigene Streuung. Die Unsicherheitsbewertung der Leitlinien nennt für die Rohdichte des Holzes 10 bis 40 Prozent, für den Vorrat etwa 8 Prozent in Industrieländern und 30 Prozent anderswo, für die Waldfläche rund 3 Prozent in Industrieländern und für eine Kombination von Fernerkundung mit Bodenerhebung Werte, die nach ihrer Angabe bis auf 10 bis 15 Prozent sinken könnten. Das ist gegenüber den zu erkennenden Veränderungen nicht klein.

Das Ergebnis pflanzt sich bis in das globale Budget fort. Das IPCC-Assessment für die Industriezeit von 1750 bis 2019 beziffert die kumulierten Emissionen aus fossilen Brennstoffen und Industrie auf 445 ± 20 Petagramm Kohlenstoff und den kumulierten Fluss aus Landnutzung, Landnutzungsänderung und Forstwirtschaft auf 240 ± 70 Petagramm — eine etwa sechsmal größere relative Unsicherheit beim Landterm. Dass der Landterm der am schlechtesten eingegrenzte Teil [des globalen Kohlenstoffbudgets](/de/ecology/earth-systems/carbon-cycle-explained) ist, folgt unmittelbar aus der oben beschriebenen Kette.

## Warum die Arithmetik entscheidet, was ein Zertifikat bescheinigt

Waldkohlenstoff wird bepreist, als wäre er gemessen. Er ist modelliert, und die Modellannahmen sind meist geerbte Standardwerte. Dasselbe Assessment, das die obige Tabelle veröffentlicht, merkt an, dass seine Zahlen von dem abweichen, was Länder unter der Klimakonvention einreichen, weil beide Systeme unterschiedliche Walddefinitionen verwenden, weil die Konvention nur nach *bewirtschaftetem* Wald fragt und weil Kalibrierungs-, Umklassifizierungs- und Prognoseverfahren sich unterscheiden. Zwei amtliche Kohlenstoffsummen für die Wälder desselben Landes können also voneinander abweichen, ohne dass eine falsch wäre.

Für ein Projekt, das eine bestimmte Tonnage auf einer bestimmten Fläche behauptet, ist die praktische Folge, dass die Unsicherheit der Zahl aus jedem Schritt darüber geerbt wird und dort am größten ist, wo Bodenkohlenstoff einbezogen ist und wo Standardwerte statt lokal angepasster Faktoren verwendet werden. Diese Lücke zwischen Bescheinigtem und Messbarem wird in der Notiz dazu, [was Kohlenstoffkompensationsmärkte tatsächlich kaufen](/de/insight/carbon-offset-outsourcing-science), weiter untersucht, und das parallele Problem, Fläche statt Masse zu zählen, steht in [wie Entwaldungsstatistiken gebaut sind](/de/ecology/forests/deforestation-statistics-explained). Die Rahmenfrage — was überhaupt als Wald zählt, bevor irgendetwas gewogen wird — gehört zur [Übersicht über Walddefinitionen und -struktur](/de/ecology/forests/forest-ecosystems-explained).

## Sources

1. **FAO** — [Global Forest Resources Assessment 2025: growing stock, biomass and carbon](https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/growing-stock-biomass-carbon.html). Kohlenstoffvorräte speicherweise, Berichtsabdeckung, Bodentiefen nach Region und die Abweichung von der Konventionsberichterstattung.
2. **Global Change Biology, via PubMed** — [Improved allometric models to estimate the aboveground biomass of tropical trees](https://pubmed.ncbi.nlm.nih.gov/24817483/). Die Datenbank geernteter Bäume hinter dem pantropischen allometrischen Modell und die Rolle von Höhe und Rohdichte.
3. **IPCC** — [Leitlinien 2006 für nationale Treibhausgasinventare, Band 4, Kapitel 4: Waldflächen](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf). Standardwerte für Kohlenstoffanteil und Wurzel-Spross-Verhältnis sowie die Unsicherheitsbewertung des Kapitels für Holzdichte, Vorrat und Fläche.
4. **NASA ORNL DAAC** — [GEDI L4B Gridded Aboveground Biomass Density, Version 2](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html). Abtastgeometrie des Instruments, Breitenabdeckung, Genauigkeitsanforderung der Mission und die beiden Varianzanteile.
5. **Europäische Weltraumorganisation** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). Die P-Band-Radarmission, ihr Startdatum und die Instrumentenkonfiguration.
6. **USDA Forest Service** — [Forest Inventory and Analysis](https://research.fs.usda.gov/programs/fia). Design mit dauerhaften Probeflächen, Wiederholungsintervall und die auf Flächen und Teilflächen erfassten Variablen.
7. **IPCC AR6 WG1, Kapitel 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Kumulierte fossile und Landnutzungsflüsse mit ihren bewerteten Unsicherheiten.
8. **FAO** — [Global Forest Resources Assessment 2025](https://openknowledge.fao.org/handle/20.500.14283/cd6709en). Das vollständige Assessment einschließlich des Methodenkapitels hinter den Zahlen zur Berichtsabdeckung.
