---
title: 'Microbioma: o que a sequenciação pode e não pode estabelecer'
metaTitle: 'Microbioma: o que a sequenciação estabelece e o que não'
excerpt: Um levantamento de microbioma reporta proporções sobre um total escolhido pelo sequenciador, não um censo do intestino. Esta página separa o que essa estrutura de dados consegue sustentar das afirmações causais que exigem um transplante, um hospedeiro gnotobiótico ou um ensaio.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - microbiome
  - metagenomics
  - causal-inference
  - host-microbe-interactions
  - compositional-data
related:
  - culturing-and-sequencing-microbes
  - antimicrobial-resistance-evidence
  - microbiology-explained
  - the-immune-system-explained
pillar: microbiology-explained
_bodyHash: 440f0c9
---

Um levantamento do microbioma intestinal não conta organismos. Reporta que fração das sequências recuperadas de uma amostra foi atribuída a cada táxon, sobre um total fixado pelo instrumento e não pelo intestino. Quase todas as maneiras como estes levantamentos são sobreinterpretados decorrem desse único facto estrutural, e as correções que lhes correspondem não são obscuras nem recentes.

Que organismos são levantados, e de que vivem, é o assunto da [apresentação geral da vida microbiana](/pt/biology/microbiology/microbiology-explained). Esta página é sobre inferência: o que uma tabela de proporções consegue suportar e o que é preciso para passar um enunciado de *associado a* para *causa*.

## Um número que sobreviveu às suas provas

A afirmação de que o corpo humano contém dez células bacterianas por cada célula humana circulou durante décadas. Uma reavaliação de 2016 na PLOS Biology situou o valor em cerca de 3.8 × 10¹³ bactérias — esmagadoramente no cólon — contra aproximadamente 3.0 × 10¹³ células humanas num homem de referência de 70 kg, ou seja, uma razão de 1.3 com uma incerteza declarada de 25 por cento e uma variação de cerca de 50 por cento numa população de homens semelhantes. A massa bacteriana envolvida é de cerca de 0.2 kg em húmido e 50–100 g em seco.

A razão antiga é recuperável, mas apenas comparando bactérias com células humanas *nucleadas* e descartando os glóbulos vermelhos, que são a maioria numérica das células humanas. É essa a parte útil da história. O valor de 10:1 não foi fabricado; era uma estimativa defensável cuja cláusula restritiva se perdeu na transmissão, após o que sobreviveu pela citação e não pela medição. Quem leia uma estatística impressionante sobre o microbioma deve perguntar que grandeza foi de facto medida, porque [o termo microbioma](/pt/glossary/microbiome) é rotineiramente colado, de forma indiferenciada, a números sobre células, genes, espécies e massa.

## Proporções não são abundâncias

A sequenciação impõe um total arbitrário. Uma corrida devolve um orçamento fixo de leituras, pelo qual os táxones competem, pelo que os dados são **composicionais**: só as razões entre componentes transportam informação, e a quantidade absoluta de seja o que for fica por medir. Uma revisão de 2017 na *Frontiers in Microbiology* expôs as consequências sem rodeios, e não são cosméticas. Se um organismo prolifera, todas as outras proporções descem, e um teste ingénuo reportará essas descidas como empobrecimentos. As correlações calculadas entre proporções brutas são obrigadas a somar uma constante e são, por isso, em parte espúrias por construção. Os testes padrão que pressupõem componentes independentes não se aplicam.

Os remédios estão estabelecidos — as transformações de razões logarítmicas recomendadas por essa revisão, ou a adição à amostra de bactérias exógenas numa quantidade conhecida, de modo a corrigir as contagens de leituras para diferenças na carga microbiana total —, mas não são universais na literatura publicada, e um artigo que reporta um «aumento de *Bacteroides*» sem dizer relativamente a que total não distinguiu a subida de um táxon da descida de tudo o resto.

