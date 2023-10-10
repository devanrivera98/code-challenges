import containsDuplicate from './contains-duplicate';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [1, 2, 3, 1];

    // const composedFunction = functionComposition(argument1); // Returns a function
    // const testOutcome = composedFunction(initialX); // Invokes the returned function with initialX
    // THE BELOW IS THE SAME AS THE COMMENT OUT LINE JUST CLEANER

    const testOutcome = containsDuplicate(argument1);

    expect(testOutcome).toEqual(true);
  });
});
