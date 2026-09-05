---
title: 'Tecnologías de secuenciación: longitud de lectura, perfil de error y para qué sirve cada una'
metaTitle: 'Plataformas de secuenciación: lectura y perfil de error'
excerpt: Elegir una plataforma de secuenciación tiene menos que ver con la exactitud de titular que con la forma de sus errores y la longitud de sus lecturas. Así difieren las grandes familias, por qué varían las exigencias de profundidad y qué deja fuera la curva de costes.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - dna-sequencing
  - long-read-sequencing
  - reference-genomes
  - measurement-uncertainty
related:
  - biotechnology-explained
  - bioinformatics-explained
  - crispr-genome-editing-explained
  - what-is-a-genome
pillar: biotechnology-explained
---

Pregunte qué plataforma de secuenciación es la más exacta y obtendrá una respuesta inútil, porque las plataformas fallan de maneras distintas. Un método que comete errores de sustitución raros y dispersos y otro que comete errores frecuentes pero previsibles en un contexto de secuencia concreto pueden declarar la misma exactitud y servir para problemas completamente distintos. La [longitud de lectura](/en/glossary/read-length), la forma del error y el coste por base son los tres ejes que de verdad deciden un proyecto, y se intercambian entre sí. Leer ADN es la capacidad que hizo tratable el resto de la [caja de herramientas biotecnológica](/es/biology/biotechnology/biotechnology-explained), y es también aquella cuya economía se cita con más frecuencia fuera de contexto.

## Tres formas de convertir una molécula en una cadena de caracteres

El método de terminación de cadena descrito en 1977 lee secuencia fabricando copias que se detienen en bases definidas. Los análogos didesoxinucleótidos actúan como inhibidores terminadores de cadena de la ADN polimerasa, produciendo un conjunto anidado de fragmentos cuyas longitudes indican la posición de cada base; la demostración original se hizo con el bacteriófago φX174. Sigue en uso para confirmaciones cortas en un único locus, porque es sencillo y sus modos de fallo son visibles en el trazado.

La secuenciación por síntesis de lectura corta lo sustituyó para cualquier cosa a escala. Millones de agrupaciones separadas en el espacio se extienden una base cada vez y se toman imágenes en paralelo, produciendo lecturas de unos cientos de bases con un error por base muy bajo, dominado por sustituciones y no por inserciones o deleciones. Su restricción no es la exactitud sino la longitud: una lectura más corta que una repetición no puede colocarse sin ambigüedad en un genoma que contiene esa repetición más de una vez.

Las plataformas de lectura larga de molécula única secuencian una molécula sin amplificación. El ensamblaje completo del genoma humano publicado en 2022 usó dos de ellas juntas y describe sus propiedades directamente: lecturas de consenso circular de unos 20 kbp de media con una tasa de error cercana al 0,1 por ciento, y lecturas de nanoporo ultralargas por encima de 100 kbp con una exactitud por lectura sustancialmente menor. Ambas son complementarias: una aporta precisión a nivel de base, la otra cruza estructuras que nada más atraviesa.

| Familia | Longitud de lectura típica | Carácter dominante del error | Qué resuelve |
| --- | --- | --- | --- |
| Terminación de cadena | Menos de una kilobase | Bajo, visible en el trazado | Loci únicos, verificación de construcciones |
| Síntesis de lectura corta | Cientos de bases | Sustituciones, dependientes del contexto | Variantes en secuencia única, recuento profundo |
| Lecturas largas de consenso circular | Alrededor de 20 kbp | Bajo y en gran medida aleatorio | Ensamblaje a través de la mayoría de repeticiones |
| Lecturas de nanoporo ultralargas | Más de 100 kbp | Mayor, en parte sistemático | Duplicaciones segmentarias, centrómeros |

## El error aleatorio se promedia; el sistemático no

La distinción que más importa en la práctica es si un error se repite en la misma posición por la misma razón. Los errores aleatorios independientes se diluyen con la profundidad: secuencie un sitio treinta veces y un error aleatorio del 1 por ciento se vuelve despreciable en el consenso. Un error sistemático sobrevive a cualquier cobertura, porque todas las lecturas cometen la misma equivocación.

