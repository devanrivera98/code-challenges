import buildPalindrome from './build-palindrome';

describe('buildPalindrome', () => {
  test('if this works', () => {
    const argument1 = 'abcdc';
    const testVariable1 = buildPalindrome(argument1);
    expect(testVariable1).toEqual('abcdcba');
  });
});
