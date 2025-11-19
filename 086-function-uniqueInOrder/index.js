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

function uniqueInOrder(value) {
  let result = [];
  let array = new Array(...value)
  array.forEach((item, index) => {
  if (item !== array[index + 1]) {
    result.push(item);
  }
  })
  return result;
} 