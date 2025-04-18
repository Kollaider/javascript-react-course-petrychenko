"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const resArr = []
    const sortArr = arr.sort();
    console.log(sortArr)
    let countGroups; 
    countGroups = Math.floor(sortArr.length / 3);
    for (let i = 0; i < countGroups; i++) {
        const label = i * 3;
        resArr.push(sortArr.slice(label, label + 3 ))
    }
    const restNames = sortArr.slice(countGroups * 3);
    console.log(restNames);
    resArr.push(`Оставшиеся студенты: ${restNames.length > 0 ? restNames.join(", "): '-'}`);

    return resArr;
}

console.log(sortStudentsByGroups(students))