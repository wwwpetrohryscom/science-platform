---
title: 'Gradientes térmicos e estabilidade: porque há convecção na troposfera e não na estratosfera'
metaTitle: Gradientes térmicos e estabilidade atmosférica
excerpt: Duas grandezas diferentes recebem o mesmo nome de gradiente térmico, e confundi-las produz a maior parte dos erros cometidos sobre a estabilidade atmosférica. Eis o que cada uma mede, como se combinam e o que diz de facto a definição de tropopausa.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 7
tags:
  - lapse-rate
  - atmospheric-stability
  - tropopause
  - temperature-inversion
related:
  - atmospheric-physics-explained
  - convection-and-cloud-formation
  - the-greenhouse-effect-physics
  - atmospheric-circulation-cells
pillar: atmospheric-physics-explained
_bodyHash: be0de0f9
---

Duas grandezas bastante diferentes são correntemente chamadas «o [gradiente térmico](/en/glossary/lapse-rate)». Uma é uma propriedade de uma parcela de ar ascendente, fixada pela termodinâmica e igual em todo o planeta. A outra é uma propriedade da coluna de ar circundante, medida por uma radiossondagem e diferente todos os dias. A estabilidade é a comparação entre as duas, e quase toda a confusão sobre porque sobe o ar, sobre porque o fumo fica por vezes suspenso sobre um vale e sobre porque a estratosfera tem o nome que tem vem de tratar as duas como um só número. A estrutura térmica vertical que daí resulta é a segunda metade do quadro esboçado na [visão geral da física atmosférica](/pt/physics/climate-physics/atmospheric-physics-explained), em que o perfil de pressão era a primeira.

## Três gradientes, e o que cada um descreve

Uma parcela não saturada elevada através da atmosfera expande-se contra a pressão decrescente e arrefece sem trocar calor com o meio que a rodeia. A referência da NOAA sobre a teoria da parcela dá esse **gradiente adiabático seco** como um valor fixo de 9.8 °C por 1 000 metros. Assim que a parcela satura, a condensação liberta nela calor latente e trava o arrefecimento: a documentação da NOAA sobre os diagramas skew-T coloca o **gradiente adiabático saturado** junto à superfície em cerca de 4 °C por 1 000 metros, subindo para o valor seco na alta troposfera à medida que resta progressivamente menos vapor por condensar. O **gradiente térmico do ambiente** é o que a sondagem disser; a atmosfera padrão usada na aviação, na formulação do centro NASA Glenn, fixa-o em 0.00649 °C por metro a partir de uma superfície a 15.04 °C até aos 11 000 metros.

| Gradiente | Valor | De que é propriedade |
| --- | --- | --- |
| Adiabático seco | 9.8 °C/km | Uma parcela não saturada elevada |
| Adiabático saturado | cerca de 4 °C/km junto à superfície, aproximando-se de 9.8 °C/km em altitude | Uma parcela saturada elevada |
| Do ambiente | medido; 6.49 °C/km na atmosfera padrão | A coluna de ar circundante |

## A estabilidade é uma comparação, não uma propriedade do ar

Se uma parcela deslocada continua ou não a subir depende de como a sua própria taxa de arrefecimento se compara com a temperatura que encontra à sua volta. O material pedagógico da NOAA faz a comparação com uma bola e uma taça. Se o gradiente do ambiente for menor do que ambas as adiabáticas, uma parcela elevada é sempre mais fria e mais densa do que aquilo que a rodeia e volta a descer: a coluna é absolutamente estável, a bola regressa ao fundo da taça. Se o gradiente do ambiente for maior do que a adiabática seca, qualquer deslocamento cresce: instabilidade absoluta, a taça invertida. Entre os dois — maior do que a adiabática saturada, menor do que a seca — a resposta depende de a parcela atingir ou não a saturação antes de esgotar a sua flutuabilidade. É a **instabilidade condicional**, e a NOAA descreve-a como um dos estados mais comuns da atmosfera.

Esse caso intermédio é a razão por que o céu não está simplesmente ou calmo ou em convecção. É também a razão por que a elevação conta tanto como o aquecimento: uma coluna condicionalmente instável precisa de algo que empurre uma parcela até ao seu nível de convecção livre, seja uma frente, o relevo ou o aquecimento da superfície, antes de fazer o que quer que seja por si própria. O que acontece depois desse ponto — nucleação das gotículas, crescimento, glaciação — é o assunto de [como a convecção constrói as nuvens](/pt/physics/climate-physics/convection-and-cloud-formation).

