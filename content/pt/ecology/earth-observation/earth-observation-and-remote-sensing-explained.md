---
title: 'Observação da Terra e deteção remota: como se mede o planeta a partir do espaço'
excerpt: Os satélites tornaram-se os instrumentos que permitem observar o planeta inteiro de uma só vez. Explica-se aqui como funciona a observação da Terra — dos fotões aos produtos de dados calibrados —, o que mede no clima e nos ecossistemas e onde estão os seus limites.
type: pillar
author: environmental-science-desk
publishedDate: '2026-06-02'
updatedDate: '2026-08-29'
readingTime: 11
tags:
  - earth-observation
  - remote-sensing
  - satellites
  - environmental-monitoring
related:
  - what-is-remote-sensing
  - landsat-program-explained
  - earth-observation-data-products
  - remote-sensing-limitations-and-uncertainty
_bodyHash: 1abd743b
---

Quase tudo o que sabemos sobre a forma como o planeta está a mudar — o recuo do gelo, o avanço da desflorestação, o aquecimento dos mares, o esverdeamento e o acastanhamento da superfície terrestre — é hoje medido, pelo menos em parte, a partir do espaço. A [observação da Terra](/en/glossary/earth-observation) é a prática de recolher informação sobre a terra, o oceano, a atmosfera e o gelo do planeta com sensores instalados em satélites e em aeronaves. A [deteção remota](/en/glossary/remote-sensing) é a técnica subjacente: medir algo sem lhe tocar, registando a radiação que reflete ou emite.

Este é o texto central do conjunto de artigos do EcoScienceHub sobre observação da Terra e é deliberadamente uma ponte. As mesmas medições por satélite que acompanham os [indicadores climáticos](/pt/ecology/climate-change/climate-indicators-earth-system-monitoring) sustentam também a [monitorização da biodiversidade](/pt/ecology/biodiversity/biodiversity-monitoring-and-ecosystem-health) e o estudo dos ecossistemas. Este artigo explica como são feitas as medições, o que transforma um sinal bruto em ciência utilizável e porque é que todos os produtos de satélite trazem consigo uma incerteza que tem de ser declarada e não escondida. Os artigos de apoio ligados ao longo do texto aprofundam cada instrumento e cada aplicação.

## O que a deteção remota mede de facto

Um sensor remoto não fotografa «desflorestação» nem «seca». Mede radiação eletromagnética em bandas de comprimento de onda definidas e regista o valor em cada localização como um número. Tudo o resto — vegetação, água, fogo, crescimento urbano — é inferido a partir do modo como as superfícies interagem com essa radiação.

Fazem-no duas grandes famílias de instrumentos. Os sensores **passivos** registam radiação naturalmente disponível, quase sempre luz solar refletida ou infravermelho térmico emitido pela superfície; os sensores de imagem óticos e térmicos, como os do Landsat e do MODIS, são passivos. Os sensores **ativos** fornecem a sua própria energia e medem o que regressa — o radar e o lidar emitem um impulso e cronometram o eco, o que lhes permite ver através das nuvens e de noite e medir altura diretamente. Cada superfície tem uma [assinatura espetral](/en/glossary/spectral-signature) característica: o modo particular como reflete ao longo dos comprimentos de onda. A vegetação saudável, por exemplo, absorve luz vermelha e reflete fortemente no infravermelho próximo, e é esse contraste que está na base dos índices de vegetação adiante discutidos.

A grandeza que um sensor ótico calibrado acaba por reportar é a refletância — a fração da luz incidente que uma superfície devolve em cada banda —, guardada como uma grelha de píxeis, uma forma de [dados matriciais](/en/glossary/raster-data). A resolução dessa grelha, e a frequência com que é atualizada, são as primeiras coisas que determinam o que um sensor consegue e não consegue ver.

## Os sistemas de satélites

Nenhum satélite isolado cobre todas as necessidades, pelo que a observação da Terra assenta numa frota com pontos fortes complementares. A introdução sobre [o que é a deteção remota](/pt/ecology/earth-observation/what-is-remote-sensing) trata a física; cada um dos principais instrumentos tem artigo próprio.

