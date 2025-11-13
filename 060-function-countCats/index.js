/*
Ваша задача  - посчитать спрятанных на заднем дворе кошек (представленных в двухмерном формате Array)
Кошки хорошо прячутся, но их уши (''^^") видны.
Ваша задача написать функцию (countCats), которая будет считать кошек. Удачи!

Количество найденых кошек должны быть `number`.
Если кошек не найдено, функция должна вернуть `0`

Например:
countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]) --> 3
*/

function countCats(arr) {
  let concatedArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      concatedArr = concatedArr.concat(item);
    }
  });
  let ears = [];
  concatedArr.forEach((item) => {
    if (item === "^^") {
      ears.push(item);
    }
  });
  return ears.length;
}
