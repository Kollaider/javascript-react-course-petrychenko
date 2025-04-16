'use strict';

// 1. Получение коллекций элементов
const boxesQuery = document.querySelectorAll('.box'), // NodeList (статический)
      boxesGet = document.getElementsByClassName('box'); // HTMLCollection (живой)

// 2. Разница между коллекциями
console.log(boxesQuery); // Статический NodeList - "снимок" на момент создания
console.log(boxesGet);   // Живая HTMLCollection - обновляется при изменении DOM
console.log(document.body.children); // Еще один пример HTMLCollection

// 3. Демонстрация "живости" коллекций
boxesQuery[0]?.remove(); // Удаляем элемент (NodeList не обновится)
boxesGet[0]?.remove();   // Удаляем элемент (HTMLCollection обновится автоматически)

// 4. Преобразование в обычный массив
const staticArray = Array.from(boxesGet); // Создаем статичную копию
console.log(staticArray); // Теперь это обычный массив

// 5. Добавление новых элементов
for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet автоматически обновится (как живая коллекция)
}

// 6. Метод matches() - проверка селектора
boxesQuery.forEach(box => {
    if (box.matches('.this')) { // Проверяет, соответствует ли элемент селектору
        console.log('Элемент имеет класс .this');
    }
});

// 7. Метод closest() - поиск ближайшего родителя
const wrapper = boxesQuery[0]?.closest('.wrapper');
console.log(wrapper); // Найдет ближайшего родителя с классом .wrapper

/*
Основные различия коллекций:
┌───────────────────┬───────────────────────┬──────────────────────┐
│ Характеристика    │ HTMLCollection        │ NodeList             │
├───────────────────┼───────────────────────┼──────────────────────┤
│ Тип коллекции     │ Живая                 │ Статическая          │
│ Методы            │ Нет forEach           │ Есть forEach         │
│ Обновление        │ Автоматическое        │ Только при новом     │
│                   │ при изменении DOM     │ запросе              │
│ Доступ к элементам│ По имени (для named)  │ Только по индексу    │
└───────────────────┴───────────────────────┴──────────────────────┘

Рекомендации:
1. Для большинства случаев используйте querySelectorAll (NodeList)
2. Для живых обновлений используйте getElementsBy*
3. Для работы с коллекцией как с массивом - Array.from()
4. matches() полезен для проверки элементов в циклах
5. closest() - лучший способ найти родительский элемент

Дополнительные методы:
- contains() - проверка наличия элемента внутри другого
- compareDocumentPosition() - сравнение позиций элементов в DOM
*/