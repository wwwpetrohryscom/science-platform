---
title: 'Sistemas energéticos: conversión, vectores y las restricciones que deciden qué escala'
metaTitle: 'Sistemas energéticos: conversión, vectores y límites'
excerpt: La energía primaria, los vectores energéticos y el consumo final son tres contabilidades distintas, y mezclarlas produce la mayoría de los malos argumentos sobre energía. Esta página sigue la cadena de conversión desde el recurso hasta el uso final y señala dónde están realmente las pérdidas y los límites.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - energy-systems
  - primary-energy
  - energy-conversion
  - electrification
  - energy-statistics
related:
  - solar-photovoltaics-explained
  - wind-energy-physics
  - energy-storage-fundamentals
  - grid-integration-of-variable-renewables
  - capacity-factor-and-energy-metrics
---
Un sistema energético lleva tres libros de cuentas, y casi toda discusión confusa sobre energía nace de sacar un número de uno y usarlo en otro. El primero cuenta el recurso tal como se extrae o se capta — el carbón en la veta, el uranio en el mineral, los fotones sobre un panel. El segundo cuenta los vectores que mueven energía utilizable: electricidad, combustibles líquidos refinados, gas por gasoducto, calor en una red de distrito. El tercero cuenta lo que se entrega en el punto donde alguien quiere que se haga un trabajo — un horno, un motor, una pantalla. Cada conversión entre libros tiene un coste físico, y la magnitud de ese coste es el dato más informativo sobre una tecnología.

## Tres contabilidades, y por qué los totales nunca cuadran

La **energía primaria** es el contenido del recurso antes de la conversión. El **consumo final** es lo que llega al usuario. Entre ambos hay un sector de transformación que pierde una fracción grande y desigualmente repartida de la entrada, de modo que los dos totales difieren en una cantidad que depende mucho de la mezcla de tecnologías intermedias.

La magnitud de la brecha se ve mejor en lo poco de la energía entregada del mundo que llega en forma de electrones. El *World Energy Outlook 2025* de la Agencia Internacional de la Energía señala que la electricidad supone solo el 21 por ciento del consumo final total a escala mundial, pese a que el gasto en suministro eléctrico y electrificación de usos finales ya constituye la mitad de la inversión energética global. La mayor parte de la energía entregada sigue llegando como un combustible que se quema cerca de donde se hace el trabajo.

El lado del recurso presenta otra imagen. Las cuentas nacionales de la U.S. Energy Information Administration para 2024 sitúan el petróleo en el 38 por ciento del consumo de energía primaria, el gas natural en el 36 por ciento, la nuclear y las renovables en el 9 por ciento cada una, y el carbón en el 8 por ciento. Esas cuotas son cuotas de la energía que *entra* en el sistema, no del servicio que sale de él, y la diferencia importa porque los combustibles no se convierten a la misma tasa.

## Dónde desaparecen los julios

La generación eléctrica por combustión es donde ocurre la mayor pérdida individual en la mayoría de los sistemas nacionales, y es medible, no teórica. La EIA publica un consumo específico medio de operación — la energía térmica consumida por unidad de electricidad producida — para cada combustible de generación. Para 2024 las cifras son de 10 777 Btu por kilovatio-hora para el carbón, 7 754 para el gas natural, 11 200 para el petróleo y 10 443 para la nuclear.

Esos números se convierten directamente en rendimientos, porque un kilovatio-hora equivale a unos 3 412 Btu. El parque de carbón estadounidense entregó, por tanto, en torno al 32 por ciento de la energía química que consumió como electricidad en 2024; el parque de gas, dominado por ciclos combinados, en torno al 44 por ciento. La cifra nuclear de aproximadamente el 33 por ciento es un enunciado sobre la termodinámica del ciclo de vapor y no sobre el reactor, y arrastra consigo una convención contable: la EIA construye la media nuclear a partir del consumo específico *probado* medio ponderado que los operadores declaran en el formulario EIA-860, y no a partir de una cantidad de combustible consumida como en las medias fósiles. Cómo distorsionan esas convenciones las comparaciones entre generación térmica y no térmica es el asunto de la página complementaria sobre [cómo leer honestamente las estadísticas energéticas](/es/physics/energy/capacity-factor-and-energy-metrics).

