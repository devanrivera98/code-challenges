import { areEquallyStrong } from './are-equally-strong';

describe('areEquallyStrong', () => {
  test('if this works', () => {
    const argument1 = 15;
    const argument2 = 10;
    const argument3 = 15;
    const argument4 = 9;
    const testVariable1 = areEquallyStrong(argument1, argument2, argument3, argument4);
    expect(testVariable1).toEqual(false);
  });
});
