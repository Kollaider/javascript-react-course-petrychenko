"use strict";

// Примитивы передаются по значению (копируется значение)
let a = 5,
    b = a;  // b получает копию значения a

b = b + 5;
console.log(b); // 10 (изменение b не влияет на a)
console.log(a); // 5 (значение осталось неизменным)

// Объекты передаются по ссылке
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // copy получает ссылку на тот же объект
copy.a = 10;     // Изменение отразится и на obj

console.log(copy); // { a: 10, b: 1 }
console.log(obj);  // { a: 10, b: 1 } 
// Оба указывают на один объект в памяти

/* 
Способы создания копий объектов и массивов:
1. Поверхностное копирование (shallow copy)
2. Глубокое копирование (deep copy)
*/

// 1. Функция для поверхностного копирования объектов
function copyObj(mainObj) {
    let objCopy = {};
    
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]; // Копируем каждое свойство
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {  // Вложенный объект (будет скопирована ссылка)
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10; // Изменяется только newNumbers

console.log(numbers);    // { a: 2, b: 5, c: { x: 7, y: 4 } }
console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }

// Для вложенных объектов копируется ссылка!
newNumbers.c.x = 10; // Изменится в обоих объектах

console.log(numbers);    // { a: 2, b: 5, c: { x: 10, y: 4 } }
console.log(newNumbers); // { a: 10, b: 5, c: { x: 10, y: 4 } }

// 2. Object.assign() - альтернативный способ поверхностного копирования
const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // Создаем новый объект
console.log(add);   // { d: 17, e: 20 }
console.log(clone); // { d: 17, e: 20 }

// 3. Копирование массивов (метод slice())
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Создает новый массив

newArray[1] = 'asdf';
console.log(oldArray); // ['a', 'b', 'c'] (не изменился)
console.log(newArray); // ['a', 'asdf', 'c']

// 4. Spread оператор (ES6-ES9) - современный способ
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // Объединение

console.log(internet);
/*
[
    'youtube',
    'vimeo',
    'rutube',
    'wordpress',
    'livejournal',
    'blogger',
    'vk',
    'facebook'
]
*/

// Использование spread для передачи аргументов
function log(a, b, c) {
    console.log(a); // 2
    console.log(b); // 5
    console.log(c); // 7
}

const num = [2, 5, 7];
log(...num); // Эквивалентно log(2, 5, 7)

// Создание копий через spread
const array = ['a', 'b'];
const newArray = [...array]; // Копия массива

const q = {
    one: 1,
    two: 2
};
const newObj = {...q}; // Копия объекта
console.log(newObj); // { one: 1, two: 2 }

/*
Важные замечания:
1. Spread оператор делает поверхностную копию
2. Для глубокого копирования используйте:
   - JSON.parse(JSON.stringify(obj)) (имеет ограничения)
   - Специальные библиотеки (lodash.cloneDeep)
3. Методы slice(), concat() создают копии массивов
4. Object.assign() копирует только enumerable свойства
*/