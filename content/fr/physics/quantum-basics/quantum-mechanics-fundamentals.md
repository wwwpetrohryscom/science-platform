---
title: 'La mécanique quantique : les règles de travail, sans la philosophie'
metaTitle: 'Mécanique quantique : les règles de travail'
excerpt: La théorie quantique fixe des constantes physiques à dix chiffres significatifs alors que son interprétation reste ouverte. Cette page expose les règles de travail — amplitudes, observables, quantification, indétermination, statistiques de spin, décohérence — et signale où se situent les véritables lacunes.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - quantum-mechanics
  - superposition
  - decoherence
  - measurement
  - spin-statistics
related:
  - wave-particle-duality-explained
  - quantum-computing-fundamentals
  - quantum-sensors-leaving-the-lab
  - electromagnetic-spectrum-applications
---
Jugée comme instrument prédictif, la mécanique quantique est la théorie la plus sévèrement testée de la physique. L'évaluation CODATA de 2022 donne l'anomalie du moment magnétique de l'électron à 1,159 652 180 46(18) × 10⁻³, soit une incertitude-type relative de 1,6 × 10⁻¹⁰. La constante de structure fine, qui gouverne l'intensité de l'interaction électromagnétique, est cernée au même ordre, 7,297 352 5643(11) × 10⁻³. Quoi qu'il reste d'irrésolu dans la théorie quantique, son arithmétique n'en fait pas partie.

Ce qui reste irrésolu, c'est ce que cette arithmétique décrit. Ce sont deux questions distinctes, et cette page les garde distinctes : d'abord les règles de travail, puis les coutures signalées là où elles se trouvent.

## L'état est une liste d'amplitudes

Un état quantique attribue un nombre complexe — une **amplitude** — à chaque résultat possible d'une mesure. La probabilité d'un résultat est le carré du module de son amplitude. Le fait structurellement important est l'ordre de ces deux opérations : les amplitudes sont d'abord additionnées, puis élevées au carré, si bien que des contributions peuvent s'annuler. Les probabilités classiques, étant positives ou nulles, ne s'annulent jamais. Tout effet proprement quantique remonte à cette seule asymétrie.

Une **superposition** est un état unique dont l'amplitude est répartie sur plusieurs issues. Ce n'est pas un objet occupant deux endroits, et ce n'est pas de l'ignorance sur l'endroit où l'objet se trouve réellement. Les deux lectures échouent sur la même preuve : elles prédisent que les statistiques de résultats devraient être une moyenne pondérée des cas séparés, et les statistiques observées contiennent des termes d'interférence qu'aucune moyenne de ce genre ne produit. Les expériences qui imposent cette conclusion sont exposées dans [ce que montrent réellement les expériences des fentes de Young](/fr/physics/quantum-basics/wave-particle-duality-explained).

Le langage des amplitudes fixe aussi le sens de « la fonction d'onde s'étale ». L'étalement est un énoncé sur le domaine où l'amplitude est non nulle, non sur une substance qui se dilue. Une détection isolée est toujours un événement unique et localisé.

## Observables, et la couture au niveau de la mesure

Chaque grandeur mesurable est représentée par un opérateur. Les résultats qu'une mesure peut rendre sont les valeurs propres de cet opérateur, et la probabilité de chacun est donnée par la règle de Born. Entre les mesures, l'état évolue selon l'équation de Schrödinger, qui est déterministe, linéaire et réversible.

Les deux moitiés ne s'emboîtent pas de façon évidente. L'évolution unitaire ne transforme jamais une superposition en résultat défini ; la règle de mesure fait exactement cela, de manière probabiliste et irréversible. La théorie postule les deux et ne dérive ni l'une de l'autre. C'est le **problème de la mesure**, et c'est une lacune réelle plutôt que rhétorique — mais une lacune d'interprétation, non de prédiction. Aucune expérience n'a trouvé de cas où la règle de Born donne les mauvaises statistiques.

## D'où vient la quantification — et d'où elle ne vient pas

Le nom induit en erreur, car la plupart des grandeurs de la théorie ne sont pas quantifiées. Une particule libre a un spectre d'énergie continu. Position et impulsion sont continues. La quantification apparaît quand une équation d'onde est résolue sous des conditions aux limites, de la même manière qu'une corde fixée n'admet que certains modes stationnaires. Liez un électron à un proton et les énergies permises deviennent discrètes, à une échelle fixée par l'énergie de Rydberg, 13,605 693 122 990(15) eV dans l'évaluation CODATA de 2022, connue à environ une partie sur 10¹². L'énergie d'ionisation de l'état fondamental de l'hydrogène lui-même est un peu plus faible — le NIST la tabule à 109 678,7717 cm⁻¹, soit 13,598 433 eV — parce que la masse finie du proton ainsi que les corrections relativistes et d'électrodynamique quantique l'écartent toutes de la valeur idéalisée.

