function countProfit(shoppers) {
    if (shoppers.length < 1) {
        return shoppers
    }
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
    var simpannamaspatu = [], simpannamabaju = [], simpannamasweater = []
    var totalbarang = 0, profitspatu = 0, profitbaju = 0, profitsweater = 0
    for (var j = 0; j < shoppers.length; j++) {
        if (shoppers[j]['product'] === 'Sepatu Stacattu') {
            if (listBarang[0][2] - shoppers[j]['amount'] >= 0) {
                listBarang[0][2] = listBarang[0][2] - shoppers[j]['amount']
                profitspatu = profitspatu + (shoppers[j]['amount'] * 1500000)
                simpannamaspatu.push(shoppers[j].name)
            }
        }
        else if (shoppers[j]['product'] === 'Baju Zoro') {
            if (listBarang[1][2] - shoppers[j]['amount'] >= 0) {
                listBarang[1][2] = listBarang[1][2] - shoppers[j]['amount']
                profitbaju = profitbaju + (shoppers[j]['amount'] * 500000)
                simpannamabaju.push(shoppers[j].name)
            }
        }
        else if (shoppers[j]['product'] === 'Sweater Uniklooh') {
            if (listBarang[2][2] - shoppers[j]['amount'] >= 0) {
                listBarang[2][2] = listBarang[2][2] - shoppers[j]['amount']
                profitsweater = profitsweater + (shoppers[j]['amount'] * 175000)
                simpannamasweater.push(shoppers[j].name)
            }
        }
    }

    var tampilarray = [{
        product: 'Sepatu Stacattu',
        shoppers: simpannamaspatu,
        leftOver: listBarang[0][2],
        totalProfit: profitspatu
    },
    {
        product: 'Baju Zoro',
        shoppers: simpannamabaju,
        leftOver: listBarang[1][2],
        totalProfit: profitbaju
    },
    {
        product: 'Sweater Uniklooh',
        shoppers: simpannamasweater,
        leftOver: listBarang[2][2],
        totalProfit: profitsweater
    }]
    return tampilarray
}


// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]