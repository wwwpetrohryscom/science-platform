---
title: 'Dinámica de fluidos: por qué un solo número adimensional decide cómo se comporta un flujo'
metaTitle: Dinámica de fluidos y el número de Reynolds
excerpt: Un ciliado nadador y un huracán obedecen las mismas ecuaciones. Lo que los separa es la razón entre inercia y viscosidad, y esa razón decide si un flujo es suave, caótico o queda fuera del alcance del cálculo directo.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - fluid-dynamics
  - reynolds-number
  - turbulence
  - boundary-layer
  - aerodynamics
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - sound-and-acoustics-explained
  - convection-and-cloud-formation
pillar: classical-mechanics-explained
_bodyHash: 644ab2f3
---

Un organismo unicelular que bate sus cilios y un ciclón que se enrolla alrededor de su ojo se rigen por las mismas ecuaciones. Lo que los separa no es la física sino una razón: cuánto importa la inercia del fluido frente a su viscosidad. Esa razón, el [número de Reynolds](/en/glossary/reynolds-number), es lo primero que un especialista en mecánica de fluidos pregunta ante un problema, porque determina qué términos de las ecuaciones pueden desecharse y cuáles no.

Las leyes de conservación que hay debajo son las que expone la [mecánica clásica](/es/physics/mechanics-waves/classical-mechanics-explained). Lo que cambia es el objeto: en lugar de un cuerpo con partes fijas, el sujeto es un medio continuo que se deforma sin límite, de modo que la masa, la cantidad de movimiento y la energía han de seguirse a través de un volumen de control en vez de ir adheridas a una cosa.

## La razón, y lo que selecciona

La obra de referencia aeronáutica de la NASA enuncia la definición sin rodeos: el número de Reynolds «expresa la razón entre las fuerzas de inercia (resistentes al cambio o al movimiento) y las fuerzas viscosas (pesadas y pegajosas)», escrito Re = ρVL/μ, donde ρ es la densidad, V una velocidad característica, L una longitud característica y μ la viscosidad dinámica. Nada en esa expresión es una propiedad solo del fluido. Dos de los cuatro términos son propiedades del fluido, pero uno describe el flujo y otro describe la geometría, y por eso la misma agua está de lleno en el régimen viscoso en un capilar y es completamente turbulenta en un río.

El extremo bajo es más extraño de lo que parece. Los trabajos sobre el ciliado *Paramecium* lo sitúan en un número de Reynolds de alrededor de 0.1, un régimen en el que «las fuerzas de inercia son pequeñas comparadas con las fuerzas viscosas». Allí un organismo no se desliza por inercia. Detenga los cilios y el movimiento cesa casi de inmediato, porque no hay cantidad de movimiento almacenada digna de mención. Las estrategias que funcionan lanzando fluido hacia atrás —como hace un nadador— no devuelven nada a esa escala.

Para las propiedades del fluido mismas, los datos de referencia del NIST asignan al agua líquida a 20 °C y 1 bar una densidad de 998.21 kg/m³ y una viscosidad de 1.0016 × 10⁻³ Pa·s. Al dividir una por otra se obtiene una viscosidad cinemática próxima a 1.0 × 10⁻⁶ m²/s, y es esta magnitud combinada, y no la viscosidad sola, la que fija con qué rapidez difunde lateralmente la cantidad de movimiento a través de un flujo.

El rendimiento práctico de esa razón es el ensayo con modelos. La exposición de la NASA es directa: «Si el número de Reynolds del experimento y el del vuelo son próximos, entonces modelamos correctamente los efectos de las fuerzas viscosas respecto de las fuerzas de inercia.» Un modelo a escala en un túnel no es un avión pequeño; es un flujo distinto que se ha dispuesto para que tenga los mismos números adimensionales. Donde la compresibilidad también importa, hay que igualar además una segunda razón —el número de Mach, la velocidad dividida por [la velocidad local del sonido](/es/physics/mechanics-waves/sound-and-acoustics-explained)—, y la NASA advierte de que trasladar coeficientes de baja velocidad a condiciones de alta velocidad fracasa porque «la compresibilidad del aire altera la física importante entre estos dos casos».

## Lo que dice la ecuación de Bernoulli, y la versión de ella que es falsa

La relación de Bernoulli es un enunciado sobre la energía a lo largo de una línea de corriente, y solo vale para un flujo estacionario, incompresible y efectivamente no viscoso. Esas condiciones no son letra pequeña; son el contenido. Donde se cumplen, un aumento de la velocidad corresponde a una caída de la presión, y la ecuación convierte una en otra.

