---
title: 'Étudier les microbes : pourquoi la méthode décide de ce que l''on trouve'
metaTitle: 'Étudier les microbes : la méthode décide du résultat'
excerpt: Une boîte de Petri, une amorce PCR et un assembleur de métagénome renvoient chacun un sous-ensemble différent de la même communauté. Voici ce que sélectionne chaque grande méthode microbiologique, et les normes de qualité qui rendent publiable un génome sans organisme.
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
_bodyHash: f679a735
---

La microbiologie a un problème récurrent que la plupart des autres domaines de la biologie n'ont pas : on ne peut pas voir les organismes faire quoi que ce soit d'utile, si bien que chaque fait à leur sujet arrive par un instrument qui en admet certains et exclut les autres. Une colonie sur gélose, une lecture de séquence issue d'un produit de PCR et un génome extrait par binning d'un métagénome sont trois filtres différents, et la composition rapportée par chacun est en partie une description du filtre. Savoir lequel est lequel est l'essentiel de ce qui sépare une affirmation défendable d'écologie microbienne d'un artefact.

Les organismes et leur éventail métabolique sont traités dans l'[introduction à la vie microbienne](/fr/biology/microbiology/microbiology-explained). Ce qui suit est une page de méthodes, organisée par ce que chaque approche manque systématiquement.

## Ce qu'une boîte de Petri sélectionne

L'**[anomalie du comptage sur boîte](/fr/glossary/great-plate-count-anomaly)** — l'observation ancienne selon laquelle bien moins de colonies poussent à partir d'un échantillon environnemental qu'il n'y a de cellules dénombrables au microscope — est généralement présentée comme une énigme. Elle se lit mieux comme une liste. Une boîte standard offre une source de carbone à une concentration, une tension d'oxygène, une température, un pH, aucun organisme partenaire et une incubation de quelques jours. Un organisme qui a besoin d'un partenaire syntrophe pour évacuer l'hydrogène, ou dont le temps de doublement est de plusieurs semaines, ou que les concentrations mêmes de nutriments d'un milieu riche inhibent, n'apparaîtra pas — non parce qu'il serait incultivable en principe, mais parce que ces conditions n'ont pas été offertes.

L'ampleur de l'écart qui en résulte dépend entièrement de l'habitat, et c'est la partie généralement omise. Une analyse de 2018 dans *mSystems* a comparé des séquences métagénomiques du gène de l'ARNr 16S — bien moins biaisées par la culture que les enquêtes amplifiées par amorces — à leurs plus proches parents cultivés dans de nombreux environnements. Eau de mer, eau douce, subsurface terrestre, sol, systèmes hypersalins, sédiment marin, sources chaudes, évents hydrothermaux, neige et bioréacteurs étaient dominés par des groupes non cultivés, de 22 à 87 pour cent appartenant à des genres, voire des classes, non cultivés. Les environnements humains et associés à l'humain faisaient exception, dominés par des genres cultivés à 45 à 97 pour cent. À l'échelle mondiale, les auteurs ont estimé que les genres non cultivés représentent environ 7,3 × 10²⁹ cellules, à peu près 81 pour cent du total, et que les phylums non cultivés sont surreprésentés dans les métatranscriptomes par rapport aux métagénomes — preuve que ces cellules ne sont pas seulement présentes mais actives.

La conséquence pratique est que la littérature sur le microbiome humain et celle de la microbiologie environnementale affrontent des versions différentes du même problème, et que les résultats sur la façon dont le séquençage suit la culture ne se transfèrent pas de l'une à l'autre.

## Les biais que porte un gène marqueur

Le séquençage d'amplicons remplace la boîte par un couple d'amorces, filtre de forme différente.

