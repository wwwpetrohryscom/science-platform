---
title: 'Integração na rede: o que a variabilidade custa realmente a um sistema elétrico'
metaTitle: O que a variabilidade custa realmente à rede
excerpt: O custo da eólica e da solar num sistema elétrico não é, na maior parte, um custo de energia. É o preço do controlo de frequência, do corte de produção, da capacidade firme e das linhas — quatro problemas distintos reduzidos a uma só palavra.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 9
tags:
  - grid-integration
  - power-systems
  - curtailment
  - system-flexibility
  - electricity-markets
related:
  - energy-systems-explained
  - energy-storage-fundamentals
  - capacity-factor-and-energy-metrics
  - wind-energy-physics
pillar: energy-systems-explained
_bodyHash: 38ec4134
---

No final da primavera de 2020, o sistema elétrico da Grã-Bretanha realizou uma experiência que ninguém tinha concebido. O confinamento retirou uma fatia grande da procura enquanto a produção eólica e solar prosseguia, e o operador do sistema viu-se a pagar por algo que não era eletricidade. Os custos dos serviços de sistema entre maio e julho ascenderam a 302 milhões de libras, contra 101 milhões nos mesmos meses do ano anterior — o triplo da fatura num trimestre em que foi entregue menos energia. A procura nacional caiu para o valor mais baixo alguma vez registado, 13.4 GW durante a noite de 28 de junho, enquanto a capacidade síncrona que tinha de permanecer em serviço para manter o sistema estável foi estimada em cerca de 8 a 9 GW.

Esse trimestre é o problema de integração em miniatura. O que um sistema paga pela produção comandada pelo tempo não é, em larga medida, um pagamento por energia; é um pagamento por serviços que as centrais convencionais forneciam acessoriamente, por acaso estarem a rodar. Esses serviços são separáveis, têm físicas diferentes, e agrupá-los sob a palavra «intermitência» esconde qual deles é o limitante. A cadeia de conversão mais ampla em que se inserem está exposta na panorâmica sobre [como se monta um sistema energético](/pt/physics/energy/energy-systems-explained).

## Variabilidade e incerteza não são o mesmo problema

A variabilidade é o facto de a produção mudar. A incerteza é o facto de não se saber de antemão exatamente como. São cobertas por recursos diferentes e custam quantias diferentes.

Um recurso que oscila com força mas de forma previsível é comparativamente barato de acomodar: o programa é construído à sua volta com um dia de antecedência, e as centrais flexíveis que preenchem a lacuna são acopladas sem pressa. Um recurso quase constante que ocasionalmente surpreende o operador é caro, porque a surpresa tem de ser coberta por reserva mantida em tempo real, e a reserva é capacidade paga para estar disponível e não para produzir. É por isso que melhorar a previsão é uma das medidas de integração mais baratas disponíveis: nada faz quanto à variabilidade, mas converte incerteza em variabilidade, e a variabilidade é a mais barata das duas.

## A frequência é um balanço liquidado a cada segundo

A frequência da rede é o sinal visível do equilíbrio instantâneo entre produção e consumo. Num parque de grandes máquinas síncronas, as massas rotativas estão acopladas eletromecanicamente a essa frequência, pelo que um desequilíbrio súbito recorre primeiro à sua energia cinética. Essa energia de rotação armazenada — [a inércia do sistema](/en/glossary/grid-inertia) — fixa a taxa de variação da frequência após uma perturbação, o que por sua vez fixa quanto tempo os sistemas de comando têm antes de as proteções começarem a desligar equipamentos.

A produção ligada por inversores não a fornece por defeito. Um inversor seguidor da rede mede a forma de onda da tensão e injeta corrente em fase com ela; precisa de uma forma de onda para seguir. Um inversor formador de rede impõe uma forma de onda própria e comporta-se, do ponto de vista da rede, mais como uma fonte do que como um seguidor. Um trabalho de simulação publicado na *Scientific Reports* ilustra a diferença numa rede de ensaio de nove barramentos: perante um degrau de carga de cerca de um terço, um caso totalmente síncrono desceu a um mínimo de frequência de 59.42 Hz e demorou cerca de 80 segundos a estabilizar, um caso misto atingiu 59.79 Hz e estabilizou em menos de 8 segundos, e um caso totalmente formador de rede manteve 59.85 Hz. São resultados modelados num sistema de ensaio pequeno e não medições numa rede real, mas a direção importa: a capacidade é uma questão de conceção do controlo, não de aço a girar.

A tensão é um problema separado com física separada — local e não sistémica, e gerida através de potência reativa. É por isso que as redes de distribuição com produção densa em telhados atingem restrições muito antes do sistema de transporte.

## O corte de produção é um sinal de preço que ganhou má fama

