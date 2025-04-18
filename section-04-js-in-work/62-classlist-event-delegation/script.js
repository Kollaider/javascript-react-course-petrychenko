'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// 1. Работа с classList
/*
Методы classList:
- add() - добавляет класс(ы)
- remove() - удаляет класс(ы)
- toggle() - переключает класс
- contains() - проверяет наличие класса
- item() - получает класс по индексу
- length - количество классов
*/

// Примеры работы с classList
console.log(btns[0].classList.length); // Количество классов
console.log(btns[0].classList.item(0)); // Первый класс
btns[0].classList.add('red', 'other'); // Добавляем несколько классов
btns[0].classList.remove('blue'); // Удаляем класс
btns[0].classList.toggle('blue'); // Переключаем класс

// 2. Обработчик событий с toggle
btns[1].addEventListener('click', () => {
    // Классический вариант с if/else
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    
    // Оптимальный вариант с toggle
    btns[1].classList.toggle('red');
});

// 3. className (устаревший способ)
console.log(btns[0].className); // Возвращает строку классов (не рекомендуется)

// 4. Делегирование событий
wrapper.addEventListener('click', (event) => {
    // Проверяем, был ли клик по кнопке
    if (event.target && event.target.tagName === "BUTTON") {
        console.log('Клик по кнопке');
    }
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('Hello');
    // }
    // Альтернативный вариант с matches()
    if (event.target && event.target.matches("button.red")) {
        console.log('Клик по красной кнопке');
    }
});

/*
Почему делегирование лучше:
1. Работает для динамически добавленных элементов
2. Меньше обработчиков событий в памяти
3. Лучшая производительность для многих элементов
*/

// 5. Проблема с прямым назначением обработчиков
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Обработчик для существующей кнопки');
    });
});

// 6. Добавление новой кнопки (делегирование сработает, прямой обработчик - нет)
const btn = document.createElement('button');
btn.classList.add('red');
btn.textContent = 'Новая кнопка';
wrapper.append(btn);

/*
Лучшие практики:
1. Всегда используйте classList вместо className
2. Для переключения классов используйте toggle()
3. Для многих элементов применяйте делегирование событий
4. Для проверки элементов используйте matches()
5. Избегайте множества отдельных обработчиков
*/

// 7. Дополнительные примеры
wrapper.addEventListener('mouseover', (event) => {
    if (event.target.matches('.red')) {
        event.target.style.opacity = '0.7';
    }
});

wrapper.addEventListener('mouseout', (event) => {
    if (event.target.matches('.red')) {
        event.target.style.opacity = '1';
    }
});


