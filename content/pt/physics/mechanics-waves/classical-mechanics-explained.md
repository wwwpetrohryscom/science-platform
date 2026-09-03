---
title: 'Mecânica clássica: o quadro que continua a descrever a maior parte do mundo'
metaTitle: 'Mecânica clássica: o quadro e os seus limites'
excerpt: As leis de Newton são menos um conjunto de factos sobre objetos do que um contrato sobre referenciais e leis de força. Esta página enuncia esse contrato com cuidado, mostra por que os princípios de conservação se revelaram mais profundos e assinala os limites do domínio.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 8
tags:
  - classical-mechanics
  - newtons-laws
  - conservation-laws
  - lagrangian-mechanics
  - determinism
related:
  - energy-work-and-power
  - waves-and-oscillations-explained
  - fluid-dynamics-explained
  - measurement-uncertainty-explained
---
As duas sondas Voyager, lançadas em 1977, estão a deixar o Sistema Solar a mais de 3 unidades astronómicas por ano, e a NASA guiou ambas até aos seus encontros planetários usando uma mecânica essencialmente completa antes de 1900. É este o argumento prático a favor da mecânica clássica: não que seja a descrição mais profunda disponível, mas que, dentro de um envelope muito amplo, é a correta, e nada do que a substituiu a tornou obsoleta dentro desse envelope.

A maior parte das dificuldades com a mecânica newtoniana vem de as suas três leis serem ensinadas como três afirmações sobre objetos. A primeira é, na verdade, uma afirmação sobre que sistemas de coordenadas o resto da teoria pode usar; a segunda é uma equação vazia até que lhe seja fornecida uma lei de força de fora; a terceira é um princípio de conservação num disfarce incómodo. Enunciadas assim, também as fronteiras do quadro se tornam visíveis.

## A primeira lei define a arena em vez de descrever corpos

Um corpo em repouso permanece em repouso, e um corpo em movimento uniforme continua em movimento uniforme, salvo se sobre ele atuar uma força resultante. Lida como afirmação sobre objetos é quase vazia, e é falsa na maioria dos sistemas de coordenadas que de facto se usam. Rode um balde e a água sobe pela parede sem que força alguma a empurre para fora; viaje num comboio que trava e é atirado para a frente por nada.

A lei lê-se melhor como definição. Seleciona a classe de referenciais — os **referenciais inerciais** — em que o resto do quadro é válido, e afirma que tais referenciais existem. Toda a afirmação subsequente fica então implicitamente condicionada a estar-se num deles. A superfície de um planeta em rotação não é um deles, razão pela qual a balística de longo alcance, as correntes oceânicas e a circulação atmosférica trazem todas termos de correção que surgem do nada se esquecermos que o referencial foi escolhido por conveniência e não por correção.

## A segunda lei é um molde, não uma teoria

A força é igual à taxa de variação da quantidade de movimento. No caso comum de massa constante isto reduz-se ao produto familiar de massa e aceleração, mas é a forma em quantidade de movimento que sobrevive ao contacto com problemas de massa variável, como um foguetão a queimar propelente.

A equação é um molde porque nada diz sobre que forças existem. A mecânica só se torna preditiva depois de fornecida uma lei de força separada — gravitacional, elástica, eletromagnética, de atrito — e cada uma é uma peça independente de física, com a sua própria exatidão. A gravidade é o caso embaraçoso. A constante newtoniana da gravitação tem uma incerteza-padrão relativa de 2,2 × 10⁻⁵ no ajuste CODATA de 2022 — 22 partes por milhão, ao passo que uma revisão de 2014 do problema da medição, numa revista da Royal Society, podia observar que muitas outras constantes são conhecidas com partes em 10⁸ e a constante de Rydberg com quatro partes em 10¹². A mesma revisão notava que a dispersão entre as determinações publicadas da constante de gravitação se aproximava de 500 partes por milhão, «mais de 10 vezes as incertezas de cada medição». A razão não é desleixo. A gravidade é ténue à escala do laboratório: a atração entre duas esferas de cobre de 1 kg apenas em contacto ronda os 10⁻⁸ N, cerca de um milésimo de milionésimo do peso de qualquer delas. Extrair esse sinal contra a atração de toda a Terra é um problema de [incerteza de medição e rastreabilidade](/pt/physics/mechanics-waves/measurement-uncertainty-explained) tanto quanto de mecânica.

