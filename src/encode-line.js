const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [] //пустой массив для строки
  let result = 1 // начинаем с 1, потому что не может быть нулевым присутствие буквы
  for (let i = 0; i < str.length; i++) { //для каждого элемента
    if (str[i] === str[i + 1]) { //если этот элемент равен следующему
      result = result + 1 // прибавляем 1
    } else {
      if (result === 1) { // если начальное значение не изменилось
        arr.push(str[i]) // отправляем в массив найденную букву
      } else { // если изменилось 
        arr.push(result + str[i]) // отправляем счетчик + букву
      }
      result = 1 //счетчик сбрасывается 
    }
  }
  return arr.join(''); // объединяем массив в строку
}

module.exports = {
  encodeLine
};
