---
title: 'Dinâmica de fluidos: por que um único número adimensional decide como se comporta um escoamento'
metaTitle: Dinâmica de fluidos e o número de Reynolds
excerpt: Um ciliado nadador e um furacão obedecem às mesmas equações. O que os separa é a razão entre inércia e viscosidade, e essa razão decide se um escoamento é suave, caótico ou fora do alcance do cálculo direto.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - fluid-dynamics
  - reynolds-number
  - turbulence
  - boundary-layer
  - aerodynamics
related:
  - classical-mechanics-explained
  - waves-and-oscillations-explained
  - sound-and-acoustics-explained
  - convection-and-cloud-formation
pillar: classical-mechanics-explained
_bodyHash: a0af5e61
---

Um organismo unicelular que bate os seus cílios e um ciclone que se enrola em torno do seu olho são regidos pelas mesmas equações. O que os separa não é a física mas uma razão: quanto pesa a inércia do fluido face à sua viscosidade. Essa razão, o [número de Reynolds](/en/glossary/reynolds-number), é a primeira coisa que um especialista em dinâmica de fluidos pergunta perante um problema, porque determina que termos das equações podem ser descartados e quais não podem.

As leis de conservação subjacentes são as que a [mecânica clássica](/pt/physics/mechanics-waves/classical-mechanics-explained) expõe. O que muda é o objeto: em vez de um corpo com partes fixas, o sujeito é um meio contínuo que se deforma sem limite, de modo que a massa, a quantidade de movimento e a energia têm de ser seguidas através de um volume de controlo, em vez de ficarem presas a uma coisa.

## A razão, e o que ela seleciona

A obra de referência de aeronáutica da NASA enuncia a definição sem rodeios: o número de Reynolds «exprime a razão entre as forças de inércia (resistentes à mudança ou ao movimento) e as forças viscosas (pesadas e pegajosas)», escrito Re = ρVL/μ, onde ρ é a massa volúmica, V uma velocidade característica, L um comprimento característico e μ a viscosidade dinâmica. Nada nessa expressão é uma propriedade apenas do fluido. Dois dos quatro termos são propriedades do fluido, mas um descreve o escoamento e outro descreve a geometria, razão pela qual a mesma água está bem dentro do regime viscoso num capilar e é totalmente turbulenta num rio.

A extremidade baixa é mais estranha do que parece. Os trabalhos sobre o ciliado *Paramecium* situam-no num número de Reynolds de cerca de 0.1, um regime em que «as forças de inércia são pequenas em comparação com as forças viscosas». Aí um organismo não desliza por inércia. Pare os cílios e o movimento cessa quase de imediato, porque não há quantidade de movimento armazenada digna de menção. As estratégias que funcionam lançando fluido para trás — como faz um nadador — não devolvem nada a essa escala.

Quanto às propriedades do próprio fluido, os dados de referência do NIST atribuem à água líquida a 20 °C e 1 bar uma massa volúmica de 998.21 kg/m³ e uma viscosidade de 1.0016 × 10⁻³ Pa·s. Dividindo uma pela outra obtém-se uma viscosidade cinemática próxima de 1.0 × 10⁻⁶ m²/s, e é esta grandeza combinada, e não a viscosidade sozinha, que fixa a rapidez com que a quantidade de movimento se difunde lateralmente através de um escoamento.

O retorno prático desta razão é o ensaio em modelo. A exposição da NASA é direta: «Se o número de Reynolds da experiência e o do voo forem próximos, então modelamos corretamente os efeitos das forças viscosas relativamente às forças de inércia.» Um modelo à escala num túnel não é um avião pequeno; é um escoamento diferente que foi arranjado para ter os mesmos números adimensionais. Onde a compressibilidade também conta, há que igualar ainda uma segunda razão — o número de Mach, a velocidade dividida pela [velocidade local do som](/pt/physics/mechanics-waves/sound-and-acoustics-explained) —, e a NASA adverte que transportar coeficientes de baixa velocidade para condições de alta velocidade falha porque «a compressibilidade do ar altera a física importante entre estes dois casos».

## O que diz a equação de Bernoulli, e a versão dela que está errada

A relação de Bernoulli é uma afirmação sobre a energia ao longo de uma linha de corrente, e só é válida para um escoamento estacionário, incompressível e efetivamente não viscoso. Essas condições não são letra miúda; são o conteúdo. Onde se verificam, uma subida da velocidade corresponde a uma queda da pressão, e a equação converte uma na outra.

