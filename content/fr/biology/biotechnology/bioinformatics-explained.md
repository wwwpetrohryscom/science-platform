---
title: 'Bio-informatique : quatre inférences entre le séquenceur et le résultat'
metaTitle: 'Bio-informatique : les quatre inférences d''un séquençage'
excerpt: 'Une séquence ne devient un résultat qu''après quatre inférences : alignement, assemblage, annotation et filtrage statistique. Cette page suit ces quatre étapes et la manière caractéristique dont chacune échoue.'
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
_bodyHash: ab26cde4
---

La version 273 de GenBank, publiée en août 2026, contient 8,236,878,868,450 bases réparties dans 267,383,895 enregistrements de séquences, et sa division whole-genome shotgun en contient 50,829,714,144,609 de plus, sur plus de 5.1 milliards d'enregistrements. La Sequence Read Archive du NCBI, qui conserve les données brutes plutôt que les enregistrements curés, avait dépassé 91 pétabases au dernier point de sa série de croissance publiée, en février 2024. Rien de tout cela n'est un résultat. Cela le devient seulement une fois qu'un logiciel a décidé d'où provient chaque lecture, ce que les lectures forment une fois assemblées, ce que la séquence assemblée fait vraisemblablement, et lesquelles des différences entre deux échantillons méritent d'être rapportées. Ce sont quatre inférences distinctes, et chacune a sa manière propre de se tromper.

Les instruments qui produisent les lectures — et la façon dont leurs longueurs de lecture et leurs profils d'erreur diffèrent — font l'objet de la page compagne sur [les plateformes de séquençage et ce à quoi chacune convient](/fr/biology/biotechnology/dna-sequencing-technologies). Ce qui suit se situe en aval, dans la couche qui transforme le signal en affirmation et dont dépend aujourd'hui l'essentiel de la [boîte à outils biotechnologique moderne](/fr/biology/biotechnology/biotechnology-explained).

## L'alignement note une similarité par rapport à une recherche, non par rapport à la biologie

L'alignement optimal par paires est résolu en un sens étroit. La programmation dynamique — globale dans la formulation de Needleman–Wunsch, locale dans celle de Smith–Waterman — renvoie l'alignement au score le plus élevé sous un schéma de score choisi, à un coût proportionnel au produit des longueurs des deux séquences. Face à une base de données de centaines de millions d'enregistrements, ce coût est inabordable : la recherche pratique est donc heuristique — amorcer sur de courtes correspondances exactes ou quasi exactes, étendre les plus prometteuses, et ne jamais examiner la plus grande partie de la base.

Deux conséquences en découlent, et toutes deux se perdent facilement. Le score lui-même dépend de la matrice de substitution et des pénalités de gap, qui encodent ensemble une hypothèse sur l'éloignement attendu entre les séquences ; changez l'hypothèse et le classement des résultats peut changer. Et la signification statistique attachée à un résultat dépend de la taille de l'espace exploré : la même paire de séquences devient donc moins surprenante à mesure que la base grandit. Une correspondance qui franchissait le seuil face à une base d'un million d'entrées n'a pas à le franchir face à une base de deux cents millions. Ce que rapporte un score d'alignement, c'est à quel point une similarité est inhabituelle *compte tenu de cette recherche*, ce qui n'est pas la même question que celle de savoir si deux molécules sont apparentées.

## Là où le graphe d'assemblage se ramifie

L'assemblage reconstruit de longues séquences à partir d'observations courtes en construisant un graphe — des chevauchements entre lectures, ou des mots de longueur fixe dans la formulation de De Bruijn — puis en y cherchant un chemin. Une répétition plus longue que les lectures qui la couvrent produit un point de branchement dépourvu de toute preuve locale sur la direction à prendre. Les issues habituelles sont l'effondrement, où plusieurs copies d'une répétition fusionnent en une seule, et la fragmentation, où l'assemblage s'arrête à la frontière.

Pendant deux décennies, la référence humaine en a porté les conséquences, et la mesure la plus claire en est la teneur en duplications segmentaires — de longs blocs quasi identiques, précisément ce qu'un assembleur limité par les répétitions fait s'effondrer. GRCh38 contenait 151.71 mégabases de telles séquences ; le premier assemblage complet en contient 201.93, un tiers de plus. Dans les régions où l'ancienne référence n'a aucun alignement primaire, l'assemblage complet annote 1,956 gènes.

