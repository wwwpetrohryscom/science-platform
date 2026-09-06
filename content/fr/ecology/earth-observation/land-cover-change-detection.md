---
title: 'Détection des changements d''occupation du sol : cartographier l''évolution de la surface au fil du temps'
metaTitle: Détection des changements d'occupation du sol par satellite
excerpt: Comparer des images satellite prises à des dates différentes est la façon de mesurer le changement des terres à grande échelle. La différence entre occupation et usage du sol, les principales méthodes de détection, les produits mondiaux et les erreurs à maîtriser.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - land-cover
  - land-use-change
  - remote-sensing
  - monitoring
related:
  - satellite-deforestation-monitoring
  - landsat-program-explained
  - earth-observation-data-products
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 153ccd3d
---

Lorsqu'une forêt devient une terre cultivée, ou qu'un champ est recouvert de constructions, la surface elle-même change, et ce changement laisse une trace mesurable dans l'imagerie satellitaire. Le détecter revient à comparer des images d'un même lieu prises à des dates différentes et à se demander, avec soin, ce qui est réellement différent. Cet article explique la distinction qui sous-tend l'ensemble de la démarche, les principales manières de mener la comparaison, les produits qu'elle alimente et les erreurs qu'il faut tenir en respect.

## L'occupation du sol et l'usage du sol ne sont pas la même chose

La première chose à établir est ce que l'on mesure. [L'occupation du sol](/fr/glossary/land-cover) est le matériau physique présent à la surface — forêt, eau, terres cultivées, sol bâti — ce qu'un capteur peut enregistrer directement. [Le changement d'usage du sol](/fr/glossary/land-use-change), en revanche, concerne la fonction humaine de ce terrain : savoir si une étendue herbeuse est un pâturage, un parc ou un aérodrome laissé en friche. Les deux notions sont liées mais distinctes.

Cette distinction importe parce que la télédétection mesure l'occupation, non l'usage. Un satellite enregistre la réflectance d'une surface et, à partir de là, un classificateur peut l'étiqueter comme forêt ou comme eau avec une confiance raisonnable. L'usage, lui, est généralement déduit — lu à partir du contexte, de cartes auxiliaires ou de l'évolution de l'occupation dans le temps — plutôt qu'observé. Garder les deux séparés évite une confusion courante : une carte d'occupation du sol n'est pas automatiquement une carte de la manière dont les terres sont utilisées.

## Comment fonctionne la détection des changements

La détection des changements repose sur une prémisse simple : prendre des images d'un même lieu à deux dates ou plus et repérer les endroits où la surface ne se ressemble plus. Plusieurs méthodes établies le font, et elles diffèrent par ce qu'elles comparent et par le nombre d'hypothèses qu'elles posent.

La plus directe est la **différenciation d'images**, dans laquelle la bande ou l'indice d'une date est soustrait de ceux d'une autre ; les pixels dont la différence est grande sont signalés comme changements candidats. Une deuxième approche, la **comparaison post-classification**, classe chaque date indépendamment en catégories d'occupation du sol puis compare les cartes obtenues, de sorte que le résultat décrit non seulement où le changement s'est produit, mais aussi ce qui s'est transformé en quoi. Une troisième famille, l'**analyse de séries temporelles**, travaille sur une longue pile d'images et cherche le moment — un point de rupture — où le comportement d'un pixel bascule, ce qui aide à situer la date d'un changement et pas seulement son existence. Chaque méthode arbitre entre la simplicité et la richesse de ce qu'elle peut rapporter, et le choix dépend de la question posée et des images dont on dispose. La chaîne de traitement plus large qui transforme les scènes brutes en données prêtes pour l'analyse est décrite dans la vue d'ensemble [observation de la Terre et télédétection](/fr/ecology/earth-observation/earth-observation-and-remote-sensing-explained) du groupe thématique.

Ces techniques sont générales, mais une application a motivé une grande part de leur perfectionnement : le suivi de la perte forestière. La façon dont les méthodes de séries temporelles isolent la date d'une coupe est centrale pour la [surveillance de la déforestation par satellite](/fr/ecology/earth-observation/satellite-deforestation-monitoring), où savoir quand un peuplement a été coupé importe autant que savoir qu'il l'a été.

## Les produits et l'imagerie qui les sous-tendent

