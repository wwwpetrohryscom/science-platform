---
title: 'Gradients thermiques et stabilité : pourquoi la troposphère convecte et pas la stratosphère'
metaTitle: Gradients thermiques et stabilité atmosphérique
excerpt: Deux grandeurs différentes portent le même nom de gradient thermique, et les confondre produit l'essentiel des erreurs commises sur la stabilité atmosphérique. Voici ce que chacune mesure, comment elles se combinent et ce que dit réellement la définition de la tropopause.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - lapse-rate
  - atmospheric-stability
  - tropopause
  - temperature-inversion
related:
  - atmospheric-physics-explained
  - convection-and-cloud-formation
  - the-greenhouse-effect-physics
  - atmospheric-circulation-cells
pillar: atmospheric-physics-explained
_bodyHash: b0d10f9a
---

Deux grandeurs bien différentes sont couramment appelées « le [gradient thermique](/en/glossary/lapse-rate) ». L'une est une propriété d'une parcelle d'air ascendante, fixée par la thermodynamique et identique partout sur la planète. L'autre est une propriété de la colonne d'air environnante, mesurée par un radiosondage et différente chaque jour. La stabilité est la comparaison entre les deux, et presque toutes les confusions sur les raisons pour lesquelles l'air monte, sur la fumée qui stagne parfois au-dessus d'une vallée et sur le nom même de la stratosphère viennent de ce qu'on traite les deux comme un seul nombre. La structure thermique verticale qui en résulte est la seconde moitié du tableau esquissé dans [la vue d'ensemble de la physique de l'atmosphère](/fr/physics/climate-physics/atmospheric-physics-explained), dont le profil de pression était la première.

## Trois gradients, et ce que chacun décrit

Une parcelle non saturée soulevée dans l'atmosphère se détend contre une pression qui baisse et se refroidit sans échanger de chaleur avec son environnement. La référence de la NOAA sur la théorie de la parcelle donne ce **gradient adiabatique sec** comme une valeur fixe de 9.8 °C par 1 000 mètres. Une fois la parcelle saturée, la condensation y libère de la chaleur latente et ralentit le refroidissement : la documentation de la NOAA sur les diagrammes skew-T place le **gradient adiabatique humide** près de la surface à environ 4 °C par 1 000 mètres, remontant vers la valeur sèche dans la haute troposphère à mesure qu'il reste progressivement moins de vapeur à condenser. Le **gradient thermique de l'environnement** est ce que dit le sondage ; l'atmosphère standard utilisée en aviation, dans la formulation du centre NASA Glenn, le fixe à 0.00649 °C par mètre depuis une surface à 15.04 °C jusqu'à 11 000 mètres.

| Gradient | Valeur | Propriété de quoi |
| --- | --- | --- |
| Adiabatique sec | 9.8 °C/km | Une parcelle non saturée soulevée |
| Adiabatique humide | environ 4 °C/km près de la surface, tendant vers 9.8 °C/km en altitude | Une parcelle saturée soulevée |
| Environnement | mesuré ; 6.49 °C/km dans l'atmosphère standard | La colonne d'air environnante |

## La stabilité est une comparaison, pas une propriété de l'air

Qu'une parcelle déplacée poursuive ou non son mouvement dépend de la comparaison entre son propre taux de refroidissement et la température qu'elle trouve autour d'elle. Le matériel pédagogique de la NOAA fait la comparaison avec une bille et un bol. Si le gradient de l'environnement est plus faible que les deux adiabatiques, une parcelle soulevée est toujours plus froide et plus dense que son environnement et redescend : la colonne est absolument stable, la bille revient au fond du bol. Si le gradient de l'environnement est plus fort que l'adiabatique sèche, tout déplacement s'amplifie : instabilité absolue, le bol renversé. Entre les deux — plus fort que l'adiabatique humide, plus faible que la sèche — la réponse dépend de ce que la parcelle atteigne ou non la saturation avant d'épuiser sa flottabilité. C'est l'**instabilité conditionnelle**, et la NOAA la décrit comme l'un des états les plus courants de l'atmosphère.

Ce cas intermédiaire explique pourquoi le ciel n'est pas simplement soit calme soit convectif. Il explique aussi pourquoi le soulèvement compte autant que le chauffage : une colonne conditionnellement instable a besoin de quelque chose pour pousser une parcelle jusqu'à son niveau de convection libre, que ce soit un front, le relief ou le réchauffement de surface, avant de faire quoi que ce soit d'elle-même. Ce qui se passe au-delà de ce point — nucléation des gouttelettes, croissance, glaciation — fait l'objet de [la façon dont la convection construit les nuages](/fr/physics/climate-physics/convection-and-cloud-formation).

