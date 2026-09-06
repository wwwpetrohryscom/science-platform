---
title: 'La télédétection au service du suivi de la biodiversité : ce que les satellites voient et ne voient pas'
metaTitle: 'Télédétection et biodiversité : ce que voient les satellites'
excerpt: Les satellites ne voient pas la plupart des espèces, mais ils mesurent la structure des écosystèmes de façon cohérente et mondiale. Ce que l'observation de la Terre apporte au suivi de la biodiversité — occupation du sol, canopée, état de la végétation — et les limites de l'inférence à partir d'un signal spectral.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - biodiversity
  - remote-sensing
  - earth-observation
  - monitoring
related:
  - habitat-fragmentation-metrics
  - essential-biodiversity-variables-monitoring
  - ecological-integrity-indicators
pillar: why-species-counts-mislead-conservation
readingTime: 5
_bodyHash: 820d22eb
---

Un satellite qui passe au-dessus de nos têtes ne sait pas distinguer une fauvette d'un troglodyte, et pourtant il peut cartographier la forêt dont dépendent l'une et l'autre, observer cette forêt changer au fil des saisons, et le faire à l'échelle de la planète entière d'un seul tenant. L'écart qu'il ne peut combler est celui qui limite aussi les relevés de terrain, décrit dans [pourquoi le décompte des espèces fausse les priorités](/fr/ecology/biodiversity/why-species-counts-mislead-conservation). Cet écart — entre ce qu'un instrument détecte et ce que la conservation cherche à savoir — définit à la fois la promesse et les limites de l'observation de la Terre. Le comprendre est central pour la tâche plus large de la [surveillance de la biodiversité et de la santé des écosystèmes](/fr/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## Ce que les satellites observent réellement

La [télédétection](/fr/glossary/remote-sensing) recueille des informations sur les écosystèmes depuis des satellites et des aéronefs, sans contact avec le sol. Elle n'identifie pas directement la plupart des espèces prises une à une. Ce qu'elle mesure bien, c'est l'état physique des écosystèmes : où se trouve l'habitat, quelle part en subsiste et dans quel état il se trouve.

Les produits fiables se rangent en quelques familles. Les capteurs cartographient l'[occupation du sol](/fr/ecology/earth-observation/land-cover-change-detection) et ses changements, suivent l'étendue des forêts et leur perte, et évaluent la verdeur et la productivité de la végétation au moyen d'indices tels que le NDVI. Ils détectent les eaux de surface et les zones humides, enregistrent les incendies et — lorsque des instruments lidar sont mis en jeu — résolvent la structure tridimensionnelle de la canopée forestière. Ces observations relèvent pleinement de la classe « structure des écosystèmes » des [variables essentielles de biodiversité](/fr/ecology/biodiversity/essential-biodiversity-variables-monitoring), la dimension que les relevés de terrain seuls ne peuvent couvrir à grande échelle.

## Les programmes qui rendent cela possible

L'essentiel de cette capacité repose sur quelques missions de longue durée. Les archives [Landsat](https://www.usgs.gov/), menées conjointement par la NASA et l'USGS, fournissent des décennies d'imagerie cohérente, et la continuité de ces archives compte autant que n'importe quelle image isolée, car le changement n'est visible que sur fond de référence stable. MODIS, de la NASA, y ajoute des mesures fréquentes de la productivité de la végétation, tandis que sa mission lidar GEDI échantillonne la structure de la canopée en trois dimensions.

Du côté européen, le programme [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth) de l'Agence spatiale européenne exploite les satellites Sentinel, dont les passages fréquents alimentent les [produits terrestres](https://land.copernicus.eu/) opérationnels du service Copernicus de surveillance des terres. La mission BIOMASS de l'ESA est conçue pour estimer la quantité de matière carbonée contenue dans les forêts. Ensemble, ces systèmes convertissent la luminance brute en couches d'occupation du sol et de végétation dont dépendent les analyses en aval, y compris les cartes qui sous-tendent les [métriques de fragmentation des habitats](/fr/ecology/biodiversity/habitat-fragmentation-metrics) et bien des mesures de la [fragmentation des habitats](/fr/glossary/habitat-fragmentation).

## Du spectre à la diversité : un front de recherche

L'ambition plus difficile consiste à passer de la structure à la diversité biologique elle-même. Un axe de recherche actif utilise la diversité spectrale — la variation du signal de réflectance mesurée à l'échelle d'une scène — comme approximation indirecte de la diversité du vivant au sol. L'idée sous-jacente est que des habitats plus variés et des assemblages végétaux plus variés tendent à diffuser la lumière de manières plus variées, de sorte qu'un signal spectral plus hétérogène peut signaler une communauté plus riche.

