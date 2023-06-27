// any room with 0 will not be added to the total and any rooms below the room with 0 as well

export function matrixSum(matrix) {
  let totalSum = 0;
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  for (let i = 0; i < numCols; i++) {
    let j = 0;
    while (j < numRows && matrix[j][i] !== 0) {
      totalSum += matrix[j][i];
      j++;
    }
  }
  return totalSum;
}

matrixSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
