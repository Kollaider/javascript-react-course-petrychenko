"use strict";

// Демонстрация лексического окружения (закомментировано для ясности)
/*
let number = 5; debugger;

function logNumber() {
    // let number = 4; debugger; // Если раскомментировать, будет использована эта переменная
    console.log(number); debugger; // Ищет number в текущем лексическом окружении, затем во внешнем
}

number = 6; // Изменяем значение во внешнем окружении

logNumber(); // Выведет 6 (берет из внешнего окружения)

// Лексическое окружение - это внутренний (скрытый) объект:
// 1. Содержит все локальные переменные и параметры функции
// 2. Имеет ссылку на внешнее лексическое окружение
// 3. Создается при каждом вызове функции

number = 8; // Снова меняем значение
logNumber(); debugger; // Теперь выведет 8
*/

// Пример замыкания - функция сохраняет доступ к переменным родительской функции
function createCounter() {
    let counter = 0; // Локальная переменная, которая будет "замкнута"

    const myFunction = function() {
        counter++; debugger; // Имеет доступ к counter из внешнего лексического окружения
        return counter;
    };
    
    return myFunction; // Возвращаем функцию, которая "запомнила" свое окружение
}

// Создаем экземпляр счетчика
const increment = createCounter();

// Каждый вызов increment() увеличивает и возвращает counter
const c1 = increment(); // 1
const c2 = increment(); // 2
const c3 = increment(); // 3

console.log(c1, c2, c3); // Выведет: 1 2 3

// Лексическое окружение блочных конструкций
{
    let msg = "Hello"; // Существует только внутри этого блока
}
// console.log(msg); // Ошибка: ReferenceError: msg is not defined

// Вложенные блоки имеют свои лексические окружения
for (let i = 0; i < 9; i++) {
    // Каждая итерация цикла имеет свое отдельное лексическое окружение
    for (let j = 0; j < 9; j++) {
        let num = 3; // Существует только внутри этого вложенного блока
    }
    // console.log(num); // Ошибка: переменная num не определена в этом окружении
}