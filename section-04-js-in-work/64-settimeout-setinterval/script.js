const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// передача аргументов
// setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');

// использование готовой функции
// btn.addEventListener('click', () => {
//     timerId = setTimeout(logger, 500);
// })


// function logger() {
//     if (i == 3) {
//         clearInterval(timerId); // для остановки функции через уникальный индетификатор таймера
//     }
//     console.log('text'); 
//     i++;
// }
// setTimeout(logger, 2000);

// clearInterval(timerId); 
// setInterval(logger, 2000);


// рекусривынй вызов setTimeout
// код всегда будет ждать строго определенное время
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);