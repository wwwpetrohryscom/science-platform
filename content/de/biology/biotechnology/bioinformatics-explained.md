---
title: 'Bioinformatik: vier Schlüsse zwischen Sequenzierer und Ergebnis'
metaTitle: 'Bioinformatik: die vier Schlüsse hinter einem Sequenzierergebnis'
excerpt: Sequenzdaten werden erst dann zum Befund, wenn Alignment, Assemblierung, Annotation und statistische Filterung je einen Schluss gezogen haben. Diese Seite verfolgt die vier Schritte und die typische Art, wie jeder von ihnen scheitert.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - sequence-alignment
  - genome-assembly
  - functional-annotation
  - false-discovery-rate
  - computational-biology
related:
  - dna-sequencing-technologies
  - protein-structure-prediction
  - genome-wide-association-studies-explained
  - what-is-a-genome
pillar: biotechnology-explained
_bodyHash: 990f55ad
---

GenBank-Release 273 vom August 2026 enthält 8,236,878,868,450 Basen in 267,383,895 Sequenzeinträgen, und seine Whole-Genome-Shotgun-Abteilung enthält weitere 50,829,714,144,609 Basen in mehr als 5.1 Milliarden Einträgen. Das Sequence Read Archive des NCBI, das die Rohausgabe statt der kuratierten Einträge speichert, hatte am letzten Punkt seiner veröffentlichten Wachstumsreihe im Februar 2024 91 Petabasen überschritten. Nichts davon ist ein Ergebnis. Dazu wird es erst, wenn Software entschieden hat, woher jeder Read stammt, wozu sich die Reads zusammensetzen, was die assemblierte Sequenz wahrscheinlich tut und welche der Unterschiede zwischen zwei Proben berichtenswert sind. Das sind vier getrennte Schlüsse, und jeder hat seine eigene Art, falsch zu sein.

Die Geräte, die die Reads erzeugen — und die Art, wie sich ihre Leselängen und Fehlerprofile unterscheiden —, sind Gegenstand der Begleitseite über [Sequenzierplattformen und wofür jede taugt](/de/biology/biotechnology/dna-sequencing-technologies). Was folgt, liegt stromabwärts davon, in der Schicht, die Signal in Behauptung verwandelt und von der inzwischen der größte Teil des [modernen biotechnologischen Werkzeugkastens](/de/biology/biotechnology/biotechnology-explained) abhängt.

## Ein Alignment bewertet Ähnlichkeit gegen eine Suche, nicht gegen die Biologie

Das optimale paarweise Alignment ist in einem engen Sinn gelöst. Dynamische Programmierung — global in der Formulierung von Needleman–Wunsch, lokal in der von Smith–Waterman — liefert unter einem gewählten Bewertungsschema das höchstbewertete Alignment, zu Kosten proportional zum Produkt der beiden Sequenzlängen. Gegen eine Datenbank mit Hunderten Millionen Einträgen sind diese Kosten untragbar, also ist die praktische Suche heuristisch: auf kurzen exakten oder nahezu exakten Treffern seeden, die aussichtsreichen verlängern und den größten Teil der Datenbank überhaupt nie ansehen.

Daraus folgen zwei Dinge, und beide gehen leicht verloren. Der Score selbst hängt von der Substitutionsmatrix und den Gap-Strafen ab, die zusammen eine Annahme darüber kodieren, wie weit die Sequenzen voneinander entfernt erwartet werden; ändert man die Annahme, kann sich die Rangfolge der Treffer ändern. Und die einem Treffer zugeschriebene statistische Signifikanz hängt von der Größe des durchsuchten Raums ab, sodass dasselbe Sequenzpaar mit wachsender Datenbank weniger überraschend wird. Ein Treffer, der gegen eine Datenbank mit einer Million Einträgen die Schwelle überschritt, muss sie gegen eine mit zweihundert Millionen nicht überschreiten. Ein Alignment-Score berichtet, wie ungewöhnlich eine Ähnlichkeit *angesichts dieser Suche* ist, und das ist nicht dieselbe Frage wie die, ob zwei Moleküle verwandt sind.

## Wo sich der Assemblierungsgraph verzweigt

Assemblierung rekonstruiert lange Sequenzen aus kurzen Beobachtungen, indem sie einen Graphen baut — aus Überlappungen zwischen Reads oder aus Wörtern fester Länge in der De-Bruijn-Formulierung — und dann einen Pfad durch ihn findet. Eine Wiederholung, die länger ist als die sie überspannenden Reads, erzeugt einen Verzweigungspunkt ohne jede lokale Evidenz dafür, welchen Weg man nehmen soll. Die üblichen Ausgänge sind Kollaps, bei dem mehrere Kopien einer Wiederholung zu einer verschmelzen, und Fragmentierung, bei der die Assemblierung an der Grenze abbricht.

