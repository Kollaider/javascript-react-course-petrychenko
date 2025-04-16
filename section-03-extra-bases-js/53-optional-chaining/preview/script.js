'use strict';

// Получаем элементы DOM
const box = document.querySelector('.box');
const block = document.querySelector('.block'); // Вернет null, если элемент не найден

// Проблема: обращение к свойствам null/undefined вызывает ошибку
console.log(block); // null
// console.log(block.textContent); // TypeError: Cannot read properties of null

// Решение 1: Проверка через if
if (block) {
    console.log(block.textContent); // Безопасное обращение
}

// Решение 2: Опциональная цепочка ?. (ES2020)
console.log(block?.textContent); // undefined (без ошибки)

/*
Важные особенности опциональной цепочки:
1. Работает только на чтение свойств
2. Не работает на запись: block?.textContent = '123' - вызовет ошибку
3. Позволяет безопасно обращаться к вложенным свойствам
*/

// Пример с объектом
const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};

// Старый способ проверки вложенных свойств
if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

// Новый способ с опциональной цепочкой
console.log(userData?.skills?.js); // undefined (без ошибки)

// Опциональный вызов методов
console.log(userData.hey?.()); // undefined (метод не существует, но ошибки нет)
userData.say?.(); // 'Hello' (метод существует и вызывается)

/*
Дополнительные возможности:
1. Проверка массивов: arr?.[0]
2. Комбинация с оператором нулевого слияния (??):
   console.log(userData?.skills?.js ?? 'Default');
3. Динамические свойства: obj?.[propName]
*/

// Пример с массивом
const users = null;
console.log(users?.[0]?.name); // undefined

// Пример с динамическим свойством
const key = 'age';
console.log(userData?.[key]); // null

/*
Лучшие практики:
1. Используйте ?. для чтения потенциально отсутствующих свойств
2. Для записи используйте явные проверки if/ternary
3. Не злоупотребляйте глубокими цепочками (user?.data?.profile?.name)
4. Для важных обязательных свойств лучше использовать явные проверки с ошибками
5. Комбинируйте с ?? для значений по умолчанию
*/

// Продолжение выполнения кода
console.log(1 + 2); // 3 (код продолжает работать)