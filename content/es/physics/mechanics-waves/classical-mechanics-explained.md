---
title: 'Mecánica clásica: el marco que sigue describiendo la mayor parte del mundo'
metaTitle: 'Mecánica clásica: el marco y sus límites'
excerpt: Las leyes de Newton son menos un conjunto de hechos sobre los objetos que un contrato sobre sistemas de referencia y leyes de fuerza. Esta página enuncia ese contrato con cuidado, muestra por qué los principios de conservación resultaron más profundos y marca los bordes del dominio.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - classical-mechanics
  - newtons-laws
  - conservation-laws
  - lagrangian-mechanics
  - determinism
related:
  - energy-work-and-power
  - waves-and-oscillations-explained
  - fluid-dynamics-explained
  - measurement-uncertainty-explained
---
Las dos sondas Voyager, lanzadas en 1977, abandonan el Sistema Solar a más de 3 unidades astronómicas por año, y la NASA guio a ambas hasta sus encuentros planetarios con una mecánica esencialmente completa antes de 1900. Ese es el argumento práctico a favor de la mecánica clásica: no que sea la descripción más profunda disponible, sino que dentro de una envolvente muy amplia es la correcta, y nada de lo que la sustituyó la volvió obsoleta dentro de esa envolvente.

La mayor parte de los problemas que la gente tiene con la mecánica newtoniana viene de que sus tres leyes se enseñan como tres afirmaciones sobre objetos. La primera es en realidad un enunciado sobre qué sistemas de coordenadas puede usar el resto de la teoría; la segunda es una ecuación vacía hasta que se le suministra una ley de fuerza desde fuera; la tercera es un principio de conservación con un disfraz incómodo. Enunciadas así, los límites del marco también se vuelven visibles.

## La primera ley define la arena en vez de describir cuerpos

Un cuerpo en reposo sigue en reposo, y un cuerpo en movimiento uniforme continúa en movimiento uniforme, salvo que actúe sobre él una fuerza neta. Leída como afirmación sobre objetos es casi vacía, y es falsa en la mayoría de los sistemas de coordenadas que cualquiera usa en la práctica. Haga girar un cubo y el agua trepa por la pared sin que ninguna fuerza la empuje hacia fuera; viaje en un tren que frena y algo que no existe lo lanza hacia delante.

La ley se lee mejor como una definición. Selecciona la clase de sistemas de referencia — los **sistemas inerciales** — en los que el resto del marco es válido, y afirma que tales sistemas existen. Todo enunciado posterior queda entonces implícitamente condicionado a estar en uno. La superficie de un planeta en rotación no es uno de ellos, razón por la cual la balística de largo alcance, las corrientes oceánicas y la circulación atmosférica llevan todas términos de corrección que aparecen de la nada si se olvida que el sistema se eligió por comodidad y no por corrección.

## La segunda ley es una plantilla, no una teoría

La fuerza es igual a la tasa de cambio del momento. En el caso común de masa constante esto se reduce al producto familiar de masa y aceleración, pero es la forma en momento la que sobrevive al contacto con problemas de masa variable, como un cohete quemando propelente.

La ecuación es una plantilla porque no dice nada sobre qué fuerzas existen. La mecánica solo se vuelve predictiva una vez que se suministra una ley de fuerza aparte — gravitatoria, elástica, electromagnética, de rozamiento — y cada una es una pieza de física independiente con su propia exactitud. La gravedad es el caso embarazoso. La constante newtoniana de gravitación lleva una incertidumbre típica relativa de 2,2 × 10⁻⁵ en el ajuste CODATA de 2022 — 22 partes por millón, mientras que una revisión de 2014 del problema de medida, en una revista de la Royal Society, podía señalar que muchas otras constantes se conocen a partes en 10⁸ y la constante de Rydberg a cuatro partes en 10¹². La misma revisión anotaba que la dispersión entre las determinaciones publicadas de la constante de gravitación se acercaba a 500 partes por millón, «más de 10 veces las incertidumbres de cada medición». La razón no es el descuido. La gravedad es endeble a escala de laboratorio: la atracción entre dos esferas de cobre de 1 kg apenas en contacto ronda los 10⁻⁸ N, aproximadamente una milmillonésima del peso de cualquiera de ellas. Extraer esa señal contra el tirón de la Tierra entera es un problema de [incertidumbre de medida y trazabilidad](/es/physics/mechanics-waves/measurement-uncertainty-explained) tanto como de mecánica.

