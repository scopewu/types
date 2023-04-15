const toString = Object.prototype.toString;

/**
 * get `toString.call()` result
 * @param value {*} The value to call `toString.call()`
 * @returns {string|string} Return `toString.call()` result
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

/**
 * get [[Class]] name
 *
 * getClass('')
 * // => 'String'
 *
 * getClass(new Date())
 * // => 'Date'
 *
 * @param value {*} The value to get class name
 * @return {string} Return [[Class]] name
 */
export function getClass(value) {
  return /^\[object (.*)]$/.exec(getTag(value))[1];
}

/**
 * generator isType function
 * @param type {string} The type name
 * @returns {function(*): boolean}
 */
function isType(type) {
  const cls = '[object ' + type + ']';
  /**
   * Check if value is a type
   */
  return function (value) {
    return getTag(value) === cls;
  }
}

/**
 * Check if value is a Date object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a date
 */
export const isDate = isType('Date');

/**
 * Check if value is a regexp
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a regexp
 */
export const isRegExp = isType('RegExp');

/**
 * Check if value is a bool value
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a bool
 */
export const isBoolean = function (value) {
  return value === true || value === false || isType('Boolean');
}

/**
 * Check if value is a Number
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a number
 */
export const isNumber = function (value) {
  return typeof value === 'number' || isType('Number');
}

/**
 * Check if value is a string
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a string
 */
export const isString = function (value) {
  return typeof value === 'string' || isType('String');
}

/**
 * Check if value is a Function object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a function
 */
export const isFunction = function (value) {
  return typeof value === 'function' || isType('Function');
}

/**
 * Check if value is an Array object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a array
 */
export const isArray = Array.isArray || isType('Array');

/**
 * Check if value is NaN
 * @param value {*} The value of check
 * @return {boolean} Return true if value is NaN
 */
export const isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' || isNaN(value);
}

/**
 * Check if value is not null or undefined
 * @param value {*} The value to check
 * @return {boolean} Return true if value is not null or undefined
 */
export function isDefined(value) {
  return value != null;
}

export default {
  getClass,
  isDate,
  isRegExp,
  isBoolean,
  isNumber,
  isString,
  isFunction,
  isArray,
  isNaN,
  isDefined
}
