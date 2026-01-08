// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * I: function takes no inputs
 * O: funtion prints numbers 1 to 100 as outputs
 * C: for multiples of three, output "Fizz" instead of number,
 * for multiples of five, output "Buzz" instead of number,
 * and for multiples of both three and five, output "FizzBuzz" instead of number
 * E:
 */
function fizzBuzz() {
 // YOUR CODE BELOW HERE //

  // loop through numbers 1 to 100
  for (var i = 1; i <= 100; i++) {
  // on each iteration, check if number is multiple of 3 or 5 or both
  // on each iteration, if number is multiple of 3 - print: "Fizz"
  if (i % 3 === 0) {
      console.log("Fizz");
    // if number is multiple of 5 - print: "Buzz"
    } else if (i % 5 === 0) {
      console.log("Buzz");
    // if number is multiple of both - print: "FizzBuzz"
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    // else print number
    } else
      console.log(i);
  }
 // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
