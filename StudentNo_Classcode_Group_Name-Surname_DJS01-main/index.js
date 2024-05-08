/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)
// Conversion factor for acceleration
const conversionFactor = { m_s2_to_kmh: 3.6 }; // 1 m/s^2 ≈ 3.6 km/h

// Convert the time to hours for consistent unit
const distance2 = distance + (velocity * (time / 3600)); //Calculates new distance

// Calulate the remaining fuel
const rf = fuel - (fbr * time); //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocity, acceleration, time) => {
  const acc2 = acceleration * conversionFactor.m_s2_to_kmh; // Access the conversion factor property
  return velocity + (acc2 * time)
}

const vel2 = calcNewVel(velocity, acceleration, time);  //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${distance2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






