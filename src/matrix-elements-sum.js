const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0
  let objOfArraysOfElsOfNumbers = {}
  matrix.forEach( (x, i) => {
    x.forEach((y, ind) => {
      if(!objOfArraysOfElsOfNumbers.hasOwnProperty(ind)) {
        objOfArraysOfElsOfNumbers[ind] = []
        objOfArraysOfElsOfNumbers[ind].push(y)
      } else {
        objOfArraysOfElsOfNumbers[ind].push(y)
      }
    } )
  })
  for(key in objOfArraysOfElsOfNumbers) {
    console.log( objOfArraysOfElsOfNumbers[key])
    sum = sum + objOfArraysOfElsOfNumbers[key].reduce((acc, x, i, arr) =>  {
      if(arr[i-1] != 0) {
        return acc + x
      } else {
        return acc
      }
    })
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
