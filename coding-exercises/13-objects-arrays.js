const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let s = 0;
    data.shops.forEach(element => {
        s += element.width * element.length;
        return s;
    });
    let v = s * data.height;
    if ( data.budget / data.v >= data.budget) {
        console.log('Бюджета достаточно');
    } else {
        console.log('Бюджета не достаточно');
    }
}

isBudgetEnough(shoppingMallData);
