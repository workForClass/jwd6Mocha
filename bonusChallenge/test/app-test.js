// Step 1. First and foremost, set up mocha. Make sure you are in the bonusChallenge folder!
// How to: Remember to npm init, npm install mocha -D, add script test line to package.json
// Follow the Google doc steps of how you did in the activity folder if you forget.

//Import assert
const assert = require("assert");

//Import functions from app.js
const { fizzBuzz, gatherNamesOf } = require("../app");

describe("tests for the fizzBuzz function", () => {});

/*
  * Step 2. Create unit tests for FizzBuzz. 
  You should create an unit test for each functionality of the FizzBuzz function. 
  Unit tests to write: 
    1. it should return Fizz when the value is multiple of 3 but not of 5
    2. it should return Buzz when the value is multiple of 5 but not of 3
    3. it should return FizzBuzz when the value is multiple of 3 and 5
    4. should return the number given when the value is not multiple of 3 or 5
  NOTE: After each unit test, use it to guide you on what code you need to write in app.js 
  to pass the test and make sure it passes (run npm test) before writing the next it test.
  Don't forget to use the steps of setup, exercise and verify to guide you in writing tests. 
*/

describe("tests for the gatherNamesOf function", () => {});

/* Step 3. Create unit tests for the gatherNamesOf function. Unit tests to write:
    1. It should should return an array
    2. It should give me the same output length as the input
    3. It should give me the property name value of the object passed in
  NOTE: After each unit test, use it to guide you on what code you need to write in app.js to 
  pass the test and make sure it passes (run npm test) before writing the next it test.
  * CHALLENGE: use beforeEach method to write a more concise test code and refactor code that gets repeated in each test.
 */
