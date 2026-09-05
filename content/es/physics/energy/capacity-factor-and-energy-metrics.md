---
title: 'Leer estadísticas de energía: factor de capacidad, LCOE y las métricas que engañan'
metaTitle: 'Factor de capacidad, LCOE y las métricas que engañan'
excerpt: Potencia nominal, factor de capacidad, coste nivelado y energía primaria son cuatro cuentas distintas del mismo parque, y cada una arrastra una convención capaz de mover un titular sin que cambie nada físico.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - capacity-factor
  - levelised-cost
  - energy-statistics
  - primary-energy
  - electricity-generation
related:
  - energy-systems-explained
  - grid-integration-of-variable-renewables
  - wind-energy-physics
  - solar-photovoltaics-explained
pillar: energy-systems-explained
---

En 2025 el parque eólico estadounidense a escala de servicio público promedió 154,6 GW de potencia con un [factor de capacidad](/es/glossary/capacity-factor) del 34,2 por ciento, según las cifras preliminares del *Electric Power Monthly* de agosto de 2026. El parque fotovoltaico promedió 133,9 GW al 24,4 por ciento. El parque nuclear promedió 98,4 GW al 91,0 por ciento. Multiplique cada par y la potencia media entregada sale en 52,9 GW del eólico, 32,7 GW del solar y 89,6 GW del nuclear: con alrededor de un tercio de la potencia nominal combinada de los otros dos, el parque nuclear produjo más electricidad que ambos juntos.

Ninguna de esas cifras está en disputa y todas vienen de la misma publicación mensual. La comparación sorprende porque la potencia se cita mucho más a menudo que la producción, y la razón entre ambas varía casi en un factor de cuatro solo entre esos tres parques, y bastante más en el conjunto de las tecnologías de generación. La distinción entre una cantidad y una tasa se desarrolla en el tratamiento de [trabajo, energía y potencia como magnitudes distintas](/es/physics/mechanics-waves/energy-work-and-power); lo que sigue trata de las cuatro razones sobre las que gira de verdad la información energética, y de las convenciones enterradas en cada una. Están aguas abajo de la contabilidad de conversión descrita en la panorámica de [cómo se organiza un sistema energético](/es/physics/energy/energy-systems-explained).

## De qué es razón la razón

El factor de capacidad es la generación neta en un periodo dividida por lo que la misma central habría producido funcionando de continuo a su potencia nominal. Ambos términos de esa fracción son convenciones.

El numerador es la generación *neta*, tras el consumo propio de la central. El denominador es una potencia nominal, y la Energy Information Administration estadounidense la construye a partir de la capacidad de verano ajustada en el tiempo: la potencia nominal de verano de las unidades que operaron el mes entero, excluyendo las que arrancaron o se retiraron a mitad de mes. Las potencias de verano son conservadoras para la central térmica, porque el desempeño del condensador y de la turbina mejora con el frío. Por eso el factor de capacidad mensual del parque nuclear alcanzó el 99,0 por ciento en diciembre de 2025 y el 100,0 por ciento en enero de 2026. Un parque de reactores no está superando su límite físico; está superando una potencia nominal definida para un día caluroso.

| Tecnología (2025, Estados Unidos, escala de servicio) | Factor de capacidad | Qué lo fija |
| --- | --- | --- |
| Nuclear | 91,0 % | Solo recargas y paradas de mantenimiento |
| Geotérmica | 65,9 % | Recurso y disponibilidad de la planta |
| Gas natural, ciclo combinado | 58,4 % | Economía de despacho frente al precio del combustible |
| Carbón | 48,7 % | Economía de despacho; posición en el orden de mérito |
| Hidroeléctrica | 35,3 % | Disponibilidad de agua y almacenamiento estacional |
| Eólica | 34,2 % | Recurso eólico y cizalladura a altura de buje |
| Fotovoltaica | 24,4 % | Luz diurna, estación y latitud |
| Gas natural, turbina de vapor | 19,8 % | Servicio de reserva y punta |
| Gas natural, turbina de combustión | 14,1 % | Servicio de punta |
| Petróleo, turbina de vapor | 11,3 % | Rara vez económico de operar |

## Tres razones distintas por las que una cifra es baja

Un factor de capacidad bajo suele leerse como un defecto. Es un síntoma con al menos tres causas distintas, y el diagnóstico importa más que el número.

