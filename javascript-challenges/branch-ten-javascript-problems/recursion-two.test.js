import { powerRecursion } from './recursion-two';

describe('power function with exponents', () => {
  test('if this works', () => {
    const testVariable = powerRecursion(2, 4);
    expect(testVariable).toBe(16);
  });
});
