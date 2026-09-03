---
title: 'Wave-particle duality: what the experiments actually show'
excerpt: Nothing switches between being a wave and being a particle. Interference builds up one detection at a time, the de Broglie wavelength of a baseball is 10⁻³⁴ m, and which-path information destroys fringes for a reason that is not momentum kicks.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-02'
updatedDate: '2026-09-02'
readingTime: 6
tags:
  - matter-waves
  - interference
  - complementarity
  - de-broglie-wavelength
related:
  - quantum-mechanics-fundamentals
  - electromagnetic-spectrum-applications
  - quantum-computing-fundamentals
  - quantum-sensors-leaving-the-lab
pillar: quantum-mechanics-fundamentals
_bodyHash: cb818bd6
---

The phrase is a hundred years old and it has outlived its usefulness. "Wave-particle duality" was coined to describe a crisis — light behaving like a wave in one apparatus and like a stream of corpuscles in another — and it dissolved once a single formalism, in place by the late 1920s, turned out to predict both. Nothing in the modern theory switches between two natures. The [working rules of quantum mechanics](/en/physics/quantum-basics/quantum-mechanics-fundamentals) assign amplitudes to outcomes; the apparatus decides which outcomes you are counting. What follows is what the experiments show, and what they show is more specific than the slogan.

## The fringes are built one detection at a time

The double-slit result is usually described as a beam splitting and recombining. That description is dispensable, and the experiment that removes it is the one worth knowing about. Turn the source down until at most one particle is inside the apparatus at a time. Each arrival is a single, localised spot on the detector — never a smeared-out wave. Accumulate enough of them and the interference pattern appears in the distribution of spots.

So the interference is not a property of a beam. It is a property of the amplitude for one particle to reach one place by more than one route, and it survives being spread over hours of arrivals. This has now been demonstrated for objects far heavier than electrons. Diffraction of C₆₀ from a material grating was reported in 1999, and the authors noted the point that makes the result interesting: a fullerene is nearly a classical body, with hundreds of internal vibrational modes available to leak information to its surroundings. Two decades later the same laboratory tradition ran a two-metre Talbot–Lau interferometer with functionalised oligoporphyrin molecules of mass beyond 25,000 Da containing up to 2,000 atoms, recovering more than 90 per cent of the expected fringe visibility.

## What forced the photon

Two results in the first quarter of the twentieth century made the granularity of light unavoidable, and they did it in different ways.

The photoelectric effect showed that the maximum kinetic energy of ejected electrons depends on the frequency of the incident light and not on its intensity, with a sharp threshold frequency below which no electrons emerge however bright the source. A continuous wave picture predicts the opposite: enough energy delivered slowly should eventually liberate an electron at any frequency. The observation says the exchange happens in units of hf. Visible light spans roughly 1.77 eV at 700 nm to 3.10 eV at 400 nm, which is the range that matters for photochemistry and for the detectors and cells described in [band structure and semiconductors](/en/physics/matter-radiation/materials-physics-and-semiconductors).

Compton scattering closed off the remaining escape route. When X-rays scatter from electrons, the scattered wavelength is longer than the incident wavelength, by an amount that depends only on scattering angle. The scale is set by the electron Compton wavelength, 2.426 310 235 38(76) × 10⁻¹² m in the CODATA evaluation, and the shift reaches its maximum of twice that value — 4.853 pm — for backscattering at 180°. That is a billiard-ball calculation: energy and momentum conserved between two particles. No wave model produces an angle-dependent wavelength change of that form.

## De Broglie wavelengths, with the numbers attached

Every particle with momentum p has a wavelength λ = h/p. The reason matter waves are not part of everyday experience is entirely a matter of magnitude, and the magnitudes are worth seeing side by side. The values below follow from the 2022 CODATA constants.

| Object | Kinetic energy or speed | de Broglie wavelength |
|---|---|---|
| Electron | 100 eV | 123 pm |
| Thermal neutron | 25 meV | 1.81 Å |
| Oligoporphyrin molecule, > 25,000 Da | interferometer beam | 53 fm |
| Baseball, 0.145 kg | 40 m/s | 1.1 × 10⁻³⁴ m |
| Adult walking, 70 kg | 1.4 m/s | 6.8 × 10⁻³⁶ m |

The first two lines explain why electron microscopy and neutron diffraction work: those wavelengths are comparable to atomic spacings, so crystals act as gratings, which is the same resolution logic that governs [optical imaging and diffraction limits](/en/physics/mechanics-waves/optics-and-light-explained). The last two explain why nobody diffracts a baseball. Interference requires an aperture or grating period not enormously larger than the wavelength, and 10⁻³⁴ m is roughly twenty orders of magnitude below the diameter of an atomic nucleus.

