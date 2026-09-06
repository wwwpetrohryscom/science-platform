---
title: 'Strömungsmechanik: warum eine einzige dimensionslose Zahl über das Verhalten einer Strömung entscheidet'
metaTitle: Strömungsmechanik und die Reynolds-Zahl
excerpt: Ein schwimmendes Wimperntierchen und ein Hurrikan gehorchen denselben Gleichungen. Was sie trennt, ist das Verhältnis von Trägheit zu Zähigkeit, und dieses Verhältnis entscheidet, ob eine Strömung glatt, chaotisch oder der direkten Berechnung entzogen ist.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - fluid-dynamics
  - reynolds-number
  - turbulence
  - boundary-layer
  - aerodynamics
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - sound-and-acoustics-explained
  - convection-and-cloud-formation
pillar: classical-mechanics-explained
_bodyHash: '42799e83'
---

Ein Einzeller, der seine Zilien schlägt, und ein Wirbelsturm, der sich um sein Auge legt, werden von denselben Gleichungen beherrscht. Was sie trennt, ist nicht die Physik, sondern ein Verhältnis: wie viel die Trägheit des Fluids im Vergleich zu seiner Zähigkeit ausmacht. Dieses Verhältnis, die [Reynolds-Zahl](/en/glossary/reynolds-number), ist das Erste, wonach ein Strömungsmechaniker bei einem Problem fragt, denn es entscheidet, welche Terme der Gleichungen weggeworfen werden dürfen und welche nicht.

Die zugrunde liegenden Erhaltungssätze sind jene, die die [klassische Mechanik](/de/physics/mechanics-waves/classical-mechanics-explained) darlegt. Was sich ändert, ist der Gegenstand: statt eines Körpers mit festen Teilen ist der Gegenstand ein Kontinuum, das sich unbegrenzt verformt, sodass Masse, Impuls und Energie durch ein Kontrollvolumen verfolgt werden müssen, statt an einem Ding zu haften.

## Das Verhältnis und was es auswählt

Das Luftfahrt-Nachschlagewerk der NASA formuliert die Definition unverblümt: Die Reynolds-Zahl „drückt das Verhältnis der Trägheitskräfte (die sich Änderung oder Bewegung widersetzen) zu den zähen (schweren und klebrigen) Kräften aus“, geschrieben Re = ρVL/μ, wobei ρ die Dichte, V eine charakteristische Geschwindigkeit, L eine charakteristische Länge und μ die dynamische Viskosität ist. Nichts in diesem Ausdruck ist eine Eigenschaft des Fluids allein. Zwei der vier Größen sind Eigenschaften des Fluids, aber eine beschreibt die Strömung und eine die Geometrie, weshalb dasselbe Wasser in einer Kapillare tief im zähen Regime liegt und in einem Fluss durch und durch turbulent ist.

Das untere Ende ist seltsamer, als es klingt. Arbeiten am Wimperntierchen *Paramecium* setzen es bei einer Reynolds-Zahl von etwa 0.1 an, einem Regime, in dem „die Trägheitskräfte klein gegenüber den zähen Kräften sind“. Ein Organismus rollt dort nicht aus. Halten die Zilien an, hört die Bewegung fast augenblicklich auf, denn es gibt keinen nennenswerten gespeicherten Impuls. Strategien, die dadurch wirken, dass Fluid nach hinten geworfen wird — wie es ein Schwimmer tut —, bringen auf dieser Skala nichts ein.

Für die Fluideigenschaften selbst geben die Referenzdaten des NIST flüssigem Wasser bei 20 °C und 1 bar eine Dichte von 998.21 kg/m³ und eine Viskosität von 1.0016 × 10⁻³ Pa·s. Teilt man das eine durch das andere, ergibt sich eine kinematische Viskosität nahe 1.0 × 10⁻⁶ m²/s, und es ist diese zusammengesetzte Größe und nicht die Viskosität allein, die festlegt, wie schnell Impuls quer durch eine Strömung diffundiert.

