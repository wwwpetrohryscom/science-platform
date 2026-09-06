---
title: 'Production primaire : ce que mesurent GPP, NPP et NEP, et comment chacune est estimée'
metaTitle: 'Production primaire : ce que mesurent GPP, NPP et NEP'
excerpt: La production primaire brute n'est jamais mesurée directement à l'échelle de l'écosystème, seulement déduite. Ce que signifient GPP, NPP et NEP, quel instrument se tient derrière chaque chiffre, et pourquoi les moitiés continentale et océanique reposent sur des méthodes différentes.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - primary-production
  - carbon-flux
  - eddy-covariance
  - satellite-products
related:
  - food-webs-and-trophic-structure
  - what-is-an-ecosystem
  - carbon-cycle-explained
  - ocean-color-observations
pillar: what-is-an-ecosystem
---

Tout chiffre indiquant la quantité de carbone fixée par la biosphère est le produit d'un modèle, non la lecture d'un instrument. Ce n'est pas une critique de ces chiffres ; c'est un fait qui tient à la grandeur elle-même. Aucun dispositif ne peut être pointé vers une forêt ou une étendue d'océan et sommé de rapporter la photosynthèse. Ce qui se mesure, c'est une concentration, une réflectance, une masse de tissus récoltés ou le flux vertical de dioxyde de carbone au-dessus d'un couvert végétal — et chacune de ces grandeurs ne devient une estimation de production qu'une fois des hypothèses appliquées.

Quatre termes circulent pour ce qui semble être une seule grandeur, et ils ne diffèrent que par la respiration déjà soustraite. En confondre deux modifie une réponse d'un facteur deux, ce qui suffit à inverser le signe d'un [budget carbone](/fr/ecology/climate-change/carbon-budgets-and-remaining-emissions). Les réactions qui assurent la fixation sont exposées dans [le fonctionnement de la photosynthèse](/fr/biology/cells/photosynthesis-explained) ; la difficulté commence ici un cran plus haut, là où un processus à l'échelle de la feuille doit être converti en un nombre valant pour un continent — la même traduction qui oblige à décrire un écosystème par [les taux qui le traversent plutôt que par la surface qu'il recouvre](/fr/ecology/ecosystems/what-is-an-ecosystem).

## Quatre grandeurs et les soustractions qui les séparent

| Grandeur | Ce dont il s'agit | Comment un nombre est produit | Ordre de grandeur mondial |
| --- | --- | --- | --- |
| Production primaire brute (GPP) | Carbone total fixé par la photosynthèse avant qu'une partie n'en soit respirée | Jamais observée directement ; extraite par partition d'un flux net, ou modélisée à partir de la lumière absorbée | Continents : 123 ± 8 à 147 Pg C yr⁻¹ selon la méthode |
| Respiration autotrophe | Carbone respiré par les organismes photosynthétiques eux-mêmes | Modélisée à partir de la température et des propriétés des tissus ; non observée séparément à l'échelle de l'écosystème | Non publiée comme chiffre mondial autonome |
| Production primaire nette (NPP) | GPP moins la respiration autotrophe — le carbone disponible pour tout le reste | Récoltes et inventaires à l'échelle de la parcelle ; modèles satellitaires d'efficience d'utilisation de la lumière à l'échelle du globe | Environ 105 Pg C yr⁻¹ à l'échelle mondiale, répartis à peu près également entre continents et océan |
| Production nette de l'écosystème (NEP) | NPP moins la respiration des consommateurs et des décomposeurs | Dérivée de l'échange net mesuré par covariance turbulente, au signe inversé | Un petit résidu de deux flux importants |
| Production nette du biome | NEP moins les incendies, les récoltes et l'export latéral | Inventaires, modèles de comptabilité et inversions atmosphériques | La grandeur dont un budget carbone a réellement besoin |

En parcourant le tableau, le schéma qui se dégage est que la précision diminue à mesure que la grandeur devient plus utile. La GPP est conceptuellement claire et inobservable. La production nette du biome est ce dont dépendent un inventaire national ou une revendication de [puits de carbone](/en/glossary/carbon-sink), et c'est le terme qui comporte le plus de soustractions et la plus grande incertitude relative.

## Rien, sur une tour à flux, ne mesure la photosynthèse

L'instrument de référence pour la production continentale est la covariance turbulente : un anémomètre rapide et un analyseur de gaz montés au-dessus du couvert, échantillonnant plusieurs fois par seconde la vitesse verticale du vent et la concentration de CO₂, leur covariance donnant le flux vertical net. Ce que l'on obtient ainsi est l'échange net de l'écosystème — la différence entre l'absorption et la respiration totale — et rien d'autre.

