---
title: 'Messunsicherheit: was ein angegebenes ± tatsächlich behauptet'
metaTitle: 'Messunsicherheit: was ein angegebenes ± behauptet'
excerpt: Eine Zahl ohne Unsicherheit ist kein Messergebnis. Das verlangt die internationale Leitlinie von einem Intervall, so werden die Komponenten bewertet und zusammengeführt, und an diesen Stellen versagt ein Unsicherheitsbudget still.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - metrology
  - uncertainty
  - calibration
  - si-units
  - measurement-methods
related:
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - sound-and-acoustics-explained
  - global-temperature-records-explained
pillar: classical-mechanics-explained
_bodyHash: 2b2d1d79
---

Schreiben Sie 9,81 m/s² hin, und Sie haben fast nichts behauptet. Schreiben Sie 9,81 ± 0,02 m/s² hin, und Sie haben eine prüfbare Behauptung aufgestellt: darüber, wie der Wert gewonnen wurde, darüber, was bei einer Wiederholung der Messung geschähe, und über das Intervall, in das eine weitere Bestimmung voraussichtlich fiele. Die zweite Zahl ist kein an die erste geheftetes Kleingedrucktes. Sie ist der Teil, der die erste brauchbar macht, und sie erlaubt zwei Laboren zu sagen, ob sie übereinstimmen.

Der internationale Rahmen für den Bau dieser zweiten Zahl ist der *Leitfaden zur Angabe der Unsicherheit beim Messen*, herausgegeben als JCGM 100 vom Gemeinsamen Ausschuss für Leitfäden in der Metrologie und beim BIPM gehostet. Er ist weniger eine statistische Technik als eine Buchführungsdisziplin, und er gilt für jede quantitative Messung — auch für jene, die [der Mechanik](/de/physics/mechanics-waves/classical-mechanics-explained) zugrunde liegen, die dieses Cluster behandelt.

## Genauigkeit, Richtigkeit und Präzision sind drei verschiedene Wörter

Das internationale Wörterbuch der Metrologie hält drei Begriffe auseinander, die der Alltag verschmilzt. **Messgenauigkeit** ist definiert als „Ausmaß der Annäherung eines Messwerts an einen wahren Wert einer Messgröße" — und, was zählt, „der Begriff Messgenauigkeit ist keine Größe und wird nicht durch einen Zahlenwert angegeben". Man kann keine Genauigkeit von 0,3 Prozent berichten; man kann eine Unsicherheit berichten.

Das Wörterbuch ist bei den Grenzen ebenso streng: „Der Begriff Messgenauigkeit sollte nicht für Messrichtigkeit und der Begriff Messpräzision nicht für Messgenauigkeit verwendet werden." Richtigkeit betrifft die systematische Verschiebung — ob wiederholte Messungen sich an der richtigen Stelle sammeln. Präzision betrifft die Streuung — wie eng sie sich sammeln, wo auch immer. Ein Gerät kann präzise und unrichtig sein, die gefährlichere Kombination, weil Wiederholung wie Bestätigung aussieht.

## Typ A und Typ B heißen nicht „gemessen" und „geraten"

Der Leitfaden trennt Unsicherheitskomponenten danach, wie sie bewertet werden, nicht danach, wie sehr man ihnen traut. Die NIST-Zusammenfassung folgt dem Leitfaden genau: eine Typ-A-Bewertung ist eine „Methode zur Ermittlung der Unsicherheit durch statistische Analyse von Messreihen", und Typ B ist die „Ermittlung der Unsicherheit mit anderen Mitteln als der statistischen Analyse von Messreihen".

Die zweite Kategorie ist kein Euphemismus. Sie umfasst die in einem Kalibrierschein angegebene Unsicherheit, eine Herstellerspezifikation, die Auflösungsgrenze einer Anzeige, veröffentlichte Referenzdaten und physikalische Überlegungen zu einem Effekt, der sich im Versuch nicht variieren lässt. Entscheidend ist, dass beide Arten identisch zusammengeführt werden, sobald jede Komponente als Standardunsicherheit ausgedrückt ist. Eine aus einem Schein abgeleitete Typ-B-Komponente kann kleiner und besser begründet sein als eine aus sechs verrauschten Wiederholungen berechnete Typ-A-Komponente, und Wiederholpräzision als einzige echte Unsicherheit zu behandeln ist der häufigste Weg, ein Budget optimistisch zu machen.

