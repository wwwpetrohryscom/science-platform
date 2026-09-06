---
title: 'Gradientes térmicos y estabilidad: por qué hay convección en la troposfera y no en la estratosfera'
metaTitle: Gradientes térmicos y estabilidad atmosférica
excerpt: Dos magnitudes distintas reciben el mismo nombre de gradiente térmico, y confundirlas produce casi todos los errores que se cometen sobre la estabilidad atmosférica. Esto es lo que mide cada una, cómo se combinan y qué dice en realidad la definición de la tropopausa.
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
_bodyHash: c50384d8
---

Dos magnitudes bastante distintas se llaman habitualmente «el [gradiente térmico](/en/glossary/lapse-rate)». Una es una propiedad de una parcela de aire ascendente, fijada por la termodinámica e igual en todo el planeta. La otra es una propiedad de la columna de aire circundante, medida por un radiosondeo y distinta cada día. La estabilidad es la comparación entre ambas, y casi toda la confusión sobre por qué sube el aire, sobre por qué el humo queda a veces estancado sobre un valle y sobre por qué la estratosfera se llama como se llama procede de tratar las dos como un solo número. La estructura térmica vertical que esto produce es la segunda mitad del cuadro esbozado en [la visión general de la física atmosférica](/es/physics/climate-physics/atmospheric-physics-explained), donde el perfil de presión era la primera.

## Tres gradientes, y qué describe cada uno

Una parcela no saturada elevada a través de la atmósfera se expande contra una presión decreciente y se enfría sin intercambiar calor con su entorno. La referencia de la NOAA sobre la teoría de la parcela da ese **gradiente adiabático seco** como un valor fijo de 9.8 °C por cada 1 000 metros. Una vez que la parcela se satura, la condensación libera calor latente en ella y frena el enfriamiento: la documentación de la NOAA sobre los diagramas skew-T sitúa el **gradiente adiabático saturado** cerca de la superficie en unos 4 °C por cada 1 000 metros, que asciende hacia el valor seco en la alta troposfera a medida que queda progresivamente menos vapor por condensar. El **gradiente térmico del entorno** es lo que diga el sondeo; la atmósfera estándar utilizada en aviación, en la formulación del centro NASA Glenn, lo fija en 0.00649 °C por metro desde una superficie a 15.04 °C hasta los 11 000 metros.

| Gradiente | Valor | De qué es propiedad |
| --- | --- | --- |
| Adiabático seco | 9.8 °C/km | Una parcela no saturada elevada |
| Adiabático saturado | unos 4 °C/km cerca de la superficie, acercándose a 9.8 °C/km en altura | Una parcela saturada elevada |
| Del entorno | medido; 6.49 °C/km en la atmósfera estándar | La columna de aire circundante |

## La estabilidad es una comparación, no una propiedad del aire

Que una parcela desplazada siga subiendo depende de cómo se compara su propio ritmo de enfriamiento con la temperatura que encuentra a su alrededor. El material didáctico de la NOAA hace la comparación con una bola y un cuenco. Si el gradiente del entorno es menor que ambas adiabáticas, una parcela elevada es siempre más fría y más densa que su entorno y vuelve a descender: la columna es absolutamente estable, la bola regresa al fondo del cuenco. Si el gradiente del entorno es mayor que la adiabática seca, cualquier desplazamiento crece: inestabilidad absoluta, el cuenco invertido. Entre los dos —mayor que la adiabática saturada, menor que la seca— la respuesta depende de si la parcela alcanza la saturación antes de quedarse sin flotabilidad. Esto es la **inestabilidad condicional**, y la NOAA la describe como uno de los estados más comunes de la atmósfera.

Ese caso intermedio es la razón de que el cielo no esté sencillamente o en calma o en convección. Es también la razón de que el ascenso forzado importe tanto como el calentamiento: una columna condicionalmente inestable necesita algo que empuje una parcela hasta su nivel de convección libre, ya sea un frente, el relieve o el calentamiento superficial, antes de hacer nada por sí sola. Lo que ocurre a partir de ese punto —nucleación de gotitas, crecimiento, glaciación— es el asunto de [cómo la convección forma las nubes](/es/physics/climate-physics/convection-and-cloud-formation).

## Por qué el perfil real queda entre las dos adiabáticas

