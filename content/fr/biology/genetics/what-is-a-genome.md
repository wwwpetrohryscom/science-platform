---
title: Ce qu'est un génome, et pourquoi sa taille ne dit presque rien
excerpt: Un génome est l'ADN complet d'une cellule. Sa taille, son nombre de gènes et sa fraction fonctionnelle sont trois mesures distinctes, qui répondent à trois questions distinctes et dont la fiabilité diffère beaucoup.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
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
_bodyHash: be175958
---

Un génome est l'ensemble complet de l'ADN que porte une cellule — les chromosomes nucléaires, plus ce que les mitochondries et, chez les plantes, les plastes portent pour leur propre compte. Cette définition ne fait pas débat. Presque tout ce qui se construit par-dessus relève de la mesure, et les trois mesures auxquelles on recourt le plus souvent — la taille d'un génome, le nombre de gènes qu'il contient et la part de ce génome qui fait quelque chose — diffèrent énormément par leur degré d'établissement. Seule la première est à peu près stabilisée. Le substrat moléculaire est traité à part dans [ce qu'est l'ADN et ce qu'il ne détermine pas](/fr/biology/genetics/what-is-dna) ; cette page porte sur la couche comptable qui se superpose à la molécule.

## La seule mesure qui a fini par devenir précise

La taille d'un génome peut se mesurer de deux manières, et il ne s'agit pas de la même opération. La cytométrie en flux et la densitométrie mesurent la quantité physique d'ADN d'un noyau, rapportée sous forme de valeur C, en picogrammes ou en gigapaires de bases. Le séquençage mesure la longueur de l'assemblage : le nombre de bases qu'un assembleur a pu ordonner.

Pendant des décennies, le second nombre a été inférieur au premier, parce que les régions répétées mettaient en échec les lectures courtes. L'annotation d'Ensembl pour GRCh38.p14 rapporte une longueur de golden path de 3,099,750,718 paires de bases — un chiffre qui incluait des lacunes de plusieurs mégabases au niveau des centromères et sur les bras courts des chromosomes acrocentriques. L'assemblage CHM13 du consortium Telomere-to-Telomere les a comblées : il rapporte 3,054,815,472 bp d'ADN nucléaire, plus un génome mitochondrial de 16,569 bp, et ajoute 238 Mbp qui ne s'alignent pas de façon colinéaire sur GRCh38, dont 182 Mbp sans aucun alignement primaire. Cet assemblage a aussi chiffré précisément le contenu répété : 1,647.81 Mbp, soit 53.94 pour cent de la séquence, sont répétitifs, les seules duplications segmentaires en représentant 6.61 pour cent.

Il vaut la peine de préciser ce que « complet » voulait dire ici. Les blocs d'ADN satellite et les répétitions d'ADNr ont été résolus en tant que séquence, en grande partie grâce aux [plateformes de séquençage à lectures longues](/fr/biology/biotechnology/dna-sequencing-technologies) capables de les enjamber. Ce que font ces blocs n'a pas été résolu en les lisant.

## Un facteur 2,400, et rien de tout cela ne suit la complexité

Ce qu'il est le plus utile de savoir sur la taille des génomes, c'est qu'elle varie énormément et ne prédit que très peu. Les seules plantes vasculaires couvrent un facteur d'environ 2,400 en quantité d'ADN. Le record appartient désormais à une fougère à fourche de Nouvelle-Calédonie, *Tmesipteris oblanceolata*, avec 160.45 Gbp par 1C — plus de cinquante fois le génome humain, chez une plante de quelques centimètres de haut. Elle a détrôné l'angiosperme *Paris japonica*, à 148.89 Gbp.

C'est le **[paradoxe de la valeur C](/en/glossary/c-value-paradox)** : la quantité d'ADN par cellule n'entretient aucune relation constante avec le degré d'élaboration d'un organisme. Le paradoxe s'est dissous une fois l'ADN répété correctement caractérisé. L'essentiel de la différence entre un génome de 3 Gbp et un génome de 160 Gbp tient à l'expansion des éléments transposables et à la polyploïdie conservée, non à des gènes supplémentaires. Ce qui survit à cette résolution est un avertissement plutôt qu'une énigme : la taille d'un génome est une grandeur réelle, mesurable avec précision, et un mauvais indicateur de presque tout ce que l'on voudrait par ailleurs savoir de l'organisme.

## Le nombre de gènes n'a cessé de baisser pendant cinquante ans

