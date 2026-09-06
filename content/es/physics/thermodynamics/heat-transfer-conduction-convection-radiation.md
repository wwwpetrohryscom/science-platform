---
title: 'Transferencia de calor: tres mecanismos que escalan de forma distinta con la temperatura'
metaTitle: 'Transferencia de calor: conducción, convección y radiación'
excerpt: La conducción y la convección crecen aproximadamente al ritmo de la diferencia de temperatura; la radiación crece como la cuarta potencia de la temperatura absoluta. Esa diferencia de exponente decide qué mecanismo domina, y la respuesta cambia con la temperatura de trabajo.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-05'
readingTime: 8
tags:
  - heat-transfer
  - conduction
  - convection
  - thermal-radiation
  - emissivity
related:
  - laws-of-thermodynamics-explained
  - heat-engines-and-efficiency-limits
  - earth-energy-budget-and-the-second-law
  - solar-radiation-and-earth-energy-balance
pillar: laws-of-thermodynamics-explained
_bodyHash: f8666b1a
---

Tomemos una superficie a 500 K en un entorno a 300 K y elevémosla luego a 1,500 K. La diferencia de temperatura que impulsa la conducción y la convección se multiplica por seis. El flujo radiativo neto se multiplica por un factor de unos 93, de aproximadamente 3.1 kW m⁻² a 287 kW m⁻². Nada ha cambiado en los materiales; han cambiado los exponentes. La conducción y la convección están impulsadas por una *diferencia* de temperatura, y la radiación por la diferencia de cuartas potencias de la temperatura *absoluta*; ese desajuste explica por qué la vía de pérdida dominante es distinta en un criostato, en el muro de una casa y en la carcasa de una turbina.

La termodinámica fija en qué dirección se mueve la energía y cuánto trabajo puede extraerse por el camino, tal como [establecen las cuatro leyes](/es/physics/thermodynamics/laws-of-thermodynamics-explained), pero no le pone reloj al proceso. La velocidad es un asunto aparte, y solo dispone de tres mecanismos.

## Conducción: una ley de gradiente cuyo coeficiente no es una constante

La conducción transporta energía a través de un medio en reposo mediante colisiones moleculares o electrónicas. La ley de Fourier enuncia el flujo como proporcional al gradiente local de temperatura, siendo la constante de proporcionalidad la conductividad térmica, k. A través de una placa plana en régimen estacionario esto se reduce a un flujo kΔT/L, de modo que reducir a la mitad el espesor de un muro duplica su pérdida, y las capas en serie suman resistencias en lugar de conductancias.

La forma tan pulcra oculta cuánto trabajo está haciendo el coeficiente. La base de datos de materiales criogénicos del NIST publica, para el cobre libre de oxígeno, ajustes de curva válidos de 4 K a 300 K y declarados dentro del 1–2% de los datos subyacentes. Evaluados a 300 K, los ajustes dan unos 390–400 W m⁻¹ K⁻¹ para todos los grados de pureza de la tabla: a temperatura ambiente, el contenido de impurezas apenas importa. Evaluados a 20 K, los mismos ajustes dan unos 1.4 × 10³ W m⁻¹ K⁻¹ para una razón de resistencia residual de 50 y unos 6.6 × 10³ para una razón de 500. El mismo elemento, la misma ecuación y casi un factor de cinco entre dos lotes de cobre químicamente casi idénticos.

Las interfases complican aún más el cuadro. Dos sólidos presionados entre sí solo se tocan en las asperezas, de modo que una unión real soporta un salto de temperatura que ninguna conductividad volumétrica predice. En conjuntos laminados o atornillados, la resistencia de contacto suele ser el término mayor de la cadena, y por eso el diseño térmico que se detiene en las propiedades del material tiende a ser optimista.

## Convección: el mecanismo cuyo coeficiente se mide, no se deduce

La expresión de la convección — el flujo es igual a h por la diferencia de temperatura entre la superficie y el fluido — parece una ley física y está más cerca de una definición. El coeficiente de transferencia de calor h absorbe todo lo que la ecuación dejó fuera: velocidad del flujo, geometría, orientación, estado de la superficie, y la viscosidad, la densidad, la conductividad y el calor específico del fluido.

