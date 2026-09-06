---
title: 'Transfert thermique : trois mécanismes qui varient différemment avec la température'
metaTitle: 'Transfert thermique : conduction, convection et rayonnement'
excerpt: La conduction et la convection croissent à peu près comme l'écart de température ; le rayonnement croît comme la puissance quatrième de la température absolue. Cet écart d'exposant décide du mécanisme dominant, et la réponse change avec la température de service.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - heat-transfer
  - conduction
  - convection
  - thermal-radiation
  - emissivity
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - solar-radiation-and-earth-energy-balance
pillar: laws-of-thermodynamics-explained
_bodyHash: e53d7a0f
---

Prenons une surface à 500 K dans un environnement à 300 K, puis portons-la à 1,500 K. L'écart de température qui entraîne la conduction et la convection est multiplié par six. Le flux radiatif net, lui, est multiplié par environ 93, passant d'environ 3.1 kW m⁻² à 287 kW m⁻². Rien n'a changé du côté des matériaux ; ce sont les exposants qui diffèrent. La conduction et la convection sont entraînées par une *différence* de température, le rayonnement par la différence des puissances quatrièmes de la température *absolue*, et c'est ce décalage qui fait que la principale voie de perte n'est pas la même dans un cryostat, dans un mur de maison et dans le carter d'une turbine.

