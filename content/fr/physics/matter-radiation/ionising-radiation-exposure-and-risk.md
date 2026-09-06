---
title: 'Rayonnements ionisants et risque : ce que l''épidémiologie peut et ne peut pas trancher'
metaTitle: 'Rayonnement ionisant : ce que dit l''épidémiologie'
excerpt: Au-delà de quelques centaines de millisieverts, les effets sanitaires des rayonnements ionisants sont directement observés. En dessous, les estimations viennent d'une extrapolation — et la forme de cette extrapolation reste un débat scientifique ouvert, aux conséquences réelles.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - radiation-protection
  - epidemiology
  - linear-no-threshold
  - radon
  - dose-limits
related:
  - radioactivity-and-radiation-units
  - atomic-and-nuclear-physics-explained
  - nuclear-fission-and-reactors
  - measurement-uncertainty-explained
pillar: atomic-and-nuclear-physics-explained
---

La radiobiologie répartit ses effets en deux catégories qui ne se comportent en rien de la même façon, et l'essentiel de la confusion du public vient de l'application de la logique de l'une à l'autre.

**Les réactions tissulaires**, historiquement appelées effets déterministes, exigent qu'un nombre suffisant de cellules d'un organe soient tuées ou mises hors d'usage pour que la fonction de cet organe se dégrade de façon mesurable. Elles ont des seuils, elles apparaissent en quelques heures à quelques semaines, et au-dessus du seuil leur gravité augmente avec la quantité absorbée. L'Organisation mondiale de la santé situe le seuil du syndrome d'irradiation aiguë à environ 1 Sv ; l'EPA des États-Unis le décrit comme exigeant plus de 0.75 gray délivrés « en un court laps de temps (minutes à heures) ». En dessous du seuil, l'effet n'est pas observé.

**Les effets stochastiques** — principalement les cancers, et en principe les effets héréditaires — fonctionnent à l'inverse. La gravité d'un cancer ne dépend pas de l'exposition qui l'a déclenché. Ce que l'on suppose proportionnel à l'exposition, c'est la probabilité. Aucun seuil n'a été observé, ce qui n'équivaut pas à démontrer qu'il n'en existe aucun, et c'est dans l'écart entre ces deux énoncés que se loge tout le débat sur les faibles doses.

Les deux catégories commencent par le même événement physique : une émission porteuse d'assez d'énergie pour arracher un électron à une molécule. Cette échelle d'énergie — des mégaélectronvolts par désintégration, face aux quelques électronvolts qui tiennent ensemble une liaison chimique — est fixée par [l'énergie de liaison du noyau qui l'a émise](/fr/physics/matter-radiation/atomic-and-nuclear-physics-explained). Ce qui diverge, c'est tout ce qui suit la première ionisation.

## Les deux cohortes sur lesquelles reposent les estimations

Presque tous les coefficients de risque quantitatifs de la radioprotection remontent à un petit nombre de grandes cohortes, et deux d'entre elles dominent.

La Life Span Study des survivants japonais des bombardements atomiques est l'ancrage. Son analyse la plus récente de l'incidence des cancers solides a suivi 105 444 personnes de 1958 à 2009 — 80 205 survivants plus 25 239 résidents qui n'étaient dans aucune des deux villes à l'époque — cumulant 3 079 484 personnes-années et recensant 22 538 premiers cancers solides primitifs, dont 992 étaient, selon les termes de l'étude elle-même, « associés à une exposition aux rayonnements ».

L'International Nuclear Workers Study aborde le problème par l'autre extrémité de l'échelle des doses. Son analyse de 2023 portait sur 309 932 travailleurs suivis en France, au Royaume-Uni et aux États-Unis, avec une dose cumulée moyenne au côlon de 20.9 mGy chez les travailleurs dont la dose estimée dépassait zéro, accumulée lentement au fil des vies professionnelles, 10.7 millions de personnes-années de suivi et 28 089 décès par cancer solide.

| | Life Span Study | INWORKS |
| --- | --- | --- |
| Population | 105 444 survivants des bombardements atomiques et témoins | 309 932 travailleurs du nucléaire suivis |
| Exposition | Exposition aiguë unique | Exposition professionnelle prolongée |
| Ordre de grandeur typique | Large plage, s'étendant au-dessus de 1 Gy | Dose cumulée moyenne au côlon de 20.9 mGy, chez les travailleurs dont la dose dépasse zéro |
| Critère rapporté | 22 538 cancers solides incidents | 28 089 décès par cancer solide |
| Excès de risque relatif | 0.64 par Gy chez les femmes à l'âge atteint de 70 ans (IC à 95 % 0.52–0.77) | 0.52 par Gy (IC à 90 % 0.27–0.77) |

