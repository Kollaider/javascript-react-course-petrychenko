"use strict";

// 1. Основные элементы документа
console.log(document.body);       // <body> элемент
console.log(document.head);       // <head> элемент
console.log(document.documentElement); // <html> элемент (корень документа)

// 2. Навигация по DOM
console.log(document.body.childNodes); // NodeList всех дочерних узлов body

/*
Разница между DOM элементами и узлами (Nodes):
- Каждый элемент является узлом (Node.ELEMENT_NODE)
- Но не каждый узел является элементом (например, текстовые узлы, комментарии)
*/

// 3. Навигация по узлам (включая текстовые узлы и комментарии)
console.log(document.body.firstChild);  // Первый дочерний узел (может быть текстом)
console.log(document.body.lastChild);   // Последний дочерний узел

// Навигация вверх по иерархии
console.log(document.querySelector('#current').parentNode); // Родительский узел
console.log(document.querySelector('#current').parentNode.parentNode); // "Дедушка"

// Навигация между соседними узлами
console.log(document.querySelector('[data-current="3"]').previousSibling); // Предыдущий сосед
console.log(document.querySelector('[data-current="3"]').nextSibling);     // Следующий сосед

// 4. Навигация только по элементам (игнорирует текстовые узлы)
console.log(document.body.firstElementChild);  // Первый дочерний элемент
console.log(document.body.lastElementChild);    // Последний дочерний элемент

// Навигация по элементам
console.log(document.querySelector('#current').parentElement); // Родительский элемент
console.log(document.querySelector('#current').childElementCount); // Количество дочерних элементов

// Навигация между соседними элементами
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // Предыдущий элемент
console.log(document.querySelector('[data-current="3"]').nextElementSibling);     // Следующий элемент

// 5. Фильтрация узлов (пример)
for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue; // Пропускаем текстовые узлы
    }
    console.log(node); // Выводим только элементы
}

/*
Ключевые свойства для работы с узлами:
- nodeType: тип узла (1 - элемент, 3 - текст, 8 - комментарий и т.д.)
- nodeName: имя узла (для элементов - имя тега в верхнем регистре)
- nodeValue: значение узла (null для элементов, текст для текстовых узлов)
- childNodes: все дочерние узлы
- children: только дочерние элементы

Методы для работы с элементами:
- firstElementChild / lastElementChild
- previousElementSibling / nextElementSibling
- parentElement
- childElementCount
*/