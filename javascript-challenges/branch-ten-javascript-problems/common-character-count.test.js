import { commonCharacters } from './common-character-count';

describe('commonCharacters', () => {
  test('if this works', () => {
    const argument1 = 'aabcc';
    const argument2 = 'adcaa';
    const testVariable1 = commonCharacters(argument1, argument2);
    expect(testVariable1).toEqual(3);
  });
});
