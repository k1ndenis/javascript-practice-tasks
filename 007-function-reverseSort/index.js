/*
Сортировать в порядке по убыванию
важность: 4

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

function reverseSort(arr) {
  return arr.sort((a, b) => b - a);
}
