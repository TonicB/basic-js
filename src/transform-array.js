const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [] 
  let sequencesArr = ['--discard-prev', '--double-prev', '--discard-next', '--double-next', 'discarded']
  if(!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  } else {

    let currentArr = [...arr]
    currentArr.forEach((x, i, a) => {
      if ((currentArr[i] == '--double-next') && (currentArr[i+1]) && (!sequencesArr.includes(a[i+1]))) {
        currentArr[i] = a[i+1]
      }
      if((currentArr[i] == '--discard-next') && (currentArr[i+1]) && (!sequencesArr.includes(a[i+1]))) {
        currentArr[i+1] = 'discarded'
      }
      if ((currentArr[i] == '--double-prev') && (currentArr[i-1]) && (!sequencesArr.includes(a[i-1]))) {
        currentArr[i] = a[i-1] 
      }
      if ((currentArr[i] == '--discard-prev') && (currentArr[i-1]) && (!sequencesArr.includes(a[i-1]))) {
        currentArr[i-1] = 'discarded'
      }

    })

      currentArr.forEach(x => { 
        if (!sequencesArr.includes(x)) {
          result.push(x)
        }
      })
  
  return result
}
}

module.exports = {
  transform
};
