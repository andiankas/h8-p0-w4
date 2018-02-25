function cariModus(arr) {
    // you can only write your code here!
    arr.sort(function (a, b) {
        return a - b;
    });

    
    for(var i=0;i<arr.length;i++){
        
        var tampung = 0;
            
        if (arr[i]== arr[i+1]) {
            tampung += arr[i]
            break;
            
        }else{
            if (arr[0] === arr[arr.length-1] ) {
                tampung = -1
            }else{
                tampung = -1
            }
        }

            // console.log(arr[i])
    }

    return tampung


}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
