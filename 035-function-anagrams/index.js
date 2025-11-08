/*
Что такое анаграмма?

Два слова являются анаграммами между собой,если
они оба содержат одинаковые буквы.

Например: 'abba' & 'baab' == true

Напишите функцию, которая находит все анаграммы слова из списка.
В качестве параметра даны слово и массив слов.
Функция должна возвращать массив всех анаграмм или пустой массив,
если анаграмм не обнаружено.

Например:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']
*/

function anagrams(str, arr) {
  const sortedStr = str.split("").sort().join("");
  let result = [];
  arr.forEach((item) => {
    if (item.split("").sort().join("") === sortedStr) {
      result.push(item);
    }
  });
  return result;
}
