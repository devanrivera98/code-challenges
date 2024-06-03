import romanInteger from './roman-to-integer';

describe('RomanInteger', () => {
  test('this to work', () => {
    const argument = 'MCMXCIV';
    const testOutcome = romanInteger(argument);
    expect(testOutcome).toEqual(1994);
  });
});
