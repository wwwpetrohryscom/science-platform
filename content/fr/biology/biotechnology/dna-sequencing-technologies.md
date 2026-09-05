---
title: 'Technologies de séquençage : longueur de lecture, profil d''erreur et usages'
metaTitle: 'Plateformes de séquençage : longueur de lecture et erreurs'
excerpt: Choisir une plateforme de séquençage tient moins à l'exactitude affichée qu'à la forme de ses erreurs et à la longueur de ses lectures. Voici comment diffèrent les grandes familles, pourquoi les exigences de profondeur varient, et ce que la courbe des coûts laisse de côté.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
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
_bodyHash: 96e484dc
---

Demandez quelle plateforme de séquençage est la plus exacte et vous obtiendrez une réponse inutile, car les plateformes échouent de manières différentes. Une méthode qui commet des erreurs de substitution rares et dispersées et une méthode qui commet des erreurs fréquentes mais prévisibles dans un contexte de séquence précis peuvent afficher la même exactitude et convenir à des problèmes entièrement différents. La [longueur de lecture](/en/glossary/read-length), la forme des erreurs et le coût par base sont les trois axes qui décident réellement d'un projet, et ils s'échangent entre eux. Lire l'ADN est la capacité qui a rendu praticable le reste de la [boîte à outils biotechnologique](/fr/biology/biotechnology/biotechnology-explained), et c'est aussi celle dont l'économie est le plus souvent citée hors contexte.

## Trois façons de transformer une molécule en chaîne de caractères

La méthode par terminaison de chaîne décrite en 1977 lit la séquence en fabriquant des copies qui s'arrêtent à des bases définies. Des analogues didésoxynucléotidiques agissent comme inhibiteurs terminateurs de chaîne de l'ADN polymérase, produisant un jeu emboîté de fragments dont les longueurs indiquent la position de chaque base ; la démonstration d'origine portait sur le bactériophage φX174. Elle reste employée pour de courtes confirmations sur un locus unique, parce qu'elle est simple et que ses modes de défaillance sont visibles sur le tracé.

Le séquençage par synthèse en lectures courtes l'a remplacée pour tout ce qui se fait à grande échelle. Des millions d'amas séparés dans l'espace sont étendus une base à la fois et imagés en parallèle, produisant des lectures de quelques centaines de bases à très faible taux d'erreur par base, dominé par des substitutions plutôt que par des insertions ou délétions. Sa contrainte n'est pas l'exactitude mais la longueur : une lecture plus courte qu'une répétition ne peut pas être placée sans ambiguïté dans un génome qui contient cette répétition plus d'une fois.

Les plateformes en lectures longues sur molécule unique séquencent une molécule sans amplification. L'assemblage complet du génome humain publié en 2022 en a utilisé deux ensemble et décrit directement leurs propriétés : des lectures à consensus circulaire d'environ 20 kbp en moyenne avec un taux d'erreur proche de 0,1 pour cent, et des lectures nanopores ultralongues dépassant 100 kbp à une exactitude par lecture nettement plus basse. Les deux sont complémentaires — l'une apporte la précision au niveau de la base, l'autre franchit des structures que rien d'autre ne traverse.

| Famille | Longueur de lecture typique | Caractère dominant de l'erreur | Ce qu'elle résout |
| --- | --- | --- | --- |
| Terminaison de chaîne | Moins d'une kilobase | Faible, visible sur le tracé | Loci uniques, vérification de constructions |
| Synthèse en lectures courtes | Centaines de bases | Substitutions, dépendantes du contexte | Variants en séquence unique, comptage profond |
| Lectures longues à consensus circulaire | Environ 20 kbp | Faible et largement aléatoire | Assemblage à travers la plupart des répétitions |
| Lectures nanopores ultralongues | Plus de 100 kbp | Plus élevée, en partie systématique | Duplications segmentaires, centromères |

## L'erreur aléatoire se moyenne ; l'erreur systématique non

La distinction qui compte le plus en pratique est de savoir si une erreur revient à la même position pour la même raison. Les erreurs aléatoires indépendantes sont diluées par la profondeur : séquencez un site trente fois et une erreur aléatoire de 1 pour cent devient négligeable dans le consensus. Une erreur systématique survit à n'importe quelle couverture, parce que chaque lecture commet la même faute.

