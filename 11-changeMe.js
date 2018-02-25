function changeMe(arr) {
    // you can only write your code here!

    for(i=0;i<arr.length;i++){ 
        
        var person = {}
        var age = 2018 - arr[i][arr[i].length-1]

        person.firstName = arr[i][0];
        person.lastName = arr[i][1];
        person.gender = arr[i][2];
        person.age = arr[i][3]
        
        if (!age || 2018 < arr[i][arr[i].length - 1]) {
            person.age = 'Invalid Birth Year'
        }else{
            person.age = age
        }

        var output = (i+1) + '.' + ' ' + person.firstName + ' ' + person.lastName + ' : '
        
        console.log(output)
        console.log(person)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""












