---
title: 'Dérive génétique : pourquoi la taille de population décide si la sélection compte'
metaTitle: Dérive génétique et taille efficace de population
excerpt: La dérive est le changement de fréquences alléliques dû au seul échantillonnage fini. Comme sa force varie à l'inverse de la taille efficace de population, ce seul paramètre décide quels coefficients de sélection sont visibles pour l'évolution et lesquels ne le sont pas.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - genetic-drift
  - effective-population-size
  - neutral-theory
  - conservation-genetics
  - population-genetics
related:
  - evolution-explained
  - natural-selection-and-adaptation
  - speciation-mechanisms
  - species-extinction-risk-assessment
pillar: evolution-explained
_bodyHash: 9052246e
---

Chaque génération est un échantillon. Une population produit bien plus de gamètes qu'il n'en devient de descendants, et ceux qui passent le filtre dépendent en partie de qui a trouvé un partenaire, de qui s'est fait manger avant de se reproduire, et de laquelle de deux copies également bonnes un parent a transmise. Le National Human Genome Research Institute définit la dérive génétique comme la fluctuation aléatoire de la fréquence d'un allèle dans une population, et note que, si l'effet est le plus fort dans les groupes petits et isolés, il peut être assez puissant pour fixer un variant ou l'effacer entièrement. C'est là tout le mécanisme. Les conséquences sont moins évidentes que la définition.

L'arithmétique est impitoyable. Dans une population diploïde de *N* individus reproducteurs, la variance de la fréquence d'un allèle introduite par une génération d'échantillonnage vaut p(1 − p)/2N, où p est la fréquence actuelle. Divisez la population par deux et le bruit d'échantillonnage double. Une nouvelle mutation neutre, présente en une seule copie, a une probabilité d'atteindre à terme la fixation égale à 1/(2N) — infime dans une grande population, mais une possibilité réelle dans une petite, sans référence aucune au fait qu'elle profite ou non à l'organisme.

La dérive n'a pas de direction, ce qui lui vaut d'être souvent décrite comme ne faisant rien de particulier. C'est un contresens. Au fil des générations, elle fait quelque chose de parfaitement prévisible : elle supprime de la variation. Les allèles errent jusqu'à atteindre zéro ou un, et chaque fixation ou perte est définitive à moins que la mutation ou la migration ne rétablisse le variant. La direction de chaque pas isolé est aléatoire ; la destination ne l'est pas. Situer ce processus par rapport aux autres est l'objet de la vue d'ensemble sur [ce qui change lorsqu'une population évolue](/fr/biology/evolution/evolution-explained).

## La taille efficace est un taux, pas un effectif

Le *N* de ces formules n'est pas le nombre d'animaux que compte un relevé. C'est la **[taille efficace de population](/en/glossary/effective-population-size)**, notée conventionnellement Ne et définie comme la taille d'une population idéalisée qui subirait la même quantité d'une propriété génétique donnée — la dérive, ou l'accumulation de consanguinité — que la population réelle. Une population de dix mille individus où vingt mâles engendrent presque toute la descendance dérive comme un groupe bien plus petit, et c'est ce nombre plus petit qui gouverne sa génétique.

Plusieurs traits ordinaires des populations réelles tirent Ne en dessous de l'effectif de recensement : des rapports des sexes déséquilibrés parmi les reproducteurs effectifs, une forte variance du succès reproducteur, le chevauchement des générations et la fluctuation de l'effectif au cours du temps, qui pèse lourdement du côté des années creuses. La génétique de la conservation s'est arrêtée sur un chiffre de travail pour cet écart. En l'absence de données génétiques, l'usage est d'employer l'effectif de recensement comme approximation, avec un rapport moyen empirique de 0.10 — une correction d'un ordre de grandeur appliquée par défaut, ce qui constitue en soi un constat sur la fréquence avec laquelle les deux quantités divergent.

Cette correction a désormais un poids politique. Le Cadre mondial de la biodiversité de Kunming-Montréal a retenu, comme indicateur phare, le nombre de populations d'une espèce dont la taille efficace dépasse 500, rapporté au nombre de celles qui sont en dessous. Que 500 soit la bonne limite est contesté : le seuil a été critiqué comme trop permissif, un seuil de 1,000 étant proposé à la place, et l'argument est le plus tranché pour les espèces à faible fécondité, chez lesquelles le rapport entre taille efficace et effectif de recensement est inhabituellement élevé. La façon dont des seuils de ce genre se comportent une fois devenus des instruments de reddition de comptes est un thème récurrent de [la conception des indicateurs de biodiversité](/fr/ecology/biodiversity/biodiversity-indicators-explained).

