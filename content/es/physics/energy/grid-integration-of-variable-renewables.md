---
title: 'Integración en la red: lo que la variabilidad cuesta realmente a un sistema eléctrico'
metaTitle: Lo que la variabilidad cuesta realmente a la red
excerpt: El coste de la eólica y la solar en un sistema eléctrico no es, en su mayor parte, un coste de energía. Es el precio del control de frecuencia, el vertido, la capacidad firme y las líneas — cuatro problemas distintos reducidos a una sola palabra.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - grid-integration
  - power-systems
  - curtailment
  - system-flexibility
  - electricity-markets
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - capacity-factor-and-energy-metrics
  - wind-energy-physics
pillar: energy-systems-explained
_bodyHash: 25b5602c
---

A finales de la primavera de 2020, el sistema eléctrico de Gran Bretaña realizó un experimento que nadie había diseñado. El confinamiento retiró una porción grande de la demanda mientras la producción eólica y solar seguía adelante, y el operador del sistema se encontró pagando por algo que no era electricidad. El coste de los servicios auxiliares entre mayo y julio ascendió a 302 millones de libras, frente a 101 millones en los mismos meses del año anterior — el triple de la factura en un trimestre en el que se entregó menos energía. La demanda nacional cayó a su valor más bajo registrado, 13.4 GW durante la noche del 28 de junio, mientras que la capacidad síncrona que debía permanecer acoplada para mantener estable el sistema se situó en torno a 8 a 9 GW.

Ese trimestre es el problema de integración en miniatura. Lo que un sistema paga por la generación gobernada por el tiempo atmosférico no es, en gran medida, un pago por energía; es un pago por servicios que las centrales convencionales suministraban de forma incidental, porque daba la casualidad de que estaban girando. Esos servicios son separables, tienen físicas distintas, y agruparlos bajo la palabra «intermitencia» oculta cuál de ellos es el limitante. La cadena de conversión más amplia en la que se insertan se expone en la panorámica sobre [cómo se ensambla un sistema energético](/es/physics/energy/energy-systems-explained).

## La variabilidad y la incertidumbre no son el mismo problema

La variabilidad es el hecho de que la producción cambia. La incertidumbre es el hecho de que no se sabe de antemano exactamente cómo. Las cubren recursos distintos y cuestan cantidades distintas.

Un recurso que oscila con fuerza pero de forma predecible es comparativamente barato de acomodar: la programación se construye a su alrededor con un día de antelación, y las centrales flexibles que llenan el hueco se acoplan sin prisa. Un recurso casi constante que de vez en cuando sorprende al operador es caro, porque la sorpresa debe cubrirse con reserva mantenida en tiempo real, y la reserva es capacidad pagada por estar disponible en lugar de por producir. Por eso la mejora de la previsión es una de las medidas de integración más baratas disponibles: no hace nada frente a la variabilidad, pero convierte la incertidumbre en variabilidad, y la variabilidad es la más barata de las dos.

## La frecuencia es un balance que se liquida cada segundo

La frecuencia de la red es el signo visible del equilibrio instantáneo entre generación y carga. En un parque de grandes máquinas síncronas, las masas rotativas están acopladas electromecánicamente a esa frecuencia, de modo que un desequilibrio repentino recurre primero a su energía cinética. Esa energía de rotación almacenada — [la inercia del sistema](/en/glossary/grid-inertia) — fija la tasa de variación de la frecuencia tras una perturbación, lo que a su vez fija cuánto tiempo tienen los sistemas de control antes de que las protecciones empiecen a desconectar elementos.

La generación conectada mediante inversores no la aporta por defecto. Un inversor seguidor de red mide la forma de onda de tensión e inyecta corriente en fase con ella; necesita una forma de onda a la que seguir. Un inversor formador de red impone una forma de onda propia y se comporta, desde el punto de vista de la red, más como una fuente que como un seguidor. Un trabajo de simulación publicado en *Scientific Reports* ilustra la diferencia en una red de prueba de nueve nudos: ante un escalón de carga de alrededor de un tercio, un caso totalmente síncrono descendió hasta un mínimo de frecuencia de 59.42 Hz y tardó unos 80 segundos en estabilizarse, un caso mixto alcanzó 59.79 Hz y se estabilizó en menos de 8 segundos, y un caso totalmente formador de red mantuvo 59.85 Hz. Son resultados modelizados en un sistema de prueba pequeño y no medidas de una red real, pero la dirección importa: la capacidad es una cuestión de diseño del control, no de acero girando.

La tensión es un problema aparte con una física aparte — local en lugar de sistémica, y gestionada mediante potencia reactiva. Es la razón por la que las redes de distribución con generación densa en cubiertas alcanzan restricciones mucho antes que el sistema de transporte.

## El vertido es una señal de precio con mala fama

