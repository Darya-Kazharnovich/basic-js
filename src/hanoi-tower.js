const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let second = 60 * 60 // секунды
  let turnsSpeedSeconds = turnsSpeed / second // переведем скорость в секунды
  let turns = 2 ** disksNumber - 1 // сколько шагов надо (формула из документации к задаче)
  let seconds = Math.floor(turns / turnsSpeedSeconds) // сколько секунд для шагов
  return {turns, seconds}
}

module.exports = {
  calculateHanoi
};
