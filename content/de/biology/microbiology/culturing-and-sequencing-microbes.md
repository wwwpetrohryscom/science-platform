---
title: 'Mikroben untersuchen: warum die Methode entscheidet, was man findet'
metaTitle: 'Mikroben untersuchen: die Methode entscheidet'
excerpt: Eine Platte, ein PCR-Primer und ein Metagenom-Assembler liefern jeweils eine andere Teilmenge derselben Gemeinschaft. Diese Seite legt dar, worauf jede wichtige mikrobiologische Methode auswählt, und welche Qualitätsstandards ein Genom ohne Organismus berichtbar machen.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - culturing
  - amplicon-sequencing
  - metagenome-assembled-genomes
  - single-cell-genomics
  - culturomics
related:
  - microbiology-explained
  - microbiomes-and-host-microbe-interactions
  - microbial-biogeochemistry
  - dna-sequencing-technologies
pillar: microbiology-explained
---

Die Mikrobiologie hat ein wiederkehrendes Problem, das die meisten anderen Zweige der Biologie nicht haben: man kann den Organismen nicht dabei zusehen, wie sie etwas Nützliches tun, also erreicht jede Tatsache über sie uns durch ein Instrument, das einige zulässt und die übrigen ausschließt. Eine Kolonie auf Agar, ein Sequenzread aus einem PCR-Produkt und ein aus einem Metagenom gebinntes Genom sind drei verschiedene Filter, und die von jedem berichtete Zusammensetzung ist teils eine Beschreibung des Filters. Zu wissen, was was ist, macht den größten Teil dessen aus, was eine vertretbare mikrobenökologische Aussage von einem Artefakt trennt.

Die Organismen und ihre Stoffwechselbreite behandelt die [Einführung in das mikrobielle Leben](/de/biology/microbiology/microbiology-explained). Was folgt, ist eine Methodenseite, geordnet danach, was jeder Ansatz systematisch verfehlt.

## Worauf eine Platte auswählt

Die **[Plattenzählanomalie](/de/glossary/great-plate-count-anomaly)** — die alte Beobachtung, dass aus einer Umweltprobe weit weniger Kolonien wachsen, als sich unter dem Mikroskop Zellen zählen lassen — wird meist als Rätsel dargeboten. Besser liest man sie als Liste. Eine Standardplatte bietet eine Kohlenstoffquelle in einer Konzentration, eine Sauerstoffspannung, eine Temperatur, einen pH-Wert, keine Partnerorganismen und eine Bebrütung von wenigen Tagen. Ein Organismus, der einen syntrophen Partner zur Wasserstoffentsorgung braucht, oder dessen Verdopplungszeit Wochen beträgt, oder den genau jene Nährstoffkonzentrationen hemmen, mit denen man ein reiches Medium herstellt, wird nicht erscheinen — nicht weil er grundsätzlich unkultivierbar wäre, sondern weil diese Bedingungen nicht angeboten wurden.

Wie groß die entstehende Lücke ausfällt, hängt ganz vom Lebensraum ab, und das ist der Teil, der meist weggelassen wird. Eine Analyse von 2018 in *mSystems* verglich metagenomische 16S-rRNA-Gensequenzen — die weit weniger kulturbedingte Verzerrung tragen als primerbasierte Erhebungen — mit ihren nächsten kultivierten Verwandten über viele Umwelten hinweg. Meerwasser, Süßwasser, terrestrischer Untergrund, Boden, hypersaline Systeme, Meeressediment, heiße Quellen, hydrothermale Schlote, Schnee und Bioreaktoren wurden von unkultivierten Gruppen beherrscht, wobei 22 bis 87 Prozent unkultivierten Gattungen bis Klassen angehörten. Menschliche und mit dem Menschen verbundene Umwelten waren die Ausnahme und wurden mit 45 bis 97 Prozent von kultivierten Gattungen beherrscht. Global hochgerechnet schätzten die Autoren, dass unkultivierte Gattungen etwa 7,3 × 10²⁹ Zellen ausmachen, rund 81 Prozent der Gesamtzahl, und dass unkultivierte Phyla in Metatranskriptomen gegenüber Metagenomen überrepräsentiert sind — ein Beleg, dass diese Zellen nicht nur vorhanden, sondern aktiv sind.

Die praktische Folge ist, dass die Literatur zum menschlichen Mikrobiom und die der Umweltmikrobiologie verschiedene Fassungen desselben Problems haben und dass Ergebnisse darüber, wie gut Sequenzierung der Kultur folgt, zwischen ihnen nicht übertragbar sind.

## Die Verzerrungen, die ein Markergen mitbringt

