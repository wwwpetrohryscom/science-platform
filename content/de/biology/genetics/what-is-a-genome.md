---
title: Was ein Genom ist und warum seine Größe fast nichts verrät
excerpt: Ein Genom ist der vollständige DNA-Bestand einer Zelle. Größe, Genzahl und funktioneller Anteil sind drei getrennte Messgrößen, die drei getrennte Fragen beantworten — und ihre Verlässlichkeit ist sehr unterschiedlich.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - genomics
  - genome-size
  - gene-annotation
  - pangenome
  - reference-genome
related:
  - what-is-dna
  - dna-replication-and-repair
  - mutation-types-and-rates
  - dna-sequencing-technologies
pillar: what-is-dna
_bodyHash: c9ca72cb
---

Ein Genom ist die vollständige DNA-Ausstattung einer Zelle — die Chromosomen des Zellkerns samt allem, was die Mitochondrien und, bei Pflanzen, die Plastiden für sich selbst tragen. Diese Definition ist unstrittig. Fast alles, was darauf aufbaut, ist eine Messung, und die drei Messgrößen, zu denen am häufigsten gegriffen wird — wie groß ein Genom ist, wie viele Gene es enthält und wie viel davon überhaupt etwas tut —, unterscheiden sich enorm darin, wie fest sie abgesichert sind. Nur die erste ist annähernd geklärt. Das molekulare Substrat wird gesondert behandelt in [was DNA ist und was sie nicht festlegt](/de/biology/genetics/what-is-dna); diese Seite handelt von der Buchhaltungsebene oberhalb des Moleküls.

## Die eine Messung, die am Ende präzise wurde

Die Genomgröße lässt sich auf zwei Weisen messen, und das ist nicht dieselbe Operation. Durchflusszytometrie und Densitometrie messen den physischen DNA-Gehalt eines Zellkerns, angegeben als C-Wert in Pikogramm oder in Gigabasenpaaren. Die Sequenzierung misst die Assemblylänge: wie viele Basen ein Assembler in eine Reihenfolge bringen konnte.

Jahrzehntelang war die zweite Zahl kleiner als die erste, weil repetitive Regionen an kurzen Leseweiten scheiterten. Die Ensembl-Annotation von GRCh38.p14 gibt eine Golden-Path-Länge von 3,099,750,718 Basenpaaren an — eine Zahl, die Lücken von mehreren Megabasen an den Zentromeren und auf den kurzen Armen der akrozentrischen Chromosomen einschloss. Das CHM13-Assembly des Telomere-to-Telomere-Konsortiums hat sie geschlossen: Es gibt 3,054,815,472 bp Kern-DNA sowie ein mitochondriales Genom von 16,569 bp an und fügt 238 Mbp hinzu, die sich nicht kolinear an GRCh38 anlegen lassen, davon 182 Mbp ganz ohne primäre Zuordnung. Dieses Assembly hat auch den Repeat-Anteil mit harten Zahlen belegt: 1,647.81 Mbp oder 53.94 Prozent der Sequenz sind repetitiv, wobei allein auf segmentale Duplikationen 6.61 Prozent entfallen.

Es lohnt sich, klar zu sagen, was „vollständig“ dort hieß. Satelliten-Arrays und rDNA-Wiederholungen wurden als Sequenz aufgelöst, überwiegend durch [Sequenzierplattformen mit langen Leseweiten](/de/biology/biotechnology/dna-sequencing-technologies), die sie überspannen konnten. Was diese Arrays tun, wurde durch ihr Lesen nicht aufgelöst.

## Eine 2,400-fache Spanne, und nichts daran folgt der Komplexität

Das Nützlichste, was man über die Genomgröße wissen kann, ist, dass sie enorm schwankt und sehr wenig vorhersagt. Allein die Gefäßpflanzen umspannen im DNA-Gehalt etwa das 2,400-Fache. Den Rekord hält jetzt ein neukaledonischer Gabelfarn, *Tmesipteris oblanceolata*, mit 160.45 Gbp pro 1C — mehr als das Fünfzigfache des menschlichen Genoms, in einer Pflanze von wenigen Zentimetern Höhe. Er verdrängte den Bedecktsamer *Paris japonica* mit 148.89 Gbp.

Das ist das **[C-Wert-Paradoxon](/en/glossary/c-value-paradox)**: Der DNA-Gehalt pro Zelle steht in keinem konsistenten Verhältnis dazu, wie kompliziert ein Organismus gebaut ist. Das Paradoxon löste sich auf, sobald repetitive DNA sauber charakterisiert war. Der größte Teil des Unterschieds zwischen einem Genom von 3 Gbp und einem von 160 Gbp ist Expansion transposabler Elemente und beibehaltene Polyploidie, nicht zusätzliche Gene. Was die Auflösung überdauert, ist eine Warnung und kein Rätsel: Die Genomgröße ist eine reale, präzise messbare Größe und zugleich ein schlechter Stellvertreter für fast alles, was man sonst über den Organismus wissen möchte.

## Die Genzahl sank fünfzig Jahre lang

