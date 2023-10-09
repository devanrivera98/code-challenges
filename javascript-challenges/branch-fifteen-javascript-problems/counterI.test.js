import CounterI from './counter';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = 10;
    const testOutcome = CounterI(argument1);

    expect(testOutcome).toEqual([10, 11, 12]);
  });
});
