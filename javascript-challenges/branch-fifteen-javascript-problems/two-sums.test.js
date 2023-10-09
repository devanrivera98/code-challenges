import twoSum from './two-sum';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [2, 7, 11, 15];
    const argument2 = 9;
    const argument3 = [2, 7, 11, 15];
    const argument4 = 9;
    const testOutcome = twoSum(argument1, argument2);
    const testOutcome2 = twoSum(argument3, argument4);

    expect(testOutcome).toEqual([0, 1]);
    expect(testOutcome2).toEqual([0, 1]);
  });
});
