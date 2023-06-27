// any room with 0 will not be added to the total and any rooms below the room with 0 as well

export function matrixSum(matrix) {
  let totalSum = 0;
  console.log(matrix[2]);
  console.log(matrix.length);
  for (let i = 0; i < matrix[0].length; i++) {
    let j = 0;
    while (j < matrix.length && matrix[j][i] !== 0) {
      totalSum += matrix[j][i];
      console.log(totalSum);
      j++;
    }
  }
  console.log('this is the final', totalSum);
  return totalSum;
}

matrixSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
