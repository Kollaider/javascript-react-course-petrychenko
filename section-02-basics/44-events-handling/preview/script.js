"use strict";

// Получаем элементы DOM
const btn = document.querySelector('#btn'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a'),
      btns = document.querySelectorAll('button');

// 1. Обработчики событий (лучшие практики)
/*
Разница между onclick и addEventListener:
- onclick можно назначить только один обработчик
- addEventListener позволяет добавлять несколько обработчиков
*/

// ❌ Устаревший способ (не рекомендуется)
// btn.onclick = function() { alert('Click'); }

// ✅ Современный способ
btn.addEventListener('click', () => {
    console.log('First click handler');
});

btn.addEventListener('click', () => {
    console.log('Second click handler');
});

// 2. Работа с объектом события
const deleteElement = (e) => {
    console.log('Event details:', {
        event: e,
        currentTarget: e.currentTarget, // Элемент, на котором висит обработчик
        target: e.target, // Элемент, который вызвал событие
        type: e.type // Тип события
    });
    
    // Пример удаления элемента
    // e.target.remove();
    
    // Пример однократного выполнения
    // if (++i === 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// Вешаем обработчик на несколько элементов
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

// 3. Предотвращение поведения по умолчанию
link.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    console.log('Link click prevented:', event.target);
});

// 4. Обработка событий на коллекции элементов
btns.forEach(btn => {
    // {once: true} - обработчик сработает только один раз
    btn.addEventListener('click', deleteElement, {once: true});
});

// 5. Дополнительные примеры обработчиков
btn.addEventListener('mouseenter', () => {
    console.log('Mouse entered button');
});

/*
Основные концепции:
1. Объект события (event) содержит:
   - target - элемент, который вызвал событие
   - currentTarget - элемент, на котором висит обработчик
   - type - тип события (click, mouseenter и т.д.)

2. Опции addEventListener:
   - {once: true} - выполнить один раз
   - {capture: true} - фаза перехвата
   - {passive: true} - для оптимизации скролла

3. Удаление обработчиков:
   - removeEventListener требует ту же функцию
   - Для анонимных функций удаление невозможно

4. Всплытие и перехват:
   - События всплывают по DOM дереву
   - stopPropagation() прекращает всплытие
*/