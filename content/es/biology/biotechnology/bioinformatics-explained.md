---
title: 'Bioinformática: cuatro inferencias entre el secuenciador y el resultado'
metaTitle: 'Bioinformática: cuatro inferencias tras una secuenciación'
excerpt: 'Los datos de secuencia solo se convierten en un hallazgo tras cuatro inferencias: alineamiento, ensamblaje, anotación y filtrado estadístico. Esta página recorre esos cuatro pasos y el modo característico en que falla cada uno.'
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - sequence-alignment
  - genome-assembly
  - functional-annotation
  - false-discovery-rate
  - computational-biology
related:
  - dna-sequencing-technologies
  - protein-structure-prediction
  - genome-wide-association-studies-explained
  - what-is-a-genome
pillar: biotechnology-explained
_bodyHash: d859c696
---

La versión 273 de GenBank, publicada en agosto de 2026, contiene 8,236,878,868,450 bases repartidas en 267,383,895 registros de secuencia, y su división whole-genome shotgun contiene otras 50,829,714,144,609 bases en más de 5.1 mil millones de registros. El Sequence Read Archive del NCBI, que almacena la salida bruta en lugar de los registros curados, había superado 91 petabases en el último punto de su serie de crecimiento publicada, en febrero de 2024. Nada de eso es un resultado. Lo es solo después de que un programa haya decidido de dónde procede cada lectura, qué forman las lecturas al ensamblarse, qué es probable que haga la secuencia ensamblada y cuáles de las diferencias entre dos muestras merecen comunicarse. Son cuatro inferencias distintas, y cada una tiene su propia forma de equivocarse.

Los instrumentos que producen las lecturas —y el modo en que difieren sus longitudes de lectura y sus perfiles de error— son el objeto de la página complementaria sobre [las plataformas de secuenciación y para qué sirve cada una](/es/biology/biotechnology/dna-sequencing-technologies). Lo que sigue se sitúa aguas abajo de ellos, en la capa que convierte la señal en afirmación y de la que depende hoy buena parte de la [caja de herramientas biotecnológica moderna](/es/biology/biotechnology/biotechnology-explained).

## El alineamiento puntúa la similitud frente a una búsqueda, no frente a la biología

El alineamiento óptimo por pares está resuelto en un sentido estrecho. La programación dinámica —global en la formulación de Needleman–Wunsch, local en la de Smith–Waterman— devuelve el alineamiento de mayor puntuación bajo un esquema de puntuación elegido, a un coste proporcional al producto de las longitudes de las dos secuencias. Frente a una base de datos de cientos de millones de registros ese coste es inasumible, de modo que la búsqueda práctica es heurística: sembrar en coincidencias exactas o casi exactas cortas, extender las prometedoras y no examinar nunca la mayor parte de la base de datos.

De ahí se siguen dos consecuencias, y ambas se pierden con facilidad. La puntuación misma depende de la matriz de sustitución y de las penalizaciones por hueco, que juntas codifican un supuesto sobre cuán distantes se espera que estén las secuencias; cambie el supuesto y el orden de los aciertos puede cambiar. Y la significación estadística asociada a un acierto depende del tamaño del espacio explorado, de manera que el mismo par de secuencias resulta menos sorprendente a medida que la base de datos crece. Una coincidencia que superaba el umbral frente a una base de datos de un millón de entradas no tiene por qué superarlo frente a una de doscientos millones. Lo que informa una puntuación de alineamiento es cuán inusual es una similitud *dada esta búsqueda*, que no es la misma pregunta que si dos moléculas están emparentadas.

## Donde el grafo de ensamblaje se ramifica

El ensamblaje reconstruye secuencias largas a partir de observaciones cortas construyendo un grafo —de solapamientos entre lecturas, o de palabras de longitud fija en la formulación de De Bruijn— y hallando después un camino a través de él. Una repetición más larga que las lecturas que la abarcan produce un punto de ramificación sin ninguna evidencia local sobre qué dirección tomar. Los desenlaces habituales son el colapso, en el que varias copias de una repetición se funden en una sola, y la fragmentación, en la que el ensamblaje se detiene en el límite.

