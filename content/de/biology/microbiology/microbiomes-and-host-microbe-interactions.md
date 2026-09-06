---
title: 'Mikrobiom: was Sequenzierungserhebungen belegen können und was nicht'
metaTitle: 'Mikrobiom: was Sequenzierung belegt und was nicht'
excerpt: Eine Mikrobiom-Erhebung meldet Anteile an einer vom Sequenziergerät gewählten Summe, keine Zählung des Darms. Diese Seite trennt, was diese Datenstruktur tragen kann, von den Kausalaussagen, die eine Transplantation, einen gnotobiotischen Wirt oder eine Studie verlangen.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - microbiome
  - metagenomics
  - causal-inference
  - host-microbe-interactions
  - compositional-data
related:
  - culturing-and-sequencing-microbes
  - antimicrobial-resistance-evidence
  - microbiology-explained
  - the-immune-system-explained
pillar: microbiology-explained
_bodyHash: 4368c3ec
---

Eine Erhebung des Darmmikrobioms zählt keine Organismen. Sie berichtet, welcher Anteil der aus einer Probe gewonnenen Sequenzen welchem Taxon zugeordnet wurde, bezogen auf eine Summe, die das Gerät festlegt und nicht der Darm. Nahezu jede Art, wie solche Erhebungen überinterpretiert werden, folgt aus dieser einen strukturellen Tatsache, und die Korrekturen dafür sind weder entlegen noch neu.

Welche Organismen erhoben werden und wovon sie leben, behandelt die [übergreifende Darstellung des mikrobiellen Lebens](/de/biology/microbiology/microbiology-explained). Diese Seite handelt von der Inferenz: was eine Tabelle von Anteilen tragen kann und was es braucht, um eine Aussage von *assoziiert mit* zu *verursacht* zu bewegen.

## Eine Zahl, die ihre Belege überlebt hat

Die Behauptung, der menschliche Körper enthalte zehn Bakterienzellen auf jede menschliche Zelle, kursierte jahrzehntelang. Eine Neubewertung von 2016 in PLOS Biology bezifferte die Menge auf rund 3.8 × 10¹³ Bakterien — ganz überwiegend im Dickdarm — gegenüber etwa 3.0 × 10¹³ menschlichen Zellen bei einem Referenzmann von 70 kg, ein Verhältnis von 1.3 mit einer angegebenen Unsicherheit von 25 Prozent und rund 50 Prozent Streuung über eine Population vergleichbarer Männer. Die beteiligte Bakterienmasse beträgt etwa 0.2 kg feucht, 50–100 g trocken.

Das alte Verhältnis lässt sich zurückgewinnen, aber nur, indem man Bakterien mit *kernhaltigen* menschlichen Zellen vergleicht und die roten Blutkörperchen verwirft, die zahlenmäßig die Mehrheit der menschlichen Zellen stellen. Das ist der nützliche Teil der Geschichte. Die Zahl 10:1 war nicht erfunden; sie war eine vertretbare Schätzung, deren einschränkender Nebensatz auf dem Weg verloren ging, woraufhin sie von Zitation statt von Messung lebte. Wer eine auffällige Mikrobiom-Statistik liest, sollte fragen, welche Größe tatsächlich gemessen wurde, denn [der Begriff Mikrobiom](/de/glossary/microbiome) wird routinemäßig und austauschbar an Zahlen über Zellen, Gene, Arten und Masse geheftet.

## Anteile sind keine Abundanzen

Sequenzierung erzwingt eine willkürliche Summe. Ein Lauf liefert ein festes Budget an Reads, um das die Taxa konkurrieren, und deshalb sind die Daten **kompositionell**: Nur Verhältnisse zwischen Komponenten tragen Information, und die absolute Menge von irgendetwas bleibt ungemessen. Eine Übersichtsarbeit von 2017 in *Frontiers in Microbiology* legte die Folgen unumwunden dar, und sie sind nicht kosmetisch. Blüht ein Organismus auf, fallen alle anderen Anteile, und ein naiver Test meldet diese Rückgänge als Verarmungen. Korrelationen zwischen rohen Anteilen sind gezwungen, sich zu einer Konstanten zu summieren, und sind daher konstruktionsbedingt zum Teil Scheinkorrelationen. Standardtests, die unabhängige Komponenten voraussetzen, gelten nicht.

Die Abhilfen sind etabliert — die von jener Übersichtsarbeit empfohlenen Log-Ratio-Transformationen oder die Zugabe exogener Bakterien in bekannter Menge zu einer Probe, sodass sich Readzahlen um Unterschiede in der mikrobiellen Gesamtlast bereinigen lassen —, aber sie sind in der veröffentlichten Literatur nicht allgemein üblich, und eine Arbeit, die „erhöhte *Bacteroides*“ meldet, ohne zu sagen, bezogen auf welche Summe, hat einen Anstieg eines Taxons nicht von einem Rückgang alles Übrigen unterschieden.

