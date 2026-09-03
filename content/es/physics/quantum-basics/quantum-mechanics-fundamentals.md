---
title: 'Mecánica cuántica: las reglas de trabajo, sin la filosofía'
metaTitle: 'Mecánica cuántica: las reglas de trabajo'
excerpt: La teoría cuántica fija constantes físicas con diez cifras significativas mientras su interpretación sigue abierta. Esta página expone las reglas de trabajo — amplitudes, observables, cuantización, indeterminación, estadística de espín, decoherencia — y señala dónde están las lagunas reales.
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
Juzgada como instrumento predictivo, la mecánica cuántica es la teoría más severamente puesta a prueba de la física. La evaluación CODATA de 2022 da la anomalía del momento magnético del electrón como 1,159 652 180 46(18) × 10⁻³, una incertidumbre típica relativa de 1,6 × 10⁻¹⁰. La constante de estructura fina, que gobierna la intensidad de la interacción electromagnética, está acotada al mismo orden, 7,297 352 5643(11) × 10⁻³. Sea lo que sea lo que queda sin resolver en la teoría cuántica, su aritmética no es la parte sin resolver.

Lo que sigue sin resolver es qué describe esa aritmética. Son preguntas distintas, y esta página las mantiene separadas: primero las reglas de trabajo, y las costuras marcadas donde aparecen.

## El estado es una lista de amplitudes

Un estado cuántico asigna un número complejo — una **amplitud** — a cada resultado posible de una medida. La probabilidad de un resultado es el cuadrado del módulo de su amplitud. El hecho estructuralmente importante es el orden de esas dos operaciones: las amplitudes se suman primero y se elevan al cuadrado después, de modo que las contribuciones pueden cancelarse. Las probabilidades clásicas, al ser no negativas, nunca se cancelan. Todo efecto distintivamente cuántico se remonta a esa única asimetría.

Una **superposición** es un único estado cuya amplitud está repartida entre varios resultados. No es un objeto que ocupe dos lugares, ni es ignorancia sobre en qué lugar está realmente el objeto. Ambas lecturas fracasan ante la misma evidencia: predicen que la estadística de resultados debería ser un promedio ponderado de los casos separados, y la estadística observada contiene términos de interferencia que ningún promedio de ese tipo produce. Los experimentos que fuerzan esta conclusión se exponen en [qué muestran realmente los experimentos de la doble rendija](/es/physics/quantum-basics/wave-particle-duality-explained).

El lenguaje de amplitudes también fija el sentido de «la función de onda se extiende». La extensión es un enunciado sobre dónde tiene soporte la amplitud, no sobre una sustancia que se diluye. Una detección aislada es siempre un único suceso localizado.

## Observables, y la costura en la medida

Cada magnitud medible se representa por un operador. Los resultados que una medida puede devolver son los valores propios de ese operador, y la probabilidad de cada uno la da la regla de Born. Entre medidas el estado evoluciona según la ecuación de Schrödinger, que es determinista, lineal y reversible.

Las dos mitades no encajan de forma evidente. La evolución unitaria nunca convierte una superposición en un resultado definido; la regla de medida hace exactamente eso, de manera probabilística e irreversible. La teoría postula ambas y no deriva ninguna de la otra. Este es el **problema de la medida**, y es una laguna real y no retórica — pero una laguna de interpretación, no de predicción. Ningún experimento ha encontrado un caso en que la regla de Born dé la estadística equivocada.

## De dónde viene la cuantización — y de dónde no

El nombre induce a error, porque la mayoría de las magnitudes de la teoría no están cuantizadas. Una partícula libre tiene un espectro de energía continuo. Posición y momento son continuos. La cuantización aparece cuando una ecuación de onda se resuelve sujeta a condiciones de contorno, del mismo modo que una cuerda sujeta admite solo ciertos modos estacionarios. Liga un electrón a un protón y las energías permitidas se vuelven discretas, a una escala fijada por la energía de Rydberg, 13,605 693 122 990(15) eV en la evaluación CODATA de 2022, conocida a alrededor de una parte en 10¹². La propia energía de ionización del estado fundamental del hidrógeno es algo menor — el NIST la tabula en 109 678,7717 cm⁻¹, es decir 13,598 433 eV — porque la masa finita del protón y las correcciones relativistas y de electrodinámica cuántica la desplazan del valor idealizado.

