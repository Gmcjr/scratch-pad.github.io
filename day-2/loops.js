// #!/usr/bin/env node

'use strict';

const { values } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 * 
 * I: function takes an array as input
 * O: function returns values of input array
 * C: function loops forward over array and uses console.log() to print output
 * E:
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  // loop forward over input array
for (var i = 0; i < array.length; i++) {
  // output print array value to console
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 * 
 * I: function takes an array as input
 * O: function returns values of input array
 * C: function loops backward over the array and uses console.log() to print output
 * E:
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // loop backward over input array
for (var i = array.length -1; i >= 0; i--) {
  // output print array value to console
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 * 
 * I: function takes an object as input
 * O: function returns an array containing the input object keys
 * C: function returns an array
 * E:
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
// get object keys and return them in an array
return Object.keys(object);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 * 
 * I: function takes an object as input
 * O: function prints input object keys
 * C: function uses console.log() to print keys
 * E:
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  // use for in loop to get object keys and print them
for (var key in object) {
  console.log(key);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 * 
 * I: function takes an object as input
 * O: function returns an array containing the input object key values
 * C: function returns an array
 * E:
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
// get object values and return them with an array
  return Object.values(object);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 * 
 * I: function takes an object as input
 * O: function prints object values
 * C: function loops over object and uses console.log() to print keys
 * E:
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // loop over input object
  for (var key in object) {
  // output values printed to console
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 * 
 * I: function takes an object as input
 * O: function returns the number of key/value pairs stored within that object
 * C:
 * E:
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
// get the number of key/value pairs inside the input object
// return that number
var objLength = Object.entries(object).length;
return objLength;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 * 
 * I: function takes an object as input
 * O: function prints object values in reverse as output
 * C:
 * E:
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // initialize a variable and assign to it the input object as an array
var valRev = Object.values(object);
// loop over the array in reverse and print to console
for (var i = valRev.length -1; i >= 0; i--) {
  console.log(valRev[i]);
}
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