La secuenciación por nanoporo ha aportado el ejemplo reciente más claro. Una evaluación de 2024 de la reconstrucción de genomas bacterianos halló que la química antigua R9.4.1 daba una exactitud mediana por lectura del 96,8 por ciento (rango intercuartílico 95,9-97,4), subiendo al 98,8 por ciento (98,1-99,2) con R10.4.1, y a una mediana del 99,2 por ciento (98,8-99,5) cuando las lecturas se llamaban con un modelo de basecalling más nuevo. Es crucial que parte del error residual no era ruido sino un patrón reproducible: sustituciones de guanina a adenina y de citosina a timina aparecían sistemáticamente en la mayoría de las combinaciones de secuenciación, basecalling y ensamblaje ensayadas, y se atribuyen a sitios metilados que confunden a los modelos de basecalling. El remedio fue un basecaller entrenado con ADN bacteriano nativo, no una secuenciación más profunda. El mismo estudio halló que los ensamblajes solo de lectura larga con la química y el basecaller nuevos recuperaban más del 99 por ciento de las secuencias codificantes anotadas con una cobertura de 30× o más, comparable a los ensamblajes híbridos que combinan lecturas largas y cortas.

Esa es la lección general. Cuando los errores restantes de una plataforma dependen del contexto, el remedio vive en la capa de interpretación —modelos de basecalling, pulido, grafos de ensamblaje— y no en la química, y esa es una razón de que la frontera entre secuenciación y [análisis computacional de datos de secuencia](/es/biology/biotechnology/bioinformatics-explained) no sea nítida.

## Por qué las exigencias de profundidad difieren tanto

La cobertura no es un ajuste de calidad; es un requisito estadístico derivado de lo que se intenta detectar. Para una variante germinal presente en la mitad o en todas las moléculas secuenciadas basta una profundidad moderada, y la cifra de 30× anterior es la cobertura a la que los ensamblajes bacterianos de ese estudio alcanzaron una recuperación casi completa de las secuencias codificantes. Detectar una variante portada por una fracción pequeña de células —una mutación somática subclonal, un patógeno minoritario en una mezcla— exige una profundidad que escala inversamente con esa fracción, además de una tasa de error lo bastante baja para que la señal verdadera se distinga del fondo a esa frecuencia. Por eso el mismo instrumento puede describirse como adecuado para una aplicación y desesperado para otra sin contradicción. La misma aritmética gobierna [los muestreos de comunidades microbianas por secuenciación](/es/biology/microbiology/culturing-and-sequencing-microbes), donde el recuento de lecturas de un taxón refleja la elección de cebadores y la profundidad antes que la abundancia. Los ensayos basados en secuenciación de [la actividad fuera de diana en edición genómica](/es/biology/biotechnology/crispr-genome-editing-explained) afrontan exactamente este problema: los eventos que se cuentan pueden ser más raros que el propio suelo de error de la plataforma.

Los proyectos de genoma de referencia ilustran el extremo superior. Junto a sus lecturas largas, el ensamblaje humano completo se apoyó en aproximadamente 100× de datos de lectura corta y 70× de datos de conformación cromosómica como evidencia de apoyo, junto con mapas ópticos y mapas específicos de hebra en célula única.

## Qué compraron realmente las lecturas largas

El ensamblaje completo publicado en 2022 suma 3.054.815.472 pares de bases de ADN nuclear más un genoma mitocondrial de 16.569 pares de bases. Frente a la referencia previa añadió o corrigió 238 Mbp de secuencia no sinténica, de los cuales 182 Mbp no tenían alineamiento primario alguno con el ensamblaje anterior. Dentro del material recién resuelto reportó 3.604 genes ausentes de la referencia previa, de los cuales 140 se predijeron como codificantes de proteína, y 99 genes predichos como codificantes de proteína caían en regiones sin alineamiento anterior.

