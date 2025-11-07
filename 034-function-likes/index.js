/*
Вы, наверное, знаете систему «лайков» по Facebook и другим страницам.
Люди могут "лайкать" сообщения в блогах,изображения или другие предметы.
Мы хотим создать текст, который должен отображаться рядом с таким элементом.
Реализуйте функцию likes :: [String] -> String, которая
должна принимать входной массив, содержащий имена людей,которым нравится элемент.
Он должен возвращать отображаемый текст, как показано в примерах:

Например:
likes([]) --> 'no one likes this'
likes(['Peter']) --> 'Peter likes this'
likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'
*/

function likes(arr) {
  if (arr.length == 0) {
    return "no one likes this";
  } else if (arr.length == 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length == 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else {
    arr.forEach((user, index) => {
      if (user == arr[0]) {
        return (arr[index] = arr[index]);
      }
      if (user == arr[arr.length - 2]) {
        return (arr[index] = ` ${user} and ${arr[arr.length - 1]} like this`);
      }
      arr[index] = ` ${user}`;
      return arr;
    });
  }
  arr.pop();
  return String(arr);
}
