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

// Convert the time to hours for consistent unit
const timeInHours = time / 3600;

// Calculate the new distance
const distance2 = distance + (velocity * timeInHours);
if (distance2 < 0) {
  distance2 = 0;
  console.log("Error: Distance cannot be negative. Set distance to 0.");
};

// Calulate the remaining fuel
const rf = fuel - (fbr * time);
if (rf < 0) {
  rf = 0;
  console.log("Error: Fuel cannot be negative. Set remaining fuel to 0.");
};

// Calculate the new velocity based on acceration
const calcNewVel = (velocity, acceleration, time) => {
  const newVelocity = velocity + (acceleration * (time / 3600)); // Time in hours
  if (newVelocity < 0) {
    newVelocity = 0;
    console.log("Error: Velocity cannot be negative. Set velocity to 0.");
  }
  return newVelocity;
};

const vel2 = calcNewVel(velocity, acceleration, time);  //Calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2.toFixed(2)} km/h`); // Returns the value up to two decimal points
console.log(`Corrected New Distance: ${distance2.toFixed(2)} km`); // Returns the value up to two decimal points
console.log(`Corrected Remaining Fuel: ${rf.toFixed(2)} kg`); // Returns the value up to two decimal points

