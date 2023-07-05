import { replicateRecursion } from './recursion-three';

describe('testing replicateRecursion', () => {
  it('test if this works', () => {
    const testVariable = replicateRecursion(3, 5);
    const test2Variable = replicateRecursion(-1, 5);
    expect(testVariable).toEqual([5, 5, 5]);
    expect(test2Variable).toEqual([]);
  });
});
