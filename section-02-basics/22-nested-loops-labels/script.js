"use strict";

// Вложенные циклы: вывод чисел от 1 до 2 на двух уровнях
for (let i = 1; i < 3; i++) {
    console.log(i);
    for (let j = 1; j < 3; j++) {
        console.log(j);
    }
}

// Задача: создать фигуру — треугольник из символов *
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n'; // переход на новую строку после каждой строки звёзд
}

console.log(result);
/*
*
**
***
****
*****
******
*/


// Пример использования метки и continue для управления вложенными циклами
first: for (let i = 0; i < 3; i++) {           // <- метка для внешнего цикла
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 1; k < 3; k++) {
            if (k == 2) continue first;        // переход к следующей итерации внешнего цикла
            console.log(`Third level: ${k}`);
        }
    }
}

/*
Результат будет примерно такой:
First level: 0
Second level: 0
Third level: 1
First level: 1
Second level: 0
Third level: 1
First level: 2
Second level: 0
Third level: 1
*/

// То же самое можно сделать с break вместо continue
// Например:
// if (k == 2) break first;
