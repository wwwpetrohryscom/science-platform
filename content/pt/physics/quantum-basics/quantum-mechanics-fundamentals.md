---
title: 'Mecânica quântica: as regras de trabalho, sem a filosofia'
metaTitle: 'Mecânica quântica: as regras de trabalho'
excerpt: A teoria quântica fixa constantes físicas com dez algarismos significativos enquanto a sua interpretação permanece em aberto. Esta página expõe as regras de trabalho — amplitudes, observáveis, quantização, indeterminação, estatística de spin, descoerência — e assinala onde estão as lacunas reais.
type: pillar
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - quantum-mechanics
  - superposition
  - decoherence
  - measurement
  - spin-statistics
related:
  - wave-particle-duality-explained
  - quantum-computing-fundamentals
  - quantum-sensors-leaving-the-lab
  - electromagnetic-spectrum-applications
---
Julgada como instrumento preditivo, a mecânica quântica é a teoria mais severamente testada da física. A avaliação CODATA de 2022 dá a anomalia do momento magnético do eletrão como 1,159 652 180 46(18) × 10⁻³, uma incerteza-padrão relativa de 1,6 × 10⁻¹⁰. A constante de estrutura fina, que rege a intensidade da interação eletromagnética, está fixada na mesma ordem, 7,297 352 5643(11) × 10⁻³. Seja o que for que permaneça por resolver na teoria quântica, a sua aritmética não é a parte por resolver.

O que permanece por resolver é o que essa aritmética descreve. São perguntas distintas, e esta página mantém-nas separadas: primeiro as regras de trabalho, e as costuras assinaladas onde ocorrem.

## O estado é uma lista de amplitudes

Um estado quântico atribui um número complexo — uma **amplitude** — a cada resultado possível de uma medição. A probabilidade de um resultado é o quadrado do módulo da sua amplitude. O facto estruturalmente importante é a ordem dessas duas operações: as amplitudes são primeiro somadas e depois elevadas ao quadrado, pelo que as contribuições se podem cancelar. As probabilidades clássicas, sendo não negativas, nunca se cancelam. Todo o efeito distintamente quântico remonta a essa única assimetria.

Uma **sobreposição** é um único estado cuja amplitude está distribuída por vários resultados. Não é um objeto a ocupar dois lugares, nem é ignorância sobre em que lugar o objeto realmente está. Ambas as leituras falham perante a mesma prova: preveem que a estatística de resultados deveria ser uma média ponderada dos casos separados, e a estatística observada contém termos de interferência que nenhuma média desse tipo produz. As experiências que impõem esta conclusão estão expostas em [o que as experiências da dupla fenda mostram realmente](/pt/physics/quantum-basics/wave-particle-duality-explained).

A linguagem das amplitudes fixa também o sentido de «a função de onda espalha-se». O espalhamento é uma afirmação sobre onde a amplitude tem suporte, não sobre uma substância a diluir-se. Uma deteção isolada é sempre um único acontecimento localizado.

## Observáveis, e a costura na medição

Cada grandeza mensurável é representada por um operador. Os resultados que uma medição pode devolver são os valores próprios desse operador, e a probabilidade de cada um é dada pela regra de Born. Entre medições o estado evolui segundo a equação de Schrödinger, que é determinista, linear e reversível.

As duas metades não encaixam de forma óbvia. A evolução unitária nunca transforma uma sobreposição num resultado definido; a regra de medição faz exatamente isso, de modo probabilístico e irreversível. A teoria postula ambas e não deriva nenhuma da outra. Este é o **problema da medição**, e é uma lacuna real e não retórica — mas uma lacuna de interpretação, não de previsão. Nenhuma experiência encontrou um caso em que a regra de Born dê a estatística errada.

## De onde vem a quantização — e de onde não vem

O nome induz em erro, porque a maioria das grandezas da teoria não está quantizada. Uma partícula livre tem um espectro de energia contínuo. Posição e momento são contínuos. A quantização aparece quando uma equação de onda é resolvida sujeita a condições de fronteira, do mesmo modo que uma corda presa admite apenas certos modos estacionários. Ligue-se um eletrão a um protão e as energias permitidas tornam-se discretas, numa escala fixada pela energia de Rydberg, 13,605 693 122 990(15) eV na avaliação CODATA de 2022, conhecida com cerca de uma parte em 10¹². A própria energia de ionização do estado fundamental do hidrogénio é um pouco menor — o NIST tabela-a em 109 678,7717 cm⁻¹, ou seja 13,598 433 eV — porque a massa finita do protão e as correções relativistas e de eletrodinâmica quântica a afastam do valor idealizado.

