function getTimeFromMinutes(minutes){
    if(typeof(minutes) !== "number" || minutes < 0 || !Number.isInteger(minutes)){
       return `Ошибка, проверьте данные`;
    } else{
        if(Math.floor(minutes / 60) === 1){
           return `Это 1 час и ${minutes % 60} минут`;
        } else if(Math.floor(minutes / 60) >= 5 && Math.floor(minutes / 60) <= 10 ||  Math.floor(minutes / 60) === 0){
           return `Это ${Math.floor(minutes / 60)} часов и ${minutes % 60} минут`; 
        } else if(Math.floor(minutes / 60) >= 2 && Math.floor(minutes / 60) <= 4){
           return `Это ${Math.floor(minutes / 60)} часа и ${minutes % 60} минут`;
        }
    }
} 

function findMaxNumber(a, b, c, d){
    let max = 0;
    if(typeof(a, b, c, d) !== 'number'){
       return 0;
    } else {
        return Math.max(a, b, c, d);
        } 
    } 
