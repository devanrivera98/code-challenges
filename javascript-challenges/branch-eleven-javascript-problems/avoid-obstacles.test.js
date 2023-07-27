import { avoidObstacles } from './avoid-obstacles';

describe('avoidObstacles', () => {
  test('if this works', () => {
    const argument1 = [1, 4, 10, 6, 2];
    const argument2 = [2, 3];
    const testVariable1 = avoidObstacles(argument1);
    const testVariable2 = avoidObstacles(argument2);
    expect(testVariable1).toEqual(7);
    expect(testVariable2).toEqual(4);
  });
});
