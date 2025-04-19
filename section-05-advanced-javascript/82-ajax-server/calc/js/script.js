'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // method, url, async, login, pass
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.send();

    // свойства:
    // - status
    // - statusText
    // - response
    // - readyState

    // События
    // load
    // progress
    // readystatechange

    // request.addEventListener('readystatechange', () => {
    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "что-то пошло не так";
        }
    })

})