import { reverseParentheses } from './reverse-in-parentheses';

describe('reverseParentheses', () => {
  test('if this works', () => {
    const argument1 = ('(bar)');
    const testVariable1 = reverseParentheses(argument1);
    expect(testVariable1).toEqual('rab');
  });
});
