'use strict';

/*
Set - коллекция уникальных значений (примитивов или ссылок на объекты)
Особенности:
1. Хранит только уникальные значения
2. Сохраняет порядок вставки элементов
3. Нет индексов как в массиве
4. Оптимизирован для проверки наличия значения
*/

// 1. Создание Set из массива с дубликатами
const arr = [1, 1, 2, 2, 4, 5, 6, 4];
const set = new Set(arr);
console.log(set); // Set(5) {1, 2, 4, 5, 6} - дубли удалены

// 2. Set со строками
const names = new Set(['Alex', 'Anna', 'Oleg', 'Alex']);
console.log(names); // Set(3) {"Alex", "Anna", "Oleg"}

// 3. Добавление элементов
names.add('Ivan').add('Oleg'); // "Oleg" не добавится повторно
console.log(names); // Set(4) {"Alex", "Anna", "Oleg", "Ivan"}

// 4. Основные методы Set
console.log(names.has('Anna')); // true - проверка наличия
console.log(names.size); // 4 - количество элементов
names.delete('Alex'); // удаление элемента
// names.clear(); // полная очистка Set

// 5. Перебор Set
console.log('\n=== for..of перебор ===');
for (let value of set) {
    console.log(value); // 1, 2, 4, 5, 6
}

console.log('\n=== forEach перебор ===');
set.forEach((value, valueAgain) => {
    // valueAgain дублирует value для совместимости с Map
    console.log(value, valueAgain);
});

// 6. Псевдо-методы для совместимости с Map
console.log(set.values()); // [Set Iterator] {1, 2, 4, 5, 6}
console.log(set.keys());   // То же что и values()
console.log(set.entries());// Итератор пар [value, value]

// 7. Пример использования - удаление дубликатов
function unique(arr) {
    // return new Set(arr); // Вернет Set
    return Array.from(new Set(arr)); // Вернет массив без дублей
}

console.log('\nУникальные значения:', unique(arr)); // [1, 2, 4, 5, 6]

/*
Преимущества Set перед массивом:
1. Автоматическая проверка уникальности
2. Быстрый поиск элемента (has работает быстрее includes)
3. Удобные методы для работы с коллекцией

Когда использовать Set:
- Когда нужно хранить только уникальные значения
- Когда важна быстрая проверка наличия элемента
- Когда порядок элементов не должен меняться

Когда использовать массив:
- Когда нужны индексы элементов
- Когда важна возможность сортировки
- Когда нужно хранить дубликаты
*/

// 8. Дополнительные примеры
const objects = new Set();
objects.add({id: 1}).add({id: 1}); // Добавит 2 объекта, так как это разные ссылки

console.log('\nSet с объектами:', objects); // Set(2) {{id: 1}, {id: 1}}

// 9. Работа с DOM элементами
const elements = new Set(document.querySelectorAll('div'));
elements.forEach(el => el.classList.add('highlight'));