O [programa Landsat](/pt/ecology/earth-observation/landsat-program-explained), conjunto da NASA e do USGS, tem imagens contínuas da superfície terrestre desde 1972 com resolução moderada (cerca de 30 metros), o mais longo registo do género que existe. O [programa Copernicus](/pt/ecology/earth-observation/copernicus-programme-explained) da União Europeia opera os [satélites Sentinel](/pt/ecology/earth-observation/sentinel-satellites-explained), que acrescentam revisitas frequentes, imagem de radar e serviços operacionais. Os [instrumentos MODIS](/pt/ecology/earth-observation/modis-earth-observation-system) da NASA, e os seus sucessores VIIRS, trocam pormenor espacial por uma cobertura global quase diária, ideal para acompanhar mudanças rápidas. Altímetros de radar, numa linha de missões distinta, medem a altura da superfície do mar — assunto do artigo sobre [altimetria por satélite](/pt/ecology/earth-observation/satellite-altimetry-explained). Escolher entre eles é um compromisso entre a resolução espacial, a frequência com que um lugar é revisitado e os comprimentos de onda que o sensor consegue medir; nenhum instrumento otimiza os três em simultâneo.

## Dos fotões aos produtos de dados: a metodologia

Um número registado por um sensor em órbita ainda não é ciência. Transformá-lo numa medição da superfície é uma cadeia de processamento definida, que o artigo sobre os [produtos de dados de observação da Terra](/pt/ecology/earth-observation/earth-observation-data-products) percorre em pormenor. Os passos essenciais são estes.

**Calibração.** O sinal bruto é convertido numa radiância física através da calibração do sensor e corrigido geometricamente, para que cada píxel fique na sua verdadeira localização no terreno.

**Correção atmosférica.** Entre a superfície e o satélite está a atmosfera, que dispersa e absorve luz. Corrigir esse efeito converte a radiância no topo da atmosfera em refletância de superfície — o passo que torna comparáveis imagens de datas diferentes.

**Níveis de processamento.** As agências rotulam os produtos consoante o ponto desta cadeia em que se encontram: dos dados brutos do instrumento (nível 0), passando pela radiância calibrada e geolocalizada (nível 1) e pelas variáveis geofísicas obtidas por inversão, como a temperatura de superfície ou a refletância (nível 2), até aos produtos em grelha e compostos no tempo (nível 3) e às saídas assimiladas em modelos (nível 4). Saber o nível de um produto diz a quem o usa quanto processamento — e quantos pressupostos — já está contido no número.

**Índices derivados e classificação.** A partir da refletância de superfície, calculam-se índices e mapas. O mais conhecido é o NDVI, o índice de vegetação por diferença normalizada, explicado no artigo sobre o NDVI e generalizado no texto sobre os [índices de vegetação](/pt/ecology/earth-observation/vegetation-indices-and-monitoring). Classificar píxeis em categorias como floresta, água ou terra arável produz cartas de [ocupação do solo](/en/glossary/land-cover); compará-las ao longo do tempo é a [deteção de alterações na ocupação do solo](/pt/ecology/earth-observation/land-cover-change-detection).

## O que a observação da Terra mede no ambiente

Sobre esta cadeia de processamento assenta um vasto leque de aplicações, e é aqui que este conjunto de artigos se liga ao resto do EcoScienceHub.

Para a **superfície terrestre e a biosfera**, os satélites cartografam o estado da vegetação, acompanham a desflorestação, detetam [incêndios e área ardida a partir do espaço](/pt/ecology/earth-observation/wildfire-monitoring-from-space) e alimentam os [sistemas de monitorização da seca](/pt/ecology/earth-observation/drought-monitoring-systems). Estas mesmas medições estruturais sustentam a [deteção remota para monitorização da biodiversidade](/pt/ecology/biodiversity/remote-sensing-for-biodiversity-monitoring) e a cartografia da [fragmentação de habitats](/pt/ecology/biodiversity/habitat-fragmentation-metrics).

Para o **oceano**, as [observações da cor do oceano](/pt/ecology/earth-observation/ocean-color-observations) estimam o fitoplâncton a partir da cor da água, enquanto a altimetria acompanha a altura da superfície do mar. Para o **sistema climático**, a observação da Terra fornece muitos dos registos de referência: a altimetria por satélite que está por detrás da [subida do nível do mar](/pt/ecology/climate-change/sea-level-rise-indicators), os sensores que vigiam as [concentrações de gases com efeito de estufa](/pt/ecology/climate-change/greenhouse-gas-concentrations-monitoring) e as imagens que sustentam os indicadores de gelo e de temperatura. O ponto deste conjunto de artigos é que não se trata de técnicas separadas, mas de um único sistema de medição apontado a perguntas diferentes.

