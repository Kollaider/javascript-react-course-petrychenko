"use strict";

// Всплывающее окно с приветствием
alert('Hello');

// Подтверждение действия от пользователя
const result = confirm("Are you here?");
console.log(result); // true или false

// Запрос возраста у пользователя
const answer = prompt('Вам есть 18?', '18');
console.log(answer);             // Например: "18" или null
console.log(typeof(answer));    // Всегда string, даже если число

// Вся информация, приходящая от пользователя — это строка.
// Пример конкатенации строки и числа:
console.log(answer + 5);        // Например: "185", если введено "18"

// Массив с несколькими ответами от пользователя
const answers = [];
answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

console.log(answers);           // Пример: ['Nick', 'Fury', '33']

// Проверка типа null
console.log(typeof(null));      // object — это историческая особенность JS

// Можно вывести ответы прямо на страницу (не рекомендовано для продакшна)
// document.write(answers);
