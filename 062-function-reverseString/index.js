/*
Напишите функцию, которая принимает строковый параметр и
меняет буквы в словах в обратном порядке.
Все пробелы в строке должны быть сохранены.

Например:
"This is an example!" -> "sihT si na !elpmaxe"
*/

function reverseString(string) {
  let result = [];
  let split = string.split(" ");
  split.forEach((item) => {
    let reverseWord = "";
    for (let i = item.length - 1; i >= 0; i--) {
      reverseWord += item[i];
    }
    result.push(reverseWord);
  });
  return result.join(" ");
}
