'use strict';

let count = 0;

function deepCount(a){
    let count = a.length;
    for (let i=0; i <= a.length; i++) {
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    }
    return count;
}


function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}


console.log(deepCount([1, 5, 3])); // 3
console.log(deepCount(["1", 5, "3", ["10"]])); // 5
console.log(deepCount([1, 2, [3, 4, [5]]])) // 7
console.log(deepCount([])) // 0
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8