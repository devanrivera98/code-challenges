import chessBoardCellColor from './chess-board-cell-color';

describe('chessBoardCellColor', () => {
  test('if this works', () => {
    const argument1 = 'B3';
    const argument2 = 'H8';
    const argument3 = 'C8';
    const argument4 = 'H8';
    const testVariable1 = chessBoardCellColor(argument1, argument2);
    const testVariable2 = chessBoardCellColor(argument3, argument4);
    expect(testVariable1).toEqual(false);
    expect(testVariable2).toEqual(false);

  });
});