El punto no es que la referencia creciera un pequeño porcentaje. Es que las regiones que faltaban no faltaban al azar: eran las partes repetitivas, duplicadas y ricas en satélites del genoma, excluidas sistemáticamente porque las lecturas cortas no podían colocarse en ellas. Toda una generación de estudios describió el genoma como si esas regiones no existieran, una forma concreta y corregible de [la brecha entre una secuencia de referencia y un genoma](/es/biology/genetics/what-is-a-genome).

## La curva de costes y la parte que nunca puso precio

Las cifras de coste que el National Human Genome Research Institute publica para sus centros financiados se citan constantemente y se sobreinterpretan de forma rutinaria. Su tabla registra unos 95,3 millones de dólares por genoma en septiembre de 2001, 7,1 millones en octubre de 2007, 3,1 millones tres meses después y unos 525 dólares en mayo de 2022: una caída de más de cinco órdenes de magnitud. El instituto data la desviación más brusca respecto al comportamiento de duplicación del hardware informático en enero de 2008, cuando sus centros pasaron a instrumentos de segunda generación, que es exactamente donde aparece esa caída de más de la mitad en un solo trimestre. La contabilidad del propio instituto para la era de la referencia es igual de precisa: el borrador original del genoma humano costó del orden de 300 millones de dólares en todo el mundo, y el refinamiento hasta una secuencia terminada añadió alrededor de 150 millones.

Lo que esas cifras incluyen es producción: reactivos, instrumentos, mano de obra, sistemas de información de laboratorio, procesamiento inicial de datos. Lo que excluyen es el aseguramiento de calidad, el alineamiento a una referencia, el ensamblaje, la llamada de variantes y la anotación. Dicho de otro modo, la curva publicada pone precio a la generación de lecturas, no a la producción de un resultado interpretable. Un laboratorio que anuncia un precio por muestra rara vez está citando la misma magnitud, y una comparación entre ambas no es una comparación en absoluto.

## Qué sigue sin poder certificar el benchmarking

Las afirmaciones de exactitud descansan en materiales de referencia, y esos tienen fronteras. El consorcio Genome in a Bottle del National Institute of Standards and Technology caracteriza un pequeño conjunto de muestras humanas —un genoma piloto y dos tríos familiares— y distribuye tanto conjuntos de variantes de referencia como ficheros de estratificación que señalan terreno difícil: homopolímeros, repeticiones en tándem, el complejo mayor de histocompatibilidad. Esas estratificaciones existen porque el rendimiento dentro de ellas difiere del rendimiento fuera, y un benchmark que reporta una única cifra de exactitud para todo el genoma sin ellas está promediando esa diferencia.

La consecuencia para leer cualquier afirmación es estrecha y práctica. Una exactitud declarada se aplica a las regiones que el benchmark cubre, en los tipos de muestra que cubre, con la cadena de análisis que la produjo. Las regiones excluidas de un benchmark no quedan certificadas como fáciles; simplemente no quedan certificadas.

## Sources

1. **Proceedings of the National Academy of Sciences** — [DNA sequencing with chain-terminating inhibitors](https://pmc.ncbi.nlm.nih.gov/articles/PMC431765/). El método didesoxi de 1977 y su primera aplicación.
2. **Nature (manuscrito de autor, PubMed Central)** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Tamaño del ensamblaje, secuencia añadida, recuentos de genes y tecnologías de lectura empleadas.
3. **Microbial Genomics** — [Evaluation of the accuracy of bacterial genome reconstruction with Oxford Nanopore R10.4.1 long-read-only sequencing](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170131/). Distribuciones de exactitud por lectura, errores sistemáticos ligados a metilación y efectos de cobertura.
4. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). La serie de coste por genoma y el alcance de esa contabilidad.
5. **National Human Genome Research Institute** — [The cost of sequencing a human genome](https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost). Costes de la era de la referencia y qué incluyen y excluyen las estimaciones.
6. **National Institute of Standards and Technology** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Materiales de referencia, conjuntos de variantes de benchmark y estratificaciones para regiones difíciles.
