---
title: 'Tecnologias de sequenciação: comprimento de leitura, perfil de erro e para que serve cada uma'
metaTitle: 'Plataformas de sequenciação: leitura e perfil de erro'
excerpt: Escolher uma plataforma de sequenciação tem menos a ver com a exatidão de manchete do que com a forma dos seus erros e o comprimento das suas leituras. Eis como diferem as grandes famílias, porque variam as exigências de profundidade e o que a curva de custos deixa de fora.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
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
_bodyHash: 55ab6173
---

Pergunte que plataforma de sequenciação é a mais exata e obterá uma resposta inútil, porque as plataformas falham de maneiras diferentes. Um método que comete erros de substituição raros e dispersos e um método que comete erros frequentes mas previsíveis num contexto de sequência específico podem declarar a mesma exatidão e servir problemas completamente distintos. O [comprimento de leitura](/en/glossary/read-length), a forma do erro e o custo por base são os três eixos que decidem de facto um projeto, e negoceiam uns contra os outros. Ler ADN é a capacidade que tornou tratável o resto da [caixa de ferramentas biotecnológica](/pt/biology/biotechnology/biotechnology-explained), e é também aquela cuja economia é mais frequentemente citada fora de contexto.

## Três maneiras de transformar uma molécula numa cadeia de caracteres

O método de terminação de cadeia descrito em 1977 lê sequência fabricando cópias que param em bases definidas. Análogos didesoxinucleótidos atuam como inibidores terminadores de cadeia da ADN polimerase, produzindo um conjunto encaixado de fragmentos cujos comprimentos indicam a posição de cada base; a demonstração original foi no bacteriófago φX174. Continua em uso para confirmações curtas num único locus, porque é simples e os seus modos de falha são visíveis no traçado.

A sequenciação por síntese de leitura curta substituiu-o para tudo o que é feito em escala. Milhões de agrupamentos separados no espaço são estendidos uma base de cada vez e captados em paralelo, produzindo leituras de algumas centenas de bases com erro por base muito baixo, dominado por substituições e não por inserções ou deleções. A sua restrição não é a exatidão mas o comprimento: uma leitura mais curta do que uma repetição não pode ser colocada sem ambiguidade num genoma que contém essa repetição mais do que uma vez.

As plataformas de leitura longa de molécula única sequenciam uma molécula sem amplificação. A montagem completa do genoma humano publicada em 2022 usou duas delas em conjunto e descreve as suas propriedades diretamente: leituras de consenso circular com cerca de 20 kbp em média e uma taxa de erro perto de 0,1 por cento, e leituras de nanoporo ultralongas acima de 100 kbp com exatidão por leitura substancialmente menor. As duas são complementares — uma dá precisão ao nível da base, a outra atravessa estruturas que mais nada cruza.

| Família | Comprimento típico de leitura | Carácter dominante do erro | O que resolve |
| --- | --- | --- | --- |
| Terminação de cadeia | Menos de uma quilobase | Baixo, visível no traçado | Loci únicos, verificação de construções |
| Síntese de leitura curta | Centenas de bases | Substituições, dependentes do contexto | Variantes em sequência única, contagem profunda |
| Leituras longas de consenso circular | Cerca de 20 kbp | Baixo e em larga medida aleatório | Montagem através da maioria das repetições |
| Leituras de nanoporo ultralongas | Mais de 100 kbp | Mais alto, em parte sistemático | Duplicações segmentares, centrómeros |

## O erro aleatório dilui-se; o sistemático não

A distinção que mais importa na prática é se um erro se repete na mesma posição pela mesma razão. Erros aleatórios independentes são diluídos pela profundidade: sequencie um sítio trinta vezes e um erro aleatório de 1 por cento torna-se desprezável no consenso. Um erro sistemático sobrevive a qualquer cobertura, porque todas as leituras cometem o mesmo engano.

