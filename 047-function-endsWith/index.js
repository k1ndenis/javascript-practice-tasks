/*
Создайте метод объекта `String endsWith()`, который сравнивает
подстроку str1 с окончанием исходной строки str и определяет,
заканчивается ли строка символами подстроки.

Например:
const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";

String.prototype.endsWith = function(substring) {};

str.endsWith(str1)) -->  false
str.endsWith(str2)) -->  true
*/

String.prototype.endsWith = function (substring) {
  return this.slice(-substring.length) === substring;
};
