/*
Напишите функцию, которая принимает число n (n> 0) и 
возвращает строку с обратной последовательностью от n до 1.


Например: если n = 5 на выходе у Вас должно быть "5 4 3 2 1"
*/

function incrementToOne(num) {
  let result = [];
    for (let i = num; i >= 1; i--) {
    result.push(i);
  }
    return result.join(' ');
}