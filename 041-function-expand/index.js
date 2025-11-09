/*
Напишите функцию `expand(arr)`, которая разворачивает
вложенный массив любой глубины.

Например:
const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4];
const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];
*/

function expand(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(expand(item));
    } else result.push(item);
  });
  return result;
}
