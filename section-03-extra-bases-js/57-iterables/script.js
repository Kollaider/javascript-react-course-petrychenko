'use strict';

// 1. Базовые объекты для демонстрации
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const arr = ['a', 'b', 'c'];
const str = 'string';

// 2. Перебор объектов for...in
console.log('=== for...in с объектом ===');
for (const key in user) {
    if (user.hasOwnProperty(key)) { // Проверка на собственные свойства
        console.log(key, user[key]);
    }
}

/*
Особенности for...in:
- Перебирает все перечисляемые свойства (включая прототип)
- Порядок перебора не гарантирован
- Для массивов лучше использовать for...of
*/

// 3. Перебор массива for...in (не рекомендуется)
console.log('\n=== for...in с массивом ===');
for (const key in arr) {
    console.log(key, arr[key]); // 0 'a', 1 'b', 2 'c'
}

// 4. Перебор строки for...in (не рекомендуется)
console.log('\n=== for...in со строкой ===');
for (const key in str) {
    console.log(key, str[key]); // Индексы и символы
}

// 5. Правильный перебор for...of
console.log('\n=== for...of со строкой ===');
for (const value of str) {
    console.log(value); // 's', 't', 'r', 'i', 'n', 'g'
}

/*
Разница for...in vs for...of:
- for...in - перебирает ключи (индексы)
- for...of - перебирает значения
- for...of работает только с итерируемыми объектами
*/

// 6. Создание итерируемого объекта
const salaries = {
    john: 500,
    ivan: 1000,
    anna: 5000,
    sayHello: function() {
        console.log('Hello');
    },
    
    // Делаем объект итерируемым
    [Symbol.iterator]: function() {
        const values = Object.values(this).filter(v => typeof v === 'number');
        let index = 0;
        
        return {
            next() {
                return {
                    done: index >= values.length,
                    value: values[index++]
                };
            }
        };
    }
};

// 7. Использование итератора
console.log('\n=== Итерация по salaries ===');
for (const salary of salaries) {
    console.log(salary); // 500, 1000, 5000
}

// 8. Ручное использование итератора
console.log('\n=== Ручная итерация ===');
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next()); // {value: 500, done: false}
console.log(iterator.next()); // {value: 1000, done: false}
console.log(iterator.next()); // {value: 5000, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

/*
Ключевые концепции:
1. Итерируемый объект - имеет метод [Symbol.iterator]
2. Итератор - объект с методом next(), возвращающий {done, value}
3. for...of автоматически использует итератор
4. Встроенные итерируемые объекты: Array, String, Map, Set и др.
*/

// 9. Пример более сложного итератора
const range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        let current = this.from;
        const last = this.to;
        
        return {
            next() {
                return {
                    done: current > last,
                    value: current <= last ? current++ : undefined
                };
            }
        };
    }
};

console.log('\n=== Range итерация ===');
for (const num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}