O [corte de produção](/en/glossary/curtailment) — reduzir deliberadamente a produção disponível — é habitualmente noticiado como desperdício. Lê-se melhor como um sistema que recusa pagar energia que não consegue usar, e as suas causas são diagnosticáveis. Uma revisão do corte de produção solar à escala mundial publicada na *Solar Energy* atribui-o a transporte incapaz de levar a produção distante até ao consumo, a um desfasamento entre o momento em que a produção atinge o máximo e aquele em que a procura o atinge, e a excesso de oferta quando a produção variável somada às centrais inflexíveis de funcionamento obrigatório excede a procura — e conclui que as diferenças entre sistemas refletem tanto as políticas e as práticas de planeamento da rede como a geografia ou a estação.

| Sistema (2018) | Fração da produção solar potencial cortada | O que a provocou |
| --- | --- | --- |
| Alemanha | 0.3% | Restrições da rede local |
| Califórnia | 1.5% | Excesso de oferta ao meio-dia face a centrais inflexíveis |
| Havai | 2.7% em todo o estado | Pequenos sistemas insulares; 14% em Maui |
| Arizona | 2.9% | Excesso de oferta localizado |
| China (nacional) | 3.0% | Limites de transporte; 16% em Xinjiang, 10% em Gansu |
| Chile | cerca de 6% | Produção distante, transporte limitado |
| Texas | 8.4% | Congestionamento do transporte |

Duas ordens de grandeza separam o topo e a base dessa coluna, e nada dessa dispersão se explica pelo sol que cada lugar recebe. O corte de produção é um resultado de rede e de mercado, e o mesmo estudo verificou que o corte californiano duplicou entre 2018 e 2019.

Os preços negativos são a versão de mercado do mesmo sinal. Quando um produtor recebe um pagamento por megawatt-hora independentemente do preço de mercado — através de um subsídio, de um crédito fiscal ou de um contrato — continua a ser racional produzir abaixo de zero, e o preço desce até que algo com pior economia pare. Um preço negativo não é prova de um mercado avariado; é prova de que a resposta mais barata ao excesso de oferta não foi construída. Qual é a mais barata depende de quanto dura o excedente, o argumento desenvolvido na página companheira sobre [o que a duração do armazenamento compra realmente](/pt/physics/energy/energy-storage-fundamentals). Onde os excedentes são sazonais, convertê-los [num vetor químico armazenável](/pt/physics/energy/hydrogen-as-an-energy-carrier) passa a ser uma candidata, a troco de uma pesada penalização de conversão.

## O crédito de capacidade não é o fator de capacidade

Estas duas razões respondem a perguntas sem relação e são trocadas com frequência. O [fator de capacidade](/pt/physics/energy/capacity-factor-and-energy-metrics) diz respeito a energia: a produção anual dividida pelo que o funcionamento contínuo à potência nominal teria produzido. O crédito de capacidade diz respeito a fiabilidade: quanta capacidade convencional um recurso substitui sem degradar a aptidão do sistema para satisfazer o consumo nas horas mais apertadas. Um parque pode ter um fator de capacidade respeitável e um crédito de capacidade pequeno, e a diferença alarga-se com a penetração, porque a produção agrupada é correlacionada — quando uma máquina fica sem vento, as vizinhas também ficam, que é o modo de falha que o planeamento de adequação existe para evitar. A dependência da velocidade do vento por trás dessa correlação está exposta na física de [quanta potência uma turbina consegue retirar do ar em movimento](/pt/physics/energy/wind-energy-physics).

Um estudo sobre a Nova Inglaterra publicado na *Heliyon* mostra a forma do problema. Uma combinação dominada pela eólica dimensionada para gerar uma vez a procura anual satisfazia cerca de 73 por cento da procura horária sem armazenamento, e uma dominada pela solar cerca de 69 por cento; doze horas de armazenamento elevavam ambas para aproximadamente 86 a 87 por cento. Chegar ao nível de fiabilidade de 99.97 por cento usado no planeamento norte-americano exigia cerca de duas vezes e meia a procura anual em produção, a par de doze horas de armazenamento para uma combinação dominada pela eólica, e mais para uma dominada pela solar. A última fatia é um problema diferente da primeira: é fixada por ciclos sazonais e por episódios meteorológicos de vários dias, e cobri-la exige semanas de energia armazenada em vez de horas.

## A geografia faz o alisamento mais barato, e as linhas são a restrição

Agregar produção variável numa área alargada reduz a sua variância, porque os sistemas meteorológicos estão espacialmente correlacionados apenas num alcance limitado e locais suficientemente afastados não sobem e descem em conjunto. Isso faz do transporte a forma de flexibilidade menos exótica disponível: substitui armazenamento, reserva e capacidade firme de uma só vez, sem perda de ciclo. Tem também o prazo de realização mais longo, razão pela qual a restrição que aperta em muitos sistemas é hoje uma fila e não uma tecnologia. A avaliação *Electricity 2026* da Agência Internacional de Energia coloca entre 1,200 e 1,600 GW os projetos em fase avançada nas filas de ligação em todo o mundo, e estima que 450 a 700 GW deles poderiam ser libertados por tecnologias de otimização da rede em linhas existentes — capacidade dinâmica das linhas e controlo dos trânsitos de potência, a par de reforços mais pesados como a substituição de condutores e o aumento da tensão — e mais 750 a 900 GW por acordos de ligação mais flexíveis, não firmes. Ambas as vias atuam sobre corredores que já existem, e não sobre novos.