## Validação: porque é que os dados de terreno continuam a contar

Um produto de satélite só merece confiança depois de ser confrontado com medições independentes. A [validação no terreno](/en/glossary/ground-truthing) — comparar uma estimativa de satélite com observações de campo, torres instrumentadas, navios ou imagens de resolução mais fina — é o modo como se calibra a relação entre um sinal espetral e uma grandeza do mundo real e como se quantifica o respetivo erro. A observação da Terra não substitui o trabalho de campo: prolonga-o, e os dois foram pensados para funcionar em conjunto. Um índice de vegetação sem qualquer calibração com dados de terreno é um padrão, ainda não uma medição.

## Dados abertos e continuidade

Há duas características da observação da Terra moderna que passam facilmente despercebidas, mas que são centrais para o seu valor científico: o acesso aberto e a continuidade. Quando o USGS abriu todo o arquivo Landsat ao descarregamento público gratuito, em 2008, o uso dos dados expandiu-se acentuadamente, porque quem investigava passou finalmente a poder analisar longas pilhas de imagens em vez de comprar cenas uma a uma. A União Europeia construiu o programa Copernicus sobre o mesmo princípio — os dados Sentinel são gratuitos e de licença aberta — e a NASA distribui abertamente os seus arquivos de ciências da Terra através do Earthdata. É o acesso aberto que torna possíveis a verificação independente e os estudos de longo prazo.

A continuidade importa tanto quanto. Uma medição só é indicador de mudança se a mesma grandeza for produzida de forma coerente ao longo dos anos e de satélites sucessivos, e é por isso que as agências investem fortemente em missões sobrepostas e em intercalibração, para que o registo de um instrumento possa ser ligado ao do seguinte sem um salto espúrio. Uma lacuna de cobertura, ou uma mudança de sensor não calibrada, pode fazer-se passar por um sinal ambiental; manter o registo é, por isso, uma tarefa científica por direito próprio, e não meramente operacional.

## Incerteza

Todas as medições por satélite trazem consigo uma incerteza, e os fornecedores de referência reportam-na em vez de a enterrarem.

**Compromissos de resolução.** Mais pormenor espacial significa geralmente uma faixa de observação mais estreita e revisitas menos frequentes. Um sensor que vê um lugar todos os dias não consegue também distinguir árvores individuais; um que distingue os limites das parcelas pode revisitá-lo apenas de uma em uma ou de duas em duas semanas. O instrumento certo depende da pergunta.

**A atmosfera e as nuvens.** Os sensores óticos não veem a superfície através das nuvens, pelo que as regiões nubladas e tropicais têm lacunas sistemáticas. Efeitos atmosféricos residuais, aerossóis e bruma acrescentam erro mesmo em dias limpos, erro que a correção atmosférica reduz, mas nunca elimina por completo.

**Píxeis mistos.** Um único píxel cobre muitas vezes vários tipos de superfície, pelo que o seu valor é uma mistura. Um píxel de «floresta» pode ser em parte clareira; uma estimativa construída a partir dele herda essa ambiguidade.

**Diferenças entre sensores e entre missões.** Os instrumentos degradam-se, as órbitas derivam e as missões sucessivas diferem entre si, pelo que construir um registo longo e coerente exige intercalibração cuidadosa. Uma mudança aparente pode ser um artefacto de uma mudança de sensor e não uma mudança no terreno.

## Limitações: o que os satélites não conseguem fazer

Dois limites são estruturais. Primeiro, a deteção remota mede **propriedades físicas e espetrais, não as coisas em si** — vê o verdor do coberto, não as espécies vegetais; anomalias térmicas, não o «fogo» enquanto tal; a cor da água, não diretamente o fitoplâncton. O significado biológico ou social é sempre uma inferência que precisa de validação. Segundo, **o arquivo fixa o horizonte**: um registo de satélite não pode descrever condições anteriores à existência dos seus instrumentos, razão pela qual o início do registo contínuo do Landsat em 1972, ou a era da altimetria por satélite iniciada no princípio da década de 1990, marca a linha de base prática de muitos estudos. Para perspetivas mais longas, os dados de satélite têm de ser ligados a registos mais antigos.

## Para onde apontam as observações

