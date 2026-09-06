---
title: 'Medir o carbono florestal: alometria, parcelas, lidar e o orçamento de erro'
metaTitle: 'Medir o carbono florestal: alometria, parcelas, lidar e erro'
excerpt: Ninguém pesa uma floresta. Todo o número publicado de carbono florestal é o resultado de uma cadeia de substituições que vai da fita métrica ao total mundial, e o maior reservatório desse total é o pior medido.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 6
tags:
  - forest-carbon
  - allometry
  - lidar
  - forest-inventory
  - measurement-uncertainty
related:
  - forest-ecosystems-explained
  - forest-degradation-vs-deforestation
  - deforestation-statistics-explained
  - boreal-forests-and-permafrost-interactions
pillar: forest-ecosystems-explained
_bodyHash: 459329f
---

Ninguém pesou jamais uma floresta. Todo o número de carbono que se lhe atribui é o resultado de uma cadeia de substituições: um diâmetro de tronco faz as vezes da massa de uma árvore, um modelo estatístico faz as vezes do corte que a teria medido, uma parcela faz as vezes de uma paisagem, e um satélite faz as vezes das parcelas que nunca foram instaladas. Cada substituição é defensável e cada uma tem uma variância. Compreender um número de carbono florestal é saber que elo dessa cadeia está mais frouxo — e quase nunca é o que se supõe.

## Cinco reservatórios, desigualmente conhecidos

Os inventários de gases com efeito de estufa repartem o carbono florestal por cinco reservatórios, seguindo as orientações do IPCC para inventários nacionais. A avaliação mundial reporta os cinco, e a cobertura de reporte entre eles é enormemente desigual.

| Reservatório | Existência mundial, 2025 | Parte do total | Países que reportam | Área florestal coberta |
| --- | --- | --- | --- | --- |
| Carbono orgânico do solo | 329 Gt | 46 % | 77 | 70 % |
| Biomassa aérea | 247 Gt | 35 % | 215 | ~100 % |
| Biomassa subterrânea | 65,9 Gt | 9 % | 215 | ~100 % |
| Folhada | 41,1 Gt | 6 % | 75 | 66 % |
| Madeira morta | 30,3 Gt | 4 % | 101 | 78 % |

O total é de 714 gigatoneladas de carbono, cerca de 172 toneladas por hectare. A assimetria dessa tabela é o facto central do assunto. O maior reservatório é reportado por cerca de um terço dos países que reportam o segundo maior. E dos dois reservatórios com cobertura quase completa, só um é medido: a biomassa subterrânea é quase sempre inferida do número aéreo em vez de escavada, pelo que a sua aparente completude é herdada e não conquistada.

## Da fita métrica à tonelada de carbono

