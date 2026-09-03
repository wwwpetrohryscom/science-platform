---
title: 'Die Hauptsätze der Thermodynamik: was jeder von ihnen tatsächlich verbietet'
excerpt: Die vier Hauptsätze sind Verbote, keine Rezepte. Jeder schließt eine Klasse von Maschinen oder Prozessen aus, und gemeinsam legen sie fest, was Temperatur bedeutet, was die Energiebilanz aufgehen lassen muss und in welche Richtung ein Prozess laufen kann.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - thermodynamics
  - second-law
  - temperature
  - entropy
  - energy-conversion
related:
  - entropy-explained
  - heat-engines-and-efficiency-limits
  - heat-transfer-conduction-convection-radiation
  - earth-energy-budget-and-the-second-law
---
[Thermodynamik](/en/glossary/thermodynamics) ist eine Sammlung von Verboten. Jeder ihrer vier Hauptsätze sagt, dass etwas nicht getan werden kann, und jeder hat die mikroskopischen Theorien überlebt, die ihn erklären sollten — den Wärmestoff, dann die klassische Mechanik, dann die klassische Feldtheorie. Deshalb schränkt ein Dampfargument aus dem 19. Jahrhundert unverändert noch immer eine Solarzelle, einen Haushaltskühlschrank und ein Bakterium ein.

Sie werden auch lockerer zitiert, als sie benutzt werden. „Energie bleibt erhalten" und „Entropie nimmt zu" sind Schlagworte, die die angehängten Bedingungen fallen lassen, und in diesen Bedingungen wohnt die Verwirrung über Perpetua mobilia, Wirkungsgradbehauptungen und lebende Systeme.

## Der nullte Hauptsatz macht ein Thermometer erst bedeutungsvoll

Der nullte Hauptsatz sagt, dass thermisches Gleichgewicht transitiv ist: Stehen zwei Körper je im Gleichgewicht mit einem dritten, so stehen sie im Gleichgewicht miteinander. Das klingt nach Buchführung. Es ist der Grund, weshalb eine einzige Zahl für eine Eigenschaft stehen kann, die jedes System im wechselseitigen Gleichgewicht teilt — und damit der Grund, weshalb ein Instrument, das einen Körper berührt, etwas über den Körper und nicht nur über das Instrument meldet.

Diese Zahl beruht heute auf einer festgelegten Konstante statt auf einer Substanz. Seit Mai 2019 legt das SI die Boltzmann-Konstante auf exakt 1,380649 × 10⁻²³ J K⁻¹ fest, und das Kelvin folgt daraus; der CODATA-Eintrag trägt keine Unsicherheit, weil es keine zu tragen gibt. Die frühere Definition von 1954 machte das Kelvin zu 1/273,16 der Temperatur des Wassertripelpunkts, und das NIST benennt die Schwäche dieser Regelung: Vom Wassertripelpunkt auf sehr hohe oder sehr tiefe Temperaturen zu extrapolieren ist problematisch, weshalb 21 weitere definierende Punkte international vereinbart wurden. Der absolute Nullpunkt bleibt, wo er war, bei −273,15 °C.

**Temperatur ist keine Energiemenge.** Ein Funke und eine Badewanne können bei gleicher Temperatur Energien aufweisen, die sich um viele Größenordnungen unterscheiden. Temperatur ist die Variable, die sich angleicht, wenn zwei Systeme Energie austauschen dürfen — genau das behauptet der nullte Hauptsatz, und mehr behauptet er nicht.

## Der erste Hauptsatz: Energie bleibt erhalten, und Wärme ist nichts, was ein Körper enthält

Der erste Hauptsatz erweitert die Energieerhaltung um die Wärme: Die Änderung der inneren Energie eines Systems ist gleich der zugeführten Wärme minus der vom System verrichteten Arbeit. Sein Gehalt liegt im Unterschied zwischen den Termen. Innere Energie ist eine **[Zustandsgröße](/en/glossary/state-function)** — sie hängt nur vom gegenwärtigen Zustand ab, sodass ein Rundweg sie an den Ausgangspunkt zurückbringt. Wärme und Arbeit sind **Prozessgrößen**: Sie beschreiben Energie, die während eines Vorgangs eine Grenze überschreitet, und ihre Aufteilung hängt davon ab, wie der Vorgang geführt wurde.

