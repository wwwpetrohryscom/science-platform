---
title: 'CRISPR : le système immunitaire bactérien devenu outil d''édition'
metaTitle: 'CRISPR : ce que la nucléase coupe, ce que la cellule décide'
excerpt: Une nucléase guidée coupe l'ADN ; la cellule décide de ce que devient la coupure. Cette division du travail explique pourquoi les inactivations de gènes sont routinières, les remplacements précis difficiles, et pourquoi l'étape limitante est la vectorisation, non le ciblage.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
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
_bodyHash: c42f8f57
---

La nucléase est le composant célèbre et le moins intéressant. Cas9 trouve une séquence et la coupe ; ce qui se produit ensuite est l'œuvre d'une machinerie de réparation que la cellule possédait déjà, et le résultat de cette réparation est le produit. Presque toutes les propriétés pratiques de l'édition du génome — pourquoi l'inactivation des gènes est devenue une routine, pourquoi les remplacements précis sont restés difficiles, pourquoi c'est la vectorisation et non le ciblage qui constitue la contrainte limitante en thérapeutique — découlent de cette division du travail entre une enzyme introduite et un processus biologique préexistant. C'est aussi la partie le plus souvent escamotée dans les résumés, qui tendent à décrire les ciseaux et à s'arrêter là. L'édition sur place est la plus récente des opérations fondamentales de la [boîte à outils biotechnologique élargie](/fr/biology/biotechnology/biotechnology-explained), et celle dont les limites sont les moins comprises.

## Un système anti-phage, lu à l'envers

Les systèmes CRISPR-Cas constituent l'[immunité adaptative](/fr/biology/physiology/the-immune-system-explained) des bactéries et des archées. Des fragments d'ADN viral ou plasmidique déjà rencontré sont stockés dans un locus à répétitions, transcrits et maturés en courts ARN guides, puis servent à reconnaître et à détruire la même séquence lors d'une nouvelle rencontre. Le système est une défense contre les [virus qui infectent les bactéries](/fr/biology/microbiology/viruses-explained), et il a évolué sous la pression de cette course aux armements, non pour quoi que ce soit qui ressemble à une commodité de laboratoire.

Le résultat de 2012 qui en a fait un outil a établi le mécanisme avec précision. Dans une classe de ces systèmes, un ARN CRISPR mature apparié à un ARN trans-activateur forme une structure à deux ARN qui dirige Cas9 vers l'introduction d'une cassure double brin ; le domaine HNH de l'enzyme coupe le brin complémentaire du guide et son domaine de type RuvC coupe l'autre. Le même travail a montré que les deux ARN pouvaient être fusionnés en une chimère unique obtenue par ingénierie, qui dirigeait toujours un clivage spécifique de séquence — l'étape qui a rendu le système programmable par la synthèse d'un unique ARN court plutôt que par la reconstruction d'un locus naturel.

Le ciblage n'est pas exempt de contraintes. Cas9 exige un court motif adjacent au protospacer immédiatement à côté de la séquence appariée, ce qui, dans le contexte natif, distingue l'ADN envahisseur de la copie stockée par la bactérie elle-même. Pour l'enzyme de *Streptococcus pyogenes*, la plus employée, ce motif est NGG, et des travaux ultérieurs ont quantifié le degré de permissivité de cette exigence : un motif NGG sur l'un ou l'autre brin apparaît en moyenne toutes les 8 paires de bases environ, si bien que la contrainte pèse surtout lorsqu'une édition doit tomber à une position exacte et non simplement à l'intérieur d'une région.

## La voie de réparation est le produit

Dans une cellule de mammifère, une cassure double brin est habituellement résolue par jonction d'extrémités, laquelle laisse fréquemment de petites insertions ou délétions. Dans une séquence codante, celles-ci décalent le cadre de lecture, et c'est pourquoi inactiver un gène est simple : on ne réalise pas une modification dessinée à l'avance, on exploite une voie de réparation sujette à l'erreur et l'on sélectionne les cellules où elle a raté de façon utile. Remplacer une séquence par une variante spécifiée exige une réparation dirigée par homologie avec une matrice fournie, voie restreinte à certaines phases du cycle cellulaire et qui rivalise mal avec la jonction d'extrémités. Le fonctionnement de ces deux voies est traité dans l'article sur la [réplication et la réparation de l'ADN](/fr/biology/genetics/dna-replication-and-repair).