O problema surge quando é usada ao contrário para explicar algo que não pode explicar. O exemplo mais duradouro é a alegação de que uma asa sustenta porque o ar que segue o caminho superior, mais longo, tem de chegar ao bordo de fuga ao mesmo tempo que o ar do caminho inferior e, por isso, tem de viajar mais depressa. O guia de aeronáutica da NASA rejeita o raciocínio por razões de medição e não de princípio: «a velocidade no extradorso de uma asa sustentadora é muito superior à velocidade no extradorso que produziria um tempo de trânsito igual». A velocidade suposta simplesmente não é a observada. A equação de Bernoulli está correta; o que lhe é dado é uma entrada fabricada. A ordem honesta das operações é resolver primeiro o campo de velocidades, depois usar Bernoulli para o transformar em pressão e depois integrar a pressão para obter uma força.

## A camada limite, onde a viscosidade que se desprezou faz todo o trabalho

Tratar um escoamento como não viscoso funciona surpreendentemente bem longe das superfícies e falha por completo junto delas, porque um fluido real não desliza ao longo de uma parede sólida. A NASA descreve a consequência como «uma camada fina de fluido junto à superfície na qual a velocidade passa de zero à superfície ao valor da corrente livre longe da superfície». Quase todo o cisalhamento, e portanto quase toda a resistência viscosa, reside dentro dessa camada.

O seu caráter depende do número de Reynolds: «Para números de Reynolds mais baixos, a [camada limite](/en/glossary/boundary-layer) é laminar e a velocidade na direção do escoamento varia uniformemente à medida que nos afastamos da parede», ao passo que para valores mais altos «é turbulenta e a velocidade na direção do escoamento caracteriza-se por escoamentos turbilhonares não estacionários dentro da camada limite». A distinção importa porque uma camada limite que fica sem quantidade de movimento descola-se da superfície, e é o descolamento que produz a perda de sustentação da asa a um ângulo de ataque elevado.

É também por isso que a resistência não sobe suavemente com a velocidade. O tratamento que a NASA faz do escoamento em torno de uma esfera descreve uma sequência e não uma tendência: vórtices agarrados estáveis a baixa velocidade, depois um desprendimento alternado instável — a esteira de vórtices — que gera grande resistência, depois escoamento caótico que reduz um pouco a resistência, e depois uma camada limite turbulenta que inicialmente produz menos resistência do que o caso laminar antes de a relação se inverter de novo. Uma camada turbulenta é mais dissipativa junto à parede, mas transporta para junto dela fluido de maior quantidade de movimento, pelo que pode manter-se agarrada mais longe em torno do corpo. Se essa troca é favorável depende do ponto da sequência em que nos encontramos.

## A transição é um intervalo, não um limiar

O atalho dos manuais coloca a transição de laminar para turbulento num tubo num número de Reynolds de cerca de 2300, como se o escoamento mudasse de estado numa linha. Os trabalhos cuidadosos sobre o escoamento transicional em tubos descrevem algo menos arrumado. Abaixo de Re₁ ≃ 2300 a turbulência aparece como «puffs de equilíbrio (ou transientes de longa duração)» localizados, que viajam num fundo de resto laminar; a fração turbulenta cresce depois com o número de Reynolds «até Re₂ ≃ 2600, onde há uma transição contínua para um estado de turbulência uniforme».

| Número de Reynolds | Estado do escoamento no tubo | O que se observa de facto |
| --- | --- | --- |
| Abaixo de ≈ 2300 | Laminar com turbulência localizada | Puffs isolados, transientes ou duradouros, em meio laminar |
| ≈ 2300 a ≈ 2600 | Intermitente | A fração turbulenta sobe continuamente com o número de Reynolds |
| Acima de ≈ 2600 | Turbulência uniforme | A turbulência preenche o tubo em vez de ocupar manchas |

Seguem-se duas consequências. A transição é uma propriedade de um intervalo, pelo que um escoamento próximo do valor inferior pode ser laminar ou turbulento consoante a perturbação à entrada e a rugosidade da parede. E um único valor crítico citado é o resumo de uma distribuição, não um interruptor.

## Turbulência: a parte que não foi fechada

A turbulência não é uma teoria física separada. É o que as mesmas equações fazem quando os termos inerciais não lineares dominam, e a dificuldade é aritmética mais do que conceptual. Fazer a média das equações para obter o escoamento médio introduz termos novos que representam o transporte de quantidade de movimento pelas flutuações, e esses termos contêm incógnitas que as próprias equações médias não conseguem fornecer. Todo o cálculo prático fecha, por isso, o sistema com um modelo.