El problema llega cuando se la hace funcionar al revés para explicar algo que no puede explicar. El ejemplo más duradero es la afirmación de que un ala sustenta porque el aire que toma el camino superior, más largo, debe llegar al borde de salida junto con el aire del camino inferior, y por tanto debe viajar más rápido. La guía de aeronáutica de la NASA rechaza el razonamiento por motivos de medición y no de principio: «la velocidad en el extradós de un ala sustentadora es mucho mayor que la velocidad en el extradós que produciría un tiempo de tránsito igual». La velocidad supuesta sencillamente no es la observada. La ecuación de Bernoulli está bien; lo que se le suministra es una entrada fabricada. El orden honesto de las operaciones consiste en resolver primero el campo de velocidades, luego usar Bernoulli para convertirlo en presión y después integrar la presión para obtener una fuerza.

## La capa límite, donde la viscosidad que se despreció hace todo el trabajo

Tratar un flujo como no viscoso funciona sorprendentemente bien lejos de las superficies y falla por completo en ellas, porque un fluido real no desliza a lo largo de una pared sólida. La NASA describe la consecuencia como «una capa delgada de fluido cerca de la superficie en la que la velocidad cambia desde cero en la superficie hasta el valor de la corriente libre lejos de la superficie». Casi toda la cizalla, y por tanto casi toda la resistencia viscosa, reside dentro de esa capa.

Su carácter depende del número de Reynolds: «Para números de Reynolds más bajos, la [capa límite](/en/glossary/boundary-layer) es laminar y la velocidad longitudinal cambia uniformemente conforme uno se aleja de la pared», mientras que a valores más altos «es turbulenta y la velocidad longitudinal se caracteriza por flujos arremolinados no estacionarios dentro de la capa límite». La distinción importa porque una capa límite que se queda sin cantidad de movimiento se desprende de la superficie, y el desprendimiento es lo que produce la entrada en pérdida del ala a un ángulo de ataque elevado.

Por eso también la resistencia no crece de forma suave con la velocidad. El tratamiento que hace la NASA del flujo alrededor de una esfera describe una secuencia y no una tendencia: vórtices adheridos estables a baja velocidad, luego un desprendimiento alternante inestable —la calle de vórtices— que genera una gran resistencia, luego un flujo caótico que reduce algo la resistencia, y después una capa límite turbulenta que al principio produce menos resistencia que el caso laminar antes de que la relación vuelva a invertirse. Una capa turbulenta es más disipativa en la pared, pero arrastra hacia ella fluido de mayor cantidad de movimiento, de modo que puede permanecer adherida más lejos alrededor del cuerpo. Que ese intercambio sea favorable depende del punto de la secuencia en que uno se encuentre.

## La transición es un intervalo, no un umbral

El atajo de los manuales sitúa la transición de laminar a turbulento en una tubería en un número de Reynolds de alrededor de 2300, como si el flujo cambiara de estado en una línea. Los trabajos cuidadosos sobre el flujo transicional en tuberías describen algo menos pulcro. Por debajo de Re₁ ≃ 2300 la turbulencia aparece como «puffs de equilibrio (o transitorios de larga duración)» localizados que viajan en un fondo por lo demás laminar; la fracción turbulenta crece luego con el número de Reynolds «hasta Re₂ ≃ 2600, donde hay una transición continua a un estado de turbulencia uniforme».

| Número de Reynolds | Estado del flujo en la tubería | Lo que realmente se observa |
| --- | --- | --- |
| Por debajo de ≈ 2300 | Laminar con turbulencia localizada | Puffs aislados, transitorios o duraderos, en un entorno laminar |
| ≈ 2300 a ≈ 2600 | Intermitente | La fracción turbulenta crece de forma continua con el número de Reynolds |
| Por encima de ≈ 2600 | Turbulencia uniforme | La turbulencia llena la tubería en vez de ocupar parches |

De ahí se siguen dos consecuencias. La transición es una propiedad de un intervalo, de modo que un flujo cercano a la cifra inferior puede ser laminar o turbulento según la perturbación de entrada y la rugosidad de la pared. Y un único valor crítico citado es el resumen de una distribución, no un interruptor.

## Turbulencia: la parte que no se ha cerrado

La turbulencia no es una teoría física aparte. Es lo que hacen las mismas ecuaciones cuando dominan los términos inerciales no lineales, y la dificultad es aritmética más que conceptual. Promediar las ecuaciones para obtener el flujo medio introduce términos nuevos que representan el transporte de cantidad de movimiento por las fluctuaciones, y esos términos contienen incógnitas que las propias ecuaciones promediadas no pueden suministrar. Todo cálculo práctico cierra por tanto el sistema con un modelo.

