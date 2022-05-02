const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0; // начальный результат
  for (let i = 0; i < matrix[0].length; i++) { // для каждого элемента 1 строки матрицы
    for (let n = 0; n < matrix.length; n++) { // для каждого элемента марицы
      if (matrix[n][i] !== 0) { // если значение не равно 0 
        result = result + matrix[n][i] // прибавляем к результату значение
      } else 
      break // если 0, то прерываем
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
