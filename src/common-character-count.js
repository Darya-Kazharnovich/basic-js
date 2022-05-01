const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0
  let separate = s2.split('')
  separate.forEach(Element => {
    if(s1.includes(Element)) {
      result = result + 1
      s1 = s1.replace(Element, '')
    }
  })
  return result
}

module.exports = {
  getCommonCharacterCount
};
