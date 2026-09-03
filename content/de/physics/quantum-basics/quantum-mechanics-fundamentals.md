---
title: 'Quantenmechanik: die Arbeitsregeln, ohne die Philosophie'
metaTitle: 'Quantenmechanik: die Arbeitsregeln'
excerpt: Die Quantentheorie legt physikalische Konstanten auf zehn signifikante Stellen fest, während ihre Deutung offen bleibt. Diese Seite stellt die Arbeitsregeln dar — Amplituden, Observablen, Quantisierung, Unschärfe, Spinstatistik, Dekohärenz — und markiert, wo die echten Lücken liegen.
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
Als Vorhersageinstrument beurteilt, ist die Quantenmechanik die am strengsten geprüfte Theorie der Physik. Die CODATA-Auswertung von 2022 gibt die Anomalie des magnetischen Moments des Elektrons mit 1,159 652 180 46(18) × 10⁻³ an, einer relativen Standardunsicherheit von 1,6 × 10⁻¹⁰. Die Feinstrukturkonstante, die die Stärke der elektromagnetischen Wechselwirkung bestimmt, ist in derselben Größenordnung festgelegt, 7,297 352 5643(11) × 10⁻³. Was an der Quantentheorie auch ungeklärt sein mag, ihre Arithmetik ist nicht der ungeklärte Teil.

Ungeklärt ist, was diese Arithmetik beschreibt. Das sind getrennte Fragen, und diese Seite hält sie getrennt: zuerst die Arbeitsregeln, dann die Nähte, dort markiert, wo sie auftreten.

## Der Zustand ist eine Liste von Amplituden

Ein Quantenzustand ordnet jedem möglichen Messergebnis eine komplexe Zahl zu — eine **Amplitude**. Die Wahrscheinlichkeit eines Ergebnisses ist das Betragsquadrat seiner Amplitude. Strukturell entscheidend ist die Reihenfolge dieser beiden Operationen: Amplituden werden zuerst addiert und danach quadriert, sodass Beiträge sich auslöschen können. Klassische Wahrscheinlichkeiten, weil nicht negativ, löschen sich nie aus. Jeder spezifisch quantenhafte Effekt geht auf diese eine Asymmetrie zurück.

Eine **Superposition** ist ein einzelner Zustand, dessen Amplitude sich über mehrere Ergebnisse verteilt. Sie ist kein Objekt, das zwei Orte einnimmt, und sie ist keine Unkenntnis darüber, an welchem Ort das Objekt wirklich ist. Beide Lesarten scheitern an demselben Befund: Sie sagen vorher, die Ergebnisstatistik sei ein gewichtetes Mittel der getrennten Fälle, und die beobachtete Statistik enthält Interferenzterme, die kein solches Mittel hervorbringt. Die Experimente, die diesen Schluss erzwingen, sind in [was die Doppelspaltexperimente tatsächlich zeigen](/de/physics/quantum-basics/wave-particle-duality-explained) dargestellt.

Die Amplitudensprache legt auch fest, was „die Wellenfunktion breitet sich aus" bedeutet. Ausbreitung ist eine Aussage darüber, wo die Amplitude Träger hat, nicht über eine sich verdünnende Substanz. Ein einzelner Nachweis ist stets ein einzelnes, lokalisiertes Ereignis.

## Observablen und die Naht bei der Messung

Jede messbare Größe wird durch einen Operator dargestellt. Die Ergebnisse, die eine Messung liefern kann, sind dessen Eigenwerte, und die Wahrscheinlichkeit jedes einzelnen gibt die Bornsche Regel. Zwischen Messungen entwickelt sich der Zustand nach der Schrödinger-Gleichung, die deterministisch, linear und umkehrbar ist.

Die beiden Hälften passen nicht offensichtlich zusammen. Unitäre Entwicklung macht aus einer Superposition nie ein bestimmtes Ergebnis; die Messregel tut genau das, probabilistisch und irreversibel. Die Theorie postuliert beides und leitet keines aus dem anderen ab. Das ist das **Messproblem**, und es ist eine echte und keine rhetorische Lücke — aber eine Lücke in der Deutung, nicht in der Vorhersage. Kein Experiment hat einen Fall gefunden, in dem die Bornsche Regel die falsche Statistik liefert.