## La tercera ley es en realidad un enunciado de conservación

Las fuerzas vienen en pares iguales y opuestos. Dicho así suena a rareza sobre el contacto; dicho como corresponde, es la conservación del momento para un sistema aislado, y esa es la versión que generaliza.

Este es el patrón de toda la disciplina. La conservación del momento, de la energía y del momento angular no son tanto consecuencias de las leyes de Newton como su contenido duradero. El teorema de Emmy Noether hace exacta la relación: a cada ley de conservación le corresponde una simetría continua de la dinámica subyacente. La invariancia bajo traslación en el tiempo da conservación de la energía; la invariancia bajo traslación en el espacio da el momento; la invariancia bajo rotación da el momento angular. Cuando la relatividad y la mecánica cuántica sustituyeron las ecuaciones newtonianas, las magnitudes conservadas se redefinieron pero no se descartaron, razón por la cual son lo más seguro con lo que razonar cuando los detalles son inciertos. Las convenciones contables que hacen utilizable la energía en la práctica — trabajo, energía potencial, potencia — se exponen en [trabajo, energía y potencia](/es/physics/mechanics-waves/energy-work-and-power).

## La reformulación lagrangiana: la misma física, mejor punto de partida

Una formulación alternativa sustituye las fuerzas vectoriales por una única función escalar, la diferencia entre energía cinética y energía potencial, y afirma que el camino realmente recorrido es aquel para el cual la integral de esa función es estacionaria.

No se predice nada nuevo. Lo que cambia es el trabajo y la visibilidad de la estructura. Las ligaduras — una cuenta en un alambre, una articulación rígida — se absorben en la elección de coordenadas en vez de arrastrarse como fuerzas de reacción desconocidas. Sirven unas coordenadas cualesquiera, de modo que un problema de geometría incómoda puede escribirse en las variables que le convengan. Las simetrías, y por tanto las magnitudes conservadas, se leen directamente en la función escalar. La reformulación además viaja: es el lenguaje natural de los campos continuos, y el principio de acción que está en su centro reaparece como idea organizadora de la teoría cuántica de campos. Quien aprende solo la versión basada en fuerzas tiene la física correcta cogida por el mango equivocado.

Una tercera formulación, construida sobre posición y momento como variables independientes, cambia la compacidad de la segunda por una imagen geométrica de cómo se mueve el estado de un sistema por el espacio de sus estados posibles. Las tres son equivalentes donde las tres se aplican, y cada una es la cómoda en algún sitio.

| Formulación | Objeto primitivo | Qué facilita | Adónde conduce |
| --- | --- | --- | --- |
| Newtoniana | Fuerzas vectoriales sobre cada cuerpo | Problemas directos con pocos cuerpos y geometría simple | Estática y dinámica de la ingeniería |
| Lagrangiana | Un único escalar construido con energía cinética y potencial | Sistemas ligados, coordenadas incómodas, argumentos de simetría | Teoría de campos y principio de acción |
| Hamiltoniana | Posición y momento como estado emparejado | Magnitudes conservadas, teoría de perturbaciones, integraciones largas | Mecánica estadística y teoría cuántica |

La rotación es donde antes muerde la elección. El momento angular se conserva por la misma razón de simetría que su homólogo lineal, pero la relación entre velocidad angular y momento angular en tres dimensiones pasa por un tensor y no por un único número, de modo que un cuerpo que gira puede precesar y voltear sin que actúe par alguno. Ese comportamiento parece una violación de la intuición y no es nada de eso.

## De muchas partículas a los continuos y las ondas

Aplique las mismas leyes a suficientes partículas en interacción y se vuelven necesarias descripciones nuevas, no porque la mecánica haya cambiado sino porque seguir trayectorias individuales deja de ser útil. Tratar la materia como un continuo da las ecuaciones de la elasticidad y del [movimiento de fluidos, donde el número de Reynolds decide el carácter del flujo](/es/physics/mechanics-waves/fluid-dynamics-explained).

Acople elásticamente las partículas y las perturbaciones se propagan. Ese es el origen de [la oscilación y el comportamiento ondulatorio como un único asunto matemático](/es/physics/mechanics-waves/waves-and-oscillations-explained), del [sonido como onda de presión longitudinal en un fluido](/es/physics/mechanics-waves/sound-and-acoustics-explained), y — aunque la luz sea electromagnética y no mecánica — del formalismo compartido que hace [el comportamiento y los límites de las imágenes ópticas](/es/physics/mechanics-waves/optics-and-light-explained) reconocibles para quien haya estudiado una cuerda vibrante. La matemática de una fuerza recuperadora lineal es indiferente a qué es lo que recupera.

