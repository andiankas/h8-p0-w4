function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampung = 0;
    var arr = [];
    for (var i = 0; i <= angka; i++) {
        for (var j = angka; j > 0; j--) {
        
            if (i * j == angka) {
                tampung = String(i) + String(j);
                
                arr.push(tampung);
            }
        }
    }
    return arr.sort(function (value1, value2) { return value1 < value2 })[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2