La prueba más clara está dentro de un mismo combustible. El gas natural aparece tres veces en la tabla anterior, al 58,4, 19,8 y 14,1 por ciento. El combustible es idéntico; lo que difiere es la eficiencia térmica y por tanto la posición en el orden de mérito. Una unidad de ciclo combinado es lo bastante eficiente para funcionar casi siempre; una turbina de combustión existe para cubrir las horas en que no hay nada más barato disponible, y hacerla funcionar mucho más significaría que el sistema tiene un problema. Su 14,1 por ciento es la intención de diseño, no bajo rendimiento.

La limitación por recurso es la segunda causa y se aplica a eólica, solar e hidráulica, donde la entrada no es gestionable. Es una propiedad del emplazamiento y de la máquina, trazada para las turbinas en la explicación de [por qué la producción escala con el cubo de la velocidad del viento](/es/physics/energy/wind-energy-physics) y para los paneles en la discusión de [la brecha entre la potencia nominal de un módulo y su producción en campo](/es/physics/energy/solar-photovoltaics-explained).

La disponibilidad es la tercera. El factor de capacidad mensual del parque nuclear estadounidense cayó al 80,9 por ciento en octubre de 2025 y al 84,9 por ciento el mayo anterior, ambas estaciones intermedias, cuando suelen programarse las paradas de recarga. Es un calendario de mantenimiento asomando por una estadística de rendimiento.

## Una media anual esconde la forma que importa

Promediar un año de producción horaria en un solo número descarta la propiedad que más importa a un sistema eléctrico: cuándo llega la energía.

A lo largo de 2025 el factor de capacidad mensual del parque fotovoltaico fue del 13,7 por ciento en diciembre al 32,4 por ciento en julio. El eólico fue al revés, del 22,9 por ciento en septiembre al 44,2 por ciento en marzo. La producción hidroeléctrica pasó del 26,6 por ciento en septiembre al 41,0 por ciento en mayo. Cada cifra anual oculta un vaivén de alrededor de un factor de dos, y los vaivenes no están en fase entre sí ni con la demanda. Un factor de capacidad anual no puede decir si un parque contribuye en las horas de tensión del sistema, cuestión aparte que aborda el crédito de capacidad y se retoma en la página sobre [qué le cuesta la variabilidad a un sistema eléctrico](/es/physics/energy/grid-integration-of-variable-renewables).

## El coste nivelado es una razón descontada, y el tipo hace el trabajo

El [coste nivelado de la electricidad](/en/glossary/levelised-cost) divide el coste descontado de vida útil de una planta por su generación descontada de vida útil. Ese segundo descuento es el que se olvida: un megavatio-hora producido en el año 20 cuenta menos que uno producido en el año 2, de modo que la tasa de descuento penaliza dos veces a los activos de larga vida e intensivos en capital.

El estudio de costes de la Agencia Internacional de la Energía, sobre 243 plantas en 24 países, adopta el 7 por ciento como tasa de descuento de referencia. Su propio análisis de sensibilidad muestra lo que compra esa elección: al 3 por ciento, la nuclear cae por debajo del carbón y el gas; a las tasas del 7 al 10 por ciento que asocia a entornos de mayor riesgo, una nuclear de nueva construcción cuesta más que las alternativas fósiles. La tecnología, el emplazamiento y la ingeniería son idénticos en ambos casos. Solo cambió el coste supuesto del dinero.

Esa sensibilidad no es hipotética. Un análisis en *iScience* sobre condiciones de financiación modela tipos de interés reales subiendo del −0,5 por ciento al 2,5 por ciento entre 2020 y 2024, siguiendo el Annual Technology Baseline del National Renewable Energy Laboratory, y calcula que los mayores costes de financiación añadieron un 18 por ciento al coste nivelado de la fotovoltaica estadounidense —un 12 por ciento con créditos fiscales— pero solo un 9 por ciento a una turbina de gas de ciclo combinado. La asimetría se sigue directamente de la intensidad de capital: una tecnología cuyo coste está casi todo por adelantado es un activo de tipo bono, y su coste de titular se mueve con el mercado de bonos. El mismo estudio reporta un coste medio ponderado del capital que varía varios puntos porcentuales entre países para la misma tecnología, lo que basta por sí solo para reordenar una tabla de costes sin ninguna diferencia de ingeniería detrás.

## Lo que queda fuera de la valla

El coste nivelado es una métrica en la frontera de la planta, y la agencia que lo publica lo dice: se aplica al nivel de la planta individual y no aborda el valor que una tecnología de generación aporta al sistema. Dos plantas con costes nivelados iguales no son igual de útiles si una produce cuando los precios son altos y la otra no, y por eso el mismo informe introdujo una métrica ajustada por valor junto a la convencional.

