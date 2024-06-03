import largestOdd from './largest-odd-number';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = '5223454';
    const testOutcome = largestOdd(argument1);
    expect(testOutcome).toEqual('522345');
  });
});
