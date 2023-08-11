import { arrayReplace } from './array-replace';

describe('arrayReplace', () => {
  test('if this works', () => {
    const argument1 = [3, 1];
    const testVariable1 = arrayReplace(argument1, 3, 9);
    expect(testVariable1).toEqual([9, 1]);

  });
});
