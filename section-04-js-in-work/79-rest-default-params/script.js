'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]

function calcOrDouble(number, basis = 2) { // es6 параметры со значением по умолчанию
    // basis = basis || 2; 
    console.log(number * basis);
}
calcOrDouble(3, 5); // 15
calcOrDouble(3); // 5 рабоатет изза basis = basis || 2;