Il s'agit d'une hypothèse à l'épreuve, non d'un outil abouti. Pour lui donner un cadre, GEO BON a défini des [variables essentielles de biodiversité issues de la télédétection](https://geobon.org/) — des variables que l'observation de la Terre peut renseigner —, formalisant les liens entre ce qu'un capteur mesure et ce que les écologues suivent. Ce cadre maintient l'inférence sous discipline : il précise quelles variables un satellite peut plausiblement renseigner et lesquelles exigent encore des personnes sur le terrain.

## Comment fonctionne la mesure

Un produit utile est rarement une simple image. Les capteurs enregistrent le rayonnement réfléchi ou émis dans des bandes de longueurs d'onde définies ; ce signal est étalonné, corrigé des effets atmosphériques, puis classé en catégories telles que forêt, eau ou terres cultivées, ou converti en un indice continu comme une valeur de verdeur. Il en résulte une couche comparable dans l'espace et reproductible dans le temps.

Deux points de méthode méritent d'être soulignés. D'abord, l'inférence au niveau de l'espèce ne se lit jamais directement dans le pixel : elle requiert des données de terrain pour étalonner la relation et des observations de terrain indépendantes pour la valider. Ensuite, le choix du capteur impose des limites strictes — la résolution spatiale détermine le plus petit objet discernable, et la résolution spectrale gouverne la finesse avec laquelle les surfaces peuvent être distinguées. Ces contraintes se répercutent directement sur les [indicateurs d'intégrité écologique](/fr/ecology/biodiversity/ecological-integrity-indicators) plus généraux, qui combinent souvent des couches satellitaires et des mesures de terrain plutôt que de s'appuyer sur les unes ou les autres seules. La fiabilité des produits d'occupation du sol et de végétation, documentée par le [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/), tient à cette chaîne rigoureuse qui va de la luminance à la carte validée.

## Forces et limites

Les atouts sont distinctifs et difficiles à remplacer. L'observation de la Terre offre une couverture mondiale, une mesure répétable selon un calendrier régulier, et de longues archives cohérentes en interne qui permettent aux analystes de distinguer un changement réel du bruit. Aucune campagne de terrain ne peut égaler cette portée ni cette profondeur temporelle.

Les limites sont tout aussi réelles et découlent de la même physique. Les satellites voient la structure, non les espèces ; une carte de hauteur de canopée ou de verdeur décrit l'habitat, non les animaux ou les microbes qu'il abrite. La résolution plafonne ce qui peut être résolu, si bien que les objets plus fins que le grain du capteur restent invisibles. Et les capteurs optiques sont interrompus par la couverture nuageuse, ce qui laisse des lacunes inégales selon les régions et les saisons. Ce sont là des propriétés de la technique, non les échecs d'une mission particulière, et elles déterminent les questions auxquelles on peut raisonnablement demander à l'observation de la Terre de répondre.

## Lire les données avec la prudence requise

Plusieurs sources d'incertitude doivent tempérer l'interprétation. La structure des écosystèmes est un substitut imparfait de la biodiversité : deux peuplements forestiers d'aspect semblable vus d'en haut peuvent abriter des communautés très différentes, de sorte qu'une mesure structurelle contraint la réponse biologique sans la fixer. La classification elle-même comporte une erreur, car attribuer chaque pixel à une catégorie est un jugement qui peut se tromper, et ces erreurs de classement se propagent dans toutes les métriques bâties sur la carte.

L'approximation par la diversité spectrale ajoute une couche de prudence supplémentaire. C'est un signal indirect encore en cours de validation, et sa relation avec la diversité observée au sol semble varier selon l'habitat, la saison et l'échelle. La posture raisonnable consiste à traiter les produits satellitaires comme une entrée solide et déployable à grande échelle parmi d'autres — excellente pour suivre l'étendue et l'état des habitats, tributaire du travail de terrain pour savoir ce qui y vit, et d'autant plus digne de confiance que le signal structurel et la question biologique sont maintenus clairement distincts.

## Sources

1. **NASA Earth Observatory** — [land and vegetation](https://science.nasa.gov/earth/earth-observatory/). Produits satellitaires d'occupation du sol, de végétation et de structure.
1. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Missions Sentinel et biomasse pour la structure des écosystèmes.
1. **Copernicus Land** — [land products](https://land.copernicus.eu/). Données opérationnelles d'occupation du sol et d'état de la végétation.
1. **USGS** — [Landsat](https://www.usgs.gov/). Archive d'imagerie satellitaire cohérente sur le long terme.
1. **GEO BON** — [remote-sensing EBVs](https://geobon.org/). Cadre reliant l'observation de la Terre aux variables de biodiversité.
