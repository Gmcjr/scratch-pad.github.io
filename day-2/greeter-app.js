// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day,
 * write a greeting program that prints a greeting to the screen like so:
 *
 * // hour is 0-11 // greeterApp(10) => 'Good Morning'
 * Good Morning!
 *
 * // hour is 12-16 // greeterApp(14) => 'Good Afternoon'
 * Good Afternoon!
 *
 * // hour is 17-21 // greeterApp(20) => 'Good Evening'
 * Good Evening!
 *
 * // hour is 22-24 // greeterApp(22) => 'Good Night'
 * Good Night!
 *
 * TIPS:
 *
 *   a. At what threshold does morning become afternoon? What comparison
 *      can be used to test that the hour is within the morning threshold.
 *      It's best to be consistant and use the SAME type of comparison for
 *      each threshold.
 *
 *   b. Does the last threshold even need an else-if?
 *
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 * 
 * I: function takes one input as hour parameter
 * O: function returns a string printed to the screen based on the range of the input hour
 * C: test is case sensitive, MUST console.log('') with exact case
 * E: 
 */

function greeter(hour) {
  // YOUR CODE BELOW HERE //
  
// check the passed argument against a numbered range - use if, else-if statements
// return printed string associated with its hour range

if (hour <= 11) {
  console.log('Good Morning!');
} else if (hour <= 16) {
  console.log('Good Afternoon!');
} else if (hour <= 21) {
  console.log('Good Evening!');
} else {
  console.log('Good Night!');
}
  // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie,
 * the hour, so just change the input value to check your work.
 *
 * In a more realistic setting, you might do something like this to get the
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.greeter = greeter;
}
