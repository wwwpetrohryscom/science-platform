---
title: 'Microbioma: qué puede y qué no puede establecer la secuenciación'
metaTitle: 'Microbioma: qué establece la secuenciación y qué no'
excerpt: Un estudio de microbioma informa de proporciones sobre un total que eligió el secuenciador, no de un censo del intestino. Esta página separa lo que esa estructura de datos puede sostener de las afirmaciones causales que exigen un trasplante, un hospedador gnotobiótico o un ensayo.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - microbiome
  - metagenomics
  - causal-inference
  - host-microbe-interactions
  - compositional-data
related:
  - culturing-and-sequencing-microbes
  - antimicrobial-resistance-evidence
  - microbiology-explained
  - the-immune-system-explained
pillar: microbiology-explained
_bodyHash: 5e10da87
---

Un estudio del microbioma intestinal no cuenta organismos. Informa de qué fracción de las secuencias recuperadas de una muestra se asignó a cada taxón, sobre un total fijado por el instrumento y no por el intestino. Casi todas las maneras en que estos estudios se sobreinterpretan derivan de ese único hecho estructural, y las correcciones que le corresponden no son ni oscuras ni recientes.

Qué organismos se examinan, y de qué viven, es el asunto de la [exposición general de la vida microbiana](/es/biology/microbiology/microbiology-explained). Esta página trata de la inferencia: qué puede sostener una tabla de proporciones y qué hace falta para mover un enunciado de *asociado con* a *causa de*.

## Una cifra que sobrevivió a sus pruebas

La afirmación de que el cuerpo humano contiene diez células bacterianas por cada célula humana circuló durante décadas. Una reevaluación de 2016 en PLOS Biology situó la cifra en aproximadamente 3.8 × 10¹³ bacterias —abrumadoramente en el colon— frente a unas 3.0 × 10¹³ células humanas en un varón de referencia de 70 kg, es decir, una razón de 1.3 con una incertidumbre declarada del 25 por ciento y una variación de alrededor del 50 por ciento en una población de varones semejantes. La masa bacteriana implicada es de unos 0.2 kg en húmedo y 50–100 g en seco.

La razón antigua es recuperable, pero solo comparando las bacterias con las células humanas *nucleadas* y descartando los glóbulos rojos, que son la mayoría numérica de las células humanas. Esa es la parte útil de la historia. La cifra de 10:1 no fue fabricada; era una estimación defendible cuya cláusula restrictiva se perdió en la transmisión, tras lo cual sobrevivió por la cita y no por la medición. Quien lea una estadística llamativa sobre el microbioma debería preguntar qué magnitud se midió realmente, porque [el término microbioma](/es/glossary/microbiome) se adhiere de forma rutinaria y indistinta a números sobre células, genes, especies y masa.

## Las proporciones no son abundancias

La secuenciación impone un total arbitrario. Una corrida devuelve un presupuesto fijo de lecturas por el que los taxones compiten, de modo que los datos son **composicionales**: solo las razones entre componentes portan información, y la cantidad absoluta de cualquier cosa queda sin medir. Una revisión de 2017 en *Frontiers in Microbiology* expuso las consecuencias sin rodeos, y no son cosméticas. Si un organismo prolifera, todas las demás proporciones caen, y una prueba ingenua informará de esas caídas como empobrecimientos. Las correlaciones calculadas entre proporciones brutas están obligadas a sumar una constante y, por tanto, son en parte espurias por construcción. Las pruebas estándar que suponen componentes independientes no son aplicables.

Los remedios están establecidos —las transformaciones de razones logarítmicas recomendadas por esa revisión, o la adición a la muestra de bacterias exógenas en una cantidad conocida para poder corregir los recuentos de lecturas por las diferencias de carga microbiana total—, pero no son universales en la literatura publicada, y un artículo que informa de un «aumento de *Bacteroides*» sin decir respecto a qué total no ha distinguido el ascenso de un taxón del descenso de todo lo demás.