Le point méthodologique n'est pas que la référence antérieure aurait été construite sans soin. C'est que les régions non résolues étaient absentes plutôt que signalées : une requête ne renvoyant rien à cet endroit était donc indiscernable d'une requête ne renvoyant rien ailleurs. L'absence dans une référence se lit comme une absence en biologie tant que rien ne marque la différence, et pendant l'essentiel de la période considérée rien ne le faisait. Le même problème au sein d'une communauté mixte, où il n'existe aucune référence, est ce que les niveaux de qualité des [génomes assemblés à partir de métagénomes](/fr/biology/biotechnology/metagenome-assembled-genomes-and-their-quality) servent à borner.

## L'essentiel de l'annotation est hérité, non observé

Le mot « annotation » suggère une observation. Ce n'est presque jamais le cas. La fonction est attribuée très majoritairement par transfert — une nouvelle séquence ressemble à une séquence caractérisée, elle en hérite donc la description — et l'étiquette obtenue devient à son tour disponible comme preuve pour le transfert suivant.

L'ampleur de l'asymétrie est frappante. UniProtKB comptait environ 246 millions d'enregistrements de séquences à la version 2024_04, et sa section revue manuellement se mesure en centaines de milliers. C'est l'annotation automatique qui comble l'écart : l'intégration d'une seule ressource de signatures dans l'annotateur à base de règles d'UniProt a produit 9,141 nouvelles règles et 119,579,654 nouvelles prédictions couvrant plus de 20 millions de séquences, et un système de nommage par apprentissage automatique a fourni des noms de protéines pour plus de 28 millions d'entrées jusque-là étiquetées non caractérisées.

Le mode de défaillance du transfert a été mesuré directement dans une étude portant sur 37 familles d'enzymes à forte couverture expérimentale. La section curée manuellement d'UniProtKB montrait une annotation erronée proche de zéro pour la plupart des familles, tandis que les bases annotées automatiquement se situaient en moyenne entre 5 et 63 pour cent selon les superfamilles examinées ; pour 10 des 37 familles, l'annotation erronée dépassait 80 pour cent dans au moins une base. La plupart des erreurs relevaient de la **surprédiction** — attribuer une fonction plus spécifique que ce que les preuves autorisent — et le taux a augmenté régulièrement entre 1993 et 2005, chaque étiquette fausse devenant le modèle de la suivante. La structure tridimensionnelle prédite offre désormais une ligne de preuve en partie indépendante, avec les réserves importantes exposées dans [ce que la prédiction de structure peut et ne peut pas établir](/fr/biology/biotechnology/protein-structure-prediction).

## Compter les hypothèses réellement testées

Les analyses omiques testent d'énormes quantités d'hypothèses à la fois, et l'arithmétique qui en découle est impitoyable. Le GWAS Catalog, dans sa version d'août 2026, recense 1,191,572 associations rapportées, issues de 7,797 publications et portant sur 562,145 variants — un corpus bâti en testant des centaines de milliers de variants par étude pour chaque caractère.

