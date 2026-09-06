---
title: 'Observações da cor do oceano: ler o mar pela sua cor'
excerpt: A cor do oceano transporta informação sobre as plantas microscópicas que nele vivem. Aqui explica-se como os satélites estimam o fitoplâncton a partir da luz que sai da água, quais as missões que construíram o registo e por que razão a correção atmosférica sobre a água é a parte difícil.
type: expert
author: climate-research-desk
publishedDate: '2026-06-02'
updatedDate: '2026-09-05'
tags:
  - ocean-color
  - oceans
  - remote-sensing
  - monitoring
related:
  - modis-earth-observation-system
  - sentinel-satellites-explained
  - satellite-altimetry-explained
readingTime: 4
pillar: earth-observation-and-remote-sensing-explained
_bodyHash: 1d6030fd
---

O mar não é de um azul uniforme. O seu tom exato, amostrado a partir da órbita, transporta informação sobre a vida vegetal microscópica que deriva junto à superfície. Ao medir o espetro da luz que sai da água, os satélites conseguem estimar quanto fitoplâncton está presente, e essa estimativa tornou-se um dos fios mais constantes da nossa [observação da Terra e deteção remota](/pt/ecology/earth-observation/earth-observation-and-remote-sensing-explained) dos oceanos.

## O que a cor nos diz

O fitoplâncton contém clorofila a, o mesmo pigmento que torna verdes as plantas terrestres. Quanto mais dela a água superficial contém, mais a água se afasta do azul profundo em direção ao verde. Esta é a base física da deteção remota da [cor do oceano](/pt/glossary/ocean-color): os instrumentos medem a luz que emerge logo abaixo da superfície do mar e leem a sua cor para inferir o que está na água, sobretudo a clorofila a.

