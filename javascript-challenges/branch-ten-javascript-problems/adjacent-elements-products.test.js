import { adjacentElements } from './adjacent-element-product';

describe('adjacentElements test', () => {
  test('which pair is the highest', () => {
    const testVariable1 = [3, 6, -2, -5, 7, 3];
    const testVariable2 = [1, 2, 3, 0];
    const resultVariable1 = adjacentElements(testVariable1);
    const resultVariable2 = adjacentElements(testVariable2);
    expect(resultVariable1).toBe(21);
    expect(resultVariable2).toBe(6);
  });
});