Stattdessen sollte die Genzahl die aussagekräftige Messgröße sein. Ihre Geschichte ist ein langer Abstieg. Friedrich Vogels vorläufige Schätzung von 1964 — errechnet, indem er das Genom durch die Länge eines Gens von Hämoglobin-Größe teilte, unter der Annahme, das gesamte Genom kodiere Protein und die Gene seien ununterbrochen — kam auf 6.7 Millionen. Der gemeinsame Bericht der National Institutes of Health und des Department of Energy der USA von 1990 verwendete 100,000. Erhebungen an exprimierten Sequenzmarkern bis Mitte der 1990er Jahre lagen gehäuft zwischen 50,000 und 100,000. Bis 2000 reichten die Schätzungen von 28,000 bis 57,000, und ein Jahrzehnt später legte sich eine Übersicht über das ganze Unternehmen auf 22,333 als eigene beste Vermutung fest.

Aktuelle Annotationen setzen die Zahl der proteinkodierenden Gene knapp unter 20,000 an. Der GENCODE-basierte Gensatz von Ensembl für das primäre Assembly GRCh38.p14 — annotiert in Ensembl-Release 116 auf der Grundlage von GENCODE 50 — führt 19,878 kodierende Gene neben 42,155 nicht kodierenden Genen und 15,205 Pseudogenen; die CHM13-Annotation sagte 19,969 proteinkodierende Gene unter insgesamt 63,494 vorher. Wichtiger als die Annäherung ist, was sie offenlegt: Die kodierende Zahl ist inzwischen auf wenige Hundert genau stabil, die Zahlen für nicht kodierende Gene und für Pseudogene sind es nicht, weil sie von Annotationskriterien abhängen, die sich weiter bewegen.

Dem gegenüber wurde für den Fadenwurm *Caenorhabditis elegans* — 97 Megabasen, etwa ein Dreißigstel des menschlichen Genoms — 1998 berichtet, er trage über 19,000 Gene. Ein Wurm mit rund tausend Körperzellen und ein Mensch haben proteinkodierende Genzahlen in derselben Größenordnung. Was sie unterscheidet, ist vor allem, wie diese Gene eingesetzt werden — das Thema von [Regulation der Genexpression](/de/biology/genetics/how-gene-expression-is-regulated).

## „Funktionell“ leistet zwei Dinge auf einmal

Die umstrittenste Zahl der Genomik ist der Anteil des menschlichen Genoms, der funktionell ist, und der Streit ist definitorisch, bevor er empirisch wird. Das ENCODE-Konsortium berichtete 2012, seine Assays könnten „80% des Genoms biochemische Funktionen zuweisen“ — 80.4 Prozent nach seiner eigenen Aufstellung, also der Anteil des Genoms, der von mindestens einem ENCODE-identifizierten Element abgedeckt wird. Die breiteste Klasse war RNA: 62 Prozent der genomischen Basen waren reproduzierbar in sequenzierten langen RNA-Molekülen oder annotierten Exons vertreten, ein Maß für [Transkription über das Genom hinweg](/de/glossary/transcription), auch wenn der größere Teil davon in Introns oder in Gennähe liegt. Regionen mit angereicherten Histonmodifikationen deckten 56.1 Prozent ab, offenes Chromatin 15.2 Prozent und Transkriptionsfaktorbindung 8.1 Prozent; nach der konservativsten eigenen Einschätzung des Konsortiums fallen 8.5 Prozent der Basen in ein Transkriptionsfaktor-Bindemotiv oder einen DNase-Fußabdruck.

Eine ausführliche Kritik in *Genome Biology and Evolution* hielt dagegen, dass hier eine Definition über die kausale Rolle verwendet wird — diese Sequenz tut etwas Messbares —, wo die [Evolutionsbiologie](/de/biology/evolution/natural-selection-and-adaptation) eine Definition über den selektierten Effekt verwendet: Diese Sequenz wird durch reinigende Selektion erhalten, weil ihr Verlust Fitness kostet. Nach dem zweiten Kriterium setzt die vergleichende Genomik den konservierten Anteil unter 15 Prozent an, die umfassendste Analyse nahe bei 5 Prozent, ansteigend auf rund 9 Prozent, sobald linienspezifische Constraints hinzukommen, die aus der innerartlichen Variation erschlossen werden. Der schärfste Punkt der Kritik ist arithmetisch: Wenn 80 Prozent funktionell sind und nur etwa 10 Prozent unter Selektion stehen, dann müssten rund 70 Prozent des Genoms funktionell und zugleich immun gegen schädliche Mutationen sein.

ENCODEs eigene Autoren veröffentlichten zwei Jahre später eine abgewogene Erwiderung und räumten in *PNAS* ein, dass biochemisch aktive Regionen einen weit größeren Anteil des Genoms abdecken als evolutionär konservierte Regionen, und dass biochemische, evolutionäre und genetische Zugänge jeweils eine andere Frage beantworten. Das ist die redliche Lesart. Keine der beiden Zahlen ist ein Fehler; sie messen verschiedene Eigenschaften, und eine Schlagzeile, die „biochemisch aktiv“ in „notwendig“ übersetzt, hat die Behauptung verändert.

