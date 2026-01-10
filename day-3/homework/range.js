// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * I: function takes two integers as inputs
 * O: function returns an array of all integers between the two input integers, inclusively
 * C: if first arg is greater than the second, return range in reverse order 
 */
function range(start, end) {
  // YOUR CODE BELOW HERE //
// create container (array) for integers that will be returned later
var rangeArray = [];
  // if statement to compare inputs: if start < end loop forward, else loop backward
if (start < end){ 
// for loop to iterate through range starting at 'start' input and ending at 'end' input
  for (var i = start; i <= end; i++) {
      rangeArray.push(i);
  } 
  return rangeArray;
} else {
    for (var j = start; j >= end; j--) {
      rangeArray.push(j);
    }
  }
  return rangeArray;
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
