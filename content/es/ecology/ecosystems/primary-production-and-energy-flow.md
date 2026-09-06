---
title: 'Producción primaria: qué miden GPP, NPP y NEP, y cómo se estima cada una'
metaTitle: 'Producción primaria: qué miden GPP, NPP y NEP'
excerpt: La producción primaria bruta nunca se mide directamente a escala de ecosistema, solo se infiere. Qué significan GPP, NPP y NEP, qué instrumento respalda cada cifra y por qué las mitades terrestre y oceánica descansan sobre métodos distintos.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - primary-production
  - carbon-flux
  - eddy-covariance
  - satellite-products
related:
  - food-webs-and-trophic-structure
  - what-is-an-ecosystem
  - carbon-cycle-explained
  - ocean-color-observations
pillar: what-is-an-ecosystem
_bodyHash: 2e1f11bb
---

Toda cifra sobre cuánto carbono fija la biosfera es el resultado de un modelo, no la lectura de un instrumento. Eso no es una crítica a las cifras; es un hecho sobre la magnitud. No existe ningún dispositivo que pueda apuntarse a un bosque o a una extensión de océano y obligarse a informar de la fotosíntesis. Lo que puede medirse es una concentración, una reflectancia, una masa de tejido cosechado o el flujo vertical de dióxido de carbono sobre un dosel — y cada una de esas cosas se convierte en una estimación de producción solo después de aplicar supuestos.

Circulan cuatro términos para lo que parece una sola magnitud, y difieren únicamente en qué respiración se ha restado ya. Confundir dos de ellos cambia una respuesta en un factor de dos, lo bastante para invertir el signo de un [presupuesto de carbono](/es/ecology/climate-change/carbon-budgets-and-remaining-emissions). Las reacciones que realizan la fijación se exponen en [cómo funciona la fotosíntesis](/es/biology/cells/photosynthesis-explained); la dificultad aquí empieza un nivel más arriba, donde un proceso a escala de hoja debe convertirse en una cifra para un continente — la misma traducción que obliga a describir un ecosistema por [las tasas que lo atraviesan y no por el terreno que ocupa](/es/ecology/ecosystems/what-is-an-ecosystem).

## Cuatro magnitudes y las restas que las separan

| Magnitud | Qué es | Cómo se produce una cifra | Escala global aproximada |
| --- | --- | --- | --- |
| Producción primaria bruta (GPP) | Carbono total fijado por la fotosíntesis antes de que nada de él sea respirado | Nunca se observa directamente; se separa por partición de un flujo neto o se modeliza a partir de la luz absorbida | Tierra: de 123 ± 8 a 147 Pg C yr⁻¹ según el método |
| Respiración autótrofa | Carbono respirado por los propios organismos fotosintéticos | Modelizada a partir de la temperatura y las propiedades de los tejidos; no se observa por separado a escala de ecosistema | No se publica como cifra global independiente |
| Producción primaria neta (NPP) | GPP menos la respiración autótrofa — el carbono disponible para todo lo demás | Cosecha e inventario a escala de parcela; modelos satelitales de eficiencia en el uso de la luz a escala global | Unos 105 Pg C yr⁻¹ en el mundo, repartidos de forma aproximadamente equitativa entre tierra y océano |
| Producción neta del ecosistema (NEP) | NPP menos la respiración de consumidores y descomponedores | Derivada del intercambio neto medido por covarianza turbulenta, con el signo invertido | Un pequeño residuo de dos flujos grandes |
| Producción neta del bioma | NEP menos incendios, cosecha y exportación lateral | Inventarios, modelos contables e inversiones atmosféricas | La magnitud que realmente necesita un presupuesto de carbono |

Al leer la tabla de arriba abajo, el patrón es que la precisión disminuye a medida que la magnitud se vuelve más útil. La GPP es conceptualmente limpia e inobservable. La producción neta del bioma es aquello de lo que dependen un inventario nacional o una afirmación sobre un [sumidero de carbono](/es/glossary/carbon-sink), y es el término con más restas y con la mayor incertidumbre relativa.

## Nada en una torre de flujo mide la fotosíntesis

El instrumento de referencia para la producción terrestre es la covarianza turbulenta: un anemómetro rápido y un analizador de gases montados sobre el dosel, que muestrean la velocidad vertical del viento y la concentración de CO₂ muchas veces por segundo, y cuya covarianza da el flujo vertical neto. Lo que se obtiene así es el intercambio neto del ecosistema — la diferencia entre la absorción y la respiración total — y nada más.

