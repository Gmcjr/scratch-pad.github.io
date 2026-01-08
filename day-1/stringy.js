// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in an input string.
O: Function returns the length of the input string.
C:
E:
*/

function length(string) {
  // YOUR CODE BELOW HERE //
// take input string and return its length
return string.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 * 
 * I: function takes a string as input
 * O: function returns a new string forced to lowercase
 * C:
 * E:
 */
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  // take input string and return new string forced to lowercase
return string.toLowerCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 * I: function takes a string as input
 * O: function returns a new string forced to uppercase
 * C:
 * E:
 */
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
// take input string and return new string forced to uppercase
return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 * 
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * I: function takes a string as input
 * O: function returns a new string forced to dash-case
 * C:
 * E:
 */
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  // find spaces in input string and convert to dashes
  // enforce lowercase
  return string.toLowerCase().replace(/\s+/g, '-');
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: function takes one string and one single character as inputs
 * O: function returns Boolean: true if string begins with character - otherwise false
 * C: function is case insensitive
 * E:
 */
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
// enforce lowercase
// compare first character of input string with input character
// return true if they are the same, otherwise return false
var string = string.toLowerCase();
var char = char.toLowerCase();
return string.startsWith(char);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * 
 * I: function takes a string and a single character as inputs
 * O: function returns true if input string ends with input single character, otherwise returns false
 * C: function is case insensitive
 * E:
 */
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
// enforce lowercase
// compare last character of input string with input character
// return true if they match, otherwise return false
var string = string.toLowerCase();
var char = char.toLowerCase();
return string.endsWith(char);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * 
 * I: function takes two strings as inputs
 * O: function returns the two input strings concatenated into one string
 * C:
 * E:
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
return stringOne + stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 * 
 * I: function takes any number of strings as inputs
 * O: function returns all input strings joined together
 * C: function pulls out all arguments passed and stores them in an array
 * E:
 */
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
// join the elements of array args and return the result
return args.join("");
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * 
 * I: function takes two strings as inputs
 * O: function returns the longest of the two input strings
 * C:
 * E:
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // compare lengths of both input strings
  // return the longeset of the two
if (stringOne.length > stringTwo.length) {
  return stringOne;
  } else {
    return stringTwo;
  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * I: function takes two strings as inputs
 * O: function returns 1 if first string is higher in alphabetical order (earlier in alphabet) than string two
 *  returns -1 if the second is higher in alphabetical order than the first
 *  returns 0 if the input strings are equal
 * C:
 * E:
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
// compare characters of input strings to determine their alphabetical order
// return 1 if stringOne > stringTwo, return -1 if stringTwo > stringOne, return 0 if stringOne === stringTwo
return stringTwo.localeCompare(stringOne);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * I: function takes two strings as inputs
 * O: function returns 1 if first string is lower in alphabetical order (later in alphabet) than string two
 *  returns -1 if the second is lower in alphabetical order than the first
 *  returns 0 if the input strings are equal
 * C:
 * E:
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // compare characters of input strings to determine their alphabetical order
// return 1 if stringTwo > stringOne, return -1 if stringOne > stringTwo, return 0 if stringOne === stringTwo
return stringOne.localeCompare(stringTwo);
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