Los convertidores no térmicos no tienen consumo específico alguno. Un módulo fotovoltaico convierte la energía de los fotones directamente en trabajo eléctrico sin un depósito caliente intermedio, y por eso su techo procede del balance detallado y no de Carnot, como expone el artículo sobre [el techo termodinámico de la conversión solar](/es/physics/thermodynamics/thermodynamic-limits-of-photovoltaics). Un rotor eólico extrae energía cinética de un fluido en movimiento y queda acotado por un argumento de masa y cantidad de movimiento. Ninguno de los dos dispositivos escapa al segundo principio; simplemente entran en él por un punto distinto.

## Un vatio no es un julio

El error de unidades de mayores consecuencias en el debate público sobre energía es tratar capacidad y generación como intercambiables. La energía es una cantidad, medida en julios o kilovatios-hora; la potencia es una tasa, medida en vatios, y el vatio se define como un julio por segundo. La distinción está fijada en las unidades básicas y derivadas del SI que mantiene la Oficina Internacional de Pesas y Medidas y publica a escala nacional el NIST, y no es cuestión de convención.

La consecuencia práctica es que un gigavatio de capacidad nominal y un gigavatio de otra clase de capacidad nominal entregan cantidades distintas de energía a lo largo de un año, y ninguna comparación de capacidades recupera la diferencia. La evaluación *Electricity 2026* de la AIE ilustra el mismo problema desde el lado del sistema: más de 2 500 GW de proyectos en el mundo — renovables, almacenamiento y grandes cargas como los centros de datos en conjunto — están detenidos en colas de conexión a red, una cifra en unidades de potencia que por sí sola nada dice sobre cuánta energía entregarían o consumirían esos proyectos, ni cuándo. La razón entre ambas es lo que cierra la brecha, y varía por tecnología, emplazamiento y año.

## Qué decide la ruta de conversión

Cada familia de tecnologías tiene un lugar característico donde su energía se pierde y una cosa característica que le impide escalar. Esas dos propiedades predicen más sobre la trayectoria de una tecnología que su coste.

| Ruta | Dónde está la pérdida dominante | Qué limita el despliegue |
| --- | --- | --- |
| Conversión fotovoltaica | La luz que el absorbedor no puede usar y el exceso de energía del fotón disipado como calor | Suelo, materiales y la distancia entre una potencia nominal y un rendimiento real |
| Extracción eólica | El flujo que debe quedar en movimiento, más la interacción de estela entre máquinas | Recurso eólico del emplazamiento, altura de buje y separación entre máquinas |
| Generación térmica | El calor rechazado que exige el ciclo de vapor o de gas | Suministro de combustible, agua de refrigeración y límites de temperatura del ciclo |
| Almacenamiento electroquímico | La parte de la electricidad almacenada que nunca se recupera, más la capacidad que una celda pierde calladamente con la edad | Coste por unidad de depósito, que es lo que encarece las duraciones largas |
| Vectores químicos | Penalizaciones de conversión acumuladas en cada paso de producción y reconversión | Densidad volumétrica, contención e idoneidad para el uso final |

Las páginas de apoyo de este grupo toman esas filas de una en una. El artículo sobre [contra qué se mide una potencia nominal fotovoltaica](/es/physics/energy/solar-photovoltaics-explained) sigue un fotón desde la absorción hasta la placa de características y explica por qué esa placa es un enunciado de laboratorio. La página sobre [la física de la captación eólica](/es/physics/energy/wind-energy-physics) deriva el techo de extracción y muestra por qué la ley cúbica en la velocidad del viento empujó a las máquinas a ser altas y anchas. El tratamiento del [almacenamiento electroquímico y mecánico](/es/physics/energy/energy-storage-fundamentals) sostiene que la duración, y no la potencia, es el parámetro que decide una aplicación. La página sobre [el hidrógeno como vector y no como fuente](/es/physics/energy/hydrogen-as-an-energy-carrier) rastrea la penalización de rendimiento en cada paso de la cadena. Y el artículo sobre [integrar producción variable en una red](/es/physics/energy/grid-integration-of-variable-renewables) retoma qué debe hacer de otro modo un sistema eléctrico cuando la generación depende del tiempo meteorológico.

## Las restricciones que aprietan antes que la física

