// Место для первой задачи

function calculateVolumeAndArea(num) {
    if (Number.isInteger(num) && num > 0) {
        return `Объем куба: ${Math.pow(num, 3)}, площадь всей поверхности: ${num * num * 6}`
    }
    else {
        return 'При вычислении произошла ошибка'
    }
}
    
function getCoupeNumber(num) {
    if (isNaN(num) || !Number.isInteger(num) || num < 0) {
        return "Ошибка. Проверьте правильность введенного номера места"
    }
    else if ( num === 0 || num >= 36) {
        return"Таких мест в вагоне не существует"
    }
    else return Math.ceil(num / 4);
}
