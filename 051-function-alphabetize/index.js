/*
Напишите функцию `alphabetize(str)`, которая возвращает строку,
отсортировав её символы в алфавитном порядке.

Например:
alphabetize("redev") --> "deerv"
*/

function alphabetize(str) {
  return str.split("").sort().join("");
}