Der praktische Ertrag des Verhältnisses ist der Modellversuch. Die Darstellung der NASA ist direkt: „Wenn die Reynolds-Zahl von Experiment und Flug nahe beieinander liegen, dann modellieren wir die Wirkungen der zähen Kräfte im Verhältnis zu den Trägheitskräften richtig.“ Ein Modell im Windkanal ist kein kleines Flugzeug; es ist eine andere Strömung, die so eingerichtet wurde, dass sie dieselben dimensionslosen Zahlen besitzt. Wo auch die Kompressibilität eine Rolle spielt, muss zusätzlich ein zweites Verhältnis angeglichen werden — die Mach-Zahl, die Geschwindigkeit geteilt durch [die örtliche Schallgeschwindigkeit](/de/physics/mechanics-waves/sound-and-acoustics-explained) —, und die NASA warnt, dass die Übertragung von Beiwerten aus dem Langsamflug auf Bedingungen hoher Geschwindigkeit scheitert, weil „die Kompressibilität der Luft die maßgebliche Physik zwischen diesen beiden Fällen verändert“.

## Was die Bernoulli-Gleichung sagt und welche Fassung davon falsch ist

Die Bernoulli-Beziehung ist eine Aussage über die Energie entlang einer Stromlinie, und sie gilt nur für eine Strömung, die stationär, inkompressibel und praktisch reibungsfrei ist. Diese Bedingungen sind kein Kleingedrucktes; sie sind der Inhalt. Wo sie gelten, entspricht einem Anstieg der Geschwindigkeit ein Abfall des Drucks, und die Gleichung rechnet das eine in das andere um.

Schwierig wird es, wenn man sie rückwärts laufen lässt, um etwas zu erklären, was sie nicht erklären kann. Das langlebigste Beispiel ist die Behauptung, ein Flügel erzeuge Auftrieb, weil die Luft auf dem längeren oberen Weg gleichzeitig mit der Luft auf dem unteren Weg an der Hinterkante ankommen müsse und daher schneller unterwegs sein müsse. Der Luftfahrt-Leitfaden der NASA verwirft diese Begründung aus Messgründen und nicht aus prinzipiellen Gründen: „die Geschwindigkeit auf der Oberseite eines auftriebserzeugenden Flügels ist viel höher als die Geschwindigkeit auf der Oberseite, die eine gleiche Durchlaufzeit erzeugt“. Die unterstellte Geschwindigkeit ist schlicht nicht die beobachtete. Die Bernoulli-Gleichung ist in Ordnung; ihr wird eine erfundene Eingabe zugeführt. Die redliche Reihenfolge der Schritte besteht darin, zuerst das Geschwindigkeitsfeld zu bestimmen, dann mit Bernoulli daraus den Druck zu machen und dann den Druck zu einer Kraft aufzuintegrieren.

## Die Grenzschicht, in der die vernachlässigte Zähigkeit die ganze Arbeit leistet

Eine Strömung als reibungsfrei zu behandeln, funktioniert fernab von Oberflächen erstaunlich gut und versagt an ihnen vollständig, weil ein wirkliches Fluid an einer festen Wand nicht gleitet. Die NASA beschreibt die Folge als „eine dünne Fluidschicht nahe der Oberfläche, in der sich die Geschwindigkeit von null an der Oberfläche auf den Wert der freien Anströmung fern der Oberfläche ändert“. Nahezu die gesamte Scherung und damit nahezu der gesamte Reibungswiderstand steckt in dieser Schicht.

Ihr Charakter hängt von der Reynolds-Zahl ab: „Bei niedrigeren Reynolds-Zahlen ist die [Grenzschicht](/en/glossary/boundary-layer) laminar, und die Geschwindigkeit in Strömungsrichtung ändert sich gleichmäßig, wenn man sich von der Wand entfernt“, während sie bei höheren Werten „turbulent ist und die Geschwindigkeit in Strömungsrichtung durch instationäre wirbelnde Strömungen innerhalb der Grenzschicht gekennzeichnet ist“. Der Unterschied ist wichtig, weil eine Grenzschicht, der der Impuls ausgeht, sich von der Oberfläche ablöst, und die Ablösung ist es, die bei großem Anstellwinkel den Strömungsabriss am Flügel erzeugt.

