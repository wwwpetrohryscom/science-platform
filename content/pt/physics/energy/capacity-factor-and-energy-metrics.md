---
title: 'Ler estatísticas de energia: fator de capacidade, LCOE e as métricas que enganam'
metaTitle: 'Fator de capacidade, LCOE e as métricas que enganam'
excerpt: Potência instalada, fator de capacidade, custo nivelado e energia primária são quatro contas diferentes do mesmo parque, e cada uma carrega uma convenção capaz de mexer uma manchete sem que nada de físico mude.
type: expert
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - capacity-factor
  - levelised-cost
  - energy-statistics
  - primary-energy
  - electricity-generation
related:
  - energy-systems-explained
  - grid-integration-of-variable-renewables
  - wind-energy-physics
  - solar-photovoltaics-explained
pillar: energy-systems-explained
---

Em 2025 o parque eólico norte-americano à escala de serviço público teve em média 154,6 GW de potência com um [fator de capacidade](/pt/glossary/capacity-factor) de 34,2 por cento, segundo os números preliminares do *Electric Power Monthly* de agosto de 2026. O parque fotovoltaico teve em média 133,9 GW a 24,4 por cento. O parque nuclear teve em média 98,4 GW a 91,0 por cento. Multiplique cada par e a potência média entregue dá 52,9 GW do eólico, 32,7 GW do solar e 89,6 GW do nuclear: com cerca de um terço da potência instalada somada dos outros dois, o parque nuclear produziu mais eletricidade do que ambos juntos.

Nenhum destes números é contestado e todos vêm da mesma publicação mensal. A comparação surpreende porque a potência é citada muito mais vezes do que a produção, e o rácio entre as duas varia quase por um fator de quatro só entre estes três parques, e por muito mais no conjunto das tecnologias de produção. A distinção entre uma quantidade e uma taxa é desenvolvida no tratamento de [trabalho, energia e potência como grandezas distintas](/pt/physics/mechanics-waves/energy-work-and-power); o que se segue trata dos quatro rácios em que a informação sobre energia realmente assenta, e das convenções enterradas em cada um. Situam-se a jusante da contabilidade de conversão descrita na panorâmica de [como um sistema energético está organizado](/pt/physics/energy/energy-systems-explained).

## De que é rácio o rácio

O fator de capacidade é a produção líquida num período dividida pelo que a mesma central teria produzido a funcionar em contínuo à sua potência nominal. Ambos os termos dessa fração são convenções.

O numerador é a produção *líquida*, após o consumo próprio da central. O denominador é uma potência nominal, e a Energy Information Administration dos EUA constrói-o a partir da capacidade de verão ajustada no tempo — a potência nominal de verão das unidades que operaram o mês inteiro, excluindo as que arrancaram ou foram desativadas a meio do mês. As potências de verão são conservadoras para a central térmica, porque o desempenho do condensador e da turbina melhora com o frio. É por isso que o fator de capacidade mensal do parque nuclear atingiu 99,0 por cento em dezembro de 2025 e 100,0 por cento em janeiro de 2026. Um parque de reatores não está a exceder o seu limite físico; está a exceder uma potência nominal definida para um dia quente.

| Tecnologia (2025, Estados Unidos, escala de serviço) | Fator de capacidade | O que o fixa |
| --- | --- | --- |
| Nuclear | 91,0 % | Apenas recargas e paragens de manutenção |
| Geotérmica | 65,9 % | Recurso e disponibilidade da central |
| Gás natural, ciclo combinado | 58,4 % | Economia de despacho face ao preço do combustível |
| Carvão | 48,7 % | Economia de despacho; posição na ordem de mérito |
| Hidroelétrica | 35,3 % | Disponibilidade de água e armazenamento sazonal |
| Eólica | 34,2 % | Recurso eólico e corte à altura do cubo |
| Fotovoltaica | 24,4 % | Luz do dia, estação e latitude |
| Gás natural, turbina a vapor | 19,8 % | Serviço de reserva e ponta |
| Gás natural, turbina de combustão | 14,1 % | Serviço de ponta |
| Petróleo, turbina a vapor | 11,3 % | Raramente económico de operar |

## Três razões diferentes para um número ser baixo

Um fator de capacidade baixo é muitas vezes lido como defeito. É um sintoma com pelo menos três causas distintas, e o diagnóstico importa mais do que o número.