Durante dos décadas la referencia humana arrastró las consecuencias de eso, y la medida más clara de ello es el contenido en duplicaciones segmentarias: bloques largos y casi idénticos que son precisamente lo que colapsa un ensamblador limitado por las repeticiones. GRCh38 contenía 151.71 megabases de esa secuencia; el primer ensamblaje completo contiene 201.93, un tercio más. En las regiones donde la referencia antigua no tiene ningún alineamiento primario, el ensamblaje completo anota 1,956 genes.

La cuestión metodológica no es que la referencia anterior se construyera con descuido. Es que las regiones irresolubles estaban ausentes en lugar de señaladas, de modo que una consulta que allí no devolvía nada resultaba idéntica a una consulta que no devolvía nada en ningún otro sitio. La ausencia en una referencia se lee como ausencia en la biología mientras nada marque la diferencia, y durante la mayor parte del periodo en cuestión nada lo hacía. El mismo problema en una comunidad mixta, donde no hay referencia alguna, es lo que los niveles de calidad de los [genomas ensamblados a partir de metagenomas](/es/biology/biotechnology/metagenome-assembled-genomes-and-their-quality) existen para acotar.

## La mayor parte de la anotación se hereda, no se observa

La palabra «anotación» sugiere observación. Casi nunca lo es. La función se asigna de forma abrumadora por transferencia —una secuencia nueva se parece a una caracterizada, así que hereda la descripción de esta— y la etiqueta resultante queda entonces disponible como evidencia para la transferencia siguiente.

La escala de la asimetría es descarnada. UniProtKB tenía unos 246 millones de registros de secuencia en la versión 2024_04, y su sección revisada manualmente se mide en centenares de miles. La anotación automática es lo que llena el hueco: incorporar un solo recurso de firmas al anotador basado en reglas de UniProt generó 9,141 reglas nuevas y 119,579,654 predicciones nuevas que cubren más de 20 millones de secuencias, y un sistema de nomenclatura por aprendizaje automático suministró nombres de proteína para más de 28 millones de entradas antes etiquetadas como no caracterizadas.

El modo de fallo de la transferencia se midió directamente en un estudio de 37 familias de enzimas con fuerte cobertura experimental. La sección curada manualmente de UniProtKB mostró una anotación errónea cercana a cero para la mayoría de las familias, mientras que las bases de datos anotadas automáticamente promediaron entre el 5 y el 63 por ciento en las superfamilias examinadas; en 10 de las 37 familias, la anotación errónea superó el 80 por ciento en al menos una base de datos. La mayoría de los errores fueron de **sobrepredicción** —asignar una función más específica de lo que la evidencia sostiene— y la tasa creció de forma sostenida entre 1993 y 2005, a medida que cada etiqueta equivocada se convertía en plantilla para la siguiente. La estructura tridimensional predicha ofrece ahora una línea de evidencia en parte independiente, con las salvedades importantes expuestas en [qué puede y qué no puede establecer la predicción de estructura](/es/biology/biotechnology/protein-structure-prediction).

## Contar las hipótesis que de verdad se pusieron a prueba

Los análisis ómicos ponen a prueba cantidades enormes de hipótesis a la vez, y la aritmética de eso es implacable. El GWAS Catalog, en su versión de agosto de 2026, recoge 1,191,572 asociaciones comunicadas procedentes de 7,797 publicaciones que cubren 562,145 variantes: un corpus construido probando cientos de miles de variantes por estudio frente a cada rasgo.

Dos correcciones son de uso corriente y responden a preguntas distintas. El control del error por familia exige una probabilidad baja de *cualquier* falso positivo, lo que resulta apropiado cuando una sola afirmación equivocada sale cara. El control de la tasa de falsos descubrimientos, en la formulación de Benjamini–Hochberg, acota en cambio la proporción esperada de falsos positivos entre los resultados que se comunican, que es la moneda adecuada cuando la salida es una lista corta para trabajo de seguimiento. Ninguno de los dos hace fiable un acierto individual. Un gen comunicado con una tasa de falsos descubrimientos del 5 por ciento es miembro de una lista de la que se espera que uno de cada veinte miembros sea erróneo, y nada en el estadístico dice cuál. La misma lógica gobierna cómo se leen los estudios de asociación, tratada por extenso en [qué pueden sostener los estudios de asociación de genoma completo](/es/biology/genetics/genome-wide-association-studies-explained); vale por igual para los cribados diferenciales de [expresión génica](/es/glossary/gene-expression), proteómicos y metabolómicos.

## Las mismas lecturas, analizadas dos veces