La détection des changements n'est pas seulement une technique de recherche ; elle produit des cartes opérationnelles sur lesquelles s'appuient de nombreux utilisateurs. À l'échelle mondiale et régionale, les cartes d'occupation du sol de l'Initiative sur le changement climatique de l'ESA offrent une série cohérente sur toute la planète, tandis que le service Copernicus de surveillance des terres fournit des produits paneuropéens et mondiaux ([Copernicus Land](https://land.copernicus.eu/)). L'effort de l'Initiative sur le changement climatique de l'ESA s'inscrit dans le programme d'observation de la Terre plus vaste de l'agence ([ESA](https://www.esa.int/Applications/Observing_the_Earth)). Des initiatives nationales les complètent, comme la National Land Cover Database de l'USGS, construite sur la longue archive Landsat ([USGS](https://www.usgs.gov/landsat-missions)), et le Centre commun de recherche de la Commission européenne réalise son propre suivi des terres et son propre [suivi des forêts](/fr/ecology/forests/deforestation-statistics-explained) ([JRC](https://joint-research-centre.ec.europa.eu/)).

La plupart de ces produits reposent sur le même socle : l'imagerie Landsat et Sentinel. Cette dépendance mérite d'être énoncée clairement, car elle signifie que la qualité de toute carte d'occupation du sol est bornée par la qualité des scènes qui l'alimentent et par la méthode de classification qui leur est appliquée. Le volet Landsat de ce socle, avec ses décennies de couverture à résolution moyenne, est décrit dans [le programme Landsat](/fr/ecology/earth-observation/landsat-program-explained), et la manière dont ces entrées sont conditionnées pour l'usage fait l'objet des [produits de données d'observation de la Terre](/fr/ecology/earth-observation/earth-observation-data-products).

## Pourquoi un changement apparent n'est pas toujours un changement réel

Une carte de changement ne vaut que ce que vaut son traitement de l'erreur, et plusieurs sources d'erreur sont intrinsèques à la méthode. La plus fondamentale est que la précision de classification n'est jamais parfaite : tout classificateur étiquette mal une partie des pixels, ce qui explique que les produits sérieux soient diffusés avec une évaluation de leur précision plutôt que présentés comme exacts. Traiter une carte classée comme une vérité terrain, sans lire la précision annoncée, revient à surestimer ce que l'on sait.

Deux autres problèmes peuvent fabriquer un changement qui n'a pas eu lieu. Le défaut de recalage d'une image à l'autre — lorsque deux dates ne sont pas alignées sur la même position au sol — fait comparer un pixel au mauvais voisin, ce qui produit de faux changements le long des lisières et des limites. Les différences saisonnières font quelque chose de semblable : un champ nu en hiver et vert en été peut ressembler à une conversion des terres alors qu'il s'agit simplement du même champ à un autre moment de son cycle. Une analyse solide contrôle cet effet, par exemple en comparant des images de saisons correspondantes ou en recourant à des méthodes de séries temporelles qui modélisent le rythme annuel normal avant de signaler un écart. Distinguer une conversion réelle de ces artefacts est la difficulté récurrente du domaine, et cela rejoint des questions écologiques en aval, comme les [métriques de fragmentation des habitats](/fr/ecology/biodiversity/habitat-fragmentation-metrics) qui, pour avoir un sens, dépendent de cartes d'occupation du sol exactes.

## Lire les cartes de changement avec prudence

La détection des changements d'occupation du sol est un outil mûr et largement employé, mais ses sorties sont des interprétations, non des photographies du réel. L'habitude la plus utile qu'un lecteur puisse adopter est de poser trois questions à toute carte de changement : quelle méthode l'a produite, à partir de quelles images elle a été construite, et quelle précision a été rapportée. Une image de différence, une paire de cartes classées et un point de rupture de série temporelle peuvent décrire le même morceau de terrain tout en divergeant à la marge, et aucun n'est correct dans l'absolu. Utilisée avec cette conscience — et en tenant compte des effets saisonniers et de recalage — la détection des changements donne une image défendable et reproductible de la façon dont la surface de la planète se transforme au fil du temps.

## Sources

1. **Copernicus Land** — [land-cover products](https://land.copernicus.eu/). Cartographie paneuropéenne et mondiale de l'occupation du sol.
1. **ESA** — [Climate Change Initiative land cover](https://www.esa.int/Applications/Observing_the_Earth). Série mondiale de cartes d'occupation du sol.
1. **USGS** — [land-cover data](https://www.usgs.gov/landsat-missions). Produits d'occupation du sol fondés sur Landsat.
1. **Commission européenne JRC** — [land monitoring](https://joint-research-centre.ec.europa.eu/). Suivi des terres et des forêts de la CE.
