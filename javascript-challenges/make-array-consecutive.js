export function makeArrayConsecutive(statues) {
  const lowestOrder = statues.sort((a, b) => a - b);
  console.log('this is the array in order', lowestOrder);
  let statuesNeeeded = 0;
  for (let i = 0; i < lowestOrder.length - 1; i++) {
    if (lowestOrder[i + 1] !== lowestOrder[i] + 1) {
      lowestOrder.splice(i + 1, 0, lowestOrder[i] + 1);
      statuesNeeeded += 1;
    }
  }
  return statuesNeeeded;
}
