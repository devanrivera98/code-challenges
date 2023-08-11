export default function chessBoardCellColor(cell1, cell2) {
  console.log(cell1);
  const xRow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const yRow = [1, 2, 3, 4, 5, 6, 7, 8];
  if (yRow[1] % 2 === 0 || 1 % 2 !== 0) {
    console.log(true);
  }
}
