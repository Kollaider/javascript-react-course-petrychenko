'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
})
// нельзя контролировать в момменте ввода текста, только после
// операция асинхронная

observer.disconnect()

// другие observer