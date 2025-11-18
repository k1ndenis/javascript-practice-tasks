/*
Банкоматы допускают 4 или 6-значные ПИН-коды, 
а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

Если функции передана правильная строка PIN,
верните `true`, иначе верните `false`.

Например:
correctPin('5567') --> true
correctPin('5432567') --> false
*/


function correctPin(string) {
    if (isNaN(+string)) return false;
    return (string.length == 4 || string.length == 6) ? true : false;
} 