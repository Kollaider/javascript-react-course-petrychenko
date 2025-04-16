"use strict";

/*
События для мобильных устройств:
1. touchstart - касание элемента
2. touchmove - движение пальца по элементу
3. touchend - прекращение касания
4. touchenter - палец перемещается на элемент
5. touchleave - палец уходит за пределы элемента
6. touchcancel - система прервала отслеживание касания
*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    // Обработка начала касания
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Касание началось');
        
        // Основные свойства Touch-событий:
        console.log('Все касания экрана:', e.touches); // Все активные касания
        console.log('Касания этого элемента:', e.targetTouches); // Только текущего элемента
        console.log('Измененные касания:', e.changedTouches); // Участвующие в этом событии
        
        // Получение координат первого касания
        const touch = e.changedTouches[0];
        console.log(`Позиция: X=${touch.pageX}, Y=${touch.pageY}`);
    });

    // Обработка движения пальца
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Движение пальца');
        
        // Отслеживание координат первого пальца
        const touch = e.targetTouches[0];
        console.log(`Текущая позиция: X=${touch.pageX}, Y=${touch.pageY}`);
        
        // Можно реализовать перетаскивание:
        // box.style.transform = `translate(${touch.pageX}px, ${touch.pageY}px)`;
    });

    // Обработка окончания касания
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('Касание завершено');
        
        // В touchend доступны только changedTouches
        const touch = e.changedTouches[0];
        console.log(`Последняя позиция: X=${touch.pageX}, Y=${touch.pageY}`);
    });

    // Дополнительные события (редко используемые)
    box.addEventListener('touchenter', (e) => {
        console.log('Палец вошел в элемент');
    });
    
    box.addEventListener('touchleave', (e) => {
        console.log('Палец вышел за пределы элемента');
    });
    
    box.addEventListener('touchcancel', (e) => {
        console.log('Отслеживание касания прервано системой');
    });
});

/*
Основные свойства Touch-событий:
1. touches - все активные касания экрана
2. targetTouches - касания текущего элемента
3. changedTouches - касания, участвующие в текущем событии

Каждый Touch объект содержит:
- identifier: уникальный ID касания
- pageX/pageY: координаты относительно документа
- clientX/clientY: координаты относительно viewport
- target: элемент, которого коснулись

Важные особенности:
1. Всегда используйте preventDefault() для touchmove, если реализуете свайпы/перетаскивание
2. В touchend доступны только changedTouches
3. Для мультитач-жестов обрабатывайте несколько точек в touches
4. Для лучшей производительности используйте passive: true для touch-событий,
   если не вызываете preventDefault():
   box.addEventListener('touchmove', handler, {passive: true});
*/