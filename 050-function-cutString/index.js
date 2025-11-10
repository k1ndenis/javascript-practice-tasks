/*
Напишите функцию `cutString(str, n)`, которая удаляет лишние
слова из строки str, оставив в ней n слов.

Например:
const str = "Сила тяжести приложена к центру масс тела";`
cutString(str, 5) --> "Сила тяжести приложена к центру"
*/

function cutString(str, n) {
  let split = str.split(" ");
  split.length = n;
  return split.join(" ");
}
