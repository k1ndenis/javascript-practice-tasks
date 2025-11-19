/*
Маркетинговая команда тратит слишком много времени на ввод хэштегов.
Давайте поможем им с нашим собственным генератором хештегов!
Он должен начинаться с хэштега (#).
Все слова должны начинаться с заглавной буквы.
Если окончательный результат длиннее 140 символов, он должен вернуть false.
Если ввод или результат - пустая строка, он должен вернуть false.

Например:
" Hello there thanks for trying my Kata"  -->  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "   -->  "#HelloWorld"
""  -->  false
*/

function hashtagize(string) {
  let result = '#';
  string.split(' ').forEach((item) => {
    if (item) result += item[0].toUpperCase() + item.slice(1);
  })
  return !result || result.length > 140 || result.length == 1 ? false : result;
} 