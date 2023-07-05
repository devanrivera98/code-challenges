import { multiplyRecursion } from './recursion-one';

describe('this to multiply recursion', () => {
  test('if this works', () => {
    const testVariable = multiplyRecursion([2, 7, 5, 4, 9], 2);
    expect(testVariable).toBe(70);
  });
});
