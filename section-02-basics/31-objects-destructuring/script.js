"use strict";



const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.name);

// delete options.name;
// console.log(options);
// { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
    // console.log(`Свойство ${key} имеет значение ${options[key]}`)

}


// классический способ узнать количество объектов
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter);


console.log(Object.keys(options).length); // 4


const optionsWithMethod = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }

};

optionsWithMethod.makeTest(); // Test

// деструктуризация объекта

const {border, bg} = options.colors;
console.log(border, bg);


// Объекты это ...
// могут быть вложенными 
// для перебора можно использовать for in 
// есть встроенные методы и свойства
// свойства аксессоры get и set 
// деструктуризация объекта - ...