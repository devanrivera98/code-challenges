import functionComposition from './function-composition';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = (a, b, c) => (a + b + c);
    const testOutcome = functionComposition(argument1);
    expect(testOutcome).toEqual([{ calls: 1, value: 6 }]);
  });
});