## Woher die Quantisierung kommt — und woher nicht

Der Name führt in die Irre, denn die meisten Größen der Theorie sind nicht quantisiert. Ein freies Teilchen hat ein kontinuierliches Energiespektrum. Ort und Impuls sind kontinuierlich. Quantisierung tritt auf, wenn eine Wellengleichung unter Randbedingungen gelöst wird, so wie eine eingespannte Saite nur bestimmte stehende Moden zulässt. Bindet man ein Elektron an ein Proton, werden die erlaubten Energien diskret, auf einer Skala, die die Rydberg-Energie setzt: 13,605 693 122 990(15) eV in der CODATA-Auswertung von 2022, bekannt auf etwa ein Teil in 10¹². Die Ionisierungsenergie des Wasserstoffgrundzustands selbst ist etwas kleiner — das NIST tabelliert sie mit 109 678,7717 cm⁻¹, also 13,598 433 eV —, weil die endliche Protonenmasse sowie relativistische und quantenelektrodynamische Korrekturen sie vom idealisierten Wert wegschieben.

Der Spin ist die Ausnahme, die die Regel klärt. Er wird nicht durch eine Randbedingung quantisiert, hat keine klassische Rotation hinter sich und nimmt halb- oder ganzzahlige Werte als intrinsische Eigenschaft der Teilchenart an.

Licht trägt seine eigene Fassung derselben Idee. Die zwischen Feld und Materie ausgetauschte Energie kommt in Einheiten von hf, weshalb die Energie des [Photons](/en/glossary/photon) — und nicht die Intensität — bestimmt, was Strahlung mit einem Molekül anstellen kann; ein Punkt, den [das elektromagnetische Spektrum und seine Anwendungen](/de/physics/quantum-basics/electromagnetic-spectrum-applications) über die Bänder hinweg entfaltet. Es ist auch der Grund, weshalb die Wirkungsgradobergrenze einer Einfachsolarzelle von der Photonenenergetik und nicht von der Technik gesetzt wird, wie [die thermodynamische Grenze der Photovoltaik](/de/physics/thermodynamics/thermodynamic-limits-of-photovoltaics) darlegt.

## Konjugierte Variablen, keine unbeholfenen Instrumente

Die [Unschärferelation](/en/glossary/uncertainty-relation) σₓσₚ ≥ ħ/2 wird meist über eine Geschichte von einem Mikroskop eingeführt, das ein Elektron stört. Diese Geschichte liefert die richtige Ungleichung aus dem falschen Grund, und der falsche Grund muss danach wieder verlernt werden.

Orts- und Impulsamplituden sind Fourier-Transformierte voneinander. Ein Zustand mit schmaler Ortsverteilung ist, rein mathematisch, aus einem breiten Bereich von Impulskomponenten aufgebaut — derselbe Kompromiss, der einen Radiopuls daran hindert, zugleich sehr kurz und sehr nah an einer einzelnen Frequenz zu sein. Die Relation beschränkt den Zustand selbst. Sie gilt, bevor irgendjemand irgendetwas misst, und sie gälte für ein perfektes Instrument.

Messstörung ist ein davon getrennter Effekt, den es ebenfalls gibt, und beide wurden experimentell in einem Atominterferometer auseinandergezogen, in dem die Störung durch die Wegdetektion zu klein war, um den Interferenzverlust zu erklären. Die Größenordnung von ħ erklärt, warum davon im Alltag nichts sichtbar wird: ħ/2 beträgt etwa 5,3 × 10⁻³⁵ J s, sodass für jedes Laborobjekt die erlaubte gemeinsame Genauigkeit in Ort und Impuls weit feiner ist, als irgendein Instrument nutzen könnte. Die Planck-Konstante selbst wird gar nicht mehr gemessen — seit der SI-Revision von 2019 ist sie per Definition auf 6,626 070 15 × 10⁻³⁴ J Hz⁻¹ festgelegt, und das Kilogramm wird über sie realisiert.

