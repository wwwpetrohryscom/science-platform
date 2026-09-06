---
title: 'CRISPR: el sistema inmunitario bacteriano convertido en herramienta de edición'
metaTitle: 'CRISPR: qué corta la nucleasa y qué decide la célula'
excerpt: Una nucleasa guiada corta el ADN; la célula decide en qué se convierte el corte. Ese reparto de tareas explica por qué los knockouts son rutina, por qué los reemplazos precisos son difíciles y por qué el paso limitante es la administración y no el direccionamiento.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - genome-editing
  - crispr-cas9
  - dna-repair
  - base-editing
  - gene-therapy
related:
  - biotechnology-explained
  - dna-sequencing-technologies
  - dna-replication-and-repair
  - synthetic-biology-explained
pillar: biotechnology-explained
_bodyHash: e12b16f2
---

La nucleasa es el componente famoso y el menos interesante. Cas9 encuentra una secuencia y la rompe; lo que ocurre después lo hace una maquinaria de reparación que la célula ya tenía, y el resultado de esa reparación es el producto. Casi toda propiedad práctica de la edición del genoma — por qué la inactivación de genes se volvió rutinaria, por qué los reemplazos precisos siguieron siendo difíciles, por qué la restricción determinante en terapia es la administración y no el direccionamiento — se sigue de ese reparto de tareas entre una enzima introducida y un proceso biológico preexistente. Es además la parte que más a menudo se omite en los resúmenes, que suelen describir las tijeras y detenerse ahí. Editar in situ es la más reciente de las operaciones centrales de la [caja de herramientas biotecnológica más amplia](/es/biology/biotechnology/biotechnology-explained), y aquella cuyos límites se comprenden peor.

## Un sistema antifago, leído al revés

Los sistemas CRISPR-Cas son la [inmunidad adaptativa](/es/biology/physiology/the-immune-system-explained) de bacterias y arqueas. Fragmentos de ADN vírico o plasmídico encontrado con anterioridad se almacenan en una matriz de repeticiones, se transcriben y se procesan en ARN guía cortos, y sirven para reconocer y destruir la misma secuencia en un nuevo encuentro. El sistema es una defensa frente a los [virus que infectan bacterias](/es/biology/microbiology/viruses-explained), y evolucionó bajo la presión de esa carrera armamentística, no para nada que se parezca a la comodidad de laboratorio.

El resultado de 2012 que lo convirtió en herramienta estableció el mecanismo con precisión. En una clase de estos sistemas, un ARN CRISPR maduro apareado con un ARN transactivador forma una estructura de dos ARN que dirige a Cas9 para introducir una rotura de doble cadena; el dominio HNH de la enzima corta la cadena complementaria al guía y su dominio de tipo RuvC corta la otra. El mismo trabajo mostró que los dos ARN podían fusionarse en una única quimera de ingeniería que seguía dirigiendo un corte específico de secuencia — el paso que hizo programable el sistema mediante la síntesis de un ARN corto en lugar de la reconstrucción de un locus natural.

El direccionamiento no está libre de restricciones. Cas9 exige un motivo corto adyacente al protoespaciador inmediatamente junto a la secuencia apareada, que en el contexto nativo distingue el ADN invasor de la copia almacenada por la propia bacteria. Para la enzima de *Streptococcus pyogenes*, la de uso más común, ese motivo es NGG, y trabajos posteriores cuantificaron cuán permisivo resulta: un motivo NGG en una u otra cadena aparece en promedio cada 8 pares de bases aproximadamente, de modo que la restricción aprieta sobre todo cuando la edición debe caer en una posición exacta y no simplemente dentro de una región.

## La vía de reparación es el producto

En una célula de mamífero, una rotura de doble cadena se resuelve habitualmente por unión de extremos, que con frecuencia deja pequeñas inserciones o deleciones. En una secuencia codificante estas desplazan el marco de lectura, y por eso interrumpir un gen es sencillo: no se está haciendo un cambio diseñado, se está aprovechando una vía de reparación propensa a error y seleccionando las células en las que falló de forma útil. Sustituir una secuencia por una alternativa especificada exige reparación dirigida por homología con una plantilla suministrada, una vía restringida a determinadas fases del ciclo celular y que compite mal con la unión de extremos. La mecánica de ambas rutas se trata en el artículo sobre [replicación y reparación del ADN](/es/biology/genetics/dna-replication-and-repair).

