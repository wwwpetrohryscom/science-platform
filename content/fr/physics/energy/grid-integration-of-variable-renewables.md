---
title: 'Intégration au réseau : ce que la variabilité coûte réellement à un système électrique'
metaTitle: Ce que la variabilité coûte vraiment au réseau
excerpt: Le coût de l'éolien et du solaire dans un système électrique n'est pour l'essentiel pas un coût d'énergie. C'est le prix du réglage de fréquence, de l'écrêtement, de la capacité garantie et des lignes — quatre problèmes distincts réduits à un seul mot.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - grid-integration
  - power-systems
  - curtailment
  - system-flexibility
  - electricity-markets
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - capacity-factor-and-energy-metrics
  - wind-energy-physics
pillar: energy-systems-explained
_bodyHash: 79a3f435
---

À la fin du printemps 2020, le système électrique de la Grande-Bretagne a mené une expérience que personne n'avait conçue. Le confinement a retiré une large part de la demande tandis que la production éolienne et solaire se poursuivait, et le gestionnaire du système s'est retrouvé à payer autre chose que de l'électricité. Le coût des services système de mai à juillet a atteint 302 millions de livres, contre 101 millions pour les mêmes mois de l'année précédente — trois fois la facture sur un trimestre où moins d'énergie a été livrée. La demande nationale est tombée à sa plus faible valeur enregistrée, 13.4 GW dans la nuit du 28 juin, tandis que la capacité synchrone devant rester couplée pour tenir la stabilité du système était estimée autour de 8 à 9 GW.

Ce trimestre est le problème d'intégration en miniature. Ce qu'un système paie pour une production pilotée par la météo n'est pour l'essentiel pas un paiement pour de l'énergie ; c'est un paiement pour des services que les centrales conventionnelles fournissaient accessoirement, parce qu'elles tournaient. Ces services sont séparables, ils relèvent de physiques différentes, et les regrouper sous le mot « intermittence » masque lequel est contraignant. La chaîne de conversion plus large dans laquelle ils s'inscrivent est exposée dans la vue d'ensemble de [la façon dont un système énergétique est assemblé](/fr/physics/energy/energy-systems-explained).

## Variabilité et incertitude ne sont pas le même problème

La variabilité, c'est le fait que la production change. L'incertitude, c'est le fait qu'on ne sait pas à l'avance exactement comment. Elles sont couvertes par des ressources différentes et elles coûtent des montants différents.

Une ressource qui varie fortement mais de façon prévisible est comparativement peu coûteuse à accueillir : le programme est construit autour d'elle la veille, et les moyens flexibles qui comblent l'écart sont engagés sans hâte. Une ressource presque constante qui surprend occasionnellement l'exploitant est coûteuse, car la surprise doit être couverte par de la réserve tenue en temps réel, et la réserve est une capacité payée pour être disponible plutôt que pour produire. C'est pourquoi l'amélioration de la prévision est l'une des mesures d'intégration les moins chères disponibles : elle ne change rien à la variabilité, mais elle convertit l'incertitude en variabilité, et la variabilité est la moins chère des deux.

## La fréquence est un bilan soldé chaque seconde

La fréquence du réseau est le signe visible de l'équilibre instantané entre production et consommation. Dans un parc de grandes machines synchrones, les masses tournantes sont couplées électromécaniquement à cette fréquence, de sorte qu'un déséquilibre soudain puise d'abord dans leur énergie cinétique. Cette énergie de rotation stockée — [l'inertie du système](/en/glossary/grid-inertia) — fixe la vitesse de variation de la fréquence après une perturbation, ce qui fixe à son tour le temps dont disposent les systèmes de conduite avant que les protections ne commencent à déconnecter des éléments.

