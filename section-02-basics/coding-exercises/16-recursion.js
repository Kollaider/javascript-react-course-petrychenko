"use strict";

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    } 
    
    return n > 0 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));