---
title: 'CRISPR: o sistema imunitário bacteriano que se tornou ferramenta de edição'
metaTitle: 'CRISPR: o que a nuclease corta e o que a célula decide'
excerpt: Uma nuclease guiada corta o ADN; a célula decide no que se torna o corte. Essa divisão de trabalho explica por que razão as inativações génicas são rotina, as substituições precisas são difíceis e o passo limitante é a administração e não o direcionamento.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - genome-editing
  - crispr-cas9
  - dna-repair
  - base-editing
  - gene-therapy
related:
  - biotechnology-explained
  - dna-sequencing-technologies
  - dna-replication-and-repair
  - synthetic-biology-explained
pillar: biotechnology-explained
_bodyHash: 44683fb5
---

A nuclease é o componente famoso e o menos interessante. A Cas9 encontra uma sequência e parte-a; o que acontece a seguir é feito por uma maquinaria de reparação que a célula já tinha, e o resultado dessa reparação é o produto. Quase todas as propriedades práticas da edição do genoma — por que razão as inativações génicas se tornaram rotina, por que razão as substituições precisas continuaram difíceis, por que razão a restrição determinante em terapia é a administração e não o direcionamento — decorrem dessa divisão de trabalho entre uma enzima introduzida e um processo biológico preexistente. É também a parte mais frequentemente omitida nos resumos, que tendem a descrever a tesoura e a ficar por aí. Editar no lugar é a mais recente das operações centrais da [caixa de ferramentas biotecnológica mais ampla](/pt/biology/biotechnology/biotechnology-explained), e aquela cujos limites são menos compreendidos.

## Um sistema antifago, lido ao contrário

Os sistemas CRISPR-Cas são a [imunidade adaptativa](/pt/biology/physiology/the-immune-system-explained) de bactérias e arqueias. Fragmentos de ADN vírico ou plasmídico anteriormente encontrado são guardados numa matriz de repetições, transcritos e processados em ARN guia curtos, e usados para reconhecer e destruir a mesma sequência num novo encontro. O sistema é uma defesa contra os [vírus que infetam bactérias](/pt/biology/microbiology/viruses-explained), e evoluiu sob a pressão dessa corrida ao armamento e não para algo que se parecesse com conveniência laboratorial.

O resultado de 2012 que o transformou em ferramenta estabeleceu o mecanismo com precisão. Numa classe destes sistemas, um ARN CRISPR maduro emparelhado com um ARN transativador forma uma estrutura de dois ARN que dirige a Cas9 para introduzir uma quebra de cadeia dupla; o domínio HNH da enzima corta a cadeia complementar do guia e o seu domínio do tipo RuvC corta a outra. O mesmo trabalho mostrou que os dois ARN podiam ser fundidos numa única quimera construída que continuava a dirigir a clivagem específica de sequência — o passo que tornou o sistema programável pela síntese de um ARN curto em vez da reconstrução de um locus natural.

O direcionamento não está livre de restrições. A Cas9 exige um motivo curto adjacente ao protoespaçador imediatamente ao lado da sequência emparelhada, o que, no contexto nativo, distingue o ADN invasor da cópia guardada pela própria bactéria. Para a enzima de *Streptococcus pyogenes*, a mais usada, esse motivo é NGG, e trabalhos posteriores quantificaram quão permissivo isso é: um motivo NGG numa ou noutra cadeia ocorre em média a cada 8 pares de bases, aproximadamente, pelo que a restrição aperta sobretudo quando a edição tem de cair numa posição exata e não apenas dentro de uma região.

## A via de reparação é o produto

Numa célula de mamífero, uma quebra de cadeia dupla é habitualmente resolvida por junção de extremidades, que deixa frequentemente pequenas inserções ou deleções. Numa sequência codificante, estas deslocam a grelha de leitura, e é por isso que interromper um gene é simples: não se está a fazer uma alteração desenhada, está-se a explorar uma via de reparação propensa a erro e a selecionar as células em que ela falhou de modo útil. Substituir uma sequência por uma alternativa especificada exige reparação dirigida por homologia com um molde fornecido, uma via restrita a determinadas fases do ciclo celular e que compete mal com a junção de extremidades. A mecânica de ambas as vias é tratada no artigo sobre [replicação e reparação do ADN](/pt/biology/genetics/dna-replication-and-repair).