## Dónde se detiene el marco

Importan tres fronteras, y solo las dos primeras suelen enseñarse.

La frontera relativista aparece cuando las velocidades se acercan a la de la luz, fijada por definición en 299 792 458 m s⁻¹ desde que el SI se reconstruyó sobre constantes definitorias. El Gran Colisionador de Hadrones acelera protones hasta 6,8 TeV nominales por haz; frente a una energía en reposo del protón de 938,272 089 43(29) MeV, eso son unas 7 200 veces la energía en reposo, y la expresión newtoniana de la energía cinética no es allí meramente imprecisa sino errónea en órdenes de magnitud.

La frontera cuántica aparece cuando la acción implicada en un proceso se acerca a la constante de Planck, ahora fijada exactamente en 6,626 070 15 × 10⁻³⁴ J s. Para una pelota de críquet esto es irrelevante; para un electrón en un átomo es decisivo.

La tercera frontera es interna, y es la que sorprende. La mecánica clásica es determinista y aun así no indefinidamente predictiva. El Sistema Solar es el ejemplo trabajado: un comentario de PNAS que repasa las integraciones a largo plazo sitúa el tiempo de Lyapunov característico de las órbitas planetarias entre 5 y 10 millones de años, y concluye que «la presencia de caos implica que hay un límite finito a la exactitud con que pueden predecirse las posiciones de los planetas en tiempos largos», mientras el sistema permanece no obstante cualitativamente estable a lo largo de la vida del Sol. Ecuaciones exactas, fuerzas exactas, y un horizonte de todos modos.

## Con qué finura se ha comprobado realmente el marco

La mecánica se pone a prueba hasta la profundidad a la que puede medirse el tiempo, y el tiempo es la magnitud mejor medida que existe. El NIST señala que los relojes de cesio disponibles comercialmente mantienen la hora con un error inferior a una tresmillonésima de segundo al año, y que relojes experimentales basados en otros átomos son diez mil veces más precisos todavía. La telemetría, la determinación de órbitas y la gravimetría heredan toda esa precisión.

El resultado es una teoría cuyos fallos son conocidos, acotados y cuantificados de antemano — un estatus que comparte con las [leyes de la termodinámica](/es/physics/thermodynamics/laws-of-thermodynamics-explained) y con pocas otras partes de la física. Tratar el marco clásico como una mera etapa histórica es malinterpretar la situación. Es un caso límite que ha sido cartografiado, y el mapa es lo que hace seguro usarlo.

## Sources

1. **NIST** — [Definitions of the SI base units](https://www.nist.gov/si-redefinition/definitions-si-base-units). Valores fijados de las constantes definitorias, entre ellas la velocidad de la luz y la constante de Planck.
2. **NIST CODATA** — [Newtonian constant of gravitation](https://physics.nist.gov/cgi-bin/cuu/Value?bg). El valor recomendado de 2022 y su incertidumbre típica relativa.
3. **Philosophical Transactions of the Royal Society A** — [The Newtonian constant of gravitation — a constant too difficult to measure? An introduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC4173273/). Dispersión entre las determinaciones publicadas de G y magnitud de la señal de laboratorio.
4. **Proceedings of the National Academy of Sciences** — [Chaos and stability of the solar system](https://pmc.ncbi.nlm.nih.gov/articles/PMC60054/). Tiempo de Lyapunov de las órbitas planetarias y el horizonte de predictibilidad resultante.
5. **CERN** — [The Large Hadron Collider](https://home.cern/science/accelerators/large-hadron-collider/). Energías nominales de haz y de colisión.
6. **NIST CODATA** — [Proton mass energy equivalent in MeV](https://physics.nist.gov/cgi-bin/cuu/Value?mpc2mev). Energía en reposo usada en la comparación relativista.
7. **NIST** — [The second: introduction](https://www.nist.gov/si-redefinition/second-introduction). Exactitud de los relojes de cesio y de los relojes ópticos.
8. **NASA** — [Voyager](https://science.nasa.gov/mission/voyager/). Año de lanzamiento y velocidad de escape en unidades astronómicas por año.
