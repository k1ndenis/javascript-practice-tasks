/*
Реализуйте функцию unique_in_order, которая принимает в качестве аргумента
последовательность и возвращает список элементов
без каких-либо элементов с одинаковым значением рядом
друг с другом и с сохранением исходного порядка элементов.

Например:
uniqueInOrder('AAAABBBCCDAABBB') --> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         --> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       --> [1,2,3]
*/

function digital_root(n) {
  let string = String(n);
  let split = string.split('');
  let sum = 0;
  split.forEach((item) => {
      sum += +item;
  })
  return sum < 10 ? sum : digital_root(sum);
}