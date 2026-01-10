// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 * 
 * I: function takes a base of a string or number
 * O: function returns another function that tests whether a given value is greater than the base
 * C: 
 * E:
 */
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  // create function to return as output that tests whether a given value is greater than the base (input)
  return function(value) {
    return (value > base);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  return function(value) {
    return (value < base);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 * 
 * I: function takes a single character as input
 * O: function returns a function that tests whether a given string starts with the input character
 * C: function needs to be case insensitive
 * E:
 */
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
  // return a function to check an input string against the startWith character for a match
  // case insensitive
  return function(str) {
    return str.toLowerCase().startsWith(startsWith.toLowerCase());
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 * 
 * I: function takes a single character as input
 * O: function returns a function that tests whether a given string ends with the input character
 * C: function needs to be case insensitive
 * E:
 */
function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
  return function(str) {
    return str.toLowerCase().endsWith(endsWith.toLowerCase());
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples:
 * 
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 * 
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 * 
 * I: function takes an array of strings and a function as inputs - the function it takes, modifies strings
 * O: function returns the input array of strings, modified
 * C:
 * E:
 */
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
// create new array for modified strings
  var result = [];
  // for loop to iterate over strings, modify, and add to new array
  for (var i = 0; i < strings.length; i++) {
    result.push(modify(strings[i]));
  }
  return result;
  // YOUR CODE ABOVE HERE //
}


/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * examples:
 * 
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 * 
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 * 
 * I: function takes an array of strings and a function designed to test the string in some way
 * O: functin returns a Boolean on whether it passed: true if all strings pass
 * C:
 * E:
 */


function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
  // create for loop to iterate over input strings
  for (var i = 0; i < strings.length; i++) {
  // if string does not pass test, return false
    if (!test(strings[i])) {  
      return false;            
    }
  }
  // if all strings pass, return true
  return true;
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
