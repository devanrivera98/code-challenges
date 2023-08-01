import { variableName } from './variable-name';

describe('variableName', () => {
  test('if this works', () => {
    const argument1 = 'va[riable0';
    const testVariable1 = variableName(argument1);
    expect(testVariable1).toEqual(false);

  });
});
