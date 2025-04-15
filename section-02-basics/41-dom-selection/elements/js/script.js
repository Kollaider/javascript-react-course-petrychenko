'use strict';

/*
DOM (Document Object Model) - это программный интерфейс для HTML/XML документов,
который представляет структуру документа как дерево объектов,
позволяя программам и скриптам динамически изменять содержимое, структуру и стили страницы.
*/

// Получение элементов страницы:

// 1. Получение элемента по ID (должен быть уникальным на странице)
const box = document.getElementById('box'); // Возвращает один элемент или null

// 2. Получение элементов по тегу (возвращает живую HTMLCollection)
const btns = document.getElementsByTagName('button');
console.log(btns); // HTMLCollection (псевдомассив, обновляется при изменении DOM)
console.log(btns[1]); // Доступ к конкретному элементу

// 3. Получение элементов по классу (возвращает живую HTMLCollection)
const circles = document.getElementsByClassName('circle');
console.log(circles); // HTMLCollection (псевдомассив)

// Современные методы выбора элементов (появились в ES5):

// 4. querySelectorAll - возвращает статичный NodeList (не обновляется при изменении DOM)
const hearts = document.querySelectorAll('.heart'); // Все элементы с классом 'heart'
console.log(hearts); // NodeList (имеет метод forEach)

// Итерация по NodeList
hearts.forEach(item => {
    console.log(typeof item); // "object" (все DOM элементы - объекты)
    console.log(item); // Выведет конкретный DOM-элемент (например, div.heart)
});

// 5. querySelector - возвращает первый найденный элемент
const oneHeart = document.querySelector('.heart'); // Первый элемент с классом 'heart'
console.log(oneHeart);

const firstElement = document.querySelector('div'); // Первый div на странице
console.log(firstElement);

/*
Основные различия методов:
1. getElement* методы возвращают "живые" коллекции (HTMLCollection)
2. querySelector* методы возвращают "статические" коллекции (NodeList)
3. querySelector более гибкий - поддерживает любые CSS-селекторы
4. Для итерации по коллекциям:
   - HTMLCollection: только циклы for
   - NodeList: forEach и другие методы массива (после преобразования)
*/

// Дополнительные примеры:
const complexSelector = document.querySelector('div.wrapper > p.special');
const allLinks = document.querySelectorAll('a[target="_blank"]');