A continuidade tem um alvo, além de uma justificação. A comunidade internacional especifica que grandezas têm de ser mantidas, através das variáveis climáticas essenciais: o Sistema Mundial de Observação do Clima define atualmente 55 delas nos domínios da atmosfera, do oceano e da terra, selecionadas segundo a pertinência para caracterizar o sistema climático, a viabilidade técnica da observação global e a relação custo-eficácia. Muitas são obtidas sobretudo ou inteiramente a partir da órbita — temperatura da superfície do mar, nível do mar, gelo marinho, ocupação do solo, biomassa aérea, cor do oceano, albedo, índice de área foliar —, razão pela qual a continuidade das missões e a especificação destas variáveis são a mesma conversa. O quadro é exposto nas [variáveis climáticas essenciais](/pt/ecology/earth-systems/essential-climate-variables-explained), e o sistema acoplado que estas variáveis descrevem em conjunto é o tema do grupo de artigos sobre a [ciência do sistema Terra](/pt/ecology/earth-systems/earth-system-science-explained).

## Transparência das fontes

Todas as afirmações quantitativas deste conjunto de artigos são atribuídas a uma autoridade identificada — a NASA e o NASA Earthdata, o programa Landsat do USGS, a ESA e o programa Copernicus da União Europeia e os seus serviços, o ECMWF, o Centro Comum de Investigação da Comissão Europeia, a NOAA, a OMM e a FAO — ou a literatura revista por pares, como as revistas *Remote Sensing* e *Earth System Science Data*. Os domínios das citações são confrontados com um registo curado quando o site é construído, de modo que uma ligação desconhecida ou de baixa autoridade é assinalada antes da publicação. Sempre que um número é contestado ou depende da versão, o texto di-lo.

## O resto do conjunto

Os artigos de apoio levam cada peça mais longe: o que é a deteção remota, o programa Landsat, os satélites Sentinel, o sistema MODIS, o NDVI e a família mais ampla dos índices de vegetação, a deteção de alterações na ocupação do solo, a [monitorização da desflorestação por satélite](/pt/ecology/earth-observation/satellite-deforestation-monitoring), a vigilância de incêndios a partir do espaço, os sistemas de monitorização da seca, as observações da cor do oceano, a altimetria por satélite, os produtos de dados de observação da Terra, o programa Copernicus e um balanço franco das [limitações e incertezas da deteção remota](/pt/ecology/earth-observation/remote-sensing-limitations-and-uncertainty). Em conjunto, explicam como o planeta é vigiado a partir da órbita e como ler o que essa vigilância produz.

## Sources

1. **NASA Earthdata** — [Earth-science data and EOSDIS](https://www.earthdata.nasa.gov/). Porta de entrada para os arquivos de observação da Terra da NASA e para a documentação por nível de produto.
2. **NASA Earth Observatory** — [imagens e artigos explicativos](https://science.nasa.gov/earth/earth-observatory/). Páginas temáticas sobre como são feitas e usadas as medições por satélite.
3. **USGS** — [Landsat missions](https://www.usgs.gov/landsat-missions). História, sensores e o registo contínuo da superfície terrestre (com a NASA).
4. **ESA** — [Observing the Earth](https://www.esa.int/Applications/Observing_the_Earth). Missões e instrumentos europeus de observação da Terra.
5. **Copernicus** — [EU Earth-observation programme](https://www.copernicus.eu/en). Os Sentinel e os serviços Copernicus.
6. **ECMWF** — [reanálises e serviços Copernicus](https://www.ecmwf.int/). Opera os serviços de Alterações Climáticas e de Monitorização da Atmosfera.
7. **NOAA NESDIS** — [satélites ambientais](https://www.nesdis.noaa.gov/). Satélites operacionais e serviços de dados da NOAA.
8. **European Commission JRC** — [monitorização do território, das florestas e dos riscos](https://joint-research-centre.ec.europa.eu/). Produtos operacionais baseados em observação da Terra.
9. **WMO** — [sistemas mundiais de observação](https://wmo.int/). Normas internacionais para a observação ambiental.
10. **Remote Sensing (journal)** — [métodos revistos por pares](https://www.mdpi.com/journal/remotesensing). Investigação sobre sensores, algoritmos e aplicações.
11. **Earth System Science Data** — [conjuntos de dados de referência](https://earth-system-science-data.net/). Publicações de dados do sistema Terra revistas por pares.