La production raccordée par onduleur n'en fournit pas par défaut. Un onduleur suiveur de réseau mesure la forme d'onde de tension et injecte un courant en phase avec elle ; il lui faut une forme d'onde à suivre. Un onduleur formeur de réseau impose sa propre forme d'onde et se comporte, du point de vue du réseau, davantage comme une source que comme un suiveur. Des travaux de simulation publiés dans *Scientific Reports* illustrent la différence sur un réseau d'essai à neuf nœuds : sous un échelon de charge d'environ un tiers, un cas entièrement synchrone est descendu à un creux de fréquence de 59.42 Hz et a mis environ 80 secondes à se stabiliser, un cas mixte a atteint 59.79 Hz et s'est stabilisé en moins de 8 secondes, et un cas entièrement formeur de réseau a tenu 59.85 Hz. Ce sont des résultats modélisés sur un petit réseau d'essai plutôt que des mesures sur un réseau réel, mais le sens compte : la capacité relève de la conception de la commande, non de l'acier en rotation.

La tension est un problème distinct relevant d'une physique distincte — locale plutôt que globale, et gérée par la puissance réactive. C'est pourquoi les réseaux de distribution à forte densité de production en toiture rencontrent des contraintes bien avant le réseau de grand transport.

## L'écrêtement est un signal de prix qui a mauvaise presse

L'[écrêtement](/en/glossary/curtailment) — la réduction délibérée de la production disponible — est habituellement présenté comme du gaspillage. Il se lit mieux comme un système qui refuse de payer une énergie qu'il ne peut pas utiliser, et ses causes sont diagnosticables. Une revue de l'écrêtement solaire mondial publiée dans *Solar Energy* le rattache à un réseau de transport incapable d'acheminer une production éloignée jusqu'à la consommation, à un décalage entre le moment où la production culmine et celui où la demande culmine, et à une suroffre lorsque la production variable ajoutée aux centrales inflexibles à fonctionnement obligé dépasse la demande — et conclut que les différences entre systèmes reflètent autant les politiques publiques et les pratiques de planification du réseau que la géographie ou la saison.

| Système (2018) | Part de la production solaire potentielle écrêtée | Cause dominante |
| --- | --- | --- |
| Allemagne | 0.3% | Contraintes du réseau local |
| Californie | 1.5% | Suroffre de milieu de journée face à des centrales inflexibles |
| Hawaï | 2.7% à l'échelle de l'État | Petits systèmes insulaires ; 14% à Maui |
| Arizona | 2.9% | Suroffre localisée |
| Chine (national) | 3.0% | Limites du transport ; 16% au Xinjiang, 10% au Gansu |
| Chili | environ 6% | Production éloignée, transport limité |
| Texas | 8.4% | Congestion du réseau de transport |

Deux ordres de grandeur séparent le haut et le bas de cette colonne, et aucune part de cet écart ne s'explique par l'ensoleillement que reçoit chaque lieu. L'écrêtement est un résultat de réseau et de marché, et la même étude a constaté un doublement de l'écrêtement californien entre 2018 et 2019.

Les prix négatifs sont la version marchande du signal. Lorsqu'un producteur perçoit une rémunération par mégawattheure indépendamment du prix de marché — par une subvention, un crédit d'impôt ou un contrat — il reste rationnel de continuer à produire en dessous de zéro, et le prix baisse jusqu'à ce que quelque chose de moins rentable s'arrête. Un prix négatif n'est pas la preuve d'un marché défaillant ; c'est la preuve que la réponse la moins chère à la suroffre n'a pas été construite. Laquelle est la moins chère dépend de la durée de l'excédent, argument développé dans la page compagne sur [ce que la durée de stockage achète réellement](/fr/physics/energy/energy-storage-fundamentals). Là où les excédents sont saisonniers, les convertir en [un vecteur chimique stockable](/fr/physics/energy/hydrogen-as-an-energy-carrier) devient une option, au prix d'une lourde pénalité de conversion.

## Le crédit de capacité n'est pas le facteur de charge

