---
title: 'Quantum computing: qubits, error rates, and the distance to useful machines'
metaTitle: 'Quantum computing: qubits, error rates and the distance left'
excerpt: A 2025 surface-code result held one logical qubit on 101 physical qubits at 0.143 per cent error per cycle. Reading that number correctly explains both why the field is real and why the distance to a useful machine is measured in orders of magnitude.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 7
tags:
  - qubits
  - quantum-error-correction
  - decoherence
  - computing-hardware
related:
  - quantum-mechanics-fundamentals
  - wave-particle-duality-explained
  - quantum-sensors-leaving-the-lab
  - electromagnetic-spectrum-applications
pillar: quantum-mechanics-fundamentals
_bodyHash: 93d5ad7b
---

One number frames the whole field better than any roadmap. In a surface-code experiment reported in Nature in 2025, a 105-qubit superconducting processor devoted 101 physical qubits to a single distance-7 logical qubit, which then suffered 0.143 ± 0.003 per cent error per cycle of error correction and outlived its own best physical qubit by a factor of 2.4 ± 0.3. On the same team's extrapolation, pushing that logical error rate down to 10⁻⁶ by scaling alone would take a distance-27 patch of 1,457 physical qubits — more than fourteen times the count they used.

Both halves of that sentence are true at once, and most disagreement about quantum computing comes from quoting one half.

## Superposition is not parallel search

A qubit is a two-level quantum system whose state is described by amplitudes rather than a bit value, in exactly the sense set out in the [working rules of quantum mechanics](/en/physics/quantum-basics/quantum-mechanics-fundamentals). An n-qubit register carries 2ⁿ complex amplitudes, and that exponential is where the popular account stops. It should not, because a measurement of n qubits returns n classical bits and nothing else. The amplitudes are not readable.

What makes an algorithm work is interference: arranging the computation so that amplitudes leading to wrong answers cancel and amplitudes leading to right answers reinforce, before anything is measured. This is the same cancellation described in the [double-slit experiments](/en/physics/quantum-basics/wave-particle-duality-explained), applied deliberately. "Tries every possibility simultaneously" is not a simplification of this; it predicts speedups that do not exist, which is why it keeps producing overclaims about optimisation and machine learning.

Entanglement is the second resource. Correlations between qubits that have no classical counterpart are what allow an n-qubit state to be something other than n independent one-qubit states — and they are also what makes classical simulation of the machine hard, which is precisely the point.

## The platforms trade the same three quantities

Every hardware approach fights the same battle: hold coherence long enough, apply gates fast and accurately enough, and connect enough qubits together. No platform wins all three, and the published records sit orders of magnitude apart.

| Platform | Coherence in the cited work | Scale in the cited work | Distinguishing architectural feature |
|---|---|---|---|
| Superconducting transmons | Mean T₁ 68 µs, T₂,CPMG 89 µs | 105-qubit processor running a distance-7 surface code | Fixed two-dimensional grid; 1.1 µs error-correction cycle |
| Trapped ions | ≈ 5,500 s estimated for a single ¹⁷¹Yb⁺ qubit | A single-qubit memory, not a processor | Ions of one species are identical, so calibration is set by atomic physics |
| Neutral atoms | Not reported in the cited work | 280 physical qubits; 40 colour-code logical qubits | Reconfigurable connectivity with mid-circuit readout |

That table is deliberately not a ranking, and it should not be read as one. The three rows come from three different kinds of experiment — a full error-correction demonstration, a single-qubit memory record, and a logical-processor demonstration — and no published benchmark places them on a single axis.

The ion figure still deserves a second look, because it is the one most often quoted out of context. It is an inferred number rather than an observed one: 5,500 seconds is the time constant of an exponential decay fitted to measurements that ran out to 960 seconds. Taken at face value, roughly 5,500 seconds against a transmon's 68 microseconds is a ratio near 10⁸, and it does not convert into a comparable computational advantage. What matters is how many gate operations fit inside a coherence time, and ion gates are far slower than superconducting ones. Any two rows of that table trade something.

The neutral-atom work is notable for a third reason. Operating 280 physical qubits with logical-level control, it demonstrated improvement of a two-qubit logic gate as the surface-code distance was scaled from 3 to 7 — the same error-correction argument as the superconducting result, on an entirely different physical substrate. That two unrelated platforms reproduce the scaling behaviour is stronger evidence than either result alone.

## Error correction, and the overhead it imposes

Physical qubits cannot be copied, so classical redundancy is unavailable. The surface code instead spreads one logical qubit across a two-dimensional patch of physical qubits and repeatedly measures parity checks that reveal errors without revealing the encoded state.

The theory predicts a threshold: below some physical error rate, increasing the patch size suppresses logical errors exponentially. Above it, adding qubits makes things worse. The 2025 result measured the suppression factor directly at Λ = 2.14 ± 0.02 per increase of two in code distance, which is what "below threshold" looks like in data rather than in principle. Real-time decoding kept up, at an average latency of 63 µs for a distance-5 code over a million cycles with a 1.1 µs cycle time.

Two caveats travel with that result, and the authors state both. Exponential suppression is not free: reaching a 10⁻⁶ logical error rate by scaling alone would require a distance-27 patch of 1,457 physical qubits, and the syndrome data a decoder must process grows quadratically with distance. And exponential suppression is not unlimited: in repetition-code runs out to distance 29, the error rate stopped falling at around 10⁻¹⁰, a floor caused by rare correlated bursts occurring roughly once an hour. Rare correlated errors are a different engineering problem from ordinary noise, because they defeat codes designed for independent faults.