La diferencia de eficiencia es marcada en los datos de comparación directa. En los experimentos que introdujeron la edición de bases, aportar Cas9, un guía y un donante de cadena sencilla para impulsar la reparación dirigida por homología produjo la conversión pretendida de citosina a timina en un promedio de 0.5 por ciento de los alelos, mientras generaba inserciones y deleciones en un promedio de 4.3 por ciento. El mismo artículo sitúa la razón entre la conversión pretendida y los productos de unión de extremos en 0.17 para la Cas9 silvestre, frente a 23 para el editor de bases de tercera generación que presentaba.

## Escribir sin romper ambas cadenas

Dos enfoques evitan por completo la rotura de doble cadena, y ambos se construyeron fusionando una nueva actividad a una Cas9 inactivada o nickasa.

La edición de bases fusiona una citidina desaminasa a Cas9 y convierte la citosina en uracilo dentro de una ventana de unos cinco nucleótidos en la región definida por el guía; la replicación fija después el cambio como una sustitución de C a T (o de G a A). Con una nickasa dirigida a la cadena no editada y la inclusión de un inhibidor de la uracilo glicosilasa, la conversión comunicada alcanzó aproximadamente de 15 a 75 por ciento del ADN celular total en cuatro líneas celulares, con formación de indels normalmente igual o inferior a 1 por ciento.

La edición prime fusiona una transcriptasa inversa a una Cas9 nickasa y emplea un ARN guía que a la vez especifica el sitio y codifica la secuencia deseada, que se escribe en la cadena mellada y la célula resuelve. El trabajo original realizó más de 175 ediciones en células humanas, incluidas las doce sustituciones puntuales posibles más pequeñas inserciones y deleciones, con frecuencias de indels que promediaron 0.86 por ciento en la más simple de sus dos configuraciones; la variante que añade una segunda mella para sesgar la reparación hacia la cadena editada elevó tanto la eficiencia como los indels, estos últimos hasta decenas bajas de por ciento en algunos sitios. Sus autores calcularon que, en principio, el enfoque podría abordar hasta cerca de 89 por ciento de las 75,122 variantes humanas patogénicas entonces catalogadas en ClinVar — una afirmación sobre la clase de cambios que esta química puede hacer, no una afirmación sobre su alcance clínico.

| Enfoque | Rotura introducida | Cambios que puede hacer | Indels no buscados comunicados |
| --- | --- | --- | --- |
| Nucleasa más unión de extremos | Doble cadena | Interrupción, no especificación | Es el mecanismo pretendido |
| Nucleasa más plantilla donante | Doble cadena | Cualquiera, en principio | ~4.3% frente a ~0.5% de conversión |
| Edición de bases de citosina | Solo mella | Una clase de transición, ventana de ~5 nt | Normalmente ≤1% |
| Edición prime | Solo mella | Todas las sustituciones, pequeñas inserciones y deleciones | ~0.86% en la configuración básica |

## Medir lo que no puede predecirse

Un editor que reconoce unas veinte bases actuará a veces sobre secuencias que se parecen a la diana. El hallazgo importante de los ensayos construidos para medirlo no es que exista actividad fuera de diana, sino que se predice mal. El método GUIDE-seq captura un oligonucleótido corto de doble cadena dentro de las roturas y secuencia los puntos de inserción, lo que da un mapa no sesgado de todo el genoma. Aplicado a trece guías en dos líneas celulares humanas, encontró que la mayoría de los sitios identificados no habían sido detectados por las herramientas informáticas de predicción entonces en uso ni por inmunoprecipitación de cromatina, y que entre los sitios omitidos había algunos que diferían de la diana en tan solo un desapareamiento. Mostró también que acortar el ARN guía reducía sustancialmente las roturas fuera de diana, y que algunos puntos calientes aparentes de rotura eran del todo independientes de la nucleasa.

