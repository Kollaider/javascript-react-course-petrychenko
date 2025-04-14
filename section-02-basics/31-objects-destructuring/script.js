"use strict";

// Создание объекта через конструктор Object()
const obj = new Object();

// Объект с различными свойствами, включая вложенный объект
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// Пример удаления свойства объекта
// delete options.name;
// console.log(options); // { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// Перебор свойств объекта с проверкой на вложенные объекты
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        // Вложенный цикл для перебора свойств вложенного объекта
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Подсчет количества свойств объекта (классический способ)
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter); // 4

// Современный способ подсчета свойств через Object.keys()
console.log(Object.keys(options).length); // 4

// Объект с методом
const optionsWithMethod = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// Вызов метода объекта
optionsWithMethod.makeTest(); // 'Test'

// Деструктуризация объекта - извлечение свойств в отдельные переменные
const {border, bg} = options.colors;
console.log(border, bg); // 'black red'

/*
Основные концепции объектов в JavaScript:
1. Объекты могут содержать вложенные объекты
2. Для перебора свойств используется цикл for...in
3. Доступны встроенные методы (Object.keys(), Object.values() и др.)
4. Поддерживаются свойства-аксессоры (getter/setter)
5. Возможна деструктуризация для удобного извлечения свойств
6. Объекты являются ссылочным типом данных
7. Поддерживают методы (функции как свойства объекта)
*/