Ces deux rapports répondent à des questions sans lien et sont couramment intervertis. Le [facteur de charge](/fr/physics/energy/capacity-factor-and-energy-metrics) porte sur l'énergie : la production annuelle divisée par ce qu'aurait produit un fonctionnement continu à la puissance nominale. Le crédit de capacité porte sur la sûreté d'approvisionnement : la quantité de capacité conventionnelle qu'une ressource remplace sans dégrader l'aptitude du système à couvrir la demande dans les heures les plus tendues. Un parc peut avoir un facteur de charge honorable et un crédit de capacité faible, et l'écart se creuse avec le taux de pénétration, parce que les productions groupées sont corrélées — quand une machine est privée de vent, ses voisines le sont aussi, ce qui est précisément le mode de défaillance que la planification de l'adéquation existe pour prévenir. La dépendance à la vitesse du vent qui sous-tend cette corrélation est exposée dans la physique de [la puissance qu'une éolienne peut prélever à l'air en mouvement](/fr/physics/energy/wind-energy-physics).

Une étude sur la Nouvelle-Angleterre publiée dans *Heliyon* montre la forme du problème. Un mix à dominante éolienne dimensionné pour produire une fois la demande annuelle couvrait environ 73 pour cent de la demande horaire sans stockage, et un mix à dominante solaire environ 69 pour cent ; douze heures de stockage portaient les deux à environ 86 à 87 pour cent. Atteindre le niveau de sûreté de 99.97 pour cent utilisé dans la planification nord-américaine demandait environ deux fois et demie la demande annuelle en production, aux côtés de douze heures de stockage pour un mix à dominante éolienne, et davantage pour un mix à dominante solaire. La dernière tranche est un problème différent de la première : elle est fixée par les cycles saisonniers et les épisodes météorologiques de plusieurs jours, et la couvrir demande des semaines d'énergie stockée plutôt que des heures.

## La géographie fait le lissage le moins cher, et les lignes sont la contrainte

Agréger une production variable sur une vaste zone réduit sa variance, parce que les systèmes météorologiques sont corrélés spatialement sur une portée limitée et que des sites suffisamment éloignés ne montent et ne descendent pas ensemble. Cela fait du transport la forme de flexibilité la moins exotique disponible : il se substitue à la fois au stockage, à la réserve et à la capacité garantie, sans perte de cycle. Il a aussi le délai de réalisation le plus long, et c'est pourquoi la contrainte qui mord dans de nombreux systèmes est désormais une file d'attente plutôt qu'une technologie. L'évaluation *Electricity 2026* de l'Agence internationale de l'énergie situe entre 1,200 et 1,600 GW les projets à un stade avancé dans les files de raccordement à l'échelle mondiale, et estime que 450 à 700 GW d'entre eux pourraient être libérés par des technologies d'optimisation du réseau sur les lignes existantes — capacité dynamique des lignes et contrôle des flux de puissance, ainsi que des renforcements plus lourds comme le remplacement des conducteurs et le passage à une tension supérieure — et 750 à 900 GW de plus par des conventions de raccordement plus souples, non fermes. Les deux voies portent sur des couloirs qui existent déjà, plutôt que sur de nouveaux.

L'état des lieux de l'agence sur 50 systèmes électriques, couvrant près de 90 pour cent de la production solaire et éolienne mondiale, les classe en six phases selon le degré auquel la production variable a modifié l'exploitation. Le Danemark, l'Irlande, l'Australie-Méridionale et l'Espagne se situent en phase quatre ou au-delà, intégrant entre 35 et 75 pour cent de renouvelables variables dans la production annuelle — preuve que les phases décrivent une pratique d'ingénierie et non des plafonds. Le même rapport estime que des mesures d'intégration retardées pourraient mettre en péril jusqu'à 15 pour cent de la production solaire et éolienne d'ici 2030, soit jusqu'à 2,000 TWh de production physiquement disponible et sans débouché.

## « La charge de base » décrit une structure de coûts, pas une exigence du système

L'idée fausse la plus tenace dans ce domaine est qu'un système électrique exigerait une catégorie de centrales appelée charge de base. Ce qu'un système exige, c'est assez d'énergie à chaque heure et assez de contrôlabilité pour tenir la fréquence et la tension pendant qu'il la livre. La charge de base désigne deux autres choses : la part de la courbe de charge présente à toutes les heures, et une classe de centrales dont le point de fonctionnement le moins coûteux est plat parce que les coûts de capital dominent et que les coûts de combustible sont faibles.

