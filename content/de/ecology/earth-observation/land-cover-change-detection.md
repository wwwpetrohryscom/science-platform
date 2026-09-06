---
title: 'Erkennung von Landbedeckungsänderungen: kartieren, wie sich die Oberfläche über die Zeit verändert'
metaTitle: Landbedeckungsänderungen aus Satellitenbildern erkennen
excerpt: Satellitenbilder verschiedener Zeitpunkte zu vergleichen ist das Mittel, großflächige Landveränderung zu messen. Der Unterschied zwischen Landbedeckung und Landnutzung, die wichtigsten Verfahren der Veränderungserkennung, die globalen Produkte und die zu beherrschenden Fehler.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - land-cover
  - land-use-change
  - remote-sensing
  - monitoring
related:
  - satellite-deforestation-monitoring
  - landsat-program-explained
  - earth-observation-data-products
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 7dec18c6
---

Wenn aus einem Wald Ackerland wird oder ein Feld überbaut wird, verändert sich die Oberfläche selbst, und diese Veränderung hinterlässt eine messbare Spur in Satellitenbildern. Sie zu erkennen heißt, Aufnahmen desselben Ortes von verschiedenen Zeitpunkten zu vergleichen und sorgfältig zu fragen, was tatsächlich anders ist. Dieser Artikel erläutert die Unterscheidung, die dem gesamten Vorgehen zugrunde liegt, die wichtigsten Wege, den Vergleich durchzuführen, die Produkte, die daraus hervorgehen, und die Fehler, die in Schach gehalten werden müssen.

## Landbedeckung und Landnutzung sind nicht dasselbe

Zuerst ist zu klären, was gemessen wird. [Landbedeckung](/de/glossary/land-cover) ist das physische Material an der Oberfläche — Wald, Wasser, Ackerland, bebauter Boden —, also das, was ein Sensor unmittelbar aufzeichnen kann. [Landnutzungsänderung](/de/glossary/land-use-change) betrifft dagegen die menschliche Funktion dieser Fläche: ob eine Grasfläche eine Weide, ein Park oder ein verwildernder Flugplatz ist. Beides hängt zusammen, ist aber verschieden.

Diese Unterscheidung ist wichtig, weil die Fernerkundung die Bedeckung misst, nicht die Nutzung. Ein Satellit zeichnet die Reflektanz einer Oberfläche auf, und daraus kann ein Klassifikator sie mit vertretbarer Sicherheit als Wald oder als Wasser benennen. Die Nutzung dagegen wird meist erschlossen — aus dem Kontext, aus Zusatzkarten oder aus dem zeitlichen Muster der Bedeckung — und nicht gesehen. Beides auseinanderzuhalten verhindert eine verbreitete Verwechslung: Eine Karte der Landbedeckung ist nicht automatisch eine Karte davon, wie das Land genutzt wird.

## Wie die Veränderungserkennung funktioniert

Die Veränderungserkennung beruht auf einer einfachen Prämisse: Man nimmt Bilder eines Ortes von zwei oder mehr Zeitpunkten und sucht die Stellen, an denen die Oberfläche sich selbst nicht mehr gleicht. Mehrere etablierte Verfahren leisten das, und sie unterscheiden sich darin, was sie vergleichen und wie viel sie voraussetzen.

Am direktesten ist die **Bilddifferenzbildung**, bei der ein Kanal oder Index des einen Zeitpunkts von dem des anderen abgezogen wird; Pixel mit großer Differenz werden als Veränderungskandidaten markiert. Ein zweiter Ansatz, der **Vergleich nach der Klassifikation**, klassifiziert jeden Zeitpunkt unabhängig in Landbedeckungsklassen und vergleicht dann die entstandenen Karten, sodass das Ergebnis nicht nur beschreibt, wo eine Veränderung stattfand, sondern auch, was in was übergegangen ist. Eine dritte Familie, die **Zeitreihenanalyse**, arbeitet mit einem langen Bildstapel und sucht den Moment — einen Bruchpunkt —, an dem das Verhalten eines Pixels umspringt, was hilft, den Zeitpunkt einer Veränderung zu bestimmen und nicht nur ihr Vorhandensein. Jedes Verfahren wägt Einfachheit gegen den Reichtum dessen ab, was es berichten kann, und die Wahl hängt von der Fragestellung und vom verfügbaren Bildmaterial ab. Die umfassendere Prozesskette, die Rohszenen in auswertebereite Eingangsdaten überführt, behandelt der Überblick [Erdbeobachtung und Fernerkundung](/de/ecology/earth-observation/earth-observation-and-remote-sensing-explained) dieses Themenclusters.

Diese Techniken sind allgemein, doch eine Anwendung hat ihre Verfeinerung besonders vorangetrieben: die Erfassung von Waldverlust. Wie Zeitreihenverfahren den Zeitpunkt einer Rodung isolieren, ist zentral für die [satellitengestützte Entwaldungsüberwachung](/de/ecology/earth-observation/satellite-deforestation-monitoring), wo es ebenso wichtig ist zu wissen, wann ein Bestand geschlagen wurde, wie zu wissen, dass er geschlagen wurde.

## Die Produkte und die Bilddaten dahinter

