const toString = Object.prototype.toString;

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
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
function getClass(value) {
  return /^\[object (.*)]$/.exec(getTag(value))[1];
}

function isType(type) {
  const cls = '[object ' + type + ']';
  return function (value) {
    return getTag(value) === cls
  }
}

/**
 * Check if value is a Date object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a date
 */
const isDate = isType('Date');

/**
 * Check if value is a regexp
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a regexp
 */
const isRegExp = isType('RegExp');

/**
 * Check if value is a bool value
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a bool
 */
const isBoolean = function (value) {
  return value === true || value === false || isType('Boolean')
}

/**
 * Check if value is a Number
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a number
 */
const isNumber = function (value) {
  return typeof value === 'number' || isType('Number');
}

/**
 * Check if value is a string
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a string
 */
const isString = function (value) {
  return typeof value === 'string' || isType('String');
}

/**
 * Check if value is a Function object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a function
 */
const isFunction = function (value) {
  return typeof value === 'function' || isType('Function');
}

/**
 * Check if value is a Array object
 * @param value {*} The value to check
 * @return {boolean} Return true if value is a array
 */
const isArray = Array.isArray || isType('Array');

/**
 * Check if value is NaN
 * @param value {*} The value of check
 * @return {boolean} Return true if value is NaN
 */
const isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' || isNaN(value)
}

/**
 * Check if value is not null or undefined
 * @param value {*} The value to check
 * @return {boolean} Return true if value is not null or undefined
 */
function isDefined(value) {
  return value != null
}




