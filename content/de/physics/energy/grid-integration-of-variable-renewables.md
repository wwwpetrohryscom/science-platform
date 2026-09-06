---
title: 'Netzintegration: was Variabilität ein Stromsystem wirklich kostet'
metaTitle: Was Variabilität ein Stromsystem wirklich kostet
excerpt: Die Kosten von Wind und Solar in einem Stromsystem sind größtenteils keine Energiekosten. Sie sind der Preis für Frequenzhaltung, Abregelung, gesicherte Leistung und Leitungen — vier getrennte Probleme, die in einem einzigen Wort zusammengefasst werden.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - grid-integration
  - power-systems
  - curtailment
  - system-flexibility
  - electricity-markets
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - capacity-factor-and-energy-metrics
  - wind-energy-physics
pillar: energy-systems-explained
_bodyHash: 9b03cf7
---

Im Spätfrühjahr 2020 führte das Stromsystem Großbritanniens ein Experiment durch, das niemand entworfen hatte. Der Lockdown nahm einen großen Teil der Nachfrage heraus, während Wind- und Solareinspeisung weiterliefen, und der Systembetreiber zahlte auf einmal für etwas anderes als Strom. Die Kosten für Systemdienstleistungen beliefen sich von Mai bis Juli auf 302 Millionen Pfund gegenüber 101 Millionen in denselben Monaten des Vorjahres — das Dreifache der Rechnung in einem Quartal, in dem weniger Energie geliefert wurde. Die nationale Nachfrage fiel auf ihren niedrigsten je verzeichneten Wert, 13.4 GW in der Nacht des 28. Juni, während die synchron am Netz nötige Leistung zur Stabilitätshaltung mit rund 8 bis 9 GW angesetzt wurde.

Dieses Quartal ist das Integrationsproblem im Kleinen. Was ein System für wetterabhängige Erzeugung zahlt, ist weitgehend keine Zahlung für Energie; es ist eine Zahlung für Leistungen, die konventionelle Kraftwerke nebenbei erbrachten, weil sie ohnehin drehten. Diese Leistungen sind trennbar, sie haben unterschiedliche Physik, und sie unter dem Wort „Intermittenz“ zu bündeln verdeckt, welche von ihnen bindet. Die weitere Umwandlungskette, in der sie stehen, ist im Überblick über [den Aufbau eines Energiesystems](/de/physics/energy/energy-systems-explained) dargestellt.

## Variabilität und Unsicherheit sind nicht dasselbe Problem

Variabilität ist die Tatsache, dass sich die Einspeisung ändert. Unsicherheit ist die Tatsache, dass man vorher nicht genau weiß, wie. Sie werden von unterschiedlichen Ressourcen gedeckt und kosten unterschiedlich viel.

Eine Ressource, die stark, aber vorhersagbar schwankt, ist vergleichsweise billig unterzubringen: Der Fahrplan wird einen Tag im Voraus um sie herum gebaut, und die flexiblen Kraftwerke, die die Lücke füllen, werden in Ruhe eingeplant. Eine Ressource, die nahezu konstant ist und den Betreiber gelegentlich überrascht, ist teuer, denn die Überraschung muss durch in Echtzeit vorgehaltene Reserve gedeckt werden, und Reserve ist Leistung, die für Verfügbarkeit bezahlt wird und nicht für Erzeugung. Deshalb ist die Verbesserung der Prognose eine der billigsten verfügbaren Integrationsmaßnahmen: Sie ändert nichts an der Variabilität, aber sie verwandelt Unsicherheit in Variabilität, und Variabilität ist die billigere von beiden.

## Frequenz ist eine Bilanz, die jede Sekunde ausgeglichen wird

Die Netzfrequenz ist das sichtbare Zeichen des augenblicklichen Gleichgewichts zwischen Erzeugung und Last. In einem Park großer Synchronmaschinen sind die rotierenden Massen elektromechanisch an diese Frequenz gekoppelt, sodass ein plötzliches Ungleichgewicht zuerst ihre kinetische Energie anzapft. Diese gespeicherte Rotationsenergie — [die Systemträgheit](/en/glossary/grid-inertia) — bestimmt die Frequenzänderungsrate nach einer Störung, und diese wiederum bestimmt, wie viel Zeit die Regelungssysteme haben, bevor Schutzeinrichtungen beginnen, Anlagen abzuschalten.

