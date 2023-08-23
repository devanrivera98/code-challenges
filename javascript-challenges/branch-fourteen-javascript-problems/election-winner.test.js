import electionWinner from './election-winner';

describe('electionWinner', () => {
  test('if this works', () => {
    const argument1 = [5, 1, 3, 4, 1];
    const argument2 = 0;
    const testVariable1 = electionWinner(argument1, argument2);
    expect(testVariable1).toEqual(1);
  });
});