## De quel Ne parle-t-on

Le symbole unique dissimule toute une famille de grandeurs. Les tailles efficaces de consanguinité, de variance, de variance additive, de valeur propre, de coalescence et de métapopulation ne coïncident que si la population est fermée et à l'équilibre mutation-dérive, ce qui ne décrit presque aucune population sauvage. Chaque méthode d'estimation suppose une combinaison d'absence d'immigration, de panmixie, d'échantillonnage aléatoire, d'absence de structure génétique spatiale et d'équilibre — des hypothèses rarement examinées et rarement satisfaites.

La conséquence pratique est énoncée sans détour dans la littérature actuelle de génétique de la conservation : selon le plan d'échantillonnage et la méthode d'analyse, les estimations de Ne pour une même population peuvent différer de plusieurs ordres de grandeur. Une taille efficace publiée sans sa méthode, sans l'échelle spatiale supposée et sans la période à laquelle elle se rapporte est quasiment ininterprétable. Ce n'est pas une réserve marginale ; c'est le principal obstacle à l'usage même de Ne comme grandeur de suivi.

## Le seuil en dessous duquel la sélection cesse de compter

Si la dérive a sa place dans une discussion sur la sélection, c'est que les deux ne sont pas indépendantes. La sélection modifie les fréquences alléliques à un rythme fixé par le coefficient de sélection *s* ; la dérive les modifie à un rythme fixé par 1/Ne. Quand |s| est bien supérieur à 1/Ne, la sélection domine et le sort de l'allèle est pour l'essentiel déterministe. Quand |s| est plus petit, l'allèle se comporte comme s'il était neutre, si bénéfique ou si nuisible soit-il en principe. Une même mutation peut donc être visible pour la sélection chez une espèce et invisible chez une autre, purement en raison de la démographie — un point développé du côté de la sélection dans [la manière dont l'intensité de la sélection est réellement mesurée](/fr/biology/evolution/natural-selection-and-adaptation).

C'est le cœur de la **[théorie quasi neutre](/en/glossary/nearly-neutral-theory)**, qui postule une classe importante d'allèles suffisamment faiblement sélectionnés pour que les deux processus gouvernent leur dynamique. Comme les mutations légèrement délétères sont bien plus nombreuses que les légèrement avantageuses, la théorie prédit une corrélation négative entre le taux de substitution d'une lignée et sa taille efficace : les petites populations fixent des changements modérément nuisibles que les grandes populations épurent. La prédiction a résisté aux données comparatives. Chez les mammifères, les lignées à long temps de génération tendent à avoir des tailles efficaces plus petites, et le rapport de la divergence non synonyme à la divergence synonyme est en conséquence plus élevé dans la comparaison homme-chimpanzé que dans la comparaison souris-rat.

## Effets fondateurs et goulots d'étranglement ne font pas toujours ce qu'on attend

Un **effet fondateur**, dans la définition du NHGRI, est la réduction de la variabilité génomique qui survient lorsqu'un petit groupe se sépare d'une population plus grande, après quoi la nouvelle sous-population porte des génotypes ressemblant à ceux de ces quelques fondateurs plutôt qu'à ceux de la source. Un goulot d'étranglement est le même événement d'échantillonnage appliqué à une population qui reste en place tandis que ses effectifs s'effondrent. Tous deux réduisent la variation au moment où ils se produisent.

Ce qui suit est moins prévisible, et un cas antarctique montre pourquoi. Une colonie d'éléphants de mer du sud s'est établie sur la côte de la Terre Victoria il y a environ 7,000 ans, sur des plages que le retrait de la calotte n'avait rendues habitables qu'environ 8,000 ans avant le présent, et elle a fortement décliné il y a un millier d'années avant de s'éteindre. L'ADN ancien de la phase précoce de la colonie, entre environ 7,100 et 3,000 ans avant le présent, a livré 58 haplotypes répartis sur 49 sites ségrégeants ; la phase tardive en a donné 128 haplotypes et 79 sites ségrégeants. La population source probable, celle de l'île Macquarie, ne porte aujourd'hui que 15 haplotypes et 23 sites ségrégeants. La diversité de la colonie fondée a augmenté au lieu de diminuer, ce que les auteurs attribuent à une croissance rapide et à un effectif resté grand après l'installation. Un événement fondateur fixe le point de départ ; c'est la trajectoire démographique ultérieure qui décide de ce qu'il en subsiste.

