import { destroyer } from './seek-and-destroy';

describe('this will test seek-and-destroy', () => {
  test('if this function works', () => {
    const testItem1 = [1, 2, 3, 1, 2, 3];
    const testItem2 = 2;
    const testItem3 = 3;
    const resultString1 = destroyer(testItem1, testItem2, testItem3);
    expect(resultString1).toEqual([1, 1]);
  });
});
