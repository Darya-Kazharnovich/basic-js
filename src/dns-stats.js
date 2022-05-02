const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {} // создаем пустой объект
  domains.forEach(element => { //каждый домен
    let separate = element.split('.'); // разделим на части по точкам
    let key = ''; // создадим пустой ключ
    for (let i = separate.length - 1; i > -1; i--) {
      key = key + `.${separate[i]}`; // задаем название ключа
      DNS[key] ? ++DNS[key] : DNS[key] = 1; 
    }
  });
  return DNS
}

module.exports = {
  getDNSStats
};