Die Veränderungserkennung ist nicht nur eine Forschungstechnik; sie liefert operationelle Karten, auf die sich viele Nutzer stützen. Auf globaler und regionaler Ebene bieten die Landbedeckungskarten der Climate Change Initiative der ESA eine konsistente Serie für den gesamten Planeten, während der Copernicus-Landüberwachungsdienst europaweite und globale Produkte bereitstellt ([Copernicus Land](https://land.copernicus.eu/)). Die Climate Change Initiative der ESA ist Teil des umfassenderen Erdbeobachtungsprogramms der Agentur ([ESA](https://www.esa.int/Applications/Observing_the_Earth)). Nationale Vorhaben ergänzen sie, etwa die National Land Cover Database des USGS, die auf dem langen Landsat-Archiv aufbaut ([USGS](https://www.usgs.gov/landsat-missions)), und die Gemeinsame Forschungsstelle der Europäischen Kommission betreibt eine eigene Landbeobachtung und [Waldbeobachtung](/de/ecology/forests/deforestation-statistics-explained) ([JRC](https://joint-research-centre.ec.europa.eu/)).

Die meisten dieser Produkte ruhen auf demselben Fundament: Landsat- und Sentinel-Bilddaten. Diese Abhängigkeit sollte man klar aussprechen, denn sie bedeutet, dass die Qualität jeder Landbedeckungskarte durch die Qualität ihrer Eingangsszenen und durch das darauf angewandte Klassifikationsverfahren begrenzt ist. Die Landsat-Seite dieses Fundaments, mit ihren Jahrzehnten an Abdeckung in mittlerer Auflösung, wird in [das Landsat-Programm](/de/ecology/earth-observation/landsat-program-explained) beschrieben, und wie solche Eingangsdaten für die Nutzung aufbereitet werden, ist Gegenstand von [Erdbeobachtungs-Datenprodukten](/de/ecology/earth-observation/earth-observation-data-products).

## Warum scheinbare Veränderung nicht immer wirkliche Veränderung ist

Eine Veränderungskarte ist nur so vertrauenswürdig wie ihr Umgang mit Fehlern, und mehrere Fehlerquellen sind dem Verfahren eigen. Die grundlegendste ist, dass die Klassifikationsgenauigkeit nie vollkommen ist: Jeder Klassifikator ordnet manche Pixel falsch zu, weshalb seriöse Produkte mit Genauigkeitsangaben veröffentlicht und nicht als exakt ausgegeben werden. Eine klassifizierte Karte als Bodenwahrheit zu behandeln, ohne ihre ausgewiesene Genauigkeit zu lesen, überzeichnet das vorhandene Wissen.

Zwei weitere Probleme können Veränderung erzeugen, die es nicht gab. Fehlregistrierung von Bild zu Bild — wenn zwei Zeitpunkte nicht auf dieselbe Bodenposition ausgerichtet sind — führt dazu, dass ein Pixel mit dem falschen Nachbarn verglichen wird, was falsche Veränderungen entlang von Kanten und Grenzen erzeugt. Jahreszeitliche Unterschiede wirken ähnlich: Ein Feld, das im Winter kahl und im Sommer grün ist, kann wie eine Landumwandlung aussehen, obwohl es nur dasselbe Feld an einem anderen Punkt seines Zyklus ist. Eine solide Auswertung kontrolliert das, etwa indem sie Bilder aus einander entsprechenden Jahreszeiten vergleicht oder Zeitreihenverfahren nutzt, die den normalen Jahresrhythmus modellieren, bevor sie eine Abweichung davon melden. Echte Umwandlung von diesen Artefakten zu unterscheiden, ist die wiederkehrende Schwierigkeit des Fachs, und sie hängt mit nachgelagerten ökologischen Fragen zusammen, etwa den [Maßen der Habitatfragmentierung](/de/ecology/biodiversity/habitat-fragmentation-metrics), die auf genaue Landbedeckungskarten angewiesen sind, um aussagekräftig zu sein.

## Veränderungskarten mit Sorgfalt lesen

Die Erkennung von Landbedeckungsänderungen ist ein ausgereiftes und weit verbreitetes Werkzeug, doch ihre Ergebnisse sind Deutungen, keine Fotografien der Tatsachen. Die nützlichste Gewohnheit, die Lesende sich aneignen können, ist, an jede Veränderungskarte drei Fragen zu stellen: Welches Verfahren hat sie erzeugt, aus welchen Bilddaten wurde sie gebaut, und welche Genauigkeit wurde angegeben. Ein Differenzbild, ein Paar klassifizierter Karten und ein Bruchpunkt einer Zeitreihe können denselben Flecken Boden beschreiben und sich an den Rändern dennoch widersprechen, und keines davon ist in einem absoluten Sinn richtig. Mit diesem Bewusstsein verwendet — und unter Berücksichtigung jahreszeitlicher und registrierungsbedingter Effekte — liefert die Veränderungserkennung ein belastbares, wiederholbares Bild davon, wie sich die Oberfläche des Planeten über die Zeit verschiebt.

## Sources

1. **Copernicus Land** — [land-cover products](https://land.copernicus.eu/). Europaweite und globale Kartierung der Landbedeckung.
1. **ESA** — [Climate Change Initiative land cover](https://www.esa.int/Applications/Observing_the_Earth). Globale Serie von Landbedeckungskarten.
1. **USGS** — [land-cover data](https://www.usgs.gov/landsat-missions). Landsat-basierte Landbedeckungsprodukte.
1. **Europäische Kommission JRC** — [land monitoring](https://joint-research-centre.ec.europa.eu/). Land- und Waldbeobachtung der EK.
