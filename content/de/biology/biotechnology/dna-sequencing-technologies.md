---
title: 'Sequenziertechnologien: Leselänge, Fehlerprofil und wofür sich welche eignet'
metaTitle: 'Sequenzierplattformen: Leselänge und Fehlerprofil'
excerpt: Die Wahl einer Sequenzierplattform hängt weniger an der genannten Genauigkeit als an der Gestalt ihrer Fehler und der Länge ihrer Reads. So unterscheiden sich die Hauptfamilien, so verschieden sind die Tiefenanforderungen, und das lässt die Kostenkurve aus.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - dna-sequencing
  - long-read-sequencing
  - reference-genomes
  - measurement-uncertainty
related:
  - biotechnology-explained
  - bioinformatics-explained
  - crispr-genome-editing-explained
  - what-is-a-genome
pillar: biotechnology-explained
---

Fragt man, welche Sequenzierplattform am genauesten ist, bekommt man eine nutzlose Antwort, denn die Plattformen scheitern auf verschiedene Weise. Ein Verfahren, das seltene, verstreute Substitutionsfehler macht, und eines, das häufige, aber vorhersagbare Fehler in einem bestimmten Sequenzkontext macht, können dieselbe Genauigkeit ausweisen und für völlig verschiedene Probleme taugen. [Leselänge](/en/glossary/read-length), Fehlergestalt und Kosten je Base sind die drei Achsen, die ein Projekt tatsächlich entscheiden, und sie handeln gegeneinander. DNA zu lesen ist die Fähigkeit, die den Rest des [biotechnologischen Werkzeugkastens](/de/biology/biotechnology/biotechnology-explained) handhabbar gemacht hat, und zugleich die, deren Ökonomie am häufigsten aus dem Zusammenhang zitiert wird.

## Drei Wege, ein Molekül in eine Zeichenkette zu verwandeln

Das 1977 beschriebene Kettenabbruchverfahren liest Sequenz, indem es Kopien herstellt, die an definierten Basen stoppen. Didesoxynukleotid-Analoga wirken als kettenabbrechende Hemmstoffe der DNA-Polymerase und erzeugen einen verschachtelten Satz von Fragmenten, deren Längen die Position jeder Base angeben; die ursprüngliche Demonstration erfolgte am Bakteriophagen φX174. Es bleibt für kurze Bestätigungen an einem einzelnen Locus in Gebrauch, weil es einfach ist und seine Fehlermodi in der Spur sichtbar sind.

Kurzread-Sequenzierung durch Synthese hat es für alles im großen Maßstab abgelöst. Millionen räumlich getrennter Cluster werden Base für Base verlängert und parallel abgebildet, was Reads von einigen hundert Basen bei sehr niedrigem Fehler je Base ergibt, beherrscht von Substitutionen und nicht von Insertionen oder Deletionen. Ihre Schranke ist nicht die Genauigkeit, sondern die Länge: ein Read, der kürzer ist als eine Wiederholung, lässt sich in einem Genom, das diese Wiederholung mehrfach enthält, nicht eindeutig platzieren.

Einzelmolekül-Langread-Plattformen sequenzieren ein Molekül ohne Amplifikation. Die 2022 veröffentlichte vollständige Assemblierung des menschlichen Genoms nutzte zwei davon gemeinsam und beschreibt deren Eigenschaften unmittelbar: Circular-Consensus-Reads von im Mittel etwa 20 kbp mit einer Fehlerrate nahe 0,1 Prozent und ultralange Nanoporen-Reads über 100 kbp bei deutlich geringerer Genauigkeit je Read. Die beiden ergänzen einander — eines liefert Präzision auf Basenebene, das andere überspannt Strukturen, die sonst nichts überquert.

| Familie | Typische Leselänge | Vorherrschender Fehlercharakter | Was sie auflöst |
| --- | --- | --- | --- |
| Kettenabbruch | Unter einer Kilobase | Gering, in der Spur sichtbar | Einzelne Loci, Konstruktprüfung |
| Kurzread-Synthese | Hunderte Basen | Substitutionen, kontextabhängig | Varianten in einzigartiger Sequenz, tiefes Zählen |
| Circular-Consensus-Langreads | Etwa 20 kbp | Gering und weitgehend zufällig | Assemblierung über die meisten Wiederholungen |
| Ultralange Nanoporen-Reads | Über 100 kbp | Höher, teils systematisch | Segmentale Duplikationen, Zentromere |

## Zufälliger Fehler mittelt sich heraus, systematischer nicht

Die praktisch wichtigste Unterscheidung ist, ob ein Fehler an derselben Position aus demselben Grund wiederkehrt. Unabhängige Zufallsfehler werden durch Tiefe verdünnt: sequenziert man eine Stelle dreißigmal, wird ein Zufallsfehler von 1 Prozent im Konsens vernachlässigbar. Ein systematischer Fehler überlebt jede Abdeckung, weil jeder Read denselben Fehler macht.

