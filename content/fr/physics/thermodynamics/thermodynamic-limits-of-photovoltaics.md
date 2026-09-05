---
title: Les limites thermodynamiques du photovoltaïque — et pourquoi elles décident du possible
metaTitle: 'Les limites thermodynamiques du photovoltaïque'
excerpt: Il existe une borne supérieure dure sur la fraction de lumière solaire qu'une cellule photovoltaïque à jonction unique peut convertir en électricité. Savoir d'où elle vient éclaire quelles voies d'amélioration relèvent de la physique et lesquelles de l'ingénierie.
type: expert
author: energy-systems-desk
publishedDate: '2026-02-26'
updatedDate: '2026-09-03'
readingTime: 5
pillar: laws-of-thermodynamics-explained
tags:
  - thermodynamics
  - photovoltaics
  - shockley-queisser
  - energy
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
---

Il existe une borne supérieure dure sur la fraction de lumière solaire qu'une cellule photovoltaïque à jonction unique peut convertir en électricité. Sous éclairement solaire standard, elle se situe près de 33 % — la limite de Shockley-Queisser, [dérivée en 1961](https://doi.org/10.1063/1.1736034) d'un argument de bilan détaillé sur une jonction p-n éclairée par un corps noir. Les cellules de silicium performantes fonctionnent assez près de cette borne pour que les gains supplémentaires soient de plus en plus limités par l'ingénierie. Savoir d'où vient la borne — et elle vient [des principes de la thermodynamique](/fr/physics/thermodynamics/laws-of-thermodynamics-explained) plutôt que d'une propriété du silicium — éclaire ce qui relève de la physique fondamentale et ce qui relève de l'ingénierie.

## D'où vient la borne

La limite de Shockley-Queisser est un argument thermodynamique, non un argument d'ingénierie. Elle s'applique à tout absorbeur à bande interdite unique fonctionnant sous éclairement solaire standard, quels que soient le matériau, l'architecture ou le procédé de fabrication.

Elle naît de trois mécanismes de perte irréductibles.

**Les photons sous la bande interdite passent au travers.** La bande interdite d'une cellule solaire définit l'énergie minimale du photon capable d'y faire franchir un électron. Les photons de moindre énergie ne sont pas absorbés : ils passent, sans rien apporter. Pour une bande interdite typique du silicium (1,1 eV), cela écarte une large fraction du spectre solaire de grande longueur d'onde.

**Les photons au-dessus de la bande interdite se thermalisent.** Des photons dotés de plus d'énergie que nécessaire excitent des électrons haut dans la bande de conduction, mais ces électrons retombent rapidement vers le bord de bande — perdant l'excédent en chaleur, sur une échelle de temps bien plus courte que leur extraction possible sous forme de travail électrique. Que le photon ait porté 2 eV ou 4 eV, on récupère l'équivalent d'un électron à l'énergie de la bande interdite.

**La recombinaison radiative.** Une cellule qui absorbe des photons doit, par bilan détaillé, en émettre aussi. Cela fixe une perte minimale par émission spontanée qu'aucune physique ne peut supprimer sans changer la température de l'absorbeur ou la géométrie de la lumière incidente.

Optimiser la bande interdite équilibre ces pertes. Trop petite, elle capte plus de photons mais perd davantage en thermalisation. Trop grande, elle capte moins de photons mais tire plus d'énergie de chacun. L'optimum se situe près de 1,3 eV ; le silicium à 1,1 eV est légèrement en dessous, ce qui explique en partie que sa limite pratique soit plus proche de 30 % que de 33 %.

Ces pertes sont thermodynamiques. Aucune conception à bande interdite unique ne peut les éliminer.

## Ce que la borne ne contraint pas

La limite de Shockley-Queisser s'applique aux cellules à jonction unique sous éclairement standard. Trois directions connues la contournent.

**Les cellules multijonctions.** Empiler des absorbeurs de bandes interdites différentes permet à chacun de traiter la partie du spectre où il excelle. La cellule supérieure capte les photons de haute énergie avant qu'ils ne se thermalisent ; la cellule inférieure capte les photons de plus basse énergie que la supérieure a laissés passer. Avec une infinité de jonctions et de la concentration, la limite thermodynamique monte à environ 86 %. Avec des empilements finis réalistes, des rendements de laboratoire supérieurs à 47 % ont été mesurés. La génération actuelle de tandems pérovskite-silicium est la version commercialement pertinente de cette stratégie.