Los límites físicos son reales, pero rara vez son los que deciden un calendario de despliegue. La previsión *Renewables 2025* de la AIE espera que las renovables variables suministren casi el 30 por ciento de la electricidad mundial hacia 2030, aproximadamente el doble de la cuota actual, con la fotovoltaica solar aportando por sí sola casi el 80 por ciento del incremento de capacidad. En la misma previsión, el vertido aumenta en muchos mercados, entre ellos China, Alemania, Brasil, Chile, el Reino Unido e Irlanda; las horas de precios negativos se han disparado en varios países, coincidiendo con el pico de generación solar; y las perspectivas de la eólica marina se han revisado a la baja en más de una cuarta parte — nada de lo cual se sigue de propiedad alguna de una turbina o de una celda.

La capacidad de red muestra el mismo patrón. La inversión en generación ha subido casi un 70 por ciento desde 2015 hasta cerca de un billón de dólares al año, mientras que el gasto anual en redes ha crecido a menos de la mitad de ese ritmo, hasta unos 400 000 millones de dólares; la AIE juzga que la inversión en redes debe aumentar aproximadamente otra mitad hacia 2030. Un sistema en el que los convertidores son baratos y los cables son la cola se comporta de forma distinta a uno donde los convertidores son el término restrictivo. Distinguir los límites que tienen una derivación de los que tienen una historia es el asunto de un análisis aparte sobre [qué restricciones de la transición energética son físicas](/es/insight/energy-transition-constraints-physical-and-institutional).

## Lo que esta contabilidad no puede decirle

Tres debilidades del marco conviene llevar encima siempre que se cite una cifra energética.

La primera es que los totales de energía primaria dependen de convenciones. Una agencia estadística debe decidir qué cuenta como «entrada» de una central hidráulica, eólica o solar que no consume combustible, y distintas agencias responden de distinto modo. Las comparaciones de cuotas de energía primaria entre fuentes incorporan, por tanto, una elección metodológica invisible en la cifra de titular.

La segunda es que las pérdidas de transformación descritas arriba son medias sobre parques heterogéneos. Una única unidad de ciclo combinado y una única caldera subcrítica antigua quedan lejos de la media del parque, y un consumo específico medio nacional se mueve cuando cambia el orden de mérito, no solo cuando mejora la tecnología.

La tercera es que las cifras prospectivas son salidas de escenarios, no pronósticos. El propio *World Energy Outlook 2025* de la AIE abarca un rango en el que la demanda mundial de energía crece unos 90 exajulios hasta 2035 bajo un conjunto de supuestos de política y unos 50 exajulios bajo otro — una diferencia de casi un factor de dos en el término de crecimiento, producida enteramente por supuestos y no por mediciones. Las emisiones de dióxido de carbono ligadas a la energía alcanzaron un récord de 38 gigatoneladas en 2024; hacia dónde vayan a partir de ahí es una variable de política, y cualquier trayectoria proyectada citada sin su etiqueta de escenario ha sido despojada de lo que la hacía significativa.

## Sources

1. **International Energy Agency** — [World Energy Outlook 2025, executive summary](https://www.iea.org/reports/world-energy-outlook-2025/executive-summary). La cuota del 21 por ciento de la electricidad en el consumo final total, cifras de inversión, crecimiento de la demanda por escenario y emisiones de CO₂ ligadas a la energía en 2024.
2. **International Energy Agency** — [Electricity 2026, executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Tasas de crecimiento de la demanda, capacidad detenida en colas de conexión e inversión de red necesaria.
3. **International Energy Agency** — [Renewables 2025, executive summary](https://www.iea.org/reports/renewables-2025/executive-summary). Cuota de renovables variables hacia 2030, trayectorias de capacidad solar y eólica, y aumento del vertido.
4. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Consumos específicos por combustible para 2014–2024, usados aquí para derivar los rendimientos de conversión del parque.
5. **U.S. Energy Information Administration** — [U.S. energy facts explained](https://www.eia.gov/energyexplained/us-energy-facts/). Cuotas del consumo de energía primaria por fuente y tratamiento de las pérdidas del sistema eléctrico.
6. **NIST Office of Weights and Measures** — [SI units](https://www.nist.gov/pml/owm/metric-si/si-units). Las siete unidades básicas del SI y las derivadas con nombre propio, entre ellas el julio y el vatio.
7. **Bureau International des Poids et Mesures** — [Measurement units](https://www.bipm.org/en/measurement-units). Las definiciones del SI en que se apoyan las unidades de energía y potencia.
8. **National Laboratory of the Rockies** — [Industrial Energy Storage Review](https://www.osti.gov/biblio/2473658). Clasificación de las tecnologías de almacenamiento por la forma de la energía almacenada y crecimiento proyectado del almacenamiento industrial.
