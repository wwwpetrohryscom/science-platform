---
title: 'Lire les statistiques de l''énergie : facteur de charge, LCOE et les métriques trompeuses'
metaTitle: Facteur de charge, LCOE et les métriques trompeuses
excerpt: Puissance installée, facteur de charge, coût actualisé et énergie primaire sont quatre comptes différents du même parc, et chacun porte une convention capable de déplacer un titre sans que rien de physique ne change.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - capacity-factor
  - levelised-cost
  - energy-statistics
  - primary-energy
  - electricity-generation
related:
  - energy-systems-explained
  - grid-integration-of-variable-renewables
  - wind-energy-physics
  - solar-photovoltaics-explained
pillar: energy-systems-explained
_bodyHash: 6cc47354
---

En 2025, le parc éolien de grande puissance des États-Unis a affiché en moyenne 154,6 GW de puissance installée pour un [facteur de charge](/fr/glossary/capacity-factor) de 34,2 pour cent, selon les chiffres préliminaires de l'*Electric Power Monthly* d'août 2026. Le parc photovoltaïque a affiché en moyenne 133,9 GW à 24,4 pour cent. Le parc nucléaire a affiché en moyenne 98,4 GW à 91,0 pour cent. Multipliez chaque paire et la puissance moyenne délivrée ressort à 52,9 GW pour l'éolien, 32,7 GW pour le solaire et 89,6 GW pour le nucléaire : avec environ un tiers de la puissance installée cumulée des deux autres, le parc nucléaire a produit plus d'électricité qu'eux réunis.

