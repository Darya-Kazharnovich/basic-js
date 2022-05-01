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
  let arr = []  //задаем массив
  let nString = n.toString() // преобразуем число в строку
  for (i=0; i<nString.length; i++) { // для каждого элемента строки 
   let newPart = nString.replace(nString[i], '') // удаляем элемент
   arr.push(newPart) // пушим в массив
  } return Math.max.apply(null, arr) // находим наибольшее значение в массиве
}

module.exports = {
  deleteDigit
};
