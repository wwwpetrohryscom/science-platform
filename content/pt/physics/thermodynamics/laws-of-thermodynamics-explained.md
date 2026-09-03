---
title: 'As leis da termodinâmica: o que cada uma proíbe realmente'
metaTitle: 'As leis da termodinâmica e as suas proibições'
excerpt: As quatro leis são proibições, não receitas. Cada uma exclui uma classe de máquina ou de processo, e em conjunto fixam o que significa temperatura, o que a contabilidade da energia tem de equilibrar e em que sentido um processo pode decorrer.
type: pillar
author: energy-systems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - thermodynamics
  - second-law
  - temperature
  - entropy
  - energy-conversion
related:
  - entropy-explained
  - heat-engines-and-efficiency-limits
  - heat-transfer-conduction-convection-radiation
  - earth-energy-budget-and-the-second-law
---
[A termodinâmica](/en/glossary/thermodynamics) é um conjunto de proibições. Cada uma das suas quatro leis diz que algo não pode ser feito, e cada uma sobreviveu às teorias microscópicas que a deviam explicar — o calórico, depois a mecânica clássica, depois a teoria clássica de campos. É por isso que um raciocínio oitocentista sobre vapor continua a restringir, sem alteração, uma célula solar, um frigorífico doméstico e uma bactéria.

São também citadas com mais soltura do que são usadas. «A energia conserva-se» e «a entropia aumenta» são slogans que largam as condições que lhes estão presas, e é nessas condições que vive a confusão sobre o movimento perpétuo, as alegações de rendimento e os sistemas vivos.

## A lei zero é o que dá sentido a um termómetro

A lei zero diz que o equilíbrio térmico é transitivo: se dois corpos estão cada um em equilíbrio com um terceiro, estão em equilíbrio entre si. Soa a escrituração. É a razão pela qual um único número pode representar uma propriedade partilhada por todo o sistema em equilíbrio mútuo — e, portanto, a razão pela qual um instrumento posto em contacto com um corpo informa sobre o corpo e não apenas sobre o instrumento.

Esse número assenta agora numa constante definida e não numa substância. Desde maio de 2019 o SI fixa a constante de Boltzmann em exatamente 1,380649 × 10⁻²³ J K⁻¹, e o kelvin decorre dela; a ficha CODATA não traz incerteza porque não há nenhuma a trazer. A definição anterior, adotada em 1954, fazia do kelvin 1/273,16 da temperatura do ponto triplo da água, e o NIST assinala a fragilidade desse arranjo: extrapolar do ponto triplo da água para temperaturas muito altas ou muito baixas é problemático, razão pela qual outros 21 pontos de definição foram fixados por acordo internacional. O zero absoluto continua onde estava, a −273,15 °C.

**A temperatura não é uma quantidade de energia.** Uma faísca e uma banheira podem estar à mesma temperatura com energias que diferem em muitas ordens de grandeza. A temperatura é a variável que se iguala quando se permite que dois sistemas troquem energia — que é exatamente o que a lei zero afirma, e tudo o que afirma.

## A primeira lei: a energia conserva-se, e o calor não é algo que um corpo contenha

A primeira lei estende a conservação da energia ao calor: a variação da energia interna de um sistema é igual ao calor fornecido menos o trabalho realizado pelo sistema. O seu conteúdo está na diferença entre os termos. A energia interna é uma **[função de estado](/en/glossary/state-function)** — depende apenas da condição atual do sistema, pelo que uma viagem de ida e volta a devolve ao ponto de partida. Calor e trabalho são **grandezas de percurso**: descrevem energia a atravessar uma fronteira durante um processo, e a sua repartição depende de como o processo foi conduzido.

A consequência prática é que «quanto calor contém este objeto» não é uma pergunta bem formada. Um objeto detém energia interna; o calor é essa energia em trânsito sob uma diferença de temperatura, e o trabalho é energia em trânsito através de uma força que atua ao longo de um deslocamento. A mesma mudança de estado pode ser alcançada por muitas combinações das duas, razão pela qual a primeira lei por si só nunca seleciona um rendimento — equilibra as contas e fica por aí.

O que proíbe é o moto perpétuo de primeira espécie: um dispositivo cíclico que forneça trabalho sem uma entrada de energia equivalente. A proibição é categórica e não mecânica — aplica-se sem inspecionar a ligação proposta, porque qualquer ciclo devolve a energia interna ao seu valor inicial e as contas têm então de fechar através da fronteira.

## A segunda lei: a que tem sentido

