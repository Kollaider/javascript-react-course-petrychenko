

function fib(num) {
    let a = 0, b = 1, c = 0;
    let result = ''
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return result;
    }
    else if (num === 0) {
        return 
    }
    for (let i = 1; i <= num; i++) {
        result += `${a} `
        c = b;
        b = a + b;
        a = c;
    }
    return result.trim()
}

console.log(fib(5));
