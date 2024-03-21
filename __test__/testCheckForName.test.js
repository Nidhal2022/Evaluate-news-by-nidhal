//code source https://learn.udacity.com/nanodegrees/nd0011-mtcit-oman/parts/cd0430/lessons/6aa33808-0079-4675-babc-76e2b62e3b7f/concepts/23934f89-1209-4b18-a657-d52481105161
import { checkForName } from "../src/client/js/nameChecker"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
// The test() function has two arguments - a string description, and an actual test as a callback function.  
test("Testing the checkForName() function", () => {
      // Define the input for the function, if any, in the form of variables/array
      // Define the expected output, if any, in the form of variables/array
      // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
      // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
      expect(checkForName).toBeDefined();
})});