Zwei Jahrzehnte lang trug die menschliche Referenz die Folgen davon, und das klarste Maß dafür ist der Gehalt an segmentalen Duplikationen — lange, nahezu identische Blöcke, also genau das, was ein durch Wiederholungen begrenzter Assembler kollabieren lässt. GRCh38 enthielt 151.71 Megabasen solcher Sequenz; die erste vollständige Assemblierung enthält 201.93, ein Drittel mehr. In den Regionen, in denen die ältere Referenz überhaupt kein primäres Alignment hat, annotiert die vollständige Assemblierung 1,956 Gene.

Der methodische Punkt ist nicht, dass die frühere Referenz nachlässig gebaut worden wäre. Er ist, dass die unauflösbaren Regionen fehlten, statt gekennzeichnet zu sein, sodass eine Abfrage, die dort nichts zurückgab, genauso aussah wie eine Abfrage, die anderswo nichts zurückgab. Abwesenheit in einer Referenz wird als Abwesenheit in der Biologie gelesen, solange nichts den Unterschied markiert, und über den größten Teil des fraglichen Zeitraums tat das nichts. Dasselbe Problem in einer gemischten Gemeinschaft, in der es überhaupt keine Referenz gibt, ist das, was die Qualitätsstufen für [aus Metagenomen assemblierte Genome](/de/biology/biotechnology/metagenome-assembled-genomes-and-their-quality) eingrenzen sollen.

## Die meiste Annotation ist geerbt, nicht beobachtet

Das Wort „Annotation“ legt Beobachtung nahe. Fast nichts davon ist eine. Funktion wird ganz überwiegend durch Übertragung zugewiesen — eine neue Sequenz ähnelt einer charakterisierten, also erbt sie deren Beschreibung — und das entstandene Etikett steht dann als Evidenz für die nächste Übertragung bereit.

Das Ausmaß der Asymmetrie ist krass. UniProtKB hielt in Release 2024_04 rund 246 Millionen Sequenzeinträge, und sein manuell geprüfter Teil bemisst sich in Hunderttausenden. Die Lücke füllt die automatische Annotation: Die Einbindung einer einzigen Signaturressource in UniProts regelbasierten Annotator erzeugte 9,141 neue Regeln und 119,579,654 neue Vorhersagen für über 20 Millionen Sequenzen, und ein auf maschinellem Lernen beruhendes Benennungssystem lieferte Proteinnamen für mehr als 28 Millionen Einträge, die zuvor als uncharakterisiert geführt wurden.

Der Fehlermodus der Übertragung wurde in einer Studie an 37 Enzymfamilien mit starker experimenteller Abdeckung direkt gemessen. Der manuell kuratierte Teil von UniProtKB zeigte für die meisten Familien eine Fehlannotation nahe null, während die automatisch annotierten Datenbanken über die untersuchten Superfamilien hinweg im Mittel zwischen 5 und 63 Prozent lagen; bei 10 der 37 Familien überstieg die Fehlannotation in mindestens einer Datenbank 80 Prozent. Die meisten Fehler waren **Überprädiktion** — die Zuweisung einer spezifischeren Funktion, als die Evidenz trägt — und die Rate stieg zwischen 1993 und 2005 stetig, weil jedes falsche Etikett zur Vorlage für das nächste wurde. Vorhergesagte dreidimensionale Struktur bietet inzwischen eine teilweise unabhängige Evidenzlinie, mit den wichtigen Vorbehalten, die in [was Strukturvorhersage belegen kann und was nicht](/de/biology/biotechnology/protein-structure-prediction) dargelegt sind.

## Die tatsächlich geprüften Hypothesen zählen

Omics-Analysen prüfen ungeheure Zahlen von Hypothesen auf einmal, und die Arithmetik davon ist unnachgiebig. Der GWAS Catalog hält in seinem Release vom August 2026 1,191,572 berichtete Assoziationen aus 7,797 Publikationen zu 562,145 Varianten — ein Korpus, der entstand, indem pro Studie Hunderttausende Varianten gegen jedes Merkmal geprüft wurden.

Zwei Korrekturen sind gebräuchlich, und sie beantworten verschiedene Fragen. Die familienweise Fehlerkontrolle verlangt eine geringe Wahrscheinlichkeit für *irgendeinen* Falschpositiven, was angebracht ist, wenn eine einzige falsche Behauptung teuer ist. Die Kontrolle der Falscherkennungsrate in der Formulierung von Benjamini–Hochberg begrenzt stattdessen den erwarteten Anteil Falschpositiver unter den Ergebnissen, die man berichtet, und das ist die richtige Währung, wenn das Ergebnis eine engere Auswahl für Folgearbeiten ist. Keine von beiden macht einen einzelnen Treffer verlässlich. Ein Gen, das bei einer Falscherkennungsrate von 5 Prozent berichtet wird, ist Mitglied einer Liste, von deren Mitgliedern erwartungsgemäß eines von zwanzig falsch ist, und nichts in der Statistik sagt, welches. Dieselbe Logik bestimmt, wie Assoziationsstudien zu lesen sind, ausführlich behandelt in [was genomweite Assoziationsstudien stützen können](/de/biology/genetics/genome-wide-association-studies-explained); sie gilt ebenso für differenzielle Screens der [Genexpression](/de/glossary/gene-expression) sowie für proteomische und metabolomische Screens.

