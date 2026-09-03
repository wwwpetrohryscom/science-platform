---
title: 'Observación de la Tierra y teledetección: cómo se mide el planeta desde el espacio'
excerpt: Los satélites se han convertido en los instrumentos que permiten vigilar el planeta entero a la vez. Aquí se explica cómo funciona la observación de la Tierra —de los fotones a los productos de datos calibrados—, qué mide en clima y ecosistemas y dónde están sus límites.
type: pillar
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-08-29'
readingTime: 11
tags:
  - earth-observation
  - remote-sensing
  - satellites
  - environmental-monitoring
related:
  - what-is-remote-sensing
  - landsat-program-explained
  - earth-observation-data-products
  - remote-sensing-limitations-and-uncertainty
_bodyHash: 9d01864e
---

La mayor parte de lo que sabemos sobre cómo está cambiando el planeta —el hielo que retrocede, la deforestación que avanza, los mares que se calientan, la tierra que verdea o se vuelve parda— se mide hoy, al menos en parte, desde el espacio. La [observación de la Tierra](/en/glossary/earth-observation) es la práctica de reunir información sobre las tierras emergidas, el océano, la atmósfera y el hielo del planeta mediante sensores instalados en satélites y aeronaves. La [teledetección](/en/glossary/remote-sensing) es la técnica que la sustenta: medir algo sin tocarlo, registrando la radiación que refleja o emite.

Este es el eje del grupo temático de EcoScienceHub sobre observación de la Tierra, y es deliberadamente un puente. Las mismas mediciones por satélite que siguen los [indicadores climáticos](/es/ecology/climate-change/climate-indicators-earth-system-monitoring) sostienen también el [seguimiento de la biodiversidad](/es/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health) y el estudio de los [ecosistemas](/es/ecology/ecosystems/what-is-an-ecosystem). Este artículo explica cómo se realizan las mediciones, qué convierte una señal bruta en ciencia utilizable y por qué todo producto satelital lleva asociada una incertidumbre que hay que declarar en lugar de ocultar. Los artículos de apoyo enlazados a lo largo del texto profundizan en cada instrumento y en cada aplicación.

## Qué mide realmente la teledetección

Un sensor remoto no fotografía la «deforestación» ni la «sequía». Mide radiación electromagnética en bandas de longitud de onda definidas y registra el valor de cada localización como un número. Todo lo demás —vegetación, agua, fuego, crecimiento urbano— se infiere del modo en que las superficies interaccionan con esa radiación.

Dos grandes familias de instrumentos hacen ese trabajo. Los sensores **pasivos** registran la radiación disponible de forma natural, casi siempre luz solar reflejada o infrarrojo térmico emitido por la superficie; los sensores de imagen ópticos y térmicos, como los de Landsat y MODIS, son pasivos. Los sensores **activos** aportan su propia energía y miden lo que regresa: el radar y el lidar emiten un pulso y cronometran el eco, lo que les permite ver a través de las nubes y de noche, y medir alturas directamente. Cada superficie tiene una [firma espectral](/en/glossary/spectral-signature) característica: la manera concreta en que refleja a lo largo de las longitudes de onda. La vegetación sana, por ejemplo, absorbe la luz roja y refleja intensamente en el infrarrojo cercano, y ese contraste es la base de los índices de vegetación que se comentan más abajo.

La magnitud que un sensor óptico calibrado acaba entregando es la [reflectancia](/en/glossary/reflectance) —la fracción de luz incidente que una superficie devuelve en cada banda—, almacenada como una malla de píxeles, una forma de [dato ráster](/en/glossary/raster-data). La resolución de esa malla, y con qué frecuencia se actualiza, son lo primero que determina qué puede y qué no puede ver un sensor.

## Los sistemas de satélites

Ningún satélite cubre por sí solo todas las necesidades, de modo que la observación de la Tierra descansa en una flota con capacidades complementarias. La introducción sobre [qué es la teledetección](/es/ecology/earth-observation/what-is-remote-sensing) cubre la física; cada uno de los caballos de batalla tiene además su propio artículo.

