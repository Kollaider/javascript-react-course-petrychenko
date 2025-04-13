"use strict";

let num = 50;

// 1. Цикл while — выполняется, пока условие истинно
while (num <= 55) {
    console.log(num);
    num++;
}

// 2. Цикл do...while — выполнится хотя бы один раз
do {
    console.log(num);
    num++;
} while (num < 55);

// 3. Цикл for с continue и break
for (let i = 1; i < 8; i++) {
    // Пропустить чётные числа
    if (i % 2 === 0) {
        continue;
    }

    // Прерывание цикла, если i больше 6
    if (i > 6) {
        break;
    }

    console.log(i);
}