El [vertido](/en/glossary/curtailment) — reducir deliberadamente la producción disponible — suele presentarse como desperdicio. Se lee mejor como un sistema que se niega a pagar por energía que no puede utilizar, y sus causas son diagnosticables. Una revisión del vertido solar mundial publicada en *Solar Energy* lo atribuye a un transporte incapaz de llevar la producción remota hasta la carga, a un desajuste entre el momento en que la producción alcanza su máximo y aquel en que lo hace la demanda, y a una sobreoferta cuando la generación variable más las centrales inflexibles de funcionamiento obligado superan la demanda — y concluye que las diferencias entre sistemas reflejan tanto las políticas y las prácticas de planificación de la red como la geografía o la estación.

| Sistema (2018) | Fracción de la producción solar potencial vertida | Qué lo provocó |
| --- | --- | --- |
| Alemania | 0.3% | Restricciones de la red local |
| California | 1.5% | Sobreoferta al mediodía frente a centrales inflexibles |
| Hawái | 2.7% en todo el estado | Sistemas insulares pequeños; 14% en Maui |
| Arizona | 2.9% | Sobreoferta localizada |
| China (nacional) | 3.0% | Límites de transporte; 16% en Xinjiang, 10% en Gansu |
| Chile | alrededor del 6% | Generación remota, transporte limitado |
| Texas | 8.4% | Congestión del transporte |

Dos órdenes de magnitud separan la parte alta y la baja de esa columna, y nada de esa dispersión se explica por cuánto sol recibe cada lugar. El vertido es un resultado de red y de mercado, y el mismo estudio halló que el vertido californiano se duplicó entre 2018 y 2019.

Los precios negativos son la versión de mercado de esa señal. Cuando un generador cobra un pago por megavatio-hora con independencia del precio de mercado — mediante una subvención, un crédito fiscal o un contrato — sigue siendo racional seguir generando por debajo de cero, y el precio cae hasta que se detiene algo con peor economía. Un precio negativo no es prueba de un mercado roto; es prueba de que no se ha construido la respuesta más barata a la sobreoferta. Cuál es la más barata depende de cuánto dure el excedente, el argumento que desarrolla la página complementaria sobre [qué compra realmente la duración del almacenamiento](/es/physics/energy/energy-storage-fundamentals). Donde los excedentes son estacionales, convertirlos en [un vector químico almacenable](/es/physics/energy/hydrogen-as-an-energy-carrier) pasa a ser una candidata, con una fuerte penalización de conversión.

## El crédito de capacidad no es el factor de capacidad

Estas dos razones responden a preguntas sin relación y se intercambian de forma rutinaria. El [factor de capacidad](/es/physics/energy/capacity-factor-and-energy-metrics) trata de energía: la producción anual dividida por lo que habría producido el funcionamiento continuo a potencia nominal. El crédito de capacidad trata de fiabilidad: cuánta capacidad convencional desplaza un recurso sin degradar la aptitud del sistema para cubrir la carga en las horas más tensas. Un parque puede tener un factor de capacidad respetable y un crédito de capacidad pequeño, y la brecha se ensancha con la penetración, porque la producción agrupada está correlacionada — cuando una máquina se queda sin viento, también lo hacen sus vecinas, que es el modo de fallo que la planificación de cobertura existe para evitar. La dependencia de la velocidad del viento que hay detrás de esa correlación se expone en la física de [cuánta potencia puede extraer una turbina del aire en movimiento](/es/physics/energy/wind-energy-physics).

Un estudio sobre Nueva Inglaterra publicado en *Heliyon* muestra la forma del problema. Una combinación dominada por la eólica dimensionada para generar una vez la demanda anual cubría alrededor del 73 por ciento de la demanda horaria sin almacenamiento, y una dominada por la solar alrededor del 69 por ciento; doce horas de almacenamiento elevaban ambas hasta aproximadamente el 86 a 87 por ciento. Alcanzar el nivel de fiabilidad del 99.97 por ciento empleado en la planificación norteamericana exigía unas dos veces y media la demanda anual en generación junto con doce horas de almacenamiento para una combinación dominada por la eólica, y más para una dominada por la solar. El último tramo es un problema distinto del primero: lo fijan los ciclos estacionales y los episodios meteorológicos de varios días, y cubrirlo requiere semanas de energía almacenada en lugar de horas.

## La geografía hace el alisado más barato, y las líneas son la restricción

Agregar producción variable sobre un área amplia reduce su varianza, porque los sistemas meteorológicos están correlacionados espacialmente en un alcance limitado y los emplazamientos suficientemente separados no suben y bajan a la vez. Eso convierte al transporte en la forma de flexibilidad menos exótica disponible: sustituye a la vez al almacenamiento, a la reserva y a la capacidad firme, sin pérdida de ciclo completo. También tiene el plazo de ejecución más largo, y por eso la restricción que ata en muchos sistemas es hoy una cola y no una tecnología. La evaluación *Electricity 2026* de la Agencia Internacional de la Energía sitúa entre 1,200 y 1,600 GW los proyectos en fase avanzada dentro de las colas de conexión en todo el mundo, y estima que entre 450 y 700 GW de ellos podrían liberarse mediante tecnologías de mejora de la red sobre líneas existentes — capacidad dinámica de línea y control de flujos de potencia, junto con refuerzos más pesados como la sustitución de conductores y el aumento de tensión — y otros 750 a 900 GW mediante acuerdos de conexión más flexibles, no firmes. Ambas vías actúan sobre corredores que ya existen, y no sobre otros nuevos.