El [programa Landsat](/es/ecology/earth-observation/landsat-program-explained), conjunto de la NASA y el USGS, toma imágenes de la superficie terrestre de forma continua desde 1972 con resolución moderada (unos 30 metros), el registro más largo de su clase. El [programa Copernicus](/es/ecology/earth-observation/copernicus-programme-explained) de la Unión Europea opera los [satélites Sentinel](/es/ecology/earth-observation/sentinel-satellites-explained), que añaden revisitas frecuentes, imagen radar y servicios operativos. Los [instrumentos MODIS](/es/ecology/earth-observation/modis-earth-observation-system) de la NASA, y sus sucesores VIIRS, sacrifican detalle espacial a cambio de una cobertura global casi diaria, ideal para seguir cambios rápidos. Los altímetros radar de otra línea de misiones miden la altura de la superficie del mar, objeto del artículo sobre [altimetría satelital](/es/ecology/earth-observation/satellite-altimetry-explained). Elegir entre ellos es un compromiso entre la resolución espacial, la frecuencia con que se revisita un lugar y las longitudes de onda que un sensor puede medir; ningún instrumento optimiza las tres cosas a la vez.

## De los fotones a los productos de datos: la metodología

Un número registrado por un sensor en órbita no es todavía ciencia. Convertirlo en una medición de la superficie exige una cadena de procesamiento definida, que el artículo sobre los [productos de datos de observación de la Tierra](/es/ecology/earth-observation/earth-observation-data-products) recorre en detalle. Los pasos esenciales son estos.

**Calibración.** La señal bruta se convierte en una radiancia física mediante la calibración del sensor y se corrige geométricamente para que cada píxel quede en su posición real sobre el terreno.

**Corrección atmosférica.** Entre la superficie y el satélite está la atmósfera, que dispersa y absorbe la luz. Corregir su efecto convierte la radiancia en el techo de la atmósfera en reflectancia de superficie: el paso que hace comparables imágenes de fechas distintas.

**Niveles de procesamiento.** Las agencias etiquetan los productos según el punto de esa cadena en el que se encuentran: desde los datos brutos del instrumento (nivel 0), pasando por la radiancia calibrada y geolocalizada (nivel 1) y las variables geofísicas recuperadas, como la temperatura superficial o la reflectancia (nivel 2), hasta los productos en malla y compuestos temporales (nivel 3) y las salidas asimiladas en modelos (nivel 4). Conocer el nivel de un producto le indica a quien lo usa cuánto procesamiento —y cuántos supuestos— hay ya dentro del número.

**Índices derivados y clasificación.** A partir de la reflectancia de superficie se calculan índices y mapas. El más conocido es el [NDVI](/en/glossary/ndvi), el índice de vegetación de diferencia normalizada, explicado en el artículo sobre el [NDVI](/es/ecology/earth-observation/ndvi-explained) y generalizado en el de los [índices de vegetación](/es/ecology/earth-observation/vegetation-indices-and-monitoring). Clasificar los píxeles en categorías como bosque, agua o cultivo produce mapas de [cobertura del suelo](/en/glossary/land-cover); compararlos a lo largo del tiempo es la [detección de cambios de cobertura](/es/ecology/earth-observation/land-cover-change-detection).

## Qué mide la observación de la Tierra en el medio ambiente

Sobre esta cadena de procesamiento se asienta un amplio abanico de aplicaciones, y es aquí donde este grupo temático conecta con el resto de EcoScienceHub.

En la **superficie terrestre y la biosfera**, los satélites cartografían el estado de la vegetación, siguen la [deforestación](/es/ecology/earth-observation/satellite-deforestation-monitoring), detectan [incendios forestales y superficie quemada desde el espacio](/es/ecology/earth-observation/wildfire-monitoring-from-space) y alimentan los [sistemas de seguimiento de la sequía](/es/ecology/earth-observation/drought-monitoring-systems). Esas mismas mediciones estructurales sostienen la [teledetección aplicada al seguimiento de la biodiversidad](/es/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring) y la cartografía de la [fragmentación del hábitat](/es/ecology/biodiversity/habitat-fragmentation-metrics).

En el **océano**, las [observaciones del color del océano](/es/ecology/earth-observation/ocean-color-observations) estiman el fitoplancton a partir del color del agua, mientras que la altimetría sigue la altura de la superficie marina. En el **sistema climático**, la observación de la Tierra aporta muchos de los registros de titular: la altimetría satelital que hay detrás de la [subida del nivel del mar](/es/ecology/climate-change/sea-level-rise-indicators), los sensores que vigilan las [concentraciones de gases de efecto invernadero](/es/ecology/climate-change/greenhouse-gas-concentrations-monitoring) y las imágenes en las que se apoyan los indicadores de hielo y de temperatura. Lo que este grupo temático quiere mostrar es que no se trata de técnicas separadas, sino de un único sistema de medición apuntado a preguntas distintas.

## Validación: por qué los datos de campo siguen importando