## Zwei Teilchenfamilien und alles, was daraus folgt

Identische Teilchen sind in der Quantenmechanik in einem starken Sinn identisch: Keine Messung unterscheidet ein Elektron von einem anderen, weshalb sich der Zustand beim Vertauschen zweier davon auf bestimmte Weise verhalten muss. Nur zwei Verhaltensweisen sind konsistent. Symmetrische Zustände beschreiben **Bosonen**, die ganzzahligen Spin tragen; antisymmetrische Zustände beschreiben **Fermionen**, die halbzahligen Spin tragen.

Antisymmetrie hat eine unmittelbare Folge — zwei Fermionen können nicht denselben Zustand besetzen, das Pauli-Ausschlussprinzip — und ein enormer Teil der beobachtbaren Welt ruht darauf. Der Schalenaufbau der Atome und damit das Periodensystem folgen daraus. Ebenso der Entartungsdruck der Elektronen, der einen Weißen Zwerg trägt, und ebenso die Füllung der Energiebänder, die entscheidet, ob ein Festkörper leitet — Gegenstand von [Bandstruktur in Materialien](/de/physics/matter-radiation/materials-physics-and-semiconductors). Bosonen tun das Gegenteil: Sie können sich in einem Zustand häufen, was ein Laserstrahl und ein Bose-Einstein-Kondensat gemeinsam haben. Das Teilcheninventar selbst teilt sich entlang derselben Linie, mit Quarks und Leptonen auf der Fermionenseite und den Kraftträgern auf der Bosonenseite; die CERN-Zusammenfassung des Standardmodells legt dieses Inventar dar und gruppiert die Kraftträger als Bosonen.

## Dekohärenz erklärt den klassischen Grenzfall, aber nicht das Ergebnis

Ein Quantensystem ist nie isoliert. Es verschränkt sich mit seiner Umgebung — Luftmolekülen, Streuphotonen, der Wärmestrahlung, die es selbst aussendet — und sobald die Umgebung festhält, welchen Zweig das System genommen hat, ist Interferenz zwischen den Zweigen am System allein nicht mehr beobachtbar. Das ist **[Dekohärenz](/en/glossary/decoherence)**, und sie ist messbar statt angenommen. Erhitzt man Fullerenmoleküle in einem Interferometer, bis sie thermische Photonen abstrahlen, zerstört das ihre Interferenzstreifen um einen vorhersagbaren Betrag, und der gemessene Sichtbarkeitsverlust stimmte mit der mikroskopischen Dekohärenztheorie überein.

Dekohärenz beantwortet eine bestimmte Frage gut: warum große, warme, gut angekoppelte Objekte keine Interferenz zeigen, ohne dass die Theorie geändert werden müsste. Sie beantwortet nicht, warum gerade ein bestimmtes Ergebnis eintritt. Beides zu verwechseln ist die häufigste Übertreibung in populären Darstellungen des Themas. Alles am [Bau einer Maschine aus Qubits](/de/physics/quantum-basics/quantum-computing-fundamentals) hängt hiervon ab: Die ganze Disziplin ist ein Kampf darum, die Dekohärenz lange genug hinauszuzögern, um eine Rechnung zu beenden.

## Was die Bell-Experimente entschieden haben

Bells Theorem von 1964 verwandelte einen philosophischen Streit in ein Experiment: Jede Theorie, in der Eigenschaften vor der Messung lokal festgelegt sind, gehorcht einer Ungleichung, die die Quantenmechanik verletzt. Zwei Generationen von Tests folgten, jede ließ eine Annahme offen.

