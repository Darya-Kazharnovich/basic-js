const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0
  const catEars = '^^'
  for (i=0; i < matrix.length; i++) {
    for (n=0; n<matrix[i].length; n++) {
      if (matrix[i][n] === catEars) {
        result = result + 1
      } result = result
    } 
  }return result
}


module.exports = {
  countCats
};