O spin é a exceção que esclarece a regra. Não é quantizado por uma condição de fronteira, não tem por trás qualquer rotação clássica, e toma valores semi-inteiros ou inteiros como propriedade intrínseca da espécie de partícula.

A luz traz a sua própria versão da mesma ideia. A energia trocada entre um campo e a matéria vem em unidades de hf, razão pela qual é a energia do [fotão](/en/glossary/photon) — e não a intensidade — que determina o que a radiação pode fazer a uma molécula, ponto desenvolvido banda a banda em [o espectro eletromagnético e as suas aplicações](/pt/physics/quantum-basics/electromagnetic-spectrum-applications). É também por isso que o teto de eficiência de uma célula solar de junção única é fixado pela energética dos fotões e não pela engenharia, como expõe [o limite termodinâmico da fotovoltaica](/pt/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

## Variáveis conjugadas, não instrumentos desajeitados

A [relação de indeterminação](/en/glossary/uncertainty-relation) σₓσₚ ≥ ħ/2 é habitualmente introduzida por uma história de um microscópio a perturbar um eletrão. Essa história dá a desigualdade certa pela razão errada, e a razão errada tem depois de ser desaprendida.

As amplitudes de posição e de momento são transformadas de Fourier uma da outra. Um estado com dispersão estreita em posição é, como questão matemática, construído a partir de uma vasta gama de componentes de momento — o mesmo compromisso que impede um impulso de rádio de ser ao mesmo tempo muito curto e muito próximo de uma frequência única. A relação restringe o próprio estado. Vale antes de alguém medir o que quer que seja, e valeria para um instrumento perfeito.

A perturbação de medição é um efeito à parte que também existe, e os dois foram separados experimentalmente num interferómetro atómico onde a perturbação devida à deteção do caminho era demasiado pequena para explicar a perda de interferência. A escala de ħ explica por que nada disto se manifesta na vida corrente: ħ/2 vale cerca de 5,3 × 10⁻³⁵ J s, pelo que para qualquer objeto de laboratório a precisão conjunta permitida em posição e momento é muito mais fina do que qualquer instrumento poderia aproveitar. A própria constante de Planck já não é sequer medida: desde a revisão do SI de 2019 está fixada por definição em 6,626 070 15 × 10⁻³⁴ J Hz⁻¹, e o quilograma realiza-se através dela.

## Duas famílias de partículas, e tudo o que daí decorre

As partículas idênticas em mecânica quântica são-no num sentido forte: nenhuma medição distingue um eletrão de outro, pelo que o estado tem de se comportar de uma maneira definida quando duas são trocadas. Só dois comportamentos são consistentes. Os estados simétricos descrevem **bosões**, que têm spin inteiro; os estados antissimétricos descrevem **fermiões**, que têm spin semi-inteiro.

A antissimetria tem uma consequência imediata — dois fermiões não podem ocupar o mesmo estado, o princípio de exclusão de Pauli — e uma parte enorme do mundo observável assenta nela. A estrutura em camadas dos átomos e, portanto, a tabela periódica decorrem daí. Também a pressão de degenerescência eletrónica que sustenta uma anã branca, e também o preenchimento das bandas de energia que decide se um sólido conduz, assunto de [a estrutura de bandas nos materiais](/pt/physics/matter-radiation/materials-physics-and-semiconductors). Os bosões fazem o contrário: podem amontoar-se num mesmo estado, o que um feixe laser e um condensado de Bose-Einstein têm em comum. O inventário de partículas divide-se pela mesma linha, com quarks e leptões do lado fermiónico e os portadores de força do lado bosónico; o resumo do modelo padrão do CERN apresenta esse inventário e agrupa os portadores de força como bosões.

## A descoerência explica o limite clássico, mas não o resultado

Um sistema quântico nunca está isolado. Emaranha-se com o seu meio — moléculas de ar, fotões dispersos, a radiação térmica que ele próprio emite — e uma vez que o meio guarda um registo do ramo que o sistema tomou, a interferência entre ramos deixa de ser observável no sistema isolado. Isto é a **[descoerência](/en/glossary/decoherence)**, e é mensurável e não pressuposta. Aquecer moléculas de fulereno dentro de um interferómetro até irradiarem fotões térmicos destrói as suas franjas de interferência numa quantidade previsível, e a perda de visibilidade medida coincidiu com a teoria microscópica da descoerência.

A descoerência responde bem a uma pergunta concreta: por que objetos grandes, quentes e bem acoplados não mostram interferência, sem exigir qualquer modificação da teoria. Não responde por que um resultado em particular é o que ocorre. Confundir as duas coisas é o exagero mais comum nas exposições de divulgação sobre o tema. Tudo em [construir uma máquina a partir de qubits](/pt/physics/quantum-basics/quantum-computing-fundamentals) está a jusante disto: a disciplina inteira é uma luta para adiar a descoerência o suficiente para terminar um cálculo.

## O que as experiências de Bell resolveram

O teorema de Bell de 1964 transformou uma disputa filosófica numa experiência: qualquer teoria em que as propriedades sejam localmente determinadas antes da medição obedece a uma desigualdade que a mecânica quântica viola. Seguiram-se duas gerações de testes, cada uma deixando um pressuposto em aberto.

A experiência de 2015 fechou os dois mais difíceis ao mesmo tempo, emaranhando spins de eletrões em laboratórios separados por 1,3 quilómetros com uma fidelidade de estado estimada de 0,92 ± 0,03 e realizando 245 ensaios, com eficiência de deteção suficiente para evitar pressupostos de amostragem justa e separação suficientemente grande para impor localidade. A rejeição do realismo local reportada situou-se ao nível de dois desvios-padrão — um resultado genuíno e modesto, e o artigo dizia-o claramente. Uma colaboração posterior atacou o pressuposto restante, o de que as configurações de medição são elas próprias imprevisíveis, recrutando cerca de 100 000 pessoas para gerar 97 347 490 escolhas binárias numa janela de doze horas a 30 de novembro de 2016 e encaminhando-as para treze experiências em doze laboratórios de cinco continentes.

O que este corpo de trabalho estabelece é estreito e firme: nenhuma teoria local de variáveis ocultas reproduz as correlações observadas. O que não estabelece é qual das interpretações sobreviventes está correta, porque concordam em todas as previsões. É por isso que o resumo honesto da área é que o formalismo está fixado a dez algarismos significativos enquanto a sua interpretação permanece genuinamente em aberto. O mesmo controlo sobre sistemas quânticos individuais que torna estes testes possíveis é hoje uma técnica de construção de instrumentos por direito próprio, descrita em [os sensores quânticos saem do laboratório](/pt/physics/quantum-basics/quantum-sensors-leaving-the-lab).

Vale a pena enunciar explicitamente um limite. As regras acima são as da mecânica quântica não relativista, um caso-limite da teoria quântica de campos; a criação e a aniquilação de partículas ficam fora delas. E nenhuma versão da teoria incorpora ainda a gravidade, razão pela qual as descrições aqui ficam muito aquém de um relato completo da natureza.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Valores de referência e incertezas declaradas para a constante de Planck, a constante de estrutura fina e a energia de Rydberg.
2. **NIST** — [Electron magnetic moment anomaly](https://physics.nist.gov/cgi-bin/cuu/Value?ae). O valor CODATA de 2022 e a sua incerteza-padrão relativa de 1,6 × 10⁻¹⁰.
3. **NIST** — [Redefining the kilogram](https://www.nist.gov/si-redefinition/kilogram-introduction). A revisão do SI de 2018-2019 e a fixação da constante de Planck.
4. **Nature 526, 682 (2015)** — [Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres](https://www.nature.com/articles/nature15759). Separação, fidelidade do emaranhamento, número de ensaios e força da violação reportada.
5. **Nature 557, 212 (2018)** — [Challenging local realism with human choices](https://www.nature.com/articles/s41586-018-0085-3). Escala e desenho do teste de Bell distribuído que aborda o pressuposto de liberdade de escolha.
6. **Nature 427, 711 (2004)** — [Decoherence of matter waves by thermal emission of radiation](https://www.nature.com/articles/nature02276). Concordância quantitativa entre a perda medida de visibilidade e a teoria da descoerência.
7. **CERN** — [The Standard Model](https://home.cern/science/physics/standard-model/). Classificação das partículas de matéria e dos portadores de força, e as lacunas reconhecidas do modelo.
8. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Separação da retroação da medição face à perda de interferência.
9. **NIST** — [Quantum information science](https://www.nist.gov/quantum-information-science). Material de referência sobre o controlo e a medição de sistemas quânticos individuais.
10. **NIST** — [Basic atomic spectroscopic data: hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1.htm). A energia de ionização tabelada do hidrogénio neutro, 109 678,7717 cm⁻¹ (13,598 433 eV).