Amplikon-Sequenzierung ersetzt die Platte durch ein Primerpaar, einen Filter anderer Gestalt.

- **Primerabdeckung.** Kein Primersatz passt auf jedes Ziel; Linien mit Fehlpaarungen in der Bindungsregion sind unterrepräsentiert oder fehlen, und die betroffenen Linien unterscheiden sich zwischen Primersätzen, sodass zwei Studien derselben Probe systematisch abweichen können.
- **Kopienzahl.** Das rRNA-Operon liegt in mehreren Kopien vor, 1 bis 15 bei Bakterien und 1 bis 4 bei Archaeen. Eine häufig gewonnene Sequenz kann ein kopienreiches Taxon mäßiger Häufigkeit sein oder ein kopienarmes Taxon hoher Häufigkeit, und die Korrektur verlangt die Kopienzahl von Organismen zu kennen, die oft am schlechtesten charakterisiert sind.
- **Chimären und Fehler.** Die PCR erzeugt aus unvollständigen Verlängerungsprodukten Hybridsequenzen; sie blähen die scheinbare Vielfalt auf, wenn man sie nicht entfernt, und das Entfernen verwirft selbst einige echte Sequenzen.
- **Region und Auflösung.** Verschiedene variable Regionen desselben Gens lösen verschiedene Taxa auf, sodass die taxonomische Tiefe eines Ergebnisses davon abhängt, welches Fragment amplifiziert wurde.

Keines davon ist tödlich, und alle sind grundsätzlich korrigierbar. Was sie ausschließen, ist, eine Tabelle relativer Häufigkeiten als unmittelbare Beobachtung zu behandeln — eine Grenze, die sich mit dem in [was Mikrobiomerhebungen belegen](/de/biology/microbiology/microbiomes-and-host-microbe-interactions) untersuchten Kompositionsproblem verbindet.

## Genome ohne Organismen

Die Shotgun-Metagenomik entfernt den Primer, und rechnerisches Binning gruppiert die assemblierten Fragmente dann zu mutmaßlichen Genomen. Ein **aus einem Metagenom assembliertes Genom** ist eine Hypothese darüber, welche Contigs aus einer Population stammen, und sein Nutzen hängt an der Ehrlichkeit darüber, wie gut diese Hypothese ist.

Das Genomic Standards Consortium legte diesen Maßstab 2017 fest. Ein hochwertiger Entwurf eines assemblierten oder einzelamplifizierten Genoms muss zu mehr als 90 Prozent vollständig sein bei weniger als 5 Prozent Kontamination und muss die 23S-, 16S- und 5S-rRNA-Gene sowie tRNAs für mindestens 18 der 20 Aminosäuren kodieren. Ein mittelwertiger Entwurf ist mindestens zu 50 Prozent vollständig bei weniger als 10 Prozent Kontamination; alles unter 50 Prozent ist ein Entwurf geringer Qualität. Vollständigkeit und Kontamination sind selbst Schätzungen, abgeleitet aus erwarteten Einzelkopie-Markergenen — was sie ausgerechnet für die tief neuartigen Linien am unzuverlässigsten macht, für die sich Binning lohnt, denn die Markersätze wurden aus kultivierten Verwandten gebaut.

Der Maßstab, den diese Verfahren erreichen, ist echt. Die Sammlung Unified Human Gastrointestinal Genome, 2021 in *Nature Biotechnology* veröffentlicht, assemblierte 204.938 nicht redundante Genome, die 4.644 Darmprokaryoten und mehr als 170 Millionen Proteinsequenzen abbilden. Mehr als 70 Prozent dieser Arten haben keinen kultivierten Vertreter, und 40 Prozent der Proteine haben keine funktionelle Annotation. Die Einzelzellgenomik bietet einen ergänzenden Weg — eine Zelle sortieren, ihr Genom amplifizieren, es sequenzieren —, der ein eindeutiges Einorganismengenom liefert, meist aber ein unvollständiges, und der nach denselben Maßstäben bewertet wird.

Referenzdatenbanken setzen eine weitere Obergrenze: eine taxonomische Zuordnung kann eine Sequenz nur gegen das stellen, was hinterlegt wurde. Die RefSeq-Sammlung des NCBI umfasste in Version 236 vom Juli 2026 182.465 Organismen über das gesamte Leben hinweg. Jeder „nicht zugeordnete" Read einer Erhebung ist ebenso eine Aussage über diese Sammlung wie über die Probe.

## Die Kultur kam zurück