Un modelo publicado en *Nature Communications* pone números a la divergencia para la solar europea. En sus escenarios, los valores de mercado fotovoltaicos caen de alrededor del 50 por ciento del precio medio de bloque plano en un caso de baja penetración al 19 por ciento en uno de alta penetración, solo porque la producción se concentra en las mismas horas en todo el parque. El vertido en el mismo modelo llega a 234 TWh para 2040 en una configuración y a 131 TWh en otra que reparte la generación a lo largo del día. Una métrica de coste calculada por megavatio-hora generado no ve nada de esto, porque cuenta los megavatios-hora vertidos y de bajo valor igual que el resto.

## Energía primaria: la convención fija el titular

La última de las cuatro métricas es aquella en que la aritmética es trivial y la convención es decisiva. Un kilovatio-hora de electricidad contiene 3.412 Btu. Una central térmica con un consumo específico de 10.500 Btu por kilovatio-hora tiene un 33 por ciento de eficiencia; una de 7.500 Btu por kilovatio-hora, un 45 por ciento.

Pregunte ahora cuánta energía *primaria* consumió un parque eólico. No hay combustible, así que la respuesta es una elección. Contar la electricidad por su propio contenido energético valora un teravatio-hora eólico en 3.412 Btu por kilovatio-hora. Contar en cambio la energía fósil que habría hecho falta quemar para generar la misma electricidad la valora en algo cercano al consumo específico de una térmica: alrededor de tres veces más Btu por exactamente la misma electricidad entregada. Ninguna convención es errónea. Pero una cuota renovable de energía primaria calculada de un modo no es comparable con otra calculada del otro, y la diferencia basta para cambiar si una transición parece rápida o lenta. Cualquier cifra de la cuota de una fuente en la energía *primaria* que no nombre su convención ha sido despojada de lo que la hace significativa.

## Leer una cifra con honestidad

Cuatro comprobaciones cubren la mayoría de los fallos anteriores. Nombrar el producto y el periodo, porque una cifra mensual y una anual del mismo parque difieren de forma rutinaria en diez puntos porcentuales o más. Comprobar la frontera: los factores de capacidad de esta página cubren solo generadores a escala de servicio público, así que la generación distribuida en tejado queda por completo fuera. Comprobar la añada: la administración marca 2024 y anteriores como definitivos y 2025 en adelante como preliminares, y los valores preliminares se mueven. Y tratar cualquier cifra de coste como condicional a una tasa de descuento que rara vez se imprime a su lado.

Esas salvedades son justo lo que tiende a caerse entre un conjunto de datos y un titular, el patrón trazado en el análisis de [qué se pierde camino de la publicación](/es/insight/uncertainty-lost-between-dataset-and-headline). Nada de esto vuelve inútiles las métricas: factor de capacidad, coste nivelado y energía primaria responden cada una a una pregunta real, y el fallo está en hacerle a una la pregunta que pertenece a otra. El hábito que lo evita es la disciplina ordinaria de [enunciar qué puede sostener una medición](/es/physics/mechanics-waves/measurement-uncertainty-explained), aplicada a estadísticas publicadas y no a instrumentos.

## Sources

1. **US Energy Information Administration** — [Electric Power Monthly, tabla 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Factores de capacidad anuales y mensuales y capacidad ajustada en el tiempo para generadores no fósiles a escala de servicio.
2. **US Energy Information Administration** — [Electric Power Monthly, tabla 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Factores de capacidad anuales para carbón, ciclo combinado, turbina de combustión, turbina de vapor y petróleo.
3. **US Energy Information Administration** — [What is the efficiency of different types of power plants?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Consumo específico y conversión entre consumo específico y eficiencia térmica.
4. **US Energy Information Administration** — [British thermal units](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php). La equivalencia de 3.412 Btu de un kilovatio-hora.
5. **Agencia Internacional de la Energía y Agencia de Energía Nuclear de la OCDE** — [Projected Costs of Generating Electricity 2020](https://www.iea.org/reports/projected-costs-of-generating-electricity-2020). Tasa de descuento de referencia, sensibilidad a la tasa entre tecnologías y alcance de la métrica a nivel de planta.
6. **iScience** — [Financing costs and the competitiveness of renewable power](https://pmc.ncbi.nlm.nih.gov/articles/PMC12677178/). Movimiento de los tipos de interés reales, efecto asimétrico de los costes de financiación sobre solar y gas, y coste del capital por país.
7. **Nature Communications** — [Impacts of large-scale deployment of vertical bifacial photovoltaics on European electricity market dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303785/). Valores de mercado fotovoltaicos modelados frente a precios medios, y volúmenes de vertido por configuración de despliegue.
