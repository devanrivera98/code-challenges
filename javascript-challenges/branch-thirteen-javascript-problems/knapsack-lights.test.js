import knapsackLight from './knapsack-light';

describe('knapsackLight', () => {
  test('if this works', () => {
    const argument1 = 5;
    const argument2 = 3;
    const argument3 = 7;
    const argument4 = 4;
    const argument5 = 6;
    const testVariable1 = knapsackLight(argument1, argument2, argument3, argument4, argument5);
    expect(testVariable1).toEqual(7);
  });
});