Un producto satelital solo merece confianza cuando se ha contrastado con mediciones independientes. La [verdad terreno](/en/glossary/ground-truthing) —comparar una estimación satelital con observaciones de campo, torres instrumentadas, buques o imágenes de mayor resolución— es la vía por la que se calibra la relación entre una señal espectral y una magnitud del mundo real, y por la que se cuantifica su error. La observación de la Tierra no sustituye al trabajo de campo: lo extiende, y ambos están concebidos para funcionar juntos. Un índice de vegetación que no se ha calibrado contra ningún dato de campo es un patrón, todavía no una medición.

## Datos abiertos y continuidad

Dos rasgos de la observación de la Tierra moderna pasan fácilmente desapercibidos y son, sin embargo, centrales para su valor científico: el acceso abierto y la continuidad. Cuando el USGS abrió en 2008 todo el archivo de Landsat a la descarga pública gratuita, el uso de los datos se disparó, porque por fin era posible analizar largas pilas de imágenes en lugar de comprar escenas de una en una. La Unión Europea construyó el programa Copernicus sobre el mismo principio —sus datos Sentinel son gratuitos y de licencia abierta— y la NASA distribuye abiertamente sus archivos de ciencias de la Tierra a través de Earthdata. El acceso abierto es lo que hace posibles la verificación independiente y los estudios de largo plazo.

La continuidad importa igual. Una medición solo es un indicador de cambio si la misma magnitud se produce de forma coherente a lo largo de los años y de satélites sucesivos, y por eso las agencias invierten mucho en solapar misiones y en calibración cruzada, de modo que el registro de un instrumento pueda enlazarse con el siguiente sin un salto espurio. Un hueco en la cobertura, o un cambio de sensor sin calibrar, puede disfrazarse de señal ambiental; sostener el registro es, por tanto, una tarea científica por derecho propio y no meramente operativa.

## La incertidumbre

Toda medición por satélite lleva asociada una incertidumbre, y los proveedores solventes la publican en lugar de enterrarla.

**Compromisos de resolución.** Un mayor detalle espacial suele implicar una franja de barrido más estrecha y revisitas menos frecuentes. Un sensor que ve un lugar cada día no puede además resolver árboles individuales; otro que distingue los límites de una parcela quizá solo revisite cada una o dos semanas. El instrumento adecuado depende de la pregunta.

**La atmósfera y las nubes.** Los sensores ópticos no ven la superficie a través de las nubes, de modo que las regiones nubosas y tropicales presentan huecos sistemáticos. Los efectos atmosféricos residuales, los aerosoles y la calima añaden error incluso en días despejados, un error que la corrección atmosférica reduce pero nunca elimina del todo.

**Píxeles mixtos.** Un solo píxel abarca a menudo varios tipos de superficie, de manera que su valor es una mezcla. Un píxel de «bosque» puede ser en parte un claro, y cualquier estimación construida sobre él hereda esa ambigüedad.

**Diferencias entre sensores y entre misiones.** Los instrumentos se degradan, las órbitas derivan y las misiones sucesivas difieren entre sí, de modo que construir un registro largo y coherente exige una calibración cruzada cuidadosa. Un cambio aparente puede ser un artefacto de un cambio de sensor y no un cambio sobre el terreno.

## Limitaciones: lo que los satélites no pueden hacer

Dos límites son estructurales. El primero: la teledetección mide **propiedades físicas y espectrales, no las cosas mismas**; ve el verdor del dosel, no las especies vegetales; anomalías térmicas, no el «fuego» como tal; el color del agua, no directamente el fitoplancton. El significado biológico o social es siempre una inferencia que necesita validación. El segundo: **el archivo fija el horizonte**; un registro satelital no puede describir condiciones anteriores a la existencia de sus instrumentos, y por eso el arranque del registro continuo de Landsat en 1972, o el inicio de la era de la altimetría satelital a principios de la década de 1990, marca la línea de base práctica de muchos estudios. Para perspectivas más largas, los datos de satélite deben enlazarse con registros más antiguos.

## Hacia qué miden las observaciones

La continuidad tiene un objetivo, además de una justificación. La comunidad internacional especifica qué magnitudes deben sostenerse a través de las variables climáticas esenciales: el Sistema Mundial de Observación del Clima define actualmente 55 de ellas en los dominios atmosférico, oceánico y terrestre, seleccionadas por su pertinencia para caracterizar el sistema climático, por la viabilidad técnica de su observación global y por su relación coste-eficacia. Muchas se obtienen principal o enteramente desde la órbita —temperatura superficial del mar, nivel del mar, hielo marino, cobertura del suelo, biomasa aérea, color del océano, albedo, índice de área foliar—, y por eso la continuidad de las misiones y la especificación de esas variables son la misma conversación. El marco se expone en el artículo sobre las [variables climáticas esenciales](/es/ecology/earth-systems/essential-climate-variables-explained), y el sistema acoplado que esas variables describen en conjunto es el objeto del grupo temático sobre la [ciencia del sistema Tierra](/es/ecology/earth-systems/earth-system-science-explained).

