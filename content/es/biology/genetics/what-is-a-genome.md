---
title: Qué es un genoma y por qué su tamaño no dice casi nada
excerpt: Un genoma es el contenido completo de ADN de una célula. Su tamaño, su número de genes y su fracción funcional son tres mediciones distintas que responden a tres preguntas distintas, y su fiabilidad es muy desigual.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - genomics
  - genome-size
  - gene-annotation
  - pangenome
  - reference-genome
related:
  - what-is-dna
  - dna-replication-and-repair
  - mutation-types-and-rates
  - dna-sequencing-technologies
pillar: what-is-dna
_bodyHash: 72823ef
---

Un genoma es el conjunto completo del ADN que porta una célula: los cromosomas nucleares más lo que las mitocondrias y, en las plantas, los plastos llevan por su cuenta. Esa definición no se discute. Casi todo lo que se construye sobre ella es una medición, y las tres mediciones a las que se recurre con más frecuencia —cuán grande es un genoma, cuántos genes contiene y qué parte de él hace algo— difieren enormemente en su grado de solidez. Solo la primera está prácticamente asentada. El sustrato molecular se trata aparte en [qué es el ADN y qué no determina](/es/biology/genetics/what-is-dna); esta página trata de la capa contable que se asienta sobre la molécula.

## La única medición que por fin llegó a ser precisa

El tamaño del genoma puede medirse de dos maneras, y no son la misma operación. La citometría de flujo y la densitometría miden el contenido físico de ADN de un núcleo, expresado como valor C en picogramos o en gigapares de bases. La secuenciación mide la longitud del ensamblaje: cuántas bases ha logrado ordenar un ensamblador.

Durante décadas la segunda cifra fue menor que la primera, porque las regiones repetitivas derrotaban a las lecturas cortas. La anotación de Ensembl de GRCh38.p14 informa de una longitud de golden path de 3,099,750,718 pares de bases, una cifra que incluía huecos de varias megabases en los centrómeros y en los brazos cortos de los cromosomas acrocéntricos. El ensamblaje CHM13 del consorcio Telomere-to-Telomere los cerró: informa de 3,054,815,472 bp de ADN nuclear más un genoma mitocondrial de 16,569 bp, y añade 238 Mbp que no se alinean de forma colineal con GRCh38, de los cuales 182 Mbp no tienen alineamiento primario alguno. Ese ensamblaje también puso cifras firmes al contenido repetitivo: 1,647.81 Mbp, el 53.94 por ciento de la secuencia, son repetitivos, y solo las duplicaciones segmentarias suponen el 6.61 por ciento.

Conviene precisar qué significaba allí «completo». Las matrices de ADN satélite y las repeticiones de ADNr se resolvieron como secuencia, en buena medida gracias a las [plataformas de secuenciación de lecturas largas](/es/biology/biotechnology/dna-sequencing-technologies) capaces de abarcarlas. Lo que hacen esas matrices no quedó resuelto al leerlas.

## Un rango de 2,400 veces, y nada de él sigue a la complejidad

Lo más útil que cabe saber sobre el tamaño del genoma es que varía muchísimo y predice muy poco. Solo las plantas vasculares abarcan un factor de unas 2,400 veces en contenido de ADN. El récord lo ostenta ahora un helecho bifurcado neocaledonio, *Tmesipteris oblanceolata*, con 160.45 Gbp por 1C: más de cincuenta veces el genoma humano, en una planta de pocos centímetros de altura. Desplazó a la angiosperma *Paris japonica*, con 148.89 Gbp.

Esta es la **[paradoja del valor C](/en/glossary/c-value-paradox)**: el contenido de ADN por célula no guarda ninguna relación constante con lo elaborado que sea un organismo. La paradoja se disolvió en cuanto se caracterizó bien el ADN repetitivo. La mayor parte de la diferencia entre un genoma de 3 Gbp y otro de 160 Gbp es expansión de elementos transponibles y poliploidía retenida, no genes adicionales. Lo que sobrevive a esa resolución es una advertencia más que un enigma: el tamaño del genoma es una magnitud real y medible con precisión que resulta un mal indicador de casi cualquier cosa que uno quisiera saber del organismo.

## El recuento de genes fue bajando durante cincuenta años

