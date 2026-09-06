---
title: 'La richesse spécifique expliquée : ce qu''un décompte d''espèces peut et ne peut pas dire'
metaTitle: 'Richesse spécifique : ce qu''un nombre d''espèces révèle'
excerpt: La richesse spécifique est la mesure de biodiversité la plus simple et la plus facile à mal interpréter. Voici ce que représente réellement un décompte d'espèces, comment l'effort d'échantillonnage et la surface le déforment, et quels estimateurs servent à rendre les décomptes comparables.
type: expert
author: biodiversity-conservation-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - biodiversity
  - species-richness
  - monitoring
  - diversity-metrics
related:
  - species-evenness-and-diversity
  - why-species-counts-mislead-conservation
  - biodiversity-indicators-explained
pillar: why-species-counts-mislead-conservation
readingTime: 5
---

Le décompte des espèces distinctes recensées en un lieu est la manière la plus familière de résumer la biodiversité, et celle que l'on risque le plus de prendre au pied de la lettre. La mesure est simple à définir et peu coûteuse à calculer, ce qui explique sa diffusion dans les inventaires, les rapports et les synthèses destinées aux décideurs. Elle véhicule aussi des hypothèses implicites sur la manière dont le comptage a été mené, sur son lieu et sur son exhaustivité, et ce sont ces hypothèses qui déterminent ce que le chiffre peut réellement étayer.

## Ce que représente le décompte

La [richesse spécifique](/fr/glossary/species-richness) est le nombre d'espèces distinctes recensées dans une aire ou un échantillon définis. C'est la mesure de biodiversité la plus souvent rapportée, en grande partie parce que l'idée est intuitive et l'arithmétique triviale : on dresse la liste des espèces, puis on compte les entrées. Cette accessibilité est un atout réel pour un premier examen d'une communauté, et elle sous-tend nombre des [indicateurs de biodiversité](/fr/ecology/biodiversity/biodiversity-indicators-explained) qui alimentent les rapports régionaux.