Até onde chega essa cedência vê-se no modo como a área enuncia as suas próprias ambições. Um estudo encomendado pela NASA sobre o futuro da aerodinâmica computacional fixa como meta para 2030 que «previsões exatas e assentes na física de escoamentos turbulentos complexos, incluindo o descolamento do escoamento, possam ser realizadas de forma rotineira e eficiente» — uma meta que vale a pena escrever precisamente porque ainda não é rotina. Os modelos de turbulência são calibrados face a casos medidos e simulados em vez de deduzidos de primeiros princípios, o que significa que não se pode supor que um modelo validado num regime seja exato fora dele.

## Porque isto aparece em todas as previsões climáticas e meteorológicas

A distância entre o movimento resolvido e o movimento modelado é a restrição central da simulação geofísica, e não um pormenor da prática de engenharia. A avaliação do IPCC di-lo diretamente: «Dadas as limitações dos recursos de computação, os MCG da geração atual ainda não conseguem representar os processos de nuvens de pequena escala e, por consequência, a convecção superficial e profunda é determinada por parametrizações à escala sub-grelha.» Os modelos regionais que permitem a convecção, «correndo tipicamente com uma resolução inferior a 10 km», resolvem parte daquilo que um modelo global tem de parametrizar, e melhoram o ciclo diurno simulado e os extremos de precipitação — mas não podem ser corridos globalmente durante longos períodos com o custo atual.

A leitura honesta dessa situação é a que a avaliação dá para os modelos globais com convecção parametrizada: subsiste «pouca confiança na sua capacidade de simular com exatidão as características espaço-temporais da precipitação atual, sobretudo nos trópicos». Um [modelo climático](/pt/glossary/climate-model) não está errado quanto à dinâmica de fluidos; é incapaz de resolver as escalas em que parte dessa dinâmica de fluidos acontece, e o substituto é uma parametrização cujos coeficientes são condicionados pela observação em vez de deduzidos. O mesmo problema limita o modo como a [circulação oceânica](/pt/ecology/earth-systems/ocean-circulation-and-climate) é representada, e é a razão pela qual a [convecção e a formação de nuvens](/pt/physics/climate-physics/convection-and-cloud-formation) continua a ser uma das partes mais ativamente revistas da [física da atmosfera](/pt/physics/climate-physics/atmospheric-physics-explained).

O que o número de Reynolds não consegue fazer é dizer que comprimento nele colocar. Um tubo tem um diâmetro óbvio; uma cordilheira, a camada limite de uma folha ou uma onda a rebentar não têm, e a escolha do comprimento característico é um juízo de modelação que muda o valor em ordens de grandeza. Dois escoamentos citados com o mesmo número de Reynolds só são dinamicamente semelhantes se em ambos os casos se quis dizer o mesmo comprimento — o que é do género de coisa fácil de enunciar e fácil de perder entre um túnel de vento e um artigo.

## Sources

1. **NASA Glenn Research Center** — [Similarity parameters](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/similarity-parameters/). Definição dos números de Reynolds e de Mach e fundamento da semelhança em túnel de vento.
2. **NASA Glenn Research Center** — [Bernoulli and Newton](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/bernoulli-and-newton/). Porque a explicação da sustentação por igualdade de tempos de trânsito descreve mal o campo de velocidades.
3. **NASA Glenn Research Center** — [Boundary layer](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/). Definição de camada limite, caráter laminar e turbulento, e descolamento do escoamento.
4. **NASA Glenn Research Center** — [Drag of a sphere](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Sequência de estados do escoamento atrás de um corpo rombo e o seu efeito na resistência.
5. **NIST Chemistry WebBook** — [Isobaric properties for water](https://webbook.nist.gov/cgi/fluid.cgi?Action=Load&ID=C7732185&Type=IsoBar&Digits=5&P=1&THigh=25&TLow=20&TInc=5&RefState=DEF&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&HUnit=kJ%2Fkg&WUnit=m%2Fs&VisUnit=Pa*s&STUnit=N%2Fm). Massa volúmica e viscosidade da água líquida a 20 °C e 1 bar.
6. **Proceedings of the National Academy of Sciences** — [Distinct large-scale turbulent-laminar states in transitional pipe flow](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889535/). Números de Reynolds críticos que delimitam o regime intermitente no escoamento em tubo.
7. **eNeuro** — [Integrative neuroscience of Paramecium, a "swimming neuron"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8208649/). Número de Reynolds de um ciliado nadador e predomínio das forças viscosas.
8. **NASA Technical Reports Server** — [CFD Vision 2030 Study: A Path to Revolutionary Computational Aerosciences](https://ntrs.nasa.gov/citations/20140003093). Meta declarada para 2030 de previsão rotineira e exata de escoamentos turbulentos complexos.
9. **IPCC AR6 WG1, capítulo 8** — [Water cycle changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/). Parametrização sub-grelha da convecção, resolução que permite a convecção e confiança na precipitação simulada.
