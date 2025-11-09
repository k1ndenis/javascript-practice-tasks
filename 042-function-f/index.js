/*
Напишите функцию, которая возвращает сумму таким образом:

Например:
f(1)(2)(3) --> 6
*/

function f(value) {
  let sum = value;
  function inner(value) {
    sum += value;
    function innerInner(value) {
      return (sum += value);
    }
    return innerInner;
  }
  return inner;
}