## Where a speedup is actually established

The strongest claims rest on a small set of structured problems.

Factoring and discrete logarithms have an exponential quantum speedup over the best known classical algorithms, which is the result that drives the cryptographic interest. Simulating quantum systems — electronic structure, reaction pathways, correlated materials — is the application the National Academies' assessment singles out as promising exponential gains, and it is the one where the problem's structure and the machine's structure genuinely match.

Unstructured search is the instructive contrast. Grover's algorithm solves it in O(√N) steps against a classical O(N), a quadratic gain, and that bound is optimal: no quantum algorithm does better on that problem. A quadratic speedup is a much weaker thing than an exponential one once error-correction overhead is charged against it. The same assessment notes that in the black-box setting, quantum algorithms require exponential time for NP-complete problems — so the broad claim that quantum machines will crack combinatorial optimisation is not supported by what is currently known.

It is worth being precise about the logical status of even the strong cases. These are speedups over the best classical algorithms known, not proofs that no fast classical algorithm exists.

## What happened after the 2019 supremacy claim

In 2019 a 53-qubit superconducting processor sampled from a random quantum circuit in about 200 seconds, and its authors estimated that the equivalent classical task would take roughly 10,000 years. That figure was a claim about the best classical algorithm known at the time, and classical simulation methods did not stand still.

The field's own follow-up makes the point without polemic. Work published in 2024 established that random circuit sampling passes through phase transitions as noise increases: above a critical error per cycle the output is trivialised by noise and becomes susceptible to classical spoofing, while below it the sampling task remains genuinely hard. The same paper reported a 67-qubit, 32-cycle experiment sitting in the low-noise phase, and argued that its computational cost lies beyond existing classical supercomputers.

Two things follow. A benchmark chosen because it is hard to simulate classically is not an application. And a supremacy claim is indexed to the best classical algorithm known on the day it is made, so it can weaken later without anyone having done anything wrong — which is why the runtime ratio matters less than the noise threshold the later work identified. Stating instrument performance in a way that survives this kind of revision is a discipline in itself, the subject of [how measurement uncertainty is evaluated](/en/physics/mechanics-waves/measurement-uncertainty-explained).

## The cryptographic timeline is already a policy question

Public-key cryptography is the one area where a future machine imposes present-day costs, because encrypted traffic captured now can be stored and decrypted later. NIST finalised its first three post-quantum standards on 13 August 2024 — FIPS 203 for key encapsulation, FIPS 204 and FIPS 205 for digital signatures — and encouraged system administrators to start integrating them immediately, on the grounds that full integration will take time.

That is a reasonable position even under conservative assumptions about hardware. The National Academies' 2019 assessment judged it "highly unexpected" that a machine capable of compromising RSA-2048 would be built within the following decade, while also stating that projecting the timeline for a large error-corrected machine is not currently possible. Those two statements are consistent, and together they describe the field accurately: the near term is bounded by evidence, the long term is not. That decade runs to 2029, which is a reason to treat the judgement as a reading of the evidence available in 2019 rather than as a forecast that has since been re-tested.

Below-threshold error correction was the outstanding obstacle of principle, and a superconducting surface-code memory has now crossed it; the neutral-atom processor shows the same improvement with increasing code distance on an unrelated substrate, though that work does not itself claim below-threshold operation. What is left is a scaling problem measured in orders of magnitude, and progress against it has been incremental rather than sudden. Precision instruments built on the same control techniques reached practical use first, as [quantum sensors leaving the lab](/en/physics/quantum-basics/quantum-sensors-leaving-the-lab) describes, and that ordering is worth keeping in mind: control over individual quantum systems became a working measurement technique well before it became a working computer.

## Sources

1. **Nature 638, 920 (2025)** — [Quantum error correction below the surface code threshold](https://www.nature.com/articles/s41586-024-08449-y). Λ = 2.14 ± 0.02, the distance-7 code error rate, coherence times, decoder latency, the distance-27 extrapolation and the repetition-code error floor.
2. **Nature 626, 58 (2024)** — [Logical quantum processor based on reconfigurable atom arrays](https://www.nature.com/articles/s41586-023-06927-3). Neutral-atom scale, logical qubit counts and surface-code distance scaling.
3. **Nature Communications 12, 233 (2021)** — [Single ion qubit with estimated coherence time exceeding one hour](https://www.nature.com/articles/s41467-020-20330-w). The ¹⁷¹Yb⁺ coherence figure and the previous record it replaced.
4. **Nature 574, 505 (2019)** — [Quantum supremacy using a programmable superconducting processor](https://www.nature.com/articles/s41586-019-1666-5). The 53-qubit experiment, the 200-second runtime and the original classical estimate.
5. **Nature 634, 328 (2024)** — [Phase transitions in random circuit sampling](https://www.nature.com/articles/s41586-024-07998-6). Noise-induced classical spoofing and the 67-qubit, 32-cycle experiment.
6. **National Academies of Sciences, Engineering, and Medicine (2019)** — [Quantum Computing: Progress and Prospects, quantum algorithms](https://www.nationalacademies.org/read/25196/chapter/5). Grover's O(√N) bound, NP-complete black-box limits and quantum simulation prospects.
7. **National Academies of Sciences, Engineering, and Medicine (2019)** — [Quantum Computing: Progress and Prospects, summary](https://www.nationalacademies.org/read/25196/chapter/2). The RSA-2048 timeline judgement and the statement on projecting large-machine timelines.
8. **NIST** — [NIST releases first 3 finalized post-quantum encryption standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards). FIPS 203, 204 and 205, the release date and the migration guidance.
