---
title: 'CRISPR: das bakterielle Immunsystem, das zum Editierwerkzeug wurde'
metaTitle: 'CRISPR: was die Nuklease schneidet, was die Zelle entscheidet'
excerpt: Eine geführte Nuklease schneidet die DNA; was aus dem Schnitt wird, entscheidet die Zelle. Diese Arbeitsteilung erklärt, warum Knockouts Routine sind, präzise Ersetzungen schwer bleiben und der begrenzende Schritt die Einbringung ist und nicht das Zielen.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - genome-editing
  - crispr-cas9
  - dna-repair
  - base-editing
  - gene-therapy
related:
  - biotechnology-explained
  - dna-sequencing-technologies
  - dna-replication-and-repair
  - synthetic-biology-explained
pillar: biotechnology-explained
---

Die Nuklease ist der berühmte Bestandteil und der uninteressanteste. Cas9 findet eine Sequenz und bricht sie; was danach geschieht, erledigt eine Reparaturmaschinerie, die die Zelle ohnehin besaß, und das Reparaturergebnis ist das Produkt. Nahezu jede praktische Eigenschaft der Genom-Editierung — warum Gen-Knockouts Routine wurden, warum präzise Ersetzungen schwierig blieben, warum in der Therapie die Einbringung und nicht das Zielen die bindende Beschränkung ist — folgt aus dieser Arbeitsteilung zwischen einem eingebrachten Enzym und einem bereits vorhandenen biologischen Prozess. Es ist zugleich der Teil, der in Zusammenfassungen am häufigsten übersprungen wird, die meist die Schere beschreiben und dann aufhören. Das Editieren an Ort und Stelle ist die jüngste der Kernoperationen im [weiteren biotechnologischen Werkzeugkasten](/de/biology/biotechnology/biotechnology-explained) und diejenige, deren Grenzen am wenigsten verbreitet verstanden werden.

## Ein Anti-Phagen-System, rückwärts gelesen

CRISPR-Cas-Systeme sind die [adaptive Immunität](/de/biology/physiology/the-immune-system-explained) von Bakterien und Archaeen. Fragmente zuvor angetroffener viraler oder Plasmid-DNA werden in einem Wiederholungs-Array gespeichert, transkribiert und zu kurzen Guide-RNAs prozessiert und dienen dazu, dieselbe Sequenz beim erneuten Zusammentreffen zu erkennen und zu zerstören. Das System ist eine Abwehr gegen [Viren, die Bakterien infizieren](/de/biology/microbiology/viruses-explained), und es entstand unter dem Druck dieses Wettrüstens und nicht für irgendetwas, das der Bequemlichkeit im Labor ähnelte.

Das Ergebnis von 2012, das daraus ein Werkzeug machte, klärte den Mechanismus genau. In einer Klasse dieser Systeme bildet eine reife CRISPR-RNA, basengepaart mit einer trans-aktivierenden RNA, eine Zwei-RNA-Struktur, die Cas9 anweist, einen Doppelstrangbruch zu setzen; die HNH-Domäne des Enzyms schneidet den zum Guide komplementären Strang, ihre RuvC-artige Domäne den anderen. Dieselbe Arbeit zeigte, dass sich die beiden RNAs zu einer einzigen konstruierten Chimäre verschmelzen ließen, die weiterhin sequenzspezifische Spaltung dirigierte — der Schritt, der das System programmierbar machte, weil nun eine kurze RNA synthetisiert und nicht ein natürlicher Locus nachgebaut werden musste.

Das Zielen ist nicht frei von Beschränkungen. Cas9 verlangt unmittelbar neben der gepaarten Sequenz ein kurzes Protospacer-benachbartes Motiv, das im natürlichen Kontext eindringende DNA von der eigenen gespeicherten Kopie des Bakteriums unterscheidet. Für das gebräuchliche Enzym aus *Streptococcus pyogenes* lautet dieses Motiv NGG, und spätere Arbeiten haben quantifiziert, wie permissiv das ist: ein NGG-Motiv auf dem einen oder anderen Strang kommt im Mittel etwa alle 8 Basenpaare vor, sodass die Beschränkung vor allem dann greift, wenn eine Editierung an eine exakte Position und nicht bloß in eine Region fallen muss.

## Der Reparaturweg ist das Produkt

Ein Doppelstrangbruch in einer Säugerzelle wird gewöhnlich durch Endverknüpfung aufgelöst, die häufig kleine Insertionen oder Deletionen hinterlässt. In einer kodierenden Sequenz verschieben diese das Leseraster, weshalb das Ausschalten eines Gens unkompliziert ist: Man nimmt keine entworfene Änderung vor, man nutzt einen fehleranfälligen Reparaturweg und selektiert die Zellen, in denen er nützlich danebenging. Eine Sequenz durch eine festgelegte Alternative zu ersetzen, erfordert homologiegerichtete Reparatur mit einer bereitgestellten Matrize, einen Weg, der auf bestimmte Zellzyklusphasen beschränkt ist und schlecht mit der Endverknüpfung konkurriert. Die Mechanik beider Wege behandelt der Artikel über [DNA-Replikation und -Reparatur](/de/biology/genetics/dna-replication-and-repair).

