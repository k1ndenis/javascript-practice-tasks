/*
Ваша задача - создать объект chainMaker, который создает цепочки.
Готовая цепочка представляет собой строку
и выглядит так: '(значение1) ~~ (значение2) ~~ (значение3)'.
В ChainMaker есть несколько методов для создания цепочек и их изменения:

getLength: возвращает текущую длину цепочки в виде числа;
addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
removeLink (position) удаляет звено цепи в указанной позиции;
reverseChain: переворачивает цепочку;
finishChain: завершает цепочку и возвращает ее.

Методы addLink, reverseChain и removeLink объединяются в цепочку, а другие - нет.
Если addLink вызывается без аргументов,
он добавляет в цепочку пустую ссылку ('()').
Если removeLink принимает недопустимую позицию
(например, не число или дробное число, или соответствует несуществующей ссылке),
он должен выдать ошибку.
После вызова метода finishChain существующую цепочку необходимо удалить,
как если бы возникла ошибка.

Например:
chainMaker.addLink(1).addLink(2).addLink(3).finishChain() 
--> '(1) ~~ (2) ~~ (3)'
chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() 
--> '(2) ~~ (3)'
chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
--> '(2) ~~ (1) ~~ (3)'
*/

const chainMaker = {
    _chain: [],
    _result: [],
  getLength: () => {
    return chainMaker._chain.length;
  },
    addLink: (value) => {
        if (chainMaker._chain.length == 0) {
      chainMaker._result.length = 0;
    }
        if (!value) {
      chainMaker._chain.push('()');
    } else {
      chainMaker._chain.push(value);
    }
        return chainMaker;
  },
    removeLink: (position) => {
        function removing() {
            if (!position || position % position !== 0 || position < 1) {
          return 'Ошибка. Недопустимое значение.'
        } else {
            chainMaker._chain.splice(position - 1, 1);
                return chainMaker;
      }
    }
        return removing();
  },
    reverseChain: () => {
    chainMaker._chain.reverse();
        return chainMaker;
  },
    finishChain: () => {
    chainMaker._chain.forEach((item, index) => {
      if (index == chainMaker._chain.length - 1) {
        chainMaker._result.push('(' +item + ')');
      } else {
        chainMaker._result.push('(' + item + ')' + ' ~~ ');
      }
    });
        chainMaker._chain.length = 0;
        return chainMaker._result.join('');
  }
} 