O balanço da agência sobre 50 sistemas elétricos, que cobrem quase 90 por cento da produção solar e eólica mundial, arruma-os em seis fases consoante o grau em que a produção variável alterou a exploração. A Dinamarca, a Irlanda, a Austrália do Sul e a Espanha situam-se na fase quatro ou acima, integrando entre 35 e 75 por cento de renováveis variáveis na produção anual — prova de que as fases descrevem prática de engenharia e não tetos. O mesmo relatório estima que medidas de integração atrasadas poderiam pôr em risco até 15 por cento da produção solar e eólica até 2030, chegando a 2,000 TWh de produção que estava fisicamente disponível e não tinha para onde ir.

## «Carga de base» descreve uma estrutura de custos, não um requisito do sistema

O equívoco mais persistente nesta área é o de que um sistema elétrico exige uma categoria de centrais chamada carga de base. O que um sistema exige é energia suficiente em cada hora e controlabilidade suficiente para manter a frequência e a tensão enquanto a entrega. A carga de base descreve outras duas coisas: a porção da curva de carga presente em todas as horas, e uma classe de centrais cujo ponto de funcionamento mais barato é plano porque os custos de capital dominam e os custos de combustível são baixos.

O registo de exploração torna a distinção visível. Os fatores de capacidade publicados pela US Energy Information Administration — lidos aqui na edição de agosto de 2026, na qual os valores a partir de 2025 continuam preliminares — mostram o parque de carvão à escala de serviço público em 52.8 por cento em 2016, 40.5 por cento em 2020 e 48.7 por cento em 2025. Nada mudou nessas caldeiras; mudaram os preços relativos dos combustíveis e a ordem de despacho. Nos mesmos anos, o parque nuclear manteve-se entre cerca de 91 e 93 por cento, reflexo de um custo de combustível tão baixo que funcionar a plena carga é sempre a escolha económica. O número de um parque acompanha o mercado e o do outro acompanha o calendário de manutenção.

## Onde os números do custo de integração são mais frágeis

**Os custos de integração não são limpamente imputáveis.** Atribuir um custo a um recurso exige um sistema contrafactual sem ele, e a escolha do contrafactual desloca substancialmente a resposta — as estimativas publicadas variam mais entre metodologias do que entre sistemas.

**As percentagens de corte de produção têm um denominador modelado.** A energia cortada é comparada com a produção potencial, que nunca foi produzida e tem de ser estimada a partir de dados de irradiância ou de vento mais uma disponibilidade assumida. Dois operadores que reportam cortes diferentes podem estar em desacordo quanto ao denominador.

**Os estudos de adequação assentam num registo meteorológico curto.** Os acontecimentos que fixam os requisitos de fiabilidade são raros, correlacionados e de vários dias, e o registo histórico contém poucos. Um punhado de anos meteorológicos não consegue resolver a cauda que o estudo procura dimensionar, razão pela qual o custo marginal do último por cento de fiabilidade é o número menos certo do exercício — e razão pela qual os limites que apertam são muitas vezes institucionais e não físicos, distinção examinada na análise das [restrições que não são da tecnologia](/pt/insight/energy-transition-constraints-physical-and-institutional).

## Sources

1. **Agência Internacional de Energia** — [Integrating Solar and Wind: executive summary](https://www.iea.org/reports/integrating-solar-and-wind/executive-summary). Quadro de integração em seis fases, o intervalo de 35–75 por cento nos sistemas pioneiros, e a estimativa de que até 15 por cento da produção solar e eólica está em risco até 2030.
2. **Agência Internacional de Energia** — [Electricity 2026: executive summary](https://www.iea.org/reports/electricity-2026/executive-summary). Capacidade que poderia ser libertada por tecnologias de otimização da rede e por acordos de ligação não firmes.
3. **Applied Energy** — [Ancillary services in Great Britain during the COVID-19 lockdown](https://pmc.ncbi.nlm.nih.gov/articles/PMC9759740/). Custos dos serviços de sistema, procura nacional mínima, e capacidade síncrona estimada como necessária para a estabilidade.
4. **Solar Energy** — [Too much of a good thing? Global trends in the curtailment of solar PV](https://pmc.ncbi.nlm.nih.gov/articles/PMC7470769/). Frações cortadas por sistema e as causas identificadas por trás delas.
5. **Scientific Reports** — [Hybrid compatible grid forming inverters for low inertia and mixed generation grids](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357951/). Mínimo de frequência e tempos de estabilização simulados para os casos síncrono, híbrido e dominado por inversores.
6. **Heliyon** — [The impact of energy storage on the reliability of wind and solar power in New England](https://pmc.ncbi.nlm.nih.gov/articles/PMC10955263/). Fiabilidade alcançada para dadas dimensões de produção e armazenamento, e o carácter sazonal do resíduo.
7. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Fatores de capacidade anuais do parque de carvão à escala de serviço público.
8. **US Energy Information Administration** — [Electric Power Monthly, Table 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Fatores de capacidade anuais do parque nuclear à escala de serviço público.