Wechselrichtergekoppelte Erzeugung liefert das nicht von selbst. Ein netzfolgender Wechselrichter misst die Spannungskurve und speist Strom im Gleichtakt mit ihr ein; er braucht eine Kurve, der er folgen kann. Ein netzbildender Wechselrichter gibt eine eigene Kurve vor und verhält sich aus Sicht des Netzes eher wie eine Quelle als wie ein Folger. Eine in *Scientific Reports* veröffentlichte Simulationsarbeit zeigt den Unterschied an einem Testnetz mit neun Knoten: Bei einem Lastsprung von etwa einem Drittel fiel ein rein synchroner Fall auf ein Frequenzminimum von 59.42 Hz und brauchte rund 80 Sekunden bis zum Einschwingen, ein gemischter Fall erreichte 59.79 Hz und beruhigte sich in unter 8 Sekunden, und ein rein netzbildender Fall hielt 59.85 Hz. Das sind modellierte Ergebnisse an einem kleinen Testsystem und keine Messungen aus einem realen Netz, aber die Richtung zählt: Die Fähigkeit ist eine Frage des Regelungsentwurfs, nicht des drehenden Stahls.

Spannung ist ein eigenes Problem mit eigener Physik — örtlich statt systemweit und über Blindleistung geführt. Deshalb stoßen Verteilnetze mit dichter Dacherzeugung lange vor dem Übertragungsnetz an Grenzen.

## Abregelung ist ein Preissignal, das in Verruf geraten ist

[Abregelung](/en/glossary/curtailment) — das absichtliche Absenken verfügbarer Einspeisung — wird meist als Verschwendung berichtet. Sie liest sich besser als ein System, das sich weigert, für Energie zu zahlen, die es nicht verwenden kann, und ihre Ursachen sind diagnostizierbar. Eine in *Solar Energy* veröffentlichte Übersicht zur weltweiten Solarabregelung führt sie auf Übertragungsnetze zurück, die entfernte Einspeisung nicht zur Last bringen können, auf ein Auseinanderfallen von Erzeugungsspitze und Nachfragespitze und auf Überangebot, wenn variable Erzeugung zuzüglich unflexibler Must-run-Kraftwerke die Nachfrage übersteigt — und kommt zu dem Schluss, dass die Unterschiede zwischen Systemen ebenso sehr Politik und Netzplanungspraxis widerspiegeln wie Geografie oder Jahreszeit.

| System (2018) | Anteil der abgeregelten potenziellen Solarerzeugung | Ursache |
| --- | --- | --- |
| Deutschland | 0.3% | Örtliche Netzengpässe |
| Kalifornien | 1.5% | Mittägliches Überangebot gegenüber unflexiblen Kraftwerken |
| Hawaii | 2.7% im gesamten Bundesstaat | Kleine Inselsysteme; 14% auf Maui |
| Arizona | 2.9% | Örtlich begrenztes Überangebot |
| China (national) | 3.0% | Übertragungsgrenzen; 16% in Xinjiang, 10% in Gansu |
| Chile | etwa 6% | Entfernte Erzeugung, begrenzte Übertragung |
| Texas | 8.4% | Engpässe im Übertragungsnetz |

Zwei Größenordnungen trennen das obere und das untere Ende dieser Spalte, und nichts von dieser Spanne erklärt sich daraus, wie viel Sonne der jeweilige Ort empfängt. Abregelung ist ein Netz- und Marktergebnis, und dieselbe Studie fand, dass sich die kalifornische Abregelung zwischen 2018 und 2019 verdoppelte.

Negative Preise sind die Marktfassung dieses Signals. Wo ein Erzeuger unabhängig vom Marktpreis eine Zahlung je Megawattstunde erhält — über eine Förderung, eine Steuergutschrift oder einen Vertrag —, bleibt es rational, auch unter null weiter einzuspeisen, und der Preis fällt, bis etwas mit schlechterer Wirtschaftlichkeit aufhört. Ein negativer Preis ist kein Beleg für einen kaputten Markt; er ist ein Beleg dafür, dass die billigste Antwort auf Überangebot nicht gebaut wurde. Welche Antwort die billigste ist, hängt davon ab, wie lange der Überschuss anhält — das Argument, das die Begleitseite dazu entwickelt, [was Speicherdauer tatsächlich einkauft](/de/physics/energy/energy-storage-fundamentals). Wo Überschüsse saisonal sind, wird ihre Umwandlung in [einen speicherbaren chemischen Träger](/de/physics/energy/hydrogen-as-an-energy-carrier) zu einem Kandidaten, um den Preis eines hohen Umwandlungsverlusts.

## Kapazitätskredit ist nicht Kapazitätsfaktor