L'écart d'efficacité est net dans les comparaisons directes. Dans les expériences qui ont introduit l'édition de bases, l'apport de Cas9, d'un guide et d'un donneur simple brin destiné à forcer la réparation dirigée par homologie a produit la conversion visée de la cytosine en thymine dans 0.5 pour cent des allèles en moyenne, tout en générant des insertions et des délétions dans 4.3 pour cent en moyenne. Le même article situe le rapport entre conversion visée et produits de jonction d'extrémités à 0.17 pour la Cas9 sauvage, contre 23 pour l'éditeur de bases de troisième génération qu'il présentait.

## Écrire sans casser les deux brins

Deux approches évitent entièrement la cassure double brin, et toutes deux ont été construites en fusionnant une nouvelle activité à une Cas9 inactivée ou nickase.

L'édition de bases fusionne une cytidine désaminase à Cas9 et convertit la cytosine en uracile dans une fenêtre d'environ cinq nucléotides à l'intérieur de la région définie par le guide ; la réplication fixe ensuite le changement en une substitution de C vers T (ou de G vers A). Avec une nickase ciblant le brin non édité et l'ajout d'un inhibiteur d'uracile glycosylase, la conversion rapportée a atteint approximativement 15 à 75 pour cent de l'ADN cellulaire total dans quatre lignées cellulaires, la formation d'indels restant typiquement inférieure ou égale à 1 pour cent.

Le prime editing fusionne une transcriptase inverse à une Cas9 nickase et emploie un ARN guide qui à la fois désigne le site et code la séquence souhaitée, laquelle est écrite dans le brin entaillé puis résolue par la cellule. Le travail fondateur a réalisé plus de 175 éditions dans des cellules humaines, dont les douze substitutions ponctuelles possibles ainsi que de petites insertions et délétions, avec des fréquences d'indels s'établissant en moyenne à 0.86 pour cent pour la plus simple de ses deux configurations ; la variante qui ajoute une seconde entaille pour orienter la réparation vers le brin édité a augmenté à la fois l'efficacité et les indels, ces derniers atteignant quelques dizaines de pour cent sur certains sites. Ses auteurs ont calculé qu'en principe l'approche pourrait s'adresser à environ 89 pour cent au plus des 75,122 variants humains pathogènes alors répertoriés dans ClinVar — un énoncé sur la classe de modifications que cette chimie peut réaliser, non une affirmation sur sa portée clinique.

| Approche | Cassure introduite | Modifications possibles | Indels non voulus rapportés |
| --- | --- | --- | --- |
| Nucléase et jonction d'extrémités | Double brin | Inactivation, non spécification | Le mécanisme recherché |
| Nucléase et matrice donneuse | Double brin | N'importe laquelle, en principe | ~4.3 % contre ~0.5 % de conversion |
| Édition de bases cytosine | Entaille seule | Une seule classe de transitions, fenêtre ~5 nt | Typiquement ≤1 % |
| Prime editing | Entaille seule | Toutes les substitutions, petites insertions et délétions | ~0.86 % pour la configuration de base |

## Mesurer ce qui ne peut pas être prédit

Un éditeur qui reconnaît une vingtaine de bases agira parfois sur des séquences ressemblant à la cible. Le résultat important des tests conçus pour le mesurer n'est pas que l'activité hors cible existe, mais qu'elle est mal prédite. La méthode GUIDE-seq capture un court oligonucléotide double brin dans les cassures et séquence les points d'insertion, ce qui donne une carte non biaisée à l'échelle du génome. Appliquée à treize guides dans deux lignées cellulaires humaines, elle a constaté que la plupart des sites identifiés n'avaient été détectés ni par les outils de prédiction informatique alors en usage ni par immunoprécipitation de la chromatine, et que les sites manqués comprenaient des séquences ne différant de la cible que par un seul mésappariement. Elle a également montré que le raccourcissement de l'ARN guide réduisait substantiellement les cassures hors cible, et que certains points chauds apparents de cassure étaient totalement indépendants de la nucléase.

Deux limites en découlent. Tout profil hors cible est propre au guide, au type cellulaire et à la sensibilité du test ; un résultat propre dans une lignée cellulaire ne se transpose pas. Et comme ces événements peuvent être plus rares que le plancher d'erreur du séquençage employé pour les détecter, la profondeur et les caractéristiques d'erreur de la [plateforme de séquençage](/fr/biology/biotechnology/dna-sequencing-technologies) fixent la limite de détection de l'affirmation de sécurité.

