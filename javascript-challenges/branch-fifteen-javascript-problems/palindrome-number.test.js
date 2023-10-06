import palindromeNumber from './palindrome-number';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = 23432;

    const testOutcome = palindromeNumber(argument1);

    expect(testOutcome).toEqual(true);
  });
});
