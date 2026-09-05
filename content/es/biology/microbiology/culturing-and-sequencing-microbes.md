---
title: 'Estudiar microbios: por qué el método decide lo que se encuentra'
metaTitle: 'Estudiar microbios: el método decide el resultado'
excerpt: Una placa, un cebador de PCR y un ensamblador de metagenoma devuelven cada uno un subconjunto distinto de la misma comunidad. Esta página expone qué selecciona cada método microbiológico principal y los estándares de calidad que hacen publicable un genoma sin organismo.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - culturing
  - amplicon-sequencing
  - metagenome-assembled-genomes
  - single-cell-genomics
  - culturomics
related:
  - microbiology-explained
  - microbiomes-and-host-microbe-interactions
  - microbial-biogeochemistry
  - dna-sequencing-technologies
pillar: microbiology-explained
---

La microbiología tiene un problema recurrente que la mayoría de los campos de la biología no tienen: no se puede ver a los organismos hacer nada útil, así que todo hecho sobre ellos llega a través de un instrumento que admite a unos y excluye al resto. Una colonia en agar, una lectura de secuencia de un producto de PCR y un genoma agrupado a partir de un metagenoma son tres filtros distintos, y la composición que reporta cada uno es en parte una descripción del filtro. Saber cuál es cuál es casi todo lo que separa una afirmación defendible de ecología microbiana de un artefacto.

Los organismos y su rango metabólico se tratan en la [introducción a la vida microbiana](/es/biology/microbiology/microbiology-explained). Lo que sigue es una página de métodos, organizada por lo que cada enfoque pierde sistemáticamente.

## Qué selecciona una placa

La **[anomalía del recuento en placa](/es/glossary/great-plate-count-anomaly)** —la vieja observación de que crecen muchas menos colonias de una muestra ambiental que células contables al microscopio— suele presentarse como un enigma. Se lee mejor como una lista. Una placa estándar ofrece una fuente de carbono a una concentración, una tensión de oxígeno, una temperatura, un pH, ningún organismo compañero y una incubación de unos días. Un organismo que necesita un socio sintrófico que retire el hidrógeno, o cuyo tiempo de duplicación es de semanas, o que resulta inhibido por las mismas concentraciones de nutrientes con que se hace un medio rico, no aparecerá; no porque sea incultivable en principio, sino porque esas condiciones no se ofrecieron.

El tamaño de la brecha resultante depende por completo del hábitat, y esa es la parte que suele omitirse. Un análisis de 2018 en *mSystems* comparó secuencias metagenómicas del gen del ARNr 16S —mucho menos sesgadas por el cultivo que los muestreos amplificados con cebadores— con sus parientes cultivados más cercanos en muchos ambientes. Agua de mar, agua dulce, subsuelo terrestre, suelo, sistemas hipersalinos, sedimento marino, fuentes termales, chimeneas hidrotermales, nieve y biorreactores estaban dominados por grupos no cultivados, con un 22 a 87 por ciento perteneciente a géneros e incluso clases no cultivadas. Los ambientes humanos y asociados al humano fueron la excepción, dominados por géneros cultivados en un 45 a 97 por ciento. A escala global, los autores estimaron que los géneros no cultivados suponen alrededor de 7,3 × 10²⁹ células, aproximadamente el 81 por ciento del total, y que los filos no cultivados están sobrerrepresentados en metatranscriptomas frente a metagenomas: evidencia de que esas células no solo están presentes sino activas.

La consecuencia práctica es que la literatura del microbioma humano y la de microbiología ambiental afrontan versiones distintas del mismo problema, y los resultados sobre lo bien que la secuenciación sigue al cultivo no se trasladan entre ellas.

## Los sesgos que arrastra un gen marcador

La secuenciación de amplicones sustituye la placa por un par de cebadores, un filtro de otra forma.

- **Cobertura de los cebadores.** Ningún juego de cebadores casa con todas las dianas; los linajes con desajustes en la región de unión quedan subrepresentados o ausentes, y los linajes afectados difieren entre juegos, así que dos estudios de la misma muestra pueden discrepar sistemáticamente.
- **Número de copias.** El operón de ARNr aparece en varias copias, de 1 a 15 en bacterias y de 1 a 4 en arqueas. Una secuencia recuperada con frecuencia puede ser un taxón de muchas copias con abundancia modesta o uno de pocas copias con abundancia alta, y corregirlo exige conocer el número de copias de organismos que suelen ser los menos caracterizados.
- **Quimeras y error.** La PCR genera secuencias híbridas a partir de productos de extensión parciales; inflan la diversidad aparente si no se retiran, y la retirada misma descarta algunas secuencias reales.
- **Región y resolución.** Distintas regiones variables del mismo gen resuelven distintos taxones, de modo que la profundidad taxonómica de un resultado es función del fragmento amplificado.

Ninguno es fatal, y todos son corregibles en principio. Lo que impiden es tratar una tabla de abundancias relativas como una observación directa, limitación que se suma al problema composicional examinado en [qué establecen los muestreos de microbioma](/es/biology/microbiology/microbiomes-and-host-microbe-interactions).

## Genomas sin organismos

La metagenómica shotgun elimina el cebador, y el agrupamiento computacional reúne después los fragmentos ensamblados en genomas putativos. Un **genoma ensamblado a partir de metagenoma** es una hipótesis sobre qué contigs vinieron de una población, y su utilidad depende de ser honesto acerca de lo buena que es esa hipótesis.

