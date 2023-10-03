import reduceTransform from './array-reduce-transformation';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [1, 2, 3, 4];
    const argument2 = function sum(accum, curr) { return accum + curr * curr; }
    const argument3 = 100;
    const testOutcome = reduceTransform(argument1, argument2, argument3);
    expect(testOutcome).toEqual(130);
  });
});
