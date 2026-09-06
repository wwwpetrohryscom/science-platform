---
title: 'Bioinformática: quatro inferências entre o sequenciador e o resultado'
metaTitle: 'Bioinformática: as quatro inferências de uma sequenciação'
excerpt: 'Os dados de sequência só se tornam um resultado depois de quatro inferências: alinhamento, montagem, anotação e filtragem estatística. Esta página segue esses quatro passos e o modo típico como cada um falha.'
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
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
_bodyHash: '32081980'
---

A versão 273 do GenBank, publicada em agosto de 2026, contém 8,236,878,868,450 bases em 267,383,895 registos de sequência, e a sua divisão whole-genome shotgun contém mais 50,829,714,144,609 bases distribuídas por mais de 5.1 mil milhões de registos. O Sequence Read Archive do NCBI, que guarda a saída bruta em vez dos registos curados, tinha ultrapassado 91 petabases no último ponto da sua série de crescimento publicada, em fevereiro de 2024. Nada disso é um resultado. Só passa a sê-lo depois de o software ter decidido de onde veio cada leitura, o que formam as leituras uma vez montadas, o que a sequência montada provavelmente faz e quais das diferenças entre duas amostras merecem ser relatadas. São quatro inferências distintas, e cada uma tem a sua maneira própria de estar errada.

Os instrumentos que produzem as leituras — e o modo como diferem os seus comprimentos de leitura e perfis de erro — são o objeto da página companheira sobre [as plataformas de sequenciação e para que serve cada uma](/pt/biology/biotechnology/dna-sequencing-technologies). O que se segue situa-se a jusante deles, na camada que transforma sinal em afirmação e da qual depende hoje a maior parte da [caixa de ferramentas biotecnológica moderna](/pt/biology/biotechnology/biotechnology-explained).

## O alinhamento pontua a semelhança contra uma pesquisa, não contra a biologia

O alinhamento ótimo por pares está resolvido num sentido estrito. A programação dinâmica — global na formulação de Needleman–Wunsch, local na de Smith–Waterman — devolve o alinhamento de pontuação mais alta sob um esquema de pontuação escolhido, a um custo proporcional ao produto dos comprimentos das duas sequências. Perante uma base de dados de centenas de milhões de registos esse custo é incomportável, pelo que a pesquisa prática é heurística: semear em correspondências exatas ou quase exatas curtas, estender as promissoras e nunca examinar a maior parte da base de dados.

Seguem-se duas consequências, e ambas se perdem com facilidade. A pontuação em si depende da matriz de substituição e das penalizações de lacuna, que em conjunto codificam um pressuposto sobre quão distantes se espera que as sequências estejam; mude-se o pressuposto e a ordenação dos acertos pode mudar. E a significância estatística atribuída a um acerto depende do tamanho do espaço pesquisado, pelo que o mesmo par de sequências se torna menos surpreendente à medida que a base de dados cresce. Uma correspondência que ultrapassava o limiar perante uma base de dados de um milhão de entradas não tem de o ultrapassar perante uma de duzentos milhões. O que uma pontuação de alinhamento relata é quão invulgar é uma semelhança *dada esta pesquisa*, o que não é a mesma questão que a de saber se duas moléculas são aparentadas.

## Onde o grafo de montagem se ramifica

A montagem reconstrói sequências longas a partir de observações curtas construindo um grafo — de sobreposições entre leituras, ou de palavras de comprimento fixo na formulação de De Bruijn — e encontrando depois um caminho através dele. Uma repetição mais longa do que as leituras que a abrangem produz um ponto de ramificação sem qualquer evidência local sobre que direção tomar. Os desfechos habituais são o colapso, em que várias cópias de uma repetição se fundem numa só, e a fragmentação, em que a montagem para na fronteira.

Durante duas décadas a referência humana carregou as consequências disso, e a medida mais clara é o conteúdo em duplicações segmentares — blocos longos e quase idênticos, precisamente aquilo que um montador limitado por repetições faz colapsar. O GRCh38 continha 151.71 megabases dessa sequência; a primeira montagem completa contém 201.93, um terço mais. Nas regiões onde a referência mais antiga não tem qualquer alinhamento primário, a montagem completa anota 1,956 genes.