Die Antwort darauf war nicht, die Kultur aufzugeben, sondern sie zu industrialisieren. **Kulturomik** vervielfacht die Zahl der Bedingungen — Hunderte Medien, Atmosphären, Bebrütungszeiten und Anreicherungsschritte — und durchmustert die entstehenden Kolonien mit Massenspektrometrie und Sequenzierung. Eine parallele Arbeitsrichtung nutzte gezielte phänotypische Kultur, geleitet von metagenomischen Daten: eine Studie von 2016 in *Nature* isolierte 137 Bakterienarten aus gesunden menschlichen Stuhlproben, archivierte sie als Reinkulturen und schloss aus genomischer und phänotypischer Analyse, dass mindestens 50 bis 60 Prozent der Darmbakteriengattungen widerstandsfähige, auf Wirt-zu-Wirt-Übertragung spezialisierte Sporen bilden — was auch ein plausibler Grund dafür ist, dass sich so viele Darmanaerobier am Ende doch als kultivierbar erwiesen.

Ein Vorbehalt gehört ins Protokoll. Eine frühe, viel zitierte Kulturomik-Arbeit, 2016 in *Nature Microbiology* veröffentlicht, wurde im November 2024 zurückgezogen. Der genannte Grund war dokumentarisch, nicht mikrobiologisch: die Autoren konnten für die zusätzlichen Länder, aus denen Proben stammten, über die im Artikel zitierte französische Genehmigung hinaus keinen Nachweis einer Ethikfreigabe vorlegen. Mehrere Autoren widersprachen der Rücknahme. Der Kulturansatz selbst wurde von anderen Gruppen reproduziert, aber wer der Literatur nachgeht, trifft auf eine zurückgezogene Grundlagenreferenz, und es ist besser zu wissen, warum.

## Was das für das Lesen eines Ergebnisses bedeutet

Die Methoden sind nicht austauschbar, und ihr Auseinanderfallen ist aufschlussreich statt peinlich. Ein Taxon, das in einer Amplikonerhebung häufig und im Metagenom abwesend ist, kann ein Kopienzahlartefakt sein. Eine aus einem assemblierten Genom erschlossene Stoffwechselfähigkeit ist eine Fähigkeit, keine Aktivität — der Abstand zwischen beidem ist Gegenstand der [mikrobiellen Biogeochemie](/de/biology/microbiology/microbial-biogeochemistry). Und eine Erhebung in einem schlecht beprobten Lebensraum wird schon deshalb hohe Neuheit melden, weil die Referenzdatenbanken dort dünn sind.

Dieselbe Logik, die Ökologen beim Erhebungsaufwand in [Artenzählungen](/de/ecology/biodiversity/species-richness-explained) anwenden, gilt hier stärker, weil die Entdeckungswahrscheinlichkeit eines mikrobiellen Taxons nicht nur davon abhängt, wie gründlich gesucht wurde, sondern mit welchem von mehreren unvereinbaren Instrumenten. Fortschritte kommen ebenso von der Plattformseite wie aus der Biologie, wie [DNA-Sequenziertechnologien](/de/biology/biotechnology/dna-sequencing-technologies) darlegen; längere Reads verkürzen die Assemblierungslücke, sagen aber nicht, was ein Organismus tut.

## Sources

1. **mSystems** — [Phylogenetically novel uncultured microbial cells dominate Earth microbiomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6156271/). Unkultivierte Anteile nach Lebensraum, globale Zellschätzungen und Metatranskriptombelege für Aktivität.
2. **Nucleic Acids Research** — [rrnDB: improved tools for interpreting rRNA gene abundance in bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383981/). Spannen der rRNA-Operon-Kopienzahl und die dadurch eingebrachte Verzerrung in Amplikonerhebungen.
3. **Nature Biotechnology** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). Schwellen für Vollständigkeit, Kontamination und Markergene beim Berichten assemblierter Genome.
4. **Nature Biotechnology** — [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7801254/). Genom- und Proteinzahlen und der Anteil der Arten ohne kultivierten Vertreter.
5. **Nature** — [Culturing of 'unculturable' human microbiota reveals novel taxa and extensive sporulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4890681/). Gezielte phänotypische Kultur von 137 Arten und die Verbreitung der Sporenbildung.
6. **Nature Microbiology** — [Retraction note: Culture of previously uncultured members of the human gut microbiota by culturomics](https://pmc.ncbi.nlm.nih.gov/articles/PMC13179128/). Die Rücknahme von 2024 und ihre genannten Gründe.
7. **NCBI (National Library of Medicine)** — [Reference Sequence (RefSeq) database](https://www.ncbi.nlm.nih.gov/refseq/). Organismen- und Datensatzzahlen der Version 236, auf denen die taxonomische Zuordnung beruht.
