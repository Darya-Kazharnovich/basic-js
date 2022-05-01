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
  const catEars = '^^' //зададим уши
  for (i=0; i < matrix.length; i++) { // для каждого элемента матрицы
    for (n=0; n<matrix[i].length; n++) { // для каждого вторичного элемента матрицы
      if (matrix[i][n] === catEars) { // если содержит уши
        result = result + 1 // увеличиваем результат
      } result = result // возвращаем результат
    } 
  }return result
}


module.exports = {
  countCats
};