## Komponenten zusammenführen, und die Annahme im Fortpflanzungsgesetz

Komponenten werden zu einer **kombinierten Standardunsicherheit** zusammengeführt, die das NIST als „die positive Quadratwurzel der geschätzten Varianz" beschreibt, gewonnen über das, was der Leitfaden das Fortpflanzungsgesetz der Unsicherheit nennt. Die Konstruktion hat zwei leicht zu übersehende bewegliche Teile. Sie ist eine Taylor-Entwicklung erster Ordnung, linearisiert das Messmodell also um den Arbeitspunkt. Und sie enthält einen Kovarianzterm, der nur dann „verschwindet", wenn die Eingangsschätzungen als unkorreliert angenommen werden dürfen.

Keine der Annahmen versteht sich von selbst. Gegen dasselbe Normal kalibrierte Eingänge sind konstruktionsbedingt korreliert, und den Kovarianzterm dann wegzulassen unterschätzt das Ergebnis. Stark nichtlineare Modelle brechen die Linearisierung, weshalb den Leitfaden ein Supplement begleitet, das ganze Verteilungen per Monte-Carlo fortpflanzt statt Varianzen, und weshalb 2026 eine Ergänzung zur Nichtlinearität in Messmodellen herausgegeben wurde. Der Rahmen ist weiterhin in aktiver Überarbeitung.

## Der Erweiterungsfaktor und das Wort, das der Leitfaden meidet

Eine Standardunsicherheit ist eine standardabweichungsartige Größe, und die meisten veröffentlichten Ergebnisse sind weiter. Die erweiterte Unsicherheit ist U = k·u_c(y), wobei k ein für das gewünschte Vertrauensniveau gewählter Erweiterungsfaktor ist. Das NIST gibt an, dass „k typischerweise im Bereich 2 bis 3 liegt", dass k = 2 „ein Intervall mit einem Vertrauensniveau von etwa 95% definiert" und dass k = 3 ein Intervall mit „einem Vertrauensniveau größer als 99%" ergibt.

Die Näherung in „etwa" leistet echte Arbeit. Eine begutachtete Behandlung von Überdeckungsintervallen in der Forschungszeitschrift des NIST merkt an, dass der Leitfaden diese Intervalle bewusst nicht Konfidenzintervalle nennt, sofern nicht „alle zu u_c(y) beitragenden Unsicherheitskomponenten aus Typ-A-Bewertungen stammen". Ein herkömmliches Konfidenzintervall ist eine frequentistische Aussage über die Langzeitüberdeckung wiederholter Versuche; eine teils aus Typ-B-Komponenten gebaute erweiterte Unsicherheit ist das nicht, auch wenn die Arithmetik gleich aussieht. Dieselbe Arbeit rechnet ein Beispiel durch, in dem sechzehn Wiederholungen ein 95-Prozent-Überdeckungsintervall des Mittelwerts von plus/minus 2,131 Standardfehlern ergeben — das Student-t-Perzentil für fünfzehn Freiheitsgrade — statt des glatten Faktors 2, den eine schnelle Rechnung nähme. Bei wenigen Beobachtungen unterscheiden sich beide genug, um zu zählen.

## Rückführbarkeit macht zwei Labore vergleichbar

Eine Unsicherheit ist nur relativ zu einer Skala sinnvoll, und der Mechanismus, der Skalen verbindet, ist die [metrologische Rückführbarkeit](/en/glossary/traceability): wie es eine Übersicht zu chemischen Referenzmaterialien formuliert, „eine dokumentierte ununterbrochene Kette von Kalibrierungen mit angegebenen Unsicherheiten, die das Messergebnis einer Probe idealerweise mit einem Primärkalibrator in geeigneten SI-Einheiten verbindet". Jedes Glied fügt Unsicherheit hinzu; keines darf fehlen. Dieselbe Übersicht beschreibt, was die Kette praktisch verkörpern muss — „die Begriffe [Messunsicherheit](/de/glossary/measurement-uncertainty) und Kalibrierungen gegen eine Hierarchie von Referenznormalen" —, weshalb ein Schein, der einen Wert ohne Unsicherheit angibt, die Kette bricht statt sie zu verkürzen.

