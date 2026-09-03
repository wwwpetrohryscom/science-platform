---
title: 'L''observation de la Terre et la télédétection : comment on mesure la planète depuis l''espace'
excerpt: Les satellites sont devenus les instruments qui permettent d'observer la planète entière d'un seul tenant. Voici comment fonctionne l'observation de la Terre — du photon au produit de données étalonné —, ce qu'elle mesure du climat aux écosystèmes, et où se situent ses limites.
type: pillar
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-08-29'
readingTime: 11
tags:
  - earth-observation
  - remote-sensing
  - satellites
  - environmental-monitoring
related:
  - what-is-remote-sensing
  - landsat-program-explained
  - earth-observation-data-products
  - remote-sensing-limitations-and-uncertainty
_bodyHash: 6513b2af
---

L'essentiel de ce que nous savons de l'évolution de la planète — le recul des glaces, l'avancée de la déforestation, le réchauffement des mers, le verdissement et le brunissement des terres — se mesure aujourd'hui, au moins en partie, depuis l'espace. L'[observation de la Terre](/en/glossary/earth-observation) consiste à recueillir de l'information sur les continents, l'océan, l'atmosphère et les glaces de la planète au moyen de capteurs embarqués sur des satellites et des aéronefs. La [télédétection](/en/glossary/remote-sensing) en est la technique sous-jacente : mesurer une chose sans la toucher, en enregistrant le rayonnement qu'elle réfléchit ou qu'elle émet.

Cet article est le pivot du groupe d'articles d'EcoScienceHub consacré à l'observation de la Terre, et il fait délibérément office de passerelle. Les mesures satellitaires qui suivent les [indicateurs climatiques](/fr/ecology/climate-change/climate-indicators-earth-system-monitoring) fondent aussi le [suivi de la biodiversité](/fr/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health) et l'étude des [écosystèmes](/fr/ecology/ecosystems/what-is-an-ecosystem). Cet article explique comment les mesures sont réalisées, ce qui transforme un signal brut en science exploitable, et pourquoi tout produit satellitaire porte une incertitude qu'il faut énoncer plutôt que masquer. Les articles liés tout au long du texte approfondissent chaque instrument et chaque application.

## Ce que mesure réellement la télédétection

Un capteur de télédétection ne photographie pas la « déforestation » ni la « sécheresse ». Il mesure un rayonnement électromagnétique dans des bandes de longueur d'onde définies et enregistre en chaque point la valeur obtenue sous forme de nombre. Tout le reste — végétation, eau, incendie, croissance urbaine — s'infère de la manière dont les surfaces interagissent avec ce rayonnement.

Deux grandes familles d'instruments s'en chargent. Les capteurs **passifs** enregistrent un rayonnement naturellement disponible, presque toujours le rayonnement solaire réfléchi ou l'infrarouge thermique émis par la surface ; les imageurs optiques et thermiques comme ceux de Landsat et de MODIS sont passifs. Les capteurs **actifs** fournissent leur propre énergie et mesurent ce qui revient : le radar et le lidar émettent une impulsion et chronomètrent l'écho, ce qui leur permet de voir à travers les nuages et de nuit, et de mesurer directement des hauteurs. Chaque surface possède une [signature spectrale](/en/glossary/spectral-signature) caractéristique : la façon particulière dont elle réfléchit selon les longueurs d'onde. La végétation en bonne santé, par exemple, absorbe le rouge et réfléchit fortement dans le proche infrarouge, et c'est ce contraste qui fonde les indices de végétation évoqués plus bas.

La grandeur qu'un capteur optique étalonné restitue en fin de compte est la [réflectance](/en/glossary/reflectance) — la fraction de la lumière incidente qu'une surface renvoie dans chaque bande —, stockée sous forme de grille de pixels, c'est-à-dire de [données matricielles](/en/glossary/raster-data). La résolution de cette grille, et la fréquence à laquelle elle est rafraîchie, sont les premiers facteurs qui déterminent ce qu'un capteur peut voir et ce qu'il ne peut pas voir.

## Les systèmes satellitaires