O que a própria sequenciação resolve é um limite à parte. Os levantamentos de amplicões leem um único gene marcador conservado e resolvem tipicamente até ao género; a metagenómica shotgun lê todo o ADN presente, pode chegar à espécie e à estirpe, e reporta que genes estão lá; a metatranscriptómica reporta quais estão a ser transcritos. Nenhum dos três mede uma taxa, e cada um carrega enviesamentos técnicos tratados na página complementar sobre [como as comunidades microbianas são amostradas e sequenciadas](/pt/biology/microbiology/culturing-and-sequencing-microbes).

## Desenhos capazes de sustentar uma afirmação causal

A distinção que importa nesta área não é a significância estatística mas a arquitetura do estudo. Repetem-se quatro desenhos, e estabelecem coisas diferentes.

| Desenho | O que consegue estabelecer | O que o derrota |
| --- | --- | --- |
| Caso–controlo transversal | Uma associação; um biomarcador candidato | Causalidade inversa, confundimento por dieta e fármacos, efeitos de lote |
| Coorte longitudinal | A ordem temporal da mudança | O confundimento persiste; a amostragem pode falhar a janela relevante |
| Transferência para animais isentos de germes | Que uma comunidade basta para produzir um fenótipo nesse hospedeiro | O recetor não é humano; a dieta e o alojamento mudam o resultado |
| Intervenção clínica aleatorizada | Um efeito em pessoas | Existe para muito poucas doenças |

As experiências de transferência são a razão pela qual a área consegue fazer alguma afirmação causal. Num estudo de 2013 na *Science*, comunidades fecais de pares de gémeas adultas discordantes para a obesidade foram transplantadas para ratinhos isentos de germes; o aumento de massa corporal e de massa gorda viajou com a comunidade da gémea mais pesada, e viajou também com as coleções cultivadas dela derivadas. Alojar em conjunto os recetores impediu o fenótipo, e esse resgate acompanhou a invasão de determinados *Bacteroidetes* da comunidade da co-gémea magra — e dependeu daquilo que era dado a comer aos ratinhos. É esta última oração o achado mais frequentemente perdido nos resumos: o efeito microbiano estava condicionado pela dieta, não era autónomo.

Do lado clínico, uma intervenção acumulou provas verdadeiramente fortes. Uma revisão sistemática com meta-análise de 2020 na *EClinicalMedicine*, abrangendo 45 estudos, reportou um efeito clínico à semana 8 de 91 por cento (IC de 95 por cento: 89–94) para o transplante repetido de microbiota fecal na infeção recorrente por *Clostridioides difficile*, ao longo de 24 estudos e 1855 doentes, e de 84 por cento (80–88) para uma administração única; o número necessário para tratar face à vancomicina foi de 1.5 para o transplante repetido. Os autores classificaram as provas do transplante repetido como de elevada qualidade. Trata-se de uma única doença com um único mecanismo bem caracterizado, e não é um modelo para a intervenção no microbioma em geral.

## A resistência à colonização é a função mais bem apoiada

Esse mecanismo tem um nome. A **resistência à colonização** é a capacidade de uma comunidade estabelecida, em conjunto com as defesas do hospedeiro, de impedir que um organismo que chega se instale — através da competição por nutrientes e locais de adesão, da produção de ácidos gordos de cadeia curta e de outros metabolitos inibidores, e da manutenção do tónus imunitário da mucosa; uma via adicional, demonstrada em ratinhos, passa pela conversão, pelos comensais, dos ácidos biliares primários do hospedeiro em ácidos biliares secundários que inibem *Clostridioides difficile*. Uma revisão de 2025 na *FEMS Microbiology Ecology* enquadra-a como propriedade conjunta da comunidade residente e do hospedeiro, e não de um deles isoladamente, razão pela qual a exposição a antibióticos e uma invasão por um agente patogénico são o mesmo acontecimento visto de dois lados.

Lido como ecologia, isto é um efeito de ocupação e não uma dádiva: uma comunidade residente exclui um recém-chegado pelas mesmas razões por que um copado fechado exclui uma plântula. Explica também por que razão o contributo mecanístico da [regulação imunitária](/pt/biology/physiology/the-immune-system-explained) não pode ser separado com clareza do contributo microbiano num animal intacto.

## Porque a maioria das associações com doenças não se transfere