Las decisiones de análisis forman parte del resultado, y su contribución es medible. Un estudio que dividió 219 conjuntos de datos humanos de genoma completo a alta profundidad según la constancia con que coincidían distintos pipelines de llamada de variantes halló que entre el 20 y el 30 por ciento del genoma cae en territorio de baja concordancia, y que la concordancia depende predominantemente del contexto genómico y no de qué conjunto de datos se usara, lo que significa que el desacuerdo es sistemático y predecible antes que ruido aleatorio.

La versión de la referencia importa con la misma concreción. El Genome in a Bottle Consortium, alojado en el NIST, produce las llamadas de variantes de referencia con las que se puntúan los pipelines, y esos conjuntos de referencia excluían casi 400 genes de relevancia médica por ser demasiado repetitivos o demasiado polimórficos para llamarlos con confianza. Un conjunto curado que cubre 273 de esos 395 genes mostró que las duplicaciones falsas presentes en GRCh37 o GRCh38 causan variantes no detectadas propias de la referencia; enmascararlas elevó la sensibilidad en los genes afectados del 8 por ciento al 100 por ciento. Dos laboratorios con lecturas idénticas, que difieran solo en la versión de la referencia, pueden por tanto publicar listas de variantes distintas y estar ambos siguiendo la práctica habitual.

| Etapa | Qué se infiere | Qué la hace fallar |
| --- | --- | --- |
| Alineamiento | De dónde procede una secuencia | Tamaño del espacio de búsqueda; supuestos de puntuación |
| Ensamblaje | Cuál era la molécula subyacente | Repeticiones más largas que las lecturas |
| Anotación | Qué hace la secuencia | Transferencia desde una etiqueta ya errónea |
| Contraste | Qué diferencias son reales | Número de hipótesis; región excluida del conjunto de referencia |

Nada de esto aboga por menos confianza en el análisis de secuencias en general; los conjuntos de referencia de la disciplina son insólitamente buenos, y las cifras de concordancia y de anotación errónea citadas arriba existen porque el campo midió sus propias tasas de error. Aboga por comunicar aquello que determina si un número es reproducible. Una lista de variantes sin su versión de referencia, una asignación funcional sin su código de evidencia y una lista de aciertos sin su espacio de búsqueda ni su método de corrección son cada una incompletas de un modo invisible para el lector y con consecuencias aguas abajo: la misma brecha entre un conjunto de datos y la afirmación que se extrae de él que la nota sobre [la incertidumbre que se pierde entre el conjunto de datos y el titular](/es/insight/uncertainty-lost-between-dataset-and-headline) rastrea en otro campo.

## Sources

1. **NCBI** — [GenBank and WGS statistics](https://www.ncbi.nlm.nih.gov/genbank/statistics/). Recuentos de bases y de registros de la versión 273 para GenBank y para la división WGS.
2. **NCBI** — [Sequence Read Archive growth](https://www.ncbi.nlm.nih.gov/sra/docs/sragrowth/). Serie de crecimiento publicada de los fondos de secuencia bruta.
3. **Science / PMC** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Tamaño del ensamblaje T2T-CHM13, secuencia no alineada, contenido en duplicaciones segmentarias y genes anotados por primera vez.
4. **PLOS Computational Biology** — [Annotation error in public databases: misannotation of molecular function in enzyme superfamilies](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000605). Tasas de anotación errónea medidas y crecimiento de la sobrepredicción a lo largo del tiempo.
5. **Nucleic Acids Research / PMC** — [UniProt: the Universal Protein Knowledgebase in 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701636/). Recuentos de registros y magnitud de las reglas y predicciones de anotación automática.
6. **EMBL-EBI** — [NHGRI-EBI GWAS Catalog](https://www.ebi.ac.uk/gwas/home). Recuentos actuales de asociaciones curadas, estudios y variantes.
7. **Bioinformatics / PMC** — [ReliableGenome: annotation of genomic regions with high/low variant calling concordance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5903559/). Proporción del genoma en regiones de baja concordancia a lo largo de 219 conjuntos de datos de genoma completo.
8. **Nature Biotechnology / PMC** — [Curated variation benchmarks for challenging medically relevant autosomal genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC9117392/). Genes excluidos de los conjuntos de referencia estándar y efecto de las duplicaciones falsas de la referencia sobre la sensibilidad.
9. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Llamadas de variantes de referencia y estratificación de las regiones genómicas difíciles.
