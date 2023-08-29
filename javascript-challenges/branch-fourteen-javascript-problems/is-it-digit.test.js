import { isDigit } from './is-it-digit';

describe('isDigits', () => {
  test('if this works', () => {
    const argument1 = '9';
    const testVariable1 = isDigit(argument1);
    expect(testVariable1).toEqual(true);
  });
});
