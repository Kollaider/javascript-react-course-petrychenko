"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {  
            js: '20%',
            php: '10%'
        },
        exp: '1 month' 
    },

    showAgeAndLangs: function(obj) {
        return `Мне ${obj.age} и я владею языками: ${obj.skills.languages.join(' ').toUpperCase()}`;
    }
};

function showExperience(obj) {
    return obj.skills.exp; 
}
console.log(showExperience(personalPlanPeter)); 

function showProgrammingLangs(obj) {
    let str = ''; 
    
    for (let key in obj.skills.programmingLangs) {
        str += `Язык ${key} изучен на ${obj.skills.programmingLangs[key]}\n`;
    }
    return str; 
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));