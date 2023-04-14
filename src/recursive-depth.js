const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let currentArr = []
    if (arr.some(e => Array.isArray(e))) {
      arr.filter(x => Array.isArray(x)).forEach((x) => {
        console.log(x)
        x.forEach(x => {
          console.log(x)
          currentArr.push(x)
        })
      });
      return depth + this.calculateDepth(currentArr)
    } else {
      return depth
    }
  }
}

module.exports = {
  DepthCalculator
};