## A terceira lei é na verdade uma afirmação de conservação

As forças surgem em pares iguais e opostos. Dito assim soa a curiosidade sobre contacto; dito devidamente, é a conservação da quantidade de movimento para um sistema isolado, e é essa a versão que generaliza.

Este é o padrão de toda a disciplina. A conservação da quantidade de movimento, da energia e do momento angular não são tanto consequências das leis de Newton quanto o seu conteúdo duradouro. O teorema de Emmy Noether torna a relação exata: a cada lei de conservação corresponde uma simetria contínua da dinâmica subjacente. A invariância sob translação no tempo dá conservação da energia; a invariância sob translação no espaço dá a quantidade de movimento; a invariância sob rotação dá o momento angular. Quando a relatividade e a mecânica quântica substituíram as equações newtonianas, as grandezas conservadas foram redefinidas mas não descartadas, razão pela qual são a coisa mais segura com que raciocinar quando os pormenores são incertos. As convenções contabilísticas que tornam a energia utilizável na prática — trabalho, energia potencial, potência — estão expostas em [trabalho, energia e potência](/pt/physics/mechanics-waves/energy-work-and-power).

## A reformulação lagrangiana: a mesma física, melhor ponto de partida

Uma formulação alternativa substitui as forças vetoriais por uma única função escalar, a diferença entre energia cinética e energia potencial, e afirma que o caminho efetivamente percorrido é aquele para o qual o integral dessa função é estacionário.

Nada de novo é previsto. O que muda é o trabalho e a visibilidade da estrutura. As restrições — uma conta num arame, uma ligação rígida — são absorvidas na escolha de coordenadas em vez de arrastadas como forças de reação desconhecidas. Servem quaisquer coordenadas, pelo que um problema de geometria incómoda pode escrever-se nas variáveis que lhe assentam. As simetrias, e portanto as grandezas conservadas, leem-se diretamente na função escalar. A reformulação também viaja: é a linguagem natural dos campos contínuos, e o princípio de ação no seu centro reaparece como ideia organizadora da teoria quântica de campos. Quem aprende só a versão baseada em forças tem a física certa pela pega errada.

Uma terceira formulação, construída sobre posição e quantidade de movimento como variáveis independentes, troca a compacidade da segunda por uma imagem geométrica de como o estado de um sistema se desloca pelo espaço dos seus estados possíveis. As três são equivalentes onde as três se aplicam, e cada uma é a conveniente algures.

| Formulação | Objeto primitivo | O que torna fácil | Aonde conduz |
| --- | --- | --- | --- |
| Newtoniana | Forças vetoriais sobre cada corpo | Problemas diretos com poucos corpos e geometria simples | Estática e dinâmica de engenharia |
| Lagrangiana | Um único escalar construído a partir das energias cinética e potencial | Sistemas com restrições, coordenadas incómodas, argumentos de simetria | Teoria de campos e princípio de ação |
| Hamiltoniana | Posição e quantidade de movimento como estado emparelhado | Grandezas conservadas, teoria de perturbações, integrações longas | Mecânica estatística e teoria quântica |

É na rotação que a escolha morde mais cedo. O momento angular conserva-se pela mesma razão de simetria que o seu homólogo linear, mas a relação entre velocidade angular e momento angular em três dimensões passa por um tensor e não por um único número, pelo que um corpo em rotação pode precessar e cambalear sem que atue qualquer binário. Esse comportamento parece uma violação da intuição e não é nada disso.

## De muitas partículas aos contínuos e às ondas

Aplique as mesmas leis a partículas em interação em número suficiente e tornam-se necessárias novas descrições, não porque a mecânica tenha mudado mas porque seguir trajetórias individuais deixa de ser útil. Tratar a matéria como um contínuo dá as equações da elasticidade e do [movimento de fluidos, onde o número de Reynolds decide o carácter do escoamento](/pt/physics/mechanics-waves/fluid-dynamics-explained).

Acople as partículas elasticamente e as perturbações propagam-se. É essa a origem de [a oscilação e o comportamento ondulatório como um único assunto matemático](/pt/physics/mechanics-waves/waves-and-oscillations-explained), do [som como onda de pressão longitudinal num fluido](/pt/physics/mechanics-waves/sound-and-acoustics-explained), e — embora a luz seja eletromagnética e não mecânica — do formalismo partilhado que torna [o comportamento e os limites das imagens óticas](/pt/physics/mechanics-waves/optics-and-light-explained) reconhecíveis a quem tenha estudado uma corda vibrante. A matemática de uma força restauradora linear é indiferente ao que está a restaurar.

