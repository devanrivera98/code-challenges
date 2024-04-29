import panlindrome from './panlindrome';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = -121;
    const testOutcome = panlindrome(argument1);
    expect(testOutcome).toEqual(false);
  });
});