Le spin est l'exception qui clarifie la règle. Il n'est pas quantifié par une condition aux limites, n'a derrière lui aucune rotation classique, et prend des valeurs demi-entières ou entières comme propriété intrinsèque de l'espèce de particule.

La lumière porte sa propre version de la même idée. L'énergie échangée entre un champ et la matière vient par paquets de hf, raison pour laquelle c'est l'énergie du [photon](/en/glossary/photon) — et non l'intensité — qui détermine ce qu'un rayonnement peut faire à une molécule, point développé bande par bande dans [le spectre électromagnétique et ses applications](/fr/physics/quantum-basics/electromagnetic-spectrum-applications). C'est aussi pourquoi le plafond de rendement d'une cellule solaire à simple jonction est fixé par l'énergétique des photons plutôt que par l'ingénierie, comme l'expose [la limite thermodynamique du photovoltaïque](/fr/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

## Variables conjuguées, non instruments maladroits

La [relation d'indétermination](/en/glossary/uncertainty-relation) σₓσₚ ≥ ħ/2 est habituellement introduite par une histoire de microscope perturbant un électron. Cette histoire donne la bonne inégalité pour la mauvaise raison, et la mauvaise raison doit ensuite être désapprise.

Les amplitudes de position et d'impulsion sont transformées de Fourier l'une de l'autre. Un état à faible dispersion en position est, par pure mathématique, construit à partir d'une large gamme de composantes d'impulsion — le même compromis qui empêche une impulsion radio d'être à la fois très brève et très proche d'une fréquence unique. La relation contraint l'état lui-même. Elle vaut avant que quiconque mesure quoi que ce soit, et elle vaudrait pour un instrument parfait.

La perturbation de mesure est un effet distinct qui existe aussi, et les deux ont été séparés expérimentalement dans un interféromètre atomique où la perturbation due à la détection du chemin était trop faible pour rendre compte de la perte d'interférence. L'échelle de ħ explique que rien de tout cela n'apparaisse dans la vie courante : ħ/2 vaut environ 5,3 × 10⁻³⁵ J s, si bien que pour tout objet de laboratoire la précision conjointe permise en position et en impulsion est bien plus fine que ce qu'un instrument pourrait exploiter. La constante de Planck elle-même n'est plus du tout mesurée : depuis la révision du SI de 2019, elle est fixée par définition à 6,626 070 15 × 10⁻³⁴ J Hz⁻¹, et le kilogramme est réalisé par son intermédiaire.

## Deux familles de particules, et tout ce qui en découle

Les particules identiques en mécanique quantique le sont en un sens fort : aucune mesure ne distingue un électron d'un autre, si bien que l'état doit se comporter d'une manière déterminée lorsque deux d'entre elles sont échangées. Seuls deux comportements sont cohérents. Les états symétriques décrivent les **bosons**, qui portent un spin entier ; les états antisymétriques décrivent les **fermions**, qui portent un spin demi-entier.

L'antisymétrie a une conséquence immédiate — deux fermions ne peuvent pas occuper le même état, c'est le principe d'exclusion de Pauli — et une part énorme du monde observable repose dessus. La structure en couches des atomes, et donc le tableau périodique, en découlent. De même la pression de dégénérescence électronique qui soutient une naine blanche, et de même le remplissage des bandes d'énergie qui décide si un solide conduit, sujet de [la structure de bandes dans les matériaux](/fr/physics/matter-radiation/materials-physics-and-semiconductors). Les bosons font l'inverse : ils peuvent s'entasser dans un même état, ce qu'un faisceau laser et un condensat de Bose-Einstein ont en commun. L'inventaire des particules se scinde selon la même ligne, avec quarks et leptons du côté fermionique et les porteurs de force du côté bosonique ; le résumé du modèle standard par le CERN présente cet inventaire et range les porteurs de force parmi les bosons.

## La décohérence explique la limite classique, mais pas le résultat

Un système quantique n'est jamais isolé. Il s'intrique avec son environnement — molécules d'air, photons parasites, le rayonnement thermique qu'il émet lui-même — et une fois que l'environnement détient une trace de la branche empruntée, l'interférence entre branches n'est plus observable sur le système seul. C'est la **[décohérence](/en/glossary/decoherence)**, et elle est mesurable plutôt que supposée. Chauffer des molécules de fullerène dans un interféromètre jusqu'à ce qu'elles rayonnent des photons thermiques détruit leurs franges d'interférence d'une quantité prévisible, et la perte de visibilité mesurée s'accordait avec la théorie microscopique de la décohérence.

La décohérence répond bien à une question précise : pourquoi des objets grands, chauds et bien couplés ne montrent aucune interférence, sans exiger la moindre modification de la théorie. Elle ne dit pas pourquoi tel résultat particulier est celui qui survient. Confondre les deux est l'exagération la plus fréquente des exposés grand public sur le sujet. Tout ce qui relève de [la fabrication d'une machine à partir de qubits](/fr/physics/quantum-basics/quantum-computing-fundamentals) est en aval de ceci : la discipline entière est un combat pour retarder la décohérence assez longtemps pour achever un calcul.

## Ce que les expériences de Bell ont tranché

Le théorème de Bell de 1964 a transformé un différend philosophique en expérience : toute théorie où les propriétés sont localement déterminées avant la mesure obéit à une inégalité que la mécanique quantique viole. Deux générations de tests ont suivi, chacune laissant une hypothèse ouverte.

L'expérience de 2015 a fermé les deux plus difficiles à la fois, en intriquant des spins d'électrons dans des laboratoires séparés de 1,3 kilomètre, avec une fidélité d'état estimée à 0,92 ± 0,03 et 245 essais, une efficacité de détection suffisante pour éviter les hypothèses d'échantillonnage équitable et une séparation assez grande pour imposer la localité. Le rejet du réalisme local rapporté était au niveau de deux écarts-types — un résultat authentique et modeste, et l'article le disait clairement. Une collaboration ultérieure s'est attaquée à l'hypothèse restante, celle de l'imprévisibilité des réglages de mesure, en recrutant environ 100 000 personnes pour engendrer 97 347 490 choix binaires en douze heures, le 30 novembre 2016, et en les acheminant vers treize expériences dans douze laboratoires sur cinq continents.

Ce que cet ensemble de travaux établit est étroit et ferme : aucune théorie locale à variables cachées ne reproduit les corrélations observées. Ce qu'il n'établit pas, c'est laquelle des interprétations survivantes est correcte, puisqu'elles s'accordent sur toutes les prédictions. C'est pourquoi le résumé honnête du domaine est que le formalisme est fixé à dix chiffres significatifs tandis que son interprétation demeure véritablement ouverte. Le même contrôle des systèmes quantiques individuels qui rend ces tests possibles est aujourd'hui une technique de construction d'instruments à part entière, décrite dans [les capteurs quantiques sortent du laboratoire](/fr/physics/quantum-basics/quantum-sensors-leaving-the-lab).

Une limite mérite d'être énoncée explicitement. Les règles ci-dessus sont celles de la mécanique quantique non relativiste, cas limite de la théorie quantique des champs ; la création et l'annihilation de particules leur échappent. Et aucune version de la théorie n'incorpore encore la gravitation, raison pour laquelle les descriptions données ici restent loin d'un compte rendu complet de la nature.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Valeurs de référence et incertitudes déclarées pour la constante de Planck, la constante de structure fine et l'énergie de Rydberg.
2. **NIST** — [Electron magnetic moment anomaly](https://physics.nist.gov/cgi-bin/cuu/Value?ae). La valeur CODATA 2022 et son incertitude-type relative de 1,6 × 10⁻¹⁰.
3. **NIST** — [Redefining the kilogram](https://www.nist.gov/si-redefinition/kilogram-introduction). La révision du SI de 2018-2019 et la fixation de la constante de Planck.
4. **Nature 526, 682 (2015)** — [Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres](https://www.nature.com/articles/nature15759). Séparation, fidélité de l'intrication, nombre d'essais et force de la violation rapportée.
5. **Nature 557, 212 (2018)** — [Challenging local realism with human choices](https://www.nature.com/articles/s41586-018-0085-3). Échelle et conception du test de Bell distribué visant l'hypothèse de libre choix.
6. **Nature 427, 711 (2004)** — [Decoherence of matter waves by thermal emission of radiation](https://www.nature.com/articles/nature02276). Accord quantitatif entre la perte de visibilité mesurée et la théorie de la décohérence.
7. **CERN** — [The Standard Model](https://home.cern/science/physics/standard-model/). Classification des particules de matière et des porteurs de force, et lacunes reconnues du modèle.
8. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Séparation de la rétroaction de mesure et de la perte d'interférence.
9. **NIST** — [Quantum information science](https://www.nist.gov/quantum-information-science). Documentation de référence sur le contrôle et la mesure de systèmes quantiques individuels.
10. **NIST** — [Basic atomic spectroscopic data: hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1.htm). L'énergie d'ionisation tabulée de l'hydrogène neutre, 109 678,7717 cm⁻¹ (13,598 433 eV).
