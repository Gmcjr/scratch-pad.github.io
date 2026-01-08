// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: MY FIRST TEST
 *
 * The point of this little exercise is to get you familar with how we role with
 * working on and submitting assignments. You'll code, save, and check the tests.
 * You can preview the index html file to see all the tests that are currently passing
 * or failing. Save your code and hit the refresh button to see the current failing
 * or passing test update.
 */

/**
 * Given an input value, print the value to the screen using console.log().
 * 
 * I: function takes any value as input
 * O: function prints the value to screen
 * C: function uses console.log()
 * E:
 */

function print(value) {
  // YOUR CODE BELOW HERE //
// take value as input and return value printed to screen using console.log()
return console.log(value);
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.print = print;
}
