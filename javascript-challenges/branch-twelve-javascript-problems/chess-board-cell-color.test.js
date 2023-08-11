import chessBoardCellColor from './chess-board-cell-color';

describe('chessBoardCellColor', () => {
  test('if this works', () => {
    const argument1 = 'B3';
    const argument2 = 'H8';
    const testVariable1 = chessBoardCellColor(argument1, argument2);
    expect(testVariable1).toEqual(false);

  });
});
