import filterArray from './filter-arry';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [0, 10, 20, 30];
    const argument2 = (n) => {
      return n > 10;
    };
    const testOutcome = filterArray(argument1, argument2);
    expect(testOutcome).toEqual([20, 30]);
  });
});
