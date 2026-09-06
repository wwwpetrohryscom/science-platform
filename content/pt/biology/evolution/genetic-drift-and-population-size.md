---
title: 'Deriva genética: porque o tamanho populacional decide se a seleção importa'
metaTitle: Deriva genética e tamanho efetivo de população
excerpt: A deriva é a mudança de frequências alélicas que resulta apenas da amostragem finita. Como a sua força escala inversamente com o tamanho efetivo de população, esse único parâmetro decide que coeficientes de seleção são visíveis para a evolução e quais não são.
type: expert
author: biology-ecosystems-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - genetic-drift
  - effective-population-size
  - neutral-theory
  - conservation-genetics
  - population-genetics
related:
  - evolution-explained
  - natural-selection-and-adaptation
  - speciation-mechanisms
  - species-extinction-risk-assessment
pillar: evolution-explained
---

Cada geração é uma amostra. Uma população produz muito mais gâmetas do que aqueles que se tornam descendentes, e quais deles passam depende em parte de quem calhou encontrar parceiro, de quem calhou ser comido antes de se reproduzir e de qual de duas cópias igualmente boas um progenitor calhou transmitir. O National Human Genome Research Institute define a deriva genética como a flutuação aleatória da frequência de um alelo numa população e nota que, embora o efeito seja mais forte em grupos pequenos e isolados, pode ser suficientemente poderoso para fixar uma variante ou apagá-la por completo. É este todo o mecanismo. As consequências são menos óbvias do que a definição.

A aritmética é implacável. Numa população diploide de *N* indivíduos reprodutores, a variância da frequência de um alelo introduzida por uma geração de amostragem é p(1 − p)/2N, onde p é a frequência atual. Reduza a população a metade e o ruído de amostragem duplica. Uma nova mutação neutra, presente numa única cópia, tem uma probabilidade de vir a atingir a fixação igual a 1/(2N) — ínfima numa população grande, mas uma possibilidade real numa pequena, sem qualquer referência a se traz ou não benefício ao organismo.

A deriva não tem direção, razão pela qual é muitas vezes descrita como não fazendo nada em particular. É uma leitura errada. Ao longo das gerações faz algo inteiramente previsível: elimina variação. Os alelos vagueiam até chegarem a zero ou a um, e cada fixação ou perda é permanente a menos que a mutação ou a migração reponham a variante. A direção de cada passo isolado é aleatória; o destino não é. Situar esse processo a par dos restantes é o objeto da panorâmica sobre [o que muda quando uma população evolui](/pt/biology/evolution/evolution-explained).

## O tamanho efetivo é uma taxa, não uma contagem

O *N* dessas fórmulas não é o número de animais que um levantamento conta. É o **[tamanho efetivo de população](/en/glossary/effective-population-size)**, escrito por convenção Ne e definido como o tamanho de uma população idealizada que experimentaria a mesma quantidade de uma dada propriedade genética — a deriva, ou a acumulação de consanguinidade — que a população real. Uma população de dez mil em que vinte machos geram quase tudo deriva como um grupo muito menor, e é esse número menor que governa a sua genética.

Várias características correntes das populações reais puxam Ne para baixo do tamanho censitário: razões de sexos enviesadas entre os reprodutores efetivos, variância elevada no sucesso reprodutivo, gerações sobrepostas e flutuação do efetivo ao longo do tempo, que pesa fortemente os anos maus. A genética da conservação fixou um número de trabalho para essa diferença. Quando não há dados genéticos disponíveis, a prática é usar o tamanho censitário como aproximação com uma razão média empírica de 0.10 — uma correção de uma ordem de grandeza aplicada por defeito, o que é em si uma afirmação sobre a regularidade com que as duas quantidades divergem.

Essa correção tem agora peso político. O Quadro Global de Biodiversidade de Kunming-Montreal adotou, como indicador principal, o número de populações dentro de uma espécie com um tamanho efetivo acima de 500 face ao número das que ficam abaixo. Que 500 seja a linha certa é contestado: foi criticada como demasiado permissiva, tendo sido proposto em alternativa um limiar de 1,000, e o argumento é mais agudo em espécies de baixa fecundidade, onde a razão entre tamanho efetivo e censitário é invulgarmente alta. Como se comportam limiares deste tipo depois de se tornarem instrumentos de reporte é um tema recorrente em [o desenho de indicadores de biodiversidade](/pt/ecology/biodiversity/biodiversity-indicators-explained).

