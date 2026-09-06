---
title: 'Primärproduktion: was GPP, NPP und NEP messen und wie jede Größe geschätzt wird'
metaTitle: 'Primärproduktion: was GPP, NPP und NEP messen'
excerpt: Die Bruttoprimärproduktion wird auf Ökosystemebene nie direkt gemessen, sondern nur erschlossen. Was GPP, NPP und NEP jeweils bedeuten, welches Instrument hinter jeder Zahl steht und warum die Land- und die Ozeanhälfte auf unterschiedlichen Methoden beruhen.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - primary-production
  - carbon-flux
  - eddy-covariance
  - satellite-products
related:
  - food-webs-and-trophic-structure
  - what-is-an-ecosystem
  - carbon-cycle-explained
  - ocean-color-observations
pillar: what-is-an-ecosystem
_bodyHash: f5fe7f5d
---

Jede Zahl dazu, wie viel Kohlenstoff die Biosphäre fixiert, ist das Ergebnis eines Modells und nicht die Ablesung eines Instruments. Das ist keine Kritik an diesen Zahlen; es ist eine Tatsache über die Größe selbst. Es gibt kein Gerät, das man auf einen Wald oder eine Meeresfläche richten und dazu bringen könnte, die Photosynthese zu melden. Messbar sind eine Konzentration, eine Reflektanz, eine Masse geernteten Gewebes oder der vertikale Kohlendioxidfluss über einem Bestandesdach — und jede dieser Größen wird erst dann zu einer Produktionsschätzung, wenn Annahmen angewendet werden.

Vier Begriffe kursieren für das, was wie eine einzige Größe aussieht, und sie unterscheiden sich nur darin, welche Respiration bereits abgezogen wurde. Zwei davon zu verwechseln verändert eine Antwort um den Faktor zwei, und das genügt, um das Vorzeichen eines [Kohlenstoffbudgets](/de/ecology/climate-change/carbon-budgets-and-remaining-emissions) umzukehren. Die Reaktionen, die die Fixierung leisten, sind in [wie Photosynthese funktioniert](/de/biology/cells/photosynthesis-explained) dargestellt; die Schwierigkeit beginnt hier eine Ebene höher, wo ein Prozess auf Blattebene in eine Zahl für einen Kontinent überführt werden muss — dieselbe Übersetzung, die dazu zwingt, ein Ökosystem über [die Raten zu beschreiben, die es durchlaufen, und nicht über die Fläche, die es bedeckt](/de/ecology/ecosystems/what-is-an-ecosystem).

## Vier Größen und die Subtraktionen zwischen ihnen

| Größe | Was sie ist | Wie eine Zahl entsteht | Ungefähre globale Größenordnung |
| --- | --- | --- | --- |
| Bruttoprimärproduktion (GPP) | Gesamter durch Photosynthese fixierter Kohlenstoff, bevor davon etwas veratmet wird | Nie direkt beobachtet; aus einem Nettofluss herauspartitioniert oder aus absorbiertem Licht modelliert | Land: 123 ± 8 bis 147 Pg C yr⁻¹ je nach Methode |
| Autotrophe Respiration | Von den photosynthetisierenden Organismen selbst veratmeter Kohlenstoff | Aus Temperatur und Gewebeeigenschaften modelliert; auf Ökosystemebene nicht getrennt beobachtet | Wird nicht als eigenständige globale Zahl ausgewiesen |
| Nettoprimärproduktion (NPP) | GPP abzüglich der autotrophen Respiration — der Kohlenstoff, der allem Übrigen zur Verfügung steht | Ernte und Inventur auf Bestandesebene; satellitengestützte Lichtnutzungseffizienz-Modelle auf globaler Ebene | Weltweit etwa 105 Pg C yr⁻¹, ungefähr gleichmäßig auf Land und Ozean verteilt |
| Netto-Ökosystemproduktion (NEP) | NPP abzüglich der Respiration von Konsumenten und Destruenten | Aus dem mit Eddy-Kovarianz gemessenen Nettoaustausch abgeleitet, mit umgekehrtem Vorzeichen | Ein kleiner Rest zweier großer Flüsse |
| Netto-Biomproduktion | NEP abzüglich Feuer, Ernte und lateralem Export | Inventuren, Buchhaltungsmodelle und atmosphärische Inversionen | Die Größe, die ein Kohlenstoffbudget tatsächlich braucht |