- **Couverture des amorces.** Aucun jeu d'amorces ne correspond à toutes les cibles ; les lignées présentant des mésappariements dans la région de liaison sont sous-représentées ou absentes, et les lignées touchées diffèrent selon les jeux d'amorces, si bien que deux études du même échantillon peuvent diverger systématiquement.
- **Nombre de copies.** L'opéron de l'ARNr existe en plusieurs copies, de 1 à 15 chez les bactéries et de 1 à 4 chez les archées. Une séquence fréquemment récupérée peut être un taxon à copies nombreuses d'abondance modeste ou un taxon à copies rares d'abondance forte, et corriger cela exige de connaître le nombre de copies d'organismes qui sont souvent les moins caractérisés.
- **Chimères et erreurs.** La PCR engendre des séquences hybrides à partir de produits d'extension partiels ; elles gonflent la diversité apparente si on ne les retire pas, et le retrait lui-même écarte de vraies séquences.
- **Région et résolution.** Des régions variables différentes du même gène résolvent des taxons différents : la profondeur taxonomique d'un résultat est donc fonction du fragment amplifié.

Aucun de ces biais n'est fatal, et tous sont corrigibles en principe. Ce qu'ils interdisent, c'est de traiter une table d'abondances relatives comme une observation directe — limite qui se cumule au problème compositionnel examiné dans [ce que les enquêtes de microbiome établissent](/fr/biology/microbiology/microbiomes-and-host-microbe-interactions).

## Des génomes sans organismes

La métagénomique shotgun supprime l'amorce, et le binning informatique regroupe ensuite les fragments assemblés en génomes putatifs. Un **génome assemblé à partir de métagénome** est une hypothèse sur les contigs venant d'une même population, et son utilité dépend d'une honnêteté sur la qualité de cette hypothèse.

Le Genomic Standards Consortium a fixé cette norme en 2017. Un brouillon de génome assemblé ou de génome amplifié unique de haute qualité doit être complet à plus de 90 pour cent avec moins de 5 pour cent de contamination, et doit coder les gènes d'ARNr 23S, 16S et 5S plus les ARNt d'au moins 18 des 20 acides aminés. Un brouillon de qualité moyenne est complet à au moins 50 pour cent avec moins de 10 pour cent de contamination ; en dessous de 50 pour cent, c'est un brouillon de faible qualité. Complétude et contamination sont elles-mêmes des estimations, dérivées de gènes marqueurs attendus en copie unique — ce qui les rend les moins fiables précisément pour les lignées profondément nouvelles qui rendent le binning intéressant, car les jeux de marqueurs ont été bâtis à partir de parents cultivés.

L'échelle atteinte par ces méthodes est réelle. La collection Unified Human Gastrointestinal Genome, publiée dans *Nature Biotechnology* en 2021, a assemblé 204 938 génomes non redondants représentant 4 644 procaryotes intestinaux et plus de 170 millions de séquences protéiques. Plus de 70 pour cent de ces espèces n'ont aucun représentant cultivé, et 40 pour cent des protéines n'ont aucune annotation fonctionnelle. La génomique en cellule unique offre une voie complémentaire — trier une cellule, amplifier son génome, le séquencer — qui donne un génome d'organisme unique sans ambiguïté mais généralement incomplet, et qui est évaluée selon les mêmes normes.

Les bases de données de référence posent un plafond supplémentaire : l'assignation taxonomique ne peut situer une séquence que face à ce qui a été déposé. La collection RefSeq du NCBI comptait 182 465 organismes dans la version 236 de juillet 2026, tous domaines du vivant confondus. Chaque lecture « non assignée » d'une enquête est autant un énoncé sur cette collection que sur l'échantillon.

## La culture est revenue

