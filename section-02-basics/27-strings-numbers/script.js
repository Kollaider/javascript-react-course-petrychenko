"use strict";

// Строки
const str = "test";
console.log(str.length); // 4 - длина строки

const arr = [1, 2, 3];
console.log(arr.length); // 3 - количество элементов массива

// Важное отличие: строки неизменяемы (immutable)
// Любые "изменения" создают новую строку

// Методы изменения регистра
console.log(str.toUpperCase()); // "TEST" - преобразует в верхний регистр
console.log(str.toLowerCase()); // "test" - преобразует в нижний регистр

// Поиск подстроки
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // 5 - индекс начала подстроки
console.log(fruit.indexOf("q")); // -1 - означает, что подстрока не найдена

// Методы работы с подстроками
const log = "Hello world";

// slice(start, end) - извлекает часть строки
console.log(log.slice(6, 11)); // "world" - с 6 по 11 индекс (не включая 11)
console.log(log.slice(-5, -1)); // "worl" - поддерживает отрицательные индексы (отсчет с конца)

// substring(start, end) - аналогично slice, но не поддерживает отрицательные индексы
console.log(log.substring(6, 11)); // "world"

// Работа с числами
const num = 12.2;
console.log(Math.round(num)); // 12 - округление до ближайшего целого

// Преобразование строк в числа
const test = "12.2px";
console.log(parseInt(test)); // 12 - преобразует в целое число (останавливается при встрече нечислового символа)
console.log(parseFloat(test)); // 12.2 - преобразует в число с плавающей точкой