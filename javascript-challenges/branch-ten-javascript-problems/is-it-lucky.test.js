import { isLucky } from './is-it-lucky';

describe('isLucky', () => {
  test('if this works', () => {
    const argument1 = 1230;
    const testVariable1 = isLucky(argument1);
    expect(testVariable1).toEqual(true);
  });
});
