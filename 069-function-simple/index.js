/*
Функция simple, в качестве параметра принимающая строку слов,
возвращает длину самого короткого слова

Например:
simple("Redev - это про дисциплину") --> 3
*/

function simple(string) {
    let minCount = Infinity;
    let words = string.match(/[а-яёА-ЯЁa-zA-Z]+/g);
    if (!words) return 0;
  words.forEach((item) => {
    if (item.length < minCount) {
      minCount = item.length;
    }
  })
    return minCount;
}