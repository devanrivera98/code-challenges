import { palindromeRearranging } from './palindrome-rearranging';
describe('palindromeRearranging', () => {
  test('if this works', () => {
    const argument1 = 'aabb';
    const testVariable1 = palindromeRearranging(argument1);
    expect(testVariable1).toEqual(true);
  });
});
