import { timesTwo } from './functions';

/**
 *
 * NOTES
 *
 * use jest which is configured as part of create-react-app
 * give test name:
 *  - 1st argument "Multiplies by two" is the name of the test
 * pass test callback function
 * - 2nd argument contains what should be tested
 * use expect assertion to call the function with a certain number
 *  - assertion framework called expect()
 * use matcher function to tell us does four time two equal eight?
 *
 * test-driven development
 * - process of writing the test first, then watching them fail, then trying to get them to pass
 * - useful when planning our apps
 */

test('Multiplies by two', () => {
  expect(timesTwo(4)).toBe(8); // an assertion test
  // returns a pass or fail; it will return a pass when a function's output returns an expected value
});
