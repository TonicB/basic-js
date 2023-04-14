const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString().split('')
  let arrOfConvertedNums = []
  num.forEach((x,i,a) => {
    let currentArr = [...a]
    currentArr[i] = ''
    let convertedNumber = +currentArr.join('')
    arrOfConvertedNums.push(convertedNumber)
    
  });
  return Math.max(...arrOfConvertedNums)
}

module.exports = {
  deleteDigit
};
