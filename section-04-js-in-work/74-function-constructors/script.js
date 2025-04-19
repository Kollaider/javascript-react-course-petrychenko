'use strict';

// функция является объектом

const num = new Number(3); // не рекомендуется
console.log(num);

const func = new Function(); // синтаксис устарел

// правильное использование:
// функция конструктор (использование this)
// return не нужен
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`)
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit(); // Пользователь Ivan ушел

console.log(ivan);
console.log(alex);

ivan.hello(); // 'Hello Ivan'

// в es6 появились классы, но в качестве синтаксического сахара, в отличие от других языков программирования
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}