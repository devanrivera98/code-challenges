import validParentheses from './valid-parentheses';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = '()[]{}';

    const testOutcome = validParentheses(argument1);

    expect(testOutcome).toEqual(true);
  });
});
