---
title: 'Biomes: how the map was drawn, and where it breaks down'
excerpt: A biome is a claim that macroclimate predicts vegetation form. Where the classification came from, why fire and land use put soft edges on it, and how satellite land-cover classes relate to biomes without being them.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - biomes
  - vegetation-classification
  - biogeography
  - ecotones
related:
  - ecological-succession-explained
  - what-is-an-ecosystem
  - land-cover-change-detection
  - biodiversity-baselines-and-shifting-baselines
pillar: what-is-an-ecosystem
---

A biome map makes a strong claim: that if you know the temperature and rainfall regime of a place, you can predict the structural form of the vegetation that grows there — forest, woodland, shrubland, grassland, desert — regardless of which species happen to occupy it. Convergent form across unrelated floras is what licenses the claim. Mediterranean shrublands in California, Chile, the Cape and southwest Australia share a growth form and a fire regime while sharing almost no species, and the same is true of temperate grasslands on four continents.

That claim is broadly right and unevenly right, and knowing where it fails is most of what makes the concept useful. This article is about the second part. The general framing of an ecosystem as flow rather than territory is set out in [the pillar on what an ecosystem is](/en/ecology/ecosystems/what-is-an-ecosystem); here the subject is the map, its inputs, and its edges.

## The bet that climate predicts vegetation form

The modern version of the idea is usually traced to Robert Whittaker, who plotted major vegetation formations on axes of mean annual temperature and mean annual precipitation and showed that they occupy distinct, largely non-overlapping regions of that space. The banding is not arbitrary: the latitudinal arrangement of wet and dry belts follows from [atmospheric circulation](/en/physics/climate-physics/atmospheric-circulation-cells), which is why deserts recur near 25 degrees on both sides of the equator and rainforest sits astride it.

What an operational classification looks like is best seen in FAO's global ecological zoning, built for forest reporting rather than for teaching. It uses the Köppen–Trewartha climatic system as its skeleton: five domains separated by temperature — tropical, subtropical, temperate, boreal, polar — subdivided by precipitation into [20 ecological zones at the working level](https://www.fao.org/4/ad652e/ad652e07.htm), with one mountain-systems zone inside each domain.

Two admissions in that document are more informative than the scheme itself. The zones were delineated using macroclimate data *and* existing potential-vegetation maps, because, in FAO's own words, using generalised climate maps alone could produce zones corresponding poorly to the boundaries of homogeneous vegetation. And several things are simply left out: mangroves, heaths and swamps are treated as azonal and not separately mapped, while every mountain system in a domain — forest, alpine shrub, meadow and bare rock alike — collapses into a single class, because the framework cannot address the small-scale diversity of mountain habitats. A biome map is thus not a pure climate product. It is a climate product corrected by vegetation observation, with its known failure cases removed from the legend rather than solved.

## Where the same climate supports two answers

