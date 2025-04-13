"use strict";

// Пример с if-else
if (4 === 4) {
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;

// Условная конструкция if-else if-else
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok');
}

// Тернарный оператор (короткая форма условия)
(num === 50) ? console.log('Ok') : console.log('Error');

// Конструкция switch — проверяет строгое соответствие (===)
switch (num) {
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log('Wrong');
        break;
    case 50:
        console.log('You are right');
        break;
    default:
        console.log('Another');
        break;
}
