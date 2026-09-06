---
title: 'Transferência de calor: três mecanismos que escalam de modo distinto com a temperatura'
metaTitle: 'Transferência de calor: condução, convecção e radiação'
excerpt: A condução e a convecção crescem aproximadamente ao ritmo da diferença de temperatura; a radiação cresce com a quarta potência da temperatura absoluta. Essa diferença de expoente decide qual dos mecanismos domina, e a resposta muda com a temperatura de serviço.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - heat-transfer
  - conduction
  - convection
  - thermal-radiation
  - emissivity
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - solar-radiation-and-earth-energy-balance
pillar: laws-of-thermodynamics-explained
_bodyHash: 76bae86f
---

Tome-se uma superfície a 500 K num ambiente a 300 K e eleve-se depois a 1,500 K. A diferença de temperatura que impulsiona a condução e a convecção cresce seis vezes. O fluxo radiativo líquido cresce por um fator de cerca de 93, de aproximadamente 3.1 kW m⁻² para 287 kW m⁻². Nada mudou nos materiais; mudaram os expoentes. A condução e a convecção são impulsionadas por uma *diferença* de temperatura, a radiação pela diferença das quartas potências da temperatura *absoluta*, e é esse desencontro que faz com que a via de perda dominante seja outra em cada caso: num criostato, na parede de uma casa e no invólucro de uma turbina.

A termodinâmica fixa em que direção a energia se move e quanto trabalho pode ser extraído pelo caminho, como [estabelecem as quatro leis](/pt/physics/thermodynamics/laws-of-thermodynamics-explained), mas não põe relógio ao processo. A taxa é um assunto separado, e dispõe apenas de três mecanismos.

## Condução: uma lei de gradiente cujo coeficiente não é uma constante

A condução transporta energia através de um meio parado por colisões moleculares ou eletrónicas. A lei de Fourier enuncia o fluxo como proporcional ao gradiente local de temperatura, sendo a constante de proporcionalidade a condutividade térmica, k. Através de uma placa plana em regime estacionário isto reduz-se a um fluxo kΔT/L, pelo que reduzir a metade a espessura de uma parede duplica a sua perda, e camadas em série somam resistências em vez de condutâncias.

A forma tão arrumada esconde quanto trabalho o coeficiente está a fazer. A base de dados de materiais criogénicos do NIST publica, para o cobre isento de oxigénio, ajustes de curva válidos de 4 K a 300 K e declarados dentro de 1–2% dos dados subjacentes. Avaliados a 300 K, os ajustes dão cerca de 390–400 W m⁻¹ K⁻¹ para todos os graus de pureza da tabela: à temperatura ambiente, o teor de impurezas quase não conta. Avaliados a 20 K, os mesmos ajustes dão cerca de 1.4 × 10³ W m⁻¹ K⁻¹ para uma razão de resistência residual de 50 e cerca de 6.6 × 10³ para uma razão de 500. O mesmo elemento, a mesma equação, e quase um fator de cinco entre dois lotes de cobre quimicamente quase idênticos.

As interfaces complicam ainda mais o quadro. Dois sólidos premidos um contra o outro tocam-se apenas nas asperezas, pelo que uma junta real suporta um salto de temperatura que nenhuma condutividade de volume prevê. Em conjuntos laminados ou aparafusados, a resistência de contacto é muitas vezes o maior termo da cadeia, e é por isso que um projeto térmico que pára nas propriedades dos materiais tende a ser otimista.

## Convecção: o mecanismo cujo coeficiente se mede, não se deduz

A expressão da convecção — o fluxo é igual a h vezes a diferença de temperatura entre a superfície e o fluido — parece uma lei física e está mais perto de uma definição. O coeficiente de transferência de calor h absorve tudo o que a equação deixou de fora: velocidade do escoamento, geometria, orientação, estado da superfície, e ainda a viscosidade, a massa volúmica, a condutividade e o calor específico do fluido.

