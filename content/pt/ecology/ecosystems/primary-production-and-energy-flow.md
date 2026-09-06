---
title: 'Produção primária: o que GPP, NPP e NEP medem e como cada uma é estimada'
metaTitle: 'Produção primária: o que GPP, NPP e NEP medem'
excerpt: A produção primária bruta nunca é medida diretamente em escala de ecossistema, apenas inferida. O que significam GPP, NPP e NEP, que instrumento está por trás de cada número e por que as metades terrestre e oceânica se apoiam em métodos diferentes.
type: expert
author: environmental-science-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - primary-production
  - carbon-flux
  - eddy-covariance
  - satellite-products
related:
  - food-webs-and-trophic-structure
  - what-is-an-ecosystem
  - carbon-cycle-explained
  - ocean-color-observations
pillar: what-is-an-ecosystem
_bodyHash: 72e232c3
---

Todo número sobre quanto carbono a biosfera fixa é o resultado de um modelo, não a leitura de um instrumento. Isso não é uma crítica aos números; é um fato a respeito da grandeza. Não existe dispositivo que se possa apontar para uma floresta ou para uma extensão de oceano e obrigar a informar a fotossíntese. O que se pode medir é uma concentração, uma refletância, uma massa de tecido colhido ou o fluxo vertical de dióxido de carbono acima de um dossel — e cada uma dessas coisas só se torna uma estimativa de produção depois de aplicadas as premissas.

Quatro termos circulam para aquilo que parece ser uma única grandeza, e eles diferem apenas quanto a qual respiração já foi subtraída. Confundir dois deles altera uma resposta por um fator de dois, o que basta para inverter o sinal de um [orçamento de carbono](/pt/ecology/climate-change/carbon-budgets-and-remaining-emissions). As reações que realizam a fixação estão expostas em [como funciona a fotossíntese](/pt/biology/cells/photosynthesis-explained); a dificuldade aqui começa um nível acima, onde um processo em escala de folha precisa ser convertido em um número para um continente — a mesma tradução que obriga a descrever um ecossistema pelas [taxas que o atravessam, e não pelo terreno que ele cobre](/pt/ecology/ecosystems/what-is-an-ecosystem).

## Quatro grandezas e as subtrações entre elas

| Grandeza | O que é | Como um número é produzido | Ordem de grandeza global |
| --- | --- | --- | --- |
| Produção primária bruta (GPP) | Carbono total fixado pela fotossíntese antes que qualquer parte dele seja respirada | Nunca observada diretamente; separada por particionamento de um fluxo líquido ou modelada a partir da luz absorvida | Terra: de 123 ± 8 a 147 Pg C yr⁻¹ conforme o método |
| Respiração autotrófica | Carbono respirado pelos próprios organismos fotossintetizantes | Modelada a partir da temperatura e das propriedades dos tecidos; não observada separadamente em escala de ecossistema | Não é divulgada como número global isolado |
| Produção primária líquida (NPP) | GPP menos a respiração autotrófica — o carbono disponível para todo o resto | Colheita e inventário em escala de parcela; modelos de satélite de eficiência do uso da luz em escala global | Cerca de 105 Pg C yr⁻¹ no mundo, repartidos de modo aproximadamente igual entre terra e oceano |
| Produção líquida do ecossistema (NEP) | NPP menos a respiração de consumidores e decompositores | Derivada da troca líquida medida por covariância turbulenta, com o sinal invertido | Um pequeno resíduo de dois fluxos grandes |
| Produção líquida do bioma | NEP menos incêndios, colheita e exportação lateral | Inventários, modelos contábeis e inversões atmosféricas | A grandeza de que um orçamento de carbono realmente precisa |

Lendo a tabela de cima para baixo, o padrão é que a precisão cai à medida que a grandeza se torna mais útil. A GPP é conceitualmente limpa e inobservável. A produção líquida do bioma é aquilo de que dependem um inventário nacional ou uma alegação de [sumidouro de carbono](/pt/glossary/carbon-sink), e é o termo com o maior número de subtrações e a maior incerteza relativa.

## Nada em uma torre de fluxo mede a fotossíntese

O instrumento de trabalho para a produção terrestre é a covariância turbulenta: um anemômetro rápido e um analisador de gases montados acima do dossel, amostrando a velocidade vertical do vento e a concentração de CO₂ muitas vezes por segundo, com a covariância entre elas fornecendo o fluxo vertical líquido. O que isso rende é a troca líquida do ecossistema — a diferença entre a absorção e a respiração total — e nada mais.

