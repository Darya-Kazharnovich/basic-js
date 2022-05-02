const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { // задаем опциям объект
    repeatTimes = 1, // устанавливает число повторений
    separator = '+', //строка, разделяющая повторения
    addition = '', // строка, которая будет добавлена после каждого повторения
    additionRepeatTimes = 1, // число повторений
    additionSeparator = '|', // строка, разделяющая повторения
  } = options
  let repeat = []
  for (let i = 0; i < repeatTimes; i++) {
    let repeatArray = []
    if (additionRepeatTimes === undefined) {
      repeat.push(str)
    } else {
      for (let n = 0; n < additionRepeatTimes; n++) {
        addition === null? repeatArray.push(addition + '') : repeatArray.push(addition)
      }
      const arrJoin = repeatArray.join(`${additionSeparator}`)
      repeat.push(str + arrJoin)
    }
  }
  return repeat.join(`${separator}`)
}

module.exports = {
  repeater
};
