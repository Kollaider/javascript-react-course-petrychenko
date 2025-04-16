"use strict";

/*
Symbol - примитивный тип данных для создания уникальных идентификаторов
Особенности:
1. Уникальность - каждый Symbol уникален, даже с одинаковым описанием
2. Неперечислимость - не показываются в for..in, Object.keys()
3. Неизменяемость - нельзя перезаписать случайно
*/

// 1. Базовое использование
const obj = {
    name: 'Test'
};

// Создание Symbol
const id = Symbol('id'); // 'id' - описание (не идентификатор)
obj[id] = 1;

console.log(obj[id]); // 1 - доступ по Symbol
console.log(obj['id']); // undefined - обычный доступ не работает
console.log(obj); // { name: 'Test', [Symbol(id)]: 1 }

// 2. Уникальность Symbol
const id2 = Symbol('id');
console.log(id === id2); // false - всегда разные, даже с одинаковым описанием

// 3. Symbol в литерале объекта
const objWithSymbol = {
    name: 'Test',
    [Symbol('hidden')]: 42
};

for (let key in objWithSymbol) {
    console.log(key); // только 'name' - Symbol не перечисляется
}

// 4. Доступ к Symbol свойствам
console.log(Object.getOwnPropertySymbols(objWithSymbol)); // [Symbol(hidden)]
const symbolKey = Object.getOwnPropertySymbols(objWithSymbol)[0];
console.log(objWithSymbol[symbolKey]); // 42

// 5. Практическое применение - защита свойств
let db = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123 // Защищенное свойство
};

// Сторонний код не сможет случайно перезаписать
db.id = 'new value'; // Создаст новое свойство, а не перезапишет Symbol
console.log(db[Symbol('id')]); // undefined - потому что это новый Symbol
console.log(Object.getOwnPropertySymbols(db)[0]); // Доступ к оригинальному Symbol

// 6. Глобальный реестр Symbol
const globalId = Symbol.for('globalId'); // Создает или находит глобальный Symbol
db[globalId] = 123;

// Получение Symbol по ключу
console.log(Symbol.keyFor(globalId)); // 'globalId'
console.log(db[Symbol.for('globalId')]); // 123

/*
Когда использовать Symbol:
1. Для скрытых свойств объектов
2. Для защиты от перезаписи критических свойств
3. Для создания уникальных идентификаторов
4. Для определения специального поведения объектов (well-known symbols)

Известные системные Symbol:
- Symbol.iterator - для перебора объектов
- Symbol.toStringTag - для Object.prototype.toString()
- Symbol.asyncIterator - для асинхронного перебора
*/

// 7. Пример с защищенным API
const api = {
    [Symbol('token')]: 'secret-api-key',
    request() {
        console.log(`Using token: ${this[Symbol.for('token')]}`);
    }
};

// Сторонний код не сможет получить/изменить токен
api.token = 'fake-key'; // Не влияет на оригинальный Symbol
api.request(); // Использует защищенный токен