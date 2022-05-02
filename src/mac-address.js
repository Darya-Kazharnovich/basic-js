const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let separate = n.split('-'); // входную строку разделим по дефису
  if (separate.length === 6) { // проверим на 6 групп
    for (let i = 0; i < separate.length; i++) {
      let number = parseInt(separate[i], 16);   // переведем в 16тиричную систему
      if (!number && number !== 0) return false;
    }
    return true;
  }return false; 
  
}
module.exports = {
  isMAC48Address
};
