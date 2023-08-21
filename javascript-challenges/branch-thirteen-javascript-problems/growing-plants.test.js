import growingPlants from './growing-plants';

describe('growingPlants', () => {
  test('if this works', () => {
    const argument1 = 100;
    const argument2 = 10;
    const argument3 = 910;
    const testVariable1 = growingPlants(argument1, argument2, argument3);
    expect(testVariable1).toEqual(10);
  });
});