A diferença de eficiência é gritante nos dados de comparação direta. Nas experiências que introduziram a edição de bases, fornecer a Cas9, um guia e um dador de cadeia simples para impulsionar a reparação dirigida por homologia produziu a conversão pretendida de citosina em timina, em média, em 0.5 por cento dos alelos, enquanto gerava inserções e deleções, em média, em 4.3 por cento. O mesmo artigo situa a razão entre a conversão pretendida e os produtos de junção de extremidades em 0.17 para a Cas9 selvagem, contra 23 para o editor de bases de terceira geração que apresentava.

## Escrever sem partir as duas cadeias

Duas abordagens evitam por completo a quebra de cadeia dupla, e ambas foram construídas fundindo uma nova atividade a uma Cas9 inativada ou nickase.

A edição de bases funde uma citidina desaminase à Cas9 e converte a citosina em uracilo dentro de uma janela de cerca de cinco nucleótidos na região definida pelo guia; a replicação fixa depois a alteração como uma substituição de C para T (ou de G para A). Com uma nickase dirigida à cadeia não editada e com a inclusão de um inibidor da uracilo-glicosilase, a conversão comunicada atingiu aproximadamente 15 a 75 por cento do ADN celular total em quatro linhas celulares, com formação de indels tipicamente igual ou inferior a 1 por cento.

O prime editing funde uma transcriptase reversa a uma Cas9 nickase e usa um ARN guia que ao mesmo tempo especifica o local e codifica a sequência desejada, a qual é escrita na cadeia cortada e resolvida pela célula. O trabalho original realizou mais de 175 edições em células humanas, incluindo todas as doze substituições pontuais possíveis mais pequenas inserções e deleções, com frequências de indels em média de 0.86 por cento na mais simples das suas duas configurações; a variante que acrescenta um segundo corte para enviesar a reparação a favor da cadeia editada aumentou tanto a eficiência como os indels, estes últimos até às dezenas baixas de por cento em alguns locais. Os seus autores calcularam que, em princípio, a abordagem poderia responder a até cerca de 89 por cento das 75,122 variantes humanas patogénicas então catalogadas no ClinVar — uma afirmação sobre a classe de alterações que esta química consegue fazer, não uma alegação sobre o alcance clínico.

| Abordagem | Quebra introduzida | Alterações que permite | Indels não pretendidos comunicados |
| --- | --- | --- | --- |
| Nuclease com junção de extremidades | Cadeia dupla | Interrupção, não especificação | É o mecanismo pretendido |
| Nuclease com molde dador | Cadeia dupla | Qualquer uma, em princípio | ~4.3% contra ~0.5% de conversão |
| Edição de bases de citosina | Apenas nick | Uma classe de transição, janela ~5 nt | Tipicamente ≤1% |
| Prime editing | Apenas nick | Todas as substituições, pequenas inserções e deleções | ~0.86% na configuração base |

## Medir o que não se pode prever

Um editor que reconhece cerca de vinte bases atuará por vezes em sequências que se parecem com o alvo. O achado importante dos ensaios construídos para o medir não é que exista atividade fora do alvo, mas que ela é mal prevista. O método GUIDE-seq captura um oligonucleótido curto de cadeia dupla nas quebras e sequencia os pontos de inserção, dando um mapa não enviesado à escala do genoma. Aplicado a treze guias em duas linhas celulares humanas, verificou que a maioria dos locais identificados não tinha sido detetada pelas ferramentas computacionais de previsão então em uso nem por imunoprecipitação da cromatina, e que entre os locais falhados havia alguns que diferiam do alvo por apenas um emparelhamento incorreto. Mostrou também que encurtar o ARN guia reduzia substancialmente as quebras fora do alvo, e que alguns aparentes pontos quentes de quebra eram totalmente independentes da nuclease.

