---
title: 'Detección de cambios en la cobertura del suelo: cartografiar cómo cambia la superficie con el tiempo'
metaTitle: Detección de cambios de cobertura del suelo por satélite
excerpt: Comparar imágenes de satélite de fechas distintas es el modo en que se mide el cambio del territorio a gran escala. Aquí se explican la diferencia entre cobertura del suelo y uso del suelo, los principales métodos de detección de cambios, los productos globales y los errores que hay que controlar.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - land-cover
  - land-use-change
  - remote-sensing
  - monitoring
related:
  - satellite-deforestation-monitoring
  - landsat-program-explained
  - earth-observation-data-products
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: d6d2d668
---

Cuando un bosque se convierte en tierra de cultivo, o un campo queda edificado, la superficie misma cambia, y ese cambio deja una huella medible en las imágenes de satélite. Detectarlo consiste en comparar imágenes del mismo lugar tomadas en momentos distintos y preguntarse, con cuidado, qué es genuinamente diferente. Este artículo explica la distinción que subyace a todo el ejercicio, las principales maneras de hacer la comparación, los productos que alimenta y los errores que hay que mantener a raya.

## La cobertura del suelo y el uso del suelo no son lo mismo

Lo primero que conviene fijar es qué se está midiendo. [La cobertura del suelo](/es/glossary/land-cover) es el material físico presente en la superficie —bosque, agua, tierra de cultivo, suelo construido—, aquello que un sensor puede registrar directamente. [El cambio de uso del suelo](/es/glossary/land-use-change), en cambio, atañe a la función humana de ese terreno: si una zona herbácea es un pastizal, un parque o un aeródromo abandonado a la maleza. Ambos conceptos están relacionados, pero son distintos.

La distinción importa porque la teledetección mide la cobertura, no el uso. Un satélite registra la reflectancia de una superficie y, a partir de ahí, un clasificador puede etiquetarla como bosque o como agua con una confianza razonable. El uso, en cambio, suele inferirse —se lee a partir del contexto, de cartografía auxiliar o del patrón temporal de la cobertura— más que observarse. Mantenerlos separados evita una confusión frecuente: un mapa de cobertura del suelo no es automáticamente un mapa de cómo se está usando el suelo.

## Cómo funciona la detección de cambios

La detección de cambios descansa en una premisa sencilla: tomar imágenes de un mismo lugar en dos o más fechas y localizar dónde la superficie ya no coincide consigo misma. Varios métodos establecidos hacen esto, y difieren en qué comparan y en cuánto dan por supuesto.

El más directo es la **diferenciación de imágenes**, en la que la banda o el índice de una fecha se resta de los de otra; los píxeles en los que la diferencia es grande se señalan como cambio candidato. Un segundo enfoque, la **comparación posclasificación**, clasifica cada fecha de forma independiente en categorías de cobertura del suelo y después compara los mapas resultantes, de modo que la salida describe no solo dónde ocurrió el cambio, sino qué se transformó en qué. Una tercera familia, el **análisis de series temporales**, trabaja con una pila larga de imágenes y busca el momento —un punto de ruptura— en que el comportamiento de un píxel se desplaza, lo que ayuda a fijar la fecha de un cambio y no solo su presencia. Cada método negocia la simplicidad frente a la riqueza de lo que puede informar, y la elección depende de la pregunta y de las imágenes disponibles. La cadena de procesamiento más amplia que convierte las escenas brutas en insumos listos para el análisis se trata en la panorámica de [observación de la Tierra y teledetección](/es/ecology/earth-observation/earth-observation-and-remote-sensing-explained) del grupo temático.

Estas técnicas son generales, pero una aplicación ha impulsado buena parte de su refinamiento: el seguimiento de la pérdida de bosque. El modo en que los métodos de series temporales aíslan la fecha de una corta es central en el [seguimiento de la deforestación por satélite](/es/ecology/earth-observation/satellite-deforestation-monitoring), donde saber cuándo se taló una masa forestal importa tanto como saber que se taló.

## Los productos y las imágenes que los sostienen

