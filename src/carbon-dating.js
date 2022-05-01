const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 */
function dateSample(sampleActivity) {
  /*сделаем проверки на входное 
  если не строка
  если входное меньше нуля (бесконечноть)
  если входное больше 15 (превышает современную активность (логарифм =0))
  если входное не преобразовывается в число*/
  if (typeof sampleActivity !== 'string' || sampleActivity < 0 || sampleActivity > 15 || !Number(sampleActivity)) {
    return false
  }
  else {
    let N = Number(sampleActivity) // переведем активность в число
    let k = Math.log(2) / HALF_LIFE_PERIOD // формула из статьи
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / N) / k) // формула из статьи
    return t
  }
}

module.exports = {
  dateSample
};
