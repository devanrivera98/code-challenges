import { evenDigitsOnly } from './even-digits-only';

describe('evenDigitsOnly', () => {
  test('if this works', () => {
    const argument1 = 642386;
    const testVariable1 = evenDigitsOnly(argument1);
    expect(testVariable1).toEqual(false);

  });
});
