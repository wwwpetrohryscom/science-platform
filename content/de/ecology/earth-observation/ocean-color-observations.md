---
title: 'Beobachtungen der Ozeanfarbe: das Meer an seiner Farbe ablesen'
excerpt: Die Farbe des Ozeans trägt Information über die mikroskopischen Pflanzen, die in ihm leben. Hier steht, wie Satelliten das Phytoplankton aus dem Licht schätzen, das das Wasser verlässt, welche Missionen die Zeitreihe aufgebaut haben und warum die atmosphärische Korrektur über Wasser der schwierige Teil ist.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - ocean-color
  - oceans
  - remote-sensing
  - monitoring
related:
  - modis-earth-observation-system
  - sentinel-satellites-explained
  - satellite-altimetry-explained
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: aefa947b
---

Das Meer ist nicht gleichmäßig blau. Sein genauer Farbton, aus dem Orbit abgetastet, trägt Information über das mikroskopische Pflanzenleben, das nahe der Oberfläche treibt. Indem sie das Spektrum des Lichts messen, das das Wasser verlässt, können Satelliten schätzen, wie viel Phytoplankton vorhanden ist, und diese Schätzung ist zu einem der beständigeren Fäden unserer [Erdbeobachtung und Fernerkundung](/de/ecology/earth-observation/earth-observation-and-remote-sensing-explained) der Ozeane geworden.

## Was die Farbe verrät

Phytoplankton enthält Chlorophyll a, dasselbe Pigment, das Landpflanzen grün macht. Je mehr davon das Oberflächenwasser führt, desto weiter verschiebt sich das Wasser vom tiefen Blau ins Grüne. Das ist die physikalische Grundlage der Fernerkundung der [Ozeanfarbe](/de/glossary/ocean-color): Instrumente messen das Licht, das knapp unter der Meeresoberfläche austritt, und lesen an seiner Farbe ab, was im Wasser ist, vor allem Chlorophyll a.

Diese mikroskopischen Pflanzen wiegen weit schwerer, als ihre Größe vermuten lässt. Sie stehen an der Basis des marinen Nahrungsnetzes, und sie nehmen bei der Photosynthese Kohlendioxid auf, weshalb sie im ozeanischen [Kohlenstoffkreislauf](/de/ecology/climate-change/carbon-cycle-feedbacks) eine hervorgehobene Rolle spielen. Ihre Häufigkeit zu verfolgen erlaubt der Forschung, der Primärproduktion nachzugehen, Algenblüten entstehen und vergehen zu sehen, die [Wasserqualität](/de/ecology/freshwater/water-quality-measurement-explained) einzuschätzen und nach langsameren Verschiebungen in marinen Ökosystemen zu suchen. Das [Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) der NASA hat eine lange Reihe von Bildern veröffentlicht, die zeigen, wie ein einziges Farbsignal auf all diese Weisen gelesen werden kann.

## Wie die Messung funktioniert

Die Größe im Kern des Verfahrens ist der [Reflexionsgrad](/de/glossary/reflectance) des Wassers über mehrere sichtbare Wellenlängen hinweg — im Wesentlichen, wie stark das Meer Licht am blauen und am grünen Ende des Spektrums zurückwirft. Übliche Chlorophyll-Algorithmen vergleichen diese Werte als Verhältnis des Reflexionsgrads von Blau zu Grün. Ist Phytoplankton spärlich, überwiegt blaues Licht und das Verhältnis ist hoch; steigt seine Zahl, verstärkt sich grünes Licht und das Verhältnis fällt. Dieses Verhältnis in eine Schätzung der Chlorophyllkonzentration zu überführen ist der Kernschritt, der Farbe in eine Zahl verwandelt.

