/*
Напишите функцию colonOdd(num), которая принимает число num в
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7
*/

function colonOdd(num) {
  let string = String(num).split("");
  let result = "";
  string.forEach((item, index) => {
    let odd = "13579";
    if (odd.includes(item) && odd.includes(string[index + 1])) {
      result += item + ":";
    } else result += item;
  });
  return result;
}
