import countMatches from './count-matches';

describe('countmatches', () => {
  test('if this works', () => {
    const argument1 = 7;
    const testOutcome = countMatches(argument1);
    expect(testOutcome).toEqual(6);
  });
});