A sequenciação por nanoporo forneceu o exemplo recente mais claro. Uma avaliação de 2024 da reconstrução de genomas bacterianos verificou que a química mais antiga R9.4.1 dava uma exatidão mediana por leitura de 96,8 por cento (intervalo interquartil 95,9-97,4), subindo para 98,8 por cento (98,1-99,2) com R10.4.1, e para uma mediana de 99,2 por cento (98,8-99,5) quando as leituras eram chamadas com um modelo de basecalling mais recente. É crucial que parte do erro residual não era ruído mas um padrão reprodutível: substituições de guanina para adenina e de citosina para timina apareciam sistematicamente na maioria das combinações de sequenciação, basecalling e montagem testadas, e são atribuídas a sítios metilados que confundem os modelos de basecalling. A correção foi um basecaller treinado em ADN bacteriano nativo, não sequenciação mais profunda. O mesmo estudo verificou que montagens apenas de leitura longa com a química e o basecaller novos recuperavam mais de 99 por cento das sequências codificantes anotadas com cobertura de 30× ou mais, comparável a montagens híbridas que combinam leituras longas e curtas.

Essa é a lição geral. Quando os erros restantes de uma plataforma dependem do contexto, a correção vive na camada de interpretação — modelos de basecalling, polimento, grafos de montagem — e não na química, o que é uma razão para a fronteira entre sequenciação e [análise computacional de dados de sequência](/pt/biology/biotechnology/bioinformatics-explained) não ser nítida.

## Porque as exigências de profundidade diferem tanto

A cobertura não é uma definição de qualidade; é uma exigência estatística derivada daquilo que se procura detetar. Para uma variante germinal presente em metade ou em todas as moléculas sequenciadas, basta profundidade moderada, e o valor de 30× acima é a cobertura à qual as montagens bacterianas desse estudo atingiram recuperação quase completa das sequências codificantes. Detetar uma variante presente numa pequena fração de células — uma mutação somática subclonal, um agente patogénico minoritário numa mistura — exige profundidade que escala inversamente com essa fração, mais uma taxa de erro baixa o bastante para o sinal verdadeiro se distinguir do fundo a essa frequência. É por isso que o mesmo instrumento pode ser descrito como adequado para uma aplicação e desesperado para outra sem contradição. A mesma aritmética governa [os levantamentos de comunidades microbianas por sequenciação](/pt/biology/microbiology/culturing-and-sequencing-microbes), onde a contagem de leituras de um táxon reflete a escolha de iniciadores e a profundidade antes de refletir abundância. Os ensaios por sequenciação de [atividade fora do alvo na edição de genomas](/pt/biology/biotechnology/crispr-genome-editing-explained) enfrentam exatamente este problema: os eventos contados podem ser mais raros do que o próprio piso de erro da plataforma.

Os projetos de genoma de referência ilustram o extremo superior. A par das suas leituras longas, a montagem humana completa apoiou-se em cerca de 100× de dados de leitura curta e 70× de dados de conformação cromossómica como evidência de apoio, juntamente com mapas óticos e mapas específicos de cadeia em célula única.

## O que as leituras longas compraram de facto

A montagem completa publicada em 2022 totaliza 3.054.815.472 pares de bases de ADN nuclear mais um genoma mitocondrial de 16.569 pares de bases. Face à referência anterior acrescentou ou corrigiu 238 Mbp de sequência não sinténica, dos quais 182 Mbp não tinham qualquer alinhamento primário com a montagem anterior. Dentro do material recém-resolvido reportou 3.604 genes ausentes da referência anterior, dos quais 140 foram previstos como codificantes de proteína, e 99 genes previstos como codificantes de proteína caíam em regiões sem alinhamento anterior.

O ponto não é que a referência tenha crescido alguns por cento. É que as regiões em falta não faltavam ao acaso — eram as partes repetitivas, duplicadas e ricas em satélites do genoma, sistematicamente excluídas porque as leituras curtas não podiam ser colocadas nelas. Uma geração de estudos descreveu o genoma como se essas regiões não existissem, uma forma específica e corrigível da [distância entre uma sequência de referência e um genoma](/pt/biology/genetics/what-is-a-genome).