Das gut zu tun, hängt davon ab, den kleinen Anteil des Lichts zu isolieren, der tatsächlich aus dem Wasser kam. Der größte Teil der Strahlung, die einen Satelliten über dem Ozean erreicht, wurde von der Atmosphäre gestreut und nicht vom Meer zurückgeworfen, weshalb die Verarbeitung zuerst den atmosphärischen Beitrag abziehen muss, bevor irgendein Vergleich von Blau zu Grün aussagekräftig ist. Die Produkte und die Methoden dahinter sind über [NASA Earthdata](https://www.earthdata.nasa.gov/) dokumentiert und werden dort verteilt, wo auch die lange Geschichte der Ozeanfarben-Verarbeitung ausführlich dargelegt ist.

## Der Aufbau der Zeitreihe

Erstmals demonstriert wurde die Technik vom Coastal Zone Color Scanner, gestartet 1978, der zeigte, dass sich Chlorophyllmuster überhaupt aus dem All kartieren lassen. Nach einer langen Lücke begann die moderne durchgehende Zeitreihe mit SeaWiFS, das von 1997 bis 2010 betrieben wurde und die konsistente, kalibrierte Zeitreihe begründete, die spätere Missionen fortführten.

Diese Zeitreihe tragen heute mehrere Instrumente zugleich. MODIS und VIIRS liefern beide Messungen der Ozeanfarbe, derselben Art, wie sie für dessen übrige Produkte über [das MODIS-System](/de/ecology/earth-observation/modis-earth-observation-system) verfolgt werden, während das Instrument OLCI an Bord der europäischen Sentinel-3-Plattformen einen weiteren Strom hinzufügt, beschrieben in unserer Notiz zu [den Sentinel-Satelliten](/de/ecology/earth-observation/sentinel-satellites-explained). Operationelle Produkte aus diesen Sensoren werden über den [Copernicus Marine Service](https://marine.copernicus.eu/) bereitgestellt, und die NOAA verteilt ihre eigenen Ozeanfarben-Produkte über ihren Umweltsatellitendienst [NESDIS](https://www.nesdis.noaa.gov/). Dass diese Quellen konsistent bleiben, ist wichtig, weil das Farbsignal andere Ozeanbeobachtungen ergänzt, etwa die [Satellitenaltimetrie](/de/ecology/earth-observation/satellite-altimetry-explained) und, weiter gefasst, die [Indikatoren des ozeanischen Wärmeinhalts](/de/ecology/climate-change/ocean-heat-content-indicators), um ein vollständigeres Bild des Oberflächenozeans zu bauen.

## Warum die atmosphärische Korrektur der schwierige Teil ist

Die beherrschende Schwierigkeit dieses Feldes ist die atmosphärische Korrektur, und sie ist gerade wegen der eben beschriebenen Geometrie anspruchsvoll. Da der größte Teil des Lichts, das ein Satellit über Wasser empfängt, aus der Atmosphäre stammt und nicht aus dem Meer, ist das aus dem Wasser austretende Signal im Vergleich schwach. Ein kleiner Fehler bei der Schätzung des atmosphärischen Anteils übersetzt sich deshalb in einen großen Fehler im schwachen Rest — genau dem Signal, von dem der Chlorophyll-Algorithmus abhängt. Die Korrektur richtig hinzubekommen ist in der Praxis schwerer als das Farbverhältnis selbst.

Manche Gewässer verschärfen das Problem. Der offene Ozean, in dem Chlorophyll das Wesentliche ist, was die Farbe verändert, ist der leichter behandelbare Fall. Küstengewässer und trübe Gewässer sind schwieriger: Schwebstoffe und gelöste gefärbte Substanz verändern das Spektrum ebenfalls, sodass die einfache Verbindung zwischen Farbe und Phytoplankton nicht mehr sauber trägt und das Trennen dieser Beiträge sorgfältigere Verfahren verlangt. Wolken setzen eine weitere, einfachere Grenze — sie verdecken die Oberfläche vollständig und hinterlassen Lücken, die aus benachbarten Tagen gefüllt oder als fehlend gekennzeichnet werden müssen.

## Die Produkte sorgfältig lesen

Keine dieser Einschränkungen macht die Ozeanfarbe unzuverlässig, aber sie prägen, wie ihre Produkte gelesen werden sollten. Eine Schätzung über dem klaren offenen Ozean steht auf festerem Grund als eine nahe einer sedimentbeladenen Küste, und ein wolkenfreies Komposit kann Beobachtungen aus mehreren Überflügen zusammensetzen statt aus einem einzigen Augenblick. Werte versteht man am besten als Schätzungen mit angegebener Unsicherheit und nicht als direkte Messungen dessen, was im Wasser ist.

Mit dieser Vorsicht verwendet, bleibt die Farbe des Meeres ein praktikabler Weg, den lebenden Oberflächenozean über weite Flächen und lange Zeiträume zu beobachten. Vom ersten Beleg des Scanners von 1978 bis zu den einander überlappenden Missionen von heute trägt dieselbe Idee — dass eine Verschiebung von Blau zu Grün die Pflanzen darunter verrät — weiterhin, wie Phytoplankton aus dem Orbit beobachtet wird.

## Sources

1. **NASA Earthdata** — [ocean colour](https://www.earthdata.nasa.gov/). Produkte und Geschichte von NASA Ocean Color.
1. **Copernicus Marine Service** — [ocean colour products](https://marine.copernicus.eu/). Operationelle Daten zur Ozeanfarbe.
1. **NASA Earth Observatory** — [ocean colour explained](https://science.nasa.gov/earth/earth-observatory/). Wie die Farbe Phytoplankton sichtbar macht.
1. **NOAA NESDIS** — [ocean colour](https://www.nesdis.noaa.gov/). Ozeanfarben-Satellitenprodukte der NOAA.