Aucun satellite ne couvre tous les besoins : l'observation de la Terre s'appuie donc sur une flotte aux atouts complémentaires. L'article d'initiation [qu'est-ce que la télédétection](/fr/ecology/earth-observation/what-is-remote-sensing) en expose la physique ; les instruments qui font le gros du travail font chacun l'objet d'un article dédié.

Le [programme Landsat](/fr/ecology/earth-observation/landsat-program-explained), mené conjointement par la NASA et l'USGS, image la surface continentale sans interruption depuis 1972 à résolution moyenne (environ 30 mètres) : c'est la plus longue série de ce type qui existe. Le [programme Copernicus](/fr/ecology/earth-observation/copernicus-programme-explained) de l'Union européenne exploite les [satellites Sentinel](/fr/ecology/earth-observation/sentinel-satellites-explained), qui y ajoutent des revisites fréquentes, l'imagerie radar et des services opérationnels. Les [instruments MODIS](/fr/ecology/earth-observation/modis-earth-observation-system) de la NASA, et leurs successeurs VIIRS, échangent le détail spatial contre une couverture mondiale quasi quotidienne, idéale pour suivre les changements rapides. Sur une autre filière de missions, des altimètres radar mesurent la hauteur de la surface de la mer — c'est l'objet de l'article sur l'[altimétrie satellitaire](/fr/ecology/earth-observation/satellite-altimetry-explained). Choisir entre eux revient à arbitrer entre résolution spatiale, fréquence de revisite d'un même lieu et longueurs d'onde mesurables ; aucun instrument n'optimise les trois à la fois.

## Du photon au produit de données : la méthode

Un nombre enregistré par un capteur en orbite n'est pas encore de la science. Le convertir en mesure de la surface passe par une chaîne de traitement bien définie, que l'article sur les [produits de données d'observation de la Terre](/fr/ecology/earth-observation/earth-observation-data-products) parcourt en détail. Les étapes essentielles sont les suivantes.

**L'étalonnage.** Le signal brut est converti en luminance physique à l'aide de l'étalonnage du capteur, puis corrigé géométriquement pour que chaque pixel se place à sa véritable position au sol.

**La correction atmosphérique.** Entre la surface et le satellite s'interpose l'atmosphère, qui diffuse et absorbe la lumière. La corriger convertit la luminance au sommet de l'atmosphère en réflectance de surface — l'étape qui rend comparables des images acquises à des dates différentes.

**Les niveaux de traitement.** Les agences étiquettent les produits selon la place qu'ils occupent dans cette chaîne : des données brutes de l'instrument (niveau 0) à la luminance étalonnée et géolocalisée (niveau 1), puis aux variables géophysiques restituées telles que la température de surface ou la réflectance (niveau 2), jusqu'aux produits sur grille et composités dans le temps (niveau 3) et aux sorties assimilées dans un modèle (niveau 4). Connaître le niveau d'un produit indique à l'utilisateur combien de traitements — et combien d'hypothèses — sont déjà logés dans le nombre.

**Les indices dérivés et la classification.** À partir de la réflectance de surface, les analystes calculent des indices et des cartes. Le plus connu est le [NDVI](/en/glossary/ndvi), l'indice de végétation par différence normalisée, expliqué dans [l'article qui lui est consacré](/fr/ecology/earth-observation/ndvi-explained) et généralisé dans celui sur les [indices de végétation](/fr/ecology/earth-observation/vegetation-indices-and-monitoring). Classer les pixels en catégories telles que forêt, eau ou terres cultivées produit des cartes d'[occupation du sol](/en/glossary/land-cover) ; les comparer dans le temps relève de la [détection des changements d'occupation du sol](/fr/ecology/earth-observation/land-cover-change-detection).

## Ce que l'observation de la Terre mesure dans l'environnement

Sur cette chaîne de traitement repose un large éventail d'applications, et c'est par là que ce groupe d'articles rejoint le reste d'EcoScienceHub.

Pour la **surface continentale et la biosphère**, les satellites cartographient l'état de la végétation, suivent la [déforestation](/fr/ecology/earth-observation/satellite-deforestation-monitoring), détectent les [incendies et les surfaces brûlées depuis l'espace](/fr/ecology/earth-observation/wildfire-monitoring-from-space) et alimentent les [systèmes de surveillance de la sécheresse](/fr/ecology/earth-observation/drought-monitoring-systems). Ces mêmes mesures de structure fondent la [télédétection appliquée au suivi de la biodiversité](/fr/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring) et la cartographie de la [fragmentation des habitats](/fr/ecology/biodiversity/habitat-fragmentation-metrics).

Pour l'**océan**, les [observations de la couleur de l'océan](/fr/ecology/earth-observation/ocean-color-observations) estiment le phytoplancton à partir de la couleur de l'eau, tandis que l'altimétrie suit la hauteur de la surface de la mer. Pour le **système climatique**, l'observation de la Terre fournit une bonne part des séries phares : l'altimétrie satellitaire qui sous-tend l'[élévation du niveau de la mer](/fr/ecology/climate-change/sea-level-rise-indicators), les capteurs qui surveillent les [concentrations de gaz à effet de serre](/fr/ecology/climate-change/greenhouse-gas-concentrations-monitoring) et l'imagerie qui alimente les indicateurs de glace et de température. Tout l'intérêt de ce groupe d'articles est de montrer qu'il ne s'agit pas de techniques distinctes, mais d'un seul système de mesure braqué sur des questions différentes.

