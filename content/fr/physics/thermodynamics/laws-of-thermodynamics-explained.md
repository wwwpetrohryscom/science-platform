---
title: 'Les principes de la thermodynamique : ce que chacun interdit réellement'
excerpt: Les quatre principes sont des interdictions, non des recettes. Chacun exclut une classe de machine ou de processus, et ensemble ils fixent ce que signifie la température, ce que la comptabilité de l'énergie doit équilibrer et dans quel sens un processus peut se dérouler.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - thermodynamics
  - second-law
  - temperature
  - entropy
  - energy-conversion
related:
  - entropy-explained
  - heat-engines-and-efficiency-limits
  - heat-transfer-conduction-convection-radiation
  - earth-energy-budget-and-the-second-law
---
[La thermodynamique](/en/glossary/thermodynamics) est un ensemble d'interdictions. Chacun de ses quatre principes dit que quelque chose ne peut pas être fait, et chacun a survécu aux théories microscopiques censées l'expliquer — le calorique, puis la mécanique classique, puis la théorie classique des champs. C'est pourquoi un raisonnement du XIXᵉ siècle sur la vapeur contraint encore, sans modification, une cellule solaire, un réfrigérateur domestique et une bactérie.

Ils sont aussi cités plus librement qu'ils ne sont employés. « L'énergie se conserve » et « l'entropie augmente » sont des slogans qui abandonnent les conditions qui leur sont attachées, et c'est dans ces conditions que loge la confusion sur le mouvement perpétuel, les affirmations de rendement et les systèmes vivants.

## Le principe zéro est ce qui donne un sens à un thermomètre

Le principe zéro énonce que l'équilibre thermique est transitif : si deux corps sont chacun en équilibre avec un troisième, ils sont en équilibre entre eux. Cela ressemble à de la tenue de livres. C'est la raison pour laquelle un nombre unique peut représenter une propriété partagée par tout système en équilibre mutuel — et donc la raison pour laquelle un instrument mis en contact avec un corps renseigne sur le corps et non seulement sur l'instrument.

Ce nombre repose désormais sur une constante définie plutôt que sur une substance. Depuis mai 2019, le SI fixe la constante de Boltzmann à exactement 1,380649 × 10⁻²³ J K⁻¹, et le kelvin en découle ; la fiche CODATA ne porte aucune incertitude parce qu'il n'y en a pas à porter. La définition précédente, adoptée en 1954, faisait du kelvin 1/273,16 de la température du point triple de l'eau, et le NIST relève la faiblesse de ce dispositif : extrapoler depuis le point triple de l'eau vers les très hautes ou très basses températures est problématique, ce qui explique que 21 autres points de définition aient été fixés par accord international. Le zéro absolu reste où il était, à −273,15 °C.

**La température n'est pas une quantité d'énergie.** Une étincelle et une baignoire peuvent se trouver à la même température avec des énergies différant de plusieurs ordres de grandeur. La température est la variable qui s'égalise lorsque deux systèmes peuvent échanger de l'énergie — ce qu'affirme exactement le principe zéro, et tout ce qu'il affirme.

## Le premier principe : l'énergie se conserve, et la chaleur n'est pas une chose que contient un corps