Die Nanoporen-Sequenzierung hat das klarste jüngere Beispiel geliefert. Eine Auswertung der bakteriellen Genomrekonstruktion von 2024 fand, dass die ältere Chemie R9.4.1 eine mediane Genauigkeit je Read von 96,8 Prozent lieferte (Interquartilsbereich 95,9-97,4), mit R10.4.1 auf 98,8 Prozent (98,1-99,2) stieg und auf einen Median von 99,2 Prozent (98,8-99,5), wenn die Reads mit einem neueren Basecalling-Modell aufgerufen wurden. Entscheidend war, dass ein Teil des Restfehlers kein Rauschen war, sondern ein reproduzierbares Muster: Substitutionen von Guanin zu Adenin und von Cytosin zu Thymin traten in den meisten geprüften Kombinationen aus Sequenzierung, Basecalling und Assemblierung systematisch auf und werden methylierten Stellen zugeschrieben, die die Basecalling-Modelle verwirren. Die Abhilfe war ein an nativer bakterieller DNA trainierter Basecaller, nicht tiefere Sequenzierung. Dieselbe Studie fand, dass reine Langread-Assemblierungen mit der neueren Chemie und dem neueren Basecaller über 99 Prozent der annotierten kodierenden Sequenzen bei einer Abdeckung von 30× oder mehr wiederfanden, vergleichbar mit hybriden Assemblierungen, die lange und kurze Reads verbinden.

Das ist die allgemeine Lehre. Wenn die verbleibenden Fehler einer Plattform kontextspezifisch sind, wohnt die Abhilfe in der Auswertungsschicht — Basecalling-Modelle, Politur, Assemblierungsgraphen — und nicht in der Chemie, was ein Grund dafür ist, dass die Grenze zwischen Sequenzierung und [rechnerischer Analyse von Sequenzdaten](/de/biology/biotechnology/bioinformatics-explained) keine saubere ist.

## Warum sich die Tiefenanforderungen so stark unterscheiden

Abdeckung ist keine Qualitätseinstellung; sie ist eine statistische Anforderung, abgeleitet aus dem, was man nachweisen will. Für eine Keimbahnvariante, die in der Hälfte oder allen sequenzierten Molekülen vorliegt, genügt mäßige Tiefe, und die obige Zahl von 30× ist die Abdeckung, bei der die bakteriellen Assemblierungen jener Studie nahezu vollständige Wiederfindung kodierender Sequenzen erreichten. Eine Variante nachzuweisen, die nur ein kleiner Anteil der Zellen trägt — eine subklonale somatische Mutation, ein minoritärer Erreger in einer Mischung — verlangt eine Tiefe, die umgekehrt zu diesem Anteil skaliert, dazu eine Fehlerrate, die niedrig genug ist, dass echtes Signal bei dieser Häufigkeit vom Untergrund unterscheidbar bleibt. Deshalb kann dasselbe Gerät für die eine Anwendung als ausreichend und für die andere als aussichtslos beschrieben werden, ohne Widerspruch. Dieselbe Arithmetik regiert [sequenzierbasierte Erhebungen mikrobieller Gemeinschaften](/de/biology/microbiology/culturing-and-sequencing-microbes), wo die Readzahl eines Taxons zuerst Primerwahl und Sequenziertiefe abbildet und erst dann Häufigkeit. Sequenzierbasierte Tests auf [Off-Target-Aktivität beim Genome Editing](/de/biology/biotechnology/crispr-genome-editing-explained) treffen genau auf dieses Problem: die gezählten Ereignisse können seltener sein als der Fehlerboden der Plattform selbst.

Die Referenzgenomprojekte zeigen das obere Ende. Neben ihren Langreads stützte sich die vollständige menschliche Assemblierung auf etwa 100× Kurzreaddaten und 70× Chromosomenkonformationsdaten als stützende Evidenz, dazu optische und einzelzellstrangspezifische Karten.

## Was Langreads tatsächlich einbrachten

Die 2022 veröffentlichte vollständige Assemblierung umfasst 3.054.815.472 Basenpaare Kern-DNA plus ein mitochondriales Genom von 16.569 Basenpaaren. Gegenüber der vorherigen Referenz ergänzte oder korrigierte sie 238 Mbp nichtsyntenischer Sequenz, davon hatten 182 Mbp überhaupt keine primäre Ausrichtung auf die frühere Assemblierung. Im neu aufgelösten Material meldete sie 3.604 Gene, die in der früheren Referenz fehlten, davon 140 als proteinkodierend vorhergesagt, und 99 vorhergesagte proteinkodierende Gene lagen in Regionen ohne frühere Ausrichtung.