Aucun de ces chiffres n'est contesté et tous viennent de la même publication mensuelle. Si la comparaison surprend, c'est que la puissance installée est citée bien plus souvent que la production, et que le rapport entre les deux varie de près d'un facteur quatre entre ces trois parcs, et de bien plus sur l'ensemble des technologies de production. La distinction entre une quantité et un débit est développée dans le traitement du [travail, de l'énergie et de la puissance comme grandeurs distinctes](/fr/physics/mechanics-waves/energy-work-and-power) ; ce qui suit porte sur les quatre rapports dont dépend réellement l'information énergétique, et sur les conventions enfouies dans chacun. Ils se situent en aval de la comptabilité de conversion décrite dans la vue d'ensemble de [l'organisation d'un système énergétique](/fr/physics/energy/energy-systems-explained).

## Ce dont le rapport est le rapport

Le facteur de charge est la production nette sur une période divisée par ce que la même centrale aurait produit en fonctionnant en continu à sa puissance nominale. Les deux termes de cette fraction sont des conventions.

Le numérateur est la production *nette*, après la consommation propre de la centrale. Le dénominateur est une puissance nominale, et l'Energy Information Administration des États-Unis la construit à partir de la puissance d'été ajustée dans le temps — la puissance nominale d'été des tranches ayant fonctionné tout le mois, hors tranches démarrées ou arrêtées en cours de mois. Les puissances d'été sont conservatrices pour les centrales thermiques, parce que les performances du condenseur et de la turbine s'améliorent par temps froid. C'est pourquoi le facteur de charge mensuel du parc nucléaire a atteint 99,0 pour cent en décembre 2025 et 100,0 pour cent en janvier 2026. Un parc de réacteurs ne dépasse pas sa limite physique ; il dépasse une puissance nominale définie pour une journée chaude.

| Technologie (2025, États-Unis, grande puissance) | Facteur de charge | Ce qui le fixe |
| --- | --- | --- |
| Nucléaire | 91,0 % | Uniquement rechargements et arrêts de maintenance |
| Géothermie | 65,9 % | Ressource et disponibilité de la centrale |
| Gaz naturel, cycle combiné | 58,4 % | Économie d'appel face au prix du combustible |
| Charbon | 48,7 % | Économie d'appel ; place dans l'ordre de mérite |
| Hydroélectricité | 35,3 % | Disponibilité de l'eau et stockage saisonnier |
| Éolien | 34,2 % | Ressource en vent et cisaillement à hauteur de moyeu |
| Photovoltaïque | 24,4 % | Durée du jour, saison et latitude |
| Gaz naturel, turbine à vapeur | 19,8 % | Service de réserve et de pointe |
| Gaz naturel, turbine à combustion | 14,1 % | Service de pointe |
| Pétrole, turbine à vapeur | 11,3 % | Rarement économique à faire tourner |

## Trois raisons différentes qu'un chiffre soit bas

Un facteur de charge bas est souvent lu comme un défaut. C'est un symptôme avec au moins trois causes distinctes, et le diagnostic compte plus que le nombre.

La preuve la plus nette se trouve à l'intérieur d'un même combustible. Le gaz naturel apparaît trois fois dans le tableau ci-dessus, à 58,4, 19,8 et 14,1 pour cent. Le combustible est identique ; ce qui diffère, c'est le rendement thermique et donc la place dans l'ordre de mérite. Une tranche à cycle combiné est assez efficace pour tourner la plupart du temps ; une turbine à combustion existe pour couvrir les heures où rien de moins cher n'est disponible, et la faire tourner beaucoup plus signifierait que le système a un problème. Ses 14,1 pour cent sont l'intention de conception, non une sous-performance.

La limitation par la ressource est la deuxième cause et vaut pour l'éolien, le solaire et l'hydraulique, où l'entrée n'est pas pilotable. C'est une propriété du site et de la machine, retracée pour les éoliennes dans l'exposé de [pourquoi la production varie comme le cube de la vitesse du vent](/fr/physics/energy/wind-energy-physics) et pour les panneaux dans la discussion de [l'écart entre la puissance nominale d'un module et sa production sur site](/fr/physics/energy/solar-photovoltaics-explained).

La disponibilité est la troisième. Le facteur de charge mensuel du parc nucléaire américain est tombé à 80,9 pour cent en octobre 2025 et à 84,9 pour cent en mai précédent, deux intersaisons, où les arrêts pour rechargement sont typiquement programmés. C'est un calendrier de maintenance qui transparaît dans une statistique de performance.

## Une moyenne annuelle masque la forme qui compte

Ramener une année de production horaire à un seul nombre jette la propriété à laquelle un système électrique tient le plus : le moment où l'énergie arrive.

Sur 2025, le facteur de charge mensuel du parc photovoltaïque est allé de 13,7 pour cent en décembre à 32,4 pour cent en juillet. L'éolien a fait l'inverse, de 22,9 pour cent en septembre à 44,2 pour cent en mars. La production hydroélectrique est passée de 26,6 pour cent en septembre à 41,0 pour cent en mai. Chaque chiffre annuel dissimule une amplitude d'environ un facteur deux, et ces amplitudes ne sont en phase ni entre elles ni avec la demande. Un facteur de charge annuel ne dit pas si un parc contribue aux heures de tension du système, question distincte traitée par le crédit de capacité et reprise dans la page sur [ce que la variabilité coûte à un système électrique](/fr/physics/energy/grid-integration-of-variable-renewables).

## Le coût actualisé est un rapport actualisé, et c'est le taux qui travaille

Le [coût actualisé de l'électricité](/en/glossary/levelised-cost) divise le coût de cycle de vie actualisé d'une centrale par sa production de cycle de vie actualisée. Cette seconde actualisation est celle qu'on oublie : un mégawattheure produit en année 20 compte moins qu'un produit en année 2, si bien que le taux d'actualisation pénalise deux fois les actifs à longue durée de vie et forte intensité capitalistique.

L'étude de coûts de l'Agence internationale de l'énergie, portant sur 243 centrales dans 24 pays, retient 7 pour cent comme taux d'actualisation de référence. Sa propre analyse de sensibilité montre ce que ce choix achète : à 3 pour cent, le nucléaire passe sous le charbon et le gaz ; aux taux de 7 à 10 pour cent qu'elle associe aux environnements plus risqués, une centrale nucléaire neuve coûte davantage que les alternatives fossiles. La technologie, le site et l'ingénierie sont identiques dans les deux cas. Seul le coût supposé de l'argent a changé.

Cette sensibilité n'est pas hypothétique. Une analyse parue dans *iScience* sur les conditions de financement modélise des taux d'intérêt réels passant de −0,5 pour cent à 2,5 pour cent entre 2020 et 2024, en suivant l'Annual Technology Baseline du National Renewable Energy Laboratory, et calcule que ce renchérissement du financement a ajouté 18 pour cent au coût actualisé du photovoltaïque américain — 12 pour cent avec les crédits d'impôt — mais seulement 9 pour cent à une turbine à gaz à cycle combiné. L'asymétrie découle directement de l'intensité capitalistique : une technologie dont le coût est presque entièrement en amont est un actif de type obligataire, et son coût affiché suit le marché obligataire. La même étude rapporte un coût moyen pondéré du capital variant de plusieurs points de pourcentage entre pays pour la même technologie, ce qui suffit à réordonner un classement de coûts sans aucune différence d'ingénierie derrière.

## Ce qui se trouve hors de la clôture

Le coût actualisé est une métrique à la limite de la centrale, et l'agence qui le publie le dit : il s'applique au niveau de la centrale individuelle et ne traite pas la valeur qu'une technologie de production apporte au système. Deux centrales de coûts actualisés égaux ne sont pas également utiles si l'une produit quand les prix sont hauts et l'autre non — raison pour laquelle le même rapport a introduit une métrique ajustée de la valeur à côté de la métrique conventionnelle.

Une modélisation parue dans *Nature Communications* chiffre l'écart pour le solaire européen. Dans ses scénarios, les valeurs de marché du photovoltaïque tombent d'environ 50 pour cent du prix moyen en bloc plat dans un cas de faible pénétration à 19 pour cent dans un cas de forte pénétration, uniquement parce que la production se concentre aux mêmes heures sur tout le parc. L'écrêtement, dans la même modélisation, atteint 234 TWh d'ici 2040 dans une configuration et 131 TWh dans une autre qui étale la production sur la journée. Une métrique de coût calculée par mégawattheure produit ne voit rien de tout cela, parce qu'elle compte les mégawattheures écrêtés et de faible valeur exactement comme les autres.

## L'énergie primaire : la convention fait le titre

La dernière des quatre métriques est celle où l'arithmétique est triviale et la convention décisive. Un kilowattheure d'électricité contient 3 412 Btu. Une centrale thermique dont la consommation spécifique est de 10 500 Btu par kilowattheure a un rendement de 33 pour cent ; une à 7 500 Btu par kilowattheure atteint 45 pour cent.

Demandez maintenant combien d'énergie *primaire* a consommé un parc éolien. Il n'y a pas de combustible : la réponse est donc un choix. Compter l'électricité à son propre contenu énergétique valorise un térawattheure éolien à 3 412 Btu par kilowattheure. Compter au contraire l'énergie fossile qu'il aurait fallu brûler pour produire la même électricité la valorise à un niveau proche de la consommation spécifique d'une centrale thermique — environ trois fois plus de Btu pour exactement la même électricité livrée. Aucune convention n'est fausse. Mais une part de renouvelables dans l'énergie primaire calculée d'une façon n'est pas comparable à une part calculée de l'autre, et l'écart suffit à faire paraître une transition rapide ou lente. Tout chiffre de part d'une source dans l'énergie *primaire* qui ne nomme pas sa convention a été dépouillé de ce qui le rend signifiant.

## Lire un chiffre honnêtement

Quatre vérifications couvrent l'essentiel des défaillances ci-dessus. Nommer le produit et la période, car un chiffre mensuel et un chiffre annuel pour le même parc diffèrent couramment de dix points de pourcentage ou plus. Vérifier le périmètre : les facteurs de charge de cette page ne couvrent que les producteurs de grande puissance, si bien que la production distribuée en toiture en est entièrement exclue. Vérifier le millésime : l'administration marque 2024 et avant comme définitif et 2025 et après comme préliminaire, et les valeurs préliminaires bougent. Et traiter tout chiffre de coût comme conditionnel à un taux d'actualisation rarement imprimé à côté.

Ces réserves sont précisément ce qui tend à disparaître entre un jeu de données et un titre, motif retracé dans l'analyse de [ce qui se perd sur le chemin de la publication](/fr/insight/uncertainty-lost-between-dataset-and-headline). Rien de tout cela ne rend les métriques inutiles : facteur de charge, coût actualisé et énergie primaire répondent chacun à une vraie question, et l'échec consiste à poser à l'une la question d'une autre. L'habitude qui l'évite est la discipline ordinaire consistant à [énoncer ce qu'une mesure peut soutenir](/fr/physics/mechanics-waves/measurement-uncertainty-explained), appliquée à des statistiques publiées plutôt qu'à des instruments.

## Sources

1. **US Energy Information Administration** — [Electric Power Monthly, tableau 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Facteurs de charge annuels et mensuels et puissance ajustée dans le temps pour les producteurs non fossiles de grande puissance.
2. **US Energy Information Administration** — [Electric Power Monthly, tableau 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Facteurs de charge annuels pour le charbon, le cycle combiné, la turbine à combustion, la turbine à vapeur et le pétrole.
3. **US Energy Information Administration** — [What is the efficiency of different types of power plants?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Consommation spécifique et conversion entre consommation spécifique et rendement thermique.
4. **US Energy Information Administration** — [British thermal units](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php). L'équivalence de 3 412 Btu pour un kilowattheure.
5. **Agence internationale de l'énergie et Agence de l'OCDE pour l'énergie nucléaire** — [Projected Costs of Generating Electricity 2020](https://www.iea.org/reports/projected-costs-of-generating-electricity-2020). Taux d'actualisation de référence, sensibilité au taux selon les technologies, et périmètre de la métrique à l'échelle de la centrale.
6. **iScience** — [Financing costs and the competitiveness of renewable power](https://pmc.ncbi.nlm.nih.gov/articles/PMC12677178/). Évolution des taux d'intérêt réels, effet asymétrique des coûts de financement sur le solaire et le gaz, et coût du capital par pays.
7. **Nature Communications** — [Impacts of large-scale deployment of vertical bifacial photovoltaics on European electricity market dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303785/). Valeurs de marché modélisées du photovoltaïque par rapport aux prix moyens, et volumes d'écrêtement selon la configuration de déploiement.