Se suponía que la medición informativa sería más bien el número de genes. Su historia es un largo descenso. La estimación preliminar de Friedrich Vogel de 1964 —calculada dividiendo el genoma por la longitud de un gen del tamaño del de la hemoglobina, suponiendo que todo el genoma codificaba proteína y que los genes eran ininterrumpidos— llegaba a 6.7 millones. El informe conjunto de 1990 de los National Institutes of Health y el Department of Energy de Estados Unidos manejaba 100,000. Los rastreos de etiquetas de secuencias expresadas hasta mediados de la década de 1990 se agrupaban entre 50,000 y 100,000. En 2000 las estimaciones iban de 28,000 a 57,000, y una década después una revisión de todo el ejercicio fijó en 22,333 su propia mejor conjetura.

Las anotaciones actuales sitúan el recuento de genes codificantes de proteínas justo por debajo de 20,000. El conjunto de genes de Ensembl basado en GENCODE para el ensamblaje primario GRCh38.p14 —tal como se anota en la versión 116 de Ensembl, construida sobre GENCODE 50— enumera 19,878 genes codificantes junto a 42,155 genes no codificantes y 15,205 pseudogenes; la anotación de CHM13 predijo 19,969 genes codificantes de proteínas entre 63,494 en total. La convergencia importa menos que lo que revela: el recuento de genes codificantes es ya estable con un margen de unos pocos cientos, mientras que los recuentos de genes no codificantes y de pseudogenes no lo son, porque dependen de criterios de anotación que todavía se están moviendo.

Frente a eso, del nematodo *Caenorhabditis elegans* —97 megabases, aproximadamente una treintava parte del genoma humano— se informó en 1998 que portaba más de 19,000 genes. Un gusano con alrededor de un millar de células somáticas y un ser humano tienen recuentos de genes codificantes de proteínas del mismo orden. Lo que los distingue es sobre todo cómo se despliegan esos genes, que es el objeto de [la regulación de la expresión génica](/es/biology/genetics/how-gene-expression-is-regulated).

## «Funcional» hace dos trabajos a la vez

La cifra más discutida de la genómica es la fracción del genoma humano que es funcional, y la disputa es definicional antes que empírica. El consorcio ENCODE informó en 2012 de que sus ensayos podían «asignar funciones bioquímicas al 80% del genoma»: un 80.4 por ciento según su propio recuento, que es la proporción del genoma cubierta por al menos un elemento identificado por ENCODE. La clase más amplia era el ARN: el 62 por ciento de las bases genómicas estaba representado de forma reproducible en moléculas largas de ARN secuenciadas o en exones anotados, una medida de la [transcripción a lo largo del genoma](/es/glossary/transcription), aunque la mayor parte de eso queda dentro de intrones o cerca de genes. Las regiones enriquecidas en modificaciones de histonas cubrían el 56.1 por ciento, la cromatina abierta el 15.2 por ciento y la unión de factores de transcripción el 8.1 por ciento; según la evaluación más conservadora del propio consorcio, el 8.5 por ciento de las bases cae dentro de un motivo de unión de factores de transcripción o de una huella de DNasa.

Una crítica detallada en *Genome Biology and Evolution* sostuvo que esto emplea una definición de papel causal —esta secuencia hace algo medible— allí donde la [biología evolutiva](/es/biology/evolution/natural-selection-and-adaptation) emplea una definición de efecto seleccionado: esta secuencia se mantiene por selección purificadora porque perderla cuesta eficacia biológica. Con el segundo criterio, la genómica comparada sitúa la fracción conservada por debajo del 15 por ciento, y el análisis más exhaustivo la deja cerca de 5 por ciento, que sube a alrededor de 9 por ciento cuando se añade la restricción específica de linaje inferida a partir de la variación intraespecífica. El punto más afilado de la crítica es aritmético: si el 80 por ciento es funcional y solo alrededor de 10 por ciento está sometido a selección, entonces un 70 por ciento del genoma tendría que ser funcional y a la vez inmune a la mutación deletérea.

Los propios autores de ENCODE publicaron dos años después una respuesta meditada, en la que reconocían en *PNAS* que las regiones bioquímicamente activas cubren una fracción del genoma mucho mayor que las regiones conservadas evolutivamente, y que los enfoques bioquímico, evolutivo y genético responden cada uno a una pregunta distinta. Esa es la lectura honesta. Ninguna de las dos cifras es un error: son mediciones de propiedades diferentes, y un titular que convierte «bioquímicamente activo» en «necesario» ha cambiado la afirmación.

