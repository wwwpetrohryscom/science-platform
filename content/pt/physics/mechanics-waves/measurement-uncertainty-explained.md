---
title: 'Incerteza de medição: o que um ± declarado afirma de facto'
metaTitle: 'Incerteza de medição: o que um ± declarado afirma'
excerpt: Um número sem incerteza não é um resultado de medição. Isto é o que a orientação internacional exige de um intervalo, como as componentes são avaliadas e combinadas, e os sítios onde um orçamento de incerteza falha em silêncio.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - metrology
  - uncertainty
  - calibration
  - si-units
  - measurement-methods
related:
  - classical-mechanics-explained
  - fluid-dynamics-explained
  - sound-and-acoustics-explained
  - global-temperature-records-explained
pillar: classical-mechanics-explained
---

Escreva 9,81 m/s² e não terá afirmado quase nada. Escreva 9,81 ± 0,02 m/s² e terá feito uma afirmação testável: sobre como o valor foi obtido, sobre o que aconteceria se a medição fosse repetida, e sobre o intervalo dentro do qual seria de esperar que caísse uma nova determinação. O segundo número não é uma ressalva colada ao primeiro. É a parte que torna o primeiro utilizável, e é o que permite a dois laboratórios dizer se concordam.

O quadro internacional para construir esse segundo número é o *Guia para a expressão da incerteza de medição*, publicado como JCGM 100 pelo Comité Comum para os Guias em Metrologia e alojado pelo BIPM. Não é tanto uma técnica estatística como uma disciplina de contabilidade, e aplica-se a qualquer medição quantitativa — incluindo as que sustentam [a mecânica](/pt/physics/mechanics-waves/classical-mechanics-explained) que este conjunto de artigos cobre.

## Exatidão, veracidade e precisão são três palavras diferentes

O vocabulário internacional de metrologia mantém separados três termos que o uso corrente funde. A **exatidão de medição** é definida como a «proximidade entre um valor medido e um valor verdadeiro de uma mensuranda» e, o que importa, «o conceito de exatidão de medição não é uma grandeza e não é expresso por um valor numérico». Não se pode reportar uma exatidão de 0,3 por cento; pode reportar-se uma incerteza.

O vocabulário é igualmente firme quanto às fronteiras: «o termo exatidão de medição não deve ser usado para veracidade de medição e o termo precisão de medição não deve ser usado para exatidão de medição». A veracidade diz respeito ao desvio sistemático — se medições repetidas se agrupam no sítio certo. A precisão diz respeito à dispersão — quão apertado é o agrupamento, onde quer que ele esteja. Um instrumento pode ser preciso e não verdadeiro, que é a combinação mais perigosa, porque a repetição parece confirmação.

## Tipo A e tipo B não querem dizer «medido» e «adivinhado»

O guia separa as componentes de incerteza pelo modo como são avaliadas e não pela confiança que merecem. O resumo do NIST segue o guia exatamente: uma avaliação de tipo A é um «método de avaliação da incerteza pela análise estatística de séries de observações», e o tipo B é a «avaliação da incerteza por meios que não a análise estatística de séries de observações».

Essa segunda categoria não é um eufemismo. Cobre a incerteza declarada num certificado de calibração, uma especificação de fabricante, o limite de resolução de um mostrador, dados de referência publicados e raciocínio físico sobre um efeito que não pode variar durante a experiência. O que importa é que, uma vez expressa cada componente como incerteza-padrão, os dois tipos se combinam de forma idêntica. Uma componente de tipo B derivada de um certificado pode ser menor e melhor fundada do que uma de tipo A calculada a partir de seis repetições ruidosas, e tratar a repetibilidade como a única incerteza real é a maneira mais comum de um orçamento se tornar otimista.

## Combinar componentes, e o pressuposto dentro da lei de propagação

As componentes combinam-se numa **incerteza-padrão combinada**, que o NIST descreve como «a raiz quadrada positiva da variância estimada», obtida por aquilo a que o guia chama lei de propagação da incerteza. A construção tem duas peças móveis fáceis de perder. É um desenvolvimento de Taylor de primeira ordem, pelo que lineariza o modelo de medição em torno do ponto de funcionamento. E contém um termo de covariância que «se anula» apenas se as estimativas de entrada puderem ser tomadas como não correlacionadas.

Nenhum dos pressupostos é automático. Entradas calibradas contra o mesmo padrão de referência estão correlacionadas por construção, e largar então o termo de covariância subestima o resultado. Modelos fortemente não lineares quebram a linearização, razão pela qual o guia é acompanhado de um suplemento que propaga distribuições inteiras por Monte Carlo em vez de propagar variâncias, e pela qual em 2026 foi emitida uma emenda que trata da não linearidade nos modelos de medição. O quadro continua em revisão ativa.