Die Basis dieser Kette änderte sich am 20. Mai 2019, als das SI so neu definiert wurde, dass alle Einheiten aus sieben Konstanten mit festgelegten Zahlenwerten folgen.

| Definierende Konstante | Symbol | Festgelegter Wert |
| --- | --- | --- |
| Hyperfeinfrequenz von Caesium-133 | ΔνCs | 9 192 631 770 Hz |
| Lichtgeschwindigkeit im Vakuum | c | 299 792 458 m/s |
| Planck-Konstante | h | 6,626 070 15 × 10⁻³⁴ J s |
| Elementarladung | e | 1,602 176 634 × 10⁻¹⁹ C |
| Boltzmann-Konstante | k | 1,380 649 × 10⁻²³ J/K |
| Avogadro-Konstante | N_A | 6,022 140 76 × 10²³ mol⁻¹ |
| Photometrisches Strahlungsäquivalent | K_cd | 683 lm/W |

Diese Werte tragen jetzt keine Unsicherheit mehr, weil sie Definitionen sind und keine Ergebnisse. Die Unsicherheit ist nicht verschwunden; sie ist zu den Experimenten gewandert, die die Einheiten realisieren, was ein weit besserer Ort für sie ist, weil sie nun an einer verbesserbaren Apparatur hängt und nicht an einem Artefakt, das zerkratzt werden könnte.

## Wo die Unsicherheit weiterhin sitzt

Nicht jede Konstante ging in die Definitionen ein. Die CODATA-Anpassung 2022 gibt die Newtonsche Gravitationskonstante mit 6,674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻² an, bei einer Standardunsicherheit von 0,000 15 × 10⁻¹¹ in denselben Einheiten — eine relative Standardunsicherheit von 2,2 × 10⁻⁵. Gegenüber den Konstanten der Tabelle, die nun per Definition exakt sind, ist das eine gewaltige Lücke. Sie besteht fort, weil Gravitation weder abgeschirmt noch verstärkt werden kann, sodass jede Bestimmung derselben Klasse systematischer Effekte in einer Größenordnung begegnet, die mit dem Signal selbst vergleichbar ist. Das ist die stehende Mahnung dieses Felds: eine kleine angegebene Unsicherheit ist immer eine Behauptung über die Effekte, die jemand erkannt hat.

Das Muster verallgemeinert sich. Wo zwei glaubwürdige Teams weiter auseinanderliegen, als ihre angegebenen Intervalle zulassen, ist die Abweichung ein Beleg dafür, dass mindestens einem Budget ein Term fehlt. Dieselbe Überlegung erklärt, warum unabhängige [globale Temperaturreihen](/de/ecology/climate-change/global-temperature-records-explained) über ihre Unsicherheitshüllen und nicht über ihre Schlagzeilenwerte verglichen werden, und warum die praktische Anleitung zu [Grenzen der Fernerkundung](/de/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) daran hängt zu wissen, was ein Ableitungsalgorithmus nicht modelliert hat.

## Falsche Präzision ist eine Behauptung, keine Formatierungsfrage

Ziffern sind billig zu erzeugen und teuer zu rechtfertigen. Eine Tabellenkalkulation liefert sie dutzendweise, unabhängig davon, was hineinging, und ein Ergebnis mit mehr Stellen, als seine Unsicherheit trägt, behauptet eine nie erreichte Auflösung. Die aus dem Rahmen folgende Konvention ist einfach: die Unsicherheit bestimmt, wie viele Ziffern der Wert tragen darf, also ist ein Wert auf eine mit seiner Unsicherheit verträgliche Stelle zu runden und nicht auf das, was die Rechnung ausgab.

Der Fehlermodus ist selten die Originalarbeit. Es ist die Weitergabe, bei der ein Intervall wegfällt, weil es nicht in eine Zusammenfassung passt, und eine Punktschätzung weiterreist, als wäre sie exakt — der Vorgang, der in der Analyse zu [zwischen Datensatz und Schlagzeile verlorener Unsicherheit](/de/insight/uncertainty-lost-between-dataset-and-headline) untersucht wird. Präzision, die während der Übertragung auftaucht, wurde hergestellt, nicht gemessen.

