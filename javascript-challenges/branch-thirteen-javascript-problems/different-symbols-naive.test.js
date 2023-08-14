import differentSymbolsNaive from './different-symbols-naive';

describe('differentSymbolsNaive', () => {
  test('if this works', () => {
    const argument1 = 'cabca';
    const testVariable1 = differentSymbolsNaive(argument1);
    expect(testVariable1).toEqual(3);

  });
});
