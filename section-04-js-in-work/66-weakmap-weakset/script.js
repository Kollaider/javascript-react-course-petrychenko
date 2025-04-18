'use strict';

// 1. Создание объекта и различных коллекций
let user = {name: 'Ivan'};

// Обычный массив (хранит сильные ссылки)
const arr = [user];

// Обычная Map (хранит сильные ссылки на ключи)
let map = new Map();
map.set(user, 'data');

// WeakMap (хранит слабые ссылки на ключи)
let weakMap = new WeakMap();
weakMap.set(user, 'data');

// 2. Удаляем ссылку на объект
user = null;

// Проверяем коллекции
console.log(user);      // null - объект удален из памяти
console.log(arr[0]);    // {name: 'Ivan'} - массив хранит сильную ссылку
console.log([...map.keys()]); // [{name: 'Ivan'}] - Map хранит сильную ссылку

/*
Особенности WeakMap:
1. Ключами могут быть только объекты (не примитивы)
2. Если нет других ссылок на объект-ключ, он будет удален из WeakMap
3. Нет методов для перебора (keys(), values(), entries())
4. Доступны только has(), get(), set(), delete()
5. Не поддерживает size или forEach
*/

// 3. Проверка наличия в WeakMap
console.log(weakMap.has(user)); // false - объект удален
console.log(weakMap); // WeakMap { <items unknown> } - структура скрыта

// ==============================================
// Практический пример с кэшированием пользователей
// ==============================================

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

// Удаляем ссылку на Лену
lena = null;

console.log(cache.has(lena)); // false - объект удален из кэша
console.log(cache.has(alex)); // true - объект еще существует

// ==============================================
// WeakSet - аналогично WeakMap, но только для хранения объектов
// ==============================================

/*
Особенности WeakSet:
1. Может содержать только объекты (не примитивы)
2. Объект остается в множестве, пока доступен где-то еще
3. Поддерживает только add(), has(), delete()
4. Нет методов для перебора или size
*/

// Пример с прочитанными сообщениями в чате
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'Hi', from: 'Alex'},
    {text: 'Hola', from: 'Elena'},
];

let readMessages = new WeakSet();

// Помечаем сообщения как прочитанные
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// Повторное добавление не имеет эффекта
readMessages.add(messages[0]);

// Проверяем прочитанные сообщения
console.log(readMessages.has(messages[0])); // true

// Удаляем первое сообщение
messages.shift();

// Проверяем снова
console.log(readMessages.has(messages[0])); // false (бывшее messages[1])

/*
Типичные случаи использования:
1. Кэширование (WeakMap)
2. Хранение дополнительных данных для объектов
3. Отслеживание прочитанных сообщений (WeakSet)
4. Хранение временных данных
5. Реализация приватных свойств объектов

Преимущества перед обычными Map/Set:
1. Автоматическая очистка неиспользуемых объектов
2. Не препятствуют сборке мусора
3. Более безопасное хранение временных данных

Ограничения:
1. Нельзя перебирать элементы
2. Нельзя получить размер коллекции
3. Только объекты в качестве ключей/значений
*/