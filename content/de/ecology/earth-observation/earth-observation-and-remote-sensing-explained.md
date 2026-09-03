---
title: 'Erdbeobachtung und Fernerkundung: wie der Planet aus dem All vermessen wird'
excerpt: Satelliten sind zu den Instrumenten geworden, mit denen sich der ganze Planet auf einmal beobachten lässt. Hier steht, wie Erdbeobachtung funktioniert – vom Photon bis zum kalibrierten Datenprodukt –, was sie über Klima und Ökosysteme misst und wo ihre Grenzen liegen.
type: pillar
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-08-29'
readingTime: 9
tags:
  - earth-observation
  - remote-sensing
  - satellites
  - environmental-monitoring
related:
  - what-is-remote-sensing
  - landsat-program-explained
  - earth-observation-data-products
  - remote-sensing-limitations-and-uncertainty
---

Das meiste von dem, was wir über die Veränderungen des Planeten wissen – schrumpfendes Eis, fortschreitende Entwaldung, sich erwärmende Meere, ergrünende und verbraunende Landflächen –, wird heute zumindest teilweise aus dem All gemessen. [Erdbeobachtung](/en/glossary/earth-observation) ist die Praxis, Informationen über Land, Ozean, Atmosphäre und Eis des Planeten mit Sensoren auf Satelliten und Flugzeugen zu gewinnen. [Fernerkundung](/en/glossary/remote-sensing) ist die zugrunde liegende Technik: etwas zu messen, ohne es zu berühren, indem die von ihm reflektierte oder abgestrahlte Strahlung aufgezeichnet wird.

Dies ist der Knotenpunkt des Erdbeobachtungs-Clusters von EcoScienceHub, und er ist bewusst als Brücke angelegt. Dieselben Satellitenmessungen, die [Klimaindikatoren](/de/ecology/climate-change/climate-indicators-earth-system-monitoring) verfolgen, tragen auch das [Biodiversitätsmonitoring](/de/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health) und die Untersuchung von [Ökosystemen](/de/ecology/ecosystems/what-is-an-ecosystem). Dieser Artikel erklärt, wie die Messungen zustande kommen, was aus einem Rohsignal eine brauchbare wissenschaftliche Größe macht und warum jedes Satellitenprodukt mit einer Unsicherheit behaftet ist, die benannt und nicht verborgen werden muss. Die durchgehend verlinkten begleitenden Artikel gehen bei jedem Instrument und jeder Anwendung in die Tiefe.

## Was die Fernerkundung tatsächlich misst

Ein Fernerkundungssensor fotografiert nicht „Entwaldung“ oder „Dürre“. Er misst elektromagnetische Strahlung in definierten Wellenlängenbändern und legt den Wert an jedem Ort als Zahl ab. Alles Übrige – Vegetation, Wasser, Feuer, Stadtwachstum – wird daraus erschlossen, wie Oberflächen mit dieser Strahlung wechselwirken.

Zwei große Instrumentenfamilien leisten das. **Passive** Sensoren zeichnen natürlich vorhandene Strahlung auf, fast immer reflektiertes Sonnenlicht oder von der Oberfläche abgestrahltes thermisches Infrarot; optische und thermale Abbildungssysteme wie die auf Landsat und MODIS sind passiv. **Aktive** Sensoren liefern ihre eigene Energie und messen, was zurückkommt – Radar und Lidar senden einen Impuls und messen die Laufzeit des Echos, wodurch sie durch Wolken hindurch und bei Nacht sehen und Höhen unmittelbar messen können. Jede Oberfläche hat eine charakteristische [spektrale Signatur](/en/glossary/spectral-signature): die besondere Art, wie sie über die Wellenlängen hinweg reflektiert. Gesunde Vegetation etwa absorbiert rotes Licht und reflektiert stark im nahen Infrarot, und dieser Kontrast ist die Grundlage der weiter unten behandelten Vegetationsindizes.

Die Größe, die ein kalibrierter optischer Sensor letztlich ausgibt, ist die [Reflektanz](/en/glossary/reflectance) – der Anteil des einfallenden Lichts, den eine Oberfläche in jedem Band zurückwirft –, abgelegt als Raster aus Bildpunkten, also als [Rasterdaten](/en/glossary/raster-data). Die Auflösung dieses Rasters und die Häufigkeit seiner Auffrischung bestimmen als Erstes, was ein Sensor sehen kann und was nicht.

