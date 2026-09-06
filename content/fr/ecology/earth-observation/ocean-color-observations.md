---
title: 'Observations de la couleur de l''océan : lire la mer à sa couleur'
excerpt: La couleur de l'océan porte une information sur les plantes microscopiques qui y vivent. Voici comment les satellites estiment le phytoplancton à partir de la lumière sortant de l'eau, les missions qui ont bâti la série et pourquoi la correction atmosphérique au-dessus de l'eau est la partie difficile.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - ocean-color
  - oceans
  - remote-sensing
  - monitoring
related:
  - modis-earth-observation-system
  - sentinel-satellites-explained
  - satellite-altimetry-explained
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 442b91c4
---

La mer n'est pas d'un bleu uniforme. Sa teinte exacte, échantillonnée depuis l'orbite, porte une information sur la vie végétale microscopique qui dérive près de la surface. En mesurant le spectre de la lumière qui quitte l'eau, les satellites peuvent estimer la quantité de phytoplancton présente, et cette estimation est devenue l'un des fils les plus réguliers de notre [observation de la Terre et télédétection](/fr/ecology/earth-observation/earth-observation-and-remote-sensing-explained) des océans.

## Ce que la couleur nous apprend

Le phytoplancton contient de la chlorophylle a, le pigment même qui rend vertes les plantes terrestres. Plus l'eau de surface en contient, plus elle s'écarte du bleu profond vers le vert. C'est là le fondement physique de la télédétection de la [couleur de l'océan](/fr/glossary/ocean-color) : les instruments mesurent la lumière qui émerge juste sous la surface de la mer et lisent sa couleur pour inférer ce que contient l'eau, la chlorophylle a avant tout.

Ces plantes microscopiques comptent hors de proportion avec leur taille. Elles occupent la base du réseau trophique marin et absorbent du dioxyde de carbone en photosynthétisant, si bien qu'elles tiennent une place importante dans le [cycle du carbone](/fr/ecology/climate-change/carbon-cycle-feedbacks) océanique. Suivre leur abondance permet aux chercheurs de suivre la production primaire, de voir naître et s'éteindre les efflorescences algales, d'évaluer la [qualité de l'eau](/fr/ecology/freshwater/water-quality-measurement-explained) et de rechercher des évolutions plus lentes des écosystèmes marins. L'[Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) de la NASA a publié une longue série d'images montrant comment un unique signal de couleur peut se lire de toutes ces manières.

## Comment fonctionne la mesure

La grandeur au cœur de la méthode est la [réflectance](/fr/glossary/reflectance) de l'eau à plusieurs longueurs d'onde visibles — pour l'essentiel, la force avec laquelle la mer renvoie la lumière aux extrémités bleue et verte du spectre. Les algorithmes classiques de chlorophylle les comparent : un rapport de réflectance du bleu au vert. Quand le phytoplancton est rare, la lumière bleue domine et le rapport est élevé ; à mesure que ses effectifs augmentent, la lumière verte se renforce et le rapport diminue. Convertir ce rapport en une estimation de la concentration en chlorophylle est l'étape centrale qui transforme la couleur en nombre.

Y parvenir suppose d'isoler la faible fraction de lumière qui provient réellement de l'eau. La plus grande part du rayonnement qui atteint un satellite au-dessus de l'océan a été diffusée par l'atmosphère plutôt que réfléchie par la mer, de sorte que le traitement doit d'abord retrancher la contribution atmosphérique avant que toute comparaison du bleu au vert ait un sens. Les produits et les méthodes qui les sous-tendent sont documentés et diffusés par [NASA Earthdata](https://www.earthdata.nasa.gov/), où la longue histoire du traitement de la couleur de l'océan est exposée en détail.

## Construire la série d'observations

La technique a été démontrée pour la première fois par le Coastal Zone Color Scanner, lancé en 1978, qui a montré que des motifs de chlorophylle pouvaient tout simplement être cartographiés depuis l'espace. Après une longue interruption, la série continue moderne a commencé avec SeaWiFS, qui a fonctionné de 1997 à 2010 et a établi la série temporelle cohérente et étalonnée que les missions ultérieures ont prolongée.

