/*
Ваша задача - отсортировать заданную строку.
Каждое слово в строке будет содержать одно число.
Это число - позиция, которую слово должно занимать в результате.

Примечание: числа могут быть от 1 до 9.
Таким образом, 1 будет первым словом (не 0).

Если входная строка пуста, вернуть пустую строку.
Слова во входной строке будут содержать только последовательные числа.

Например:
"is2 Thi1s T4est 3a" -> "Thi1s is2 3a T4est"
*/

function sortStringByNumber(string) {
  let result = [];
  let split = string.split(" ");
  split.forEach((item) => {
    if (item.includes(1)) {
      result[0] = item;
    }
    if (item.includes(2)) {
      result[1] = item;
    }
    if (item.includes(3)) {
      result[2] = item;
    }
    if (item.includes(4)) {
      result[3] = item;
    }
    if (item.includes(5)) {
      result[4] = item;
    }
    if (item.includes(6)) {
      result[5] = item;
    }
    if (item.includes(7)) {
      result[6] = item;
    }
    if (item.includes(8)) {
      result[7] = item;
    }
    if (item.includes(9)) {
      result[8] = item;
    }
  });
  return result.join(" ");
}