Aucun de ces deux excès de risque relatif n'est un nombre unique transposable : dans l'analyse des bombardements atomiques, il varie fortement avec le sexe, avec l'âge à l'exposition et avec l'âge atteint, et le chiffre du tableau est cité pour une combinaison de référence. Cette réserve faite, les deux études s'accordent mieux qu'elles n'en ont le droit, étant donné que l'une décrit un éclair d'exposition mixte gamma et neutrons et l'autre des décennies d'exposition externe à faible débit. Cet accord est l'argument isolé le plus fort pour dire que le système de protection n'est pas gravement erroné. Là où des jeux de données crédibles construits sur des protocoles différents convergent, la convergence pèse plus lourd que chacun des résultats pris isolément — c'est le point général développé dans la note sur [ce que signifie le désaccord entre deux bons jeux de données](/fr/insight/why-two-credible-datasets-disagree).

## Là où commence l'extrapolation, et ce qui est réellement contesté

Le **[modèle linéaire sans seuil](/en/glossary/linear-no-threshold)** suppose que le risque stochastique est proportionnel à la quantité absorbée jusqu'à zéro, sans plancher sûr. L'EPA en énonce directement la forme opérationnelle : « diviser la dose par deux divise le risque par deux ».

Il vaut la peine d'être précis sur ce qui est contesté. L'usage du modèle comme outil réglementaire est quasi universel, parce qu'il est simple, conservateur et additif entre les sources. Savoir s'il est *vrai* aux faibles niveaux est une autre question, et les données y sont réellement partagées.

Les données des bombardements atomiques appuient la linéarité chez les femmes, avec « aucune preuve d'un seuil ». Chez les hommes, la même analyse a trouvé une courbure vers le haut significative sur toute la plage et a préféré un ajustement linéaire-quadratique, qui donne un excès de risque relatif de 0.20 à 1 Gy mais de seulement 0.010 à 0.1 Gy — avec un intervalle de confiance allant de −0.0003 à 0.021, c'est-à-dire un intervalle qui contient zéro. Une extrapolation linéaire depuis la région des fortes expositions surestimerait le bas de l'échelle pour ce groupe.

Les données professionnelles vont dans l'autre sens. INWORKS a rapporté « certains éléments » en faveur d'« une pente plus forte de la relation dose-réponse aux doses plus faibles que sur l'ensemble de la plage de doses », l'association étant « approximativement doublée » lorsque l'analyse était restreinte à 0–100 mGy.

Ainsi une grande cohorte suggère que le modèle linéaire peut être conservateur pour une partie de sa population, et l'autre suggère qu'il peut ne pas l'être assez, précisément dans la plage qui compte le plus pour la protection des travailleurs et du public. Aucun des deux résultats ne réfute l'autre ; ce sont des schémas d'exposition différents, des critères différents — incidence contre mortalité — et une dosimétrie différente. Les données disponibles sont trop limitées pour trancher la forme de la relation en dessous d'environ 100 mSv, et c'est là le résumé honnête.

## Les limites de dose sont des plafonds administratifs, pas des plafonds biologiques

Le système de protection n'attend pas que le débat soit tranché. Les recommandations de la Publication 103 de la CIPR, que les autorités nationales adoptent largement, fixent une limite professionnelle de « 20 mSv par an en moyenne sur 5 ans, sans dépasser 50 mSv une année quelconque » et une limite pour le public de « 1 mSv par an », avec une limite distincte pour la peau de 500 mSv en moyenne sur 1 cm² pour les travailleurs.

Ce sont des plafonds administratifs dérivés d'un modèle de risque, non des seuils biologiques. Rien ne change à 20 mSv dans une cellule. Ces chiffres existent pour que les expositions puissent être maintenues, selon les termes mêmes du système, aussi basses que raisonnablement possible tout en restant bornées, et ils sont fixés bien en dessous de la plage où des effets ont été directement observés.

Elles sont aussi, et c'est important, exprimées en dose efficace — la grandeur relative à la personne de référence dont les limites sont exposées avec [la chaîne des unités, du becquerel au sievert](/fr/physics/matter-radiation/radioactivity-and-radiation-units). Une revue publiée dans *Health Physics* est sans ambiguïté : la dose efficace « ne devrait jamais être utilisée pour estimer le risque futur de cancer lié à des sources spécifiques d'exposition aux rayonnements » et « n'est pas recommandée pour les évaluations épidémiologiques ». La grandeur qui sert à écrire les limites n'est pas celle qui peut dire à un individu ce qui lui est arrivé.