La thermodynamique fixe le sens dans lequel l'énergie se déplace et la quantité de travail que l'on peut extraire au passage, comme [l'énoncent les quatre principes](/fr/physics/thermodynamics/laws-of-thermodynamics-explained), mais elle ne met aucune horloge sur le processus. La vitesse relève d'un autre sujet, et elle ne dispose que de trois mécanismes.

## Conduction : une loi de gradient dont le coefficient n'est pas une constante

La conduction transporte l'énergie à travers un milieu immobile par collisions moléculaires ou électroniques. La loi de Fourier énonce que le flux est proportionnel au gradient local de température, la constante de proportionnalité étant la conductivité thermique, k. À travers une plaque plane en régime permanent, cela se réduit à un flux kΔT/L : diviser par deux l'épaisseur d'un mur double donc sa déperdition, et des couches en série additionnent des résistances plutôt que des conductances.

La netteté de la formule masque tout ce que le coefficient doit encaisser. La base de données des matériaux cryogéniques du NIST publie, pour le cuivre exempt d'oxygène, des ajustements de courbe valables de 4 K à 300 K et annoncés à 1–2% près des données sous-jacentes. Évalués à 300 K, ces ajustements donnent environ 390–400 W m⁻¹ K⁻¹ pour toutes les puretés du tableau : à température ambiante, la teneur en impuretés ne compte quasiment pas. Évalués à 20 K, les mêmes ajustements donnent environ 1.4 × 10³ W m⁻¹ K⁻¹ pour un rapport de résistance résiduelle de 50 et environ 6.6 × 10³ pour un rapport de 500. Même élément, même équation, et près d'un facteur cinq entre deux lots de cuivre chimiquement presque identiques.

Les interfaces compliquent encore le tableau. Deux solides pressés l'un contre l'autre ne se touchent qu'au sommet des aspérités : un joint réel porte donc un saut de température qu'aucune conductivité de volume ne prédit. Dans les assemblages feuilletés ou boulonnés, la résistance de contact est souvent le terme le plus grand de la chaîne, et c'est pourquoi une conception thermique qui s'arrête aux propriétés des matériaux tend à être optimiste.

## Convection : le mécanisme dont le coefficient se mesure au lieu de se démontrer

L'expression de la convection — le flux est égal à h multiplié par l'écart de température entre la surface et le fluide — a l'allure d'une loi physique alors qu'elle tient davantage de la définition. Le coefficient d'échange convectif h absorbe tout ce que l'équation a laissé de côté : vitesse d'écoulement, géométrie, orientation, état de surface, ainsi que la viscosité, la masse volumique, la conductivité et la chaleur spécifique du fluide.

Comme h ne peut être déduit des premiers principes pour des géométries réalistes, on l'obtient à partir de corrélations entre nombres sans dimension : le nombre de Nusselt à partir de ceux de Reynolds et de Prandtl en convection forcée, à partir de celui de Rayleigh en convection naturelle. Ces corrélations sont des ajustements sur des expériences particulières et sur des plages particulières, et leur exactitude se compte en dizaines de pour cent plutôt qu'en pour cent. C'est en grande partie de là que vient la marge de conception retenue pour le dimensionnement des échangeurs de chaleur, et le mode de défaillance consiste à employer une corrélation en dehors de la géométrie ou du régime d'écoulement pour lesquels elle a été établie.

La convection explique aussi l'essentiel de ce que fait un isolant. Les isolants fibreux et les mousses agissent d'abord en immobilisant l'air dans des pores assez petits pour supprimer la circulation, et non parce que la matrice solide conduit mal ; la lame de gaz scellée d'un vitrage est dimensionnée assez mince pour que l'écoulement dû à la poussée d'Archimède ne puisse pas s'amorcer. Élargissez la lame et la déperdition augmente, alors même qu'il y a désormais plus de gaz entre les vitres.

## Rayonnement : la puissance quatrième change l'arithmétique

Toute surface au-dessus du zéro absolu émet un [rayonnement électromagnétique](/fr/physics/quantum-basics/electromagnetic-spectrum-applications) à un taux donné par la loi de Stefan–Boltzmann : εσT⁴, avec σ = 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴, une valeur que le SI fixe désormais exactement parce qu'elle découle d'autres constantes définies. L'échange net entre une surface et son environnement varie comme la différence des puissances quatrièmes.

Deux conséquences découlent de cet exposant. Une surface noire à 300 K émet environ 459 W m⁻², ce qui paraît énorme jusqu'à ce que l'on retranche les 459 W m⁻² qui reviennent d'un environnement à la même température ; c'est le net qui compte, et un excès de 10 K sur l'ambiance ne donne qu'environ 64 W m⁻² nets — comparable à la convection naturelle dans l'air, et donc jamais négligeable au voisinage de la température ambiante. À 1,500 K, la même surface émet environ 287 kW m⁻², et le rayonnement cesse de rivaliser avec les deux autres mécanismes pour se mettre à les dominer.

L'autre levier est spectral. L'**émissivité** est le rapport de l'émission d'une surface à celle d'un émetteur parfait, et la loi de Kirchhoff la lie à l'absorptivité à la même longueur d'onde et dans la même direction. Comme le rayonnement solaire arrive aux courtes longueurs d'onde tandis qu'une surface proche de la température ambiante émet dans l'infrarouge thermique, on peut construire un revêtement qui réfléchit la première bande et rayonne fortement dans la seconde. La démonstration la plus nette est un dispositif décrit dans [*Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/), qui a atteint une moyenne de 37 °C sous la température de l'air ambiant sur un cycle jour–nuit complet, avec un abaissement maximal de 42 °C, à l'aide d'un émetteur accordé sur la fenêtre atmosphérique 8–13 µm. Il montre aussi combien l'effet est faible face à la concurrence : l'ensemble a exigé une enceinte à vide à 10⁻⁶ Torr et dix écrans de rayonnement concentriques pour empêcher la conduction et la convection d'effacer le déficit radiatif. La version non protégée de la même physique est la toiture réfléchissante, pour laquelle l'Agence américaine de protection de l'environnement rapporte des baisses maximales de température intérieure de 1.2–3.3 °C dans les bâtiments sans climatisation et des baisses de la pointe de demande de froid de 11–27% dans ceux qui en sont équipés.

| Mécanisme | Ce qui l'entraîne | Comment il varie | Ce sur quoi on agit pour le maîtriser |
| --- | --- | --- | --- |
| Conduction | Gradient de température dans un milieu | Linéaire en ΔT, inverse de la longueur du trajet | Conductivité, épaisseur, qualité du contact |
| Convection | Écart surface-fluide et écoulement | Linéaire en ΔT, avec h fixé par l'écoulement et la géométrie | Vitesse, épaisseur de lame, changement de phase |
| Rayonnement | Température absolue des deux surfaces | Différence des puissances quatrièmes | Émissivité, sélectivité spectrale, facteur de forme |

## Deux systèmes où le dosage fait toute la conception

L'aube de turbine à gaz est un problème de conduction et de convection né d'un souhait thermodynamique. Le rendement du cycle croît avec la température d'entrée, si bien que des programmes financés par le département de l'Énergie des États-Unis ont visé des températures d'entrée de turbine de 1,700 °C ou plus — sciemment au-delà du point de fusion de l'alliage du substrat — et s'appuient sur un refroidissement par transpiration et par structure en treillis pour maintenir un gradient à travers quelques millimètres de métal. La pièce survit non pas parce que le matériau tolère la température des gaz, mais parce que le transport est conçu pour ; le motif de rendement qui la sous-tend est exposé dans [les machines thermiques et leurs limites de rendement](/fr/physics/thermodynamics/heat-engines-and-efficiency-limits).

Une planète est le cas inverse. Au sein du système terrestre, la convection et l'évaporation déplacent l'essentiel de l'énergie : la comptabilité de la NASA donne environ 340 W m⁻² arrivant au sommet de l'atmosphère en moyenne globale, dont 29% réfléchis, 23% absorbés dans l'atmosphère et 48% à la surface ; de ce même total incident, 25% repartent de la surface par évaporation et 5% par courants thermiques, contre 17% nets sous forme d'infrarouge. Mais l'espace est un vide, si bien qu'aucun de ces deux mécanismes ne peut emporter un joule au-delà du sommet de l'atmosphère : la seule sortie est le rayonnement, depuis un corps qui, vu de l'extérieur, ressemble à une surface à environ −20 °C. Le fonctionnement du détail spectral de cette émission est repris dans [le transfert radiatif à travers une atmosphère](/fr/physics/climate-physics/radiative-transfer-explained) et dans le cadrage thermodynamique du [bilan énergétique planétaire](/fr/physics/thermodynamics/earth-energy-budget-and-the-second-law), tandis que la moitié entrante du bilan est traitée dans [le rayonnement solaire et le bilan énergétique de la Terre](/fr/physics/energy/solar-radiation-and-earth-energy-balance).

## Ce que les coefficients ne peuvent pas trancher

Chaque mécanisme porte un type d'incertitude différent, et ces incertitudes ne sont pas interchangeables. La conductivité est bien mesurée pour les matériaux purs en conditions contrôlées, mais la valeur en service d'un isolant dérive avec l'humidité, la compression et le vieillissement, et la performance réelle d'un ouvrage de paroi est le plus souvent fixée par les ponts thermiques plutôt que par la valeur imprimée sur le produit. Les coefficients convectifs héritent de la dispersion des expériences sur lesquelles les corrélations ont été ajustées. L'émissivité est le maillon le plus faible des trois : un chiffre unique de fiche technique est une moyenne sur la longueur d'onde, l'angle et l'état de surface, et l'oxydation ou la poussière peuvent le déplacer sensiblement au cours de la vie d'un composant.

Il existe aussi une frontière au-delà de laquelle la loi de Fourier elle-même cesse de s'appliquer. Aux échelles de longueur comparables au libre parcours moyen des [porteurs d'énergie](/fr/physics/energy/hydrogen-as-an-energy-carrier), ou sur des durées plus courtes que leur temps de diffusion, le transport devient balistique plutôt que diffusif, et une description par gradient ne tient plus. Ce régime importe pour la microélectronique et pour les thermoélectriques en couches minces, et il rappelle que les trois expressions ci-dessus sont des approximations de milieu continu assorties d'un domaine de validité, et non des lois au sens où le sont celles de la thermodynamique.

## Sources

1. **NIST Cryogenic Technologies Group** — [Material properties: OFHC copper](https://trc.nist.gov/cryogenics/materials/OFHC%20Copper/OFHC_Copper_rev1.htm). Ajustements de courbe de la conductivité thermique de 4 K à 300 K selon le rapport de résistance résiduelle, avec l'exactitude annoncée de l'ajustement.
2. **NIST CODATA** — [Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Valeur exacte et unités utilisées ici pour les calculs de flux radiatif.
3. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Répartition en moyenne globale de l'énergie solaire incidente et voies énergétiques de surface.
4. **Nature Communications** — [Radiative cooling to deep sub-freezing temperatures through a 24-h day–night cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/). Amplitudes du refroidissement sous l'ambiance, et vide et écrans nécessaires pour isoler le terme radiatif.
5. **U.S. Environmental Protection Agency** — [Using cool roofs to reduce heat islands](https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands). Effets mesurés des toitures à forte réflectance sur la température intérieure et sur la pointe de demande de froid.
6. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems developed by additive manufacturing with ODS alloys](https://www.osti.gov/biblio/1923377). Températures d'entrée de turbine visées au-delà du point de fusion du substrat et approche de refroidissement employée pour les atteindre.
