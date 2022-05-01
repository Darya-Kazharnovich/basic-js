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
  let result = 0  // начнем с 0
  let separate = s2.split('') // разделим на отдельные буквы
  separate.forEach(Element => { // сделаем проверку для каждой буквы
    if(s1.includes(Element)) { // если первый содержит букву второго
      result = result + 1 // увеличиваем результат
      s1 = s1.replace(Element, '') // чтобы не задваивлось, удалим найденную букву из первого 
    }
  })
  return result
}

module.exports = {
  getCommonCharacterCount
};