## Porque o perfil real fica entre as duas adiabáticas

Os 6.49 °C por quilómetro da atmosfera padrão não são um compromisso arbitrário. A radiação sozinha, agindo sobre a opacidade da atmosfera, deixaria a baixa atmosfera muito mais inclinada do que a adiabática seca e, por isso, instável. A convecção retira o excesso quase tão depressa como a radiação o cria, e fá-lo ao longo de uma adiabática saturada nos trópicos húmidos porque o ar ascendente aí está em geral saturado. O perfil médio observado é o resíduo dessa competição: suficientemente inclinado para manter a convecção, suficientemente suave para não disparar.

Isto não é um pormenor de meteorologia. Um perfil de temperatura decrescente é uma condição prévia de todo o argumento radiativo exposto na [explicação do efeito de estufa pela altura de emissão](/pt/physics/climate-physics/the-greenhouse-effect-physics), e é por isso que o gradiente térmico aparece na contabilidade das retroações climáticas e não apenas na previsão.

## CAPE: uma energia real, e um limite superior que ninguém atinge

A instabilidade que está disponível e não apenas é possível mede-se como **[energia potencial convectiva disponível](/en/glossary/cape)**. O Storm Prediction Center da NOAA define-a como a energia potencial total de que dispõe uma parcela com origem à superfície depois de elevada até ao seu nível de convecção livre, expressa em joules por quilograma.

Por ser uma energia por unidade de massa, a CAPE converte-se diretamente numa velocidade: a velocidade máxima da corrente ascendente na teoria da parcela não diluída é a raiz quadrada do dobro da CAPE, pelo que 2 000 J/kg correspondem a cerca de 63 m/s. As correntes ascendentes reais ficam muito aquém disso, por razões que o modelo de parcela ignora deliberadamente. O entranhamento mistura ar ambiente mais seco na coluna ascendente e dilui a sua flutuabilidade; a água condensada é transportada e pesa sobre a parcela; e as perturbações de pressão em torno da corrente ascendente realizam trabalho sobre ela. A CAPE lê-se melhor como um teto e um índice comparativo, não como uma previsão do que o ar irá fazer.

A grandeza companheira, a inibição convectiva, mede o trabalho de flutuabilidade negativa necessário para levar uma parcela através de uma camada estável até esse nível. Uma coluna pode manter uma CAPE grande toda a tarde e não produzir nada, porque a tampa nunca cede.

## Inversões: o perfil virado ao contrário

Quando a temperatura aumenta com a altura junto ao solo, a coluna está quase tão estável quanto pode estar, e a mistura vertical cessa em grande medida. As inversões formam-se por várias vias: o arrefecimento radiativo da superfície em noites limpas, o aquecimento por subsidência em altitude num sistema de altas pressões e — em bacias e vales — o ar frio e denso que se acumula no relevo e aí permanece durante dias.

O tipo persistente foi estudado diretamente. Uma campanha de campo no vale de Salt Lake, no Utah, decorreu de 1 de dezembro de 2010 a 7 de fevereiro de 2011 e documentou dez episódios persistentes de acumulação de ar frio num único inverno. A associação com a qualidade do ar que é relatada é direta: a concentração média em 24 horas de partículas finas excede muitas vezes a norma nacional norte-americana de qualidade do ar ambiente de 35 µg/m³ durante estes episódios, e excedeu-a durante cada uma das quatro acumulações mais longas observadas nessa campanha. O mecanismo dominante não é uma emissão adicional mas a perda do volume em que essas emissões eram antes diluídas, embora os autores notem que variações nas emissões também podem desempenhar um papel. Como essas concentrações são definidas e medidas é tratado no trabalho sobre [a medição e as normas de qualidade do ar](/pt/ecology/pollution/air-quality-measurement-and-standards).

As inversões são também a parte do perfil que a observação trata pior. As inversões de superfície pouco profundas, as camadas estáveis finas e o topo da [camada limite](/pt/physics/mechanics-waves/fluid-dynamics-explained) são estruturas com algumas dezenas de metros de espessura; nem a rede de radiossondagens nem o espaçamento típico dos níveis de um modelo as resolvem em toda a parte, pelo que uma camada estável pode ser real, consequente e invisível para a sondagem destinada a detetá-la. Esse problema de resolução propaga-se para fora, porque a intensidade da trajetória das tempestades de latitudes médias depende de gradientes que vivem nessas mesmas camadas finas — uma dependência retomada nas [células da circulação global](/pt/physics/climate-physics/atmospheric-circulation-cells).