Was die Sequenzierung selbst auflöst, ist eine eigene Grenze. Amplikon-Erhebungen lesen ein konserviertes Markergen und lösen typischerweise bis zur Gattung auf; die Shotgun-Metagenomik liest die vorhandene DNA, kann Art und Stamm erreichen und berichtet, welche Gene vorliegen; die Metatranskriptomik berichtet, welche davon transkribiert werden. Keines der drei Verfahren misst eine Rate, und jedes trägt technische Verzerrungen, die die Begleitseite dazu behandelt, [wie mikrobielle Gemeinschaften beprobt und sequenziert werden](/de/biology/microbiology/culturing-and-sequencing-microbes).

## Studiendesigns, die eine Kausalaussage tragen können

Die Unterscheidung, auf die es in diesem Feld ankommt, ist nicht die statistische Signifikanz, sondern die Architektur der Studie. Vier Designs kehren wieder, und sie belegen Verschiedenes.

| Design | Was es belegen kann | Was es zunichtemacht |
| --- | --- | --- |
| Querschnittliche Fall-Kontroll-Studie | Eine Assoziation; einen Biomarker-Kandidaten | Umgekehrte Kausalität, Confounding durch Ernährung und Medikamente, Batch-Effekte |
| Längsschnittkohorte | Die zeitliche Reihenfolge der Veränderung | Confounding bleibt; die Probenahme kann das relevante Fenster verfehlen |
| Übertragung in keimfreie Tiere | Dass eine Gemeinschaft hinreicht, um in diesem Wirt einen Phänotyp zu erzeugen | Der Empfänger ist kein Mensch; Ernährung und Haltung verändern das Ergebnis |
| Randomisierte klinische Intervention | Eine Wirkung beim Menschen | Existiert für sehr wenige Krankheitsbilder |

Die Transferexperimente sind der Grund, warum das Feld überhaupt eine Kausalaussage treffen kann. In einer Studie von 2013 in *Science* wurden fäkale Gemeinschaften erwachsener weiblicher Zwillingspaare, die für Adipositas diskordant waren, in keimfreie Mäuse übertragen; erhöhte Körper- und Fettmasse wanderte mit der Gemeinschaft der schwereren Zwillingsschwester mit und ebenso mit daraus gewonnenen Kultursammlungen. Gemeinsame Haltung der Empfängertiere verhinderte den Phänotyp, und diese Rettung folgte dem Einwandern bestimmter *Bacteroidetes* aus der Gemeinschaft der schlanken Co-Zwillingsschwester — und hing davon ab, was die Mäuse zu fressen bekamen. Dieser letzte Halbsatz ist der Befund, der in Zusammenfassungen am häufigsten wegfällt: Die mikrobielle Wirkung war von der Ernährung abhängig, nicht autonom.

Auf klinischer Seite hat eine Intervention wirklich starke Belege angesammelt. Eine systematische Übersichtsarbeit mit Metaanalyse von 2020 in *EClinicalMedicine* über 45 Studien berichtete für die wiederholte fäkale Mikrobiota-Transplantation bei rezidivierender *Clostridioides difficile*-Infektion eine klinische Wirkung in Woche 8 von 91 Prozent (95-Prozent-KI 89–94) über 24 Studien und 1855 Patienten und 84 Prozent (80–88) für eine einmalige Gabe; die Zahl der notwendigen Behandlungen gegenüber Vancomycin lag bei 1.5 für die wiederholte Transplantation. Die Autoren stuften die Belege für die wiederholte Transplantation als hochwertig ein. Das ist eine einzige Krankheit mit einem einzigen gut charakterisierten Mechanismus, und sie ist keine Vorlage für Mikrobiom-Interventionen im Allgemeinen.

## Kolonisationsresistenz ist die am besten belegte Funktion

Dieser Mechanismus hat einen Namen. **Kolonisationsresistenz** ist die Fähigkeit einer etablierten Gemeinschaft, zusammen mit den Abwehrmechanismen des Wirts, einen eindringenden Organismus am Fußfassen zu hindern — über die Konkurrenz um Nährstoffe und Anheftungsstellen, die Produktion kurzkettiger Fettsäuren und anderer hemmender Metaboliten sowie die Aufrechterhaltung des mukosalen Immuntonus; ein weiterer, in Mäusen gezeigter Weg läuft über die Umwandlung primärer Gallensäuren des Wirts durch Kommensalen in sekundäre Gallensäuren, die *Clostridioides difficile* hemmen. Eine Übersichtsarbeit von 2025 in *FEMS Microbiology Ecology* fasst sie als gemeinsame Eigenschaft der ansässigen Gemeinschaft und des Wirts auf statt als Eigenschaft nur des einen oder des anderen, weshalb Antibiotikaexposition und eine Pathogeninvasion dasselbe Ereignis von zwei Seiten betrachtet sind.

Als Ökologie gelesen, ist das ein Besetzungseffekt und kein Geschenk: Eine ansässige Gemeinschaft schließt einen Neuankömmling aus denselben Gründen aus, aus denen ein geschlossenes Kronendach einen Keimling ausschließt. Es erklärt auch, warum sich der mechanistische Beitrag der [Immunregulation](/de/biology/physiology/the-immune-system-explained) im intakten Tier nicht sauber vom mikrobiellen Beitrag trennen lässt.