**Le photovoltaïque à concentration.** Concentrer la lumière solaire sur une petite cellule élève le potentiel chimique du flux de photons par rapport à la cellule. Pour une jonction unique à très forte concentration, la limite monte vers 40 %. Cela exige un suivi de précision et un refroidissement actif, ce qui restreint les scénarios de déploiement économiquement viables.

**L'extraction de porteurs chauds.** Extraire les porteurs avant leur thermalisation complète peut en principe préserver une partie de l'énergie normalement perdue en chaleur. Cela a été démontré sur des dispositifs de démonstration mais n'a pas approché un rendement pratique. La vitesse d'extraction requise se heurte aux échelles de temps de relaxation fondamentales dans les semi-conducteurs.

**La modification du spectre.** La conversion descendante (scinder un photon de haute énergie en deux photons de plus basse énergie) et la conversion montante (combiner deux photons de basse énergie en un) peuvent en principe remodeler le spectre incident pour mieux l'adapter à une bande interdite unique. Les deux ont été démontrées ; aucune n'a atteint des rendements pertinents pour le déploiement.

Chacune de ces voies est une direction de recherche réelle. Aucune ne viole la thermodynamique sous-jacente ; chacune change les conditions dans lesquelles l'argument thermodynamique s'applique.

## Ce que cela signifie pour la courbe des coûts

La baisse de coût du silicium à jonction unique a été portée massivement par l'échelle de fabrication et l'affinement des procédés, non par la physique. La technologie fonctionne depuis des années près de son plafond pratique de rendement ; les baisses de coût supplémentaires viennent d'une fabrication moins chère de la même physique.

Les approches multijonctions — en particulier les tandems pérovskite-silicium — se situent sur une autre courbe de coût. Leur plafond de rendement est nettement plus haut ; leur maturité de fabrication est bien moindre. La question de la prochaine décennie est de savoir si la courbe de fabrication des tandems peut descendre assez vite pour les rendre économiques à grande échelle avant que la baisse de coût du silicium ne sature.

Le photovoltaïque à concentration se situe sur une courbe encore différente. Son plafond thermodynamique est élevé, mais ses coûts de système périphérique (suivi, refroidissement, optique) sont assez élevés pour qu'il soit resté une niche même quand les rendements de cellule sous-jacents s'amélioraient.

La trajectoire commerciale de la production solaire dans la prochaine décennie sera décidée avant tout par l'issue de la compétition tandem contre silicium, avec la concentration et les porteurs chauds comme prétendants de plus long terme. Connaître la thermodynamique dit lesquelles de ces voies sont bornées par la physique (le silicium, près de sa limite) et lesquelles gardent de la marge (les tandems, avec une marge importante).

## Ce que cela signifie pour la production non photovoltaïque

Le même type d'argument thermodynamique s'applique, avec d'autres constantes, à tous les procédés de conversion solaire.

La production solaire thermique a son propre plafond de type Carnot, dépendant de la température du récepteur. La photosynthèse a un plafond de rendement quantique d'environ 11 % dans des conditions idéales, les cultures au champ opérant un ordre de grandeur en dessous. La photosynthèse artificielle pour produire du carburant a des limites fixées par la thermodynamique de la réaction visée — casser l'eau a un plafond différent de réduire le CO₂.

La limite de Shockley-Queisser n'est pas une bizarrerie propre au photovoltaïque ; c'est le cas photovoltaïque d'un principe général. La conversion solaire est bornée ; les bornes dépendent du procédé de conversion. Connaître la borne de son procédé dit si la frontière d'ingénierie en est proche ou éloignée — et si progresser davantage est affaire d'effort ou affaire de physique.

C'est le genre de clarté qu'il vaut mieux avoir avant d'engager des paris énergétiques à l'échelle de la décennie.

## Sources

1. **National Laboratory of the Rockies** — [Recherche photovoltaïque](https://www.nlr.gov/pv/research). Recherche photovoltaïque et contexte de performance du laboratoire du département de l'Énergie des États-Unis anciennement nommé NREL.
2. **Département de l'Énergie des États-Unis** — [Solar Energy Technologies Office](https://www.energy.gov/cmei/systems/integrated-energy-systems-office). Contexte de recherche et de déploiement de l'énergie solaire au DOE.
3. **Reviews of Modern Physics** — [Revues de l'American Physical Society](https://journals.aps.org/rmp/). Littérature de revue à comité de lecture sur les limites photovoltaïques et thermodynamiques.