La detección de cambios no es solo una técnica de investigación; produce mapas operativos en los que se apoyan muchos usuarios. A escala global y regional, los mapas de cobertura del suelo de la Iniciativa sobre el Cambio Climático de la ESA ofrecen una serie coherente para todo el planeta, mientras que el Servicio de Vigilancia Terrestre de Copernicus entrega productos paneuropeos y globales ([Copernicus Land](https://land.copernicus.eu/)). El esfuerzo de la Iniciativa sobre el Cambio Climático de la ESA se enmarca en el programa de observación de la Tierra más amplio de la agencia ([ESA](https://www.esa.int/Applications/Observing_the_Earth)). Los esfuerzos nacionales los complementan, como la National Land Cover Database del USGS, construida sobre el largo registro de Landsat ([USGS](https://www.usgs.gov/landsat-missions)), y el Centro Común de Investigación de la Comisión Europea elabora su propio seguimiento del territorio y su propio [seguimiento forestal](/es/ecology/forests/deforestation-statistics-explained) ([JRC](https://joint-research-centre.ec.europa.eu/)).

La mayoría de estos productos se apoyan en el mismo cimiento: las imágenes de Landsat y Sentinel. Conviene enunciar esa dependencia con claridad, porque implica que la calidad de cualquier mapa de cobertura del suelo está acotada por la calidad de las escenas de entrada y por el método de clasificación aplicado a ellas. La parte Landsat de ese cimiento, con sus décadas de cobertura de resolución media, se describe en [el programa Landsat](/es/ecology/earth-observation/landsat-program-explained), y cómo se empaquetan esos insumos para su uso es el objeto de [los productos de datos de observación de la Tierra](/es/ecology/earth-observation/earth-observation-data-products).

## Por qué un cambio aparente no siempre es un cambio real

Un mapa de cambios vale lo que valga su tratamiento del error, y varias fuentes de error son intrínsecas al método. La más fundamental es que la exactitud de la clasificación nunca es perfecta: todo clasificador etiqueta mal algunos píxeles, y por eso los productos serios se publican con evaluaciones de exactitud en lugar de presentarse como exactos. Tratar un mapa clasificado como verdad de campo, sin leer la exactitud declarada, exagera lo que se sabe.

Otros dos problemas pueden fabricar un cambio que no ocurrió. El desajuste de registro entre imágenes —cuando dos fechas no están alineadas sobre la misma posición en el terreno— hace que un píxel se compare con el vecino equivocado, lo que genera falsos cambios a lo largo de bordes y límites. Las diferencias estacionales hacen algo parecido: un campo desnudo en invierno y verde en verano puede parecer una conversión del suelo cuando no es más que el mismo campo en otro punto de su ciclo. Un análisis sólido controla esto, por ejemplo comparando imágenes de estaciones equivalentes o empleando métodos de series temporales que modelan el ritmo anual normal antes de señalar una desviación respecto de él. Distinguir la conversión real de estos artefactos es la dificultad recurrente del campo, y enlaza con cuestiones ecológicas aguas abajo, como las [métricas de fragmentación del hábitat](/es/ecology/biodiversity/habitat-fragmentation-metrics), que dependen de mapas exactos de cobertura del suelo para tener sentido.

## Leer los mapas de cambio con cuidado

La detección de cambios en la cobertura del suelo es una herramienta madura y muy utilizada, pero sus salidas son interpretaciones, no fotografías de los hechos. El hábito más útil que puede adoptar un lector es hacerle tres preguntas a cualquier mapa de cambios: qué método lo produjo, con qué imágenes se construyó y qué exactitud se declaró. Una imagen de diferencia, un par de mapas clasificados y un punto de ruptura de una serie temporal pueden describir el mismo trozo de terreno y discrepar en los márgenes, y ninguno es correcto en un sentido absoluto. Usada con esa conciencia —y teniendo en cuenta los efectos estacionales y de registro—, la detección de cambios ofrece una imagen defendible y repetible de cómo se está desplazando la superficie del planeta con el tiempo.

## Sources

1. **Copernicus Land** — [land-cover products](https://land.copernicus.eu/). Cartografía paneuropea y global de la cobertura del suelo.
1. **ESA** — [Climate Change Initiative land cover](https://www.esa.int/Applications/Observing_the_Earth). Serie global de mapas de cobertura del suelo.
1. **USGS** — [land-cover data](https://www.usgs.gov/landsat-missions). Productos de cobertura del suelo basados en Landsat.
1. **Comisión Europea JRC** — [land monitoring](https://joint-research-centre.ec.europa.eu/). Seguimiento del territorio y de los bosques de la CE.
