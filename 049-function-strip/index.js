/*
Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

Например:
const str = "    Pasha is a good      boy     ";
strip(str) --> "Pasha is a good boy"
*/

function strip(str) {
  let split = str.split("");
  let result = "";
  split.forEach((item, index) => {
    if (item === " " && split[index + 1] === " ") {
      result += "";
    } else result += item;
  });
  return result;
}
