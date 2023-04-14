const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str === '' ? '' : str.match(/a+|b+|c+|d+|e+|f+|g+|h+|h+|h+|i+|j+|k+|l+|m+|n+|o+|p+|q+|r+|s+|t+|u+|v+|w+|x+|y+|z+/gm).map(x => x.length == 1?  x[0] : x.length.toString() + x[0]).join('')
  }

module.exports = {
  encodeLine
};
