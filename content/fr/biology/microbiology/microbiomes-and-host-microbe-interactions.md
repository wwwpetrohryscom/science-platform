---
title: 'Microbiome : ce que le séquençage peut et ne peut pas établir'
metaTitle: 'Microbiome : ce que le séquençage établit ou non'
excerpt: Un relevé de microbiome donne des proportions sur un total choisi par le séquenceur, non un recensement de l'intestin. Cette page sépare ce que cette structure de données peut porter des affirmations causales qui exigent une transplantation, un hôte gnotobiotique ou un essai.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - microbiome
  - metagenomics
  - causal-inference
  - host-microbe-interactions
  - compositional-data
related:
  - culturing-and-sequencing-microbes
  - antimicrobial-resistance-evidence
  - microbiology-explained
  - the-immune-system-explained
pillar: microbiology-explained
_bodyHash: '26631809'
---

Un relevé du microbiome intestinal ne compte pas d'organismes. Il indique quelle fraction des séquences récupérées dans un échantillon a été attribuée à chaque taxon, sur un total fixé par l'instrument et non par l'intestin. Presque toutes les manières dont ces relevés sont surinterprétés découlent de ce seul fait structurel, et les corrections qui s'y appliquent ne sont ni obscures ni récentes.

Quels organismes sont recensés, et de quoi ils vivent, fait l'objet de la [présentation générale de la vie microbienne](/fr/biology/microbiology/microbiology-explained). Cette page porte sur l'inférence : ce qu'un tableau de proportions peut porter, et ce qu'il faut pour faire passer un énoncé de *associé à* à *cause de*.

## Un chiffre qui a survécu à ses preuves

L'affirmation selon laquelle le corps humain contient dix cellules bactériennes pour une cellule humaine a circulé pendant des décennies. Une réévaluation parue en 2016 dans PLOS Biology situe le chiffre à environ 3.8 × 10¹³ bactéries — massivement dans le côlon — contre environ 3.0 × 10¹³ cellules humaines chez un homme de référence de 70 kg, soit un rapport de 1.3 assorti d'une incertitude annoncée de 25 % et d'une variation d'environ 50 % au sein d'une population d'hommes comparables. La masse bactérienne en jeu est d'environ 0.2 kg humide, 50–100 g sec.

L'ancien rapport reste retrouvable, mais seulement en comparant les bactéries aux cellules humaines *nucléées* et en écartant les globules rouges, qui constituent la majorité numérique des cellules humaines. C'est là le point utile de l'histoire. Le chiffre de 10:1 n'a pas été fabriqué ; c'était une estimation défendable dont la clause restrictive est tombée en cours de transmission, après quoi elle a survécu par la citation plutôt que par la mesure. Quiconque lit une statistique frappante sur le microbiome devrait demander quelle quantité a réellement été mesurée, car [le terme microbiome](/fr/glossary/microbiome) est couramment accolé à des nombres portant indifféremment sur des cellules, des gènes, des espèces et des masses.

## Des proportions ne sont pas des abondances

Le séquençage impose un total arbitraire. Un passage d'appareil renvoie un budget fixe de lectures, que les taxons se disputent ; les données sont donc **compositionnelles** : seuls les rapports entre composantes portent de l'information, et la quantité absolue de quoi que ce soit reste non mesurée. Une revue de 2017 parue dans *Frontiers in Microbiology* en a exposé les conséquences sans détour, et elles ne sont pas cosmétiques. Si un organisme prolifère, toutes les autres proportions baissent, et un test naïf rapportera ces baisses comme des appauvrissements. Les corrélations calculées entre proportions brutes sont contraintes de sommer à une constante et sont donc en partie fallacieuses par construction. Les tests standard qui supposent des composantes indépendantes ne s'appliquent pas.

Les parades sont établies — les transformations en log-rapports recommandées par cette revue, ou l'ajout dans l'échantillon d'une quantité connue de bactéries exogènes, qui permet de corriger le nombre de lectures des différences de charge microbienne totale —, mais elles ne sont pas universelles dans la littérature publiée, et un article qui rapporte une « augmentation de *Bacteroides* » sans dire par rapport à quel total n'a pas distingué la hausse d'un taxon de la baisse de tout le reste.

