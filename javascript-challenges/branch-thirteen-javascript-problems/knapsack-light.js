export default function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let currentWeight = 0;
  let highestValue = 0;
  const possibleValues = {
    item1: { value: value1, weight: weight1 },
    item2: { value: value2, weight: weight2 }
  };
  if ((currentWeight + weight1) > maxW && (currentWeight + weight2) > maxW) {
    return currentWeight;
  }
  currentWeight += possibleValues.item1.weight;
  highestValue += possibleValues.item1.value;
  if (currentWeight + possibleValues.item2.weight <= maxW) {
    currentWeight += weight2;
    highestValue += value2;
  } else if (weight1 <= maxW && weight2 <= maxW) {
    highestValue = Math.max(value1, value2);
  } else if (weight1 <= maxW) {
    highestValue = value1;
  } else {
    highestValue = value2;
  }
  console.log(possibleValues.item1.value);
  return highestValue;
}

//    return Math.max(
// maxW >= weight1 && value1,
//   maxW >= weight2 && value2,
//   maxW >= weight1 + weight2 && value1 + value2
//     );