A medição de campo regista o diâmetro do tronco à altura do peito, por vezes a altura total, e uma identidade de espécie de que se consulta a densidade específica da madeira. Um **modelo alométrico** converte isso em massa aérea seca em estufa. O modelo pantropical de referência foi ajustado a uma base mundial de árvores diretamente abatidas — [4.004 fustes com pelo menos 5 cm de diâmetro em 58 locais](https://pubmed.ncbi.nlm.nih.gov/24817483/) — e verificou que, quando diâmetro, altura e densidade específica da madeira estão todos incluídos, um único modelo vale para os tipos de vegetação tropical sem efeito regional detetável. É um resultado firme, e vem com uma ressalva que conta na prática: a altura não é frequentemente medida. Onde falta, um substituto assente numa variável de stress bioclimático supera os modelos anteriores sem altura, mas os autores aconselham desenvolver relações locais diâmetro-altura sempre que possível, porque é nessa substituição que entra o enviesamento.

A massa torna-se depois carbono por um fator de conversão. A fração de carbono por defeito do IPCC para a matéria seca é de 0,47 toneladas de carbono por tonelada de matéria seca. A massa subterrânea quase nunca é medida; é inferida da aérea por um rácio raiz/parte aérea, com o exemplo trabalhado das orientações a usar 0,29 para povoamentos com 50 a 150 toneladas de [biomassa aérea](/en/glossary/aboveground-biomass) por hectare. Os totais mundiais são coerentes com essas convenções — uma biomassa viva de 647 gigatoneladas que transporta 313 gigatoneladas de carbono implica um rácio próximo de 0,48 — mas a coerência com um valor por defeito não é confirmação independente, porque em muitos países foi o valor por defeito que gerou o número.

## As parcelas são a camada com que tudo o resto é calibrado

Um inventário florestal nacional é a única parte desta cadeia que envolve medir árvores. O princípio de conceção é uma rede estatisticamente distribuída de parcelas permanentes remedidas num ciclo fixo: nos Estados Unidos as parcelas são remedidas a cada cinco a dez anos consoante a localização, registando dados de local e de árvore para fustes vivos e mortos em pé, com material lenhoso caído, solos e vegetação do sub-bosque acrescentados num subconjunto. A remedição é o que converte uma estimativa de existência numa estimativa de fluxo, e é por isso que as estimativas de sumidouro baseadas em inventário pesam o que pesam.

Aqui vivem dois erros diferentes que se confundem com frequência. O **erro de amostragem** é a incerteza por se ter medido parte da paisagem e não toda; encolhe de forma previsível à medida que se acrescentam parcelas. O **erro de modelo** é a incerteza da conversão alométrica aplicada a cada árvore de cada parcela; acrescentar parcelas não o reduz, porque o mesmo modelo é reutilizado. O erro de amostragem é ainda o mais fácil de calcular dos dois, pelo que um intervalo construído só com ele subestima o total — e a falha não se anuncia.

## O que o lidar mudou e o que não mudou

O lidar espacial substituiu o passo de extrapolação, não o de medição. A missão Global Ecosystem Dynamics Investigation da NASA dispara três lasers que produzem oito transectos no solo com pegadas de cerca de 25 metros espaçadas cerca de 60 metros ao longo da traça, com transectos a cerca de 600 metros uns dos outros, dando uma faixa transversal perto de 4,2 km. O seu produto em grelha infere a densidade média de biomassa aérea para células de 1 km a partir da amostra que cai dentro de cada uma, face a um requisito de missão de que 80 por cento das células fiquem dentro de um erro padrão de 20 toneladas por hectare ou de 20 por cento da estimativa, o que for maior.

Esta última frase merece ser lida duas vezes. O alvo de exatidão é enunciado por célula quilométrica, como erro padrão e com um piso — e a própria documentação do produto decompõe a sua incerteza em duas partes: covariância do modelo campo-lidar de biomassa e variância de amostragem por os feixes amostrarem a célula em vez de a cobrirem. Nenhuma desaparece com mais órbitas. A cobertura é também limitada: o instrumento observa entre cerca de 51,6° norte e sul, o que exclui a maior parte da zona boreal, onde a questão do carbono é de qualquer modo dominada pelos solos, como expõe [o problema do carbono do solo boreal](/pt/ecology/forests/boreal-forests-and-permafrost-interactions).

O radar aborda o mesmo alvo por outra via física. A missão Biomass da Agência Espacial Europeia, lançada a 29 de abril de 2025, transporta o primeiro radar de abertura sintética em banda P em órbita, com uma antena de 12 metros a 666 km de altitude, escolhida porque comprimentos de onda maiores penetram o dossel e devolvem sinal da estrutura lenhosa e não das folhas.

## Onde está de facto o orçamento de erro

Não nas árvores. O reservatório do solo é o maior e o mais frouxo, e a razão é banal: os países reportam carbono orgânico do solo até uma profundidade à sua escolha. A média mundial ponderada pela área florestal é de 41 cm, mas os valores regionais vão de 30 cm na Ásia e Oceânia e 32 cm na Europa a 70 cm na América do Norte e Central. Uma existência reportada a 30 cm e outra reportada a 70 cm não são a mesma grandeza, e somam-se num único total mundial. Para os países que não reportaram, os valores foram derivados sobrepondo uma grelha mundial de carbono do solo de 1 km que cobre apenas os 30 cm superiores com camadas de coberto florestal.

Os fatores de conversão trazem a sua própria dispersão. A avaliação de incerteza das orientações cita densidade básica da madeira entre 10 e 40 por cento, existências em pé em cerca de 8 por cento em países industrializados e 30 por cento noutros, área florestal em cerca de 3 por cento em países industrializados, e uma combinação de deteção remota com levantamento no terreno que, segundo diz, poderia descer a 10 ou 15 por cento. Não são pequenos face às mudanças que se pretende detetar.

O resultado propaga-se até ao balanço mundial. A avaliação do IPCC para a era industrial, de 1750 a 2019, coloca as emissões acumuladas de combustíveis fósseis e indústria em 445 ± 20 petagramas de carbono e o fluxo acumulado de uso do solo, alteração de uso e florestas em 240 ± 70 petagramas — uma incerteza relativa cerca de seis vezes maior no termo terrestre. Que o termo terrestre seja a parte menos restringida [do balanço mundial de carbono](/pt/ecology/earth-systems/carbon-cycle-explained) é consequência direta da cadeia descrita acima.

## Porque a aritmética decide o que um crédito certifica

O carbono florestal é preçado como se fosse medido. É modelado, e os pressupostos do modelo são em regra valores por defeito herdados. A mesma avaliação que publica a tabela acima nota que os seus números divergem do que os países submetem ao abrigo da convenção do clima, porque os dois sistemas usam definições de floresta diferentes, porque a convenção pergunta apenas pela floresta *gerida*, e porque os métodos de calibração, reclassificação e previsão diferem. Dois totais oficiais de carbono para as florestas do mesmo país podem por isso divergir sem que nenhum esteja errado.

Para um projeto que reivindica uma tonelagem concreta numa parcela concreta, a consequência prática é que a incerteza associada ao número é herdada de cada passo acima dele, e é mais larga onde o carbono do solo é incluído e onde se usam fatores por defeito em vez de ajustados localmente. Essa distância entre o que é certificado e o que é mensurável é examinada mais a fundo na nota sobre [o que os mercados de compensação de carbono compram realmente](/pt/insight/carbon-offset-outsourcing-science), e o problema paralelo de contar área em vez de massa é exposto em [como se constroem as estatísticas de desflorestação](/pt/ecology/forests/deforestation-statistics-explained). A pergunta de enquadramento — o que conta como floresta antes de se pesar seja o que for — pertence à [panorâmica das definições e estrutura florestais](/pt/ecology/forests/forest-ecosystems-explained).

## Sources

1. **FAO** — [Global Forest Resources Assessment 2025: growing stock, biomass and carbon](https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/FRA-2025/growing-stock-biomass-carbon.html). Existências de carbono reservatório a reservatório, cobertura de reporte, profundidades de solo por região e a divergência face ao reporte convencional.
2. **Global Change Biology, via PubMed** — [Improved allometric models to estimate the aboveground biomass of tropical trees](https://pubmed.ncbi.nlm.nih.gov/24817483/). A base de árvores abatidas por detrás do modelo alométrico pantropical e o papel da altura e da densidade específica da madeira.
3. **IPCC** — [Orientações de 2006 para inventários nacionais de gases com efeito de estufa, volume 4, capítulo 4: terras florestais](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf). Valores por defeito de fração de carbono e rácio raiz/parte aérea, e a avaliação de incerteza do capítulo para densidade da madeira, existências em pé e área.
4. **NASA ORNL DAAC** — [GEDI L4B Gridded Aboveground Biomass Density, Version 2](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html). Geometria de amostragem do instrumento, cobertura em latitude, requisito de exatidão da missão e as duas componentes de variância.
5. **Agência Espacial Europeia** — [Biomass](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/Biomass). A missão de radar em banda P, a sua data de lançamento e a configuração do instrumento.
6. **USDA Forest Service** — [Forest Inventory and Analysis](https://research.fs.usda.gov/programs/fia). Desenho de parcelas permanentes, intervalo de remedição e variáveis registadas em parcelas e subparcelas.
7. **IPCC AR6 WG1, capítulo 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Fluxos acumulados fósseis e de uso do solo com as suas incertezas avaliadas.
8. **FAO** — [Global Forest Resources Assessment 2025](https://openknowledge.fao.org/handle/20.500.14283/cd6709en). A avaliação completa, incluindo o capítulo metodológico por detrás dos números de cobertura de reporte.