Como h no puede deducirse de primeros principios para geometrías realistas, se obtiene de correlaciones entre grupos adimensionales: el número de Nusselt a partir de los de Reynolds y Prandtl en flujo forzado, y a partir del de Rayleigh en convección libre. Esas correlaciones son ajustes a experimentos concretos en rangos concretos, y su exactitud es cuestión de decenas de por ciento antes que de por ciento. El margen de diseño en el dimensionado de intercambiadores de calor existe en buena medida por esto, y el modo de fallo consiste en usar una correlación fuera de la geometría o del régimen de flujo para el que fue ajustada.

La convección explica también casi todo lo que hace un aislante. Los aislantes fibrosos y las espumas funcionan sobre todo inmovilizando aire en poros lo bastante pequeños como para suprimir la circulación, no porque la matriz sólida conduzca mal; la cámara de gas sellada de una ventana se dimensiona lo bastante estrecha como para que el flujo impulsado por la flotabilidad no llegue a arrancar. Ensanche la cámara y la pérdida aumenta, aunque ahora haya más gas separando los vidrios.

## Radiación: la cuarta potencia cambia la aritmética

Toda superficie por encima del cero absoluto emite [radiación electromagnética](/es/physics/quantum-basics/electromagnetic-spectrum-applications) a un ritmo dado por la ley de Stefan–Boltzmann: εσT⁴, con σ = 5.670374419 × 10⁻⁸ W m⁻² K⁻⁴, un valor que el SI fija ahora de forma exacta porque se deduce de otras constantes definidas. El intercambio neto entre una superficie y su entorno va como la diferencia de cuartas potencias.

Del exponente se siguen dos consecuencias. Una superficie negra a 300 K emite unos 459 W m⁻², cifra que suena enorme hasta que se restan los 459 W m⁻² que llegan de vuelta desde un entorno a la misma temperatura; lo que importa es el neto, y un exceso de 10 K sobre el ambiente deja solo unos 64 W m⁻² netos — comparables a la convección libre en aire y, por tanto, nunca despreciables cerca de la temperatura ambiente. A 1,500 K la misma superficie emite unos 287 kW m⁻², y la radiación deja de competir con los otros dos mecanismos y pasa a dominarlos.

La otra palanca es espectral. La **emisividad** es la razón entre la emisión de una superficie y la de un emisor perfecto, y la ley de Kirchhoff la vincula a la absortividad en la misma longitud de onda y en la misma dirección. Como la luz solar llega en longitudes de onda cortas mientras que una superficie próxima a la temperatura ambiente emite en el infrarrojo térmico, puede construirse un recubrimiento que refleje la primera banda y radie con fuerza en la segunda. La demostración más nítida es un aparato descrito en [*Nature Communications*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/) que alcanzó una media de 37 °C por debajo de la temperatura del aire ambiente a lo largo de un ciclo completo de día y noche, con un descenso máximo de 42 °C, usando un emisor sintonizado a la ventana atmosférica de 8–13 µm. También muestra lo débil que es el efecto frente a la competencia: el montaje necesitó una cámara de vacío a 10⁻⁶ Torr y diez pantallas de radiación concéntricas para que la conducción y la convección no borraran el déficit radiativo. La versión sin blindaje de esa misma física es la cubierta fría, para la que la Agencia de Protección Ambiental de Estados Unidos informa de reducciones máximas de la temperatura interior de 1.2–3.3 °C en edificios sin aire acondicionado y de reducciones del pico de demanda de refrigeración del 11–27% en los que sí lo tienen.

| Mecanismo | Qué lo impulsa | Cómo escala | Qué se cambia para controlarlo |
| --- | --- | --- | --- |
| Conducción | Gradiente de temperatura en un medio | Lineal en ΔT, inverso en la longitud del camino | Conductividad, espesor, calidad del contacto |
| Convección | Diferencia superficie-fluido más flujo | Lineal en ΔT, con h fijado por el flujo y la geometría | Velocidad, tamaño de la cámara, cambio de fase |
| Radiación | Temperatura absoluta de ambas superficies | Diferencia de cuartas potencias | Emisividad, selectividad espectral, factor de vista |

## Dos sistemas en los que la mezcla es todo el diseño

El álabe de una turbina de gas es un problema de conducción y convección creado por un deseo termodinámico. El rendimiento del ciclo aumenta con la temperatura de entrada, de modo que programas financiados por el Departamento de Energía de Estados Unidos han fijado como objetivo temperaturas de entrada a turbina de 1,700 °C o más — a sabiendas por encima del punto de fusión de la aleación del sustrato — y se apoyan en refrigeración por transpiración y por celosía para sostener un gradiente a lo largo de unos pocos milímetros de metal. El componente sobrevive no porque el material tolere la temperatura del gas, sino porque el transporte está diseñado; el motivo de eficiencia que hay detrás se expone en [las máquinas térmicas y sus límites de eficiencia](/es/physics/thermodynamics/heat-engines-and-efficiency-limits).

