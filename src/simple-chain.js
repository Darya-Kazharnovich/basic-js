const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length // возвратим длину цепи
  },
  addLink(value) {
    this.chain.push('' + value) // пуш с преобразованием в строку
    return this
  },
  removeLink(position) {
    /*делаем проверки на
    число ли, несуществующие позиции (больше, меньше, чем есть)*/
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = [] // удаляем цепь, если ошибка (в условии)
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1) // удаляем 1 элемент с позиции
      return this
    }
  },
  reverseChain() {
    this.chain.reverse() // разворачиваем цепь
    return this
  },
  finishChain() {
    let result = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = []; // удаляем цепь
    return result; 
  }
};

module.exports = {
  chainMaker
};
