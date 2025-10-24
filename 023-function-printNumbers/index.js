/*
Вывод каждую секунду
важность: 5

Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

    Используя setInterval.
    Используя рекурсивный setTimeout.
*/

function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(() => {
    alert(current);
    if (current == to) clearInterval(timerId);
    current++;
  }, 1000);
}