Liest man die Tabelle von oben nach unten, zeigt sich das Muster, dass die Präzision abnimmt, je nützlicher die Größe wird. Die GPP ist begrifflich sauber und unbeobachtbar. Von der Netto-Biomproduktion hängt ab, was eine nationale Inventur oder eine Aussage über eine [Kohlenstoffsenke](/de/glossary/carbon-sink) behaupten kann, und sie ist der Term mit den meisten Subtraktionen und der größten relativen Unsicherheit.

## Nichts auf einem Eddy-Kovarianz-Turm misst die Photosynthese

Das Arbeitspferd unter den Instrumenten für die Landproduktion ist die Eddy-Kovarianz: ein schnelles Anemometer und ein Gasanalysator über dem Bestandesdach, die die vertikale Windgeschwindigkeit und die CO₂-Konzentration viele Male pro Sekunde abtasten, wobei ihre Kovarianz den vertikalen Nettofluss ergibt. Was dabei herauskommt, ist der Netto-Ökosystemaustausch — die Differenz zwischen Aufnahme und Gesamtrespiration — und sonst nichts.

Die GPP wird anschließend durch Partitionierung gewonnen. Der bekannteste Ansatz passt ein Respirationsmodell an die nächtlichen Flüsse an, wenn die Photosynthese null ist, extrapoliert es mithilfe der Temperatur in den Tag und addiert es zum gemessenen Nettoaustausch zurück. Jeder GPP-Wert von einem Turm trägt daher die Annahmen desjenigen Partitionierungsmodells, das ihn erzeugt hat. Der [Datensatz FLUXNET2015](https://www.nature.com/articles/s41597-020-0534-3), der die Verarbeitung gemeinschaftsweit standardisiert hat, behandelt diese Abhängigkeit als etwas, das gemessen und nicht beseitigt werden soll: Er wendet auf jeden Standort sowohl das Nachtverfahren als auch ein Tagverfahren über die Lichtantwortkurve an, ergänzt überall dort, wo Speichermessungen es erlauben, ein drittes Verfahren der Respiration nach Sonnenuntergang, und fordert die Nutzer auf, die Differenz zwischen dem Tag- und dem Nachtprodukt als Unsicherheit zu nehmen. Er sagt ausdrücklich, dass Ökosystemrespiration und photosynthetische Aufnahme abgeleitete [Datenprodukte](/de/ecology/earth-observation/earth-observation-data-products) und keine Messungen sind, die zusammen mit den Flüssen und mit eigenen Unsicherheitsschätzungen verteilt werden.

Dieser Datensatz steckt zugleich den Umfang der Beobachtungsbasis ab: 212 Standorte weltweit, über 1500 Standortjahre an Daten bis einschließlich 2014. Für einen planetaren Fluss sind ein paar Hundert Türme eine dünne Stichprobe, und sie ist nicht gleichmäßig verteilt: Die Abdeckung ist im gemäßigten Europa und in Nordamerika am dichtesten und in den Tropen, den Wüsten und den hohen Breiten am dünnsten, also genau umgekehrt zu der Verteilung der größten und unsichersten Flüsse.

## Von ein paar Hundert Türmen zu einem globalen Feld

Drei Methodenfamilien machen aus dieser Stichprobe eine globale Zahl, und sie weichen auf aufschlussreiche Weise voneinander ab.

Lichtnutzungseffizienz-Modelle nehmen die von einem Satelliten bestimmte absorbierte photosynthetisch aktive Strahlung und multiplizieren sie mit einer Effizienz, die je nach Vegetationstyp variiert und bei Temperatur- und Feuchtestress heruntergeregelt wird. Die operationelle Umsetzung der NASA, [das Produkt MOD17](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061) — MOD17A3HGF, Version 6.1 — liefert jährliche GPP und NPP mit 500 m Auflösung aus der Summe der 8-Tages-Komposite, wobei die Nettophotosynthese als GPP abzüglich der Erhaltungsatmung angegeben wird. Ihre Dokumentation benennt die Kompromisse offen: Das Jahresprodukt wird erst nach Abschluss des Jahres erzeugt, weil das Füllen der Lücken in den Eingangsreihen zu Blattfläche und absorbierter Strahlung das ganze Jahr erfordert, und Pixel, die die Qualitätsprüfung nicht bestehen, werden durch Interpolation statt durch Beobachtung gefüllt.

Die statistische Hochskalierung lernt stattdessen eine Beziehung zwischen Turmflüssen und Satellitenprädiktoren und wendet sie überall an. Eine [beobachtungsgestützte Synthese aus Eddy-Kovarianz-Daten und diagnostischen Modellen](https://www.science.org/doi/10.1126/science.1184984) setzte die globale GPP der Landflächen auf 123 ± 8 Pg C yr⁻¹, wobei [tropische Wälder](/de/ecology/forests/tropical-forest-ecology) und Savannen 60 Prozent dieser Summe ausmachen und die GPP über 40 Prozent der bewachsenen Landfläche mit dem Niederschlag verknüpft ist. Ein späterer Ansatz, der die Nahinfrarot-Reflektanz der Vegetation aus demselben Turmnetz hochskalierte, ergab [147 Pg C yr⁻¹ mit einem 95-Prozent-Kredibilitätsintervall von 131 bis 163](https://pubmed.ncbi.nlm.nih.gov/31199543/) und hielt fest, dass seine Schätzungen systematisch höher liegen als frühere Bottom-up-Arbeiten, besonders in den mittleren Breiten.

Diese beiden sind nicht eine Messung und eine Korrektur. Sie sind zwei vertretbare Wege, dasselbe Turmarchiv zu extrapolieren, deren Zentralwerte um etwa ein Fünftel auseinanderliegen — mehr als die von den Studien selbst angegebene Unsicherheit. Wer eine globale GPP-Zahl zitiert, zitiert ebenso sehr eine Methode wie einen Planeten.

## Die Ozeanhälfte ist ein anderes Instrument und ein anderer Fehler

Die marine Produktion wird fast vollständig aus der Ozeanfarbe rekonstruiert. Sensoren messen die aus dem Wasser austretende Strahldichte, Algorithmen rechnen sie in eine Chlorophyllkonzentration oder in Phytoplanktonkohlenstoff um, der aus der partikulären Rückstreuung erschlossen wird, und ein Produktivitätsmodell macht aus diesem Bestand mithilfe von Licht, Durchmischungstiefe und Temperatur eine Rate. Das [globale Ozeanfarbenprodukt](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description) des Copernicus Marine Service ist ein Beispiel aus der Praxis: Die Primärproduktion wird dort als eine Variable unter vielen ausgeliefert, auf einem Gitter von 4 km, zusammengesetzt aus SeaWiFS, MODIS, MERIS, VIIRS und OLCI über eine Reihe, die 1997 beginnt. Wie diese Inversion durchgeführt wird und was sie sehen kann und was nicht, ist Gegenstand der [Ozeanfarbenbeobachtungen](/de/ecology/earth-observation/ocean-color-observations).

Die kanonische Zusammenführung beider Bereiche schätzte die [globale NPP auf 104.9 Pg C yr⁻¹ mit annähernd gleichen Beiträgen von Land und Ozean](https://www.science.org/doi/10.1126/science.281.5374.237), und diese Beinahe-Parität ist bis heute die Schlagzeile, der die meisten Leser begegnen. Sie verdient mehr Vorsicht, als ihr üblicherweise entgegengebracht wird, denn die beiden Hälften werden nicht auf vergleichbare Weise gemessen. An Land lässt sich die Produktion gegen Biomasseinventuren, Streufallfallen und Ernteaufzeichnungen prüfen, weil das meiste des Fixierten jahrelang an Ort und Stelle bleibt. Im Ozean setzen sich die photosynthetisierenden Organismen innerhalb von Tagen um; es gibt keinen Bestand zum Wiegen, kein Turmnetz, und die Validierung stützt sich auf verstreute Inkubationen an Bord von Schiffen. Eine neuere Analyse der Satellitenära, die [statistisch signifikante Rückgänge der Nettoprimärproduktion in fast der Hälfte des Ozeans](https://www.nature.com/articles/s41467-025-60906-y) berichtet, merkt beiläufig an, dass die Fernerkundungsreihe die beste verfügbare Grundlage für einen globalen Trend ist — eine Aussage ebenso über das Fehlen von Alternativen wie über die Stärke der Methode.

## Warum der Rest der schwierige Teil ist

Die Lücke zwischen brutto und netto ist der Ort, an dem die politisch relevante Zahl steckt, und sie ist eine Differenz großer Größen. Die GPP der Landflächen liegt in der Größenordnung von 120 bis 150 Pg C yr⁻¹; die vom IPCC für 2010 bis 2019 bewertete terrestrische Nettokohlenstoffsenke beträgt [3.4 ± 0.9 Pg C yr⁻¹](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Ein systematischer Fehler von wenigen Prozent im Bruttofluss hätte die Größe der gesamten Senke. Deshalb wird der [Kohlenstoffkreislauf](/de/ecology/earth-systems/carbon-cycle-explained) nicht allein durch bessere GPP-Schätzungen eingegrenzt, und deshalb wird die Netto-Biomproduktion über unabhängige Wege geschätzt — atmosphärische Inversionen, Waldinventuren, Buchhaltungsmodelle — und nicht durch den Abzug eines großen modellierten Terms von einem anderen.

Für die Ökologie und nicht für die Buchführung ist die NPP meist die entscheidende Größe, weil sie der Kohlenstoff ist, der allem, was keine Photosynthese betreibt, tatsächlich zur Verfügung steht, und damit die Obergrenze dessen, woraus der Rest des [Nahrungsnetzes](/de/ecology/ecosystems/food-webs-and-trophic-structure) aufgebaut werden kann. Diese Obergrenze ist real, doch es lohnt sich, im Gedächtnis zu behalten, wie man zu ihr gekommen ist. Wenn eine Zahl sagt, ein Hektar Grasland habe im vergangenen Jahr eine bestimmte Tonnage erzeugt, lautet die ehrliche Auflösung, dass ein Modell der Lichtinterzeption, eine angenommene Effizienz und eine Satellitenreihe mit interpolierten Lücken dies gemeinsam impliziert haben.

## Sources

1. **Scientific Data (Nature Portfolio)** — [The FLUXNET2015 dataset and the ONEFlux processing pipeline for eddy covariance data](https://www.nature.com/articles/s41597-020-0534-3). Zahl der Standorte, Länge der Reihe und der Status von Respiration und Aufnahme als abgeleitete Produkte.
2. **Science** — [Terrestrial gross carbon dioxide uptake: global distribution and covariation with climate](https://www.science.org/doi/10.1126/science.1184984). Die beobachtungsgestützte GPP-Schätzung von 123 ± 8 Pg C yr⁻¹ und ihre regionale Aufteilung.
3. **Global Change Biology** — [Terrestrial gross primary production: using NIRv to scale from site to globe](https://pubmed.ncbi.nlm.nih.gov/31199543/). Die Schätzung von 147 Pg C yr⁻¹ mit ihrem Kredibilitätsintervall und dem Vergleich mit Bottom-up-Arbeiten.
4. **NASA Earthdata** — [MODIS/Terra net primary production gap-filled yearly L4 global 500 m, version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061). Operationelles Lichtnutzungseffizienz-Produkt, sein Lückenfüllverfahren und seine zeitlichen Beschränkungen.
5. **Science** — [Primary production of the biosphere: integrating terrestrial and oceanic components](https://www.science.org/doi/10.1126/science.281.5374.237). Die globale NPP-Summe von 104.9 Pg C yr⁻¹ und die näherungsweise Parität von Land und Ozean.
6. **Copernicus Marine Service** — [Global ocean colour, bio-geo-chemical, L4 product description](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description). Sensoren, Auflösung und Reihenlänge hinter einem operationellen Feld mariner Primärproduktion.
7. **Nature Communications** — [Global declines in net primary production in the ocean colour era](https://www.nature.com/articles/s41467-025-60906-y). Trend der marinen Produktion in der Satellitenära und die Abhängigkeit von der Fernerkundung bei globalen Trends.
8. **IPCC AR6 WG1, Kapitel 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Die bewertete terrestrische Nettokohlenstoffsenke für 2010 bis 2019.