## Die Satellitensysteme

Kein einzelner Satellit deckt alle Anforderungen ab, weshalb die Erdbeobachtung auf eine Flotte mit sich ergänzenden Stärken setzt. Die Einführung dazu, [was Fernerkundung ist](/de/ecology/earth-observation/what-is-remote-sensing), behandelt die Physik; den Arbeitspferden selbst ist jeweils ein eigener Artikel gewidmet.

Das gemeinsame [Landsat-Programm](/de/ecology/earth-observation/landsat-program-explained) von NASA und USGS bildet die Landoberfläche seit 1972 durchgehend mit mittlerer Auflösung von etwa 30 Metern ab – die längste derartige Reihe, die es gibt. Das [Copernicus-Programm](/de/ecology/earth-observation/copernicus-programme-explained) der Europäischen Union betreibt die [Sentinel-Satelliten](/de/ecology/earth-observation/sentinel-satellites-explained), die häufige Wiederholungen, Radarabbildung und operationelle Dienste hinzufügen. Die [MODIS-Instrumente](/de/ecology/earth-observation/modis-earth-observation-system) der NASA und ihre VIIRS-Nachfolger tauschen räumliche Detailschärfe gegen eine nahezu tägliche globale Abdeckung, die sich ideal für die Verfolgung schneller Veränderungen eignet. Radaraltimeter auf einer eigenen Missionslinie messen die Höhe der Meeresoberfläche – Gegenstand des Artikels zur [Satellitenaltimetrie](/de/ecology/earth-observation/satellite-altimetry-explained). Die Wahl zwischen ihnen ist ein Abwägen zwischen räumlicher Auflösung, der Häufigkeit, mit der ein Ort erneut überflogen wird, und den Wellenlängen, die ein Sensor messen kann; kein Instrument optimiert alle drei zugleich.

## Vom Photon zum Datenprodukt: die Methodik

Eine im Orbit aufgezeichnete Zahl ist noch keine Wissenschaft. Sie in eine Messung der Oberfläche zu überführen, ist eine definierte Verarbeitungskette, die der Artikel zu den [Datenprodukten der Erdbeobachtung](/de/ecology/earth-observation/earth-observation-data-products) im Einzelnen durchgeht. Die wesentlichen Schritte sind die folgenden.

**Kalibrierung.** Das Rohsignal wird mithilfe der Sensorkalibrierung in eine physikalische Strahldichte umgerechnet und geometrisch korrigiert, sodass jeder Bildpunkt an seinem tatsächlichen Ort am Boden liegt.

**Atmosphärenkorrektur.** Zwischen Oberfläche und Satellit liegt die Atmosphäre, die Licht streut und absorbiert. Die Korrektur dafür überführt die Strahldichte am Oberrand der Atmosphäre in Oberflächenreflektanz – der Schritt, der Aufnahmen von verschiedenen Zeitpunkten vergleichbar macht.

**Verarbeitungsstufen.** Die Agenturen kennzeichnen Produkte danach, wie weit sie in dieser Kette fortgeschritten sind: von den Rohdaten des Instruments (Level 0) über kalibrierte und geolokalisierte Strahldichte (Level 1) und abgeleitete geophysikalische Größen wie Oberflächentemperatur oder Reflektanz (Level 2) bis zu gerasterten, zeitlich zusammengefassten Produkten (Level 3) und modellassimilierten Ergebnissen (Level 4). Die Stufe eines Produkts zu kennen, sagt den Nutzenden, wie viel Verarbeitung – und wie viele Annahmen – bereits in der Zahl stecken.

**Abgeleitete Indizes und Klassifikation.** Aus der Oberflächenreflektanz werden Indizes und Karten berechnet. Der bekannteste ist der [NDVI](/en/glossary/ndvi), der normalisierte differenzierte Vegetationsindex, erklärt im Artikel zum [NDVI](/de/ecology/earth-observation/ndvi-explained) und verallgemeinert im Beitrag zu den [Vegetationsindizes](/de/ecology/earth-observation/vegetation-indices-and-monitoring). Bildpunkte in Kategorien wie Wald, Wasser oder Ackerland einzuteilen, ergibt Karten der [Landbedeckung](/en/glossary/land-cover); sie über die Zeit zu vergleichen, ist die [Erkennung von Landbedeckungsänderungen](/de/ecology/earth-observation/land-cover-change-detection).

