---
title: O que é um genoma e por que o seu tamanho quase nada diz
excerpt: Um genoma é o conteúdo completo de ADN de uma célula. O tamanho, o número de genes e a fração funcional são três medições distintas, que respondem a três perguntas distintas e cuja fiabilidade é muito desigual.
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
_bodyHash: 229c03a2
---

Um genoma é o conjunto completo do ADN que uma célula transporta — os cromossomas nucleares mais aquilo que as mitocôndrias e, nas plantas, os plastídios transportam por conta própria. Essa definição não é contestada. Quase tudo o que se constrói sobre ela é uma medição, e as três medições a que mais frequentemente se recorre — que tamanho tem um genoma, quantos genes contém e que parte dele faz alguma coisa — diferem enormemente no grau de solidez com que estão estabelecidas. Só a primeira está praticamente assente. O substrato molecular é tratado à parte em [o que é o ADN e o que não determina](/pt/biology/genetics/what-is-dna); esta página trata da camada contabilística que assenta sobre a molécula.

## A única medição que finalmente se tornou precisa

O tamanho do genoma pode medir-se de duas maneiras, e não são a mesma operação. A citometria de fluxo e a densitometria medem o conteúdo físico de ADN de um núcleo, expresso como valor C em picogramas ou em gigapares de bases. A sequenciação mede o comprimento da montagem: quantas bases um montador conseguiu ordenar.

Durante décadas o segundo número foi menor do que o primeiro, porque as regiões repetitivas venciam as leituras curtas. A anotação do Ensembl para GRCh38.p14 indica um comprimento de golden path de 3,099,750,718 pares de bases — número que incluía lacunas de vários megabases nos centrómeros e nos braços curtos dos cromossomas acrocêntricos. A montagem CHM13 do consórcio Telomere-to-Telomere fechou-as: indica 3,054,815,472 bp de ADN nuclear mais um genoma mitocondrial de 16,569 bp e acrescenta 238 Mbp que não se alinham de forma colinear com GRCh38, dos quais 182 Mbp não têm qualquer alinhamento primário. Essa montagem também fixou números firmes para o conteúdo repetitivo: 1,647.81 Mbp, ou 53.94 por cento da sequência, são repetitivos, cabendo só às duplicações segmentares 6.61 por cento.

Vale a pena esclarecer o que ali significava «completo». As matrizes de ADN satélite e as repetições de ADNr foram resolvidas enquanto sequência, em grande medida graças às [plataformas de sequenciação de leituras longas](/pt/biology/biotechnology/dna-sequencing-technologies) capazes de as abranger. O que essas matrizes fazem não ficou resolvido por as ler.

## Uma amplitude de 2,400 vezes, e nada nela acompanha a complexidade

O mais útil que há a saber sobre o tamanho do genoma é que varia enormemente e prevê muito pouco. Só as plantas vasculares abrangem um fator de cerca de 2,400 vezes em conteúdo de ADN. O recorde pertence agora a um feto-forquilha da Nova Caledónia, *Tmesipteris oblanceolata*, com 160.45 Gbp por 1C — mais de cinquenta vezes o genoma humano, numa planta com poucos centímetros de altura. Destronou a angiospérmica *Paris japonica*, com 148.89 Gbp.

É este o **[paradoxo do valor C](/en/glossary/c-value-paradox)**: o conteúdo de ADN por célula não tem qualquer relação constante com o grau de elaboração de um organismo. O paradoxo dissolveu-se assim que o ADN repetitivo foi devidamente caracterizado. A maior parte da diferença entre um genoma de 3 Gbp e um de 160 Gbp é expansão de elementos transponíveis e poliploidia retida, não genes adicionais. O que sobrevive a essa resolução é um aviso e não um enigma: o tamanho do genoma é uma grandeza real, medível com precisão, e um mau indicador de quase tudo o que se quereria saber sobre o organismo.

## A contagem de genes foi descendo durante cinquenta anos