Daqui decorrem dois limites. Qualquer perfil fora do alvo é específico do guia, do tipo celular e da sensibilidade do ensaio; um resultado limpo numa linha celular não se transfere. E porque estes acontecimentos podem ser mais raros do que o piso de erro da sequenciação usada para os detetar, a profundidade e as características de erro da [plataforma de sequenciação](/pt/biology/biotechnology/dna-sequencing-technologies) fixam o limite de deteção da alegação de segurança.

## A administração decide que doenças são alcançáveis

A primeira terapia aprovada que usa esta tecnologia é instrutiva quanto ao que é hoje praticável. Trata a drepanocitose retirando do corpo as próprias [células estaminais](/pt/biology/physiology/developmental-biology-explained) sanguíneas do doente e usando a Cas9 para silenciar um intensificador específico de eritroides do *BCL11A* — um repressor da hemoglobina fetal — de modo que as células editadas produzam hemoglobina fetal, que interfere com a falciformação. Foi aprovada nos Estados Unidos a 8 de dezembro de 2023 para doentes com 12 anos ou mais e com crises vaso-oclusivas recorrentes, e em janeiro de 2024 para a β-talassemia dependente de transfusões.

Dois aspetos merecem atenção. A edição não repara a mutação causadora; desativa um elemento regulador para que outro gene, normalmente silenciado, seja expresso, uma estratégia tomada do que se sabe sobre [como a expressão génica é regulada](/pt/biology/genetics/how-gene-expression-is-regulated) e não da biologia da reparação. E o procedimento é ex vivo: as células são editadas em placa e o doente é submetido a condicionamento mieloablativo antes da sua devolução. O boletim terapêutico que descreve os dois produtos aprovados para a drepanocitose nota que esta combinação de manipulação genómica ex vivo e condicionamento deixa em aberto questões sobre o risco hematológico a longo prazo a que só um seguimento prolongado pode responder. Editar tecidos no lugar, sem os retirar, continua a ser o problema mais difícil e em grande medida por resolver.

## Onde se traça a linha da governação

Editar células somáticas afeta um doente. Editar gâmetas ou embriões afeta descendentes que não podem consentir e não podem ser seguidos. As recomendações de 2021 da Organização Mundial da Saúde tratam as aplicações somáticas, germinativas e hereditárias dentro de um único quadro de governação, separando-as ao mesmo tempo na prática: propõem um registo da investigação em edição do genoma humano, mecanismos para comunicar trabalhos que caiam fora das normas acordadas e um envolvimento público continuado. A lei nacional diverge consideravelmente abaixo desse nível, e a posição prática é que as aplicações hereditárias permanecem fora da prática clínica aceite, enquanto as somáticas avançam sob a regulação terapêutica convencional.

O que a edição mudou para a investigação é menos contestado do que aquilo que mudou para a medicina. Poder desativar um gene num tipo celular escolhido transforma muitas observações correlativas em observações testáveis. Não as transforma em explicações: um fenótipo que aparece quando uma sequência é removida mostra que essa sequência é necessária naquelas condições, o que é uma afirmação mais estreita do que a habitualmente comunicada.

## Sources

1. **Science (manuscrito de autor, PubMed Central)** — [A programmable dual RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC6286148/). O mecanismo de dois ARN, a clivagem própria de cada domínio e a demonstração da quimera única.
2. **Nature (manuscrito de autor, PubMed Central)** — [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4873371/). Janela de edição de bases, eficiências de conversão e a comparação com a reparação dirigida por homologia.
3. **Nature (manuscrito de autor, PubMed Central)** — [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). Âmbito do prime editing, frequências de indels, espaçamento do PAM e o cálculo do ClinVar.
4. **Nature Biotechnology (manuscrito de autor, PubMed Central)** — [GUIDE-Seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pmc.ncbi.nlm.nih.gov/articles/PMC4320685/). Mapeamento não enviesado fora do alvo e o falhanço das ferramentas de previsão.
5. **Genetics in Medicine Open (boletim terapêutico da ACMG)** — [Casgevy and Lyfgenia for individuals with sickle cell disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11736165/). Mecanismo, datas de aprovação e as ressalvas quanto ao seguimento a longo prazo.
6. **Organização Mundial da Saúde** — [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381). Quadro de governação que abrange aplicações somáticas, germinativas e hereditárias.
