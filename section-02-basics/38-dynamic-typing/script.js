"use strict";

/**********************
 *  ПРЕОБРАЗОВАНИЕ В СТРОКУ (String)
 **********************/

// Способ 1: Использование функции String()
console.log(typeof(String(null))); // "string" - тип стал строкой
console.log(String(null));        // "null" - явное преобразование null в строку

// Способ 2: Конкатенация с пустой строкой (наиболее распространенный способ)
console.log(typeof(5 + ''));        // "string" - число преобразовано в строку
console.log(typeof(null + ''));     // "string" - null преобразован в строку
console.log(typeof(undefined + ''));// "string" - undefined преобразован в строку
// Важно: при сложении любого типа со строкой результат всегда будет строкой

// Практические примеры:
const num = 5;
console.log("http://vk.com/catalog/" + num); // "http://vk.com/catalog/5" - автоматическое преобразование числа в строку

const fontSize = 26 + 'px'; // Создание строки для CSS-свойства
console.log(fontSize);      // "26px"

/**********************
 *  ПРЕОБРАЗОВАНИЕ В ЧИСЛО (Number)
 **********************/

// Способ 1: Функция Number() (используется редко)
console.log(typeof(Number('4'))); // "number" - явное преобразование строки в число

// Способ 2: Унарный плюс (более популярный способ)
console.log(typeof(+'5')); // "number" - быстрый способ преобразования строки в число

// Способ 3: parseInt/parseFloat (для строк с дополнительными символами)
console.log(typeof(parseInt('15px'))); // "number" - извлекает целое число из строки
console.log(parseInt('15px'));         // 15
console.log(parseFloat('12.5em'));     // 12.5

// Особенность: все данные от пользователя приходят как строки
let answer = +prompt('Hello', ''); // Преобразуем введенное значение в число с помощью унарного плюса

/**********************
 *  ПРЕОБРАЗОВАНИЕ В ЛОГИЧЕСКИЙ ТИП (Boolean)
 **********************/
/*
 * Ложные (falsy) значения:
 * 0, '', null, undefined, NaN, false
 * Все остальные значения являются истинными (truthy)
 */

// Способ 1: Неявное преобразование в условии if
let switcher = null;
if (switcher) {
    console.log('Working...'); // Не выполнится, так как null - falsy
}

switcher = 1;
if (switcher) {
    console.log('Working...'); // "Working..." - выполнится, так как 1 - truthy
}

// Способ 2: Функция Boolean()
console.log(Boolean('4')); // true - любая непустая строка преобразуется в true

// Способ 3: Двойное отрицание (!!) - популярный способ
console.log(typeof(!!'44444')); // "boolean" - двойное отрицание преобразует в boolean
console.log(!!'44444');         // true
console.log(!!'');              // false - пустая строка преобразуется в false