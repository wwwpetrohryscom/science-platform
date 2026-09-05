---
title: "Incertitude de mesure : ce qu'un ± affiché prétend réellement"
metaTitle: "Incertitude de mesure : ce qu'un ± prétend vraiment"
excerpt: Un nombre sans incertitude n'est pas un résultat de mesure. Voici ce que les recommandations internationales exigent d'un intervalle, comment les composantes sont évaluées et combinées, et les endroits où un budget d'incertitude échoue discrètement.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - metrology
  - uncertainty
  - calibration
  - si-units
  - measurement-methods
related:
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - sound-and-acoustics-explained
  - global-temperature-records-explained
pillar: classical-mechanics-explained
---

Écrivez 9,81 m/s² et vous n'avez presque rien affirmé. Écrivez 9,81 ± 0,02 m/s² et vous avez formulé une affirmation testable : sur la façon dont la valeur a été obtenue, sur ce qui se passerait si la mesure était répétée, et sur l'intervalle dans lequel une nouvelle détermination devrait tomber. Le second nombre n'est pas un avertissement accolé au premier. C'est la partie qui rend le premier utilisable, et c'est ce qui permet à deux laboratoires de dire s'ils sont d'accord.

Le cadre international pour construire ce second nombre est le *Guide pour l'expression de l'incertitude de mesure*, publié sous le nom de JCGM 100 par le Comité commun pour les guides en métrologie et hébergé par le BIPM. Ce n'est pas tant une technique statistique qu'une discipline de comptabilité, et il s'applique à toute mesure quantitative — y compris celles qui sous-tendent [la mécanique](/fr/physics/mechanics-waves/classical-mechanics-explained) que ce cluster d'articles couvre.

## Exactitude, justesse et fidélité sont trois mots différents

Le vocabulaire international de métrologie distingue trois termes que l'usage courant confond. L'**exactitude de mesure** est définie comme l'« étroitesse de l'accord entre une valeur mesurée et une valeur vraie d'un mesurande » — et, point important, « le concept d'exactitude de mesure n'est pas une grandeur et ne s'exprime pas numériquement ». On ne peut pas rapporter une exactitude de 0,3 pour cent ; on peut rapporter une incertitude.

Le vocabulaire est tout aussi ferme sur les frontières : « le terme exactitude de mesure ne doit pas être utilisé pour la justesse de mesure et le terme fidélité de mesure ne doit pas être utilisé pour l'exactitude de mesure ». La justesse concerne le décalage systématique — si des mesures répétées se groupent au bon endroit. La fidélité concerne la dispersion — l'étroitesse du groupement, où qu'il se trouve. Un instrument peut être fidèle et faux, combinaison la plus dangereuse, parce que la répétition ressemble à une confirmation.

## Type A et type B ne veulent pas dire « mesuré » et « deviné »

Le guide sépare les composantes d'incertitude par la façon dont elles sont évaluées, non par la confiance qu'on leur porte. Le résumé du NIST suit le guide exactement : une évaluation de type A est une « méthode d'évaluation de l'incertitude par l'analyse statistique de séries d'observations », et le type B est l'« évaluation de l'incertitude par des moyens autres que l'analyse statistique de séries d'observations ».

Cette seconde catégorie n'est pas un euphémisme. Elle couvre l'incertitude énoncée dans un certificat d'étalonnage, une spécification de fabricant, la limite de résolution d'un afficheur, des données de référence publiées, et un raisonnement physique sur un effet qui ne peut pas varier pendant l'expérience. Ce qui compte, c'est qu'une fois chaque composante exprimée en incertitude-type, les deux espèces se combinent identiquement. Une composante de type B tirée d'un certificat peut être plus petite et mieux fondée qu'une composante de type A calculée sur six répétitions bruitées, et traiter la répétabilité comme la seule incertitude réelle est la façon la plus courante de rendre un budget optimiste.

## Combiner les composantes, et l'hypothèse cachée dans la loi de propagation

Les composantes sont combinées en une **incertitude-type composée**, que le NIST décrit comme « la racine carrée positive de la variance estimée », obtenue par ce que le guide appelle la loi de propagation de l'incertitude. La construction a deux pièces mobiles faciles à manquer. C'est un développement de Taylor au premier ordre : elle linéarise donc le modèle de mesure autour du point de fonctionnement. Et elle contient un terme de covariance qui « s'annule » seulement si les estimations d'entrée peuvent être supposées non corrélées.

Aucune de ces hypothèses ne va de soi. Des entrées étalonnées face à la même référence sont corrélées par construction, et abandonner le terme de covariance sous-estime alors le résultat. Des modèles fortement non linéaires brisent la linéarisation, raison pour laquelle le guide est accompagné d'un supplément propageant des distributions entières par Monte-Carlo plutôt que des variances, et pour laquelle un amendement traitant de la non-linéarité dans les modèles de mesure a été publié en 2026. Le cadre est encore en révision active.