De ahí se siguen dos límites. Todo perfil fuera de diana es específico del guía, del tipo celular y de la sensibilidad del ensayo; un resultado limpio en una línea celular no se traslada. Y como estos sucesos pueden ser más raros que el suelo de error de la secuenciación empleada para detectarlos, la profundidad y las características de error de la [plataforma de secuenciación](/es/biology/biotechnology/dna-sequencing-technologies) fijan el límite de detección de la afirmación de seguridad.

## La administración decide qué enfermedades son alcanzables

La primera terapia aprobada que usa esta tecnología es instructiva sobre lo que hoy resulta practicable. Trata la anemia falciforme extrayendo del cuerpo las propias [células madre](/es/biology/physiology/developmental-biology-explained) sanguíneas del paciente y usando Cas9 para silenciar un potenciador específico de eritroides de *BCL11A* — un represor de la hemoglobina fetal — de modo que las células editadas produzcan hemoglobina fetal, que interfiere con la falciformación. Se aprobó en Estados Unidos el 8 de diciembre de 2023 para pacientes de 12 años o más con crisis vasooclusivas recurrentes, y en enero de 2024 para la β-talasemia dependiente de transfusiones.

Dos rasgos merecen atención. La edición no repara la mutación causante; inutiliza un elemento regulador para que se exprese otro gen normalmente silenciado, una estrategia tomada de lo que se sabe sobre [cómo se regula la expresión génica](/es/biology/genetics/how-gene-expression-is-regulated) y no de la biología de la reparación. Y el procedimiento es ex vivo: las células se editan en placa y el paciente recibe acondicionamiento mieloablativo antes de su devolución. El boletín terapéutico que describe los dos productos aprobados para la anemia falciforme señala que esa combinación de manipulación genómica ex vivo y acondicionamiento deja abiertas preguntas sobre el riesgo hematológico a largo plazo que solo un seguimiento prolongado puede responder. Editar los tejidos in situ, sin extraerlos, sigue siendo el problema más difícil y en su mayor parte sin resolver.

## Dónde se traza la línea de la gobernanza

Editar células somáticas afecta a un paciente. Editar gametos o embriones afecta a descendientes que no pueden consentir y no pueden ser objeto de seguimiento. Las recomendaciones de 2021 de la Organización Mundial de la Salud tratan las aplicaciones somáticas, germinales y hereditarias dentro de un único marco de gobernanza a la vez que las separan en la práctica: proponen un registro de la investigación en edición del genoma humano, mecanismos para notificar trabajos que quedan fuera de las normas acordadas y una participación pública sostenida. La legislación nacional diverge considerablemente por debajo de ese nivel, y la posición práctica es que las aplicaciones hereditarias siguen fuera de la práctica clínica aceptada mientras que las somáticas avanzan bajo la regulación terapéutica convencional.

Lo que la edición ha cambiado para la investigación se discute menos que lo que ha cambiado para la medicina. Poder inutilizar un gen en un tipo celular elegido convierte muchas observaciones correlativas en observaciones comprobables. No las convierte en explicaciones: un fenotipo que aparece cuando se elimina una secuencia muestra que esa secuencia es necesaria en esas condiciones, que es una afirmación más estrecha que la que suele comunicarse.

## Sources

1. **Science (manuscrito de autor, PubMed Central)** — [A programmable dual RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6286148/). El mecanismo de dos ARN, el corte propio de cada dominio y la demostración de la quimera única.
2. **Nature (manuscrito de autor, PubMed Central)** — [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4873371/). Ventana de edición de bases, eficiencias de conversión y la comparación con la reparación dirigida por homología.
3. **Nature (manuscrito de autor, PubMed Central)** — [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). Alcance de la edición prime, frecuencias de indels, espaciado del PAM y el cálculo de ClinVar.
4. **Nature Biotechnology (manuscrito de autor, PubMed Central)** — [GUIDE-Seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pmc.ncbi.nlm.nih.gov/articles/PMC4320685/). Mapeo no sesgado fuera de diana y el fracaso de las herramientas de predicción.
5. **Genetics in Medicine Open (boletín terapéutico de la ACMG)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Mecanismo, fechas de aprobación y las salvedades sobre el seguimiento a largo plazo.
6. **Organización Mundial de la Salud** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Marco de gobernanza que cubre las aplicaciones somáticas, germinales y hereditarias.
