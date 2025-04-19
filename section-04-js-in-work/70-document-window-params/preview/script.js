'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth; // 385 , 15px уходит на полосу прокрутки
// const height = box.clientHeight; // 335

// const width = box.offsetWidth; // 400
// const height = box.offsetHeight; // 350

const width = box.scrollWidth; // 385
const height = box.scrollHeight; // 1352

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // inline стили
    console.log(box.scrollTop);
})

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); // css стили, не можем изментяь а только получить и проверять на соответствие
console.log(style.display); // 'block'

// у document нет свойств нужно использовать documentElement
console.log(document.documentElement.clientWidth); 
console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400); // скроллинг от текущего положения вниз
window.scrollTo(0, 400); // скроллинг относительно всей страницы