The sharpest counter-example is the savanna-forest boundary. An analysis combining global tree-cover, climate, fire and soils data found that tree cover is [globally discontinuous rather than a smooth function of rainfall](https://www.science.org/doi/10.1126/science.1210465). Between roughly 1,000 and 2,500 mm of annual rainfall with mild seasonality — under seven dry months — tree cover is bimodal: a site is either high-cover forest or low-cover savanna, and climate does not say which. Fire does. Over large areas, including parts of Amazonia and the Congo basin, the two may be alternative states rather than positions on a gradient, with the consequence that shifts between them will be neither smooth nor easily reversible.

That result breaks the biome concept in a specific way. It does not say the classes are wrong; it says the mapping from climate to class is not a function over a large and important part of the parameter space. Which state a place occupies depends on its disturbance history, a dependence explored more fully in [what replaced the climax community idea](/en/ecology/ecosystems/ecological-succession-explained).

## Potential vegetation is a counterfactual, and an old one

Most biome maps depict potential natural vegetation — what would grow without human land use — and that convention creates two problems at once.

The first is arithmetic. FAO's land statistics put world agricultural land in 2022 at [4,781 million hectares, more than a third of the global land area](https://www.fao.org/statistics/highlights-archive/highlights-detail/land-statistics-2001-2022.-global--regional-and-country-trends/en), of which 1,573 million hectares was cropland and 3,208 million hectares permanent meadows and pastures. The remainder divides almost evenly between 4,050 million hectares of forest land and 4,150 million hectares of desert, glacier, barren and built-up ground. Across large parts of Europe, South Asia and the North American interior, the polygon labelled temperate broadleaf forest or temperate grassland is now farmland, and what governs its ecology is management, not climate — the subject of [agroecosystems as managed systems](/en/ecology/ecosystems/agricultural-ecosystems-and-agroecology).

The second problem is that the baseline being reconstructed was never free of people. A spatially explicit reconstruction of historical populations and land use found that even 12,000 years ago [nearly three-quarters of Earth's land was inhabited and shaped by human societies](https://www.pnas.org/doi/10.1073/pnas.2023483118), including more than 95 per cent of temperate and 90 per cent of tropical woodlands, and that areas now described as intact or wild generally carry long histories of use. Potential natural vegetation is therefore not a picture of a pre-human world; it is a model of what current climate would support in the absence of current land use, which is a narrower and more artificial thing. Why that distinction keeps mattering is the theme of [shifting baselines in biodiversity](/en/ecology/biodiversity/biodiversity-baselines-and-shifting-baselines).

## Land cover is what a satellite sees, and it is not a biome

Because biome maps are static and coarse, remote-sensing [land cover](/en/glossary/land-cover) products are often substituted for them. The substitution is convenient and conceptually wrong in a way worth naming: a biome class is a claim about what climate would sustain, while a land-cover class is a statement about what the surface reflected in a given year.

| Product | What it classifies | Classes | Basis and cadence |
| --- | --- | --- | --- |
| FAO global ecological zones | Potential vegetation under macroclimate | 20 zones in 5 domains | Köppen–Trewartha climate plus potential-vegetation maps; revised occasionally |
| ESA CCI / C3S land cover | Observed surface cover | 22 classes from the FAO land cover classification system | 300 m satellite composite, annual, 1992 onward |
| MODIS MCD12Q1 | Observed surface cover | Five parallel legends, including IGBP and plant functional types | 500 m supervised classification of daily reflectance, annual |

The Copernicus Climate Data Store's [land-cover record](https://cds.climate.copernicus.eu/datasets/satellite-land-cover?tab=overview) shows how such a series is built: a ten-year baseline classified from MERIS imagery between 2003 and 2012, then extended backwards with AVHRR and forwards with SPOT-Vegetation, PROBA-V and Sentinel-3, with four quality flags documenting the reliability of each classification and change detection. Continuity is engineered, not observed, and a change in the map can reflect a change in the sensor feeding it.

NASA's equivalent is unusually frank about a limit of a different kind. The MODIS land-cover product is a supervised classification trained on globally distributed labelled samples, and its documentation records that [the training database was not kept updated](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd12q1-061) because funding did not permit it, so some training sites may themselves have changed cover; users are urged to treat the layers with caution from 2021 onward. A classifier is only as current as its labels. The methods and pitfalls of reading change out of these series are covered in [land-cover change detection](/en/ecology/earth-observation/land-cover-change-detection).

## Edges do not hold still

Biome boundaries are drawn as lines and behave as gradients. The treeline — the transition from closed forest to treeless alpine or tundra vegetation — is the best-studied case, and it is moving upslope as the climate warms. A [global synthesis of 1,202 studies published between 1962 and 2022](https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecy.4309) assembled 208 tree taxa growing at or just below treeline across 34 mountain regions, from 54 genera and 26 families, with the Andes and the Himalaya holding the most species.

The same database illustrates why edge data are hard to trust in aggregate. Of the species recorded, 152 occur in the temperate biome, and its compilers note plainly that this may simply reflect where the studies were done. A pattern in a global compilation can be a pattern in the sampling. That caution applies to biome boundaries generally: they are described best where fieldwork is densest, which is not where they are shifting fastest.

None of this argues for discarding the classification. Biomes remain the practical stratification for global reporting, for sampling design, and for deciding which comparisons are meaningful; FAO's forest statistics would be uninterpretable without them. The discipline is to read a biome label as a hypothesis about what controls a place — climate first, disturbance and land use immediately after — rather than as a description of what is currently growing there. The two coincide less often than the map implies.

## Sources

1. **FAO** — [Global ecological zoning for the Global Forest Resources Assessment 2000](https://www.fao.org/4/ad652e/ad652e07.htm). Structure of the 20-zone classification, its Köppen–Trewartha basis, and its stated limitations.
2. **Science** — [The global extent and determinants of savanna and forest as alternative biome states](https://www.science.org/doi/10.1126/science.1210465). Bimodal tree cover at intermediate rainfall and the role of fire.
3. **FAO** — [Land statistics 2001–2022: global, regional and country trends](https://www.fao.org/statistics/highlights-archive/highlights-detail/land-statistics-2001-2022.-global--regional-and-country-trends/en). Global areas of agricultural land, cropland, pasture, forest and other land.
4. **PNAS** — [People have shaped most of terrestrial nature for at least 12,000 years](https://www.pnas.org/doi/10.1073/pnas.2023483118). Extent of early human land use across temperate and tropical woodlands.
5. **Copernicus Climate Change Service** — [Land cover classification gridded maps from 1992 to present](https://cds.climate.copernicus.eu/datasets/satellite-land-cover?tab=overview). Class count, resolution and the sensor-splicing behind the record.
6. **NASA Earthdata** — [MODIS land cover type, MCD12Q1 version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd12q1-061). Classification schemes and the documented staleness of the training database.
7. **Ecological Society of America, Ecology** — [ToTE: a global database on trees of the treeline ecotone](https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecy.4309). Treeline taxa, geographic coverage, and the temperate sampling bias.