## Transparencia sobre las fuentes

Toda afirmación cuantitativa de este grupo temático se atribuye a una autoridad identificada —la NASA y NASA Earthdata, el programa Landsat del USGS, la ESA y el programa Copernicus de la Unión Europea con sus servicios, el ECMWF, el Centro Común de Investigación de la Comisión Europea, la NOAA, la OMM y la FAO— o a literatura revisada por pares, como las revistas *Remote Sensing* y *Earth System Science Data*. Los dominios de las citas se contrastan con un registro curado cuando se compila el sitio, de modo que un enlace poco conocido o de escasa autoridad queda señalado antes de la publicación. Cuando una cifra es discutida o depende de la versión, el texto lo dice.

## El resto del grupo temático

Los artículos de apoyo llevan cada pieza más lejos: [qué es la teledetección](/es/ecology/earth-observation/what-is-remote-sensing), el [programa Landsat](/es/ecology/earth-observation/landsat-program-explained), los [satélites Sentinel](/es/ecology/earth-observation/sentinel-satellites-explained), el [sistema MODIS](/es/ecology/earth-observation/modis-earth-observation-system), el [NDVI](/es/ecology/earth-observation/ndvi-explained) y la familia más amplia de los [índices de vegetación](/es/ecology/earth-observation/vegetation-indices-and-monitoring), la [detección de cambios de cobertura del suelo](/es/ecology/earth-observation/land-cover-change-detection), el [seguimiento de la deforestación por satélite](/es/ecology/earth-observation/satellite-deforestation-monitoring), el [seguimiento de incendios desde el espacio](/es/ecology/earth-observation/wildfire-monitoring-from-space), los [sistemas de seguimiento de la sequía](/es/ecology/earth-observation/drought-monitoring-systems), las [observaciones del color del océano](/es/ecology/earth-observation/ocean-color-observations), la [altimetría satelital](/es/ecology/earth-observation/satellite-altimetry-explained), los [productos de datos de observación de la Tierra](/es/ecology/earth-observation/earth-observation-data-products), el [programa Copernicus](/es/ecology/earth-observation/copernicus-programme-explained) y un relato franco de las [limitaciones e incertidumbres de la teledetección](/es/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). Juntos explican cómo se vigila el planeta desde la órbita y cómo leer lo que esa vigilancia produce.

## Sources

1. **NASA Earthdata** — [Earth-science data and EOSDIS](https://www.earthdata.nasa.gov/). Puerta de acceso a los archivos de observación de la Tierra de la NASA y a la documentación por nivel de producto.
2. **NASA Earth Observatory** — [imágenes y artículos explicativos](https://science.nasa.gov/earth/earth-observatory/). Páginas temáticas sobre cómo se realizan y se usan las mediciones por satélite.
3. **USGS** — [Landsat missions](https://www.usgs.gov/landsat-missions). Historia, sensores y registro continuo de la superficie terrestre (junto con la NASA).
4. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Misiones e instrumentos europeos de observación de la Tierra.
5. **Copernicus** — [EU Earth-observation programme](https://www.copernicus.eu/en). Los Sentinel y los servicios Copernicus.
6. **ECMWF** — [reanálisis y servicios Copernicus](https://www.ecmwf.int/). Opera los servicios de Cambio Climático y de Vigilancia de la Atmósfera.
7. **NOAA NESDIS** — [satélites ambientales](https://www.nesdis.noaa.gov/). Satélites operativos y servicios de datos de la NOAA.
8. **European Commission JRC** — [seguimiento del territorio, los bosques y los riesgos](https://joint-research-centre.ec.europa.eu/). Productos operativos basados en observación de la Tierra.
9. **WMO** — [sistemas mundiales de observación](https://wmo.int/). Normas internacionales para la observación ambiental.
10. **Remote Sensing (journal)** — [métodos revisados por pares](https://www.mdpi.com/journal/remotesensing). Investigación sobre sensores, algoritmos y aplicaciones.
11. **Earth System Science Data** — [conjuntos de datos de referencia](https://earth-system-science-data.net/). Publicaciones de datos del sistema Tierra revisadas por pares.