## Qual Ne está a ser reportado

O símbolo único esconde toda uma família de grandezas. Os tamanhos efetivos de consanguinidade, de variância, de variância aditiva, de valor próprio, de coalescência e de metapopulação só coincidem quando uma população é fechada e está em equilíbrio mutação-deriva, o que não descreve praticamente nenhuma população selvagem. Cada método de estimação pressupõe alguma combinação de ausência de imigração, acasalamento aleatório, amostragem aleatória, ausência de estrutura genética espacial e equilíbrio — pressupostos que raramente são examinados e raramente se verificam.

A consequência prática é enunciada sem rodeios na literatura atual de genética da conservação: consoante o desenho de amostragem e o método analítico, as estimativas de Ne para a mesma população podem diferir em ordens de grandeza. Um tamanho efetivo reportado sem o seu método, sem a escala espacial assumida e sem o período a que se refere é quase impossível de interpretar. Não é uma ressalva marginal; é o principal obstáculo a sequer usar Ne como grandeza de monitorização.

## O limiar abaixo do qual a seleção deixa de importar

A deriva pertence a uma discussão sobre seleção porque as duas não são independentes. A seleção altera as frequências alélicas a um ritmo fixado pelo coeficiente de seleção *s*; a deriva altera-as a um ritmo fixado por 1/Ne. Quando |s| é muito maior do que 1/Ne, a seleção domina e o destino do alelo é essencialmente determinista. Quando |s| é menor, o alelo comporta-se como se fosse neutro, por mais benéfico ou prejudicial que seja em princípio. A mesma mutação pode, por isso, ser visível para a seleção numa espécie e invisível noutra por pura demografia — um ponto desenvolvido do lado da seleção em [como a intensidade da seleção é realmente medida](/pt/biology/evolution/natural-selection-and-adaptation).

Este é o cerne da **[teoria quase neutra](/en/glossary/nearly-neutral-theory)**, que postula uma classe substancial de alelos selecionados de forma suficientemente fraca para que ambos os processos governem a sua dinâmica. Como as mutações ligeiramente deletérias são muito mais numerosas do que as ligeiramente vantajosas, a teoria prevê uma correlação negativa entre a taxa de substituição de uma linhagem e o seu tamanho efetivo: as populações pequenas fixam alterações moderadamente nocivas que as grandes depuram. A previsão resistiu aos dados comparativos. Entre os mamíferos, as linhagens com tempos de geração longos tendem a ter tamanhos efetivos menores, e a razão entre divergência não sinónima e sinónima é correspondentemente mais alta na comparação humano-chimpanzé do que na comparação ratinho-rato.

## Efeitos fundadores e gargalos nem sempre fazem o que se espera

Um **efeito fundador**, na definição do NHGRI, é a redução da variabilidade genómica que ocorre quando um grupo pequeno se separa de uma população maior, passando a nova subpopulação a portar genótipos parecidos com os desses poucos fundadores e não com os da fonte. Um gargalo é o mesmo evento de amostragem aplicado a uma população que permanece no lugar enquanto os seus efetivos se desmoronam. Ambos reduzem a variação no momento em que acontecem.

O que se segue é menos previsível, e um caso antártico mostra porquê. Uma colónia de elefantes-marinhos-do-sul foi fundada na costa da Terra Vitória há cerca de 7,000 anos, em praias que o recuo do manto de gelo só tornara habitáveis por volta de 8,000 anos antes do presente, e declinou acentuadamente há cerca de mil anos antes de se extinguir. O ADN antigo da fase inicial da colónia, entre cerca de 7,100 e 3,000 anos antes do presente, recuperou 58 haplótipos distribuídos por 49 sítios segregantes; a fase tardia rendeu 128 haplótipos e 79 sítios segregantes. A provável população de origem, na ilha Macquarie, porta hoje apenas 15 haplótipos e 23 sítios segregantes. A diversidade da colónia fundada subiu em vez de descer, o que os autores atribuem a um crescimento rápido e a um efetivo grande mantido após o estabelecimento. Um evento fundador fixa o ponto de partida; é a trajetória demográfica posterior que decide o que dele sobrevive.

