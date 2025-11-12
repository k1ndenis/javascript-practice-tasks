/*
Напишите функцию capitalizeFirstLetter(str), 
которая преобразовывает первый символ строки в верхний регистр.
*/

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1)
} 