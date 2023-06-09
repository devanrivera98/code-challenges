// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum <= 1 || sum === 1.0) {
    return `${sum} ohm`;
  } else {
    return `${sum} ohms`;
  }
}

seriesResistance(1);