## Dieselben Reads, zweimal ausgewertet

Analyseentscheidungen sind Teil des Ergebnisses, und ihr Beitrag ist messbar. Eine Studie, die 219 tiefe humane Gesamtgenom-Datensätze danach aufteilte, wie konsistent verschiedene Pipelines zum Variantenaufruf übereinstimmten, fand, dass 20 bis 30 Prozent des Genoms in Gebiet niedriger Konkordanz fallen und dass die Konkordanz überwiegend vom genomischen Kontext abhängt und nicht davon, welcher Datensatz verwendet wurde — die Uneinigkeit ist also systematisch und vorhersagbar und nicht zufälliges Rauschen.

Der Referenz-Build zählt genauso konkret. Das am NIST angesiedelte Genome in a Bottle Consortium erzeugt die Benchmark-Variantenaufrufe, an denen Pipelines gemessen werden, und diese Benchmarks schlossen fast 400 medizinisch relevante Gene aus, weil sie zu repetitiv oder zu polymorph sind, um sie zuverlässig aufzurufen. Ein kuratierter Satz, der 273 dieser 395 Gene abdeckt, zeigte, dass in GRCh37 oder GRCh38 vorhandene falsche Duplikationen referenzspezifisch übersehene Varianten verursachen; ihre Maskierung hob die Sensitivität in den betroffenen Genen von 8 Prozent auf 100 Prozent. Zwei Labore mit identischen Reads, die sich nur im Referenz-Build unterscheiden, können daher verschiedene Variantenlisten veröffentlichen und beide der gängigen Praxis folgen.

| Stufe | Was erschlossen wird | Was es scheitern lässt |
| --- | --- | --- |
| Alignment | Woher eine Sequenz stammt | Größe des Suchraums; Bewertungsannahmen |
| Assemblierung | Welches Molekül zugrunde lag | Wiederholungen, die länger sind als die Reads |
| Annotation | Was die Sequenz tut | Übertragung von einem bereits falschen Etikett |
| Prüfung | Welche Unterschiede echt sind | Zahl der Hypothesen; vom Benchmark ausgeschlossene Region |

Nichts davon spricht für weniger Vertrauen in die Sequenzanalyse im Allgemeinen; die Benchmarks des Fachs sind ungewöhnlich gut, und die oben genannten Konkordanz- und Fehlannotationszahlen existieren, weil das Feld seine eigenen Fehlerraten gemessen hat. Es spricht dafür, das zu berichten, was darüber entscheidet, ob eine Zahl reproduzierbar ist. Eine Variantenliste ohne ihren Referenz-Build, ein funktioneller Aufruf ohne seinen Evidenzcode und eine Trefferliste ohne ihren Suchraum und ihr Korrekturverfahren sind jeweils auf eine Weise unvollständig, die für den Leser unsichtbar bleibt und stromabwärts folgenreich ist — dieselbe Lücke zwischen einem Datensatz und der daraus gemachten Behauptung, die die Notiz über [die zwischen Datensatz und Schlagzeile verlorene Unsicherheit](/de/insight/uncertainty-lost-between-dataset-and-headline) in einem anderen Feld nachzeichnet.

## Sources

1. **NCBI** — [GenBank and WGS statistics](https://www.ncbi.nlm.nih.gov/genbank/statistics/). Basen- und Eintragszahlen von Release 273 für GenBank und für die WGS-Abteilung.
2. **NCBI** — [Sequence Read Archive growth](https://www.ncbi.nlm.nih.gov/sra/docs/sragrowth/). Veröffentlichte Wachstumsreihe der Rohsequenzbestände.
3. **Science / PMC** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Assemblierungsgröße von T2T-CHM13, nicht alignierte Sequenz, Gehalt an segmentalen Duplikationen und neu annotierte Gene.
4. **PLOS Computational Biology** — [Annotation error in public databases: misannotation of molecular function in enzyme superfamilies](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000605). Gemessene Fehlannotationsraten und die Zunahme der Überprädiktion im Zeitverlauf.
5. **Nucleic Acids Research / PMC** — [UniProt: the Universal Protein Knowledgebase in 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701636/). Eintragszahlen und Umfang der Regeln und Vorhersagen der automatischen Annotation.
6. **EMBL-EBI** — [NHGRI-EBI GWAS Catalog](https://www.ebi.ac.uk/gwas/home). Aktuelle Zahlen kuratierter Assoziationen, Studien und Varianten.
7. **Bioinformatics / PMC** — [ReliableGenome: annotation of genomic regions with high/low variant calling concordance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5903559/). Anteil des Genoms in Regionen niedriger Konkordanz über 219 Gesamtgenom-Datensätze hinweg.
8. **Nature Biotechnology / PMC** — [Curated variation benchmarks for challenging medically relevant autosomal genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC9117392/). Aus den Standard-Benchmarks ausgeschlossene Gene und die Wirkung falscher Duplikationen der Referenz auf die Sensitivität.
9. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Benchmark-Variantenaufrufe und Stratifizierung schwieriger genomischer Regionen.
