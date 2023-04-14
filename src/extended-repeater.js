const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, argOptions) {
  if(argOptions.addition === false) {
    argOptions.addition = 'false'
  }

  if(argOptions.addition === null) {
    argOptions.addition = 'null'
  }
  if (str === null) {
    str = 'null'
  }

 if (Object.getOwnPropertySymbols(str).length > 0) {
  str = `${str}`
 }
 
  let options = {
    repeatTimes: argOptions.repeatTimes || 1,
    separator: argOptions.separator || '+',
    addition: argOptions.addition || '',
    additionRepeatTimes: argOptions.additionRepeatTimes || 1,
    additionSeparator: argOptions.additionSeparator || '|'
    }

    if (Object.getOwnPropertySymbols(options.addition).length > 0) {
      options.addition = `${options.addition}`
     }

  
    let additionArr = []
    for(i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(options.addition.toString())
    }
    let strArr = []
    for (i=0; i < options.repeatTimes; i++) {
      strArr.push(`${str.toString()}${additionArr.join(options.additionSeparator.toString())}`)
    }

    return strArr.join(options.separator.toString())

}

module.exports = {
  repeater
};
