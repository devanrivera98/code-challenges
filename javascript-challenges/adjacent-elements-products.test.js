import { adjacentElements } from './adjacent-element-product';

describe('adjacentElements test', () => {
  test('which pair is the highest', () => {
    const testVariable = [3, 6, -2, -5, 7, 3];
    const resultVariable = adjacentElements(testVariable);
    expect(resultVariable).toBe(21);
  });
});
