/*
Ваша задача написать функцию, которая принимает 
в качестве параметра строку и увеличивает каждую "букву" строки
на число позиции, которую она занимает.

Например:
accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"
*/


function accum(string) {
    let arr = [];
  string.split('').forEach((item, index) => {
        const wordArr = []
    for (let i = 0; i <= index; i++) {
      wordArr.push(item);
    }
        arr.push(wordArr.join(''))
  })
    arr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
    return arr.join('-')
} 