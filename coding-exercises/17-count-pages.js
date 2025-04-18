'use strict';


function amountOfPages(summary){
    let str = '';
    let res = 0;
    for (let num = 1; num <=summary; num++) {
        str += num;
        if ( str.length >= summary ) {
            res = num;
            break;
        }
    }
    return res;    
}

console.log(amountOfPages(5));