## A tropopausa é um critério, não um objeto

Acima da troposfera o sinal inverte-se, e inverte-se porque o ozono absorve o ultravioleta solar e deposita a energia localmente. A descrição das camadas da NOAA regista o perfil que daí resulta: a temperatura sobe de uma média de cerca de −51 °C na tropopausa para aproximadamente −15 °C no topo da estratosfera, e nota que esta disposição — ar mais quente por cima de ar mais frio — suprime a convecção, razão por que as bigornas de trovoada se espalham planas a esse nível. A estratosfera detém cerca de 19 por cento da massa da atmosfera e muito pouco vapor de água.

Onde exatamente fica a fronteira é estabelecido por definição e não encontrado. O critério de gradiente térmico da Organização Meteorológica Mundial, citado numa avaliação de reanálises publicada em *Atmospheric Chemistry and Physics*, define a primeira tropopausa como «o nível mais baixo em que o gradiente térmico desce para 2 °C/km ou menos, desde que também o gradiente médio entre esse nível e todos os níveis superiores dentro de 2 km não exceda 2 °C/km», sendo identificada uma segunda tropopausa acima dela sempre que o gradiente médio em qualquer camada de 1 km volte a exceder 3 °C/km. Aplicado aos campos de reanálise, esse critério coloca a tropopausa tropical média a 16 ou 17 km e a de latitudes altas entre cerca de 8 e 12.5 km — em consonância com a afirmação mais simples da NOAA de que a troposfera chega aos 18 ou 20 km no equador e a cerca de 6 km nos polos.

Vale a pena ser explícito quanto ao alcance desse critério. A mesma avaliação encontrou diferenças de altura média mensal da tropopausa entre duas gerações de um mesmo sistema de reanálise que iam de cerca de −300 m perto dos 30° de latitude a 150 m no equador, sem qualquer alteração da atmosfera subjacente. Uma tendência da altura da tropopausa comparada entre produtos é, por isso, em parte uma tendência do algoritmo e dos dados de entrada. A fronteira é um limiar aplicado a um gradiente, e onde um gradiente é suave é o limiar que decide.

## Sources

1. **NOAA JetStream** — [Parcel Theory](https://www.noaa.gov/jetstream/upperair/parcel-theory). Gradiente adiabático seco e o argumento de flutuabilidade para a estabilidade.
2. **NOAA JetStream** — [Skew-T Log-P Diagrams](https://www.noaa.gov/jetstream/upperair/skew-t-log-p-diagrams). Gradiente adiabático saturado junto à superfície e a sua convergência para o gradiente seco em altitude.
3. **NOAA JetStream** — [Stability and Instability](https://www.noaa.gov/jetstream/upperair/bowls). Os quatro regimes de estabilidade e a instabilidade condicional como caso comum.
4. **NASA Glenn Research Center** — [Earth Atmosphere Model](https://www.grc.nasa.gov/www/k-12/airplane/atmosmet.html). Gradiente térmico do ambiente na atmosfera padrão e espessura da troposfera.
5. **NOAA JetStream** — [Layers of the Atmosphere](https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere). Aquecimento pelo ozono, intervalo de temperatura e fração de massa da estratosfera, e alturas da tropopausa por latitude.
6. **NOAA Storm Prediction Center** — [Surface-based CAPE](https://www.spc.noaa.gov/exper/mesoanalysis/help/help_sbcp.html). Definição e unidades da energia potencial convectiva disponível.
7. **American Meteorological Society, Bulletin of the AMS** — [The Persistent Cold-Air Pool Study](https://journals.ametsoc.org/view/journals/bams/94/1/bams-d-11-00255.1.xml). Datas da campanha de campo, número de episódios e a associação com as partículas.
8. **Copernicus, Atmospheric Chemistry and Physics** — [An assessment of tropopause characteristics of the ERA5 and ERA-Interim meteorological reanalyses](https://acp.copernicus.org/articles/22/4019/2022/). Definição de tropopausa pelo critério de gradiente da OMM, alturas médias da tropopausa e diferenças entre produtos.
