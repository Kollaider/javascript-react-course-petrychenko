'use strict';

// 1. Ограничения обычных чисел в JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 (корректно)
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (ошибка!)

/*
BigInt - числовой тип для работы с целыми числами произвольной длины
Особенности:
1. Создается с помощью суффикса n или функции BigInt()
2. Не может смешиваться с обычными числами без явного преобразования
3. Не поддерживает операции с Math
4. При делении округляет результат вниз
*/

// 2. Создание BigInt
const bigint = 1123482983492889420028428374829823483827492983n;
const sameBigint = BigInt('1123482983492889420028428374829823483827492983');
console.log(typeof sameBigint); // "bigint"

// 3. Основные операции
console.log(1n + 2n); // 3n
console.log(5n - 2n); // 3n
console.log(5n * 2n); // 10n
console.log(5n / 2n); // 2n (округляет вниз)
console.log(5n % 2n); // 1n
console.log(2n ** 3n); // 8n

// 4. Сравнение BigInt и Number
console.log(2n == 2); // true (нестрогое сравнение)
console.log(2n === 2); // false (разные типы)
console.log(2n > 1); // true
console.log(2n < 3); // true

// 5. Явные преобразования
let bigintNum = 1n;
let regularNum = 2;

// Преобразование перед операциями
console.log(bigintNum + BigInt(regularNum)); // 3n
console.log(Number(bigintNum) + regularNum); // 3

// 6. Особенности BigInt
try {
    console.log(Math.round(5n)); // Ошибка!
} catch (e) {
    console.error(e.message); // "Cannot convert a BigInt value to a number"
}

try {
    console.log(5n + 5); // Ошибка!
} catch (e) {
    console.error(e.message); // "Cannot mix BigInt and other types..."
}

/*
Когда использовать BigInt:
- При работе с числами > 2^53 - 1
- Для финансовых расчетов с высокой точностью
- При работе с криптографией
- Для уникальных ID или хешей

Лучшие практики:
1. Всегда явно преобразовывайте типы при смешивании BigInt и Number
2. Используйте суффикс n для больших чисел
3. Для деления используйте дополнительные проверки, если важно избежать округления
4. В TypeScript тип bigint доступен с версии 3.2
*/

// 7. Дополнительные примеры
const hugeId = 9007199254740993n; // Число за пределами SAFE_INTEGER
console.log(hugeId.toString()); // "9007199254740993" (корректно)

// Работа с бинарными операциями
console.log(5n & 3n); // 1n (битовое AND)
console.log(5n | 3n); // 7n (битовое OR)
console.log(~5n); // -6n (битовое NOT)