---
title: 'Medir el carbono forestal: alometría, parcelas, lidar y el presupuesto de error'
metaTitle: 'Medir el carbono forestal: alometría, parcelas, lidar y error'
excerpt: Nadie pesa un bosque. Toda cifra publicada de carbono forestal es el resultado de una cadena de sustituciones que va de la cinta métrica al total mundial, y el mayor depósito de ese total es el peor medido.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - forest-carbon
  - allometry
  - lidar
  - forest-inventory
  - measurement-uncertainty
related:
  - forest-ecosystems-explained
  - forest-degradation-vs-deforestation
  - deforestation-statistics-explained
  - boreal-forests-and-permafrost-interactions
pillar: forest-ecosystems-explained
---

Nadie ha pesado nunca un bosque. Toda cifra de carbono asociada a uno es el resultado de una cadena de sustituciones: un diámetro de tronco hace las veces de masa del árbol, un modelo estadístico hace las veces de la corta que la habría medido, una parcela hace las veces de un paisaje y un satélite hace las veces de las parcelas que nunca se instalaron. Cada sustitución es defendible y cada una tiene una varianza. Entender una cifra de carbono forestal significa saber qué eslabón de esa cadena está más flojo, y casi nunca es el que se supone.

## Cinco depósitos, desigualmente conocidos

Los inventarios de gases de efecto invernadero reparten el carbono forestal en cinco depósitos, siguiendo las directrices del IPCC para inventarios nacionales. La evaluación mundial informa de los cinco, y la cobertura de notificación entre ellos es enormemente desigual.

| Depósito | Existencia mundial, 2025 | Parte del total | Países que informan | Superficie forestal cubierta |
| --- | --- | --- | --- | --- |
| Carbono orgánico del suelo | 329 Gt | 46 % | 77 | 70 % |
| Biomasa aérea | 247 Gt | 35 % | 215 | ~100 % |
| Biomasa subterránea | 65,9 Gt | 9 % | 215 | ~100 % |
| Hojarasca | 41,1 Gt | 6 % | 75 | 66 % |
| Madera muerta | 30,3 Gt | 4 % | 101 | 78 % |

El total es de 714 gigatoneladas de carbono, unas 172 toneladas por hectárea. La asimetría de esa tabla es el hecho central del asunto. El mayor depósito lo informan alrededor de un tercio de los países que informan del segundo. Y de los dos depósitos con cobertura casi completa, solo uno se mide: la biomasa subterránea casi siempre se infiere de la cifra aérea en vez de excavarse, de modo que su aparente completitud es heredada y no ganada.

## De la cinta métrica a la tonelada de carbono