Le premier principe étend la conservation de l'énergie à la chaleur : la variation d'énergie interne d'un système égale la chaleur reçue moins le travail fourni par le système. Son contenu réside dans la différence entre les termes. L'énergie interne est une **[fonction d'état](/en/glossary/state-function)** — elle ne dépend que de l'état actuel du système, si bien qu'un aller-retour la ramène à son point de départ. Chaleur et travail sont des **grandeurs de chemin** : elles décrivent de l'énergie franchissant une frontière au cours d'un processus, et leur partage dépend de la manière dont le processus a été conduit.

La conséquence pratique est que « quelle quantité de chaleur cet objet contient-il » n'est pas une question bien formée. Un objet détient de l'énergie interne ; la chaleur est cette énergie en transit sous une différence de température, et le travail est de l'énergie en transit par une force agissant sur un déplacement. Le même changement d'état peut être atteint par de nombreuses combinaisons des deux, et c'est pourquoi le premier principe seul ne désigne jamais un rendement — il équilibre les comptes et s'arrête là.

Ce qu'il interdit, c'est le mouvement perpétuel de première espèce : un dispositif cyclique qui fournirait du travail sans apport d'énergie équivalent. L'interdiction est catégorique plutôt que mécanique — elle s'applique sans inspecter la tringlerie proposée, car tout cycle ramène l'énergie interne à sa valeur initiale et les comptes doivent alors s'équilibrer à travers la frontière.

## Le deuxième principe : celui qui a un sens

Deux énoncés classiques sont équivalents. Clausius : aucun processus cyclique ne peut avoir pour seul résultat le transfert de chaleur d'un corps froid vers un corps chaud. Kelvin–Planck : aucun processus cyclique ne peut avoir pour seul résultat la conversion complète en travail de la chaleur d'une source unique. Les deux se résument par la forme entropique — dans un système isolé, l'entropie ne décroît pas — et tous deux interdisent le mouvement perpétuel de seconde espèce, l'appareil qui tirerait du travail utile de la seule chaleur ambiante. Ce qu'est l'entropie, et pourquoi « désordre » en est une mauvaise glose, fait l'objet de l'article compagnon sur [ce que mesure réellement l'entropie](/fr/physics/thermodynamics/entropy-explained).

C'est le seul principe ici qui distingue le passé de l'avenir, et celui dont la conséquence d'ingénierie est la plus nette : le plafond de toute machine cyclique dépend des températures de ses sources et de rien d'autre, une borne développée avec des données de centrales réelles dans [les machines thermiques et leurs limites de rendement](/fr/physics/thermodynamics/heat-engines-and-efficiency-limits).

Il est aussi statistique, et ce n'est pas une échappatoire. La relation de fluctuation de Crooks fixe de combien une trajectoire directe est plus probable que son inverse, étant donné le travail échangé, et elle a été [testée directement en tirant sur des molécules d'ARN uniques](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/) avec des pinces optiques : l'énergie libre de repliement retrouvée à partir des distributions de travail était de 62,8 ± 1,5 kBT pour une épingle à cheveux, en accord avec un calcul indépendant. Les distributions de travail de dépliement et de repliement de cette expérience se recouvrent et se croisent à la variation d'énergie libre, si bien que des tirages individuels tombent des deux côtés — certains allant localement « à l'envers » — tandis que l'ensemble obéit à l'inégalité. Le deuxième principe est un énoncé sur des probabilités écrasantes dans des systèmes à grand nombre de particules, non une impossibilité logique à l'échelle de quelques-uns.

## Le troisième principe : le zéro absolu comme asymptote

Le troisième principe énonce que l'entropie d'un système tend vers une constante quand la température tend vers le zéro absolu, et que cette constante est nulle pour un cristal parfait. Deux conséquences en découlent. Les entropies absolues prennent un sens, parce qu'il existe un point de référence commun à partir duquel intégrer — c'est la raison même de l'existence des entropies standard tabulées. Et le refroidissement devient progressivement plus difficile : les capacités thermiques tendent vers zéro en même temps que la température, si bien que chaque étage supplémentaire de refroidissement dispose de moins de matière à travailler.

L'énoncé d'inatteignabilité a été récemment précisé. Une [dérivation générale publiée dans *Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/) en 2017 en a quantifié le coût : un refroidissement parfait jusqu'au zéro absolu exige qu'au moins une ressource — le volume du bain froid ou le travail consommé — soit infinie, et pour un bain de rayonnement la température atteignable varie comme une puissance inverse de la durée de refroidissement. Le zéro absolu n'est pas seulement difficile en pratique ; la difficulté est un théorème, et le théorème en donne le prix.

## Les quatre principes côte à côte

| Principe | Ce qu'il affirme | Ce qu'il interdit | Ce qu'il rend signifiant |
| --- | --- | --- | --- |
| Zéro | L'équilibre thermique est transitif | Une échelle de température dépendante de l'instrument | La température comme propriété partagée |
| Premier | L'énergie, chaleur comprise, se conserve | Du travail à partir de rien — mouvement perpétuel de première espèce | L'énergie interne comme fonction d'état |
| Deuxième | L'entropie d'un système isolé ne décroît pas | Du travail depuis une source unique — mouvement perpétuel de seconde espèce | L'entropie, et un sens pour le temps |
| Troisième | L'entropie tend vers une constante quand la température tend vers zéro | Atteindre le zéro absolu avec des ressources finies | L'entropie absolue, référencée à zéro |

## La réversibilité est une limite, pas une procédure

Chacune des bornes ci-dessus est dérivée pour un processus réversible : conduit si lentement, par un déséquilibre si faible, qu'il pourrait être parcouru à l'envers par les mêmes états sans laisser de résidu. Rien de réel n'est réversible, car une vitesse finie exige une force motrice finie, et une force motrice finie produit de l'entropie. C'est pourquoi les bornes sont approchées et jamais atteintes, et pourquoi maximiser le rendement et maximiser la puissance sont deux optimisations différentes aux réponses différentes. L'écart en jeu n'est pas mince : le parc charbonnier américain a consommé 10 777 Btu de combustible par kilowattheure produit en 2024, selon l'Energy Information Administration, si bien qu'un peu moins d'un tiers de l'énergie du combustible est arrivé sous forme d'électricité.

Cela explique aussi une division du travail qui fait trébucher. La thermodynamique fixe le sens et le plafond ; elle ne dit rien de la vitesse à laquelle quoi que ce soit se produit. La vitesse à laquelle l'énergie franchit effectivement une frontière est une question de transport, régie par la conduction, la convection et le rayonnement avec leurs propres lois d'échelle — le sujet de [comment la chaleur se déplace réellement](/fr/physics/thermodynamics/heat-transfer-conduction-convection-radiation), et la raison pour laquelle un processus thermodynamiquement permis peut rester inutilement lent.

## Là où les principes mordent hors des moteurs

Une pompe à chaleur délivre à un bâtiment plus d'énergie thermique que l'électricité qu'elle consomme, ce qui est couramment lu comme une violation. Ce n'en est pas une : la machine déplace de la chaleur au lieu d'en fabriquer, et le deuxième principe limite le rapport par l'écart de température plutôt que d'interdire un rapport supérieur à un. Plus l'écart est faible, plus le rapport atteignable est élevé, ce qui rend les machines couplées au sol attrayantes là où le sol est disponible. Le département de l'Énergie des États-Unis note que les températures à environ 30 pieds de profondeur restent toute l'année entre environ 10 °C et 15 °C, source bien plus douce en janvier que l'air extérieur.

Les systèmes vivants suscitent la même mauvaise lecture. Un organisme construit et entretient une structure improbable, diminuant sa propre entropie, tout en exportant une augmentation plus grande vers son environnement ; la comptabilité se boucle parce que l'organisme est ouvert, comme l'expose le raisonnement sur les flux d'énergie derrière [la production primaire dans les écosystèmes](/fr/ecology/ecosystems/primary-production-and-energy-flow). La version planétaire — lumière solaire absorbée à haute température, infrarouge rayonné à basse température — est développée dans [le bilan énergétique de la Terre comme machine thermique](/fr/physics/thermodynamics/earth-energy-budget-and-the-second-law) ; le même raisonnement appliqué à une source de rayonnement chaude et à une cellule froide donne [les limites thermodynamiques du photovoltaïque](/fr/physics/thermodynamics/thermodynamic-limits-of-photovoltaics), et il revient à chaque étape des chaînes de conversion décrites dans [la manière dont les systèmes énergétiques sont assemblés](/fr/physics/energy/energy-systems-explained).

## Ce que le cadre ne règle pas

La thermodynamique classique est une théorie des états d'équilibre et des transitions entre eux : elle ne donne pas de constantes de temps et reste muette sur les mécanismes. Les états stationnaires loin de l'équilibre — une cellule vivante, une atmosphère en convection, un laser — ne sont couverts par aucun principe extrémal ayant le statut du deuxième principe, malgré des propositions répétées. La production maximale d'entropie en est la plus discutée, et elle demeure une proposition contestée plutôt qu'une loi établie.

La température elle-même devient ambiguë hors équilibre : un système dont les parties se relaxent à des vitesses très différentes peut se voir attribuer plusieurs températures défendables à la fois. Les systèmes dominés par la gravité sont plus étranges encore, avec des capacités thermiques négatives et, pour les trous noirs, une entropie proportionnelle à l'aire plutôt qu'au volume. Les principes survivent aux deux cas ; les raccourcis bâtis par-dessus, souvent pas.

## Sources

1. **NIST** — [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction). Redéfinition du kelvin dans le SI, ancienne définition par le point triple et zéro absolu en degrés Celsius.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). Les sept constantes définissantes du SI et la valeur fixée de la constante de Boltzmann depuis le 20 mai 2019.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). Valeur exacte et unités, sans incertitude assignée.
4. **Nature Communications** — [A general derivation and quantification of the third law of thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/). Coût en ressources du refroidissement et loi d'échelle de la température atteignable avec la durée de refroidissement.
5. **Nature** — [Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/). Test sur molécule unique d'une relation de fluctuation et énergie libre de repliement retrouvée.
6. **U.S. Department of Energy** — [Geothermal heat pumps](https://www.energy.gov/hgeo/geothermal/geothermal-heat-pumps). Températures du sol peu profond qui fixent l'écart de température des machines couplées au sol.
7. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Conversion moyenne combustible-électricité du parc de centrales en exploitation.