Ce que le séquençage lui-même résout constitue une limite distincte. Les relevés d'amplicons lisent un seul gène marqueur conservé et descendent en général jusqu'au genre ; la métagénomique shotgun lit tout l'ADN présent, peut atteindre l'espèce et la souche, et indique quels gènes sont là ; la métatranscriptomique indique lesquels sont transcrits. Aucune des trois ne mesure une vitesse, et chacune porte des biais techniques traités dans la page compagne sur [la manière dont les communautés microbiennes sont échantillonnées et séquencées](/fr/biology/microbiology/culturing-and-sequencing-microbes).

## Les protocoles capables de porter une affirmation causale

La distinction qui compte dans ce domaine n'est pas la significativité statistique mais l'architecture de l'étude. Quatre protocoles reviennent, et ils établissent des choses différentes.

| Protocole | Ce qu'il peut établir | Ce qui le met en défaut |
| --- | --- | --- |
| Cas–témoins transversal | Une association ; un biomarqueur candidat | Causalité inverse, confusion par l'alimentation et les médicaments, effets de lot |
| Cohorte longitudinale | L'ordre temporel du changement | La confusion persiste ; l'échantillonnage peut manquer la fenêtre pertinente |
| Transfert chez des animaux axéniques | Qu'une communauté suffit à produire un phénotype chez cet hôte | Le receveur n'est pas un humain ; l'alimentation et l'hébergement changent le résultat |
| Intervention clinique randomisée | Un effet chez l'humain | N'existe que pour très peu d'affections |

Les expériences de transfert sont ce qui permet au domaine de formuler la moindre affirmation causale. Dans une étude de 2013 parue dans *Science*, des communautés fécales issues de paires de jumelles adultes discordantes pour l'obésité ont été transplantées chez des souris axéniques ; l'augmentation de la masse corporelle et de la masse grasse a voyagé avec la communauté de la jumelle la plus lourde, et a voyagé de même avec les collections cultivées qui en dérivaient. La cohabitation des receveuses a empêché le phénotype, et ce sauvetage suivait l'invasion de certains *Bacteroidetes* issus de la communauté de la co-jumelle mince — et dépendait de ce que les souris recevaient à manger. C'est cette dernière proposition qui est le plus souvent perdue dans les résumés : l'effet microbien était conditionné par le régime alimentaire, il n'était pas autonome.

Du côté clinique, une intervention a accumulé des preuves véritablement solides. Une revue systématique avec méta-analyse de 2020 parue dans *EClinicalMedicine*, portant sur 45 études, rapporte un effet clinique à la semaine 8 de 91 % (IC à 95 % : 89–94) pour la transplantation de microbiote fécal répétée dans l'infection récidivante à *Clostridioides difficile*, sur 24 études et 1855 patients, et de 84 % (80–88) pour une administration unique ; le nombre de sujets à traiter par rapport à la vancomycine était de 1.5 pour la transplantation répétée. Les auteurs ont classé les preuves relatives à la transplantation répétée comme étant de haute qualité. Il s'agit d'une seule maladie dotée d'un seul mécanisme bien caractérisé, et ce n'est pas un modèle transposable à l'intervention sur le microbiome en général.

## La résistance à la colonisation est la fonction la mieux étayée

Ce mécanisme porte un nom. La **résistance à la colonisation** est la capacité d'une communauté établie, conjointement avec les défenses de l'hôte, à empêcher un organisme entrant de s'implanter — par la compétition pour les nutriments et les sites d'attachement, la production d'acides gras à chaîne courte et d'autres métabolites inhibiteurs, et le maintien du tonus immunitaire muqueux ; une voie supplémentaire, démontrée chez la souris, passe par la conversion, par les commensaux, des acides biliaires primaires de l'hôte en acides biliaires secondaires qui inhibent *Clostridioides difficile*. Une revue de 2025 parue dans *FEMS Microbiology Ecology* la présente comme une propriété conjointe de la communauté résidente et de l'hôte plutôt que de l'une ou de l'autre seule, ce qui explique pourquoi l'exposition aux antibiotiques et l'invasion par un pathogène sont le même événement vu de deux côtés.

Lue comme de l'écologie, c'est un effet d'occupation et non un don : une communauté résidente exclut un nouveau venu pour les mêmes raisons qu'une canopée fermée exclut une plantule. Cela explique aussi pourquoi la contribution mécanistique de la [régulation immunitaire](/fr/biology/physiology/the-immune-system-explained) ne peut pas être proprement séparée de la contribution microbienne chez un animal intact.

