/*
Создайте функцию с именем divisors, которая принимает
целое число n > 1 и возвращает массив со всеми делителями 
целого числа (кроме 1 и самого числа), от наименьшего до наибольшего.
Если число простое, верните строку '(integer) is prime'
*/

function divisors(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) result.push(i);
  }
    if (result.length <= 2) return n + ' is prime';
    result.shift();
    result.pop();
    return result;
}