## Un único genoma de referencia siempre fue un compromiso

GRCh38 no es el genoma de ninguna persona. Se construyó de forma oportunista a partir de clones de cromosomas artificiales bacterianos procedentes de varios individuos, lo que lo dejó como un mosaico de haplotipos que sirve de sistema de coordenadas y no de espécimen, de modo que cada variante identificada se expresa como una diferencia respecto de una línea de base arbitraria. El contenido génico difiere realmente entre personas: una estimación a partir de tres genomas secuenciados cifró en 73 a 87 genes la diferencia entre dos personas cualesquiera, sobre todo por variación en las duplicaciones segmentarias.

El borrador de 2023 del Human Pangenome Reference Consortium sustituye la línea única por un grafo. Comprende 47 ensamblajes diploides con fases resueltas procedentes de individuos genéticamente diversos, y añade 119 millones de pares de bases de secuencia eucromática polimórfica y 1,115 duplicaciones génicas respecto de GRCh38; unos 90 millones de esas bases proceden de variación estructural. Empleado para analizar datos de lecturas cortas, redujo los errores en el descubrimiento de variantes pequeñas en un 34 por ciento y aumentó las variantes estructurales detectadas por haplotipo en un 104 por ciento. La misma lógica es desde hace tiempo habitual en microbiología, donde una especie se describe mediante un genoma central más un conjunto accesorio que difiere entre cepas: el marco empleado en [las bacterias y las arqueas como dominios distintos](/es/biology/microbiology/bacteria-and-archaea-explained).

Quedan tres límites. Cuarenta y siete ensamblajes son una muestra escasa de la diversidad humana, y las poblaciones representadas no están ponderadas de manera uniforme. La anotación va por detrás del ensamblaje: los 3,604 genes predichos solo en CHM13 caen en gran medida en regiones que siguieron siendo inaccesibles hasta que las lecturas largas llegaron a ellas, y son en su mayoría parálogos putativos y no modelos curados. Y nada de esto toca la cuestión funcional: conocer cada base de cada genoma seguiría dejando abierto cuáles de ellas importan, porque esa es una pregunta sobre selección y fenotipo, no sobre secuencia. El ritmo al que entran nuevas diferencias en un genoma se trata en [los tipos de mutación y las tasas por generación](/es/biology/genetics/mutation-types-and-rates), y la maquinaria que mantiene ese ritmo tan bajo como está, en [la replicación y reparación del ADN](/es/biology/genetics/dna-replication-and-repair).

## Sources

1. **T2T Consortium, *Science*** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Longitud del ensamblaje CHM13, secuencia añadida respecto de GRCh38, predicciones de genes y contenido de repeticiones y duplicaciones segmentarias.
2. **EMBL-EBI, Ensembl** — [Human assembly and gene annotation](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation). Longitud del golden path de GRCh38.p14 y recuentos GENCODE de genes codificantes, no codificantes y pseudogenes.
3. **Fernández y colaboradores, *iScience*** — [A 160 Gbp fork fern genome shatters size record for eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11270024/). Tamaño récord de un genoma eucariota y rango de tamaños de genoma en plantas vasculares.
4. **Consorcio de Secuenciación de C. elegans, *Science*** — [Genome sequence of the nematode C. elegans](https://pubmed.ncbi.nlm.nih.gov/9851916/). Tamaño del genoma y recuento de genes para la comparación con el nematodo.
5. **Pertea y Salzberg, *Genome Biology*** — [Between a chicken and a grape: estimating the number of human genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2898077/). Historia de las estimaciones del número de genes humanos y variación del contenido génico entre individuos.
6. **ENCODE Project Consortium, *Nature*** — [An integrated encyclopedia of DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3439153/). La afirmación del 80 por ciento de función bioquímica.
7. **Graur y colaboradores, *Genome Biology and Evolution*** — [On the immortality of television sets: "function" in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/). La crítica de efecto seleccionado y las estimaciones de funcionalidad basadas en la conservación.
8. **Kellis y colaboradores, *PNAS*** — [Defining functional DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4035993/). La reconciliación, por los propios autores de ENCODE, de las definiciones bioquímica, evolutiva y genética.
9. **Human Pangenome Reference Consortium, *Nature*** — [A draft human pangenome reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172123/). Número de ensamblajes, secuencia añadida y efecto medido sobre el descubrimiento de variantes.