## La validation : pourquoi les données de terrain restent indispensables

Un produit satellitaire n'inspire confiance qu'une fois confronté à des mesures indépendantes. La [vérité terrain](/en/glossary/ground-truthing) — la comparaison d'une estimation satellitaire à des observations de terrain, à des tours instrumentées, à des navires ou à une imagerie de plus haute résolution — est ce qui permet d'étalonner la relation entre un signal spectral et une grandeur réelle, et d'en quantifier l'erreur. L'observation de la Terre ne remplace pas le travail de terrain : elle le prolonge, et les deux sont conçus pour fonctionner ensemble. Un indice de végétation qui n'a été étalonné sur aucune donnée de terrain est un motif, pas encore une mesure.

## Données ouvertes et continuité

Deux caractéristiques de l'observation de la Terre moderne passent facilement inaperçues alors qu'elles sont au cœur de sa valeur scientifique : l'accès ouvert et la continuité. Lorsque l'USGS a ouvert en 2008 la totalité de l'archive Landsat au téléchargement public gratuit, l'usage des données s'est fortement élargi, parce que les chercheurs pouvaient enfin analyser de longues piles d'images au lieu d'acheter les scènes une par une. L'Union européenne a bâti le programme Copernicus sur le même principe — les données Sentinel sont gratuites et sous licence ouverte —, et la NASA diffuse librement ses archives de sciences de la Terre par l'intermédiaire d'Earthdata. C'est l'accès ouvert qui rend possibles la vérification indépendante et les études de long terme.

La continuité compte tout autant. Une mesure ne devient un indicateur de changement que si la même grandeur est produite de façon cohérente au fil des années et des satellites successifs ; c'est pourquoi les agences investissent lourdement dans le recouvrement des missions et l'inter-étalonnage, afin que la série d'un instrument puisse être raccordée à la suivante sans saut artificiel. Une lacune de couverture, ou un changement de capteur non étalonné, peut se faire passer pour un signal environnemental ; entretenir la série est donc une tâche scientifique à part entière, et pas seulement une tâche opérationnelle.

## L'incertitude

Toute mesure satellitaire porte une incertitude, et les fournisseurs faisant autorité la publient plutôt que de l'enfouir.

**Les arbitrages de résolution.** Un détail spatial plus fin se paie généralement par une fauchée plus étroite et des revisites moins fréquentes. Un capteur qui voit un lieu chaque jour ne peut pas en même temps résoudre les arbres un à un ; un capteur qui distingue les limites parcellaires ne repasse parfois qu'une fois par semaine ou par quinzaine. Le bon instrument dépend de la question posée.

**L'atmosphère et les nuages.** Les capteurs optiques ne voient pas la surface à travers les nuages : les régions nuageuses et tropicales présentent donc des lacunes systématiques. Les effets atmosphériques résiduels, les aérosols et la brume ajoutent de l'erreur même par temps clair, erreur que la correction atmosphérique réduit sans jamais l'éliminer complètement.

**Les pixels mixtes.** Un même pixel recouvre souvent plusieurs types de surface : sa valeur est donc un mélange. Un pixel « forêt » peut être en partie une trouée, et toute estimation qui en découle hérite de cette ambiguïté.

**Les différences entre capteurs et entre missions.** Les instruments se dégradent, les orbites dérivent et les missions successives diffèrent : construire une longue série cohérente exige un inter-étalonnage soigneux. Un changement apparent peut être l'artefact d'un changement de capteur plutôt qu'un changement au sol.

## Les limites : ce que les satellites ne peuvent pas faire

Deux limites sont structurelles. D'abord, la télédétection mesure des **propriétés physiques et spectrales, non les choses elles-mêmes** : elle voit la verdeur d'un couvert, non des espèces végétales ; des anomalies thermiques, non le « feu » en tant que tel ; la couleur de l'eau, non le phytoplancton directement. La signification biologique ou sociale est toujours une inférence, qui demande validation. Ensuite, l'**archive fixe l'horizon** : une série satellitaire ne peut pas décrire des conditions antérieures à l'existence de ses instruments, et c'est pourquoi le début de la série Landsat continue en 1972, ou l'ère de l'altimétrie satellitaire ouverte au début des années 1990, constitue la référence pratique de nombreuses études. Pour des perspectives plus longues, les données satellitaires doivent être raccordées à des séries plus anciennes.

## Ce que les observations visent

