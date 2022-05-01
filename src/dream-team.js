const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = ''   // пустой результат
  if (Array.isArray(members)) { // если входящее значение - массив
    for (i=0; i<members.length; i++) { // для каждого элемента массива
      if (typeof members[i] === 'string') { // который по типу строка
        let string = members[i].trim() // убираем пробелы
        let firstUpper = string[0].toUpperCase() // делаем заглавной буквой первую букву
        result = result + firstUpper // прибавляем к результату ее
      }
    } return result.split('').sort().join('') // делим значение на буквы, сорттирует алфавитом, делаем строкой
  } return false
}

module.exports = {
  createDreamTeam
};
