import { classifyStrings } from './classify-strings';

describe('classifyStrings', () => {
  test('if this works', () => {
    const argument1 = 'a?u';
    const testVariable1 = classifyStrings(argument1);
    expect(testVariable1).toEqual('mixed');
  });
});