O corretivo mais útil desta literatura é uma meta-análise entre estudos publicada na *Nature Communications* em 2017. Ao reprocessar com métodos padronizados 28 estudos intestinais de caso–controlo que abrangiam dez doenças, verificou que umas poucas condições se distinguiam por grandes deslocações da comunidade envolvendo mais de 50 géneros, ao passo que a maioria envolvia apenas 10–15, e — o resultado decisivo — que cerca de metade dos géneros assinalados em estudos individuais responde a mais de uma doença. Muitas associações publicadas fazem, por isso, parte de uma deslocação inespecífica entre saúde e doença, e não são a assinatura de qualquer condição em particular.

A isto acresce a variância metodológica comum. Uma perspetiva de 2018 na *mBio* separa reprodutibilidade, replicabilidade, robustez e generalizabilidade como falhas distintas, e a distinção importa aqui: dois laboratórios podem processar as mesmas amostras e discordar por causa de kits de extração contaminados, de efeitos de lote entre corridas de sequenciação, ou de versões diferentes de programas e de bases de dados de referência, antes de qualquer biologia entrar em jogo. As consequências para a interpretação são examinadas mais a fundo na análise sobre [o fosso causal na investigação do microbioma](/pt/insight/microbiome-research-and-the-causal-gap), e a mesma armadilha inferencial repete-se nas [comunidades microbianas do solo](/pt/ecology/ecosystems/soil-microbiome-regenerative-agriculture), onde a abundância relativa é igualmente lida como função.

A posição honesta é estreita. Os levantamentos por sequenciação são bons a detetar que uma comunidade difere entre grupos, fracos a dizer que diferença importa, e mudos quanto à direção da causalidade. Fechar esse fosso exige ou um isolado manipulável ou uma intervenção no hospedeiro — e, para a maioria dos táxones que estes levantamentos detetam, não existe atualmente nem uma coisa nem outra.

## Sources

1. **PLOS Biology** — [Revised estimates for the number of human and bacteria cells in the body](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533). Contagens de células bacterianas e humanas, a razão de 1.3 e a sua incerteza, e a origem da afirmação do 10:1.
2. **Frontiers in Microbiology** — [Microbiome datasets are compositional: and this is not optional](https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2017.02224/full). Porque os totais de sequenciação são arbitrários e o que isso faz aos testes de correlação e de diferença.
3. **Science** — [Gut microbiota from twins discordant for obesity modulate metabolism in mice](https://pmc.ncbi.nlm.nih.gov/articles/PMC3829625/). Transmissibilidade de um fenótipo de adiposidade a ratinhos isentos de germes, e a sua dependência da dieta.
4. **EClinicalMedicine** — [Faecal microbiota transplantation for recurrent Clostridioides difficile infection: an updated systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7788438/). Efeito clínico agregado, número necessário para tratar e gradação das provas.
5. **Nature Communications** — [Meta-analysis of gut microbiome studies identifies disease-specific and shared responses](https://pmc.ncbi.nlm.nih.gov/articles/PMC5716994/). Reanálise entre doenças a mostrar que muitas associações não são específicas.
6. **mBio** — [Identifying and overcoming threats to reproducibility, replicability, robustness and generalizability in microbiome research](https://pmc.ncbi.nlm.nih.gov/articles/PMC5989067/). Quadro que separa quatro modos de falha distintos.
7. **FEMS Microbiology Ecology** — [Ecology of the gut microbiota and colonization resistance: mechanisms and therapeutic implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC12728824/). Mecanismos pelos quais uma comunidade residente e as defesas do hospedeiro excluem invasores.
8. **Nature** — [Precision microbiome restoration of bile acid-mediated resistance to *Clostridium difficile*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4354891/). Conversão de ácidos biliares primários em secundários por um comensal residente como mecanismo de resistência à colonização.
9. **Microbiome** — [Adjusting microbiome profiles for differences in microbial load by spike-in bacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC4915049/). Calibração por adição de quantidade conhecida para recuperar razões de abundância absoluta a partir de contagens de leituras composicionais.
10. **National Human Genome Research Institute** — [Microbiome](https://www.genome.gov/genetics-glossary/Microbiome). Definição de referência do termo tal como é usado nestas literaturas.
