---
title: 'Calidad del aire: qué miden las estaciones y qué esconde el índice'
metaTitle: 'Calidad del aire: qué esconde el índice'
excerpt: Una medición reguladora del aire es una concentración más una forma estadística, y el índice construido encima solo conserva el peor contaminante. Ambos pasos descartan información que importa para leer cualquier afirmación sobre el aire.
type: expert
author: public-health-environment-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - air-quality-index
  - air-monitoring
  - criteria-pollutants
  - low-cost-sensors
  - ozone
related:
  - environmental-pollution-explained
  - particulate-matter-and-health-evidence
  - nitrogen-pollution-and-eutrophication
  - noise-and-light-pollution-ecology
pillar: environmental-pollution-explained
_bodyHash: 69292e5e
---

Una norma de calidad del aire nunca es solo una concentración. Es una concentración unida a un tiempo de promediado, a un estadístico y, por lo común, a una regla de promedio plurianual, y el estadístico hace tanto trabajo regulador como el número que lo precede. La norma estadounidense de ozono es de 0,070 partes por millón en ocho horas, pero la forma de la norma es el cuarto valor máximo diario de ocho horas más alto del año, promediado sobre tres años. Un emplazamiento puede por tanto registrar varios días por encima del nivel cada año y seguir en cumplimiento. Es una decisión de diseño deliberada, no un resquicio: tolera extremos meteorológicos raros mientras acota el patrón recurrente. También significa que «hoy se superó la norma» y «se incumplió la norma» son afirmaciones distintas.

Esta página sigue una medición desde el instrumento hasta el índice y señala lo que se pierde en cada etapa. El marco en el que se inserta —peligro frente a riesgo, meta sanitaria frente a límite factible— se expone en [el marco fuente, vía de exposición y receptor](/es/ecology/pollution/environmental-pollution-explained).

## Seis contaminantes y el estadístico unido a cada uno

Los contaminantes vigilados bajo una norma nacional se eligen porque están extendidos, bien caracterizados y son regulables, no porque sean los únicos que importan. Las normas primarias estadounidenses actuales (basadas en la salud) ilustran lo variadas que son las formas:

| Contaminante | Tiempo de promediado | Nivel | Forma |
| --- | --- | --- | --- |
| Monóxido de carbono | 8 horas | 9 ppm | no superable más de una vez al año |
| Dióxido de nitrógeno | 1 hora | 100 ppb | percentil 98 anual de los máximos diarios de 1 hora, promediado sobre 3 años |
| Ozono | 8 horas | 0,070 ppm | cuarto máximo diario anual más alto, promediado sobre 3 años |
| Partículas finas | 1 año | 9,0 µg/m³ | media anual, promediada sobre 3 años |
| Partículas finas | 24 horas | 35 µg/m³ | percentil 98, promediado sobre 3 años |
| Partículas gruesas (PM10) | 24 horas | 150 µg/m³ | no superable más de una vez al año en promedio sobre 3 años |
| Dióxido de azufre | 1 hora | 75 ppb | percentil 99 anual de los máximos diarios de 1 hora, promediado sobre 3 años |
| Plomo | 3 meses móviles | 0,15 µg/m³ | máximo de tres medias mensuales consecutivas en un periodo de 3 años |

Merece la pena extraer dos patrones. Los contaminantes cuya evidencia sanitaria descansa en la exposición crónica reciben medias anuales; aquellos cuya evidencia descansa en la respuesta aguda reciben percentiles altos de promedios cortos. Y toda norma reciente se expresa como promedio plurianual de un estadístico anual, lo que suaviza la variabilidad meteorológica pero también retrasa el momento en que un deterioro genuino se vuelve legalmente visible.

## Qué es una estación y qué se le permite ser a un sensor

Las mediciones reguladoras vienen de instrumentos designados como métodos federales de referencia o equivalentes bajo una reglamentación de ensayo que especifica el principio de medida, los niveles de interferencia admisibles y el desempeño en colocalización. Una medición de referencia de partículas finas basada en filtro es una determinación de masa: se aspira aire por una entrada selectiva por tamaño durante 24 horas y se pesa el filtro cargado. Es lenta, cara e inequívoca.

Los sensores ópticos de bajo coste no son nada de eso. Infieren la masa a partir de cuánta luz dispersan las partículas, lo que exige supuestos sobre distribución de tamaño, densidad e índice de refracción, supuestos que fallan cuando el aerosol cambia de carácter, como ocurre en el humo de incendios o con humedad alta, cuando las partículas captan agua y dispersan más de lo que su masa seca justifica. La EPA es explícita en que estos aparatos «no cumplirán los estrictos requisitos de los instrumentos de calidad del aire usados con fines reguladores», y sus objetivos de desempeño y protocolos de ensayo, publicados para ozono y partículas finas y ampliados tres años después, están escritos para lo que la agencia llama vigilancia suplementaria e informativa no reguladora.

