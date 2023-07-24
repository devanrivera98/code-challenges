import { sortHeight } from './sort-by-height';

describe('sortHeight', () => {
  test('if this works', () => {
    const arr1 = [-1, 150, 190, 170, -1, -1, 160, 180];
    const testVariable1 = sortHeight(arr1);
    expect(testVariable1).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
  });
});
