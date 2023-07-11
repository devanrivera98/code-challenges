import { chunckArrayOne } from './chunk-array-one';

describe('chunckArrayOne', () => {
  test('if this works', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const size = 1;
    const testVariable1 = chunckArrayOne(arr1, size);
    expect(testVariable1).toEqual([[1], [2], [3], [4], [5]]);
  });
});
