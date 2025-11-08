/*
Дан массив слов, необходимо определить,
составлены ли все слова из одних и тех же символов.

Например:
["кот", "ток", "кто"] --> true
["кот", "тк", "кТо"] --> false
*/

function coreSymbols(arr) {
  let result = [];
  arr.forEach((item) => {
    result.push(item.split("").sort().join(""));
  });
  return new Set(result).size == 1 ? true : false;
}
