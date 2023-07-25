import { isIpv4Address } from './is-ipv4-address';

describe('isIpv4Address', () => {
  test('if this works', () => {
    const argument1 = '64.233.161.00';
    const argument2 = '1';
    const testVariable1 = isIpv4Address(argument1);
    const testVariable2 = isIpv4Address(argument2);
    expect(testVariable1).toEqual(false);
    expect(testVariable2).toEqual(false);
  });
});
