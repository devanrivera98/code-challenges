import deleteDigit from './delete-digit';

describe('deleteDigit', () => {
  test('if this works', () => {
    const argument = 1001;
    const testVariable = deleteDigit(argument);
    expect(testVariable).toEqual(101);
  });
});
