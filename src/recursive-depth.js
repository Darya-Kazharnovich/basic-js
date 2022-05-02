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
    let result // задаем результат
    if (arr.some(Element => Array.isArray(Element)) === true) { // при проверке каждого элемента, если хоть один элемент массива массив
      result = this.calculateDepth(arr.flat()) + 1 // на элемент вызываем функцию,поднимаем и увеличиваем результат
    } else if (arr.some(Element => Array.isArray(Element)) === false) { // если нет массивов 
      result = 1 // результат единица
    }
    return result
  } 
}

module.exports = {
  DepthCalculator
};
