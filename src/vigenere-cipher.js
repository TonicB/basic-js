const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(set = true) {
    this.alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    this.set = set
  }
  encrypt(str, key) {
    if ((str === undefined) || (key === undefined)) {
      throw new Error(`Incorrect arguments!`)
    }
    let strArr = str.split('')
    if (key.length < str.length) {
      let strOnlyLetters = strArr.filter(x => this.alph.includes(x) || this.alph.includes(x.toLowerCase())).join('')
      let k = Math.ceil(strOnlyLetters.length/key.length)
      key = key.repeat(k).slice(0, strOnlyLetters.length)
    }
    let keyArr = key.split('')
    let encodeArr = []
    strArr.forEach((x, i) => {
      if(this.alph.includes(x.toLowerCase())) {
        let indexOfnewSym = this.alph.indexOf(x.toLowerCase()) +  this.alph.indexOf(keyArr.shift().toLowerCase())
        console.log(indexOfnewSym)
        encodeArr.push(this.alph[indexOfnewSym].toUpperCase())
      } else {
        encodeArr.push(x)
        
      }
    });
    return this.set? encodeArr.join('') : encodeArr.reverse().join('')
  }
  decrypt(str, key) {
    if ((str === undefined) || (key === undefined)) {
      throw new Error(`Incorrect arguments!`)
    }
    let strArr = str.split('')
    if (key.length < str.length) {
      let strOnlyLetters = strArr.filter(x => this.alph.includes(x) || this.alph.includes(x.toLowerCase())).join('')
      let k = Math.ceil(strOnlyLetters.length/key.length)
      key = key.repeat(k).slice(0, strOnlyLetters.length)
    }
    let keyArr = key.split('')
    let encodeArr = []
    strArr.forEach((x, i) => {
      if(this.alph.includes(x.toLowerCase())) {
        let indexOfnewSym = this.alph.indexOf(x.toLowerCase()) -  this.alph.indexOf(keyArr.shift().toLowerCase()) +26
        encodeArr.push(this.alph[indexOfnewSym].toUpperCase())
      } else {
        encodeArr.push(x)
        
      }
    });
    return this.set? encodeArr.join('') : encodeArr.reverse().join('')

  }
}

module.exports = {
  VigenereCipheringMachine
};
