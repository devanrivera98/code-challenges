export default function bishopPawn(bishop, pawn) {
  if (bishop[0] === pawn[0]) {
    return false;
  }
  function calculateColor(piece) {
    const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const columnIndex = column.indexOf(piece[0]);
    const rowIndex = row.indexOf(piece[1]);

    if ((columnIndex % 2 === 0 && rowIndex % 2 === 0) || (columnIndex % 2 !== 0 && rowIndex % 2 !== 0)) {
      return 'black';
    } else {
      return 'white';
    }
  }

  const bishopColor = calculateColor(bishop);
  const pawnColor = calculateColor(pawn);

  return bishopColor === pawnColor;
}