La GPP se extrae después mediante partición. El enfoque más conocido ajusta un modelo de respiración a los flujos nocturnos, cuando la fotosíntesis es nula, lo extrapola al día usando la temperatura y lo suma de nuevo al intercambio neto medido. Todo valor de GPP procedente de una torre arrastra, por tanto, los supuestos del modelo de partición que lo produjo. El [conjunto de datos FLUXNET2015](https://www.nature.com/articles/s41597-020-0534-3), que estandarizó el procesamiento para toda la comunidad, trata esa dependencia como algo que hay que medir y no eliminar: aplica en cada sitio tanto el método nocturno como un método diurno basado en la respuesta a la luz, añade un tercer método de respiración al anochecer allí donde las mediciones de almacenamiento lo permiten, y pide a los usuarios que tomen la diferencia entre los productos diurno y nocturno como incertidumbre. Es explícito en que la respiración del ecosistema y la absorción fotosintética son [productos de datos](/es/ecology/earth-observation/earth-observation-data-products) derivados y no mediciones, distribuidos junto con los flujos y con sus propias estimaciones de incertidumbre.

Ese conjunto de datos fija además la escala de la base observacional: 212 sitios en todo el mundo y más de 1500 años-sitio de datos hasta 2014 inclusive. Para un flujo planetario, unos pocos centenares de torres son una muestra escasa, y además no está repartida de manera uniforme: la cobertura es más densa en la Europa templada y en América del Norte y más rala en los trópicos, los desiertos y las latitudes altas, justo lo contrario de donde se sitúan los flujos mayores y menos ciertos.

## De unos pocos centenares de torres a un campo global

Tres familias de métodos convierten esa muestra en una cifra global, y discrepan de una manera instructiva.

Los modelos de eficiencia en el uso de la luz toman la radiación fotosintéticamente activa absorbida obtenida desde un satélite y la multiplican por una eficiencia que varía con el tipo de vegetación y que se regula a la baja por el estrés de temperatura y de humedad. La implementación operativa de la NASA, [el producto MOD17](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061) — MOD17A3HGF, versión 6.1 — entrega GPP y NPP anuales a 500 m a partir de la suma de los compuestos de 8 días, con la fotosíntesis neta dada como GPP menos la respiración de mantenimiento. Su documentación es franca sobre los compromisos: el producto anual solo se genera una vez cerrado el año, porque rellenar los huecos de las series de entrada de área foliar y de radiación absorbida requiere el año completo, y los píxeles que no superan el filtrado de calidad se rellenan por interpolación y no por observación.

El escalado estadístico, en cambio, aprende una relación entre los flujos de las torres y predictores satelitales y la aplica en todas partes. Una [síntesis basada en observaciones que utiliza datos de covarianza turbulenta y modelos diagnósticos](https://www.science.org/doi/10.1126/science.1184984) situó la GPP terrestre global en 123 ± 8 Pg C yr⁻¹, con los [bosques tropicales](/es/ecology/forests/tropical-forest-ecology) y las sabanas aportando el 60 por ciento de ese total y con la GPP de más del 40 por ciento de la superficie vegetada asociada a la precipitación. Un enfoque posterior que escaló la reflectancia de la vegetación en el infrarrojo cercano a partir de la misma red de torres devolvió [147 Pg C yr⁻¹, con un intervalo de credibilidad del 95 por ciento de 131 a 163](https://pubmed.ncbi.nlm.nih.gov/31199543/), y señaló que sus estimaciones son sistemáticamente más altas que las de los trabajos ascendentes anteriores, sobre todo en las latitudes medias.

Esos dos resultados no son una medición y una corrección. Son dos formas defendibles de extrapolar el mismo archivo de torres, cuyos valores centrales difieren en torno a una quinta parte — más que la incertidumbre declarada por cada uno de los dos estudios. Quien cita una cifra global de GPP está citando un método tanto como un planeta.

## La mitad oceánica es otro instrumento y otro error

La producción marina se reconstruye casi por completo a partir del color del océano. Los sensores miden la radiancia emergente del agua, los algoritmos la convierten en concentración de clorofila o en carbono del fitoplancton inferido a partir de la retrodispersión por partículas, y un modelo de productividad transforma esa biomasa existente en una tasa usando la luz, la profundidad de la capa de mezcla y la temperatura. El [producto global de color del océano](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description) del Copernicus Marine Service es un ejemplo práctico: la producción primaria se distribuye como una variable más, en una malla de 4 km, ensamblada a partir de SeaWiFS, MODIS, MERIS, VIIRS y OLCI a lo largo de un registro que comienza en 1997. Cómo se realiza esa inversión, y qué puede y qué no puede ver, es el tema de [las observaciones del color del océano](/es/ecology/earth-observation/ocean-color-observations).

La integración canónica de ambos dominios estimó la [NPP global en 104.9 Pg C yr⁻¹ con contribuciones aproximadamente iguales de la tierra y del océano](https://www.science.org/doi/10.1126/science.281.5374.237), y esa casi paridad sigue siendo el titular con el que se topa la mayoría de los lectores. Merece más cautela de la que suele recibir, porque las dos mitades no se miden de formas comparables. En tierra, la producción puede contrastarse con inventarios de biomasa, trampas de hojarasca y registros de cosecha, porque la mayor parte de lo que se fija permanece en su sitio durante años. En el océano, los organismos fotosintéticos se renuevan en días; no hay una biomasa acumulada que pesar, ni una red de torres, y la validación descansa en incubaciones dispersas realizadas a bordo de buques. Un análisis reciente de la era satelital, que informa de [descensos estadísticamente significativos de la producción primaria neta en casi la mitad del océano](https://www.nature.com/articles/s41467-025-60906-y), señala de pasada que el registro de teledetección es la mejor base disponible para una tendencia global — una afirmación sobre la ausencia de alternativas tanto como sobre la solidez del método.

## Por qué el residuo es la parte difícil

La distancia entre lo bruto y lo neto es donde vive la cifra relevante para las políticas, y es una diferencia de cantidades grandes. La GPP terrestre es del orden de 120 a 150 Pg C yr⁻¹; el sumidero terrestre neto de carbono evaluado por el IPCC para 2010 a 2019 es de [3.4 ± 0.9 Pg C yr⁻¹](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Un error sistemático de unos pocos por ciento en el flujo bruto tendría el tamaño del sumidero entero. Por eso el [ciclo del carbono](/es/ecology/earth-systems/carbon-cycle-explained) no queda acotado solo mejorando las estimaciones de GPP, y por eso la producción neta del bioma se estima por vías independientes — inversiones atmosféricas, inventarios forestales, modelos contables — y no restando un término modelizado grande de otro.

Para la ecología, más que para la contabilidad, la NPP suele ser la magnitud que importa, porque es el carbono realmente disponible para todo lo que no fotosintetiza y, por tanto, el techo de aquello con lo que puede construirse el resto de [la red trófica](/es/ecology/ecosystems/food-webs-and-trophic-structure). Ese techo es real, pero conviene recordar cómo se llegó a él. Cuando una cifra dice que una hectárea de pastizal produjo un tonelaje dado el año pasado, la expansión honesta es que un modelo de intercepción de la luz, una eficiencia supuesta y una serie satelital con huecos interpolados lo implicaron conjuntamente.

## Sources

1. **Scientific Data (Nature Portfolio)** — [The FLUXNET2015 dataset and the ONEFlux processing pipeline for eddy covariance data](https://www.nature.com/articles/s41597-020-0534-3). Número de sitios, longitud del registro y el estatus de la respiración y la absorción como productos derivados.
2. **Science** — [Terrestrial gross carbon dioxide uptake: global distribution and covariation with climate](https://www.science.org/doi/10.1126/science.1184984). La estimación de GPP basada en observaciones, de 123 ± 8 Pg C yr⁻¹, y su reparto regional.
3. **Global Change Biology** — [Terrestrial gross primary production: using NIRv to scale from site to globe](https://pubmed.ncbi.nlm.nih.gov/31199543/). La estimación de 147 Pg C yr⁻¹ con su intervalo de credibilidad y su comparación con los trabajos ascendentes.
4. **NASA Earthdata** — [MODIS/Terra net primary production gap-filled yearly L4 global 500 m, version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061). Producto operativo de eficiencia en el uso de la luz, su procedimiento de relleno de huecos y sus restricciones de calendario.
5. **Science** — [Primary production of the biosphere: integrating terrestrial and oceanic components](https://www.science.org/doi/10.1126/science.281.5374.237). El total global de NPP de 104.9 Pg C yr⁻¹ y la paridad aproximada entre tierra y océano.
6. **Copernicus Marine Service** — [Global ocean colour, bio-geo-chemical, L4 product description](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description). Sensores, resolución y longitud del registro que hay detrás de un campo operativo de producción primaria marina.
7. **Nature Communications** — [Global declines in net primary production in the ocean colour era](https://www.nature.com/articles/s41467-025-60906-y). Tendencia de la producción marina en la era satelital y la dependencia de la teledetección para las tendencias globales.
8. **IPCC AR6 WG1, Capítulo 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). El sumidero terrestre neto de carbono evaluado para 2010 a 2019.