Le séquençage nanopore a fourni l'exemple récent le plus net. Une évaluation de 2024 de la reconstruction de génomes bactériens a trouvé que l'ancienne chimie R9.4.1 donnait une exactitude médiane par lecture de 96,8 pour cent (intervalle interquartile 95,9-97,4), montant à 98,8 pour cent (98,1-99,2) avec R10.4.1, et à une médiane de 99,2 pour cent (98,8-99,5) lorsque les lectures étaient appelées avec un modèle de basecalling plus récent. Point crucial, une partie de l'erreur résiduelle n'était pas du bruit mais un motif reproductible : des substitutions guanine vers adénine et cytosine vers thymine apparaissaient systématiquement dans la plupart des combinaisons de séquençage, de basecalling et d'assemblage testées, et sont attribuées à des sites méthylés qui égarent les modèles de basecalling. Le correctif fut un basecaller entraîné sur de l'ADN bactérien natif, non un séquençage plus profond. La même étude a trouvé que des assemblages en lectures longues seules, avec la nouvelle chimie et le nouveau basecaller, récupéraient plus de 99 pour cent des séquences codantes annotées à une couverture de 30× ou plus, comparable aux assemblages hybrides combinant lectures longues et courtes.

C'est la leçon générale. Quand les erreurs restantes d'une plateforme dépendent du contexte, le correctif vit dans la couche d'interprétation — modèles de basecalling, polissage, graphes d'assemblage — plutôt que dans la chimie, ce qui explique en partie pourquoi la frontière entre séquençage et [analyse informatique des données de séquence](/fr/biology/biotechnology/bioinformatics-explained) n'est pas nette.

## Pourquoi les exigences de profondeur diffèrent tant

