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
const conversionFactor = 12960 // converts m/s^2 to km/h^2 (km/h^2 * s^2/m)

// Convert the time to hours for consistent unit
const timeInHours = time / 3600;

// Calculate the new distance
const calculateDistance = (initialDistance, velocity, timeInHours) => {
  const distance2 = initialDistance + (velocity * timeInHours);
  if (distance2 < 0) {
    distance2 = 0;
    throw new Error("Distance cannot be negative. Set distance to 0.");
  };
  return distance2;
}


// Calulate the remaining fuel
const calculateRemainingFuel = (fuel, fbr, time) => {
  const remainingFuel = fuel - (fbr * time);
  if (remainingFuel < 0) {
    rf = 0;
    throw new Error("Fuel cannot be negative. Set remaining fuel to 0.");
  };
  return remainingFuel;
}



// Calculate the new velocity based on acceration
const calculateNewVelocity = (velocity, acceleration, time, conversionFactor) => {
  if (velocity < 0) {
    throw new Error("Velocity cannot be negative. Set velocity to 0.");
  }
  return velocity + (acceleration * conversionFactor * (time / 3600)); // Time in hours
};

try {
  const newDistance = calculateDistance(distance, velocity, timeInHours);
  const remainingFuel = calculateRemainingFuel(fuel, fbr, time);
  const newVelocity = calculateNewVelocity(velocity, acceleration, time, conversionFactor);

  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`); // Returns the value up to two decimal points
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`); // Returns the value up to two decimal points
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`); // Returns the value up to two decimal points
} catch (error) {
  console.error(error.message)
}



