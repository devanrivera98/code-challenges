import { areTheySimilar } from './are-they-similar';

describe('areTheySimilar', () => {
  test('if this works', () => {
    const argument1 = [1, 2, 1, 2];
    const argument2 = [2, 2, 1, 1];
    const testVariable1 = areTheySimilar(argument1, argument2);
    expect(testVariable1).toEqual(true);
  });
});