El Genomic Standards Consortium fijó ese estándar en 2017. Un borrador de genoma ensamblado o de genoma amplificado único de alta calidad debe estar completo en más del 90 por ciento con menos del 5 por ciento de contaminación, y debe codificar los genes de ARNr 23S, 16S y 5S más ARNt de al menos 18 de los 20 aminoácidos. Un borrador de calidad media está completo al menos al 50 por ciento con menos del 10 por ciento de contaminación; por debajo del 50 por ciento es un borrador de baja calidad. Completitud y contaminación son a su vez estimaciones, derivadas de genes marcadores esperados en copia única, lo que las hace menos fiables justo para los linajes profundamente nuevos que hacen valioso el agrupamiento, porque los conjuntos de marcadores se construyeron a partir de parientes cultivados.

La escala que alcanzan estos métodos es real. La colección Unified Human Gastrointestinal Genome, publicada en *Nature Biotechnology* en 2021, ensambló 204.938 genomas no redundantes que representan 4.644 procariotas intestinales y más de 170 millones de secuencias proteicas. Más del 70 por ciento de esas especies carece de representante cultivado, y el 40 por ciento de las proteínas no tiene anotación funcional. La genómica de célula única ofrece una vía complementaria —clasificar una célula, amplificar su genoma, secuenciarlo— que rinde un genoma de un solo organismo sin ambigüedad pero por lo general incompleto, y se califica con los mismos estándares.

Las bases de datos de referencia ponen otro techo: la asignación taxonómica solo puede situar una secuencia frente a lo que se ha depositado. La colección RefSeq del NCBI contaba con 182.465 organismos en la versión 236 de julio de 2026, de toda la vida. Cada lectura «no asignada» de un muestreo es una afirmación sobre esa colección tanto como sobre la muestra.

## El cultivo regresó

La respuesta a todo esto no fue abandonar el cultivo sino industrializarlo. La **culturómica** multiplica el número de condiciones —cientos de medios, atmósferas, tiempos de incubación y pasos de enriquecimiento— y criba las colonias resultantes por espectrometría de masas y secuenciación. Una línea paralela usó cultivo fenotípico dirigido informado por datos metagenómicos: un estudio de 2016 en *Nature* aisló 137 especies bacterianas de muestras fecales humanas sanas, las archivó como cultivos puros e infirió del análisis genómico y fenotípico que al menos el 50 a 60 por ciento de los géneros bacterianos intestinales forman esporas resistentes especializadas en la transmisión de huésped a huésped, lo que también es una razón plausible de que tantos anaerobios intestinales resultaran cultivables al fin.

Una salvedad debe constar. Un artículo temprano y muy citado de culturómica, publicado en *Nature Microbiology* en 2016, fue retractado en noviembre de 2024. El motivo declarado fue documental y no microbiológico: los autores no pudieron aportar prueba de aprobación ética en los países adicionales de los que se habían recogido muestras, más allá de la aprobación francesa que el artículo citaba. Varios autores discreparon de la retractación. El propio enfoque de cultivo ha sido reproducido por otros grupos, pero quien rastree la literatura se topará con una referencia fundacional retractada, y es mejor saber por qué.

## Qué significa esto para leer un resultado

Los métodos no son intercambiables, y el desajuste entre ellos es informativo y no embarazoso. Un taxón abundante en un muestreo de amplicones y ausente de un metagenoma puede ser un artefacto de número de copias. Una capacidad metabólica inferida de un genoma ensamblado es una capacidad, no una actividad: la distancia entre ambas es el tema de [la biogeoquímica microbiana](/es/biology/microbiology/microbial-biogeochemistry). Y un muestreo de un hábitat poco estudiado reportará alta novedad en parte porque allí las bases de referencia son delgadas.

La misma lógica que los ecólogos aplican al esfuerzo de muestreo en [los recuentos de especies](/es/ecology/biodiversity/species-richness-explained) vale aquí con más fuerza, porque la probabilidad de detección de un taxón microbiano depende no solo de cuánto se buscó sino de con cuál de varios instrumentos incompatibles se buscó. Las mejoras llegan tanto del lado de la plataforma como de la biología, como cubre [tecnologías de secuenciación de ADN](/es/biology/biotechnology/dna-sequencing-technologies); las lecturas más largas acortan la brecha de ensamblaje, pero no dicen qué hace un organismo.

## Sources

1. **mSystems** — [Phylogenetically novel uncultured microbial cells dominate Earth microbiomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6156271/). Fracciones no cultivadas por hábitat, estimaciones globales de células y evidencia de actividad por metatranscriptomas.
2. **Nucleic Acids Research** — [rrnDB: improved tools for interpreting rRNA gene abundance in bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383981/). Rangos de número de copias del operón de ARNr y el sesgo que introducen en los muestreos de amplicones.
3. **Nature Biotechnology** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). Umbrales de completitud, contaminación y genes marcadores para reportar genomas ensamblados.
4. **Nature Biotechnology** — [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7801254/). Recuentos de genomas y proteínas, y la parte de especies sin representante cultivado.
5. **Nature** — [Culturing of 'unculturable' human microbiota reveals novel taxa and extensive sporulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4890681/). Cultivo fenotípico dirigido de 137 especies y la prevalencia de la esporulación.
6. **Nature Microbiology** — [Retraction note: Culture of previously uncultured members of the human gut microbiota by culturomics](https://pmc.ncbi.nlm.nih.gov/articles/PMC13179128/). La retractación de 2024 y sus motivos declarados.
7. **NCBI (National Library of Medicine)** — [Reference Sequence (RefSeq) database](https://www.ncbi.nlm.nih.gov/refseq/). Recuentos de organismos y registros de la versión 236 que sustentan la asignación taxonómica.
