import { addBorder } from './add-border';

describe('addBorder', () => {
  test('if this works', () => {
    const argument1 = ['aa',
      '**',
      'zz'];
    const argument2 = ['wzy**'];
    const testVariable1 = addBorder(argument1);
    const testVariable2 = addBorder(argument2);
    expect(testVariable1).toEqual(['****',
      '*aa*',
      '****',
      '*zz*',
      '****']);
    expect(testVariable2).toEqual(['*******',
      '*wzy***',
      '*******']);
  });
});