C'était plutôt le nombre de gènes qui devait être la mesure informative. Son histoire est une longue descente. L'estimation préliminaire de Friedrich Vogel, en 1964 — obtenue en divisant le génome par la longueur d'un gène de la taille de celui de l'hémoglobine, en supposant que le génome entier codait des protéines et que les gènes étaient ininterrompus —, aboutissait à 6.7 millions. Le rapport conjoint de 1990 des National Institutes of Health et du Department of Energy des États-Unis retenait 100,000. Les inventaires d'étiquettes de séquences exprimées, jusqu'au milieu des années 1990, se regroupaient entre 50,000 et 100,000. En 2000, les estimations allaient de 28,000 à 57,000, et une décennie plus tard, une revue de tout cet exercice arrêtait sa propre meilleure estimation à 22,333.

Les annotations actuelles situent le nombre de gènes codant des protéines juste en dessous de 20,000. Le jeu de gènes d'Ensembl fondé sur GENCODE pour l'assemblage primaire GRCh38.p14 — tel qu'annoté dans la version 116 d'Ensembl, construite sur GENCODE 50 — recense 19,878 gènes codants, aux côtés de 42,155 gènes non codants et de 15,205 pseudogènes ; l'annotation de CHM13 prédisait 19,969 gènes codant des protéines sur 63,494 au total. La convergence importe moins que ce qu'elle révèle : le nombre de gènes codants est désormais stable à quelques centaines près, alors que les nombres de gènes non codants et de pseudogènes ne le sont pas, car ils dépendent de critères d'annotation qui bougent encore.

En regard, le nématode *Caenorhabditis elegans* — 97 mégabases, soit environ un trentième du génome humain — était crédité, en 1998, de plus de 19,000 gènes. Un ver d'environ un millier de cellules somatiques et un être humain ont des nombres de gènes codant des protéines du même ordre. Ce qui les distingue tient surtout à la manière dont ces gènes sont mobilisés, sujet traité dans [la régulation de l'expression des gènes](/fr/biology/genetics/how-gene-expression-is-regulated).

## « Fonctionnel » fait deux choses à la fois

Le nombre le plus contesté de la génomique est la fraction du génome humain qui est fonctionnelle, et le différend est définitionnel avant d'être empirique. Le consortium ENCODE a rapporté en 2012 que ses essais pouvaient « attribuer des fonctions biochimiques à 80% du génome » — 80.4 pour cent selon son propre décompte, soit la part du génome couverte par au moins un élément identifié par ENCODE. La classe la plus large était l'ARN : 62 pour cent des bases génomiques étaient représentées de façon reproductible dans des molécules d'ARN longues séquencées ou dans des exons annotés, une mesure de la [transcription à l'échelle du génome](/fr/glossary/transcription), même si la majeure partie se situe dans des introns ou à proximité de gènes. Les régions enrichies en modifications d'histones couvraient 56.1 pour cent, la chromatine ouverte 15.2 pour cent et la fixation de facteurs de transcription 8.1 pour cent ; selon l'évaluation la plus conservatrice du consortium lui-même, 8.5 pour cent des bases tombent dans un motif de fixation de facteur de transcription ou dans une empreinte DNase.

Une critique détaillée parue dans *Genome Biology and Evolution* a soutenu que cela revient à employer une définition par rôle causal — cette séquence fait quelque chose de mesurable — là où la [biologie évolutive](/fr/biology/evolution/natural-selection-and-adaptation) emploie une définition par effet sélectionné : cette séquence est maintenue par la sélection purificatrice parce que sa perte coûte en valeur sélective. Selon le second critère, la génomique comparative situe la fraction conservée en dessous de 15 pour cent, l'analyse la plus complète la plaçant près de 5 pour cent, et à environ 9 pour cent une fois ajoutée la contrainte propre à une lignée, inférée à partir de la variation intraspécifique. Le point le plus acéré de cette critique est arithmétique : si 80 pour cent du génome est fonctionnel et si environ 10 pour cent seulement est soumis à la sélection, alors quelque 70 pour cent du génome devraient être fonctionnels tout en étant immunisés contre la mutation délétère.

Les auteurs d'ENCODE eux-mêmes ont publié deux ans plus tard une réponse réfléchie, reconnaissant dans *PNAS* que les régions biochimiquement actives couvrent une fraction du génome bien plus grande que les régions conservées au cours de l'évolution, et que les approches biochimique, évolutive et génétique répondent chacune à une question différente. C'est la lecture honnête. Aucun des deux chiffres n'est une erreur ; ce sont des mesures de propriétés différentes, et un titre qui convertit « biochimiquement actif » en « nécessaire » a changé l'affirmation.

