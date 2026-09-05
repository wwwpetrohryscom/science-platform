---
title: 'Estudar micróbios: porque o método decide o que se encontra'
metaTitle: 'Estudar micróbios: o método decide o resultado'
excerpt: Uma placa, um iniciador de PCR e um montador de metagenoma devolvem cada um um subconjunto diferente da mesma comunidade. Esta página expõe o que cada grande método microbiológico seleciona e os padrões de qualidade que tornam publicável um genoma sem organismo.
type: expert
author: microbiology-genomics-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - culturing
  - amplicon-sequencing
  - metagenome-assembled-genomes
  - single-cell-genomics
  - culturomics
related:
  - microbiology-explained
  - microbiomes-and-host-microbe-interactions
  - microbial-biogeochemistry
  - dna-sequencing-technologies
pillar: microbiology-explained
---

A microbiologia tem um problema recorrente que a maioria dos campos da biologia não tem: não se consegue ver os organismos a fazer algo de útil, pelo que todo o facto sobre eles chega através de um instrumento que admite alguns e exclui o resto. Uma colónia em agar, uma leitura de sequência de um produto de PCR e um genoma agrupado a partir de um metagenoma são três filtros diferentes, e a composição que cada um reporta é em parte uma descrição do filtro. Saber qual é qual é quase tudo o que separa uma afirmação defensável de ecologia microbiana de um artefacto.

Os organismos e a sua amplitude metabólica são tratados na [introdução à vida microbiana](/pt/biology/microbiology/microbiology-explained). O que se segue é uma página de métodos, organizada por aquilo que cada abordagem perde sistematicamente.

## O que uma placa seleciona

A **[anomalia da contagem em placa](/pt/glossary/great-plate-count-anomaly)** — a antiga observação de que crescem muito menos colónias de uma amostra ambiental do que há células contáveis ao microscópio — costuma ser apresentada como um enigma. Lê-se melhor como uma lista. Uma placa padrão oferece uma fonte de carbono a uma concentração, uma tensão de oxigénio, uma temperatura, um pH, nenhum organismo parceiro e uma incubação de alguns dias. Um organismo que precisa de um parceiro sintrófico para remover o hidrogénio, ou cujo tempo de duplicação é de semanas, ou que é inibido pelas próprias concentrações de nutrientes com que se faz um meio rico, não aparecerá — não por ser incultivável em princípio, mas porque essas condições não foram oferecidas.

A dimensão da lacuna resultante depende inteiramente do habitat, e é essa a parte normalmente omitida. Uma análise de 2018 em *mSystems* comparou sequências metagenómicas do gene do ARNr 16S — que carregam muito menos enviesamento de cultura do que os levantamentos amplificados por iniciadores — com os seus parentes cultivados mais próximos em muitos ambientes. Água do mar, água doce, subsuperfície terrestre, solo, sistemas hipersalinos, sedimento marinho, fontes termais, fontes hidrotermais, neve e biorreatores eram dominados por grupos não cultivados, com 22 a 87 por cento a pertencer a géneros e até classes não cultivadas. Os ambientes humanos e associados ao humano foram a exceção, dominados por géneros cultivados em 45 a 97 por cento. À escala mundial, os autores estimaram que os géneros não cultivados representam cerca de 7,3 × 10²⁹ células, aproximadamente 81 por cento do total, e que os filos não cultivados estão sobrerrepresentados em metatranscritomas face a metagenomas — prova de que essas células não estão apenas presentes mas ativas.

A consequência prática é que a literatura do microbioma humano e a da microbiologia ambiental enfrentam versões diferentes do mesmo problema, e os resultados sobre quão bem a sequenciação acompanha a cultura não se transferem entre elas.

## Os enviesamentos que um gene marcador traz

A sequenciação de amplicões substitui a placa por um par de iniciadores, um filtro de outra forma.

- **Cobertura dos iniciadores.** Nenhum conjunto de iniciadores corresponde a todos os alvos; as linhagens com desemparelhamentos na região de ligação ficam sub-representadas ou ausentes, e as linhagens afetadas diferem entre conjuntos, pelo que dois estudos da mesma amostra podem divergir sistematicamente.
- **Número de cópias.** O operão do ARNr ocorre em várias cópias, de 1 a 15 em bactérias e de 1 a 4 em arqueias. Uma sequência recuperada com frequência pode ser um táxon de muitas cópias com abundância modesta ou um de poucas cópias com abundância alta, e corrigi-lo exige conhecer o número de cópias de organismos que costumam ser os menos caracterizados.
- **Quimeras e erro.** A PCR gera sequências híbridas a partir de produtos de extensão parciais; inflacionam a diversidade aparente se não forem removidas, e a própria remoção descarta algumas sequências reais.
- **Região e resolução.** Diferentes regiões variáveis do mesmo gene resolvem táxones diferentes, pelo que a profundidade taxonómica de um resultado é função do fragmento amplificado.

Nenhum destes é fatal, e todos são corrigíveis em princípio. O que impedem é tratar uma tabela de abundâncias relativas como observação direta — limitação que se soma ao problema composicional examinado em [o que os levantamentos de microbioma estabelecem](/pt/biology/microbiology/microbiomes-and-host-microbe-interactions).

## Genomas sem organismos

A metagenómica shotgun elimina o iniciador, e o agrupamento computacional junta depois os fragmentos montados em genomas putativos. Um **genoma montado a partir de metagenoma** é uma hipótese sobre que contigs vieram de uma população, e a sua utilidade depende de ser honesto sobre quão boa é essa hipótese.

