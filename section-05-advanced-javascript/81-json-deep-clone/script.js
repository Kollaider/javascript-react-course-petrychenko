"use strict";

const persone = {
    name: 'Alex',
    tel: '+744444444'
};

const strPersone = JSON.stringify(persone);


// получить string
console.log(strPersone); // {"name":"Alex","tel":"+744444444"} - string


// получить object
console.log(JSON.parse(strPersone)); // { name: 'Alex', tel: '+744444444' } - object

// копирование вложенных объектов

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// создается глубокая копия
const clone = JSON.parse(JSON.stringify(person));
console.log(person);

clone.parents.mom = 'Ann';
console.log(clone);