## Was die Erdbeobachtung in der Umwelt misst

Auf dieser Verarbeitungskette sitzt ein breites Spektrum von Anwendungen, und hier verbindet sich das Cluster mit dem übrigen EcoScienceHub.

Für **Landoberfläche und Biosphäre** kartieren Satelliten den Zustand der Vegetation, verfolgen die [Entwaldung](/de/ecology/earth-observation/satellite-deforestation-monitoring), erkennen [Waldbrände und Brandflächen aus dem All](/de/ecology/earth-observation/wildfire-monitoring-from-space) und speisen [Systeme zur Dürreüberwachung](/de/ecology/earth-observation/drought-monitoring-systems). Dieselben strukturellen Messungen tragen die [Fernerkundung für das Biodiversitätsmonitoring](/de/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring) und die Kartierung der [Habitatfragmentierung](/de/ecology/biodiversity/habitat-fragmentation-metrics).

Für den **Ozean** schätzen [Beobachtungen der Ozeanfarbe](/de/ecology/earth-observation/ocean-color-observations) das Phytoplankton aus der Farbe des Wassers, während die Altimetrie die Höhe der Meeresoberfläche verfolgt. Für das **Klimasystem** liefert die Erdbeobachtung viele der Leitreihen: die Satellitenaltimetrie hinter dem [Meeresspiegelanstieg](/de/ecology/climate-change/sea-level-rise-indicators), die Sensoren zur Überwachung der [Treibhausgaskonzentrationen](/de/ecology/climate-change/greenhouse-gas-concentrations-monitoring) und die Bilddaten hinter den Eis- und Temperaturindikatoren. Der Sinn des Clusters liegt darin, dass dies keine getrennten Techniken sind, sondern ein Messsystem, das auf verschiedene Fragen gerichtet wird.

## Validierung: warum Bodendaten weiterhin zählen

Einem Satellitenprodukt wird erst getraut, wenn es an unabhängigen Messungen geprüft worden ist. Die [Validierung am Boden](/en/glossary/ground-truthing) – der Abgleich einer Satellitenschätzung mit Feldbeobachtungen, instrumentierten Messtürmen, Schiffen oder höher aufgelösten Aufnahmen – ist der Weg, auf dem die Beziehung zwischen einem Spektralsignal und einer realen Größe kalibriert und ihr Fehler quantifiziert wird. Die Erdbeobachtung ersetzt die Feldarbeit nicht; sie erweitert sie, und beide sind auf ein Zusammenspiel hin angelegt. Ein Vegetationsindex, der an keinen Bodendaten kalibriert wurde, ist ein Muster und noch keine Messung.

## Offene Daten und Kontinuität

Zwei Eigenschaften der modernen Erdbeobachtung werden leicht übersehen, sind für ihren wissenschaftlichen Wert aber zentral: offener Zugang und Kontinuität. Als der USGS 2008 das gesamte Landsat-Archiv zum freien Herunterladen öffnete, weitete sich die Nutzung der Daten sprunghaft aus, weil Forschende endlich lange Bildstapel auswerten konnten, statt Szenen einzeln zu kaufen. Die Europäische Union hat das Copernicus-Programm auf demselben Grundsatz aufgebaut – die Sentinel-Daten sind kostenfrei und offen lizenziert –, und die NASA gibt ihre erdwissenschaftlichen Archive über Earthdata offen weiter. Der offene Zugang ist es, was unabhängige Überprüfung und Langzeitstudien möglich macht.

Kontinuität zählt ebenso viel. Eine Messung ist nur dann ein Indikator für Veränderung, wenn dieselbe Größe über Jahre und über aufeinanderfolgende Satelliten hinweg konsistent erzeugt wird; deshalb investieren die Agenturen erheblich in überlappende Missionen und in Kreuzkalibrierung, damit sich die Reihe eines Instruments ohne künstlichen Sprung an die des nächsten anschließen lässt. Eine Lücke in der Abdeckung oder ein unkalibrierter Sensorwechsel kann sich als Umweltsignal tarnen; die Reihe aufrechtzuerhalten ist daher eine wissenschaftliche Aufgabe für sich und nicht bloß eine betriebliche.