## Pourquoi le profil réel se situe entre les deux adiabatiques

Les 6.49 °C par kilomètre de l'atmosphère standard ne sont pas un compromis arbitraire. Le rayonnement seul, agissant sur l'opacité de l'atmosphère, laisserait la basse atmosphère bien plus pentue que l'adiabatique sèche, et donc instable. La convection en évacue l'excès presque aussi vite que le rayonnement le crée, et elle le fait le long d'une adiabatique humide dans les tropiques humides parce que l'air ascendant y est généralement saturé. Le profil moyen observé est le résidu de cette compétition : assez pentu pour entretenir la convection, assez faible pour ne pas s'emballer.

Ce n'est pas un détail de météorologie. Un profil de température décroissant est une condition préalable à tout l'argument radiatif exposé dans [l'explication de l'effet de serre par la hauteur d'émission](/fr/physics/climate-physics/the-greenhouse-effect-physics), et c'est pourquoi le gradient thermique intervient dans la comptabilité des rétroactions climatiques et non dans la seule prévision.

## CAPE : une énergie réelle, et une borne supérieure que personne n'atteint

L'instabilité qui est disponible plutôt que simplement possible se mesure comme **[énergie potentielle de convection disponible](/en/glossary/cape)**. Le Storm Prediction Center de la NOAA la définit comme l'énergie potentielle totale dont dispose une parcelle partie de la surface une fois qu'elle est soulevée jusqu'à son niveau de convection libre, exprimée en joules par kilogramme.

Parce qu'il s'agit d'une énergie par unité de masse, la CAPE se convertit directement en vitesse : la vitesse maximale d'ascendance dans la théorie de la parcelle non diluée vaut la racine carrée du double de la CAPE, si bien que 2 000 J/kg correspondent à environ 63 m/s. Les ascendances réelles restent bien en deçà, pour des raisons que le modèle de parcelle ignore délibérément. L'entraînement mélange de l'air environnant plus sec dans la colonne ascendante et dilue sa flottabilité ; l'eau condensée est emportée et alourdit la parcelle ; et les perturbations de pression autour de l'ascendance exercent un travail sur elle. La CAPE se lit au mieux comme un plafond et un indice comparatif, non comme une prévision de ce que fera l'air.

La grandeur compagne, l'inhibition convective, mesure le travail de flottabilité négative nécessaire pour faire traverser à une parcelle une couche stable jusqu'à ce niveau. Une colonne peut conserver une CAPE élevée tout l'après-midi et ne rien produire, parce que le couvercle ne cède jamais.

## Inversions : le profil renversé

Lorsque la température augmente avec l'altitude près du sol, la colonne est à peu près aussi stable qu'elle peut l'être, et le mélange vertical cesse en grande partie. Les inversions se forment par plusieurs voies : le refroidissement radiatif de la surface par nuit claire, le réchauffement par subsidence en altitude dans un système de haute pression et — dans les bassins et les vallées — l'air froid et dense qui s'accumule dans le relief et y demeure des jours durant.

Le type persistant a été étudié directement. Une campagne de terrain dans la vallée de Salt Lake, dans l'Utah, s'est déroulée du 1er décembre 2010 au 7 février 2011 et a documenté dix épisodes persistants de lac d'air froid en un seul hiver. L'association rapportée avec la qualité de l'air est simple : la concentration moyenne sur 24 heures de particules fines dépasse souvent la norme nationale de qualité de l'air ambiant des États-Unis, fixée à 35 µg/m³, pendant ces épisodes, et elle l'a fait pendant chacun des quatre lacs les plus longs observés au cours de cette campagne. Le mécanisme dominant n'est pas un surcroît d'émissions mais la perte du volume dans lequel ces émissions étaient auparavant diluées, bien que les auteurs notent que des variations des émissions peuvent aussi jouer un rôle. La façon dont ces concentrations sont définies et mesurées est traitée dans le travail sur [la mesure et les normes de qualité de l'air](/fr/ecology/pollution/air-quality-measurement-and-standards).

