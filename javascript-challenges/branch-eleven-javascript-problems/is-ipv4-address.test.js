import { isIpv4Address } from './is-ipv4-address';

describe('arrayMaximalAdjacentDifference', () => {
  test('if this works', () => {
    const argument1 = [-1, 4, 10, 3, -2];
    const testVariable1 = isIpv4Address(argument1);
    expect(testVariable1).toEqual(7);
  });
});