## Le facteur d'élargissement, et le mot que le guide évite

Une incertitude-type est une grandeur du genre écart-type, et la plupart des résultats publiés sont plus larges. L'incertitude élargie vaut U = k·u_c(y), où k est un facteur d'élargissement choisi pour le niveau de confiance voulu. Le NIST indique que « typiquement, k est dans la plage 2 à 3 », que k = 2 « définit un intervalle ayant un niveau de confiance d'environ 95 % », et que k = 3 donne un intervalle avec « un niveau de confiance supérieur à 99 % ».

L'approximation contenue dans « environ » travaille vraiment. Un traitement à comité de lecture des intervalles de couverture, dans la revue de recherche du NIST, note que le guide refuse délibérément d'appeler ces intervalles des intervalles de confiance sauf si « toutes les composantes d'incertitude contribuant à u_c(y) sont obtenues par des évaluations de type A ». Un intervalle de confiance conventionnel est un énoncé fréquentiste sur la couverture à long terme d'expériences répétées ; une incertitude élargie bâtie en partie sur des composantes de type B n'est pas cela, même quand l'arithmétique se ressemble. Le même article travaille un exemple où seize répétitions donnent un intervalle de couverture à 95 pour cent de la moyenne plus ou moins 2,131 erreurs types — le percentile de Student pour quinze degrés de liberté — plutôt que le facteur plat de 2 qu'un calcul rapide utiliserait. Avec peu d'observations, les deux diffèrent assez pour compter.

## La traçabilité est ce qui rend deux laboratoires comparables

Une incertitude n'a de sens que par rapport à une échelle, et le mécanisme qui relie les échelles est la [traçabilité métrologique](/en/glossary/traceability) : comme le formule une revue sur les matériaux de référence chimiques, « une chaîne ininterrompue et documentée d'étalonnages avec incertitudes énoncées qui relie idéalement le résultat de mesure d'un échantillon à un étalon primaire dans les unités SI appropriées ». Chaque maillon ajoute de l'incertitude ; aucun ne peut manquer. La même revue décrit ce que la chaîne doit incarner en pratique — « les concepts d'[incertitude de mesure](/en/glossary/measurement-uncertainty) et d'étalonnages face à une hiérarchie d'étalons de référence » — raison pour laquelle un certificat qui énonce une valeur sans incertitude rompt la chaîne au lieu de la raccourcir.

La base de cette chaîne a changé le 20 mai 2019, quand le SI a été redéfini de sorte que toutes les unités découlent de sept constantes à valeurs numériques fixées.

| Constante de définition | Symbole | Valeur fixée |
| --- | --- | --- |
| Fréquence hyperfine du césium 133 | ΔνCs | 9 192 631 770 Hz |
| Vitesse de la lumière dans le vide | c | 299 792 458 m/s |
| Constante de Planck | h | 6,626 070 15 × 10⁻³⁴ J s |
| Charge élémentaire | e | 1,602 176 634 × 10⁻¹⁹ C |
| Constante de Boltzmann | k | 1,380 649 × 10⁻²³ J/K |
| Constante d'Avogadro | N_A | 6,022 140 76 × 10²³ mol⁻¹ |
| Efficacité lumineuse | K_cd | 683 lm/W |

Ces valeurs ne portent désormais aucune incertitude, parce qu'elles sont des définitions et non des résultats. L'incertitude n'a pas disparu ; elle s'est déplacée vers les expériences qui réalisent les unités, ce qui est un bien meilleur endroit pour elle, car elle est maintenant attachée à un appareil améliorable plutôt qu'à un artefact qui pourrait être rayé.

## Là où l'incertitude demeure

Toutes les constantes n'ont pas été absorbées dans les définitions. L'ajustement CODATA de 2022 donne la constante newtonienne de la gravitation à 6,674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻² avec une incertitude-type de 0,000 15 × 10⁻¹¹ dans les mêmes unités — une incertitude-type relative de 2,2 × 10⁻⁵. Face aux constantes du tableau, désormais exactes par définition, l'écart est énorme. Il persiste parce que la gravitation ne peut être ni blindée ni amplifiée : chaque détermination affronte donc la même classe d'effets systématiques à une amplitude comparable au signal lui-même. C'est le rappel permanent de ce domaine : une petite incertitude annoncée est toujours une affirmation sur les effets que quelqu'un a reconnus.

Ce motif se généralise. Quand deux équipes crédibles divergent au-delà de ce que leurs intervalles annoncés autorisent, le désaccord est la preuve qu'au moins un budget oublie un terme. Le même raisonnement explique pourquoi des [relevés de température mondiale](/fr/ecology/climate-change/global-temperature-records-explained) indépendants sont comparés par leurs enveloppes d'incertitude plutôt que par leurs valeurs d'affiche, et pourquoi les recommandations pratiques sur [les limites de la télédétection](/fr/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) tiennent à savoir ce qu'un algorithme de restitution n'a pas modélisé.

