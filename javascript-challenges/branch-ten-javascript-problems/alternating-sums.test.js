import { alternatingSums } from './alternating-sums';

describe('alternatingSums', () => {
  test('if this works', () => {
    const argument1 = [82, 97, 50, 92, 91, 96, 92, 62, 74, 70, 61, 68, 84, 59, 69, 70, 95, 46, 82, 72, 58, 73, 65, 45, 59, 77, 77, 49, 93, 49, 58, 46, 61, 46, 84, 56, 63, 53, 99, 98, 45, 84, 100, 47, 80, 53, 47, 84, 48, 64, 69, 95, 78, 60, 63, 88, 77, 50, 71, 75, 92, 69, 86, 67, 63, 81, 67, 52, 74, 89, 46, 71, 100, 52, 94, 65, 78, 92, 96, 69, 67, 94, 58, 100, 54, 53, 69, 46, 56, 98, 50, 48, 61, 79, 90, 94, 66, 53, 76, 48];
    const testVariable1 = alternatingSums(argument1);
    expect(testVariable1).toEqual([3618, 3444]);
  });
});