El espín es la excepción que aclara la regla. No está cuantizado por una condición de contorno, no tiene detrás ninguna rotación clásica, y toma valores semienteros o enteros como propiedad intrínseca de la especie de partícula.

La luz lleva su propia versión de la misma idea. La energía intercambiada entre un campo y la materia llega en unidades de hf, razón por la cual es la energía del [fotón](/en/glossary/photon) — y no la intensidad — la que determina qué puede hacerle una radiación a una molécula, punto desarrollado banda a banda en [el espectro electromagnético y sus aplicaciones](/es/physics/quantum-basics/electromagnetic-spectrum-applications). Es también por lo que el techo de eficiencia de una celda solar de una sola unión lo fija la energética de los fotones y no la ingeniería, como expone [el límite termodinámico de la fotovoltaica](/es/physics/thermodynamics/thermodynamic-limits-of-photovoltaics).

## Variables conjugadas, no instrumentos torpes

La [relación de indeterminación](/en/glossary/uncertainty-relation) σₓσₚ ≥ ħ/2 se suele introducir con una historia de un microscopio que perturba un electrón. Esa historia da la desigualdad correcta por la razón equivocada, y la razón equivocada hay que desaprenderla después.

Las amplitudes de posición y de momento son transformadas de Fourier una de la otra. Un estado con dispersión estrecha en posición está, como cuestión matemática, construido a partir de un amplio rango de componentes de momento — el mismo compromiso que impide que un pulso de radio sea a la vez muy corto y muy próximo a una frecuencia única. La relación restringe el estado mismo. Se cumple antes de que nadie mida nada, y se cumpliría para un instrumento perfecto.

La perturbación de medida es un efecto aparte que también existe, y ambos se separaron experimentalmente en un interferómetro atómico donde la perturbación por la detección de camino era demasiado pequeña para explicar la pérdida de interferencia. La escala de ħ explica por qué nada de esto asoma en la vida ordinaria: ħ/2 vale unos 5,3 × 10⁻³⁵ J s, de modo que para cualquier objeto de laboratorio la precisión conjunta permitida en posición y momento es mucho más fina de lo que instrumento alguno podría aprovechar. La propia constante de Planck ya no se mide en absoluto: desde la revisión del SI de 2019 queda fijada por definición en 6,626 070 15 × 10⁻³⁴ J Hz⁻¹, y el kilogramo se realiza a través de ella.

## Dos familias de partículas, y todo lo que se sigue

Las partículas idénticas en mecánica cuántica lo son en sentido fuerte: ninguna medida distingue un electrón de otro, de modo que el estado debe comportarse de una manera definida cuando se intercambian dos. Solo dos comportamientos son consistentes. Los estados simétricos describen **bosones**, que llevan espín entero; los estados antisimétricos describen **fermiones**, que llevan espín semientero.

La antisimetría tiene una consecuencia inmediata — dos fermiones no pueden ocupar el mismo estado, el principio de exclusión de Pauli — y una parte enorme del mundo observable descansa en ella. La estructura de capas atómicas y por tanto la tabla periódica se siguen de ahí. También la presión de degeneración electrónica que sostiene una enana blanca, y también el llenado de bandas de energía que decide si un sólido conduce, asunto de [la estructura de bandas en materiales](/es/physics/matter-radiation/materials-physics-and-semiconductors). Los bosones hacen lo contrario: pueden apilarse en un mismo estado, que es lo que un haz láser y un condensado de Bose-Einstein tienen en común. El inventario de partículas se parte por la misma línea, con quarks y leptones del lado fermiónico y los portadores de fuerza del lado bosónico; el resumen del modelo estándar del CERN presenta ese inventario y agrupa los portadores de fuerza como bosones.

## La decoherencia explica el límite clásico, pero no el resultado

Un sistema cuántico nunca está aislado. Se entrelaza con su entorno — moléculas de aire, fotones perdidos, la radiación térmica que él mismo emite — y una vez que el entorno guarda un registro de qué rama tomó el sistema, la interferencia entre ramas deja de ser observable en el sistema solo. Esta es la **[decoherencia](/en/glossary/decoherence)**, y es medible, no supuesta. Calentar moléculas de fullereno dentro de un interferómetro hasta que radien fotones térmicos destruye sus franjas de interferencia en una cantidad predecible, y la pérdida de visibilidad medida coincidió con la teoría microscópica de la decoherencia.

