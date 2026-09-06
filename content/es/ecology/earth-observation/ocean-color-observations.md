---
title: 'Observaciones del color del océano: leer el mar por su color'
excerpt: El color del océano lleva información sobre las plantas microscópicas que viven en él. Aquí se explica cómo los satélites estiman el fitoplancton a partir de la luz que sale del agua, las misiones que han construido el registro y por qué la corrección atmosférica sobre el agua es la parte difícil.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - ocean-color
  - oceans
  - remote-sensing
  - monitoring
related:
  - modis-earth-observation-system
  - sentinel-satellites-explained
  - satellite-altimetry-explained
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: d4d6a2a2
---

El mar no es de un azul uniforme. Su tono preciso, muestreado desde la órbita, lleva información sobre la vida vegetal microscópica que deriva cerca de la superficie. Midiendo el espectro de la luz que sale del agua, los satélites pueden estimar cuánto fitoplancton hay presente, y esa estimación se ha convertido en uno de los hilos más constantes de nuestra [observación de la Tierra y teledetección](/es/ecology/earth-observation/earth-observation-and-remote-sensing-explained) de los océanos.

## Qué nos dice el color

El fitoplancton contiene clorofila a, el mismo pigmento que da su verde a las plantas terrestres. Cuanta más retiene el agua superficial, más se aparta el agua del azul profundo hacia el verde. Esta es la base física de la teledetección del [color del océano](/es/glossary/ocean-color): los instrumentos miden la luz que emerge justo por debajo de la superficie del mar y leen su color para inferir qué hay en el agua, ante todo clorofila a.

Estas plantas microscópicas importan de manera desproporcionada a su tamaño. Ocupan la base de la red trófica marina y absorben dióxido de carbono al fotosintetizar, de modo que figuran de forma destacada en el [ciclo del carbono](/es/ecology/climate-change/carbon-cycle-feedbacks) oceánico. Seguir su abundancia permite a los investigadores seguir la productividad primaria, ver formarse y desvanecerse las floraciones de algas, calibrar la [calidad del agua](/es/ecology/freshwater/water-quality-measurement-explained) y buscar cambios más lentos en los ecosistemas marinos. El [Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) de la NASA ha publicado una larga serie de imágenes que muestran cómo una sola señal de color puede leerse de todas estas maneras.

## Cómo funciona la medición

La magnitud en el núcleo del método es la [reflectancia](/es/glossary/reflectance) del agua en varias longitudes de onda visibles: en esencia, con qué intensidad devuelve el mar la luz en los extremos azul y verde del espectro. Los algoritmos habituales de clorofila las comparan mediante un cociente de reflectancia del azul al verde. Cuando el fitoplancton es escaso, domina la luz azul y el cociente es alto; a medida que su número aumenta, la luz verde se refuerza y el cociente cae. Convertir ese cociente en una estimación de la concentración de clorofila es el paso central que transforma el color en número.

Hacerlo bien depende de aislar la pequeña fracción de luz que realmente procede del agua. La mayor parte de la radiación que llega a un satélite sobre el océano ha sido dispersada por la atmósfera en lugar de reflejada por el mar, de modo que el procesamiento debe retirar primero la contribución atmosférica antes de que cualquier comparación del azul al verde tenga sentido. Los productos y los métodos que hay detrás están documentados y se distribuyen a través de [NASA Earthdata](https://www.earthdata.nasa.gov/), donde la larga historia del procesamiento del color del océano se expone en detalle.

## Construir el registro

La técnica la demostró por primera vez el Coastal Zone Color Scanner, lanzado en 1978, que mostró que los patrones de clorofila podían siquiera cartografiarse desde el espacio. Tras un largo paréntesis, el registro continuo moderno comenzó con SeaWiFS, que operó de 1997 a 2010 y estableció la serie temporal coherente y calibrada que ampliaron las misiones posteriores.

Ese registro lo sostienen ahora varios instrumentos a la vez. MODIS y VIIRS aportan ambos mediciones de color del océano, del mismo tipo que las seguidas mediante [el sistema MODIS](/es/ecology/earth-observation/modis-earth-observation-system) para sus otros productos, mientras que el instrumento OLCI a bordo de las plataformas europeas Sentinel-3 añade otro flujo, descrito en nuestra nota sobre [los satélites Sentinel](/es/ecology/earth-observation/sentinel-satellites-explained). Los productos operativos derivados de estos sensores se entregan a través del [Copernicus Marine Service](https://marine.copernicus.eu/), y la NOAA distribuye sus propios productos de color del océano mediante su servicio de satélites ambientales, [NESDIS](https://www.nesdis.noaa.gov/). Mantener la coherencia de estas fuentes importa porque la señal de color complementa otras observaciones oceánicas, como la [altimetría satelital](/es/ecology/earth-observation/satellite-altimetry-explained) y, en un plano más amplio, los [indicadores de contenido de calor oceánico](/es/ecology/climate-change/ocean-heat-content-indicators), al construir una imagen más completa del océano superficial.

## Por qué la corrección atmosférica es la parte difícil

La dificultad dominante en este campo es la corrección atmosférica, y es exigente precisamente por la geometría que se acaba de describir. Puesto que la mayor parte de la luz que un satélite recibe sobre el agua procede de la atmósfera y no del mar, la señal que sale del agua es débil en comparación. Un pequeño error al estimar la parte atmosférica se traduce, por tanto, en un gran error en la débil señal que queda: justamente la señal de la que depende el algoritmo de clorofila. Acertar con la corrección resulta, en la práctica, más arduo que el propio cociente de color.

Algunas aguas agravan el problema. El océano abierto, donde la clorofila es lo principal que hace variar el color, es el caso más tratable. Las aguas costeras y turbias son más difíciles: el sedimento en suspensión y la materia disuelta coloreada alteran también el espectro, de modo que el vínculo simple entre color y fitoplancton ya no se sostiene con nitidez, y separar esas contribuciones exige métodos más cuidadosos. Las nubes añaden un límite adicional, más simple: ocultan por completo la superficie y dejan huecos que hay que rellenar con días vecinos o señalar como ausentes.

## Leer los productos con cautela

Ninguna de estas limitaciones hace que el color del océano sea poco fiable, pero condicionan cómo deben leerse sus productos. Una estimación sobre el océano abierto y despejado se apoya en un terreno más firme que otra junto a una costa cargada de sedimentos, y un compuesto libre de nubes puede coser observaciones de varias pasadas en lugar de un único instante. Los valores se entienden mejor como estimaciones con una incertidumbre declarada que como mediciones directas de lo que hay en el agua.

Usado con esa cautela, el color del mar sigue siendo una manera práctica de vigilar el océano superficial vivo en áreas amplias y a lo largo de periodos prolongados. Desde la primera prueba que ofreció el escáner de 1978 hasta las misiones solapadas de hoy, la misma idea —que un desplazamiento del azul hacia el verde revela las plantas que hay debajo— sigue sustentando el modo en que se observa el fitoplancton desde la órbita.

## Sources

1. **NASA Earthdata** — [ocean colour](https://www.earthdata.nasa.gov/). Productos e historia de NASA Ocean Color.
1. **Copernicus Marine Service** — [ocean colour products](https://marine.copernicus.eu/). Datos operativos de color del océano.
1. **NASA Earth Observatory** — [ocean colour explained](https://science.nasa.gov/earth/earth-observatory/). Cómo el color revela el fitoplancton.
1. **NOAA NESDIS** — [ocean colour](https://www.nesdis.noaa.gov/). Productos satelitales de color del océano de la NOAA.