Os genomas humanos carregam o mesmo tipo de história. A análise coalescente de trinta e quatro genomas de nove populações recupera um declínio partilhado por todas as linhagens não africanas, de cerca de 200,000 anos até aproximadamente 50,000 anos atrás, compatível com um gargalo na dispersão para fora de África há cerca de 40,000 a 60,000 anos, seguido de aumentos muito grandes — tamanhos efetivos ancestrais acima de um milhão em algumas linhagens do Leste Asiático há 2,000 anos. Estas inferências são grandezas escaladas: convertê-las em indivíduos e anos exige dividir por uma [taxa de mutação](/pt/biology/genetics/mutation-types-and-rates) assumida e multiplicar por um tempo de geração assumido, pelo que a forma da curva está muito melhor constrangida do que a sua altura absoluta. A relação entre histórias demográficas destas e o aparecimento de linhagens separadas é retomada em [como surge o isolamento reprodutivo](/pt/biology/evolution/speciation-mechanisms).

## Populações muito pequenas, e o caso que foi de facto monitorizado

A intervenção mais bem documentada é a da pantera-da-Flórida. No início da década de 1990 a população contava cerca de 20 a 25 adultos, com a consanguinidade associada, e em 1995 foram translocadas para ela oito fêmeas de puma do Texas. A heterozigotia microssatélite média por indivíduo subiu para 25 por cento, face aos 18.4 por cento medidos em 1993. As crias com mistura mostraram maior sobrevivência do que as sem mistura, e a frequência de criptorquidia baixou. No sul da Big Cypress National Preserve, uma área de 2,174 km², o número de panteras aumentou oito vezes, de 3 animais para 25, e a população mais alargada atingiu pelo menos 95 adultos em 2003.

O resultado é uma demonstração limpa de que a componente genética do declínio das populações pequenas é real e, neste caso, reversível. Não é uma receita geral: o desfecho dependeu de existir uma população de origem disponível da mesma espécie, de um habitat capaz de sustentar o crescimento e de gestão continuada, e casos isolados, por muito bem monitorizados que sejam, não estabelecem uma dimensão de efeito esperada. O que o processo da pantera estabelece é que, quando uma população se torna suficientemente pequena para que a deriva se sobreponha à seleção, as perdas são genéticas tanto quanto demográficas — uma consideração que hoje corre a par da abundância e da área de distribuição nas [avaliações formais do risco de extinção](/pt/ecology/conservation/species-extinction-risk-assessment) e no desenho de [programas de recuperação de espécies depauperadas](/pt/ecology/conservation/endangered-species-recovery-programmes).

## Sources

1. **National Human Genome Research Institute** — [Genetic drift (Talking Glossary of Genomic and Genetic Terms)](https://www.genome.gov/genetics-glossary/Genetic-Drift). Definição da deriva e da sua dependência do tamanho populacional e do isolamento.
2. **National Human Genome Research Institute** — [Founder effect](https://www.genome.gov/genetics-glossary/Founder-Effect). Definição do efeito fundador e da redução de variabilidade que produz.
3. **Evolutionary Applications** — [Dealing with the complexity of effective population size in conservation practice](https://pmc.ncbi.nlm.nih.gov/articles/PMC11645448/). Definição e tipos de Ne, a razão censitária de 0.10, os limiares de 500 e de 1,000, e a dispersão de ordens de grandeza entre métodos de estimação.
4. **Genome Biology and Evolution** — [Near-neutrality, robustness, and epigenetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC3227401/). A teoria quase neutra, a correlação prevista entre taxa e Ne, e a comparação de divergência primatas versus roedores.
5. **Science (Johnson e colegas)** — [Genetic restoration of the Florida panther](https://pmc.ncbi.nlm.nih.gov/articles/PMC6993177/). Detalhes da translocação, variação da heterozigotia, sobrevivência das crias e números de população e densidade.
6. **Proceedings of the Royal Society B** — [Rapid increase in southern elephant seal genetic diversity after a founder event](https://pmc.ncbi.nlm.nih.gov/articles/PMC3924085/). Contagens de haplótipos e de sítios segregantes para a colónia da costa da Terra Vitória e a sua população de origem.
7. **Nature Genetics** — [Inferring human population size and separation history from multiple genome sequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC4116295/). Trajetórias inferidas do tamanho efetivo, o gargalo da saída de África e a ressalva de escala sobre os tamanhos absolutos.