The third line is the one that surprises people. The 25 kDa molecules interfered at a wavelength of about 53 fm — five orders of magnitude smaller than the molecules themselves. A matter wave does not need to be as big as the object; it needs to be resolvable by the grating.

## Complementarity is a quantitative trade-off, not a switch

The textbook statement is that obtaining which-path information destroys interference. The quantitative statement is stronger and more useful: path distinguishability and fringe visibility obey an inequality, so partial path information costs partial visibility, continuously. Recent work on integrated photonic chips has extended this into three-way conservation relations in which path predictability, interference visibility and entanglement with a second system sum to a fixed value, tested for both two-path and multi-path devices.

That third term is where the common explanation goes wrong. The usual story attributes the loss of fringes to the uncertainty principle: a which-path detector localises the particle, imparting an uncontrolled momentum kick that smears the pattern. An atom-interferometer experiment in 1998 tested precisely this and found the back-action on the atom's momentum was far too small to account for the disappearance of the fringes. The interference is lost because the path detector becomes correlated — entangled — with the atom's motion, so the two paths no longer lead to the same final state of the whole system. Erase that correlation and the fringes return.

This is also why the loss is not mysterious in engineered systems. A qubit coupled to its environment is a which-path detector nobody wanted, which is the framing used in [qubits, error rates and useful machines](/en/physics/quantum-basics/quantum-computing-fundamentals).

## Why the slogan fails

"Sometimes a wave, sometimes a particle" implies an object with two modes and a rule for switching. Three features of the evidence contradict that reading. The transition is continuous rather than binary, as the visibility relations show. The single-particle experiments produce localised detections and an interference distribution in the same run, so there is no moment at which the object is behaving wave-like instead of particle-like. And the wavelength that appears in matter interference is a property of momentum, not of any spatial extent of the object — 53 fm for a molecule a hundred thousand times wider.

A better summary is that the amplitude formalism is the object of study, and "wave" and "particle" are two limiting regimes of what that formalism predicts when different questions are asked of it. Photons are not tiny bullets, and they are not classical field oscillations either; the same is true of electrons, neutrons and fullerenes, and it is why the [electromagnetic spectrum](/en/glossary/electromagnetic-spectrum) is best treated as one phenomenon.

## The ceiling on these experiments

Matter-wave interferometry has a mass limit, and the limit is set by decoherence rather than by any known failure of the theory. Heavier particles need slower beams, longer interferometers and better isolation, because coupling to stray gas, thermal photons and vibration grows with size. This is also why the results carry weight beyond demonstration: proposals that modify quantum mechanics by adding spontaneous localisation predict that interference should fail above some mass scale, and each heavier interference experiment pushes the allowed parameters of those models further out. The 25 kDa result was quoted as an order-of-magnitude gain in "macroscopicity" over its predecessors.

What none of this has done is exhibit a departure from quantum predictions. The honest position is that matter-wave interference has now been confirmed across more than seven orders of magnitude in particle mass, that the objects tested remain far lighter than anything visible, and that the extrapolation to macroscopic bodies is an inference rather than a measurement.

## Sources

1. **NIST** — [CODATA internationally recommended values of the fundamental physical constants](https://physics.nist.gov/cuu/Constants/index.html). Planck constant, electron and neutron masses, and the atomic mass constant used for the wavelength table.
2. **NIST** — [Compton wavelength](https://physics.nist.gov/cgi-bin/cuu/Value?ecomwl). The 2022 CODATA value underlying the maximum Compton shift.
3. **Nature 401, 680 (1999)** — [Wave–particle duality of C₆₀ molecules](https://www.nature.com/articles/44348). Diffraction of fullerenes at a material grating and the significance of internal degrees of freedom.
4. **Nature Physics 15, 1242 (2019)** — [Quantum superposition of molecules beyond 25 kDa](https://www.nature.com/articles/s41567-019-0663-9). Molecular mass, atom count, 53 fm de Broglie wavelength, fringe visibility and macroscopicity.
5. **Nature 395, 33 (1998)** — [Origin of quantum-mechanical complementarity probed by a 'which-way' experiment in an atom interferometer](https://www.nature.com/articles/25653). Evidence that path detection destroys interference through correlation rather than momentum transfer.
6. **Light: Science & Applications 14 (2025)** — [Universal conservation laws of the wave-particle-entanglement triad](https://pmc.ncbi.nlm.nih.gov/articles/PMC11814096/). Quantitative predictability–visibility–entanglement relations tested on a photonic chip.
7. **NIST** — [Physical reference data](https://www.nist.gov/pml/productsservices/physical-reference-data). Reference datasets for atomic and radiation constants.
