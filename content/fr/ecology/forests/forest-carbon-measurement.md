---
title: 'Mesurer le carbone forestier : allométrie, placettes, lidar et budget d''erreur'
metaTitle: 'Mesurer le carbone forestier : allométrie, placettes, lidar'
excerpt: Personne ne pèse une forêt. Tout chiffre publié de carbone forestier est le produit d'une chaîne de substitutions allant du mètre ruban au total mondial, et le plus grand réservoir de ce total est celui qui est le plus mal mesuré.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - forest-carbon
  - allometry
  - lidar
  - forest-inventory
  - measurement-uncertainty
related:
  - forest-ecosystems-explained
  - forest-degradation-vs-deforestation
  - deforestation-statistics-explained
  - boreal-forests-and-permafrost-interactions
pillar: forest-ecosystems-explained
---

Personne n'a jamais pesé une forêt. Tout chiffre de carbone qu'on lui attache est le produit d'une chaîne de substitutions : un diamètre de tronc tient lieu de masse d'arbre, un modèle statistique tient lieu de la récolte qui l'aurait mesurée, une placette tient lieu de paysage, et un satellite tient lieu des placettes qui n'ont jamais été installées. Chaque substitution est défendable et chacune a une variance. Comprendre un chiffre de carbone forestier, c'est savoir quel maillon de cette chaîne est le plus lâche — et ce n'est presque jamais celui qu'on suppose.

## Cinq réservoirs, inégalement connus

Les inventaires de gaz à effet de serre partagent le carbone forestier en cinq réservoirs, suivant les lignes directrices du GIEC pour les inventaires nationaux. L'évaluation mondiale rapporte les cinq, et la couverture des déclarations entre eux est extrêmement inégale.

| Réservoir | Stock mondial, 2025 | Part du total | Pays déclarants | Surface forestière couverte |
| --- | --- | --- | --- | --- |
| Carbone organique du sol | 329 Gt | 46 % | 77 | 70 % |
| Biomasse aérienne | 247 Gt | 35 % | 215 | ~100 % |
| Biomasse souterraine | 65,9 Gt | 9 % | 215 | ~100 % |
| Litière | 41,1 Gt | 6 % | 75 | 66 % |
| Bois mort | 30,3 Gt | 4 % | 101 | 78 % |

Le total est de 714 gigatonnes de carbone, soit environ 172 tonnes par hectare. L'asymétrie de ce tableau est le fait central du sujet. Le plus grand réservoir est déclaré par environ un tiers du nombre de pays qui déclarent le deuxième. Et des deux réservoirs à couverture quasi complète, un seul est mesuré : la biomasse souterraine est presque toujours déduite du chiffre aérien plutôt que déterrée, si bien que son apparente complétude est héritée et non gagnée.

## Du mètre ruban à la tonne de carbone

