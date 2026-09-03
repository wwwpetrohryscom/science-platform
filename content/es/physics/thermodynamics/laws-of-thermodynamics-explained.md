---
title: 'Las leyes de la termodinámica: qué prohíbe realmente cada una'
metaTitle: 'Las leyes de la termodinámica y sus prohibiciones'
excerpt: Las cuatro leyes son prohibiciones, no recetas. Cada una descarta una clase de máquina o de proceso, y juntas fijan qué significa la temperatura, qué debe cuadrar la contabilidad de la energía y en qué dirección puede transcurrir un proceso.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - thermodynamics
  - second-law
  - temperature
  - entropy
  - energy-conversion
related:
  - entropy-explained
  - heat-engines-and-efficiency-limits
  - heat-transfer-conduction-convection-radiation
  - earth-energy-budget-and-the-second-law
---
[La termodinámica](/en/glossary/thermodynamics) es un conjunto de prohibiciones. Cada una de sus cuatro leyes dice que algo no puede hacerse, y cada una ha sobrevivido a las teorías microscópicas que pretendían explicarla — el calórico, luego la mecánica clásica, luego la teoría clásica de campos. Por eso un razonamiento decimonónico sobre el vapor sigue restringiendo, sin modificación, a una celda solar, a un frigorífico doméstico y a una bacteria.

También se citan con más soltura de la que se usan. «La energía se conserva» y «la entropía aumenta» son eslóganes que sueltan las condiciones que llevan adheridas, y en esas condiciones vive la confusión sobre el movimiento perpetuo, las afirmaciones de rendimiento y los sistemas vivos.

## La ley cero es lo que hace que un termómetro signifique algo

La ley cero dice que el equilibrio térmico es transitivo: si dos cuerpos están cada uno en equilibrio con un tercero, están en equilibrio entre sí. Suena a teneduría de libros. Es la razón por la que un único número puede representar una propiedad compartida por todo sistema en equilibrio mutuo — y por tanto la razón por la que un instrumento puesto en contacto con un cuerpo informa sobre el cuerpo y no solo sobre el instrumento.

Ese número descansa ahora en una constante definida y no en una sustancia. Desde mayo de 2019 el SI fija la constante de Boltzmann en exactamente 1,380649 × 10⁻²³ J K⁻¹, y el kelvin se sigue de ella; la ficha CODATA no lleva incertidumbre porque no hay ninguna que llevar. La definición anterior, adoptada en 1954, hacía del kelvin 1/273,16 de la temperatura del punto triple del agua, y el NIST señala la debilidad de ese arreglo: extrapolar desde el punto triple del agua hacia temperaturas muy altas o muy bajas es problemático, razón por la cual se fijaron por acuerdo internacional otros 21 puntos de definición. El cero absoluto sigue donde estaba, en −273,15 °C.

**La temperatura no es una cantidad de energía.** Una chispa y una bañera pueden estar a la misma temperatura con energías que difieren en muchos órdenes de magnitud. La temperatura es la variable que se iguala cuando se permite que dos sistemas intercambien energía — que es exactamente lo que afirma la ley cero, y todo lo que afirma.

## La primera ley: la energía se conserva, y el calor no es algo que un cuerpo contenga

La primera ley extiende la conservación de la energía para incluir el calor: la variación de energía interna de un sistema es igual al calor añadido menos el trabajo realizado por el sistema. Su contenido está en la diferencia entre los términos. La energía interna es una **[función de estado](/en/glossary/state-function)** — depende solo de la condición actual del sistema, de modo que un viaje de ida y vuelta la devuelve a donde empezó. Calor y trabajo son **magnitudes de camino**: describen energía que cruza una frontera durante un proceso, y su reparto depende de cómo se condujo el proceso.

La consecuencia práctica es que «cuánto calor contiene este objeto» no es una pregunta bien formada. Un objeto posee energía interna; el calor es esa energía en tránsito bajo una diferencia de temperatura, y el trabajo es energía en tránsito mediante una fuerza que actúa a lo largo de un desplazamiento. El mismo cambio de estado puede alcanzarse por muchas combinaciones de ambos, y por eso la primera ley por sí sola nunca señala un rendimiento — cuadra las cuentas y ahí se detiene.

Lo que prohíbe es el móvil perpetuo de primera especie: un dispositivo cíclico que entregue trabajo sin una entrada de energía equivalente. La prohibición es categórica más que mecánica — se aplica sin inspeccionar el varillaje propuesto, porque todo ciclo devuelve la energía interna a su valor inicial y entonces las cuentas deben cuadrar a través de la frontera.