La couverture n'est pas un réglage de qualité ; c'est une exigence statistique dérivée de ce que l'on cherche à détecter. Pour un variant germinal présent dans la moitié ou la totalité des molécules séquencées, une profondeur modérée suffit, et le chiffre de 30× ci-dessus est la couverture à laquelle les assemblages bactériens de cette étude atteignaient une récupération quasi complète des séquences codantes. Détecter un variant porté par une petite fraction des cellules — une mutation somatique sous-clonale, un pathogène minoritaire dans un mélange — exige une profondeur qui varie en raison inverse de cette fraction, plus un taux d'erreur assez bas pour que le vrai signal se distingue du bruit de fond à cette fréquence. Voilà pourquoi le même instrument peut être décrit comme adéquat pour une application et sans espoir pour une autre sans contradiction. La même arithmétique gouverne [les enquêtes de communautés microbiennes par séquençage](/fr/biology/microbiology/culturing-and-sequencing-microbes), où le nombre de lectures d'un taxon reflète le choix des amorces et la profondeur avant de refléter l'abondance. Les tests par séquençage de [l'activité hors cible en édition du génome](/fr/biology/biotechnology/crispr-genome-editing-explained) affrontent exactement ce problème : les événements comptés peuvent être plus rares que le plancher d'erreur de la plateforme elle-même.

Les projets de génome de référence illustrent le haut de la gamme. À côté de ses lectures longues, l'assemblage humain complet s'est appuyé sur environ 100× de données en lectures courtes et 70× de données de conformation chromosomique comme preuves d'appui, avec des cartes optiques et des cartes brin-spécifiques en cellule unique.

## Ce que les lectures longues ont réellement apporté

L'assemblage complet publié en 2022 totalise 3 054 815 472 paires de bases d'ADN nucléaire plus un génome mitochondrial de 16 569 paires de bases. Par rapport à la référence précédente, il a ajouté ou corrigé 238 Mbp de séquence non syntenique, dont 182 Mbp n'avaient aucun alignement primaire sur l'assemblage antérieur. Dans le matériel nouvellement résolu, il a rapporté 3 604 gènes absents de la référence antérieure, dont 140 prédits comme codant des protéines, et 99 gènes prédits codant des protéines tombaient dans des régions sans aucun alignement antérieur.

Le point n'est pas que la référence a grandi de quelques pour cent. C'est que les régions manquantes ne manquaient pas au hasard — c'étaient les parties répétitives, dupliquées et riches en satellites du génome, systématiquement exclues parce que les lectures courtes ne pouvaient pas y être placées. Toute une génération d'études a décrit le génome comme si ces régions étaient absentes, forme spécifique et corrigible de [l'écart entre une séquence de référence et un génome](/fr/biology/genetics/what-is-a-genome).

## La courbe des coûts et ce qu'elle n'a jamais chiffré

Les chiffres de coût que le National Human Genome Research Institute publie pour ses centres financés sont cités sans cesse et surinterprétés couramment. Leur tableau enregistre environ 95,3 millions de dollars par génome en septembre 2001, 7,1 millions en octobre 2007, 3,1 millions trois mois plus tard, et environ 525 dollars en mai 2022 — une chute de plus de cinq ordres de grandeur. L'institut date l'écart le plus net avec le comportement de doublement du matériel informatique à janvier 2008, quand ses centres sont passés à des instruments de deuxième génération, ce qui est exactement là qu'apparaît cette chute de plus de moitié en un seul trimestre. La comptabilité de l'institut pour l'ère de la référence est tout aussi précise : le premier brouillon du génome humain a coûté de l'ordre de 300 millions de dollars dans le monde, l'affinage jusqu'à une séquence finie ajoutant environ 150 millions.

Ce que ces chiffres incluent, c'est la production : réactifs, instruments, main-d'œuvre, systèmes d'information de laboratoire, traitement initial des données. Ce qu'ils excluent, c'est l'assurance qualité, l'alignement sur une référence, l'assemblage, l'appel de variants et l'annotation. Autrement dit, la courbe publiée chiffre la génération de lectures, non la production d'un résultat interprétable. Un laboratoire qui annonce un prix par échantillon ne cite que rarement la même grandeur, et une comparaison entre les deux n'en est pas une.

## Ce que l'étalonnage ne peut toujours pas certifier

Les affirmations d'exactitude reposent sur des matériaux de référence, et ceux-ci ont des limites. Le consortium Genome in a Bottle du National Institute of Standards and Technology caractérise un petit jeu d'échantillons humains — un génome pilote et deux trios familiaux — et distribue à la fois des jeux de variants de référence et des fichiers de stratification qui balisent les terrains difficiles : homopolymères, répétitions en tandem, complexe majeur d'histocompatibilité. Ces stratifications existent parce que la performance à l'intérieur diffère de la performance à l'extérieur, et un étalonnage qui rapporte un seul chiffre d'exactitude sur tout le génome sans elles moyenne cette différence.

La conséquence pour lire une affirmation est étroite et pratique. Une exactitude annoncée vaut pour les régions couvertes par l'étalonnage, dans les types d'échantillons couverts, avec la chaîne d'analyse qui l'a produite. Les régions exclues d'un étalonnage ne sont pas certifiées faciles ; elles ne sont simplement pas certifiées.

## Sources

1. **Proceedings of the National Academy of Sciences** — [DNA sequencing with chain-terminating inhibitors](https://pmc.ncbi.nlm.nih.gov/articles/PMC431765/). La méthode didésoxy de 1977 et sa première application.
2. **Nature (manuscrit d'auteur, PubMed Central)** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Taille de l'assemblage, séquence ajoutée, comptages de gènes et technologies de lecture employées.
3. **Microbial Genomics** — [Evaluation of the accuracy of bacterial genome reconstruction with Oxford Nanopore R10.4.1 long-read-only sequencing](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170131/). Distributions d'exactitude par lecture, erreurs systématiques liées à la méthylation et effets de couverture.
4. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). La série coût par génome et le périmètre de cette comptabilité.
5. **National Human Genome Research Institute** — [The cost of sequencing a human genome](https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost). Coûts de l'ère de la référence et ce que les estimations incluent et excluent.
6. **National Institute of Standards and Technology** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Matériaux de référence, jeux de variants d'étalonnage et stratifications pour les régions difficiles.
