'use strict';


function isPangram(string) {

    const aCode = 'a'.charCodeAt(),
          zCode = 'z'.charCodeAt();
    let count = 0;
    
    for (let ch of string) {
        const chCode = ch.charCodeAt();
        if (aCode <= chCode && chCode <= zCode) {
            count++;
        }
    }
    return count >= 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));










// function isPangram(string) {
//     let alfabet = "abcdefghijklmnopqrstuvwxyz";
//     let newSort = string.replace(/\s+/g, '').toLowerCase().split('').sort();
//     let newStr = Array.from(new Set(newSort)).join("");
//     if (alfabet === newStr) {
//        return  true;
//     } else {
//         return false;
//     }
// }