Era antes o número de genes que deveria ser a medição informativa. A sua história é uma longa descida. A estimativa preliminar de Friedrich Vogel, de 1964 — calculada dividindo o genoma pelo comprimento de um gene do tamanho do da hemoglobina, no pressuposto de que todo o genoma codificava proteína e de que os genes eram ininterruptos —, chegou a 6.7 milhões. O relatório conjunto de 1990 dos National Institutes of Health e do Department of Energy dos Estados Unidos usava 100,000. Os levantamentos de etiquetas de sequências expressas até meados da década de 1990 agrupavam-se entre 50,000 e 100,000. Em 2000, as estimativas iam de 28,000 a 57,000 e, uma década depois, uma revisão de todo o exercício fixou em 22,333 o seu próprio melhor palpite.

As anotações atuais colocam a contagem de genes codificantes de proteínas pouco abaixo de 20,000. O conjunto de genes do Ensembl baseado no GENCODE para a montagem primária GRCh38.p14 — tal como anotado na versão 116 do Ensembl, construída sobre o GENCODE 50 — lista 19,878 genes codificantes a par de 42,155 genes não codificantes e 15,205 pseudogenes; a anotação de CHM13 previu 19,969 genes codificantes de proteínas num total de 63,494. A convergência importa menos do que aquilo que revela: a contagem de codificantes é agora estável a menos de algumas centenas, ao passo que as contagens de não codificantes e de pseudogenes não o são, porque dependem de critérios de anotação que ainda estão a mudar.

Em contraponto, do nemátode *Caenorhabditis elegans* — 97 megabases, cerca de um trigésimo do genoma humano — foi relatado em 1998 que transportava mais de 19,000 genes. Um verme com cerca de um milhar de células somáticas e um ser humano têm contagens de genes codificantes de proteínas da mesma ordem. O que os distingue é sobretudo a forma como esses genes são mobilizados, que é o tema da [regulação da expressão génica](/pt/biology/genetics/how-gene-expression-is-regulated).

## «Funcional» faz dois trabalhos ao mesmo tempo

O número mais contestado da genómica é a fração do genoma humano que é funcional, e a disputa é definicional antes de ser empírica. O consórcio ENCODE relatou em 2012 que os seus ensaios conseguiam «atribuir funções bioquímicas a 80% do genoma» — 80.4 por cento pela sua própria contabilidade, ou seja, a parcela do genoma coberta por pelo menos um elemento identificado pelo ENCODE. A classe mais ampla era o ARN: 62 por cento das bases genómicas estavam representadas de forma reprodutível em moléculas longas de ARN sequenciadas ou em exões anotados, uma medida da [transcrição ao longo do genoma](/pt/glossary/transcription), embora a maior parte disso fique dentro de intrões ou junto a genes. As regiões enriquecidas em modificações de histonas cobriam 56.1 por cento, a cromatina aberta 15.2 por cento e a ligação de fatores de transcrição 8.1 por cento; segundo a avaliação mais conservadora do próprio consórcio, 8.5 por cento das bases caem dentro de um motivo de ligação de fatores de transcrição ou de uma pegada de DNase.

Uma crítica detalhada na *Genome Biology and Evolution* argumentou que isto usa uma definição por papel causal — esta sequência faz algo mensurável — onde a [biologia evolutiva](/pt/biology/evolution/natural-selection-and-adaptation) usa uma definição por efeito selecionado: esta sequência é mantida por seleção purificadora porque perdê-la custa aptidão. Pelo segundo critério, a genómica comparativa coloca a fração conservada abaixo de 15 por cento, com a análise mais completa perto de 5 por cento, subindo para cerca de 9 por cento quando se acrescenta a restrição específica de linhagem inferida a partir da variação dentro da espécie. O ponto mais afiado da crítica é aritmético: se 80 por cento é funcional e apenas cerca de 10 por cento está sob seleção, então uns 70 por cento do genoma teriam de ser funcionais e, ao mesmo tempo, imunes à mutação deletéria.

Os próprios autores do ENCODE publicaram dois anos depois uma resposta ponderada, reconhecendo na *PNAS* que as regiões bioquimicamente ativas cobrem uma fração do genoma muito maior do que as regiões conservadas do ponto de vista evolutivo, e que as abordagens bioquímica, evolutiva e genética respondem cada uma a uma pergunta diferente. Essa é a leitura honesta. Nenhuma das duas cifras é um erro; são medições de propriedades diferentes, e um título que converte «bioquimicamente ativo» em «necessário» mudou a afirmação.

## Um único genoma de referência foi sempre um compromisso