O ponto metodológico não é que a referência anterior tenha sido construída sem cuidado. É que as regiões irresolúveis estavam ausentes em vez de assinaladas, pelo que uma consulta que aí nada devolvia parecia idêntica a uma consulta que nada devolvia em qualquer outro lado. A ausência numa referência é lida como ausência na biologia enquanto nada marcar a diferença, e durante a maior parte do período em causa nada o fazia. O mesmo problema numa comunidade mista, onde não existe referência alguma, é o que os níveis de qualidade dos [genomas montados a partir de metagenomas](/pt/biology/biotechnology/metagenome-assembled-genomes-and-their-quality) existem para delimitar.

## A maior parte da anotação é herdada, não observada

A palavra «anotação» sugere observação. Quase nada dela o é. A função é atribuída esmagadoramente por transferência — uma sequência nova assemelha-se a uma caracterizada, herdando por isso a descrição desta — e o rótulo resultante fica então disponível como evidência para a transferência seguinte.

A escala da assimetria é crua. A UniProtKB tinha cerca de 246 milhões de registos de sequência na versão 2024_04, e a sua secção revista manualmente mede-se em centenas de milhares. É a anotação automática que preenche a lacuna: incorporar um único recurso de assinaturas no anotador baseado em regras da UniProt gerou 9,141 novas regras e 119,579,654 novas previsões que cobrem mais de 20 milhões de sequências, e um sistema de nomeação por aprendizagem automática forneceu nomes de proteína a mais de 28 milhões de entradas antes rotuladas como não caracterizadas.

O modo de falha da transferência foi medido diretamente num estudo de 37 famílias de enzimas com forte cobertura experimental. A secção curada manualmente da UniProtKB mostrou anotação errada próxima de zero para a maioria das famílias, ao passo que as bases de dados anotadas automaticamente ficaram em média entre 5 e 63 por cento nas superfamílias examinadas; em 10 das 37 famílias, a anotação errada excedeu 80 por cento em pelo menos uma base de dados. A maioria dos erros foi de **sobrepredição** — atribuir uma função mais específica do que a evidência sustenta — e a taxa subiu de forma constante entre 1993 e 2005, à medida que cada rótulo errado se tornava modelo para o seguinte. A estrutura tridimensional prevista oferece agora uma linha de evidência em parte independente, com as ressalvas importantes expostas em [o que a previsão de estrutura pode e não pode estabelecer](/pt/biology/biotechnology/protein-structure-prediction).

## Contar as hipóteses que foram realmente testadas

As análises ómicas testam quantidades enormes de hipóteses ao mesmo tempo, e a aritmética disso é implacável. O GWAS Catalog, na sua versão de agosto de 2026, reúne 1,191,572 associações relatadas provenientes de 7,797 publicações e abrangendo 562,145 variantes — um corpo construído testando centenas de milhares de variantes por estudo contra cada característica.

Duas correções são de uso corrente e respondem a perguntas diferentes. O controlo do erro por família exige uma probabilidade baixa de *qualquer* falso positivo, o que é apropriado quando uma única afirmação errada sai cara. O controlo da taxa de falsas descobertas, na formulação de Benjamini–Hochberg, limita em vez disso a proporção esperada de falsos positivos entre os resultados que se relatam, que é a moeda certa quando o produto é uma lista curta para trabalho de seguimento. Nenhum dos dois torna fiável um acerto individual. Um gene relatado a uma taxa de falsas descobertas de 5 por cento é membro de uma lista da qual se espera que um em cada vinte membros esteja errado, e não há nada na estatística que diga qual. A mesma lógica governa a leitura dos estudos de associação, tratada em detalhe em [o que os estudos de associação do genoma completo podem sustentar](/pt/biology/genetics/genome-wide-association-studies-explained); aplica-se igualmente aos rastreios diferenciais de [expressão génica](/pt/glossary/gene-expression), proteómicos e metabolómicos.

## As mesmas leituras, analisadas duas vezes