A prova mais clara está dentro de um mesmo combustível. O gás natural aparece três vezes na tabela acima, a 58,4, 19,8 e 14,1 por cento. O combustível é idêntico; o que difere é a eficiência térmica e, por isso, a posição na ordem de mérito. Uma unidade de ciclo combinado é eficiente o bastante para correr quase sempre; uma turbina de combustão existe para cobrir as horas em que nada mais barato está disponível, e fazê-la correr muito mais significaria que o sistema tem um problema. Os seus 14,1 por cento são a intenção de projeto, não subdesempenho.

A limitação por recurso é a segunda causa e aplica-se a eólica, solar e hídrica, onde a entrada não é despachável. É uma propriedade do local e da máquina, traçada para as turbinas na explicação de [porque a produção escala com o cubo da velocidade do vento](/pt/physics/energy/wind-energy-physics) e para os painéis na discussão de [a distância entre a potência nominal de um módulo e a sua produção no terreno](/pt/physics/energy/solar-photovoltaics-explained).

A disponibilidade é a terceira. O fator de capacidade mensal do parque nuclear norte-americano caiu para 80,9 por cento em outubro de 2025 e para 84,9 por cento no maio anterior, ambas estações intermédias, quando as paragens de recarga são tipicamente agendadas. É um calendário de manutenção a transparecer numa estatística de desempenho.

## Uma média anual esconde a forma que importa

Reduzir um ano de produção horária a um único número deita fora a propriedade que mais importa a um sistema elétrico: quando a energia chega.

Ao longo de 2025 o fator de capacidade mensal do parque fotovoltaico foi de 13,7 por cento em dezembro a 32,4 por cento em julho. O eólico foi ao contrário, de 22,9 por cento em setembro a 44,2 por cento em março. A produção hidroelétrica moveu-se de 26,6 por cento em setembro a 41,0 por cento em maio. Cada número anual esconde uma oscilação de cerca de um fator de dois, e as oscilações não estão em fase entre si nem com a procura. Um fator de capacidade anual não pode dizer se um parque contribui nas horas de tensão do sistema, questão à parte tratada pelo crédito de capacidade e retomada na página sobre [o que a variabilidade custa a um sistema elétrico](/pt/physics/energy/grid-integration-of-variable-renewables).

## O custo nivelado é um rácio descontado, e é a taxa que faz o trabalho

O [custo nivelado da eletricidade](/en/glossary/levelised-cost) divide o custo de vida útil descontado de uma central pela sua produção de vida útil descontada. Esse segundo desconto é o que se esquece: um megawatt-hora produzido no ano 20 conta menos do que um produzido no ano 2, pelo que a taxa de desconto penaliza duas vezes os ativos de vida longa e intensivos em capital.

O estudo de custos da Agência Internacional de Energia, sobre 243 centrais em 24 países, adota 7 por cento como taxa de desconto de referência. A sua própria análise de sensibilidade mostra o que essa escolha compra: a 3 por cento, a nuclear cai abaixo do carvão e do gás; às taxas de 7 a 10 por cento que associa a ambientes mais arriscados, uma nuclear de construção nova custa mais do que as alternativas fósseis. A tecnologia, o local e a engenharia são idênticos nos dois casos. Só mudou o custo assumido do dinheiro.

Essa sensibilidade não é hipotética. Uma análise na *iScience* sobre condições de financiamento modela taxas de juro reais a subir de −0,5 por cento para 2,5 por cento entre 2020 e 2024, seguindo o Annual Technology Baseline do National Renewable Energy Laboratory, e calcula que os custos de financiamento mais altos acrescentaram 18 por cento ao custo nivelado da fotovoltaica norte-americana — 12 por cento com créditos fiscais — mas apenas 9 por cento a uma turbina a gás de ciclo combinado. A assimetria decorre diretamente da intensidade de capital: uma tecnologia cujo custo é quase todo à cabeça é um ativo do tipo obrigação, e o seu custo de manchete move-se com o mercado obrigacionista. O mesmo estudo reporta um custo médio ponderado do capital a variar vários pontos percentuais entre países para a mesma tecnologia, o que basta por si só para reordenar uma tabela de custos sem qualquer diferença de engenharia por detrás.

## O que fica fora da vedação

O custo nivelado é uma métrica na fronteira da central, e a agência que o publica di-lo: aplica-se ao nível da central individual e não trata do valor que uma tecnologia de produção acrescenta ao sistema. Duas centrais com custos nivelados iguais não são igualmente úteis se uma produz quando os preços são altos e a outra não — e é por isso que o mesmo relatório introduziu uma métrica ajustada ao valor a par da convencional.