Estas plantas microscópicas contam muito para além do que o seu tamanho faria supor. Estão na base da teia trófica marinha e absorvem dióxido de carbono ao fazer fotossíntese, pelo que ocupam um lugar de relevo no [ciclo do carbono](/pt/ecology/climate-change/carbon-cycle-feedbacks) oceânico. Seguir a sua abundância permite aos investigadores acompanhar a produtividade primária, ver as florações de algas formarem-se e desvanecerem-se, avaliar a [qualidade da água](/pt/ecology/freshwater/water-quality-measurement-explained) e procurar mudanças mais lentas nos ecossistemas marinhos. O [Earth Observatory](https://science.nasa.gov/earth/earth-observatory/) da NASA publicou uma longa série de imagens que mostram como um único sinal de cor pode ser lido de todas estas maneiras.

## Como funciona a medição

A grandeza no centro do método é a [refletância](/pt/glossary/reflectance) da água em vários comprimentos de onda visíveis — no essencial, com que intensidade o mar devolve a luz nas extremidades azul e verde do espetro. Os algoritmos correntes de clorofila comparam-nas através de uma razão de refletância do azul para o verde. Quando o fitoplâncton é escasso, a luz azul domina e a razão é alta; à medida que o seu número sobe, a luz verde reforça-se e a razão desce. Converter essa razão numa estimativa da concentração de clorofila é o passo central que transforma cor em número.

Fazê-lo bem depende de isolar a pequena fração da luz que veio realmente da água. A maior parte da radiação que chega a um satélite sobre o oceano foi dispersada pela atmosfera e não refletida pelo mar, pelo que o processamento tem primeiro de retirar a contribuição atmosférica antes de qualquer comparação do azul para o verde ter significado. Os produtos e os métodos que lhes estão por trás são documentados e distribuídos através do [NASA Earthdata](https://www.earthdata.nasa.gov/), onde a longa história do processamento da cor do oceano é exposta em detalhe.

## Construir o registo

A técnica foi demonstrada pela primeira vez pelo Coastal Zone Color Scanner, lançado em 1978, que mostrou que os padrões de clorofila podiam sequer ser cartografados a partir do espaço. Depois de um longo intervalo, o registo contínuo moderno começou com o SeaWiFS, que operou de 1997 a 2010 e estabeleceu a série temporal coerente e calibrada que as missões posteriores prolongaram.

Esse registo é hoje mantido por vários instrumentos ao mesmo tempo. O MODIS e o VIIRS contribuem ambos com medições de cor do oceano, do mesmo tipo das que são seguidas através [do sistema MODIS](/pt/ecology/earth-observation/modis-earth-observation-system) para os seus outros produtos, enquanto o instrumento OLCI a bordo das plataformas europeias Sentinel-3 acrescenta mais um fluxo, descrito na nossa nota sobre [os satélites Sentinel](/pt/ecology/earth-observation/sentinel-satellites-explained). Os produtos operacionais derivados destes sensores são entregues através do [Copernicus Marine Service](https://marine.copernicus.eu/), e a NOAA distribui os seus próprios produtos de cor do oceano através do seu serviço de satélites ambientais, o [NESDIS](https://www.nesdis.noaa.gov/). Manter estas fontes coerentes importa porque o sinal de cor complementa outras observações oceânicas, como a [altimetria por satélite](/pt/ecology/earth-observation/satellite-altimetry-explained) e, em termos mais gerais, os [indicadores de conteúdo de calor do oceano](/pt/ecology/climate-change/ocean-heat-content-indicators), na construção de uma imagem mais completa do oceano superficial.

## Porque a correção atmosférica é a parte difícil

A dificuldade dominante neste domínio é a correção atmosférica, e é exigente precisamente por causa da geometria que se acabou de descrever. Uma vez que a maior parte da luz que um satélite recebe sobre a água vem da atmosfera e não do mar, o sinal que sai da água é fraco em comparação. Um pequeno erro na estimativa da parte atmosférica traduz-se, por isso, num grande erro no sinal ténue que resta — precisamente o sinal de que o algoritmo de clorofila depende. Acertar na correção é, na prática, mais árduo do que a própria razão de cores.

Algumas águas agravam o problema. O oceano aberto, onde a clorofila é o principal fator a fazer variar a cor, é o caso mais tratável. As águas costeiras e turvas são mais difíceis: os sedimentos em suspensão e a matéria dissolvida corada alteram também o espetro, pelo que a ligação simples entre cor e fitoplâncton deixa de se manter com nitidez, e separar estas contribuições exige métodos mais cuidadosos. As nuvens acrescentam um limite adicional, mais simples — tapam por completo a superfície, deixando lacunas que têm de ser preenchidas a partir de dias vizinhos ou assinaladas como em falta.

## Ler os produtos com cuidado

Nenhuma destas limitações torna a cor do oceano pouco fiável, mas moldam a forma como os seus produtos devem ser lidos. Uma estimativa sobre o oceano aberto e limpo assenta em terreno mais firme do que outra junto a uma costa carregada de sedimentos, e um composto sem nuvens pode coser observações de várias passagens em vez de um único instante. Os valores compreendem-se melhor como estimativas com incerteza declarada do que como medições diretas do que está na água.

Usada com essa cautela, a cor do mar continua a ser uma forma prática de vigiar o oceano superficial vivo em áreas vastas e ao longo de períodos longos. Desde a primeira prova dada pelo scanner de 1978 até às missões sobrepostas de hoje, a mesma ideia — que um desvio do azul para o verde revela as plantas por baixo — continua a sustentar o modo como o fitoplâncton é observado a partir da órbita.

## Sources

1. **NASA Earthdata** — [ocean colour](https://www.earthdata.nasa.gov/). Produtos e história do NASA Ocean Color.
1. **Copernicus Marine Service** — [ocean colour products](https://marine.copernicus.eu/). Dados operacionais de cor do oceano.
1. **NASA Earth Observatory** — [ocean colour explained](https://science.nasa.gov/earth/earth-observatory/). Como a cor revela o fitoplâncton.
1. **NOAA NESDIS** — [ocean colour](https://www.nesdis.noaa.gov/). Produtos de satélite de cor do oceano da NOAA.