## La segunda ley: la que tiene dirección

Dos enunciados clásicos son equivalentes. Clausius: ningún proceso cíclico puede tener como único resultado la transferencia de calor de un cuerpo más frío a uno más caliente. Kelvin–Planck: ningún proceso cíclico puede tener como único resultado la conversión completa en trabajo del calor de un único foco. Ambos se resumen en la forma entrópica — en un sistema aislado la entropía no disminuye — y ambos prohíben el móvil perpetuo de segunda especie, el aparato que extraería trabajo útil del solo calor ambiente. Qué es la entropía, y por qué «desorden» es una glosa pobre para ella, es el asunto del artículo complementario sobre [qué mide realmente la entropía](/es/physics/thermodynamics/entropy-explained).

Es la única ley aquí que distingue el pasado del futuro, y la de consecuencia ingenieril más afilada: el techo de cualquier máquina cíclica depende de las temperaturas de sus focos y de nada más, cota desarrollada con datos de centrales reales en [las máquinas térmicas y sus límites de rendimiento](/es/physics/thermodynamics/heat-engines-and-efficiency-limits).

Es además estadística, y eso no es una escapatoria. La relación de fluctuación de Crooks fija cuánto más probable es una trayectoria directa que su inversa, dado el trabajo intercambiado, y se [puso a prueba directamente tirando de moléculas individuales de ARN](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/) con pinzas ópticas: la energía libre de plegamiento recuperada de las distribuciones de trabajo fue de 62,8 ± 1,5 kBT para una horquilla, en acuerdo con un cálculo independiente. Las distribuciones de trabajo de desplegado y replegado de ese experimento se solapan y se cruzan en la variación de energía libre, de modo que tirones individuales caen a ambos lados — algunos yendo localmente «al revés» — mientras el conjunto obedece la desigualdad. La segunda ley es un enunciado sobre probabilidades abrumadoras en sistemas de muchas partículas, no una imposibilidad lógica a escala de unas pocas.

## La tercera ley: el cero absoluto como asíntota

La tercera ley afirma que la entropía de un sistema tiende a una constante cuando la temperatura tiende al cero absoluto, y que esa constante es cero para un cristal perfecto. Se siguen dos consecuencias. Las entropías absolutas cobran sentido, porque hay un punto de referencia común desde el que integrar — razón misma de que existan entropías estándar tabuladas. Y enfriar se vuelve progresivamente más difícil: las capacidades caloríficas caen hacia cero conforme lo hace la temperatura, de modo que cada etapa adicional de enfriamiento tiene menos con lo que trabajar.

El enunciado de inalcanzabilidad se ha afinado recientemente. Una [derivación general publicada en *Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/) en 2017 cuantificó el coste: enfriar perfectamente hasta el cero absoluto exige que al menos un recurso — el volumen del baño frío o el trabajo consumido — sea infinito, y para un baño de radiación la temperatura alcanzable escala como una potencia inversa del tiempo de enfriamiento. El cero absoluto no es solo difícil en la práctica; la dificultad es un teorema, y el teorema le pone precio.

## Las cuatro leyes en paralelo

| Ley | Qué afirma | Qué prohíbe | Qué vuelve significativo |
| --- | --- | --- | --- |
| Cero | El equilibrio térmico es transitivo | Una escala de temperatura que dependa del instrumento | La temperatura como propiedad compartida |
| Primera | La energía, incluido el calor, se conserva | Trabajo de la nada — móvil perpetuo de primera especie | La energía interna como función de estado |
| Segunda | La entropía de un sistema aislado no disminuye | Trabajo desde un único foco — móvil perpetuo de segunda especie | La entropía, y una dirección para el tiempo |
| Tercera | La entropía tiende a una constante cuando la temperatura tiende a cero | Alcanzar el cero absoluto con recursos finitos | La entropía absoluta, referida a cero |

## La reversibilidad es un límite, no un procedimiento

Toda cota anterior se deriva para un proceso reversible: conducido tan despacio, por un desequilibrio tan pequeño, que podría recorrerse hacia atrás por los mismos estados sin dejar residuo. Nada real es reversible, porque una velocidad finita exige una fuerza motriz finita, y una fuerza motriz finita produce entropía. Por eso las cotas se aproximan y nunca se alcanzan, y por eso maximizar el rendimiento y maximizar la potencia son optimizaciones distintas con respuestas distintas. La distancia implicada no es pequeña: el parque de carbón estadounidense consumió 10 777 Btu de combustible por cada kilovatio-hora generado en 2024, según la Energy Information Administration, de modo que algo menos de un tercio de la energía del combustible llegó como electricidad.

