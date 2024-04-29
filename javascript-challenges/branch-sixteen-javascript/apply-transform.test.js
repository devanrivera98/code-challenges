import applyTransform from './apply-transform';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [1, 2, 3];
    const argument2 = (n) => {
      return n + 1;
    };
    const testOutcome = applyTransform(argument1, argument2);
    expect(testOutcome).toEqual([2, 3, 4]);
  });
});