Lo que resuelve la secuenciación en sí es un límite aparte. Los estudios de amplicones leen un único gen marcador conservado y suelen resolver hasta el género; la metagenómica shotgun lee todo el ADN presente, puede llegar a especie y cepa, e informa de qué genes hay; la metatranscriptómica informa de cuáles se están transcribiendo. Ninguno de los tres mide una tasa, y cada uno arrastra sesgos técnicos que se tratan en la página complementaria sobre [cómo se muestrean y secuencian las comunidades microbianas](/es/biology/microbiology/culturing-and-sequencing-microbes).

## Diseños capaces de sostener una afirmación causal

La distinción que importa en este campo no es la significación estadística sino la arquitectura del estudio. Se repiten cuatro diseños, y establecen cosas distintas.

| Diseño | Qué puede establecer | Qué lo invalida |
| --- | --- | --- |
| Casos y controles transversal | Una asociación; un biomarcador candidato | Causalidad inversa, confusión por dieta y fármacos, efectos de lote |
| Cohorte longitudinal | El orden temporal del cambio | La confusión persiste; el muestreo puede perder la ventana relevante |
| Transferencia a animales libres de gérmenes | Que una comunidad basta para producir un fenotipo en ese hospedador | El receptor no es un humano; la dieta y el alojamiento cambian el resultado |
| Intervención clínica aleatorizada | Un efecto en personas | Existe para muy pocas enfermedades |

Los experimentos de transferencia son la razón por la que el campo puede formular alguna afirmación causal. En un estudio de 2013 en *Science* se trasplantaron a ratones libres de gérmenes comunidades fecales de parejas de gemelas adultas discordantes para la obesidad; el aumento de masa corporal y de masa grasa viajó con la comunidad de la gemela más pesada, y viajó también con las colecciones cultivadas derivadas de ella. Alojar juntos a los receptores impidió el fenotipo, y ese rescate siguió a la invasión de determinados *Bacteroidetes* procedentes de la comunidad de la cogemela delgada — y dependió de lo que se daba de comer a los ratones. Esa última cláusula es el hallazgo que con más frecuencia se pierde en los resúmenes: el efecto microbiano estaba condicionado por la dieta, no era autónomo.

En el terreno clínico, una intervención ha acumulado pruebas verdaderamente sólidas. Una revisión sistemática con metanálisis de 2020 en *EClinicalMedicine*, que abarcó 45 estudios, informó de un efecto clínico en la semana 8 del 91 por ciento (IC del 95 por ciento: 89–94) para el trasplante repetido de microbiota fecal en la infección recurrente por *Clostridioides difficile*, a lo largo de 24 estudios y 1855 pacientes, y del 84 por ciento (80–88) para una sola administración; el número necesario a tratar frente a la vancomicina fue de 1.5 para el trasplante repetido. Los autores calificaron las pruebas del trasplante repetido como de alta calidad. Se trata de una sola enfermedad con un solo mecanismo bien caracterizado, y no es un modelo para la intervención sobre el microbioma en general.

## La resistencia a la colonización es la función mejor respaldada

Ese mecanismo tiene nombre. La **resistencia a la colonización** es la capacidad de una comunidad establecida, junto con las defensas del hospedador, de impedir que un organismo entrante se afiance — mediante la competencia por nutrientes y sitios de adhesión, la producción de ácidos grasos de cadena corta y de otros metabolitos inhibidores, y el mantenimiento del tono inmunitario mucoso; una vía adicional, demostrada en ratones, pasa por la conversión, por parte de los comensales, de los ácidos biliares primarios del hospedador en ácidos biliares secundarios que inhiben a *Clostridioides difficile*. Una revisión de 2025 en *FEMS Microbiology Ecology* la plantea como una propiedad conjunta de la comunidad residente y del hospedador, y no de uno u otro por separado, que es la razón por la que la exposición a antibióticos y la invasión por un patógeno son el mismo suceso visto desde dos lados.

Leído como ecología, esto es un efecto de ocupación y no un regalo: una comunidad residente excluye a un recién llegado por las mismas razones por las que un dosel cerrado excluye a una plántula. También explica por qué la contribución mecanicista de la [regulación inmunitaria](/es/biology/physiology/the-immune-system-explained) no puede separarse limpiamente de la contribución microbiana en un animal intacto.

