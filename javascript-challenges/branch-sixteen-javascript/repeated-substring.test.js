import { repeatedSubstring } from './repeated-substring';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = 'abcabcabcabc';
    const testOutcome = repeatedSubstring(argument1);
    expect(testOutcome).toEqual(true);
  });
});
