/*
Напишите функцию, которая принимает массив и переносит все 0 в конец,
не изменяя порядок остальных элементов массива.

Например:
moveZeroes([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
*/

function moveZeroes(arr) {
  let zeroes = [];
  let result = [...arr];
  for (let el of arr) {
    if (el === 0) {
      arr.splice(arr.indexOf(el), 1);
      zeroes.push(el);
    }
  }
  arr.push(...zeroes);
  return arr;
}
