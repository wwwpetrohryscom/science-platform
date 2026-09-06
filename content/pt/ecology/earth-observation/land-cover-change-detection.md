---
title: 'Deteção de alterações da ocupação do solo: cartografar como a superfície muda ao longo do tempo'
metaTitle: Deteção de alterações da ocupação do solo por satélite
excerpt: Comparar imagens de satélite de datas diferentes é a forma de medir a alteração do território em larga escala. Aqui explica-se a diferença entre ocupação do solo e uso do solo, os principais métodos de deteção de alterações, os produtos globais e os erros que é preciso controlar.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - land-cover
  - land-use-change
  - remote-sensing
  - monitoring
related:
  - satellite-deforestation-monitoring
  - landsat-program-explained
  - earth-observation-data-products
readingTime: 5
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 63a27725
---

Quando uma floresta se torna terra agrícola, ou um campo é coberto por construção, a própria superfície muda, e essa mudança deixa um vestígio mensurável nas imagens de satélite. Detetá-la consiste em comparar imagens do mesmo lugar captadas em datas diferentes e perguntar, com cuidado, o que é genuinamente diferente. Este artigo explica a distinção que está na base de todo o exercício, as principais formas de fazer a comparação, os produtos que alimenta e os erros que é preciso manter sob controlo.

## Ocupação do solo e uso do solo não são a mesma coisa

A primeira coisa a fixar é o que está a ser medido. [A ocupação do solo](/pt/glossary/land-cover) é o material físico presente à superfície — floresta, água, terra agrícola, solo edificado —, aquilo que um sensor pode registar diretamente. [A alteração do uso do solo](/pt/glossary/land-use-change), pelo contrário, diz respeito à função humana desse terreno: se uma área herbácea é uma pastagem, um parque ou um aeródromo entregue ao mato. As duas noções estão relacionadas, mas são distintas.

Esta distinção importa porque a deteção remota mede a ocupação, não o uso. Um satélite regista a refletância de uma superfície e, a partir daí, um classificador pode rotulá-la como floresta ou como água com confiança razoável. O uso, esse, é normalmente inferido — lido a partir do contexto, de cartografia auxiliar ou do padrão temporal da ocupação — em vez de observado. Manter os dois separados evita uma confusão frequente: um mapa de ocupação do solo não é automaticamente um mapa do modo como o solo está a ser usado.

## Como funciona a deteção de alterações

A deteção de alterações assenta numa premissa simples: tomar imagens de um mesmo local em duas ou mais datas e encontrar onde a superfície já não coincide consigo própria. Vários métodos estabelecidos fazem isto, e diferem no que comparam e em quanto pressupõem.

O mais direto é a **diferenciação de imagens**, em que a banda ou o índice de uma data é subtraído aos de outra; os píxeis em que a diferença é grande são assinalados como alteração candidata. Uma segunda abordagem, a **comparação pós-classificação**, classifica cada data de forma independente em categorias de ocupação do solo e depois compara os mapas resultantes, de modo que o resultado descreve não apenas onde ocorreu a alteração, mas o que se transformou em quê. Uma terceira família, a **análise de séries temporais**, trabalha com uma pilha longa de imagens e procura o momento — um ponto de rutura — em que o comportamento de um píxel se desloca, o que ajuda a fixar a data de uma alteração e não apenas a sua existência. Cada método troca simplicidade pela riqueza daquilo que consegue reportar, e a escolha depende da pergunta e das imagens disponíveis. A cadeia de processamento mais ampla que transforma cenas em bruto em dados prontos para análise é tratada na panorâmica [observação da Terra e deteção remota](/pt/ecology/earth-observation/earth-observation-and-remote-sensing-explained) do grupo temático.

Estas técnicas são gerais, mas uma aplicação impulsionou grande parte do seu aperfeiçoamento: o acompanhamento da perda de floresta. O modo como os métodos de séries temporais isolam a data de um corte é central na [monitorização da desflorestação por satélite](/pt/ecology/earth-observation/satellite-deforestation-monitoring), onde saber quando um povoamento foi cortado importa tanto como saber que o foi.

## Os produtos e as imagens que os sustentam

