"use strict";

console.log('arr' + - "object");

console.log(4 + ' - object') // '4 - object'


console.log(4 + +' - object') // NaN

console.log(4 + +'5'); // 9 (использование унарного плюса)

// инкремент и декремент

let incr = 10,
    decr = 10;

// постфиксная форма
incr++;
decr--;

console.log(incr);
console.log(decr);

// префиксная форма
++incr;
--decr;


console.log(5 % 2) // 1

console.log(2*4 == 8) // true
console.log(2*4 == '8') // true
console.log(2*4 === '8') // false строгое равенство
console.log(2*4 === 8) // true


// логические операторы

const isChecked = true,
      isClose = true,
      isNew = false;

console.log(isChecked && isClose); // true
console.log(isChecked || isNew); // true

// оператор отрицания
console.log(!isChecked || isNew) // false
console.log(2 + 2 * 2 != 8) // true
console.log(2 + 2 * 2 !== 8) // true строгое неравенство