La mesure de terrain enregistre le diamètre du tronc à hauteur de poitrine, parfois la hauteur totale, et une identité d'espèce d'où l'on tire la densité spécifique du bois. Un **modèle allométrique** convertit tout cela en masse aérienne sèche. Le modèle pantropical de référence a été ajusté sur une base mondiale d'arbres directement récoltés — [4 004 tiges d'au moins 5 cm de diamètre sur 58 sites](https://pubmed.ncbi.nlm.nih.gov/24817483/) — et a trouvé que lorsque diamètre, hauteur et densité spécifique du bois sont tous inclus, un seul modèle tient à travers les types de végétation tropicale sans effet régional détectable. C'est un résultat solide, assorti d'une réserve qui compte en pratique : la hauteur n'est fréquemment pas mesurée. Là où elle manque, un substitut fondé sur une variable de stress bioclimatique surpasse les modèles antérieurs sans hauteur, mais les auteurs conseillent de développer des relations locales diamètre-hauteur partout où c'est possible, parce que c'est dans cette substitution qu'entre le biais.

La masse devient ensuite du carbone par un facteur de conversion. La fraction carbone par défaut du GIEC pour la matière sèche est de 0,47 tonne de carbone par tonne de matière sèche. La masse souterraine n'est presque jamais mesurée : on la déduit de la masse aérienne par un rapport racines/parties aériennes, l'exemple travaillé des lignes directrices employant 0,29 pour des peuplements portant 50 à 150 tonnes de [biomasse aérienne](/en/glossary/aboveground-biomass) par hectare. Les totaux mondiaux sont cohérents avec ces conventions — une biomasse vivante de 647 gigatonnes portant 313 gigatonnes de carbone implique un rapport proche de 0,48 — mais la cohérence avec une valeur par défaut n'est pas une confirmation indépendante, car dans beaucoup de pays c'est la valeur par défaut qui a engendré le chiffre.

## Les placettes sont la couche sur laquelle tout le reste est calibré

Un inventaire forestier national est la seule partie de cette chaîne qui consiste à mesurer des arbres. Le principe de conception est un réseau statistiquement réparti de placettes permanentes remesurées selon un cycle fixe : aux États-Unis, les placettes sont remesurées tous les cinq à dix ans selon la localisation, avec relevé de données de station et d'arbre pour les tiges vivantes et mortes sur pied, le bois mort au sol, les sols et la végétation du sous-étage étant ajoutés sur un sous-ensemble. La remesure est ce qui convertit une estimation de stock en estimation de flux, et c'est pourquoi les estimations de puits fondées sur l'inventaire pèsent ce qu'elles pèsent.

Deux erreurs différentes vivent ici et sont souvent confondues. L'**erreur d'échantillonnage** est l'incertitude venant d'avoir mesuré une partie du paysage plutôt que sa totalité ; elle décroît de façon prévisible à mesure qu'on ajoute des placettes. L'**erreur de modèle** est l'incertitude de la conversion allométrique appliquée à chaque arbre de chaque placette ; ajouter des placettes ne la réduit pas, puisque c'est le même modèle qui est réutilisé. L'erreur d'échantillonnage est aussi la plus facile des deux à calculer, si bien qu'un intervalle construit sur elle seule sous-estime le total — et le manque ne s'annonce pas.

## Ce que le lidar a changé, et ce qu'il n'a pas changé

Le lidar spatial a remplacé l'étape d'extrapolation plutôt que l'étape de mesure. La mission Global Ecosystem Dynamics Investigation de la NASA tire trois lasers produisant huit transects au sol d'empreintes d'environ 25 mètres espacées d'environ 60 mètres le long de la trace, les transects étant distants d'environ 600 mètres, ce qui donne une fauchée transversale proche de 4,2 km. Son produit maillé infère la densité moyenne de biomasse aérienne pour des mailles de 1 km à partir de l'échantillon qui y tombe, face à une exigence de mission voulant que 80 pour cent des mailles se situent dans une erreur type de 20 tonnes par hectare ou de 20 pour cent de l'estimation, la plus grande des deux.

Cette dernière phrase mérite d'être lue deux fois. La cible d'exactitude est énoncée par maille kilométrique, comme une erreur type, avec un plancher — et la documentation du produit décompose elle-même son incertitude en deux parties : la covariance du modèle biomasse terrain-lidar, et la variance d'échantillonnage due au fait que les faisceaux échantillonnent la maille au lieu de la couvrir. Aucune des deux ne disparaît avec davantage d'orbites. La couverture est également bornée : l'instrument observe entre environ 51,6° nord et sud, ce qui exclut l'essentiel de la zone boréale, où la question du carbone est de toute façon dominée par les sols, comme l'expose [le problème du carbone du sol boréal](/fr/ecology/forests/boreal-forests-and-permafrost-interactions).

Le radar aborde la même cible par une autre voie physique. La mission Biomass de l'Agence spatiale européenne, lancée le 29 avril 2025, embarque le premier radar à synthèse d'ouverture en bande P en orbite, avec une antenne de 12 mètres à 666 km d'altitude, choisie parce que les longueurs d'onde plus grandes pénètrent la canopée et renvoient un signal de la structure ligneuse plutôt que des feuilles.

## Où se trouve réellement le budget d'erreur

Pas dans les arbres. Le réservoir sol est le plus grand et le plus lâche, et la raison est banale : les pays déclarent le carbone organique du sol jusqu'à une profondeur de leur choix. La moyenne mondiale pondérée par la surface forestière est de 41 cm, mais les chiffres régionaux vont de 30 cm en Asie et en Océanie et 32 cm en Europe à 70 cm en Amérique du Nord et centrale. Un stock déclaré à 30 cm et un stock déclaré à 70 cm ne sont pas la même grandeur, et ils sont additionnés dans un total mondial unique. Pour les pays qui n'ont pas déclaré, les valeurs ont été dérivées en superposant une grille mondiale de carbone du sol à 1 km ne couvrant que les 30 premiers centimètres avec des couches de couvert forestier.

Les facteurs de conversion portent leur propre dispersion. L'évaluation d'incertitude des lignes directrices cite une densité de base du bois à 10 à 40 pour cent, un matériel sur pied à environ 8 pour cent dans les pays industrialisés et 30 pour cent ailleurs, une surface forestière à environ 3 pour cent dans les pays industrialisés, et une combinaison de télédétection et de relevé au sol qu'elle dit pouvoir descendre à 10 à 15 pour cent. Ce n'est pas peu au regard des changements que l'on cherche à détecter.

Le résultat se propage jusqu'au budget mondial. L'évaluation du GIEC pour l'ère industrielle, couvrant 1750 à 2019, place les émissions cumulées des combustibles fossiles et de l'industrie à 445 ± 20 pétagrammes de carbone et le flux cumulé de l'usage des terres, de son changement et de la foresterie à 240 ± 70 pétagrammes — une incertitude relative environ six fois plus grande sur le terme terrestre. Que le terme terrestre soit la partie la moins contrainte [du budget mondial du carbone](/fr/ecology/earth-systems/carbon-cycle-explained) est une conséquence directe de la chaîne décrite ci-dessus.

## Pourquoi l'arithmétique décide de ce qu'un crédit certifie

Le carbone forestier est tarifé comme s'il était mesuré. Il est modélisé, et les hypothèses du modèle sont généralement des valeurs par défaut héritées. La même évaluation qui publie le tableau ci-dessus note que ses chiffres divergent de ce que les pays soumettent au titre de la convention climat, parce que les deux systèmes utilisent des définitions de forêt différentes, parce que la convention ne porte que sur la forêt *gérée*, et parce que les méthodes de calibration, de reclassement et de prévision diffèrent. Deux totaux officiels de carbone pour les forêts d'un même pays peuvent donc différer sans qu'aucun soit faux.

Pour un projet revendiquant un tonnage précis sur une parcelle précise, la conséquence pratique est que l'incertitude attachée au chiffre est héritée de chaque étape en amont, et qu'elle est la plus large là où le carbone du sol est inclus et là où l'on emploie des facteurs par défaut plutôt qu'ajustés localement. Cet écart entre ce qui est certifié et ce qui est mesurable est examiné plus avant dans la note sur [ce qu'achètent réellement les marchés de compensation carbone](/fr/insight/carbon-offset-outsourcing-science), et le problème parallèle du comptage de surface plutôt que de masse est exposé dans [la construction des statistiques de déforestation](/fr/ecology/forests/deforestation-statistics-explained). La question de cadrage — ce qui compte comme forêt avant même toute pesée — relève de [la vue d'ensemble des définitions et de la structure forestières](/fr/ecology/forests/forest-ecosystems-explained).

## Sources

1. **FAO** — [Global Forest Resources Assessment 2025: growing stock, biomass and carbon](https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/growing-stock-biomass-carbon.html). Stocks de carbone réservoir par réservoir, couverture des déclarations, profondeurs de sol par région, et divergence avec le rapportage conventionnel.
2. **Global Change Biology, via PubMed** — [Improved allometric models to estimate the aboveground biomass of tropical trees](https://pubmed.ncbi.nlm.nih.gov/24817483/). La base d'arbres récoltés derrière le modèle allométrique pantropical et le rôle de la hauteur et de la densité spécifique du bois.
3. **GIEC** — [Lignes directrices 2006 pour les inventaires nationaux de gaz à effet de serre, volume 4, chapitre 4 : terres forestières](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf). Valeurs par défaut de fraction carbone et de rapport racines/parties aériennes, et évaluation d'incertitude du chapitre pour la densité du bois, le matériel sur pied et la surface.
4. **NASA ORNL DAAC** — [GEDI L4B Gridded Aboveground Biomass Density, Version 2](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html). Géométrie d'échantillonnage de l'instrument, couverture en latitude, exigence d'exactitude de la mission et les deux composantes de variance.
5. **Agence spatiale européenne** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). La mission radar en bande P, sa date de lancement et la configuration de son instrument.
6. **USDA Forest Service** — [Forest Inventory and Analysis](https://research.fs.usda.gov/programs/fia). Conception à placettes permanentes, intervalle de remesure et variables relevées sur placettes et sous-placettes.
7. **GIEC AR6 WG1, chapitre 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Flux cumulés fossiles et d'usage des terres avec leurs incertitudes évaluées.
8. **FAO** — [Global Forest Resources Assessment 2025](https://openknowledge.fao.org/handle/20.500.14283/cd6709en). L'évaluation complète, y compris le chapitre méthodologique derrière les chiffres de couverture des déclarations.