## Unsicherheit

Jede Satellitenmessung ist mit einer Unsicherheit behaftet, und maßgebliche Anbieter weisen sie aus, statt sie zu verschweigen.

**Abwägungen bei der Auflösung.** Feinere räumliche Details bedeuten meist eine schmalere Streifenbreite und seltenere Wiederholungen. Ein Sensor, der einen Ort täglich sieht, kann nicht zugleich einzelne Bäume auflösen; einer, der Feldgrenzen auflöst, überfliegt den Ort vielleicht nur alle ein bis zwei Wochen erneut. Welches Instrument das richtige ist, hängt von der Frage ab.

**Atmosphäre und Wolken.** Optische Sensoren sehen die Oberfläche nicht durch Wolken hindurch, weshalb wolkenreiche und tropische Regionen systematische Lücken aufweisen. Verbliebene atmosphärische Effekte, Aerosole und Dunst fügen auch an klaren Tagen Fehler hinzu, die die Atmosphärenkorrektur verringert, aber nie vollständig beseitigt.

**Mischpixel.** Ein einzelner Bildpunkt deckt oft mehrere Oberflächentypen ab, sodass sein Wert eine Mischung ist. Ein „Wald“-Pixel kann teilweise Kahlfläche sein; eine daraus gebildete Schätzung erbt diese Mehrdeutigkeit.

**Unterschiede zwischen Sensoren und Missionen.** Instrumente altern, Bahnen driften, und aufeinanderfolgende Missionen unterscheiden sich; eine konsistente lange Reihe zu bauen, erfordert daher sorgfältige Kreuzkalibrierung. Eine scheinbare Veränderung kann ein Artefakt eines Sensorwechsels sein und keine Veränderung am Boden.

## Grenzen: was Satelliten nicht leisten können

Zwei Grenzen sind struktureller Natur. Erstens misst die Fernerkundung **physikalische und spektrale Eigenschaften, nicht die Dinge selbst** – sie sieht das Grün eines Kronendachs, nicht Pflanzenarten; thermische Anomalien, nicht „Feuer“ als solches; die Farbe des Wassers, nicht unmittelbar das Phytoplankton. Die biologische oder gesellschaftliche Bedeutung ist stets ein Schluss, der validiert werden muss. Zweitens setzt **das Archiv den Horizont**: Eine Satellitenreihe kann keine Zustände beschreiben, die vor der Existenz ihrer Instrumente lagen, weshalb der Beginn der durchgehenden Landsat-Reihe 1972 oder der Beginn der Satellitenaltimetrie zu Anfang der 1990er-Jahre für viele Studien die praktische Basislinie markiert. Für längere Perspektiven müssen Satellitendaten mit älteren Aufzeichnungen verbunden werden.

## Worauf die Beobachtungen hinarbeiten

Kontinuität hat nicht nur eine Begründung, sondern auch ein Ziel. Die internationale Gemeinschaft legt über die essenziellen Klimavariablen fest, welche Größen dauerhaft erhoben werden müssen: Das Global Climate Observing System definiert derzeit 55 von ihnen über die Bereiche Atmosphäre, Ozean und Land, ausgewählt nach ihrer Relevanz für die Charakterisierung des Klimasystems, der technischen Machbarkeit globaler Beobachtung und der Kostenwirksamkeit. Viele werden überwiegend oder vollständig aus dem Orbit gewonnen – Meeresoberflächentemperatur, Meeresspiegel, Meereis, Landbedeckung, oberirdische Biomasse, Ozeanfarbe, Albedo, Blattflächenindex –, weshalb Missionskontinuität und die Festlegung der ECVs ein und dieselbe Frage sind. Den Rahmen stellt der Artikel zu den [essenziellen Klimavariablen](/de/ecology/earth-systems/essential-climate-variables-explained) dar, und das gekoppelte System, das diese Variablen gemeinsam beschreiben, ist Gegenstand des Clusters zur [Erdsystemwissenschaft](/de/ecology/earth-systems/earth-system-science-explained).

## Transparenz der Quellen