A GPP é então extraída por particionamento. A abordagem mais conhecida ajusta um modelo de respiração aos fluxos noturnos, quando a fotossíntese é nula, extrapola-o para o dia usando a temperatura e o soma de volta à troca líquida medida. Todo valor de GPP obtido em uma torre carrega, portanto, as premissas do modelo de particionamento que o produziu. O [conjunto de dados FLUXNET2015](https://www.nature.com/articles/s41597-020-0534-3), que padronizou o processamento em toda a comunidade, trata essa dependência como algo a ser medido e não removido: aplica em cada sítio tanto o método noturno quanto um método diurno baseado na resposta à luz, acrescenta um terceiro método de respiração ao anoitecer sempre que as medições de armazenamento o permitem, e orienta os usuários a tomar a diferença entre os produtos diurno e noturno como incerteza. É explícito ao afirmar que a respiração do ecossistema e a absorção fotossintética são [produtos de dados](/pt/ecology/earth-observation/earth-observation-data-products) derivados, e não medições, distribuídos junto com os fluxos e com suas próprias estimativas de incerteza.

Esse conjunto de dados também fixa a escala da base observacional: 212 sítios no mundo todo e mais de 1500 anos-sítio de dados até 2014 inclusive. Para um fluxo planetário, algumas centenas de torres são uma amostra rala, e ela não está distribuída de modo uniforme: a cobertura é mais densa na Europa temperada e na América do Norte e mais escassa nos trópicos, nos desertos e nas latitudes altas, exatamente o oposto de onde estão os fluxos maiores e menos certos.

## De algumas centenas de torres a um campo global

Três famílias de métodos transformam essa amostra em um número global, e elas divergem de uma maneira instrutiva.

Os modelos de eficiência do uso da luz tomam a radiação fotossinteticamente ativa absorvida obtida por satélite e a multiplicam por uma eficiência que varia com o tipo de vegetação e que é reduzida sob estresse de temperatura e de umidade. A implementação operacional da NASA, [o produto MOD17](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061) — MOD17A3HGF, versão 6.1 — entrega GPP e NPP anuais a 500 m a partir da soma dos compostos de 8 dias, com a fotossíntese líquida dada como GPP menos a respiração de manutenção. Sua documentação é franca quanto aos compromissos: o produto anual só é gerado depois de encerrado o ano, porque o preenchimento das lacunas das séries de entrada de área foliar e de radiação absorvida exige o ano inteiro, e os pixels que não passam na triagem de qualidade são preenchidos por interpolação, e não por observação.

O escalonamento estatístico, por sua vez, aprende uma relação entre os fluxos das torres e preditores de satélite e a aplica em toda parte. Uma [síntese baseada em observações, com dados de covariância turbulenta e modelos diagnósticos](https://www.science.org/doi/10.1126/science.1184984) situou a GPP terrestre global em 123 ± 8 Pg C yr⁻¹, com as [florestas tropicais](/pt/ecology/forests/tropical-forest-ecology) e as savanas respondendo por 60 por cento desse total e a GPP de mais de 40 por cento das terras vegetadas associada à precipitação. Uma abordagem posterior, que escalonou a refletância da vegetação no infravermelho próximo a partir da mesma rede de torres, devolveu [147 Pg C yr⁻¹, com um intervalo de credibilidade de 95 por cento de 131 a 163](https://pubmed.ncbi.nlm.nih.gov/31199543/), e observou que suas estimativas ficam sistematicamente mais altas do que as de trabalhos ascendentes anteriores, sobretudo nas latitudes médias.

Esses dois não são uma medição e uma correção. São duas maneiras defensáveis de extrapolar o mesmo acervo de torres, cujos valores centrais diferem em cerca de um quinto — mais do que a incerteza declarada por cada um dos dois estudos. Quem cita um número global de GPP está citando um método tanto quanto um planeta.

## A metade oceânica é outro instrumento e outro erro

A produção marinha é reconstruída quase inteiramente a partir da cor do oceano. Os sensores medem a radiância emergente da água, algoritmos a convertem em concentração de clorofila ou em carbono do fitoplâncton inferido da retrodifusão por partículas, e um modelo de produtividade converte esse estoque presente em uma taxa usando luz, profundidade da camada de mistura e temperatura. O [produto global de cor do oceano](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description) do Copernicus Marine Service é um exemplo prático: a produção primária é distribuída como uma variável entre muitas, em grade de 4 km, costurada a partir de SeaWiFS, MODIS, MERIS, VIIRS e OLCI ao longo de um registro que começa em 1997. Como essa inversão é feita, e o que ela consegue e não consegue enxergar, é o assunto das [observações de cor do oceano](/pt/ecology/earth-observation/ocean-color-observations).

A integração canônica dos dois domínios estimou a [NPP global em 104.9 Pg C yr⁻¹, com contribuições aproximadamente iguais de terra e oceano](https://www.science.org/doi/10.1126/science.281.5374.237), e essa quase paridade continua sendo a manchete que a maioria dos leitores encontra. Ela merece mais cautela do que costuma receber, porque as duas metades não são medidas de formas comparáveis. Em terra, a produção pode ser conferida contra inventários de biomassa, coletores de serapilheira e registros de colheita, porque a maior parte do que é fixado permanece no lugar por anos. No oceano, os organismos fotossintetizantes se renovam em dias; não há estoque a pesar, não há rede de torres, e a validação repousa sobre incubações esparsas feitas a bordo de navios. Uma análise recente da era dos satélites, que relata [quedas estatisticamente significativas da produção primária líquida em quase metade do oceano](https://www.nature.com/articles/s41467-025-60906-y), observa de passagem que o registro de sensoriamento remoto é a melhor base disponível para uma tendência global — uma afirmação tanto sobre a ausência de alternativas quanto sobre a força do método.

## Por que o resíduo é a parte difícil

A distância entre o bruto e o líquido é onde mora o número relevante para as políticas públicas, e ela é uma diferença de grandezas grandes. A GPP terrestre é da ordem de 120 a 150 Pg C yr⁻¹; o sumidouro terrestre líquido de carbono avaliado pelo IPCC para 2010 a 2019 é de [3.4 ± 0.9 Pg C yr⁻¹](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). Um erro sistemático de poucos por cento no fluxo bruto teria o tamanho do sumidouro inteiro. É por isso que o [ciclo do carbono](/pt/ecology/earth-systems/carbon-cycle-explained) não é restringido apenas pela melhoria das estimativas de GPP, e por isso a produção líquida do bioma é estimada por vias independentes — inversões atmosféricas, inventários florestais, modelos contábeis — e não pela subtração de um grande termo modelado de outro.

Para a ecologia, mais do que para a contabilidade, a NPP costuma ser a grandeza que importa, porque é o carbono efetivamente disponível para tudo o que não faz fotossíntese e, portanto, o teto daquilo com que o resto da [teia alimentar](/pt/ecology/ecosystems/food-webs-and-trophic-structure) pode ser construído. Esse teto é real, mas vale lembrar como se chegou a ele. Quando um número diz que um hectare de pastagem produziu uma dada tonelagem no ano passado, a expansão honesta é que um modelo de interceptação da luz, uma eficiência suposta e uma série de satélite com lacunas interpoladas juntos o implicaram.

## Sources

1. **Scientific Data (Nature Portfolio)** — [The FLUXNET2015 dataset and the ONEFlux processing pipeline for eddy covariance data](https://www.nature.com/articles/s41597-020-0534-3). Número de sítios, extensão do registro e o estatuto da respiração e da absorção como produtos derivados.
2. **Science** — [Terrestrial gross carbon dioxide uptake: global distribution and covariation with climate](https://www.science.org/doi/10.1126/science.1184984). A estimativa de GPP baseada em observações, de 123 ± 8 Pg C yr⁻¹, e o seu particionamento regional.
3. **Global Change Biology** — [Terrestrial gross primary production: using NIRv to scale from site to globe](https://pubmed.ncbi.nlm.nih.gov/31199543/). A estimativa de 147 Pg C yr⁻¹ com o seu intervalo de credibilidade e a comparação com trabalhos ascendentes.
4. **NASA Earthdata** — [MODIS/Terra net primary production gap-filled yearly L4 global 500 m, version 6.1](https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod17a3hgf-061). Produto operacional de eficiência do uso da luz, o seu procedimento de preenchimento de lacunas e as suas restrições de prazo.
5. **Science** — [Primary production of the biosphere: integrating terrestrial and oceanic components](https://www.science.org/doi/10.1126/science.281.5374.237). O total global de NPP de 104.9 Pg C yr⁻¹ e a paridade aproximada entre terra e oceano.
6. **Copernicus Marine Service** — [Global ocean colour, bio-geo-chemical, L4 product description](https://data.marine.copernicus.eu/product/OCEANCOLOUR_GLO_BGC_L4_MY_009_104/description). Sensores, resolução e extensão do registro por trás de um campo operacional de produção primária marinha.
7. **Nature Communications** — [Global declines in net primary production in the ocean colour era](https://www.nature.com/articles/s41467-025-60906-y). Tendência da produção marinha na era dos satélites e a dependência do sensoriamento remoto para tendências globais.
8. **IPCC AR6 WG1, Capítulo 5** — [Global carbon and other biogeochemical cycles and feedbacks](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/). O sumidouro terrestre líquido de carbono avaliado para 2010 a 2019.