El balance de la agencia sobre 50 sistemas eléctricos, que cubren cerca del 90 por ciento de la generación solar y eólica mundial, los ordena en seis fases según hasta qué punto la producción variable ha cambiado la operación. Dinamarca, Irlanda, Australia Meridional y España se sitúan en la fase cuatro o por encima, integrando entre el 35 y el 75 por ciento de renovables variables en la generación anual — prueba de que las fases describen práctica de ingeniería y no techos. El mismo informe estima que retrasar las medidas de integración podría poner en riesgo hasta el 15 por ciento de la generación solar y eólica en 2030, hasta 2,000 TWh de producción que estaba físicamente disponible y no tenía adónde ir.

## «Carga base» describe una estructura de costes, no un requisito del sistema

La idea equivocada más persistente en este terreno es que un sistema eléctrico necesita una categoría de centrales llamada carga base. Lo que un sistema necesita es energía suficiente en cada hora y controlabilidad suficiente para mantener la frecuencia y la tensión mientras la entrega. La carga base describe otras dos cosas: la porción de la curva de carga presente en todas las horas, y una clase de central cuyo punto de operación más barato es plano porque dominan los costes de capital y los costes de combustible son bajos.

El registro de operación hace visible la distinción. Los factores de capacidad publicados por la US Energy Information Administration — leídos aquí en la edición de agosto de 2026, en la que los valores desde 2025 en adelante siguen siendo preliminares — sitúan al parque de carbón a escala de servicio público en el 52.8 por ciento en 2016, el 40.5 por ciento en 2020 y el 48.7 por ciento en 2025. Nada cambió en esas calderas; cambiaron los precios relativos de los combustibles y el orden de despacho. En esos mismos años el parque nuclear se mantuvo entre aproximadamente el 91 y el 93 por ciento, reflejo de un coste de combustible tan bajo que funcionar a plena carga es siempre la opción económica. La cifra de un parque sigue al mercado y la del otro sigue a la programación del mantenimiento.

## Dónde son más débiles las cifras de coste de integración

**Los costes de integración no son limpiamente atribuibles.** Asignar un coste a un recurso exige un sistema contrafactual sin él, y la elección del contrafactual mueve la respuesta de forma sustancial — las estimaciones publicadas varían más entre metodologías que entre sistemas.

**Los porcentajes de vertido tienen un denominador modelizado.** La energía vertida se compara con la producción potencial, que nunca se produjo y hay que estimarla a partir de datos de irradiancia o de viento más una disponibilidad supuesta. Dos operadores que informan de vertidos distintos pueden estar discrepando sobre el denominador.

**Los estudios de cobertura descansan en un registro meteorológico corto.** Los sucesos que fijan los requisitos de fiabilidad son raros, correlacionados y de varios días, y el registro histórico contiene pocos. Un puñado de años meteorológicos no puede resolver la cola que el estudio intenta dimensionar, razón por la cual el coste marginal del último uno por ciento de fiabilidad es la cifra menos cierta del ejercicio — y razón por la cual los límites que atan son a menudo institucionales y no físicos, distinción examinada en el análisis de [las restricciones que no son de tecnología](/es/insight/energy-transition-constraints-physical-and-institutional).

## Sources

1. **Agencia Internacional de la Energía** — [Integrating Solar and Wind: executive summary](https://www.iea.org/reports/integrating-solar-and-wind/executive-summary). Marco de integración en seis fases, el rango del 35–75 por ciento en los sistemas pioneros, y la estimación de que hasta el 15 por ciento de la generación solar y eólica está en riesgo en 2030.
2. **Agencia Internacional de la Energía** — [Electricity 2026: executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Capacidad que podría liberarse mediante tecnologías de mejora de la red y mediante acuerdos de conexión no firmes.
3. **Applied Energy** — [Ancillary services in Great Britain during the COVID-19 lockdown](https://pmc.ncbi.nlm.nih.gov/articles/PMC9759740/). Costes de los servicios auxiliares, demanda nacional mínima y capacidad síncrona estimada como necesaria para la estabilidad.
4. **Solar Energy** — [Too much of a good thing? Global trends in the curtailment of solar PV](https://pmc.ncbi.nlm.nih.gov/articles/PMC7470769/). Fracciones vertidas por sistema y causas identificadas detrás de ellas.
5. **Scientific Reports** — [Hybrid compatible grid forming inverters for low inertia and mixed generation grids](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357951/). Mínimo de frecuencia y tiempos de estabilización simulados para los casos síncrono, híbrido y dominado por inversores.
6. **Heliyon** — [The impact of energy storage on the reliability of wind and solar power in New England](https://pmc.ncbi.nlm.nih.gov/articles/PMC10955263/). Fiabilidad alcanzada para tamaños dados de generación y almacenamiento, y carácter estacional del residuo.
7. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Factores de capacidad anuales del parque de carbón a escala de servicio público.
8. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Factores de capacidad anuales del parque nuclear a escala de servicio público.
