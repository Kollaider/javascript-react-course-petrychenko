'use strict';

const box = document.querySelector('.box');

// Исходные параметры (закомментированы для демонстрации)
// const newHeight = 100;
// const newWidth = 400;

function changeParams(elem, h, w) {
    // Проверка передаваемых параметров
    console.log(elem, h, w); // Выведет элемент и переданные значения
    
    // Установка размеров с использованием оператора нулевого слияния (??)
    elem.style.height = `${h ?? 200}px`; // Используем 200 если h null/undefined
    elem.style.width = `${w ?? 200}px`;  // Используем 200 если w null/undefined
    
    /* 
    Разница между || и ??:
    - || проверяет на "ложные" значения (0, '', false, null, undefined, NaN)
    - ?? проверяет только на null/undefined
    */
}

// Пример вызова (без параметров)
changeParams(box); // Используются значения по умолчанию (200px)

// Демонстрация оператора нулевого слияния (??)
let userName;

// ?? работает только с null и undefined
console.log(userName ?? 'User'); // 'User' (userName undefined)

userName = 0;
console.log(userName ?? 'User'); // 0 (0 не считается как null/undefined)

userName = NaN;
console.log(userName ?? 'User'); // NaN (NaN не считается как null/undefined)

// Пример цепочки операторов ??
let carName;
let carKey;

console.log(carName ?? carKey ?? 'Car'); // 'Car' (оба значения undefined)

/*
Важные нюансы:
1. Приоритет оператора ?? такой же как у || (ниже чем у &&)
2. Нельзя смешивать ?? с && или || без скобок
*/

// Пример с вычислениями
// elem.style.height = `${(h ?? 200) * (w ?? 200)}px`;

// Ошибка при смешивании операторов
let bikeName;
let bikeKey;

// console.log(bikeName && bikeKey ?? 'Bike'); // SyntaxError
// Правильный вариант:
console.log((bikeName && bikeKey) ?? 'Bike'); // Нужно использовать скобки

/*
Рекомендации:
1. Для параметров функций с default values лучше использовать ?? вместо ||
   если нужно отличать 0/''/false от undefined/null
2. Для сложных условий всегда используйте скобки
3. Для обязательных параметров лучше явно проверять:
   if (h === undefined) throw new Error('Height is required')
4. В современных JS можно использовать параметры по умолчанию:
   function changeParams(elem, h = 200, w = 200) {...}
*/