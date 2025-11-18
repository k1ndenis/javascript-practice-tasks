/*
В этом небольшом задании вам дана строка чисел, 
разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.

Например:
list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")  --> "666 -123"
*/

function list(string) {
  const numbers = string.split(' ');
  const sortedNumbers = numbers.sort((a, b) => b - a);
  return [sortedNumbers[0], sortedNumbers.at(-1)].join(' ');
} 