## Por qué la mayoría de las asociaciones con enfermedades no se transfieren

El correctivo más útil de esta literatura es un metanálisis entre estudios publicado en *Nature Communications* en 2017. Al reprocesar con métodos estandarizados 28 estudios intestinales de casos y controles que abarcaban diez enfermedades, encontró que unas pocas dolencias se distinguían por grandes desplazamientos de la comunidad que implicaban más de 50 géneros, mientras que la mayoría implicaba solo 10–15, y —el resultado decisivo— que alrededor de la mitad de los géneros señalados en estudios individuales responden a más de una enfermedad. Muchas asociaciones publicadas forman parte, por tanto, de un desplazamiento inespecífico entre salud y enfermedad, y no son la firma de ninguna dolencia concreta.

A esto se suma la varianza metodológica ordinaria. Una perspectiva de 2018 en *mBio* separa reproducibilidad, replicabilidad, robustez y generalizabilidad como fallos distintos, y la distinción importa aquí: dos laboratorios pueden procesar las mismas muestras y discrepar por kits de extracción contaminados, por efectos de lote entre corridas de secuenciación o por versiones distintas de programas y de bases de datos de referencia, antes de que intervenga biología alguna. Las consecuencias para la interpretación se examinan más a fondo en el análisis sobre [la brecha causal en la investigación del microbioma](/es/insight/microbiome-research-and-the-causal-gap), y la misma trampa inferencial reaparece en las [comunidades microbianas del suelo](/es/ecology/ecosystems/soil-microbiome-regenerative-agriculture), donde la abundancia relativa se lee igualmente como función.

La posición honesta es estrecha. Los estudios de secuenciación son buenos detectando que una comunidad difiere entre grupos, débiles al decir qué diferencia importa, y mudos sobre la dirección de la causalidad. Cerrar esa brecha exige o bien un aislado manejable que manipular, o bien una intervención en el hospedador — y para la mayoría de los taxones que estos estudios detectan, no hay actualmente ni lo uno ni lo otro.

## Sources

1. **PLOS Biology** — [Revised estimates for the number of human and bacteria cells in the body](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533). Recuentos de células bacterianas y humanas, la razón de 1.3 y su incertidumbre, y el origen de la afirmación del 10:1.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2017.02224/full). Por qué los totales de secuenciación son arbitrarios y qué le hace eso a las pruebas de correlación y de diferencia.
3. **Science** — [Gut microbiota from twins discordant for obesity modulate metabolism in mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC3829625/). Transmisibilidad de un fenotipo de adiposidad a ratones libres de gérmenes, y su dependencia de la dieta.
4. **EClinicalMedicine** — [Faecal microbiota transplantation for recurrent Clostridioides difficile infection: an updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7788438/). Efecto clínico agrupado, número necesario a tratar y gradación de las pruebas.
5. **Nature Communications** — [Meta-analysis of gut microbiome studies identifies disease-specific and shared responses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5716994/). Reanálisis entre enfermedades que muestra que muchas asociaciones no son específicas.
6. **mBio** — [Identifying and overcoming threats to reproducibility, replicability, robustness and generalizability in microbiome research](https://pmc.ncbi.nlm.nih.gov/articles/PMC5989067/). Marco que separa cuatro modos de fallo distintos.
7. **FEMS Microbiology Ecology** — [Ecology of the gut microbiota and colonization resistance: mechanisms and therapeutic implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC12728824/). Mecanismos por los que una comunidad residente y las defensas del hospedador excluyen a los invasores.
8. **Nature** — [Precision microbiome restoration of bile acid-mediated resistance to *Clostridium difficile*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4354891/). Conversión de ácidos biliares primarios en secundarios por un comensal residente como mecanismo de resistencia a la colonización.
9. **Microbiome** — [Adjusting microbiome profiles for differences in microbial load by spike-in bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC4915049/). Calibración por adición conocida para recuperar razones de abundancia absoluta a partir de recuentos de lecturas composicionales.
10. **Instituto Nacional de Investigación del Genoma Humano** — [Microbiome](https://www.genome.gov/genetics-glossary/Microbiome). Definición de referencia del término tal como se usa en estas literaturas.
