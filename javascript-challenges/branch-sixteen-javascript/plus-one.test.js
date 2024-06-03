import plusOne from './plus-one';

describe('plusone', () => {
  test('if this works', () => {
    const argument1 = [9];
    const testOutcome = plusOne(argument1);
    expect(testOutcome).toEqual([1, 0]);
  });
});
