const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  names.forEach((element, i) => { // для каждого элемента + индекс
    let result = 0; // изначальный результат 0 
    let next = i + 1;
    while (next <= names.length) { // пока индексы не закончатся
      if (element === names[next]) { // если нынешний совпадает со следующими
        result = result + 1; // увеличиваем рузельтат
        names[next] = `${names[next]}(${result})`; // переименовываем значение(результат)
      }
      next = next + 1
    }
  })
  return names
}

module.exports = {
  renameFiles
};
