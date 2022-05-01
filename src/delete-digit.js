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
  let arr = []
  let nString = n.toString()
  for (i=0; i<nString.length; i++) {
   let newPart = nString.replace(nString[i], '')
   arr.push(newPart)
  } return Math.max.apply(null, arr)
}

module.exports = {
  deleteDigit
};