La medición de campo registra el diámetro del tronco a la altura del pecho, a veces la altura total, y una identidad de especie de la que se consulta la densidad específica de la madera. Un **modelo alométrico** convierte todo eso en masa aérea seca en estufa. El modelo pantropical de referencia se ajustó sobre una base mundial de árboles cortados directamente —[4.004 fustes de al menos 5 cm de diámetro en 58 sitios](https://pubmed.ncbi.nlm.nih.gov/24817483/)— y halló que, cuando se incluyen diámetro, altura y densidad específica de la madera, un solo modelo vale para todos los tipos de vegetación tropical sin efecto regional detectable. Es un resultado firme, y viene con una salvedad que importa en la práctica: la altura no suele medirse. Donde falta, un sustituto basado en una variable de estrés bioclimático supera a los modelos anteriores sin altura, pero los autores aconsejan desarrollar relaciones locales diámetro-altura siempre que sea posible, porque es en esa sustitución donde entra el sesgo.

La masa se convierte luego en carbono mediante un factor de conversión. La fracción de carbono por defecto del IPCC para la materia seca es de 0,47 toneladas de carbono por tonelada de materia seca. La masa subterránea casi nunca se mide: se infiere de la masa aérea por un cociente raíz/parte aérea, con el ejemplo trabajado de las directrices empleando 0,29 para rodales que sostienen de 50 a 150 toneladas de [biomasa aérea](/en/glossary/aboveground-biomass) por hectárea. Los totales mundiales son coherentes con esas convenciones —una biomasa viva de 647 gigatoneladas que porta 313 gigatoneladas de carbono implica un cociente cercano a 0,48—, pero la coherencia con un valor por defecto no es confirmación independiente, porque en muchos países el valor por defecto es lo que generó la cifra.

## Las parcelas son la capa con la que todo lo demás se calibra

Un inventario forestal nacional es la única parte de esta cadena que implica medir árboles. El principio de diseño es una red estadísticamente distribuida de parcelas permanentes remedidas en un ciclo fijo: en Estados Unidos las parcelas se remiden cada cinco a diez años según la ubicación, registrando datos de sitio y de árbol para fustes vivos y muertos en pie, añadiendo material leñoso caído, suelos y vegetación del sotobosque en un subconjunto. La remedición es lo que convierte una estimación de existencias en una de flujo, y por eso las estimaciones de sumidero basadas en inventario pesan lo que pesan.

Aquí viven dos errores distintos que a menudo se confunden. El **error de muestreo** es la incertidumbre por haber medido parte del paisaje y no todo; disminuye de forma previsible al añadir parcelas. El **error de modelo** es la incertidumbre de la conversión alométrica aplicada a cada árbol de cada parcela; añadir parcelas no lo reduce, porque se reutiliza el mismo modelo. El error de muestreo es además el más fácil de calcular de los dos, así que un intervalo construido solo con él subestima el total, y esa carencia no se anuncia.

## Qué cambió el lidar y qué no

El lidar espacial sustituyó el paso de extrapolación, no el de medición. La misión Global Ecosystem Dynamics Investigation de la NASA dispara tres láseres que producen ocho transectos en tierra de huellas de unos 25 metros separadas unos 60 metros a lo largo de la traza, con transectos separados unos 600 metros, lo que da una franja transversal cercana a 4,2 km. Su producto en malla infiere la densidad media de biomasa aérea para celdas de 1 km a partir de la muestra que cae dentro de cada una, frente a un requisito de misión de que el 80 por ciento de las celdas queden dentro de un error estándar de 20 toneladas por hectárea o del 20 por ciento de la estimación, lo que sea mayor.

Esa última frase merece leerse dos veces. El objetivo de exactitud se enuncia por celda kilométrica, como error estándar y con un suelo, y la propia documentación del producto descompone su incertidumbre en dos partes: la covarianza del modelo campo-lidar de biomasa y la varianza de muestreo debida a que los haces muestrean la celda en vez de cubrirla. Ninguna desaparece con más órbitas. La cobertura también está acotada: el instrumento observa entre unos 51,6° norte y sur, lo que excluye la mayor parte de la zona boreal, donde la cuestión del carbono está dominada de todos modos por los suelos, como expone [el problema del carbono del suelo boreal](/es/ecology/forests/boreal-forests-and-permafrost-interactions).

El radar aborda el mismo objetivo por otra vía física. La misión Biomass de la Agencia Espacial Europea, lanzada el 29 de abril de 2025, lleva el primer radar de apertura sintética en banda P en órbita, con una antena de 12 metros a 666 km de altitud, elegida porque las longitudes de onda mayores penetran el dosel y devuelven señal de la estructura leñosa y no de las hojas.

## Dónde está de verdad el presupuesto de error

No en los árboles. El depósito del suelo es el mayor y el más flojo, y la razón es prosaica: los países informan del carbono orgánico del suelo hasta una profundidad de su elección. La media mundial ponderada por superficie forestal es de 41 cm, pero las cifras regionales van de 30 cm en Asia y Oceanía y 32 cm en Europa a 70 cm en América del Norte y Central. Una existencia informada a 30 cm y otra informada a 70 cm no son la misma magnitud, y se suman en un único total mundial. Para los países que no informaron, los valores se derivaron superponiendo una malla mundial de carbono del suelo de 1 km que cubre solo los 30 cm superiores con capas de cubierta forestal.

Los factores de conversión traen su propia dispersión. La evaluación de incertidumbre de las directrices cita la densidad básica de la madera entre el 10 y el 40 por ciento, las existencias en pie en torno al 8 por ciento en países industrializados y al 30 por ciento en el resto, la superficie forestal en torno al 3 por ciento en países industrializados, y una combinación de teledetección con muestreo en campo que, según dice, podría bajar al 10 o 15 por ciento. No son pequeños frente a los cambios que se pretende detectar.

El resultado se propaga hasta el balance mundial. La evaluación del IPCC para la era industrial, que abarca de 1750 a 2019, sitúa las emisiones acumuladas de combustibles fósiles e industria en 445 ± 20 petagramos de carbono y el flujo acumulado de uso de la tierra, cambio de uso y silvicultura en 240 ± 70 petagramos: una incertidumbre relativa unas seis veces mayor en el término terrestre. Que el término terrestre sea la parte menos restringida [del balance mundial del carbono](/es/ecology/earth-systems/carbon-cycle-explained) es consecuencia directa de la cadena descrita arriba.

## Por qué la aritmética decide qué certifica un crédito

El carbono forestal se cotiza como si estuviera medido. Está modelado, y los supuestos del modelo suelen ser valores por defecto heredados. La misma evaluación que publica la tabla anterior señala que sus cifras divergen de lo que los países remiten bajo la convención del clima, porque los dos sistemas usan definiciones de bosque distintas, porque la convención pregunta solo por el bosque *gestionado*, y porque difieren los métodos de calibración, reclasificación y previsión. Dos totales oficiales de carbono para los bosques de un mismo país pueden por tanto diferir sin que ninguno sea erróneo.

Para un proyecto que reclama un tonelaje concreto en una parcela concreta, la consecuencia práctica es que la incertidumbre asociada a la cifra se hereda de cada paso anterior, y es más ancha donde se incluye carbono del suelo y donde se usan factores por defecto en vez de ajustados localmente. Esa brecha entre lo certificado y lo medible se examina más a fondo en la nota sobre [qué compran realmente los mercados de compensación de carbono](/es/insight/carbon-offset-outsourcing-science), y el problema paralelo de contar superficie en vez de masa se expone en [cómo se construyen las estadísticas de deforestación](/es/ecology/forests/deforestation-statistics-explained). La pregunta de encuadre —qué cuenta como bosque antes de pesar nada— pertenece a [la panorámica de definiciones y estructura forestales](/es/ecology/forests/forest-ecosystems-explained).

## Sources

1. **FAO** — [Global Forest Resources Assessment 2025: growing stock, biomass and carbon](https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/growing-stock-biomass-carbon.html). Existencias de carbono depósito por depósito, cobertura de notificación, profundidades de suelo por región y la divergencia con el reporte convencional.
2. **Global Change Biology, vía PubMed** — [Improved allometric models to estimate the aboveground biomass of tropical trees](https://pubmed.ncbi.nlm.nih.gov/24817483/). La base de árboles cortados tras el modelo alométrico pantropical y el papel de la altura y la densidad específica de la madera.
3. **IPCC** — [Directrices de 2006 para los inventarios nacionales de gases de efecto invernadero, volumen 4, capítulo 4: tierras forestales](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf). Valores por defecto de fracción de carbono y cociente raíz/parte aérea, y la evaluación de incertidumbre del capítulo para densidad de madera, existencias en pie y superficie.
4. **NASA ORNL DAAC** — [GEDI L4B Gridded Aboveground Biomass Density, Version 2](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html). Geometría de muestreo del instrumento, cobertura en latitud, requisito de exactitud de la misión y las dos componentes de varianza.
5. **Agencia Espacial Europea** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). La misión de radar en banda P, su fecha de lanzamiento y la configuración del instrumento.
6. **USDA Forest Service** — [Forest Inventory and Analysis](https://research.fs.usda.gov/programs/fia). Diseño de parcelas permanentes, intervalo de remedición y variables registradas en parcelas y subparcelas.
7. **IPCC AR6 WG1, capítulo 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Flujos acumulados fósiles y de uso de la tierra con sus incertidumbres evaluadas.
8. **FAO** — [Global Forest Resources Assessment 2025](https://openknowledge.fao.org/handle/20.500.14283/cd6709en). La evaluación completa, incluido el capítulo metodológico tras las cifras de cobertura de notificación.
