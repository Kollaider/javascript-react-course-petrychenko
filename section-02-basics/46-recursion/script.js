function pow(x, n) {
    let result = 1;
    
    for (let i = 0; i < n; i++)
        result *= x;
    
    return result;
}

console.log(pow(2, 5)); // 32


function powRec(x, n) {
    if ( n === 1) {
        return x;
    }
    else {
        return x * powRec(x, n -1)
    }
}

console.log(powRec(2, 5)); // 32

let students = {
    js: [{
        name: 'John',
        progress: 100
    },{
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Same',
            progress: 10
        }],
        // доп данные
        semi: [{
            name: 'Test',
            progress: 100
        }]
    }
}

function getTotalProgressByIteration(data) {
    let total = 0;
    let studentsCount = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            studentsCount += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress
            }
        } else {

            for (let subCourse of Object.values(course)) {
                studentsCount += subCourse.length;

                    for (let i = 0; i < subCourse.length; i++) {
                        total += subCourse[i].progress
                    }
                }
            }
        }

    return total / studentsCount;
}

console.log(getTotalProgressByIteration(students)) // 41.6


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length] 
    } else {
        let total = [0, 0]
        
        for (let subdata of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subdata);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        
        return total;
    }
}

result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]); // 41.6