Dois enunciados clássicos são equivalentes. Clausius: nenhum processo cíclico pode ter como único resultado a transferência de calor de um corpo mais frio para um mais quente. Kelvin–Planck: nenhum processo cíclico pode ter como único resultado a conversão completa em trabalho do calor de uma única fonte. Ambos se resumem na forma entrópica — num sistema isolado a entropia não diminui — e ambos proíbem o moto perpétuo de segunda espécie, o aparelho que extrairia trabalho útil apenas do calor ambiente. O que é a entropia, e porque «desordem» é uma glosa pobre para ela, é o assunto do artigo companheiro sobre [o que a entropia mede realmente](/pt/physics/thermodynamics/entropy-explained).

É a única lei aqui que distingue o passado do futuro, e a de consequência de engenharia mais afiada: o teto de qualquer máquina cíclica depende das temperaturas das suas fontes e de mais nada, um limite desenvolvido com dados de centrais reais em [as máquinas térmicas e os seus limites de rendimento](/pt/physics/thermodynamics/heat-engines-and-efficiency-limits).

É também estatística, e isso não é uma evasiva. A relação de flutuação de Crooks fixa quanto mais provável é uma trajetória direta do que a sua inversa, dado o trabalho trocado, e foi [testada diretamente puxando moléculas individuais de ARN](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/) com pinças óticas: a energia livre de enrolamento recuperada das distribuições de trabalho foi de 62,8 ± 1,5 kBT para um gancho, em acordo com um cálculo independente. As distribuições de trabalho de desenrolamento e reenrolamento dessa experiência sobrepõem-se e cruzam-se na variação de energia livre, pelo que puxões individuais caem de ambos os lados — alguns a correr localmente «ao contrário» — enquanto o conjunto obedece à desigualdade. A segunda lei é uma afirmação sobre probabilidades esmagadoras em sistemas de muitas partículas, não uma impossibilidade lógica à escala de poucas.

## A terceira lei: o zero absoluto como assíntota

A terceira lei afirma que a entropia de um sistema tende para uma constante quando a temperatura tende para o zero absoluto, e que essa constante é zero para um cristal perfeito. Seguem-se duas consequências. As entropias absolutas ganham sentido, porque há um ponto de referência comum a partir do qual integrar — razão mesma da existência de entropias padrão tabeladas. E arrefecer torna-se progressivamente mais difícil: as capacidades térmicas caem para zero à medida que a temperatura o faz, pelo que cada etapa adicional de arrefecimento tem menos com que trabalhar.

O enunciado de inatingibilidade foi recentemente afinado. Uma [dedução geral publicada na *Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/) em 2017 quantificou o custo: arrefecer perfeitamente até ao zero absoluto exige que pelo menos um recurso — o volume do banho frio ou o trabalho consumido — seja infinito, e para um banho de radiação a temperatura atingível escala como uma potência inversa do tempo de arrefecimento. O zero absoluto não é apenas difícil na prática; a dificuldade é um teorema, e o teorema fixa-lhe o preço.

## As quatro leis lado a lado

| Lei | O que afirma | O que proíbe | O que torna significativo |
| --- | --- | --- | --- |
| Zero | O equilíbrio térmico é transitivo | Uma escala de temperatura dependente do instrumento | A temperatura como propriedade partilhada |
| Primeira | A energia, incluindo o calor, conserva-se | Trabalho a partir do nada — moto perpétuo de primeira espécie | A energia interna como função de estado |
| Segunda | A entropia de um sistema isolado não diminui | Trabalho a partir de uma única fonte — moto perpétuo de segunda espécie | A entropia, e um sentido para o tempo |
| Terceira | A entropia tende para uma constante quando a temperatura tende para zero | Atingir o zero absoluto com recursos finitos | A entropia absoluta, referida a zero |

## A reversibilidade é um limite, não um procedimento

Todos os limites acima são deduzidos para um processo reversível: conduzido tão devagar, por um desequilíbrio tão pequeno, que poderia ser percorrido para trás pelos mesmos estados sem resíduo. Nada de real é reversível, porque uma velocidade finita exige uma força motriz finita, e uma força motriz finita produz entropia. É por isso que os limites são aproximados e nunca atingidos, e por isso que maximizar o rendimento e maximizar a potência são otimizações distintas com respostas distintas. A distância envolvida não é pequena: o parque a carvão dos Estados Unidos consumiu 10 777 Btu de combustível por cada quilowatt-hora gerado em 2024, segundo a Energy Information Administration, pelo que pouco menos de um terço da energia do combustível chegou como eletricidade.

