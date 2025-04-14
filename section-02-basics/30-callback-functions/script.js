"use strict";

// Пример асинхронного выполнения кода с setTimeout
function first() {
    // Функция выполняется с задержкой 500 мс
    setTimeout(function() {
        console.log(1);
    }, 500);
}

// Пример синхронного выполнения кода
function second() {
    console.log(2);
}

// Демонстрация порядка выполнения:
// сначала вызовется second(), потом first()
first();
second();

// Функция learnJS принимает язык и callback-функцию
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // Вызываем переданную функцию
}

// Именованная callback-функция
function done() {
    console.log('Я прошел этот урок');
}

// Вариант 1: передача анонимной функции как callback
learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});

// Вариант 2: передача именованной функции как callback
learnJS('JavaScript', done);

/*
Разница между вариантами:
1. Анонимная функция создается прямо в месте вызова
2. Именованная функция (done) может быть переиспользована
Результат выполнения в обоих случаях одинаковый
*/