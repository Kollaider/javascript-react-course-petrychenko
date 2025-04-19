'use strict';

// 4 способа вызова функции

// 1
function showThis() {
    console.log(this); 
}
showThis(); //

// 1) Обычная функция: this = Window, но если 'use stirct' this = undefined

function showThis1(a, b) {
    console.log(this); 
    function sum() {
        return a + b;

    }
    console.log(sum());
}
showThis1(4,5); // 9

// 2) контекст у методов объектов это сам объект
const obj = {
    a: 10,
    b: 15,
    sum: function() {
        console.log(this);
    }
}
obj.sum(); // { a: 10, b: 15, sum: [Function: sum] }

// 3) this в конструкторах и классах это новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivn = new User('Ivan', 23)

// 4) Ручная привязка this: call, apply, bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3)); // 6
console.log(double(13)); // 26


// реальный пример
const btn = document.querySelector('button');
btn.addEventListener('click', function() { // если используем классическую фнукция, наш контекст вызвова будет сам элемент на котором произошло событие (тоже что и event.target)
    this.style.backgroundColor  = 'red';
    console.log(this); // <button></button>
})

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // у стрелочной ф-ии нету контекста, она общращается к контексту объекта
        }
        say();
    }
}

obj2.sayNumber(); // { num: 5, sayNumber: [Function: sayNumber] }


// варианты стрелочных функций
const doubleArrayFunc1 = (a) => {
    return a * 2;
}
const doubleArrayFunc2 = (a) => a * 2;
const doubleArrayFunc3 = a => a * 2;

// вернемся к примеру с button
const btn = document.querySelector('button');
btn.addEventListener('click', () => { // будет ошибка т.к. стрелочная функция не имеет своего контекста
    this.style.backgroundColor  = 'red'; // this = undefined
    console.log(this); // <button></button>
})

// исправленный код
const btn = document.querySelector('button');
btn.addEventListener('click', (event) => { // используем event.target
    event.target.style.backgroundColor  = 'red'; 
    console.log(this); // <button></button>
})