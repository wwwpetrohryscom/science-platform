---
title: Os limites termodinâmicos da fotovoltaica — e porque decidem o que é possível
metaTitle: Os limites termodinâmicos da fotovoltaica
excerpt: Há um teto superior duro para quanta luz solar qualquer célula fotovoltaica de junção simples consegue converter em eletricidade. Saber de onde vem esclarece que direções de melhoria são física e quais são engenharia.
type: expert
author: energy-systems-desk
publishedDate: '2026-02-26'
updatedDate: '2026-09-05'
readingTime: 5
pillar: laws-of-thermodynamics-explained
tags:
  - thermodynamics
  - photovoltaics
  - shockley-queisser
  - energy
related:
  - perovskite-stack-field-stability
  - quantum-sensors-leaving-the-lab
_bodyHash: b3f8ffa1
---

Há um teto superior duro para quanta luz solar qualquer célula fotovoltaica de junção simples consegue converter em eletricidade. Sob iluminação solar padrão situa-se perto dos 33 % — o limite de Shockley-Queisser, [derivado em 1961](https://doi.org/10.1063/1.1736034) de um argumento de balanço detalhado sobre uma junção p-n iluminada por um corpo negro. As células de silício de alto desempenho operam suficientemente perto desse teto para que os ganhos adicionais estejam cada vez mais limitados pela engenharia. Saber de onde vem o teto — e vem [das leis da termodinâmica](/pt/physics/thermodynamics/laws-of-thermodynamics-explained) e não de qualquer propriedade do silício — esclarece o que conta como física fundamental e o que conta como engenharia.

## De onde vem o teto

O limite de Shockley-Queisser é um argumento termodinâmico, não de engenharia. Aplica-se a qualquer absorvedor de hiato único a operar sob iluminação solar padrão, seja qual for o material, a arquitetura ou o processo de fabrico.

Nasce de três mecanismos de perda irredutíveis.

**Os fotões abaixo do hiato passam ao lado.** O hiato de uma célula solar define a energia mínima de fotão capaz de excitar um eletrão através dele. Os fotões com menos energia não são absorvidos: passam, sem contribuir com nada. Para um hiato típico do silício (1,1 eV), isso descarta uma fração grande do espetro solar de comprimento de onda longo.

**Os fotões acima do hiato termalizam.** Os fotões com mais energia do que a necessária excitam eletrões bem acima na banda de condução, mas esses eletrões relaxam depressa até ao bordo da banda, perdendo o excesso como calor numa escala de tempo muito mais curta do que a da sua extração como trabalho elétrico. Quer o fotão trouxesse 2 eV quer 4 eV, obtém-se o equivalente a um eletrão com a energia do hiato.

**A recombinação radiativa.** Uma célula que absorve fotões tem, por balanço detalhado, de os emitir também. Isso fixa uma perda mínima por emissão espontânea que nenhuma física consegue eliminar sem mudar a temperatura do absorvedor ou a geometria da luz incidente.

Otimizar o hiato equilibra estas perdas. Um hiato demasiado pequeno capta mais fotões mas perde mais por termalização. Um demasiado grande capta menos fotões mas extrai mais energia de cada um. O ótimo fica perto de 1,3 eV; o silício, a 1,1 eV, fica ligeiramente abaixo, o que é parte da razão de o seu limite prático estar mais perto de 30 % do que de 33 %.

Estas perdas são termodinâmicas. Nenhum desenho de hiato único as pode eliminar.

## O que o teto não restringe

O limite de Shockley-Queisser aplica-se a células de junção simples sob iluminação padrão. Três direções conhecidas contornam-no.

**Células multijunção.** Empilhar absorvedores com hiatos diferentes permite que cada um trate a parte do espetro em que é melhor. A célula de cima capta fotões de alta energia antes de termalizarem; a de baixo capta os fotões de menor energia que a de cima deixou passar. Com infinitas junções e concentração, o limite termodinâmico sobe para cerca de 86 %. Com pilhas finitas realistas, mediram-se eficiências de laboratório acima de 47 %. A geração atual de tandems perovskita-silício é a versão comercialmente relevante desta estratégia.

**Fotovoltaica de concentração.** Concentrar a luz solar numa célula pequena eleva o potencial químico do fluxo de fotões face à célula. Para uma junção simples a concentração muito alta, o limite sobe para perto dos 40 %. Isto exige seguimento de precisão e arrefecimento ativo, o que limita os cenários de implantação em que é económico.

**Extração de portadores quentes.** Extrair portadores antes de termalizarem por completo pode em princípio preservar parte da energia normalmente perdida como calor. Foi demonstrado em dispositivos de prova de conceito mas não se aproximou de uma eficiência prática. A velocidade de extração exigida esbarra em escalas de tempo de relaxação fundamentais nos semicondutores.

**Modificação do espetro.** A conversão descendente (dividir um fotão de alta energia em dois de menor energia) e a ascendente (juntar dois fotões de baixa energia num só) podem em princípio remodelar o espetro incidente para melhor se ajustar a um hiato único. Ambas foram demonstradas; nenhuma atingiu eficiências relevantes para implantação.

Cada uma destas é uma direção de investigação real. Nenhuma viola a termodinâmica subjacente; cada uma muda as condições em que o argumento termodinâmico se aplica.

## O que isto significa para a curva de custos

A descida de custo do silício de junção simples foi impulsionada esmagadoramente pela escala de fabrico e pelo refinamento de processos, não pela física. A tecnologia opera há anos perto do seu teto prático de eficiência; as descidas de custo adicionais vêm de fabricar mais barata a mesma física.

As abordagens multijunção — em especial os tandems perovskita-silício — estão noutra curva de custo. O seu teto de eficiência é bastante mais alto; a sua maturidade de fabrico é muito menor. A pergunta para a próxima década é se a curva de fabrico dos tandems pode descer depressa o suficiente para os tornar económicos à escala antes de a descida de custo do silício saturar.

A fotovoltaica de concentração está em ainda outra curva. O seu teto termodinâmico é alto, mas os seus custos de sistema periférico (seguimento, arrefecimento, ótica) são altos o bastante para ter continuado a ser um nicho mesmo à medida que as eficiências de célula subjacentes melhoravam.

A trajetória comercial da produção solar na próxima década será decidida sobretudo pelo desfecho da competição entre tandem e silício, com a concentração e os portadores quentes como candidatos de mais longo prazo. Conhecer a termodinâmica diz quais destas estão limitadas pela física (o silício, perto do seu limite) e quais ainda têm folga (os tandems, com folga significativa).

## O que isto significa para a produção não fotovoltaica

O mesmo tipo de argumento termodinâmico aplica-se, com constantes diferentes, a todos os processos de conversão solar.

A produção solar térmica tem o seu próprio teto do tipo de Carnot, dependente da temperatura do recetor. A fotossíntese tem um teto de rendimento quântico à volta de 11 % em condições ideais, com as culturas no campo a operar uma ordem de grandeza abaixo. A fotossíntese artificial para produzir combustível tem limites fixados pela termodinâmica da reação-alvo: quebrar a água tem um teto diferente de reduzir o CO₂.

O limite de Shockley-Queisser não é uma esquisitice própria da fotovoltaica; é o caso fotovoltaico de um princípio geral. A conversão solar é limitada; os limites dependem do processo de conversão. Conhecer o limite do processo próprio diz se a fronteira de engenharia está perto ou longe dele — e se continuar a melhorar é questão de esforço ou questão de física.

É o tipo de clareza que convém ter antes de fazer apostas energéticas à escala de uma década.

## Sources

1. **National Laboratory of the Rockies** — [Investigação fotovoltaica](https://www.nlr.gov/pv/research). Investigação fotovoltaica e contexto de desempenho do laboratório do Departamento de Energia dos Estados Unidos anteriormente chamado NREL.
2. **Departamento de Energia dos Estados Unidos** — [Solar Energy Technologies Office](https://www.energy.gov/cmei/systems/integrated-energy-systems-office). Contexto de investigação e implantação de energia solar do DOE.
3. **Reviews of Modern Physics** — [Revistas da American Physical Society](https://journals.aps.org/rmp/). Literatura de revisão com arbitragem científica sobre limites fotovoltaicos e termodinâmicos.