Das Experiment von 2015 schloss die beiden schwierigsten zugleich: Es verschränkte Elektronenspins in 1,3 Kilometer voneinander entfernten Laboren mit einer geschätzten Zustandstreue von 0,92 ± 0,03 und führte 245 Versuche durch, mit ausreichend hoher Nachweiseffizienz, um Annahmen fairer Stichprobennahme zu vermeiden, und ausreichend großem Abstand, um Lokalität zu erzwingen. Die berichtete Zurückweisung des lokalen Realismus lag auf dem Niveau von zwei Standardabweichungen — ein echtes und bescheidenes Ergebnis, und die Arbeit sagte das unumwunden. Eine spätere Kollaboration griff die verbleibende Annahme an, dass die Messeinstellungen selbst unvorhersagbar seien, indem sie rund 100 000 Menschen anwarb, am 30. November 2016 in einem Zwölf-Stunden-Fenster 97 347 490 binäre Entscheidungen zu erzeugen, und diese an dreizehn Experimente in zwölf Laboren auf fünf Kontinenten leitete.

Was dieser Arbeitskörper belegt, ist eng und fest: Keine lokale Theorie verborgener Variablen reproduziert die beobachteten Korrelationen. Was er nicht belegt, ist, welche der überlebenden Deutungen zutrifft, denn sie stimmen in jeder Vorhersage überein. Deshalb lautet die ehrliche Zusammenfassung des Feldes, dass der Formalismus auf zehn signifikante Stellen festgelegt ist, während seine Deutung wirklich offen bleibt. Dieselbe Kontrolle über einzelne Quantensysteme, die diese Tests möglich macht, ist heute eine eigenständige Technik des Instrumentenbaus, beschrieben in [Quantensensoren verlassen das Labor](/de/physics/quantum-basics/quantum-sensors-leaving-the-lab).

Eine Grenze gehört ausdrücklich genannt. Die obigen Regeln sind die der nichtrelativistischen Quantenmechanik, eines Grenzfalls der Quantenfeldtheorie; Erzeugung und Vernichtung von Teilchen liegen außerhalb. Und keine Fassung der Theorie schließt bislang die Gravitation ein, weshalb die Darstellungen hier weit hinter einer vollständigen Beschreibung der Natur zurückbleiben.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Referenzwerte und angegebene Unsicherheiten für die Planck-Konstante, die Feinstrukturkonstante und die Rydberg-Energie.
2. **NIST** — [Electron magnetic moment anomaly](https://physics.nist.gov/cgi-bin/cuu/Value?ae). Der CODATA-Wert von 2022 und seine relative Standardunsicherheit von 1,6 × 10⁻¹⁰.
3. **NIST** — [Redefining the kilogram](https://www.nist.gov/si-redefinition/kilogram-introduction). Die SI-Revision 2018–2019 und die Festlegung der Planck-Konstante.
4. **Nature 526, 682 (2015)** — [Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres](https://www.nature.com/articles/nature15759). Abstand, Verschränkungstreue, Zahl der Versuche und Stärke der berichteten Verletzung.
5. **Nature 557, 212 (2018)** — [Challenging local realism with human choices](https://www.nature.com/articles/s41586-018-0085-3). Umfang und Aufbau des verteilten Bell-Tests zur Annahme der Wahlfreiheit.
6. **Nature 427, 711 (2004)** — [Decoherence of matter waves by thermal emission of radiation](https://www.nature.com/articles/nature02276). Quantitative Übereinstimmung zwischen gemessenem Sichtbarkeitsverlust und Dekohärenztheorie.
7. **CERN** — [The Standard Model](https://home.cern/science/physics/standard-model/). Einteilung der Materieteilchen und Kraftträger sowie die eingestandenen Lücken des Modells.
8. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Trennung von Messrückwirkung und Interferenzverlust.
9. **NIST** — [Quantum information science](https://www.nist.gov/quantum-information-science). Referenzmaterial zur Kontrolle und Messung einzelner Quantensysteme.
10. **NIST** — [Basic atomic spectroscopic data: hydrogen](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1.htm). Die tabellierte Ionisierungsenergie des neutralen Wasserstoffs, 109 678,7717 cm⁻¹ (13,598 433 eV).
