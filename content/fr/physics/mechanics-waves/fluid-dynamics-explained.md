---
title: 'Dynamique des fluides : pourquoi un seul nombre sans dimension décide du comportement d''un écoulement'
metaTitle: Dynamique des fluides et nombre de Reynolds
excerpt: Un cilié nageur et un ouragan obéissent aux mêmes équations. Ce qui les sépare est le rapport de l'inertie à la viscosité, et ce rapport décide si un écoulement est régulier, chaotique ou hors de portée du calcul direct.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - fluid-dynamics
  - reynolds-number
  - turbulence
  - boundary-layer
  - aerodynamics
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - sound-and-acoustics-explained
  - convection-and-cloud-formation
pillar: classical-mechanics-explained
_bodyHash: 85de7e7e
---

Un organisme unicellulaire qui bat ses cils et un cyclone qui s'enroule autour de son œil sont régis par les mêmes équations. Ce qui les sépare n'est pas la physique mais un rapport : le poids de l'inertie du fluide comparé à celui de sa viscosité. Ce rapport, le [nombre de Reynolds](/en/glossary/reynolds-number), est la première chose qu'un mécanicien des fluides demande à propos d'un problème, car il détermine quels termes des équations peuvent être jetés et lesquels ne le peuvent pas.

Les lois de conservation sous-jacentes sont celles qu'expose la [mécanique classique](/fr/physics/mechanics-waves/classical-mechanics-explained). Ce qui change, c'est l'objet : au lieu d'un corps aux parties fixes, le sujet est un milieu continu qui se déforme sans limite, de sorte que la masse, la quantité de mouvement et l'énergie doivent être suivies à travers un volume de contrôle plutôt qu'attachées à une chose.

## Le rapport, et ce qu'il sélectionne

L'ouvrage de référence en aéronautique de la NASA énonce la définition sans détour : le nombre de Reynolds « exprime le rapport des forces d'inertie (résistantes au changement ou au mouvement) aux forces visqueuses (lourdes et collantes) », soit Re = ρVL/μ, où ρ est la masse volumique, V une vitesse caractéristique, L une longueur caractéristique et μ la viscosité dynamique. Rien dans cette expression n'est une propriété du fluide seul. Deux des quatre termes sont des propriétés du fluide, mais l'un décrit l'écoulement et l'autre la géométrie, ce qui explique que la même eau se trouve au cœur du régime visqueux dans un capillaire et pleinement turbulente dans une rivière.

Le bas de l'échelle est plus étrange qu'il n'y paraît. Les travaux sur le cilié *Paramecium* le situent à un nombre de Reynolds d'environ 0.1, un régime dans lequel « les forces d'inertie sont petites devant les forces visqueuses ». Un organisme y est incapable de se laisser glisser. Arrêtez les cils et le mouvement cesse presque aussitôt, car il n'y a pas de quantité de mouvement emmagasinée digne de ce nom. Les stratégies qui consistent à projeter du fluide vers l'arrière — comme le fait un nageur — ne rapportent rien à cette échelle.

Pour les propriétés du fluide elles-mêmes, les données de référence du NIST attribuent à l'eau liquide à 20 °C et 1 bar une masse volumique de 998.21 kg/m³ et une viscosité de 1.0016 × 10⁻³ Pa·s. En divisant l'une par l'autre, on obtient une viscosité cinématique proche de 1.0 × 10⁻⁶ m²/s, et c'est cette grandeur combinée, et non la viscosité seule, qui fixe la vitesse à laquelle la quantité de mouvement diffuse latéralement dans un écoulement.

Le bénéfice pratique de ce rapport, c'est l'essai sur maquette. L'exposé de la NASA est direct : « Si le nombre de Reynolds de l'expérience et celui du vol sont proches, alors nous modélisons correctement les effets des forces visqueuses par rapport aux forces d'inertie. » Une maquette en soufflerie n'est pas un petit avion ; c'est un écoulement différent que l'on a arrangé pour qu'il présente les mêmes nombres sans dimension. Là où la compressibilité compte aussi, un second rapport — le nombre de Mach, la vitesse divisée par [la vitesse locale du son](/fr/physics/mechanics-waves/sound-and-acoustics-explained) — doit être respecté également, et la NASA avertit que transposer des coefficients de basse vitesse à des conditions de grande vitesse échoue parce que « la compressibilité de l'air modifie la physique importante entre ces deux cas ».

## Ce que dit l'équation de Bernoulli, et la version fausse qu'on en donne

La relation de Bernoulli est un énoncé sur l'énergie le long d'une ligne de courant, et elle ne vaut que pour un écoulement stationnaire, incompressible et effectivement non visqueux. Ces conditions ne sont pas des clauses en petits caractères ; elles sont le contenu même. Là où elles tiennent, une augmentation de vitesse correspond à une baisse de pression, et l'équation convertit l'une en l'autre.

