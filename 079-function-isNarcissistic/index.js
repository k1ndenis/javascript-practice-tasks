/*
Нарциссическое число - это число длины n, в котором
сумма цифр в степени n равна исходному числу.

Например:
isNarcissistic(153) --> true;
isNarcissistic(435) --> false;
isNarcissistic(370) --> true;
isNarcissistic(1032) --> false;
*/

function isNarcissistic(n) {
  const length = String(n).length;
  let validate = 0;
  String(n).split('').forEach((item) => {
    validate += item ** length;
  })
  return n === validate ? true : false;
} 