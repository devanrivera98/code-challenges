import { chunckArrayOne } from './chunk-array-one';

describe('chunckArrayOne', () => {
  test('if this works', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 9, 6, 3, 2];
    const size1 = 1;
    const size2 = 3;
    const testVariable1 = chunckArrayOne(arr1, size1);
    const testVariable2 = chunckArrayOne(arr2, size2);
    expect(testVariable1).toEqual([[1], [2], [3], [4], [5]]);
    expect(testVariable2).toEqual([[1, 9, 6], [3, 2]]);
  });
});