Explica também uma divisão de trabalho que faz tropeçar. A termodinâmica fixa sentido e teto; nada diz sobre a rapidez com que algo acontece. A velocidade a que a energia atravessa efetivamente uma fronteira é uma questão de transporte, regida por condução, convecção e radiação com as suas próprias leis de escala — o assunto de [como o calor se move realmente](/pt/physics/thermodynamics/heat-transfer-conduction-convection-radiation), e a razão pela qual um processo termodinamicamente permitido pode ainda assim ser inutilmente lento.

## Onde as leis mordem fora dos motores

Uma bomba de calor entrega a um edifício mais energia térmica do que a eletricidade que consome, o que é habitualmente lido como uma violação. Não é: a máquina desloca calor em vez de o fabricar, e a segunda lei limita a razão através do salto de temperatura em vez de proibir uma razão superior a um. Quanto menor o salto, maior a razão atingível, razão pela qual as máquinas acopladas ao terreno são atrativas onde o terreno está disponível. O Departamento de Energia dos Estados Unidos nota que as temperaturas a cerca de 30 pés de profundidade se mantêm entre aproximadamente 10 °C e 15 °C todo o ano, uma fonte bem mais suave em janeiro do que o ar exterior.

Os sistemas vivos suscitam a mesma má leitura. Um organismo constrói e mantém estrutura improvável, diminuindo a sua própria entropia, ao mesmo tempo que exporta um aumento maior para o meio; a contabilidade fecha porque o organismo é aberto, como expõe o argumento de fluxo de energia por detrás de [a produção primária nos ecossistemas](/pt/ecology/ecosystems/primary-production-and-energy-flow). A versão planetária — luz solar absorvida a alta temperatura, infravermelho irradiado a baixa — é trabalhada em [o balanço energético da Terra como máquina térmica](/pt/physics/thermodynamics/earth-energy-budget-and-the-second-law); o mesmo raciocínio aplicado a uma fonte de radiação quente e a uma célula fria dá [os limites termodinâmicos da fotovoltaica](/pt/physics/thermodynamics/thermodynamic-limits-of-photovoltaics), e reaparece em cada passo das cadeias de conversão descritas em [como se montam os sistemas energéticos](/pt/physics/energy/energy-systems-explained).

## O que o quadro não resolve

A termodinâmica clássica é uma teoria dos estados de equilíbrio e das transições entre eles: não dá constantes de tempo e cala-se sobre mecanismos. Os estados estacionários longe do equilíbrio — uma célula viva, uma atmosfera em convecção, um laser — não são cobertos por nenhum princípio extremal com o estatuto da segunda lei, apesar de propostas repetidas. A produção máxima de entropia é a mais discutida delas, e continua a ser uma proposta contestada e não uma lei estabelecida.

A própria temperatura torna-se ambígua fora do equilíbrio: a um sistema cujas partes relaxam a velocidades muito diferentes podem atribuir-se várias temperaturas defensáveis ao mesmo tempo. Os sistemas dominados pela gravidade são ainda mais estranhos, com capacidades térmicas negativas e, para buracos negros, entropia a escalar com a área em vez do volume. As leis sobrevivem a ambos os casos; os atalhos construídos sobre elas, muitas vezes não.

## Sources

1. **NIST** — [Kelvin: Introduction](https://www.nist.gov/si-redefinition/kelvin-introduction). Redefinição do kelvin no SI, a anterior definição pelo ponto triplo e o zero absoluto em graus Celsius.
2. **BIPM** — [Measurement units](https://www.bipm.org/en/measurement-units). As sete constantes definidoras do SI e o valor fixado da constante de Boltzmann desde 20 de maio de 2019.
3. **NIST CODATA** — [Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?k). Valor exato e unidades, sem incerteza atribuída.
4. **Nature Communications** — [A general derivation and quantification of the third law of thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5355879/). Custo em recursos do arrefecimento e o escalamento da temperatura atingível com o tempo de arrefecimento.
5. **Nature** — [Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1752236/). Teste em molécula única de uma relação de flutuação e a energia livre de enrolamento recuperada.
6. **U.S. Department of Energy** — [Geothermal heat pumps](https://www.energy.gov/hgeo/geothermal/geothermal-heat-pumps). Temperaturas do subsolo pouco profundo que fixam o salto térmico das máquinas acopladas ao terreno.
7. **U.S. Energy Information Administration** — [Average operating heat rate for selected energy sources](https://www.eia.gov/electricity/annual/html/epa_08_01.html). Conversão média de combustível em eletricidade do parque de centrais em operação.