Un planeta es el caso opuesto. Dentro del sistema terrestre, la convección y la evaporación mueven la mayor parte de la energía: la contabilidad de la NASA da unos 340 W m⁻² que llegan al tope de la atmósfera en promedio global, con un 29% reflejado, un 23% absorbido en la atmósfera y un 48% en la superficie; de ese mismo total entrante, un 25% vuelve a salir de la superficie por evaporación y un 5% por térmicas, frente a un 17% neto en forma de infrarrojo. Pero el espacio es un vacío, así que ninguno de esos mecanismos puede llevar un julio más allá del tope de la atmósfera: la única salida es la radiación, desde un cuerpo que desde fuera parece una superficie a unos −20 °C. Cómo funciona el detalle espectral de esa emisión se aborda en [la transferencia radiativa a través de una atmósfera](/es/physics/climate-physics/radiative-transfer-explained) y en el encuadre termodinámico del [balance energético planetario](/es/physics/thermodynamics/earth-energy-budget-and-the-second-law), mientras que la mitad entrante del balance se trata en [la radiación solar y el balance energético de la Tierra](/es/physics/energy/solar-radiation-and-earth-energy-balance).

## Lo que los coeficientes no pueden resolver

Cada mecanismo lleva un tipo distinto de incertidumbre, y no son intercambiables. La conductividad está bien medida para materiales puros en condiciones controladas, pero el valor en servicio de un aislante deriva con la humedad, la compresión y el envejecimiento, y el comportamiento real de un cerramiento suele quedar fijado por los puentes térmicos antes que por el valor impreso en el producto. Los coeficientes convectivos heredan la dispersión de los experimentos a los que se ajustaron las correlaciones. La emisividad es el eslabón más débil de los tres: un único número de ficha técnica es un promedio sobre longitud de onda, ángulo y estado de la superficie, y la oxidación o el polvo pueden desplazarlo de forma sustancial a lo largo de la vida de un componente.

Hay además una frontera en la que la propia ley de Fourier deja de aplicarse. A escalas de longitud comparables al recorrido libre medio de los [portadores de energía](/es/physics/energy/hydrogen-as-an-energy-carrier), o en tiempos más cortos que su tiempo de dispersión, el transporte se vuelve balístico en lugar de difusivo, y una descripción impulsada por gradientes deja de sostenerse. Ese régimen importa para la microelectrónica y para los termoeléctricos de capa fina, y recuerda que las tres expresiones anteriores son aproximaciones de medio continuo con un dominio de validez, y no leyes en el sentido en que lo son las de la termodinámica.

## Sources

1. **NIST Cryogenic Technologies Group** — [Material properties: OFHC copper](https://trc.nist.gov/cryogenics/materials/OFHC%20Copper/OFHC_Copper_rev1.htm). Ajustes de curva de la conductividad térmica de 4 K a 300 K según la razón de resistencia residual, con la exactitud declarada del ajuste.
2. **NIST CODATA** — [Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma). Valor exacto y unidades empleados aquí para los cálculos de flujo radiativo.
3. **NASA Earth Observatory** — [Climate and Earth's energy budget](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/). Reparto en promedio global de la energía solar entrante y vías energéticas de la superficie.
4. **Nature Communications** — [Radiative cooling to deep sub-freezing temperatures through a 24-h day–night cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC5159822/). Magnitudes del enfriamiento por debajo del ambiente y vacío y blindaje necesarios para aislar el término radiativo.
5. **U.S. Environmental Protection Agency** — [Using cool roofs to reduce heat islands](https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands). Efectos medidos de las cubiertas de alta reflectancia sobre la temperatura interior y el pico de demanda de refrigeración.
6. **U.S. Department of Energy, Office of Fossil Energy and Carbon Management** — [Integrated transpiration and lattice cooling systems developed by additive manufacturing with ODS alloys](https://www.osti.gov/biblio/1923377). Temperaturas de entrada a turbina fijadas como objetivo por encima del punto de fusión del sustrato y enfoque de refrigeración usado para alcanzarlas.
