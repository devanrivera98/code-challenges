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

// alternative solution

// function solution(matrix) {
//   // Initialize the variable to store the sum
//   var r = 0;

//   // Iterate over the columns
//   for (var j = 0; j < matrix[0].length; j++) {
//     // Iterate over the rows in the current column
//     for (var i = 0; i < matrix.length; i++) {
//       // Check if the current element is 0
//       if (matrix[i][j] === 0) {
//         // If the element is 0, exit the inner loop
//         break;
//       } else {
//         // If the element is not 0, add it to the sum
//         r += matrix[i][j];
//       }
//     }
//   }

//   // Return the final sum
//   return r;
// }

matrixSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