Hasta dónde llega esa concesión se ve en cómo el campo enuncia sus propias ambiciones. Un estudio encargado por la NASA sobre el futuro de la aerodinámica computacional fija como meta para 2030 que «las predicciones precisas y basadas en la física de flujos turbulentos complejos, incluido el desprendimiento del flujo, puedan realizarse de forma rutinaria y eficiente», una meta que merece la pena poner por escrito precisamente porque todavía no es rutinaria. Los modelos de turbulencia se calibran contra casos medidos y simulados en lugar de derivarse de primeros principios, lo que significa que no puede suponerse que un modelo validado en un régimen sea exacto fuera de él.

## Por qué esto aparece en toda predicción climática y meteorológica

La brecha entre el movimiento resuelto y el modelizado es la restricción central de la simulación geofísica, y no un detalle de la práctica ingenieril. La evaluación del IPCC lo dice sin rodeos: «Dadas las limitaciones de los recursos de cómputo, los MCG de la generación actual todavía no pueden representar los procesos nubosos de pequeña escala y, en consecuencia, la convección somera y profunda queda determinada por parametrizaciones de escala submalla.» Los modelos regionales que permiten la convección, «ejecutados típicamente a una resolución inferior a 10 km», resuelven parte de lo que un modelo global debe parametrizar, y mejoran el ciclo diurno simulado y los extremos de precipitación, pero no pueden ejecutarse globalmente durante períodos largos con el coste actual.

La lectura honesta de esa situación es la que la evaluación da para los modelos globales con convección parametrizada: sigue habiendo «poca confianza en su capacidad para simular con exactitud los rasgos espaciotemporales de la precipitación actual, especialmente en los trópicos». Un [modelo climático](/es/glossary/climate-model) no se equivoca sobre la dinámica de fluidos; es incapaz de resolver las escalas en las que ocurre parte de esa dinámica de fluidos, y el sustituto es una parametrización cuyos coeficientes están restringidos por la observación en vez de derivados. El mismo problema pone límites a cómo se representa la [circulación oceánica](/es/ecology/earth-systems/ocean-circulation-and-climate), y es la razón por la que la [convección y la formación de nubes](/es/physics/climate-physics/convection-and-cloud-formation) sigue siendo una de las partes más activamente revisadas de la [física de la atmósfera](/es/physics/climate-physics/atmospheric-physics-explained).

Lo que el número de Reynolds no puede hacer es decirle qué longitud poner en él. Una tubería tiene un diámetro evidente; una cordillera, la capa límite de una hoja o una ola rompiente no lo tienen, y la elección de la longitud característica es un juicio de modelización que cambia el valor en órdenes de magnitud. Dos flujos citados con el mismo número de Reynolds solo son dinámicamente semejantes si en ambos casos se quiso decir la misma longitud, que es de esas cosas fáciles de enunciar y fáciles de perder entre un túnel de viento y un artículo.

## Sources

1. **NASA Glenn Research Center** — [Similarity parameters](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/similarity-parameters/). Definición de los números de Reynolds y de Mach y fundamento de la semejanza en túnel de viento.
2. **NASA Glenn Research Center** — [Bernoulli and Newton](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/). Por qué la explicación de la sustentación por igualdad de tiempos de tránsito describe mal el campo de velocidades.
3. **NASA Glenn Research Center** — [Boundary layer](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/). Definición de la capa límite, carácter laminar y turbulento, y desprendimiento del flujo.
4. **NASA Glenn Research Center** — [Drag of a sphere](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Secuencia de estados del flujo tras un cuerpo romo y su efecto sobre la resistencia.
5. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Densidad y viscosidad del agua líquida a 20 °C y 1 bar.
6. **Proceedings of the National Academy of Sciences** — [Distinct large-scale turbulent-laminar states in transitional pipe flow](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889535/). Números de Reynolds críticos que acotan el régimen intermitente en flujo en tubería.
7. **eNeuro** — [Integrative neuroscience of Paramecium, a "swimming neuron"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8208649/). Número de Reynolds de un ciliado nadador y predominio de las fuerzas viscosas.
8. **NASA Technical Reports Server** — [CFD Vision 2030 Study: A Path to Revolutionary Computational Aerosciences](https://ntrs.nasa.gov/citations/20140003093). Meta declarada para 2030 de predicción rutinaria y exacta de flujos turbulentos complejos.
9. **IPCC AR6 WG1, capítulo 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Parametrización submalla de la convección, resolución que permite la convección y confianza en la precipitación simulada.