Los 6.49 °C por kilómetro de la atmósfera estándar no son un compromiso arbitrario. La radiación sola, actuando sobre la opacidad de la atmósfera, dejaría la baja atmósfera mucho más inclinada que la adiabática seca y, por tanto, inestable. La convección retira el exceso casi tan deprisa como la radiación lo crea, y lo hace a lo largo de una adiabática saturada en los trópicos húmedos porque el aire ascendente allí suele estar saturado. El perfil medio observado es el residuo de esa competencia: lo bastante inclinado para mantener la convección, lo bastante suave para no desbocarse.

Esto no es un detalle de la meteorología. Un perfil de temperatura decreciente es una condición previa de todo el argumento radiativo expuesto en [la explicación del efecto invernadero por la altura de emisión](/es/physics/climate-physics/the-greenhouse-effect-physics), y por eso el gradiente térmico aparece en la contabilidad de las retroalimentaciones climáticas y no solo en la predicción.

## CAPE: una energía real, y una cota superior que nadie alcanza

La inestabilidad que está disponible y no meramente es posible se mide como **[energía potencial convectiva disponible](/en/glossary/cape)**. El Storm Prediction Center de la NOAA la define como la energía potencial total de que dispone una parcela que parte de la superficie una vez elevada hasta su nivel de convección libre, expresada en julios por kilogramo.

Como es una energía por unidad de masa, la CAPE se convierte directamente en una velocidad: la velocidad máxima de la corriente ascendente en la teoría de la parcela no diluida es la raíz cuadrada del doble de la CAPE, de modo que 2 000 J/kg corresponden a unos 63 m/s. Las corrientes ascendentes reales se quedan muy por debajo, por razones que el modelo de parcela ignora deliberadamente. El entrañamiento mezcla aire del entorno más seco en la columna ascendente y diluye su flotabilidad; el agua condensada es arrastrada y lastra la parcela; y las perturbaciones de presión alrededor de la corriente ascendente realizan trabajo sobre ella. La CAPE se lee mejor como un techo y un índice comparativo, no como una predicción de lo que hará el aire.

La magnitud compañera, la inhibición convectiva, mide el trabajo de flotabilidad negativa necesario para llevar una parcela a través de una capa estable hasta ese nivel. Una columna puede mantener una CAPE grande toda la tarde y no producir nada, porque la tapa nunca se rompe.

## Inversiones: el perfil puesto del revés

Cuando la temperatura aumenta con la altura cerca del suelo, la columna está casi tan estable como puede estarlo y la mezcla vertical se detiene en gran medida. Las inversiones se forman por varias vías: el enfriamiento radiativo de la superficie en noches despejadas, el calentamiento por subsidencia en altura dentro de un sistema de altas presiones y —en cuencas y valles— el aire frío y denso que se embalsa en el relieve y permanece allí durante días.

El tipo persistente se ha estudiado directamente. Una campaña de campo en el valle de Salt Lake, en Utah, se desarrolló del 1 de diciembre de 2010 al 7 de febrero de 2011 y documentó diez episodios persistentes de embalsamiento de aire frío en un solo invierno. La asociación con la calidad del aire que se comunica es directa: la concentración media en 24 horas de partículas finas supera a menudo la norma nacional estadounidense de calidad del aire ambiente de 35 µg/m³ durante estos episodios, y lo hizo durante cada uno de los cuatro embalsamientos más largos observados en esa campaña. El mecanismo dominante no es una emisión adicional, sino la pérdida del volumen en el que esas emisiones solían diluirse, aunque los autores señalan que las variaciones de las emisiones también pueden desempeñar un papel. Cómo se definen y se miden esas concentraciones se trata en el trabajo sobre [la medición y las normas de calidad del aire](/es/ecology/pollution/air-quality-measurement-and-standards).

Las inversiones son además la parte del perfil que peor maneja la observación. Las inversiones superficiales poco profundas, las capas estables delgadas y el techo de la [capa límite](/es/physics/mechanics-waves/fluid-dynamics-explained) son estructuras de unas pocas decenas de metros de espesor; ni la red de radiosondeos ni el espaciado típico de los niveles de un modelo las resuelven en todas partes, de modo que una capa estable puede ser real, consecuente e invisible para el sondeo destinado a detectarla. Ese problema de resolución se propaga hacia fuera, porque la intensidad de la trayectoria de las borrascas de latitudes medias depende de gradientes que viven en esas mismas capas delgadas, una dependencia que se retoma en [las celdas de la circulación general](/es/physics/climate-physics/atmospheric-circulation-cells).

