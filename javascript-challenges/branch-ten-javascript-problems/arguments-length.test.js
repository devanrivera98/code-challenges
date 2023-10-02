import { argumentLength } from './arguments-length';

describe('argument length', () => {
  test('if it works', () => {
    const testVariable = argumentLength({}, 15, null);
    expect(testVariable).toBe(3);
  });
});