## Was ein Unsicherheitsbudget nicht enthalten kann

Die strukturelle Grenze ist, dass ein Budget nur Effekte enthalten kann, an die jemand gedacht hat. Unerkannte systematische Effekte fehlen darin konstruktionsbedingt, was heißt, dass eine angegebene Unsicherheit eine untere Schranke ist, bedingt durch die Vollständigkeit des Modells. Das ist keine hypothetische Sorge: eine Übersicht dazu, wie nationale Institute die Unsicherheit für organische Referenzmaterialien bewerten, fand „Inkonsistenzen im Vorgehen und deutliche Fälle von Unterschätzung" unter teilnehmenden Laboren, die dieselben nominellen Methoden anwandten, und schloss, dass erst das Verbinden unabhängiger Messansätze die Verzerrungen offenlegt, die eine einzelne Methode verdeckt.

Die praktischen Folgen reichen über Metrologielabore hinaus. Wenn ein Modell einen Prozess, den es nicht auflösen kann, durch eine Parametrisierung ersetzt — wie [Strömungsmodelle](/de/physics/mechanics-waves/fluid-dynamics-explained) es für Turbulenz müssen —, kann die dem Ergebnis angehängte Unsicherheit den strukturellen Fehler des Schemas selbst nicht vollständig abbilden. Wenn eine Expositionsstatistik aus einer modellierten Karte statt aus einem Messnetz berechnet wird, wie bei [der Bewertung von Umgebungslärm](/de/physics/mechanics-waves/sound-and-acoustics-explained), liegt die beherrschende Unsicherheit in den Eingaben und nicht im Instrument. In beiden Fällen ist die Zahl ehrlich über das Quantifizierte und stumm über das Angenommene, und sie gut zu lesen heißt zu fragen, welches von beidem man vor sich hat.

## Sources

1. **BIPM / JCGM** — [JCGM-Publikationen: der GUM und seine Supplemente](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, das Monte-Carlo-Supplement und die Ergänzung von 2026 zur Nichtlinearität in Messmodellen.
2. **Internationales Wörterbuch der Metrologie des JCGM** — [Messgenauigkeit (VIM 2.13)](https://jcgm.bipm.org/vim/en/2.13.html). Definitionen, die Genauigkeit, Richtigkeit und Präzision trennen.
3. **NIST** — [Grundbegriffe der Unsicherheit](https://physics.nist.gov/cuu/Uncertainty/basic.html). Typ-A- und Typ-B-Ermittlung der Standardunsicherheit.
4. **NIST** — [Zusammenführen von Unsicherheitskomponenten](https://physics.nist.gov/cuu/Uncertainty/combination.html). Kombinierte Standardunsicherheit und das Fortpflanzungsgesetz der Unsicherheit.
5. **NIST** — [Erweiterte Unsicherheit und Erweiterungsfaktor](https://physics.nist.gov/cuu/Uncertainty/coverage.html). Werte von k und die zugehörigen Vertrauensniveaus.
6. **Journal of Research of the National Institute of Standards and Technology** — [Coverage intervals](https://pmc.ncbi.nlm.nih.gov/articles/PMC10898794/). Warum der Leitfaden den Begriff Konfidenzintervall meidet, und Student-t-Erweiterungsfaktoren für kleine Stichproben.
7. **BIPM** — [Maßeinheiten und die definierenden Konstanten des SI](https://www.bipm.org/en/measurement-units). Die sieben festgelegten Konstanten und die Neudefinition vom 20. Mai 2019.
8. **NIST CODATA** — [Newtonsche Gravitationskonstante](https://physics.nist.gov/cgi-bin/cuu/Value?bg). Empfohlener Wert 2022, Standardunsicherheit und relative Standardunsicherheit.
9. **Accreditation and Quality Assurance** — [SI traceable calibrators for organic chemical measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC10938631/). Definition der Rückführbarkeitskette und Belege für unterschätzte Unsicherheit zwischen Laboren.