Cette série est aujourd'hui portée par plusieurs instruments à la fois. MODIS et VIIRS fournissent tous deux des mesures de couleur de l'océan, du même type que celles suivies par [le système MODIS](/fr/ecology/earth-observation/modis-earth-observation-system) pour ses autres produits, tandis que l'instrument OLCI embarqué sur les plateformes européennes Sentinel-3 ajoute un flux supplémentaire, décrit dans notre note sur [les satellites Sentinel](/fr/ecology/earth-observation/sentinel-satellites-explained). Les produits opérationnels dérivés de ces capteurs sont distribués par le [Copernicus Marine Service](https://marine.copernicus.eu/), et la NOAA diffuse ses propres produits de couleur de l'océan par l'intermédiaire de son service de satellites environnementaux, le [NESDIS](https://www.nesdis.noaa.gov/). Maintenir la cohérence de ces sources importe parce que le signal de couleur complète d'autres observations océaniques, comme l'[altimétrie satellitaire](/fr/ecology/earth-observation/satellite-altimetry-explained) et, plus largement, les [indicateurs du contenu thermique de l'océan](/fr/ecology/climate-change/ocean-heat-content-indicators), pour construire une image plus complète de l'océan de surface.

## Pourquoi la correction atmosphérique est la partie difficile

La difficulté dominante de ce domaine est la correction atmosphérique, et elle est exigeante précisément à cause de la géométrie qui vient d'être décrite. Puisque l'essentiel de la lumière qu'un satellite reçoit au-dessus de l'eau vient de l'atmosphère et non de la mer, le signal sortant de l'eau est faible en comparaison. Une petite erreur dans l'estimation de la part atmosphérique se traduit donc par une grande erreur dans le faible signal qui reste — celui-là même dont dépend l'algorithme de chlorophylle. Réussir la correction est, en pratique, plus ardu que le rapport de couleurs lui-même.

Certaines eaux aggravent le problème. Le large, où la chlorophylle est la principale grandeur qui fait varier la couleur, est le cas le plus abordable. Les eaux côtières et turbides sont plus difficiles : les sédiments en suspension et la matière colorée dissoute modifient eux aussi le spectre, si bien que le lien simple entre couleur et phytoplancton ne tient plus aussi nettement, et que séparer ces contributions demande des méthodes plus soignées. Les nuages ajoutent une limite supplémentaire, plus simple : ils masquent entièrement la surface, laissant des lacunes qu'il faut combler à partir des jours voisins ou signaler comme manquantes.

## Lire les produits avec précaution

Aucune de ces limites ne rend la couleur de l'océan peu fiable, mais elles déterminent la façon dont ses produits doivent être lus. Une estimation au large, en eau claire, repose sur un terrain plus ferme qu'une estimation près d'une côte chargée de sédiments, et un composite sans nuages peut assembler des observations issues de plusieurs passages plutôt que d'un instant unique. Les valeurs se comprennent mieux comme des estimations assorties d'une incertitude déclarée que comme des mesures directes de ce que contient l'eau.

Utilisée avec cette précaution, la couleur de la mer reste un moyen pratique d'observer l'océan de surface vivant sur de vastes étendues et de longues durées. De la première preuve apportée par le scanner de 1978 aux missions qui se recouvrent aujourd'hui, la même idée — qu'un glissement du bleu vers le vert révèle les plantes situées en dessous — continue de fonder la façon dont le phytoplancton est observé depuis l'orbite.

## Sources

1. **NASA Earthdata** — [ocean colour](https://www.earthdata.nasa.gov/). Produits et historique de NASA Ocean Color.
1. **Copernicus Marine Service** — [ocean colour products](https://marine.copernicus.eu/). Données opérationnelles de couleur de l'océan.
1. **NASA Earth Observatory** — [ocean colour explained](https://science.nasa.gov/earth/earth-observatory/). Comment la couleur révèle le phytoplancton.
1. **NOAA NESDIS** — [ocean colour](https://www.nesdis.noaa.gov/). Produits satellitaires de couleur de l'océan de la NOAA.