## O fator de expansão e a palavra que o guia evita

Uma incerteza-padrão é uma grandeza do tipo desvio-padrão, e a maioria dos resultados publicados é mais larga. A incerteza expandida é U = k·u_c(y), onde k é um fator de expansão escolhido para o nível de confiança pretendido. O NIST refere que «tipicamente, k está no intervalo 2 a 3», que k = 2 «define um intervalo com um nível de confiança de aproximadamente 95%», e que k = 3 dá um intervalo com «um nível de confiança superior a 99%».

A aproximação em «aproximadamente» faz trabalho a sério. Um tratamento revisto por pares dos intervalos de cobertura, na revista de investigação do NIST, nota que o guia se recusa deliberadamente a chamar a estes intervalos intervalos de confiança a não ser que «todas as componentes de incerteza que contribuem para u_c(y) sejam obtidas de avaliações de tipo A». Um intervalo de confiança convencional é uma afirmação frequentista sobre a cobertura a longo prazo de experiências repetidas; uma incerteza expandida construída em parte com componentes de tipo B não é isso, mesmo quando a aritmética parece igual. O mesmo artigo trabalha um exemplo em que dezasseis réplicas dão um intervalo de cobertura a 95 por cento da média mais ou menos 2,131 erros-padrão — o percentil t de Student para quinze graus de liberdade — em vez do fator plano de 2 que um cálculo rápido usaria. Com poucas observações, os dois diferem o bastante para contar.

## A rastreabilidade é o que torna dois laboratórios comparáveis

Uma incerteza só é significativa relativamente a uma escala, e o mecanismo que liga escalas é a [rastreabilidade metrológica](/en/glossary/traceability): como o formula uma revisão sobre materiais de referência químicos, «uma cadeia documentada e ininterrupta de calibrações com incertezas declaradas que idealmente liga o resultado de medição de uma amostra a um calibrador primário em unidades SI apropriadas». Cada elo acrescenta incerteza; nenhum pode faltar. A mesma revisão descreve o que a cadeia tem de encarnar na prática — «os conceitos de [incerteza de medição](/pt/glossary/measurement-uncertainty) e de calibrações contra uma hierarquia de padrões de referência» —, razão pela qual um certificado que declara um valor sem incerteza quebra a cadeia em vez de a encurtar.

A base dessa cadeia mudou a 20 de maio de 2019, quando o SI foi redefinido de modo que todas as unidades decorrem de sete constantes com valores numéricos fixados.

| Constante definidora | Símbolo | Valor fixado |
| --- | --- | --- |
| Frequência hiperfina do césio-133 | ΔνCs | 9 192 631 770 Hz |
| Velocidade da luz no vácuo | c | 299 792 458 m/s |
| Constante de Planck | h | 6,626 070 15 × 10⁻³⁴ J s |
| Carga elementar | e | 1,602 176 634 × 10⁻¹⁹ C |
| Constante de Boltzmann | k | 1,380 649 × 10⁻²³ J/K |
| Constante de Avogadro | N_A | 6,022 140 76 × 10²³ mol⁻¹ |
| Eficácia luminosa | K_cd | 683 lm/W |

Esses valores já não trazem incerteza, porque são definições e não resultados. A incerteza não desapareceu; mudou-se para as experiências que realizam as unidades, o que é um sítio muito melhor para ela, porque está agora presa a um aparelho que pode ser melhorado e não a um artefacto que podia ser riscado.

## Onde a incerteza continua a estar

Nem todas as constantes foram absorvidas nas definições. O ajuste CODATA de 2022 dá a constante newtoniana da gravitação como 6,674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻² com uma incerteza-padrão de 0,000 15 × 10⁻¹¹ nas mesmas unidades — uma incerteza-padrão relativa de 2,2 × 10⁻⁵. Face às constantes da tabela, agora exatas por definição, essa distância é enorme. Persiste porque a gravitação não pode ser blindada nem amplificada, pelo que cada determinação enfrenta a mesma classe de efeitos sistemáticos com uma magnitude comparável à do próprio sinal. É esse o lembrete permanente do campo: uma incerteza pequena declarada é sempre uma afirmação sobre os efeitos que alguém reconheceu.

O padrão generaliza-se. Onde duas equipas credíveis discordam mais do que os seus intervalos declarados permitem, a discordância é prova de que a pelo menos um orçamento falta um termo. O mesmo raciocínio explica porque [os registos de temperatura global](/pt/ecology/climate-change/global-temperature-records-explained) independentes são comparados pelos seus envelopes de incerteza e não pelos seus valores de manchete, e porque a orientação prática sobre [as limitações da deteção remota](/pt/ecology/earth-observation/remote-sensing-limitations-and-uncertainty) assenta em saber o que um algoritmo de recuperação não modelou.

