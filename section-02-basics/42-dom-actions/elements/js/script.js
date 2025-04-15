'use strict';

// Получаем элементы DOM разными способами
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// 1. Работа со стилями элементов
console.dir(box); // Выводим элемент как объект со всеми свойствами

// Установка стилей через свойство style
box.style.backgroundColor = 'blue';
box.style.width = '500px';

// Альтернативный способ установки нескольких стилей
box.style.cssText = 'background-color: blue; width: 500px'; 

// Использование шаблонных строк для динамических значений
const num = 400;
box.style.cssText = `background-color: blue; width: ${num}px`;

// Стилизация элементов в коллекциях
btns[1].style.borderRadius = '100%'; // Для конкретного элемента
circles[0].style.backgroundColor = 'red'; // Для первого элемента коллекции

// 2. Массовое применение стилей
// Современный способ через forEach (работает только с NodeList)
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

// 3. Создание и добавление элементов
const div = document.createElement('div'); // Создаем новый div
div.classList.add('black'); // Добавляем класс

// Добавление элементов в DOM разными способами:
document.body.append(div); // В конец body
const div2 = div.cloneNode(true); // Клонируем элемент (true - с потомками)
div2.style.backgroundColor = 'yellow';

wrapper.prepend(div2); // В начало wrapper
hearts[0].before(div2); // Перед hearts[0]
hearts[0].after(div2); // После hearts[0]

// 4. Удаление и замена элементов
circles[0].remove(); // Удаляем элемент
hearts[0].replaceWith(circles[0]); // Заменяем элемент

// 5. Устаревшие методы (не рекомендуется)
wrapper.appendChild(div); // Аналог append
wrapper.insertBefore(div, hearts[0]); // Аналог before
wrapper.removeChild(hearts[1]); // Аналог remove
wrapper.replaceChild(circles[1], hearts[0]); // Аналог replaceWith

// 6. Работа с содержимым элементов
div.innerHTML = "<h1>Hello world</h1>"; // Устанавливаем HTML
// div.textContent = "Hello"; // Альтернатива для текста

// 7. Методы insertAdjacentHTML (4 варианта позиционирования)
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // В начало элемента
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // В конец элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // После элемента

/*
Основные концепции:
1. Для работы со стилями:
   - element.style.property - для отдельных свойств
   - element.style.cssText - для нескольких свойств сразу
   - classList - для управления классами

2. Разница между методами:
   - append/prepend - современные методы
   - appendChild/insertBefore - устаревшие аналоги

3. Безопасность:
   - textContent безопаснее innerHTML (нет риска XSS)
   - insertAdjacentHTML требует валидации вводимых данных

4. Производительность:
   - Изменение DOM - дорогая операция
   - Лучше делать несколько изменений за один раз
*/