## La tropopausa es un criterio, no un objeto

Por encima de la troposfera el signo se invierte, y se invierte porque el ozono absorbe el ultravioleta solar y deposita la energía localmente. La descripción de las capas de la NOAA recoge el perfil resultante: la temperatura sube desde una media de unos −51 °C en la tropopausa hasta aproximadamente −15 °C en el techo de la estratosfera, y señala que esta disposición —aire más cálido sobre aire más frío— suprime la convección, que es la razón de que los yunques de tormenta se extiendan planos a ese nivel. La estratosfera contiene alrededor del 19 por ciento de la masa de la atmósfera y muy poco vapor de agua.

Dónde está exactamente el límite se establece por definición, no se encuentra. El criterio de gradiente térmico de la Organización Meteorológica Mundial, citado en una evaluación de reanálisis publicada en *Atmospheric Chemistry and Physics*, define la primera tropopausa como «el nivel más bajo en el que el gradiente térmico desciende a 2 °C/km o menos, siempre que además el gradiente medio entre ese nivel y todos los niveles superiores situados dentro de 2 km no supere los 2 °C/km», e identifica una segunda tropopausa por encima allí donde el gradiente medio en cualquier capa de 1 km vuelve a superar los 3 °C/km. Aplicado a los campos de reanálisis, ese criterio sitúa la tropopausa tropical media entre 16 y 17 km y la de latitudes altas entre unos 8 y 12.5 km, en consonancia con la afirmación más sencilla de la NOAA de que la troposfera llega a 18 o 20 km en el ecuador y a unos 6 km en los polos.

Conviene ser explícito sobre cuánto sostiene ese criterio. La misma evaluación encontró diferencias de altura media mensual de la tropopausa entre dos generaciones de un mismo sistema de reanálisis que iban desde unos −300 m cerca de los 30° de latitud hasta 150 m en el ecuador, sin ningún cambio en la atmósfera subyacente. Una tendencia de la altura de la tropopausa comparada entre productos es, por tanto, en parte una tendencia del algoritmo y de los datos de entrada. El límite es un umbral aplicado a un gradiente, y donde el gradiente es suave, es el umbral el que decide.

## Sources

1. **NOAA JetStream** — [Parcel Theory](https://www.noaa.gov/jetstream/upperair/parcel-theory). Gradiente adiabático seco y el argumento de flotabilidad para la estabilidad.
2. **NOAA JetStream** — [Skew-T Log-P Diagrams](https://www.noaa.gov/jetstream/upperair/skew-t-log-p-diagrams). Gradiente adiabático saturado cerca de la superficie y su convergencia con el gradiente seco en altura.
3. **NOAA JetStream** — [Stability and Instability](https://www.noaa.gov/jetstream/upperair/bowls). Los cuatro regímenes de estabilidad y la inestabilidad condicional como caso común.
4. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Gradiente térmico del entorno en la atmósfera estándar y espesor de la troposfera.
5. **NOAA JetStream** — [Layers of the Atmosphere](https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere). Calentamiento por ozono, rango de temperatura y fracción de masa de la estratosfera, y alturas de la tropopausa por latitud.
6. **NOAA Storm Prediction Center** — [Surface-based CAPE](https://www.spc.noaa.gov/exper/mesoanalysis/help/help_sbcp.html). Definición y unidades de la energía potencial convectiva disponible.
7. **American Meteorological Society, Bulletin of the AMS** — [The Persistent Cold-Air Pool Study](https://journals.ametsoc.org/view/journals/bams/94/1/bams-d-11-00255.1.xml). Fechas de la campaña de campo, número de episodios y la asociación con las partículas.
8. **Copernicus, Atmospheric Chemistry and Physics** — [An assessment of tropopause characteristics of the ERA5 and ERA-Interim meteorological reanalyses](https://acp.copernicus.org/articles/22/4019/2022/). Definición de la tropopausa por el criterio de gradiente de la OMM, alturas medias de la tropopausa y diferencias entre productos.