## Un génome de référence unique a toujours été un compromis

GRCh38 n'est le génome de personne. Il a été construit de façon opportuniste à partir de clones de chromosomes artificiels bactériens issus de plusieurs individus, ce qui en fait une mosaïque d'haplotypes servant de système de coordonnées plutôt qu'un spécimen — ce qui signifie que tout appel de variant s'exprime comme un écart par rapport à une référence arbitraire. Le contenu en gènes diffère réellement d'un individu à l'autre : une estimation fondée sur trois génomes séquencés chiffrait de 73 à 87 gènes la différence entre deux personnes quelconques, essentiellement par variation des duplications segmentaires.

Le brouillon publié en 2023 par le Human Pangenome Reference Consortium remplace la ligne unique par un graphe. Il rassemble 47 assemblages diploïdes phasés provenant d'individus génétiquement divers, et ajoute 119 millions de paires de bases de séquence euchromatique polymorphe ainsi que 1,115 duplications de gènes par rapport à GRCh38, dont environ 90 millions de ces bases proviennent de la variation structurale. Utilisé pour analyser des données de lectures courtes, il a réduit de 34 pour cent les erreurs de découverte des petits variants et augmenté de 104 pour cent le nombre de variants structuraux détectés par haplotype. La même logique est depuis longtemps la norme en microbiologie, où une espèce est décrite par un génome cœur assorti d'un ensemble accessoire qui varie d'une souche à l'autre — le cadre utilisé dans [les bactéries et les archées comme domaines distincts](/fr/biology/microbiology/bacteria-and-archaea-explained).

Trois limites demeurent. Quarante-sept assemblages constituent un échantillon mince de la diversité humaine, et les populations représentées ne sont pas également pondérées. L'annotation accuse un retard sur l'assemblage : les 3,604 gènes prédits uniquement dans CHM13 se situent en grande partie dans des régions restées inaccessibles jusqu'à ce que les lectures longues les atteignent, et ce sont surtout des paralogues putatifs plutôt que des modèles expertisés. Et rien de tout cela ne touche à la question fonctionnelle : connaître chaque base de chaque génome laisserait encore ouverte la question de savoir lesquelles comptent, parce que c'est une question de sélection et de phénotype, non de séquence. Le rythme auquel de nouvelles différences entrent dans un génome est traité dans [les types de mutations et les taux par génération](/fr/biology/genetics/mutation-types-and-rates), et la machinerie qui maintient ce rythme aussi bas qu'il l'est, dans [la réplication et la réparation de l'ADN](/fr/biology/genetics/dna-replication-and-repair).

## Sources

1. **T2T Consortium, *Science*** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Longueur de l'assemblage CHM13, séquence ajoutée par rapport à GRCh38, prédictions de gènes, contenu en répétitions et en duplications segmentaires.
2. **EMBL-EBI, Ensembl** — [Human assembly and gene annotation](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation). Longueur du golden path de GRCh38.p14 et décomptes GENCODE des gènes codants, non codants et des pseudogènes.
3. **Fernández et collègues, *iScience*** — [A 160 Gbp fork fern genome shatters size record for eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11270024/). Taille record d'un génome d'eucaryote et amplitude des tailles de génomes chez les plantes vasculaires.
4. **Consortium de séquençage de C. elegans, *Science*** — [Genome sequence of the nematode C. elegans](https://pubmed.ncbi.nlm.nih.gov/9851916/). Taille du génome et nombre de gènes pour la comparaison avec le nématode.
5. **Pertea et Salzberg, *Genome Biology*** — [Between a chicken and a grape: estimating the number of human genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2898077/). Histoire des estimations du nombre de gènes humains et variation du contenu en gènes d'un individu à l'autre.
6. **ENCODE Project Consortium, *Nature*** — [An integrated encyclopedia of DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3439153/). L'affirmation des 80 pour cent de fonction biochimique.
7. **Graur et collègues, *Genome Biology and Evolution*** — [On the immortality of television sets: "function" in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/). La critique par effet sélectionné et les estimations de fonctionnalité fondées sur la conservation.
8. **Kellis et collègues, *PNAS*** — [Defining functional DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4035993/). La conciliation, par les auteurs d'ENCODE eux-mêmes, des définitions biochimique, évolutive et génétique.
9. **Human Pangenome Reference Consortium, *Nature*** — [A draft human pangenome reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172123/). Nombre d'assemblages, séquence ajoutée et effet mesuré sur la découverte de variants.