La réponse à tout cela n'a pas été d'abandonner la culture mais de l'industrialiser. La **culturomique** multiplie les conditions — des centaines de milieux, d'atmosphères, de durées d'incubation et d'étapes d'enrichissement — et crible les colonies obtenues par spectrométrie de masse et séquençage. Un axe parallèle a utilisé une culture phénotypique ciblée informée par les données métagénomiques : une étude de 2016 dans *Nature* a isolé 137 espèces bactériennes d'échantillons fécaux humains sains, les a archivées en cultures pures, et a inféré d'analyses génomiques et phénotypiques qu'au moins 50 à 60 pour cent des genres bactériens intestinaux forment des spores résistantes spécialisées dans la transmission d'hôte à hôte — ce qui est aussi une raison plausible pour laquelle tant d'anaérobies intestinaux se sont finalement révélés cultivables.

Une réserve doit figurer au dossier. Un article de culturomique précoce et très cité, publié dans *Nature Microbiology* en 2016, a été rétracté en novembre 2024. Le motif énoncé était documentaire et non microbiologique : les auteurs n'ont pas pu fournir la preuve d'une approbation éthique dans les pays supplémentaires où des échantillons avaient été collectés, au-delà de l'approbation française citée dans l'article. Plusieurs auteurs ont contesté la rétractation. L'approche de culture elle-même a été reproduite par d'autres équipes, mais un lecteur qui remonte la littérature rencontrera une référence fondatrice rétractée, et il vaut mieux savoir pourquoi.

## Ce que cela implique pour lire un résultat

Les méthodes ne sont pas interchangeables, et le désaccord entre elles est instructif plutôt qu'embarrassant. Un taxon abondant dans une enquête d'amplicons et absent d'un métagénome peut être un artefact de nombre de copies. Une capacité métabolique inférée d'un génome assemblé est une capacité, non une activité — l'écart entre les deux est le sujet de [la biogéochimie microbienne](/fr/biology/microbiology/microbial-biogeochemistry). Et une enquête dans un habitat mal échantillonné rapportera une forte nouveauté en partie parce que les bases de référence y sont minces.

La même logique que les écologues appliquent à l'effort d'échantillonnage dans [les comptages d'espèces](/fr/ecology/biodiversity/species-richness-explained) vaut ici avec plus de force, parce que la probabilité de détection d'un taxon microbien dépend non seulement de l'intensité de la recherche mais de celui, parmi plusieurs instruments incompatibles, avec lequel on a cherché. Les améliorations viennent autant de la plateforme que de la biologie, comme le couvrent [les technologies de séquençage de l'ADN](/fr/biology/biotechnology/dna-sequencing-technologies) ; des lectures plus longues réduisent l'écart d'assemblage, mais elles ne disent pas ce que fait un organisme.

## Sources

1. **mSystems** — [Phylogenetically novel uncultured microbial cells dominate Earth microbiomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6156271/). Fractions non cultivées par habitat, estimations mondiales de cellules et preuve d'activité par métatranscriptomes.
2. **Nucleic Acids Research** — [rrnDB: improved tools for interpreting rRNA gene abundance in bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383981/). Plages de nombre de copies de l'opéron d'ARNr et le biais qu'elles introduisent dans les enquêtes d'amplicons.
3. **Nature Biotechnology** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). Seuils de complétude, de contamination et de gènes marqueurs pour publier des génomes assemblés.
4. **Nature Biotechnology** — [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7801254/). Comptages de génomes et de protéines, et part des espèces sans représentant cultivé.
5. **Nature** — [Culturing of 'unculturable' human microbiota reveals novel taxa and extensive sporulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4890681/). Culture phénotypique ciblée de 137 espèces et prévalence de la sporulation.
6. **Nature Microbiology** — [Retraction note: Culture of previously uncultured members of the human gut microbiota by culturomics](https://pmc.ncbi.nlm.nih.gov/articles/PMC13179128/). La rétractation de 2024 et ses motifs énoncés.
7. **NCBI (National Library of Medicine)** — [Reference Sequence (RefSeq) database](https://www.ncbi.nlm.nih.gov/refseq/). Comptages d'organismes et d'enregistrements de la version 236 qui sous-tendent l'assignation taxonomique.
