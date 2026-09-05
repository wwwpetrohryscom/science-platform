---
title: 'Incertidumbre de medición: qué afirma realmente un ± declarado'
metaTitle: 'Incertidumbre de medición: qué afirma un ± declarado'
excerpt: Un número sin incertidumbre no es un resultado de medición. Esto es lo que la guía internacional pide de un intervalo, cómo se evalúan y combinan las componentes, y los lugares donde un presupuesto de incertidumbre falla en silencio.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - metrology
  - uncertainty
  - calibration
  - si-units
  - measurement-methods
related:
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - sound-and-acoustics-explained
  - global-temperature-records-explained
pillar: classical-mechanics-explained
---

Escriba 9,81 m/s² y no habrá afirmado casi nada. Escriba 9,81 ± 0,02 m/s² y habrá hecho una afirmación contrastable: sobre cómo se obtuvo el valor, sobre qué pasaría si la medición se repitiera, y sobre el intervalo dentro del cual cabría esperar que cayera una nueva determinación. El segundo número no es una advertencia pegada al primero. Es la parte que hace utilizable al primero, y es lo que permite a dos laboratorios decir si están de acuerdo.

El marco internacional para construir ese segundo número es la *Guía para la expresión de la incertidumbre de medida*, publicada como JCGM 100 por el Comité Conjunto para las Guías en Metrología y alojada por el BIPM. No es tanto una técnica estadística como una disciplina contable, y se aplica a cualquier medición cuantitativa, incluidas las que sustentan [la mecánica](/es/physics/mechanics-waves/classical-mechanics-explained) que cubre este grupo de artículos.

## Exactitud, veracidad y precisión son tres palabras distintas

El vocabulario internacional de metrología mantiene separados tres términos que el uso cotidiano funde. La **exactitud de medida** se define como la «proximidad entre un valor medido y un valor verdadero de un mensurando» y, lo que importa, «el concepto exactitud de medida no es una magnitud y no se expresa numéricamente». No se puede reportar una exactitud del 0,3 por ciento; se puede reportar una incertidumbre.

El vocabulario es igual de firme con las fronteras: «el término exactitud de medida no debe usarse para la veracidad de medida y el término precisión de medida no debe usarse para la exactitud de medida». La veracidad atañe al desplazamiento sistemático, a si mediciones repetidas se agrupan en el sitio correcto. La precisión atañe a la dispersión, a lo apretado del agrupamiento, esté donde esté. Un instrumento puede ser preciso y no veraz, que es la combinación más peligrosa, porque la repetición parece confirmación.

## Tipo A y tipo B no significan «medido» y «adivinado»

La guía separa las componentes de incertidumbre por cómo se evalúan y no por cuánto se confía en ellas. El resumen del NIST sigue la guía exactamente: una evaluación de tipo A es un «método de evaluación de la incertidumbre por el análisis estadístico de series de observaciones», y el tipo B es la «evaluación de la incertidumbre por medios distintos del análisis estadístico de series de observaciones».

Esa segunda categoría no es un eufemismo. Cubre la incertidumbre declarada en un certificado de calibración, una especificación de fabricante, el límite de resolución de un visualizador, datos de referencia publicados y un razonamiento físico sobre un efecto que no puede variarse durante el experimento. Lo que importa es que, una vez expresada cada componente como incertidumbre típica, ambas clases se combinan de forma idéntica. Una componente de tipo B derivada de un certificado puede ser menor y estar mejor fundada que una de tipo A calculada a partir de seis repeticiones ruidosas, y tratar la repetibilidad como la única incertidumbre real es la manera más común de que un presupuesto se vuelva optimista.

## Combinar componentes, y el supuesto dentro de la ley de propagación

Las componentes se combinan en una **incertidumbre típica combinada**, que el NIST describe como «la raíz cuadrada positiva de la varianza estimada», obtenida mediante lo que la guía llama ley de propagación de la incertidumbre. La construcción tiene dos piezas móviles fáciles de pasar por alto. Es un desarrollo de Taylor de primer orden, así que lineariza el modelo de medición en torno al punto de trabajo. Y contiene un término de covarianza que «se anula» solo si puede suponerse que las estimaciones de entrada no están correlacionadas.

Ninguno de los dos supuestos es automático. Entradas calibradas contra el mismo patrón de referencia están correlacionadas por construcción, y suprimir entonces el término de covarianza subestima el resultado. Los modelos fuertemente no lineales rompen la linearización, y por eso la guía va acompañada de un suplemento que propaga distribuciones enteras por Monte Carlo en vez de propagar varianzas, y por eso en 2026 se emitió una enmienda que aborda la no linealidad en los modelos de medición. El marco sigue en revisión activa.

