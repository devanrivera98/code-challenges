export default function chessBoardCellColor(cell1, cell2) {
  const xRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const yRow = [1, 2, 3, 4, 5, 6, 7, 8];
  let cell1Value = '';
  let cell2Value = '';

  const xPosition1 = xRow.indexOf(cell1[0]);
  const yPosition1 = yRow.indexOf(Number(cell1[1]));
  // console.log(xPosition1);
  // console.log(yPosition1);
  const xPosition2 = xRow.indexOf(cell2[0]);
  const yPosition2 = yRow.indexOf(Number(cell2[1]));
  // console.log(xPosition2);
  // console.log(yPosition2);

  if ((xPosition1 % 2 !== 0 && yPosition1 % 2 === 0) || (xPosition1 % 2 === 0 && yPosition1 % 2 !== 0)) {
    cell1Value = 'white';
  } else {
    cell1Value = 'black';
  }

  if ((xPosition2 % 2 !== 0 && yPosition2 % 2 === 0) || (xPosition2 % 2 === 0 && yPosition2 % 2 !== 0)) {
    cell2Value = 'white';
  } else {
    cell2Value = 'black';
  }

  if (cell1Value === cell2Value) {
    return true;
  } else {
    return false;
  }

}
