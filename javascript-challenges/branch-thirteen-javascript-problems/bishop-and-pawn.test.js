import bishopPawn from './bishop-and-pawn';

describe('differentSymbolsNaive', () => {
  test('if this works', () => {
    const argument1 = 'a7';
    const argument2 = 'c3';
    const testVariable1 = bishopPawn(argument1, argument2);
    expect(testVariable1).toEqual(true);

  });
});