Les inversions sont aussi la partie du profil que l'observation traite le plus mal. Les inversions de surface peu épaisses, les couches stables minces et le sommet de la [couche limite](/fr/physics/mechanics-waves/fluid-dynamics-explained) sont des structures de quelques dizaines de mètres d'épaisseur ; ni le réseau de radiosondages ni l'espacement typique des niveaux d'un modèle ne les résolvent partout, si bien qu'une couche stable peut être réelle, lourde de conséquences et invisible pour le sondage censé la détecter. Ce problème de résolution se propage vers l'extérieur, car l'intensité du rail des dépressions des moyennes latitudes dépend de gradients qui vivent dans ces mêmes couches minces — une dépendance reprise dans [les cellules de la circulation générale](/fr/physics/climate-physics/atmospheric-circulation-cells).

## La tropopause est un critère, pas un objet

Au-dessus de la troposphère le signe s'inverse, et il s'inverse parce que l'ozone absorbe l'ultraviolet solaire et en dépose l'énergie sur place. La description des couches par la NOAA consigne le profil qui en résulte : la température grimpe d'une moyenne d'environ −51 °C à la tropopause à −15 °C environ au sommet de la stratosphère, et elle note que cette disposition — de l'air plus chaud au-dessus d'air plus froid — supprime la convection, ce qui explique que les enclumes d'orage s'étalent à plat à ce niveau. La stratosphère contient environ 19 pour cent de la masse de l'atmosphère et très peu de vapeur d'eau.

L'endroit exact où passe la limite relève de la définition plutôt que de la découverte. Le critère de gradient thermique de l'Organisation météorologique mondiale, cité dans une évaluation de réanalyses publiée dans *Atmospheric Chemistry and Physics*, définit la première tropopause comme « le niveau le plus bas auquel le gradient thermique descend à 2 °C/km ou moins, pourvu que le gradient moyen entre ce niveau et tous les niveaux supérieurs situés dans les 2 km ne dépasse pas 2 °C/km », une seconde tropopause étant identifiée au-dessus partout où le gradient moyen sur une couche quelconque de 1 km dépasse à nouveau 3 °C/km. Appliqué aux champs de réanalyse, ce critère place la tropopause tropicale moyenne à 16 ou 17 km et celle des hautes latitudes entre environ 8 et 12.5 km — en accord avec l'énoncé plus simple de la NOAA selon lequel la troposphère atteint 18 à 20 km à l'équateur et environ 6 km aux pôles.

Il vaut la peine d'être explicite sur la portée de ce critère. La même évaluation a trouvé des écarts de hauteur moyenne mensuelle de la tropopause, entre deux générations d'un même système de réanalyse, allant d'environ −300 m vers 30° de latitude à 150 m à l'équateur, sans le moindre changement de l'atmosphère sous-jacente. Une tendance de la hauteur de la tropopause comparée d'un produit à l'autre est donc en partie une tendance de l'algorithme et des données d'entrée. La limite est un seuil appliqué à un gradient, et là où le gradient est régulier, c'est le seuil qui décide.

## Sources

1. **NOAA JetStream** — [Parcel Theory](https://www.noaa.gov/jetstream/upperair/parcel-theory). Gradient adiabatique sec et argument de flottabilité pour la stabilité.
2. **NOAA JetStream** — [Skew-T Log-P Diagrams](https://www.noaa.gov/jetstream/upperair/skew-t-log-p-diagrams). Gradient adiabatique humide près de la surface et sa convergence vers le gradient sec en altitude.
3. **NOAA JetStream** — [Stability and Instability](https://www.noaa.gov/jetstream/upperair/bowls). Les quatre régimes de stabilité et l'instabilité conditionnelle comme cas courant.
4. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Gradient thermique de l'environnement dans l'atmosphère standard et épaisseur de la troposphère.
5. **NOAA JetStream** — [Layers of the Atmosphere](https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere). Chauffage par l'ozone, plage de température et part de masse de la stratosphère, et hauteurs de tropopause selon la latitude.
6. **NOAA Storm Prediction Center** — [Surface-based CAPE](https://www.spc.noaa.gov/exper/mesoanalysis/help/help_sbcp.html). Définition et unités de l'énergie potentielle de convection disponible.
7. **American Meteorological Society, Bulletin of the AMS** — [The Persistent Cold-Air Pool Study](https://journals.ametsoc.org/view/journals/bams/94/1/bams-d-11-00255.1.xml). Dates de la campagne de terrain, nombre d'épisodes et association avec les particules.
8. **Copernicus, Atmospheric Chemistry and Physics** — [An assessment of tropopause characteristics of the ERA5 and ERA-Interim meteorological reanalyses](https://acp.copernicus.org/articles/22/4019/2022/). Définition de la tropopause par le critère de gradient de l'OMM, hauteurs moyennes de tropopause et écarts entre produits.
