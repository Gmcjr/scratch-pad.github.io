// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 * 
 * I: function takes any value as input
 * O: function returns Boolean: true if input value is an array, false otherwise
 * C:
 * E:
 */
function isArray(value) {
  // YOUR CODE BELOW HERE //
// check data type with typeof
// check if it is an array
typeof value;
return Array.isArray(value);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 * I: function takes any input value
 * O: function returns Boolean: true if value is an Object intended as a collection, false otherwise
 * C:
 * E:
 * 
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 * 
 */
function isObject(value) {
  // YOUR CODE BELOW HERE //
// check data type with typeof and return true if value is 'object' and not null, array, regex, or date
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof RegExp) && !(value instanceof Date);

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 * 
 * I: function takes any value as input
 * O: function returns Boolean: true if input is either an Array or an Object
 * C:
 * E:
 */
function isCollection(value) {
  // YOUR CODE BELOW HERE //
// check data type of value with typeof and return true if value is 'object' and not null, regex, or date
return typeof value === 'object' && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 * 
 * I: function takes any value as input
 * O: function returns value type as a string
 * C:
 * E:
 */
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  // find data type of input value and return the type as a string
  var return_value = Object.prototype.toString.call(value);
   
    var type = return_value.substring(
             return_value.indexOf(" ") + 1, 
             return_value.indexOf("]"));
  
    return type.toLowerCase();
  
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