## Pourquoi la plupart des associations avec les maladies ne se transposent pas

Le correctif le plus utile de cette littérature est une méta-analyse transversale aux études publiée dans *Nature Communications* en 2017. En retraitant par des méthodes standardisées 28 études cas–témoins sur l'intestin couvrant dix maladies, elle a constaté que quelques affections se signalaient par de vastes déplacements de communauté impliquant plus de 50 genres, tandis que la plupart n'en impliquaient que 10–15, et — résultat décisif — qu'environ la moitié des genres signalés dans les études individuelles répondent à plus d'une maladie. Beaucoup d'associations publiées relèvent donc d'un déplacement non spécifique entre santé et maladie, et non d'une signature d'une affection particulière.

S'y ajoute la variance méthodologique ordinaire. Une perspective de 2018 parue dans *mBio* distingue reproductibilité, réplicabilité, robustesse et généralisabilité comme autant de défaillances distinctes, et la distinction compte ici : deux laboratoires peuvent traiter les mêmes échantillons et diverger à cause de kits d'extraction contaminés, d'effets de lot entre séries de séquençage, ou de versions différentes de logiciels et de bases de référence, avant que la moindre biologie n'intervienne. Les conséquences pour l'interprétation sont examinées plus avant dans l'éclairage sur [l'écart causal dans la recherche sur le microbiome](/fr/insight/microbiome-research-and-the-causal-gap), et le même piège inférentiel se répète dans les [communautés microbiennes du sol](/fr/ecology/ecosystems/soil-microbiome-regenerative-agriculture), où l'abondance relative est lue de la même façon comme une fonction.

La position honnête est étroite. Les relevés de séquençage détectent bien qu'une communauté diffère entre groupes, disent mal quelle différence importe, et restent muets sur le sens de la causalité. Combler cet écart exige soit un isolat manipulable, soit une intervention chez l'hôte — et pour la plupart des taxons que ces relevés détectent, ni l'un ni l'autre n'est actuellement disponible.

## Sources

1. **PLOS Biology** — [Revised estimates for the number of human and bacteria cells in the body](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533). Comptages de cellules bactériennes et humaines, le rapport de 1.3 et son incertitude, et l'origine de l'affirmation du 10:1.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2017.02224/full). Pourquoi les totaux de séquençage sont arbitraires et ce que cela fait aux tests de corrélation et de différence.
3. **Science** — [Gut microbiota from twins discordant for obesity modulate metabolism in mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC3829625/). Transmissibilité d'un phénotype d'adiposité à des souris axéniques, et sa dépendance au régime alimentaire.
4. **EClinicalMedicine** — [Faecal microbiota transplantation for recurrent Clostridioides difficile infection: an updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7788438/). Effet clinique groupé, nombre de sujets à traiter et gradation des preuves.
5. **Nature Communications** — [Meta-analysis of gut microbiome studies identifies disease-specific and shared responses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5716994/). Réanalyse transversale aux maladies montrant que beaucoup d'associations ne sont pas spécifiques.
6. **mBio** — [Identifying and overcoming threats to reproducibility, replicability, robustness and generalizability in microbiome research](https://pmc.ncbi.nlm.nih.gov/articles/PMC5989067/). Cadre séparant quatre modes de défaillance distincts.
7. **FEMS Microbiology Ecology** — [Ecology of the gut microbiota and colonization resistance: mechanisms and therapeutic implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC12728824/). Mécanismes par lesquels une communauté résidente et les défenses de l'hôte excluent les envahisseurs.
8. **Nature** — [Precision microbiome restoration of bile acid-mediated resistance to *Clostridium difficile*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4354891/). Conversion des acides biliaires primaires en acides biliaires secondaires par un commensal résident, comme mécanisme de résistance à la colonisation.
9. **Microbiome** — [Adjusting microbiome profiles for differences in microbial load by spike-in bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC4915049/). Étalonnage par ajout dosé pour retrouver des rapports d'abondance absolue à partir de nombres de lectures compositionnels.
10. **National Human Genome Research Institute** — [Microbiome](https://www.genome.gov/genetics-glossary/Microbiome). Définition de référence du terme tel qu'il est employé dans ces littératures.
