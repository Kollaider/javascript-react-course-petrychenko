"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') return 'Ошибка!';
    return str.split("").reverse().join("");
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = 'Доступные валюты:\n'
    const resCurr = [];
    for (let value of arr) {
        if ( !missingCurr.includes(value) ) {
            resCurr.push(value);
        }
    }
    return str += resCurr.join('\n');
}

console.log(availableCurr(baseCurrencies, additionalCurrencies));

