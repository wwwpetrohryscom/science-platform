---
title: 'La riqueza de especies explicada: qué puede y qué no puede decir un recuento'
metaTitle: 'Riqueza de especies: qué revela un recuento de especies'
excerpt: La riqueza de especies es la medida de biodiversidad más simple y la más fácil de malinterpretar. Esto es lo que representa realmente un recuento de especies, cómo lo distorsionan el esfuerzo de muestreo y el área, y qué estimadores se usan para hacer comparables los recuentos.
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
_bodyHash: 8ad6d684
---

El recuento de las especies distintas registradas en un lugar es la forma más familiar de resumir la biodiversidad y la que con mayor probabilidad se interpreta de manera demasiado literal. La medida es sencilla de definir y barata de calcular, lo que explica su presencia en inventarios, informes y resúmenes destinados a la formulación de políticas. También arrastra supuestos ocultos sobre cómo, dónde y con qué exhaustividad se realizó el conteo, y son esos supuestos los que deciden cuánto puede sostener realmente la cifra.

## Qué representa el recuento

La [riqueza de especies](/es/glossary/species-richness) es el número de especies distintas registradas en un área o una muestra definidas. Es la medida de biodiversidad que más se comunica, en buena medida porque la idea es intuitiva y la aritmética resulta trivial: se enumeran las especies y luego se cuentan las entradas. Esa accesibilidad es una ventaja real para una primera aproximación a una comunidad y sustenta muchos de los [indicadores de biodiversidad](/es/ecology/biodiversity/biodiversity-indicators-explained) que alimentan los informes regionales.

Sin embargo, esa simplicidad oculta una decisión de diseño. Un recuento bruto solo tiene sentido en relación con el límite trazado a su alrededor y con el esfuerzo invertido dentro de ese límite. Dos cifras que parecen directamente comparables pueden haberse generado en condiciones que hacen engañosa la comparación directa. Entender el recuento significa, por tanto, entender el muestreo que lo produjo, que es el tema de las secciones siguientes y un motivo recurrente en el trabajo más amplio sobre [seguimiento de la biodiversidad y salud de los ecosistemas](/es/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health).

## Por qué el esfuerzo y el área cambian la cifra

La propiedad más importante de un recuento de especies es su sensibilidad al esfuerzo de muestreo. Buscar más revela casi siempre más especies, porque los taxones raros y difíciles de detectar se acumulan lentamente a medida que continúa la observación. En consecuencia, dos recuentos brutos solo son comparables cuando el esfuerzo que hay detrás de ellos es equivalente. Un muestreo breve en un sitio rico puede devolver menos especies que un muestreo prolongado en uno más pobre, y la diferencia puede decir más sobre el calendario que sobre el lugar.

Un segundo patrón estructural es la relación especies-área: las áreas mayores tienden a albergar más especies que las menores, y lo hacen de una forma curvilínea aproximadamente predecible y no como una recta. La implicación es práctica. Comparar el recuento de una parcela pequeña con el de una región extensa no es comparar cosas equivalentes, y pasar de una escala a otra exige explicitar la relación con el área en lugar de darla por descontada.

