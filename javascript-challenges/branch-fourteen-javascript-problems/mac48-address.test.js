import macAddress from './mac48-address';

describe('macAddress', () => {
  test('if this works', () => {
    const argument1 = '12.34.56.78.9A.BC';
    const testVariable1 = macAddress(argument1);
    expect(testVariable1).toEqual(false);
  });
});
