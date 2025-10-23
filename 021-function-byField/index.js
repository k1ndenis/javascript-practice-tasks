/*
Сортировать по полю
важность: 5

У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));

То есть чтобы вместо функции мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.
*/

function byField(fieldName) {
  if (fieldName == "name") {
    return (a, b) => (a.name > b.name ? 1 : -1);
  }
  if (fieldName == "age") {
    return (a, b) => (a.age > b.age ? 1 : -1);
  } else return;
}