Praktisch folgt daraus, dass „wie viel Wärme enthält dieser Körper" keine wohlgeformte Frage ist. Ein Körper besitzt innere Energie; Wärme ist diese Energie im Übergang unter einem Temperaturunterschied, und Arbeit ist Energie im Übergang durch eine Kraft entlang eines Weges. Dieselbe Zustandsänderung lässt sich durch viele Kombinationen der beiden erreichen, weshalb der erste Hauptsatz allein nie einen Wirkungsgrad auszeichnet — er bringt die Bücher zum Ausgleich und hört dort auf.

Was er verbietet, ist das Perpetuum mobile erster Art: eine zyklische Vorrichtung, die Arbeit ohne gleich große Energiezufuhr liefert. Das Verbot ist kategorisch statt mechanisch — es gilt, ohne das vorgeschlagene Gestänge zu prüfen, weil jeder Kreisprozess die innere Energie auf ihren Anfangswert zurückführt und die Bücher dann über die Grenze hinweg aufgehen müssen.

## Der zweite Hauptsatz: der mit einer Richtung

Zwei klassische Formulierungen sind gleichwertig. Clausius: Kein Kreisprozess kann als einziges Ergebnis Wärme von einem kälteren auf einen wärmeren Körper übertragen. Kelvin–Planck: Kein Kreisprozess kann als einziges Ergebnis Wärme aus einem einzigen Reservoir vollständig in Arbeit umwandeln. Beide fasst die Entropieform zusammen — in einem abgeschlossenen System nimmt die Entropie nicht ab — und beide verbieten das Perpetuum mobile zweiter Art, das Gerät, das aus bloßer Umgebungswärme nutzbare Arbeit zöge. Was Entropie ist und warum „Unordnung" eine schlechte Umschreibung dafür ist, behandelt der Begleitartikel darüber, [was Entropie tatsächlich misst](/de/physics/thermodynamics/entropy-explained).

Dies ist der einzige Hauptsatz hier, der Vergangenheit von Zukunft unterscheidet, und der mit der schärfsten ingenieurtechnischen Folge: Die Obergrenze jeder zyklischen Maschine hängt von den Temperaturen ihrer Reservoire ab und von nichts sonst — eine Schranke, die mit realen Anlagendaten in [Wärmekraftmaschinen und ihren Wirkungsgradgrenzen](/de/physics/thermodynamics/heat-engines-and-efficiency-limits) entwickelt wird.

Er ist zudem statistisch, und das ist keine Ausflucht. Die Crooks'sche Fluktuationsrelation legt fest, um wie viel wahrscheinlicher eine Vorwärtstrajektorie ist als ihre Umkehrung, gegeben die ausgetauschte Arbeit, und sie wurde [direkt geprüft, indem einzelne RNA-Moleküle gezogen wurden](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/) — mit optischen Pinzetten: Die aus den Arbeitsverteilungen zurückgewonnene Faltungsfreie Energie betrug für eine Haarnadel 62,8 ± 1,5 kBT, in Übereinstimmung mit einer unabhängigen Rechnung. Die Entfaltungs- und Rückfaltungs-Arbeitsverteilungen dieses Experiments überlappen und kreuzen sich bei der Änderung der freien Energie, sodass einzelne Züge auf beide Seiten fallen — einige laufen lokal „falsch herum" —, während das Ensemble der Ungleichung gehorcht. Der zweite Hauptsatz ist eine Aussage über überwältigende Wahrscheinlichkeiten in Systemen vieler Teilchen, keine logische Unmöglichkeit im Maßstab weniger.

## Der dritte Hauptsatz: der absolute Nullpunkt als Asymptote

