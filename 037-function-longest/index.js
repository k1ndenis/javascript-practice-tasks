/*
Даны две строки, которые содержат только буквы от a - z.
Ваша задача написать функцию, которая возвращает
новую отсортированную (по порядку) строку,
которая содержит буквы двух строк, повторяющихся только один раз.

Например:
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"
*/

function longest(str1, str2) {
  const str = str1 + str2;
  return [...new Set(str.split(""))].sort().join("");
}
