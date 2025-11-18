/*
Напишите функцию так, чтобы она разбивала оболочку camelCase,
используя пробел между словами.

Например:
"camelCasing"  -->  "camel Casing"

"identifier"  -->  "identifier"

"" -->  ""
*/

function camelBreak(string) {
  let result = '';
  const split = string.split('')
  split.forEach((item) => {
  if (item === item.toUpperCase()) {
    result += (' ' + item);
  } else result += item;
  })
  return result;
}