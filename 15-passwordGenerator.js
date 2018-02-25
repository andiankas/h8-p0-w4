

function changeVocals(str) {
    //code di sini
    
    
    for(i=0;i<str.length;i++){
        if (str[i]=='A') {
            console.log('B');
        } else if (str[i] == 'I') {
            console.log('J');
        } else if (str[i] == 'U') {
            console.log('V');
        } 
    }
    

}
console.log(changeVocals('Alex'))

function reverseWord(str) {
    //code di sini
    var strings = ''
    for(i=str.length-1;i>=0;i--){
        strings += str[i]
    }
    return strings
}


function setLowerUpperCase(str) {
    //code di sini
    var upper = str.toUpperCase()
    return upper
}


function removeSpaces(str) {
    //code di sini
    return str.split(' ').join('')

}


function passwordGenerator(name) {
    //code di sini
    
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'