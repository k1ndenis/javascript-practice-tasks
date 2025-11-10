/*
Напишите функцию `comparison(str1, str2)`, которая сравнивает
строки без учёта регистра символов.

Например:
comparison('string', 'StRiNg') -->  true
comparison('string', 'Redev') -->  false
*/

function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
