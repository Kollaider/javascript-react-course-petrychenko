'use strict';

// 1. Демонстрация ключей объекта
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
console.log(user); // Все ключи автоматически преобразуются в строки
console.log(typeof Object.keys(user)[0]); // "string"

// 2. Создание Map
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map(); // Создание новой карты

// 3. Добавление элементов в Map
map.set(shops[0], 5000);
console.log(map); // Map(1) { {rice: 500} => 5000 }

// Цепочка добавлений
map.set(shops[1], 15000)
   .set(shops[2], 25000);

// 4. Инициализация Map из массива
const budget = [5000, 15000, 25000];
shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// 5. Основные методы Map
console.log(map.get(shops[0])); // 5000 - получение значения по ключу
console.log(map.has(shops[0])); // true - проверка наличия ключа
console.log(map.size); // 3 - количество элементов

// map.delete(shops[0]); // удаление элемента
// map.clear(); // полная очистка Map

// 6. Создание Map из массива пар ключ-значение
const map2 = new Map([
    [{paper: 400}, 8000],
    [new Date(), 'Дата создания']
]);
console.log(map2);

// 7. Перебор Map
console.log('\n=== Перебор ключей ===');
for (let shop of map.keys()) {
    console.log(shop);
}

console.log('\n=== Перебор значений ===');
for (let price of map.values()) {
    console.log(price);
}

console.log('\n=== Перебор записей ===');
for (let [shop, price] of map.entries()) {
    console.log(shop, price);
}

console.log('\n=== forEach перебор ===');
map.forEach((value, key) => {
    console.log(key, value);
});

// 8. Конвертация между Map и Object
const userMap = new Map(Object.entries(user));
console.log('\nMap из объекта:', userMap);

const newUserObj = Object.fromEntries(userMap);
console.log('Объект из Map:', newUserObj);

/*
Основные преимущества Map перед Object:
1. Ключи могут быть любого типа (объекты, функции, даты и т.д.)
2. Сохраняется порядок вставки элементов
3. Легко получить размер коллекции (.size)
4. Лучшая производительность для частых добавлений/удалений
5. Нет конфликтов со свойствами прототипа
6. Встроенные методы для перебора (keys, values, entries)

Когда использовать Map:
- Когда нужны ключи нестрокового типа
- Когда важен порядок элементов
- Когда нужно часто добавлять/удалять элементы
- Когда нужны дополнительные методы работы с коллекцией

Когда использовать Object:
- Когда работаете с JSON
- Когда нужны методы работы с объектами
- Когда ключи всегда строки/символы
- Когда важна совместимость со старым кодом
*/

// 9. Дополнительные примеры
const objKey = {id: 1};
const funcKey = function() {};

const advancedMap = new Map();
advancedMap.set(objKey, 'Значение для объекта')
          .set(funcKey, 'Значение для функции')
          .set(NaN, 'Не число');

console.log('\n=== Специальные ключи ===');
console.log(advancedMap.get(objKey)); // "Значение для объекта"
console.log(advancedMap.get(funcKey)); // "Значение для функции"
console.log(advancedMap.get(NaN)); // "Не число"