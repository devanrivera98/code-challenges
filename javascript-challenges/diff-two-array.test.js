import { diffArray } from './diff-two-array';

describe('diffArray', () => {
  test('if there is an entry that doesnt match', () => {
    const testArray1 = ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
    const testArray2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
    const resultArray1 = diffArray(testArray1, testArray2);
    const testArray3 = [1, 'calf', 3, 'piglet'];
    const testArray4 = [1, 'calf', 3, 4];
    const resultArray2 = diffArray(testArray3, testArray4);
    expect(resultArray1).toEqual(['pink wool']);
    expect(resultArray2).toEqual(['piglet', 4]);
  });
});