As escolhas de análise fazem parte do resultado, e o seu contributo é mensurável. Um estudo que repartiu 219 conjuntos de dados humanos de genoma completo em alta profundidade consoante a constância com que diferentes pipelines de chamada de variantes concordavam concluiu que 20 a 30 por cento do genoma cai em território de baixa concordância, e que a concordância depende predominantemente do contexto genómico e não de qual o conjunto de dados usado — ou seja, o desacordo é sistemático e previsível e não ruído aleatório.

A versão da referência conta com igual concretude. O Genome in a Bottle Consortium, acolhido pelo NIST, produz as chamadas de variantes de referência com que os pipelines são pontuados, e essas referências excluíam quase 400 genes clinicamente relevantes por serem demasiado repetitivos ou demasiado polimórficos para serem chamados com confiança. Um conjunto curado que cobre 273 desses 395 genes mostrou que duplicações falsas presentes em GRCh37 ou GRCh38 causam variantes falhadas específicas da referência; mascará-las elevou a sensibilidade nos genes afetados de 8 por cento para 100 por cento. Dois laboratórios com leituras idênticas, diferindo apenas na versão da referência, podem por isso publicar listas de variantes diferentes estando ambos a seguir a prática corrente.

| Etapa | O que está a ser inferido | O que a faz falhar |
| --- | --- | --- |
| Alinhamento | De onde veio uma sequência | Tamanho do espaço de pesquisa; pressupostos de pontuação |
| Montagem | Qual era a molécula subjacente | Repetições mais longas do que as leituras |
| Anotação | O que a sequência faz | Transferência a partir de um rótulo já errado |
| Teste | Que diferenças são reais | Número de hipóteses; região excluída das referências |

Nada disto argumenta a favor de menos confiança na análise de sequências em geral; as referências da disciplina são invulgarmente boas, e os números de concordância e de anotação errada acima existem porque a área mediu as suas próprias taxas de erro. Argumenta a favor de relatar aquilo que determina se um número é reprodutível. Uma lista de variantes sem a sua versão de referência, uma atribuição funcional sem o seu código de evidência e uma lista de acertos sem o seu espaço de pesquisa e método de correção estão cada uma incompletas de um modo invisível para o leitor e com consequências a jusante — a mesma distância entre um conjunto de dados e a afirmação dele extraída que a nota sobre [a incerteza perdida entre o conjunto de dados e o título](/pt/insight/uncertainty-lost-between-dataset-and-headline) traça noutro domínio.

## Sources

1. **NCBI** — [GenBank and WGS statistics](https://www.ncbi.nlm.nih.gov/genbank/statistics/). Contagens de bases e de registos da versão 273 para o GenBank e para a divisão WGS.
2. **NCBI** — [Sequence Read Archive growth](https://www.ncbi.nlm.nih.gov/sra/docs/sragrowth/). Série de crescimento publicada para os acervos de sequência bruta.
3. **Science / PMC** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Tamanho da montagem T2T-CHM13, sequência não alinhada, conteúdo em duplicações segmentares e genes anotados de novo.
4. **PLOS Computational Biology** — [Annotation error in public databases: misannotation of molecular function in enzyme superfamilies](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000605). Taxas de anotação errada medidas e o crescimento da sobrepredição ao longo do tempo.
5. **Nucleic Acids Research / PMC** — [UniProt: the Universal Protein Knowledgebase in 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11701636/). Contagens de registos e a escala das regras e previsões de anotação automática.
6. **EMBL-EBI** — [NHGRI-EBI GWAS Catalog](https://www.ebi.ac.uk/gwas/home). Contagens atuais de associações curadas, estudos e variantes.
7. **Bioinformatics / PMC** — [ReliableGenome: annotation of genomic regions with high/low variant calling concordance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5903559/). Proporção do genoma em regiões de baixa concordância ao longo de 219 conjuntos de dados de genoma completo.
8. **Nature Biotechnology / PMC** — [Curated variation benchmarks for challenging medically relevant autosomal genes](https://pmc.ncbi.nlm.nih.gov/articles/PMC9117392/). Genes excluídos das referências padrão e o efeito das duplicações falsas da referência sobre a sensibilidade.
9. **NIST** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Chamadas de variantes de referência e estratificação das regiões genómicas difíceis.