La decoherencia responde bien a una pregunta concreta: por qué los objetos grandes, cálidos y bien acoplados no muestran interferencia, sin necesitar modificación alguna de la teoría. No responde por qué un resultado particular es el que ocurre. Confundir ambas cosas es la exageración más común en las exposiciones divulgativas del tema. Todo en [fabricar una máquina con cúbits](/es/physics/quantum-basics/quantum-computing-fundamentals) está aguas abajo de esto: la disciplina entera es una lucha por posponer la decoherencia lo bastante para terminar un cálculo.

## Qué zanjaron los experimentos de Bell

El teorema de Bell de 1964 convirtió una disputa filosófica en un experimento: cualquier teoría en la que las propiedades estén determinadas localmente antes de la medida obedece una desigualdad que la mecánica cuántica viola. Siguieron dos generaciones de pruebas, cada una dejando abierto un supuesto.

El experimento de 2015 cerró los dos más difíciles a la vez, entrelazando espines de electrones en laboratorios separados 1,3 kilómetros con una fidelidad de estado estimada de 0,92 ± 0,03 y 245 ensayos, con una eficiencia de detección suficiente para evitar supuestos de muestreo justo y una separación bastante grande para imponer localidad. El rechazo del realismo local reportado fue al nivel de dos desviaciones típicas — un resultado genuino y modesto, y el artículo lo decía sin rodeos. Una colaboración posterior atacó el supuesto restante, que los ajustes de medida sean ellos mismos impredecibles, reclutando a unas 100 000 personas para generar 97 347 490 elecciones binarias en una ventana de doce horas el 30 de noviembre de 2016 y encaminándolas a trece experimentos en doce laboratorios de cinco continentes.

Lo que este cuerpo de trabajo establece es estrecho y firme: ninguna teoría local de variables ocultas reproduce las correlaciones observadas. Lo que no establece es cuál de las interpretaciones supervivientes es correcta, porque coinciden en todas las predicciones. Por eso el resumen honesto del campo es que el formalismo está fijado a diez cifras significativas mientras su interpretación sigue genuinamente abierta. El mismo control sobre sistemas cuánticos individuales que hace posibles estas pruebas es hoy una técnica de construcción de instrumentos por derecho propio, descrita en [los sensores cuánticos salen del laboratorio](/es/physics/quantum-basics/quantum-sensors-leaving-the-lab).

Un límite merece enunciarse explícitamente. Las reglas anteriores son las de la mecánica cuántica no relativista, un caso límite de la teoría cuántica de campos; la creación y aniquilación de partículas quedan fuera de ellas. Y ninguna versión de la teoría incorpora todavía la gravedad, razón por la cual las descripciones de aquí se quedan muy lejos de un relato completo de la naturaleza.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Valores de referencia e incertidumbres declaradas para la constante de Planck, la constante de estructura fina y la energía de Rydberg.
2. **NIST** — [Electron magnetic moment anomaly](https://physics.nist.gov/cgi-bin/cuu/Value?ae). El valor CODATA de 2022 y su incertidumbre típica relativa de 1,6 × 10⁻¹⁰.
3. **NIST** — [Redefining the kilogram](https://www.nist.gov/si-redefinition/kilogram-introduction). La revisión del SI de 2018-2019 y la fijación de la constante de Planck.
4. **Nature 526, 682 (2015)** — [Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres](https://www.nature.com/articles/nature15759). Separación, fidelidad del entrelazamiento, número de ensayos y fuerza de la violación reportada.
5. **Nature 557, 212 (2018)** — [Challenging local realism with human choices](https://www.nature.com/articles/s41586-018-0085-3). Escala y diseño del test de Bell distribuido que aborda el supuesto de libertad de elección.
6. **Nature 427, 711 (2004)** — [Decoherence of matter waves by thermal emission of radiation](https://www.nature.com/articles/nature02276). Acuerdo cuantitativo entre la pérdida medida de visibilidad y la teoría de la decoherencia.
7. **CERN** — [The Standard Model](https://home.cern/science/physics/standard-model/). Clasificación de las partículas de materia y los portadores de fuerza, y las lagunas reconocidas del modelo.
8. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Separación de la retroacción de medida respecto de la pérdida de interferencia.
9. **NIST** — [Quantum information science](https://www.nist.gov/quantum-information-science). Material de referencia sobre el control y la medición de sistemas cuánticos individuales.
10. **NIST** — [Basic atomic spectroscopic data: hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1.htm). La energía de ionización tabulada del hidrógeno neutro, 109 678,7717 cm⁻¹ (13,598 433 eV).
