/*
Напишите функцию с двумя параметрами, которая создаёт массив элементов,
представляющих собой сумму соответствующих элементов заданных массивов.

Например:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

func(array1,array2) // [5,7,9,4,5]
*/

function sumOfItems(array1, array2) {
  let result = [];
  array1.forEach((item, index) => {
    let i = array1[index] + array2[index];
    if (i) result.push(i);
  });
  return result;
}
