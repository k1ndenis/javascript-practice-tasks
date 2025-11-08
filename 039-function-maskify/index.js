/*
Ваша задача написать функцию, которая принимает
в качестве параметра целое число и возводит в квадрат каждую цифру числа.
Результат также необходимо вернуть в виде целого числа.

Например:
squareDigits(9119) --> 811181
*/

function maskify(string) {
  let result = [];
  string.split("").forEach((el, index) => {
    result.push("#");
  });
  result.length = result.length - 4;
  result.push(string.at(-4), string.at(-3), string.at(-2), string.at(-1));
  return result.join("");
}
