import functionComposition from './function-composition';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [x => x + 1, x => x * x, x => 2 * x];
    const initialX = 4;

    // const composedFunction = functionComposition(argument1); // Returns a function
    // const testOutcome = composedFunction(initialX); // Invokes the returned function with initialX
    // THE BELOW IS THE SAME AS THE COMMENT OUT LINE JUST CLEANER 

    const testOutcome = functionComposition(argument1)(initialX);

    expect(testOutcome).toEqual(65);
  });
});
