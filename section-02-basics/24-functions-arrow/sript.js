"use strict";

let num = 20;


// 1. function declaration, функция существует еще до того как код запустится!
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    // num = 10;
    console.log(num); // 
}

showFirstMessage('Hello world');

console.log(num);


console.log(showFirstMessage) // [Function: showFirstMessage]

// анонимные функции


// Замыкание функции - это сама функция со всеми внешними переменными, которые ей доступны

function calc(a, b) {
    return (a + b);
    // console.log('something') // unrichable code
}

// 
console.log(calc(4, 3))
console.log(calc(5, 6))
console.log(calc(8, 3))


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// 2. function expression - создается тогда когда до нее доходит поток кода
const logger = function() {
    console.log('Hello');
}
logger();

// 3. arrow functions;
const calc = (a, b) => {return a + b}
const calc = (a, b) => a + b;
const calc = c => c * 2;