Der dritte Hauptsatz besagt, dass die Entropie eines Systems gegen eine Konstante geht, wenn die Temperatur gegen den absoluten Nullpunkt geht, und dass diese Konstante für einen perfekten Kristall null ist. Zweierlei folgt. Absolute Entropien werden bedeutungsvoll, weil es einen gemeinsamen Bezugspunkt zum Integrieren gibt — deshalb gibt es überhaupt tabellierte Standardentropien. Und Kühlen wird zunehmend schwerer: Wärmekapazitäten fallen mit der Temperatur gegen null, sodass jede weitere Kühlstufe weniger vorfindet, womit sie arbeiten kann.

Die Unerreichbarkeitsaussage wurde jüngst geschärft. Eine 2017 in *Nature Communications* veröffentlichte [allgemeine Herleitung](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/) bezifferte den Preis: Perfektes Kühlen auf den absoluten Nullpunkt verlangt, dass mindestens eine Ressource — das Volumen des kalten Bades oder die aufgewandte Arbeit — unendlich ist, und für ein Strahlungsbad skaliert die erreichbare Temperatur mit einer inversen Potenz der Kühlzeit. Der absolute Nullpunkt ist nicht bloß praktisch schwierig; die Schwierigkeit ist ein Theorem, und das Theorem beziffert sie.

## Die vier Hauptsätze nebeneinander

| Hauptsatz | Was er behauptet | Was er verbietet | Was er bedeutungsvoll macht |
| --- | --- | --- | --- |
| Nullter | Thermisches Gleichgewicht ist transitiv | Eine Temperaturskala, die vom Instrument abhängt | Temperatur als geteilte Eigenschaft |
| Erster | Energie, Wärme eingeschlossen, bleibt erhalten | Arbeit aus dem Nichts — Perpetuum mobile erster Art | Innere Energie als Zustandsgröße |
| Zweiter | Die Entropie eines abgeschlossenen Systems nimmt nicht ab | Arbeit aus einem einzigen Reservoir — Perpetuum mobile zweiter Art | Entropie und eine Zeitrichtung |
| Dritter | Die Entropie strebt gegen eine Konstante, wenn die Temperatur gegen null geht | Den absoluten Nullpunkt mit endlichen Mitteln zu erreichen | Absolute Entropie, auf null bezogen |

## Reversibilität ist eine Grenze, kein Verfahren

Jede obige Schranke ist für einen reversiblen Prozess hergeleitet: einen, der so langsam und mit so kleinem Ungleichgewicht geführt wird, dass er rückwärts durch dieselben Zustände laufen könnte, ohne Rückstände zu hinterlassen. Nichts Wirkliches ist reversibel, denn eine endliche Rate verlangt eine endliche Triebkraft, und eine endliche Triebkraft erzeugt Entropie. Deshalb werden die Schranken angenähert und nie erreicht, und deshalb sind die Maximierung des Wirkungsgrads und die Maximierung der Leistung verschiedene Optimierungen mit verschiedenen Antworten. Der Abstand ist nicht klein: Der US-Kohlepark verbrauchte 2024 nach Angaben der Energy Information Administration 10 777 Btu Brennstoff je erzeugter Kilowattstunde, sodass knapp ein Drittel der Brennstoffenergie als Strom ankam.

Es erklärt auch eine Arbeitsteilung, über die viele stolpern. Thermodynamik legt Richtung und Obergrenze fest; über die Geschwindigkeit sagt sie nichts. Wie schnell Energie eine Grenze tatsächlich überschreitet, ist eine Transportfrage, geregelt durch Leitung, Konvektion und Strahlung mit eigenen Skalengesetzen — Gegenstand von [wie Wärme sich tatsächlich bewegt](/de/physics/thermodynamics/heat-transfer-conduction-convection-radiation), und der Grund, warum ein thermodynamisch erlaubter Vorgang trotzdem nutzlos langsam sein kann.

## Wo die Hauptsätze außerhalb von Maschinen greifen

