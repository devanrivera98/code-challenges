import depositProfit from './depositProfit';

describe('depositProfit', () => {
  test('if this works', () => {
    const argument1 = 100;
    const argument2 = 20;
    const argument3 = 170;
    const testVariable1 = depositProfit(argument1, argument2, argument3);
    expect(testVariable1).toEqual(3);

  });
});
