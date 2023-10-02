import { allLongestStrings } from './all-longest-strings';

describe('allLongestStrings', () => {
  test('if this works', () => {
    const variable1 = ['aba', 'aa', 'ad', 'vcd', 'aba'];
    const testVariable1 = allLongestStrings(variable1);
    expect(testVariable1).toEqual(['aba', 'vcd', 'aba']);
  });
});