## Onde o quadro para

Importam três fronteiras, e só as duas primeiras costumam ser ensinadas.

A fronteira relativista surge quando as velocidades se aproximam da da luz, fixada por definição em 299 792 458 m s⁻¹ desde que o SI foi reconstruído sobre constantes definidoras. O Grande Colisor de Hadrões acelera protões até 6,8 TeV nominais por feixe; face a uma energia de repouso do protão de 938,272 089 43(29) MeV, isso são cerca de 7 200 vezes a energia de repouso, e a expressão newtoniana da energia cinética não é ali meramente imprecisa mas errada em ordens de grandeza.

A fronteira quântica surge quando a ação envolvida num processo se aproxima da constante de Planck, agora fixada exatamente em 6,626 070 15 × 10⁻³⁴ J s. Para uma bola de críquete isto é irrelevante; para um eletrão num átomo é decisivo.

A terceira fronteira é interna, e é a que surpreende. A mecânica clássica é determinista e, ainda assim, não indefinidamente preditiva. O Sistema Solar é o exemplo trabalhado: um comentário da PNAS que passa em revista as integrações de longo prazo situa o tempo de Lyapunov característico das órbitas planetárias entre 5 e 10 milhões de anos e conclui que «a presença de caos implica que existe um limite finito para a exatidão com que as posições dos planetas podem ser previstas em tempos longos», permanecendo o sistema, não obstante, qualitativamente estável ao longo da vida do Sol. Equações exatas, forças exatas, e um horizonte apesar disso.

## Com que finura o quadro foi realmente verificado

A mecânica é testável até à profundidade a que o tempo pode ser medido, e o tempo é a grandeza melhor medida que existe. O NIST nota que os relógios de césio disponíveis comercialmente guardam o tempo com erro inferior a um três-milionésimo de segundo por ano, e que relógios experimentais baseados noutros átomos são dez mil vezes mais precisos ainda. A telemetria, a determinação de órbitas e a gravimetria herdam toda essa precisão.

O resultado é uma teoria cujas falhas são conhecidas, limitadas e quantificadas de antemão — um estatuto partilhado com as [leis da termodinâmica](/pt/physics/thermodynamics/laws-of-thermodynamics-explained) e com poucas outras partes da física. Tratar o quadro clássico como mera etapa histórica é ler mal a situação. É um caso-limite que foi cartografado, e o mapa é o que torna seguro usá-lo.

## Sources

1. **NIST** — [Definitions of the SI base units](https://www.nist.gov/si-redefinition/definitions-si-base-units). Valores fixados das constantes definidoras, incluindo a velocidade da luz e a constante de Planck.
2. **NIST CODATA** — [Newtonian constant of gravitation](https://physics.nist.gov/cgi-bin/cuu/Value?bg). O valor recomendado de 2022 e a sua incerteza-padrão relativa.
3. **Philosophical Transactions of the Royal Society A** — [The Newtonian constant of gravitation — a constant too difficult to measure? An introduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC4173273/). Dispersão entre as determinações publicadas de G e a magnitude do sinal de laboratório.
4. **Proceedings of the National Academy of Sciences** — [Chaos and stability of the solar system](https://pmc.ncbi.nlm.nih.gov/articles/PMC60054/). Tempo de Lyapunov das órbitas planetárias e o horizonte de previsibilidade daí resultante.
5. **CERN** — [The Large Hadron Collider](https://home.cern/science/accelerators/large-hadron-collider/). Energias nominais de feixe e de colisão.
6. **NIST CODATA** — [Proton mass energy equivalent in MeV](https://physics.nist.gov/cgi-bin/cuu/Value?mpc2mev). Energia de repouso usada na comparação relativista.
7. **NIST** — [The second: introduction](https://www.nist.gov/si-redefinition/second-introduction). Exatidão dos relógios de césio e dos relógios óticos.
8. **NASA** — [Voyager](https://science.nasa.gov/mission/voyager/). Ano de lançamento e velocidade de escape em unidades astronómicas por ano.