La experiencia de campo añade una advertencia menos obvia. En un estudio comunitario en torno a viviendas del valle de San Joaquín, en California, el 91 % de los monitores de bajo coste ensayados siguió la media de los monitores casi exactamente en colocalización, con R² por encima de 0,99, aunque solo el 58 % tuvo pendientes dentro del 10 % de la unidad; aplicar factores de corrección derivados de la colocalización apenas movió la distribución de las concentraciones medidas: los aparatos eran precisos, y la corrección no era el problema limitante. La completitud de los datos sí lo era. Confiar solo en la transmisión inalámbrica de las unidades habría perdido más de la mitad del registro previsto, mientras que tarjetas de memoria a bordo elevaron la [tasa de éxito de recogida de datos por encima del 80 %](https://pmc.ncbi.nlm.nih.gov/articles/PMC12339596/). Con todo, la limitación más profunda de una red participativa no es nada de eso. Su geografía la determina quién compra y mantiene aparatos, no dónde la exposición es mayor, así que un mapa denso no es automáticamente representativo. La misma tensión entre cobertura y continuidad se examina en el análisis sobre [las redes de vigilancia ambiental que se adelgazan](/es/insight/environmental-monitoring-networks-are-thinning).

## El índice es una transformación, no una medición

El [índice de calidad del aire](/en/glossary/air-quality-index) convierte una concentración en un número de 0 a 500 para que contaminantes distintos se comparen en una sola escala. La conversión es lineal por tramos: truncar la concentración a una precisión especificada, hallar los dos puntos de corte que la enmarcan, interpolar entre los valores de índice asignados a esos puntos y redondear. Las categorías van de Buena (0-50), Moderada (51-100), Insalubre para grupos sensibles (101-150), Insalubre (151-200), Muy insalubre (201-300) a Peligrosa por encima de 300, con las concentraciones más allá del tope de la escala reportadas como «fuera del AQI».

Tres propiedades de esa construcción se pasan por alto de forma rutinaria.

**El índice conserva el peor contaminante y descarta los demás.** Se calculan subíndices para cada contaminante y el valor reportado es el más alto; el contaminante que lo produce se llama contaminante crítico o responsable. En el ejemplo trabajado de la propia agencia, un valor de ozono de ocho horas de 0,078 ppm arroja 126, y cuando también hay disponible un valor de partículas finas y uno de monóxido de carbono de 8,4 ppm, el índice reportado sigue siendo 126 con el ozono como responsable. Dos días pueden marcar ambos 126 con mezclas completamente distintas detrás, y el índice no puede distinguirlos.

**La escala se mueve cuando se mueve la norma.** Un valor de índice cercano a 100 corresponde aproximadamente a la norma de corto plazo de ese contaminante, así que cuando una norma se revisa, los puntos de corte la siguen. Cuando la norma anual de partículas finas se endureció a 9,0 µg/m³ en febrero de 2024, la frontera entre Buena y Moderada pasó de 12,0 a 9,0 µg/m³ y también se bajaron los puntos de corte superiores; la agencia señaló que muchas zonas podían esperar más días en la categoría Moderada como resultado. Los puntos de corte anteriores estaban en pie desde 2012. Una serie de índices comparada a través de esa frontera no compara lo mismo con lo mismo.

**El índice es un estadístico diario.** Está definido sobre máximos diarios o promedios diarios, y calcular uno a partir de datos horarios no es válido. Los mapas en tiempo real muestran por tanto otra magnitud, producida por un esquema de ponderación que usa ventanas de promediado más largas cuando el aire es estable —ocho horas para el ozono, doce para las partículas— y más cortas cuando cambia deprisa, tres horas para las partículas durante un incendio. Una lectura actual y un índice diario no son intercambiables.

Hay una cuarta pérdida, y es la mayor. El índice se reporta día a día, y el valor de un solo día no lleva información sobre la media anual, mientras que la evidencia de mortalidad descansa en gran medida en la exposición media de largo plazo, como expone [la evidencia sanitaria sobre partículas finas](/es/ecology/pollution/particulate-matter-and-health-evidence). La revisión de 2024 estrechó esa brecha para las partículas finas al anclar la frontera Buena/Moderada al nivel de la norma anual, pero lo que se reporta sigue siendo una afirmación sobre un solo día.

## Dos límites para el mismo aire

Los niveles guía de 2021 de la Organización Mundial de la Salud son de derivación sanitaria y no llevan restricción de viabilidad: 5 µg/m³ anual y 15 µg/m³ en 24 horas para partículas finas, 15 y 45 µg/m³ para PM10, y 10 µg/m³ anual para dióxido de nitrógeno. Los valores límite anuales vinculantes de la Unión Europea, en vigor desde 2015 y 2010 respectivamente, son de 25 µg/m³ para partículas finas y 40 µg/m³ para dióxido de nitrógeno, con un valor objetivo de ozono de 120 µg/m³ como máximo diario de ocho horas, permitiendo 25 días de superación promediados sobre tres años. Esos límites están a su vez en revisión: una Directiva de calidad del aire ambiente refundida entró en vigor en diciembre de 2024 y recorta más de la mitad el valor límite anual de partículas finas a partir de 2030, con dos años para que los Estados miembros la transpongan.

La consecuencia es aritmética más que científica. Al informar sobre ciudades europeas en 2024, la Agencia Europea de Medio Ambiente halló que casi ninguna parte de la población urbana estaba expuesta por encima de los valores límite de la UE para partículas finas o dióxido de nitrógeno, mientras que el 95,1 % estaba por encima del nivel guía de la OMS para partículas finas y el 81,0 % por encima de su guía para dióxido de nitrógeno. Los mismos datos de vigilancia, el mismo año, dos descripciones defendibles: una de cumplimiento y otra de exposición. Quien cite una fracción de la población que respira aire «inseguro» está eligiendo entre ellas, normalmente sin decirlo.

## El contaminante que se niega a caer

Los contaminantes regulados no han mejorado de manera uniforme, y la excepción es instructiva. Entre 1980 y 2024 los estadísticos nacionales estadounidenses de calidad del aire cayeron un 87 % para el monóxido de carbono, un 95 % para el dióxido de azufre de una hora y un 69 % para el dióxido de nitrógeno anual. El estadístico de ozono de ocho horas cayó un 29 % en el mismo periodo, y solo un 7 % desde 2010, pese a que las emisiones de sus dos principales familias de precursores, óxidos de nitrógeno y compuestos orgánicos volátiles, cayeron un 75 % y un 61 % respectivamente.

El ozono no se emite. Se produce fotoquímicamente a partir de esos precursores, y las tendencias observadas son la demostración más clara disponible de que la producción no es proporcional a ninguno de ellos. Un contaminante secundario rompe la intuición de que recortes proporcionales de emisión compran mejoras proporcionales del aire, y ninguna cantidad de vigilancia resuelve eso por sí sola: es una pregunta sobre química atmosférica, no sobre instrumentos. El amoniaco tiene un papel comparable en la formación de partículas secundarias, trazado en [la cascada del nitrógeno reactivo](/es/ecology/pollution/nitrogen-pollution-and-eutrophication).

La limitación restante es espacial. Las redes se ubican para representar poblaciones y detectar los contaminantes que las normas nombran, lo que deja mal resueltos los gradientes abruptos junto a las vías, las concentraciones interiores y las especies no reguladas. Una estación dice la verdad sobre el aire en su entrada; todo lo que va más allá es un modelo.

## Sources

1. **Agencia de Protección Ambiental de Estados Unidos** — [Tabla de NAAQS](https://www.epa.gov/criteria-air-pollutants/naaqs-table). Niveles, tiempos de promediado y formas estadísticas actuales de las normas primarias y secundarias estadounidenses.
2. **Agencia de Protección Ambiental de Estados Unidos** — [Objetivos de desempeño y protocolos de ensayo de sensores de aire](https://www.epa.gov/air-sensor-toolbox/air-sensor-performance-targets-and-testing-protocols). El estatus no regulador de los sensores de bajo coste y los protocolos de ensayo publicados.
3. **AirNow (programa interagencial estadounidense de calidad del aire)** — [Documento de asistencia técnica para el reporte diario de calidad del aire](https://www.airnow.gov/sites/default/files/2020-05/aqi-technical-assistance-document-sept2018.pdf). Ecuación del índice, procedimiento de puntos de corte, regla del contaminante crítico, ejemplo trabajado y esquema de ponderación en tiempo real.
4. **Agencia de Protección Ambiental de Estados Unidos** — [Actualizaciones finales del índice de calidad del aire para partículas](https://www.epa.gov/system/files/documents/2024-02/pm-naaqs-air-quality-index-fact-sheet.pdf). La revisión de la norma en 2024 y los cambios resultantes en los puntos de corte del índice.
5. **Organización Mundial de la Salud** — [Tipos de contaminantes](https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/types-of-pollutants). Los niveles guía mundiales de calidad del aire de 2021.
6. **Comisión Europea** — [Normas de calidad del aire de la UE](https://environment.ec.europa.eu/topics/air/air-quality/eu-air-quality-standards_en). Valores límite y objetivo vinculantes y sus fechas de aplicación.
7. **Agencia Europea de Medio Ambiente** — [Superación de las normas de calidad del aire en Europa](https://www.eea.europa.eu/en/analysis/indicators/exceedance-of-air-quality-standards). Exposición de la población urbana frente a las normas de la UE y a los niveles guía de la OMS.
8. **Agencia de Protección Ambiental de Estados Unidos** — [Resumen nacional de calidad del aire](https://www.epa.gov/air-trends/air-quality-national-summary). Tendencias de largo plazo de concentraciones y emisiones para los contaminantes criterio.
9. **Aerosol and Air Quality Research** — [Practical guidance for using PurpleAir particle monitors for indoor and outdoor measurements in community field studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC12339596/). Precisión en colocalización, factores de corrección y tasas de completitud de datos en un despliegue residencial.
10. **Comisión Europea** — [Nuevas reglas de contaminación entran en vigor para un aire más limpio en 2030](https://environment.ec.europa.eu/news/new-pollution-rules-come-effect-cleaner-air-2030-2024-12-10_en). Entrada en vigor de la Directiva refundida, el recorte del valor límite anual de partículas finas y el plazo de transposición.
