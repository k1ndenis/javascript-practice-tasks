/*
Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
в котором удалены повторяющиеся элементы из массива arr.

Например:
let arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];

removeDuplicates(arr); --> ["php","css","script","html","java"]
*/

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