## Warum die meisten Krankheitsassoziationen nicht übertragbar sind

Das mit Abstand nützlichste Korrektiv in dieser Literatur ist eine studienübergreifende Metaanalyse, die 2017 in *Nature Communications* erschien. Sie verarbeitete 28 Fall-Kontroll-Darmstudien über zehn Krankheiten mit standardisierten Methoden neu und fand, dass wenige Krankheitsbilder durch große Verschiebungen der Gemeinschaft mit mehr als 50 Gattungen gekennzeichnet waren, während die meisten nur 10–15 betrafen, und — das entscheidende Ergebnis — dass etwa die Hälfte der in Einzelstudien markierten Gattungen auf mehr als eine Krankheit anspricht. Viele veröffentlichte Assoziationen gehören daher zu einer unspezifischen Verschiebung zwischen Gesundheit und Krankheit und sind nicht die Signatur eines bestimmten Krankheitsbildes.

Hinzu kommt gewöhnliche methodische Varianz. Ein Perspektivbeitrag von 2018 in *mBio* trennt Reproduzierbarkeit, Replizierbarkeit, Robustheit und Verallgemeinerbarkeit als eigenständige Fehlschläge, und die Unterscheidung ist hier wichtig: Zwei Labore können dieselben Proben verarbeiten und uneins sein wegen kontaminierter Extraktionskits, wegen Batch-Effekten zwischen Sequenzierläufen oder wegen abweichender Software- und Referenzdatenbankversionen, bevor überhaupt Biologie im Spiel ist. Die Folgen für die Deutung untersucht der Einblick zur [Kausalitätslücke in der Mikrobiomforschung](/de/insight/microbiome-research-and-the-causal-gap) weiter, und dieselbe Schlussfalle kehrt bei den [mikrobiellen Gemeinschaften des Bodens](/de/ecology/ecosystems/soil-microbiome-regenerative-agriculture) wieder, wo relative Abundanz ebenso als Funktion gelesen wird.

Die redliche Position ist eng. Sequenzierungserhebungen sind gut darin zu entdecken, dass sich eine Gemeinschaft zwischen Gruppen unterscheidet, schwach darin zu sagen, welcher Unterschied zählt, und stumm zur Richtung der Verursachung. Diese Lücke zu schließen verlangt entweder ein handhabbares Isolat zum Manipulieren oder einen Eingriff im Wirt — und für die meisten Taxa, die diese Erhebungen nachweisen, ist derzeit weder das eine noch das andere verfügbar.

## Sources

1. **PLOS Biology** — [Revised estimates for the number of human and bacteria cells in the body](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533). Bakterien- und Zellzahlen des Menschen, das Verhältnis 1.3 und seine Unsicherheit sowie der Ursprung der 10:1-Behauptung.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2017.02224/full). Warum Sequenzierungssummen willkürlich sind und was das mit Korrelations- und Differenztests macht.
3. **Science** — [Gut microbiota from twins discordant for obesity modulate metabolism in mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC3829625/). Übertragbarkeit eines Adipositas-Phänotyps in keimfreie Mäuse und seine Abhängigkeit von der Ernährung.
4. **EClinicalMedicine** — [Faecal microbiota transplantation for recurrent Clostridioides difficile infection: an updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7788438/). Gepoolte klinische Wirkung, Zahl der notwendigen Behandlungen und Bewertung der Evidenz.
5. **Nature Communications** — [Meta-analysis of gut microbiome studies identifies disease-specific and shared responses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5716994/). Krankheitsübergreifende Neuauswertung, die zeigt, dass viele Assoziationen unspezifisch sind.
6. **mBio** — [Identifying and overcoming threats to reproducibility, replicability, robustness and generalizability in microbiome research](https://pmc.ncbi.nlm.nih.gov/articles/PMC5989067/). Rahmen, der vier verschiedene Fehlermodi trennt.
7. **FEMS Microbiology Ecology** — [Ecology of the gut microbiota and colonization resistance: mechanisms and therapeutic implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC12728824/). Mechanismen, mit denen eine ansässige Gemeinschaft und die Wirtsabwehr Eindringlinge ausschließen.
8. **Nature** — [Precision microbiome restoration of bile acid-mediated resistance to *Clostridium difficile*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4354891/). Umwandlung primärer in sekundäre Gallensäuren durch einen ansässigen Kommensalen als Mechanismus der Kolonisationsresistenz.
9. **Microbiome** — [Adjusting microbiome profiles for differences in microbial load by spike-in bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC4915049/). Spike-in-Kalibrierung, um aus kompositionellen Readzahlen Verhältnisse absoluter Abundanz zurückzugewinnen.
10. **National Human Genome Research Institute** — [Microbiome](https://www.genome.gov/genetics-glossary/Microbiome). Referenzdefinition des Begriffs, wie er in diesen Literaturen verwendet wird.
