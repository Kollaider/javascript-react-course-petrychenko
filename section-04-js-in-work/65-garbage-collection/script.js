'use strict';

// ==============================================
// 1. Глобальные переменные (самая опасная утечка)
// ==============================================

function func() {
    // Плохо: создает глобальную переменную (без 'use strict')
    window.smth = 'string'; // Не будет удалена сборщиком мусора
    
    // Хорошо: локальная переменная
    const localSmth = 'string'; // Будет удалена после выполнения функции
}

/*
Решение:
- Всегда использовать 'use strict'
- Избегать присваивания свойств глобальным объектам (window, document)
- Использовать модульную систему (ES6 modules)
*/

// ==============================================
// 2. Забытые таймеры и интервалы
// ==============================================

function setupTimer() {
    const someRes = getData(); // Большие данные
    const node = document.querySelector('.class');
    
    // Проблема: таймер продолжает работать даже когда node удален
    const timerId = setInterval(function() {
        if (node) {
            node.innerHTML = someRes; // Удерживает ссылки на node и someRes
        }
    }, 1000);
    
    // Решение: очищать таймеры когда они не нужны
    return {
        stop: () => clearInterval(timerId)
    };
}

/*
Лучшие практики:
- Всегда сохранять ID таймеров
- Очищать через clearTimeout/clearInterval
- Использовать WeakRef для слабых ссылок
*/

// ==============================================
// 3. Обработчики событий на удаленных элементах
// ==============================================

function addListeners() {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        console.log('Clicked!');
    });
    document.body.appendChild(button);
    
    // Современные браузеры автоматически очищают обработчики при удалении элемента
    document.body.removeChild(button);
}

/*
Для старых браузеров:
- Явно удалять обработчики перед удалением элемента
- Использовать делегирование событий
*/

// ==============================================
// 4. Проблемы с замыканиями
// ==============================================

function outer() {
    const potentiallyHugeArray = []; // Может расти до огромных размеров
    
    return function inner() {
        potentiallyHugeArray.push('Hello'); // Удерживает ссылку на массив
        console.log("Hello!!");
    };
}

const sayHello = outer(); // Массив сохраняется в замыкании

/*
Решение:
- Избегать хранения больших данных в замыканиях
- Явно очищать ссылки (sayHello = null)
- Использовать WeakMap/WeakSet для временных данных
*/

// ==============================================
// 5. Ссылки на DOM-элементы
// ==============================================

// Проблемный вариант:
function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    return div;
}

const testDiv = createElement();
document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
    // testDiv остается в памяти JavaScript
}

// Решение 1: локальная переменная
function betterCreateElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(div); // Добавляем сразу
    return div; // Но лучше вообще не возвращать
}

// Решение 2: WeakRef (ES2021)
function createWithWeakRef() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(div);
    return new WeakRef(div); // Слабая ссылка
}

const weakDiv = createWithWeakRef();
// Доступ через weakDiv.deref() (может вернуть undefined)

/*
Дополнительные методы предотвращения утечек:
1. Использование инструментов:
   - Chrome DevTools Memory tab
   - Heap Snapshots
   - Allocation timeline

2. Паттерны:
   - Избегать больших глобальных кэшей
   - Использовать пулы объектов
   - Очищать ссылки в componentWillUnmount (React)

3. API:
   - WeakMap и WeakSet для ассоциаций
   - FinalizationRegistry (ES2021) для отслеживания сборки мусора
*/