Le relevé d'exploitation rend la distinction visible. Les facteurs de charge publiés par l'US Energy Information Administration — lus ici dans la publication d'août 2026, où les valeurs à partir de 2025 restent préliminaires — donnent le parc charbon de grande puissance à 52.8 pour cent en 2016, 40.5 pour cent en 2020 et 48.7 pour cent en 2025. Rien n'a changé dans ces chaudières ; ce sont les prix relatifs des combustibles et l'ordre d'appel qui ont changé. Sur les mêmes années, le parc nucléaire s'est maintenu entre environ 91 et 93 pour cent, reflet d'un coût du combustible si bas que fonctionner à pleine puissance est toujours le choix économique. Le chiffre d'un parc suit le marché, celui de l'autre suit le calendrier de maintenance.

## Où les chiffres de coût d'intégration sont les plus fragiles

**Les coûts d'intégration ne sont pas attribuables proprement.** Attribuer un coût à une ressource suppose un système contrefactuel sans elle, et le choix du contrefactuel déplace sensiblement la réponse — les estimations publiées varient davantage entre méthodologies qu'entre systèmes.

**Les pourcentages d'écrêtement ont un dénominateur modélisé.** L'énergie écrêtée est comparée à une production potentielle, qui n'a jamais été produite et doit être estimée à partir de données d'irradiance ou de vent plus une disponibilité supposée. Deux exploitants rapportant des écrêtements différents peuvent être en désaccord sur le dénominateur.

**Les études d'adéquation reposent sur un historique météorologique court.** Les événements qui fixent les exigences de sûreté sont rares, corrélés et étalés sur plusieurs jours, et l'historique en contient peu. Une poignée d'années météorologiques ne peut pas résoudre la queue de distribution que l'étude cherche à dimensionner, et c'est pourquoi le coût marginal du dernier pour cent de sûreté est le nombre le moins certain de l'exercice — et pourquoi les limites qui contraignent sont souvent institutionnelles plutôt que physiques, distinction examinée dans l'analyse des [contraintes qui ne relèvent pas de la technologie](/fr/insight/energy-transition-constraints-physical-and-institutional).

## Sources

1. **Agence internationale de l'énergie** — [Integrating Solar and Wind: executive summary](https://www.iea.org/reports/integrating-solar-and-wind/executive-summary). Cadre d'intégration en six phases, fourchette de 35–75 pour cent dans les systèmes pionniers, et estimation selon laquelle jusqu'à 15 pour cent de la production solaire et éolienne est menacée d'ici 2030.
2. **Agence internationale de l'énergie** — [Electricity 2026: executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Capacité qui pourrait être libérée par les technologies d'optimisation du réseau et par des conventions de raccordement non fermes.
3. **Applied Energy** — [Ancillary services in Great Britain during the COVID-19 lockdown](https://pmc.ncbi.nlm.nih.gov/articles/PMC9759740/). Coûts des services système, demande nationale minimale, et capacité synchrone estimée nécessaire à la stabilité.
4. **Solar Energy** — [Too much of a good thing? Global trends in the curtailment of solar PV](https://pmc.ncbi.nlm.nih.gov/articles/PMC7470769/). Parts écrêtées par système et causes identifiées derrière elles.
5. **Scientific Reports** — [Hybrid compatible grid forming inverters for low inertia and mixed generation grids](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357951/). Creux de fréquence et temps de stabilisation simulés pour les cas synchrone, hybride et à dominante onduleur.
6. **Heliyon** — [The impact of energy storage on the reliability of wind and solar power in New England](https://pmc.ncbi.nlm.nih.gov/articles/PMC10955263/). Niveau de sûreté atteint pour des tailles données de production et de stockage, et caractère saisonnier du résidu.
7. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Facteurs de charge annuels du parc charbon de grande puissance.
8. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Facteurs de charge annuels du parc nucléaire de grande puissance.
