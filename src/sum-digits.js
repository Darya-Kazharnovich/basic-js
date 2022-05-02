const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0 //  начальный результат 0
  let number = n + '' // переводим число в строку
  let separate = number.split('') // делим на цифры
  separate.forEach(element => {
    let num = parseInt(element) // цифры переводим в number 
    result = result + num // прибавляем к результату
  })
  if (result < 10) { // если результат меньше 10
    return result; // возвращаем
  } else {
    return getSumOfDigits(result); // если больше, запускаем еще раз функцию
  }
}

module.exports = {
  getSumOfDigits
};
