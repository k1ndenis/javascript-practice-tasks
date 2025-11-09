/*
Напишите функцию, которая находит наиболее часто используемый элемент массива.

Например:
const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"
*/

function oftenUsed(arr) {
  let elements = {};
  arr.forEach((item) => {
    elements[item] = (elements[item] || 0) + 1;
  });
  let oftenUsedEl = null;
  let maxCount = 0;
  for (let [item, count] of Object.entries(elements)) {
    if (count > maxCount) {
      oftenUsedEl = item;
      maxCount = count;
    }
  }
  return oftenUsedEl;
}