Cette simplicité masque toutefois un choix de protocole. Un décompte brut n'a de sens que relativement à la limite tracée autour de lui et à l'effort déployé à l'intérieur de cette limite. Deux chiffres qui paraissent directement comparables peuvent avoir été produits dans des conditions qui rendent la comparaison directe trompeuse. Comprendre le décompte revient donc à comprendre l'inventaire qui l'a produit, ce qui fait l'objet des sections suivantes et constitue un thème récurrent des travaux plus larges sur le [suivi de la biodiversité et la santé des écosystèmes](/fr/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## Pourquoi l'effort et la surface modifient le chiffre

La propriété la plus importante d'un décompte d'espèces est sa sensibilité à l'effort d'échantillonnage. Chercher davantage révèle presque toujours davantage d'espèces, car les taxons rares et difficiles à détecter s'accumulent lentement à mesure que l'observation se poursuit. Par conséquent, deux décomptes bruts ne sont comparables que si l'effort qui les sous-tend est équivalent. Un inventaire court sur un site riche peut livrer moins d'espèces qu'un inventaire long sur un site plus pauvre, et l'écart peut en dire davantage sur le calendrier que sur le lieu.

Un deuxième motif structurel est la relation aire-espèces : les grandes surfaces tendent à abriter plus d'espèces que les petites, et elles le font selon une courbe à peu près prévisible plutôt que selon une droite. L'implication est pratique. Comparer le décompte d'une petite parcelle à celui d'une vaste région, ce n'est pas comparer des choses comparables, et passer de l'une à l'autre exige d'expliciter la relation à la surface au lieu de l'escamoter.

La détection ajoute une troisième complication. Qu'une espèce soit ou non recensée dépend de la facilité avec laquelle on l'observe, laquelle dépend à son tour de son abondance, de son comportement et de son caractère cryptique. Comme la probabilité de détection est inférieure à un, l'absence de mention n'est pas la preuve qu'une espèce est absente : elle peut simplement être passée inaperçue. La résolution taxinomique compte également ici, car la finesse avec laquelle les organismes sont identifiés fixe le plafond du nombre d'entrées distinctes que la liste peut contenir. Les grands jeux de données agrégés tels que les [données d'occurrence](https://www.gbif.org/) héritent de ces trois effets des inventaires qui les ont alimentés.

## Comment la richesse est mesurée et comparée

Les écologues organisent la richesse à travers les échelles spatiales au moyen d'un cadre qui distingue des composantes locale, régionale et inter-sites. Dans les termes de Whittaker, la diversité alpha est la richesse au sein d'un site unique, la diversité gamma est la richesse d'une région plus vaste, et la diversité bêta décrit le renouvellement, ou différence de composition, entre les sites. Un même total régional peut résulter de nombreux sites uniformes ou d'une mosaïque de sites distincts, et c'est la partition alpha-bêta-gamma qui empêche de confondre ces situations.

Pour mettre des échantillons inégaux sur un pied d'égalité, deux techniques apparentées font référence. La raréfaction ramène les échantillons plus riches ou plus grands à un niveau d'effort commun, de sorte que les décomptes puissent être lus côte à côte, et l'extrapolation projette modestement au-delà de l'effort observé sous des hypothèses explicitées. Les estimateurs tels que Chao1 empruntent une autre voie : ils infèrent combien d'espèces ont probablement été manquées en examinant la fréquence des plus rares, au motif qu'une abondance de singletons signale des espèces non détectées qui restent à découvrir. Les nombres de Hill situent ensuite la richesse au sein d'une même famille de mesures de diversité, où elle apparaît comme le cas particulier de l'ordre q égal à zéro, celui qui compte les espèces sans accorder de poids supplémentaire à la fréquence de chacune. Les travaux évalués par les pairs sur l'estimation de la diversité continuent d'affiner le comportement de ces outils dans des conditions réelles d'échantillonnage, et les évaluations de l'[IPBES](https://www.ipbes.net/global-assessment) s'appuient sur eux lorsqu'elles résument les limites de tout indicateur pris isolément.

## Ce que la richesse laisse de côté

La limite déterminante d'un décompte d'espèces est qu'il ignore à la fois l'abondance et l'identité. Chaque espèce de la liste compte pour une, qu'elle soit représentée par un seul individu ou par des milliers, et quel que soit le rôle écologique qu'elle joue. Un site dominé par une espèce commune accompagnée de nombreux singletons peut donc obtenir exactement le même score qu'un site où les individus se répartissent uniformément entre les espèces. Les deux communautés sont loin d'être équivalentes, et pourtant le décompte ne permet pas de les distinguer.

C'est pourquoi la richesse prise isolément est un signal de conservation faible, et pourquoi les écologues l'associent à des mesures de la répartition des individus entre les espèces. L'[équitabilité spécifique](/fr/glossary/species-evenness) rend compte de cet équilibre, et la combiner au décompte donne une image plus complète que l'une ou l'autre prise seule. Le raisonnement qui sous-tend ces mesures composites est développé plus avant dans notre note sur l'[équitabilité et la diversité spécifiques](/fr/ecology/biodiversity/species-evenness-and-diversity), tandis que les conséquences pour la priorisation sont reprises dans [pourquoi le décompte des espèces fausse les priorités de conservation](/fr/ecology/biodiversity/why-species-counts-mislead-conservation).

## Lire un chiffre de richesse avec la prudence qui convient

Plusieurs sources d'incertitude accompagnent tout décompte rapporté, et les nommer maintient le chiffre honnête. Parce que l'effort, la surface et la détection façonnent tous le résultat, un chiffre isolé doit être lu conjointement avec le protocole d'inventaire qui l'a produit plutôt que seul. Les estimateurs et la raréfaction réduisent ces distorsions sans les supprimer : ils reposent sur des hypothèses relatives à la manière dont les espèces rares s'accumulent, et ces hypothèses peuvent être mises à mal lorsque l'échantillonnage est clairsemé ou irrégulier. Un chiffre rapporté sans son effort, sa surface et sa méthode est difficile à interpréter et facile à surinterpréter.

La réponse constructive consiste à rester modeste sur ce qu'un décompte peut porter. Traitée comme un descripteur parmi d'autres, avec son effort et sa surface explicités et ses limites de détection reconnues, la richesse spécifique demeure un point d'entrée utile dans une communauté. Traitée comme un verdict autonome sur la valeur écologique, elle tend à égarer. Les programmes régionaux tels que les travaux de l'Agence européenne pour l'environnement sur la [biodiversité](https://www.eea.europa.eu/en/topics/in-depth/biodiversity) rendent en conséquence compte de l'état des espèces et des habitats au moyen de jeux d'indicateurs plutôt que d'un unique chiffre phare.

## Sources

1. **IPBES** — [Global Assessment Report](https://www.ipbes.net/global-assessment). État et mesure de la biodiversité, y compris les limites des indicateurs pris isolément.
2. **GBIF** — [occurrence records](https://www.gbif.org/). Données agrégées d'occurrence des espèces qui sous-tendent les estimations de richesse.
3. **EEA** — [biodiversity](https://www.eea.europa.eu/en/topics/in-depth/biodiversity). Indicateurs européens de l'état des espèces et des habitats.
