/*
В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

Например:
arrayDiff([1,2],[1]) --> [2]
arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]
*/

function arrayDiff(arr1, arr2) {
  let result = [];
  arr1.forEach((item, index) => {
    if (!arr2.includes(item)) {
      result.push(item);
    }
  })
  return result;
}