Eine Wärmepumpe liefert einem Gebäude mehr thermische Energie, als sie an Strom verbraucht, was regelmäßig als Verstoß gelesen wird. Das ist keiner: Die Maschine verschiebt Wärme, statt sie zu erzeugen, und der zweite Hauptsatz begrenzt das Verhältnis über den Temperaturhub, statt ein Verhältnis über eins zu verbieten. Je kleiner der Hub, desto höher das erreichbare Verhältnis — weshalb erdgekoppelte Maschinen dort attraktiv sind, wo Erdreich verfügbar ist. Das US-Energieministerium merkt an, dass die Temperaturen in etwa 30 Fuß Tiefe ganzjährig zwischen rund 10 °C und 15 °C bleiben, im Januar eine weit mildere Quelle als die Außenluft.

Lebende Systeme rufen dieselbe Fehldeutung hervor. Ein Organismus baut und erhält unwahrscheinliche Struktur und senkt damit seine eigene Entropie, während er eine größere Zunahme an seine Umgebung abgibt; die Rechnung geht auf, weil der Organismus offen ist, wie das Energieflussargument hinter [der Primärproduktion in Ökosystemen](/de/ecology/ecosystems/primary-production-and-energy-flow) darlegt. Die planetare Fassung — Sonnenlicht bei hoher Temperatur aufgenommen, Infrarot bei niedriger abgestrahlt — wird in [der Energiebilanz der Erde als Wärmekraftmaschine](/de/physics/thermodynamics/earth-energy-budget-and-the-second-law) durchgerechnet; dieselbe Überlegung, auf eine heiße Strahlungsquelle und eine kalte Zelle angewandt, ergibt [die thermodynamischen Grenzen der Photovoltaik](/de/physics/thermodynamics/thermodynamic-limits-of-photovoltaics), und sie kehrt an jedem Schritt der Umwandlungsketten wieder, die [der Aufbau von Energiesystemen](/de/physics/energy/energy-systems-explained) beschreibt.

## Was der Rahmen nicht klärt

Die klassische Thermodynamik ist eine Theorie der Gleichgewichtszustände und der Übergänge zwischen ihnen: Sie liefert keine Zeitkonstanten und schweigt über Mechanismen. Weit vom Gleichgewicht entfernte stationäre Zustände — eine lebende Zelle, eine konvektierende Atmosphäre, ein Laser — werden trotz wiederholter Vorschläge von keinem Extremalprinzip mit dem Rang des zweiten Hauptsatzes erfasst. Maximale Entropieproduktion ist der meistdiskutierte davon und bleibt ein umstrittener Vorschlag statt eines etablierten Gesetzes.

Die Temperatur selbst wird außerhalb des Gleichgewichts mehrdeutig: Einem System, dessen Teile sehr unterschiedlich schnell relaxieren, lassen sich mehrere vertretbare Temperaturen zugleich zuschreiben. Von der Schwerkraft beherrschte Systeme sind noch seltsamer, mit negativen Wärmekapazitäten und, bei Schwarzen Löchern, einer Entropie, die mit der Fläche statt mit dem Volumen skaliert. Die Hauptsätze überstehen beide Fälle; die darauf gebauten Abkürzungen oft nicht.

## Sources

1. **NIST** — [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction). Neudefinition des Kelvin im SI, die frühere Tripelpunkt-Definition und der absolute Nullpunkt in Grad Celsius.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). Die sieben definierenden Konstanten des SI und der seit dem 20. Mai 2019 festgelegte Wert der Boltzmann-Konstante.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). Exakter Wert und Einheiten, ohne zugewiesene Unsicherheit.
4. **Nature Communications** — [A general derivation and quantification of the third law of thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/). Ressourcenkosten des Kühlens und die Skalierung der erreichbaren Temperatur mit der Kühldauer.
5. **Nature** — [Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/). Einzelmolekültest einer Fluktuationsrelation und die zurückgewonnene Faltungsfreie Energie.
6. **U.S. Department of Energy** — [Geothermal heat pumps](https://www.energy.gov/hgeo/geothermal/geothermal-heat-pumps). Oberflächennahe Bodentemperaturen, die den Temperaturhub erdgekoppelter Maschinen bestimmen.
7. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Parkdurchschnittliche Umwandlung von Brennstoff in Strom in laufenden Kraftwerken.
