import beautifulString from './beautiful-string';

describe('differentSymbolsNaive', () => {
  test('if this works', () => {
    const argument1 = 'bbbaacdafe';
    const argument2 = 'bbc';
    const testVariable1 = beautifulString(argument1);
    const testVariable2 = beautifulString(argument2);
    expect(testVariable1).toEqual(true);
    expect(testVariable2).toEqual(false);
  });
});