A deteção de alterações não é apenas uma técnica de investigação; produz mapas operacionais em que muitos utilizadores se apoiam. À escala global e regional, os mapas de ocupação do solo da Climate Change Initiative da ESA oferecem uma série coerente para todo o planeta, enquanto o Serviço Copernicus de Monitorização Terrestre fornece produtos pan-europeus e globais ([Copernicus Land](https://land.copernicus.eu/)). O trabalho da Climate Change Initiative da ESA insere-se no programa mais vasto de observação da Terra da agência ([ESA](https://www.esa.int/Applications/Observing_the_Earth)). Os esforços nacionais complementam-nos, como a National Land Cover Database do USGS, construída sobre o longo registo Landsat ([USGS](https://www.usgs.gov/landsat-missions)), e o Centro Comum de Investigação da Comissão Europeia produz a sua própria monitorização do território e a sua própria [monitorização florestal](/pt/ecology/forests/deforestation-statistics-explained) ([JRC](https://joint-research-centre.ec.europa.eu/)).

A maior parte destes produtos assenta no mesmo alicerce: as imagens Landsat e Sentinel. Vale a pena afirmar essa dependência com clareza, porque significa que a qualidade de qualquer mapa de ocupação do solo está limitada pela qualidade das cenas que lhe servem de entrada e pelo método de classificação que lhes é aplicado. O lado Landsat desse alicerce, com as suas décadas de cobertura em resolução média, é descrito em [o programa Landsat](/pt/ecology/earth-observation/landsat-program-explained), e o modo como tais entradas são preparadas para uso é o tema dos [produtos de dados de observação da Terra](/pt/ecology/earth-observation/earth-observation-data-products).

## Porque uma alteração aparente nem sempre é uma alteração real

Um mapa de alterações só é tão fiável quanto o seu tratamento do erro, e várias fontes de erro são intrínsecas ao método. A mais fundamental é que a exatidão da classificação nunca é perfeita: qualquer classificador rotula mal alguns píxeis, razão pela qual os produtos sérios são divulgados com avaliações de exatidão em vez de apresentados como exatos. Tratar um mapa classificado como verdade de campo, sem ler a exatidão declarada, exagera aquilo que se sabe.

Outros dois problemas podem fabricar uma alteração que não aconteceu. O desalinhamento entre imagens — quando duas datas não estão ajustadas à mesma posição no terreno — leva a que um píxel seja comparado com o vizinho errado, produzindo falsas alterações ao longo de orlas e limites. As diferenças sazonais fazem algo semelhante: um campo nu no inverno e verde no verão pode parecer uma conversão do solo quando é apenas o mesmo campo noutro ponto do seu ciclo. Uma análise sólida controla isto, por exemplo comparando imagens de estações correspondentes ou usando métodos de séries temporais que modelam o ritmo anual normal antes de assinalar um desvio em relação a ele. Distinguir a conversão real destes artefactos é a dificuldade recorrente da área, e liga-se a questões ecológicas a jusante, como as [métricas de fragmentação de habitat](/pt/ecology/biodiversity/habitat-fragmentation-metrics), que dependem de mapas exatos de ocupação do solo para terem significado.

## Ler mapas de alterações com cuidado

A deteção de alterações da ocupação do solo é uma ferramenta madura e amplamente utilizada, mas os seus resultados são interpretações, não fotografias do facto. O hábito mais útil que um leitor pode adotar é fazer três perguntas a qualquer mapa de alterações: que método o produziu, a partir de que imagens foi construído e que exatidão foi reportada. Uma imagem de diferença, um par de mapas classificados e um ponto de rutura de série temporal podem descrever a mesma parcela de terreno e discordar nas margens, e nenhum é correto em sentido absoluto. Usada com essa consciência — e com os efeitos sazonais e de registo tidos em conta —, a deteção de alterações dá uma imagem defensável e repetível do modo como a superfície do planeta se vai deslocando ao longo do tempo.

## Sources

1. **Copernicus Land** — [land-cover products](https://land.copernicus.eu/). Cartografia pan-europeia e global da ocupação do solo.
1. **ESA** — [Climate Change Initiative land cover](https://www.esa.int/Applications/Observing_the_Earth). Série global de mapas de ocupação do solo.
1. **USGS** — [land-cover data](https://www.usgs.gov/landsat-missions). Produtos de ocupação do solo baseados em Landsat.
1. **Comissão Europeia JRC** — [land monitoring](https://joint-research-centre.ec.europa.eu/). Monitorização do território e das florestas da CE.
