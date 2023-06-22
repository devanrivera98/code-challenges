import { diffArray } from './diff-two-array';

describe('diffArray', () => {
  test('if there is an entry that doesnt match', () => {
    const testArray1 = ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
    const testArray2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
    const resultArray = diffArray(testArray1, testArray2);
    expect(resultArray).toEqual(['pink wool']);
  });
});
