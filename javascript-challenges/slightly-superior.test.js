
import { isFirstSuperior } from './slightly-superior';

describe('this', () => {
  test('isFirstSuperior returns true', () => {
    expect(isFirstSuperior(['a', 'd', 'c'], ['a', 'b', 'c'])).toBe(true);
  });
});
