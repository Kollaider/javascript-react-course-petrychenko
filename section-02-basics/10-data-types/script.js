"use strict";

// Числа
let number = 4;
let number2 = 4.5;

console.log(4 / 0);     // Infinity
console.log(-4 / 0);    // -Infinity
console.log('string' * 9); // NaN (Not a Number)

// Строки
const person1 = "Alex";
const person2 = 'Alex';
const person3 = `Alex`; // шаблонная строка (template string)

// Булевый тип
const isAvailable = false;

// Ошибка при обращении к необъявленной переменной
// console.log(something); // ReferenceError: something is not defined

// Undefined
let und;
console.log(und); // undefined

// Объекты — хранят свойства и методы
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);      // доступ через точку
console.log(obj['name']);   // доступ через строковый ключ

// Массивы — частный случай объектов
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]); // 'orange.jpg'