Deux corrections sont d'usage courant et elles répondent à des questions différentes. Le contrôle du risque d'erreur par famille exige une faible probabilité de *tout* faux positif, ce qui convient lorsqu'une seule affirmation erronée coûte cher. Le contrôle du taux de fausses découvertes, dans la formulation de Benjamini–Hochberg, borne au contraire la proportion attendue de faux positifs parmi les résultats que l'on rapporte, ce qui est la bonne monnaie lorsque la sortie est une liste restreinte destinée à un travail de suivi. Ni l'un ni l'autre ne rend fiable un résultat pris isolément. Un gène rapporté à un taux de fausses découvertes de 5 pour cent est membre d'une liste dont un membre sur vingt est censé être faux, et rien dans la statistique ne dit lequel. La même logique gouverne la lecture des études d'association, traitée en détail dans [ce que les études d'association pangénomique peuvent étayer](/fr/biology/genetics/genome-wide-association-studies-explained) ; elle vaut tout autant pour les criblages différentiels d'[expression génique](/fr/glossary/gene-expression), de protéomique et de métabolomique.

## Les mêmes lectures, analysées deux fois

Les choix d'analyse font partie du résultat, et leur contribution est mesurable. Une étude qui a partitionné 219 jeux de données humains de génome entier à haute profondeur selon la constance de l'accord entre différents pipelines d'appel de variants a trouvé que 20 à 30 pour cent du génome relèvent d'un territoire de faible concordance, et que la concordance dépend principalement du contexte génomique plutôt que du jeu de données employé — ce qui signifie que le désaccord est systématique et prévisible plutôt qu'un bruit aléatoire.

La version de la référence compte tout aussi concrètement. Le Genome in a Bottle Consortium, hébergé par le NIST, produit les appels de variants de référence sur lesquels les pipelines sont notés, et ces jeux de référence excluaient près de 400 gènes d'intérêt médical parce qu'ils sont trop répétés ou trop polymorphes pour être appelés avec confiance. Un ensemble curé couvrant 273 de ces 395 gènes a montré que des duplications fausses présentes dans GRCh37 ou GRCh38 provoquent des variants manqués propres à la référence ; leur masquage a fait passer la sensibilité dans les gènes concernés de 8 pour cent à 100 pour cent. Deux laboratoires disposant de lectures identiques, ne différant que par la version de la référence, peuvent donc publier des listes de variants différentes en suivant l'un et l'autre les pratiques standard.

| Étape | Ce qui est inféré | Ce qui la fait échouer |
| --- | --- | --- |
| Alignement | D'où provient une séquence | Taille de l'espace de recherche ; hypothèses de score |
| Assemblage | Quelle était la molécule sous-jacente | Répétitions plus longues que les lectures |
| Annotation | Ce que fait la séquence | Transfert depuis une étiquette déjà fausse |
| Tests | Quelles différences sont réelles | Nombre d'hypothèses ; région exclue des jeux de référence |

Rien de tout cela ne plaide pour une moindre confiance dans l'analyse de séquences en général ; les jeux de référence de la discipline sont d'une qualité inhabituelle, et les chiffres de concordance et d'annotation erronée cités plus haut existent parce que le domaine a mesuré ses propres taux d'erreur. Cela plaide pour rapporter ce qui détermine si un chiffre est reproductible. Une liste de variants sans sa version de référence, un appel fonctionnel sans son code de preuve, une liste de résultats sans son espace de recherche ni sa méthode de correction sont chacun incomplets d'une manière invisible pour le lecteur et lourde de conséquences en aval — le même écart entre un jeu de données et l'affirmation qu'on en tire que la note sur [l'incertitude perdue entre le jeu de données et le titre](/fr/insight/uncertainty-lost-between-dataset-and-headline) retrace dans un autre domaine.

## Sources

1. **NCBI** — [GenBank and WGS statistics](https://www.ncbi.nlm.nih.gov/genbank/statistics/). Nombres de bases et d'enregistrements de la version 273 pour GenBank et pour la division WGS.
2. **NCBI** — [Sequence Read Archive growth](https://www.ncbi.nlm.nih.gov/sra/docs/sragrowth/). Série de croissance publiée pour les fonds de séquences brutes.
3. **Science / PMC** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Taille de l'assemblage T2T-CHM13, séquence non alignée, teneur en duplications segmentaires et gènes nouvellement annotés.
4. **PLOS Computational Biology** — [Annotation error in public databases: misannotation of molecular function in enzyme superfamilies](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000605). Taux d'annotation erronée mesurés et progression de la surprédiction au fil du temps.
5. **Nucleic Acids Research / PMC** — [UniProt: the Universal Protein Knowledgebase in 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701636/). Nombres d'enregistrements et ampleur des règles et des prédictions d'annotation automatique.
6. **EMBL-EBI** — [NHGRI-EBI GWAS Catalog](https://www.ebi.ac.uk/gwas/home). Nombres actuels d'associations curées, d'études et de variants.
7. **Bioinformatics / PMC** — [ReliableGenome: annotation of genomic regions with high/low variant calling concordance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5903559/). Proportion du génome située en régions de faible concordance sur 219 jeux de données de génome entier.
8. **Nature Biotechnology / PMC** — [Curated variation benchmarks for challenging medically relevant autosomal genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC9117392/). Gènes exclus des jeux de référence standard et effet des fausses duplications de la référence sur la sensibilité.
9. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Appels de variants de référence et stratification des régions génomiques difficiles.
