/*
Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.

Например:
func([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) --> 5
func([1,1,2,-2,5,2,4,4,-1,-2,5]) --> -1
func([20,1,1,2,2,3,3,5,5,4,20,4,5]) --> 5
*/

function func(arr) {
  let result;
  function isOdd(n) {
    let numbers = [];
    arr.forEach((item) => {
      if (item === n) numbers.push(item);
    })
  if (numbers.length % 2 !== 0) result = numbers[0];
  }
  arr.forEach((item) => {
    isOdd(item);
  })
  return result;
} 