Como h não pode ser deduzido de primeiros princípios para geometrias realistas, obtém-se a partir de correlações entre grupos adimensionais: o número de Nusselt a partir dos de Reynolds e de Prandtl em escoamento forçado, e a partir do de Rayleigh em convecção livre. Essas correlações são ajustes a experiências particulares em gamas particulares, e a sua exatidão é uma questão de dezenas de por cento e não de por cento. A margem de projeto no dimensionamento de permutadores de calor existe em grande parte por causa disto, e o modo de falha consiste em usar uma correlação fora da geometria ou do regime de escoamento para que foi ajustada.

A convecção explica também quase tudo o que um isolamento faz. Os isolamentos fibrosos e as espumas atuam sobretudo por imobilizarem ar em poros suficientemente pequenos para suprimir a circulação, e não porque a matriz sólida conduza mal; a lâmina de gás selada de uma janela é dimensionada suficientemente fina para que o escoamento por impulsão não chegue a arrancar. Alargue-se a lâmina e a perda aumenta, mesmo havendo agora mais gás a separar os vidros.

## Radiação: a quarta potência muda a aritmética

Toda a superfície acima do zero absoluto emite [radiação eletromagnética](/pt/physics/quantum-basics/electromagnetic-spectrum-applications) a um ritmo dado pela lei de Stefan–Boltzmann: εσT⁴, com σ = 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴, um valor que o SI fixa agora de forma exata porque decorre de outras constantes definidas. A troca líquida entre uma superfície e o meio que a rodeia vai como a diferença das quartas potências.

Do expoente decorrem duas consequências. Uma superfície negra a 300 K emite cerca de 459 W m⁻², o que soa enorme até se subtraírem os 459 W m⁻² que chegam de volta de um ambiente à mesma temperatura; o que importa é o valor líquido, e um excesso de 10 K sobre o ambiente dá apenas cerca de 64 W m⁻² líquidos — comparável à convecção livre no ar e, por isso, nunca desprezável perto da temperatura ambiente. A 1,500 K a mesma superfície emite cerca de 287 kW m⁻², e a radiação deixa de competir com os outros dois mecanismos e passa a dominá-los.

A outra alavanca é espectral. A **emissividade** é a razão entre a emissão de uma superfície e a de um emissor perfeito, e a lei de Kirchhoff liga-a à absortividade no mesmo comprimento de onda e na mesma direção. Como a luz solar chega em comprimentos de onda curtos enquanto uma superfície perto da temperatura ambiente emite no infravermelho térmico, é possível construir um revestimento que reflita a primeira banda e irradie fortemente na segunda. A demonstração mais nítida é um aparelho descrito na [*Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/) que atingiu uma média de 37 °C abaixo da temperatura do ar ambiente ao longo de um ciclo completo de dia e noite, com uma descida máxima de 42 °C, usando um emissor sintonizado na janela atmosférica de 8–13 µm. Mostra também quão fraco é o efeito perante a concorrência: o conjunto precisou de uma câmara de vácuo a 10⁻⁶ Torr e de dez blindagens de radiação concêntricas para impedir que a condução e a convecção apagassem o défice radiativo. A versão sem blindagem da mesma física é a cobertura fria, para a qual a Agência de Proteção Ambiental dos Estados Unidos reporta reduções máximas da temperatura interior de 1.2–3.3 °C em edifícios sem ar condicionado e reduções da ponta de procura de arrefecimento de 11–27% nos edifícios que o têm.

| Mecanismo | O que o impulsiona | Como escala | O que se altera para o controlar |
| --- | --- | --- | --- |
| Condução | Gradiente de temperatura num meio | Linear em ΔT, inverso no comprimento do percurso | Condutividade, espessura, qualidade do contacto |
| Convecção | Diferença superfície-fluido mais escoamento | Linear em ΔT, com h fixado pelo escoamento e pela geometria | Velocidade, largura da lâmina, mudança de fase |
| Radiação | Temperatura absoluta de ambas as superfícies | Diferença das quartas potências | Emissividade, seletividade espectral, fator de forma |

## Dois sistemas em que a mistura é todo o projeto

