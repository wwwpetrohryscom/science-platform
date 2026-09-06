---
title: 'Humidity and why heat and moisture combine: the physics behind a heat index'
metaTitle: 'Humidity: the physics behind a heat index'
excerpt: Air temperature alone does not say how hot a place is to be in, because the last route for shedding heat is evaporation and evaporation depends on the vapour gradient. Every combined index is an attempt to state that in one number, and every one hides its assumptions.
type: expert
author: physics-energy-desk
publishedDate: '2026-09-05'
updatedDate: '2026-09-05'
readingTime: 5
tags:
  - humidity
  - heat-index
  - atmospheric-physics
  - measurement
related:
  - atmospheric-physics-explained
  - atmospheric-structure-and-lapse-rate
  - heat-limits-and-the-wet-bulb-threshold
  - heat-stress-and-thermoregulatory-limits
_bodyHash: 2a598650
pillar: atmospheric-physics-explained
---

A body warmer than the air loses heat by conduction, convection and radiation. A body cooler than the air gains heat by all three, and has only evaporation left. That asymmetry is why [atmospheric physics](/en/physics/climate-physics/atmospheric-physics-explained) has to supply two variables rather than one before a temperature can be interpreted as a condition.

## What wet-bulb temperature actually is

The wet-bulb temperature is the lowest temperature reachable by evaporating water into a parcel of air at constant pressure. Operationally it is what a thermometer reads with a wet wick over the bulb, ventilated: evaporation cools the bulb until the cooling balances the heat arriving from the air, and where it settles depends on how much more water vapour the air can hold.

It is therefore a physical limit on evaporative cooling rather than a comfort scale. In saturated air, the wet bulb equals the dry bulb and evaporative cooling is unavailable at any rate.

That is the property that makes it the right variable for tolerance limits, and it is why [heat limits are stated in wet-bulb terms](/en/ecology/climate-change/heat-limits-and-the-wet-bulb-threshold) rather than in air temperature.

## What a heat index is instead

The operational index most people encounter is a different construct. The US National Weather Service defines the heat index as "a measure of how hot it really feels when relative humidity is factored in with the actual air temperature", and gives a worked case: at 96 °F with 65% relative humidity, the heat index is 121 °F.

That is a twenty-five degree difference between the temperature and the index at one humidity, which is a good demonstration of how much information the bare temperature omits.

The index is not a physical temperature. It is a mapping from two measured variables onto an equivalent-feeling temperature, calibrated against a model of a person, and the model carries assumptions that the printed number does not.

## The assumptions, stated

The NWS is explicit about two of them, and both matter in practice.

**Shade and light wind.** The index assumes "shady, light wind conditions". Direct sun changes the answer substantially: "exposure to full sunshine can increase heat index values by up to 15°F."

**Wind is not always helpful.** The service warns that "strong winds, particularly with very hot, dry air, can be extremely hazardous." Above skin temperature, moving air delivers heat rather than removing it, and it accelerates dehydration — so the everyday assumption that a breeze cools breaks down exactly where it matters most.

A single number that presumes shade and calm, published for a population that will spend part of the day in sun and wind, is doing something useful and something misleading at once. The useful part is comparability across days; the misleading part is that the reader treats it as an exposure measurement.

## Why any combined index has this problem

An index compresses several variables into one, and the compression is lossy in a way that depends on which variable is doing the work.

**The mapping is model-dependent.** Different countries use different heat indices, calibrated on different assumptions about clothing, activity and physiology, so the same weather produces different index values in different places. The number is not comparable across jurisdictions even though it looks like a temperature.

**The reference person is implicit.** A heat index tuned to a healthy adult understates risk to an older or ill population, and nothing in the number says so.

**Extrapolation beyond the fitted range is silent.** Indices were fitted over historical conditions. Applied to conditions outside that range, they continue to return numbers, and the numbers continue to look like temperatures.

None of this argues against combined indices, which are more informative than temperature alone. It argues for reading them as what they are: a compressed summary with a calibration, in the same sense that any [derived index](/en/ecology/earth-observation/ndvi-explained) is.

## Sources

1. **NOAA National Weather Service** — [Heat index](https://www.weather.gov/safety/heat-index). The definition, the shade and light-wind assumption, the up-to-15 °F sunshine correction, the hot-dry-wind warning, and the 96 °F / 65% / 121 °F example.
2. **Temperature (PMC)** — [Why not 35°C? Reasons for reductions in limits of human thermal tolerance](https://pmc.ncbi.nlm.nih.gov/articles/PMC11583582/). Why wet-bulb temperature is the physically meaningful limit variable.
3. **US EPA** — [Learn about heat islands](https://www.epa.gov/heatislands/learn-about-heat-islands). The urban modification of the same surface energy balance.