## A falsa precisão é uma afirmação, não uma escolha de formatação

Os dígitos são baratos de produzir e caros de justificar. Uma folha de cálculo devolve-os às dúzias independentemente do que entrou, e um resultado reportado com mais algarismos do que a sua incerteza sustenta afirma uma resolução que nunca foi atingida. A convenção que decorre do quadro é simples: a incerteza determina quantos dígitos o valor pode carregar, pelo que um valor deve ser arredondado a uma casa coerente com a sua incerteza e não ao que o cálculo produziu.

O modo de falha raramente é o artigo original. É a transferência, em que um intervalo é largado por não caber num resumo, e uma estimativa central segue viagem como se fosse exata — o processo examinado na análise sobre [a incerteza perdida entre o conjunto de dados e a manchete](/pt/insight/uncertainty-lost-between-dataset-and-headline). A precisão que aparece durante a transmissão foi fabricada, não medida.

## O que um orçamento de incerteza não pode conter

A limitação estrutural é que um orçamento só pode incluir efeitos em que alguém pensou. Os efeitos sistemáticos não reconhecidos estão, por construção, ausentes dele, o que significa que uma incerteza declarada é um limite inferior condicionado à completude do modelo. Não é uma preocupação hipotética: uma revisão de como os institutos nacionais avaliam a incerteza para materiais de referência orgânicos encontrou «inconsistências de abordagem e casos claros de subestimação» entre laboratórios participantes a aplicar os mesmos métodos nominais, e concluiu que combinar abordagens de medição independentes é o que expõe os enviesamentos que um método único mascara.

As consequências práticas vão além dos laboratórios de metrologia. Quando um modelo substitui por uma parametrização um processo que não consegue resolver — como [os modelos de mecânica de fluidos](/pt/physics/mechanics-waves/fluid-dynamics-explained) têm de fazer para a turbulência — a incerteza associada à saída não pode representar plenamente o erro estrutural do próprio esquema. Quando uma estatística de exposição é calculada a partir de um mapa modelado e não de uma rede de medição, como na [avaliação do ruído ambiente](/pt/physics/mechanics-waves/sound-and-acoustics-explained), a incerteza dominante está nas entradas e não no instrumento. Em ambos os casos o número é honesto sobre o que foi quantificado e calado sobre o que foi assumido, e lê-lo bem é perguntar qual dos dois se tem à frente.

## Sources

1. **BIPM / JCGM** — [Publicações JCGM: o GUM e os seus suplementos](https://www.bipm.org/en/committees/jc/jcgm/publications). JCGM 100:2008, o suplemento de Monte Carlo e a emenda de 2026 sobre não linearidade em modelos de medição.
2. **Vocabulário Internacional de Metrologia do JCGM** — [Exatidão de medição (VIM 2.13)](https://jcgm.bipm.org/vim/en/2.13.html). Definições que separam exatidão, veracidade e precisão.
3. **NIST** — [Definições básicas de incerteza](https://physics.nist.gov/cuu/Uncertainty/basic.html). Avaliação de tipo A e de tipo B da incerteza-padrão.
4. **NIST** — [Combinação de componentes de incerteza](https://physics.nist.gov/cuu/Uncertainty/combination.html). Incerteza-padrão combinada e lei de propagação da incerteza.
5. **NIST** — [Incerteza expandida e fator de expansão](https://physics.nist.gov/cuu/Uncertainty/coverage.html). Valores de k e os níveis de confiança associados.
6. **Journal of Research of the National Institute of Standards and Technology** — [Coverage intervals](https://pmc.ncbi.nlm.nih.gov/articles/PMC10898794/). Porque o guia evita o termo intervalo de confiança, e fatores de cobertura t de Student para amostras pequenas.
7. **BIPM** — [Unidades de medida e as constantes definidoras do SI](https://www.bipm.org/en/measurement-units). As sete constantes fixadas e a redefinição de 20 de maio de 2019.
8. **NIST CODATA** — [Constante newtoniana da gravitação](https://physics.nist.gov/cgi-bin/cuu/Value?bg). Valor recomendado de 2022, incerteza-padrão e incerteza-padrão relativa.
9. **Accreditation and Quality Assurance** — [SI traceable calibrators for organic chemical measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC10938631/). Definição da cadeia de rastreabilidade e prova de incerteza subestimada entre laboratórios.
