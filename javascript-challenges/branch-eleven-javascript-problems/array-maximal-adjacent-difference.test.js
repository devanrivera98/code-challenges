import { arrayMaximalAdjacentDifference } from './array-maximal-adjacent-difference';

describe('arrayMaximalAdjacentDifference', () => {
  test('if this works', () => {
    const argument1 = [-1, 4, 10, 3, -2];

    const testVariable1 = arrayMaximalAdjacentDifference(argument1);
    expect(testVariable1).toEqual(7);
  });
});
