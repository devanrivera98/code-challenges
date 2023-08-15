export default function growingPlants(upSpeed, downSpeed, desiredHeight) {
  let numberOfDays = 0;
  let currentCount = 0;
  while (currentCount < desiredHeight) {
    currentCount += upSpeed;
    numberOfDays++;
    if (currentCount >= desiredHeight) {
      return numberOfDays;
    }
    currentCount -= downSpeed;
  }
}