## A curva de custos e a parte que nunca foi preçada

Os números de custo que o National Human Genome Research Institute publica para os seus centros financiados são citados constantemente e sobre-interpretados por rotina. A tabela regista cerca de 95,3 milhões de dólares por genoma em setembro de 2001, 7,1 milhões em outubro de 2007, 3,1 milhões três meses depois, e cerca de 525 dólares em maio de 2022 — uma queda de mais de cinco ordens de grandeza. O instituto data o afastamento mais brusco do comportamento de duplicação do hardware informático em janeiro de 2008, quando os seus centros passaram a instrumentos de segunda geração, que é exatamente onde essa queda de mais de metade num só trimestre aparece. A contabilidade do próprio instituto para a era da referência é igualmente precisa: o rascunho original do genoma humano custou da ordem de 300 milhões de dólares em todo o mundo, e o refinamento até uma sequência acabada acrescentou cerca de 150 milhões.

O que esses números incluem é produção: reagentes, instrumentos, mão de obra, sistemas de informação laboratorial, processamento inicial de dados. O que excluem é a garantia de qualidade, o alinhamento a uma referência, a montagem, a chamada de variantes e a anotação. Por outras palavras, a curva publicada preça a geração de leituras, não a produção de um resultado interpretável. Um laboratório que anuncia um preço por amostra raramente está a citar a mesma grandeza, e uma comparação entre as duas não é comparação nenhuma.

## O que o benchmarking continua sem poder certificar

As afirmações de exatidão assentam em materiais de referência, e esses têm fronteiras. O consórcio Genome in a Bottle do National Institute of Standards and Technology caracteriza um pequeno conjunto de amostras humanas — um genoma piloto e dois trios familiares — e distribui tanto conjuntos de variantes de referência como ficheiros de estratificação que assinalam terreno difícil: homopolímeros, repetições em tandem, o complexo maior de histocompatibilidade. Essas estratificações existem porque o desempenho dentro delas difere do desempenho fora, e um benchmark que reporta um único número de exatidão para todo o genoma sem elas está a fazer a média dessa diferença.

A consequência para ler qualquer afirmação é estreita e prática. Uma exatidão declarada aplica-se às regiões que o benchmark cobre, nos tipos de amostra que cobre, com a cadeia de análise que a produziu. As regiões excluídas de um benchmark não ficam certificadas como fáceis; simplesmente não ficam certificadas.

## Sources

1. **Proceedings of the National Academy of Sciences** — [DNA sequencing with chain-terminating inhibitors](https://pmc.ncbi.nlm.nih.gov/articles/PMC431765/). O método didesoxi de 1977 e a sua primeira aplicação.
2. **Nature (manuscrito de autor, PubMed Central)** — [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). Tamanho da montagem, sequência acrescentada, contagens de genes e tecnologias de leitura usadas.
3. **Microbial Genomics** — [Evaluation of the accuracy of bacterial genome reconstruction with Oxford Nanopore R10.4.1 long-read-only sequencing](https://pmc.ncbi.nlm.nih.gov/articles/PMC11170131/). Distribuições de exatidão por leitura, erros sistemáticos ligados a metilação e efeitos de cobertura.
4. **National Human Genome Research Institute** — [DNA sequencing costs: data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). A série de custo por genoma e o âmbito dessa contabilidade.
5. **National Human Genome Research Institute** — [The cost of sequencing a human genome](https://www.genome.gov/about-genomics/fact-sheets/Sequencing-Human-Genome-cost). Custos da era da referência e o que as estimativas incluem e excluem.
6. **National Institute of Standards and Technology** — [Genome in a Bottle](https://www.nist.gov/programs-projects/genome-bottle). Materiais de referência, conjuntos de variantes de benchmark e estratificações para regiões difíceis.