También explica una división del trabajo que hace tropezar. La termodinámica fija dirección y techo; nada dice sobre con qué rapidez ocurre algo. La velocidad a la que la energía cruza efectivamente una frontera es una cuestión de transporte, gobernada por conducción, convección y radiación con sus propias leyes de escala — el asunto de [cómo se mueve realmente el calor](/es/physics/thermodynamics/heat-transfer-conduction-convection-radiation), y la razón por la que un proceso termodinámicamente permitido puede seguir siendo inútilmente lento.

## Dónde muerden las leyes fuera de los motores

Una bomba de calor entrega a un edificio más energía térmica que la electricidad que consume, lo que suele leerse como una violación. No lo es: la máquina mueve calor en lugar de fabricarlo, y la segunda ley limita la razón a través del salto de temperatura en vez de prohibir una razón mayor que uno. Cuanto menor es el salto, mayor es la razón alcanzable, y por eso las máquinas acopladas al terreno resultan atractivas donde el terreno está disponible. El Departamento de Energía de Estados Unidos señala que las temperaturas a unos 30 pies de profundidad se mantienen todo el año entre unos 10 °C y 15 °C, una fuente mucho más benigna en enero que el aire exterior.

Los sistemas vivos provocan la misma mala lectura. Un organismo construye y mantiene estructura improbable, disminuyendo su propia entropía, mientras exporta un aumento mayor a su entorno; la contabilidad cuadra porque el organismo es abierto, como expone el argumento de flujo de energía tras [la producción primaria en los ecosistemas](/es/ecology/ecosystems/primary-production-and-energy-flow). La versión planetaria — luz solar absorbida a temperatura alta, infrarrojo radiado a temperatura baja — se desarrolla en [el balance energético de la Tierra como máquina térmica](/es/physics/thermodynamics/earth-energy-budget-and-the-second-law); el mismo razonamiento aplicado a una fuente de radiación caliente y a una celda fría da [los límites termodinámicos de la fotovoltaica](/es/physics/thermodynamics/thermodynamic-limits-of-photovoltaics), y reaparece en cada paso de las cadenas de conversión descritas en [cómo se arman los sistemas energéticos](/es/physics/energy/energy-systems-explained).

## Lo que el marco no resuelve

La termodinámica clásica es una teoría de estados de equilibrio y de las transiciones entre ellos: no da constantes de tiempo y calla sobre los mecanismos. Los estados estacionarios lejos del equilibrio — una célula viva, una atmósfera en convección, un láser — no están cubiertos por ningún principio extremal con el rango de la segunda ley, pese a propuestas repetidas. La producción máxima de entropía es la más discutida de ellas, y sigue siendo una propuesta disputada y no una ley establecida.

La temperatura misma se vuelve ambigua fuera del equilibrio: a un sistema cuyas partes relajan a velocidades muy distintas pueden asignársele varias temperaturas defendibles a la vez. Los sistemas dominados por la gravedad son aún más extraños, con capacidades caloríficas negativas y, para los agujeros negros, entropía que escala con el área en lugar del volumen. Las leyes sobreviven a ambos casos; los atajos construidos sobre ellas, con frecuencia no.

## Sources

1. **NIST** — [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction). Redefinición del kelvin en el SI, la anterior definición por el punto triple y el cero absoluto en grados Celsius.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). Las siete constantes definitorias del SI y el valor fijado de la constante de Boltzmann desde el 20 de mayo de 2019.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). Valor exacto y unidades, sin incertidumbre asignada.
4. **Nature Communications** — [A general derivation and quantification of the third law of thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/). Coste en recursos del enfriamiento y escalado de la temperatura alcanzable con el tiempo de enfriamiento.
5. **Nature** — [Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/). Prueba en molécula única de una relación de fluctuación y energía libre de plegamiento recuperada.
6. **U.S. Department of Energy** — [Geothermal heat pumps](https://www.energy.gov/hgeo/geothermal/geothermal-heat-pumps). Temperaturas del subsuelo somero que fijan el salto térmico de las máquinas acopladas al terreno.
7. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Conversión media de combustible a electricidad del parque de centrales en operación.
