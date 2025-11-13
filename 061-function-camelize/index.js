/*
Напишите функцию, которая переделывает строку из camelCase в snake_case.

Например:
solution("redevCourses") -> "redev_courses"
*/

function solution(string) {
  let split = string.split("");
  split.forEach((item, index) => {
    if (item === item.toUpperCase()) {
      split.splice(index, 1, "_", item.toLowerCase());
    }
  });
  return split.join("");
}