A pá de uma turbina a gás é um problema de condução e convecção criado por um desejo termodinâmico. O rendimento do ciclo sobe com a temperatura de entrada, pelo que programas financiados pelo Departamento de Energia dos Estados Unidos fixaram como meta temperaturas de entrada na turbina de 1,700 °C ou superiores — sabidamente acima do ponto de fusão da liga do substrato — e apoiam-se em arrefecimento por transpiração e por estrutura em treliça para manter um gradiente ao longo de alguns milímetros de metal. O componente sobrevive não porque o material tolere a temperatura do gás, mas porque o transporte é projetado; o motivo de rendimento que está por trás é exposto em [as máquinas térmicas e os seus limites de rendimento](/pt/physics/thermodynamics/heat-engines-and-efficiency-limits).

Um planeta é o caso oposto. Dentro do sistema terrestre, a convecção e a evaporação movem a maior parte da energia: a contabilidade da NASA dá cerca de 340 W m⁻² a chegar ao topo da atmosfera em média global, com 29% refletidos, 23% absorvidos na atmosfera e 48% à superfície; desse mesmo total incidente, 25% saem novamente da superfície por evaporação e 5% por correntes térmicas, contra 17% líquidos sob a forma de infravermelho. Mas o espaço é vácuo, pelo que nenhum destes dois mecanismos consegue levar um joule para além do topo da atmosfera: a única saída é a radiação, a partir de um corpo que, visto de fora, se parece com uma superfície a cerca de −20 °C. Como funciona o detalhe espectral dessa emissão é retomado em [a transferência radiativa através de uma atmosfera](/pt/physics/climate-physics/radiative-transfer-explained) e no enquadramento termodinâmico do [balanço energético planetário](/pt/physics/thermodynamics/earth-energy-budget-and-the-second-law), enquanto a metade incidente do balanço é tratada em [a radiação solar e o balanço energético da Terra](/pt/physics/energy/solar-radiation-and-earth-energy-balance).

## O que os coeficientes não conseguem resolver

Cada mecanismo traz um tipo diferente de incerteza, e não são intermutáveis. A condutividade está bem medida para materiais puros em condições controladas, mas o valor em serviço de um isolamento deriva com a humidade, a compressão e o envelhecimento, e o desempenho real de uma parede é habitualmente fixado pelas pontes térmicas e não pelo valor impresso no produto. Os coeficientes convectivos herdam a dispersão das experiências a que as correlações foram ajustadas. A emissividade é o elo mais fraco dos três: um único número de ficha técnica é uma média sobre comprimento de onda, ângulo e estado da superfície, e a oxidação ou a poeira podem deslocá-lo substancialmente ao longo da vida de um componente.

Há também uma fronteira em que a própria lei de Fourier deixa de se aplicar. A escalas de comprimento comparáveis ao livre percurso médio dos [portadores de energia](/pt/physics/energy/hydrogen-as-an-energy-carrier), ou em tempos mais curtos do que o seu tempo de dispersão, o transporte torna-se balístico em vez de difusivo, e uma descrição regida por gradientes deixa de valer. Esse regime importa para a microeletrónica e para os termoelétricos de película fina, e é uma lembrança de que as três expressões acima são aproximações de meio contínuo com um domínio de validade e não leis no sentido em que o são as da termodinâmica.

## Sources

1. **NIST Cryogenic Technologies Group** — [Material properties: OFHC copper](https://trc.nist.gov/cryogenics/materials/OFHC%20Copper/OFHC_Copper_rev1.htm). Ajustes de curva da condutividade térmica de 4 K a 300 K por razão de resistência residual, com a exatidão declarada do ajuste.
2. **NIST CODATA** — [Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Valor exato e unidades usados aqui nos cálculos de fluxo radiativo.
3. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Repartição em média global da energia solar incidente e as vias energéticas da superfície.
4. **Nature Communications** — [Radiative cooling to deep sub-freezing temperatures through a 24-h day–night cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/). Magnitudes do arrefecimento abaixo do ambiente e o vácuo e a blindagem necessários para isolar o termo radiativo.
5. **U.S. Environmental Protection Agency** — [Using cool roofs to reduce heat islands](https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands). Efeitos medidos das coberturas de elevada refletância na temperatura interior e na ponta de procura de arrefecimento.
6. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems developed by additive manufacturing with ODS alloys](https://www.osti.gov/biblio/1923377). Temperaturas de entrada na turbina fixadas como meta acima do ponto de fusão do substrato e a abordagem de arrefecimento usada para as atingir.
