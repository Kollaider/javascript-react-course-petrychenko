"use strict";


const usdCur = 28;
const eurCur = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;

}

function promotion (result) {
    console.log(result * discount)
}

// promotion(convert(500, usdCur));
const res = convert(500, usdCur)
promotion(res);



// закончить выполнение функции досрочно
// по умолчанию функция возвращает underfined
function test() {
    for (let i = 0; i < 5; i++) {
        if (i == 3) return;
    }
    console.log('Done')
}

function doNothing() {};
console.log(doNothing() === undefined)
