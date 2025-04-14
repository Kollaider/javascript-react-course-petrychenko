"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (!arr.length) return 'Семья пуста';
    return `Семья состоит из: ${arr.join(' ')}`
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let newArr = []
//     arr.forEach(function(item, i) {
//         newArr[i] = item.toLowerCase();
//     })
//     return newArr;
// }
function standardizeStrings(arr) {
    arr.forEach(function(item, i) {
        console.log(item.toLowerCase())
    })
}


console.log(standardizeStrings(favoriteCities));
