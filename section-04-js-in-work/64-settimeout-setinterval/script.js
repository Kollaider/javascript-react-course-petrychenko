'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// ==============================================
// 1. setTimeout - выполнение функции с задержкой
// ==============================================

// Пример с передачей аргументов в функцию
setTimeout(function(text) {
    console.log(text); // Выведет "Hello" через 2 секунды
}, 2000, 'Hello');

// Пример с использованием готовой функции
btn.addEventListener('click', () => {
    // Запускаем таймер при клике на кнопку
    timerId = setTimeout(logger, 500);
});

function logger() {
    if (i == 3) {
        clearTimeout(timerId); // Останавливаем таймер после 3 выполнений
        console.log('Таймер остановлен');
    } else {
        console.log('Текст выводится каждые 500ms');
        i++;
    }
}

// ==============================================
// 2. setInterval - повторяющееся выполнение
// ==============================================

// Пример с интервальным выполнением
timerId = setInterval(logger, 2000);

// Для остановки интервала:
// clearInterval(timerId);

// ==============================================
// 3. Рекурсивный setTimeout
// ==============================================

// Более точная альтернатива setInterval
let id = setTimeout(function log() {
    console.log('Рекурсивный вызов каждые 500ms');
    id = setTimeout(log, 500); // Запускаем следующий таймер
}, 500);

/*
Ключевые различия:
┌───────────────────┬───────────────────────┬──────────────────────┐
│ Характеристика    │ setInterval           │ Рекурсивный setTimeout│
├───────────────────┼───────────────────────┼──────────────────────┤
│ Точность          │ Может накапливать     │ Более точный         │
│                   │ задержки              │                      │
│ Очередь вызовов   │ Создает очередь при   │ Нет очереди          │
│                   │ долгих выполнениях    │                      │
│ Гибкость          │ Фиксированный интервал│ Можно менять интервал│
│ Остановка         │ clearInterval         │ clearTimeout         │
└───────────────────┴───────────────────────┴──────────────────────┘

Лучшие практики:
1. Для точных интервалов используйте рекурсивный setTimeout
2. Всегда очищайте таймеры через clearTimeout/clearInterval
3. Для анимации предпочтительнее requestAnimationFrame
4. Используйте деструктуризацию для передачи аргументов
5. Для сложных сценариев рассмотрите Web Workers

Дополнительные возможности:
- requestAnimationFrame - для анимаций
- requestIdleCallback - для фоновых задач
- Web Workers - для тяжелых вычислений
*/

// ==============================================
// 4. Практический пример - кнопка с таймером
// ==============================================

btn.addEventListener('click', () => {
    // Меняем текст кнопки на время обратного отсчета
    let count = 5;
    btn.disabled = true;
    
    timerId = setInterval(() => {
        btn.textContent = `Подождите ${count} сек`;
        count--;
        
        if (count < 0) {
            clearInterval(timerId);
            btn.textContent = 'Готово!';
            btn.disabled = false;
        }
    }, 1000);
});

// ==============================================
// 5. Анимация с requestAnimationFrame
// ==============================================

const box = document.querySelector('.box');
let pos = 0;

function animate() {
    pos++;
    box.style.left = `${pos}px`;
    
    if (pos < 300) {
        requestAnimationFrame(animate);
    }
}

// Запуск анимации
btn.addEventListener('click', animate);