O Genomic Standards Consortium fixou esse padrão em 2017. Um rascunho de genoma montado ou de genoma amplificado único de alta qualidade tem de estar completo em mais de 90 por cento com menos de 5 por cento de contaminação, e tem de codificar os genes de ARNr 23S, 16S e 5S mais ARNt de pelo menos 18 dos 20 aminoácidos. Um rascunho de qualidade média está completo em pelo menos 50 por cento com menos de 10 por cento de contaminação; abaixo de 50 por cento é um rascunho de baixa qualidade. Completude e contaminação são elas próprias estimativas, derivadas de genes marcadores esperados em cópia única — o que as torna menos fiáveis precisamente para as linhagens profundamente novas que tornam o agrupamento valioso, porque os conjuntos de marcadores foram construídos a partir de parentes cultivados.

A escala que estes métodos alcançam é real. A coleção Unified Human Gastrointestinal Genome, publicada na *Nature Biotechnology* em 2021, montou 204.938 genomas não redundantes representando 4.644 procariotas intestinais e mais de 170 milhões de sequências proteicas. Mais de 70 por cento dessas espécies não têm representante cultivado, e 40 por cento das proteínas não têm anotação funcional. A genómica de célula única oferece uma via complementar — separar uma célula, amplificar o seu genoma, sequenciá-lo — que dá um genoma de um só organismo sem ambiguidade mas em regra incompleto, e é avaliada pelos mesmos padrões.

As bases de dados de referência põem um teto adicional: a atribuição taxonómica só pode situar uma sequência face ao que foi depositado. A coleção RefSeq do NCBI tinha 182.465 organismos na versão 236 de julho de 2026, de toda a vida. Cada leitura «não atribuída» de um levantamento é uma afirmação sobre essa coleção tanto como sobre a amostra.

## A cultura voltou

A resposta a tudo isto não foi abandonar a cultura mas industrializá-la. A **culturómica** multiplica o número de condições — centenas de meios, atmosferas, tempos de incubação e passos de enriquecimento — e crivam-se as colónias resultantes por espectrometria de massa e sequenciação. Uma linha paralela usou cultura fenotípica dirigida informada por dados metagenómicos: um estudo de 2016 na *Nature* isolou 137 espécies bacterianas de amostras fecais humanas saudáveis, arquivou-as como culturas puras e inferiu de análise genómica e fenotípica que pelo menos 50 a 60 por cento dos géneros bacterianos intestinais formam esporos resistentes especializados na transmissão de hospedeiro para hospedeiro — o que é também uma razão plausível para tantos anaeróbios intestinais terem afinal resultado cultiváveis.

Uma ressalva pertence ao registo. Um artigo precoce e muito citado de culturómica, publicado na *Nature Microbiology* em 2016, foi retratado em novembro de 2024. O motivo declarado foi documental e não microbiológico: os autores não conseguiram apresentar prova de aprovação ética nos países adicionais de onde tinham sido recolhidas amostras, para lá da aprovação francesa que o artigo citava. Vários autores discordaram da retratação. A própria abordagem de cultura foi reproduzida por outros grupos, mas quem seguir a literatura encontrará uma referência fundadora retratada, e é melhor saber porquê.

## O que isto significa para ler um resultado

Os métodos não são intermutáveis, e o desencontro entre eles é informativo e não embaraçoso. Um táxon abundante num levantamento de amplicões e ausente de um metagenoma pode ser um artefacto de número de cópias. Uma capacidade metabólica inferida de um genoma montado é uma capacidade, não uma atividade — a distância entre as duas é o tema da [biogeoquímica microbiana](/pt/biology/microbiology/microbial-biogeochemistry). E um levantamento de um habitat pouco amostrado reportará elevada novidade em parte porque as bases de referência são aí magras.

A mesma lógica que os ecólogos aplicam ao esforço de amostragem nas [contagens de espécies](/pt/ecology/biodiversity/species-richness-explained) vale aqui com mais força, porque a probabilidade de deteção de um táxon microbiano depende não só de quanto se procurou mas de com qual de vários instrumentos incompatíveis se procurou. As melhorias vêm tanto do lado da plataforma como da biologia, como cobrem [as tecnologias de sequenciação de ADN](/pt/biology/biotechnology/dna-sequencing-technologies); leituras mais longas encurtam a lacuna de montagem, mas não dizem o que um organismo faz.

## Sources

1. **mSystems** — [Phylogenetically novel uncultured microbial cells dominate Earth microbiomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6156271/). Frações não cultivadas por habitat, estimativas mundiais de células e prova de atividade por metatranscritomas.
2. **Nucleic Acids Research** — [rrnDB: improved tools for interpreting rRNA gene abundance in bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383981/). Intervalos de número de cópias do operão do ARNr e o enviesamento que introduzem nos levantamentos de amplicões.
3. **Nature Biotechnology** — [Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG) of bacteria and archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436528/). Limiares de completude, contaminação e genes marcadores para reportar genomas montados.
4. **Nature Biotechnology** — [A unified catalog of 204,938 reference genomes from the human gut microbiome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7801254/). Contagens de genomas e proteínas, e a parcela de espécies sem representante cultivado.
5. **Nature** — [Culturing of 'unculturable' human microbiota reveals novel taxa and extensive sporulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4890681/). Cultura fenotípica dirigida de 137 espécies e a prevalência da esporulação.
6. **Nature Microbiology** — [Retraction note: Culture of previously uncultured members of the human gut microbiota by culturomics](https://pmc.ncbi.nlm.nih.gov/articles/PMC13179128/). A retratação de 2024 e os seus fundamentos declarados.
7. **NCBI (National Library of Medicine)** — [Reference Sequence (RefSeq) database](https://www.ncbi.nlm.nih.gov/refseq/). Contagens de organismos e registos da versão 236 que sustentam a atribuição taxonómica.
