/*
Переместите первую букву каждого слова в его конец,
затем добавьте «ау» в конец слова. Не трогайте знаки препинания.

Например:
pigIt('Pig latin is cool') --> 'igPay atinlay siay oolcay'
pigIt('This is my string') --> 'hisTay siay ymay tringsay'
*/

function pigIt(string) {
  let result = [];
  string.split(' ').forEach((item) => {
    result.push(item.slice(1) + item[0].toUpperCase() + 'ay') 
  })
  return result.join(' ');
} 