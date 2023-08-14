import arrayMaxConsecutiveSum from './array-max-consecutive-sum';

describe('arrayMaxConsecutiveSum', () => {
  test('if this works', () => {
    const argument1 = [1, 3, 2, 4];
    const argument2 = 3;
    const testVariable1 = arrayMaxConsecutiveSum(argument1, argument2);
    expect(testVariable1).toEqual(9);

  });
});
