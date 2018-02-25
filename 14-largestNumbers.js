function sorting(arrNumber) {
    // code di sin
    var sorti = arrNumber.sort(function (a, b) { return b - a });
    

return sorti;
}
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))

function getTotal(arrNumber) {
    
    var counter = 0;
    var angkaTerbesar = 0;

    if (arrNumber.length<1) {
        return hasil = ''
    }else{

        for(i=0;i<arrNumber.length;i++){
            // console.log(arrNumber[i])
            if (arrNumber[i]>angkaTerbesar) {
                angkaTerbesar = arrNumber[i]
            }
        }
        
        for(j=0;j<arrNumber.length;j++){
            if (arrNumber[j]==angkaTerbesar) {
                counter++
            }
        }
        return hasil = 'angka paling besar adalah '+ angkaTerbesar+ ' dan jumlah kemunculan sebanyak '+counter+' kali'

    }    
}
// console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''