Der Punkt ist nicht, dass die Referenz um wenige Prozent wuchs. Er ist, dass die fehlenden Regionen nicht zufällig fehlten — es waren die repetitiven, duplizierten und satellitenreichen Teile des Genoms, systematisch ausgeschlossen, weil Kurzreads dort nicht platziert werden konnten. Eine Generation von Studien beschrieb das Genom, als wären diese Regionen abwesend, was eine bestimmte und behebbare Form der [Lücke zwischen einer Referenzsequenz und einem Genom](/de/biology/genetics/what-is-a-genome) ist.

## Die Kostenkurve und der Teil, den sie nie bepreist hat

Die Kostenzahlen, die das National Human Genome Research Institute für seine geförderten Zentren veröffentlicht, werden ständig zitiert und routinemäßig überinterpretiert. Ihre Tabelle verzeichnet etwa 95,3 Millionen Dollar je Genom im September 2001, 7,1 Millionen im Oktober 2007, 3,1 Millionen drei Monate später und rund 525 Dollar im Mai 2022 — ein Rückgang über mehr als fünf Größenordnungen. Das Institut datiert die schärfste Abweichung vom Verdopplungsverhalten der Rechnerhardware auf Januar 2008, als seine Zentren auf Instrumente der zweiten Generation wechselten, und genau dort erscheint jener Rückgang um mehr als die Hälfte in einem einzigen Quartal. Die eigene Rechnung des Instituts für die Referenzära ist ebenso genau: der ursprüngliche Entwurf des menschlichen Genoms kostete weltweit in der Größenordnung von 300 Millionen Dollar, die Verfeinerung zu einer fertigen Sequenz fügte rund 150 Millionen hinzu.

Was diese Zahlen einschließen, ist Produktion: Reagenzien, Geräte, Arbeit, Laborinformationssysteme, erste Datenverarbeitung. Was sie ausschließen, sind Qualitätssicherung, Ausrichtung an einer Referenz, Assemblierung, Variantenaufruf und Annotation. Mit anderen Worten bepreist die veröffentlichte Kurve die Erzeugung von Reads, nicht die Herstellung eines deutbaren Ergebnisses. Ein Labor, das einen Preis je Probe nennt, nennt selten dieselbe Größe, und ein Vergleich der beiden ist gar kein Vergleich.

## Was Benchmarking weiterhin nicht bescheinigen kann

Genauigkeitsangaben ruhen auf Referenzmaterialien, und die haben Grenzen. Das Konsortium Genome in a Bottle am National Institute of Standards and Technology charakterisiert einen kleinen Satz menschlicher Proben — ein Pilotgenom und zwei Familientrios — und verteilt sowohl Benchmark-Variantensätze als auch Stratifizierungsdateien, die schwieriges Gelände markieren: Homopolymere, Tandemwiederholungen, den Haupthistokompatibilitätskomplex. Diese Stratifizierungen bestehen, weil die Leistung innerhalb von der Leistung außerhalb abweicht, und ein Benchmark, der ohne sie eine einzige genomweite Genauigkeitszahl meldet, mittelt über diesen Unterschied hinweg.

Die Folge für das Lesen jeder Aussage ist eng und praktisch. Eine angegebene Genauigkeit gilt für die Regionen, die der Benchmark abdeckt, in den Probentypen, die er abdeckt, mit der Analysekette, die sie erzeugt hat. Regionen, die ein Benchmark ausschließt, sind nicht als einfach bescheinigt; sie sind schlicht nicht bescheinigt.

## Sources

1. **Proceedings of the National Academy of Sciences** — [DNA sequencing with chain-terminating inhibitors](https://pmc.ncbi.nlm.nih.gov/articles/PMC431765/). Die Didesoxymethode von 1977 und ihre erste Anwendung.
2. **Nature (Autorenmanuskript, PubMed Central)** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Assemblierungsgröße, ergänzte Sequenz, Genzahlen und die eingesetzten Lesetechnologien.
3. **Microbial Genomics** — [Evaluation of the accuracy of bacterial genome reconstruction with Oxford Nanopore R10.4.1 long-read-only sequencing](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170131/). Verteilungen der Genauigkeit je Read, methylierungsbedingte systematische Fehler und Abdeckungseffekte.
4. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). Die Reihe der Kosten je Genom und der Umfang dieser Kostenrechnung.
5. **National Human Genome Research Institute** — [The cost of sequencing a human genome](https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost). Kosten der Referenzära und was die Schätzungen ein- und ausschließen.
6. **National Institute of Standards and Technology** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Referenzmaterialien, Benchmark-Variantensätze und Stratifizierungen für schwierige Regionen.