La continuité a un objectif autant qu'une justification. La communauté internationale précise quelles grandeurs doivent être maintenues au moyen des variables climatiques essentielles : le Système mondial d'observation du climat en définit actuellement 55 dans les domaines atmosphérique, océanique et continental, retenues au regard de leur pertinence pour caractériser le système climatique, de la faisabilité technique d'une observation mondiale et du rapport coût-efficacité. Beaucoup sont restituées principalement ou entièrement depuis l'orbite — température de surface de la mer, niveau de la mer, glace de mer, occupation du sol, biomasse aérienne, couleur de l'océan, albédo, indice de surface foliaire —, et c'est pourquoi la continuité des missions et la définition de ces variables relèvent de la même discussion. Le cadre est exposé dans l'article sur les [variables climatiques essentielles](/fr/ecology/earth-systems/essential-climate-variables-explained), et le système couplé que ces variables décrivent collectivement fait l'objet du groupe d'articles sur la [science du système Terre](/fr/ecology/earth-systems/earth-system-science-explained).

## La transparence des sources

Toute affirmation quantitative de ce groupe d'articles est attribuée à une autorité nommée — la NASA et NASA Earthdata, le programme Landsat de l'USGS, l'ESA ainsi que le programme Copernicus de l'Union européenne et ses services, l'ECMWF, le Centre commun de recherche de la Commission européenne, la NOAA, l'OMM et la FAO — ou à la littérature évaluée par les pairs, comme les revues *Remote Sensing* et *Earth System Science Data*. Les domaines des sources citées sont confrontés, lors de la construction du site, à un registre tenu à jour, de sorte qu'un lien inconnu ou de faible autorité est signalé avant publication. Lorsqu'un nombre est contesté ou dépend de la version du produit, le texte le dit.

## Le reste du groupe d'articles

Les articles qui s'y rattachent poussent chaque élément plus loin : [qu'est-ce que la télédétection](/fr/ecology/earth-observation/what-is-remote-sensing), le [programme Landsat](/fr/ecology/earth-observation/landsat-program-explained), les [satellites Sentinel](/fr/ecology/earth-observation/sentinel-satellites-explained), le [système MODIS](/fr/ecology/earth-observation/modis-earth-observation-system), le [NDVI](/fr/ecology/earth-observation/ndvi-explained) et la famille plus large des [indices de végétation](/fr/ecology/earth-observation/vegetation-indices-and-monitoring), la [détection des changements d'occupation du sol](/fr/ecology/earth-observation/land-cover-change-detection), le [suivi satellitaire de la déforestation](/fr/ecology/earth-observation/satellite-deforestation-monitoring), la [surveillance des incendies depuis l'espace](/fr/ecology/earth-observation/wildfire-monitoring-from-space), les [systèmes de surveillance de la sécheresse](/fr/ecology/earth-observation/drought-monitoring-systems), les [observations de la couleur de l'océan](/fr/ecology/earth-observation/ocean-color-observations), l'[altimétrie satellitaire](/fr/ecology/earth-observation/satellite-altimetry-explained), les [produits de données d'observation de la Terre](/fr/ecology/earth-observation/earth-observation-data-products), le [programme Copernicus](/fr/ecology/earth-observation/copernicus-programme-explained), et un exposé franc des [limites et de l'incertitude de la télédétection](/fr/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). Ensemble, ils expliquent comment la planète est observée depuis l'orbite, et comment lire ce que cette observation produit.

## Sources

1. **NASA Earthdata** — [Earth-science data and EOSDIS](https://www.earthdata.nasa.gov/). Porte d'entrée des archives d'observation de la Terre de la NASA et de la documentation des produits par niveau.
2. **NASA Earth Observatory** — [imagery and explainers](https://earthobservatory.nasa.gov/). Pages thématiques sur la manière dont les mesures satellitaires sont faites et utilisées.
3. **USGS** — [Landsat missions](https://www.usgs.gov/landsat-missions). Histoire, capteurs et série continue de la surface continentale (avec la NASA).
4. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Missions et instruments européens d'observation de la Terre.
5. **Copernicus** — [EU Earth-observation programme](https://www.copernicus.eu/en). Les Sentinel et les services Copernicus.
6. **ECMWF** — [reanalysis and Copernicus services](https://www.ecmwf.int/). Opère les services Changement climatique et Surveillance de l'atmosphère.
7. **NOAA NESDIS** — [environmental satellites](https://www.nesdis.noaa.gov/). Satellites opérationnels et services de données de la NOAA.
8. **European Commission JRC** — [land, forest, and hazard monitoring](https://joint-research-centre.ec.europa.eu/). Produits opérationnels fondés sur l'observation de la Terre.
9. **WMO** — [global observing systems](https://wmo.int/). Normes internationales d'observation de l'environnement.
10. **Remote Sensing (journal)** — [peer-reviewed methods](https://www.mdpi.com/journal/remotesensing). Recherche sur les capteurs, les algorithmes et leurs applications.
11. **Earth System Science Data** — [reference datasets](https://earth-system-science-data.net/). Publications de données du système Terre évaluées par les pairs.