Les génomes humains portent le même genre d'histoire. L'analyse coalescente de trente-quatre génomes issus de neuf populations retrouve un déclin partagé par toutes les lignées non africaines, d'environ 200,000 ans jusqu'à quelque 50,000 ans, compatible avec un goulot d'étranglement lors de la dispersion hors d'Afrique il y a environ 40,000 à 60,000 ans, suivi de très fortes augmentations — des tailles efficaces ancestrales supérieures au million dans certaines lignées d'Asie de l'Est il y a 2,000 ans. Ces inférences sont des grandeurs mises à l'échelle : les convertir en individus et en années exige de diviser par un [taux de mutation](/fr/biology/genetics/mutation-types-and-rates) supposé et de multiplier par un temps de génération supposé, de sorte que la forme de la courbe est bien mieux contrainte que sa hauteur absolue. Le rapport entre de telles histoires démographiques et l'apparition de lignées distinctes est repris dans [la manière dont naît l'isolement reproductif](/fr/biology/evolution/speciation-mechanisms).

## Les très petites populations, et le cas qui a réellement été suivi

L'intervention la mieux documentée est celle de la panthère de Floride. Au début des années 1990, la population comptait environ 20 à 25 adultes, avec la consanguinité qui va de pair, et en 1995 huit femelles de puma du Texas y ont été transloquées. L'hétérozygotie microsatellite moyenne par individu est passée à 25 % contre 18.4 % mesurés en 1993. Les chatons issus du croisement ont montré une survie accrue par rapport à ceux qui n'en étaient pas issus, et la fréquence de la cryptorchidie a baissé. Dans le sud de la Big Cypress National Preserve, une zone de 2,174 km², les effectifs de panthères ont été multipliés par huit, passant de 3 animaux à 25, et la population au sens large a atteint au moins 95 adultes en 2003.

Le résultat est une démonstration nette que la composante génétique du déclin des petites populations est réelle et, dans ce cas précis, réversible. Ce n'est pas une prescription générale : l'issue a dépendu de la disponibilité d'une population source de la même espèce, d'un habitat capable de soutenir la croissance et d'une gestion continue, et des cas isolés, même bien suivis, n'établissent pas une taille d'effet attendue. Ce que le dossier de la panthère établit, en revanche, c'est que lorsqu'une population devient assez petite pour que la dérive l'emporte sur la sélection, les pertes sont génétiques autant que démographiques — une considération qui figure désormais aux côtés de l'abondance et de l'aire de répartition dans [les évaluations formelles du risque d'extinction](/fr/ecology/conservation/species-extinction-risk-assessment) et dans la conception des [programmes de rétablissement des espèces appauvries](/fr/ecology/conservation/endangered-species-recovery-programmes).

## Sources

1. **National Human Genome Research Institute** — [Genetic drift (Talking Glossary of Genomic and Genetic Terms)](https://www.genome.gov/genetics-glossary/Genetic-Drift). Définition de la dérive et de sa dépendance à la taille de population et à l'isolement.
2. **National Human Genome Research Institute** — [Founder effect](https://www.genome.gov/genetics-glossary/Founder-Effect). Définition de l'effet fondateur et de la réduction de variabilité qu'il produit.
3. **Evolutionary Applications** — [Dealing with the complexity of effective population size in conservation practice](https://pmc.ncbi.nlm.nih.gov/articles/PMC11645448/). Définition et types de Ne, le rapport au recensement de 0.10, les seuils de 500 et de 1,000, et l'écart de plusieurs ordres de grandeur entre méthodes d'estimation.
4. **Genome Biology and Evolution** — [Near-neutrality, robustness, and epigenetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC3227401/). La théorie quasi neutre, la corrélation prédite entre taux et Ne, et la comparaison de divergence primates contre rongeurs.
5. **Science (Johnson et collègues)** — [Genetic restoration of the Florida panther](https://pmc.ncbi.nlm.nih.gov/articles/PMC6993177/). Détails de la translocation, variation de l'hétérozygotie, survie des chatons, et chiffres de population et de densité.
6. **Proceedings of the Royal Society B** — [Rapid increase in southern elephant seal genetic diversity after a founder event](https://pmc.ncbi.nlm.nih.gov/articles/PMC3924085/). Effectifs d'haplotypes et de sites ségrégeants pour la colonie de la côte de la Terre Victoria et sa population source.
7. **Nature Genetics** — [Inferring human population size and separation history from multiple genome sequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC4116295/). Trajectoires inférées de taille efficace, goulot d'étranglement de la sortie d'Afrique, et réserve d'échelle sur les tailles absolues.
