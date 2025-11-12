/*
Напишите функцию `replaceAll(find, replace, str)`, 
которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def';

Например:
replaceAll('abc', 'x', str) --> 'x def def lom x x def'
*/

function replaceAll(find, replace, str) {
    let result = [];
  str.split(' ').forEach((item) => {
    if (item === find) {
      result.push(replace)
    } else result.push(item);
  })
    return result.join(' ');
}