Diese beiden Verhältniszahlen beantworten unzusammenhängende Fragen und werden routinemäßig vertauscht. Der [Kapazitätsfaktor](/de/physics/energy/capacity-factor-and-energy-metrics) handelt von Energie: Jahresertrag geteilt durch das, was Dauerbetrieb bei Nennleistung erbracht hätte. Der Kapazitätskredit handelt von Versorgungssicherheit: wie viel konventionelle Leistung eine Ressource verdrängt, ohne die Fähigkeit des Systems zu mindern, die Last in den knappsten Stunden zu decken. Ein Park kann einen respektablen Kapazitätsfaktor und einen kleinen Kapazitätskredit haben, und die Lücke wächst mit dem Anteil, weil geballte Einspeisung korreliert ist — wenn eine Maschine in der Flaute liegt, liegen es ihre Nachbarn auch, und genau dieser Ausfallmodus ist der Grund, warum es die Leistungsbilanzplanung gibt. Die Abhängigkeit von der Windgeschwindigkeit hinter dieser Korrelation ist in der Physik dazu dargestellt, [wie viel Leistung eine Turbine der bewegten Luft entnehmen kann](/de/physics/energy/wind-energy-physics).

Eine in *Heliyon* veröffentlichte Studie zu Neuengland zeigt die Gestalt des Problems. Ein winddominierter Mix, ausgelegt auf die einfache Jahresnachfrage, deckte ohne Speicher rund 73 Prozent der Stundennachfrage, ein solardominierter Mix rund 69 Prozent; zwölf Stunden Speicher hoben beide auf etwa 86 bis 87 Prozent. Das in der nordamerikanischen Planung verwendete Zuverlässigkeitsniveau von 99.97 Prozent zu erreichen, erforderte für einen winddominierten Mix etwa das Zweieinhalbfache der Jahresnachfrage an Erzeugung neben zwölf Stunden Speicher, und mehr für einen solardominierten. Die letzte Tranche ist ein anderes Problem als die erste: Sie wird von saisonalen Zyklen und mehrtägigen Wetterlagen bestimmt, und ihre Deckung braucht Wochen gespeicherter Energie statt Stunden.

## Geografie glättet am billigsten, und die Leitungen sind der Engpass

Variable Einspeisung über eine weite Fläche zu aggregieren senkt ihre Varianz, weil Wetterlagen nur über eine begrenzte Reichweite räumlich korreliert sind und weit genug auseinanderliegende Standorte nicht gemeinsam steigen und fallen. Damit ist Übertragung die unexotischste verfügbare Form von Flexibilität: Sie ersetzt Speicher, Reserve und gesicherte Leistung auf einmal, ohne Umlaufverlust. Sie hat auch die längste Vorlaufzeit, und deshalb ist der bindende Engpass in vielen Systemen inzwischen eine Warteschlange und keine Technologie. Die Bewertung *Electricity 2026* der Internationalen Energieagentur beziffert weltweit 1,200 bis 1,600 GW an Projekten im fortgeschrittenen Stadium in Anschlusswarteschlangen und schätzt, dass 450 bis 700 GW davon durch netzoptimierende Technologien auf bestehenden Leitungen freigesetzt werden könnten — witterungsabhängiger Freileitungsbetrieb und Lastflusssteuerung, dazu schwerere Ertüchtigungen wie Neubeseilung und Spannungserhöhung — und weitere 750 bis 900 GW durch flexiblere, nicht feste Anschlussvereinbarungen. Beide Wege wirken auf Korridore, die bereits bestehen, und nicht auf neue.

Die Bestandsaufnahme der Agentur zu 50 Stromsystemen, die knapp 90 Prozent der weltweiten Solar- und Winderzeugung abdecken, ordnet sie sechs Phasen danach zu, wie weit variable Einspeisung den Betrieb verändert hat. Dänemark, Irland, South Australia und Spanien liegen in Phase vier oder darüber und integrieren zwischen 35 und 75 Prozent variabler erneuerbarer Energien in der Jahreserzeugung — ein Beleg dafür, dass die Phasen ingenieurtechnische Praxis beschreiben und keine Obergrenzen. Derselbe Bericht schätzt, dass verzögerte Integrationsmaßnahmen bis 2030 bis zu 15 Prozent der Solar- und Winderzeugung gefährden könnten, bis zu 2,000 TWh Erzeugung, die physisch verfügbar war und keinen Abnehmer fand.

## „Grundlast“ beschreibt eine Kostenstruktur, keine Systemanforderung

Das hartnäckigste Missverständnis in diesem Feld ist, dass ein Stromsystem eine Kraftwerkskategorie namens Grundlast benötige. Was ein System benötigt, ist genug Energie in jeder Stunde und genug Regelbarkeit, um dabei Frequenz und Spannung zu halten. Grundlast beschreibt zwei andere Dinge: den Teil der Lastkurve, der zu allen Stunden vorhanden ist, und eine Kraftwerksklasse, deren billigster Betriebspunkt flach ist, weil Kapitalkosten dominieren und Brennstoffkosten niedrig sind.