L'ennui commence quand on la retourne pour expliquer ce qu'elle ne peut pas expliquer. L'exemple le plus tenace est l'affirmation selon laquelle une aile porte parce que l'air empruntant le chemin supérieur, plus long, doit arriver au bord de fuite en même temps que l'air du chemin inférieur, et doit donc aller plus vite. Le guide d'aéronautique de la NASA rejette ce raisonnement sur la base de la mesure plutôt que sur celle du principe : « la vitesse sur l'extrados d'une aile portante est bien supérieure à la vitesse sur l'extrados qui produirait un temps de transit égal ». La vitesse supposée n'est tout simplement pas celle qu'on observe. L'équation de Bernoulli n'est pas en cause ; c'est son entrée qui est fabriquée. L'ordre honnête des opérations consiste à résoudre d'abord le champ de vitesse, puis à utiliser Bernoulli pour le convertir en pression, puis à intégrer la pression pour obtenir une force.

## La couche limite, où la viscosité qu'on avait négligée fait tout le travail

Traiter un écoulement comme non visqueux fonctionne étonnamment bien loin des surfaces et échoue complètement à leur contact, car un fluide réel ne glisse pas le long d'une paroi solide. La NASA décrit la conséquence comme « une mince couche de fluide près de la surface, dans laquelle la vitesse passe de zéro à la surface à la valeur de l'écoulement libre loin de la surface ». Presque tout le cisaillement, et donc presque toute la traînée visqueuse, réside à l'intérieur de cette couche.

Son caractère dépend du nombre de Reynolds : « Pour les nombres de Reynolds plus faibles, la [couche limite](/en/glossary/boundary-layer) est laminaire et la vitesse longitudinale varie uniformément à mesure qu'on s'éloigne de la paroi », tandis qu'aux valeurs plus élevées elle « est turbulente et la vitesse longitudinale se caractérise par des écoulements tourbillonnaires instationnaires à l'intérieur de la couche limite ». La distinction importe parce qu'une couche limite qui vient à manquer de quantité de mouvement se décolle de la surface, et c'est le décollement qui produit le décrochage de l'aile à grand angle d'attaque.

C'est aussi pourquoi la traînée n'augmente pas régulièrement avec la vitesse. Le traitement par la NASA de l'écoulement autour d'une sphère décrit une succession plutôt qu'une tendance : des tourbillons attachés stables à faible vitesse, puis un lâcher alterné instable — l'allée tourbillonnaire — qui engendre une forte traînée, puis un écoulement chaotique qui réduit quelque peu la traînée, et enfin une couche limite turbulente qui produit d'abord moins de traînée que le cas laminaire avant que la relation ne s'inverse à nouveau. Une couche turbulente est plus dissipative à la paroi mais entraîne vers celle-ci du fluide de plus grande quantité de mouvement, de sorte qu'elle peut rester attachée plus loin autour du corps. Que ce compromis soit favorable dépend de l'endroit où l'on se trouve dans la succession.

## La transition est une plage, non un seuil

Le raccourci des manuels place la transition laminaire-turbulent dans une conduite à un nombre de Reynolds d'environ 2300, comme si l'écoulement changeait d'état à une frontière nette. Les travaux minutieux sur l'écoulement transitionnel en conduite décrivent quelque chose de moins net. En dessous de Re₁ ≃ 2300, la turbulence apparaît sous la forme de « bouffées d'équilibre (ou transitoires de longue durée) » localisées, se déplaçant dans un fond par ailleurs laminaire ; la fraction turbulente croît ensuite avec le nombre de Reynolds « jusqu'à Re₂ ≃ 2600, où se produit une transition continue vers un état de turbulence uniforme ».

| Nombre de Reynolds | État de l'écoulement en conduite | Ce que l'on observe réellement |
| --- | --- | --- |
| En dessous de ≈ 2300 | Laminaire avec turbulence localisée | Bouffées isolées, transitoires ou durables, dans un environnement laminaire |
| ≈ 2300 à ≈ 2600 | Intermittent | La fraction turbulente croît continûment avec le nombre de Reynolds |
| Au-dessus de ≈ 2600 | Turbulence uniforme | La turbulence remplit la conduite au lieu d'occuper des zones |

Deux conséquences en découlent. La transition est une propriété d'une plage, si bien qu'un écoulement proche de la valeur basse peut être laminaire ou turbulent selon la perturbation à l'entrée et la rugosité de la paroi. Et une valeur critique unique, citée telle quelle, est le résumé d'une distribution, non un interrupteur.

## La turbulence : la partie qui n'a pas été fermée

La turbulence n'est pas une théorie physique distincte. C'est ce que font les mêmes équations lorsque les termes d'inertie non linéaires dominent, et la difficulté est arithmétique plutôt que conceptuelle. Moyenner les équations pour obtenir l'écoulement moyen introduit de nouveaux termes représentant le transport de quantité de mouvement par les fluctuations, et ces termes contiennent des inconnues que les équations moyennées elles-mêmes ne peuvent pas fournir. Tout calcul pratique ferme donc le système au moyen d'un modèle.