Deshalb wächst auch der Widerstand nicht gleichmäßig mit der Geschwindigkeit. Die Behandlung der Kugelumströmung durch die NASA beschreibt eine Abfolge und keinen Trend: bei kleiner Geschwindigkeit stabile anliegende Wirbel, dann instabiles wechselseitiges Ablösen — die Wirbelstraße —, das großen Widerstand erzeugt, dann chaotische Strömung, die den Widerstand etwas verringert, und dann eine turbulente Grenzschicht, die zunächst weniger Widerstand erzeugt als der laminare Fall, bevor sich das Verhältnis erneut umkehrt. Eine turbulente Schicht ist an der Wand dissipativer, führt aber Fluid höheren Impulses zu ihr hinunter, sodass sie weiter um den Körper herum anliegen kann. Ob dieser Tausch günstig ist, hängt davon ab, wo man sich in der Abfolge befindet.

## Der Übergang ist ein Bereich, keine Schwelle

Die Lehrbuchkurzform setzt den Übergang von laminar zu turbulent in einem Rohr bei einer Reynolds-Zahl von etwa 2300 an, als schlüge die Strömung an einer Linie in einen anderen Zustand um. Sorgfältige Arbeiten zur Übergangsströmung im Rohr beschreiben etwas weniger Ordentliches. Unterhalb von Re₁ ≃ 2300 tritt Turbulenz als örtlich begrenzte „Gleichgewichts- (oder langzeittransiente) Puffs“ auf, die in einem sonst laminaren Untergrund wandern; der turbulente Anteil wächst dann mit der Reynolds-Zahl, „bis Re₂ ≃ 2600, wo ein kontinuierlicher Übergang zu einem Zustand gleichmäßiger Turbulenz stattfindet“.

| Reynolds-Zahl | Zustand der Rohrströmung | Was tatsächlich beobachtet wird |
| --- | --- | --- |
| Unter ≈ 2300 | Laminar mit örtlicher Turbulenz | Vereinzelte Puffs, transient oder langlebig, in laminarer Umgebung |
| ≈ 2300 bis ≈ 2600 | Intermittierend | Der turbulente Anteil steigt stetig mit der Reynolds-Zahl |
| Über ≈ 2600 | Gleichmäßige Turbulenz | Turbulenz füllt das Rohr, statt in Flecken aufzutreten |

Daraus folgen zwei Dinge. Der Übergang ist eine Eigenschaft eines Bereichs, sodass eine Strömung nahe dem unteren Wert je nach Störung am Einlauf und Wandrauheit laminar oder turbulent sein kann. Und ein einzelner zitierter kritischer Wert ist die Zusammenfassung einer Verteilung und kein Schalter.

## Turbulenz: der Teil, der nicht geschlossen ist

Turbulenz ist keine eigene physikalische Theorie. Sie ist das, was dieselben Gleichungen tun, wenn die nichtlinearen Trägheitsterme überwiegen, und die Schwierigkeit ist eher rechnerischer als begrifflicher Art. Die Mittelung der Gleichungen zur Bestimmung der mittleren Strömung führt neue Terme ein, die den Impulstransport durch die Schwankungen darstellen, und diese Terme enthalten Unbekannte, die die gemittelten Gleichungen selbst nicht liefern können. Jede praktische Rechnung schließt das System daher mit einem Modell.

Wie weit dieses Zugeständnis reicht, zeigt sich daran, wie das Fach seine eigenen Ziele formuliert. Eine von der NASA in Auftrag gegebene Studie zur Zukunft der numerischen Aerodynamik setzt sich für 2030 zum Ziel, dass „physikbasierte, genaue Vorhersagen komplexer turbulenter Strömungen einschließlich der Strömungsablösung routinemäßig und effizient durchgeführt werden können“ — ein Ziel, das gerade deshalb aufgeschrieben zu werden verdient, weil es noch keine Routine ist. Turbulenzmodelle werden an gemessenen und simulierten Fällen kalibriert, statt aus ersten Prinzipien hergeleitet zu werden, was bedeutet, dass von einem in einem Regime validierten Modell nicht angenommen werden darf, es sei außerhalb davon genau.

## Warum das in jeder Klima- und Wettervorhersage auftaucht