Der Effizienzunterschied ist im direkten Vergleich deutlich. In den Experimenten, die das Base Editing einführten, erzeugte die Zufuhr von Cas9, einem Guide und einem einzelsträngigen Donor zur Anregung homologiegerichteter Reparatur die beabsichtigte Umwandlung von Cytosin zu Thymin bei durchschnittlich 0.5 Prozent der Allele, während sie Insertionen und Deletionen bei durchschnittlich 4.3 Prozent hervorrief. Dieselbe Arbeit beziffert das Verhältnis von beabsichtigter Umwandlung zu Endverknüpfungsprodukten auf 0.17 für Wildtyp-Cas9 gegenüber 23 für den Baseneditor der dritten Generation, den sie vorstellte.

## Schreiben, ohne beide Stränge zu brechen

Zwei Ansätze vermeiden den Doppelstrangbruch vollständig, und beide entstanden, indem eine neue Aktivität an eine inaktivierte oder nickende Cas9 fusioniert wurde.

Base Editing fusioniert eine Cytidin-Desaminase an Cas9 und wandelt Cytosin innerhalb eines Fensters von etwa fünf Nukleotiden in der vom Guide bestimmten Region zu Uracil um; die Replikation schreibt die Änderung anschließend als Substitution von C zu T (oder von G zu A) fest. Mit einer Nickase, die auf den nicht editierten Strang zielt, und einem beigefügten Uracil-Glykosylase-Inhibitor erreichte die berichtete Umwandlung ungefähr 15 bis 75 Prozent der gesamten zellulären DNA in vier Zelllinien, bei einer Indel-Bildung typischerweise bei oder unter 1 Prozent.

Prime Editing fusioniert eine Reverse Transkriptase an eine Nickase-Cas9 und nutzt eine Guide-RNA, die zugleich die Stelle festlegt und die gewünschte Sequenz kodiert, die in den genickten Strang geschrieben und von der Zelle aufgelöst wird. Die Ursprungsarbeit führte mehr als 175 Editierungen in menschlichen Zellen aus, darunter alle zwölf möglichen Punktsubstitutionen sowie kleine Insertionen und Deletionen, mit Indel-Häufigkeiten von im Mittel 0.86 Prozent bei der einfacheren ihrer beiden Konfigurationen; die Variante, die einen zweiten Nick setzt, um die Reparatur zum editierten Strang hin zu lenken, steigerte sowohl Effizienz als auch Indels, letztere an manchen Stellen in den niedrigen zweistelligen Prozentbereich. Ihre Autoren berechneten, dass der Ansatz im Prinzip bis zu etwa 89 Prozent der damals 75,122 in ClinVar katalogisierten pathogenen menschlichen Varianten adressieren könnte — eine Aussage über die Klasse von Änderungen, die diese Chemie vornehmen kann, und keine Behauptung über die klinische Reichweite.

| Ansatz | Eingeführter Bruch | Mögliche Änderungen | Berichtete unbeabsichtigte Indels |
| --- | --- | --- | --- |
| Nuklease plus Endverknüpfung | Doppelstrang | Zerstörung, keine Vorgabe | Der beabsichtigte Mechanismus |
| Nuklease plus Donormatrize | Doppelstrang | Im Prinzip beliebig | ~4.3% gegenüber ~0.5% Umwandlung |
| Cytosin-Base-Editing | Nur Nick | Eine Transitionsklasse, Fenster ~5 nt | Typischerweise ≤1% |
| Prime Editing | Nur Nick | Alle Substitutionen, kleine Insertionen und Deletionen | ~0.86% für die Grundkonfiguration |

## Messen, was sich nicht vorhersagen lässt

Ein Editor, der etwa zwanzig Basen erkennt, wird gelegentlich an Sequenzen aktiv, die dem Ziel ähneln. Der wichtige Befund der Assays, die dies messen sollten, ist nicht, dass Off-Target-Aktivität existiert, sondern dass sie schlecht vorhergesagt wird. Die GUIDE-seq-Methode fängt ein kurzes doppelsträngiges Oligonukleotid in Brüchen ein und sequenziert die Insertionsstellen, was eine unvoreingenommene genomweite Karte liefert. Angewandt auf dreizehn Guides in zwei menschlichen Zelllinien, ergab sie, dass die meisten identifizierten Stellen weder von den damals gebräuchlichen rechnergestützten Vorhersagewerkzeugen noch durch Chromatin-Immunpräzipitation entdeckt worden waren und dass sich unter den übersehenen Stellen solche befanden, die sich vom Ziel um lediglich eine einzige Fehlpaarung unterschieden. Sie zeigte außerdem, dass ein Verkürzen der Guide-RNA die Off-Target-Brüche erheblich verringerte und dass manche scheinbaren Bruchpunkt-Hotspots von der Nuklease gänzlich unabhängig waren.