Der Betriebsbefund macht den Unterschied sichtbar. Die von der US Energy Information Administration veröffentlichten Kapazitätsfaktoren — hier aus der Ausgabe vom August 2026 gelesen, in der Werte ab 2025 noch vorläufig sind — zeigen den Kohlekraftwerkspark im Versorgungsmaßstab bei 52.8 Prozent im Jahr 2016, 40.5 Prozent im Jahr 2020 und 48.7 Prozent im Jahr 2025. An diesen Kesseln änderte sich nichts; relative Brennstoffpreise und Einsatzreihenfolge änderten sich. In denselben Jahren hielt sich der Kernkraftwerkspark zwischen etwa 91 und 93 Prozent, Ausdruck so niedriger Brennstoffkosten, dass Volllastbetrieb stets die wirtschaftliche Wahl ist. Die Zahl des einen Parks folgt dem Markt, die des anderen der Revisionsplanung.

## Wo die Zahlen zu Integrationskosten am schwächsten sind

**Integrationskosten sind nicht sauber zurechenbar.** Einer Ressource Kosten zuzuweisen verlangt ein kontrafaktisches System ohne sie, und die Wahl des Kontrafaktischen verschiebt die Antwort erheblich — veröffentlichte Schätzungen streuen zwischen Methoden stärker als zwischen Systemen.

**Abregelungsanteile haben einen modellierten Nenner.** Abgeregelte Energie wird gegen potenzielle Erzeugung gerechnet, die nie erzeugt wurde und aus Einstrahlungs- oder Winddaten zuzüglich einer angenommenen Verfügbarkeit geschätzt werden muss. Zwei Betreiber, die unterschiedliche Abregelung berichten, streiten womöglich über den Nenner.

**Adäquanzstudien ruhen auf einer kurzen Wetterreihe.** Die Ereignisse, die die Zuverlässigkeitsanforderungen setzen, sind selten, korreliert und mehrtägig, und die historische Reihe enthält nur wenige davon. Eine Handvoll Wetterjahre kann den Rand der Verteilung, den die Studie bemessen will, nicht auflösen — weshalb die Grenzkosten des letzten Prozents an Zuverlässigkeit die unsicherste Zahl der ganzen Übung sind und weshalb die bindenden Grenzen oft institutionell statt physikalisch sind, eine Unterscheidung, die die Analyse der [Beschränkungen, die nicht an der Technik liegen](/de/insight/energy-transition-constraints-physical-and-institutional), untersucht.

## Sources

1. **Internationale Energieagentur** — [Integrating Solar and Wind: executive summary](https://www.iea.org/reports/integrating-solar-and-wind/executive-summary). Sechsphasiger Integrationsrahmen, die Spanne von 35–75 Prozent in den Vorreitersystemen und die Schätzung, dass bis zu 15 Prozent der Solar- und Winderzeugung bis 2030 gefährdet sind.
2. **Internationale Energieagentur** — [Electricity 2026: executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Kapazität, die durch netzoptimierende Technologien und durch nicht feste Anschlussvereinbarungen freigesetzt werden könnte.
3. **Applied Energy** — [Ancillary services in Great Britain during the COVID-19 lockdown](https://pmc.ncbi.nlm.nih.gov/articles/PMC9759740/). Kosten der Systemdienstleistungen, minimale nationale Nachfrage und die für die Stabilität als notwendig geschätzte synchrone Leistung.
4. **Solar Energy** — [Too much of a good thing? Global trends in the curtailment of solar PV](https://pmc.ncbi.nlm.nih.gov/articles/PMC7470769/). Abregelungsanteile nach System und die dahinter erkannten Ursachen.
5. **Scientific Reports** — [Hybrid compatible grid forming inverters for low inertia and mixed generation grids](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357951/). Simuliertes Frequenzminimum und Einschwingzeiten für synchrone, hybride und wechselrichterdominierte Fälle.
6. **Heliyon** — [The impact of energy storage on the reliability of wind and solar power in New England](https://pmc.ncbi.nlm.nih.gov/articles/PMC10955263/). Erreichte Zuverlässigkeit bei gegebenen Erzeugungs- und Speichergrößen und der saisonale Charakter des Rests.
7. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Jährliche Kapazitätsfaktoren des Kohlekraftwerksparks im Versorgungsmaßstab.
8. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Jährliche Kapazitätsfaktoren des Kernkraftwerksparks im Versorgungsmaßstab.