Pour l'ordre de grandeur, l'EPA propose un repère souvent plus utile qu'un pourcentage : « Environ 99 pour cent des individus ne développeraient pas de cancer à la suite d'une exposition unique et uniforme du corps entier de 100 millisieverts (10 rem) ou moins. » Le classement propre de l'UNSCEAR place tout ce qui va jusqu'à 10 mSv dans la plage sans « preuve directe d'effets sur la santé humaine », et réserve le mal des rayons à la bande 1–10 Sv.

## Le radon, que personne n'a choisi

La plus grande contribution naturelle isolée est un gaz qui suinte du sol vers l'intérieur des bâtiments. L'OMS estime que le radon cause « entre 3 % et 14 % de tous les cancers du poumon dans un pays, selon la concentration moyenne nationale de radon et la prévalence du tabagisme », le risque de cancer du poumon augmentant « d'environ 16 % par tranche de 100 Bq/m3 d'augmentation de la concentration moyenne de radon à long terme ». Les concentrations intérieures varient « de 10 Bq/m3 à plus de 10 000 Bq/m3 » face à un bruit de fond extérieur de 5–15 Bq/m3, et l'OMS recommande un niveau de référence national de 100 Bq/m³, à ne pas dépasser 300 Bq/m³ là où ce niveau est inatteignable.

Deux traits font du radon le cas intéressant. Son estimation de risque provient largement d'études résidentielles et d'études de mineurs plutôt que des cohortes d'exposition aiguë, si bien qu'elle constitue en partie une preuve indépendante d'un effet à faible niveau. Et il interagit fortement avec le tabagisme, ce qui signifie qu'un chiffre moyen de population dissimule une large dispersion entre les individus — le même problème de moyenne qui fait de la dose efficace un mauvais prédicteur individuel.

## Pourquoi la question des faibles doses reste ouverte

L'obstacle est statistique plutôt que conceptuel. Détecter une petite augmentation proportionnelle sur un fond d'incidence des cancers au cours de la vie déjà courante dans la population générale exige des cohortes bien plus grandes que celles rassemblées aujourd'hui, suivies plus longtemps, avec une dosimétrie individuelle assez bonne pour que l'erreur de mesure ne noie pas le signal. La reconstruction rétrospective des doses est elle-même une source substantielle d'incertitude, et les erreurs sur une variable d'exposition tendent à aplatir une relation apparente plutôt qu'à l'accentuer.

Pendant ce temps, les conséquences pratiques de cette question non résolue sont réelles : l'arithmétique de la dose collective, qui multiplie un chiffre individuel minuscule par une population très nombreuse, produit des estimations de victimes qui dépendent entièrement de la validité de l'hypothèse linéaire au bas de sa plage. C'est un cas d'école de la manière dont un choix de modélisation fait par commodité administrative voyage jusqu'aux chiffres des titres sans ses réserves, motif examiné dans [comment l'incertitude se perd entre un jeu de données et un titre](/fr/insight/uncertainty-lost-between-dataset-and-headline). Des questions semblables se posent pour les rejets de routine et les déchets [du cycle du combustible de fission](/fr/physics/matter-radiation/nuclear-fission-and-reactors), où les expositions en jeu se situent très en dessous de la plage que peut résoudre une étude épidémiologique.

## Sources

1. **Radiation Research** — [Solid cancer incidence among the Life Span Study of atomic bomb survivors: 1958–2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC10320812/). Taille de la cohorte, durée de suivi, nombre de cas et modèles dose-réponse par sexe.
2. **BMJ** — [Cancer mortality after low dose exposure to ionising radiation in workers in France, the United Kingdom, and the United States (INWORKS)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10427997/). Taille de la cohorte professionnelle, dose cumulée moyenne et excès de risque relatif.
3. **Radiation Physics and Chemistry** — [A comprehensive review of dose limits, triage systems and measurement tools](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170981/). Tableau des limites de dose professionnelles, publiques et cutanées de la Publication 103 de la CIPR.
4. **Organisation mondiale de la santé** — [Ionizing radiation and health effects](https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects). Seuil du syndrome d'irradiation aiguë et part des expositions médicales.
5. **Organisation mondiale de la santé** — [Radon and health](https://www.who.int/news-room/fact-sheets/detail/radon-and-health). Fraction des cancers du poumon attribuable, risque par 100 Bq/m³ et niveaux de référence.
6. **US EPA** — [Radiation health effects](https://www.epa.gov/radiation/radiation-health-effects). Le modèle linéaire sans seuil comme base réglementaire, et le repère de 100 mSv.
7. **UNSCEAR** — [Radiation FAQ](https://www.unscear.org/unscear/en/areas-of-work/radiation-faq.html). Bandes de dose indicatives et effets associés à chacune.
8. **Health Physics** — [Appropriate use of effective dose in radiation protection and risk assessment](https://pmc.ncbi.nlm.nih.gov/articles/PMC5878049/). Limites à l'interprétation de la dose efficace comme risque individuel.
