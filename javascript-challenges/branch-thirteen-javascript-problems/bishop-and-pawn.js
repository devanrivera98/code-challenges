export default function bishopPawn(bishop, pawn) {
  const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
  let bishopColor = '';
  let pawnColor = '';
  if (bishop[0] === pawn[0]) {
    return false;
  }
  if ((column.indexOf(bishop[0]) % 2 === 0 && row.indexOf(bishop[1]) % 2 === 0) || (column.indexOf(bishop[0]) % 2 !== 0 && row.indexOf(bishop[1]) % 2 !== 0)) {
    console.log(column.indexOf(bishop[0]) % 2 === 0);
    console.log(row.indexOf(bishop[1]) % 2 === 0);
    bishopColor = 'black';
  } else {
    bishopColor = 'white';
  }
  console.log(bishopColor);
  if ((column.indexOf(pawn[0]) % 2 === 0 && row.indexOf(pawn[1]) % 2 === 0) || (column.indexOf(pawn[0]) % 2 !== 0 && row.indexOf(pawn[1]) % 2 !== 0)) {
    console.log(column.indexOf(pawn[0]) % 2 === 0);
    console.log(row.indexOf(pawn[1]) % 2 === 0);
    pawnColor = 'black';
  } else {
    pawnColor = 'white';
  }

  return bishopColor === pawnColor;
}
