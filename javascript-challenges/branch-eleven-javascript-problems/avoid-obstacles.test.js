import { avoidObstacles } from './avoid-obstacles';

describe('avoidObstacles', () => {
  test('if this works', () => {
    const argument1 = [1, 4, 10, 6, 2];
    const testVariable1 = avoidObstacles(argument1);
    expect(testVariable1).toEqual(7);
  });
});