Die Lücke zwischen aufgelöster und modellierter Bewegung ist die zentrale Einschränkung der geophysikalischen Simulation und keine Einzelheit der Ingenieurpraxis. Der Sachstandsbericht des IPCC sagt es direkt: „Angesichts begrenzter Rechenressourcen können die GCM der derzeitigen Generation kleinskalige Wolkenprozesse noch nicht abbilden, und folglich wird flache und hochreichende Konvektion durch Parametrisierungen unterhalb der Gitterweite bestimmt.“ Regionale konvektionsauflösende Modelle, „die typischerweise mit einer Auflösung von weniger als 10 km gerechnet werden“, lösen einen Teil dessen auf, was ein globales Modell parametrisieren muss, und sie verbessern den simulierten Tagesgang und die Niederschlagsextreme — global über lange Zeiträume lassen sie sich bei den derzeitigen Kosten jedoch nicht rechnen.

Die redliche Lesart dieser Lage ist die, die der Bericht für globale Modelle mit parametrisierter Konvektion gibt: Es bleibt „geringes Vertrauen in ihre Fähigkeit, die raumzeitlichen Merkmale des heutigen Niederschlags genau zu simulieren, insbesondere in den Tropen“. Ein [Klimamodell](/de/glossary/climate-model) irrt sich nicht über die Strömungsmechanik; es kann die Skalen nicht auflösen, auf denen ein Teil der Strömungsmechanik stattfindet, und der Ersatz ist eine Parametrisierung, deren Koeffizienten durch Beobachtung eingegrenzt und nicht hergeleitet sind. Dasselbe Problem setzt Grenzen dafür, wie die [ozeanische Zirkulation](/de/ecology/earth-systems/ocean-circulation-and-climate) dargestellt wird, und es ist der Grund dafür, dass [Konvektion und Wolkenbildung](/de/physics/climate-physics/convection-and-cloud-formation) einer der am aktivsten überarbeiteten Teile der [Atmosphärenphysik](/de/physics/climate-physics/atmospheric-physics-explained) bleibt.

Was die Reynolds-Zahl nicht leisten kann, ist zu sagen, welche Länge man in sie einsetzen soll. Ein Rohr hat einen offensichtlichen Durchmesser; ein Gebirgszug, die Grenzschicht eines Blattes oder eine brechende Welle haben keinen, und die Wahl der charakteristischen Länge ist ein Modellierungsurteil, das den Wert um Größenordnungen verändert. Zwei mit derselben Reynolds-Zahl angegebene Strömungen sind nur dann dynamisch ähnlich, wenn in beiden Fällen dieselbe Länge gemeint war — was sich leicht sagen lässt und zwischen einem Windkanal und einer Veröffentlichung leicht verloren geht.

## Sources

1. **NASA Glenn Research Center** — [Similarity parameters](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/similarity-parameters/). Definition der Reynolds- und der Mach-Zahl und Grundlage der Ähnlichkeit im Windkanal.
2. **NASA Glenn Research Center** — [Bernoulli and Newton](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/). Warum die Auftriebserklärung über gleiche Durchlaufzeiten das Geschwindigkeitsfeld falsch angibt.
3. **NASA Glenn Research Center** — [Boundary layer](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/). Definition der Grenzschicht, laminarer und turbulenter Charakter sowie Strömungsablösung.
4. **NASA Glenn Research Center** — [Drag of a sphere](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Abfolge der Strömungszustände hinter einem stumpfen Körper und ihre Wirkung auf den Widerstand.
5. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Dichte und Viskosität von flüssigem Wasser bei 20 °C und 1 bar.
6. **Proceedings of the National Academy of Sciences** — [Distinct large-scale turbulent-laminar states in transitional pipe flow](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889535/). Kritische Reynolds-Zahlen, die das intermittierende Regime der Rohrströmung begrenzen.
7. **eNeuro** — [Integrative neuroscience of Paramecium, a "swimming neuron"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8208649/). Reynolds-Zahl eines schwimmenden Wimperntierchens und Vorherrschaft der zähen Kräfte.
8. **NASA Technical Reports Server** — [CFD Vision 2030 Study: A Path to Revolutionary Computational Aerosciences](https://ntrs.nasa.gov/citations/20140003093). Erklärtes Ziel für 2030: routinemäßige, genaue Vorhersage komplexer turbulenter Strömungen.
9. **IPCC AR6 WG1, Kapitel 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Parametrisierung der Konvektion unterhalb der Gitterweite, konvektionsauflösende Auflösung und Vertrauen in den simulierten Niederschlag.