GRCh38 não é o genoma de ninguém. Foi construído de forma oportunista a partir de clones de cromossomas artificiais bacterianos provenientes de vários indivíduos, o que o deixou um mosaico de haplótipos a servir de sistema de coordenadas e não de espécime — o que significa que cada variante identificada é expressa como uma diferença face a uma linha de base arbitrária. O conteúdo génico difere realmente entre pessoas: uma estimativa a partir de três genomas sequenciados situou entre 73 e 87 genes a diferença entre duas pessoas quaisquer, sobretudo por variação nas duplicações segmentares.

O rascunho de 2023 do Human Pangenome Reference Consortium substitui a linha única por um grafo. Reúne 47 montagens diploides com fases resolvidas, de indivíduos geneticamente diversos, e acrescenta 119 milhões de pares de bases de sequência eucromática polimórfica e 1,115 duplicações génicas em relação ao GRCh38, com cerca de 90 milhões dessas bases a virem de variação estrutural. Usado para analisar dados de leituras curtas, reduziu em 34 por cento os erros na descoberta de variantes pequenas e aumentou em 104 por cento as variantes estruturais detetadas por haplótipo. A mesma lógica é há muito norma em microbiologia, onde uma espécie é descrita por um genoma central mais um conjunto acessório que difere entre estirpes — o enquadramento usado em [as bactérias e as arqueias como domínios distintos](/pt/biology/microbiology/bacteria-and-archaea-explained).

Restam três limites. Quarenta e sete montagens são uma amostra escassa da diversidade humana, e as populações representadas não estão ponderadas de forma equilibrada. A anotação vai atrás da montagem: os 3,604 genes previstos apenas em CHM13 caem em grande parte em regiões que se mantiveram inacessíveis até as leituras longas lá chegarem, e são sobretudo parálogos putativos e não modelos curados. E nada disto toca a questão funcional: conhecer cada base de cada genoma continuaria a deixar em aberto quais delas importam, porque essa é uma pergunta sobre seleção e fenótipo, não sobre sequência. O ritmo a que novas diferenças entram num genoma é tratado em [tipos de mutação e taxas por geração](/pt/biology/genetics/mutation-types-and-rates), e a maquinaria que mantém esse ritmo tão baixo quanto ele é, em [replicação e reparação do ADN](/pt/biology/genetics/dna-replication-and-repair).

## Sources

1. **T2T Consortium, *Science*** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Comprimento da montagem CHM13, sequência acrescentada em relação ao GRCh38, previsões de genes e conteúdo de repetições e de duplicações segmentares.
2. **EMBL-EBI, Ensembl** — [Human assembly and gene annotation](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation). Comprimento do golden path de GRCh38.p14 e contagens GENCODE de genes codificantes, não codificantes e pseudogenes.
3. **Fernández e colaboradores, *iScience*** — [A 160 Gbp fork fern genome shatters size record for eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11270024/). Tamanho recorde de um genoma eucariota e amplitude dos tamanhos de genoma nas plantas vasculares.
4. **Consórcio de Sequenciação de C. elegans, *Science*** — [Genome sequence of the nematode C. elegans](https://pubmed.ncbi.nlm.nih.gov/9851916/). Tamanho do genoma e contagem de genes para a comparação com o nemátode.
5. **Pertea e Salzberg, *Genome Biology*** — [Between a chicken and a grape: estimating the number of human genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2898077/). História das estimativas do número de genes humanos e variação do conteúdo génico entre indivíduos.
6. **ENCODE Project Consortium, *Nature*** — [An integrated encyclopedia of DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3439153/). A afirmação de função bioquímica para 80 por cento do genoma.
7. **Graur e colaboradores, *Genome Biology and Evolution*** — [On the immortality of television sets: "function" in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC3622293/). A crítica por efeito selecionado e as estimativas de funcionalidade baseadas na conservação.
8. **Kellis e colaboradores, *PNAS*** — [Defining functional DNA elements in the human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4035993/). A conciliação, pelos próprios autores do ENCODE, das definições bioquímica, evolutiva e genética.
9. **Human Pangenome Reference Consortium, *Nature*** — [A draft human pangenome reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172123/). Número de montagens, sequência acrescentada e efeito medido na descoberta de variantes.
