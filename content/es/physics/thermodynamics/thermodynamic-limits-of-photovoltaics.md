---
title: Los límites termodinámicos de la fotovoltaica — y por qué deciden lo que es posible
metaTitle: Los límites termodinámicos de la fotovoltaica
excerpt: Existe un tope superior duro para cuánta luz solar puede convertir en electricidad cualquier célula fotovoltaica de unión simple. Saber de dónde viene aclara qué direcciones de mejora son física y cuáles son ingeniería.
type: expert
author: energy-systems-desk
publishedDate: '2026-02-26'
updatedDate: '2026-09-05'
readingTime: 5
pillar: laws-of-thermodynamics-explained
tags:
  - thermodynamics
  - photovoltaics
  - shockley-queisser
  - energy
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
_bodyHash: a4bbe5a1
---

Existe un tope superior duro para cuánta luz solar puede convertir en electricidad cualquier célula fotovoltaica de unión simple. Bajo iluminación solar estándar se sitúa cerca del 33 %: el límite de Shockley-Queisser, [derivado en 1961](https://doi.org/10.1063/1.1736034) de un argumento de balance detallado sobre una unión p-n iluminada por un cuerpo negro. Las células de silicio de alto rendimiento operan lo bastante cerca de ese tope como para que las ganancias adicionales estén cada vez más limitadas por la ingeniería. Saber de dónde viene el tope —y viene de [las leyes de la termodinámica](/es/physics/thermodynamics/laws-of-thermodynamics-explained) y no de ninguna propiedad del silicio— aclara qué cuenta como física fundamental y qué cuenta como ingeniería.

## De dónde viene el tope

El límite de Shockley-Queisser es un argumento termodinámico, no de ingeniería. Se aplica a cualquier absorbedor de banda prohibida única que opere bajo iluminación solar estándar, sea cual sea el material, la arquitectura o el proceso de fabricación.

Surge de tres mecanismos de pérdida irreducibles.

**Los fotones por debajo de la banda prohibida pasan de largo.** La banda prohibida de una célula solar define la energía mínima de fotón capaz de excitar un electrón a través de ella. Los fotones con menos energía no se absorben: pasan de largo sin aportar nada. Para una banda prohibida típica del silicio (1,1 eV), eso descarta una fracción grande del espectro solar de longitud de onda larga.

**Los fotones por encima de la banda prohibida se termalizan.** Los fotones con más energía de la necesaria excitan electrones bien arriba en la banda de conducción, pero esos electrones se relajan con rapidez al borde de banda, perdiendo el exceso como calor en una escala de tiempo mucho más corta que la de su extracción como trabajo eléctrico. Tanto si el fotón traía 2 eV como 4 eV, se obtiene el equivalente a un electrón con la energía de la banda prohibida.

**La recombinación radiativa.** Una célula que absorbe fotones debe, por balance detallado, emitirlos también. Eso fija una pérdida mínima por emisión espontánea que ninguna física puede eliminar sin cambiar la temperatura del absorbedor o la geometría de la luz entrante.

Optimizar la banda prohibida equilibra esas pérdidas. Demasiado pequeña, captura más fotones pero pierde más por termalización. Demasiado grande, captura menos fotones pero extrae más energía de cada uno. El óptimo está cerca de 1,3 eV; el silicio, a 1,1 eV, queda algo por debajo, y eso explica en parte que su límite práctico esté más cerca del 30 % que del 33 %.

Esas pérdidas son termodinámicas. Ningún diseño de banda prohibida única puede eliminarlas.

## Qué no restringe el tope

El límite de Shockley-Queisser se aplica a células de unión simple bajo iluminación estándar. Tres direcciones conocidas lo rodean.

**Células multiunión.** Apilar absorbedores de bandas prohibidas distintas permite que cada uno atienda la parte del espectro en la que es mejor. La célula superior captura fotones de alta energía antes de que se termalicen; la inferior captura fotones de menor energía que la superior dejó pasar. Con infinitas uniones y concentración, el límite termodinámico sube a alrededor del 86 %. Con apilamientos finitos realistas se han medido eficiencias de laboratorio por encima del 47 %. La generación actual de tándems perovskita-silicio es la versión comercialmente relevante de esta estrategia.

**Fotovoltaica de concentración.** Concentrar la luz solar sobre una célula pequeña eleva el potencial químico del flujo de fotones respecto de la célula. Para una unión simple a concentración muy alta, el límite sube hacia el 40 %. Esto exige seguimiento de precisión y refrigeración activa, lo que restringe los escenarios de despliegue donde resulta económico.

**Extracción de portadores calientes.** Extraer portadores antes de que se termalicen del todo puede en principio preservar parte de la energía que normalmente se pierde como calor. Se ha demostrado en dispositivos de prueba de concepto, pero no se ha acercado a una eficiencia práctica. La velocidad de extracción requerida choca con escalas de tiempo de relajación fundamentales en semiconductores.

**Modificación del espectro.** La conversión descendente (dividir un fotón de alta energía en dos de menor energía) y la ascendente (combinar dos fotones de baja energía en uno) pueden en principio remodelar el espectro entrante para ajustarlo mejor a una banda prohibida única. Ambas se han demostrado; ninguna ha alcanzado eficiencias relevantes para el despliegue.

Cada una de estas es una dirección de investigación real. Ninguna viola la termodinámica subyacente; cada una cambia las condiciones bajo las que el argumento termodinámico se aplica.

## Qué significa esto para la curva de costes

La caída de coste del silicio de unión simple la ha impulsado de forma abrumadora la escala de fabricación y el refinamiento de procesos, no la física. La tecnología lleva años operando cerca de su techo práctico de eficiencia; las caídas de coste adicionales vienen de fabricar más barata la misma física.

Los enfoques multiunión —en particular los tándems perovskita-silicio— están en otra curva de coste. Su techo de eficiencia es sensiblemente más alto; su madurez de fabricación es mucho menor. La pregunta para la próxima década es si la curva de fabricación de los tándems puede bajarse lo bastante rápido para hacerlos económicos a escala antes de que la caída de coste del silicio se sature.

La fotovoltaica de concentración está en otra curva más. Su techo termodinámico es alto, pero sus costes de sistema periférico (seguimiento, refrigeración, óptica) son lo bastante altos como para que haya seguido siendo un nicho aun cuando las eficiencias de célula subyacentes mejoraban.

La trayectoria comercial de la generación solar en la próxima década la decidirá sobre todo cómo se resuelva la competencia entre tándem y silicio, con la concentración y los portadores calientes como aspirantes de más largo plazo. Conocer la termodinámica dice cuáles de estas están acotadas por la física (el silicio, cerca de su límite) y cuáles conservan margen (los tándems, con margen significativo).

## Qué significa esto para la generación no fotovoltaica

El mismo tipo de argumento termodinámico se aplica, con otras constantes, a todos los procesos de conversión solar.

La generación solar térmica tiene su propio techo de tipo Carnot, que depende de la temperatura del receptor. La fotosíntesis tiene un techo de rendimiento cuántico en torno al 11 % en condiciones ideales, con los cultivos en campo operando un orden de magnitud por debajo. La fotosíntesis artificial para producir combustible tiene límites fijados por la termodinámica de la reacción objetivo: romper agua tiene un techo distinto de reducir CO₂.

El límite de Shockley-Queisser no es una rareza propia de la fotovoltaica; es el caso fotovoltaico de un principio general. La conversión solar está acotada; las cotas dependen del proceso de conversión. Conocer la cota del proceso propio dice si la frontera de ingeniería está cerca o lejos de ella, y si seguir mejorando es cuestión de esfuerzo o cuestión de física.

Es el tipo de claridad que conviene tener antes de hacer apuestas energéticas a escala de década.

## Sources

1. **National Laboratory of the Rockies** — [Investigación fotovoltaica](https://www.nlr.gov/pv/research). Investigación fotovoltaica y contexto de rendimiento del laboratorio del Departamento de Energía de Estados Unidos antes llamado NREL.
2. **Departamento de Energía de Estados Unidos** — [Solar Energy Technologies Office](https://www.energy.gov/cmei/systems/integrated-energy-systems-office). Contexto de investigación y despliegue de energía solar del DOE.
3. **Reviews of Modern Physics** — [Revistas de la American Physical Society](https://journals.aps.org/rmp/). Literatura de revisión con revisión por pares sobre límites fotovoltaicos y termodinámicos.