## El factor de cobertura, y la palabra que la guía evita

Una incertidumbre típica es una magnitud del tipo desviación típica, y la mayoría de los resultados publicados son más anchos. La incertidumbre expandida es U = k·u_c(y), donde k es un factor de cobertura elegido para el nivel de confianza deseado. El NIST indica que «típicamente, k está en el rango 2 a 3», que k = 2 «define un intervalo con un nivel de confianza de aproximadamente el 95%», y que k = 3 da un intervalo con «un nivel de confianza mayor que el 99%».

La aproximación que hay en «aproximadamente» trabaja de verdad. Un tratamiento revisado por pares de los intervalos de cobertura, en la revista de investigación del NIST, señala que la guía se niega deliberadamente a llamar a estos intervalos intervalos de confianza salvo que «todas las componentes de incertidumbre que contribuyen a u_c(y) se obtengan de evaluaciones de tipo A». Un intervalo de confianza convencional es una afirmación frecuentista sobre la cobertura a largo plazo de experimentos repetidos; una incertidumbre expandida construida en parte con componentes de tipo B no es eso, aunque la aritmética se parezca. El mismo artículo trabaja un ejemplo en que dieciséis réplicas dan un intervalo de cobertura al 95 por ciento de la media más o menos 2,131 errores típicos —el percentil t de Student para quince grados de libertad— en vez del factor plano de 2 que usaría un cálculo rápido. Con pocas observaciones, ambos difieren lo bastante para importar.

## La trazabilidad es lo que hace comparables a dos laboratorios

Una incertidumbre solo tiene sentido respecto de una escala, y el mecanismo que ata unas escalas a otras es la [trazabilidad metrológica](/en/glossary/traceability): como lo formula una revisión sobre materiales de referencia químicos, «una cadena documentada e ininterrumpida de calibraciones con incertidumbres declaradas que idealmente enlaza el resultado de medición de una muestra con un calibrador primario en unidades SI apropiadas». Cada eslabón añade incertidumbre; ninguno puede faltar. La misma revisión describe lo que la cadena debe encarnar en la práctica —«los conceptos de [incertidumbre de medida](/en/glossary/measurement-uncertainty) y de calibraciones frente a una jerarquía de patrones de referencia»—, razón por la cual un certificado que declara un valor sin incertidumbre rompe la cadena en lugar de acortarla.

La base de esa cadena cambió el 20 de mayo de 2019, cuando el SI se redefinió de modo que todas las unidades se siguen de siete constantes con valores numéricos fijados.

| Constante definitoria | Símbolo | Valor fijado |
| --- | --- | --- |
| Frecuencia hiperfina del cesio-133 | ΔνCs | 9 192 631 770 Hz |
| Velocidad de la luz en el vacío | c | 299 792 458 m/s |
| Constante de Planck | h | 6,626 070 15 × 10⁻³⁴ J s |
| Carga elemental | e | 1,602 176 634 × 10⁻¹⁹ C |
| Constante de Boltzmann | k | 1,380 649 × 10⁻²³ J/K |
| Constante de Avogadro | N_A | 6,022 140 76 × 10²³ mol⁻¹ |
| Eficacia luminosa | K_cd | 683 lm/W |

Esos valores ya no llevan incertidumbre, porque son definiciones y no resultados. La incertidumbre no desapareció; se trasladó a los experimentos que realizan las unidades, que es un sitio mucho mejor para ella, porque ahora está adherida a un aparato que puede mejorarse y no a un artefacto que podría rayarse.

## Dónde sigue estando la incertidumbre

No todas las constantes quedaron absorbidas en las definiciones. El ajuste CODATA de 2022 da la constante newtoniana de gravitación como 6,674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻² con una incertidumbre típica de 0,000 15 × 10⁻¹¹ en las mismas unidades: una incertidumbre típica relativa de 2,2 × 10⁻⁵. Frente a las constantes de la tabla, ahora exactas por definición, esa distancia es enorme. Persiste porque la gravitación no puede apantallarse ni amplificarse, así que cada determinación se enfrenta a la misma clase de efectos sistemáticos con una magnitud comparable a la de la propia señal. Ese es el recordatorio permanente en este campo: una incertidumbre pequeña declarada es siempre una afirmación sobre los efectos que alguien reconoció.

