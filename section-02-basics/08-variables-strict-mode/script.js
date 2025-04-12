"use strict"; // Включаем современный режим

// Пример неправильного объявления (в строгом режиме вызовет ошибку)
// a = 15;
// console.log(a); // ReferenceError: a is not defined

// === Объявление переменных ===

let number = 5; // изменяемая переменная
const leftBorderWidth = 1; // константа

number = 10;
console.log(number); // 10

// leftBorderWidth = 5; // ❌ TypeError: Assignment to constant variable

// Объекты, объявленные через const, можно изменять внутри
const obj = {
    a: 50
};
obj.a = 60;
console.log(obj.a); // 60

// === Устаревший способ ===

var name = 'Ivan'; // использовать не рекомендуется
name = 'Alex';
console.log(name); // Alex

// var — видна до объявления (hoisting)
console.log(user); // undefined
var user = 'Tom';

// === Область видимости ===

// let и const — блочная область видимости
{
    let result = 50;
    const pi = 3.14;
}
// console.log(result); // ❌ ReferenceError
// console.log(pi);     // ❌ ReferenceError

// var — функциональная область видимости
{
    var temp = 100;
}
console.log(temp); // ✅ 100

// === Завершение ===
// Рекомендуется всегда ставить точки с запятой