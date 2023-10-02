import { matrixSum } from './matrix-elements-sum';

describe('this test matrixSum', () => {
  test('if this creates the sum', () => {
    const testParams = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
    const resultOutput = matrixSum(testParams);
    expect(resultOutput).toBe(9);
  });
});