La detección añade una tercera complicación. Que una especie quede registrada depende de lo fácil que sea observarla, lo que a su vez depende de su abundancia, su comportamiento y su carácter críptico. Como la probabilidad de detección es inferior a uno, la ausencia de un registro no es prueba de que la especie esté ausente: sencillamente puede haber pasado inadvertida. La resolución taxonómica también importa aquí, porque el grado de finura con que se identifican los organismos fija el techo del número de entradas distintas que la lista puede contener. Los grandes conjuntos de datos agregados, como los [registros de presencia](https://www.gbif.org/), heredan estos tres efectos de los muestreos que los alimentaron.

## Cómo se mide y se compara la riqueza

Los ecólogos organizan la riqueza a lo largo de las escalas espaciales mediante un marco que distingue componentes locales, regionales y entre sitios. En los términos de Whittaker, la diversidad alfa es la riqueza dentro de un único sitio, la diversidad gamma es la riqueza de una región más amplia y la diversidad beta describe el recambio, o diferencia de composición, entre sitios. Un mismo total regional puede surgir de muchos sitios uniformes o de un mosaico de sitios distintos, y la partición alfa-beta-gamma es lo que impide confundir esas situaciones.

Para poner en pie de igualdad muestras desiguales, dos técnicas relacionadas son la norma. La rarefacción reduce las muestras más ricas o más grandes a un nivel de esfuerzo compartido, de modo que los recuentos puedan leerse en paralelo, y la extrapolación proyecta de forma moderada más allá del esfuerzo observado bajo supuestos declarados. Estimadores como Chao1 siguen otra vía: infieren cuántas especies se pasaron probablemente por alto examinando la frecuencia de las más raras, con el razonamiento de que una abundancia de singletons señala especies no detectadas que aún esperan ser halladas. Los números de Hill sitúan después la riqueza dentro de una única familia de medidas de diversidad, donde aparece como el caso particular de orden q igual a cero, el caso que cuenta especies sin dar peso adicional a lo común que sea cada una. El trabajo revisado por pares sobre estimación de la diversidad sigue afinando cómo se comportan estas herramientas en condiciones reales de muestreo, y las evaluaciones del [IPBES](https://www.ipbes.net/global-assessment) se apoyan en ellas cuando resumen los límites de cualquier métrica aislada.

## Qué deja fuera la riqueza

La limitación definitoria de un recuento de especies es que ignora tanto la abundancia como la identidad. Cada especie de la lista cuenta una vez, esté representada por un solo individuo o por miles, y sea cual sea el papel ecológico que desempeñe. Un sitio dominado por una especie común junto a muchos singletons puede obtener, por tanto, exactamente la misma puntuación que un sitio donde los individuos se reparten de manera uniforme entre las especies. Las dos comunidades distan mucho de ser equivalentes y, sin embargo, el recuento no puede distinguirlas.

Por eso la riqueza por sí sola es una señal de conservación débil, y por eso los ecólogos la combinan con medidas de cómo se distribuyen los individuos entre las especies. La [equidad de especies](/es/glossary/species-evenness) recoge ese equilibrio, y combinarla con el recuento ofrece una imagen más completa que cualquiera de las dos por separado. El razonamiento que hay detrás de esas medidas compuestas se desarrolla con más detalle en nuestra nota sobre [equidad y diversidad de especies](/es/ecology/biodiversity/species-evenness-and-diversity), mientras que las consecuencias para la priorización se abordan en [por qué contar especies induce a error al priorizar la conservación](/es/ecology/biodiversity/why-species-counts-mislead-conservation).

## Leer una cifra de riqueza con la cautela adecuada

Varias fuentes de incertidumbre acompañan a cualquier recuento comunicado, y nombrarlas mantiene honesta la cifra. Como el esfuerzo, el área y la detección configuran todos el resultado, una cifra aislada debe leerse junto con el diseño del muestreo que la generó y no por sí sola. Los estimadores y la rarefacción reducen estas distorsiones, pero no las eliminan: descansan sobre supuestos acerca de cómo se acumulan las especies raras, y esos supuestos pueden forzarse cuando el muestreo es escaso o desigual. Una cifra comunicada sin su esfuerzo, su área y su método es difícil de interpretar y fácil de sobreinterpretar.

La respuesta constructiva es la modestia sobre lo que un recuento puede soportar. Tratada como un descriptor entre varios, con su esfuerzo y su área declarados y sus límites de detección reconocidos, la riqueza de especies sigue siendo un punto de entrada útil a una comunidad. Tratada como un veredicto autónomo sobre el valor ecológico, tiende a inducir a error. Los programas regionales, como el trabajo de la Agencia Europea de Medio Ambiente sobre [biodiversidad](https://www.eea.europa.eu/en/topics/in-depth/biodiversity), informan por ello del estado de las especies y los hábitats mediante conjuntos de indicadores y no mediante una única cifra destacada.

## Sources

1. **IPBES** — [Global Assessment Report](https://www.ipbes.net/global-assessment). Estado y medición de la biodiversidad, incluidos los límites de las métricas aisladas.
2. **GBIF** — [occurrence records](https://www.gbif.org/). Datos agregados de presencia de especies que sustentan las estimaciones de riqueza.
3. **EEA** — [biodiversity](https://www.eea.europa.eu/en/topics/in-depth/biodiversity). Indicadores europeos del estado de las especies y los hábitats.
