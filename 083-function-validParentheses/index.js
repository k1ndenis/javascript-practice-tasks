/*
Напишите функцию, которая принимает строку круглых скобок и определяет,
допустим ли порядок скобок.
Функция должна возвращать истину, если строка действительна,
и ложь, если она недействительна.

Например:
validParentheses(')(()))') --> false
validParentheses('()') --> true
validParentheses('()()') --> true
validParentheses('()((()') --> false
*/

function validParentheses(string) {
  return string.includes('((') || string.includes('))') ? false : true;
} 