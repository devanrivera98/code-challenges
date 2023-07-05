import { replicateRecursion } from './recursion-three';

describe('testing replicateRecursion', () => {
  it('test if this works', () => {
    const testVariable = replicateRecursion(3, 5);
    expect(testVariable).toEqual([5, 5, 5]);
  });
});