Jusqu'où va cette concession se lit dans la façon dont la discipline énonce ses propres ambitions. Une étude commandée par la NASA sur l'avenir de l'aérodynamique numérique fixe comme objectif pour 2030 que « des prédictions précises, fondées sur la physique, des écoulements turbulents complexes, y compris le décollement de l'écoulement, puissent être menées de façon routinière et efficace » — un but qu'il vaut la peine de coucher par écrit précisément parce qu'il n'est pas encore routinier. Les modèles de turbulence sont calés sur des cas mesurés et simulés plutôt que dérivés des premiers principes, ce qui signifie qu'un modèle validé dans un régime ne peut être supposé exact en dehors de celui-ci.

## Pourquoi cela apparaît dans toute prévision climatique et météorologique

L'écart entre le mouvement résolu et le mouvement modélisé est la contrainte centrale de la simulation géophysique, et non un détail de la pratique de l'ingénieur. L'évaluation du GIEC le dit sans détour : « Compte tenu des limites des ressources de calcul, les MCG de la génération actuelle ne peuvent pas encore représenter les processus nuageux de petite échelle, et par conséquent la convection peu profonde et profonde est déterminée par des paramétrisations sous-maille. » Les modèles régionaux à convection explicite, « exécutés typiquement à une résolution inférieure à 10 km », résolvent une partie de ce qu'un modèle global doit paramétrer, et ils améliorent le cycle diurne simulé et les extrêmes de précipitations — mais ils ne peuvent pas être exécutés à l'échelle du globe sur de longues périodes au coût actuel.

La lecture honnête de cette situation est celle que l'évaluation donne pour les modèles globaux à convection paramétrée : il subsiste une « faible confiance dans leur capacité à simuler avec exactitude les caractéristiques spatio-temporelles des précipitations actuelles, en particulier sous les tropiques ». Un [modèle climatique](/fr/glossary/climate-model) ne se trompe pas sur la dynamique des fluides ; il est incapable de résoudre les échelles auxquelles se produit une partie de cette dynamique des fluides, et le substitut est une paramétrisation dont les coefficients sont contraints par l'observation plutôt que dérivés. Le même problème limite la manière dont est représentée la [circulation océanique](/fr/ecology/earth-systems/ocean-circulation-and-climate), et c'est la raison pour laquelle la [convection et la formation des nuages](/fr/physics/climate-physics/convection-and-cloud-formation) restent l'une des parties les plus activement révisées de la [physique de l'atmosphère](/fr/physics/climate-physics/atmospheric-physics-explained).

Ce que le nombre de Reynolds ne peut pas faire, c'est vous dire quelle longueur y placer. Une conduite a un diamètre évident ; une chaîne de montagnes, la couche limite d'une feuille ou une vague déferlante n'en ont pas, et le choix de la longueur caractéristique est un jugement de modélisation qui change la valeur de plusieurs ordres de grandeur. Deux écoulements cités au même nombre de Reynolds ne sont dynamiquement semblables que si la même longueur était visée dans les deux cas — ce qui est le genre de chose facile à énoncer et facile à perdre entre une soufflerie et un article.

## Sources

1. **NASA Glenn Research Center** — [Similarity parameters](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/similarity-parameters/). Définition des nombres de Reynolds et de Mach et fondement de la similitude en soufflerie.
2. **NASA Glenn Research Center** — [Bernoulli and Newton](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/). Pourquoi l'explication de la portance par l'égalité des temps de transit se trompe sur le champ de vitesse.
3. **NASA Glenn Research Center** — [Boundary layer](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/). Définition de la couche limite, caractère laminaire et turbulent, et décollement de l'écoulement.
4. **NASA Glenn Research Center** — [Drag of a sphere](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Succession des états d'écoulement derrière un corps non profilé et son effet sur la traînée.
5. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Masse volumique et viscosité de l'eau liquide à 20 °C et 1 bar.
6. **Proceedings of the National Academy of Sciences** — [Distinct large-scale turbulent-laminar states in transitional pipe flow](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889535/). Nombres de Reynolds critiques bornant le régime intermittent en conduite.
7. **eNeuro** — [Integrative neuroscience of Paramecium, a "swimming neuron"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8208649/). Nombre de Reynolds d'un cilié nageur et prédominance des forces visqueuses.
8. **NASA Technical Reports Server** — [CFD Vision 2030 Study: A Path to Revolutionary Computational Aerosciences](https://ntrs.nasa.gov/citations/20140003093). Objectif affiché pour 2030 : prédiction routinière et exacte des écoulements turbulents complexes.
9. **IPCC AR6 WG1, chapitre 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Paramétrisation sous-maille de la convection, résolution à convection explicite, et confiance dans les précipitations simulées.