Daraus folgen zwei Grenzen. Jedes Off-Target-Profil ist spezifisch für den Guide, den Zelltyp und die Empfindlichkeit des Assays; ein sauberes Ergebnis in einer Zelllinie überträgt sich nicht. Und weil diese Ereignisse seltener sein können als der Fehlerboden der zu ihrem Nachweis verwendeten Sequenzierung, setzen Tiefe und Fehlercharakteristik der [Sequenzierplattform](/de/biology/biotechnology/dna-sequencing-technologies) die Nachweisgrenze für die Sicherheitsaussage.

## Die Einbringung entscheidet, welche Krankheiten erreichbar sind

Die erste zugelassene Therapie auf Basis dieser Technologie ist lehrreich dafür, was derzeit praktikabel ist. Sie behandelt die Sichelzellkrankheit, indem die eigenen blutbildenden [Stammzellen](/de/biology/physiology/developmental-biology-explained) der Patientin oder des Patienten dem Körper entnommen werden und Cas9 einen erythroidspezifischen Enhancer von *BCL11A* — einen Repressor des fetalen Hämoglobins — stilllegt, sodass editierte Zellen fetales Hämoglobin bilden, das die Sichelbildung stört. Zugelassen wurde sie in den Vereinigten Staaten am 8. Dezember 2023 für Patientinnen und Patienten ab 12 Jahren mit wiederkehrenden vasookklusiven Krisen und im Januar 2024 für die transfusionsabhängige β-Thalassämie.

Zwei Merkmale verdienen Beachtung. Die Editierung repariert die ursächliche Mutation nicht; sie schaltet ein regulatorisches Element aus, damit ein anderes, normalerweise stillgelegtes Gen exprimiert wird, eine Strategie, die dem Wissen darüber entlehnt ist, [wie Genexpression reguliert wird](/de/biology/genetics/how-gene-expression-is-regulated), und nicht der Reparaturbiologie. Und das Verfahren ist ex vivo: Die Zellen werden in der Schale editiert, und vor ihrer Rückgabe durchläuft die Patientin oder der Patient eine myeloablative Konditionierung. Das therapeutische Bulletin, das beide zugelassenen Sichelzellprodukte beschreibt, hält fest, dass diese Kombination aus genomischer Manipulation ex vivo und Konditionierung Fragen zum langfristigen hämatologischen Risiko offenlässt, die nur eine ausgedehnte Nachbeobachtung beantworten kann. Gewebe an Ort und Stelle zu editieren, ohne es zu entnehmen, bleibt das schwierigere und weitgehend ungelöste Problem.

## Wo die Grenze der Governance gezogen wird

Somatische Zellen zu editieren betrifft eine einzige Patientin oder einen einzigen Patienten. Keimzellen oder Embryonen zu editieren betrifft Nachkommen, die nicht einwilligen können und nicht nachbeobachtet werden können. Die Empfehlungen der Weltgesundheitsorganisation von 2021 behandeln somatische, Keimbahn- und vererbbare Anwendungen in einem einzigen Governance-Rahmen und trennen sie zugleich in der Praxis: Sie schlagen ein Register für die Forschung zur Editierung des menschlichen Genoms vor, Mechanismen zur Meldung von Arbeiten, die außerhalb vereinbarter Normen liegen, und eine dauerhafte Einbindung der Öffentlichkeit. Das nationale Recht weicht unterhalb dieser Ebene erheblich voneinander ab, und die praktische Lage ist, dass vererbbare Anwendungen außerhalb der akzeptierten klinischen Praxis bleiben, während somatische unter der herkömmlichen therapeutischen Regulierung voranschreiten.

Was das Editieren für die Forschung verändert hat, ist weniger umstritten als das, was es für die Medizin verändert hat. Ein Gen in einem gewählten Zelltyp ausschalten zu können, macht aus vielen korrelativen Beobachtungen prüfbare. Es macht daraus keine Erklärungen: Ein Phänotyp, der auftritt, wenn eine Sequenz entfernt wird, zeigt, dass diese Sequenz unter diesen Bedingungen notwendig ist, was eine engere Aussage ist als die üblicherweise berichtete.

## Sources

1. **Science (Autorenmanuskript, PubMed Central)** — [A programmable dual RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6286148/). Der Zwei-RNA-Mechanismus, die domänenspezifische Spaltung und die Demonstration der Einzelchimäre.
2. **Nature (Autorenmanuskript, PubMed Central)** — [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4873371/). Base-Editing-Fenster, Umwandlungseffizienzen und der Vergleich mit homologiegerichteter Reparatur.
3. **Nature (Autorenmanuskript, PubMed Central)** — [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). Reichweite des Prime Editing, Indel-Häufigkeiten, PAM-Abstand und die ClinVar-Rechnung.
4. **Nature Biotechnology (Autorenmanuskript, PubMed Central)** — [GUIDE-Seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pmc.ncbi.nlm.nih.gov/articles/PMC4320685/). Unvoreingenommene Off-Target-Kartierung und das Versagen der Vorhersagewerkzeuge.
5. **Genetics in Medicine Open (therapeutisches Bulletin der ACMG)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Mechanismus, Zulassungsdaten und die Vorbehalte zur langfristigen Nachbeobachtung.
6. **Weltgesundheitsorganisation** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Governance-Rahmen für somatische, Keimbahn- und vererbbare Anwendungen.
