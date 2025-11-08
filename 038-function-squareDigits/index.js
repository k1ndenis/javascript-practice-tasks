/*
Ваша задача написать функцию, которая принимает
в качестве параметра целое число и возводит в квадрат каждую цифру числа.
Результат также необходимо вернуть в виде целого числа.

Например:
squareDigits(9119) --> 811181
*/

function squareDigits(digits) {
  let result = "";
  String(digits)
    .split("")
    .forEach((el) => {
      result += el ** 2;
    });
  return result;
}
