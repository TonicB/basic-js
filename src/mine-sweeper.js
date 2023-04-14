const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = []
  for (i = 0; i < matrix.length; i++) {
    res.push([])
  }
  
  let matrixWidth = matrix[0].length
  let matrixHeight = matrix.length
  
  matrix.forEach((e, i)  => {
    e.forEach((x, ind) => {
      let count = 0
      
      if(x) {
        res[i].push(1)
      } else {
          if ((i > 0) && (ind > 0) && matrix[i-1][ind-1]) {count++}
          if ((i > 0) && matrix[i-1][ind]) {count++}
          if ((i > 0) && (ind < (matrixWidth - 1) ) && matrix[i-1][ind+1]) {count++} 
          if ((ind > 0) && matrix[i][ind-1]) {count++} 
          if ((ind < (matrixWidth - 1)) && matrix[i][ind+1]) {count++} 
          if ((i < (matrixHeight -1)) && (ind > 0) && matrix[i+1][ind-1]) {count++} 
          if ((i < (matrixHeight -1)) && matrix[i+1][ind]) {count++} 
          if ((i < (matrixHeight -1)) && (ind < (matrixWidth - 1)) && matrix[i+1][ind+1]) {count++}
        res[i].push(count)
        count = 0
      }
    })
  });
  return res
  }

module.exports = {
  minesweeper
};