## Ein einziges Referenzgenom war immer ein Kompromiss

GRCh38 ist das Genom keines Menschen. Es wurde gelegenheitsgetrieben aus Klonen bakterieller künstlicher Chromosomen mehrerer Personen zusammengesetzt, was es zu einem Mosaik von Haplotypen macht, das als Koordinatensystem dient und nicht als Belegexemplar — jeder Variantenaufruf ist damit als Abweichung von einer willkürlichen Bezugsgröße formuliert. Der Genbestand einzelner Menschen unterscheidet sich tatsächlich: Eine Schätzung aus drei sequenzierten Genomen bezifferte den Unterschied zwischen zwei beliebigen Personen auf 73 bis 87 Gene, überwiegend durch Variation in segmentalen Duplikationen.

Der Entwurf des Human Pangenome Reference Consortium von 2023 ersetzt die eine Linie durch einen Graphen. Er umfasst 47 gephaste, diploide Assemblies genetisch diverser Personen und fügt, verglichen mit GRCh38, 119 Millionen Basenpaare euchromatischer polymorpher Sequenz sowie 1,115 Genduplikationen hinzu, wovon rund 90 Millionen dieser Basen aus struktureller Variation stammen. Für die Auswertung von Kurzlesedaten eingesetzt, senkte er die Fehler bei der Entdeckung kleiner Varianten um 34 Prozent und erhöhte die je Haplotyp nachgewiesenen Strukturvarianten um 104 Prozent. Dieselbe Logik ist in der Mikrobiologie längst Standard, wo eine Art durch ein Kerngenom plus einen akzessorischen Satz beschrieben wird, der sich zwischen Stämmen unterscheidet — der Rahmen aus [Bakterien und Archaeen als getrennte Domänen](/de/biology/microbiology/bacteria-and-archaea-explained).

Drei Grenzen bleiben. Siebenundvierzig Assemblies sind eine dünne Stichprobe menschlicher Vielfalt, und die vertretenen Populationen sind nicht gleichmäßig gewichtet. Die Annotation hinkt dem Assembly hinterher: Die 3,604 nur in CHM13 vorhergesagten Gene liegen großenteils in Regionen, die unzugänglich blieben, bis lange Leseweiten sie erreichten, und sind überwiegend mutmaßliche Paraloge statt kuratierter Modelle. Und nichts davon berührt die Funktionsfrage: Selbst wenn man jede Base jedes Genoms kennte, bliebe offen, welche davon zählen, denn das ist eine Frage nach Selektion und Phänotyp, nicht nach Sequenz. Wie schnell neue Unterschiede in ein Genom gelangen, behandelt [Mutationstypen und Raten pro Generation](/de/biology/genetics/mutation-types-and-rates), und die Maschinerie, die diese Rate so niedrig hält, wie sie ist, [DNA-Replikation und -Reparatur](/de/biology/genetics/dna-replication-and-repair).

## Sources

1. **T2T Consortium, *Science*** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Länge des CHM13-Assemblys, gegenüber GRCh38 hinzugekommene Sequenz, Genvorhersagen sowie Repeat- und Segmentduplikationsgehalt.
2. **EMBL-EBI, Ensembl** — [Human assembly and gene annotation](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation). Golden-Path-Länge von GRCh38.p14 und GENCODE-Zahlen für kodierende, nicht kodierende Gene und Pseudogene.
3. **Fernández und Kollegen, *iScience*** — [A 160 Gbp fork fern genome shatters size record for eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11270024/). Rekordgröße eines eukaryotischen Genoms und Spanne der Genomgrößen bei Gefäßpflanzen.
4. **C.-elegans-Sequenzierkonsortium, *Science*** — [Genome sequence of the nematode C. elegans](https://pubmed.ncbi.nlm.nih.gov/9851916/). Genomgröße und Genzahl für den Vergleich mit dem Fadenwurm.
5. **Pertea und Salzberg, *Genome Biology*** — [Between a chicken and a grape: estimating the number of human genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2898077/). Geschichte der Schätzungen zur menschlichen Genzahl und Unterschiede im Genbestand zwischen Personen.
6. **ENCODE Project Consortium, *Nature*** — [An integrated encyclopedia of DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3439153/). Die Behauptung biochemischer Funktion für 80 Prozent des Genoms.
7. **Graur und Kollegen, *Genome Biology and Evolution*** — [On the immortality of television sets: "function" in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/). Die Kritik über den selektierten Effekt und die konservierungsbasierten Funktionsschätzungen.
8. **Kellis und Kollegen, *PNAS*** — [Defining functional DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4035993/). Der Ausgleich zwischen biochemischen, evolutionären und genetischen Definitionen durch die ENCODE-Autoren selbst.
9. **Human Pangenome Reference Consortium, *Nature*** — [A draft human pangenome reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172123/). Zahl der Assemblies, hinzugekommene Sequenz und gemessene Wirkung auf die Variantenentdeckung.
