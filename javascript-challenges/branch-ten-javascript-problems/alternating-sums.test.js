import { alternatingSums } from './alternating-sums';

describe('alternatingSums', () => {
  test('if this works', () => {
    const argument1 = [50, 60, 60, 45, 70];
    const testVariable1 = alternatingSums(argument1);
    expect(testVariable1).toEqual([180, 105]);
  });
});