Uma modelação publicada na *Nature Communications* põe números na divergência para o solar europeu. Nos seus cenários, os valores de mercado fotovoltaicos caem de cerca de 50 por cento do preço médio de bloco plano num caso de baixa penetração para 19 por cento num de alta penetração, apenas porque a produção se concentra nas mesmas horas em todo o parque. O corte de produção na mesma modelação chega a 234 TWh até 2040 numa configuração e a 131 TWh noutra que espalha a produção pelo dia. Uma métrica de custo calculada por megawatt-hora produzido não vê nada disto, porque conta os megawatt-hora cortados e de baixo valor exatamente como os restantes.

## Energia primária: a convenção faz a manchete

A última das quatro métricas é aquela em que a aritmética é trivial e a convenção é decisiva. Um quilowatt-hora de eletricidade contém 3.412 Btu. Uma central térmica com um consumo específico de 10.500 Btu por quilowatt-hora tem 33 por cento de eficiência; uma a 7.500 Btu por quilowatt-hora, 45 por cento.

Pergunte agora quanta energia *primária* consumiu um parque eólico. Não há combustível, pelo que a resposta é uma escolha. Contar a eletricidade pelo seu próprio conteúdo energético valoriza um terawatt-hora eólico em 3.412 Btu por quilowatt-hora. Contar antes a energia fóssil que teria de ser queimada para gerar a mesma eletricidade valoriza-o perto do consumo específico de uma térmica — cerca de três vezes mais Btu para exatamente a mesma eletricidade entregue. Nenhuma convenção está errada. Mas uma quota renovável da energia primária calculada de um modo não é comparável com outra calculada do outro, e a diferença basta para mudar se uma transição parece rápida ou lenta. Qualquer número da quota de uma fonte na energia *primária* que não nomeie a sua convenção foi despojado daquilo que o torna significativo.

## Ler um número com honestidade

Quatro verificações cobrem a maioria das falhas acima. Nomear o produto e o período, porque um número mensal e um anual do mesmo parque diferem por rotina em dez pontos percentuais ou mais. Verificar a fronteira: os fatores de capacidade desta página cobrem apenas produtores à escala de serviço público, pelo que a produção distribuída em telhado fica inteiramente de fora. Verificar a colheita: a administração marca 2024 e anteriores como definitivos e 2025 em diante como preliminares, e os valores preliminares mexem-se. E tratar qualquer número de custo como condicional a uma taxa de desconto que raramente vem impressa ao seu lado.

Essas ressalvas são exatamente o que tende a cair entre um conjunto de dados e uma manchete, o padrão traçado na análise de [o que se perde a caminho da publicação](/pt/insight/uncertainty-lost-between-dataset-and-headline). Nada disto torna as métricas inúteis: fator de capacidade, custo nivelado e energia primária respondem cada um a uma pergunta real, e a falha está em fazer a uma a pergunta que pertence a outra. O hábito que a evita é a disciplina comum de [dizer o que uma medição pode sustentar](/pt/physics/mechanics-waves/measurement-uncertainty-explained), aplicada a estatísticas publicadas em vez de a instrumentos.

## Sources

1. **US Energy Information Administration** — [Electric Power Monthly, tabela 6.07.B](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b). Fatores de capacidade anuais e mensais e capacidade ajustada no tempo para produtores não fósseis à escala de serviço.
2. **US Energy Information Administration** — [Electric Power Monthly, tabela 6.07.A](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_a). Fatores de capacidade anuais para carvão, ciclo combinado, turbina de combustão, turbina a vapor e petróleo.
3. **US Energy Information Administration** — [What is the efficiency of different types of power plants?](https://www.eia.gov/tools/faqs/faq.php?id=107&t=3). Consumo específico e a conversão entre consumo específico e eficiência térmica.
4. **US Energy Information Administration** — [British thermal units](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php). A equivalência de 3.412 Btu de um quilowatt-hora.
5. **Agência Internacional de Energia e Agência de Energia Nuclear da OCDE** — [Projected Costs of Generating Electricity 2020](https://www.iea.org/reports/projected-costs-of-generating-electricity-2020). Taxa de desconto de referência, sensibilidade à taxa entre tecnologias e o âmbito da métrica ao nível da central.
6. **iScience** — [Financing costs and the competitiveness of renewable power](https://pmc.ncbi.nlm.nih.gov/articles/PMC12677178/). Movimento das taxas de juro reais, o efeito assimétrico dos custos de financiamento sobre solar e gás, e o custo do capital por país.
7. **Nature Communications** — [Impacts of large-scale deployment of vertical bifacial photovoltaics on European electricity market dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303785/). Valores de mercado fotovoltaicos modelados face aos preços médios, e volumes de corte por configuração de implantação.