## C'est la vectorisation qui décide des maladies atteignables

La première thérapie approuvée fondée sur cette technologie est instructive quant à ce qui est aujourd'hui praticable. Elle traite la drépanocytose en prélevant hors de l'organisme les propres [cellules souches](/fr/biology/physiology/developmental-biology-explained) sanguines du patient et en utilisant Cas9 pour éteindre un amplificateur érythroïde-spécifique de *BCL11A* — un répresseur de l'hémoglobine fœtale — de sorte que les cellules éditées produisent de l'hémoglobine fœtale, laquelle gêne la falciformation. Elle a été approuvée aux États-Unis le 8 décembre 2023 pour les patients âgés de 12 ans et plus présentant des crises vaso-occlusives récurrentes, et en janvier 2024 pour la β-thalassémie dépendante des transfusions.

Deux traits méritent l'attention. L'édition ne répare pas la mutation causale ; elle désactive un élément régulateur pour qu'un autre gène, normalement éteint, soit exprimé, stratégie empruntée à ce que l'on sait de [la régulation de l'expression des gènes](/fr/biology/genetics/how-gene-expression-is-regulated) plutôt qu'à la biologie de la réparation. Et la procédure est ex vivo : les cellules sont éditées en boîte de culture, et le patient reçoit un conditionnement myéloablatif avant leur réinjection. Le bulletin thérapeutique décrivant les deux produits approuvés contre la drépanocytose note que cette combinaison de manipulation génomique ex vivo et de conditionnement laisse ouvertes des questions sur le risque hématologique à long terme auxquelles seul un suivi prolongé peut répondre. Éditer les tissus sur place, sans les prélever, demeure le problème le plus difficile et, pour l'essentiel, non résolu.

## Où passe la ligne de la gouvernance

Éditer des cellules somatiques affecte un seul patient. Éditer des gamètes ou des embryons affecte des descendants qui ne peuvent pas consentir et ne peuvent pas faire l'objet d'un suivi. Les recommandations de 2021 de l'Organisation mondiale de la santé traitent les applications somatiques, germinales et héréditaires dans un cadre de gouvernance unique tout en les séparant en pratique : elles proposent un registre de la recherche sur l'édition du génome humain, des mécanismes de signalement des travaux sortant des normes convenues et un engagement durable du public. Le droit national diverge considérablement en deçà de ce niveau, et la position pratique est que les applications héréditaires restent hors de la pratique clinique acceptée, tandis que les applications somatiques se poursuivent sous la réglementation thérapeutique ordinaire.

Ce que l'édition a changé pour la recherche est moins contesté que ce qu'elle a changé pour la médecine. Pouvoir désactiver un gène dans un type cellulaire choisi transforme beaucoup d'observations corrélatives en observations testables. Cela ne les transforme pas en explications : un phénotype qui apparaît lorsqu'une séquence est retirée montre que cette séquence est nécessaire dans ces conditions, ce qui est une affirmation plus étroite que celle qui est habituellement rapportée.

## Sources

1. **Science (manuscrit d'auteur, PubMed Central)** — [A programmable dual RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6286148/). Le mécanisme à deux ARN, le clivage propre à chaque domaine et la démonstration de la chimère unique.
2. **Nature (manuscrit d'auteur, PubMed Central)** — [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4873371/). Fenêtre d'édition de bases, efficacités de conversion et comparaison avec la réparation dirigée par homologie.
3. **Nature (manuscrit d'auteur, PubMed Central)** — [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). Portée du prime editing, fréquences d'indels, espacement des PAM et calcul ClinVar.
4. **Nature Biotechnology (manuscrit d'auteur, PubMed Central)** — [GUIDE-Seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pmc.ncbi.nlm.nih.gov/articles/PMC4320685/). Cartographie non biaisée des sites hors cible et échec des outils de prédiction.
5. **Genetics in Medicine Open (bulletin thérapeutique de l'ACMG)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Mécanisme, dates d'approbation et réserves sur le suivi à long terme.
6. **Organisation mondiale de la santé** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Cadre de gouvernance couvrant les applications somatiques, germinales et héréditaires.
