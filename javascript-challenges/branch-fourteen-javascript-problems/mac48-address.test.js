import macAddress from './mac48-address';

describe('macAddress', () => {
  test('if this works', () => {
    const argument1 = '00-1B-63-84-45-E6';
    const testVariable1 = macAddress(argument1);
    expect(testVariable1).toEqual(true);
  });
});