La GPP en est ensuite extraite par partition. L'approche la plus connue ajuste un modèle de respiration aux flux nocturnes, quand la photosynthèse est nulle, l'extrapole au jour à l'aide de la température, puis l'ajoute à l'échange net mesuré. Toute valeur de GPP issue d'une tour porte donc les hypothèses du modèle de partition qui l'a produite. Le [jeu de données FLUXNET2015](https://www.nature.com/articles/s41597-020-0534-3), qui a standardisé les traitements pour l'ensemble de la communauté, traite cette dépendance comme quelque chose à mesurer plutôt qu'à supprimer : il applique à chaque site la méthode nocturne et une méthode diurne fondée sur la réponse à la lumière, ajoute une troisième méthode de respiration au crépuscule partout où les mesures de stockage le permettent, et invite les utilisateurs à prendre l'écart entre les produits diurne et nocturne comme incertitude. Il indique explicitement que la respiration de l'écosystème et l'absorption photosynthétique sont des [produits de données](/fr/ecology/earth-observation/earth-observation-data-products) dérivés plutôt que des mesures, distribués avec les flux et accompagnés de leurs propres estimations d'incertitude.

Ce jeu de données fixe aussi l'ampleur de la base observationnelle : 212 sites dans le monde, plus de 1,500 années-site de données jusqu'à 2014 incluse. Pour un flux planétaire, quelques centaines de tours constituent un échantillon mince, et il n'est pas réparti uniformément : la couverture est la plus dense en Europe tempérée et en Amérique du Nord et la plus lâche sous les tropiques, dans les déserts et aux hautes latitudes, c'est-à-dire à l'inverse de là où se situent les flux les plus grands et les moins certains.

## De quelques centaines de tours à un champ global

Trois familles de méthodes transforment cet échantillon en un chiffre mondial, et elles divergent d'une manière instructive.

Les modèles d'efficience d'utilisation de la lumière prennent le rayonnement photosynthétiquement actif absorbé mesuré depuis un satellite et le multiplient par une efficience qui varie selon le type de végétation et qui est réduite en cas de stress thermique et hygrométrique. La mise en œuvre opérationnelle de la NASA, [le produit MOD17](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061) — MOD17A3HGF, version 6.1 — fournit la GPP et la NPP annuelles à 500 m à partir de la somme des composites de 8 jours, la photosynthèse nette étant donnée comme la GPP moins la respiration d'entretien. Sa documentation est franche quant aux compromis : le produit annuel n'est généré qu'une fois l'année écoulée, parce que le comblement des lacunes des séries d'entrée d'indice foliaire et de rayonnement absorbé exige l'année entière, et les pixels qui échouent au contrôle qualité sont comblés par interpolation plutôt que par observation.

La montée en échelle statistique, à l'inverse, apprend une relation entre les flux des tours et des prédicteurs satellitaires, puis l'applique partout. Une [synthèse fondée sur les observations, à partir de données de covariance turbulente et de modèles diagnostiques](https://www.science.org/doi/10.1126/science.1184984) a situé la GPP continentale mondiale à 123 ± 8 Pg C yr⁻¹, les [forêts tropicales](/fr/ecology/forests/tropical-forest-ecology) et les savanes représentant 60 pour cent de ce total et la GPP de plus de 40 pour cent des terres végétalisées étant associée aux précipitations. Une approche ultérieure, mettant à l'échelle la réflectance de la végétation dans le proche infrarouge à partir du même réseau de tours, a rendu [147 Pg C yr⁻¹, avec un intervalle de crédibilité à 95 pour cent de 131 à 163](https://pubmed.ncbi.nlm.nih.gov/31199543/), et a noté que ses estimations sont systématiquement plus élevées que celles des travaux ascendants antérieurs, en particulier aux latitudes moyennes.

Ces deux résultats ne sont pas une mesure et une correction. Ce sont deux façons défendables d'extrapoler la même archive de tours, dont les valeurs centrales diffèrent d'environ un cinquième — davantage que l'incertitude annoncée par chacune des deux études. Quiconque cite un chiffre mondial de GPP cite une méthode autant qu'une planète.

## La moitié océanique est un autre instrument et une autre erreur

La production marine est reconstituée presque entièrement à partir de la couleur de l'océan. Les capteurs mesurent la luminance émergeant de l'eau, des algorithmes la convertissent en concentration de chlorophylle ou en carbone phytoplanctonique déduit de la rétrodiffusion particulaire, et un modèle de productivité convertit ce stock présent en un taux à l'aide de la lumière, de la profondeur de la couche de mélange et de la température. Le [produit mondial de couleur de l'océan](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description) du Copernicus Marine Service en est un exemple concret : la production primaire y est distribuée comme une variable parmi d'autres, sur une grille à 4 km, assemblée à partir de SeaWiFS, MODIS, MERIS, VIIRS et OLCI sur un enregistrement commençant en 1997. La façon dont cette inversion est réalisée, et ce qu'elle peut ou non voir, fait l'objet des [observations de la couleur de l'océan](/fr/ecology/earth-observation/ocean-color-observations).

