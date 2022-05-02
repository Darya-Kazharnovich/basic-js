const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let cleanArr = arr.filter(elem => elem !== -1); // убираем все -1
  let sortArr = cleanArr.sort((a, b) => a - b); // сортируем по возрастанию
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortArr.splice(i, 0, -1); // в i-тый индекс вставляет -1
    }
  }
  return sortArr
}

module.exports = {
  sortByHeight
};