Jede quantitative Aussage in diesem Cluster ist einer benannten Institution zugeordnet – NASA und NASA Earthdata, dem Landsat-Programm des USGS, der ESA sowie dem Copernicus-Programm der Europäischen Union und seinen Diensten, dem ECMWF, der Gemeinsamen Forschungsstelle der Europäischen Kommission, der NOAA, der WMO und der FAO – oder begutachteter Literatur wie den Zeitschriften *Remote Sensing* und *Earth System Science Data*. Die Hosts der Zitate werden beim Bauen der Website gegen ein kuratiertes Verzeichnis geprüft, sodass ein unbekannter oder wenig belastbarer Link vor der Veröffentlichung auffällt. Wo eine Zahl umstritten oder versionsabhängig ist, sagt der Text das.

## Der Rest des Clusters

Die begleitenden Artikel führen jeden Teil weiter: [was Fernerkundung ist](/de/ecology/earth-observation/what-is-remote-sensing), das [Landsat-Programm](/de/ecology/earth-observation/landsat-program-explained), die [Sentinel-Satelliten](/de/ecology/earth-observation/sentinel-satellites-explained), das [MODIS-System](/de/ecology/earth-observation/modis-earth-observation-system), der [NDVI](/de/ecology/earth-observation/ndvi-explained) und die weitere Familie der [Vegetationsindizes](/de/ecology/earth-observation/vegetation-indices-and-monitoring), die [Erkennung von Landbedeckungsänderungen](/de/ecology/earth-observation/land-cover-change-detection), die [satellitengestützte Entwaldungsüberwachung](/de/ecology/earth-observation/satellite-deforestation-monitoring), die [Waldbrandüberwachung aus dem All](/de/ecology/earth-observation/wildfire-monitoring-from-space), [Systeme zur Dürreüberwachung](/de/ecology/earth-observation/drought-monitoring-systems), [Beobachtungen der Ozeanfarbe](/de/ecology/earth-observation/ocean-color-observations), die [Satellitenaltimetrie](/de/ecology/earth-observation/satellite-altimetry-explained), die [Datenprodukte der Erdbeobachtung](/de/ecology/earth-observation/earth-observation-data-products), das [Copernicus-Programm](/de/ecology/earth-observation/copernicus-programme-explained) und eine offene Darstellung der [Grenzen und Unsicherheiten der Fernerkundung](/de/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). Zusammen erklären sie, wie der Planet aus dem Orbit beobachtet wird und wie zu lesen ist, was diese Beobachtung hervorbringt.

## Sources

1. **NASA Earthdata** — [Earth-science data and EOSDIS](https://www.earthdata.nasa.gov/). Zugang zu den Erdbeobachtungsarchiven der NASA und zur Dokumentation der Produktstufen.
2. **NASA Earth Observatory** — [imagery and explainers](https://earthobservatory.nasa.gov/). Themenseiten dazu, wie Satellitenmessungen entstehen und genutzt werden.
3. **USGS** — [Landsat missions](https://www.usgs.gov/landsat-missions). Geschichte, Sensoren und die durchgehende Reihe der Landoberfläche (gemeinsam mit der NASA).
4. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Europäische Erdbeobachtungsmissionen und -instrumente.
5. **Copernicus** — [EU Earth-observation programme](https://www.copernicus.eu/en). Die Sentinels und die Copernicus-Dienste.
6. **ECMWF** — [reanalysis and Copernicus services](https://www.ecmwf.int/). Betreibt die Dienste für Klimawandel und Atmosphärenüberwachung.
7. **NOAA NESDIS** — [environmental satellites](https://www.nesdis.noaa.gov/). Operationelle Satelliten und Datendienste der NOAA.
8. **European Commission JRC** — [land, forest, and hazard monitoring](https://joint-research-centre.ec.europa.eu/). Operationelle Produkte auf Basis der Erdbeobachtung.
9. **WMO** — [global observing systems](https://wmo.int/). Internationale Standards für die Umweltbeobachtung.
10. **Remote Sensing (journal)** — [peer-reviewed methods](https://www.mdpi.com/journal/remotesensing). Forschung zu Sensoren, Algorithmen und Anwendungen.
11. **Earth System Science Data** — [reference datasets](https://earth-system-science-data.net/). Begutachtete Veröffentlichungen zu Erdsystemdaten.