L'intégration canonique des deux domaines a estimé la [NPP mondiale à 104.9 Pg C yr⁻¹, avec des contributions à peu près égales des continents et de l'océan](https://www.science.org/doi/10.1126/science.281.5374.237), et cette quasi-parité reste le chiffre que rencontre la plupart des lecteurs. Elle mérite plus de prudence qu'on ne lui en accorde d'ordinaire, car les deux moitiés ne sont pas mesurées de manière comparable. Sur les continents, la production peut être recoupée avec des inventaires de biomasse, des collecteurs de litière et des relevés de récolte, parce que l'essentiel de ce qui est fixé reste en place pendant des années. Dans l'océan, les organismes photosynthétiques se renouvellent en quelques jours ; il n'y a pas de stock à peser, pas de réseau de tours, et la validation repose sur des incubations éparses réalisées à bord de navires. Une analyse récente de l'ère satellitaire, qui rapporte des [baisses statistiquement significatives de la production primaire nette sur près de la moitié de l'océan](https://www.nature.com/articles/s41467-025-60906-y), note au passage que l'enregistrement par télédétection est la meilleure base disponible pour une tendance mondiale — une affirmation qui porte autant sur l'absence d'alternatives que sur la solidité de la méthode.

## Pourquoi le résidu est la partie difficile

L'écart entre le brut et le net est là où se loge le chiffre pertinent pour l'action publique, et c'est une différence de grandes quantités. La GPP continentale est de l'ordre de 120 à 150 Pg C yr⁻¹ ; le puits de carbone terrestre net évalué par le GIEC pour 2010 à 2019 est de [3.4 ± 0.9 Pg C yr⁻¹](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Une erreur systématique de quelques pour cent sur le flux brut aurait la taille du puits tout entier. C'est pourquoi le [cycle du carbone](/fr/ecology/earth-systems/carbon-cycle-explained) n'est pas contraint par la seule amélioration des estimations de GPP, et pourquoi la production nette du biome est estimée par des voies indépendantes — inversions atmosphériques, inventaires forestiers, modèles de comptabilité — plutôt qu'en soustrayant un grand terme modélisé d'un autre.

Pour l'écologie plutôt que pour la comptabilité, la NPP est généralement la grandeur qui compte, parce qu'elle est le carbone réellement disponible pour tout ce qui ne photosynthétise pas, et donc le plafond de ce à partir de quoi le reste du [réseau trophique](/fr/ecology/ecosystems/food-webs-and-trophic-structure) peut être construit. Ce plafond est réel, mais il vaut la peine de se rappeler comment on y est parvenu. Quand un chiffre affirme qu'un hectare de prairie a produit un tonnage donné l'an dernier, sa formulation honnête est qu'un modèle d'interception de la lumière, une efficience supposée et une série satellitaire à lacunes interpolées l'ont ensemble impliqué.

## Sources

1. **Scientific Data (Nature Portfolio)** — [The FLUXNET2015 dataset and the ONEFlux processing pipeline for eddy covariance data](https://www.nature.com/articles/s41597-020-0534-3). Nombre de sites, longueur de l'enregistrement, et statut de la respiration et de l'absorption en tant que produits dérivés.
2. **Science** — [Terrestrial gross carbon dioxide uptake: global distribution and covariation with climate](https://www.science.org/doi/10.1126/science.1184984). L'estimation de GPP fondée sur les observations, à 123 ± 8 Pg C yr⁻¹, et sa répartition régionale.
3. **Global Change Biology** — [Terrestrial gross primary production: using NIRv to scale from site to globe](https://pubmed.ncbi.nlm.nih.gov/31199543/). L'estimation à 147 Pg C yr⁻¹, son intervalle de crédibilité et sa comparaison aux travaux ascendants.
4. **NASA Earthdata** — [MODIS/Terra net primary production gap-filled yearly L4 global 500 m, version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061). Produit opérationnel d'efficience d'utilisation de la lumière, sa procédure de comblement des lacunes et ses contraintes de calendrier.
5. **Science** — [Primary production of the biosphere: integrating terrestrial and oceanic components](https://www.science.org/doi/10.1126/science.281.5374.237). Le total mondial de NPP de 104.9 Pg C yr⁻¹ et la parité approximative entre continents et océan.
6. **Copernicus Marine Service** — [Global ocean colour, bio-geo-chemical, L4 product description](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description). Capteurs, résolution et longueur de l'enregistrement derrière un champ opérationnel de production primaire marine.
7. **Nature Communications** — [Global declines in net primary production in the ocean colour era](https://www.nature.com/articles/s41467-025-60906-y). Tendance de la production marine à l'ère satellitaire et dépendance à la télédétection pour les tendances mondiales.
8. **IPCC AR6 WG1, Chapitre 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Le puits de carbone terrestre net évalué pour 2010 à 2019.