## La fausse précision est une affirmation, non un choix de mise en forme

Les chiffres sont bon marché à produire et coûteux à justifier. Un tableur en renvoie par douzaines quelle que soit l'entrée, et un résultat rapporté avec plus de chiffres que son incertitude n'en soutient affirme une résolution jamais atteinte. La convention qui découle du cadre est simple : l'incertitude détermine combien de chiffres la valeur peut porter, donc une valeur doit être arrondie à une position cohérente avec son incertitude plutôt qu'à ce que le calcul a produit.

Le mode de défaillance est rarement l'article d'origine. C'est le transfert, où un intervalle est abandonné parce qu'il n'entre pas dans un résumé, et où une estimation centrale poursuit sa route comme si elle était exacte — processus examiné dans l'analyse sur [l'incertitude perdue entre le jeu de données et le titre](/fr/insight/uncertainty-lost-between-dataset-and-headline). La précision qui apparaît pendant la transmission a été fabriquée, non mesurée.

## Ce qu'un budget d'incertitude ne peut pas contenir

La limite structurelle est qu'un budget ne peut inclure que les effets auxquels quelqu'un a pensé. Les effets systématiques non reconnus en sont, par construction, absents, ce qui signifie qu'une incertitude annoncée est une borne inférieure conditionnée par la complétude du modèle. Ce n'est pas une inquiétude hypothétique : une revue de la façon dont les instituts nationaux évaluent l'incertitude pour des matériaux de référence organiques a trouvé des « incohérences d'approche et des cas nets de sous-estimation » parmi des laboratoires participants appliquant les mêmes méthodes nominales, et a conclu que combiner des approches de mesure indépendantes est ce qui expose les biais qu'une méthode unique masque.

Les conséquences pratiques vont plus loin que les laboratoires de métrologie. Quand un modèle substitue une paramétrisation à un processus qu'il ne peut pas résoudre — comme [les modèles de mécanique des fluides](/fr/physics/mechanics-waves/fluid-dynamics-explained) doivent le faire pour la turbulence — l'incertitude attachée à la sortie ne peut pas représenter pleinement l'erreur structurelle du schéma lui-même. Quand une statistique d'exposition est calculée à partir d'une carte modélisée plutôt que d'un réseau de mesure, comme dans [l'évaluation du bruit environnemental](/fr/physics/mechanics-waves/sound-and-acoustics-explained), l'incertitude dominante est dans les entrées et non dans l'instrument. Dans les deux cas, le nombre est honnête sur ce qui a été quantifié et muet sur ce qui a été supposé, et bien le lire consiste à demander lequel des deux on regarde.

## Sources

1. **BIPM / JCGM** — [Publications JCGM : le GUM et ses suppléments](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, le supplément Monte-Carlo et l'amendement de 2026 sur la non-linéarité des modèles de mesure.
2. **Vocabulaire international de métrologie du JCGM** — [Exactitude de mesure (VIM 2.13)](https://jcgm.bipm.org/vim/en/2.13.html). Définitions séparant exactitude, justesse et fidélité.
3. **NIST** — [Définitions de base de l'incertitude](https://physics.nist.gov/cuu/Uncertainty/basic.html). Évaluations de type A et de type B de l'incertitude-type.
4. **NIST** — [Combinaison des composantes d'incertitude](https://physics.nist.gov/cuu/Uncertainty/combination.html). Incertitude-type composée et loi de propagation de l'incertitude.
5. **NIST** — [Incertitude élargie et facteur d'élargissement](https://physics.nist.gov/cuu/Uncertainty/coverage.html). Valeurs de k et niveaux de confiance associés.
6. **Journal of Research of the National Institute of Standards and Technology** — [Coverage intervals](https://pmc.ncbi.nlm.nih.gov/articles/PMC10898794/). Pourquoi le guide évite le terme intervalle de confiance, et les facteurs de couverture de Student pour petits échantillons.
7. **BIPM** — [Unités de mesure et constantes de définition du SI](https://www.bipm.org/en/measurement-units). Les sept constantes fixées et la redéfinition du 20 mai 2019.
8. **NIST CODATA** — [Constante newtonienne de la gravitation](https://physics.nist.gov/cgi-bin/cuu/Value?bg). Valeur recommandée de 2022, incertitude-type et incertitude-type relative.
9. **Accreditation and Quality Assurance** — [SI traceable calibrators for organic chemical measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC10938631/). Définition de la chaîne de traçabilité et preuves de sous-estimation de l'incertitude entre laboratoires.
