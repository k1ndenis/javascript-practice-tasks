/*
Найдите недостающую букву.
Напишите функцию,  которая принимает в качестве параметра массив букв,
расположенных по алфавиту и возвращает массив с недостающей буквой.
Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

Например:
findMissingLetter(['a','b','c','d','f']) --> 'e'
*/

function findMissingLetter(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i].charCodeAt(0) - arr[i - 1].charCodeAt(0) !== 1) {
      return String.fromCharCode(arr[i - 1].charCodeAt(0) + 1);
    }
  }
}