El patrón se generaliza. Donde dos equipos creíbles discrepan más de lo que sus intervalos declarados permiten, la discrepancia es evidencia de que a al menos un presupuesto le falta un término. El mismo razonamiento explica por qué [los registros de temperatura global](/es/ecology/climate-change/global-temperature-records-explained) independientes se comparan por sus envolventes de incertidumbre y no por sus valores de titular, y por qué la orientación práctica sobre [las limitaciones de la teledetección](/es/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) depende de saber qué no modeló un algoritmo de recuperación.

## La falsa precisión es una afirmación, no una opción de formato

Los dígitos son baratos de producir y caros de justificar. Una hoja de cálculo los devuelve por docenas al margen de lo que entró, y un resultado reportado con más cifras de las que su incertidumbre sostiene afirma una resolución que nunca se alcanzó. La convención que se sigue del marco es simple: la incertidumbre determina cuántos dígitos puede llevar el valor, así que un valor debe redondearse a una posición coherente con su incertidumbre y no a lo que produjo el cálculo.

El modo de fallo rara vez es el artículo original. Es la transferencia, donde un intervalo se elimina porque no cabe en un resumen, y una estimación central sigue viaje como si fuera exacta: el proceso examinado en el análisis sobre [la incertidumbre perdida entre el conjunto de datos y el titular](/es/insight/uncertainty-lost-between-dataset-and-headline). La precisión que aparece durante la transmisión fue fabricada, no medida.

## Qué no puede contener un presupuesto de incertidumbre

La limitación estructural es que un presupuesto solo puede incluir efectos en los que alguien pensó. Los efectos sistemáticos no reconocidos están, por construcción, ausentes de él, lo que significa que una incertidumbre declarada es una cota inferior condicionada a la completitud del modelo. No es una preocupación hipotética: una revisión de cómo los institutos nacionales evalúan la incertidumbre para materiales de referencia orgánicos halló «inconsistencias de enfoque y casos claros de subestimación» entre laboratorios participantes que aplicaban los mismos métodos nominales, y concluyó que combinar enfoques de medición independientes es lo que expone los sesgos que un método único enmascara.

Las consecuencias prácticas van más allá de los laboratorios de metrología. Cuando un modelo sustituye por una parametrización un proceso que no puede resolver —como deben hacer [los modelos de mecánica de fluidos](/es/physics/mechanics-waves/fluid-dynamics-explained) con la turbulencia— la incertidumbre adherida a la salida no puede representar del todo el error estructural del propio esquema. Cuando una estadística de exposición se calcula a partir de un mapa modelado y no de una red de medición, como en [la evaluación del ruido ambiental](/es/physics/mechanics-waves/sound-and-acoustics-explained), la incertidumbre dominante está en las entradas y no en el instrumento. En ambos casos el número es honesto sobre lo que se cuantificó y calla sobre lo que se supuso, y leerlo bien es preguntar cuál de las dos cosas se tiene delante.

## Sources

1. **BIPM / JCGM** — [Publicaciones JCGM: la GUM y sus suplementos](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, el suplemento de Monte Carlo y la enmienda de 2026 sobre no linealidad en modelos de medición.
2. **Vocabulario Internacional de Metrología del JCGM** — [Exactitud de medida (VIM 2.13)](https://jcgm.bipm.org/vim/en/2.13.html). Definiciones que separan exactitud, veracidad y precisión.
3. **NIST** — [Definiciones básicas de incertidumbre](https://physics.nist.gov/cuu/Uncertainty/basic.html). Evaluación de tipo A y de tipo B de la incertidumbre típica.
4. **NIST** — [Combinación de componentes de incertidumbre](https://physics.nist.gov/cuu/Uncertainty/combination.html). Incertidumbre típica combinada y ley de propagación de la incertidumbre.
5. **NIST** — [Incertidumbre expandida y factor de cobertura](https://physics.nist.gov/cuu/Uncertainty/coverage.html). Valores de k y los niveles de confianza asociados.
6. **Journal of Research of the National Institute of Standards and Technology** — [Coverage intervals](https://pmc.ncbi.nlm.nih.gov/articles/PMC10898794/). Por qué la guía evita el término intervalo de confianza, y factores de cobertura t de Student para muestras pequeñas.
7. **BIPM** — [Unidades de medida y constantes definitorias del SI](https://www.bipm.org/en/measurement-units). Las siete constantes fijadas y la redefinición del 20 de mayo de 2019.
8. **NIST CODATA** — [Constante newtoniana de gravitación](https://physics.nist.gov/cgi-bin/cuu/Value?bg). Valor recomendado de 2022, incertidumbre típica e incertidumbre típica relativa.
9. **Accreditation and Quality Assurance** — [SI traceable calibrators for organic chemical measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC10938631/). Definición de la cadena de trazabilidad y evidencia de incertidumbre subestimada entre laboratorios.
